import axios from 'axios';
import defaultConfig from '../config';
import Keycloak from 'keycloak-js';
import md5 from 'js-md5';

export function registerUser(email,password) {

//for api call dispatching action so that we can show the user loading event
	return function(dispatch){

		dispatch({type:"CREATE_USER_PENDING",payload:null});

		axios({
			url: '',
			method: 'post',
			baseURL: defaultConfig.redirectURI,
			data: {
				email,
				password
			},
			headers: {}
		}).then( (response) => {
			dispatch({type:"CREATE_USER_FULFILLED",payload:response.data});
		}).catch( (error) => {
			dispatch({type:"CREATE_USER_REJECTED",payload:error});
		});

	}	
}

export function fetchUser(email,password) {

	return function(dispatch){

		dispatch({type:"FETCH_USER_PENDING",payload:null});

		axios({
			url: 'user/login',
			method: 'post',
			baseURL: defaultConfig.baseURL,
			data: {
				email,
				password
			},
			headers: {}
		}).then( (response) => {
			console.log(response);
			dispatch({type:"FETCH_USER_FULFILLED",payload:response.data});
		}).catch( (error) => {
			dispatch({type:"FETCH_USER_REJECTED",payload:error});
		});

	}

	
}

export function init(config) {
	return function(dispatch){
	const kc = Keycloak();
			kc.init({ onLoad: 'login-required' })
				.success((authenticated) => {
					if (authenticated) {
					const projectDetails = (project) =>  {
							const payload = {
									keycloak: kc,
									project
								}	
										dispatch({type:"INIT_FULLFILLED",payload:payload});
						}
						loadUserInfo(kc, config, projectDetails);
						
					}
					else {
						console.log("user could not authenticated");
					}

				})
				.error(function (err) {
					console.log('failed to initialize');

				})		
	}
}

export function config(config) {
	return function(dispatch){
	console.log("Fetching genny.json file - 3");
      axios
        .get("/genny.properties.json")
        .then((result) => {     
				dispatch(({type: 'CONFIG_FULLFILLED', payload:result.data}));
			})
			.catch((err) => {
				dispatch({type: "CONFIG_REJECTED", payload: err})
			})
	}
}

export function loadUserInfo(keycloak, config, projectDetails) {
		keycloak.loadUserInfo()
						.success((user) => {
							md5(user.email);
							const hash = md5.create();
							hash.update(user.email);
							hash.hex();
							const imgUrl = 'https://www.gravatar.com/avatar/' + hash;
							let projectName = config.REACT_APP_PROJECT_NAME;
							if(projectName === undefined ) {
								projectName = keycloak.realm;
							}
              const project = {
								logo: projectName,
								user : {
                image: imgUrl,
                name: user.given_name
								}
              }
							console.log("loaduserInfo project", project);
						projectDetails(project);
						})
            .error((err) => {
							
            });

}