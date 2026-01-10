let area = document.getElementById("area");
let btn = document.getElementById("btn");
let scoreText = document.getElementById("score");
let msg = document.getElementById("msg");

let score = 0;
let target = 50;

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButton() {
  let areaRect = area.getBoundingClientRect();
  let btnRect = btn.getBoundingClientRect();

  let maxX = areaRect.width - btnRect.width;
  let maxY = areaRect.height - btnRect.height;

  let x = randInt(0, Math.max(0, Math.floor(maxX)));
  let y = randInt(0, Math.max(0, Math.floor(maxY)));

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

btn.addEventListener("mouseover", function() {
  setTimeout(() => {
  moveButton();
}, 200);
});

btn.addEventListener("touchstart", function(e) {
  e.preventDefault();
  moveButton();
});

btn.addEventListener("click", function() {
  score++;
  scoreText.textContent = "Поймал: " + score;

  if (score >= target) {
    msg.textContent = "Победа! Ты поймал " + score + " раз.";
    btn.disabled = true;
    btn.textContent = "Готово";
  } else {
    msg.textContent = "Ещё! Осталось: " + (target - score);
    moveButton();
  }
});

moveButton();

window.addEventListener("resize", function() {
  moveButton();
});
