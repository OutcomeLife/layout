<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
<#if section = "title"  >
  ${msg("executeActionsSubject")}
<#elseif section = "content">
  ${msg("executeActionsBodyHtml", realmName)}
<#elseif section = "contentAfter">
  ${msg("executeActionsBodyHtmlAfter", linkExpiration)}
</#if>
</@layout.registrationLayout>