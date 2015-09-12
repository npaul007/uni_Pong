Template.navbar.events({
	'click #logout-button':function(){
		Meteor.logout();
		Router.go('login');
	}
});

Template.navbar.helpers({
  nickname:function(){
   return Meteor.user().profile.nickname;
  }
});
