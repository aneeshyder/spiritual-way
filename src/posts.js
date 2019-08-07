import React, { Component } from 'react';

import WPAPI from './wpclient';
import FrontpageItem from './frontpage';
import Layout from './pages/layout'

class Posts extends Component {

  constructor () {
    super();
    this.state = {
      books: []
    }
 
  }

  componentDidMount (){

    const bookUrl = WPAPI.books;

    fetch(bookUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        books: response
      })
    })
  }
 
  render() {

    
    return (
      <Layout>
        <div className="posts-main">
          <div className="container posts py-4">
            <h1 className="text-center py-2">Random Posts</h1>
              <FrontpageItem posts={this.state.books} />             
          </div>
        </div>
      </Layout>

    );
  }
}

export default Posts;