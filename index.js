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

function goRight() {
  hStandPoint += 10;
  rabbit.style.left = hStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  rabbit.style.left = hStandPoint + "px";
}
let vStandPoint = 0;
function goUp() {
  vStandPoint -= 10;
  rabbit.style.top = vStandPoint + "px";
}
function goDown() {
  vStandPoint += 10;
  rabbit.style.top = vStandPoint + "px";
}
function move(e) {
  if (e.code == "KeyA") {
    goRight();
  }
  if (e.code == "KeyD") {
    goLeft();
  }
}
const rabbit = document.querySelector(".rabbit");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
