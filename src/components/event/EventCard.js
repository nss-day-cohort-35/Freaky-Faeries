import React, { Component } from 'react';

class EventCard extends Component {


    render() {
        return (
            <>
                <div className="eventCard">
                    <div className="eventCardContent">
                        <h3>Event:</h3>
                        <p>Location:</p>
                        <p>Date:</p>
                        <button className="eventEditBtn" id="editBtn" type="button">Edit</button>
                        <button className="eventDeleteBtn" id="deleteBtn" type="button">Delete</button>
                    </div>
                </div>
            </>
        );
    }
}

export default EventCard;