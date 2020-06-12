const myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }
}

function render(content, container) {
  container.innerHTML = content;
}

function listBooks() {
  let fullList = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    fullList += `<tr>
                              <th scope="row">${i + 1}</th>
                              <th scope="row">${myLibrary[i].title}</th>
                              <td scope="row">${myLibrary[i].author}</td>
                              <td scope="row">${myLibrary[i].pages}</td>
                              <td scope="row" id="book-${i}"><a href="#" onclick="toggleRead('${i}')">${myLibrary[i].read ? 'Already read' : 'Not read yet'}</a></td>
                            </tr>`;
  }
  const tableList = document.getElementById('list-books');
  render(fullList, tableList);
}

function hideElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'none';
}

function showElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'block';
}

function cleanFields() {
  document.getElementById('title-input').value = '';
  document.getElementById('author-input').value = '';
  document.getElementById('pages-input').value = '';
}

// eslint-disable-next-line  no-unused-vars
function closeModal() {
  hideElement('floating-form');
  showElement('add-book-button');
  cleanFields();
}

// eslint-disable-next-line  no-unused-vars
function addBookToLibrary() {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;
  const pages = document.getElementById('pages-input').value;

  if (title === '' || author === '' || pages === '') {
    showElement('empty-warning');
  } else {
    myLibrary.push(new Book(title, author, pages));
    listBooks();
    hideElement('floating-form');
    showElement('add-book-button');
    cleanFields();
  }
}
// eslint-disable-next-line  no-unused-vars
function toggleRead(bookIndex) {
  if (myLibrary[bookIndex].read) {
    myLibrary[bookIndex].read = false;
  } else {
    myLibrary[bookIndex].read = true;
  }
  const anchorString = `<a href="#" onclick="toggleRead('${bookIndex}')">${myLibrary[bookIndex].read
    ? 'Already read' : 'Not read yet'}</a>`;
  const rowElement = document.getElementById(`book-${bookIndex}`);
  render(anchorString, rowElement);
}