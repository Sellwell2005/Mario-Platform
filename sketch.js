var platform1
var countDistanceX = 0

function preload()
{}

function setup() {

  createCanvas(9000, 668);

for(i = 0; i < 20; i = i+1){
  platform1=new Platform(countDistanceX);
gap = random([0,0,0,80]);
  countDistanceX = countDistanceX + platform1.rw + gap
}



}

function draw() {
  background('skyblue'); 
 drawSprites();
}

