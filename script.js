var bubble = {
	x: 250,
	y: 250,
	radius: 20,
}

var coin1 = {
	x: 300,
	y: 350,
	radius: 10,
}

// Use for collision detection
var bubbleCoin1 = false


function preload() {
	sound1 = loadSound("found.wav")
}

function setup() {
  createCanvas(400, 400);
	
	
}

function draw() {
	background(0, 255, 255);
	




	arrows()
	
}


function arrows() {
	if(keyIsPressed){
		if(keyCode == 39){
			bubble.x += 2
		}
		if(keyCode == 37){
			bubble.x -= 2
		}
		if(keyCode == 40){
			bubble.y+= 2
		}
		if(keyCode == 38){
			bubble.y -= 2
		}
	}
}