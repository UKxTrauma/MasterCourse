// console.log("   |   |   \n   |   |   \n   |   |   \n-----------\n   |   |   \n   |   |   \n   |   |   \n-----------\n   |   |   \n   |   |   \n   |   |   \n");

// const grid = [
// "   |   |   ",
// "   |   |   ",
// "   |   |   ",
// "-----------",
// "   |   |   ",
// "   |   |   ",
// "   |   |   ",
// "-----------",
// "   |   |   ",
// "   |   |   ",
// "   |   |   "
// ];
// console.log(grid.join('\n'));

// let vertical ="   |   |   \n   |   |   \n   |   |   "
// let horizontal =
// "-----------";

// array=[vertical, horizontal, vertical, horizontal, vertical];
// console.log(array.join('\n'));


// let num = 10

// console.log(`Your number is ${num}!`)

// let line = 5

// while (line > 0) {
//     if (line == 4 || line == 2) {
//         line -= 1;
//         console.log("--------------");
//     } else {
//         line -= 1
//         console.log("   |      |   \n   |      |   \n   |      |   ");
//     }
// }

let array = []
for (let i = 0; i <= 4;i++){
    
    if(i == 1 || i ==3){
        array.push("-----------");
    } else{
        array.push("   |   |   ");
        array.push("   |   |   ");
        array.push("   |   |   ");
    }
}
console.log(array.join("\n"));