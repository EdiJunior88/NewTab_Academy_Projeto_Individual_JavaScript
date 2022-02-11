

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
  console.log(`
  <tr>
    <td>
      ${extrato[lista].sinal}
    </td>
    <td>
      ${extrato[lista].mercadoria}
    </td>
    <td>
      ${extrato[lista].valor}
    </td>
  </tr>
  `)
}