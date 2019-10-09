import React, { Component } from 'react';

class FriendCard extends Component {
    render() {
        return (
            <>
                <div className="friendCard">
                    <div className="friendCardContent">
                        <h3>Name:</h3>
                        <img></img>
                        <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                        <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                    </div>
                </div>
            </>
        )
    }
}

export default FriendCard;