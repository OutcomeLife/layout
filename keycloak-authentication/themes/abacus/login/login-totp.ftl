<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false; section>
    <#if section = "title">
        ${msg("loginTitle",realm.displayName)}
    <#elseif section = "header">
        ${msg("loginTitleHtml",realm.displayNameHtml)}
    <#elseif section = "form">
        <form action="${url.loginAction}" method="post"><input class="text-underline btn-link" name="cancel" id="kc-back-to-login" type="submit" value="${msg("backToLogin")}"></form>
        <h4 class="m-t-md m-b-xl">${msg("loginTitle",realm.displayName)}</h4> 
        <form id="kc-totp-login-form" action="${url.loginAction}" method="post">
            <div class="floating-label-wrap m-b-md">
                <input id="totp" data-value name="totp" autocomplete="off" type="text" class="form-control" autofocus>
                <label for="totp">${msg("loginTotpOneTime")}</label>
            </div>
            <div id="kc-form-button-login">
                <input class="btn btn-primary" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}">
            </div>
        </form>
    </#if>
</@layout.registrationLayout>