// import EventBus from 'vertx3-eventbus-client';

// var eb = new EventBus("http://localhost:8081/myapp/");

// eb.onopen = function() {
//   // set a handler to receive a message
//   eb.registerHandler('this.is.address.outbound', function(err, message) {  
//       if (err) {
//           console.log(err);
//     }
//     console.log('layout: ', JSON.stringify(message.body));
//   });
// }
// export const callServer = () => {
//  eb.publish('this.is.address.inbound', {"query":"{person{name }}"});
// }


