/*this is the code to move the orb/ new mouse.*/
const orb = document.querySelector(".orb");
document.addEventListener("mousemove", (move) => {
  orb.style.left=(move.clientX-20)+"px";
  orb.style.top=(move.clientY-20)+"px";
})
