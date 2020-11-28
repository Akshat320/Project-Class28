
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var boyImg;
//var stone, stoneImg;
var treeImg

function preload()
{

 boyImg = loadImage("boy2.png");	
 treeImg = loadImage("tree3.png");
}

function setup() {
	createCanvas(1300, 600);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 600, width, 20);
   // tree = new Tree(1050, 390);
    mango1 = new Mango(950,300,17);
    mango2 = new Mango(1025,245,17);
    mango3 = new Mango(1090,220,17);
    mango4 = new Mango(1100,295,17);
    mango5 = new Mango(1180 ,275,17);
    mango6 = new Mango(1040,300,17);
    mango7 = new Mango(1000,350,17);
    mango8 = new Mango(1130,335,17);
    mango9 = new Mango(1210,335,17);

    

  stone = new Stone(240,480,40);

  //boy = new Boy(200,440,200,300);
 
  slingshot = new SlingShot(stone.body,{x: 240, y:380});

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireFrames: false
    }
  })

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  //Engine.update(engine);

  fill("red");
  text("Press Space for another try",50 ,50);
  image(boyImg ,200,400,180,260);
  image(treeImg ,900,150, 340,450);

 // tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  //boy.display();
  stone.display();

  slingshot.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);

 
}

  function mouseDragged()
  {
   Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }

  function mouseReleased()
  {
    slingshot.fly();
    //Matter.Body.applyForce(stone.body,{x: 50, y:20});
  }

  function keyPressed()
  {
    if (keyCode === 32)
    {
      Matter.Body.setPosition(stone.body, {x:240, y:420});
      slingshot.attach(stone.body);
    }
  }

function detectCollision(lstone, lmango)
{
  
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
 
 if(distance<=lmango.r+lstone.r)
 {
 Matter.Body.setStatic(lmango.body, false);
 }
}