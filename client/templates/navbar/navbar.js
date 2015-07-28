Template.navbar.events({
	'click #logout-button':function(){
		Meteor.logout();
		window.location.href='../'
	}
});