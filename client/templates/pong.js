


window.onload = function(){

	function Paddle(x,y,xVel,yVel){
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 30;
		this.xVel = xVel;
		this.yVel = yVel;
		this.animate = function(){
			this.x+=this.xVel;
			this.y+=this.yVel;
		}
	}

	function Ball(x,y,width,height,xVel,yVel){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.xVel = xVel;
		this.yVel = yVel;
		this.collision = function(){
			if(this.x > 290){
				this.xVel *= -1;
			}

			else if(this.x < 0){
				this.xVel *= -1;
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


	var ball = new Ball(120,50,10,5,2,1);
	var p1 = new Paddle(10,60,0,0);
	var p2 = new Paddle(280,60,0,0);

	function actionPerformed(){
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');

		ball.animate();
		p1.animate();
		p2.animate();
		ball.collision();

		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle = "red";
		ctx.fillRect(ball.x,ball.y,ball.width,ball.height);
		ctx.fillStyle = "purple";
		ctx.fillRect(p1.x,p1.y,p1.width,p1.height);
		ctx.fillStyle = "green";
		ctx.fillRect(p2.x,p2.y,p2.width,p2.height);
		
		setTimeout(actionPerformed,5);
	}

	setTimeout(actionPerformed,5);

	document.onkeydown = function(event){
		switch(event.keyCode){
			// w key
			case 87:
				p1.yVel = -1
			break;
			// s key
			case 83:
				p1.yVel = 1
			break;
			// up arrow
			case 38:
				p2.yVel = -1;
			break;
			// down arrow
			case 40:
				p2.yVel = 1;
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

