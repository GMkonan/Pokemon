const getPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => console.log(data.name))
}

getPokemon(2)