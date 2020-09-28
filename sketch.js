var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground, log1,log2,log3,log3_1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	log1=createSprite(280,590,20,100);
	log1.shapeColor="red"

	log2=createSprite(460,590,20,100);
	log2.shapeColor="red"

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.setScale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log3=createSprite(370,650,200,19);
	log3.shapeColor="red"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});

	World.add(world, packageBody);
	
	log3_1= Bodies.rectangle(width/2, 200, 100, 20,{isStatic:false});
	World.add(world, log3_1);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  drawSprites();
 
}


function keyPressed() {
 if(keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
    
  }
}
