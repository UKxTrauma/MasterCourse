const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let currentFunds = Math.floor(Math.random() * 9999);
let pin = '1234';
let withReq = '';
// let withMore = '';

const pinInput = () => {
    rl.question('Please enter your pin:\n', function (attemptedPin) {
        if (attemptedPin == pin) {
            console.log('Access authorised')
            function withdrawal () {
                console.log(`\nCurrent funds: £${currentFunds}.00`)
                rl.question("Please enter the amount you'd like to withdraw:\n£", function (withReq) {
                    if (withReq <= currentFunds) {
                        (currentFunds = (currentFunds-withReq));
                        console.log(`You have succesfully withdrawn £${withReq} from your account. Your remaining balance is £${currentFunds}.00`);
                        
                        if (currentFunds != '0') {
                            const anotherWith = function () {
                                rl.question('Would you like to make another withdrawal?\n[1]: Yes\n[2]: No\n', function (withMore) {
                                    // let plsWork = true;
                                    // if (plsWork == true) {
                                        if (withMore == '1') {
                                            // plsWork = false;
                                            withdrawal();
                                        }
                                        else if (withMore == '2') {
                                            console.log('Thank you for using our services.');
                                            // plsWork = false;
                                            // rl.close();
                                        }
                                        else {
                                            console.log('Incorrect input, please try again.');
                                            // plsWork = false;
                                            anotherWith();
                                        }
                                    // };
                                    // if (plsWork == false) {rl.close();};
                                });
                            };
                            anotherWith();
                        } else {
                            console.log('Your funds are now £0. Thank you for using our services.');
                            rl.close();
                        };

                    } else {
                        console.log('\nInadequate funds.\nPlease enter an appropriate amount.');
                        withdrawal();
                    }
                    if (withReq <= currentFunds) {rl.close();};
                });
            };
            withdrawal();
        } else {
            console.log('Incorrect PIN.')
            pinInput();
        }
        if (withReq == true) {rl.close();};
    });
};

pinInput();