import React, { Component } from 'react';
import axios from 'axios';

class AxiosCallA extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call Get Request',
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

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Name</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>UserName</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.username}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Email</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.email}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Address</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.address.street}, {person.address.city}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

            </div>            
        );
    }
}

export default AxiosCallA;