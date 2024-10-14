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

function playaudiorocket() {
  var audio = document.getElementById("rocketlauncher");
  audio.currentTime=0;
  audio.load();
  audio.play();

  var backgroundfirerocket = document.getElementById ("serioussam");
  backgroundfirerocket.classList.add ('fire');

  setTimeout(function(){
    backgroundfirerocket.classList.remove ('fire'); 
  },100);
}


var volumeG = document.getElementById ("grenadelauncher")
volumeG.volume = 0.1;
var volumeR = document.getElementById ("rocketlauncher")
volumeR.volume = 0.1;