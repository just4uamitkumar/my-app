import React, { Component } from 'react';
import axios from 'axios';

class AxiosCallA extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call',
            persons:[]
        }       
    } 

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          });
      }     
    
    render(){       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-4">
                    <div className="contentBlock">
                        <h2>Get Request</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>
            </div>            
        );
    }
}

export default AxiosCallA;