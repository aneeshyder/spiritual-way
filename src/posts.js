import React, { Component } from 'react';

import WPAPI from './wpclient';
import FrontpageItem from './frontpage';
import Layout from './pages/layout'
import Loader from './pages/loader'

class Posts extends Component {

  constructor () {
    super();
    this.state = {
      isLoading: false,
      books: []
    }
 
  }

  componentDidMount (){
    this.setState({
      isLoading: true
    })
    const bookUrl = WPAPI.books;

    fetch(bookUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        isLoading: false,
        books: response
      })
    })
  }
 
  render() {

     // const { isLoading } = this.state;
    return (
      <Layout>
        <div className="posts-main">
          <div className="container posts py-4">
            <h1 className="text-center pb-4">Our videos</h1>
              {this.state.isLoading ? <Loader /> : <FrontpageItem posts={this.state.books} /> }              
          </div>
        </div>
      </Layout>

    );
  }
}

export default Posts;