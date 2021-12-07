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

var evilCoin = {
	x: 50,
	y: 250,
	radius: 10,
}

var coin2 = {
	x: 100,
	y: 150,
	radius: 10,
}

var coin3 = {
	x: 250,
	y: 300,
	radius: 10,
}

var bubbleCoin1 = false
var bubbleCoin2 = false
var bubbleCoin3 = false
var bubbleEvil = false

var sound1
var score = 0
function preload() {
	sound1 = loadSound("found.wav")
}

function setup() {
  createCanvas(400, 400);
	
	
}

function draw() {
	background(0, 255, 255);
	textSize(20)
	fill("white")
	text("SCORE: " + score, 20, 35)
	// Task 1
	fill("white")
	ellipse(bubble.x, bubble.y, bubble.radius);
	fill("yellow")
  ellipse(coin1.x, coin1.y, coin1.radius);
	ellipse(coin2.x, coin2.y, coin2.radius);
	ellipse(coin3.x, coin3.y, coin3.radius);
	fill("red")
	ellipse(evilCoin.x, evilCoin.y, evilCoin.radius)
  bubbleCoin1 = collideCircleCircle(bubble.x, bubble.y, bubble.radius, coin1.x, coin1.y, coin1.radius);
	bubbleCoin2 = collideCircleCircle(bubble.x, bubble.y, bubble.radius, coin2.x, coin2.y, coin2.radius);

  bubbleCoin3 = collideCircleCircle(bubble.x, bubble.y, bubble.radius, coin3.x, coin3.y, coin3.radius);
	bubbleEvil = collideCircleCircle(bubble.x, bubble.y, bubble.radius, evilCoin.x, evilCoin.y, evilCoin.radius);
	if(bubbleEvil){
		randomLocation(evilCoin)
		score--
	}
	if(bubbleCoin1){
		randomLocation(coin1)
		sound1.play()
		score++
	}
	if(bubbleCoin2){
		randomLocation(coin2)
		sound1.play()
		score++
	}
	if(bubbleCoin3){
		randomLocation(coin3)
		sound1.play()
		score++
	}
	arrows()
	
}

// Make this function
function randomLocation(coin){
	coin.x = random(0, 400)
	coin.y = random(0, 400)
}