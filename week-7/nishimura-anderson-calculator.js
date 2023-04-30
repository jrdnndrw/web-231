/*
============================================
; Title: nishimura-anderson-number-game.js
; Author: Jordan Nishimura-Anderson
; Date: 4/30/2023
; Description: This multiplies and divides numbers provided by
; user input and contains exception handling.
;===========================================
*/

/**
 * Multiply two numbers and return the multiplication result.
 * @param {number} numOne - The first number to multiply.
 * @param {number} numTwo - The second number to multiply.
 * @throws {Error} If either input parameter is not a number or is NaN.
 * @returns {number} The multiplication result of numOne multiplied by numTwo.
 */
function multiply (numOne, numTwo) {
  // checks if both parameters are numbers.
  if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
    throw new Error('inputs must be numbers')
  }

  // checks if either parameter is NaN.
  if (isNaN(numOne) || isNaN(numTwo)) {
    throw new Error('inputs must be numbers')
  }

  // returns the multiplication sum of the two parameters.
  return numOne * numTwo
}

/**
 * Divide two numbers and return the division result.
 * @param {number} numOne - The first number to divide.
 * @param {number} numTwo - The second number to divide.
 * @throws {Error} If either input parameter is not a number or is NaN, or if there is a divide by zero operation.
 * @returns {number} The division result of numOne divided by numTwo.
 */
function divide (numOne, numTwo) {
  // checks if both parameters are numbers.
  if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
    throw new Error('Inputs must be numbers')
  }

  // checks if either parameter is NaN.
  if (isNaN(numOne) || isNaN(numTwo)) {
    throw new Error('Inputs must be numbers')
  }

  // checks if there is a divide by zero operation.
  if (numTwo === 0) {
    throw new Error('Cannot divide by zero')
  }

  // returns the division sum of the two parameters.
  return numOne / numTwo
}

/**
  * Calculates the multiplication of two numbers entered by the user, displays the result
  * in the 'mul-results' div, and shows an error message in a window alert if
  * the input values are not valid numbers.
  */
function displayMultiplyResults() {
  // Get the values of the input fields.
  const inputOne = document.getElementById('inputOne').value
  const inputTwo = document.getElementById('inputTwo').value

  // Parse the input values as floats.
  const parsedInputOne = parseFloat(inputOne)
  const parsedInputTwo = parseFloat(inputTwo)

  try {
    // Call the multiply() function with the parsed input values.
    const sum = multiply(parsedInputOne, parsedInputTwo)

    // Display the result in the 'mul-results' div.
    const resultCard = document.getElementById('mul-results')
    resultCard.innerHTML = `${parsedInputOne} * ${parsedInputTwo} = ${sum}`
  } catch (error) {
    // Display an error message in a window alert.
    window.alert(error.message)
  }
}

/**
  * Calculates the division of two numbers entered by the user, displays the result
  * in the 'div-results' div, and shows an error message in a window alert if
  * the input values are not valid numbers.
  */
function displayDivideResults() {
  // Get the values of the input fields.
  const inputThree = document.getElementById('inputThree').value
  const inputFour = document.getElementById('inputFour').value

  // Parse the input values as floats.
  const parsedInputThree = parseFloat(inputThree)
  const parsedInputFour = parseFloat(inputFour)

  try {
    // Call the divide() function with the parsed input values.
    const sum = divide(parsedInputThree, parsedInputFour)

    // Display the result in the 'div-results' div.
    const resultCard = document.getElementById('div-results')
    resultCard.innerHTML = `${parsedInputThree} / ${parsedInputFour} = ${sum}`
  } catch (error) {
    // Display an error message in a window alert.
    window.alert(error.message)
  }
}
