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
        <td class="tabela_corpo">${formatterCurrency(Number(extrato.valorMercadoria))}</td>
      </tr>
      `
      )
    }).join("");
    mudarSinal();
    totalExtrato();
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

//Função para formatação monetária, nesse caso em moeda brasileira
function formatterCurrency(value) {
  const valueFormat = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valueFormat;
}

//Método para formatar números de acordo com a localidade
var formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

//Função para somar os valores do input (valor)
//Mostrar o seu total com o status [LUCRO] ou [PREJUÍZO]
function totalExtrato() {
  var total = 0;
  let valorInput;

  for (produto in extrato) {
    if (extrato[produto].selecaoMercadoria == "compra") {
      valorInput = extrato[produto];
      total -= Number(extrato[produto].valorMercadoria);
    } else {
      total += Number(extrato[produto].valorMercadoria);
    }
  }

  if (extrato.length > 0) {
    document.querySelector("#tabela tfoot").innerHTML += `
      <tr class="container_tabela_4">
        <td class="tabela_rodape">Total</td>
        <td class="tabela_rodape">${formatter.format(total)}</td>
      </tr>
      `
      document.querySelector("#tabela tfoot").innerHTML += `
      <tr>
        <td class="tabela_rodape status">${Math.sign(total) > 0 ? "[LUCRO]" : "[PREJUÍZO]"}</td>
      </tr>
      `
  }
}

//Função máscara monetária para o padrão BR
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){  
  var sep = 0;  
  var key = '';  
  var i = j = 0;  
  var len = len2 = 0;  
  var strCheck = '0123456789';  
  var aux = aux2 = '';  
  var whichCode = (window.Event) ? e.which : e.keyCode;  
  if (whichCode == 13 || whichCode == 8) return true;  
  key = String.fromCharCode(whichCode); // Valor para o código da Chave  
  if (strCheck.indexOf(key) == -1) return false; // Chave inválida  
  len = objTextBox.value.length;  
  for(i = 0; i < len; i++)  
      if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;  
  aux = '';  
  for(; i < len; i++)  
      if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);  
  aux += key;  
  len = aux.length;  
  if (len == 0) objTextBox.value = '';  
  if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;  
  if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;  
  if (len > 2) {  
      aux2 = '';  
      for (j = 0, i = len - 3; i >= 0; i--) {  
          if (j == 3) {  
              aux2 += SeparadorMilesimo;  
              j = 0;  
          }  
          aux2 += aux.charAt(i);  
          j++;  
      }  
      objTextBox.value = '';  
      len2 = aux2.length;  
      for (i = len2 - 1; i >= 0; i--)  
      objTextBox.value += aux2.charAt(i);  
      objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);  
  }  
  return false;  
}  

/* function formatarMoeda(z) {
  v = z.value;
  v=v.replace(/\D/g,"") // permite digitar apenas numero
  v=v.replace(/(\d{1})(\d{17})$/,"$1.$2") // coloca ponto antes dos ultimos digitos
  v=v.replace(/(\d{1})(\d{13})$/,"$1.$2") // coloca ponto antes dos ultimos 13 digitos
  v=v.replace(/(\d{1})(\d{10})$/,"$1.$2") // coloca ponto antes dos ultimos 10 digitos
  v=v.replace(/(\d{1})(\d{7})$/,"$1$2") // coloca ponto antes dos ultimos 7 digitos
  v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") // coloca ponto antes dos ultimos 5 digitos
  v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") // coloca virgula antes dos ultimos 2 digitos
  z.value = v;
} */

//Função para deletar os dados do LocalStorage
//Se não houver nenhuma transação cadastrada aparece um alert
//Se houver transação cadastrada a função continua até deletar os dados
function deletaLocalStorage() {
  if(extrato.length <= 0) {
      alert("Nenhum registro de transação");
    } else {
      let caixaTexto = confirm("Deseja excluir as transações?");
    
      if(caixaTexto == true) {
        localStorage.clear();
        alert("Transações excluídas");
      } else {
        alert("Exclusões canceladas");
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
    alert("Preencha o nome da mercadoria");
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
      .replaceAll(".", "")
      .replaceAll(",", "."),
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