"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_js_1 = __importDefault(require("./booking.js"));
class Library {
    constructor() {
        this.bookList = [];
        this.availableBooks = [];
        this.bookingList = [];
        this.userList = [];
    }
    addToBooklist(book) {
        this.bookList.push(book);
    }
    removeFromBooklist(book) {
        const bookIndex = this.bookList.findIndex(element => element.uuid === book.uuid);
        const availableBookIndex = this.availableBooks.findIndex(element => element.title === book.title);
        if (bookIndex === -1)
            throw new Error('this doesnt match any book on the list');
        this.bookList = this.bookList.filter((_, i) => i !== bookIndex);
        this.availableBooks = this.availableBooks.filter((_, i) => i !== availableBookIndex);
    }
    addToAvailableBooks(book) {
        const foundBook = this.availableBooks.find(element => element.uuid === book.uuid);
        if (foundBook) {
            foundBook.increaseQuantity();
        }
        else {
            this.availableBooks.push(book);
        }
    }
    removeFromAvailableBooks(book) {
        const index = this.availableBooks.findIndex(element => element.uuid === book.uuid);
        if (index === -1)
            throw new Error('this doesnt match any book on the list');
        const bookToRemove = this.availableBooks[index];
        if (bookToRemove.quantity > 1) {
            bookToRemove.decreaseQuantity();
        }
        else {
            this.availableBooks = this.availableBooks.filter((_, bookIndex) => bookIndex !== index);
        }
    }
    addToUserList(user) {
        this.userList.push(user);
    }
    removeFromUserLIst(user) {
        const index = this.userList.findIndex(element => element.uuid === user.uuid);
        if (index === -1)
            throw new Error('this doesnt match any user on the list');
        this.userList = this.userList.filter((_, userIndex) => userIndex !== index);
    }
    borrowBook(user, book) {
        const userIndex = this.userList.findIndex(element => element.uuid === user.uuid);
        const bookIndex = this.availableBooks.findIndex(element => element.uuid === book.uuid);
        if (userIndex === -1)
            throw new Error('User does not exist');
        if (bookIndex === -1)
            throw new Error('Book is not available');
        const booking = new booking_js_1.default(user);
        booking.addToBooklist(book);
        this.bookingList.push(booking);
        const bookToborrow = this.availableBooks[bookIndex];
        if (bookToborrow.quantity > 1) {
            bookToborrow.decreaseQuantity();
        }
        else {
            this.availableBooks = this.availableBooks.filter((_, index) => index !== bookIndex);
        }
    }
    returnBook(user, book, returnDate) {
        const userIndex = this.userList.findIndex(item => item.uuid === user.uuid);
        const bookingIndex = this.bookingList.findIndex(item => item.user.uuid === user.uuid);
        if (userIndex === -1)
            throw new Error('User does not exist');
        if (bookingIndex === -1)
            throw new Error('User has no active bookings');
        const booking = this.bookingList[bookingIndex];
        console.log(booking.returnBook(returnDate));
        const bookToReturn = this.availableBooks.find(element => element.uuid === book.uuid);
        if (bookToReturn) {
            bookToReturn.increaseQuantity();
        }
        else {
            this.availableBooks.push(book);
        }
    }
}
exports.default = Library;
