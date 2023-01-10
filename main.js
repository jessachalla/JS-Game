//Prompt the USER to start the game
function startGame() {
    let start = confirm("Do you want to play the game?");
    
    //If yes, go to "Name Your Warrior" prompt
    if (start === true) {
        let user = prompt("Name Your Warrior:");
        //If user clicks 'cancel'
        if (user === null) {
            document.write(`<button type="button" onClick="window.location.reload()">
            Start Game
            </button>`)
        }
        //If user doesn't type a name
        else if (!user.length) {
            document.write(`<p>You didn't name your warrior!</p>
            <button type="button" onClick="window.location.reload()">
            Try again
            </button>`)
        }
        //When user names warrior, the startCombat function is called
        else {
            startCombat(user);
        }

    }
    //If no
    else if (start === false) {
        alert("Come back when you're up for the CHALLENGE!");
        document.write(`<button type="button" onClick="window.location.reload()">
            Start Game
            </button>`)
    }
}

//A function for resetting the stats
function resetStats() {
    userHealth = 15;
    grantHealth = 10;
    leaveGame = true;
    wins = 0;
}


//The beginning of the startCombat function
function startCombat(user) {
    
    //stats are set
    let userHealth = 15;
    let grantHealth = 10;
    let leaveGame = true;
    let wins = 0;

    //This is the while loop for the game
    while (userHealth > 0 && grantHealth > 0 && wins < 3 && leaveGame === true) {
        userHealth = userHealth - getDamage();
        grantHealth = grantHealth - getDamage();
        alert(`${user} has ${userHealth} health left.
        The Evil Grant has ${grantHealth} health left.`);

        //If Grant and User both lose
        if (userHealth <= 0 && grantHealth <= 0) {
            alert("TIE! You must defeat the Evil Grant! Play Again!");
            resetStats()
            startGame()
        }

        //If User loses
        else if (userHealth <= 0) {
            alert("YOU WERE DEFEATED by EVIL GRANT! Play Again!");
            resetStats()
            startGame()
        }

        //If User Wins
        else if (grantHealth <= 0) {
            wins = wins + 1;
            userHealth = 15;
            grantHealth = 10;
            alert("You WON this round");
            alert(`You have won ${wins} time(s)!`);
            if (wins < 3) {
                leaveGame = confirm("You need to win 3 rounds. Do you want to continue fighting?");

                if (leaveGame === false) {
                    alert("You have surrendered!")
                    document.write(`<button type="button" onClick="window.location.reload()">
            Play Again?
            </button>`)
                }
            }
        }

        //This displays when Grant is defeated 3 times AND there is not a losing tie between USER and Grant
        if (wins == 3 && userHealth > 0 && leaveGame === true) {
            let restart = confirm("You have DEFEATED the EVIL GRANT 3 times and SAVED the UNIVERSE! Play again?");
            if (restart === true) {
                let user = prompt("Name Your Warrior:");
                startCombat(user);
            }
            else if (restart === false) {
                alert("Come back when you're up for the CHALLENGE!");
                document.write(`<button type="button" onClick="window.location.reload()">
            Start Game
            </button>`)
            }
        }
    }
}


function getDamage() {
    let damage = Math.floor(Math.random() * (5) + 1);
    return (damage);
}

//The startGame function is called to begin the game
startGame();