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
        <td class="tabela_corpo simbolo">+</td>
        <td class="tabela_corpo">`+ extrato.nomeMercadoria + `</td>
        <td class="tabela_corpo">R$ `+ extrato.valorMercadoria + `</td>
      </tr>
      `
      )
    }).join("");
    mudarSinal();
    listarTotal();
  }
}

//Função para mudar o sinal conforme o tipo de transação
function mudarSinal() {
  let extrato = JSON.parse(localStorage.getItem("extrato"));

  for (i = 0; i < extrato.length; i++) {
    if (extrato[i].selecaoMercadoria == "compra") {
      document.getElementsByClassName("simbolo")[i].innerHTML = "-";
    } else {
      document.getElementsByClassName("simbolo")[i].innerHTML = "+";
    }
  }
}

//Função para deletar os dados do LocalStorage
//Se não houver nenhuma transação cadastrada aparece um alert
//Se houver transação cadastrada a função continua até deletar os dados
function deletaLocalStorage() {
  if(extrato.length <= 0) {
      alert("Nenhum registro de transação")
    } else {
      let caixaTexto = confirm("Deseja excluir as transações?");
    
      if(caixaTexto = true) {
        localStorage.clear();
        alert("Transações excluídas");
      } else {
        alert("Exclusões cancelada");
      }
    }
    extratoHTML();
    paginaInicial();
  }

//Link (Limpar Dados - HTML) fica na espera do evento pelo método addEventListener()
let linkExcluir = document.getElementById("link_limpar");
linkExcluir.addEventListener("click", deletaLocalStorage)

//Função de validação dos formulários
//Salvar os inputs em um array
//Adicionar o array "string" em um localStorage
//Transformar o array em uma "string"
function validacao(event) {
  event.preventDefault();
  
  var selecao = document.getElementById("selecao").value;
  var mercadoriaFormulario = document.getElementById("mercadoria").value;
  var valorFormulario = document.getElementById("valor").value;

  if(selecao == "seleciona") {
    alert("Selecione o tipo de transação");
    return false;
  }

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
      "selecaoMercadoria": selecao,
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