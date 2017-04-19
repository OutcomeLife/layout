<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false; section>
    <#if section = "title">
        ${msg("updatePasswordTitle")}
    <#elseif section = "header">
        ${msg("updatePasswordTitle")}
    <#elseif section = "form">
        <h4 class="m-t-md m-b-xl">${msg("updatePasswordTitle")}</h4> 
        <form id="kc-passwd-update-form" class="${properties.kcFormClass!}" action="${url.loginAction}" method="post">
            <input type="text" readonly value="this is not a login form" style="display: none;">
            <input type="password" readonly value="this is not a login form" style="display: none;">

            <div class="floating-label-wrap m-b-md">
                    <input type="password" data-value id="password-new" name="password-new" class="form-control" autofocus autocomplete="off" required>
                    <label for="password-new">${msg("passwordNew")}</label>
            </div>

            <div class="floating-label-wrap m-b-md">
                    <input type="password" data-value id="password-confirm" name="password-confirm" class="form-control" autocomplete="off" required>
                    <label for="password-confirm">${msg("passwordConfirm")}</label>
            </div>

            <div id="kc-form-button-login" class="${properties.kcFormButtonsClass!}">
                    <input class="btn btn-primary pull-right" type="submit" value="${msg("doSubmit")}">
            </div>
        </form>
    </#if>
</@layout.registrationLayout>