import React from 'react';

const Register = (props) => {

  return (
    <div className="register-page">
      <div className="register-title">Create an Account</div>
      <form
      className="register-form"
      onSubmit={props.handleRegister} >
        <div className="all-reg-inputs">
        <input
        className="register-input"
        name="first_name"
        type="text"
        value={props.formData.first_name}
        onChange={props.handleChange}
        placeholder="First Name" />
        <input
        className="register-input"
        name="last_name"
        type="text"
        value={props.formData.last_name}
        onChange={props.handleChange}
        placeholder="Last Name" />
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
        <button className="reg-button">Get Started</button>
      </form>
    </div>
  );
}

export default Register;
