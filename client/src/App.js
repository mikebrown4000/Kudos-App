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
      currentUser: {},
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
      restaurants_bool: false,
      groceries_bool: false,
      drinks_bool: false,
      entertainment_bool: false,
      shopping_bool: false,
      bills_bool: false,
      miscellanious_bool: false,
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
    this.updateBool = this.updateBool.bind(this);
  }

  addMisc(){
    this.state.miscellanious_bool === true
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
    this.state.bills_bool === true
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
    this.state.shopping_bool === true
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
    this.state.entertainment_bool === true
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
    this.state.restaurants_bool === true
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
    this.state.groceries_bool === true
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
    this.state.drinks_bool === true
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
        miscellanious_bool: !prevState.miscellanious_bool
      }
    })
  }

  toggleBills(){
    this.setState(prevState => {
      return{
        bills_bool: !prevState.bills_bool
      }
    })
  }

  toggleShopping(){
    this.setState(prevState => {
      return{
        shopping_bool: !prevState.shopping_bool
      }
    })
  }

  toggleRestaurant(){
    this.setState(prevState => {
      return{
        restaurants_bool: !prevState.restaurants_bool
      }
    })
  }

  toggleGroceries(){
    this.setState(prevState => {
      return{
          groceries_bool: !prevState.  groceries_bool
      }
    })
  }

  toggleDrinks(){
    this.setState(prevState => {
      return{
        drinks_bool: !prevState.drinks_bool
      }
    })
  }

  toggleEntertainment(){
    this.setState(prevState => {
      return{
      entertainment_bool: !prevState.entertainment_bool
      }
    })
  }

  async componentDidMount() {
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const userDecode = await decode(checkUser);
      const user = await getUser(userDecode.id)
      console.log(userDecode)
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
    this.props.history.push('/budgethome')
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

    await putBudget(data, this.state.currentUser.id)
    this.props.history.push('/budgethome')
  }

  test(){
    this.props.history.push('/home')
  }

  render() {
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
          updateBool={this.updateBool}
          restaurants_bool={this.state.restaurants_bool}
          groceries_bool={this.state.groceries_bool}
          drinks_bool={this.state.drinks_bool}
          bills_bool={this.state.bills_bool}
          shopping_bool={this.state.shopping_bool}
          entertainment_bool={this.state.entertainment_bool}
           />
      )} />

      <Route exact path="/budgethome" render={(props) => (
        <LogExpense {...props} user={this.state.currentUser} />
      )} />

      </div>
    );
  }
}

export default withRouter(App);
