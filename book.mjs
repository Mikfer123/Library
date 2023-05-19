import {v4 as uuidv4} from 'uuid';
import Validator from './validator.mjs';

export default class Book {
    constructor(title, author, img, preview) {
        [title, author, img, preview].forEach(element => Validator.throwErrorIfNotAString(element))
        this.title = title
        this.author = author
        this.img = img
        this.preview = preview
        this.uuid = uuidv4()
        this.quantity = 1
    }

    increaseQuantity() {
        this.quantity++
    }

    decreaseQuantity() {
        // if(this.quantity > 1) 
        this.quantity--
    }
}