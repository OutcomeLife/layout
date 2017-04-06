<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
<#if section = "title">
  ${msg("emailVerificationSubject")}
<#elseif section = "content">
  ${msg("emailVerificationBodyHtml", realmName)}
<#elseif section = "contentAfter">
  ${msg("emailVerificationBodyHtmlAfter", linkExpiration)}
</#if>
</@layout.registrationLayout>

