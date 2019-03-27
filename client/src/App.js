import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import {
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
      }
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
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
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
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
          formData={this.state.authFormData} />
      )} />

      </div>
    );
  }
}

export default App;
