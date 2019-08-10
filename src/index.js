import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import App from './App'
import Blog from './pages/blog'
import Footer from './pages/footer'
import Contactus from './pages/contactus'
import Posts from './posts'
import Topics from './topics'


const routing = (
  <BrowserRouter>
  	<Switch>
	    <div>     
	      <Route exact path="/" component={App} />
	      <Route path="/blog" component={Blog} />
	      <Route path="/contactus" component={Contactus} />
	      <Route path="/posts" component={Posts} />
	      <Route path='/post/:title' component={Topics} />
	    </div>
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))