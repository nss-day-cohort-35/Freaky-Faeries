import React, { Component } from 'react';

class ChatCard extends Component {

    render () {
        return (
            <>
            <div className="chatCard">
            <h3>Chat Message:</h3>
            <p>Date</p>
            <button className="chatPostBtn" type="button">Post Chat</button>
            </div>
            </>
        );
    }
}

export default ChatCard;