import React, { Component } from 'react';
import axios from 'axios';

class AxiosCallD extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call Post Request',
            name:'',
        }       
    } 

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
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
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-6">
                    <div className="contentBlock">
                        <h2>First Name</h2>                        
                        <form onSubmit={this.handleSubmit}>
                            <label>Person Name: </label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} />                           
                            <button type="submit" className="btn btn-primary btn-sm">Add</button>
                        </form>
                    </div>                                                                                                  
                </div>

            </div>            
        );
    }
}

export default AxiosCallD;