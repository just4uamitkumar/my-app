import React, { Component } from 'react';
import ResultComp from './ResultComp';
import KeyPad from './KeyPad';

class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            result: "",
            Title:'Calculator'
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        try{
            this.setState({
                result:(eval(this.state.result) || "" ) + ""                 
            })
        } catch(e) {
            this.setState({
                result:'error'
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    result = () => {
        this.setState({
            result:""
        })
    }

    backspace = () => {
        this.setState({
            result:this.state.result.slice(0, -1)
        })
    } 
    
    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>
                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Calculator</h2>
                        <div className="calculatorBody">
                            <ResultComp result={this.state.result}/>
                            <KeyPad onClick={this.onClick}/>
                        </div>                                                
                    </div>
                </div>               
            </div>            
        );
    }
}

export default Calculator;