#Rewuirements
1. java sdk 
2. Jboss 
3. create a user management account in wildfly server

#To setup user in wildfly
1. cd into bin 
2. execute `./add-user.bat` and create a user management account
3. cd into adapter/bin 
4. execute `./adapter-install-offline.cli`

#Project Setup Instructions 
1. cd into keycloak-authentication
2. run `docker-compose up`
3. cd back to root directory 
4. run `yarn start`
5. goto localhost:3000 then login using credentials or goto keycloak admin panel using localhost:990 then create user account for       yourself. 
6. localhost:9990 for keycloak admin panel username: admin password: admin
