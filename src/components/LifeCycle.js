import React, { Component } from 'react';


class LifeCycle extends Component{ 
    constructor(props){
        super(props);
        this.state = {        
            title : 'Life Cycle Method',
            count:0,
            colorNames :['Color A', 'Color B', 'Color C', 'Color D', 'Color E', 'Color F', 'Color G', 'Color H', 'Color I']
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

                <div className="contentBlock">
                    <h2>Closure Example <button class="btn btn-sm btn-warning right disable">Clear All</button></h2>

                    <div class="colorTable">                        
                        <div class="table-responsive">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>Color</th>
                                  <th>Color Name</th>
                                  <th>Color</th>
                                  <th>Color Name</th>
                                  <th>Color</th>
                                  <th>Color Name</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="color"></div>
                                    <button class="btn pickColorBtn"></button>
                                  </td>                      
                                  <td>Color A</td>
                                </tr>                                 
                              </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-primary disable">
                            Finish
                        </button>
                    </div>                                  
                </div>

            </div>            
        );
    }
}

export default LifeCycle;