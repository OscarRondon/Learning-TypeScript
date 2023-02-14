namespace Loans {
  export interface Loan {
    principle: number
    interestRate: number //* Interest rate percentage (eg. 14 is 14%)
  }
  export interface ConventionalLoan extends Loan {
    numberOfMonths: number //* Total number of months
  }
}

namespace LoanPrograms {
  /*  TODO Update the calculateInterestOnlyLoanPayment function. */
  export function calculateInterestOnlyLoanPayment (loanTerms: Loans.Loan): string {
    let payment: number
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate)
    return 'The interest only loan payment is ' + payment.toFixed(2)
  }
  /*  TODO Update the calculateConventionalLoanPayment function. */
  export function calculateConventionalLoanPayment (loanTerms: Loans.ConventionalLoan): string {
    const interest: number = calculateInterestRate(loanTerms.interestRate)
    let payment: number
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.numberOfMonths)))
    return 'The conventional loan payment is ' + payment.toFixed(2)
  }
  function calculateInterestRate (interestRate: number): number {
    const interest: number = interestRate / 1200
    return interest
  }
}

const interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 })
const conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, numberOfMonths: 180 })
