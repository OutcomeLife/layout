<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
<#if section = "title">
  ${msg("eventLoginErrorSubject")}
<#elseif section = "content">
  ${msg("eventLoginErrorBodyHtml",event.date,event.ipAddress)}
</#if>
</@layout.registrationLayout>