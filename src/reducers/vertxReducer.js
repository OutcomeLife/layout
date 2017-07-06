import * as actions from '../actions/actionTypes';
const initialState = {
    messageFromServer: null,
    data:{},
    cmd:{},
    evt:{}
}

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case actions.DATA_FROM_SERVER_FULLFIELD: 
            return { ...state, data: action.payload }
        case actions.CMD_FROM_SERVER_FULLFIELD:
            return {...state, cmd: action.payload}
        case actions.EVT_FROM_SERVER_FULLFIELD:
            return { ...state, evt: action.payload }
         default: 
            return { ...state}
        
    }
}
