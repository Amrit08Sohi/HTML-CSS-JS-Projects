// Target classes variables
const gameCells = document.querySelectorAll('.box');
const player1 = document.querySelector('.Xplayer');
const player2 = document.querySelector('.Oplayer');
const restartbtn = document.querySelector('.restart');
const alertBox = document.querySelector('.alertBox');
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
    count = 0;
});


// To change turn 
const changeTurn = () => {
    return playerTurn == currPlayer ? nextPlayer : currPlayer;
};

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
            }
        })
    });
};

// CheckWin logic
const checkWin = () => {
    const winpatt = [[0,1,2],
                     [3,4,5],
                     [6,7,8],
                     [0,3,6],
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]
                    ];

    for(let i in winpatt) {
        const[pos1,pos2,pos3] = winpatt[i];
        // console.log(`${pos1} ${pos2} ${pos3}`);
        if(gameCells[pos1].textContent != "" &&
           gameCells[pos2].textContent != "" && 
           gameCells[pos3].textContent != "") {
            // If some player has won
            if(gameCells[pos1].textContent === gameCells[pos2].textContent && gameCells[pos2].textContent === gameCells[pos3].textContent) {
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
   }, 3000);
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
