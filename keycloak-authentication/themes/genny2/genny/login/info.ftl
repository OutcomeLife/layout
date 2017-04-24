<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false onlyPanel=true; section>
    <#if section = "title">
        ${message.summary}
    <#elseif section = "header">
        ${message.summary}
    <#elseif section = "form">
        <i class="alert-icon pe-7s-check m-b-md"></i>

        <p class="alert-instruction-lg">
            ${message.summary}
        </p>
        <#if skipLink??>
        <#else>
            <#if pageRedirectUri??>
                <p class="alert-instruction-md"><a href="${pageRedirectUri}">${msg("backToApplication")}</a></p>
            <#elseif client.baseUrl??>
                <p class="alert-instruction-md"><a href="${client.baseUrl}">${msg("backToApplication")}</a></p>
            </#if>
        </#if>
    </#if>
</@layout.registrationLayout>