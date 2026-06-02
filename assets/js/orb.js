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

  // Trigger animation on next frame
  ghost.offsetHeight; // Force reflow
  ghost.style.opacity = "0";
  ghost.style.transform = "translate(-50%, -50%) scale(1.4)";
  ghost.style.transition = "opacity 0.4s, transform 0.4s";

  setTimeout(() => ghost.remove(), 400);
}

// Throttle ghost spawning to ~60fps or less
let lastSpawn = 0;
const SPAWN_THROTTLE = 16; // ~60fps

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSpawn > SPAWN_THROTTLE) {
    spawnGhost(e.clientX, e.clientY);
    lastSpawn = now;
  }
});
