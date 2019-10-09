import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TaskAddForm from "./task/TaskAddForm";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

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
          path="/messages" render={props => {
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
