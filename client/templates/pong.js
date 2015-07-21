


Template.game.rendered = function(){

	function Ball(x,y,width,height,xVel,yVel){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.xVel = xVel;
		this.yVel = yVel;
		this.collision = function(){

		}
	}

	function actionPerformed(){
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');

		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle = "red";
		ctx.fillRect(0,0,10,5);

	}

	actionPerformed();

	document.onkeydown = function(event){
		switch(event.keyCode){
			// w key
			case 87:
			
			break;
			// s key
			case 83:
			
			break;
			// up arrow
			case 38:
				
			break;
			// down arrow
			case 40:
				
			break;
		}
	}

	document.onkeyup = function(event){
		switch(event.keyCode){
			// w key
			case 87:
			
			break;
			// s key
			case 83:
			
			break;
				// up arrow
			case 38:
				
			break;
			// down arrow
			case 40:
				
			break;
		}
	}
}

