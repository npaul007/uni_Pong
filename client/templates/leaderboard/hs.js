Template.leaderboard.helpers({
  users:function(){
    var profile = Meteor.users.find();
    return profile;
  }
})




