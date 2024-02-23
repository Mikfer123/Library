import { BookModel } from "./bookInterface";

export interface LibraryBookModel extends BookModel {
    quantity: number

    increaseQuantity(): void
    decreaseQuantity(): void

}