/*
============================================
; Title: nishimura-anderson-temp-conversion.js
; Author: Jordan Nishimura-Anderson
; Date: 3/30/2023
; Description: This provides onclick event handling to convert
; a fahrenheit variable to a celsius variable.
;===========================================
*/

/** Variables for fahrenheit and celsius temperatures */

/**
 * The calcCelsius function converts a fahrenheit temperature
 * to a celsius temperature.
 */
function calcCelsius () {
  // Captures the fahrenheit value from the users input.
  const fahrenheit = document.getElementById('fahrenheitValue').value

  // Converts the fahrenheit temperature to celsius temperature.
  const celsius = (fahrenheit - 32) / 1.8

  // Assigns the temperature conversion to the form results card.
  document.getElementById('form-results').innerHTML = celsius.toFixed(2)
}
