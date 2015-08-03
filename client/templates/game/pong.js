Template.dashboard.rendered = function(){

	if(!Meteor.userId()){
		window.location.href = "../"
	}

	var game = false;

	var p1Up = false;
	var p1Down = false;

	var p2Up = false;
	var p2Down = false;

	var p1Score = 0;
	var p2Score = 0;

	var play = "Press 'P' to Play!";

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
	}

	var ball = new Ball(120,50,3,3,2,1);
	var p1 = new Paddle(5,60,0,0);
	var p2 = new Paddle(295,60,0,0);
	
	function actionPerformed(){

		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');

		
		p1.animate();
		p2.animate();

		
		p1Collsion();
		p2Collsion();

		ctx.clearRect(0,0,canvas.width,canvas.height);

		ctx.fillStyle = "white";
		ctx.font = "23px Consolas";
		ctx.fillText(p1Score.toString(),100,20);
		ctx.fillText(p2Score.toString(),200,20);

		if(game){
			// the ball
			ball.animate();
			ball.collision();
			ctx.fillRect(ball.x,ball.y,ball.width,ball.height);
		}

		if(!game){
			ctx.fillStyle = "white";
			ctx.fillText(play,50,100);
		}

		// paddle 1
		ctx.fillStyle = "red";
		ctx.fillRect(p1.x,p1.y,p1.width,p1.height);

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


		setTimeout(actionPerformed,10);

	}

	function p1Collsion(){
		if(ball.x < p1.x){
			if(ball.y >= p1.y && ball.y <= p1.height+p1.y){
				if(p1Up){
					ball.yVel = -1;
				}else if(p1Down){
					ball.yVel = 1;
				}
				ball.xVel *= -1;
			}
		}
	}

	function p2Collsion(){
		if(ball.x > p2.x){
			if(ball.y >= p2.y && ball.y <= p2.height+p2.y){
				if(p2Up){
					ball.yVel = -1;
				}else if(p2Down){
					ball.yVel = 1;
				}
				ball.xVel *= -1;
			}
		}
	}

	document.onkeydown = function(event){
		switch(event.keyCode){
			case 80:
			if(game){
				game = false;
			}else{
				game = true;
			}
			break;
			// w key
			case 87:
				p1Up = true;
				if(p1Down){
					p1Down = false;
				}
				p1.yVel = -2
			break;
			// s key
			case 83:
				p1Down = true;
				if(p1Up){
					p1Up = false;
				}
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
				p1.yVel = 0
			break;
			// s key
			case 83:
				p1.yVel = 0
			break;
				// up arrow
			case 38:
				p2.yVel = 0
			break;
			// down arrow
			case 40:
				p2.yVel = 0
			break;
		}
	}


}



