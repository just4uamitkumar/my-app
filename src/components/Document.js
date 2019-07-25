import React, { Component } from 'react';
import Emp from './subComp/emp';
import { FaAngleDown } from 'react-icons/fa';

class DocsList extends Component{
    render(){        
        return (
            <li onClick={ () => {
                this.props.clickHandler(this.props.index);
            }}
            className={this.props.details.completed ? 'completed' : ''}>
                {this.props.details.name}
            </li>
        )        
    }
}

class Document extends Component{ 
    constructor(){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {    
           title : 'Our Documents',
           emps:[{id:101, firstname:'Paul', lastname:'Singh', salary:5000},
               {id:102, firstname:'Sam', lastname:'Kr',  salary:2000},
               {id:103, firstname:'Sid', lastname:'Loco',  salary:2500},
               {id:109, firstname:'John', lastname:'Dingo',  salary:5000},
               {id:105, firstname:'Alice', lastname:'Kim',  salary:4000}],           
           Docs:[{name: 'Document 1', completed:false},
                {name: 'Document 2', completed:false},
                {name: 'Document 3', completed:false},
                {name: 'Document 4', completed:false},
                {name: 'Document 5', completed:false}]           
        } 
        
        this.onSort = this.onSort.bind(this)
    }

    delEmp = (index) => {
        const copyemps = this.state.emps.filter(emp => emp.id !== index );        
        this.setState({emps:copyemps});
        console.log(copyemps)
    }    

    changeStatus(index){ 
        var Docs = this.state.Docs;
        var Doc = Docs[index];
        Doc.completed = !Doc.completed;
        this.setState({
            Docs:Docs
        })
    }

    onSort() {
        const reEmps = this.state.emps.map(e => e.firstname);        
        reEmps.sort();
        console.log(reEmps);        
    }
    
    render(){      
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>
                
                <div className="col-4 clearfix">
                    <div className="contentBlock">
                        <h2>Import Data</h2>                    
                        <table className="table table-spriped">
                            <thead>
                                <tr>
                                    <th>ID 
                                        <button type="button" className="btn btn-default btn-sm">
                                            <FaAngleDown/>
                                        </button>
                                    </th>
                                    <th>First Name
                                        <button type="button" className="btn btn-default btn-sm"
                                         onClick={emp => this.onSort(emp, 'firstname')}>
                                            <FaAngleDown/>
                                        </button>
                                    </th>
                                    <th>Last Name
                                        <button type="button" className="btn btn-default btn-sm">
                                            <FaAngleDown/>
                                        </button>
                                    </th>
                                    <th>Salary
                                        <button type="button" className="btn btn-default btn-sm">
                                            <FaAngleDown/>
                                        </button>
                                    </th>
                                    <th>Action
                                        <button type="button" className="btn btn-default btn-sm">
                                            <FaAngleDown/>
                                        </button>
                                    </th>
                                </tr>                            
                            </thead>
                            <tbody>
                                {
                                    this.state.emps.map((emp) => {
                                        return (
                                        <Emp key={emp.id}
                                            id={emp.id}
                                            salary={emp.salary}
                                            firstname={emp.firstname}
                                            lastname={emp.lastname}
                                            deleteEvent={this.delEmp.bind(this, emp.id)}
                                        >
                                        </Emp>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="col-3 clearfix">
                    <div className="contentBlock">
                        <ul className="DocsList">
                            {
                                this.state.Docs.map((Doc, index) => {
                                    return <DocsList details={Doc} key={Doc.name}
                                    clickHandler={this.changeStatus} index={index} />
                                })
                            }                            
                        </ul>  
                    </div>
                </div>
                
            </div>            
        );
    }
}

export default Document;