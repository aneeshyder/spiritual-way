import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class ArticleDetail extends Component {
  render () {
    let posts = this.props.posts   
    let postLoop = posts.map((post, index)=> {
      return (
        <div classname="col-md-12 " key={index}>
          <div classname="about-item">
            <div classname="about-icon">
              <span classname="icon icon-display"></span>
            </div>
            <div classname="about-text">              
              <div>{renderHTML(post.content.rendered)}</div>

            </div>
          </div>
        </div>
      )
    })

    return (
      <div classname="row">
          {postLoop}
      </div>
    )
  }

}

export default ArticleDetail;