import React, { Component } from "react"
import EventManager from "../../modules/EventManager"

class EventEditForm extends Component {
    //set the initial state
    state = {
        eventName: "",
        date: "",
        venue: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEvent = {
            id: this.props.id,
            name: this.state.eventName,
            date: this.state.date,
            venue: this.state.venue,
        };

        EventManager.update(editedEvent)
            .then(() => this.props.history.push("/"))
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <label htmlFor="eventName">Event: </label>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventName"
                                value={this.state.eventName}
                            />
                            <label htmlFor="breed">Date: </label>
                            <input
                                type="date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            />
                            <label htmlFor="venue">Venue: </label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="dog"
                                value={this.state.venue}
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEvent}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EventEditForm