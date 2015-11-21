Template.register.events({
	'click .registration-submit-button':function(event){
		event.preventDefault();

		var sent = false;

		var email = $('#email').val();
		var password = $('#password').val();
		var nickname = $('#nickname').val();

		Accounts.createUser({
			username:email,
			password:password,
			profile:{
				nickname:nickname,
				wins:0,
				losses:0,
				pct:0
			}
		});

		Meteor.logout();  

		sent = true;

		if(sent){
			window.location.href ='../thankyou'
		}
	}
});
