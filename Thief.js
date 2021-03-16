class Thief extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("thief.png");
      this.Visibility=255;
    }
    display(){
  
      if(this.body.speed<=1) {
  
      super.display();
    }
  
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-20;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,150,150);
      pop();
     }
  
    }
  
  }