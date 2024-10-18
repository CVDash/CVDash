function playaudiogrenade() {
  var audio = document.getElementById("grenadelauncher");
  audio.currentTime=0;
  audio.load();
  audio.play();

  var backgroundfire = document.getElementById ("quake");
  backgroundfire.classList.add ('fire');

  setTimeout(function(){
    backgroundfire.classList.remove ('fire'); 
  },100);
}

function playaudiocannon() {
  var audio = document.getElementById("cannon");
  audio.currentTime=0;
  audio.load();
  audio.play();

  var backgroundfirerocket = document.getElementById ("serioussam");
  backgroundfirerocket.classList.add ('fire');

  setTimeout(function(){
    backgroundfirerocket.classList.remove ('fire'); 
  },100);
}

function playaudiorocketlauncher() {
  var audio = document.getElementById("rocketlauncher");
  var minigun = document.getElementById("minigun");
  var switchweapon = document.getElementById("painkiller");

   if (switchweapon.classList.contains("minigun")) {
    minigun.currentTime=0;
    minigun.load();
    minigun.play();
    switchweapon.classList.remove("minigun")

   } else {
    minigun.pause();
    audio.currentTime=0;
    audio.load();
    audio.play();
    switchweapon.classList.add("minigun")
   }


   

  

  var backgroundfirerocket = document.getElementById ("painkiller");
  backgroundfirerocket.classList.add ('fire');

  setTimeout(function(){
    backgroundfirerocket.classList.remove ('fire'); 
  },100);
}



function playaudioshotgun() {
  var audio = document.getElementById("shotgun");
  audio.currentTime=0;
  audio.load();
  audio.play();

  var backgroundfirerocket = document.getElementById ("quake2");
  backgroundfirerocket.classList.add ('fire');

  setTimeout(function(){
    backgroundfirerocket.classList.remove ('fire'); 
  },100);
}



var volumeG = document.getElementById ("grenadelauncher")
volumeG.volume = 0.1;
var volumeG = document.getElementById ("shotgun")
volumeG.volume = 0.1;
var volumeR = document.getElementById ("rocketlauncher")
volumeR.volume = 0.1;
var volumeR = document.getElementById ("minigun")
volumeR.volume = 0.1;
var volumeR = document.getElementById ("cannon")
volumeR.volume = 0.1;