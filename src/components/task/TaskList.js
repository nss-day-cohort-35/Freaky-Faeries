import React, { Component } from 'react'
//import the components we will need
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Task.css'


class TaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
        modal: false,
        loadingStatus: false
    }
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
                .then(() => this.getData());
        }

    };
    getData = () => {
        TaskManager.getAll()
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        this.getData()
    }




    render() {
        return (
            // onClick={() => { this.props.history.push("/tasks/new") }}
            <>
                <div className="taskFormContainer">
                    <h3>TASKS</h3>
                    <Button color="danger" onClick={this.toggle} >{this.props.buttonLabel} Add New Task </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add New Task</ModalHeader>
                        <ModalBody>
                            <form>
                                <fieldset>
                                    <div className="taskForm">
                                        <label htmlFor="taskName">Title:</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="taskName"
                                            placeholder="Task Title"
                                        />
                                        <label htmlFor="date">Date:</label>
                                        <input
                                            type="date"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="date"
                                            placeholder="Date"
                                        />
                                    </div>
                                </fieldset>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" disabled={this.state.loadingStatus}
                                onClick={(evt) => {
                                    this.constructNewTask(evt)
                                    this.toggle()
                                }}>Add New Task</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="taskCardContainer">
                    {this.state.tasks.map(task => <TaskCard
                        key={task.id}
                        task={task}
                        getData={this.getData}
                        {...this.props} />)}
                </div>
            </>
        )
    }
}

export default TaskList