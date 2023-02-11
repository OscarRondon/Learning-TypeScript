/* Module 4: Develop typed functions using TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */

/*  TODO: Convert the sortDescending and sortAscending functions to arrow
    functions. */

/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */

const sortDescending = (a: number, b: number): number => {
  if (a > b) {
    return -1
  } else if (b > a) {
    return 1
  } else {
    return 0
  }
}

/*  sortDescending is a comparison function that tells the sort method how to sort
            numbers in ascending order. */
const sortAscending = (a: number, b: number): number => {
  if (a > b) {
    return 1
  } else if (b > a) {
    return -1
  } else {
    return 0
  }
}

/*  The buildArray function builds an array of unique random numbers containing the number
            of items based on the number passed to it. The sortOrder parameter determines
            whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray (items: number, sortOrder: string): number[] {
  const randomNumbers: number[] = []
  let nextNumber: number
  for (let counter: number = 0; counter < items; counter++) {
    nextNumber = Math.ceil(Math.random() * (100 - 1))
    if (!randomNumbers.includes(nextNumber)) {
      randomNumbers.push(nextNumber)
    } else {
      counter--
    }
  }
  if (sortOrder === 'ascending') {
    return randomNumbers.sort(sortAscending)
  } else {
    return randomNumbers.sort(sortDescending)
  }
}

const myArray1 = buildArray(12, 'ascending')
const myArray2 = buildArray(8, 'descending')

/*  EXERCISE 2
            TODO: Update the LoanCalculator function. */

function loanCalculator (principle: number, interestRate: number, months: number): string {
  const interest = interestRate / 1200 // Calculates the monthly interest rate
  let payment
  payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)))
  return payment.toFixed(2)
}
