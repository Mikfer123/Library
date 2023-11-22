"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_js_1 = __importDefault(require("./book.js"));
class LibraryBook extends book_js_1.default {
    constructor(title, author, img, description) {
        super(title, author, img, description);
        this.quantity = 1;
    }
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        if (this.quantity > 1)
            this.quantity--;
    }
}
exports.default = LibraryBook;
