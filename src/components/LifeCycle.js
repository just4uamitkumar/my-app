import React, { Component } from 'react';


class LifeCycle extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Life Cycle Method',
            count:0
        }
    }

    incCount = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    shouldComponentUpdate(){
        if(this.state.count > 9){
            return false;
        }
        return true;
    }
    
    componentWillMount(){
        console.log('Will Mount');
    }

    componentDidMount(){
        console.log('Mounted');
    } 

    componentWillUnmount() {
        this.isCancelled = true;
    }   
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>
                <div className="contentBlock">
                    <h2>Document Type</h2>
                    
                    {this.state.count} &nbsp;
                        <button className="btn btn-primary btn-sm" onClick={this.incCount}>Increment</button>                                              
                </div>
            </div>            
        );
    }
}

export default LifeCycle;