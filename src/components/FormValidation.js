import React, { Component } from 'react';
import TeamData from './team.json';
import { FaTrash, FaPrint } from 'react-icons/fa';
import axios from 'axios';

//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

class FormValidation extends Component{ 
    constructor(){
        super();
         this.state = {
          title:'Form Validation 2',
           fields: {},
           errors: {},
           datas: TeamData
       }      
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Name Cannot be empty";
        }       

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Enter Only letters in the name";
           }
        }        

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Email Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
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
    if(!fields["dob"]){
        formIsValid = false;
        errors["dob"] = "Please provide your date of birth";
    }

    //Designation
    if(!fields["design"]){
        formIsValid = false;
        errors["design"] = "Please provide your designation";
    }

    if(typeof fields["design"] !== "undefined"){
        if(!fields["design"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["design"] = "Enter Only letters in the Designation";
        }
    }          

      this.setState({errors: errors});
      return formIsValid;
   }

    contactSubmit(e){
        e.preventDefault();
        const { datas } = this.state;

        if(this.handleValidation()){
           

            axios.post('TeamData', { datas })
            .then((result) => {
              const datas = result.datas;
                this.setState({ datas });
            });
           //alert("Form submitted successfully");
        }else{
           alert("Please fill the required fields.")
        }
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
       // this.setState({ [e.target.name]: e.target.value });
    }    

    deleteEvent= (index, e) => {
        const teamDel = Object.assign([], this.state.datas);
        teamDel.splice(index, 1);
        this.setState({datas:teamDel});
    }

    
    render(){
        const { datas } = this.state     
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>
                <div className="col-12">
                    <div className="contentBlock">
                        <h2>Form Element</h2>
                        <form name="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                            
                            <div className="form-group" >
                                <div className="col-6">
                                    <label>Name</label>
                                    <input type="text" ref="name" 
                                        placeholder="Enter Name" 
                                        onChange={this.handleChange.bind(this, "name")}
                                        value={this.state.fields["name"] || ''}
                                        className="form-control"
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                </div>

                                <div className="col-6">
                                    <label>Email</label>
                                    <input type="text" ref="mail" 
                                        placeholder="Enter Email"
                                        onChange={this.handleChange.bind(this, "email")}
                                        value={this.state.fields["email"] || ''}
                                        className="form-control"
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                </div>                                
                            </div>

                            <div className="form-group" >
                                <div className="col-6">
                                    <label>Phone</label>
                                    <input type="text" ref="phone"
                                        placeholder="Enter Phone"
                                        onChange={this.handleChange.bind(this, 'phone')}
                                        value={this.state.fields['phone'] || ''}
                                        className="form-control"
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                </div>

                                <div className="col-6">
                                    <label>Date Of Birth</label>
                                    <input type="text"
                                        placeholder="Date of Birth"
                                        onChange={this.handleChange.bind(this, 'dob')}
                                        value={this.state.fields['dob'] || ''}
                                        className="form-control"
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["dob"]}</span>
                                </div>
                            </div>
                            

                            <div className="form-group" >
                                <div className="col-6">
                                    <label>Designation</label>
                                    <input type="text" 
                                        placeholder="Designation"
                                        onChange={this.handleChange.bind(this, 'design')}
                                        value={this.state.fields['design'] || ''}
                                        className="form-control"
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["design"]}</span>
                                </div>                                
                            </div>

                            <div className="clearfix"></div>

                            <div className="form-group text-right">
                                <div className="col-12">
                                    <button type="reset"  className="btn btn-warning">
                                        Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>                                                               
                            </div>
                        </form>                        
                    </div>
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
                                        datas.map(row =>
                                            <tr key={row.id} id={row.id}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.dob}</td>
                                                <td>{row.designation}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm"  onClick={this.deleteEvent}>
                                                    <FaTrash/> Delete
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-sm">
                                                     <FaPrint/> Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}

export default FormValidation;