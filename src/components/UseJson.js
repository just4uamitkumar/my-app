import React, { Component } from 'react';
import UserData from './user4.json';

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
                            { datas.map((e, index) => <li key={index + 1}> {(index) + 1} : {e.firstname}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

               <div className="col-3">
                    <div className="contentBlock">
                        <h2>Last Name</h2>                        
                        <ul className="DocsListA">
                            { datas.map((e, index) => <li key={index}>{e.lastname}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Experience</h2>                        
                        <ul className="DocsListA">
                            { datas.map((e, index) => <li key={index}>{e.experience}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Occupation</h2>                        
                        <ul className="DocsListA">
                            { datas.map((e, index) => <li key={index}>{e.occupatoin}</li>)}
                        </ul>
                    </div>                                                                                                  
                </div>
            </div>            
        );
    }
}

export default UseJson;