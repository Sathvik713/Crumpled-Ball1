class Dustbin {
    constructor(x,y) {
        var options={
            isStatic:true
        }

      this.width = 200;
      this.height = 100;
      this.thickness= 20;
      this.bottomBody = Bodies.rectangle(x, y, this.width, this.thickness, options);
      World.add(world, this.bottomBody);
      this.leftBody = Bodies.rectangle(x-this.width/2, y-this.height/2, this.thickness, this.height, options);
      World.add(world, this.leftBody);
      this.rightBody = Bodies.rectangle(x+this.width/2, y-this.height/2, this.thickness, this.height, options);
      World.add(world, this.rightBody);
    }
    display(){
        
      push()
      translate(this.bottomBody.position.x,this.bottomBody.position.y) 
      rotate(this.bottomBody.angle)
      rect(0,0,this.width,this.thickness)
      pop() 

      push()
      translate(this.leftBody.position.x,this.leftBody.position.y) 
      rotate(this.leftBody.angle)
      rect(0,0,this.thickness,this.height)
      pop()

      push()
      translate(this.rightBody.position.x,this.rightBody.position.y) 
      rotate(this.rightBody.angle)
      rect(0,0,this.thickness,this.height)
      pop()

      
    }

  };