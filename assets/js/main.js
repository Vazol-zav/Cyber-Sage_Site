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

window.addEventListener("click", (e) => {
  spawnRuneCircle(e.clientX, e.clientY);
});

