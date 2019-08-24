import React, { Component, Fragment } from 'react';
import Header from './components/header';
import ListNews from './components/listNews';
import Search from './components/search';

class App extends Component {

  constructor(){
    super();

    this.state = {
      news:[],
    }
  }

  /**
   * Get new from API
   */
  getNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=a01ef1661b96468eb46f885befa9bfdf`;
    const result = await fetch(url);
    const getNews = await result.json();

    const news = getNews.articles;
    
    this.setState({
      news
    })
  }


  componentDidMount() {
    this.getNews();
  }

  render() {
   
    return (
      <Fragment>
        <Header />

        <div className="container mt-5"> 
            <Search getNews={this.getNews} />

            <ListNews news={this.state.news} />
        </div>

      </Fragment>
    );
  }
}

export default App;
