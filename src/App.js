import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer} from './entry';
import Keycloak from 'keycloak-js';
import Profile from './Profile';
// import './flatly.css';

class App extends Component {
  constructor() {
    super();
		this.state =({
			keycloak:{},
			user:{
				image:'images/user.png',
				name:'sam'
			},
			logo:'logo'
		})

}

// componentDidMount(){
// const kc = Keycloak(process.env.REACT_APP_KEYCLOAK_JSON_FILE);
// window.kc = kc;
//
//  var success = kc.init({ onLoad: 'login-required' })
// 					.success((authenticated) => {
// 						if(authenticated){
// 							this.setState({keycloak:kc})
// 							this.state.keycloak.loadUserInfo().success((user) => this.setState({logo:this.state.keycloak.realm,	user:{ image:'images/user.png', name:user.given_name }}));
// 						}
// 						else {
// 							console.log("user could not authenticated");
// 						}
//
// 						})
// 					 .error(function (err) {
// 								//alert('failed to initialize');
//
// 							});
// }


  render(){
		var { keycloak, user, logo } = this.state;
    return (
    	<div className="intern">
    	<Header logo={logo} user={user} keycloak={keycloak}/>
    	<Body >
    		<Sidebar>

					<a href="#" >Roles </a>

					<a href="#" >Message </a>

					<a href="#" >Contact </a>

					<a href="#" >Admin </a>

    		</Sidebar>
    		<Content>
    		<Profile keycloak={keycloak}/>
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
