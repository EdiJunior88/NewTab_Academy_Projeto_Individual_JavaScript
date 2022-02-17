let extrato = [];

//Função para salvar os inputs em um array
//Adicionar o array "string" em um localStorage
//Transformar o array em "string"
function extratoStorage() {
  let mercadoriaFormulario = document.getElementById("mercadoria").value;
  let valorFormulario = document.getElementById("valor").value;

  extrato.push(
    {
      "nomeMercadoria": mercadoriaFormulario,
      "valorMercadoria": valorFormulario
    }
  );

  let extratoString = JSON.stringify(extrato);
  localStorage.setItem("extrato_formulario", extratoString);

}


//Função de validação dos formulários
function validacao(event) {
  event.preventDefault();

  let mercadoriaFormulario = document.getElementById("mercadoria").value;
  let valorFormulario = document.getElementById("valor").value;

  if(mercadoriaFormulario == "") {
    alert("Preencha o nome");
    document.getElementById("mercadoria").focus();
    return false;
  }

  if(valorFormulario == "") {
    alert("Preencha o valor");
    document.getElementById("valor").focus();
    return false;
  }
}

