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
  listBooks();
}

let render = function(content, container){
  container.innerHTML = content;
}

let writeSomething = function(text){
  render(`<h2>${text}</h2>`, document.getElementById("book-container"));
}

let listBooks = function(){
  let full_list = ""; 
  for (let i=0; i<myLibrary.length; i++){
    full_list = full_list + `<tr>
                              <th scope="row">${myLibrary[i].title}</th>
                              <td>${myLibrary[i].author}</td>
                              <td>${myLibrary[i].pages}</td>
                              <td>${myLibrary[i].read? 'It was readed': 'no read yet'}</td>
                            </tr>`;
  } 
  let table_list =  document.getElementById('list-books');
  render(full_list, table_list); 
}