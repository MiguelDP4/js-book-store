let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}


function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  myLibrary.push(new Book(title, author, pages, read));
}