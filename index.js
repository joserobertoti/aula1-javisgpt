const button = document.querySelector(".modo-escuro");

button.addEventListener("click", () => {
  // Verifica se o modo escuro está ativado
  if (document.body.classList.contains("modo-escuro")) {
    // Desativa o modo escuro
    document.body.classList.remove("modo-escuro");

    // Salva a preferência do usuário
    localStorage.setItem("modo-escuro", false);
  } else {
    // Ativa o modo escuro
    document.body.classList.add("modo-escuro");

    // Salva a preferência do usuário
    localStorage.setItem("modo-escuro", true);
  }
});

if (document.body.classList.contains("modo-escuro")) {
    // Desativa o modo escuro
    document.body.classList.remove("modo-escuro");
  
    // Salva a preferência do usuário
    localStorage.setItem("modo-escuro", false);
  } else {
    // Ativa o modo escuro
    document.body.classList.add("modo-escuro");
  
    // Salva a preferência do usuário
    localStorage.setItem("modo-escuro", true);
  }
  