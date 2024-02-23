import { LibraryBookModel } from "../interfaces/libraryBookInterface";
import Book from "./book";


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
