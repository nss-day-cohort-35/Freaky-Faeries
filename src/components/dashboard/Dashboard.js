/* dashboard*/
import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
import "./Dashboard.css";
import TaskList from "../task/TaskList";
import NewsList from "../news/NewsList"

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationViews />
        <TaskList />
        <NewsList />
      </React.Fragment>
    );
  }
}

export default Dashboard;