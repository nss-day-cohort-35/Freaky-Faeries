import React, { Component } from 'react';

class EventCard extends Component {


    render() {
        return (
            <>
                <div className="eventCard">
                    <div className="eventCardContent">
                        <p>Event: {this.props.event.name}</p>
                        <p>Date:{this.props.event.date}</p>
                        <p>Venue:{this.props.event.venue}</p>
                        <button className="eventEditBtn" id="editBtn" type="button">Edit</button>
                        <button className="eventDeleteBtn" id="deleteBtn" type="button">Delete</button>
                    </div>
                </div>
            </>
        );
    }
}

export default EventCard;