import React, { Component } from 'react';
import { render } from 'react-dom';
import Accordion from './Accordion';

class AxiosCallC extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call Post Request'
        }       
    }

    componentWillUnmount() {
      console.log('Sayonara!');
    }
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>Accordion</h2>                        
                        <Accordion  allowMultipleOpen>
                            <div label='Alligator Mississippiensis' isOpen>
                              <p>
                                <strong>Common Name:</strong> American Alligator
                              </p>
                              <p>
                                <strong>Distribution:</strong> Texas to North Carolina, US
                              </p>
                              <p>
                                <strong>Endangered Status:</strong> Currently Not Endangered
                              </p>
                            </div>
                            <div label='Alligator Sinensis'>
                              <p>
                                <strong>Common Name:</strong> Chinese Alligator
                              </p>
                              <p>
                                <strong>Distribution:</strong> Eastern China
                              </p>
                              <p>
                                <strong>Endangered Status:</strong> Critically Endangered
                              </p>
                            </div>
                          </Accordion>
                    </div>                                                                                                  
                </div>

            </div>            
        );
    }
}

export default AxiosCallC;