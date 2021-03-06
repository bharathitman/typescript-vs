/// <reference path="./typings/main.d.ts" />


import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine} from './interfaces';
import { UniversityLibrarian, ReferenceItem} from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge} from './lib/utilityFunctions'
import refBook from './encyclopedia';
import Shelf from './shelf';

import * as _ from "lodash";


let snakeCaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);

function GetAllBooks(): Book[] {

    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('FirstAvailable: ' + firstAvailable);
}



function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {

    for (let title of titles) {
        console.log(title);
    }

}


function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id == id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: String, age?: number, city?: string): void {
    console.log('Creating Customer ' + name);
    if (age) {
        console.log('Age:' + age);
    }
    if (city) {
        console.log('City:' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {

    console.log('Checking out Books for ' + customer);

    let booksCheckedOut: string[] = [];

    for (let id of bookIds) {
        let book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

/**Overloading Functions */


function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {

    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if (typeof bookProperty == 'boolean') {
        //get all books based on specified availability
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged: (reason: string) => console.log('Damaged ' + reason)
};

//***********************

let inventory: Array<Book> = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Fiction },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
];


let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    {title: 'Progamming 1', publisher: 'Code 1'},
    {title: 'Progamming 2', publisher: 'Code 2'},
    {title: 'Progamming 3', publisher: 'Code 3'},
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Ulysses');

// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));

// let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
// console.log(purgedNums);


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
