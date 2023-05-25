import Book from "./book.mjs"
import Booking from "./booking.mjs"
import User from "./user.mjs"
export default class Validator {
    static throwErrorIfNotInstanceOfUser(object) { 
        if(!object instanceof User) throw new Error ("input has to be an instance of User class")
    }

    static throwErrorIfNotInstanceOfBook(object) { 
        if(!object instanceof Book) throw new Error ("input has to be an instance of Book class")
    }

    static throwErrorIfNotInstanceOfBooking(object) { 
        if(!object instanceof Booking) throw new Error ("input has to be an instance of Booking class")
    }

    static throwErrorIfNotAString (input) { 
        if(typeof input !== 'string') throw new Error("Given input must be a string")
    }

    static throwErrorIfNotANumber (input) {
        if(typeof input !== "number" || isNaN(input)) throw new Error("Given input must be a number")
    }

    static validateDate(input) {
        if (Object.prototype.toString.call(input) !== "[object Date]") throw new Error("Given input must be a date")
    }

    static validateUuid(input) {
        const uuidPattern = /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/
        if(!uuidPattern.test(input)) throw new Error('Given input has to be a uuid')
    }
}
