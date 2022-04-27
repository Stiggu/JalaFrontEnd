/*
 *  Cat Exercise
 *  Had fun with this one,
 *  took the liberty to add a name for the cat class
 *  since every cat should have a name!
 */
class Cat {
    #max = 10;
    #hunger;
    #loneliness;
    #tiredness;
    #name;
    
    constructor(name) {
        this.#name = name;
        this.#hunger = Math.floor(Math.random() * this.#max) + 1;
        this.#loneliness = Math.floor(Math.random() * this.#max) + 1;
        this.#tiredness = Math.floor(Math.random() * this.#max) + 1;
    }
    
    get name(){
        return this.#name;
    }
    
    set name(newName){
        this.#name = newName;
    }
    
    get hunger(){
        return this.#hunger;
    }
    
    set hunger(newHunger){
        if(newHunger > this.#max){
            this.#hunger = this.#max;
        } else if(newHunger <= 1){
            this.#hunger = 1;
        } else {
            this.#hunger = newHunger;
        }
    }

    get tiredness(){
        return this.#tiredness;
    }

    set tiredness(newTiredness){
        if(newTiredness > this.#max){
            this.#tiredness = this.#max;
        } else if(newTiredness <= 1){
            this.#tiredness = 1;
        } else {
            this.#tiredness = newTiredness;
        }
    }

    get loneliness(){
        return this.#loneliness;
    }

    set loneliness(newLoneliness){
        if(newLoneliness > this.#max){
            this.#loneliness = this.#max;
        } else if(newLoneliness <= 1){
            this.#loneliness = 1;
        } else {
            this.#loneliness = newLoneliness;
        }
    }
    
    sleep(hours) {
        this.tiredness = this.tiredness - hours;
        this.hunger = this.hunger + 2;
        this.loneliness = this.loneliness + 3;
        console.log(`${this.name} went to bed, rested and now its tiredness is: ${this.tiredness}`)
    }
    
    play() {
        this.loneliness = 1;
        this.hunger = this.hunger + 3;
        this.tiredness = this.tiredness + 5;
        console.log(`You played with ${this.name}, now it's loneliness is: ${this.loneliness}`)
    }
    
    eat() {
        this.hunger = 1;
        this.tiredness = this.tiredness + 2;
    }
    
    static feed(...cats){
        cats.map(cat => {
            cat.eat();
            console.log(`${cat.name} has been feed, their hunger is at ${cat.hunger}`)
        })
    }
    
    static playTogether(...cats){
        let names = '';
        cats.forEach((cat, id) => {
            cat.play();
            if(id === cats.length - 1){
                names += `${cat.name}`
            } else {
                names += `${cat.name} & `
            }
        })
        console.log(`${names} Played together!!`)
    }
    
    status(){
        console.log(`Cat stats! \nHunger: ${this.hunger}\nLoneliness ${this.loneliness}\nTiredness: ${this.tiredness}`)
        console.log('Are you taking good care of your kitties?')
    }
}

const zenitsu = new Cat('Zenitsu');
const tomasa = new Cat('Tomasa');
Cat.feed(zenitsu, tomasa);
zenitsu.play();
zenitsu.sleep(5);
zenitsu.status();
Cat.playTogether(zenitsu, tomasa);

/*
 * Functional Exercises
 */

// Most frequent item inside an array
const frequents1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const mostFrequent = (frequents) => `${frequents.reduce((previousValue, currentValue, currentIdx, currentArr) =>
    currentArr.filter(v => v === previousValue).length >
    currentArr.filter( v => v === currentValue).length ? previousValue : currentValue, 0)} ` + 
    `(${frequents.filter(mostFrequentItem => mostFrequentItem === frequents.reduce((previousValue, currentValue, currentIdx, currentArr) =>
    currentArr.filter(v => v === previousValue).length > 
    currentArr.filter( v => v === currentValue).length ?
    previousValue : currentValue, 0)).length} times)`;
console.log(mostFrequent(frequents1));


// Sum of Squares
const squares1 = [0, 1, 2, 3, 4]; // 30 Expected
const squares2 = [1, 2, 3, 4]; // 30 Expected
const squares3 = [2, 3, 2]; // 17 Expected
// Initial value was the thing i was missing on the interview questions, since default is 1 instead of 0!
const squared = (arr) => arr.reduce((previousValue, currentValue) => currentValue ** 2 + previousValue, 0);
console.log(squared(squares1));

// Remove falsy values
const falsy1 = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const truthy = (arr) => arr.filter(r => r);
console.log(truthy(falsy1));

/*
 * Food Functional
 */
const unprocessedFood = ['🐮', '🥔', '🐔', '🌽'];
const meat = ['🐮','🐔'];

// Process the food
const cookFood = (arr) => arr.map(item => {
    switch (item) {
        case '🐮':{
            return '🍔';
        }
        case '🥔':{
            return '🍟';
        }
        case '🐔':{
            return '🍗';
        }
        case '🌽':{
            return '🍿';
        }
    }
})
console.log(cookFood(unprocessedFood));

// What kind of food it is
const foodType = arr => arr.map(x => meat.includes(x) ? 'Animal product' : 'Vegetarian');
console.log(foodType(unprocessedFood));

// This one i didn't understand very well, because as long as the response is '😺' should be okay, reduce is not needed
const eatFood = arr => '😺';
console.log(eatFood(unprocessedFood))