import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TaskCard extends Component {
    handleDelete = (id) => {
        TaskManager.delete(id)
            .then(() => this.props.getData());
    }

    state = {
        taskName: "",
        date: "",
        loadingStatus: true,
        modal: false
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    /* changed match.params to event.id -- this updating even and setting state -- loadingStatus disables button while loading*/
    updateExistingTask = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedTask = {
            id: this.props.task.id,
            name: this.state.taskName,
            date: this.state.date
        };
        //changed  history.push to getData-- renders state again -- gets all events /
        TaskManager.update(editedTask)
            .then(() => this.props.getData())
    }
    /* change match.params to event.id */
    componentDidMount() {
        TaskManager.get(this.props.task.id)
            .then(task => {
                this.setState({
                    taskName: task.name,
                    date: task.date,
                    loadingStatus: false
                });
            });
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Task</ModalHeader>
                    <ModalBody>
                        <form>
                            <fieldset>
                                <label htmlFor="taskName">Task: </label>
                                <div className="formgrid">
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="taskName"
                                        value={this.state.taskName}
                                    />
                                    <label htmlFor="date">Date: </label>
                                    <input
                                        type="date"
                                        required
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="date"
                                        value={this.state.date}
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" disabled={this.state.loadingStatus}
                            onClick={(evt) => {
                                this.updateExistingTask(evt)
                                this.toggle()
                            }}>Save Task</Button>{' '}
                        <Button color="info" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <div className="taskCard">
                    <div className="taskCardContent">
                        <p>Task: {this.props.task.name}</p>
                        <p>Due Date: {this.props.task.date}</p>
                        <Button color="info" className="taskDeleteBtn" id="deleteBtn" type="button" onClick={()=> this.handleDelete(this.props.task.id)}>Delete</Button>
                        <Button color="info" onClick={this.toggle} >{this.props.buttonLabel} Edit Task </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default TaskCard;