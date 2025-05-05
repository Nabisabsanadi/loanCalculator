import React, { useState } from 'react';
import LoanForm from '../components/LoanForm';
import LoanSummary from '../components/LoanSummary';
import AmortizationTable from '../components/AmortizationTable';
import CalculateButton from '../components/CalculateButton';
import utils from '../utils/calculator';

const Home = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const handleInputChange = (field, value) => {
    if (field === 'loanAmount') setLoanAmount(value);
    if (field === 'interestRate') setInterestRate(value);
    if (field === 'loanTerm') setLoanTerm(value);
  };

  const handleCalculate = () => {
    const validationErrors = utils.validateInputs(loanAmount, interestRate, loanTerm);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setResults(null);
      setSchedule([]);
      return;
    }
    const monthlyPayment = utils.calculatePayment(loanAmount, interestRate, loanTerm);
    const totalPayments = monthlyPayment * loanTerm * 12;
    const totalInterest = totalPayments - loanAmount;
    const scheduleData = utils.generateAmortization(loanAmount, interestRate, loanTerm);
    setResults({ monthlyPayment, totalInterest, totalCost: totalPayments });
    setSchedule(scheduleData);
  };

  return (
    <>
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow max-w-5xl mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6 pt-4">Loan Calculator Dashboard</h1>
      <LoanForm
        loanAmount={loanAmount}
        interestRate={interestRate}
        loanTerm={loanTerm}
        onInputChange={handleInputChange}
        errors={errors}
      />
      <CalculateButton onClick={handleCalculate} />
      <LoanSummary results={results} />
      <AmortizationTable schedule={schedule} />
    </div>
    </>
  );
};

export default Home;
