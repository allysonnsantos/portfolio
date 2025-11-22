// Toggle Dark / Light
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// Terminal estilo servidor
const terminal = document.getElementById("terminal");

const mensagens = [
  "> iniciando sistema...",
  "> carregando módulos...",
  "> conectando ao servidor...",
  "> conexão com banco: OK ✔️",
  "> carregando projetos...",
  "> backend online na porta 8080 ✅",
  "> portfolio carregado com sucesso 🚀"
];

let index = 0;

function escreverTerminal() {
  if (index < mensagens.length) {
    const linha = document.createElement("p");
    linha.textContent = mensagens[index];
    terminal.appendChild(linha);
    terminal.scrollTop = terminal.scrollHeight;
    index++;
    setTimeout(escreverTerminal, 1000);
  }
}

setTimeout(escreverTerminal, 800);
