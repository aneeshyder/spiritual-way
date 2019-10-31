import React, { Component } from 'react';
import '../App.css';
import Layout from './layout';
import ContactForm from './contactform';

class Contactus extends Component{
	render(){
		return(
			<div className="contactus">			
				<Layout>
				<div className="banner">
					<div className="container">
					<div className="text-center py-3">
						<h1>We would love to hear from you</h1>
						<p>Please find below contact details and reach us out soon..!</p>
					</div>
					</div>
				</div>
				<div className="container">
					<ContactForm />
				</div>
				</Layout>
			</div>
		);
	}
}
export default Contactus