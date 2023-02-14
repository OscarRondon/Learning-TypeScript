"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        const greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
// returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour'); // OK
GreetingsWithLength.returnGreeting('Hola'); // OK
