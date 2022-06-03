type Move = {
    name: string,
    power: number
};

function checkPP() {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        return console.log(target);
    };
}

class Pokemon {
    name: string;
    ppAvailable = 1;

    constructor(name: string, ppAvailable: number) {
        this.name = name;
        this.ppAvailable = ppAvailable;
    }

    @checkPP()
    fight(move: Move) {
        console.log(`${this.name} used ${move?.name}!`);
        this.ppAvailable -= 1;
    }

    calculateDamage(move: any) {
        return move.power;
    }
}

const thunderbolt: Move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.fight(thunderbolt);
pikachu.fight(thunderbolt);