const person = {
    name: 'Brett',
    age: 28,
    favSongs: [
        'Hit the Floor',
        'Remenissions',
        'Down the Human'
    ],
    sayHi () {
        return `Hello, my name is ${this.name}.`
    }
};

console.log(person.favSongs);
console.log(person.sayHi());