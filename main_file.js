//Spin the machine variables.

const ROWS = 3;
const COLS= 3;


//Total number of symbols on the reels.
const SYMBOLS_COUNT = {
  "A" : 2,
  "B" : 4,
  "C" : 6,
  "D" : 8
}

const SYMBOLS_VALUES = {
  "A" : 5,
  "B" : 4,
  "C" : 3,
  "D" : 2
}

//Collect a deposit from the player.

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Play Responsibly. Enter play amount: ");
    const depositAmountToNumber = parseFloat(depositAmount);

    if (isNaN(depositAmountToNumber) || depositAmountToNumber <= 0) {
      prompt("Invalid play amount. Try again!");
    }
    else{
        return depositAmountToNumber;
    }
  }
}


//Collect the number of lines to be on.

const noOfLines = () => {
    while (true) {
        const lineNumber = prompt("Play Responsibly. Enter number of lines(1-3): ");
        const lineNumberToNumber = parseFloat(lineNumber);
    
        if (isNaN(lineNumberToNumber) || lineNumberToNumber <= 0 ||lineNumberToNumber > 3) {
          prompt("Invalid number of lines. Try again!");
        }
        else{
            return lineNumberToNumber;
        }
      }
}


//Collect bet amount.

const betAmount = (balance, lineNumber) => {
  while (true) {
      const amountBet = prompt("Play Responsibly. Enter bet amount: ");
      const amountBetToNumber = parseFloat(amountBet);
  
      if (isNaN(amountBetToNumber) || amountBetToNumber <= 0 || amountBetToNumber > (balance/lineNumber)) {
        prompt("Invalid play amount. Try again!");
      }
      else{
          return amountBetToNumber;
      }
    }
}


//Spin the slot machine.

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++){
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++){
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++){
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
}

//Transpose the array into a matrix

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++){
    rows.push([]);
    for (let j = 0; j < ROWS; j++){
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
}

//Print out the Player's score

const printRows = (rows) => {
  for (const row of rows){
    let rowString = "";
    for (const [i, symbol] of row.entries()){
      rowString += symbol;
      if (i != row.length - 1){
        rowString += " | ";
      }
    }

    console.log(rowString);

  }
}

//Check if the user won

const getWinnings = (rows, amountBet, lineNumber) => {
  let winnings = 0;
  for (let row = 0; row < noOfLines; row++){
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }

  return winnings;
}


let balance = deposit();
const lineNumber = noOfLines();
const amountBet = betAmount(balance, lineNumber);
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winnings = getWinnings(rows, amountBet, lineNumber);
console.log("You won $" + winnings.toString());