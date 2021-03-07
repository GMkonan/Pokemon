var objetoBotaoLogoff = document.getElementById("botaoLogoff")

let token = window.localStorage.getItem("Token")
console.log(token)
if(token == null) {
    objetoBotaoLogoff.className = "noLogoffButton"
} else {
    botaoLogIn.className = "noLogoffButton"
    requisicaoNome();
}

async function requisicaoNome() {
    await $.ajax
    ({
    type: "GET",
    url: "https://escolarapp2.herokuapp.com/account/user/",
    dataType: 'json',
    headers: {"Authorization": window.localStorage.getItem('Token')},
    success: function (data){
        if(data.username == null) {
        let username = data.email
        username = username.substring(username.indexOf("@") , username.lenght + 1);
        console.log(username)
        document.getElementById("trainerName").innerHTML = username.toUpperCase() + "'S POKEDEX"
        } else {
            let username = data.username
            document.getElementById("trainerName").innerHTML = username.toUpperCase() + "'S POKEDEX"
        }
    }
    });
}

const adicionarPokemon = () => {
    let pokemonNome = document.getElementById("nome").childNodes[1].textContent.trim()
    let pokemonAltura = document.getElementById("altura").childNodes[1].textContent.trim()
    console.log(pokemonNome)
    console.log(pokemonAltura)
    $.ajax({
        url: "https://escolarapp2.herokuapp.com/pokemons/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        headers: {"Authorization": window.localStorage.getItem('Token')},
        
        data: JSON.stringify({nome_pokemon: pokemonNome, idade: "1", tamanho: Number(pokemonAltura)}),
        success: function(objeto){
            console.log(objeto)


        },
        error: function (error){
            console.log(error)
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