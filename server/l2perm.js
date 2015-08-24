lobbyTwo = new Meteor.Stream('l2');
if(Meteor.isServer) {
  lobbyTwo.permissions.read(function() {
    return true;
  });

  lobbyTwo.permissions.write(function() {
    return true;
  });
}
