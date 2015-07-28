Template.login.events({
	'click .register-link-button':function(event,t){
		event.preventDefault();
		window.location.href ='../register'
	},
	'click .login-button':function(event,t){
		event.preventDefault();

		var email = t.find('#email').value;
		var password = t.find('#password').value;

		Meteor.loginWithPassword(email,password,function(error){
			if(error){
				showInvalid();
			}else{
				window.location.href= "../pong"
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