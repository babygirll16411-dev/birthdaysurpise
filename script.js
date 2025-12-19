let currentPage = 1;

/* PAGE NAVIGATION */
function goToPage(page) {
  document.querySelector(".page.active").classList.remove("active");
  document.querySelector(".page" + page).classList.add("active");

  if (page === 2) startMeter();
  if (page === 4) createFloating();
}

/* FLOATING EMOJIS */
function createFloating() {
  document.querySelectorAll(".floating").forEach(f => f.innerHTML = "");

  document.querySelectorAll(".floating").forEach(floating => {
    const emojis = ["💖","💕","🎈","🌸","💗","✨"];
    for (let i = 0; i < 30; i++) {
      let span = document.createElement("span");
      span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = 6 + Math.random() * 6 + "s";
      floating.appendChild(span);
    }
  });
}

createFloating();

/* CUTENESS METER */
function startMeter() {
  let fill = document.getElementById("meterFill");
  let percent = document.getElementById("percentage");
  let warning = document.getElementById("warning");

  let value = 0;
  let interval = setInterval(() => {
    value += 5;
    fill.style.width = Math.min(value, 100) + "%";
    percent.innerText = value + "%";

    if (value >= 120) {
      percent.innerText = "∞%";
      warning.style.display = "block";
      document.body.style.background = "hotpink";
      clearInterval(interval);
    }
  }, 100);
}

/* REVEAL TEXT */
function reveal(el) {
  el.classList.add("revealed");
}

/* HEART GAME */
let caught = 0;

function startGame() {
  const area = document.getElementById("gameArea");
  const done = document.getElementById("gameDone");

  area.innerHTML = "";
  done.style.display = "none";
  caught = 0;
  document.getElementById("caught").innerText = caught;

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");
    heart.innerText = "💗";
    heart.style.left = Math.random() * 90 + "vw";
    heart.style.top = Math.random() * 80 + "vh";

    heart.onclick = () => {
      heart.remove();
      caught++;
      document.getElementById("caught").innerText = caught;

      if (caught === 8) {
        done.style.display = "block";
      }
    };

    area.appendChild(heart);
  }
}

/* GLOBAL BACKGROUND EMOJIS (ALL PAGES) */
const emojiLayer = document.querySelector(".emoji-layer");
const emojis = ["💖","💕","🎈","🌸","💗","🎀","✨","💞"];

for (let i = 0; i < 35; i++) {
  const span = document.createElement("span");
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 6 + Math.random() * 6 + "s";
  span.style.animationDelay = Math.random() * 5 + "s";
  emojiLayer.appendChild(span);
}
