function spawnRuneCircle(cx, cy) {
  const count = 24;      // number of particles
  const radius = 60;     // circle radius in px

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;

    const tx = cx + radius * Math.cos(angle);
    const ty = cy + radius * Math.sin(angle);

    const p = document.createElement("div");
    p.className = "rune-particle";

    // start at cursor
    p.style.left = cx + "px";
    p.style.top  = cy + "px";

    document.body.appendChild(p);

    // animate into position
    requestAnimationFrame(() => {
      const dx = tx - cx;
      const dy = ty - cy;
      p.style.transform = `translate(${dx}px, ${dy}px)`;
      p.style.opacity = "1";
    });

    // fade out + remove
    setTimeout(() => {
      p.style.opacity = "0";
    }, 600);

    setTimeout(() => {
      p.remove();
    }, 1200);
  }
}

const SIGIL_POINTS = [
  { x: 0,  y: -40 },
  { x: 0,  y: -20 },
  { x: 0,  y:   0 },
  { x: 0,  y:  20 },
  { x: 0,  y:  40 },
  { x: 20, y: -10 },
  { x: 40, y: -20 },
  { x: 60, y: -30 },
  { x: 20, y: 30 },
  { x: 40, y: 20 },
  { x: 60, y: 10 }
];

function spawnRuneSigil(cx, cy) {
  SIGIL_POINTS.forEach((pt, i) => {
    const p = document.createElement("div");
    p.className = "rune-particle";

    // start at cursor
    p.style.left = cx + "px";
    p.style.top  = cy + "px";

    document.body.appendChild(p);

    // stagger timing for a "drawing" effect
    const delay = i * 40;

    setTimeout(() => {
      const dx = pt.x;
      const dy = pt.y;
      p.style.transform = `translate(${dx}px, ${dy}px)`;
      p.style.opacity = "1";
    }, delay);

    setTimeout(() => {
      p.style.opacity = "0";
    }, delay + 600);

    setTimeout(() => {
      p.remove();
    }, delay + 1200);
  });
}
let F = 0

window.addEventListener("click", (e) => {
  if(F=== 0){
  spawnRuneCircle(e.clientX, e.clientY);
  F=1
  }
  if(F=== 1){
  spawnRuneSigil(e.clientX, e.clientY);
  F=0
  }
});

