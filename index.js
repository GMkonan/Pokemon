var objetoBotaoLogoff = document.getElementById("botaoLogoff")
let token = window.localStorage.getItem("Token")
console.log(token)
if(token == null) {
    objetoBotaoLogoff.className = "noLogoffButton"
} else {
    botaoLogIn.className = "noLogoffButton"
    
    $.ajax
    ({
    type: "GET",
    url: "https://escolarapp2.herokuapp.com/account/user/",
    dataType: 'json',
    headers: {
        "Authorization": "Basic " + btoa("guilherme@hotmail.com" + ":" + "12345")
    },
    data: '{ "comment" }',
    success: function (data){
        if(data.username == null) {
        let username = data.email
        username = username.substring(username.indexOf("@") , username.lenght + 1);
        console.log(username)
        document.getElementById("trainerName").innerHTML = username.toUpperCase()
        } else {
            let username = data.username
            document.getElementById("trainerName").innerHTML = username.toUpperCase()
        }
    }
    });
}

const redirectLogin = () => {
    window.location.href = "./login/login.html"
}

const logoffApi = () => {
    window.localStorage.removeItem("Token")
    window.location.href = "./login/login.html"
}