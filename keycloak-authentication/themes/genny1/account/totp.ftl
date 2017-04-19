<#import "template.ftl" as layout>
<@layout.mainLayout active='totp' bodyClass='totp' panel=false; section>

    <#if section = "header">
        <h2>${msg("authenticatorTitle")}</h2>
    <#elseif section = "content">

    <#if totp.enabled>
    <div class="table-responsive">
    <table class="table table-panel table-bordered table-striped">
        <thead>
            <tr>
                <th colspan="2">${msg("configureAuthenticators")}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="provider">${msg("mobile")}</td>
                <td class="action width-40"><a id="remove-mobile" href="${url.totpRemoveUrl}" class="btn btn-danger"><i class="fa fa-times"></i></a></td>
            </tr>
        </tbody>
    </table>
    </div>
    <#else>


    <div class="hpanel">
    <div class="panel-body panel-body--padding-reset">
        <h3 class="panel-body__title">1 ${msg("totpStep1Title")}</h3>
        <div class="panel-body__content">
            <p>${msg("totpStep1")}</p>
        </div>

        <h3 class="panel-body__title">2 ${msg("totpStep2Title")}</h3>
        <div class="panel-body__content">
            <p>${msg("totpStep2")}</p>
            <p><img class="img-thumbnail" src="data:image/png;base64,${totp.totpSecretQrCode}" alt="Figure: Barcode"></p>
            <p><span class="code">${totp.totpSecretEncoded}</span></p>
        </div>

        <h3 class="panel-body__title">3 ${msg("totpStep3Title")}</h3>
        <div class="panel-body__content">
            <p>${msg("totpStep3")}</p>

            <form action="${url.totpUrl}" class="form-horizontal" method="post">
                <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker?html}">
                <div class="form-group">
                    <div class="col-sm-2 col-md-2">
                        <label for="totp" class="control-label">${msg("authenticatorCode")}</label>
                    </div>
                    <div class="col-sm-10 col-md-10">
                        <input type="text" class="form-control" id="totp" name="totp" autofocus autocomplete="off">
                        <input type="hidden" id="totpSecret" name="totpSecret" value="${totp.totpSecret}" />
                    </div>
                </div>

                <div class="form-group text-right">
                    <div id="kc-form-buttons" class="col-md-offset-2 col-md-10 submit">
                        <button type="submit" class="btn btn-primary pull-right m-l-sm" name="submitAction" value="Save">${msg("doSave")}</button>
                        <button type="submit" class="btn btn-default" name="submitAction" value="Cancel">${msg("doCancel")}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
    </#if>
    </#if>
</@layout.mainLayout>
