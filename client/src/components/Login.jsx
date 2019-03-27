import React from 'react';


const Login = (props) => {

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input
        name="email"
        type="text"
        value={props.formData.username}
        onChange={props.handleChange}
        placeholder="Email" />
        <input
        name="password"
        type="password"
        value={props.formData.password}
        onChange={props.handleChange}
        placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
