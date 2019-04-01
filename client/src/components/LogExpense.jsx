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
       <div className="categoriesContainer">
        <div className="log-header">Update your Budget</div>
         <form
         className="log-form"
         onSubmit={this.handleSubmit}>
           {restaurants_bool &&
           (<div className="log-block">
             <div
             className="log-img"
              style={{backgroundImage: "url(/media/iconrest.png)"}} alt="restaurant-logo" />
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
              style={{backgroundImage: "url(/media/icongroc.png)"}} alt="groceries-logo" />
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
              style={{backgroundImage: "url(/media/icondrinks.png)"}} alt="drink-logo" />
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
              style={{backgroundImage: "url(/media/iconent.png)"}} alt="entertainment-logo" />
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
              style={{backgroundImage: "url(/media/iconshopping.png)"}} alt="shopping-logo" />
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
              style={{backgroundImage: "url(/media/iconbills.png)"}} alt="bill-logo" />
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
