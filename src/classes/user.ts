import {v4 as uuidv4} from 'uuid';
import { UserModel } from '../interfaces/userInterface';


export default class User implements UserModel {
    name: string
    surname: string
    uuid: string = uuidv4()

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }
}