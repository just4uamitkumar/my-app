import React, { Component } from 'react';
import TeamData from './team.json';
import { FaTrash, FaPrint } from 'react-icons/fa';
import axios from 'axios';
import Modal from 'react-modal';

const submitModal = {
    content : {
      top  : '50%', padding: '10px', left : '50%', right : 'auto',
      bottom : 'auto', marginRight : '-50%',  transform : 'translate(-50%, -50%)',
      width : '470px'}
  };

const deleteRow = {
    content : {
        top  : '50%', padding: '10px', left : '50%', right : 'auto',
        bottom : 'auto', marginRight : '-50%',  transform : 'translate(-50%, -50%)',
        width : '470px'}   
}
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

class FormValidation extends Component{ 
    constructor(){
        super();
         this.state = {
          title:'Form Validation 2',
           fields: {},
           errors: {},
           datas: TeamData,
          // birthDate: new Date()
       }  
       
       //this.handleChange = this.handleChange.bind(this);
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

   componentWillMount(){
        Modal.setAppElement('body');
    }

    submitModal = (e) =>{
        //e.preventDefault()
        this.setState({
            isActive:!this.state.isActive
        });       
    }

    closeModal = (e) =>{
        e.preventDefault()
        this.setState({
            isActive:!this.state.isActive
        })
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

    AddTeam(e){
        e.preventDefault();
        const {datas} = this.state;

        this.setState({
            isActive:!this.state.isActive
        });

        axios.post('/TeamData', { datas })
        .then((result) => {
            const datas = result.datas;
            this.setState({ datas });
        });
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});       
    }
    
    
    deleteRowModal = (e) =>{
        //e.preventDefault()
        this.setState({
            isActiveA:!this.state.isActiveA
        });  
    }

    closeModalA = (e) =>{
        e.preventDefault()
        this.setState({
            isActiveA:!this.state.isActiveA
        })
    }

    deleteRow= (index, e) => {
        this.setState({
            isActiveA:!this.state.isActiveA
        });
        //const teamDel = Object.assign([], this.state.datas);
        //teamDel.splice(index, 1);
        //this.setState({datas:teamDel});

        const teamDel = this.state.datas.filter(data => data.id !== index );        
        this.setState({datas:teamDel});
        //console.log(copyemps)
    }
    
    render(){
        //const { datas } = this.state 
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>
                
                <div className="col-12">
                    <div className="contentBlock">
                        <h2>Form Element</h2>                       
                        <form name="contactform" onSubmit= {this.formFilled.bind(this)}>
                            
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

                            <div className="clearfix"></div>

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
                        <p>{this.state.fields["name"]}</p> 
                                                 
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
                                        <th>City</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {
                                        this.state.datas.map(row =>
                                            <tr key={row.id} id={row.id}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.dob}</td>
                                                <td>{row.designation}</td>
                                                <td>{row.city}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteRowModal}>
                                                    <FaTrash/> Delete
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-sm">
                                                     <FaPrint/> Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="contentBlock">
                        <h2>Data 2</h2>
                        <div className="table-responsive">
                         <div>{JSON.stringify(this.state.datas)}</div>
                            
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal}
                style={submitModal} >
                    <div className="modalHeader">
                        <h4>Form Filled successfully</h4>
                        <button type="submit" onClick={this.closeModal} className="closeModal">X</button>                 
                    </div>                    
                    <div className="modalBody">
                        <h5>You have filled following details :</h5>         
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Name :</th>
                                    <td>{this.state.fields["name"]}</td>
                                </tr>
                                <tr>
                                    <th>Email :</th>
                                    <td>{this.state.fields["email"]}</td>
                                </tr>
                                <tr>
                                    <th>Contact No.:</th>
                                    <td>{this.state.fields["phone"]}</td>
                                </tr>
                                <tr>
                                    <th>Date of Birth :</th>
                                    <td>{this.state.fields["dob"]}</td>
                                </tr>
                                <tr>
                                    <th>Designation :</th>
                                    <td>{this.state.fields["design"]}</td>
                                </tr>
                                <tr>
                                    <th>City :</th>
                                    <td>{this.state.fields["city"]}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5>Do you want to add these details in the table below ? </h5>
                    </div>
                    <div className="modalFooter text-right">
                        <button type="button" className="btn btn-danger" onClick={this.closeModal}>
                            <FaTrash/> No
                        </button>
                       <button type="button" className="btn btn-primary" onClick={this.AddTeam}>
                                <FaPrint/> Yes
                        </button>
                    </div>
                </Modal>

                <Modal isOpen={this.state.isActiveA} onRequestClose={this.closeModal}
                style={deleteRow} >
                    <div className="modalHeader">
                        <h4>Delete Row</h4>
                        <button type="submit" onClick={this.closeModalA} className="closeModal">X</button>                 
                    </div>                    
                    <div className="modalBody">
                        <h5>Are you sure want to remove this row?</h5>
                    </div>
                    <div className="modalFooter text-right">
                        <button type="button" className="btn btn-danger" onClick={this.closeModalA}>
                            <FaTrash/> No
                        </button>
                       <button type="button" className="btn btn-primary" onClick={this.deleteRow}>
                            <FaPrint/> Yes
                        </button>
                    </div>
                </Modal>
            </div>        
        );
    }
}

export default FormValidation;