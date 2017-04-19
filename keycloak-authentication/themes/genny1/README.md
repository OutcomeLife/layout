## Abacus cloud template

Abacus-cloud-template is use for the keycloak theme with those following resources :

* bower_components/fontawesome/css/font-awesome.css
* bower_components/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css
* bower_components/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.css
* bower_components/bootstrap-sass/assets/stylesheets/

All is concatenated in /common/resources/css/application.min.css.
Rest of generic styles are writen in /common/resrouces/css/abacus-keycloak.css

## Welcome theme

Add the welcomeTheme entry in the standalone file to enable the welcome abacus theme (blank page).
(If the server is running you need to restart the server for the changes to the welcome theme to take effect.)

```xml
<theme>
    ...
    <welcomeTheme>abacus</welcomeTheme>
</theme>
```