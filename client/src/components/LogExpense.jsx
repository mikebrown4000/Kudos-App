// from clicking + button on main page, user inputs expenses
 import React, {Component} from 'react'
 import { Link } from 'react-router-dom'
 import { putBudget } from '../services/apihelpers'
// link or div/button with onclick history push?

 class LogExpense extends Component {
   constructor(props){
     super(props)

     this.state = {
       restaurants: 0,
       groceries: 0,
       drinks: 0,
       entertainment: 0,
       shopping: 0,
       bills: 0,
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
     const { name, value } = e.target;
     this.setState({
       [name]:value
     })
   }

   async handleSubmit(e) {
     e.preventDefault()
     const { restaurants, groceries, drinks, entertainment, shopping, bills } = this.props.user
     this.setState(prevState => ({
       restaurants: prevState.restaurants + restaurants,
       groceries: prevState.groceries + groceries,
       drinks: prevState.drinks + drinks,
       entertainment: prevState.entertainment + entertainment,
       shopping: prevState.shopping + shopping,
       bills: prevState.bills + bills,
     }))
     await putBudget(this.state, this.props.user.id)
     this.props.history.push('/budgethome')
   }

   render() {
     const { restaurants_bool, groceries_bool, drinks_bool, entertainment_bool, shopping_bool, bills_bool, miscellanious_bool } = this.props.user
     return(
         <form onSubmit={this.handleSubmit}>
           {restaurants_bool &&
           (<>
             <label forHtml="restaurants">RESTAURANTS</label> <br />
             <img src="" alt="restaurant-logo" />
             <input name="restaurants" id="restaurants" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {groceries_bool &&
           (<>
             <label forHtml="groceries">GROCERIES</label> <br />
             <img src="" alt="groceries-logo" />
             <input name="groceries" id="groceries" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {drinks_bool &&
           (<>
             <label forHtml="drinks">DRINKS</label> <br />
             <img src="" alt="drink-logo" />
             <input name="drinks" id="drinks" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {entertainment_bool &&
           (<>
             <label forHtml="entertainment">ENTERTAINMENT</label> <br />
             <img src="" alt="entertainment-logo" />
             <input name="entertainment" id="entertainment" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
         </>)}

           {shopping_bool &&
           (<>
             <label forHtml="shopping">SHOPPING</label> <br />
             <img src="" alt="shopping-logo" />
             <input name="shopping" id="shopping" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {bills_bool &&
           (<>
             <label forHtml="bills">BILLS</label> <br />
             <img src="" alt="bill-logo" />
             <input name="bills" id="bills" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
             <input type="submit" value="Done"/>
           </>)}

          </form>
     )
   }
 }

 export default LogExpense
