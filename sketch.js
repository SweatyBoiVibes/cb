var b1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 var hi = {

isStatic: true,


}
	ground = Bodies.rectangle(400,650, 800, 30, hi)
	//Create the Bodies Here.
   World.add(world, ground)
 
   LEFT = Bodies.rectangle(520, 585, 20, 100, hi)
   World.add(world, LEFT)
   
   
   Right = Bodies.rectangle(720, 585, 20, 100, hi)
   World.add(world, Right)

   

   b1 = new Ball (100,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  rect (ground. position.x, ground. position.y, 800, 30)
rect(LEFT.position.x,LEFT.position.y, 20, 100)
rect(Right.position.x,Right.position.y, 20, 100)



b1.display()
 

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(b1.body, b1.body.position, {x:5, y:-5})
		
			}
		
}


