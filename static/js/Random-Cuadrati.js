let x = 0
let y = 0
let l = 40
function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
  let r = random()
  if(r>0.5){
    square(x, y, l)
     fill('red')
  }
  else{
    circle(x+l/2, y+l/2, l)
    fill('#222222')
  }
 x=x+l
  if(x>400){
    x=0
    y=y+l
  }
}