Template.navbar.events({
	'click #logout-button':function(){
		Meteor.logout();
		window.location.href='../';
	},
	'click #multiplayer-redirect':function(){
		window.location.href = "../multi";
	},
	'click #dashboard-redirect':function(){
		window.location.href  = "../dash";
	}
});

Template.navbar.helpers({
  nickname:function(){
   return Meteor.user().profile.nickname;
  }
});
