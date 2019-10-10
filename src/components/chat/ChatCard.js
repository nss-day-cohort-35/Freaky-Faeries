import React, { Component } from 'react';

class ChatCard extends Component {

    render () {
        return (
            <>
            <div className="chatCard">
                <div className="chatCardContent">
                    <h3>Chat Message:{this.props.chat.message}</h3>
                    <p>Date: {this.props.chat.date}</p>
                    <button className="chatEditBtn" type="button">Edit Chat</button>
                    <button className="chatDeleteBtn" type="button">Delete Chat</button>
                </div>
            </div>
            </>
        );
    }
}

export default ChatCard;