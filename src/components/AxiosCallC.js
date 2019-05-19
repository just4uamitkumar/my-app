import React, { Component } from 'react';
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
                        <h2>Axios Call C</h2>                        
                       
                    </div>                                                                                                  
                </div>

            </div>            
        );
    }
}

export default AxiosCallC;