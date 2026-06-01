/*this is the code to move the orb/ new mouse.*/
const orb = document.querySelector(".orb");


document.addEventListener("mousemove", (event) => {
  orb.style.transform = `translate(${event.clientX-20}px, ${event.clientY-20}px)`;
