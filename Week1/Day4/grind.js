let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Grinding for 20 seconds");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    };
};

pressGrindBeans();

/////////////////////////////////////

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50449921);

/////////////////////////////////////

const addUp = (num1, num2) => {
    return num1+num2;
}

addUp(7,3);
console.log(addUp(2,5));

/////////////////////////////////////
//arrow function
const blah = () => {};
//function declaration
function blah () {};
//function expression
const blah = function() {};