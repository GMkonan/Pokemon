let validacaoEmail = document.getElementById("validacaoEmail")
let validacaoSenha = document.getElementById("validacaoSenha")

const logar = () => {
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value
    console.log(email)
    console.log(senha)
    console.log(confirmarSenha)

    let validacoes = [validarEmail(email),
    validarSenha(senha, confirmarSenha)]

    if (validacoes.every(validacao => validacao == true) == false) {
        alert("Seu login deu errado...")
    } else {
        alert("seu login deu certo!")
    }
}

const validarEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
        validacaoEmail.innerHTML = ""
        return true
    } else {
        validacaoEmail.innerHTML = "Esse n eh um email valido"
        return false
    }
}

const validarSenha = (senha, confirmarSenha) => {
    if (senha != "" && confirmarSenha != "") {
        if (senha == confirmarSenha) {
            validacaoSenha.innerHTML = "";
            return true
        } else {
            validacaoSenha.innerHTML = "as senhas n batem";
            return false;
        }
    }
    else {
        validacaoSenha.innerHTML = "as senhas n podem ser em branco"
        return false;
    }
}