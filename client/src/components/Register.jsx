import React from 'react';

const Register = (props) => {

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={props.handleRegister} >
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
