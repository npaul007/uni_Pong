Template.navbar.events({
	'click #logout-button':function(){
		Meteor.logout();
		window.location.href='../'
	}
});

Template.navbar.helpers({
	nickname:function(){
		var player = Meteor.users.find();
		return player;
	}
});