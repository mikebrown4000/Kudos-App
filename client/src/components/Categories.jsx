import React from 'react';
import { Link } from 'react-router-dom';

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
            props.addCount();}}>Groceries</div>
          <div className="cat-block"
          onClick={() => {
            props.drinksToggle();
            props.addCount();}}>Drinks</div>
          <div className="cat-block"
          onClick={() => {
            props.entertainmentToggle();
            props.addCount();}}>Entertainment</div>
          <div className="cat-block"
          onClick={() => {
            props.shoppingToggle();
            props.addCount();}}>Shopping</div>
          <div className="cat-block"
          onClick={() => {
            props.billsToggle();
            props.addCount();}}>Recurring Bills</div>
          <div className="cat-block"
          onClick={() => {
            props.otherToggle();
            props.addCount();}}>Other</div>
        </div>
    </div>
  )
}

export default Categories;
