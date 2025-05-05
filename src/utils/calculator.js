const utils = {
    calculatePayment(principal, annualRate, years) {
      const monthlyRate = annualRate / 100 / 12;
      const months = years * 12;
      if (monthlyRate === 0) return principal / months;
      return (
        principal *
        (monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      );
    },
    generateAmortization(principal, annualRate, years) {
      const monthlyRate = annualRate / 100 / 12;
      const months = years * 12;
      const monthlyPayment = this.calculatePayment(principal, annualRate, years);
      let balance = principal;
      const schedule = [];
  
      for (let i = 0; i < months; i++) {
        const interest = balance * monthlyRate;
        const principalPaid = monthlyPayment - interest;
        balance -= principalPaid;
        schedule.push({
          month: i + 1,
          payment: monthlyPayment,
          principal: principalPaid,
          interest,
          balance: Math.max(0, balance),
        });
      }
      return schedule;
    },
    validateInputs(loanAmount, interestRate, loanTerm) {
      const errors = {};
      if (!loanAmount || loanAmount <= 0) errors.loanAmount = 'Enter a valid loan amount';
      if (interestRate < 0) errors.interestRate = 'Interest cannot be negative';
      if (!loanTerm || loanTerm <= 0) errors.loanTerm = 'Loan term must be positive';
      return errors;
    },
  };
  
  export default utils;
  