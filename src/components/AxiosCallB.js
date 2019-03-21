import React, { Component } from 'react';
import axios from 'axios';
import UserData from './user4.json';

class AxiosCallB extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call Local JSON',
            datas:[],
            UserData:[]
        }       
    } 

    componentDidMount() {
        axios.get('user4.json')
          .then(res => {
            const datas = res.data;
            this.setState({ datas });
        });

        console.log(this.state.datas)
    }   
    
    render(){       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Name</h2>                        
                        {/* <ul>
                            { this.state.persons.map(person => <li>{person.firstname}</li>)}
                        </ul> */}
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.UserData.map(row =>
                                            <tr>
                                                <td>row.id</td>
                                                <td>row.firstname</td>
                                                <td>row.lastname</td>
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