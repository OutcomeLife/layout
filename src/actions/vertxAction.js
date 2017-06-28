import EventBus from 'vertx3-eventbus-client';
var eb = new EventBus("http://localhost:8081/eventbus/");

export function receiveMessage() {
    return dispatch => {
        eb.onopen = () => {
            eb.registerHandler('address.outbound', (err, message) => {
                if (err) {
                    console.log(err);
                }
                if(message.body.msg_type === 'CMD_MSG') {
                    //responsible for getting command to do something
                    dispatch({ type: "MESSAGE_FROM_SERVER_FULLFILLED", payload: message.body });

                } else if (message.body.msg_type === 'DATA_MSG') {
                    //responsible for changing data 
                }
                
            });
        }
    }
}


export function sendEvent(id, code) {
    // const baseURL = (process.env.NODE_ENV === "development") ? "http://qwanda-service.outcome-hub.com" : "https://qwanda-service.outcome-hub.com";

    const data =
        {
            // 'msg_type': 'EVT_MSG',
            'event_type': 'BUTTON_CLICK',
            'data':
            {
                'code': code,
                'id': 1234
            }

        }
    return dispatch => {
        eb.publish("address.inbound", { data });


    }
}
