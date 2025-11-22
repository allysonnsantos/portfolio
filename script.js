// Dark / Light Mode
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// Terminal fake
const terminal = document.getElementById("terminal");

const mensagens = [
  "> carregando dados...",
  "> conectando ao GitHub...",
  "> carregando projetos...",
  "> modo dev ativado ✅",
  "> bem-vindo ao portfolio de Allyson Santos"
];

let index = 0;

function escreverTerminal() {
  if (index < mensagens.length) {
    const linha = document.createElement("p");
    linha.textContent = mensagens[index];
    terminal.appendChild(linha);
    terminal.scrollTop = terminal.scrollHeight;
    index++;
    setTimeout(escreverTerminal, 1200);
  }
}

setTimeout(escreverTerminal, 1500);
