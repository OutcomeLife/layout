import EventBus from 'vertx3-eventbus-client';
import * as actions from './actionTypes';
var eb = new EventBus("http://localhost:8081/eventbus/");

export function receiveMessage() {
  return dispatch => {
     eb.onopen = () => {
      eb.registerHandler('address.outbound', (err, message) => {
        if (err) {
          console.log(err);
        }
        console.log(message.body);
        switch(message.body.msg_type) {
          case 'DATA_MSG':
            dispatch({
              type: actions.DATA_FROM_SERVER_FULLFIELD,
              payload: message.body
            });
            break;
          case 'CMD_MSG':
            dispatch({
              type: actions.CMD_FROM_SERVER_FULLFIELD,
              payload: message.body
            });
            break;
          case 'EVT_MSG':
            dispatch({
              type: actions.EVT_FROM_SERVER_FULLFIELD,
              payload: message.body
            });
            break;
          default:
          //have to do default action
            dispatch({
              type: actions.DATA_FROM_SERVER_FULLFIELD,
              payload: message.body
            });
            break;
        }

      });
     }
  }
}
export function sendInitialEvent(token) {
  const data = {
    'data': {
    'code' : token
  },
    'msg_type': 'EVT_MSG',
    'event_type': 'INITIAL_LAYOUT'
  
  };

  return dispatch => {
    eb.publish("address.inbound", {
      data
    });
  }
}

export function sendEvent(id, code, value,evtType) {
  // const baseURL = (process.env.NODE_ENV === "development") ? "http://qwanda-service.outcome-hub.com" : "https://qwanda-service.outcome-hub.com";
  const data = {
    'data': {
      'code': code,
      'id': id,
      'value': value
    },
    'msg_type' : 'EVT_MSG',
    'event_type': evtType
  }
  return dispatch => {
    eb.publish("address.inbound", {
      data
    });
  }
}

//this function is called when the answer is send back to the vertx
export function sendAnswer(item, value) {
  let Answer = {
    items: [],
    "data_type": "Answer",
    "delete": false,
    "msg_type": "DATA_MSG"
  };
  let eachItem = {};
  for (var i = 0; i < Object.keys(value).length; i++) {
     eachItem = {
      created: new Date().toLocaleString(),
      value: value[item.question.code],
      attributeCode: item.question.attribute.code,
      targetCode: 22,
      sourceCode: 20,
      expired: false,
      refused: false,
      weight: 0.5
    };
     Answer.items.push(eachItem);
  }
  
  console.log("Answer", Answer);
  return dispatch => {
    eb.publish("address.inbound", {
      data: Answer
    });
  }
}
