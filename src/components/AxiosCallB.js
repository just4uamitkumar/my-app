import React, { Component } from 'react';
//import axios from 'axios';
import UserData from './user4.json';

class AxiosCallB extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call Local JSON',
            datas: UserData.users,
            UserData: []
        }       
    } 

    UNSAFE_componentDidMount() {
        // TODO
    }

    componentDidMount () {
        let { datas } = this.state
        setTimeout(() => {
            datas[0].firstname = 'Amit'
            datas[0].lastname = 'P2'
            this.setState({datas})
        }, 5000)
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
                        <ul>
                            { datas.map(e => <li key={e.id}>{e.firstname}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Last Name</h2>                        
                        <ul>
                            { datas.map(e => <li key={e.id}>{e.lastname}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Experience</h2>                        
                        <ul>
                            { datas.map(e => <li key={e.id}>{e.experience}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Occupation</h2>                        
                        <ul>
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
                                                <td></td>
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

export default AxiosCallB;