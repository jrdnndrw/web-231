/*
============================================
; Title: nishimura-anderson-sequence-game.js
; Author: Jordan Nishimura-Anderson
; Date: 4/16/2023
; Description: This generates a sequence of numbers depending upon the
; selection from the user.
;===========================================
*/

/**
 * The displaySequence function evaluates the user's selection to build
 * the desired number sequence and assigns the result to the HTML.
 */
function displaySequence () {
  // Captures the number sequence value from the users selection.
  const choice = document.getElementById('choice').value

  // A switch case to evaluate the user's choice to display the selection.
  switch (choice) {
    case 'numbers':
      let index = 0
      let txtNumSequence = ''
      // A while loop to build the number sequence up to 10.
      while (index <= 10) {
        txtNumSequence = txtNumSequence.concat(index)
        if (index < 10) {
          txtNumSequence = txtNumSequence.concat(', ')
        }
        index++
      }
      document.getElementById('form-results').innerHTML = txtNumSequence
      break;

    case 'even':
      let evenNumber = 0
      let txtEvenSequence = ''
      // A do while loop that builds an even number sequence.
      do {
        txtEvenSequence = txtEvenSequence.concat(evenNumber)
        if (evenNumber < 20) {
          txtEvenSequence = txtEvenSequence.concat(', ')
        }
        evenNumber += 2
      }
      while (evenNumber <= 20)
      document.getElementById('form-results').innerHTML = txtEvenSequence
      break;

    case 'odd':
      let txtOddSequence = ''
      // A for loop that builds an odd number sequence.
      for (let i = 1; i < 20; i += 2) {
        txtOddSequence = txtOddSequence.concat(i)
        if (i < 19) {
          txtOddSequence = txtOddSequence.concat(', ')
        }
      }
      document.getElementById('form-results').innerHTML = txtOddSequence
      break;

    default:
      // A default alert when no choice has been selected.
      alert('Invalid selection, please try again!')
      break;
  }
}
