let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// function provides random target number to compare human and target guess
const generateTarget = () => {
  return Math.floor(Math.random() * 20);
}

// Code determines if human or comp is closest to target
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

// Function increases score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = () =>{

}