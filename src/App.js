import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer} from './entry';
import Keycloak from 'keycloak-js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
		this.state =({
			keycloak:{},
			user:{
				image:'./images/user.png',
				name:'sam'
			},
			logo:'logo'
		})
		this._getContent = this._getContent.bind(this);
}
componentWillMount(){
	const kc = Keycloak(process.env.REACT_APP_KEYCLOAK_JSON_FILE);
	kc.init({ onLoad: 'login-required' })
		.success((authenticated) => {
				if(authenticated){
						this.setState({keycloak:kc})
						this.state.keycloak.loadUserInfo().success((user) => this.setState({logo:kc.realm,	user:{ image:'./images/user.png', name:user.given_name }}));
						}
						else {
							console.log("user could not authenticated");
						}
							
						})
					 .error(function (err) {
								console.log('failed to initialize');
						
							})			  
}
_getContent () {
	var { token } = this.state.keycloak;
	console.log(token);

	axios({
		url:'time/now',
		method:'get',
		baseURL: 'http://qwanda-service.outcome-hub.com/',
		data: {},
		headers : {'Authorization':`Bearer ${token}`}
	}).then( () => {
		console.log('completed the authorization step');
	}).catch(error => {
		console.log(error);
	})
}

  render(){
		var { keycloak, user, logo } = this.state;
    return (
    	<div className="intern">
    	<Header logo={logo} user={user} keycloak={keycloak}/>
    	<Body >
    		<Sidebar>

    		</Sidebar>
    		<Content>
    	<button onClick={this._getContent}>Get Content </button>
    		</Content>
    	</Body>
    	<Footer >
        Version No:{process.env.REACT_APP_VERSION_NUMBER} ||| Build Date: {process.env.REACT_APP_BUILD_DATE}
    	</Footer>
    	</div>
    );
    }
  }

export default App;

