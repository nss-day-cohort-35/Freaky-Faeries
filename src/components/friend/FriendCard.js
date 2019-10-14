import React, { Component } from 'react';
import './friend.css'
class FriendCard extends Component {
    render() {
        return (
            <>
                <div className="friendCard">
                    <div className="friendCardContent">
                        <p>Name: Queen of the Forest</p>
                        <picture>
                            <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                        </picture>
                        <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                        <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                    
                  
                        <p>Name: Flutter</p>
                        <picture>
                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                        </picture>
                        <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                        <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                    
                        <p>Name: Glitter</p>
                        <picture>
                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                        </picture>
                        <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                        <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
   
                        <p>Name:Sparkle</p>
                        <picture>
                        <img className="catPic" src={require('./images/cat-01.png')} alt="Cat" />
                        </picture>
                        <button className="friendAddBtn" id="addBtn" type="button">Add Friend</button>
                        <button className="friendDeleteBtn" id="deleteBtn" type="button">Delete Friend</button>
                    </div>
                </div>
            </>
        )
    }
}

// export default FriendCard;