Template.login.events({
	'click .register-link-button':function(event,t){
		event.preventDefault();
		Router.go('register')
	},
	'click .login-button':function(event,t){
		event.preventDefault();

		var email = t.find('#email').value;
		var password = t.find('#password').value;

		Meteor.loginWithPassword(email,password,function(error){
			if(error){
				showInvalid();
			}else{
				Router.go('dashboard');
			}
		});
	}
});

function showInvalid(){
	var invalid = $('#invalid');
	invalid.show();
}

Template.login.rendered = function(){
	Meteor.logout();
}