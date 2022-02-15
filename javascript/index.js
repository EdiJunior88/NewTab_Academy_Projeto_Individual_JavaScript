let transacaoUl = document.querySelector("tbody.container_tabela");
let exibirResultado = document.querySelector("#tabela_rodape_resultado");
let formulario = document.querySelector("#formulario1");
let inputMercadoria = document.querySelector("#mercadoria");
let inputValor = document.querySelector("#valor");

let extrato = [
  { id: 1, mercadoria: "Pão de Queijo", valor: -10.05 },
  { id: 2, mercadoria: "Bolo de Fubá", valor: 20 },
  { id: 3, mercadoria: "Pudim de Leite", valor: -10 },
  { id: 4, mercadoria: "Caramelo Achocolatado", valor: 150 }
];

//Função para adicionar dados e verificar se o valor é positivo ou negativo
//Adicionando uma tr na table

let adicionarTransacao = transacao => {
  let sinal = transacao.valor < 0 ? "-" : "+";
  let classeCSS = transacao.valor < 0 ? "menos" : "mais";
  let operacao = Math.abs(transacao.valor);
  let table = document.createElement("tr");

  table.classList.add(classeCSS);
  table.innerHTML = `
  <tr>
    <td class="tabela_corpo">+</td>
    <td class="tabela_corpo">${transacao.mercadoria}</td>
    <td class="tabela_corpo">${sinal} R$ ${operacao}</td>
  </tr>  
  `
  transacaoUl.append(table);
}

//Função para somar todos os valores para mostrar o saldo (lucro ou perda)

let atualizarSaldo = () => {
  let saldoTotal = extrato.map(transacao => transacao.valor);

  //Retirando do saldo o sinal negativo (-) com a função Math.abs() 
  let total = Math.abs(saldoTotal.reduce((acumulador, transacao) => acumulador + transacao, 0).toFixed(2));
  
  exibirResultado.textContent = `R$ ${total}`
}


//Função para preencher as informações no extrato através do forEach

let inicializar = () => {
  extrato.forEach(adicionarTransacao);
  atualizarSaldo();
}

inicializar();

//Função para adiconar os valores dos inputs no Extrato

formulario.addEventListener("submit", event => {
  event.preventDefault();

  //teste para saber se os inputs foram preenchidos
  if (inputMercadoria.value.trim() === "" || inputValor.value.trim() === "") {
    alert("Prencha o nome da mercadoria e o valor da transação");
    return;
  }

  //executará o código caso os dois inputs forem preenchidos
  
})







/* function desenhaExtrato() {

  for (lista in extrato) {
    document.querySelector("tbody.container_tabela").innerHTML += `
      <tr class="conteudo_dinamico" style = "background-color: ${ ((lista % 2 == 0) ? "#FFF" : "#EEE") }">
        <td class="tabela_corpo">${extrato[lista].sinal}</td>
        <td class="tabela_corpo">${extrato[lista].mercadoria}</td>
        <td class="tabela_corpo">${extrato[lista].valor}</td>
      </tr>
    `
  }
}

desenhaExtrato(); */