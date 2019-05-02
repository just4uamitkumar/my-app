import React, { Component } from 'react';
import FunctionBasedForm from './FunctionBasedForm';
import Logo from './../logo.svg';


class Hook extends Component {
  render() {
    return (
      <div className="content">
       <div className="pageHeader">
            <h1>Hooks </h1>
        </div>
        <div className="col-6">
	        <div className="contentBlock clearfix">
	        <div className="text-center">
	        	<img src={ Logo } alt="alligator.io logo" width="200" />
	        </div>
	          <FunctionBasedForm />
	        </div>
        </div>
      </div>
    );
  }
}

export default Hook;