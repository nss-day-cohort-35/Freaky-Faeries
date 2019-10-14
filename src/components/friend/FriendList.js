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
            <>
                <div className="friendContainer">
                    <div id="intro"><h3>FRIENDS</h3>
                        <div className="photo">
                            <img id="pic" src={require('./friends-01.png')} alt="My Dog" />
                        </div>
                    </div>
                    <div className="friendCardContainer">
                        <>
                            <div className="friendCard">
                                <div className="friendCardContent">
                                    <p>Name: Queen of the Forest</p>
                                    <picture>
                                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                                    </picture>
                                    <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                                    <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                                </div>

                                <div className="friendCardContent">                        <p>Name: Flutter</p>
                                    <picture>
                                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                                    </picture>
                                    <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                                    <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                                </div>
                                <div className="friendCardContent">
                                    <p>Name: Glitter</p>
                                    <picture>
                                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                                    </picture>
                                    <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                                    <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>

                                </div>
                                <div className="friendCardContent">
                                    <p>Name:Sparkle</p>
                                    <picture>
                                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                                    </picture>
                                    <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                                    <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </>
        )
    }
}

export default FriendList
