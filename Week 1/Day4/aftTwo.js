const pet = {
    name: "Spleen",
    typeOfPet: "Shrew",
    age: 2,
    colour: "Brown",
    eat () {
        return `${this.name} is eating.`
    },
    drink () {
        return `${this.name} is drinking.`
    }
};

console.log(pet.eat()+'\n'+pet.drink());