let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Please enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter yourfirst guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High!")
    } else {
        guess = prompt("Too Low!")
    }
}
if (guess === 'q') {
    alert("OK, You Quit!")
} else {
    alert(`You Got IT! It took you ${attempts} tries!`);

}