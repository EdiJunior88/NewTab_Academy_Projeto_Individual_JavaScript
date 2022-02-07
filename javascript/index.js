
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


// Inclusão dos dados capturados pelo formulario e adicionados no extrato

extrato = [
  {
    simbolo: "+",
    mercadoria: "biscoito",
    valor: 12.00
  },
  {
    simbolo: "-",
    mercadoria: "bolo",
    valor: 8.00
  },
  {
    simbolo: "+",
    mercadoria: "salame",
    valor: 20.00
  }
]
