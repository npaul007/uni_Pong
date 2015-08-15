
pongStream = new Meteor.Stream('pong');
if(Meteor.isServer) {
  pongStream.permissions.read(function() {
    return true;
  });

  pongStream.permissions.write(function() {
    return true;
  });
}
