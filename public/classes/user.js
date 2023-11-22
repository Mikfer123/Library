"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.uuid = (0, uuid_1.v4)();
    }
}
exports.default = User;
