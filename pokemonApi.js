const pokedex = document.getElementById("pokemon-container")
const cachedPokemon = {};

const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    const data = await response.json()
    const pokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`,
    }));
    createPokeCard(pokemon);
}

getPokemon();

const createPokeCard = (pokemon) => {
                
    const pokemonCard = pokemon
        .map(
            pokemon =>
                `
                <div class="card btn" data-toggle="modal" data-target="#exampleModal" onclick="selectPokemon(${pokemon.id});" id="${pokemon.id}">
                 <h5 class="card-title numero" id="numero">${pokemon.id}</h5>
                <div class="pokemon">
                <img class="pokemon" src="${pokemon.image}"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title name" id="name">${pokemon.name}</h5>
                    
                </div> 
                </div>`
        )
        .join("");
    pokedex.innerHTML = pokemonCard
}

const selectPokemon = async id => {
    console.log(id)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    document.getElementById("pokemon-title").textContent = pokemon.name
    document.getElementById("pokemon-image").src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    document.getElementById("nome").textContent = pokemon.name
    document.getElementById("habilidade") = data.abilities.map(pokemon => pokemon.ability.name)
  };

const createModal = data => {
    const modal = `
    <div class="modal fade" id="${data.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div style="display:inline-block;vertical-align:top;">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" width="200px" height="200px"/>
        </div>
        <div style="display:inline-block;">
        <p><b>Nome:</b> ${data.name} </p>
        <p><b>Habilidades:</b> ${data.abilities.map(pokemon => pokemon.ability.name)} </p>
        <p><b>Tipos:</b> ${data.types.map(pokemon => pokemon.type.name)} </p>
        <p><b>Altura:</b> ${data.height} </p>
        <p><b>Peso:</b> ${data.weight} </p>
        </div>
        </div>
      </div>
    </div>
  </div>  
</div>
    `
    pokedex.innerHTML = modal + pokedex.innerHTML
}



//helper functions
const searchBar = () => {
    var input, filter, cards, title, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    //cardContainer = document.getElementById("myItems");
    cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}