"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_js_1 = __importDefault(require("./user.js"));
const book_js_1 = __importDefault(require("./book.js"));
const library_js_1 = __importDefault(require("./library.js"));
const libraryBook_js_1 = __importDefault(require("./libraryBook.js"));
const user1 = new user_js_1.default("John", "Wick");
const user2 = new user_js_1.default("Indiana", "Jones");
const user3 = new user_js_1.default("Bruce", "Wayne");
const user4 = new user_js_1.default("Luke", "Skywalker");
const user5 = new user_js_1.default("Michael", "Jordan");
const book1 = new book_js_1.default("Lord of the rings", "J.R.R. Tolkien", "LOTR.jpg", `In ancient times the Rings of Power were crafted by the Elven-smiths,
 and Sauron, the Dark Lord, forged the One Ring,
 filling it with his own power so that he could rule all others.
 But the One Ring was taken from him,
 and though he sought it throughout Middle-earth,
 it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.`);
const book2 = new book_js_1.default("Harry Potter and the chamber of Secrets", "J.K. Rowling", "HPCS.jpg", `The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry,
 during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the
 "heir of Slytherin" would kill all pupils who do not come from all-magical families.`);
const book3 = new book_js_1.default("Clean Code", "Robert Cecil Martin", "CC.jpg", `Noted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship.
 Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers,
 has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code
 “on the fly” into a book that will instill within you the values of software craftsman,
 and make you a better programmer―but only if you work at it. `);
const book4 = new book_js_1.default("1984", "George Orwell", "1984.jpg", `Written more than 70 years ago, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone,
 his dystopian vision of a government that will do anything to control the narrative is timelier than ever...`);
const book5 = new book_js_1.default("Sherlock Holmes: The Hound of the Baskervilles", "Arthur Conan Doyle", "SHHB.jpg", `In this, one of the most famous of Doyle's mysteries, the tale of an ancient curse and a savage ghostly hound comes frighteningly to life. 
 The gray towers of Baskerville Hall and the wild open country of Dartmoor will haunt the reader as Holmes and Watson 
 seek to unravel the many secrets of the misty English bogs.`);
const libraryBook1 = new libraryBook_js_1.default(book1.title, book1.author, book1.img, book1.description);
const libraryBook2 = new libraryBook_js_1.default(book2.title, book2.author, book2.img, book2.description);
const libraryBook3 = new libraryBook_js_1.default(book3.title, book3.author, book3.img, book3.description);
const libraryBook4 = new libraryBook_js_1.default(book4.title, book4.author, book4.img, book4.description);
const libraryBook5 = new libraryBook_js_1.default(book5.title, book5.author, book5.img, book5.description);
const library1 = new library_js_1.default();
library1.addToBooklist(book1);
library1.addToBooklist(book2);
library1.addToBooklist(book3);
library1.addToBooklist(book4);
library1.addToBooklist(book5);
library1.addToAvailableBooks(libraryBook1);
library1.addToAvailableBooks(libraryBook2);
library1.addToAvailableBooks(libraryBook3);
library1.addToAvailableBooks(libraryBook4);
library1.addToAvailableBooks(libraryBook5);
library1.addToUserList(user1);
library1.addToUserList(user2);
library1.addToUserList(user3);
library1.addToUserList(user4);
library1.addToUserList(user5);
// console.log(library1)
library1.borrowBook(user1, libraryBook1);
library1.returnBook(user1, libraryBook1, new Date(2023, 5, 25));
console.log(library1);
// library1.borrowBook(user2, libraryBook1)
// console.log(library1)
library1.removeFromBooklist(book1);
console.log(library1);
