interface Identity<T, U> {
  value: T
  message: U
}

type ProcessIdentity<T, U> = (value: T, message: U) => T

function processIdentity<T, U> (value: T, message: U): T {
  console.log(message)
  return value
}

const returnNumber: Identity<number, string> = {
  value: 25,
  message: 'Hello!'
}
const returnString: Identity<string, number> = {
  value: 'Hello!',
  message: 25
}

const processor: ProcessIdentity<number, string> = processIdentity
const returnNumber1 = processor(100, 'Hello!') // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

interface ProcessIdentityForClass<T, U> {
  value: T
  message: U
  process: () => T
}

class processIdentityForClass<X, Y> implements ProcessIdentityForClass<X, Y> {
  value: X
  message: Y
  constructor (val: X, msg: Y) {
    this.value = val
    this.message = msg
  }

  process (): X {
    console.log(this.message)
    return this.value
  }
}

const processorForClass = new processIdentityForClass<number, string>(100, 'Hello')
processorForClass.process() // Displays 'Hello'
// processorForClass.value = '100';       // Type check error
