let brettsFollowers = [
    "dom",
    "jane",
    "terry",
    "fran"
];
let megsFollowers = [
    "tina",
    "dom",
    "fran",
    "george"
];

for(let i = 0; i < brettsFollowers.length; i++){
    for(let x = 0; x<megsFollowers.length; x++){
        if (brettsFollowers[i]==megsFollowers[x]){
            console.log(brettsFollowers[i]);
        };
    };
};