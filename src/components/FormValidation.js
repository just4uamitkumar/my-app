import React, { Component } from 'react';
import axios from 'axios';
//import empList from './empList.json'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

class FormValidation extends Component{ 
    constructor(){
        super();
         this.state = {
          title:'Form Validation 2',
           fields: {},
           errors: {},
           employees:[]
       }
    }

    componentDidMount() {
        axios.get(`./empList.json`)
          .then(res => {
            const employees = res.data;
            this.setState({ employees });
          });       
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

        //Date of Birth
        if(!fields["city"]){
            formIsValid = false;
            errors["city"] = "Please provide your city";
        } 

      this.setState({errors: errors});
      return formIsValid;
   }
   

    formFilled(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.submitModal();            
        }
        else{
           alert("Please fill the required fields.")
        }
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
                
                <div className="col-6">
                    <div className="contentBlock">
                        <h2>Form Element</h2>                       
                        <form name="contactform" onSubmit= {this.formFilled.bind(this)}>
                            
                            <div className="form-group">
                                <div className="row">
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
                            </div>

                            <div className="form-group">
                                <div className="row">
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
                            </div>
                            

                            <div className="form-group">
                                <div className="row">
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

                                    <div className="col-6">
                                        <label>City</label>                                    
                                        <select onChange={this.handleChange.bind(this, 'city')}
                                            value={this.state.fields['city'] || ''}
                                            className="form-control"
                                        >
                                            <option value="-1">Select your city</option>
                                            <option value="dl">Delhi</option>
                                            <option value="jai">Jaipur</option>
                                            <option value="mn">Manali</option>
                                            <option value="mt">Mathura</option>
                                        </select>
                                        <span style={{color: "red"}}>{this.state.errors["city"]}</span>
                                    </div>
                                </div>                                                                 
                            </div>
                           

                            <div className="form-group text-right">
                                <div className="col-12">
                                    <button type="reset" className="btn btn-warning">
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

             
               <div className="contentBlock">
               <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date of Birth</th>
                                <th>Designation</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(emp =>
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.dob}</td>
                                    <td>{emp.designation}</td>
                                    <td>{emp.city}</td>
                                    <td></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
               </div>
            </div>        
        );
    }
}

export default FormValidation;