lobbyThree = new Meteor.Stream('l3');
if(Meteor.isServer) {
  lobbyThree.permissions.read(function() {
    return true;
  });

  lobbyThree.permissions.write(function() {
    return true;
  });
}
