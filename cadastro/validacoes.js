const cadastrar = () => {
    let email = document.getElementById("email")
    let nome = document.getElementById("nome")
    let senha = document.getElementById("senha")

    criarUsuario(senha.value, email.value)
}

const criarUsuario = (senha, email) => {
    let usuario = {password: senha, email: email}

    let usuarioJson = JSON.stringify(usuario)

    $.ajax({
        url: "http://escolarapp2.herokuapp.com/account/register/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuarioJson,
        success: function(resposta){
            console.log(resposta)

            window.location.href = "../login/login.html"

        },
        error: function (error){
            console.log(error)
        }
    });
}


/*
let nomeValida = document.getElementById("validacaoNome")
let idadeValida = document.getElementById("validacaoIdade")
let naturalidadeValida = document.getElementById("validacaoNaturalidade")
let antecedentesValido = document.getElementById("validacaoAntecedentes");

const cadastrar = () => {
    let nome = document.getElementById("nome")
    let idade = document.getElementById("idade")
    let naturalidade = document.getElementById("naturalidade")
    let antecedentes = document.getElementById("antecedentes")
    
    let funcoes = [validarNome(nome.value),
    validarIdade(Number(idade.value)),
    validarNaturalidade(naturalidade.value),
    validarAntecedentes(antecedentes)];

    // se todas as funcoes derem true, o every retornara true
    //ele n entrara no if e o cadastro tera sucesso,
    //se alguma das funcoes der false o every retornara false
    //e entrara no if
    if (funcoes.every(funcao => funcao == true) == false) {
        alert("Você n pode continuar o cadastro...")
    }
    else {
        alert("Cadastrado com sucesso!")
    }
}

const validarNome = (nome) => {
    if (nome === "") {
        nomeValida.innerHTML = `Seu nome não pode ser branco`;
        return false;
    }
    return true;
}

const validarIdade = (idade) => {
    if (idade >= 18) {
        return true
    }
    idadeValida.innerHTML = `${idade} não é 18 anos ou acima`;
    return false;
}

const validarNaturalidade = (naturalidade) => {
    naturalidade = naturalidade.toLowerCase()
    if (naturalidade === "brasileiro" || naturalidade === "argentino") {
        return true;
    }
    naturalidadeValida.innerHTML = `Não é brasileiro ou argentino`;
    return false;
}

const validarAntecedentes = (antecedentes) => {
    if (antecedentes.checked) {
        antecedentesValido.innerHTML = "Você possui antecedentes criminais";
        return false;
    }
    return true;
}

*/