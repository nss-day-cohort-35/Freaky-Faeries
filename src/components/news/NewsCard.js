import React, { Component } from 'react';
import NewsManager from '../../modules/NewsManager';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewsCard extends Component {
    /* delete function  used on delete button*/
    handleDelete = (id) => {
        NewsManager.delete(id)
            .then(() => this.props.getData());
    }

    state = {
        title: "",
        date: "",
        synopsis: "",
        loadingStatus: true,
        modal: false
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    /* changed match.params to event.id -- this updating even and setting state -- loadingStatus disables button while loading*/
    updateExistingNews = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedNews = {
            id: this.props.news.id,
            title: this.state.newsTitle,
            date: this.state.date,
            synopsis: this.state.synopsis,
        };
        /*changed  history.push to getData-- renders state again -- gets all events */
        NewsManager.update(editedNews)
            .then(() => this.props.getData())
    }
    /* change match.params to event.id */
    componentDidMount() {
        NewsManager.get(this.props.news.id)
            .then(news => {
                this.setState({
                    title: news.title,
                    date: news.date,
                    synopsis: news.synopsis,
                    loadingStatus: false,
                });
            });
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit News</ModalHeader>
                    <ModalBody>
                        <form>
                            <fieldset>
                                <label htmlFor="newsTitle">Title: </label>
                                <div className="formgrid">
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="newstitle"
                                        value={this.state.newsTitle}
                                    />
                                    <label htmlFor="date">Date: </label>
                                    <input
                                        type="date"
                                        required
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="date"
                                        value={this.state.date}
                                    />
                                    <label htmlFor="synopsis">Synopsis: </label>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="venue"
                                        value={this.state.synopsis}
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" 
                            onClick={(evt) => {
                                this.updateExistingNews(evt)
                                this.toggle()
                            }}>Save News</Button>{' '}
                        <Button color="info" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <div className="newsCard">
                    <div className="newsCardContent">
                        <p><strong>Title: </strong>{this.props.news.title}</p>
                        <p><strong>Date: </strong>{this.props.news.date}</p>
                        <p><strong>Synopsis: </strong>{this.props.news.synopsis}</p>
                        <Button color="info" className="newsDeleteBtn" id="deleteBtn" type="button" onClick={() => this.handleDelete(this.props.news.id)}>Delete</Button>
                        <Button color="info" id="editBtn" onClick={this.toggle} >{this.props.buttonLabel} Edit News </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsCard;