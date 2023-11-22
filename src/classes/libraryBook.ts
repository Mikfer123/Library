import { LibraryBookModel } from "../interfaces/libraryBookInterface.js";
import Book from "./book.js";


export default class LibraryBook extends Book implements LibraryBookModel {
    quantity: number = 1

    constructor(title: string, author: string, img: string, description: string) {
        super(title, author, img, description)
    }

    increaseQuantity() {
        this.quantity++
    }

    decreaseQuantity() {
        if(this.quantity > 1) this.quantity--
    }
}
