<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo; section>
    <#if section = "title">
        ${msg("loginTitle",(realm.displayName!''))}
    <#elseif section = "header">
        ${msg("loginTitleHtml",(realm.displayNameHtml!''))}
    <#elseif section = "form">
        <#if realm.password>
            <#if client??>
            <h4 class="m-t-md m-b-xl"><#if client.name??>${msg('pleaseLogIntoClient', client.name)}<#else>${msg('pleaseLogIntoClient', client.clientId)}</#if></h4>
            <#else>
            <h4 class="m-t-md m-b-xl">${msg('pleaseLogIn')}</h4>
            </#if>
            <form id="kc-form-login" class="m-t-xl" action="${url.loginAction}" method="post">
                <div class="floating-label-wrap m-b-md">
                        <#if usernameEditDisabled??>
                            <input id="username" data-value="${(login.username!'')?html}" class="form-control" name="username" value="${(login.username!'')?html}" type="text" disabled>
                        <#else>
                            <input id="username" data-value="${(login.username!'')?html}" class="form-control" name="username" value="${(login.username!'')?html}" type="text" autofocus autocomplete="off">
                        </#if>
                        <label for="username"><#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if></label>
                </div>

                <div class="floating-label-wrap">
                        <input id="password" data-value class="form-control" name="password" type="password" autocomplete="off">
                        <label for="password">${msg("password")}</label>
                </div>

                <div id="kc-form-options" class="m-b-lg">
                    <#if realm.rememberMe && !usernameEditDisabled??>
                        <div class="checkbox">
                                <#if login.rememberMe??>
                                    <input id="rememberMe" name="rememberMe" type="checkbox" tabindex="3" checked>
                                <#else>
                                    <input id="rememberMe" name="rememberMe" type="checkbox" tabindex="3"> 
                                </#if>
                                <label for="rememberMe">
                                    ${msg("rememberMe")}
                                </label>
                        </div>
                    </#if>
                </div>

                <div id="kc-form-submit" class="row">
                    <div id="kc-form-button-login" class="col-md-6 col-sm-6 col-xs-6">
                            <input class="btn btn-primary pull-right" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}">
                     </div>
                    <div id="kc-form-button-password" class="col-md-6 col-sm-6 col-xs-6 text-left">
                        <#if realm.resetPasswordAllowed>
                            <a id="kc-forgot-password" class="text-underline" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
                        </#if>
                    </div>
                 </div>
            </form>
        </#if>
    <#elseif section = "info" >

        <#if realm.password && social.providers??>
            <div id="kc-social-providers">
                    <#list social.providers as p>
                        <a href="${p.loginUrl}" id="zocial-${p.alias}" class="btn btn-default btn-block text-left ${p.providerId}"> <span class="text-left">${msg('signWith')} ${p.displayName}</span></a>
                    </#list>
            </div>
        </#if>
        <#if realm.password && realm.registrationAllowed && !usernameEditDisabled??>
            <div id="kc-registration">
               <span>${msg("noAccount")} <a href="${url.registrationUrl}" class="text-underline">${msg("doRegister")}</a></span>
            </div>
        </#if>
    </#if>
</@layout.registrationLayout>
