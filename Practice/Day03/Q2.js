//Create a game where you start with any random game number. Ask the user to keep
//guessing the game number until the user enters correct value.

 let gameNum= 25;
    let userNum= prompt("Enter the number");
    while(userNum!=gameNum){
        userNum= prompt("You entered the wrong number. Guess again");
    }
    console.log("You guessed the correct number");
    alert ("You guessed the correct number");