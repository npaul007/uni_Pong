Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/pong',{name:'game'});
Router.route('/register',{name:'register'});
Router.route('/',{name:'login'});