 import React, {Component} from 'react'
 import { Link } from 'react-router-dom'
 import { putBudget } from '../services/apihelpers'

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
       user: {},
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
     const { name, value } = e.target;
     this.setState({
       [name]:parseInt(value)
     })
   }

   async handleSubmit(e) {
     e.preventDefault()
     const { restaurants, groceries, drinks, entertainment, shopping, bills } = this.props.user
     const data = {
       restaurants: this.state.restaurants + restaurants,
       groceries: this.state.groceries + groceries,
       drinks: this.state.drinks + drinks,
       entertainment: this.state.entertainment + entertainment,
       shopping: this.state.shopping + shopping,
       bills: this.state.bills + bills,
     }
     const resp = await putBudget(data, this.props.user.id)
     await this.props.updateCurrentUser(resp.user)
     this.props.history.push('/budgethome')
   }

   componentDidMount() {
     this.setState({
       user: this.props.user
     })
   }

   render() {
     const { restaurants_bool, groceries_bool, drinks_bool, entertainment_bool, shopping_bool, bills_bool, miscellanious_bool } = this.state.user
     return(
         <form onSubmit={this.handleSubmit}>
           {restaurants_bool &&
           (<>
             <label forHtml="restaurants">RESTAURANTS</label> <br />
             <img src="" alt="restaurant-logo" />
             <input type="number" name="restaurants" id="restaurants" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {groceries_bool &&
           (<>
             <label forHtml="groceries">GROCERIES</label> <br />
             <img src="" alt="groceries-logo" />
             <input type="number" name="groceries" id="groceries" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {drinks_bool &&
           (<>
             <label forHtml="drinks">DRINKS</label> <br />
             <img src="" alt="drink-logo" />
             <input type="number" name="drinks" id="drinks" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {entertainment_bool &&
           (<>
             <label forHtml="entertainment">ENTERTAINMENT</label> <br />
             <img src="" alt="entertainment-logo" />
             <input type="number" name="entertainment" id="entertainment" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
         </>)}

           {shopping_bool &&
           (<>
             <label forHtml="shopping">SHOPPING</label> <br />
             <img src="" alt="shopping-logo" />
             <input type="number" name="shopping" id="shopping" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}

           {bills_bool &&
           (<>
             <label forHtml="bills">BILLS</label> <br />
             <img src="" alt="bill-logo" />
             <input type="number" name="bills" id="bills" placeholder="Type your spending here" onChange={this.handleChange} />
             <br />
           </>)}
           <input type="submit" value="Done"/>
          </form>
     )
   }
 }

 export default LogExpense
