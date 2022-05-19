class Pokemon extends HTMLElement{
    constructor(name, avatar, colour) {
        super();
        let pokemonTemplate = document.getElementById('card-template');
        let card = pokemonTemplate.content.cloneNode(true);
        card.querySelector('.poke-container').style.backgroundColor = colour;
        card.querySelector('.poke-container>#avatar').style.backgroundColor = "rgba(0,0,0,0.1)";
        card.querySelector('.poke-container>#avatar>.avatar').setAttribute('src', avatar);
        card.querySelector('.poke-container>#name>.name').innerText = name.toUpperCase();
        const pc = document.getElementById("pokemon-container");
        pc.appendChild(card);
    }
}

customElements.define('pokemon-card', Pokemon);

fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25')
.then(res => res.json())
.then(data => {
    for(let x = 0; x < data["results"].length; x++){
        new Pokemon(data["results"][x].name, getPokemonImageUri(x+1), pokemonColorMap[x+1]);
    }
})