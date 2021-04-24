var foodref,foodz,food;
var database;
var reset;
var happyDog, hungryDOG;
var happyCAT, hungryCAT;
var happyMACAW, hungryMACAW;
var happyHAMSTER, hungryHAMSTER;
var happyRABBIT, hungryRABBIT;
var background1 , background1IMG;
var background2 , background2IMG;
var background3 , background3IMG;
var dogfood, milk, carrot, berry, cheese;
var button1, button2, button3, button4, button5;
var pet, grant, namey;

function preload(){
  background1IMG = loadImage("bb.png");
  background2IMG = loadImage("pet.png");
  background3IMG = loadImage("b3.png");

  happyDogIMG = loadImage("dogImg1.png");
  hungryDogIMG = loadImage("dogImg.png");
  happyCatIMG = loadImage("cat(happy).png");
  hungryCatIMG = loadImage("cat(hungry).png");
  happyHamsterIMG = loadImage("hamster(happy).png");
  hungryHamsterIMG = loadImage("hamster(hungry).png");
  happyRabbitIMG = loadImage("rabbit(happy).png");
  hungryRabbitIMG = loadImage("rabbit(hungry).png");
  happyMacawIMG = loadImage("macaw(happy).png");
  hungryMacawIMG = loadImage("macaw(hungry).png");

  dogfoodIMG = loadImage("dogfood.png");
  milkIMG = loadImage("milk.png");
  carrotIMG = loadImage("carrot.png");
  berryIMG = loadImage("berry.png");
  cheeseIMG = loadImage("cheese.png");

  button1IMG = loadImage("button1.png");
  button2IMG = loadImage("button2.png");
  button3IMG = loadImage("button3.png");
  button4IMG = loadImage("button4.png");
  button5IMG = loadImage("button5.png");
}
function setup(){
  createCanvas(1000,500);
  background1 = createSprite(width/2,height/2,1000,500);
  background1.addImage(background1IMG);
  background1.scale = 1.7;

  background2 = createSprite(width/2,height/2,1000,500);
  background2.addImage(background2IMG);
  background2.scale = 1.7;
  background2.visible = false;

  background3 = createSprite(width/2,height/2,1000,500);
  background3.addImage(background3IMG);
  background3.scale = 1.9;
  background3.visible = false;

  button1 = createSprite(150,60,50,50);
  button1.addImage(button1IMG);
  button1.scale = 1.5;
  button1.visible = false;

  button2 = createSprite(500,230,50,50);
  button2.addImage(button2IMG);
  button2.scale = 1.5;
  button2.visible = false;

  button3 = createSprite(150,460,50,50);
  button3.addImage(button3IMG);
  button3.scale = 1.5;
  button3.visible = false;

  button4 = createSprite(850,460,50,50);
  button4.addImage(button4IMG);
  button4.scale = 1.5;
  button4.visible = false;

  button5 = createSprite(850,60,50,50);
  button5.addImage(button5IMG);
  button5.scale = 1.5;
  button5.visible = false;

  dog = createSprite(500,250,50,50);
  dog.addImage(hungryDogIMG);
  dog.scale = 0.4;
  dog.visible = false;

  cat = createSprite(500,250,50,50);
  cat.addImage(hungryCatIMG);
  cat.visible = false;

  rabbit = createSprite(500,250,50,50);
  rabbit.addImage(hungryRabbitIMG);
  rabbit.visible = false;

  macaw = createSprite(500,250,50,50);
  macaw.addImage(hungryMacawIMG);
  macaw.scale = 0.5;
  macaw.visible = false;

  hamster = createSprite(500,250,50,50);
  hamster.addImage(hungryHamsterIMG);
  hamster.visible = false;

  dogfood = createSprite(750,230,50,50);
  dogfood.addImage(dogfoodIMG);
  dogfood.scale = 0.3;
  dogfood.visible = false;

  milk = createSprite(750,230,50,50);
  milk.addImage(milkIMG);
  milk.scale = 0.4;
  milk.visible = false;

  carrot = createSprite(750,230,50,50);
  carrot.addImage(carrotIMG);
  carrot.scale = 0.3;
  carrot.visible = false;

  berry = createSprite(750,230,50,50);
  berry.addImage(berryIMG);
  berry.scale = 0.2;
  berry.visible = false;

  cheese = createSprite(750,230,50,50);
  cheese.addImage(cheeseIMG);
  cheese.scale = 0.2;
  cheese.visible = false;

  reset = createButton("REFILL THE PROVISIONS");
  reset.position(width/2-30,532);

  pet = createInput("              WHAT WOULD YOUR PET'S NAME BE ?  (Decide after choosing your pet, Input the name here & press ENTER)");
  pet.position(150,5);
  pet.size(750,20);
  pet.style('background','black');
  pet.style('color','white');

  database = firebase.database();
  foodref = database.ref('Food');
  foodref.on("value",reader);
}
function reader(data){
  foodz = data.val();
}
function writer(f){
  if(f<= 0){
    f = 0;
  }
  else{
  f = f - 1;
  }
  database.ref('/').update({
    Food : f
  })
}
function draw(){
  background("yellow");

  if(keyDown("space")){
    background1.visible = false;
    background2.visible = true;
  }
  
  reset.mousePressed(replay);
  drawSprites();
  // grant.mousePressed(play);

  if(mousePressedOver(button1)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // button1 = null;
    background3.visible = true;
    dog.visible = true;
    dogfood.visible = true;
    // cat.visible = false;
    // rabbit.visible = false;
    // hamster.visible = false;
    // macaw.visible = false;
  }
  if(mousePressedOver(button2)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    // button2 = null;
    background3.visible = true;
    cat.visible = true
    milk.visible = true;
  }
  if(mousePressedOver(button3)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    //button3 = null;
    background3.visible = true;
    rabbit.visible = true;
    carrot.visible = true;
  }
  if(mousePressedOver(button4)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
   // button4 = null;
    background3.visible = true;
    macaw.visible = true;
    berry.visible = true;
  }
  if(mousePressedOver(button5)){
    background2.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    button5.destroy();
    //button5 = null;
    background3.visible = true;
    hamster.visible = true;
    cheese.visible = true;
  }

  if(background2.visible == true){
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    button4.visible = true;
    button5.visible = true;
  }  
  if(dog.visible == true){
    textSize(20);
    fill("orangered");
    text(foodz,740,300);
  }
  if(mousePressedOver(dogfood)){
    writer(foodz);
    textSize(30);
    textFont("Algerian");
    fill("brown");
    text("THANK YOU !! :)",420,120);
    dog.addImage(happyDogIMG);
  } 
  if(cat.visible == true){
    textSize(20);
    fill("orangered");
    text(foodz,740,300);
  }
  if(mousePressedOver(milk)){
    writer(foodz);
    textSize(30);
    textFont("Algerian");
    fill("white");
    text("THANK YOU !! :)",420,120);
    cat.addImage(happyCatIMG);
    cat.scale = 0.5;
  } 
  if(rabbit.visible == true){
    textSize(20);
    fill("orangered");
    text(foodz,740,320);
  }
  if(mousePressedOver(carrot)){
    writer(foodz);
    textSize(30);
    textFont("Algerian");
    fill("orange");
    text("THANK YOU !! :)",420,120);
    rabbit.addImage(happyRabbitIMG);
    rabbit.scale = 0.5;
  } 
  if(macaw.visible == true){
    textSize(20);
    fill("orangered");
    text(foodz,740,300);
  }
  if(mousePressedOver(berry)){
    writer(foodz);
    textSize(30);
    textFont("Algerian");
    fill("green");
    text("THANK YOU !! :)",420,120);
    macaw.addImage(happyMacawIMG);
  } 
  if(hamster.visible == true){
    textSize(20);
    fill("orangered");
    text(foodz,740,300);
  }
  if(mousePressedOver(cheese)){
    writer(foodz);
    textSize(30);
    textFont("Algerian");
    fill("yellow");
    text("THANK YOU !! :)",420,120);
    hamster.addImage(happyHamsterIMG);
  } 

  if(keyDown("enter")){
    let u = pet.value();
    pet.hide();
    y = createElement('h2',"My name is " + u);
    y.position(350,330);
    y.style('color','white');
    y.style('font-size','50px');
  }
 }
 function replay(){
   writer(51);
 }
//  function play(){
//   let u = pet.value();
//   pet.hide();
//   grant.hide();
//   textSize(30);
//   textFont("Algerian");
//   fill("purple");
//   text(u,440,370);
//  }

