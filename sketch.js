var positionX = 42;
var positionY = 42;

var tackica = 0;
var targetPositionX;
var targetPositionY;

var speedFactor = 2;
var speedX = 1;
var speedY = 0;

var canvas;

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 updateTarget();
}

function draw() {
 background(248,217,204);
 strokeWeight(4);
 updatePosition();
 checkTarget();
 drawtarget();
 nacrtajTelo(positionX, positionY);
 nacrtajOci();
 nacrtajKapu();
 
 if (mouseIsPressed) {
   nacrtajUsta(true);
 } else {
   nacrtajUsta(false);
 }
 
 nacrtajScore();
	}

function updatePosition(){
 positionX = positionX + speedX*speedFactor;
 positionY = positionY + speedY*speedFactor;
}

function updateTarget(){
 targetPositionX=random(width);
 targetPositionY=random(height);
}

function checkTarget(){
 var distanceX = targetPositionX - positionX;
 var distanceY = targetPositionY - positionY;

 if ((distanceX < 50 && distanceX > -50) && (distanceY < 50 && distanceY > -50)){
   updateTarget();
   tackica++;
   speedFactor+=tackica/3;
 }
}

function drawtarget(){
 fill(255,0,0);
 ellipse(targetPositionX,targetPositionY, 20,20);
}

function nacrtajTelo(x, y) {
 stroke(114,102,105);
 fill(111,154,150);
 rect(x - 50, y - 50, 100, 100);
}

function nacrtajKapu() {
 push();
 stroke(114,102,105);
 translate(positionX - 60, positionY - 60);
 fill(168,109,133);
 triangle(0, 0, 0, 60, 60, 0);
 pop();
}

function nacrtajOci() {
 fill(255);
 ellipse(positionX - 50 + 25, positionY - 50 + 30, 20, 20)
 ellipse(positionX - 50 + 70, positionY - 50 + 30, 30, 30)
}

function nacrtajUsta(zatvorena) {
 if (zatvorena) {
   stroke(0);
   line(positionX - 30, positionY + 30, positionX + 30, positionY + 30)
 } else {
   noStroke();
   fill(194,68,125);
   rect(positionX - 30, positionY + 13, 60, 20);
 }

 fill(255);
 noStroke();
 rect(positionX - 30, positionY + 18, 10, 10);
 rect(positionX + 20, positionY + 18, 10, 10);
}

function nacrtajScore(){
 fill(195,179,189);
 textSize(32);
 text("SCORE: " + tackica, 40, 40);
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    speedX=-1;
    speedY=0;
 }else if(keyCode === RIGHT_ARROW){
    speedX=1;
    speedY=0;
 }else if(keyCode === UP_ARROW){
    speedX=0;
    speedY=-1;
 }else if(keyCode === DOWN_ARROW){
    speedX=0;
    speedY=1;
 }else if(key === 's'){
   speedFactor=0;
 }else if(key === 'k'){
   speedFactor=2;
 }
}

window.onresize = function() {
 canvas.size(windowWidth, windowHeight);
};
