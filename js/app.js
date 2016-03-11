"use strict";
var enums_1 = require('./enums');
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('FirstAvailable: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id == id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating Customer ' + name);
    if (age) {
        console.log('Age:' + age);
    }
    if (city) {
        console.log('City:' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out Books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    if (typeof bookProperty == 'boolean') {
        //get all books based on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
var myBook = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: enums_1.Category.Fiction,
    pages: 250,
    markDamaged: function (reason) { return console.log('Damaged ' + reason); }
};
//***********************
//Class Expressions
// let Newspaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`);
//     }
// }
// let myPaper = new Newspaper('The Gazzette', 2016);
// myPaper.printCitation();
// class Novel extends class { title: string } {
//     mainCharacter: string;
// }
// let favouriteNovel = new Novel();
//  let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 2015, 1);
//  refBook.printCitation();
// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing'
// console.log(ref.publisher);
// let favouriteLibrain: Librarian = new UniversityLibrarian();
// favouriteLibrain.name = 'Martha';
// favouriteLibrain.assistCustomer('Lynda');
// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log('Damage reported: '+ damage);
// logDamage('coffee stains');
// PrintBook(myBook);
// myBook.markDamaged('missing cover');
// let checkoutBooks = GetTitles(false);
// checkoutBooks.forEach(title => console.log(title));
// let myBooks: string[] = CheckoutBooks('Throne', 1,3,4);
// myBooks.forEach(title => console.log(title));
//LogFirstAvailable();
// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
//CreateCustomer('Bharath', 25, 'Bangalore');
//let x: number;
//x=5;
//Assign Function to a Variable
//let IdGenerator: (chars: string, nums: number) => string;
//IdGenerator = CreateCustomerID;
//IdGenerator = (name: string, id: number) => { return id + name};
//let myID: string = IdGenerator('daniel', 12);
//console.log(myID);
//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + '-' + val));
//# sourceMappingURL=app.js.map