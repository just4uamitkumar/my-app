import React, { Component } from 'react';


class LifeCycle extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Life Cycle Method',
        }
    }

    incCount = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    shouldComponentUpdate(){
        if(this.state.count > 10){
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
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>
                <div className="contentBlock">
                    <h2>Document Type</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>
                        {this.state.count}
                        <button onClick={this.incCount}>Increment</button>                                              
                </div>
            </div>            
        );
    }
}

export default LifeCycle;