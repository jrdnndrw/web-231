/*
============================================
; Title: nishimura-anderson-in-n-out-books.js
; Author: Jordan Nishimura-Anderson
; Date: 5/7/2023
; Description: This generates an HTML table of the
; favorite books and authors.
;===========================================
*/

// Dune book object
const duneBook = {
  isbn: '9780441172719',
  title: 'Dune',
  pages: 688
}

// Ender's Game book object
const endersGameBook = {
  isbn: '9780812550702',
  title: 'Ender\'s Game',
  pages: 357
}

// 1984 book object
const nineteenEightyFourBook = {
  isbn: '9780451524935',
  title: '1984',
  pages: 328
}

// Frank Herbert author object
const frankHerbertAuthor = {
  name: 'Frank Herbert',
  genre: 'Science Fiction'
}

// Orson Scott Card author object
const orsonScottCardAuthor = {
  name: 'Orson Scott Card',
  genre: 'Science Fiction'
}

// George Orwell author object
const georgeOrwellAuthor = {
  name: 'George Orwell',
  genre: 'Dystopian Fiction'
}


/**
 * The display function evaluates the user's selection to build
 * the tables for books and authors, and assigns the result to the HTML.
 */
function display () {
  // Captures the favorites value from the users selection.
  const choice = document.getElementById('choice').value
  const formResults = document.getElementById('form-results')

  // A switch case to evaluate the user's choice to display the selection.
  switch (choice) {
    case 'books':
      // String concatenation to build the HTML tables using the objects.
      let tblBooks = `
        <h3>Top 3 Favorite Books</h3>
        <table class="table">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${duneBook.isbn}</td>
              <td>${duneBook.title}</td>
              <td>${duneBook.pages}</td>
            </tr>
            <tr>
              <td>${endersGameBook.isbn}</td>
              <td>${endersGameBook.title}</td>
              <td>${endersGameBook.pages}</td>
            </tr>
            <tr>
              <td>${nineteenEightyFourBook.isbn}</td>
              <td>${nineteenEightyFourBook.title}</td>
              <td>${nineteenEightyFourBook.pages}</td>
            </tr>
          </tbody>
        </table>
      `
      // Display the result in the 'form-results' div.
      formResults.innerHTML = tblBooks
      break;

    case 'authors':
     // String concatenation to build the HTML tables using the objects.
      let tblAuthors = `
        <h3>Top 3 Favorite Authors</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${frankHerbertAuthor.name}</td>
              <td>${frankHerbertAuthor.genre}</td>
            </tr>
            <tr>
              <td>${orsonScottCardAuthor.name}</td>
              <td>${orsonScottCardAuthor.genre}</td>
            </tr>
            <tr>
              <td>${georgeOrwellAuthor.name}</td>
              <td>${georgeOrwellAuthor.genre}</td>
            </tr>
          </tbody>
        </table>
      `
      // Display the result in the 'form-results' div.
      formResults.innerHTML = tblAuthors
      break;

    default:
      // A default alert when no choice has been selected.
      alert('Invalid selection, please try again!')
      break;
  }
}
