var database
var food,foodStock
var dog,happyDog,dogImge

function preload()
{
  dogImage=loadImage("images/dogIme.png")
  dogHappy=loadImage("image/dogImg1.png")
}

function setup() {
  canvas = createCanvas(500,500);
  database = firebase.database();
  dog.createSprite("250,200,50,50")
  dog.addImage(dogImage)

  foodStock=database.ref('food')
   foodStock.on("value",readstock)
  
}


function draw() {  
  backround(46,139,86)
  drawSprites();

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy)
  }
   

}



