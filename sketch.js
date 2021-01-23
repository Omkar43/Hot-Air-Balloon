
var ballonImg,backgroundImg;
var ballon;
var database,position;

function preload()
{

backgroundImg = loadImage("pro-C35+images/Hot Air Ballon-01.png");
ballonImg = loadImage("pro-C35+images/Hot Air Ballon-02.png","pro-C35+images/Hot Air Ballon-03.png","pro-C35+images/Hot Air Ballon-04.png");

}

function setup() {
  database = firebase.database();
  createCanvas(800,400);
  ballon = createSprite(100, 300, 50, 50);
  ballon.addImage(ballonImg);
  ballon.scale = 0.4
  position = database.ref('ballon/position');
  position.on("value",readPosition,showError);
}

function draw() {
  background(backgroundImg);  

  if(keyDown(LEFT_ARROW)){
    ballon.x = ballon.x - 10;
    }
    else if(keyDown(RIGHT_ARROW)){
    ballon.x = ballon.x + 10;

    }
    else if(keyDown(UP_ARROW)){
    ballon.y = ballon.y - 10;
    }
    else if(keyDown(DOWN_ARROW)){
    ballon.y = ballon.y + 10;

    }
  drawSprites();
}



function readPosition(data){

position = data.val();
ballon.x = position.x;
ballon.y = position.y;
}

function showError(){

console.log("error in writing to the data base");


}