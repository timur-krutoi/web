let title = document.getElementById("title");
let button = document.getElementById("btn");
let screamer = document.getElementById("screamer");
let snd = document.getElementById("snd");

button.onclick = function() {

screamer.hidden = false;
title.hidden = true;
button.hidden = true;

snd.currentTime = 0;
snd.play();


setTimeout(function() {
screamer.hidden = true;
title.hidden = false;
button.hidden = false;

}, 1000);
};