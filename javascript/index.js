

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


for (lista in extrato) {
  document.querySelector("tbody.container_tabela").innerHTML += `
    <tr>
      <td class="tabela_corpo">${extrato[lista].sinal}</td>
      <td class="tabela_corpo">${extrato[lista].mercadoria}</td>
      <td class="tabela_corpo">${extrato[lista].valor}</td>
    </tr>
  `
}