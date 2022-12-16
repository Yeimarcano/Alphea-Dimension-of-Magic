var ball=0;
var light=20;

function setup() {
	createCanvas(500, 500); 
 background(3, 14, 115); 
}

function draw() {

fill("black");
  ellipse(random(width),random(height),50,80); //darkness

  fill(230, 230, 230 );
  stroke("black");
  strokeWeight(1);
  ellipse(430,50,70,70); //the moon

  fill(3, 14, 115); //buildings
  noStroke(0);
  rect(0,180,100,250); //bulding left
  rect(102,230,100,200); //building left 2
  rect(204,200,100,230); //building middle
  rect(306,230,100,200); //building right
  rect(408,180,100,250); //building right 2

  fill(225, 215, 134);
  rect(15,210,18,18); // windows in fisrt building
  rect(60,210,18,18);
  rect(15,260,18,18);
  rect(60,260,18,18);
  rect(15,310,18,18);
  rect(60,310,18,18);
  rect(15,360,18,18);
  rect(60,360,18,18);
  
  rect(120,260,18,18); //windows in second building
  rect(165,260,18,18);
  rect(120,310,18,18);
  rect(165,310,18,18);
  rect(120,360,18,18);
  rect(165,360,18,18);


  rect(222,220,18,18); //windows in third building
  rect(266,220,18,18);
  rect(222,270,18,18);
  rect(266,270,18,18);
  rect(222,320,18,18);
  rect(266,320,18,18);
  rect(222,370,18,18);
  rect(266,370,18,18);

  rect(325,260,18,18); //windows in forth building
  rect(368,260,18,18);
  rect(325,310,18,18);
  rect(368,310,18,18);
  rect(325,360,18,18);
  rect(368,360,18,18);

  rect(425,210,18,18); // windows in fifth building
  rect(470,210,18,18);
  rect(425,260,18,18);
  rect(470,260,18,18);
  rect(425,310,18,18);
  rect(470,310,18,18);
  rect(425,360,18,18);
  rect(470,360,18,18);

  fill (255,255,light,225); // light balls, mousePressed
  noStroke;
  ellipse (255,50,ball,ball);
  ellipse (100,200,ball,ball);
  ellipse (30,300,ball,ball);
  ellipse (160,280,ball,ball);
  ellipse (385,340,ball,ball);
  ellipse (250,370,ball,ball);
  ellipse (20,20,ball,ball);
  ellipse (80,90,ball,ball);
  ellipse (475,180,ball,ball);
  ellipse (300,255,ball,ball);
  ellipse (305,150,ball,ball);
  ellipse (410,250,ball,ball);
  ellipse (180,140,ball,ball);

  fill(185, 229, 255);
  stroke("black");
  strokeWeight(3);
  textSize(55);
  textFont("Garmont");
  text("Mortal World",100,456);

  textSize(28);
  text("Battle of Light and Darkness",90,485);
  
}

function mousePressed(){
  if(ball>40){ball=0;
    }else{ball=ball+1;
  light=light+5;}
  
}

