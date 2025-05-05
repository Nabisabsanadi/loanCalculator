import React, { useState } from "react";
import './style.css'
const AmortizationTable = ({ schedule }) => {
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value); // Set the selected currency
  };

  if (!schedule.length) return null;

  // Fallback if currency is not passed
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div className="mb-4 table-responsive m-4">
        <div className="mb-3">
          <label className="form-label">Select Currency</label>
          <div className="row">
            <div className="col-2">
            <select
            className="form-select bg-primary text-light currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="INR">INR (₹)</option>
            <option value="JPY">JPY (¥)</option>
          </select>
            </div>
          </div>
        </div>

        <h2 className="h5 fw-semibold mb-3">Amortization Schedule</h2>
        <table className="table table-bordered table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th>Month</th>
              <th>Payment</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.month}>
                <td>{row.month}</td>
                <td>{formatter.format(row.payment)}</td>
                <td>{formatter.format(row.principal)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AmortizationTable;
