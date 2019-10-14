import React, { Component } from 'react'
//import the components we will need
import ChatCard from './ChatCard'
import ChatManager from '../../modules/ChatManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ChatList extends Component {
    //define what this component needs to render
    state = {
        chats: [],
        modal: false,
        loadingStatus: false
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    constructNewChat = evt => {
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
                .then(() => this.getData());
        }
    };
    getData = () => {
        ChatManager.getAll()
            .then((chats) => {
                this.setState({
                    chats: chats
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
                <div className="chatContainer">
                    <div className="chatFormContainer">
                        <div id="intro">
                            <h3>CHAT</h3>
                            <img id="chatpic" src={require('./chat-01.png')} alt="My Dog" />
                        </div>
                        <Button id="modalFormBtn" onClick={this.toggle} >{this.props.buttonLabel} Add Chat </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Add Chat</ModalHeader>
                            <ModalBody>
                                <form>
                                    <fieldset>
                                        <div className="chatForm">
                                            <label htmlFor="message">Message: </label>
                                            <input
                                                type="text"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="message"
                                                placeholder="Chat Message"
                                            />
                                            <br></br>
                                            <label htmlFor="date">Date: </label>
                                            <input
                                                type="date"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="date"
                                                placeholder="Date"
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" disabled={this.state.loadingStatus}
                                    onClick={(evt) => {
                                        this.constructNewChat(evt)
                                        this.toggle()
                                    }}>Add New Chat Message</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div className="chatCardContainer">
                        {this.state.chats.map(chat => <ChatCard key={chat.id} chat={chat}
                            getData={this.getData}
                            {...this.props} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default ChatList