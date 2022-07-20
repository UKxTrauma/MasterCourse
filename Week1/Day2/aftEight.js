let word = "something heres";

function checkChar() {
if (word[0] == word[word.length-1]) {
    return true;
    }
}

if (checkChar() == true) {
    console.log('The first and final characters are the same!');
}
else (
    console.log('The first and last letters are not the same.')
);