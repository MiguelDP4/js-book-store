let myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }
}

let getTitle = function() {
  return document.getElementById('title-input').value;
}

let getAuthor = function() {
  return document.getElementById('author-input').value;
}

let getPages = function() {
  return document.getElementById('pages-input').value;
}

function addBookToLibrary() {
  myLibrary.push(new Book(getTitle(), getAuthor(), getPages()));
  console.log(myLibrary);
}

let render = function(content, container){
  container.innerHTML = content;
}

let writeSomething = function(text){
  render(`<h2>${text}</h2>`, document.getElementById("book-container"));
}