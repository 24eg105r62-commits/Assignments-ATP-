/**
 * Purpose: Manages a collection of books in a library system using Classes.
 * Key Variables:
 * - title, author, pages, isAvailaible: Properties of the Book class.
 * - library: Array holding instances of the Book class.
 * Logic Flow:
 * - Defines a 'Book' class with methods for borrowing, returning, and checking book length.
 * - Instantiates several books and adds them to a library array.
 * - Performs operations like displaying info, borrowing/returning books, and counting "long" books.
 */
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
    return this.pages > 300;
  }
}

let book1 = new Book("book1", "Author1", 100);
let book2 = new Book("book2", "Author2", 200);
let book3 = new Book("book3", "Author3", 300);
let book4 = new Book("book4", "Author4", 400);
let book5 = new Book("book5", "Author5", 500);

let library = [book1, book2, book3, book4, book5];

// 1. Display info of all books
console.log("Library Collection:");
for (let books of library) {
  books.getInfo();
}

// 2. Borrow 2 books and show their availability status
book1.borrow();
console.log("Book 1 Available:", book1.isAvailaible);
book2.borrow();
console.log("Book 2 Available:", book2.isAvailaible);

// 3. Return 1 book and show updated status
book1.returnBook();
console.log("Book 1 Available after return:", book1.isAvailaible);

// 4. Count how many books are "long books" (more than 300 pages)
let count = library.filter(book => book.isLongBook()).length;
console.log("Number of long books:", count);

// 5. List all available books
let available = library
  .filter(book => book.isAvailaible)
  .map(book => book.title);
console.log("Currently Available Books:", available);
