<#import "template.ftl" as layout>
<@layout.mainLayout active='social' bodyClass='social'; section>

   <#if section = "header">
        <h2>${msg("federatedIdentitiesHtmlTitle")}</h2>
    <#elseif section = "content">

    <form action="${url.passwordUrl}" class="form-horizontal" method="post">
        <#list federatedIdentity.identities as identity>
            <div class="form-group">
                <div class="col-sm-2 col-md-2 text-right">
                    <label for="${identity.providerId!}" class="control-label">${identity.displayName!}</label>
                </div>
                <div class="col-sm-10 col-md-10">
                    <div class="input-btn-absolute">
                    <input disabled class="form-control" value="${identity.userName!}">
                    <#if identity.connected>
                        <#if federatedIdentity.removeLinkPossible>
                            <a href="${identity.actionUrl}" type="submit" id="remove-${identity.providerId!}" class="btn btn-danger btn-block-sm">${msg("doRemove")}</a>
                        </#if>
                    <#else>
                        <a href="${identity.actionUrl}" type="submit" id="add-${identity.providerId!}" class="btn btn-primary btn-block-sm">${msg("doAdd")}</a>
                    </#if>
                    </div>
                </div>
            </div>
        </#list>
    </form>
    </#if>

</@layout.mainLayout>