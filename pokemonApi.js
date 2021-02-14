const NumberOfPokemons = 150;

const getPokemon = async (id) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => createPokeCard(data))
}

const createPokeCard = (data) => {
    let card = `
    <h5 class="card-title numero" id="numero">${data.id}</h5>
                <div class="pokemon">
                <img class="card-img-top" id="image" src="${data.sprites.front_default}" alt="${data.name}">
                </div>
                <div class="card-body">
                    <h5 class="card-title name" id="name">${data.name}</h5>
                    <p class="card-text abilities">${data.abilities[0].ability.name}</p>
                </div>
                `
    let pokemonCard = document.createElement("div")
    pokemonCard.classList.add("card")
    pokemonCard.innerHTML = card;
    document.getElementById("pokemon-container").appendChild(pokemonCard)
}

const showPokemons = async () => {
    for (let i = 1; i <= NumberOfPokemons; i++) {
        await getPokemon(i)
    }
}
showPokemons()