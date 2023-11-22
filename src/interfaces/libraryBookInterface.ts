import { BookModel } from "./bookInterfac";

export interface LibraryBookModel extends BookModel {
    quantity: number

    increaseQuantity(): void
    decreaseQuantity(): void

}