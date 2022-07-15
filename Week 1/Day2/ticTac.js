const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let slots = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
]
  
let inputProm = new Promise(function(inputRes, inputRej) {
    function dualInput() {
        function userInput() {
            let userInput = "";     
            rl.question(console.log(grid) + "Please select a numbered slot:\n", function (string) {
                userInput = string;
                rl.close();
            });
        }
        function userInput2() {
            let userInput2 = "";
            rl.question("Please choose to place either an 'X' or an 'O':\n".toUpperCase(), function (string2) {
                userInput2 = string2;
                rl.close();
            });
        }
        userInput();
        userInput2();
        if (slots.includes(userInput)) {
            if (userInput2 == 'X' || 'O') {
                inputRes(lists[userInput] = lists[userInput2]);
                dualInput();
            }
            else (console.log('Please try again.\n'));
                userInput2();
        } else {
            inputRej("Please try again.\n");
            dualInput();
        }
    };
    dualInput();
});

inputProm.then(
    function(value) {console.log(grid);},
    function(error) {console.log("failed");}
);