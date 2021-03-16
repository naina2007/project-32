class Knife{
	constructor(x,y,r){
		var options={
			density:1,
            frictionAir:1
			}
            this.body = Bodies.circle(x,y,r/2, options);
            this.x=x;
            this.y=y;
            this.r=r;
            this.image = loadImage("knife.png");
            World.add(world, this.body);
	}
	display(){		
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 250,250);
        pop();	
	}
}