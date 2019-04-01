// from clicking + button on main page, user inputs expenses
 import React from 'react'
 import { Link } from 'react-router-dom'
// link or div/button with onclick history push?

 class LogExpense extends Component {
   constructor(){
     super()

     this.state = {
       user: {},
       restaurants: 0,
       drinks: 0,
       entertainment: 0,
       shopping: 0,
       bills: 0,
       miscellanious: 0,
     }
   }

   handleChange(e) {
     const { name, value } = e.target;
     this.setState({
       [name]:value
     })
   }

   handleSubmit(e) {
     // add user input from state to vals in state user object (or props when linked to app.js)
     //post new values to user
   }

   componentDidMount() {
     //call user get . should eventually happen from main page and save to state. pass down user obj as prop
   }

   render() {
     const { restaurants_bool, groceries_bool, drinks_bool, entertainment_bool, shopping_bool, bills_bool, miscellanious_bool } = this.state.user
     return(
       <div className="categoriesContainer">
        <div className="log-header">Update your Budget</div>
         <form
         className="log-form"
         onSubmit={this.handleSubmit}>
           {restaurants_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/restaurants.png)"}} alt="restaurant-logo" />
             <div className="log-input">
             <label
             className="log-label"
             forHtml="restaurants">RESTAURANTS</label>
             <input
             className="log-field"
             type="number" name="restaurants" id="restaurants" placeholder="Type your spending here" onChange={this.handleChange} />

             </div>
           </div>)}

           {groceries_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/groceries.png)"}} alt="groceries-logo" />
             <div className="log-input">
             <label
             className="log-label"
             forHtml="groceries">GROCERIES</label>
             <input
             className="log-field"
             type="number" name="groceries" id="groceries" placeholder="Type your spending here" onChange={this.handleChange} />

             </div>
           </div>)}

           {drinks_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/drinks.png)"}} alt="drink-logo" />
             <div className="log-input">
             <label
             className="log-label"
             forHtml="drinks">DRINKS</label>
             <input
             className="log-field"
             type="number" name="drinks" id="drinks" placeholder="Type your spending here" onChange={this.handleChange} />

             </div>
           </div>)}

           {entertainment_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/entertainment.png)"}} alt="entertainment-logo" />
             <div className="log-input">
             <label
             className="log-label"
             forHtml="entertainment">ENTERTAINMENT</label>

             <input
             className="log-field"
             type="number" name="entertainment" id="entertainment" placeholder="Type your spending here" onChange={this.handleChange} />

             </div>
         </div>)}

           {shopping_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/shopping.png)"}} alt="shopping-logo" />
             <div className="log-input">
             <label
             className="log-label"
             forHtml="shopping">SHOPPING</label>

             <input
             className="log-field"
             type="number" name="shopping" id="shopping" placeholder="Type your spending here" onChange={this.handleChange} />

             </div>
           </div>)}

           {bills_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/bills.png)"}} alt="bill-logo" />
             <div className="log-input">
             <label className="log-label" forHtml="bills">BILLS</label>
             <input
             className="log-field"
             type="number" name="bills" id="bills" placeholder="Type your spending here" onChange={this.handleChange} />
             </div>

           </div>)}

           <input type="submit" value="Done"
           className="log-button"
           />
          </form>
        </div>
     )
   }
 }

 export default LogExpense
