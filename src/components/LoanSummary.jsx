const LoanSummary = ({ results }) => {
  if (!results) return null;
  return (
    <>
      <div className="mb-4 m-3">
        <h2 className="h5 fw-semibold mb-3">Loan Summary</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="p-3 bg-primary-subtle rounded text-dark">
              <p className="mb-1">Monthly Payment</p>
              <p className="h6 fw-bold">${results.monthlyPayment.toFixed(2)}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-primary-subtle rounded text-dark">
              <p className="mb-1">Total Interest</p>
              <p className="h6 fw-bold">${results.totalInterest.toFixed(2)}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-primary-subtle rounded text-dark">
              <p className="mb-1">Total Cost</p>
              <p className="h6 fw-bold">${results.totalCost.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanSummary;
