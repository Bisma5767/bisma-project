let myVideo1 = document.getElementById("video1"); 
function PlayPause1() 
{ 
  if (myVideo1.paused) 
     myVideo1.play(); 
  else 
     myVideo1.pause(); 
}

let myVideo2 = document.getElementById("video2"); 
function PlayPause2() 
{ 
  if (myVideo2.paused) 
     myVideo2.play(); 
  else 
     myVideo2.pause(); 
}

let myVideo3= document.getElementById("video3"); 
function PlayPause3() 
{ 
  if (myVideo3.paused) 
     myVideo3.play(); 
  else 
     myVideo3.pause(); 
}
let myVideo4 = document.getElementById("video4"); 
myVideo4.onplaying = function() {
   alert("The video is now playing");
 };

document.getElementById("first").addEventListener("click", myFunction);
function myFunction() {
   window.location.href = "/history.html";
}

document.getElementById("second").addEventListener("click", myFunction2);
function myFunction2() {
   window.location.href ="/analysis.html";
}

document.getElementById("third").addEventListener("click", myFunction3);
function myFunction3() {
   window.location.href = "/index2.html";
}

document.getElementById("fourth").addEventListener("click", myFunction4);
function myFunction4() {
   window.location.href = "/prevention.html";
}

document.getElementById("fifth").addEventListener("click", myFunction5);
function myFunction5() {
   window.location.href = "/symptoms.html";
}

document.getElementById("sixth").addEventListener("click", myFunction6);
function myFunction6() {
   window.location.href = "/index.html";
}
