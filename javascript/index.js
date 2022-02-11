

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
  }
];


for (lista in extrato) {
  document.querySelector("table,.container_tabela tbody tr td").innerHTML += `
    <tr class="container_tabela">
      <td class="tabela_corpo">
        ${extrato[lista].sinal}
      </td>
      <td class="tabela_corpo">
        ${extrato[lista].mercadoria}
      </td>
      <td class="tabela_corpo">
        ${extrato[lista].valor}
      </td>
    </tr>
  `
}