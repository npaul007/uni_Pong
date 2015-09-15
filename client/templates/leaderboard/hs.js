Template.leaderboard.helpers({
  users:function(){
    var profile = Meteor.users.find({},{sort:{"profile.pct":-1}});
    return profile;
  }
});




