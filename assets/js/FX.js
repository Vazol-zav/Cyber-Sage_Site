/*-_-_-______________________________________________________________________________________________________________________________________________________________
canvas set up_-_-_____________________________________________________________________________________________________________________________________________________*/
const draw = document.getElementById("draw");
const ctx = draw.getContext("2d");

draw.width = window.innerWidth;
draw.height = window.innerHeight;

let drawing = true;
let lastX = 0;
let lastY = 0;
/* manual draw stuff(might use later)
draw.addEventListener("mousemove", (e) => {
  if (!drawing) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  lastX = e.clientX;
  lastY = e.clientY;
});

ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
ctx.lineWidth = 5;
ctx.lineCap = "round";

*/

/* --------------------------------------------------
   6. PEN CLASS (PARTICLE OBJECT)
-------------------------------------------------- */
class Pen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 2 + Math.random() * 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.size = 4;
  }
  /*Vsupport V for V laterV*/
draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}
/*spawner : ) */
let pens = [];
let PN = 2;
draw.addEventListener("mousedown", (e) => {
  for (let i = 0; i < PN; i++) {
    pens.push(new Pen(e.clientX, e.clientY));
  }
});
/*animation ex*/
//update EX
update() {
  //V set PN
  PN=60;
  //set PN^
  //Vthis tells it move from there to here
    this.lastX = this.x;
    this.lastY = this.y;
  //^this tells it move from there to here
    //movement stuffV
    this.angle += (Math.random() - 0.5) * 0.2;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
  //movement stuff^
  }
//VanimationVloopV
function Fanimate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    /*___function for light/dark switch
    FX === "dark"
    ? "rgba(0, 0, 0, 0.1)"
    : "rgba(255, 255, 255, 0.1)";*/

  ctx.fillRect(0, 0, draw.width, draw.height);

  pens.forEach(pen => {
    pen.update();
    //^impo^^update function, write it right
    pen.draw(ctx);
  });
}

/*_________________this is always last, animation loop____________________________________________________________________
ALWAYS LAST_______________________________________________________________________________________________________________*/
function animate() {
  requestAnimationFrame(animate);
Fanimate();
 /*function/ animation*/
}

animate();
