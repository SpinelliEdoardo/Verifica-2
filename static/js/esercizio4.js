let x = 20
let y = 20
let lato = 40
let z = 50
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let r = random()
  line(x, y+lato, x+lato, y)
  x = x+lato
  if(x>400){
    x = 0
    y= y + z
  }
}