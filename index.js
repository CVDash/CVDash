
window.onscroll = function() {myFunction()};


var header = document.getElementById("bannerid");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 


function dropdownopen() {
  var x = document.getElementById("dropdown");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
     }
 }