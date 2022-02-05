
//Botão validar os campos (formulários)

const botaoValidar = () => {
  const mercadoria = document.querySelector("#mercadoria");
  const valor = document.querySelector("#valor");

  if (mercadoria.value == "" || valor.value == "") {
    alert("Preencha os dados");
  }
}

const botao = document.querySelector(".button");
botao.addEventListener("click", botaoValidar, true);


