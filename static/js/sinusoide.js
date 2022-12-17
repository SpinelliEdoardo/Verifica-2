let angle 
angle = 0 
let ampiezza
ampiezza = 100


function setup() 
{
  createCanvas(400, 400);
  background(220);
  // frameRate(15);
  console.log(PI,sin(PI))
  angleMode(DEGREES);
  line(0,200,400,200)
}

function draw() 
{
  // console.log(angle,sin(angle)); 
  stroke(0,0,255)
  let y2 = ampiezza * cos(angle)
  point(angle,y2+200)
  stroke(255,0,0)
  let y = ampiezza * sin(angle)
  point(angle,y+200)
  angle += 1
  
  
}