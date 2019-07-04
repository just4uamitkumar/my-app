import React, { Component } from 'react';
import { Prompt} from 'react-router-dom';
//https://alligator.io/react/axios-react/
//import DatePicker from "react-datepicker"; 
//import "react-datepicker/dist/react-datepicker.css";

class FormValid extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'Form Validation',
            isActive:false,
            fields: {},
            errors: {}
        }       
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields['name']){
            formIsValid ='false';
            errors['name'] = 'name cannot be empty';
        }

        if(typeof fields['name'] !== 'undefined'){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Enter Only letters in the name";
             }
             
             if(fields["name"].length < 3){
                formIsValid = false;
                errors["name"] = "Enter a Valid name";
            }
        }        

        //Phone
        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Please provide your contact number";
        }

        if(typeof fields["phone"] !== "undefined"){
            if(!fields["phone"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["phone"] = "Enter Only numbers in the contact number";
            }
            
            if(fields["phone"].length !== 10){
                formIsValid = false;
                errors["phone"] = "Enter 10 digit mobile number";
            }
        }

        //Date of Birth
        if(!fields['birthdate']){
            formIsValid = false;
            errors['birthdate'] = 'Please Enter Date of Birth'
        }

        //Designation
        if(!fields['design']){
            formIsValid = false;
            errors['design'] = 'Please Enter designation'
        }

        this.setState({errors: errors});
        return formIsValid;        
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
           // this.submitModal(); 
            alert("Form Filled successfully.");          
        }
        else{
           alert("Please fill the required fields.");          
        }
    }

    componentWillUnmount() {
        alert('Do you want to change the page');
        console.log('Sayonara!');
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});       
    }
    
    render(){
      
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-4">
                    <div className="contentBlock">
                        <h2>Form Element</h2>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <Prompt
                                when={!!this.state.name}
                                message="Are you sure you want to leave?"
                            />
                            <div className="form-group" >
                                <label>Name</label>
                                <input type="text" ref="name" 
                                    placeholder="Enter Name" 
                                    onChange={this.handleChange.bind(this, "name")}
                                    value={this.state.fields["name"] || ''}
                                    className="form-control"
                                />
                                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            </div>
                            <div className="form-group" >
                                <label>Phone</label>
                                <input type="text" ref="phone" 
                                    placeholder="Enter Contact No." 
                                    onChange={this.handleChange.bind(this, "phone")}
                                    value={this.state.fields["phone"] || ''}
                                    className="form-control"
                                />
                                <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                            </div>
                            <div className="form-group" >
                                <label>Date Of Birth</label>
                                <input type="text" ref="birthdate" 
                                    placeholder="Enter Date of Birth" 
                                    onChange={this.handleChange.bind(this, "birthdate")}
                                    value={this.state.fields["birthdate"] || ''}
                                    className="form-control"
                                />
                                <span style={{color: "red"}}>{this.state.errors["birthdate"]}</span>
                            </div>
                            <div className="form-group" >
                                <label>Designation</label>                                
                                 <select onChange={this.handleChange.bind(this, 'design')}
                                    value={this.state.fields['design'] || ''}
                                    className="form-control">
                                        <option value="-1">Select your Designation</option>
                                        <option value="1">Data Entry Operator</option>
                                        <option value="2">PHP Developer</option>
                                        <option value="3">HTML Developer</option>
                                        <option value="4">DotNet Developer</option>
                                </select>                              
                                <span style={{color: "red"}}>{this.state.errors["design"]}</span>
                            </div>
                            <div className="form-group text-right">
                                <button type="reset" className="btn btn-warning">
                                    Reset
                                </button>
                                <button type="submit" className="btn btn-primary">
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