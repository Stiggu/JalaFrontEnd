const PI: number = Math.PI;
const age = 24;
const PersonName = 'Alexander';
type Rol = 'User' | 'Admin';
let rol: Rol;
let maybe: number | string;

maybe = 25;
maybe = 'something else';
rol = 'User';
rol = 'Admin';

interface IPerson{
    name: string,
    age: number,
    rol: Rol
}

const person: IPerson = {
    name: PersonName,
    age: age,
    rol: rol // can be Admin or User
};

console.log(person);