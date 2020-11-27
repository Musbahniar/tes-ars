import React, { Component } from "react";
// import React from "react";
import "./App.css";

// import Form from './form';

class App extends Component {
  // AWAL
  state = {
    account: { username:"", password:""}
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log('Submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };



  // state = {
  //   data: { email:"", password:""}
  // }

  // doSubmit = () => {
  //   // Call the server
  //   console.log("Submitted");
  // };



  render() {
    const { account } = this.state;

    return (
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input 
              value={account.username}
              onChange={this.handleChange}
              type="text" 
              className="form-control" 
              id="username"
              name="username"
              placeholder="UserName" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange} 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              placeholder="Enter Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>


          {/* Reusable */}
          {/* {this.renderInput("email", "Email")} */}
          {/* {this.renderInput("password", "Password", "password")} */}
          {/* {this.renderButton("Login")} */}
    
        </form>
      </div>
    );
  }
}

export default App;
