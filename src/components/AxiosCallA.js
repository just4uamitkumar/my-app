import React, { Component } from 'react';
import axios from 'axios';
import { FaAngleDown } from 'react-icons/fa';

class AxiosCallA extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call',
            persons:[],
            name:'',
            id:''
        } 

        this.onSortB = this.onSortB.bind(this);
        this.onSortC = this.onSortC.bind(this);
        this.onSortD = this.onSortD.bind(this);
        this.onSortE = this.onSortE.bind(this);
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
        const user = { name : this.state.name }

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    handleChangeB = event => { this.setState({id:event.target.value});}

    handleSubmitB = event => {
        event.preventDefault();       
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    onSortB() {
        const reEmps = this.state.persons.map(e => e.name);        
        reEmps.sort();
        console.log(reEmps);        
    }

    onSortC() {
        const reEmps = this.state.persons.map(e => e.username);        
        reEmps.sort();
        console.log(reEmps);        
    }

    onSortD() {
        const reEmps = this.state.persons.map(e => e.email);        
        reEmps.sort();
        console.log(reEmps);        
    }

    onSortE() {
        const reEmps = this.state.persons.map(e => e.address);        
        reEmps.sort();
        console.log(reEmps);        
    }
    
    render(){       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>Get Request</h2>                       
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name
                                        <button type="button" className="btn btn-default btn-sm"
                                            onClick={this.onSortB}><FaAngleDown/>
                                            </button>
                                        </th>
                                        <th>User name
                                            <button type="button" className="btn btn-default btn-sm"
                                            onClick={this.onSortC}><FaAngleDown/>
                                            </button>
                                        </th>
                                        <th>Email
                                        <button type="button" className="btn btn-default btn-sm"
                                            onClick={this.onSortD}><FaAngleDown/>
                                            </button>
                                        </th>
                                        <th>Adress
                                        <button type="button" className="btn btn-default btn-sm"
                                            onClick={this.onSortE}><FaAngleDown/>
                                            </button>
                                        </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.persons.map(person =>

                                    <tr key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.name}</td>
                                        <td>{person.username}</td>
                                        <td>{person.email}</td>
                                        <td>{person.address.street}, {person.address.city}</td>                                        
                                        <td><button className="btn btn-sm btn-danger" >Delete</button></td>
                                    </tr>
                                )}                                    
                                </tbody>
                            </table>
                        </div>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Post Name</h2>
                        <form onSubmit={this.handleSubmitA}>
                            <div className="form-group">
                                <label>Person Name:</label>
                                <input type="text" className="form-control" onChange={this.handleChangeA}/>                                
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>                       
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Delete ID</h2>
                        <form onSubmit={this.handleSubmitB}>
                            <div className="form-group">
                                <label>Person ID:</label>
                                <input type="text" className="form-control" onChange={this.handleChangeB}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>                       
                    </div>                                                                                                  
                </div>
            </div>            
        );
    }
}

export default AxiosCallA;