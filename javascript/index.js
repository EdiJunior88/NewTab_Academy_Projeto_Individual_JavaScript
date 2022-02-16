let transacaoUl = document.querySelector("tbody.container_tabela");
let exibirResultado = document.querySelector("#tabela_rodape_resultado");
let formulario = document.querySelector("#formulario1");
let inputMercadoria = document.querySelector("#mercadoria");
let inputValor = document.querySelector("#valor");

/* let extrato = [
  { id: 1, mercadoria: "Pão de Queijo", valor: -10.05 },
  { id: 2, mercadoria: "Bolo de Fubá", valor: 20 },
  { id: 3, mercadoria: "Pudim de Leite", valor: -10 },
  { id: 4, mercadoria: "Caramelo Achocolatado", valor: 150 }
]; */

//Função para armazenar os addos no browser (localStorage())
let localStorageTransacao = JSON.parse(localStorage.getItem("transacoes"));
let transacoes = localStorage.getItem("transacoes") !== null ? localStorageTransacao : [];

//Função para remover os valores dos inputs, da tabela extrato e do localStorage
let removerTabela = () => {
  deletarLinhas = [...document.querySelectorAll("tbody.container_tabela, tfoot")];
  deletarLinhas.forEach((elemento) => {
    elemento.remove();
    localStorage.clear();
  })
};

document.querySelector(".link_limpar").addEventListener("click", removerTabela);

//Inserindo o título da tabela (Mercadoria e Valor) no extrato de transações
let tituloTabela = document.querySelector(".container_tabela");
tituloTabela.insertAdjacentHTML("beforebegin", `
  <tbody class="container_tabela_titulo">
    <tr>
      <td class="tabela_titulo">Mercadoria</div>
      <td class="tabela_titulo">Valor</div>
    </tr>
  </tbody>
`
);

//Função para adicionar dados e verificar se o valor é positivo ou negativo
//Adicionando uma tr na table
let adicionarTransacao = transacao => {
  let sinal = transacao.valor < 0 ? "-" : "+";
  let classeCSS = transacao.valor < 0 ? "menos" : "mais";
  let operacao = Math.abs(transacao.valor);
  let tabela = document.createElement("tr");
 
  tabela.classList.add(classeCSS);
  tabela.innerHTML = `
  <tr>
    <td class="tabela_corpo">+</td>
    <td class="tabela_corpo">${transacao.mercadoria}</td>
    <td class="tabela_corpo">${sinal} R$ ${operacao}</td>
  </tr>  
  `
  transacaoUl.append(tabela);
}

//Função para somar todos os valores para mostrar o saldo (lucro ou perda)
let atualizarSaldo = () => {
  let saldoTotal = transacoes.map(transacao => transacao.valor);

  //Retirando do saldo o sinal negativo (-) com a função Math.abs() 
  let total = Math.abs(saldoTotal.reduce((acumulador, transacao) => acumulador + transacao, 0).toFixed(2));
  
  exibirResultado.textContent = `R$ ${total}`
}

//Função para formatar moeda (máscara input de moeda)


//Função para preencher as informações no extrato através do forEach
let inicializar = () => {
  //Limpando antes a tabela no extrato
  transacaoUl.innerHTML = "";

  transacoes.forEach(adicionarTransacao);
  atualizarSaldo();
}

inicializar();

//Função para adicionar itens no localStorage
let atualizarLocalStorage = () => {
  localStorage.setItem("transacoes", JSON.stringify(transacoes));
}

//Função para gerar ID's aleatórias
let gerarID = () => Math.round(Math.random() * 1000);

//Função para adiconar os valores dos inputs
formulario.addEventListener("submit", event => {
  event.preventDefault();

  let transacaoMercadoria = inputMercadoria.value.trim();
  let transacaoValor = inputValor.value.trim();

  //teste para saber se os inputs foram preenchidos
  if (transacaoMercadoria === "" || transacaoValor === "") {
    alert("Preencha o nome da mercadoria e o valor da transação");
    return;
  }

  //executará o código caso os dois inputs forem preenchidos
  let transacao = { 
    id: gerarID(), 
    mercadoria: transacaoMercadoria, 
    valor: Number(transacaoValor) 
  }

  //Invocando o objeto extrato e adicionando elementos
  transacoes.push(transacao);
  inicializar();
  atualizarLocalStorage();

  //limpar os inputs
  inputMercadoria.value = "";
  inputValor.vaue = "";
});







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