import axios from 'axios';
import defaultConfig from '../config';
import Keycloak from 'keycloak-js';
import md5 from 'js-md5';
import baseEntities from '../config/baseEntities';
import attributes from '../config/attributes';
import asks from '../config/ask';
import * as VertxActions from './VertxAction';

export function init(config) {
	return function (dispatch) {
		const kc = Keycloak();
		kc.init({ onLoad: 'login-required' })
			.success((authenticated) => {
				if (authenticated) {
					const projectDetails = (project) => {
						const payload = {
							keycloak: kc,
							project
						}
						dispatch({ type: "INIT_FULLFILLED", payload: payload });
					}
					loadUserInfo(kc, config, projectDetails);
					// loadBaseEntities(kc);
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
	return function (dispatch) {
		axios
			.get("/genny.properties.json")
			.then((result) => {
				dispatch(({ type: 'CONFIG_FULLFILLED', payload: result.data }));
			})
			.catch((err) => {
				dispatch({ type: "CONFIG_REJECTED", payload: err })
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
			let projectName;
			if (config.REACT_APP_PROJECT_NAME !== undefined) {
				projectName = keycloak.realm;
			} else {
				projectName = defaultConfig.REACT_APP_PROJECT_NAME;
			}
			const project = {
				logo: projectName,
				user: {
					image: imgUrl,
					name: user.given_name
				}
			}
			// console.log("loaduserInfo project", project);
			projectDetails(project);
		})
		.error((err) => {

		});

}

// export function loadBaseEntities(kc) {
// 	const baseURL = (process.env.NODE_ENV === "development") ? "http://qwanda-service.outcome-hub.com" : "https://qwanda-service.outcome-hub.com";
// 	return function (dispatch) {
// 	axios({
// 		method:"get",
// 		headers: {
// 			'Authorization' : `Bearer ${kc.token}`
// 		},
// 		url: "/qwanda/baseentitys",
// 		baseURL: baseURL,	
// 	})
// 	.then((response) => {
// 		// console.log(response.data);
// 		dispatch(({ type: 'BASEENTITIES_FULLFILLED', payload: response.data }));
// 	})
// 	.catch ((error) => {
// 		 console.log("error fetching baseEntities", error);
// 	})
// 	}
// }

export function loadBaseEntities() {
	return function (dispatch) {
		dispatch(({ type: 'BASEENTITIES_FULLFILLED', payload: baseEntities }));
	}
}


export function getAsks() {
	let element = [];
	const asks = asks.forEach((ask) => {
		element = ask;
	})
	return function (dispatch) {
		dispatch(({ type: 'ASKS_FULLFILLED', payload: element }));
	}
}
