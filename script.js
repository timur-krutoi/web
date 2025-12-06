let title = document.getElementById("title");
let button = document.getElementById("btn");
let screamer = document.getElementById("screamer");

button.onclick = function() {

screamer.hidden = false;

setTimeout(function() {
screamer.hidden = true;
}, 1000);
};