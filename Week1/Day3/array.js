let drinks = [
    "Coffee",
    "Red Bull",
    "Gin"
];

console.log(drinks[0]+'\n',drinks[1]+'\n',drinks[2]);

for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
};

///////////////////////////////////////////////

let age = 15;

while( age < 18 ) {
    console.log("You're a child!");
    age++;
}

console.log("You're an adult!");

//////////////////////////////////////////////

console.log(Math.floor(Math.random()*4));