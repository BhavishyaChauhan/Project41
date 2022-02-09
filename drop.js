class Drop{
    constructor(x,y){
        var options={
            friction: 0.01,
            restitution: 0.1
        }
        
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body);
        this.radius = 5;
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x: random(0,400), y: 0});
        }
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 5,5);
    }
}