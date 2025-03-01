import React, { Component } from 'react'
import { Link } from "react-router-dom";

//import the components we will need
import EventCard from './EventCard'
import EventManager from '../../modules/EventManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class EventList extends Component {
    //define what this component needs to render
    state = {
        events: [],
        modal: false,
        loadingStatus: false
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventName === "" || this.state.date === "" || this.state.venue === "" || this.state.userId === "") {
            window.alert("Please input a title, date and venue");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                name: this.state.eventName,
                date: this.state.date,
                venue: this.state.venue,
                userId: this.state.userId
            };

            EventManager.post(event)
                .then(() => this.getData());
        }

    };
    getData = () => {
        EventManager.getAll()
            .then((events) => {
                this.setState({
                    events: events
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
            <>
                <div className="eventContainer">
                    <div className="eventFormContainer">
                        <div id="intro"><h3>EVENTS</h3>
                            <img id="pic" src={require('./events-01.png')} alt="My Dog" />
                        </div>
                        <Button id="modalFormBtn" onClick={this.toggle} >{this.props.buttonLabel} Add New Event </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Add New Event</ModalHeader>
                            <ModalBody>
                                <form>
                                    <fieldset>
                                        <div className="eventForm">
                                            <label htmlFor="eventName">Title:</label>
                                            <input
                                                type="text"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="eventName"
                                                placeholder="Event Title"
                                            />
                                            <label htmlFor="date">Date:</label>
                                            <input
                                                type="date"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="date"
                                                placeholder="Date"
                                            />
                                            <label htmlFor="venue">Venue:</label>
                                            <input
                                                type="text"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="venue"
                                                placeholder="Venue"
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button id="editBtn"
                                    onClick={(evt) => {
                                        this.constructNewEvent(evt)
                                        this.toggle()
                                    }}>Add New Event</Button>{' '}
                                <Button id="deleteBtn" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div className="eventCardContainer">
                        {this.state.events.map(event => <EventCard
                            key={event.id}
                            event={event}
                            getData={this.getData}
                            {...this.props} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default EventList