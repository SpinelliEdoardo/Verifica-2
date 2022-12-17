     let ax = 0.01
     let vx = 0
     let x = 0
     let d = 50
     let r = d/2
     //let w = Larchezza del canvas
    //let h = altezza del canvas 

    function setup() {
      createCanvas(400, 400);
      //background (255, 255, 255)
      background("#fffffff")
    }

    function draw() {
      background("#ff0000");
      fill(255)
      circle(x, 200, 50)
       vx = vx + ax
  
       x = x + vx
  
       if(x>= 425){
       x = -25 //Modifichiamo solo la posizione non la vx 
     }
      if(x <= -425){
        x = 425
     }
    }