Template.navbar.events({
	'click #logout-button':function(){
		Meteor.logout();
		window.location.href='../';
	},
	'click #multi-button':function(){
		window.location.href = "../lobbys";
	},
	'click #cpu-button':function(){
		window.location.href  = "../dash";
	}
});

Template.navbar.helpers({
  nickname:function(){
   return Meteor.user().profile.nickname;
  }
});
