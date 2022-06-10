import axios from "axios";

/*

Pokemon class
  - one pokemon has name, id, types and moves
  
List of goals:
  ✅ create a function to get all information of a pokemon from result of getSinglePokemon
  ✅ get a List of types from a pokemon, assign to a variable called types
  ✅ get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  ✅ fill Moves with missing data from Types you can get the information from url of the move.
  ✅ re-write decorator to get new pokemons Ids in PokemonTrainer class 
*/

export const colours = {
    reset: "\x1b[0m",
    fgGreen: "\x1b[32m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m",
    fgRed: "\x1b[31m",
    fgYellow: "\x1b[33m",
    fgMagenta: "\x1b[35m",
}

function getNewPokemons(pokemonsToGet: number) {
    const pokemons: number[] = [];
    for (let pokeIndex = 0; pokeIndex < pokemonsToGet; pokeIndex++) {
        pokemons.push(Math.floor(Math.random() * maxPokemons));
    }
    return function _getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            listOfIds = pokemons;
        }
    }
}

const maxPokemons = 868;

type Move = {
    name: string;
    url: string;
    type?: Type;
    damage?: number; // power
    powerPoints?: number; // pp
    accuracy?: number;
};

type Type = {
    name: string;
    url: string;
};

type PokemonData = {
    types: [{
        type: Type
    }],
    moves: [{
        move: Move
    }],
    name: string,
    id: number,
}

export class Pokemon {
    name: string = '';
    id: number = 0;
    moves: Move[] = [];
    types: Type[] = [];
    completeData: PokemonData;

    constructor(pokemonResult: PokemonData) {
        this.completeData = pokemonResult;
        this.buildFieldsPokemon(pokemonResult);
    }

    static responseToPokeData(pokemon: PokemonData): PokemonData {
        return {
            name: pokemon.name,
            id: pokemon.id,
            types: pokemon.types,
            moves: pokemon.moves
        }
    }

    async getSingleMove(url: string) {
        return await Promise.resolve(axios.get(url));
    }
    
    getDefaultMoves(pokemon: PokemonData){
        const movesToLook: Move[] = []
        for (let currentMove = 0; currentMove < pokemon.moves.length; currentMove++) {
            if (currentMove === 4) {
                break;
            }
            const currentSkillIndex = Math.floor(Math.random() * (pokemon.moves.length + 1))
            const partialSkill = pokemon.moves.splice(currentSkillIndex, 1)[0];
            const move: Move = {
                name: partialSkill.move.name,
                url: partialSkill.move.url
            }
            movesToLook.push(move);
        }
        return movesToLook;
    }

    async getDetailedMoves() {
        const movesToLook: Move[] = []

        for (let move of this.moves) {
            const result = await this.getSingleMove(move.url);
            movesToLook.push({
                name: move.name,
                url: move.url,
                powerPoints: result.data.pp ?? 0,
                accuracy: result.data.accuracy ?? 0,
                damage: result.data.power ?? 0,
                type: result.data.type,
            })
        }

        return movesToLook;
    }

    getDefaultTypes(pokemon: PokemonData) {
        return pokemon.types.map(typeData => typeData.type);
    }

    buildFieldsPokemon(pokemon: PokemonData) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.types = this.getDefaultTypes(pokemon);
        this.moves = this.getDefaultMoves(pokemon);
    }

    async displayInfo() {
        this.moves = await this.getDetailedMoves();
        console.log(`${colours.fgGreen}==========================\n${colours.reset}`);
        console.log(`${colours.fgRed}${this.id} ${colours.reset}- ${colours.fgMagenta}${this.name.toUpperCase()}${colours.reset}`);
        console.log(`${colours.fgGreen}\n### ${colours.fgYellow}Types ${colours.fgGreen}###${colours.fgWhite}`)
        this.types.forEach(type => {
            console.log(`- ${type.name.replace(/^\w/, character => character.toUpperCase())}`);
        });
        console.log(`${colours.fgGreen}\n### ${colours.fgYellow}Moves ${colours.fgGreen}###${colours.fgWhite}`)
        this.moves.forEach(move => {
            console.log(`- ${move.name.replace(/^\w/, character => character.toUpperCase())} ${colours.reset}- ${colours.fgGreen}Damage: ${colours.fgRed}${move.damage} ${colours.reset}- ${colours.fgGreen}PP: ${colours.fgRed}${move.powerPoints} ${colours.reset}- ${colours.fgGreen}ACC: ${colours.fgRed}${move.accuracy}${colours.reset}`);
        });
        console.log(colours.reset);
    }
}

@getNewPokemons(3)
export class PokemonTrainer {
    name: string;
    pokemons: Pokemon[] = [];
    listOfIds: number[] = [2, 4];

    constructor(name: string) {
        this.name = name;
    }

    async getSinglePokemon(id: string | number) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    async getPokemons() {
        const listPokemons = this.listOfIds.map(async id => await Promise.resolve(this.getSinglePokemon(id)));
        const results = await Promise.all(listPokemons);
        for (const result of results) {
            const pokeData: PokemonData = await Pokemon.responseToPokeData(result.data);
            this.pokemons.push(new Pokemon(pokeData));
        }
    }

    async showTeam() {
        await this.getPokemons();
        console.log('Trainer:', `${colours.fgMagenta}${this.name}`);
        this.pokemons.forEach((pokemon) => pokemon.displayInfo());
    }
}
