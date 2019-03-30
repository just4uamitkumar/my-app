import React, { Component } from 'react';
import UserData from './user4.json';
import { FaTrash, FaPrint, FaPlus, FaPlane } from 'react-icons/fa';
import Modal from 'react-modal';

const addModal = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '300px'
    }
  };


class UseJson extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Call Local JSON',
            datas: UserData.users,
            //UserData: []
        }      
        
    }
    
    

    UNSAFE_componentDidMount() {
        // TODO
    }

    componentDidMount () {
        //let { datas } = this.state
        // setTimeout(() => {
        //     datas[0].firstname = 'Amit'
        //     datas[0].lastname = 'P2'
        //     this.setState({datas})
        // }, 5000)
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }

    addRecord = (e) =>{
        e.preventDefault()
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

    // handleSubmit = event => {
    //     event.preventDefault(event);

    //     const user = {
    //         firstname: this.state.firstname,
    //         lastname:this.state.lastname,
    //         dob: this.state.dob,
    //         experience:this.state.experience,
    //         occupatoin: this.state.occupatoin
    //     };       
    // }
    
    render(){
        const { datas } = this.state
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>First Name</h2>                        
                        <ul className="DocsListA">
                            { datas.map(e => <li key={e.id}>{e.id} : {e.firstname}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

               <div className="col-3">
                    <div className="contentBlock">
                        <h2>Last Name</h2>                        
                        <ul className="DocsListA">
                            { datas.map(e => <li key={e.id}>{e.lastname}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Experience</h2>                        
                        <ul className="DocsListA">
                            { datas.map(e => <li key={e.id}>{e.experience}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Occupation</h2>                        
                        <ul className="DocsListA">
                            { datas.map(e => <li key={e.id}>{e.occupatoin}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="clearfix"></div>

                <div className="col-12">
                    <div className="contentBlock">
                        <h2>Data Table</h2>
                        <div className="formAdd">
                            <form className="formHorizontal" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control"/>
                                    <input type="text" className="form-control"/> 
                                    <input type="text" className="form-control"/>
                                    <input type="text" className="form-control"/> 
                                    <input type="text" className="form-control"/>
                                    <button type="reset" className="btn btn-warning btn-sm"
                                        >
                                        <FaPlane/> Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary btn-sm">
                                        <FaPlus/> Add Record
                                    </button>

                                </div>                                
                            </form>
                        </div>
                        <div className="tableResponsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Date of Birth</th>
                                        <th>Experience</th>
                                        <th>Occupation</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datas.map(row =>
                                            <tr key={row.id}>
                                                <td>{row.id}</td>
                                                <td>{row.firstname}</td>
                                                <td>{row.lastname}</td>
                                                <td>{row.dob}</td>
                                                <td>{row.experience}</td>
                                                <td>{row.occupatoin}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm">
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

                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal}
                style={addModal} >
                    <div className="modalHeader">
                       <h4>Add Record</h4>
                       <button type="submit" onClick={this.closeModal}  className="closeModal">X</button>                 
                    </div>
                    
                    <div className="modalBody">
                       <h4>Are you sure you want to add this data to your table?</h4>
                    </div>

                    <div className="modalFooter text-right">
                        <button type="submit" onClick={this.closeModal}  className="btn btn-danger">No</button>
                        <button type="submit" onClick={this.addRecord}  className="btn btn-primary">Yes</button>
                    </div>                     
               </Modal>

            </div>            
        );
    }
}

export default UseJson;