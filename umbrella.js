class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true,
            friction: 1,
            restitution: 0.1
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.body= Bodies.circle(x,y,80,options);
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,200,200);
    }
}