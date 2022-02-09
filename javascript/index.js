
//Botão validar os campos (formulários)

const botaoValidar = () => {
  let mercadoria = document.querySelector("#mercadoria");
  let valor = document.querySelector("#valor");

  if (mercadoria.value == "" || valor.value == "") {
    alert("Preencha os dados");
  }
}

let botao = document.querySelector(".button");
botao.addEventListener("click", botaoValidar, true);


// Inclusão dos dados capturados pelo formulario e adicionados no extrato
// Função na tabela de dados no extrato

let extrato = [
  {
    simbolo: "+",
    mercadoria: "Biscoito",
    valor: 20.42
  },
  {
    simbolo: "-",
    mercadoria: "Pão Doce",
    valor: 10.11
  },
  {
    simbolo: "+",
    mercadoria: "Bolo de Fubá",
    valor: 60.65
  },
  {
    simbolo: "-",
    mercadoria: "Pão de Gergelim",
    valor: 102.45
  },
];

function tabelaExtrato() { 
  for (lista in extrato.reverse()) {
    document.querySelector(".container_tabela").insertAdjacentHTML("afterend", `
      <div class="container_tabela" style="background-color: ${((lista % 2 == 0) ? "#FFF" : "#EEE")}">
        <div class="tabela_corpo">${extrato[lista].simbolo}</div>
        <div class="tabela_corpo">${extrato[lista].mercadoria}</div>
        <div class="tabela_corpo">${extrato[lista].valor}</div>
      </div>
      `)
    }
}

tabelaExtrato();