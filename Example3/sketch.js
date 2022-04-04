function setup() {
  createCanvas(200,100);
}

function draw() {
  background(1);
  
  //GHOST!
  //body 
  fill(230,60,0,255);
  arc(142, 50, 82.2, 80, -PI, 0, CHORD);
  stroke(0,0,0,0);
  rect(101,50,82,43);
  //eyes
  fill(255,255,255,255);
  ellipse(121,50,25,25);
  ellipse(163,50,25,25);
  fill(0,0,255,255);
  ellipse(121,50,15,15);
  ellipse(163,50,15,15);
  
  //PACMAN!
  fill(255,255,0);
  arc(50,50,80,80, -PI + 0.8, PI - 0.9 ,PIE);
  
  
  
 
 
}