class Pen {
  constructor(x, y) {
  this.x = x;
  this.y = y;
  this.lastX = x;
  this.lastY = y;
  this.angle = Math.random() * Math.PI * 2;
  this.speed = 2 + Math.random() * 2;
  this.color = `hsl(${Math.random()*360}, 100%, 50%)`;
  this.size = 4;
}
document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) {
    pens.push(new Pen(e.clientX, e.clientY));
  }
});
