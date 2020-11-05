
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobject,roofobject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1=new bob(400,500,40);
	bob2=new bob(360,500,40);
	bob3=new bob(320,500,40);
	bob4=new bob(440,500,40);
	bob5=new bob(480,500,40);
	roofobject = new roof(400,300,100,20);
   // rope1=new rope(bob1.body,roofobject.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roofobject.display();
  
  drawSprites();
 
}



