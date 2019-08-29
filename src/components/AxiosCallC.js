import React, { Component } from 'react';
import { FaTrash, FaPrint } from 'react-icons/fa';
import axios from 'axios';

class AxiosCallC extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            loading:true,      
            title : 'Axios Call',
            persons:[],
            character:{}
        }
    }

    componentDidMount() {
        axios.get(`./team.json`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          });

        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({ loading:false, character:data})
        })         
    }

    deleteEvent () {
        
    }

   

    render(){
        const text = this.state.loading ? 'Loading...' : this.state.character.name;
        const myDate = new Date(this.state.persons.dob);

        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="contentBlock">
                            <h2>Data</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Date of Birth</th>
                                            <th>Designation</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.persons.map(person =>
                                                <tr key={person.id} id={person.id}>
                                                    <td>{person.id}</td>
                                                    <td>{person.name}</td>
                                                    <td>{person.email}</td>
                                                    <td>{person.phone}</td>                                                
                                                    <td>{myDate.getDate()+'-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-'+ myDate.getFullYear()}</td>
                                                    <td>{person.designation}</td>                                               
                                                    <td>
                                                        <button type="button" className="btn btn-danger btn-sm" 
                                                        onClick={this.deleteEvent.bind(this, person.id)}>
                                                        <FaTrash/> Delete </button>
                                                        <button type="button" className="btn btn-warning btn-sm">
                                                        <FaPrint/> Edit </button>
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-4">
                        <div className="contentBlock">
                            <h2>Data</h2>
                            <div>{text}</div>
                        </div>
                    </div> 
                </div>          
            </div>            
        );
    }
}

export default AxiosCallC;