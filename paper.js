class Paper {
    constructor(x,y,r) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
        
      }
      this.body = Bodies.circle(x,y,r/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("white");
      circle( 0, 0, 40);
      pop()

      
    }
  };