Template.dashboard.rendered = function(){

	$('.leaderboard').hide();
	$('#charSel').hide();

	var game = false;
	var leaderboardShown = false;
	var charSelectShown = false;

	var p1Up = false;
	var p1Down = false;

	var p2Up = false;
	var p2Down = false;

	var p1Score = 0;
	var p2Score = 0;

	var play = "Press 'P' to Play!/Pause";
	var win;

	var wins;
	var losses;
	var games;

	var winningScore = 10;

	var on = true;

	var normal = document.getElementById('tnormal');
	var up = document.getElementById('tup');
	var down = document.getElementById('tdown');
	var kickup = document.getElementById('tkup');
	var kickdown = document.getElementById('tkdown');

	var kup = false;
	var kdown = false;

	var switchSpriteCounter = 0;

	setTimeout(actionPerformed,10);

	function Ball(x,y,width,height,xVel,yVel){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.xVel = xVel;
		this.yVel = yVel;
		this.collision = function(){
			if(this.x > 330){
				this.xVel *= -1;
				p1Score++;
				restart();
			}

			else if(this.x < 0){
				this.xVel *= -1;
				p2Score++;
				restart();
			}

			else if(this.y < 0){
				this.yVel *= -1;
			}

			else if(this.y > 150){
				this.yVel *= -1;
			}
		}
		this.animate = function(){
			this.x+=this.xVel;
			this.y+=this.yVel;
		}
	}

	function Paddle(x,y,xVel,yVel){
		this.x = x;
		this.y = y;
		this.width = 6;
		this.height = 20;
		this.xVel = xVel;
		this.yVel = yVel;
		this.animate = function(){
			this.x+=this.xVel;
			this.y+=this.yVel;
		}
	}

	function restart(){
		ball.x = 120;
		ball.y =  50;

		p1.y = 60;
		p2.y = p1.y;

		if(ball.xVel<0)
			ball.xVel = -2;
		else
			ball.xVel = 2

		if(ball.yVel < 0)
			ball.yVel = -1;
		else
			ball.yVel = 1;
	}

	var ball = new Ball(120,50,3,3,2,1);
	var p1 = new Paddle(5,60,0,0);
	var p2 = new Paddle(288,60,0,0);

	p1.width = 35;
	p1.height = 40;

	function actionPerformed(){
		if(on){
			
			var canvas = document.getElementById('myCanvas');
			var ctx = canvas.getContext('2d');

			p1.animate();
			p2.animate();

			p1Collsion();
			p2Collsion();

			ctx.clearRect(0,0,canvas.width,canvas.height);

			if(!leaderboardShown && !charSelectShown && game){
				ctx.fillStyle = "white";
				ctx.font = "23px Consolas";
				ctx.fillText(p1Score.toString(),100,20);
				ctx.fillText(p2Score.toString(),200,20);
			}

			ctx.fillStyle = "white";
			ctx.font = "10px Consolas";
		
			ctx.fillText("You",20,20);
			ctx.fillText("CPU",265,20);

			if(game){
				// the ball
				ball.animate();
				ball.collision();
				ctx.fillRect(ball.x,ball.y,ball.width,ball.height);
			}


			if(!game){
				if(!leaderboardShown && !charSelectShown){
					ctx.font = "9px Consolas";
					ctx.fillText(play,70,45);
					ctx.fillStyle = "orange";
					ctx.fillText("Press 'W' to move up ",70,60);
					ctx.fillStyle = "yellow";
					ctx.fillText("Press 'S' to move down ",70,75);
					ctx.fillStyle = "pink";
					ctx.fillText("Press 'R' to restart the game ",70,90);
					ctx.fillStyle = "cyan";
					ctx.fillText("Press 'L' to check out the leaderboard ",70,105);
					ctx.fillStyle="red";
					ctx.fillText("Press 'C' to choose a paddle or character",70,120);
				}
			}

			if(p2Score === winningScore){
				ctx.clearRect(0,0,canvas.width,canvas.height);

				ctx.font = "23px Consolas";
				ctx.fillText(p1Score.toString(),100,20);
				ctx.fillText(p2Score.toString(),200,20);

				win = "You Lose!";
				play=" ";

				ctx.font = "23px Consolas";
				ctx.fillText(win,101,70);

				Meteor.users.update({_id:Meteor.userId()} , {$inc:{"profile.losses":1}});

				wins = Meteor.user().profile.wins;
				losses = Meteor.user().profile.losses;

				games = wins + losses;
				winningPercentage = (wins/games);
				winningPercentage *=100;

				Meteor.users.update({_id:Meteor.userId()} , {$set:{"profile.pct":winningPercentage}});

				on = false;
				game = false;
			}

			if(p1Score === winningScore){
				ctx.clearRect(0,0,canvas.width,canvas.height);
				
				ctx.font = "23px Consolas";
				ctx.fillText(p1Score.toString(),100,20);
				ctx.fillText(p2Score.toString(),200,20);

				play=" ";
				win = "You Win!";

				ctx.font = "23px Consolas";
				ctx.fillText(win,101,70);

				Meteor.users.update({_id:Meteor.userId()} , {$inc:{"profile.wins":1}});

				wins = Meteor.user().profile.wins;
				losses = Meteor.user().profile.losses;

				games = wins + losses;
				winningPercentage = (wins/games);
				winningPercentage *=100;

				Meteor.users.update({_id:Meteor.userId()} , {$set:{"profile.pct":winningPercentage}});

				on = false;
				game = false;
			}

			if(leaderboardShown){
				$('.leaderboard').show();
			}else{
				$('.leaderboard').hide();
			}

			if(charSelectShown){
				$('#charSel').show();
			}else{
				$('#charSel').hide();
			}

			// moves cpu paddle up to catch ball
			if(ball.y < p2.y && game){

				if(ball.y >= p2.y && ball.y <= p2.height && ball.xVel > 0){
					p2.yVel = 0;
				}

				else{
					p2.yVel = -1.8;
					if(p2Down){
						p2Up = true;
						p2Down = false;
					}
				}
			}
			// moves paddle down to catch ball
			else if(ball.y > p2.y && game){

				if(ball.y >= p2.y && ball.y <= p2.height && ball.xVel > 0){
					p2.yVel = 0
				}

				else{
					p2.yVel = 1.8;
					if(p2Up){
						p2Down = true;
						p2Up = false;
					}
				}
			}

			// paddle 1
			ctx.fillStyle = "red";

			switch(switchSpriteCounter){
				case 0:
					ctx.drawImage(normal,p1.x,p1.y,p1.width,p1.height);
				break;
				case 1:
					ctx.drawImage(up,p1.x,p1.y,p1.width,p1.height);
				break;
				case 2:
					ctx.drawImage(down,p1.x,p1.y,p1.width,p1.height);
				break;
				case 3:
					ctx.drawImage(kickup,p1.x,p1.y,p1.width,p1.height);
				break;
				case 4:
					ctx.drawImage(kickdown,p1.x,p1.y,p1.width,p1.height);
				break;
			}
	
			// paddle 2
			ctx.fillStyle = "blue";
			ctx.fillRect(p2.x,p2.y,p2.width,p2.height);

			// dashed line down center
			if(game){
				ctx.fillStyle = "white";
				ctx.fillRect(150,0,5,5);
				ctx.fillRect(150,10,5,5);
				ctx.fillRect(150,20,5,5);
				ctx.fillRect(150,30,5,5);
				ctx.fillRect(150,40,5,5);
				ctx.fillRect(150,50,5,5);
				ctx.fillRect(150,60,5,5);
				ctx.fillRect(150,70,5,5);
				ctx.fillRect(150,80,5,5);
				ctx.fillRect(150,90,5,5);
				ctx.fillRect(150,100,5,5);
				ctx.fillRect(150,110,5,5);
				ctx.fillRect(150,120,5,5);
				ctx.fillRect(150,130,5,5);
				ctx.fillRect(150,140,5,5);
				ctx.fillRect(150,149,5,5);
			}
		
		}

		setTimeout(actionPerformed,10);

	}

	function p1Collsion(){
		if(ball.x < p1.x){
			if(ball.y >= p1.y && ball.y <= p1.height+p1.y){
				if(p1Up){
					ball.yVel = -1;
					switchSpriteCounter = 3;
				}

				else if(p1Down){
					ball.yVel = 1;
					switchSpriteCounter = 4;
				}

				ball.xVel *= -1;
				
				if(ball.xVel<0)
					ball.xVel-=.25;
				else
					ball.xVel+=.25;
			}
		}

	}

	function p2Collsion(){
		if(ball.x > p2.x){
			if(ball.y >= p2.y && ball.y <= p2.height+p2.y){
				if(p2Up){
					ball.yVel = -1;
				}

				else if(p2Down){
					ball.yVel = 1;
				}

				ball.xVel *= -1;

				if(ball.xVel<0)
					ball.xVel-=.25;
				else
					ball.xVel+=.25;
			}
		}
	}

	document.onkeydown = function(event){
		switch(event.keyCode){
			// l leaderboard
			case 76:
				if(leaderboardShown){
					leaderboardShown = false;
				}else{
					if(game){
						leaderboardShown = false;
					}else{
						leaderboardShown = true;
						charSelectShown = false;
					}
				}
			break;

			//c character select
			case 67:
				if(charSelectShown){
					charSelectShown  = false;
				}else{
					if(game){
						charSelectShown = false;
					}else{
						charSelectShown = true;
						leaderboardShown = false;
					}
				}
			break;

			// r restart
			case 82:
				p2Score = 0;
				p1Score= 0;
				p1.y = 60;
				p2.y = 60;
				p2.yVel = 0;
				ball.x = 120;
				ball.y = 50;
				ball.xVel = 2;
				ball.yVel =1;
			break;

			// p pause
			case 80:
			if(game){
				game = false;
				p2.yVel = 0;
			}else{
				game = true;
				leaderboardShown = false;
				charSelectShown = false;
			}
			break;

			// w key
			case 87:
				p1Up = true;
				if(p1Down){
					p1Down = false;
				}
				switchSpriteCounter = 1;
				p1.yVel = -2
			break;

			// s key
			case 83:
				p1Down = true;
				if(p1Up){
					p1Up = false;
				}
				switchSpriteCounter = 2;
				p1.yVel = 2
			break;

			// up arrow
			case 38:
				p2Up = true;
				if(p2Down){
					p2Down = false;
				}
				p2.yVel = -2;
			break;

			// down arrow
			case 40:
				p2Down = true;
				if(p2Up){
					p2Up = false;
				}
				p2.yVel = 2;
			break;
		}
	}

	document.onkeyup = function(event){
		switch(event.keyCode){
			// w key
			case 87:
				p1.yVel = 0;
				switchSpriteCounter = 0;
			break;

			// s key
			case 83:
				p1.yVel = 0;
				switchSpriteCounter = 0;
			break;

			// up arrow
			case 38:
				p2.yVel = 0;
			break;

			// down arrow
			case 40:
				p2.yVel = 0;
			break;
		}
	}


}



