import React, { Component } from 'react';

class TaskCard extends Component {


    render() {
        return (
            <>
                <div className="taskCard">
                        <div className="checkBox">
                        <i className="far fa-check-circle fa-2x"></i>
                        </div>
                        <div className="taskCardContent">
                        <p>Task: {this.props.task.name}</p>
                        <br></br>
                        <p>Due Date: {this.props.task.date}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default TaskCard;