import React, { Component } from 'react';
import Conditional from './Conditional';
import ConditionalB from './ConditionalB';

class ConditionalRender extends Component{

    constructor(props){
        super(props )        
        this.state = {
           title : 'Conditional Render' ,
           titleA : 'If else statement',
           titleB : 'Conditional Rendering',
           isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }   

    render(){       
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-4">
                    <div className="contentBlock clearfix">
                        <h2>{this.state.titleA} </h2>
                        <div>
                            <Conditional isLoading={this.state.isLoading} />
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="contentBlock clearfix">
                        <h2>{this.state.titleB} </h2>
                        <div>
                            {this.state.isLoading ? <h1>Loading...</h1> :  <ConditionalB />}                           
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default ConditionalRender;