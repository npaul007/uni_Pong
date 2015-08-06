Template.leaderboard.helpers({
  users:function(){
  	var wins = Meteor.users.findOne().profile.wins;
  	var losses = Meteor.users.findOne().profile.losses;
  	var games = wins+losses;
  	var winningPercentage = wins/games;
  	Meteor.users.update({_id:Meteor.userId()},{$set:{"profile.pct":winningPercentage}});
    var profile = Meteor.users.find({},{sort:{"profile.pct":-1}})
    return profile;
  }
});

Meteor.users.deny({
  insert: function (userId, doc) {
  	return false;
  },
  update: function (userId, doc, fields, modifier) {
  	return false;
  },
  remove: function (userId, doc) {
 	return false;
  }
});



