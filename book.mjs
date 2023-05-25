import {v4 as uuidv4} from 'uuid';
import Validator from './validator.mjs';

export default class Book {
    constructor(title, author, img, description) {
        [title, author, img, description].forEach(element => Validator.throwErrorIfNotAString(element))
        this.title = title
        this.author = author
        this.img = img
        this.description = description
        this.uuid = uuidv4()
        this.quantity = 1
    }

    changeQuantity(quantity) {
        Validator.throwErrorIfNotANumber(quantity)
        this.quantity = quantity
    }

    increaseQuantity() {
        this.quantity++
    }

    decreaseQuantity() {
        this.quantity--
    }

    changeUuid(uuid) {
        Validator.validateUuid(uuid)
        this.uuid = uuid
    }


}