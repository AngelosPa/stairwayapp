let clicked = false;
document.querySelector(".clicker").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".sun").style.cssText = "display:inline;";
    document.querySelector("body").style.cssText = "animation-name: sunset; ";
  } else {
    document.querySelector(".sun").style.cssText = "display: none;";
    document.querySelector("body").style.cssText = "animation-name: none; ";
  }
});

let year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year + 300 + " AD";

//for the bunny
let hStandPoint = 0;
let vStandPoint = 0;

function hopla() {
  let jump = document.querySelector(".rabbit");
  jump.classList.toggle("rabbit_stop");
}
function goRight() {
  hStandPoint += 10;
  rabbit.style.left = hStandPoint + "px";
}
function goupright() {
  vStandPoint -= 10;
  hStandPoint += 8;
  rabbit.style.left = hStandPoint + "px";
  rabbit.style.top = vStandPoint + "px";
}
function godownright() {
  vStandPoint += 10;
  hStandPoint += 8;
  rabbit.style.left = hStandPoint + "px";
  rabbit.style.top = vStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  rabbit.style.left = hStandPoint + "px";
}
function godownleft() {
  vStandPoint += 10;
  hStandPoint -= 8;
  rabbit.style.left = hStandPoint + "px";
  rabbit.style.top = vStandPoint + "px";
}
function godUpleft() {
  vStandPoint -= 10;
  hStandPoint -= 8;
  rabbit.style.left = hStandPoint + "px";
  rabbit.style.top = vStandPoint + "px";
}
function move(e) {
  if (e.code == "Enter") {
    hopla();
  }
  //right movement D, E, X
  if (e.code == "KeyD") {
    goRight();
  }
  if (e.code == "KeyE") {
    goupright();
  }
  if (e.code == "KeyX") {
    godownright();
  }
  //left movement
  if (e.code == "KeyA") {
    goLeft();
  }
  if (e.code == "KeyQ") {
    godUpleft();
  }

  if (e.code == "KeyZ") {
    godownleft();
  }
}
const rabbit = document.querySelector(".rabbit");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
