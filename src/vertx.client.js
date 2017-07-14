
import EventBus from 'vertx3-eventbus-client';

var eb = new EventBus("http://192.168.64.7:8081/eventbus/");

eb.onopen = function() {
  // set a handler to receive a message
  eb.registerHandler('address.outbound', function(err, message) {  
      if (err) {
          console.log(err);
    }
    //   window.serverData = JSON.stringify(message.body);
     console.log('layout: ', JSON.stringify(message.body));
  });
}

export function callServer(data){
 eb.publish('address.inbound', {"data":data});
}


