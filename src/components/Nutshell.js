/* Login logic, sets sessionStorage, has state*/
import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import TaskList from "./task/TaskList";
import NewsCard from "./news/NewsCard"

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
        <TaskList />
        <NewsCard />
      </React.Fragment>
    );
  }
}

export default Nutshell;
