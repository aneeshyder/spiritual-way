import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Header extends Component {
  openMenu = event =>  document.body.classList.add('nav-active');
  closeMenu = event =>  document.body.classList.remove('nav-active');

  render() {
    return (
      <header id="header" className="py-4">
        <div className="container">
          <div className="menu-wrap">
            <Link to="/" className="logo">My App</Link>
              <ul className="nav">
                <li className="close-button" onClick={this.closeMenu}>x</li>
                <li><Link to="/" onClick={this.closeMenu}>Home</Link></li>
                <li><Link to="/blog" onClick={this.closeMenu}>blog</Link></li>
                <li><Link to="/contactus" onClick={this.closeMenu}>Contact Us</Link></li>
                <li><Link to="/posts" onClick={this.closeMenu}>Posts</Link></li>
              </ul>
              <span className="menu-box" onClick={this.openMenu}>
                <span className="mobile-menu"></span>
              </span>
            </div>
        </div>
    </header>
    );
  }
}

export default Header;
