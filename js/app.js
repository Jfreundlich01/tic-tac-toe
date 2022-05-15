const cells = document.querySelectorAll(".cell");
const cellsarr = Array.from(cells)
const restartBtn = document.querySelector(".restart-btn");
const nxtUp = document.querySelector(".next-up");
let letter = 1;
let computer = false;
let board = [];
const playHum = document.querySelector(".play-hum");
const playComp = document.querySelector(".play-comp");
// let possiblePicks = [0,1,2,3,4,5,6,7,8]
const score1 = document.querySelector(".scoreX")
const score2 = document.querySelector(".scoreO")
let s1 = 0;
let s2 = 0

//creates board at start of game
for (let i = 0; i < cells.length; i++) {
  board.push(cells[i].innerHTML);
}
//updates board
function updateBoard() {
  for (let i = 0; i < cells.length; i++) {
    board.push(cells[i].innerHTML);
  }
}

//Update Next Up Element
function displayNextUpMessage(num) {
  if (num === 0) {
    nxtUp.innerHTML = "Next up: O";
  } else {
    nxtUp.innerHTML = "Next up: X";
  }
}

//Start game vs Human
playHum.addEventListener("click", function(){
  play(computer);
  playHum.innerHTML = "You are currently playing another Human"
})

//Set Computer to true and run play computer
// playComp.addEventListener("click", function () {
//   computer = true;
//   playComp.innerHTML = "You are currently playing Computer"
//   play(computer);
// });

function play(a){
    if (a){
        playComputer();
        console.log("we are playing computer")
    } else {
        playHuman()
        console.log("we are playing humans")
        //console.log(letter)
    }
}

//Allows user to click cell and leave either an x or an o
function playHuman() {
  for (const cell of cells) {
    console.log(cell.classList)
    cell.addEventListener("click", function (e) {
      //console.log(e.target.classList)
      //console.log(`this is the board before move: ${board}`);
      isMovesLeft();
      //isMovesLeft();
      if(!cell.classList.contains("picked")){
        if (letter === 1) {
          cell.innerHTML = "X";
          letter = 0;
          //console.log(letter)
          board = [];
          addPickedClass(cell)
          setUser(cell)
          updateBoard();
          checkforWin();
          console.log(cell.classList)
          console.log(board)
        } else {
          cell.innerHTML = "O";
          letter = 1;
          console.log(letter);
          board = [];
          addPickedClass(cell)
          setComp(cell)
          updateBoard();
          checkforWin();
          console.log(cell.classList)
          console.log(board)
        }
      }
      //console.log(letter)
      displayNextUpMessage(letter);
    });
  }
}

function playComputer(){
    //pickedCell = Math.floor(Math.random() * board.length);
    for (const cell of cells){
        cell.addEventListener("click", function(){
            isMovesLeft();
            if(letter === 1){
                cell.innerHTML = "X";
                board = [];
                addPickedClass(cell);
                //updateBoard();
                //console.log(board);
                console.log(possiblePicks.splice(Math.floor(Math.random() * 9)))
                // compPickedCell = Math.floor(Math.random() * 9);
                //console.log(compPickedCell)
                //board[compPickedCell] = "O"
                console.log(board)
                //cellsarr[possiblePicks.splice(Math.floor(Math.random() * possiblePicks.length))].innerHTML = "O"
                updateBoard();
                checkforWin();
            }
        })
    }
  
}

function checkforWin() {
  for (let i = 0; i < board.length; i++) {
    //check rows
    if (board[0] === board[1] && board[0] === board[2]) {
      if (board[0] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[0] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    else if (board[3] === board[4] && board[3] === board[5]) {
      if (board[3] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[3] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    if (board[6] === board[7] && board[6] === board[8]) {
      if (board[6] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[6] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    //check columns
    else if (board[0] === board[3] && board[0] === board[6]) {
      if (board[0] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[0] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    else if (board[1] === board[4] && board[1] === board[7]) {
      if (board[1] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[1] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    else if (board[2] === board[5] && board[2] === board[8]) {
      if (board[2] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[2] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    //check diagonalls
    else if (board[0] === board[4] && board[0] === board[8]) {
      if (board[0] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[0] === "O") {
        gameIsOver();
        console.log("Player O wins!");
        addScore(score2)
      }
    }
    else if (board[2] === board[4] && board[2] === board[6]) {
      if (board[2] === "X") {
        gameIsOver();
        console.log("Player X wins!");
        addScore(score1)
      } else if (board[2] === "O") {
        gameIsOver();
        console.log("Player O wins!");
      }
    } else if(!isMovesLeft()){
        gameIsOver();
        console.log("it was a tie")
        addScore(score2)
    }
  }
}

//Restart Btn
restartBtn.addEventListener("click", function () {
  restart();
});

//Restart Function
function restart() {
  cells.forEach(function (cell) {
    cell.innerHTML = "";
  });
  letter = 1;
  nxtUp.innerHTML = "Next up: X";
  playHum.innerHTML = "Play Human"
  playComp.innerHTML = "Play Computer"
  for(const cell of cells){
    cell.classList.remove("picked")
  }
}
//checks for if movesLeft
function isMovesLeft() {
  for (let i = 0; i < board.length; i++) {
    if (board.includes("")){
        return true
    } else{
        return false;
    }
  }
}

//what should happen when game is over
function gameIsOver(){
  let gameOver=true;
  if(gameOver){
    for(const cell of cells){
      addPickedClass(cell)
      console.log(cell.classList)
    }
  }
}

//updates cell to picked class
function addPickedClass(a){
  a.classList.add("picked");
}

//add score
function addScore(el){
  if(el === "Score1"){
    s1 = s1 + 1;
    el.innerHTML = s1;
  } else {
    s2 = s2 + 1;
    el.innerHTML = s2;
  }
  console.log(s1)
}

//create and add user class
function setUser(a){
  a.classList.add("user");
}

//create and add computer class
function setComp(a){
  a.classList.add("comp");
}