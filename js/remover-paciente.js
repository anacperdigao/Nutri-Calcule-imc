var pacientes = document.querySelectorAll(".paciente");
var imagem = document.querySelectorAll(".imagem__lixeira");

var tabela = document.querySelector("table");

tabela.addEventListener("click",function(event){
    
    var alvoEvento = event.target;  //aqui vai vir o td
    var paiDoAlvo = alvoEvento.parentNode; //aqui vem o tr
    
    paiDoAlvo.classList.add("fadeOut");
    
    setTimeout(function(){
        paiDoAlvo.remove();
    },500); //500 milisegundos

});



/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
    
});

*/