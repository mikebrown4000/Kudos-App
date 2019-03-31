import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Categories = (props) => {
  return(
    <div className="categoriesContainer">
        <div className="cat-header">Which categories do you want to track?</div>
        <div className="cat-form">
        <div className="selectionContainer">
          <div
          className="cat-block"
          style={{ backgroundImage: props.restaurants_bool === false ? 'url(/media/restounclicked.png)' : 'url(/media/restoclicked.png)' }}
          onClick={() => {
            props.restaurantToggle();
            props.addCount();
          }}></div>
          <div
          style={{ backgroundImage: props.groceries_bool === false ? 'url(/media/grocunclicked.png)' : 'url(/media/grocclicked.png)' }}
          className="cat-block"
          onClick={() => {
            props.groceryToggle();
            props.addGroceries();}}></div>
          <div
          style={{ backgroundImage: props.drinks_bool === false ? 'url(/media/drinksunclicked.png)' : 'url(/media/drinksclicked.png)' }}
          className="cat-block"
          onClick={() => {
            props.drinksToggle();
            props.addDrinks();}}></div>
          <div
          style={{ backgroundImage: props.entertainment_bool === false ? 'url(/media/entunclicked.png)' : 'url(/media/entclicked.png)' }}
          className="cat-block"
          onClick={() => {
            props.entertainmentToggle();
            props.addEnt();}}></div>
          <div
          style={{ backgroundImage: props.shopping_bool === false ? 'url(/media/shopunclicked.png)' : 'url(/media/shopclicked.png)' }}
          className="cat-block"
          onClick={() => {
            props.shoppingToggle();
            props.addShop();}}></div>
          <div
          style={{ backgroundImage: props.bills_bool === false ? 'url(/media/recunclicked.png)' : 'url(/media/recclicked.png)' }}
          className="cat-block"
          onClick={() => {
            props.billsToggle();
            props.addBills();}}></div>

          </div>
          <button
          style={{ backgroundColor: props.shopping_bool === true || props.restaurants_bool === true || props.groceries_bool === true || props.drinks_bool === true || props.bills_bool === true || props.entertainment_bool === true ? '#5cdb95' : '#a6a6a6' }}
          className="cat-button"
          onClick={(e) => {
            e.preventDefault()
            props.updateBool();
          }}>NEXT</button>
        </div>
    </div>
  )
}

export default withRouter(Categories);
