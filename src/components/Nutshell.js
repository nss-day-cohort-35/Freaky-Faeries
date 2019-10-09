/* Login logic, sets sessionStorage, has state*/
import React, { Component } from "react";
// import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import TaskCard from "./task/TaskCard";
import EventCard from "./event/EventCard";

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <ApplicationViews />
        <TaskCard />
        <EventCard />
      </React.Fragment>
    );
  }
}

export default Nutshell;
