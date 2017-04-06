(function() {
    $(document).ready(function() {
        $(".floating-label-wrap .form-control").on("input", function() {
            $(this).attr("data-value", $(this).val());
        });
        setTimeout(function() {
            $(".floating-label-wrap .form-control").each(function() {
                if($(this).val()!='') {
                    $(this).attr("data-value", $(this).val());
                }
            });
        }, 100);
    });
    $(document).on('click', function() {
        $('.kc-locale.hover').removeClass('hover');
    })
    $(document).on("click", ".kc-current-locale-link", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.kc-locale').first().toggleClass('hover');
    });
})();
