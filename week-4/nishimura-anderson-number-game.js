/*
============================================
; Title: nishimura-anderson-number-game.js
; Author: Jordan Nishimura-Anderson
; Date: 4/3/2023
; Description: This generates a random number between 1-10 and provides
; onclick event handling to evaluate a user provided number against the
; random number to see if it is greater than, less than, or equal.
;===========================================
*/

// The random generated number variable set with generateRndNum().
const rnd = generateRndNum()

/**
 * The generateRndNum function uses the Math.floor and Math.random methods
 * to generate a random number between 1-10.
 * @returns A number between 1-10.
 */
function generateRndNum () {
  return Math.floor((Math.random() * 10) + 1)
}

/**
 * The chkGuess function evaluates the if the user's guess is greater than,
 * less than, or equal to and the random generated number and assigns the
 * result to the HTML.
 */
function chkGuess () {
  // Captures the guess value from the users input.
  const guess = document.getElementById('guessValue').value
  // The less than string message containing the guessed number.
  const msgLessThan = `The number is less than ${guess}`
  // The greater than string message containing the guessed number.
  const msgGreaterThan = `The number is greater than ${guess}`
  // The matching string message.
  const msgCongrats = 'Congratulations! You picked the correct number!'

  /**
   * The conditional statement to evaluate the guess and random number,
   * and assigns the message results to the HTML.
   */
  if (guess > rnd) {
    document.getElementById('form-results').innerHTML = msgLessThan
  } else if (guess < rnd) {
    document.getElementById('form-results').innerHTML = msgGreaterThan
  } else {
    document.getElementById('form-results').innerHTML = msgCongrats
  }
}
