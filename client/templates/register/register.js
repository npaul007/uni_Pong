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
			nickname:nickname
		});

		var to = t.find('#email').value;
		var from = 'npaulemon@gmail.com';
		var subject = 'WELCOME TO UNI-PONG';
		var text = 'Welcome to UNI-PONG '+ nickname;

		Meteor.call('sendEmail',
          to,
          from,
          subject,
          text);     

		sent = true;
		alert('Message sent');

		if(sent){
			window.location.href ='../thankyou'
		}
	}
});

Template.register.rendered = function(){

}