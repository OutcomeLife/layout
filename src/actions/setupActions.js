// import axios from 'axios';
import defaultConfig from '../config';
import Keycloak from 'keycloak-js';
import md5 from 'js-md5';
import * as actions from './actionTypes';
import getProperties from '../utils/asyncHelper';

export function init(config) {
    return function (dispatch) {
        const kc = Keycloak();
        kc.init({ onLoad: 'login-required' })
            .success((authenticated) => {
                if (authenticated) {
                    const projectDetails = (project) => {
                        dispatch({
                            type: actions.KEYCLOAK_INIT_SUCCESS, 
                            payload: project
                        });
                    }
                    loadUserInfo(kc, config, projectDetails);
                } else {
                    console.log("user could not authenticated");
                }
            })
            .error(function (err) {
                console.log('failed to initialize');
            })
    }
}

export function config() {
    return function (dispatch) {
        getProperties()
            .then((result) => {
                dispatch(({ type: actions.CONFIGFILE_LOAD_SUCCESS, payload: result.data }));
            })
            .catch((err) => {
                dispatch({ type: actions.CONFIGFILE_LOAD_FAILED, payload: err })
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
            const imgUrl = `https://www.gravatar.com/avatar/${hash}`;
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
            projectDetails(project);
        })
        .error((err) => {
	console.log(err);
        });
}

