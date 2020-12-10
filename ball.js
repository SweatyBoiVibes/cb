class Ball {

constructor(x, y){

this.body = Bodies.circle(x, y, 20)
World.add(world, this.body)
}

display(){

var pos = this.body.position
ellipseMode(RADIUS)
ellipse(pos.x,pos.y, 20)
}
}