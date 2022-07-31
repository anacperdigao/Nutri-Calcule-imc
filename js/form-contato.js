/* Responder com alert e o nome da pessoa */
var botaoEnviar = document.querySelector(".botao")

function mensagem(){
    var nome = document.querySelector("#nomesobrenome").value;
    
    if (nome) {
    alert('Olá ' + nome + ', vou entrar em contato com você em até 24h.');
    }
}



/* Só habilitar o botão com os inputs preenchidos */
function checkInputs(inputs) {

    var filled = true;
  
  inputs.forEach(function(input) {
    
    if(input.value === "") {
        filled = false;
    }
  
    });
  
  return filled;
  
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector(".botao");

inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {

    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }

  });

});
