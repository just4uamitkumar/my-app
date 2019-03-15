import React, { Component } from 'react';
import Emp from './emp';

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
            count: 0,        
           title : 'Our Documents',
           
           Docs : [
               {
                    name: 'Document 1',
                    completed:false
               },

               {
                    name: 'Document 2',
                    completed:false
                },

                {
                    name: 'Document 3',
                    completed:false
                },

                {
                    name: 'Document 4',
                    completed:false
                },

                {
                    name: 'Document 5',
                    completed:false
                }
           ],

           emps:[
               {id:101, firstname:'Paul', lastname:'Singh', salary:5000},
               {id:102, firstname:'Sam', lastname:'Kr',  salary:2000},
               {id:103, firstname:'Sid', lastname:'Loco',  salary:2500},
               {id:104, firstname:'John', lastname:'Dingo',  salary:5000},
               {id:105, firstname:'Alice', lastname:'Kim',  salary:4000}
           ]
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    delEmp = (index, e) => {
        const copyemps = Object.assign([], this.state.emps);
        copyemps.splice(index, 1);
        this.setState({emps:copyemps});
    }
    
    incrementCount(){
        // this.setState({
        //     count:this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // });

        this.setState((preveState) => {
            return{
                count:preveState.count + 1
            }
        })
    }

    changeStatus(index){
        //event.preventDefault();
        console.log(this.state.Docs[index]);
        var Docs = this.state.Docs;
        var Doc = Docs[index];
        Doc.completed = !Doc.completed;
        this.setState({
            Docs:Docs
        })
    }
    
    render(){
        const {count} = this.state;
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="contentBlock">
                    <h2>Import Data</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                       </p>
                    <table className="table table-spriped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Salary</th>
                                <th>Action</th>
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
                                        deleteEvent={this.delEmp.bind(this, this.id)}
                                    >
                                    </Emp>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

                <div className="contentBlock">
                    {count} <button onClick={this.incrementCount}> Add Number</button>
                </div>

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
        );
    }
}

export default Document;