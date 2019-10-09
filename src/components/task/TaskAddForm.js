import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';

class TaskAddForm extends Component {
    state = {
        taskName: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.taskName === "" || this.state.date === "") {
            window.alert("Please input a title and due date");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                name: this.state.taskName,
                date: this.state.date,
            };

            TaskManager.post(task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="taskForm">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="taskName"
                        placeholder="Task Title"
                        />
                        <label htmlFor="taskName">Title:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date:</label>
                    </div>
                    <div className="taskAddBtn">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTask}
                        >Add</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TaskAddForm