import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header id="header" className="py-4">
        <div className="container">
          <div className="menu-wrap">
            <Link to="/" className="logo">My App</Link>
              <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/posts">Posts</Link></li>
              </ul>
              <span className="mobile-menu"></span>
            </div>
        </div>
    </header>
    );
  }
}

export default Header;
