chatStream = new Meteor.Stream('chat');
 
if(Meteor.isClient) {
  sendChat = function(message) {
    chatStream.emit('message', message);
    console.log('me: ' + message);
  };
 
  chatStream.on('message', function(message) {
    console.log('user: ' + message);
  });

}

