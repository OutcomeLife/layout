<#macro mainLayout active bodyClass panel=true>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">


    <title>${msg("accountManagementTitle")}</title>
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico">
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link href="${url.resourcesPath}/${style}" rel="stylesheet">
        </#list>
    </#if>
    <#if properties.scripts?has_content>
        <#list properties.scripts?split(' ') as script>
            <script type="text/javascript" src="${url.resourcesPath}/${script}"></script>
        </#list>
    </#if>
</head>
<body>
    <div class="boxed-wrapper">
        
        <div id="header">
            <div class="header-link hide-menu hidden-sm hidden-md hidden-lg">
                <i class="fa fa-bars"></i>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div id="kc-logo"><img src="${url.resourcesPath}/img/logo.svg" alt="Abacus logo"></div>
            </div>
            <div class="col-sm-6 col-xs-6 text-right hidden-xs">
                <a class="btn btn-sm btn-default" href="${url.logoutUrl}">${msg("doSignOut")}</a>
                <#if realm.internationalizationEnabled>
                <div class="kc-locale pull-right">
                    <div class="kc-locale-wrapper">
                            <div class="kc-locale-dropdownkc-dropdown">
                                <a href="#" class="kc-current-locale-link">${locale.current}</a>
                                <ul>
                                    <#list locale.supported as l>
                                        <li class="kc-dropdown-item"><a href="${l.url}">${l.label}</a></li>
                                    </#list>
                                </ul>
                            </div>
                    </div>
                </div>
                </#if>
            </div>
        </div>

        <aside id="menu">
            <div id="navigation">
                <ul class="nav" id="side-menu">
                     <li class="<#if active=='account'>active</#if>"><a href="${url.accountUrl}">${msg("account")}</a></li>
                        <#if features.passwordUpdateSupported><li class="<#if active=='password'>active</#if>"><a href="${url.passwordUrl}">${msg("password")}</a></li></#if>
                        <#if !properties.hideAuthenticator?has_content || properties.hideAuthenticator!='true' >
                        <li class="<#if active=='totp'>active</#if>"><a href="${url.totpUrl}">${msg("authenticator")}</a></li>
                        </#if>
                        <#if features.identityFederation><li class="<#if active=='social'>active</#if>"><a href="${url.socialUrl}">${msg("federatedIdentity")}</a></li></#if>
                        <li class="<#if active=='sessions'>active</#if>"><a href="${url.sessionsUrl}">${msg("sessions")}</a></li>
                        <li class="<#if active=='applications'>active</#if>"><a href="${url.applicationsUrl}">${msg("applications")}</a></li>
                        <#if features.log><li class="<#if active=='log'>active</#if>"><a href="${url.logUrl}">${msg("log")}</a></li></#if>
                </ul>
                <div id="side-menu-bis" class="hidden-sm hidden-md hidden-lg hidden-xl">
                <a href="${url.logoutUrl}">${msg("doSignOut")}</a>
                <#if realm.internationalizationEnabled>
                <div class="kc-locale pull-left">
                    <div  class="kc-locale-wrapper">
                            <div class="kc-dropdown kc-locale-dropdown">
                                <a href="#" class="kc-current-locale-link">${locale.current}</a>
                                <ul>
                                    <#list locale.supported as l>
                                        <li class="kc-dropdown-item"><a href="${l.url}">${l.label}</a></li>
                                    </#list>
                                </ul>
                            </div>
                    </div>
                </div>
                </#if>
                </div>
            </div>
        </aside>

        <div id="wrapper">

            <div class="normalheader">
                <#nested "header">
            </div>

            <div class="content animate-panel">
                <div class="row">
                    <div class="col-md-12">
                        <#if panel>
                        <div class="hpanel">
                            <div class="panel-body">
                        </#if>
                                <#if message?has_content>
                                    <div class="alert alert-${message.type}">
                                        <#if message.type=='success' ><span class="pficon pficon-ok"></span></#if>
                                        <#if message.type=='error' ><span class="pficon pficon-error-octagon"></span><span class="pficon pficon-error-exclamation"></span></#if>
                                        ${message.summary}
                                    </div>
                                </#if>

                                <#nested "content">
                        <#if panel>
                            </div>
                        </div>
                        </#if>
                    </div>
                </div>
            </div>

            <footer class="footer">
                &copy; <a href="https://www.abacus.ch/" target="_blank">Abacus Research AG</a>
            </footer>

        </div>
    </div>
</body>
</html>
</#macro>