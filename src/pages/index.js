import React, { Component } from 'react';
import banner from '../images/pic10.jpg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Index extends Component {
  render() {
    return (

        <div className="container">
            <section id="banner" className="py-3">
            <div className="narrow-wrap text-left">            
              <div className="content-intro pt-2">
                <section>
                  <h1>Thinking <br />in React</h1>
                  <p>A free and fully responsive site template</p>
                </section>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <ul className="actions">
                  <li><a className="custom-btn" href="#" role="button">Learn More</a></li>
                </ul>
              
              </div>
              </div>
            </section>            
          </div>
    );
  }
}

export default Index;