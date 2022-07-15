let num = 15
switch (true) {
    case num % 3 == 0 && num % 5 == 0:
        console.log(`${num} is both fizzy AND buzzy`);
        break;
    case num % 3 == 0:
        console.log(`${num} is fizzy.`);
        break;
    case num % 5 == 0:
        console.log(`${num} is buzzy`);
        break;
    default:
        console.log(`No fizz or buzz for you, choose something other than ${num} next time.`)
}