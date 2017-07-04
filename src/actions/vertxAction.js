import EventBus from 'vertx3-eventbus-client';
var eb = new EventBus("http://localhost:8081/eventbus/");

export function receiveMessage() {
  return dispatch => {
    eb.onopen = () => {
      eb.registerHandler('address.outbound', (err, message) => {
        if (err) {
          console.log(err);
        }
        console.log("from server", message.body);
        // if(message.body.msg_type === 'CMD_MSG') {
        //responsible for getting command to do something
        dispatch({
          type: "MESSAGE_FROM_SERVER_FULLFILLED",
          payload: message.body
        });

        // } else if (message.body.msg_type === 'DATA_MSG') {
        //responsible for changing data 
        // }

      });
    }
  }
}


export function sendEvent(id, code, value) {
  // const baseURL = (process.env.NODE_ENV === "development") ? "http://qwanda-service.outcome-hub.com" : "https://qwanda-service.outcome-hub.com";

  const data = {
    // 'msg_type': 'EVT_MSG',
    'event_type': 'BUTTON_CLICK',
    'data': {
      'code': code,
      'id': id,
      'value': value
    }

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
      value: value,
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
