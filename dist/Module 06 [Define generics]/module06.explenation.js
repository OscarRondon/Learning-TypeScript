"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processIdentity(value, message) {
    console.log(message);
    return value;
}
const returnNumber = {
    value: 25,
    message: 'Hello!'
};
const returnString = {
    value: 'Hello!',
    message: 25
};
const processor = processIdentity;
const returnNumber1 = processor(100, 'Hello!'); // OK
class processIdentityForClass {
    value;
    message;
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
const processorForClass = new processIdentityForClass(100, 'Hello');
processorForClass.process(); // Displays 'Hello'
// processorForClass.value = '100';       // Type check error
