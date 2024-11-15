import React from "react";

const MortgageResults = ({ mortgageDetails }) => {
  
  return (
    <div className="mortgageResultsContainer">
      <span className="text-primary heading-listing">Results</span>
      <div className="mortgageResult">
        <span className="mortgageResult--heading">Loan amount</span>
        <span className="mortgageResult--text">
          {mortgageDetails.loan_amount}
        </span>
      </div>
      <div className="mortgageResult">
        <span className="mortgageResult--heading">Term</span>
        <span className="mortgageResult--text">
          {mortgageDetails.term} years
        </span>
      </div>
      <div className="mortgageResult">
        <span className="mortgageResult--heading">Monthly payment</span>
        <span className="mortgageResult--text">
          {mortgageDetails.monthly_payment}
        </span>
      </div>
      <div className="mortgageResult">
        <span className="mortgageResult--heading">Total payment</span>
        <span className="mortgageResult--text">
          {mortgageDetails.total_payment}
        </span>
      </div>
      <div className="mortgageResult">
        <span className="mortgageResult--heading">Monthly payment details</span>
        {mortgageDetails.monthly_payment_details.map((detail, i) => {
          return (
            <div className="monthly_payment-details" key={i}>
              <span className="mortgageResult--text mortgageResult--text-bold">
                {detail.type.replace(/_/g, ' ')}
              </span>
              <span className="mortgageResult--text">{detail.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MortgageResults;
