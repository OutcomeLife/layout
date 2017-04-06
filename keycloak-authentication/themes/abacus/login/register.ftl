<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false; section>
    <#if section = "title">
        ${msg("registerWithTitle",(realm.displayName!''))}
    <#elseif section = "header">
        ${msg("registerWithTitleHtml",(realm.displayNameHtml!''))}
    <#elseif section = "form">
        <a id="kc-back-to-login" class="text-underline" href="${url.loginUrl}">${msg("backToLogin")}</a>
        <h4 class="m-t-md m-b-xl">${msg("createAccount")}</h4>
        <form id="kc-register-form" class="${properties.kcFormClass!}" action="${url.registrationAction}" method="post">
          <input type="text" readonly value="this is not a login form" style="display: none;">
          <input type="password" readonly value="this is not a login form" style="display: none;">
          <#if !realm.registrationEmailAsUsername>
                <div class="floating-label-wrap">
                    <input type="text" id="username" data-value="${(register.formData.username!'')?html}" class="form-control" name="username" value="${(register.formData.username!'')?html}" required autofocus>
                    <label for="username" class="${properties.kcLabelClass!}">${msg("username")}</label>
                </div>
          </#if>
                <div class="floating-label-wrap">
                    <input type="text" id="firstName" data-value="${(register.formData.firstName!'')?html}" class="form-control"  name="firstName" value="${(register.formData.firstName!'')?html}" required autofocus>
                    <label for="firstName" class="${properties.kcLabelClass!}">${msg("firstName")}</label>
                </div>

                <div class="floating-label-wrap">
                    <input type="text" id="lastName" data-value="${(register.formData.lastName!'')?html}" class="form-control"  name="lastName" value="${(register.formData.lastName!'')?html}" required>
                    <label for="lastName" class="${properties.kcLabelClass!}">${msg("lastName")}</label>
                </div>

                <div class="floating-label-wrap">
                    <input type="email" id="email" data-value="${(register.formData.email!'')?html}" class="form-control" name="email" value="${(register.formData.email!'')?html}" required>
                    <label for="email" class="${properties.kcLabelClass!}">${msg("email")}</label>
                </div>

            <#if passwordRequired>
                <div class="floating-label-wrap">
                    <input type="password" id="password"  data-value class="form-control" name="password" required>
                    <label for="password" class="${properties.kcLabelClass!}">${msg("password")}</label>
                </div>

                <div class="floating-label-wrap">
                    <input type="password" id="password-confirm" data-value class="form-control" name="password-confirm" required>
                    <label for="password-confirm" class="${properties.kcLabelClass!}">${msg("passwordConfirm")}</label>
                </div>
            </#if>



            <div id="kc-form-submit" class="row m-t-xl">
                <#if recaptchaRequired??>
                <div class="col-md-6 col-sm-6 col-xs-6">
                        <div class="g-recaptcha" data-size="normal" data-sitekey="${recaptchaSiteKey}"></div>
                </div>
                </#if>
                <div id="kc-form-button-login" class="col-md-6 col-sm-6 col-xs-6 m-t-sm">
                    <input class="btn btn-primary pull-right" type="submit" value="${msg("doRegister")}"/>
                </div>
             </div>
        </form>
    </#if>
</@layout.registrationLayout>