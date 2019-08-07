import React, { Component } from 'react';

class ContactForm extends React.Component {
 constructor(props) {
    super(props);   
     this.state = {value: ''};     
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Message submitted successfully');
    event.preventDefault();
  }

render() {
    return (
    	<form onSubmit={this.handleSubmit}>
    		<div className="form-group">
		    <label htmlFor="InputEmail1">Email address</label>
		    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
		    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
	  	</div>
		  <div className="form-group">
		    <label htmlFor="Inputtext">Write your message</label>
		    <textarea  className="form-control" id="Inputtext" name="message"  />
		  </div>						  
		  <button type="submit" value="submit" className="btn btn-primary">Send</button>
    	</form>
   		);
	}
}
export default ContactForm 