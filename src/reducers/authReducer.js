import * as actions from '../actions/actionTypes';

const initialState = {
    logout: false,
    account: false
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGOUT_SUCCESS: {
            return { ...state, logout:action.payload }
        }
        case actions.ACCOUNT_REDIRECT_SUCCESS: {
            return { ...state, account: action.payload }
        }
        default:
            return state;
    }
}
