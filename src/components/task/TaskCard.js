import React, { Component } from 'react';

class TaskCard extends Component {


    render() {
        return (
            <>
                <div className="taskCard">
                    <div className="taskCardContent">
                        <p>Task: {this.props.task.name}</p>
                        <p>Due Date: {this.props.task.date}</p>
                        <button className="taskCompBtn" type="button">Completed</button>
                    </div>
                </div>
            </>
        );
    }
}

export default TaskCard;