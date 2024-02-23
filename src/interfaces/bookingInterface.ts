import { LibraryBookModel } from "./libraryBookInterface"
import { UserModel } from "./userInterface"

export interface BookingModel{
    status: string
    user: UserModel
    bookingDate: Date
    returnDate: Date
    bookList: LibraryBookModel[]
    fine: number

    addToBooklist(book: LibraryBookModel): void
    removeFromBooklist(book: LibraryBookModel): void | never
    returnBook(date: Date): string
 }
