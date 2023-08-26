// made by Ivan (username: Tuxuis)
const prompt = require("prompt-sync")();

function main() {
    
    function generate(n) {
        let num = [];
        for (let i = 0; i < n; i++) {
            num.push(Math.floor(Math.random() * 6) + 1)
        }
        return num
    };

    console.log("Welcome to my dice game!")
    let name = prompt("What is your name?: ")
    console.log(`Hello, ${name}!`)

    let guess = prompt("Pick a number between 3-18: ")
    if (guess < 0) {
        guess = Math.abs()
    };

    console.log("------------------------")
    let numbers = generate(3)
    let sum = 0
    
    for (let i in numbers) {
        console.log(numbers[i])
        sum = sum + numbers[i]
    };

    if (guess == sum) {
        console.log("Wow! You have answered correctly!")
    } else {
        console.log(`Oh no! You answered wrong. Better luck next time.\nThe answer was: ${sum}\nYour off by: ${Math.abs(guess - sum)}`)
    }

};

main();