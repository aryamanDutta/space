var shuttle,shuttleImage;
var block,blockImage;
var meteor,meteorImage;
var star,starImage;
var block;



function preload(){
blockImage=loadImage("images/space_background.jpg")
shuttleImage=loadImage("images/space_shuttle.png")
meteorimage=loadImage("images/space_meteor.png")
starImage=loadImage("images/star.jpg")
}

function setup(){
 createCanvas(1280,608);
 block=createSprite(20,20,1280,608);
 block.addImage(blockImage);
 block.velocityX=2;

 

    

}

function draw(){
//background("black");




}
