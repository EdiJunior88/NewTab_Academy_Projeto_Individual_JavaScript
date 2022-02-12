let extrato = [
  {
    sinal: "+",
    mercadoria: "Pão de Queijo",
    valor: "10.05"
  },
  {
    sinal: "-",
    mercadoria: "Bolo de Fubá",
    valor: "2.00"
  },
  {
    sinal: "+",
    mercadoria: "Pudim de Leite",
    valor: "30.80"
  },
  {
    sinal: "-",
    mercadoria: "Caramelo Achocolatado",
    valor: "25.10"
  },
];

// Função para adicionar dados no extrato através dos formulários

function desenhaExtrato() {

 /*  linhasCorrentes = [...document.querySelectorAll("tbody.container_tabela .conteudo_dinamico")];
  linhasCorrentes.forEach((elemento) => {
    elemento.remove();
  }); */

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

desenhaExtrato();


//função para deletar os dados do extrato

function deleteLista() {
  linhasTabela = [...document.querySelectorAll("tbody.container_tabela .conteudo_dinamico")];
  linhasTabela.forEach((elemento) => {
    elemento.remove();
  });
}

document.querySelector(".link_limpar").addEventListener("click", deleteLista);