import {v4 as uuidv4} from 'uuid';
import { BookModel } from '../interfaces/bookInterface';

export default class Book implements BookModel {
    title: string
    author: string
    img: string
    description: string
    uuid: string = uuidv4()

    constructor(title: string, author: string, img: string, description: string) {
        this.title = title
        this.author = author
        this.img = img
        this.description = description
    }


}