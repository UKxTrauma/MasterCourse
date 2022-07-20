let password = "secretpassword123"
if (password.length < 8) {
    console.log("Entered password is too short. 8 characters or more requried.");
}
else (console.log(password));

let num = 12
if (num % 3 == 0 || num % 5 == 0) {
    console.log(`${num} is divisible by either 3 or 5.`);
}
else (console.log(`${num} is NOT divisible by neither 3 nor 5.`))