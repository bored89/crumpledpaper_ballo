
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundt;
var right;
var left;
var ballo;

function preload()
{
	
}

function setup() {
	createCanvas(1300,800);
     var balloption={
		 isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	 }

	engine = Engine.create();
	world = engine.world;
    groundt=new ground(width/2,670,width,20);
	left=new ground(1100,600,20,120);
	right=new ground(890,600,20,120)
	ballo = Bodies.circle (400,640,20,balloption)  
	Engine.run(engine);
	World.add (world,groundt)
	World.add (world,left)
	World.add (world,right)
	World.add (world,ballo)
	

}


function draw() {
  rectMode(CENTER);
  ellipseMode (RADIUS)
  background(0);
  push ()
  ellipse (ballo.position.x,ballo.position.y,15)
  fill ("orange")
  pop ();
  groundt.display ();
  left.display();
  right.display();
   drawSprites();
 
}

function keyPressed (){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce (ballo,{x:0,y:0},{x:8,y:40})
	}
}

