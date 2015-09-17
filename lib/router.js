Router.configure({
	layoutTemplate: 'layout'
});

var requireLogin = function(){
	if(!Meteor.userId()){
		this.render('login');
	}else{
		this.next();
	}

}

Router.route('/dash', {name:'dashboard',onBeforeAction:requireLogin});
Router.route('/register',{name:'register'});
Router.route('/',{name:'login'});
Router.route('/thankyou',{name:'thankyouReg'});
Router.route('/char',{name:'characterSelect'});
Router.route('/multi',{name:'multiplayer'});

