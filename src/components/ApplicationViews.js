import { Route } from "react-router-dom";
import React, { Component } from "react";
import TaskAddForm from "./task/TaskAddForm";
import ChatList from './chat/ChatList';
import TaskList from './task/TaskList';
import FriendList from './friend/FriendList';
import NewsList from './news/NewsList';
import EventList from './event/EventList';


export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return (
            <div>
              <TaskList {...props}/>
              <EventList {...props}/>
              <NewsList {...props}/>
              <FriendList {...props}/>
              <ChatList {...props}/>
            </div>
          )
        }} />
        <Route exact path="/tasks/new" render={(props) => {
          return <TaskAddForm {...props} />
        }} />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />
        <Route
          path="/chats" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/chats/new" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
      </React.Fragment>
    );
  }
}
