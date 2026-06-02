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
function spawnParticle(x, y) {
  const p = document.createElement("div");
  p.className = "particle";

  p.style.left = x + "px";
  p.style.top = y + "px";

  document.body.appendChild(p);

  const angle = Math.random() * Math.PI * 2;
  const distance = 20 + Math.random() * 20;

  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;
  requestAnimationFrame(() => {
    p.style.transform = `translate(${dx}px, ${dy}px) scale(0.5)`;
    p.style.opacity = "0";
  });
  setTimeout(() => p.remove(), 400);
}


//to keep performance smooth
let lastSpawn = 0;
const SPAWN_THROTTLE = 16;

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSpawn > SPAWN_THROTTLE) {
    spawnGhost(e.clientX, e.clientY);
    lastSpawn = now;
  }
});
let lastParticle = 0;
const PARTICLE_THROTTLE = 12; // ~80 particles/sec max

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastParticle > PARTICLE_THROTTLE) {
    spawnParticle(e.clientX, e.clientY);
    lastParticle = now;
  }
});
