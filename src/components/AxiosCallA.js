import React, { Component } from 'react';
import axios from 'axios';

class AxiosCallA extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call',
            persons:[],
            name:'',
            id:''
        }       
    }

      

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          });
    } 
    
    handleChangeA = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmitA = event => {
        event.preventDefault();

        const user = {
            name : this.state.name
        }

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
        .then(res => {
            console.log(res);
            console.log(res.data);

        })
    }

    handleChangeB = event => {
        this.setState({id:event.target.value});
    }

    handleSubmitB = event => {
        event.preventDefault();       
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    
    render(){       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Get Name</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Get UserName</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.username}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Get Email</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.email}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Get Address</h2>
                        <ul className="DocsListA">
                        { this.state.persons.map(person => <li key={person.id}>{person.address.street}, {person.address.city}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>
                <div className="clearfix"></div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>Post Name</h2>
                        <form onSubmit={this.handleSubmitA}>
                            <label>Person Name:</label>
                            <input type="text" className="form-control" onChange={this.handleChangeA}/>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>                       
                    </div>                                                                                                  
                </div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>Delete ID</h2>
                        <form onSubmit={this.handleSubmitB}>
                            <label>Person ID:</label>
                            <input type="text" className="form-control" onChange={this.handleChangeB}/>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>                       
                    </div>                                                                                                  
                </div>
            </div>            
        );
    }
}

export default AxiosCallA;