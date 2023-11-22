import { BookModel } from "../interfaces/bookInterfac"
import { BookingModel } from "../interfaces/bookingInterface"
import {LibraryBookModel } from "../interfaces/libraryBookInterface"
import { UserModel } from "../interfaces/userInterface"

const weekInMiliseconds = 7 * 24 * 60 * 60 * 1000
const dayInMiliseconds = 1000 * 3600 * 24


export default class Booking implements BookingModel {
    status: string = "Checked out"
    user: UserModel
    bookingDate: Date = new Date()
    returnDate: Date = new Date(this.bookingDate.getTime() + weekInMiliseconds)
    bookList: LibraryBookModel[] = []
    fine: number = 0

    constructor(user : UserModel) {
        this.user = user
    }

    addToBooklist(book: LibraryBookModel) {
        const foundItem = this.bookList.find(element => element.uuid === book.uuid)

        foundItem ? foundItem.increaseQuantity() : this.bookList.push(book);

    }

    removeFromBooklist(book: LibraryBookModel) {
        const index = this.bookList.findIndex(element => element.uuid === book.uuid)

        if(index === -1) throw new Error('this doesnt match any book on the list')

        const bookToRemove = this.bookList[index]

        if(bookToRemove.quantity > 1) {

            bookToRemove.decreaseQuantity()

        } else {

            this.bookList = this.bookList.filter((_, bookIndex) => bookIndex !== index)
        }
    }

    returnBook(date: Date) {
        const timeDifference = date.getTime() - this.returnDate.getTime();
        const daysDifference = Math.ceil(timeDifference / dayInMiliseconds);
        this.status = "Checked in"

        this.fine = daysDifference > 0 ? daysDifference : 0

        return `the fine is ${this.fine}$ `
    }
}

