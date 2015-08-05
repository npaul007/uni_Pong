Game = new Meteor.Collection("game");


if(Meteor.users.find().count() === 0){
	Accounts.createUser({
		email:"splash@GSW.com",
		password:"password",
		profile:{
			nickname:"Chef Curry",
			wins:4,
			losses:2
		}
	});

	Accounts.createUser({
		email:"starkt@avengers.com",
		password:"password",
		profile:{
			nickname:"Iron Man",
			wins:5,
			losses:1
		}
	});

	Accounts.createUser({
		email:"pimpman313@prositution.com",
		password:"passwprd",
		profile:{
			nickname:"Thug Daddy",
			wins:2,
			losses:4
		}
	});
}


