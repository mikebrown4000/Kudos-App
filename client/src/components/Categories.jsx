import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Categories = (props) => {
  return(
    <div className="categoriesContainer">
        <h1>Pick Your Categories</h1>
        <div className="selectionContainer">
          <div
          className="cat-block"
          onClick={() => {
            props.restaurantToggle();
            props.addCount();}}>Restaurants</div>
          <div
          className="cat-block"
          onClick={() => {
            props.groceryToggle();
            props.addGroceries();}}>Groceries</div>
          <div className="cat-block"
          onClick={() => {
            props.drinksToggle();
            props.addDrinks();}}>Drinks</div>
          <div className="cat-block"
          onClick={() => {
            props.entertainmentToggle();
            props.addEnt();}}>Entertainment</div>
          <div className="cat-block"
          onClick={() => {
            props.shoppingToggle();
            props.addShop();}}>Shopping</div>
          <div className="cat-block"
          onClick={() => {
            props.billsToggle();
            props.addBills();}}>Recurring Bills</div>
          <div className="cat-block"
          onClick={() => {
            props.otherToggle();
            props.addMisc();}}>Other</div>
          <button className="budget-button"
          onClick={(e) => {
            e.preventDefault()
            props.updateBool();
            }}>Next</button>
        </div>
    </div>
  )
}

export default withRouter(Categories);
