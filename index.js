var objetoBotaoLogoff = document.getElementById("botaoLogoff")
let token = window.localStorage.getItem("Token")

if(token == null) {
    objetoBotaoLogoff.className = "noLogoffButton"
}

const logoffApi = () => {
    window.localStorage.removeItem("Token")
    window.location.href = "./login/login.html"
}