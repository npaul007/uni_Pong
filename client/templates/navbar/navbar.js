Template.navbar.events({
	'click #logout-button':function(){
		Meteor.logout();
		window.location.href='../'
	}
});

Template.navbar.rendered = function(){
 
}