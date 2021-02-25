var objetoBotaoLogoff = document.getElementById("botaoLogoff")
let token = window.localStorage.getItem("Token")

if(token == null) {
    objetoBotaoLogoff.className = "noLogoffButton"
}

const redirectLogin = () => {
    window.location.href = "./login/login.html"
}

const logoffApi = () => {
    window.localStorage.removeItem("Token")
    window.location.href = "./login/login.html"
}