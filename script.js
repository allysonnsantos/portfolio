// =======================
// Efeito de digitação
// =======================
const title = document.querySelector("header h1");
const text = title.innerText;
title.innerText = "";
let i = 0;

function typeWriter() {
  if(i < text.length){
    title.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// =======================
// Partículas animadas
// =======================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 100; i++){
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 1 - 0.5,
    dy: Math.random() * 1 - 0.5
  });
}

function animateParticles(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// =======================
// Puxar projetos do GitHub
// =======================
fetch("https://api.github.com/users/allysonnsantos/repos")
  .then(response => response.json())
  .then(data => {
    const reposDiv = document.getElementById("repos");
    reposDiv.innerHTML = "";

    data.forEach(repo => {
      let card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição"}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;

      reposDiv.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById("repos").innerText = "Erro ao carregar repositórios.";
  });

// =======================
// Ajustar canvas ao resize
// =======================
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
