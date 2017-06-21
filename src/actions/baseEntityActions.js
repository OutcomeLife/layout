// import axios from 'axios';
import baseEntities from '../config/baseEntities';
import * as actions from './actionTypes';
// import attributes from '../config/attributes';
 import asks from '../config/ask';

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

export function load() {
	return function (dispatch) {
		dispatch(({ type: actions.BASEENTITIES_LOAD_SUCCESS, payload: baseEntities }));
	}
}

export function getAsks() {
	let element = [];
	 asks.forEach((ask) => {
		element = ask;
	});
	return function (dispatch) {
		dispatch(({ type: actions.as, payload: element }));
	}
}
