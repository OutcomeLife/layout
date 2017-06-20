import defaultConfig from '../config';

const initialState = {
  fetching: false,
  fetched:false,
  error:null,
  user:{},
  config:{...defaultConfig},
  logo:null,
  keycloak:{},
  baseEntities:[],
  attribute:{},
  asks:[],
  messageFromServer: null
  
}
export default function reducer(state=initialState,action) {

  switch(action.type){
    case "CREATE_USER_PENDING":{
      return {...state,fetching:true};      
    }
    case "CREATE_USER_REJECTED":{
      return {...state,fetching:false,error:action.payload};      
    }
    case "CREATE_USER_FULFILLED":{
      return {...state,fetching:false,fetched:true,user:action.payload} ;    
    }
    case "FETCH_USER_PENDING":{
      return {...state,fetching:true};      
    }
    case "FETCH_USER_REJECTED":{
      return {...state,fetching:false,error:action.payload};      
    }
    case "FETCH_USER_FULFILLED":{
      return {...state,fetching:false,fetched:true,user:action.payload} ;    
    }
    case "INIT_FULLFILLED": {
      return {...state, keycloak: action.payload.keycloak, user: action.payload.project.user, logo:action.payload.project.logo}
    }
    case "CONFIG_FULLFILLED": {
      return {...state, config:action.payload}
    }
    case "CONFIG_REJECTED": {
      return{...state, err: action.payload}
    }
    case "BASEENTITIES_FULLFILLED": {
      return{...state, baseEntities:action.payload}
    }
    case "ASKS_FULLFILLED": {
      return { ...state, attribute: action.payload }
    }
    default:
      return state;
    }
    
  }