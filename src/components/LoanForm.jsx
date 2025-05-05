import InputField from './InputField';

const LoanForm = ({ loanAmount, interestRate, loanTerm, onInputChange, errors }) => (
 <> 
 <div className="row mb-4 m-2">
    <div className="col-md-4">
      <InputField
        label="Loan Amount ($)"
        type="number"
        value={loanAmount}
        onChange={(e) => onInputChange('loanAmount', Number(e.target.value))}
        min="0"
        step="1000"
        error={errors.loanAmount}
      />
    </div>
    <div className="col-md-4">
      <InputField
        label="Interest Rate (%)"
        type="number"
        value={interestRate}
        onChange={(e) => onInputChange('interestRate', Number(e.target.value))}
        min="0"
        step="0.1"
        error={errors.interestRate}
      />
    </div>
    <div className="col-md-4">
      <InputField
        label="Loan Term (Years)"
        type="number"
        value={loanTerm}
        onChange={(e) => onInputChange('loanTerm', Number(e.target.value))}
        min="0"
        step="1"
        error={errors.loanTerm}
      />
    </div>
  </div>
  </>
);

export default LoanForm;
