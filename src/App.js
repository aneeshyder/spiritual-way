import React, { Component } from 'react';
import './App.css';
import Index from './pages/index.js';
import Footer from './pages/footer'
import Header from './pages/header'

class App extends Component {
  render() {
    return (
      <div id="main" className="home">
        <div className="inner">
         <Header />
          <Index />
          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
