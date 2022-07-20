let num = 8008;
let rev = 0;

rev = Number(String(num).split('').reverse().join(''));

if (num == rev) {
console.log(`${num} also reads backwards as ${rev}, meaning that it is a palindrome.`);
}
else (
    console.log(`${num} reads backwards as ${rev}, meaning that it is not a palindrome.`)
);