/* dashboard*/
import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
import "./Dashboard.css";
import Header from '../header/Header'
import Register from '../auth/Register'
import Login from '../auth/Login'
import "../auth/LoginRegister.css"


class Dashboard extends Component {
  state = {
    user: false
  }
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <React.Fragment>
      {(this.state.user) ?
        <>
        <ApplicationViews />
        <Header clearUser={this.clearUser} />
        </>
       :<><div className="logRegContainer">
         <Login setUser={this.setUser}/>
       <Register setUser={this.setUser} />
       </div>
       </>}
      </React.Fragment>
    );
  }
}

export default Dashboard;