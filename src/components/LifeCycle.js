import React, { Component } from 'react';
import Modal from 'react-modal';

const colorModal = {
  content : {
    top  : '50%', padding: '10px', left : '50%', right : 'auto',
    bottom : 'auto', marginRight : '-50%',  transform : 'translate(-50%, -50%)',
    width : '270px'}
};

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

  componentWillMount(){
    Modal.setAppElement('body');
  }  

  pickModal = (e) =>{
    e.preventDefault()
    this.setState({
      isActive:!this.state.isActive
    });       
  }

  closeModal = (e) =>{
    e.preventDefault()
    this.setState({
      isActive:!this.state.isActive
    })
  }  
    
  render(){
    return(
      <div className="content">
        <div className="pageHeader">
          <h1>{this.state.title} </h1>
        </div>

        <div className="contentBlock">
          <h2>Set State</h2>                  
          {this.state.count} &nbsp;
          <button className="btn btn-primary btn-sm" onClick={this.incCount}>Increment</button>                                              
        </div>

        <div className="contentBlock">
          <h2>Closure Example <button className="btn btn-sm btn-warning right disable">Clear All</button></h2>

          <div className="colorTable clearfix">                        
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th width="16%">Color</th>
                    <th width="17%">Color Name</th>
                    <th width="16%">Color</th>
                    <th width="17%">Color Name</th>
                    <th width="16%">Color</th>
                    <th width="17%">Color Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color A</td>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color B</td>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color C</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color D</td>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color E</td>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color F</td>
                  </tr> 
                  <tr>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color G</td>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color H</td>
                    <td>
                      <div className="color"></div>
                      <button className="btn pickColorBtn" onClick={this.pickModal}>&lt; &gt;</button>
                    </td>                      
                    <td>Color I</td>
                  </tr>                                  
                </tbody>
              </table>
            </div>
            <button type="button" className="btn btn-primary right disable">
              Finish
            </button>
          </div>                                  
        </div>

        <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal}
          style={colorModal} >
            <div className="modalHeader">
              <h4>Add Color</h4>
              <button type="submit" onClick={this.closeModal} className="closeModal">X</button>                 
            </div>
            
            <div className="modalBody">
               <ul className="colorList">
                  <li><span data-color="green"></span></li>
                  <li><span data-color="red"></span></li>
                  <li><span data-color="dodgerBlue"></span></li>
                  <li><span data-color="pink"></span></li>
                  <li><span data-color="yellow"></span></li>
                  <li><span data-color="orange"></span></li>
                  <li><span data-color="slateBlue"></span></li>
                  <li><span data-color="violet"></span></li>
                  <li><span data-color="DarkBlue"></span></li>
                </ul>
            </div>                    
        </Modal>

      </div>            
    );
  }
}

export default LifeCycle;