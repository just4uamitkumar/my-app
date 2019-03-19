import React, { Component } from 'react';
import axios from 'axios';


class AxiosCallB extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Axios Call Local JSON',
            datas:[]
        }       
    } 

    componentDidMount() {
        axios.get('../public/user4.json')
          .then(res => {
            const datas = res.data;
            this.setState({ datas });
        });

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
                        <ul className="DocsListA">
                        { this.state.datas.map(data => <li key={data.users.id}>{data.users.firstname}</li>)}
                        </ul> 
                    </div>                                                                                                  
                </div>

            </div>            
        );
    }
}

export default AxiosCallB;