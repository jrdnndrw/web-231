/*
============================================
; Title: nishimura-anderson-bookstore.js
; Author: Jordan Nishimura-Anderson
; Date: 4/23/2023
; Description: This generates an HTML table of the
; favorite books, authors or publishers.
;===========================================
*/

// Variables for the favorite books, authors, and publishers.
const books = ["Dune", "Ender's Game", "1984"]
const authors = ["Frank Herbert", "Orson Scott Card", "George Orwell"]
const publishers = ["Chilton Books", "Tor Books", "Secker & Warburg"]

/**
 * The display function evaluates the user's selection to build
 * the tables for books, authors, and publishers and assigns the
 * result to the HTML.
 */
function display () {
  // Captures the favorites value from the users selection.
  const choice = document.getElementById('choice').value
  const formResults = document.getElementById('form-results')

  // A switch case to evaluate the user's choice to display the selection.
  switch (choice) {
    case 'books':
      let tblBooks = `
        <h3>Books Listing</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `
      /**
       * A for loops that iterates over each books index and
       * appends HTML elements to the tblAuthors.
       */
      for (let i = 0; i < books.length; i++) {
        tblBooks += `
          <tr>
            <td>${books[i]}</td>
          </tr>
        `
      }
      tblBooks += `</tbody></table>`
      formResults.innerHTML = tblBooks
      break;

    case 'authors':
      let tblAuthors = `
        <h3>Authors Listing</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
      `
      authors.sort()
      /**
       * A for of loop that iterates over the authors array and
       * appends HTML elements to the tblAuthors.
       */
      for (const author of authors) {
        tblAuthors += `
          <tr>
            <td>${author}</td>
          </tr>
        `
      }
      tblAuthors += `</tbody></table>`
      formResults.innerHTML = tblAuthors
      break;

    case 'publishers':
      let tblPublishers = `
        <h3>Publishers Listing</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
      `
      publishers.sort()
      publishers.reverse()
      let i = 0
      /**
       * A while loops that iterates over each publishers index while
       * the index evaluates true and appends HTML elements to the tblAuthors.
       */
      while (publishers[i]) {
        tblPublishers += `
          <tr>
            <td>${publishers[i]}</td>
          </tr>
        `
        i++
      }
      tblPublishers += `</tbody></table>`
      formResults.innerHTML = tblPublishers
      break;

    default:
      // A default alert when no choice has been selected.
      alert('Invalid selection, please try again!')
      break;
  }
}
