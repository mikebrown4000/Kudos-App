import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import {
  getUser,
  putBudget,
  loginUser,
  registerUser,
} from './services/apihelpers';
import BudgetComponent from './components/BudgetComponent';
import BudgetRegister from './components/BudgetRegister';
import Categories from './components/Categories';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LogExpense from './components/LogExpense';
import Login from './components/Login';
import PrimaryRegister from './components/PrimaryRegister';
import Register from './components/Register';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:[],
      currentUser: null,
      authFormData: {
        email: "",
        password: ""
      },
      registerFormData: {
        email: "",
        password: "",
        first_name: "",
        last_name:""
      },
      weekly_budget: 0,
      restaurants_picked: false,
      groceries_picked: false,
      drinks_picked: false,
      entertainment_picked: false,
      shopping_picked: false,
      bills_picked: false,
      miscellanious_picked: false,
      category_count: 0,
      restaurants: 0,
      groceries: 0,
      drinks: 0,
      entertainment: 0,
      shopping: 0,
      bills: 0,
      miscellanious: 0,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.authHandleChange = this.authHandleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateBudget =this.updateBudget.bind(this);
    this.addCount = this.addCount.bind(this);
    this.toggleMisc = this.toggleMisc.bind(this);
    this.toggleRestaurant = this.toggleRestaurant.bind(this);
    this.toggleGroceries = this.toggleGroceries.bind(this);
    this.toggleEntertainment = this.toggleEntertainment.bind(this);
    this.toggleShopping = this.toggleShopping.bind(this);
    this.toggleBills = this.toggleBills.bind(this);
    this.toggleDrinks = this.toggleDrinks.bind(this);
    this.addGroceries =this.addGroceries.bind(this);
    this.addDrinks = this.addDrinks.bind(this);
    this.addEnt = this.addEnt.bind(this);
    this.addShop = this.addShop.bind(this);
    this.addBills = this.addBills.bind(this);
    this.addMisc = this.addMisc.bind(this);
    this.test = this.test.bind(this);
  }

  addMisc(){
    this.state.miscellanious_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  addBills(){
    this.state.bills_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  addShop(){
    this.state.shopping_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  addEnt(){
    this.state.entertainment_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  addCount(){
    this.state.restaurants_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  addGroceries(){
    this.state.groceries_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  addDrinks(){
    this.state.drinks_picked === true
     ? (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count -1
      }
    }) ) : (
    this.setState(prevState => {
      return {
        category_count: prevState.category_count +1
      }
    })
   )
  }

  toggleMisc(){
    this.setState(prevState => {
      return{
        miscellanious_picked: !prevState.miscellanious_picked
      }
    })
  }

  toggleBills(){
    this.setState(prevState => {
      return{
        bills_picked: !prevState.bills_picked
      }
    })
  }

  toggleShopping(){
    this.setState(prevState => {
      return{
        shopping_picked: !prevState.shopping_picked
      }
    })
  }

  toggleRestaurant(){
    this.setState(prevState => {
      return{
        restaurants_picked: !prevState.restaurants_picked
      }
    })
  }

  toggleGroceries(){
    this.setState(prevState => {
      return{
          groceries_picked: !prevState.  groceries_picked
      }
    })
  }

  toggleDrinks(){
    this.setState(prevState => {
      return{
        drinks_picked: !prevState.drinks_picked
      }
    })
  }

  toggleEntertainment(){
    this.setState(prevState => {
      return{
      entertainment_picked: !prevState.entertainment_picked
      }
    })
  }

  async componentDidMount() {
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async handleLogin() {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData.user
    })
    localStorage.setItem("jwt", userData.token)
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.registerFormData);
    this.handleLogin();
    this.props.history.push('/setbudget')
  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      },
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      weekly_budget: {
        ...prevState.weekly_budget,
        [name]: value
      }
    }));
  }

  async updateBudget(e) {
    e.preventDefault();
    await putBudget(this.state.weekly_budget, this.state.currentUser.id);
    this.props.history.push('/pickcategories')
  }

  test(){
    this.props.history.push('/home')
  }

  render() {
console.log(this.state.restaurants_picked);
console.log(this.state.groceries_picked);
console.log(this.state.drinks_picked);
console.log(this.state.entertainment_picked);
console.log(this.state.shopping_picked);
console.log(this.state.bills_picked);
console.log(this.state.miscellanious_picked);
console.log(this.state.category_count);
console.log(parseInt(this.state.weekly_budget.weekly_budget));
    return (
      <div className="App">

      <Route exact path="/login" render={(props) => (
        <Login
          handleLogin={this.handleLogin}
          handleChange={this.authHandleChange}
          formData={this.state.authFormData} />
      )} />

      <Route exact path="/register" render={(props) => (
        <Register
          handleRegister={this.handleRegister}
          handleChange={this.authHandleChange}
          formData={this.state.registerFormData} />
      )} />

      <Route exact path="/setbudget" render={(props) => (
        <BudgetRegister
          updateBudget={this.updateBudget}
          handleChange={this.handleChange} />
      )} />

      <Route exact path="/pickcategories" render={(props) => (
        <Categories
          restaurantToggle={this.toggleRestaurant}
          groceryToggle={this.toggleGroceries}
          drinksToggle={this.toggleDrinks}
          entertainmentToggle={this.toggleEntertainment}
          shoppingToggle={this.toggleShopping}
          billsToggle={this.toggleBills}
          otherToggle={this.toggleMisc}
          addCount={this.addCount}
          addGroceries={this.addGroceries}
          addDrinks={this.addDrinks}
          addEnt={this.addEnt}
          addShop={this.addShop}
          addBills={this.addBills}
          addMisc={this.addMisc}
          test={this.test}
          addRestaurantBudget={this.addRestaurantBudget}
           />
      )} />

      <Route exact path="/home" render={(props) => (
        <Header />
      )} />

      </div>
    );
  }
}

export default withRouter(App);
