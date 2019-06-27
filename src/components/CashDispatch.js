import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//const {A, B, C, D, E } = 0;

class CashDispatch extends Component{
    constructor(){
        super()
        this.state = {
            title : 'ATM Cash Dispatch',
            amount:'',
            A:0, B:0, C:0, D:0,  E:0, F:0, G:0, H:0, I:0, J:0,
            total:0               
        }

        this.disPatchCash = this.disPatchCash.bind(this)
   }   

   updateState(e){
     this.setState({amount: e.target.value})
   }

    disPatchCash() {
        //const {amount } = this.state

        //var x = amount;
        //var abc = x;
        
        // this.setState({
        //     A : Math.trunc(x/2000),
        //     x : x - (Math.trunc(x/2000) * 2000),

        //     B : Math.trunc(x/500),
        //     x : x - (Math.trunc(x/500) * 500),

        //     C : Math.trunc(x/200),
        //     x : x - (Math.trunc(x/200) * 200),

        //     D : Math.trunc(x/100),
        //     x : x - (Math.trunc(x/100) * 100),

        //     E : Math.trunc(x/50),
        //     x : x - (Math.trunc(x/50) * 50),

        //     F : Math.trunc(x/20),
        //     x : x - (Math.trunc(x/20) * 20),

        //     G : Math.trunc(x/10),
        //     x : x - (Math.trunc(x/10) * 10),

        //     H : Math.trunc(x/5),
        //     x : x - (Math.trunc(x/5) * 5),

        //     I : Math.trunc(x/2),
        //     x : x - (Math.trunc(x/2) * 2),

        //     J : Math.trunc(x/1),
        //     x : x - (Math.trunc(x/1) * 1)            
            
        // });

        ReactDOM.findDOMNode(this.refs.myText).focus(); 
        
        
    }

    render(){
        //const {amount} = this.state

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
                             disabled={!this.state.amount}
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
                                <li><span>{this.state.J}</span> notes of Rs 1</li>
                                <li><span>{this.state.I}</span> notes of Rs 2</li>
                                <li><span>{this.state.H}</span> notes of Rs 5</li>
                                <li><span>{this.state.G}</span> notes of Rs 10</li>
                                <li><span>{this.state.FE}</span> notes of Rs 20</li>
                                <li><span>{this.state.E}</span> notes of Rs 50</li>
                                <li><span>{this.state.D}</span> notes of Rs 100</li>
                                <li><span>{this.state.C}</span> notes of Rs 200</li>
                                <li><span>{this.state.B}</span> notes of Rs 500</li>
                                <li><span>{this.state.A}</span> notes of Rs 2000</li>
                            </ul>
                            <div className="totalCount"><strong>Total notes dispensed: <span className="text-danger" id="noteCount">{this.state.total}</span></strong></div>
                        </div>                    
                    </div>                                                                                                  
                </div>

            </div>
        )
    }
}

export default CashDispatch;