// Theme toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.innerText = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// Terminal Hacker Animation
const terminal = document.getElementById("terminal");

const commands = [
  "> iniciando sistema...",
  "> carregando projetos...",
  "> conectando ao github...",
  "> bem-vindo ao portfolio de Allyson Santos",
  "> dev mode ativo ✅"
];

let i = 0;

function typeTerminal() {
  if (i < commands.length) {
    const line = document.createElement("p");
    line.textContent = commands[i];
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    i++;
    setTimeout(typeTerminal, 1200);
  }
}

setTimeout(typeTerminal, 1000);

// Efeito 3D mouse
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let centerX = card.clientWidth / 2;
    let centerY = card.clientHeight / 2;

    let moveX = (x - centerX) / 20;
    let moveY = (y - centerY) / 20;

    card.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
