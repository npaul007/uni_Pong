Template.login.events({
	'click .register-link-button':function(event,t){
		event.preventDefault();
		Router.go('register')
	},
	'click .login-button':function(event){
		event.preventDefault();

		var email = $('#email').val();
		var password = $('#password').val();

		Meteor.loginWithPassword(email,password,function(error){
			if(error){
				showInvalid();
				console.log(error);
			}else{
				hideInvalid();
				Router.go('dashboard');
			}
		});
	}
});

function showInvalid(){
	var invalid = $('#invalid');
	invalid.show();
}

function hideInvalid(){
	var invalid = $('#invalid');
	invalid.hide();
}

Template.login.rendered = function(){
	Meteor.logout();
}