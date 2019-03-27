import React from 'react';

const Register = (props) => {

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={props.handleRegister} >
        <input
        name="first_name"
        type="text"
        value={props.formData.username}
        onChange={props.handleChange}
        placeholder="First Name" />
        <input
        name="last_name"
        type="text"
        value={props.formData.username}
        onChange={props.handleChange}
        placeholder="Last Name" />
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
