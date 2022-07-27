//Aqui vamos usar o AJAX que é fazer essas requisições de outro servidor de forma assíncrona, ou seja, sem travar nosso javascript normal.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando paciente");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //Aqui eu só configurei a requisição que eu vou enviar

    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){ // 200 é codigo que deu tudo certo na pagina, tipo aquele 404 que avisa que da erro
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } 
        else{
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

    })
    
    xhr.send();

});
