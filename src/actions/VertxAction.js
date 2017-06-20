import EventBus from 'vertx3-eventbus-client';
var eb = new EventBus("http://localhost:8081/eventbus/");

export function sendEvent(id, code) {
    console.log("send event fired");
    const baseURL = (process.env.NODE_ENV === "development") ? "http://qwanda-service.outcome-hub.com" : "https://qwanda-service.outcome-hub.com";
    const data = {
        'msg_type': 'EVT_MSG',
        'evt_type': 'TREEVIEW_CLICK',
        'data': [{
            'code': code,
            'id': id
        }]
    }
    return dispatch => {
        eb.registerHandler('address.outbound', (err, message) => {
            if (err) {
                console.log(err);
            }
           dispatch({ type: "MESSAGE_FROM_SERVER_FULLFILLED", payload: JSON.stringify(message.body) });
        });
        eb.publish("address.inbound", { "data": data });
        console.log("calling send event");
    }
}