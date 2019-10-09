import React, { Component } from 'react'
    //import the components we will need
    import TaskCard from './TaskCard'
    import TaskManager from '../../modules/TaskManager'

    class TaskList extends Component {
        //define what this component needs to render
        state = {
            tasks: [],
        }

    componentDidMount(){
        console.log("TASK LIST: ComponentDidMount");
        //getAll from TaskManager and hang on to that data; put it in state
        TaskManager.getAll()
        .then((tasks) => {
            this.setState({
                tasks: tasks
            })
        })
    }

    render(){

        return(
            <div className="taskCardContainer">
                {this.state.tasks.map(task => <TaskCard key={task.id} task={task}{...this.props} />)}
            </div>
        )
    }
}

export default TaskList