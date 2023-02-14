import { returnGreeting } from "./greetings_module";
import * as allGreetingFunctions from './greetings_module.js';  // imports all exported components in the module
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module";
import dotenv from 'dotenv'

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'

const result = dotenv.config();

if (result.error) {
    throw result.error;
}

console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }