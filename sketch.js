
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,bin1,bin2,bin3,base;

function setup() {
	
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    paper = new Paper(100,100);
	base = new Bin(400,650,800,50);
	baseA = createSprite(400,650,800,50);
    bin1 = new Bin(750,575,20,100);
    bin1a =createSprite(750,575,20,100);
	bin2 = new Bin(680,615,160,20);
    bin2a = createSprite(680,615,160,20);
    bin3 = new Bin(610,575,20,100);
    bin3a = createSprite(610,575,20,100);
}


function draw() {
 Engine.update(engine);
  
  rectMode(CENTER);
  background(0);
  
  paper.display(); 
  base.display(); 
  baseA.shapeColor="pink"; 
  bin1.display();
  bin1a.shapeColor="green";
  bin2.display();
  bin2a.shapeColor="green";
  bin3.display();
  bin3a.shapeColor="green";
  
  
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
    }
}


