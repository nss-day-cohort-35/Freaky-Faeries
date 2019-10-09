import React, { Component } from 'react'
    //import the components we will need
import FriendCard from './FriendCard'
import FriendManager from '../../modules/FriendManager'

    class FriendList extends Component {
        //define what this component needs to render
        state = {
            friends: [],
        }

    componentDidMount(){
        //getAll from FriendManager and hang on to that data; put it in state
        FriendManager.getAll()
        .then((friends) => {
            this.setState({
                friends: friends
            })
        })
    }

    render(){

        return(
            <div className="friendCardContainer">
                {this.state.friends.map(friend => <FriendCard key={friend.id} friend={friend}{...this.props} />)}
            </div>
        )
    }
}

export default FriendList