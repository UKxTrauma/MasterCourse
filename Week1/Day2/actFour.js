let fillOne = "X", fillTwo = "O", fillThree = " ";

console.log (
    `
      |   |   
    ${fillOne} | ${fillTwo} | ${fillThree} 
      |   |   
   -----------
      |   |   
    ${fillOne} | ${fillOne} | ${fillThree} 
      |   |   
   -----------
      |   |   
    ${fillTwo} | ${fillThree} | ${fillThree} 
      |   |   
     `
)

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("Please\n", function (string) {
  userInput = string;

  console.log("Your name is " + userInput);

  // close input stream
  rl.close();
});