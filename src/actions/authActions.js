import store from '../store';
import * as API from '../utils/apiList';
import * as actions from './actionTypes';

export function logout() {
    alert("logout");
    return dispatch => {
        store.setup.keycloak.logout({ redirectUri: API.redirectUri });
        dispatch({ type: actions.LOGOUT_SUCCESS, payload : true });
    }
}

export function account() {
    return dispatch => {
        store.setup.keycloak.accoutManagement({ redirectUri: API.redirectUri });
        dispatch({ type: actions.ACCOUT_REDIRECT_SUCCESS, payload: true });
    }
}

// export default { logout, account};