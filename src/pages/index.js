import React, { Component } from 'react';
import banner from '../images/pic10.jpg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Index extends Component {
  render() {
    return (

        <div className="container">
            <section id="banner" className="py-3">
            <div className="narrow-wrap">
              <div className="img-section text-center">
              <span className="image object">
                <img src={banner} alt="banner img" />
              </span>
              </div>
            
              <div className="content-intro pt-2">
                <section className="text-center">
                  <h1>Thinking in React</h1>
                  <p>A free and fully responsive site template</p>
                </section>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <ul className="actions text-center">
                  <li><a class="btn btn-primary" href="#" role="button">Learn More</a></li>
                </ul>
              
              </div>
              </div>
            </section>            
          </div>
    );
  }
}

export default Index;