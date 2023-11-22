"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Book {
    constructor(title, author, img, description) {
        this.title = title;
        this.author = author;
        this.img = img;
        this.description = description;
        this.uuid = (0, uuid_1.v4)();
    }
}
exports.default = Book;
