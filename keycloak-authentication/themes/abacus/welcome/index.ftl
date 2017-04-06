<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Abacus</title>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">
</head>
<body>
<div class="wrapper">
    <div class="content">
        <#if successMessage?has_content>
            <p>${successMessage}</p>
        <#elseif errorMessage?has_content>
            <p class="error">${errorMessage}</p>
        <#elseif bootstrap>
            <#if localUser>
                <p>Please create an initial admin user to get started.</p>
            <#else>
                <p>
                    You need local access to create the initial admin user. Open <a href="http://localhost:8080/auth">http://localhost:8080/auth</a>
                    or use the add-user-keycloak script.
                </p>
            </#if>
        </#if>

        <#if bootstrap && localUser>
            <form method="post">
                <p>
                    <label for="username">Username</label>
                    <input id="username" name="username" />
                </p>

                <p>
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" />
                </p>

                <p>
                    <label for="passwordConfirmation">Password confirmation</label>
                    <input id="passwordConfirmation" name="passwordConfirmation" type="password" />
                </p>

                <input id="stateChecker" name="stateChecker" type="hidden" value="${stateChecker}" />

                <button id="create-button" type="submit">Create</button>
            </form>
        </#if>
    </div>
</div>
</body>
</html>
