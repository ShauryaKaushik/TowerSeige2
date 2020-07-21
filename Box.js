class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  
    display(){

      console.log(this.body);
      
    if(this.body.speed < 3)
    {
      super.display();

    }  
    else{

     World.remove(world,this.body);
     push();
     this.visibility = this.visibility - 5;
     tint(255,this.visibility );
     rectMode(CENTER);
     rect(0,0,0,0);
     pop();
    }
  }

  };
  