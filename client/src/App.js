import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import {
  putBudget,
  loginUser,
  registerUser,
} from './services/apihelpers';
import BudgetComponent from './components/BudgetComponent';
import BudgetRegister from './components/BudgetRegister';
import CatRegister from './components/CatRegister';
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
      weekly_budget: '',
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.authHandleChange = this.authHandleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateBudget =this.updateBudget.bind(this);
  }


  componentDidMount() {
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
    }));
  }

  async updateBudget(weekly_budget) {
    weekly_budget = await putBudget(this.state.weekly_budget, this.state.currentUser.id);
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

      </div>
    );
  }
}

export default App;
