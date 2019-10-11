import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react";
import TaskAddForm from "./task/TaskAddForm";
import EventAddForm from './event/EventAddForm';
import ChatList from './chat/ChatList';
import TaskList from './task/TaskList';
import FriendList from './friend/FriendList';
import NewsList from './news/NewsList';
import EventList from './event/EventList';
import Register from './auth/Register';
import Login from './auth/Login'

// import FriendAddForm from './friend/FriendAddForm'

export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return (
            <div className="main">
              {/* <FriendAddForm {...props} /> */}
              <section className="leftSection">
                <FriendList {...props} />
              </section>
              <section className="mainSection">
                <ChatList {...props} />
                <TaskList {...props} />
              </section>
              <section className="rightSection">
                <EventList {...props} />
                <NewsList {...props} />
              </section>
            </div>
          )
        }
        } />

        <Route exact path="/tasks/new" render={(props) => {
          return <TaskAddForm {...props} />
        }} />

        <Route exact path="/events/new" render={(props) => {
          return <EventAddForm {...props} />
        }} />

        <Route exact path="/login" render={props => {
          return <Login setUser={this.props.setUser} get {...props} />
        }} />

        <Route exact path="/register" render={props => {
          return <Register setUser={this.props.setUser} {...props} />
        }} />
      </React.Fragment>
    );
  }
}
