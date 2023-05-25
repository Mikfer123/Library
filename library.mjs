import Booking from "./booking.mjs";
import Validator from "./validator.mjs";
import Book from "./book.mjs";
export default class Library {
    constructor() {
        this.bookList = []
        this.availableBooks = []
        this.bookingList = []
        this.userList = []
    }

    addToBooklist(book) {
        Validator.throwErrorIfNotInstanceOfBook(book)

        const foundBook = this.bookList.find(element => element.uuid === book.uuid)//sprawdzic czy w availablebooks

        if(foundBook) {

            foundBook.increaseQuantity()

        } else {

            this.bookList.push(book)
            this.availableBooks.push(book);

        }
    }

    removeFromBooklist(book) {
        Validator.throwErrorIfNotInstanceOfBook(book)

        const index = this.bookList.findIndex(element => element.uuid === book.uuid)

        if(index === -1) throw new Error('this doesnt match any book on the list')

        const bookToRemove = this.bookList[index]

        if(bookToRemove.quantity > 1) {

            bookToRemove.decreaseQuantity()

        } else {

            this.bookList = this.bookList.filter((_, bookIndex) => bookIndex !== index)
            this.availableBooks = this.availableBooks.filter((_, bookIndex) => bookIndex !== index) // X
        }
    }

    addToUserList(user) {
        Validator.throwErrorIfNotInstanceOfUser(user)

        this.userList.push(user)

    }

    removeFromUserLIst(user) {
        Validator.throwErrorIfNotInstanceOfUser(user)

        const index = this.userList.findIndex(element => element.uuid === user.uuid) 

        if(index === -1) throw new Error('this doesnt match any user on the list')

        this.userList = this.userList.filter((_, userIndex) => userIndex !== index)
    }

    borrowBook(user, book) {
        Validator.throwErrorIfNotInstanceOfUser(user)
        Validator.throwErrorIfNotInstanceOfBook(book)

        const userIndex = this.userList.findIndex(element => element.uuid === user.uuid);
        const bookIndex = this.availableBooks.findIndex(element => element.uuid === book.uuid);

        if (userIndex === -1) throw new Error('User does not exist');
        if (bookIndex === -1) throw new Error('Book is not available');

        const booking = new Booking(user);
        booking.addToBooklist(book);
        this.bookingList.push(booking);

        // Book LibraryBook
        const bookToborrow = this.availableBooks[bookIndex]

        const bookCopy = new Book(bookToborrow.title, bookToborrow.author, bookToborrow.img, bookToborrow.description);

        bookCopy.changeUuid(bookToborrow.uuid);
        bookCopy.changeQuantity(bookToborrow.quantity -1);

        if(bookToborrow.quantity > 1) {

            this.availableBooks = this.availableBooks.filter(item => item.uuid !== bookCopy.uuid).concat(bookCopy);

        } else {

            this.availableBooks = this.availableBooks.filter((_, index) => index !== bookIndex)
        }
    }

    returnBook(user, book, returnDate) {
        Validator.throwErrorIfNotInstanceOfUser(user)
        Validator.throwErrorIfNotInstanceOfBook(book)
        Validator.validateDate(returnDate)

        const userIndex = this.userList.findIndex(item => item.uuid === user.uuid);
        const bookingIndex = this.bookingList.findIndex(item => item.user.uuid === user.uuid);

        if (userIndex === -1) throw new Error('User does not exist');
        if (bookingIndex === -1) throw new Error('User has no active bookings');

        const booking = this.bookingList[bookingIndex];
        // booking.returnBook(returnDate);
        console.log(booking.returnBook(returnDate))

        const bookToReturn = this.availableBooks.find(element => element.uuid === book.uuid)

        const bookCopy = new Book(bookToReturn.title, bookToReturn.author, bookToReturn.img, bookToReturn.description);

        bookCopy.changeUuid(bookToReturn.uuid);
        bookCopy.changeQuantity(bookToReturn.quantity +1);

        if(bookToReturn) {

            this.availableBooks = this.availableBooks.filter(item => item.uuid !== bookCopy.uuid).concat(bookCopy);

        } else {

            this.availableBooks.push(book);

        }
    }
}

// https://github.com/Localhost-Group/JS-TS-Fundamentals/blob/main/2.%20JS%20Object-oriented%20Programming/zadania/exam/Starlink_2-0.md