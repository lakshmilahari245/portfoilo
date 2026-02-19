// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Typing animation
const text = "Macharla Lakshmi Lahari | job seeker";
let i = 0;
function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,80);
  }
}
type();

// Skill bar animation
const bars = document.querySelectorAll(".bar span");
window.addEventListener("scroll",()=>{
  bars.forEach(bar=>{
    bar.style.width = bar.getAttribute("style").split(":")[1];
  });
});
