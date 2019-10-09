/* Login logic, sets sessionStorage, has state*/
import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import TaskList from "./task/TaskList";
import NewsCard from "./news/NewsCard"
import ChatList from "./chat/ChatList"

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
        <TaskList />
        <NewsCard />
        <ChatList />
      </React.Fragment>
    );
  }
}

export default Nutshell;
