let extrato = [];

if (localStorage.getItem("extratoFormulario")) {
  extrato = JSON.parse(localStorage.getItem("extratoFormulario"));
}

//Adiciona os itens do formulário no HTML (extrato de transações)
function tabelaExtrato() {
  let tabela = document.querySelector("table.container_secao_2 tbody");

  if (extrato.length == 0){
    tabela.innerHTML += `
    <tr class="container_tabela_2">
      <td class="tabela_corpo_2">Nenhuma transação cadastrada</td>
    </tr>
    `
  }
}

tabelaExtrato();


//Função para salvar os inputs em um array
//Adicionar o array "string" em um localStorage
//Transformar o array em uma "string"
function extratoStorage() {
  let mercadoriaFormulario = document.getElementById("mercadoria").value;
  let valorFormulario = document.getElementById("valor").value;

  extrato.push(
    {
      "nomeMercadoria": mercadoriaFormulario,
      "valorMercadoria": valorFormulario
    }
  );

  let extratoString = JSON.stringify(extrato);
  localStorage.setItem("extratoFormulario", extratoString);
}


//Função de validação dos formulários
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
}

