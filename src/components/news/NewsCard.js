import React, { Component } from 'react';

class NewsCard extends Component {
    render() {
        return (
            <>
                <div className="newsCard">
                    <div className="newsCardContent">
                        <p>Title: {this.props.news.title}</p>
                        <p>Date: {this.props.news.date}</p>
                        <p>Synopsis: {this.props.news.synopsis}</p>
                        <button className="newsDeleteBtn" id="deleteBtn" type="button">Delete</button>
                        <button className="newsEditBtn" id="editBtn" type="button">Edit</button>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsCard