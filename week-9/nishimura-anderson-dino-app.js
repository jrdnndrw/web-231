/*
============================================
; Title: nishimura-anderson-dino-app.js
; Author: Jordan Nishimura-Anderson
; Date: 5/9/2023
; Description: This file defines dinosaur classes and provides
; interactive functionality to display different sounds based
; on the selected dinosaur type from the HTML page.
;===========================================
*/

/**
 * Gigantosaurus class with a name property and a roar method.
 * @class
 */
class Gigantosaurus {
  /**
   * @param {string} name The name of the Gigantosaurus.
   */
  constructor(name) {
    this.name = name
  }

  /**
   * Method that returns the roar message of the Gigantosaurus.
   * @returns {string}
   */
  roar() {
    return `${this.name} says: rooooooar!`
  }
}

/**
 * Tyrannosaurus class, a child class of Gigantosaurus, with a name property,
 * and a growl method.
 * @class
 */
class Tyrannosaurus extends Gigantosaurus {
  /**
   * @param {string} name The name of the Tyrannosaurus.
   */
  constructor(name) {
    // super() calls the constructor of the parent class Gigantosaurus
    super(name)
  }

  /**
   * Method that returns the growl message of the Tyrannosaurus.
   * @returns {string}
   */
  growl() {
    return `${this.name} says: groooooowl!`
  }
}

/**
 * Velociraptor class, a child class of Tyrannosaurus, with a name property,
 * and an awk method.
 * @class
 */
class Velociraptor extends Tyrannosaurus {
  /**
   * @param {string} name The name of the Velociraptor.
   */
  constructor(name) {
    // super() calls the constructor of the parent class Tyrannosaurus
    super(name)
  }

  /**
   * Method that returns the awk message of the Velociraptor.
   * @returns {string}
   */
  awk() {
    return `${this.name} says: awk awk awwwwwwk!`
  }
}

/**
 * The display function evaluates the user's selection to determine the appropriate
 * sound message, and assigns the result to the HTML.
 */
function display() {
  // Captures the dinosaur objects.
  const gigantosaurus = document.getElementById('gigantosaurus')
  const tyrannosaurus = document.getElementById('tyrannosaurus')
  const velociraptor = document.getElementById('velociraptor')

  // Evaluates the dinosaur object to determine the selection.
  let selection = ''
  if (gigantosaurus.checked) {
    selection = gigantosaurus.value
  } else if (tyrannosaurus.checked) {
    selection = tyrannosaurus.value
  } else if (velociraptor.checked) {
    selection = velociraptor.value
  }

  // Creates a new instance of the Velociraptor class using the user's selection.
  const dinosaur = new Velociraptor(selection)
  const formResults = document.getElementById('form-results')

  // A switch case to evaluate the user's choice to display the selection.
  switch (selection) {
    case 'Gigantosaurus':
      formResults.innerHTML = dinosaur.roar()
      break
    case 'Tyrannosaurus':
      formResults.innerHTML = dinosaur.growl()
      break
    case 'Velociraptor':
      formResults.innerHTML = dinosaur.awk()
      break
    default:
      alert('Invalid selection, please try again!')
  }
}
