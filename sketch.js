  var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

  var gameState;
  var start;
  var play;
  var turn;

  var playButton;

  var divisions = [];
  var particles = [];
  var plinkos = [];

  var divisionHeight = 300;
  var score = 0;

  function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);

    playButton = createButton('Play');

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


      for (var j = 75; j <=width; j=j+50){
        plinkos.push(new Plinko(j,75));
      }

      for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
      }

      for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
      }

      for (var j = 50; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,375));
      }   
  }
  
  function draw() {
    background("black");
    textSize(20);
    Engine.update(engine);
  
    

    if(gameState === start){
      if(frameCount%10===0){
        particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
        score++;
      }
  
      for (var j = 0; j < particles.length; j++) {
        particles[j].display();
      }
  
      playButton.position(width/2 + 18,height/2 + 13)
      
      playButton.mousePressed(()=>{
        gameState = play;
      })
    }

  if(gameState === play){
    for (var i = 0; i < plinkos.length; i++) {  
      plinkos[i].display();
    }

    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }



  }

  if(gameState === start){
    fill(random(0, 255), random(0, 255), random(0, 255));
    textSize(100);
    text("Plinko",width/2 - 110,height/2)

    fill(random(0, 255), random(0, 255), random(0, 255));
    textSize(20);
    text(" press ",width/2 - 50,height/2 + 20)
  }

  if(gameState === play){
    text("Score: "+ score,width - 100,20)
  }
  }