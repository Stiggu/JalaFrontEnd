import {log} from "util";

type Move = {
    name: string,
    power: number
};

const checkPP = (target: object, key:string, descriptor: PropertyDescriptor) => {
    const originalValue = descriptor.value;
    descriptor.value = function (...args: never) {
        const pokemon = this as Pokemon;
        if(pokemon.ppAvailable > 0){
            originalValue.apply(this, args);
        } else {
            console.log(`${pokemon.name} doesn't have any energy left.`);
        }
        return descriptor;
    };
};

class Pokemon {
    name: string;
    ppAvailable = 0;

    constructor(name: string, ppAvailable: number) {
        this.name = name;
        this.ppAvailable = ppAvailable;
    }

    @checkPP
    fight(move: Move) {
        console.log(`${this.name} used ${move?.name}!`);
        this.ppAvailable -= 1;
    }

    calculateDamage(move: Move) {
        return move.power;
    }
}

const thunderbolt: Move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.fight(thunderbolt);
pikachu.fight(thunderbolt);