//Variável para criar o objeto no localStorage
var extrato = [];

if (localStorage.getItem("extrato")) {
  extrato = JSON.parse(localStorage.getItem("extrato"));
}

//Função para mostrar as transações do localStorage no HTML
function extratoHTML() {
  let extrato = JSON.parse(localStorage.getItem("extrato"));
  let tabela = document.querySelector("#tabela tbody");

  if (extrato != null) {
    tabela.innerHTML = extrato.map((extrato) => {
      return (
      `
      <tr class="container_tabela_2">
        <td class="tabela_corpo" id="simbolo">+</td>
        <td class="tabela_corpo">`+ extrato.nomeMercadoria + `</td>
        <td class="tabela_corpo">R$ `+ extrato.valorMercadoria + `</td>
      </tr>
      `
      )
    }).join("");
    /* mudarSinal(); */
  }
}

/* function mudarSinal() {
  let extrato = JSON.parse(localStorage.getItem("extrato"));
  i = 0;
  for(; i < extrato.length; i++) {
    if (extrato[i]) {

    }
  }
} */

//Função de validação dos formulários
//Salvar os inputs em um array
//Adicionar o array "string" em um localStorage
//Transformar o array em uma "string"
function validacao(event) {
  event.preventDefault();

  let mercadoriaFormulario = document.getElementById("mercadoria").value;
  let valorFormulario = document.getElementById("valor").value;

  if(mercadoriaFormulario == "") {
    alert("Preencha o nome");
    document.getElementById("mercadoria").focus();
    return false;
  }

  if(valorFormulario == "") {
    alert("Preencha o valor");
    document.getElementById("valor").focus();
    return false;
  }

  extrato.push(
    {
      "nomeMercadoria": mercadoriaFormulario,
      "valorMercadoria": valorFormulario
    }
  );

  let extratoString = JSON.stringify(extrato);
  localStorage.setItem("extrato", extratoString);
  extratoHTML();
  paginaInicial();
}

//Função para redirecionar para a página index após recarregar o submit
function paginaInicial() {
  location.href="./index.html"
}

/* //Adiciona uma mensagem no HTML caso não haja transação
function mensagemExtrato() {
  let tabela = document.querySelector("table.container_secao_2 tbody");

  if (extrato.length == 0){
    tabela.innerHTML += `
    <tr class="container_tabela_2">
      <td class="tabela_corpo_2">Nenhuma transação cadastrada</td>
    </tr>
    `
  }
}
mensagemExtrato(); */