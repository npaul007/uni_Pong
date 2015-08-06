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
		var player = Meteor.users.find();
		return player;
	}
});