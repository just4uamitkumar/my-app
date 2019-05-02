import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionSection from './AccordionSection';

class Accordion extends Component{
	static propTypes ={
		allowMultipleOpen: PropTypes.bool,
		children: PropTypes.instanceOf(Object).isRequired,
	}

	constructor(props){
		super(props);

		const openSection = {};

		this.props.children.forEach(child => {
		      if (child.props.isOpen) {
		        openSection[child.props.label] = true;
		      }
		    });

		this.state = { openSection };
	}

	onClick = label => {
		const {props: { allowMultipleOpen }, state : {openSection}, } = this;

		const isOpen = !!openSection[label];

		if (allowMultipleOpen) {
	      this.setState({
	        openSection: {
	          ...openSection,
	          [label]: !isOpen
	        }
	      });
	    } else {
	      this.setState({
	        openSection: {
	          [label]: !isOpen
	        }
	      });
	    }
	}

	render(){
		const { onClick, props: { children }, state: { openSection }, } = this;

		return(
			<div style={{ border: '2px solid #008f68' }}>
		        {children.map(child => (
		          <AccordionSection
		            isOpen={!!openSection[child.props.label]}
		            label={child.props.label}
		            onClick={onClick}
		          >
		            {child.props.children}
		          </AccordionSection>
		        ))}
		    </div>
		)
	}


}


export default Accordion;