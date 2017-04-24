<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
<#if section = "title">
  ${msg("identityProviderLinkSubject")}
<#elseif section = "content">
  ${msg("identityProviderLinkBodyHtml", realmName, identityProviderAlias, identityProviderContext.username)}
<#elseif section = "contentAfter">
  ${msg("identityProviderLinkBodyHtmlAfter", linkExpiration, identityProviderAlias, identityProviderContext.username)}
</#if>
</@layout.registrationLayout>