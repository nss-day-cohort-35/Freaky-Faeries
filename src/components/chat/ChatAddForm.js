import React, { Component } from 'react';
import ChatManager from '../../modules/ChatManager';

class ChatAddForm extends Component {
    state = {
        message: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.message === "" || this.state.date === "") {
            window.alert("Please input a message and date");
        } else {
            this.setState({ loadingStatus: true });
            const chat = {
                message: this.state.message,
                date: this.state.date,
            };

            ChatManager.post(chat)
            .then(() => this.props.history.push("/chats"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="chatForm">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="chatName"
                        placeholder="Chat Message"
                        />
                        <label htmlFor="message">Message:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date:</label>
                    </div>
                    <div className="chatAddBtn">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTask}
                        >Add</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default ChatAddForm