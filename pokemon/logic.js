class Pokemon extends HTMLElement{
    constructor(name, avatar, colour) {
        super();
        let pokemonTemplate = document.getElementById('card-template');
        let card = pokemonTemplate.content.cloneNode(true);
        card.querySelector('.container>#avatar').style.backgroundColor = colour;
        card.querySelector('.container>#avatar>.avatar').setAttribute('src', avatar);
        card.querySelector('.container>#name>.name').innerText = name.toUpperCase();
        const pc = document.getElementById("pokemon-container");
        pc.appendChild(card);
    }
}

customElements.define('pokemon-card', Pokemon);

for(let x = 0; x < dataPokemons["results"].length; x++){
    new Pokemon(dataPokemons["results"][x].name, getPokemonImageUri(x+1), pokemonColorMap[x+1]);
}