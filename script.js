// Efeito de digitação
const text = "Desenvolvedor Full Stack em formação";
let index = 0;
const speed = 80;

function typingEffect() {
  const element = document.getElementById("typing");

  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, speed);
  }
}

typingEffect();

// Cursor animado
const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  trail.style.left = e.pageX - 10 + "px";
  trail.style.top = e.pageY - 10 + "px";
});

// Scroll reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Animação inicial
document.querySelectorAll(".section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "1s";
});
