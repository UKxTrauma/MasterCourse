// const date = Date()

// function displayDate() {
//     document.getElementById("date").innerHTML = Date();
// };
// displayDate()

let nextBirthday = new Date(2022, 08, 12)
let today = new Date()
deduct = nextBirthday - today
amount = deduct / (1000 * 3600 * 24)
console.log(`${Math.round(amount)} days left until my 29th!`)