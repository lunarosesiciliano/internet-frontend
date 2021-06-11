import "./App.css";
import React, { Component } from "react";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm.js";
import HomePage from "./Pages/HomePage.js";
import { Switch, Route, withRouter } from "react-router-dom";
class App extends Component {
  state = {
    user: {},
    error: "",
  };
  componentDidMount() {
    this.validateUser();
  }
  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      user: {},
    });
  };
  validateUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id) {
            this.setState({
              user: result,
            });
          }
        });
    }
  };

  signUp = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        },
      }),
    })
      .then((response) => response.json())
      .then((user) => this.setState({ user }));
  };

  login = (username, password) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          this.setState({
            user: result.user,
          });
          this.props.history.push("/");
        } else {
          this.setState({
            error: result.error,
          });
        }
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.state.user.id ? (
          <Route
            path="/"
            exact
            render={(props) => (
              <HomePage
                user={this.state.user}
                logout={this.logout}
                error={this.state.error}
                login={this.login}
              />
            )}
          />
        ) : (
          <>
            <Route
              path="/signup"
              exact
              render={(props) => <SignupForm {...props} signUp={this.signUp} />}
            />
            <Switch>
              <Route
                path="/login"
                exact
                render={(props) => (
                  <LoginForm
                    {...props}
                    login={this.login}
                    error={this.state.error}
                  />
                )}
              />
            </Switch>
          </>
        )}
      </div>
    );
  }
}
export default withRouter(App);
