let x = 0
let y = 0
let lato = 40
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill('#22222')
  let r = random()
  line(x, y+lato, x+lato, y)
  line(x, y, x+lato, y+lato)
  x= x+lato 
  if(x>400){
    x= 0
    y= y+lato
  }
}