import React, { Component } from 'react'
//import the components we will need
import FriendCard from './FriendCard'
// import FriendManager from '../../modules/FriendManager'

class FriendList extends Component {
    //define what this component needs to render
    state = {
        friends: [],
    }

    // componentDidMount(){
    //     //getAll from FriendManager and hang on to that data; put it in state
    //     FriendManager.get()
    //     .then((friends) => {
    //         this.setState({
    //             friends: friends
    //         })
    //     })
    // }

    render() {

        return (
            <div>
                <FriendCard />
            </div>
        )
    }
}

export default FriendList