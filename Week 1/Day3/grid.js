const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let firstInput = [];
// let secondInput2 = [];
let slots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let grid = [
    `
       |   |   
     ${slots[0]} | ${slots[1]} | ${slots[2]} 
       |   |   
    -----------
       |   |   
     ${slots[3]} | ${slots[4]} | ${slots[5]} 
       |   |   
    -----------
       |   |   
     ${slots[6]} | ${slots[7]} | ${slots[8]} 
       |   |   
    `
];
     
rl.question(`${grid}\nPlease select a numbered slot:\n`), function (userInput) {
  console.log(userInput);
  firstInput[0] = userInput;
  console.log(firstInput);
  rl.close();
};

rl.on('close', function () {
  console.log('\nBye bye !!!');
  process.exit(0);
});

console.log(firstInput);
// switch (userInput) {
//   case (userInput2 == 'X' || 'O'):
//     let userInput2 = "";
//     rl.question("Please choose to place either an 'X' or an 'O':\n".toUpperCase(), function (string2) {
//         userInput2 = string2;
//         rl.close();
//     });
//     break;
//   default:
//     console.log("need recursion here")
// };
// console.log(userInput);