let transacaoUl = document.querySelector("tbody.container_tabela")

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
  let operacao = Math.abs(transacao.valor)
  let table = document.createElement("tr");

  table.classList.add(classeCSS);
  table.innerHTML = `
  <tr>
    <td class="tabela_corpo">+</td>
    <td class="tabela_corpo">${transacao.mercadoria}</td>
    <td class="tabela_corpo">${sinal} R$${operacao}</td>
  </tr>  
  `
  transacaoUl.append(table);
}

adicionarTransacao(extrato[0])


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