var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for ( var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value, "i"); //Aqui é uma expressao regular e passei primeiro o que quero procurar e depois o i significa "case insensitive", onde letra maiuscula ou minuscula nao importa.

            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }
            else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else{
        for (var i = 0; i < pacientes.length ; i++){
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
        
        }
    }
 
});



