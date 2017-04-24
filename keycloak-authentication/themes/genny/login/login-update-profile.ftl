<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false; section>
    <#if section = "title">
        ${msg("loginProfileTitle")}
    <#elseif section = "header">
        ${msg("loginProfileTitle")}
    <#elseif section = "form">
        <a id="kc-back-to-login" class="text-underline" href="${url.loginUrl}">${msg("backToLogin")}</a>
        <h4 class="m-t-md m-b-xl">${msg("loginProfileTitle")}</h4> 
        <form id="kc-update-profile-form" class="${properties.kcFormClass!}" action="${url.loginAction}" method="post">
            <#if user.editUsernameAllowed>
                <div class="floating-label-wrap m-b-md">
                    <input type="text" data-value="${(user.username!'')?html}" id="username" name="username" value="${(user.username!'')?html}" class="form-control">
                    <label for="username" class="${properties.kcLabelClass!}">${msg("username")}</label>
                </div>
            </#if>
            <div class="floating-label-wrap m-b-md">
                <input type="text" data-value="${(user.email!'')?html}" id="email" name="email" value="${(user.email!'')?html}" class="form-control">
                <label for="email" class="${properties.kcLabelClass!}">${msg("email")}</label>
            </div>

            <div class="floating-label-wrap m-b-md">
                <input type="text" data-value="${(user.firstName!'')?html}" id="firstName" name="firstName" value="${(user.firstName!'')?html}" class="form-control">
                <label for="firstName" class="${properties.kcLabelClass!}">${msg("firstName")}</label>
            </div>

            <div class="floating-label-wrap m-b-md">
                <input type="text" data-value="${(user.lastName!'')?html}" id="lastName" name="lastName" value="${(user.lastName!'')?html}" class="form-control">
                <label for="lastName" class="${properties.kcLabelClass!}">${msg("lastName")}</label>
            </div>

            <div id="kc-form-button-login" class="${properties.kcFormButtonsClass!}">
                    <input class="btn btn-primary pull-right" type="submit" value="${msg("doSubmit")}">
            </div>
        </form>
    </#if>
</@layout.registrationLayout>