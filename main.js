canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")

roverwidth=100 
roverheight=90
roveerX=100
roveerY=100

backgroundImage="mars.jpg";
roveerImage="rover.png"

function add(){
  backgroundImgTag=new Image();
  backgroundImgTag.onload=uploadBackground;
  backgroundImgTag.src=backgroundImage;

  roveerImgTag = new Image();
  roveerImgTag.onload = uploadRoveer;
  roveerImgTag.src = roveerImage
}
function uploadBackground(){
  ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height)
}

function uploadRoveer(){
  ctx.drawImage(roveerImgTag,roveerX,roveerY,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
  keyPressed=e.keyCode;
  if(keyPressed == '38'){
    up();
    console.log("up")  
  }

  if(keyPressed == '40'){
    down();
    console.log("d")  
  }

  if(keyPressed == '37'){
    left();
    console.log("l")  
  }

  if(keyPressed == '39'){
    right();
    console.log("r")  
  }
}

function up(){
  if(roveerY>=0){
    roveerY = roveerY - 10;
    console.log("quando a seta para cima é precionada, x ="+ roveerX+"y = " + roveerY)
    uploadBackground();
    uploadRoveer();
  }
}

function down(){
  if(roveerY<=500){
    roveerY = roveerY + 10;
    roveerImage.rotation=90
    console.log("quando a seta para cima é precionada, x ="+ roveerX+"y = " + roveerY)
    uploadBackground();
    uploadRoveer();
  }
}


function left(){
  if(roveerX>=0){
    roveerX = roveerX - 10;
    console.log("quando a seta para cima é precionada, x ="+ roveerX+"y = " + roveerY)
    uploadBackground();
    uploadRoveer();
  }
}

function right(){
  if(roveerX<=700){
    roveerX = roveerX + 10;
    console.log("quando a seta para cima é precionada, x ="+ roveerX+"y = " + roveerY)
    uploadBackground();
    uploadRoveer();
  }
}

var nasaMarteArray = ["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"]
randomNumber = Math.floor(Math.random()*4)
backgroundImage = nasaMarteArray[randomNumber]