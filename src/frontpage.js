import React from 'react'
import { Link } from 'react-router-dom'


class FrontpageItem extends React.Component {
  render () {
    let posts = this.props.posts
    
    let postLoop = posts.map((post, index)=> {
      return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col col-12" key={index}>
          <div className="post-thumbnail">           
            <Link to={'post/' + post.slug} >
              <article className='xiong-block py-4 text-center'> 
                <div className="post-feature-image">
                  <img src={post._embedded['wp:featuredmedia']['0'].source_url} />
                </div>
                <div className="post-title">
                  <span className="post-date">{post.date}</span>
                  <h3>{post.title.rendered}</h3>          
                </div>                
              </article>        
            </Link>
          </div>
        </div>
      )
    })

    return (
      <div className="posts-wrapper row">
        {postLoop}
         
      </div>
    )
  }

}

export default FrontpageItem;