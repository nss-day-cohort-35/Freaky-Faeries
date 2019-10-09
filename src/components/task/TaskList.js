import React, { Component } from 'react'
//import the components we will need
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class TaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
        modal: false
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        console.log("TASK LIST: ComponentDidMount");
        //getAll from TaskManager and hang on to that data; put it in state
        TaskManager.getAll()
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })

    }




    render() {
        console.log(this.props)
        return (
            //add this button above your display of animal cards
            <>
                <section className="taskAddBtn">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/tasks/new") }}>
                        Add New Task
                </button>
                </section>
                <div className="taskCardContainer">
                    {this.state.tasks.map(task => <TaskCard key={task.id} task={task}{...this.props} />)}
                </div>
                <div>
                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        )
    }
}

export default TaskList