let divisible = [];
let notDivisible = [];
let i = 0;

function randomize() {
    while(i<6){
        let number = Math.ceil(Math.random()*30)
        if(number % 7 == 0){
            divisible.push(number)
        }else{
            notDivisible.push(number)
        };
        i++;
    };
};
randomize();
while (i == 6) {
    if(divisible.length != 0) {
        console.log(`These numbers are divisible by 7: ${divisible}`)
    }
    if(notDivisible.length != 0) {
        console.log(`These numbers are not divisible by 7: ${notDivisible}`)
    };
    break;
};