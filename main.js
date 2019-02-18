//When the page is loaded, the USER is asked if they want to play the game
let startGame = prompt("Do you want to play the game? Please type 'Yes' or 'No'.")

//If yes, the game starts
if (startGame === 'Yes') {
    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0;
    let user = prompt("Name Your Warrior:");

    //This is the while loop for the game
    while (userHealth > 0 && grantHealth > 0 && wins < 3) {
        //This is how much health Grant will lose
        let attackGrant = (Math.floor(Math.random() * (2) + 1));
        //This is how much health the USER will lose. 
        //Justin, I changed it to 2.75 becuase it was too hard for the USER to lose when the USER and Grant had the 1 or 2 health damage. Now the USER will take a 1, 2, or 3 damage.
        let attackUser = (Math.floor(Math.random() * (2.75) + 1));
        userHealth = userHealth - attackUser;
        grantHealth = grantHealth - attackGrant;
        console.log(`${user} has ${userHealth} health left.`);
        console.log(`The Evil Grant has ${grantHealth} health left.`);

        //If Grant and User both lose
        if (userHealth <= 0 && grantHealth <= 0) {
            console.log("TIE! You must defeat the Evil Grant! Play Again!");
        }

        //If User loses
        else if (userHealth <= 0) {
            console.log("YOU WERE DEFEATED by EVIL GRANT! Play Again!");
        }

        //If User Wins
        else if (grantHealth <= 0) {
            wins = wins + 1;
            grantHealth = 10;
            console.log("You WON this round");
            console.log(`You have won ${wins} time(s)!`);
        }
    }

    //This displays when Grant is defeated 3 times AND there is not a losing tie between USER and Grant
    if (win = 3 && userHealth > 0) {
        console.log("You have DEFEATED the EVIL GRANT 3 times and SAVED the UNIVERSE!")
    }
}
//If the USER does not want to play
else if (startGame === 'No') {
    console.log("You don't want to play? Come back when you do!")
}

//If the USER doesn't type 'Yes' or 'No' correctly
else {
    console.log("You have not used a proper command. Please try again.")
}
