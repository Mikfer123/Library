import Booking from "./booking.mjs";
import Validator from "./validator.mjs";
export default class Library {
    constructor() {
        this.bookList = []
        this.availableBooks = []
        this.bookingList = []
        this.userList = []
    }

    // addToBooklist(book) {
    //     Validator.throwErrorIfNotInstanceOfBook(book)

        
    // }

    // // book quantity ++ && --
    // //if book quantity > 1 book quantity -- else remove

    // removeFromBooklist(book) {
    //     Validator.throwErrorIfNotInstanceOfBook(book)

    //     const index = this.bookList.findIndex(element => element.uuid === book.uuid) 

    //     if(index === -1) throw new Error('this doesnt match any book on the list')
    //     this.bookList = this.bookList.filter((_, bookIndex) => bookIndex !== index)
    // }


    addToBooklist(book) {
        Validator.throwErrorIfNotInstanceOfBook(book)

        const foundItem = this.bookList.find(element => element.uuid === book.uuid)

        if(foundItem) {

            foundItem.increaseQuantity()

        } else {

            this.bookList.push(book)
            this.availableBooks.push(book);

        }

    }

    removeFromBooklist(book) {
        Validator.throwErrorIfNotInstanceOfBook(book)

        const index = this.bookList.findIndex(element => element.uuid === book.uuid)
        const index2 = this.availableBooks.findIndex(element => element.uuid === book.uuid)
        
        if(index === -1) throw new Error('this doesnt match any book on the list')
        if(index2 === -1) throw new Error('this doesnt match any book on the list')
        
        const bookToRemove = this.bookList[index]
        const bookToRemove2 = this.bookList[index]

        if(bookToRemove.quantity > 1) {

            bookToRemove.decreaseQuantity()
            bookToRemove2.decreaseQuantity()

        } else {

            this.bookList = this.bookList.filter((_, bookIndex) => bookIndex !== index)
            this.availableBooks = this.availableBooks.filter((_, bookIndex) => bookIndex !== index2)
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

        const userIndex = this.userList.findIndex(item => item.uuid === user.uuid);
        const bookIndex = this.availableBooks.findIndex(item => item.uuid === book.uuid);

        if (userIndex === -1) throw new Error('User does not exist');
        if (bookIndex === -1) throw new Error('Book is not available');

        const booking = new Booking(user);
        booking.addToBooklist(book);
        this.bookingList.push(booking);

        const bookToRemove = this.availableBooks[bookIndex]

        if(bookToRemove.quantity > 1) {

            bookToRemove.decreaseQuantity()

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
        booking.bookRetrun(returnDate);

        const bookTOreturn = this.availableBooks.find(element => element.uuid === book.uuid)

        if(bookTOreturn) {

            bookTOreturn.increaseQuantity()

        } else {

            this.availableBooks.push(book);

        }
    }
}