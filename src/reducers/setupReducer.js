import * as actions from '../actions/actionTypes';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    user: {
        name: "prakash",
        image: "./images/user.png"
    },
    config: { },
    logo: "Logo",
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.KEYCLOAK_INIT_SUCCESS: {
            return { ...state, user: action.payload.user, logo: action.payload.logo }
        }
        case actions.CONFIGFILE_LOAD_SUCCESS: {
            return { ...state, config: action.payload }
        }
        case actions.CONFIGFILE_LOAD_FAILED: {
            return { ...state, err: action.payload }
        }
        default:
            return state;
    }
}

