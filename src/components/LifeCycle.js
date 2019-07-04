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
      colorNames :['Color A', 'Color B', 'Color C', 'Color D', 'Color E', 'Color F', 'Color G', 'Color H', 'Color I'],
      dataColors : ['green', 'red', 'dodgerBlue', 'pink', 'yellow', 'orange', 'slateBlue', 'violet', 'DarkBlue']
      //isColorVis : false
     }    
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }  

  pickModal = (index) =>{
    this.setState(prevState => {
      return {
        isActive:!prevState.isActive,
        index
      }
    });      
  }

  closeModal = (e) =>{
    e.preventDefault()
    this.setState({
      isActive:!this.state.isActive
    })
  }
  
  getColor = (dataColor) => {
    this.setState({
      isActive:!this.state.isActive,
      ['colorvalue' + this.state.index]: dataColor
    });  
  }  
    
  render(){

   
       
    return(
      <div className="content">
        <div className="pageHeader">
          <h1>{this.state.title} </h1>
        </div>

        <div className="col-3">
          <div className="contentBlock clearfix">        
            <h2>Closure Example <button className="btn btn-sm btn-warning right" disabled>Clear All</button></h2>

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
                              <div className="color" data-color={this.state['colorvalue' + index]}></div>
                              <button type="button" className="btn pickColorBtn"
                               onClick={() => this.pickModal(index)}><FaEyeDropper/></button>                             
                            </td>                      
                            <td>{colorName}</td>
                        </tr>;
                      })
                    }                  
                  </tbody>
                </table>
              </div>
              <button type="button" className="btn btn-primary right" disabled>
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
                    this.state.dataColors.map((dataColor) => {
                      return <li key={dataColor} onClick={() => this.getColor(dataColor)} >
                        <span data-color={dataColor} 
                          className={['colorvalue' + this.state.index] ? '' : 'disable'} >
                        </span>
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