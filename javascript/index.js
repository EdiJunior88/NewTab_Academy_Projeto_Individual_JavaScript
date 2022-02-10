
/* //Botão validar os campos (formulários)

const botaoValidar = () => {
  let mercadoria = document.querySelector("#mercadoria");
  let valor = document.querySelector("#valor");

  if (mercadoria.value == "" || valor.value == "") {
    alert("Preencha os dados");
  }
}

let botao = document.querySelector(".button");
botao.addEventListener("click", botaoValidar, true); */


//

let extratoStorage = localStorage.getItem("extrato");

if (extratoStorage != null) {
  let extrato = JSON.parse(extratoStorage);
} 
else {
  let extrato = [];
}

// Inclusão dos dados capturados pelo formulario e adicionados no extrato
// Função na tabela de dados no extrato

function tabelaExtrato() { 
  //criando novas linhas da tabela a partir do objeto "extrato"
  
  for (lista in extrato.reverse()) {
    document.querySelector(".container_tabela").insertAdjacentHTML("afterend", `
      <div class="container_tabela tabela_dinamica" style="background-color: ${((lista % 2 == 0) ? "#FFF" : "#EEE")}">
        <div class="tabela_corpo">
          ${extrato[lista].simbolo}
        </div>
        <div class="tabela_corpo">
          ${extrato[lista].mercadoria}
        </div>
        <div class="tabela_corpo">
          ${extrato[lista].valor}
        </div>
      </div>
      `)
    }
}

tabelaExtrato();