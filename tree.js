
var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
var angle;
function setup(){
	createCanvas(windowWidth,windowHeight);
	
}

function draw(){
	
	angle =  PI/6;
	background(0);
	stroke(255);
	translate(width/2, height);
	createBranch(350);
}

function createBranch(len){
	line(0,0,0,-len);
	translate(0, -len);
	
	if (len > 10)
	{
		push();
		rotate(angle);
		createBranch(len*0.65);
		pop();
		push();
		rotate(-angle);
		createBranch(len*0.65);
		pop();
	}
	
	
}