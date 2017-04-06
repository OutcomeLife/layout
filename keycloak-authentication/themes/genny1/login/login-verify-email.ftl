<#import "template.ftl" as layout>
<@layout.registrationLayout onlyPanel=true; section>
    <#if section = "title">
        ${msg("emailVerifyTitle")}
    <#elseif section = "header">
        ${msg("emailVerifyTitle")}
    <#elseif section = "form">
        <i class="alert-icon pe-7s-attention"></i>
        <h2 class="alert-title">
        ${msg("emailVerifyTitle")}</h2>
        
        <p class="alert-instruction-lg">
            <#if message?has_content>
            ${message.summary}
            </#if>
            ${msg("emailVerifyInstruction1")}
        </p>
        <p class="alert-instruction-md">
            ${msg("emailVerifyInstruction2")} <a class="text-underline" href="${url.loginEmailVerificationUrl}">${msg("doClickHere")}</a> ${msg("emailVerifyInstruction3")}
        </p>
    </#if>
</@layout.registrationLayout>