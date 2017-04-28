import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Keycloak from 'keycloak-js';

const kc = Keycloak(process.env.REACT_APP_KEYCLOAK_JSON_FILE);

 var success = kc.init({ onLoad: 'login-required' })
					.success((authenticated) => {
						if(authenticated){
							console.log("authenticated");
						}
						else {
							console.log("user could not authenticated");
						}

						})
					 .error(function (err) {

							});

	window.kc = kc;


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
