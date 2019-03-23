import React, { Component } from 'react';

class CoinTable extends Component{ 
    constructor(){
        super(props)
    }
    
    render(){       
        return(
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
                            props.UserData.map(row =>
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
        );
    }
}

export default CoinTable;