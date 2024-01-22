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

const betAmount = () => {
  while (true) {
      const amountBet = prompt("Play Responsibly. Enter bet amount: ");
      const amountBetToNumber = parseFloat(amountBet);
  
      if (isNaN(amountBetToNumber) || amountBetToNumber <= 0 ||amountBetToNumber > depositAmount) {
        prompt("Invalid play amount. Try again!");
      }
      else{
          return amountBetToNumber;
      }
    }
}
 
const depositAmount = deposit();
const lineNumber = noOfLines();
const amountBet = betAmount();

//console.log(depositAmount);
