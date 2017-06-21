import * as actions from '../actions/actionTypes';
const initialState = {
  baseEntities:[],
  attribute:{},
  asks:[],  
}
export default function reducer(state=initialState,action) {

  switch(action.type){
    case actions.BASEENTITIES_LOAD_SUCCESS: {
      return{...state, baseEntities:action.payload}
    }
    case actions.ASKS_LOAD_SUCCESS: {
      return { ...state, attribute: action.payload }
    }
    default:
      return state;
    }
    
  }