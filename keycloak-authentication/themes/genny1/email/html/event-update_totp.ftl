<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
<#if section = "title">
  ${msg("eventUpdateTotpSubject")}
<#elseif section = "content">
    ${msg("eventUpdateTotpBodyHtml",event.date, event.ipAddress)}
</#if>
</@layout.registrationLayout>