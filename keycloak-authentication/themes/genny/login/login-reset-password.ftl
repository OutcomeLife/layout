<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false; section>
    <#if section = "title">
        ${msg("emailForgotTitle")}
    <#elseif section = "header">
        ${msg("emailForgotTitle")}
    <#elseif section = "form">
        <a id="kc-back-to-login" class="text-underline" href="${url.loginUrl}">${msg("backToLogin")}</a>
        <h4 class="m-t-md m-b-xl">${msg("emailForgotTitle")}</h4> 
        <form id="kc-reset-password-form" class="${properties.kcFormClass!}" action="${url.loginAction}" method="post">
            <div class="floating-label-wrap m-b-md">
                <input type="text" data-value id="username" name="username" class="form-control" autofocus>
                <label for="username"><#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if></label>
                <span class="help-block m-b-none">${msg("emailInstruction")}</span>
            </div>

            <div id="kc-form-button-login" class="${properties.kcFormButtonsClass!}">
                <input class="btn btn-primary pull-right" type="submit" value="${msg("doSubmit")}">
            </div>
        </form>
    <#elseif section = "info" >
    </#if>
</@layout.registrationLayout>
