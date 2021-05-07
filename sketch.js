var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var gameState = "start";
var particle;

var playButton;
var render;

var divisions = [];
var particles = [];
var plinkos = [];
var particles2 = [];

var divisionHeight = 300;
var stage = 0;
var score = 0;
var turn = 0;

var scores = ['100','200','300','400','500','600','700','800','900','1000'];

var scoreMark1;
var scoreMark2;
var scoreMark3;
var scoreMark4;
var scoreMark5;
var scoreMark6;
var scoreMark7;
var scoreMark8;
var scoreMark9;
var scoreMark10;

function setup() {
   createCanvas(800, 800);

   engine = Engine.create();
   world = engine.world;

   ground = new Ground(width/2,height,width,20);

   playButton = createButton('Play');

   for(var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


   for(var j = 75; j <=width; j=j+50){
      plinkos.push(new Plinko(j,75));
   }

   for(var j = 50; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,175));
   }

   for(var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,275));
   }

   for(var j = 50; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,375));
   }

   playButton.position(width/2 + 18,height/2 + 13);


   scoreMark1 = random(scores);
   scoreMark2 = random(scores);
   scoreMark3 = random(scores);
   scoreMark4 = random(scores);
   scoreMark5 = random(scores);
   scoreMark6 = random(scores);
   scoreMark7 = random(scores);
   scoreMark8 = random(scores);
   scoreMark9 = random(scores);   
   scoreMark10 = random(scores);
}

function draw() {
   background("black");
   textSize(20);
   Engine.update(engine);
   console.log(score);

  //text(mouseX + "," + mouseY,mouseX,mouseY);

   for(var i = 0; i < plinkos.length; i++) {  
      plinkos[i].display();
    }

    for(var k = 0; k < divisions.length; k++) {
       divisions[k].display();
    }


    if(stage === 0){
       for(var j = 0; j < particles.length; j++) {
          particles[j].display();
        }
    
        if(gameState === "start"){
           if(frameCount%20===0){
              particles.push(particle = new Particle(random(width/2-30, width/2+30), 10,10));
            }
          
            playButton.mousePressed(()=>{
               gameState = "play";
               stage = 1;
            })
        }
    }

    if(gameState === "start"){
       fill(random(0, 255), random(0, 255), random(0, 255));
       textSize(100);
       text("Plinko",width/2 - 110,height/2)
    
       fill(random(0, 255), random(0, 255), random(0, 255));
       textSize(20);
       text(" press ",width/2 - 50,height/2 + 20)
    }
    
    if(gameState === "play"){
       fill(random(0, 255), random(0, 255), random(0, 255));
       textSize(20);
       text("Score: "+ score,width - 100,20);

       playButton.hide();

       if(frameCount%20===0){
          particles2.push(new Particle2(mouseX,25,10));
       }

       fill("white");
       text(scoreMark1,20,500); 
       text(scoreMark2,100,500);
       text(scoreMark3,180,500);
       text(scoreMark4,260,500);
       text(scoreMark5,340,500);
       text(scoreMark6,420,500);
       text(scoreMark7,500,500);
       text(scoreMark8,580,500);
       text(scoreMark9,660,500);
       text(scoreMark10,740,500);

       if(particle.body.position.y > 500){
         if(8 < particle.body.position.x < 86){
            score = score + scoreMark1 
         }

         if(86 < particle.body.position.x < 164){
            score = score + scoreMark2 
         }

         if(164 < particle.body.position.x < 246){
            score = score + scoreMark3 
         }

         if(246 < particle.body.position.x < 325){
            score = score + scoreMark4 
         }

         if(325 < particle.body.position.x < 405){
            score = score + scoreMark5 
         }

         if(405 < particle.body.position.x < 485){
            score = score + scoreMark6 
         }

         if(485 < particle.body.position.x < 565){
            score = score + scoreMark7 
         }

         if(565 < particle.body.position.x < 648){
            score = score + scoreMark8
         }

         if(648 < particle.body.position.x < 727){
            score = score + scoreMark9 
         }

         if(727 < particle.body.position.x < 790){
            score = score + scoreMark10
         }
       }
    }

    mousePressed();
}

function mousePressed(){
   for(var k = 0; k < particles2.length; k++) {
      particles2[k].display();
   }
}
