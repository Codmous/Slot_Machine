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


 
let balance = deposit();
const lineNumber = noOfLines();
const amountBet = betAmount(balance, lineNumber);
