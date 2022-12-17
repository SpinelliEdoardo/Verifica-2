//  G. Hutchison - May 28, 2020 - Olympic rings with overlaps

var WIDTH = 400;
var HEIGHT = 400;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(255);
  noFill();

  var penSize = 8;
  strokeWeight(penSize);

  var diameter = 100;

  // Black ring
  stroke("black");
  circle(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter);

  // Blue ring
  stroke(0,0,222);
  circle(WIDTH / 2 - diameter - 2 * penSize, HEIGHT / 2 - diameter/4, diameter);

  // Red ring
  stroke("red");
  circle(WIDTH / 2 + diameter + 2 * penSize, HEIGHT / 2 - diameter/4, diameter);
  
  // Yellow ring
  stroke(255,255,0);
  circle(WIDTH / 2 - diameter/2 - penSize, HEIGHT / 2 + diameter/4, diameter);
  
  // Green ring
  stroke(0,255,0);
  circle(WIDTH / 2 + diameter/2 + penSize, HEIGHT / 2 + diameter/4, diameter, diameter);
  
  // redo blue section
  stroke(0,0,222);
  arc(WIDTH / 2 - diameter - 2 * penSize, HEIGHT / 2 - diameter/4, diameter,diameter,-PI/4,PI/4);
  
  // redo Black
  stroke("black");
  arc(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter,diameter, -PI/4,PI/4);
  arc(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter,diameter, PI/2,2*PI/3);
  
  // redo Red
  stroke("red");
  arc(WIDTH / 2 + diameter + 2 * penSize, HEIGHT / 2 - diameter/4, diameter,diameter,PI/2,2*PI/3);
  
  

  
}