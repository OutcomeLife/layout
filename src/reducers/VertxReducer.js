const initialState = {
    messageFromServer: null
}

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case 'MESSAGE_FROM_SERVER_FULLFILLED' : 
            return { ...state, messageFromServer: action.payload }
         default: 
            return { ...state}
        
    }
}
