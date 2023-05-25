import Validator from "./validator.mjs"

const weekInMiliseconds = 7 * 24 * 60 * 60 * 1000
const dayInMiliseconds = 1000 * 3600 * 24


export default class Booking {
    constructor(user) {
        Validator.throwErrorIfNotInstanceOfUser(user)
        this.status = "Checked out"
        this.user = user
        this.bookingDate = new Date()
        this.returnDate = new Date(this.bookingDate.getTime() + weekInMiliseconds)
        this.bookList = []
        this.fine = 0
    }

    addToBooklist(book) {
        Validator.throwErrorIfNotInstanceOfBook(book)

        const foundItem = this.bookList.find(element => element.uuid === book.uuid)

        foundItem ? foundItem.increaseQuantity() : this.bookList.push(book);

    }

    removeFromBooklist(book) {
        Validator.throwErrorIfNotInstanceOfBook(book)

        const index = this.bookList.findIndex(element => element.uuid === book.uuid)

        if(index === -1) throw new Error('this doesnt match any book on the list')

        const bookToRemove = this.cartList[index]

        if(bookToRemove.quantity > 1) {

            bookToRemove.decreaseQuantity()

        } else {

            this.bookList = this.bookList.filter((_, bookIndex) => bookIndex !== index)
        }
    }

    returnBook(date) { //return
        Validator.validateDate(date)
        const timeDifference = date.getTime() - this.returnDate.getTime();
        const daysDifference = Math.ceil(timeDifference / dayInMiliseconds);
        this.status = "Checked in"

        this.fine = daysDifference > 0 ? daysDifference : 0

        return `the fine is ${this.fine}$ `
    }
}

