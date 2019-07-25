import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

//const {A, B, C, D, E } = 0;

class CashDispatch extends Component{
    constructor(){
        super()
        this.state = {
            title : 'ATM Cash Dispatch',
            amount:'',
            total:0               
        }

        this.disPatchCash = this.disPatchCash.bind(this)
   }   

   updateState(e){
     this.setState({amount: e.target.value})
   }

   disPatchCash(){
       const { amount} = this.state;
       const x = amount;

      
       while(x > 0){
           if(x >= 2000){
            this.setState({
                A: Math.trunc(amount/2000)               
            });
           }
       }
        console.log(amount)
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
                            value={this.state.amount}  onChange={this.updateState.bind(this)} />
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