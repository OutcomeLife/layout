<#import "template.ftl" as layout>
<@layout.mainLayout active='sessions' bodyClass='sessions' panel=false; section>

    <#if section = "header">
        <h2>${msg("sessionsHtmlTitle")}</h2>
    <#elseif section = "content">
    <div class="table-responsive">
    <table class="table table-panel table-striped table-bordered">
        <thead>
        <tr>
            <th>${msg("ip")}</th>
            <th>${msg("started")}</th>
            <th>${msg("lastAccess")}</th>
            <th>${msg("expires")}</th>
            <th>${msg("clients")}</th>
        </tr>
        </thead>

        <tbody>
        <#list sessions.sessions as session>
            <tr>
                <td>${session.ipAddress}</td>
                <td>${session.started?datetime}</td>
                <td>${session.lastAccess?datetime}</td>
                <td>${session.expires?datetime}</td>
                <td>
                    <#list session.clients as client>
                        ${client}<br/>
                    </#list>
                </td>
            </tr>
        </#list>
        </tbody>

    </table>
    </div>
    <a id="logout-all-sessions" class="text-underline" href="${url.sessionsLogoutUrl}">${msg("doLogOutAllSessions")}</a>
    </#if>

</@layout.mainLayout>
