import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Keycloak from 'keycloak-js';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

const kc = Keycloak('./keycloak.json');

 kc.init({ onLoad: 'login-required' }).success(function (authenticated) {
      kc.loadUserInfo().success((user) =>  alert("Welcome " + user.given_name + " to genny"));
          console.log(kc);
    }).error(function () {
      alert('failed to initialize');
    });
    
      console.log(kc);