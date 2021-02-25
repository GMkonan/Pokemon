const NumberOfPokemons = 151

const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(response)
    let data = await response.json()
    createPokeCard(data);
    createModal(data);
    //return data;
    /*.then(res => res.json())
        .then(data => createPokeCard(data))*/
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
    pokemonCard.classList.add("btn")
    pokemonCard.setAttribute("data-toggle", "modal")
    pokemonCard.setAttribute("data-target", `#${data.id}`)
    pokemonCard.innerHTML = card;
    document.getElementById("pokemon-container").appendChild(pokemonCard)
}

const createModal = (data) => {
    let modal = `
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
    
    let pokemonModal = document.createElement("div")
    pokemonModal.innerHTML = modal;
    document.getElementById("pokemon-container").appendChild(pokemonModal)
}

const showPokemons = async () => {
    for (let i = 3; i <= NumberOfPokemons; i++) {
        await getPokemon(i)
    }
}
showPokemons()



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