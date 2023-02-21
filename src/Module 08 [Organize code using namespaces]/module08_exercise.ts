/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-namespace */
namespace Greetings {
  export function returnGreeting (greeting: string) {
    console.log(`The message from namespace Greetings is ${greeting}.`)
  }
}

function getLength (message: string): number {
  return message.length
}

namespace GreetingsWithLength {
  export function returnGreeting (greeting: string) {
    const greetingLength = getLength(greeting)
    console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`)
  }
  
}

// returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour') // OK
GreetingsWithLength.returnGreeting('Hola') // OK
