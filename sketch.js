
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
	base = new Bin(400,650,800,100);
	bin1 = new Bin(150,100,20,50);

	
  
}


function draw() {
 Engine.update(engine);
  
  rectMode(CENTER);
  background(0);
  
  paper.display(); 
  base.display(); 
  bin1.display();
 
  drawSprites();
 
}



