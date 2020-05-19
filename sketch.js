const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var circle1;
var backgroundImg,platform;
var ball, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    circle1 = new Circle1(810,350,50,50);
    rect1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    circle3 = new Circle3(810,220,50,50);

    rect3 =  new Rect5(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    rect4 = new Rect4(760,120,150, PI/7);
    rect5 = new Rect4(870,120,150, -PI/7);

    ball = new Ball(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    circle1.display();
    rect1.display();

    box3.display();
    box4.display();
    circle3.display();
    rect3.display();

    box5.display();
    rect4.display();
    rect5.display();

    ball.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){

if(keyCode===32){
slingshot.attach(ball.body)
}

}