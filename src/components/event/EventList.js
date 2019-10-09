import React, { Component } from 'react'
    //import the components we will need
    import EventCard from './EventCard'
    import EventManager from '../../modules/EventManager'

    class EventList extends Component {
        //define what this component needs to render
        state = {
            events: [],
        }

    componentDidMount(){
        //getAll from EventManager and hang on to that data; put it in state
        EventManager.getAll()
        .then((events) => {
            this.setState({
               events: events
            })
        })
    }

    render(){

        return(
            <div className="eventCardContainer">
                {this.state.events.map(event => <EventCard
                                                                 key={event.id} 
                                                                event={event}
                                                                 {...this.props} />)}
            </div>
        )
    }
}

export default EventList