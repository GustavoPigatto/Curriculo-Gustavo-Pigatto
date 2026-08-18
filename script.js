// Exibe uma mensagem simples de boas-vindas.
const botaoBoasVindas = document.getElementById("btn-boas-vindas");
const saudacao = document.getElementById("saudacao");

botaoBoasVindas.addEventListener("click", function () {
  alert("Olá! Obrigado por visitar meu currículo.");
  saudacao.innerText = "Que bom ter você por aqui!";
});

// Mostra ou esconde os conhecimentos acadêmicos.
const botaoDetalhes = document.getElementById("btn-detalhes");
const detalhesExtras = document.getElementById("detalhes-extras");

botaoDetalhes.addEventListener("click", function () {
  const estaAberto = botaoDetalhes.getAttribute("aria-expanded") === "true";
  botaoDetalhes.setAttribute("aria-expanded", String(!estaAberto));
  detalhesExtras.hidden = estaAberto;
  botaoDetalhes.innerHTML = estaAberto
    ? 'Ver conhecimentos acadêmicos <span aria-hidden="true">＋</span>'
    : 'Ocultar conhecimentos acadêmicos <span aria-hidden="true">−</span>';
});

// Lê o nome digitado e responde sem recarregar a página.
const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const mensagemForm = document.getElementById("mensagem-form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = campoNome.value.trim();
  mensagemForm.innerText = nome
    ? `Prazer em te conhecer, ${nome}! Obrigado pela visita.`
    : "Por favor, informe seu nome.";
});

// Controla o menu em telas pequenas.
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-principal");

botaoMenu.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});

// Mantém o ano do rodapé atualizado automaticamente.
document.getElementById("ano-atual").innerText = new Date().getFullYear();
