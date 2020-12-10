class Ball {

constructor(x, y){

  var a = {
    
   restitution: 0.5,
    density: 0.2
    
  }
  
  
this.body = Bodies.circle(x, y, 20, a)
World.add(world, this.body)
}

display(){

var pos = this.body.position
ellipseMode(RADIUS)
ellipse(pos.x,pos.y, 20)
}
}
