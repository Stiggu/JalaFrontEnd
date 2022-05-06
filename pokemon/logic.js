class Pokemon extends HTMLElement{

    constructor() {
        super();
        
        const tag = document.createElement("p");
        const text = document.createTextNode("aaaaaaaaaaaa");
        tag.appendChild(text);
        const e = document.getElementById("app");
        e.appendChild(tag);
    }

}

customElements.define('pokemon-card', Pokemon);

for(let x = 0; x < dataPokemons["results"].length; x++){

    const e = new Pokemon();
    console.log(e);
}