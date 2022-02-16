
let extrato = [
  { mercadoria: "Pão doce", valor: "50,45"},
  { mercadoria: "Mingau", valor: "2,00"},
  { mercadoria: "Farinha", valor: "3,20"},
  { mercadoria: "Cuscuz", valor: "10,03"}
];

for (lista in extrato) {
  document.querySelector("table.container_secao_2 tbody").innerHTML += `
  <tr class="container_tabela">
    <td class="tabela_titulo_2">${ extrato[lista].mercadoria }</div>
    <td class="tabela_titulo_2">${ extrato[lista].valor }</div>
  </tr>
  `
}
