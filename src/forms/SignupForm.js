import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    return (
      <div className="SignupDiv">
        <form onSubmit={this.handleSubmit} className="SignupForm">
          <h1>Sign Up</h1>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            placeholder=""
          />
          <input
            type="submit"
            className="RegisterSubmitButton"
            value="Welcome !"
          />
          <p>Already have an account?</p>
          <Link to="/login">Login!</Link>
        </form>
        <h1>???</h1>
      </div>
    );
  }
}
