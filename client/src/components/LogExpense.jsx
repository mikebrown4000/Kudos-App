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
       <div>
         <header>
           <Link to="/home"> < </Link>
           <span>Update your Budget</span>
         </header>
         <form onSubmit={this.handleSubmit}>
           restaurants_bool &&
           (<label forHtml="restaurants">RESTAURANTS</label> <br />
           <img src="" alt="restaurant-logo" />
           <input name="restaurants" id="restaurants" placeholder="Type your spending here" onChange={this.handleChange} />)

           groceries_bool &&
           (<label forHtml="groceries">GROCERIES</label> <br />
           <img src="" alt="groceries-logo" />
           <input name="groceries" id="groceries" placeholder="Type your spending here" onChange={this.handleChange} />)

           drinks_bool &&
           (<label forHtml="drinks">DRINKS</label> <br />
           <img src="" alt="drink-logo" />
           <input name="drinks" id="drinks" placeholder="Type your spending here" onChange={this.handleChange} />)

           entertainment_bool &&
           (<label forHtml="entertainment">ENTERTAINMENT</label> <br />
           <img src="" alt="entertainment-logo" />
           <input name="entertainment" id="entertainment" placeholder="Type your spending here" onChange={this.handleChange} />)

           shopping_bool &&
           (<label forHtml="shopping">SHOPPING</label> <br />
           <img src="" alt="shopping-logo" />
           <input name="shopping" id="shopping" placeholder="Type your spending here" onChange={this.handleChange} />)

           bills_bool &&
           (<label forHtml="bills">BILLS</label> <br />
           <img src="" alt="bill-logo" />
           <input name="bills" id="bills" placeholder="Type your spending here" onChange={this.handleChange} />)

           miscellanious_bool &&
           (<label forHtml="miscellanious">MISCELLANIOUS</label> <br />
           <img src="" alt="miscellanious-logo" />
           <input name="miscellanious" id="miscellanious" placeholder="Type your spending here" onChange={this.handleChange} />)
        </form>
       </div>
     )
   }
 }

 export default LogExpense
