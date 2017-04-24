import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Keycloak from 'keycloak-js';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

const kc = Keycloak(process.env.REACT_APP_KEYCLOAK_JSON_FILE);

 kc.init({ onLoad: 'login-required' }).success(function (authenticated) {
      kc.loadUserInfo().success((user) =>  alert("Welcome " + user.given_name + " to genny"));
          console.log(kc);
    }).error(function (err) {
      alert('failed to initialize');
      console.log("failed to initialize error", err);
    });

      console.log(kc);
