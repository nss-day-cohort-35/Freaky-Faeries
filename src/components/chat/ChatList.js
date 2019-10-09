import React, { Component } from 'react'
    //import the components we will need
    import ChatCard from './ChatCard'
    import ChatManager from '../../modules/ChatManager'

    class ChatList extends Component {
        //define what this component needs to render
        state = {
            chats: [],
        }

    componentDidMount(){
        console.log("CHAT LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        ChatManager.getAll()
        .then((chats) => {
            this.setState({
                chats: chats
            })
        })
    }

    render(){
        console.log("CHAT LIST: Render");

        return(
            <div className="container-cards">
                {this.state.chats.map(chat => <ChatCard />)}
            </div>
        )
    }
}

export default ChatList