const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
        return userInput
    } else if (userInput === "paper") {
        return userInput
    } else if (userInput === "scissors") {
        return userInput
    } else if (userInput === "bomb") {
        return userInput
    } else {
        console.log("Error")
    }
}

getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    }
}

determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Tie"
    } else if (userChoice === "bomb") {
        return "User won by cheating!"
    } else {
        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                return "Computer won"
            } else {
                return "User won"
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                return "Computer won"
            } else {
                return "User won"
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "Computer won"
            } else {
                return "User won"
            }
        }
    }
}

function playGame(yourChoice) {
    const userChoice = getUserChoice(yourChoice)
    const computerChoice = getComputerChoice()
    console.log("Your choice: " + userChoice)
    console.log("Computer choice: " + computerChoice)
    console.log(determineWinner(userChoice, computerChoice))

}

// Test game
playGame("bomb")