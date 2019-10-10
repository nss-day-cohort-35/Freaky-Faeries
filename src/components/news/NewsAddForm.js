import React, { Component } from 'react';
import NewsManager from '../../modules/NewsManager';

class NewsAddForm extends Component {
    state = {
        newsTitle: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNews = evt => {
        evt.preventDefault();
        if (this.state.newsTitle === "" || this.state.date === "") {
            window.alert("Please input a title and date");
        } else {
            this.setState({ loadingStatus: true });
            const news = {
                name: this.state.newsTitle,
                date: this.state.date,
            };

            NewsManager.post(news)
            .then(() => this.props.history.push("/news"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="newsForm">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="newsTitle"
                        placeholder="News Title"
                        />
                        <label htmlFor="newsTitle">Title:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date:</label>
                    </div>
                    <div className="newsAddBtn">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNews}
                        >Add</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default NewsAddForm