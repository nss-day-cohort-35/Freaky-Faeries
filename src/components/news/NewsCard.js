import React, { Component } from 'react';

class NewsCard extends Component {
    render() {
        return (
            <>
                <div className="newsCard">
                    <div className="newsCardContent">
                        <h3>Title:</h3>
                        <p>Date:</p>
                        <p>Synopsis:</p>
                        <button className="newsDeleteBtn" id="deleteBtn" type="button">Delete</button>
                        <button className="newsEditBtn" id="editBtn" type="button">Edit</button>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsCard