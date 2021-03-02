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

const adicionarPokemon = () => {
    let pokemonNome = document.getElementById("nome").innerHTML
    pokemonNome = pokemonNome.substring(pokemonNome.indexOf("< ")+ 1);
    let pokemonAltura = document.getElementById("altura").innerHTML
    pokemonAltura = pokemonAltura.substring(pokemonAltura.indexOf("< ")+ 1);
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