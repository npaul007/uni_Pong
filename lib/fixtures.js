Game = new Meteor.Collection("game");

Meteor.users.allow({
	fetch:['profile.nickname']
});

if(Meteor.users.find().count() === 0){
	var wins = 4;
	var losses = 2;
	var total = wins + losses;
	var pct = (wins/total);
	pct *=100;
	Accounts.createUser({
		email:"splash@GSW.com",
		password:"password",
		profile:{
			nickname:"Chef Curry",
			wins:wins,
			losses:losses,
			pct:pct
		}
	});

	wins = 5;
	losses = 1;
	total = wins + losses;
	pct = (wins/total);
	pct *=100;
	Accounts.createUser({
		email:"starkt@avengers.com",
		password:"password",
		profile:{
			nickname:"Iron Man",
			wins:wins,
			losses:losses,
			pct:pct
		}
	});

	wins = 2;
	losses = 4;
	total = wins + losses;
	pct = (wins/total);
	pct *=100;
	Accounts.createUser({
		email:"pimpman313@prositution.com",
		password:"passwprd",
		profile:{
			nickname:"Thug Daddy",
			wins:wins,
			losses:losses,
			pct:pct
		}
	});

	wins = 4;
	losses = 0;
	total = wins + losses;
	pct = (wins/total);
	pct *=100;
	Accounts.createUser({
		email:"mongo@meteor.com",
		password:"password",
		profile:{
			nickname:"Mongo Man",
			wins:wins,
			losses:losses,
			pct:pct
		}
	});
}


