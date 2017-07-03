import store from '../store';
import * as API from '../utils/apiList';
import * as actions from './actionTypes';

export function logout() {
    return dispatch => {
      //  store.setup.keycloak.logout({ redirectUri: API.redirectUri });
      //  dispatch({ type: actions.LOGOUT_SUCCESS, payload : true });
    }
}

export function account() {
    return dispatch => {
     //   store.setup.keycloak.accoutManagement({ redirectUri: API.redirectUri });
     //   dispatch({ type: actions.ACCOUNT_REDIRECT_SUCCESS, payload: true });
    }
}

export function redirectUrl(url) {
    return dispatch => {
        console.log("this is redirect url", url);
        window.location.href = url;
    }
}
