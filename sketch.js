const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a=45;
var engine, world;
var ground,wall1,wall2,wall3;
var d1,d2,d3,d4,d5,d6,d7,d8;
var particles=[];
var plinkos=[];
var o1,o2,o3,o4,o5,o6,o7,o8,o9;
var oo1,oo2,oo3,oo4,oo5,oo6,oo7,oo8;
var ooo1,ooo2,ooo3,ooo4,ooo5,ooo6,ooo7,ooo8,ooo9;
var oooo1,oooo2,oooo3,oooo4,oooo5,oooo6,oooo7,oooo8;
var ooooo1,ooooo2,ooooo3,ooooo4,ooooo5,ooooo6,ooooo7,ooooo8,oooo9;

var tringal;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

   ground=new Ground(240,800,520,40);
   wall1=new Ground(0,400,20,780);
   wall2=new Ground(480,400,20,780);
   wall3=new Ground(240,0,500,20);

   d1=new Divisions(240,700,10,300);
   d2=new Divisions(160,700,10,300);
   d3=new Divisions(320,700,10,300);
   d4=new Divisions(80 ,700,10,300);
   d5=new Divisions(400,700,10,300);
   d6=new Divisions(5  ,700,10,300);
   d7=new Divisions(475,700,10,300);
   d8=new Divisions(240,790,480,20);
  
   o1=new Obs(40    ,75,15,15);
   o2=new Obs(40+50 ,75,15,15);
   o3=new Obs(40+100,75,15,15);
   o4=new Obs(40+150,75,15,15);
   o5=new Obs(40+200,75,15,15);
   o6=new Obs(40+250,75,15,15);
   o7=new Obs(40+300,75,15,15);
   o8=new Obs(40+350,75,15,15);
   o9=new Obs(40+400,75,15,15);
   
   oo1=new Obs(40+25    ,75+100,15,15);
   oo2=new Obs(40+50+25 ,75+100,15,15);
   oo3=new Obs(40+100+25,75+100,15,15);
   oo4=new Obs(40+150+25,75+100,15,15);
   oo5=new Obs(40+200+25,75+100,15,15);
   oo6=new Obs(40+250+25,75+100,15,15);
   oo7=new Obs(40+300+25,75+100,15,15);
   oo8=new Obs(40+350+25,75+100,15,15);

   ooo1=new Obs(40    ,75+200,15,15);
   ooo2=new Obs(40+50 ,75+200,15,15);
   ooo3=new Obs(40+100,75+200,15,15);
   ooo4=new Obs(40+150,75+200,15,15);
   ooo5=new Obs(40+200,75+200,15,15);
   ooo6=new Obs(40+250,75+200,15,15);
   ooo7=new Obs(40+300,75+200,15,15);
   ooo8=new Obs(40+350,75+200,15,15);
   ooo9=new Obs(40+400,75+200,15,15);

   oooo1=new Obs(40+25    ,75+300,15,15);
   oooo2=new Obs(40+50+25 ,75+300,15,15);
   oooo3=new Obs(40+100+25,75+300,15,15);
   oooo4=new Obs(40+150+25,75+300,15,15);
   oooo5=new Obs(40+200+25,75+300,15,15);
   oooo6=new Obs(40+250+25,75+300,15,15);
   oooo7=new Obs(40+300+25,75+300,15,15);
   oooo8=new Obs(40+350+25,75+300,15,15);

   ooooo1=new Obs(40    ,75+400,15,15);
   ooooo2=new Obs(40+50 ,75+400,15,15);
   ooooo3=new Obs(40+100,75+400,15,15);
   ooooo4=new Obs(40+150,75+400,15,15);
   ooooo5=new Obs(40+200,75+400,15,15);
   ooooo6=new Obs(40+250,75+400,15,15);
   ooooo7=new Obs(40+300,75+400,15,15);
   ooooo8=new Obs(40+350,75+400,15,15);
   ooooo9=new Obs(40+400,75+400,15,15);

   tringal= Bodies.triangle(15,15,20,20,30,15);
  World.add(world,this.tringal)
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);

   if(frameCount%60===0){
       particles.push(new Obj(random(width/2-10,width/2+10),10,10))
   }


   fill("red");
   triangle(15,15,20,20,30,15)


    for(var j=0; j<particles.length;j++){
        particles[j].display();
    }

    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();

    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();

    o1.display();
    o2.display();
    o3.display();
    o4.display();
    o5.display();
    o6.display();
    o7.display();
    o8.display();
    o9.display();

    oo1.display();
    oo2.display();
    oo3.display();
    oo4.display();
    oo5.display();
    oo6.display();
    oo7.display();
    oo8.display();

    ooo1.display();
    ooo2.display();
    ooo3.display();
    ooo4.display();
    ooo5.display();
    ooo6.display();
    ooo7.display();
    ooo8.display();
    ooo9.display();

    oooo1.display();
    oooo2.display();
    oooo3.display();
    oooo4.display();
    oooo5.display();
    oooo6.display();
    oooo7.display();
    oooo8.display();

    ooooo1.display();
    ooooo2.display();
    ooooo3.display();
    ooooo4.display();
    ooooo5.display();
    ooooo6.display();
    ooooo7.display();
    ooooo8.display();
    ooooo9.display();
}