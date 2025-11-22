// Dark/Light mode
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// Terminal Backend Fake
const terminal = document.getElementById("terminal");

const logs = [
  "> iniciando sistema...",
  "> carregando módulos...",
  "> verificando compilador: GCC OK",
  "> conectando a recursos locais...",
  "> inicialização concluída ✅",
  "> sistema pronto para instruções"
];

let i = 0;

function startTerminal() {
  if (i < logs.length) {
    const line = document.createElement("p");
    line.textContent = logs[i];
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    i++;
    setTimeout(startTerminal, 1200);
  }
}

setTimeout(startTerminal, 1500);

// Sistema de idiomas básico
const langToggle = document.getElementById("langToggle");
let lang = "pt";

langToggle.onclick = () => {
  lang = lang === "pt" ? "en" : "pt";

  if (lang === "en") {
    document.querySelector("h2").innerText = "Back-End Developer • Systems • C • Low Level";
    document.getElementById("about").querySelector("p").innerText =
      "I am a computer technician and Information Systems student focused on low-level programming and system development using C.";
    langToggle.innerText = "🌎 PT";
  } else {
    document.querySelector("h2").innerText = "Desenvolvedor Back-End • Sistemas • C • Baixo Nível";
    document.getElementById("about").querySelector("p").innerText =
      "Sou técnico em informática e estudante de Sistemas de Informação, com foco em desenvolvimento de sistemas e programação em baixo nível.";
    langToggle.innerText = "🌎 EN";
  }
};
