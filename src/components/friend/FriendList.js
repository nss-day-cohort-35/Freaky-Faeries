import React, { Component } from 'react'
//import the components we will need
import FriendCard from './FriendCard'
import FriendManager from '../../modules/FriendManager'

class FriendList extends Component {
    //define what this component needs to render
    state = {
        friends: [],
    }

    componentDidMount() {
        //getAll from FriendManager and hang on to that data; put it in state
        FriendManager.getAll()
            .then((friends) => {
                this.setState({
                    friends: friends
                })
            })
    }

    render() {

        return (
            <div className="friendContainer">
                <div id="intro"><h3>FRIENDS</h3>
                    <div className="photo">
                        <img id="pic" src={require('./friends-01.png')} alt="My Dog" />
                    </div>
                </div>
                <div className="friendCardContainer">
                    {this.state.friends.map(friend => <FriendCard key={friend.id} friend={friend}{...this.props} />)}
                </div>
            </div>
        )
    }
}

export default FriendList