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
						<h1>Contact US</h1>
						<p>Let us  know how we can help you.</p>
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