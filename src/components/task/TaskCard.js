import React, { Component } from 'react';

class TaskCard extends Component {


    render() {
        return (
            <>
                <div className="taskCard">
                    <div className="taskCardContent">
                        <h3>Task:</h3>
                        <p>Due Date:</p>
                        <button className="taskCompBtn" type="button">Completed</button>
                    </div>
                </div>
            </>
        );
    }
}

export default TaskCard;