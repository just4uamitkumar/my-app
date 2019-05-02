import React, { Component } from 'react';
import { Prompt} from 'react-router-dom';
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
                                <button type="reset" onClick={this.toggleModal}  className="btn btn-warning">
                                    Reset
                                </button>
                                <button type="submit"className="btn btn-primary">
                                    Submit
                                </button>                               
                            </div>
                        </form>                        
                    </div>
               </div>                                             
            </div>        
        );
    }
}

export default FormValid;