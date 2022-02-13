let extrato = [
  {
    sinal: true,
    mercadoria: "Pão de Queijo",
    valor: "10.05"
  },
  {
    sinal: false,
    mercadoria: "Bolo de Fubá",
    valor: "2.00"
  },
  {
    sinal: true,
    mercadoria: "Pudim de Leite",
    valor: "30.80"
  },
  {
    sinal: false,
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

function deletaLista() {
  linhasTabela = [...document.querySelectorAll("tbody.container_tabela .conteudo_dinamico")];
  linhasTabela.forEach((elemento) => {
    elemento.remove();
  });
}

document.querySelector(".link_limpar").addEventListener("click", deletaLista);


// LocalStorage da tabela extrato

let listaStorage = localStorage.getItem("extrato");

if (listaStorage != null) {
  extrato = JSON.parse(listaStorage);
} else {
  let extrato = [];
}

localStorage.setItem("extrato", JSON.stringify(extrato));


//Função testar formulário

function testaFormulario(e) {
  e.preventDefault();
  
  let listaStorage = localStorage.getItem("extrato");

  if (listaStorage != null) {
    extrato = JSON.parse(listaStorage);
  } else {
    let extrato = [];
  }

  extrato.push({
    sinal: (e.target.elements["sinal"].value == "true"),
    mercadoria: e.target.elements["mercadoria"].value,
    valor: e.target.elements["valor"].value
  });

  console.log(extrato);
}