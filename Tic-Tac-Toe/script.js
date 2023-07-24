// Target classes variables
const gameCells = document.querySelectorAll('.box');
const player1 = document.querySelector('.Xplayer');
const player2 = document.querySelector('.Oplayer');
const restartbtn = document.querySelector('.restart');
const alertBox = document.querySelector('.alertBox');
const strike = document.querySelector('.line');
// Variables
let currPlayer = 'X';
let nextPlayer = 'O';
let count = 0;
let playerTurn = currPlayer;

// Setting X(player1) and O(player2)
player1.textContent = `Player 1: ${currPlayer}`;
player2.textContent = `Player 2: ${nextPlayer}`;

// Restart button logic
restartbtn.addEventListener('click',()=>{
    Array.from(gameCells).forEach(cell => {
        cell.innerHTML = "";
        cell.disabled = false;
    });

    // playerTurn = currPlayer; // change default player to X
    strike.classList.remove(strike.classList.item(1));
    // OR
    // strike.classList.remove(strike.classList[1]);
    count = 0;
    setHoverText();
});


// To change turn 
const changeTurn = () => {
    return playerTurn == currPlayer ? nextPlayer : currPlayer;
};

/**
 * The function `setHoverText` removes any existing hover classes from game cells and adds a hover
 * class based on the current player's turn.
 */
const setHoverText = () => {
    gameCells.forEach((cell) => {
        cell.classList.remove('x-hover');
        cell.classList.remove('o-hover');
    });
    const hoverClass = `${playerTurn.toLowerCase()}-hover`;
    gameCells.forEach((cell) => {
        if(cell.innerHTML === "") {
            cell.classList.add(hoverClass);
        }
    });
}
// Callinf first time setHoverText()
setHoverText();
// start game logic
const startGame = () => {
    // Iterating over grid cells
    Array.from(gameCells).forEach(cell => {
        // Adding event listener to each cell
        cell.addEventListener('click',(e) => {
            // comparing target cell content with ''
            if(e.target.innerText === '') {
                e.target.innerHTML = playerTurn;
                // counting turns to track  tie and win
                count++;
                if(count > 4) {
                    // if some player is won then display the alert message at the top of browser window
                    if(checkWin()) {
                        showAlert(`${playerTurn} is a winner`); 
                        // disable game cells after someone has won
                        disableGameBordafterWin(); 
                    } 
                }
                // Check if draw
                if(count == 9 && !checkWin()) {
                    showAlert("It's a Tie");
                    disableGameBordafterWin();
                }
                // Change Turn
                playerTurn = changeTurn();
                setHoverText();
            }
        })
    });
};

// CheckWin logic
const checkWin = () => {
    const winpatt = [
        {combo: [0,1,2], strikeClass : 'line-row1'},
        {combo: [3,4,5], strikeClass : 'line-row2'},
        {combo: [6,7,8], strikeClass : 'line-row3'},
        {combo: [0,3,6], strikeClass : 'line-col1'},
        {combo: [1,4,7], strikeClass : 'line-col2'},
        {combo: [2,5,8], strikeClass : 'line-col3'},
        {combo: [0,4,8], strikeClass : 'line-diag1'},
        {combo: [2,4,6], strikeClass : 'line-diag2'},
    ]
                    

    for(let i of winpatt) {
        
        // Object Destructuring 
        const {combo, strikeClass} = i;
        const [pos1,pos2,pos3] = combo; 
        // console.log(`${pos1} ${pos2} ${pos3}`);
        if(gameCells[pos1].textContent !== "" &&
           gameCells[pos2].textContent !== "" && 
           gameCells[pos3].textContent !== "") {
            // If some player has won
            if(gameCells[pos1].textContent === gameCells[pos2].textContent && gameCells[pos2].textContent === gameCells[pos3].textContent) {
                // console.log(typeof 0)  // type = number
                // console.log(typeof i) // type = string
                // if(i == 0) {
                //     strike.classList.add('line-row1');
                // } else if(i==1) {
                //     strike.classList.add('line-row2');
                // } else if(i == 2) {
                //     strike.classList.add('line-row3');
                // } else if(i==3) {
                //     strike.classList.add('line-col1');
                // } else if(i == 4) {
                //     strike.classList.add('line-col2');
                // } else if(i == 5) {
                //     strike.classList.add('line-col3');
                // } else if(i == 6) {
                //     strike.classList.add('line-diag1');
                // } else if(i == 7) {
                //     strike.classList.add('line-diag2');
                // } 
                strike.classList.add(strikeClass);
                return true;
            } 
        }
    }       
    // If nobody has won
    return false;         
}

// Alert function logic
const showAlert = (msg) => {
   alertBox.style.display = 'block';
   alertBox.innerHTML = msg; 
   setTimeout(() => {  
       alertBox.style.display = 'none';
   }, 2000);
}

// disable button logic
const disableGameBordafterWin = () => {
    Array.from(gameCells).forEach(cell => {
        cell.disabled = true;
        // to add a new class to each cell
        // cell.classList.add('classname')
    });
};

// game start from here
startGame();
