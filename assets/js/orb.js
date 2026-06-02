/*this is the code to move the orb/ new mouse.*/
const orb = document.querySelector(".orb");
document.addEventListener("mousemove", (move) => {
  orb.style.left=(move.clientX-20)+"px";
  orb.style.top=(move.clientY-20)+"px";
})
function spawnGhost(x, y) {
  const ghost = document.createElement("div");
  ghost.className = "ghost";
  ghost.style.left = x + "px";
  ghost.style.top = y + "px";

  document.body.appendChild(ghost);

  setTimeout(() => ghost.remove(), 400);
}



let lastSpawn = 0;
const SPAWN_THROTTLE = 16;

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSpawn > SPAWN_THROTTLE) {
    spawnGhost(e.clientX, e.clientY);
    lastSpawn = now;
  }
});
