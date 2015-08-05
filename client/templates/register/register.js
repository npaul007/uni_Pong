Template.register.events({
	'click .registration-submit-button':function(event,t){
		event.preventDefault();

		var sent = false;

		var email = t.find('#email').value;
		var password = t.find('#password').value;
		var nickname = t.find('#nickname').value;

		Accounts.createUser({
			email:email,
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

Template.register.rendered = function(){

}