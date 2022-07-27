// UTILIZADO APENAS PARA FINS DE ESTUDO, NÃO ESTA SENDO UTILIZADO

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    //Extraindo informações do paciente do form de um forma mais suja na leitura, la embaixo eu vou criar a melhor forma
    /*
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    */

    //Extraindo informações do paciente de forma mais limpa
    var paciente = obtemPacienteDoFormulario(form);

    
    //Criando a tr e td do paciente de forma mais suja:
    /*
    var pacienteTr = document.createElement("tr");

    var pesoTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);
    
    pacienteTr.appendChild(nomeTd); 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    */

    //Criando a tr do paciente de forma mais limpa
    var pacienteTr = montaTr(paciente);

    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});

//Melhorando o código em funções e com variável orientada ao objeto paciente e suas propriedades (caracteristicas).

function obtemPacienteDoFormulario (form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");
    
    pacienteTr.appendChild(nomeTd); 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}


function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);


    return td;

}