import React, { Component } from 'react';
import { FaTrash, FaPrint } from 'react-icons/fa';
import axios from 'axios';

class AxiosCallC extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call',
            persons:[]
        }

        this.deleteEvent = this.deleteEvent.bind(this);
    }

    componentDidMount() {
        axios.get(`./team.json`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(persons)
          });
          
    }

    

    deleteEvent = event => {
       alert(this);
        
        //const delPerson = this.state.persons.filter(person => person.id !== index );
        //this.setState({persons:delPerson});
        //console.log(delPerson);

        event.preventDefault();

        // axios.delete(`./team.json/${this.state.id}`)
        // .then(res => {
        //     const persons = res.data;
        //     this.setState({ persons });
        //     console.log(persons)
        // })
    }
    
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

               <div className="col-12">
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
                                                <td>{person.dob}</td>
                                                <td>{person.designation}</td>                                               
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm" 
                                                    onClick={this.state.deleteEvent}>
                                                    <FaTrash/> Delete
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-sm">
                                                     <FaPrint/> Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default AxiosCallC;