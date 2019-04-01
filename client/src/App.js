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
      category_count: 0
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
  }

  addCount(){
    this.setState(prevState => {
      return{
        category_count: prevState.category_count +1
      }
    })
  }

  toggleMisc(){
    this.setState({
      miscellanious_picked: true,
    })
  }

  toggleBills(){
    this.setState({
      bills_picked: true,
    })
  }

  toggleShopping(){
    this.setState({
      shopping_picked: true,
    })
  }

  toggleRestaurant(){
    this.setState({
      restaurants_picked: true,
    })
  }

  toggleGroceries(){
    this.setState({
      groceries_picked: true,
    })
  }

  toggleDrinks(){
    this.setState({
      drinks_picked: true,
    })
  }

  toggleEntertainment(){
    this.setState({
      entertainment_picked: true,
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
    );
  }

  async updateBudget(e) {
    e.preventDefault();
    const weekly_budget = { weekly_budget: parseInt(this.state.weekly_budget) }
    const user = await putBudget(weekly_budget, this.state.currentUser.id);
    this.updateCurrentUser(user.user)
    this.props.history.push('/pickcategories')
  }

  async updateBool() {
    const {restaurants_bool,
    groceries_bool,
    drinks_bool,
    entertainment_bool,
    shopping_bool,
    bills_bool,
    miscellanious_bool } = this.state

    const data = {restaurants_bool,
    groceries_bool,
    drinks_bool,
    entertainment_bool,
    shopping_bool,
    bills_bool,
    miscellanious_bool }

    const user = await putBudget(data, this.state.currentUser.id)
    await this.updateCurrentUser(user.user)
    this.props.history.push('/budgethome')
  }

  test(){
    this.props.history.push('/home')
  }

  async updateBudget(weekly_budget) {
    weekly_budget = await putBudget(this.state.weekly_budget, this.state.currentUser.id);
  }

  handleLogout() {
    localStorage.clear();
    this.props.history.push('/login');
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
    return (
      <div className="App">

      <Route exact path="/" render={(props) => (
          <LandingPage
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />
      )} />

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

      <Route exact path="/setcategories" render={(props) => (
        <Categories
          restaurantToggle={this.toggleRestaurant}
          groceryToggle={this.toggleGroceries}
          drinksToggle={this.toggleDrinks}
          entertainmentToggle={this.toggleEntertainment}
          shoppingToggle={this.toggleShopping}
          billsToggle={this.toggleBills}
          otherToggle={this.toggleMisc}
          addCount={this.addCount} />
      )} />

    <Route exact path="/logexpense" component={(props) => (
        <LogExpense {...props} user={this.state.currentUser} updateCurrentUser={this.updateCurrentUser} />
      )} />

    <Route exact path="/budgethome" render={(props) => (
        <BudgetComponent {...props} user={this.state.currentUser} handleLogout={this.handleLogout}/>
      )} />
      </div>
    );
  }
}

export default withRouter(App);
