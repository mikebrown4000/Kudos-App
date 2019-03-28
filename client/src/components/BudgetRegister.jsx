//Second step of registering. user gives weekly budget
// calls the PUT to update budget
// can also be used when clicking settings to re-PUT(?) Budget
import React from 'react';


const BudgetRegister = (props) => {

  return (
    <div className="budget-page">
      <div className="budget-title">What's your weekly budget?</div>
      <form
      className="budget-form"
      onSubmit={props.updateBudget}>
        <input
        autoComplete="off"
        className="budget-input"
        name="weekly_budget"
        type="text"
        placeholder="$"
        onChange={props.handleChange} />
        <button className="budget-button">Next</button>
      </form>
    </div>
  );
}

export default BudgetRegister;
