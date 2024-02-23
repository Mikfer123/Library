import { BookModel } from "../interfaces/bookInterface";
import { BookingModel } from "../interfaces/bookingInterface";
import { LibraryBookModel } from "../interfaces/libraryBookInterface";
import { UserModel } from "../interfaces/userInterface";
import Booking from "./booking";
import User from "./user";


export default class Library {
    bookList: BookModel[] = []
    availableBooks: LibraryBookModel[] = []
    bookingList: BookingModel[] = []
    userList: UserModel[] = []

    addToBooklist(book: BookModel) {

        this.bookList.push(book)
    }

    removeFromBooklist(book: BookModel) {

        const bookIndex = this.bookList.findIndex(element => element.uuid === book.uuid)
        const availableBookIndex = this.availableBooks.findIndex(element => element.title === book.title)

        if(bookIndex === -1) throw new Error('this doesnt match any book on the list')

        this.bookList = this.bookList.filter((_, i) => i !== bookIndex)
        this.availableBooks = this.availableBooks.filter((_, i) => i !== availableBookIndex)
    }

    addToAvailableBooks(book: LibraryBookModel) {

        const foundBook = this.availableBooks.find(element => element.uuid === book.uuid)

        if(foundBook) {

            foundBook.increaseQuantity()

        } else {

            this.availableBooks.push(book);

        }
    }

    removeFromAvailableBooks(book: LibraryBookModel) {

        const index = this.availableBooks.findIndex(element => element.uuid === book.uuid)

        if(index === -1) throw new Error('this doesnt match any book on the list')

        const bookToRemove = this.availableBooks[index]

        if(bookToRemove.quantity > 1) {

            bookToRemove.decreaseQuantity()

        } else {

            this.availableBooks = this.availableBooks.filter((_, bookIndex) => bookIndex !== index)
        }
    }

    addToUserList(user: UserModel) {

        this.userList.push(user)

    }

    removeFromUserLIst(user: UserModel) {

        const index = this.userList.findIndex(element => element.uuid === user.uuid) 

        if(index === -1) throw new Error('this doesnt match any user on the list')

        this.userList = this.userList.filter((_, userIndex) => userIndex !== index)
    }

    borrowBook(user: UserModel, book: LibraryBookModel) {

        const userIndex = this.userList.findIndex(element => element.uuid === user.uuid);
        const bookIndex = this.availableBooks.findIndex(element => element.uuid === book.uuid);

        if (userIndex === -1) throw new Error('User does not exist');
        if (bookIndex === -1) throw new Error('Book is not available');

        const booking = new Booking(user);
        booking.addToBooklist(book);
        this.bookingList.push(booking);

        const bookToborrow = this.availableBooks[bookIndex]

        if(bookToborrow.quantity > 1) {

            bookToborrow.decreaseQuantity()

        } else {

            this.availableBooks = this.availableBooks.filter((_, index) => index !== bookIndex)
        }
    }

    returnBook(user: UserModel, book: LibraryBookModel, returnDate: Date) {

        const userIndex = this.userList.findIndex(item => item.uuid === user.uuid);
        const bookingIndex = this.bookingList.findIndex(item => item.user.uuid === user.uuid);

        if (userIndex === -1) throw new Error('User does not exist');
        if (bookingIndex === -1) throw new Error('User has no active bookings');

        const booking = this.bookingList[bookingIndex];
        console.log(booking.returnBook(returnDate))

        const bookToReturn = this.availableBooks.find(element => element.uuid === book.uuid)

        if(bookToReturn) {

            bookToReturn.increaseQuantity()

        } else {

            this.availableBooks.push(book);

        }
    }
}

