import React, { Component } from 'react';
import UserData from './user4.json';
import { FaPencil, FaTrash, FaPrint } from 'react-icons/fa';


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

            </div>            
        );
    }
}

export default UseJson;