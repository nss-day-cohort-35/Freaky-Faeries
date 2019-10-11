import React, { Component } from 'react';
import ChatManager from '../../modules/ChatManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ChatCard extends Component {

    handleDelete = (id) =>  {
        ChatManager.delete(id)
        .then(() => this.props.getData());
      }

      state = {
        message: "",
        date: "",
        loadingStatus: true,
        modal: false
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    updateExistingChat = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedChat = {
            id: this.props.chat.id,
            mesasge: this.state.message,
            date: this.state.date,
        };
        ChatManager.update(editedChat)
            .then(() => this.props.getData())
    }
    componentDidMount() {
        ChatManager.get(this.props.chat.id)
         .then(chat => {
             this.setState({
               message: chat.message,
               date: chat.date,
             });
         });
       }
       toggle = () => {
         this.setState(prevState => ({
             modal: !prevState.modal
         }));
     }
    render () {
        return (
            <>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Edit Chat</ModalHeader>
                        <ModalBody>
                        <form>
                    <fieldset>
                        <label htmlFor="message">Message: </label>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="message"
                                value={this.state.chatName}
                            />
                            <label htmlFor="date">Date: </label>
                            <input
                                type="date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            />

                        </div>
                    </fieldset>
                </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="info"
                            // disabled={this.state.loadingStatus}
                                onClick={(evt) => {
                                    this.updateExistingChat(evt)
                                    this.toggle()}}>Save Chat Message</Button>{' '}
                            <Button color="info" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            <div className="chatCard">
                <div className="chatCardContent">
                    <p>Chat Message:{this.props.chat.message}</p>
                    <p>Date: {this.props.chat.date}</p>
                    <Button color="info" className="chatDeleteBtn" id="deleteBtn" type="button" onClick={() => this.handleDelete (this.props.chat.id)}>Delete</Button>
                    <Button color="info" onClick={this.toggle}> {this.props.buttonLabel} Edit Chat</Button>
                </div>
            </div>
            </>
        );
    }
}

export default ChatCard;