Template.leaderboard.helpers({
  users:function(){
    var profile = Meteor.users.find({},{sort:{"profile.pct":-1}});
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



