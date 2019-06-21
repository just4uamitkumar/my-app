import React, { Component } from 'react';

//const {A, B, C, D, E } = 0;

class CashDispatch extends Component{
    constructor(){
        super()
        this.state = {
            title : 'ATM Cash Dispatch',
            amount:''            
        }
   }   

    updateState(e){       
        const amount = e.target.value;
        const x = amount;
    }

    disPatchCash(e) {
      //console.log({this.state.amount})      
    }

    render(){
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Welcome to ATM</h2>
                        <div className="form-group">
                            <label>Enter the Amount</label>
                            <input type="number" className="form-control" 
                            value={this.state.amount}  onChange={this.updateState.bind(this)} ref='myText' />
                            <button type="button" className="btn btn-primary btnBlock" 
                            onClick={this.disPatchCash}>Get Money</button>  
                        </div>                    
                    </div>                                                                                                  
                </div>

                <div className="col-3">
                    <div className="contentBlock">
                        <h2>Currency Count</h2>
                        <div className="cashResult">
                            <p><strong>You will get following amount</strong></p>
                            <ul>
                                <li><span>0</span> notes of Rs 1</li>
                                <li><span>0</span> notes of Rs 2</li>
                                <li><span>0</span> notes of Rs 5</li>
                                <li><span>0</span> notes of Rs 10</li>
                                <li><span>0</span> notes of Rs 20</li>
                                <li><span>0</span> notes of Rs 50</li>
                                <li><span>0</span> notes of Rs 100</li>
                                <li><span>{this.state.C}</span> notes of Rs 200</li>
                                <li><span>{this.state.B}</span> notes of Rs 500</li>
                                <li><span>{this.state.A}</span> notes of Rs 2000</li>
                            </ul>
                            <div className="totalCount"><strong>Total notes dispensed: <span className="text-danger" id="noteCount">{}</span></strong></div>
                        </div>                    
                    </div>                                                                                                  
                </div>

            </div>
        )
    }
}

export default CashDispatch;