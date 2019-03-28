import React from 'react';


const Login = (props) => {

  return (
    <div className="register-page">
      <div className="register-title">Login</div>
      <form
      className="register-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <div className="all-reg-inputs">
        <input
        className="register-input"
        name="email"
        type="text"
        value={props.formData.email}
        onChange={props.handleChange}
        placeholder="Email" />
        <input
        className="register-input"
        name="password"
        type="password"
        value={props.formData.password}
        onChange={props.handleChange}
        placeholder="Password" />
        </div>
        <button className="reg-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
