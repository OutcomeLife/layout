<#import "template.ftl" as layout>
<@layout.mainLayout active='password' bodyClass='password'; section>

     <#if section = "header">
        <h2>${msg("changePasswordHtmlTitle")}</h2>
    <#elseif section = "content">

    <form action="${url.passwordUrl}" class="form-horizontal" method="post">
        <input type="text" readonly value="this is not a login form" style="display: none;">
        <input type="password" readonly value="this is not a login form" style="display: none;">

        <#if password.passwordSet>
            <div class="form-group">
                <div class="col-sm-2 col-md-2 text-right">
                    <label for="password" class="control-label">${msg("password")}</label>
                </div>

                <div class="col-sm-10 col-md-10">
                    <input type="password" class="form-control" id="password" name="password" autofocus autocomplete="off">
                </div>
            </div>
        </#if>

        <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker?html}">

        <div class="form-group">
            <div class="col-sm-2 col-md-2 text-right">
                <label for="password-new" class="control-label">${msg("passwordNew")}</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="password" class="form-control" id="password-new" name="password-new" autocomplete="off">
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-2 col-md-2 text-right">
                <label for="password-confirm" class="control-label" class="two-lines">${msg("passwordConfirm")}</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="password" class="form-control" id="password-confirm" name="password-confirm" autocomplete="off">
            </div>
        </div>

        <div class="form-group">
            <div id="kc-form-buttons" class="col-md-offset-2 col-md-10 submit">
                <div class="text-right">
                    <button type="submit"  class="btn btn-primary" name="submitAction" value="Save">${msg("doSave")}</button>
                </div>
            </div>
        </div>
    </form>
    </#if>

</@layout.mainLayout>