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
        console.log(this.props)
        return (
            // onClick={() => { this.props.history.push("/tasks/new") }}
            <>
                <div className="newsFormContainer">
                    <h3>NEWS</h3>
                    <Button color="danger" onClick={this.toggle} >{this.props.buttonLabel} Add News </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add News</ModalHeader>
                        <ModalBody>
                            <form>
                                <fieldset>
                                    <div className="newsForm">
                                        <label htmlFor="newsTitle">Title:</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="newsTitle"
                                            placeholder="News Title"
                                        />
                                        <br></br>
                                        <label htmlFor="date">Date:</label>
                                        <input
                                            type="date"
                                            required
                                            onChange={this.handleFieldChange}
                                            id="date"
                                            placeholder="Date"
                                        />
                                        <br></br>
                                        <label htmlFor="synopsis">Synopsis:</label>
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
                            <Button color="primary" disabled={this.state.loadingStatus}
                                onClick={(evt) => {
                                    this.constructNews(evt)
                                    this.toggle()
                                }}>Add News</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="newsCardContainer">
                    {this.state.news.map(news => <NewsCard key={news.id} news={news}getData={this.getData}{...this.props} />)}
                </div>
            </>
        )
    }
}

export default NewsList