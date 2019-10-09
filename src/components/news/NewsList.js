import React, { Component } from 'react'
    //import the components we will need
    import NewsCard from './NewsCard'
    import NewsManager from '../../modules/NewsManager'

    class NewsList extends Component {
        //define what this component needs to render
        state = {
            news: [],
        }

    componentDidMount(){
        //getAll from TaskManager and hang on to that data; put it in state
        NewsManager.getAll()
        .then((news) => {
            this.setState({
                news: news
            })
        })
    }

    render(){

        return(
            <div className="newsCardContainer">
                {this.state.news.map(news => <NewsCard key={news.id} news={news}{...this.props} />)}
            </div>
        )
    }
}

export default NewsList