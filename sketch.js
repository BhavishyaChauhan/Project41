const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var drops=[];
var maxDrops=100;
var boy;
var thunder;
var thunder1_img;
var thunder2_img;
var thunder3_img;
var thunder4_img;
var thunderFrame;




function preload(){
    thunder1_img = loadImage("thunderbolt/1.png");
    thunder2_img = loadImage("thunderbolt/2.png");
    thunder3_img = loadImage("thunderbolt/3.png");
    thunder4_img = loadImage("thunderbolt/4.png");


}

function setup(){
   createCanvas(400,400);
    engine= Engine.create();
    world= engine.world;

    boy = new Umbrella(120,320);
    

    if(frameCount % 150==0){
        for(var i =1; i<=maxDrops; i++){
            var drop = new Drop(random(0,400), random(0,400));
            drops.push(drop);
        }
    }

}

function draw(){
    Engine.update(engine);
    background(0);

    //var r =Math.round( Math.random(30,370));
    
    
    boy.display();
    var rand = Math.round(Math.random(1,4));
    console.log(rand)

    if(frameCount% 80 === 0){
        thunderFrame = frameCount;
        var random = Math.random(10,370);
        thunder= createSprite(random ,random,10,10);
       
        
        if(rand ==1){
            thunder.addImage(thunder1_img);
            thunder.scale = 0.7;
        }
        if(rand ==2){
            thunder.addImage(thunder2_img);
            thunder.scale = 0.7;
        }
        if(rand ==3){
            thunder.addImage(thunder3_img);
            thunder.scale = 0.7;
        }
        if(rand ==4){
            thunder.addImage(thunder4_img);
            thunder.scale = 0.7;
        }
        
    }    

    if(thunderFrame+10 == frameCount ){
        thunder.destroy();
    }
    

    for(var i=1; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    drawSprites();
}   

