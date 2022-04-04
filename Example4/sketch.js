function setup() {
  createCanvas(200,200);
}

function draw() {
  background(0,0,128);
  
  // white outline
  stroke(255,255,255,255);
  strokeWeight(3);
  
  // green circle
  fill(0,128,0,255);
  ellipse(100,100,95,95);
  
  // red star
  fill(255,0,0,255);
  beginShape();
  
  // right arm
  vertex(142,80);
  // right arm + head concave
  vertex(112,85);
  // head (15)
  vertex(100,52.5);
  // left arm + head concave
  vertex(87,85);
  // left arm
  vertex(57,80);
  // left arm + left leg concave
  vertex(82,105);
  // left leg
  vertex(69.5,135);
  // left leg + right leg concave
  vertex(99,117.5);
  // right leg
  vertex(132,133);
  // right arm + right leg concave
  vertex(117,105);
  
  endShape(CLOSE);
   
}