const storedScore = JSON.parse(localStorage.getItem('score'));
        const score = storedScore || { wins: 0, losses: 0, ties: 0 };
        // const score ={
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        // }
        console.log(score);

        let computerMove = "";
        let result = "";

        const pickComputerMove = () => {
            const randomNumber = Math.random();
            if(randomNumber >= 0 && randomNumber < 1/3) {
                computerMove = "rock";
            } else if(randomNumber >= 2/3 && randomNumber < 1) {
                computerMove = "paper";
            } else if(randomNumber > 1/3 && randomNumber < 2/3) {
                computerMove = "scissors";
            }
        }

        const updateScore = () => {
            if (result === "You win!") {
                score.wins += 1;
            } else if (result === "You lose!") {
                score.losses += 1;          
            } else if (result === "Tie!") {
                score.ties += 1;
            }
            localStorage.setItem('score', JSON.stringify(score));
        }

        const updateDisplay = () => {
            show.innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
        }

        const rockMove = () => {
            pickComputerMove(); 
            if (computerMove === "rock") {
                result = 'Tie!';
            } else if (computerMove === "paper") {
                result = "You lose!";
            } else if (computerMove === "scissors") {
                result = "You win!";
            }
            updateScore();
            updateDisplay();
            show.innerHTML = `You picked rock. Computer picked ${computerMove}. <br>${result}<br>` + show.innerHTML;
        }

        const paperMove = () => {
            pickComputerMove(); 
            if (computerMove === "rock") {
                result = 'You win!';
            } else if (computerMove === "paper") {
                result = "Tie!";
            } else if (computerMove === "scissors") {
                result = "You lose!";
            }
            updateScore();
            updateDisplay();
            show.innerHTML = `You picked paper. Computer picked ${computerMove}. <br>${result}<br>` + show.innerHTML;
        }

        const scissorsMove = () => {
            pickComputerMove(); 
            if (computerMove === "rock") {
                result = 'You lose!';
            } else if (computerMove === "paper") {
                result = "You win!";
            } else if (computerMove === "scissors") {
                result = "Tie!";
            }
            updateScore();
            updateDisplay();
            show.innerHTML = `You picked scissors. Computer picked ${computerMove}.<br> ${result}<br>` + show.innerHTML;
        }
        updateDisplay();
