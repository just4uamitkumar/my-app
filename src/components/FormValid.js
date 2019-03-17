import React, { Component } from 'react';
import { Prompt} from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';

//https://alligator.io/react/axios-react/


class FormValid extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'Form Validation',
            isChanged:false,
            isActive:false,
            name:''    
        }       
    }

    handleChange = event => {
        this.setState({name:event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post('https://jsonplaceholder.typicode.com/users', {user})
            .then(res =>{
                console.log(res);
                console.log(res.data);
            })
    }
   

    componentWillMount(){
        Modal.setAppElement('body');
    }

    toggleModal = (e) =>{
        e.preventDefault()
        this.setState({
            isActive:!this.state.isActive
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
                        <h2>Form Element</h2>
                        <form onSubmit={this.handleSubmit}>
                            <Prompt
                                when={this.state.isChanged}
                                message="Are you sure you want to leave?"
                            />
                            <div className="form-group" >
                                <label>Name</label>
                                <input type="text" onChange={this.handleChange} className="form-control"/>
                            </div>
                            <div className="form-group" >
                                <label>Phone</label>
                                <input type="text" onChange={() => {
                                    this.setState({
                                        isChanged:true
                                    })
                                }} className="form-control"/>
                            </div>
                            <div className="form-group" >
                                <label>Date Of Birth</label>
                                <input type="text" onChange={() => {
                                    this.setState({
                                        isChanged:true
                                    })
                                }} className="form-control"/>
                            </div>
                            <div className="form-group" >
                                <label>Designation</label>
                                <input type="text" onChange={() => {
                                    this.setState({
                                        isChanged:true
                                    })
                                }} className="form-control"/>
                            </div>
                            <div className="form-group text-right">
                                <button type="reset"  onClick={this.toggleModal}  className="btn btn-warning">
                                    Reset
                                </button>
                                <button type="submit"className="btn btn-primary">
                                    Submit
                                </button>
                               
                            </div>
                        </form>
                        
                    </div>
               </div>   

               <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div className="modalHeader">
                       <h4>Save Entry</h4>
                       <button type="submit" onClick={this.toggleModal}            className="closeModal">X</button>                 
                    </div>
                    
                    <div className="modalBody">
                        Hide Modal
                    </div>

                    <div className="modalFooter">
                    <button type="submit" onClick={this.toggleModal}            className="btn btn-danger right">Close</button>
                    </div>
               </Modal>                                                        
            </div>        
        );
    }
}

export default FormValid;