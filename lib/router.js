Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/pong',{name:'game'});
Router.route('/register',{name:'register'});
Router.route('/',{name:'login'});
Router.route('/thankyou',{name:'thankyouReg'});
Router.route('/dash', {name:'dashboard'});
Router.route('/multi',{name:'multiplayer'});
Router.route('/hs',{name:'leaderboard'});
Router.route('/lobbys',{name:'lobbylist'});
Router.route('l1');
Router.route('l2');
Router.route('l3');