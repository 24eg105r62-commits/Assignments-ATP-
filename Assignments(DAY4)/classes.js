class Book {
  title;
  author;
  pages;
  isAvailaible;
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailaible = true;
  }
  borrow() {
    this.isAvailaible = false;
  }
  returnBook() {
    this.isAvailaible = true;
  }
  getInfo() {
    console.log(`The ${this.title} by ${this.author} (${this.pages} pages)`);
  }
  isLongBook() {
    if (this.pages > 300) {
      return true;
    } else {
      return false;
    }
  }
}
let book1 = new Book("book1", "Author1", 100);
let book2 = new Book("book2", "Author2", 200);
let book3 = new Book("book3", "Author3", 300);
let book4 = new Book("book4", "Author4", 400);
let book5 = new Book("book5", "Author5", 500);

//1.Display info of all books
let library = [book1, book2, book3, book4, book5];
for (let books of library) {
  books.getInfo();
}

//2. Borrow 2 books and show their availability status
book1.borrow();
console.log(book1.isAvailaible); //checking availaibility
book2.borrow();
console.log(book2.isAvailaible); //checking availaibility

//3. Return 1 book and show updated status
book1.returnBook();
console.log(book1.isAvailaible); //printing availaibility

//4.Count how many books are "long books" (more than 300 pages)
let count = 0;
for (let books of library) {
  if (books.isLongBook()) {
    count += 1; //updating count
  }
}
console.log(count);
//5. List all available books
let available = [];
for (let books of library) {
  if (books.isAvailaible === true) {
    available.push(books.title);
  }
}
console.log(available);
