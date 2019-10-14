import React, { Component } from 'react'
//import the components we will need
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class NewsList extends Component {
    //define what this component needs to render
    state = {
        news: [],
        modal: false,
        loadingStatus: false
    }
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
                title: this.state.newsTitle,
                date: this.state.date,
                synopsis: this.state.synopsis,
            };

            NewsManager.post(news)
                .then(() => this.getData());
        }

    };
    getData = () => {
        NewsManager.getAll()
            .then((news) => {
                this.setState({
                    news: news
                })
            })
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            // onClick={() => { this.props.history.push("/tasks/new") }}
            <>
                <div className="newsContainer">
                    <div className="newsFormContainer">
                        <div id="intro">
                            <h3>NEWS</h3>
                            <img id="pic" src={require('./news-01.png')} alt="My Dog" />
                        </div>
                        <Button id="modalFormBtn" className= "hvr-float" onClick={this.toggle} >{this.props.buttonLabel} Add News </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Add News</ModalHeader>
                            <ModalBody>
                                <form>
                                    <fieldset>
                                        <div className="newsForm">
                                            <label id="label" htmlFor="newsTitle">TITLE: </label>
                                            <input
                                                type="text"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="newsTitle"
                                                placeholder="News Title"
                                            />
                                            <br></br>
                                            <label id="label" htmlFor="date">Date:</label>
                                            <input
                                                type="date"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="date"
                                                placeholder="Date"
                                            />
                                            <br></br>
                                            <label id="label" htmlFor="synopsis">Synopsis:</label>
                                            <input
                                                type="text"
                                                required
                                                onChange={this.handleFieldChange}
                                                id="synopsis"
                                                placeholder="Synopsis"
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary"
                                    onClick={(evt) => {
                                        this.constructNews(evt)
                                        this.toggle()
                                    }}>Add News</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div className="newsCardContainer">
                        {this.state.news.map(news => <NewsCard
                            key={news.id}
                            news={news}
                            {...this.props}
                            getData={this.getData} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default NewsList