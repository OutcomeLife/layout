import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer } from './entry';
import Keycloak from 'keycloak-js';
import axios from 'axios';
import md5 from 'js-md5';
//import env from '../genny.properties';
class App extends Component {

	constructor() {
		super();

		this.state = ({
			keycloak: {},
			user: {
				image: './images/user.png',
				name: 'Genny'
			},
			logo: 'logo',
			config: {}
		})
		this._getContent = this._getContent.bind(this);
	}


	componentWillMount() {
console.log("Fetching genny.json file - 2");
var _this = this;
    this.serverRequest = 
      axios
        .get("/genny.properties.json")
        .then(function(result) {   
         var result2 = result.data.replace(/\\/g,""); 
       console.log("result",result2);
          _this.setState({
            config: JSON.parse(result2)
          });
        })

     console.log("config2:",this.state.config);
		const kc = Keycloak(process.env.REACT_APP_KEYCLOAK_JSON_FILE);
		
		kc.init({ onLoad: 'login-required' })
			.success((authenticated) => {
				if (authenticated) {
					this.setState({ keycloak: kc })
					this.state.keycloak.loadUserInfo()
						.success((user) => {
							// if ('adamcrow63+1@gmail.com'.includes("+")) {
							// 	var n = 'adamcrow63+1@gmail.com'.indexOf('+');
							// 	var at = 'adamcrow63+1@gmail.com'.indexOf('@');
							// 	var email = 'adamcrow63+1@gmail.com'.substr(0, n) + 'adamcrow63+1@gmail.com'.substr(at);
							// 	alert(email);
							// }
							md5(user.email);
							//md5('adamcrow63@gmail.com');
							const hash = md5.create();
							//hash.update('adamcrow63@gmail.com');
							hash.update(user.email);
							hash.hex();
							const imgUrl = 'https://www.gravatar.com/avatar/' + hash;
							//alert(imgUrl);
							let projectName = this.state.config.REACT_APP_PROJECT_NAME;
							if(projectName === undefined ) {
								projectName = kc.realm;
							}
							this.setState({ logo: projectName, user: { image: imgUrl, name: user.given_name } })
						});
				}
				else {
					console.log("user could not authenticated");
				}

			})
			.error(function (err) {
				console.log('failed to initialize');

			})
	}
	_getContent() {
		var { token } = this.state.keycloak;
		console.log(token);

		axios({
			url: '/qwanda/setup',
			method: 'get',
			// baseURL: 'https://qwanda-service.outcome-hub.com',
			baseURL: this.state.config.REACT_APP_QWANDA_API_URL,
			data: {},
			headers: { 'Authorization': `Bearer ${token}` }
		}).then((success) => {
			alert('completed the authorization step with data ');
			console.log(success.data);
		}).catch(error => {
			alert(error);
		})
	}

	render() {
		var { keycloak, user, logo } = this.state;
		console.log("Build Date: ", this.state.config.REACT_APP_BUILD_DATE);
		console.log("API Url: ", this.state.config.REACT_APP_QWANDA_API_URL);
		console.log("Project Name :", this.state.config.REACT_APP_PROJECT_NAME);
		return (
			<div className="intern">
				<Header logo={logo} user={user} keycloak={keycloak} />
				<Body >
					<Sidebar>

					</Sidebar>
					<Content>
						<button onClick={this._getContent}>Get Content </button>
					</Content>
				</Body>
			<Footer >
					Version No:{this.state.config.REACT_APP_VERSION_NUMBER} ||| Build Date: {this.state.config.REACT_APP_BUILD_DATE}
				</Footer>
			</div>
		);
	}

}

export default App;

