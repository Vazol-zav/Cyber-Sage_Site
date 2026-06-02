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

  // fade + remove
  requestAnimationFrame(() => {
    ghost.style.opacity = "0";
    ghost.style.transform = "translate(-50%, -50%) scale(1.4)";
  });

  setTimeout(() => ghost.remove(), 400);
}

document.addEventListener("mousemove", (e) => {
  spawnGhost(e.clientX, e.clientY);
});
