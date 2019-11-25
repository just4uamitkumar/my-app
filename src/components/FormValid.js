import React, { Component } from 'react';
import { Prompt} from 'react-router-dom';
import uuid from 'uuid';

class FormValid extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'Form Validation',
            isActive:false,
            fields: {},
            errors: {},
            startDate: new Date(),
            members :[{id:uuid(), name:'David', phone:'9268488205', birthdate:'9-11-1984', design:'PHP Developer'},
            {id:uuid(), name:'Bob Zirol', phone:'7485968747', birthdate:'12-21-1982', design:'Data Entry Operator'},
            {id:uuid(), name:'Mark Litchen', phone:'943596742', birthdate:'4-15-1982', design:'HTML Developer'},
            {id:uuid(), name:'Alley Camelot', phone:'528968747', birthdate:'3-08-1985', design:'PHP Developer'},
            {id:uuid(), name:'Johnathan', phone:'9435848805', birthdate:'7-26-1984', design:'DotNet Developer'}]
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
            alert("Form Filled successfully."); 

            const name = document.MyForm.name.value;
            const phone = document.MyForm.phone.value;
            const birthdate = document.MyForm.birthdate.value;
            const design = document.MyForm.design.value;
            if ( name || phone || birthdate || design) {
                this.setState(state => ({
                    members: [...state.members,
                    { id: uuid(), name, phone, birthdate, design }]
                }));
            }
            this.setState({
                fields: {}
            }); 
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

    removeMember(index){
        const filtered = this.state.members.filter(member => member.id !== index )
        this.setState({members:filtered}) 
    }
    
    render(){
      
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                    <div className="breadCrumb">
                        <ul>
                            <li>{(window.location.href).replace('http://localhost:3000/', '')}</li>
                        </ul>
                    </div>
                </div>

                <div className="row">

                    <div className="col-4">
                        <div className="contentBlock">
                            <h2>Form Element</h2>
                            <form name="MyForm" onSubmit={this.handleSubmit.bind(this)}>
                                <Prompt
                                    when={!!this.state.name}
                                    message="Are you sure you want to leave?"
                                />
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input type="text"
                                        placeholder="Enter Name" name="name"
                                        onChange={this.handleChange.bind(this, "name")}
                                        value={this.state.fields["name"] || ''}
                                        className="form-control" />
                                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                </div>
                                <div className="form-group" >
                                    <label>Phone</label>
                                    <input type="text" 
                                        placeholder="Enter Contact No."  name="phone"
                                        onChange={this.handleChange.bind(this, "phone")}
                                        value={this.state.fields["phone"] || ''}
                                        className="form-control" />
                                    <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                </div>

                                <div className="form-group" >
                                    <label>Date Of Birth</label>
                                    <input type="date"
                                        placeholder="Enter Date of Birth"  name="birthdate"                                        
                                        onChange={this.handleChange.bind(this, "birthdate")}
                                        value={this.state.fields["birthdate"] || ''}
                                        className="form-control"    />
                                    <span style={{color: "red"}}>{this.state.errors["birthdate"]}</span>
                                </div>
                                <div className="form-group" >
                                    <label>Designation</label>                                
                                    <select onChange={this.handleChange.bind(this, 'design')}
                                        value={this.state.fields['design'] || ''}
                                        className="form-control"  name="design">
                                            <option value="Select your Designation">Select your Designation</option>
                                            <option value="Data Entry Operator">Data Entry Operator</option>
                                            <option value="PHP Developer">PHP Developer</option>
                                            <option value="HTML Developer">HTML Developer</option>
                                            <option value="DotNet Developer">DotNet Developer</option>
                                    </select>                              
                                    <span style={{color: "red"}}>{this.state.errors["design"]}</span>
                                </div>
                                
                                <div className="form-group text-right">
                                    <button type="reset" className="btn btn-warning"> Reset</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>                               
                                </div>
                            </form>                        
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="contentBlock">
                            <h2>Member List</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Phone No.</th>
                                            <th>Date of Birth</th>
                                            <th>Designation</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {this.state.members.map((e) =>(
                                                <tr key={e.id}>
                                                    <td>{'#'}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.phone}</td>
                                                    <td>{e.birthdate}</td>
                                                    <td>{e.design}</td>
                                                    <td><button className="btn btn-sm btn-danger"
                                                     onClick={this.removeMember.bind(this, e.id)}
                                                    >Delete</button></td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>                        
                    </div>                
                </div>                                      
            </div>        
        );
    }
}

export default FormValid;