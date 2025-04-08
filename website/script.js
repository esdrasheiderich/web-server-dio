document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("actionBtn");
  const output = document.getElementById("output");

  const frases = [
    "A persistência realiza o impossível.",
    "Você é mais forte do que pensa.",
    "Cada dia é uma nova chance de vencer.",
    "Nunca pare de tentar, nunca pare de crescer.",
    "Acredite em você e tudo será possível.",
    "Coragem é agir com o coração mesmo com medo."
  ];

  btn.addEventListener("click", () => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    output.classList.remove("fade-in");
    void output.offsetWidth; // reinicia animação
    output.textContent = frase;
    output.classList.add("fade-in");
  });
});

