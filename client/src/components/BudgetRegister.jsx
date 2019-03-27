//Second step of registering. user gives weekly budget
// calls the PUT to update budget
// can also be used when clicking settings to re-PUT(?) Budget
import React from 'react';


const BudgetRegister = (props) => {

  return (
    <div>
      <h2>What is your weekly budget?</h2>
      <form onSubmit={props.updateBudget}>
        <input
        name="weekly_budget"
        type="text"
        onChange={props.handleChange} />
        <button>Next</button>
      </form>
    </div>
  );
}

export default BudgetRegister;
