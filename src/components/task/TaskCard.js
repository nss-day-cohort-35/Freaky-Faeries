import React, { Component } from 'react';

class TaskCard extends Component {


    render() {
        return (
            <>
                <div className="taskCard">
                    <div className="taskCardContent">
                        <h3>Task:</h3>
                        <p>Due Date:</p>
                        <button className="taskEditBtn" id="editBtn" type="button">Edit</button>
                        <button className="taskDeleteBtn" id="deleteBtn" type="button">Delete</button>
                        <button className="taskCompBtn" type="button">Completed</button>
                    </div>
                </div>
            </>
        );
    }
}

export default TaskCard;