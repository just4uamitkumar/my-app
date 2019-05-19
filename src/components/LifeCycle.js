import React, { Component } from 'react';
import Modal from 'react-modal';
import {FaEyeDropper } from 'react-icons/fa';

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
      colorNames :['Color A', 'Color B', 'Color C', 'Color D', 'Color E', 'Color F', 'Color G', 'Color H', 'Color I'],
      dataColors : ['green', 'red', 'dodgerBlue', 'pink', 'yellow', 'orange', 'slateBlue', 'violet', 'DarkBlue'],
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

  pickModal = () =>{
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
  
  getColor = (index) => {
    var dataColors = this.state.dataColors;
    var dataColor = dataColors[index];
    //alert(dataColor);
    console.log(dataColor)

    this.setState({
      isActive:!this.state.isActive,
      colorvalue: dataColor
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

        <div className="col-4">
          <div className="contentBlock clearfix">        
            <h2>Closure Example <button className="btn btn-sm btn-warning right disable">Clear All</button></h2>

            <div className="colorTable clearfix">                        
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Color</th>
                      <th>Color Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.colorNames.map((colorName, index) => {
                        return <tr key={colorName}>
                          <td>
                              <div className="color" data-color={this.state.colorvalue}></div>
                              <button type="button" className="btn pickColorBtn" onClick={() => this.pickModal(index)}><FaEyeDropper/></button>                             
                            </td>                      
                            <td>{colorName}</td>
                        </tr>;
                      })
                    }                  
                  </tbody>
                </table>
              </div>
              <button type="button" className="btn btn-primary right disable">
                Finish
              </button>
            </div>  
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
                  {
                    this.state.dataColors.map((dataColor, index) => {
                      return <li key={dataColor}  onClick={() => this.getColor(index)} >
                        <span data-color={dataColor}></span>
                      </li>
                    })
                  }
                </ul>
            </div>                    
        </Modal>

      </div>            
    );
  }
}

export default LifeCycle;