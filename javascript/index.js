
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

