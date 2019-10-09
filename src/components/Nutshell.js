/* Login logic, sets sessionStorage, has state*/
import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import TaskCard from "./task/TaskCard";
import FriendCard from "./friend/FriendCard";

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
        <TaskCard />
        <FriendCard />
      </React.Fragment>
    );
  }
}

export default Nutshell;
