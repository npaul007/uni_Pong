lobbyOne = new Meteor.Stream('l1');
if(Meteor.isServer) {
  lobbyOne.permissions.read(function() {
    return true;
  });

  lobbyOne.permissions.write(function() {
    return true;
  });
}
