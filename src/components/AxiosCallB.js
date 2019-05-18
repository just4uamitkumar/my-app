import React, { Component } from 'react';
import Autocomplete from "./Autocomplete";

class AxiosCallB extends Component{

    constructor(){
        super()
        this.state = {
            title : 'Axios Call'
        }
    } 
    

    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>React Autocomplete Demo</h2> 
                      <p>Start typing and experience the autocomplete wizardry!</p>
                      <Autocomplete
                        suggestions={[
                          "Alligator",
                          "Bask",
                          "Crocodilian",
                          "Death Roll",
                          "Eggs",
                          "Jaws",
                          "Reptile",
                          "Solitary",
                          "Tail",
                          "Wetlands"
                        ]}
                      />                      
                        
                    </div>                                                                                                  
                </div>
            </div>            
        );
    }
}

export default AxiosCallB;