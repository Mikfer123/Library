import {v4 as uuidv4} from 'uuid';
import Validator from './validator.mjs';


export default class User {
    constructor(name, surname) {
        [name, surname].forEach(element => Validator.throwErrorIfNotAString(element))
        this.name = name
        this.surname = surname
        this.uuid = uuidv4()
    }
}