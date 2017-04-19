<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
<#if section = "title">
  ${msg("passwordResetSubject")}
<#elseif section = "content">
  ${msg("passwordResetBodyHtml", realmName)}
<#elseif section = "contentAfter">
  ${msg("passwordResetBodyHtmlAfter", linkExpiration)}
</#if>
</@layout.registrationLayout>
