const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1000,700);


  engine = Engine.create();
  world = engine.world;

  knife=new Knife(400,400,2);
 
  thief =new Thief(500,400,2);
  sling =new Slingshot (knife.body,{x:100,y:50});
  
}

function draw() {
  background("pink");  
  Engine.update(engine);

  
  sling.display();
  knife.display();
  thief.display();
  }

  function mouseDragged(){
    Matter.Body.setPosition(knife.body,{x:mouseX, y:mouseY})
  }

  function mouseReleased(){
    rope.fly();
}