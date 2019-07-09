import React, { Component } from 'react';

class ToolTip extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'ToolTip'
        }
        //this.stateUp = this.stateUp.bind(this)          
    }

    showTip() {
       alert('')
    }

    

    render(){        
      
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                
                <div className="col-12">
                    <div className="contentBlock">
                        <div className="tipDiv">
                            <ul>
                                <li>
                                    <a href="/"
                                        onMouseOver={this.showTip} onMouseUp={this.showTip}
                                        data-placement="top" data-title="Tooltip to Top"
                                    >Tooltip to Top
                                    </a>
                                </li>
                                <li><a href="/" data-placement="right" data-title="Tooltip to Right">Tooltip to Right</a></li>
                                <li><a href="/" data-placement="bottom" data-title="Tooltip to Bottom">Tooltip to Bottom</a></li>      
                                <li><a href="/" data-placement="left" data-title="Tooltip to Left">Tooltip to Left</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                   

                    


            </div>
                
        );
    }
}

export default ToolTip;