Template.login.events({
	'click .register-link-button':function(event,t){
		event.preventDefault();
		Router.go('register')
	},
	'click .login-button':function(event,template){
		event.preventDefault();

		var email = template.find("#email").value;
		var password = template.find('#password').value;


		Meteor.loginWithPassword(email,password,function(error){
			if(error){
				showInvalid();
				console.log(error);
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
	if(Meteor.userId()){
		Router.go('/dash');
	}
}