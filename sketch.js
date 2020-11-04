function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(200,200,50,50);
  sprite1.shapeColor="green";
  sprite2.shapeColor="green";
  sprite1.debug="true";
  sprite2.debug="true";
}

function draw() {
  background(255,255,255);
  sprite2.x=mouseX;
  sprite2.y=mouseY;
  if(sprite2.x-sprite1.x<sprite2.width/2+sprite1.width/2 && 
     sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2 &&
     sprite2.y-sprite1.y<sprite2.height/2+sprite1.height/2 &&
     sprite1.y-sprite2.y<sprite1.height/2+sprite2.height/2){
      sprite1.shapeColor="red";
      sprite2.shapeColor="red";
     } 
     else{
     sprite1.shapeColor="green";
     sprite2.shapeColor="green";
     }
  drawSprites();
}