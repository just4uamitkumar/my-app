import React, { Component } from 'react';
import {FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import UseArray from './subComp/UseArray';

class UIFuncA extends Component{ 
    constructor(){
        super();
        this.state = {        
            title : 'Scroll Elements',
            techs:['Angular', 'ReactJS', 'Veu JS', 'Ember JS', 'Electron JS'],
            tech:'',
            teams:[],
            selectedTeam: "",
            validationError: "",
            count:0,
            posXA:0,
            posXB:660
        }

        this.stateUp = this.stateUp.bind(this)
        this.stateDown = this.stateDown.bind(this)
        this.moveLeftA = this.moveLeftA.bind(this)  
        this.moveRightA = this.moveRightA.bind(this)
        this.moveLeftB = this.moveLeftB.bind(this)  
        this.moveRightB = this.moveRightB.bind(this)     
    }

    stateUp(){     
       this.setState(prevState => {
           return{
            count:prevState.count + 1
           }           
       })
    }

    stateDown(){
        this.setState(prevState => {
            return{
                count:prevState.count - 1
            }
        })
     }     

    handleChange(event) {
        this.setState({value: event.target.value});        
    }

    moveRightA(){
        this.state.posXA === 360 ? alert('You have moved enough to right') :
        this.setState(prevState => {
            return{
                posXA:prevState.posXA + 30
            }
        })
    }

    moveLeftA(){
        this.state.posXA === 0 ? alert('You have moved enough to left') :
        this.setState(prevState => {
            return{
                posXA:prevState.posXA - 30 
            }
        })
    }

    moveRightB(){
        this.state.posXB === 660 ? alert('You have moved enough to right') :
        this.setState(prevState => {
            return{
                posXB:prevState.posXB + 30
            }
        })
    }

    moveLeftB(){
        this.state.posXB === 330 ? alert('You have moved enough to left') :
        this.setState(prevState => {
            return{
                posXB:prevState.posXB - 30 
            }
        })
    }

    
componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        return response.json();
      })
      .then(data => {
        let teamsFromApi = data.map(team => { return {value: team.name, display: team.name} })
        this.setState({ teams: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi) });
      }).catch(error => {
        console.log(error);
      });
  }
 

    render(){        
        const {count, posXA, posXB} = this.state
        return(
            <div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="contentBlock clearfix">
                            <h2>Using Array</h2>                            
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-primary" onClick={this.stateDown}>
                                        <FaAngleDown/>
                                    </button>
                                </div>
                                <input type="text" className="form-control" 
                                    onChange={this.handleChange}
                                    value={this.state.techs[count]} placeholder="Username" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" onClick={this.stateUp}>
                                        <FaAngleUp/>
                                    </button>
                                </div>                                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="contentBlock clearfix">
                            <h2>Using Array into Select Dropdown</h2>
                            <select className="form-control"
                                value={this.state.selectedTeam}
                                onChange={(e) => this.setState({selectedTeam:e.target.value, 
                                validationError:e.target.value === '' ? 'You must select your faviourite team' : ''})}
                            >
                                {this.state.teams.map((x) => 
                                    <option key={x.value} value={x.value}>{x.display}</option>
                                )}
                            </select>

                             <div className="text-center">
                                <h3>{this.state.validationError} {this.state.selectedTeam}</h3>
                            </div>
                            
                        </div>
                       
                    </div>

                    <div className="col-3">
                        <div className="contentBlock clearfix">
                            <h2>Using Array into Select Dropdown</h2>
                            <select className="form-control"
                                value={this.state.tech}
                                onChange={(e) => this.setState({tech:e.target.value})}
                            >
                                {this.state.techs.map((x) => 
                                    <option key={x} value={x}>{x}</option>
                                )}
                            </select>

                             <div className="text-center">
                                <h3>{this.state.tech}</h3>
                            </div>                            
                        </div>                      
                    </div>

                    <div className="col-6">
                        <div className="contentBlock clearfix">
                            <h2>Distance between two points :  {posXB - posXA}</h2>                           
                            <div className="rangeSlider">
                                <div className="movingPoint first" style={{left:posXA}}>{posXA}</div>
                                <div className="movingPoint second" style={{left:posXB}}>{posXB}</div>
                            </div>

                            <div className="col-12 spaceAround">
                                <button className="btn btn-primary" onClick={this.moveLeftA}><FaAngleLeft/></button>
                                <button className="btn btn-primary" onClick={this.moveRightA}><FaAngleRight/></button>
                                <p>Click Left or Right arrow to move circle points</p>
                                <button className="btn btn-primary" onClick={this.moveLeftB}><FaAngleLeft/></button>
                                <button className="btn btn-primary" onClick={this.moveRightB}><FaAngleRight/></button>                                    
                            </div>                            
                        </div>
                    </div>
                </div>
                {/*End row div */}
            </div>
                
        );
    }
}

export default UIFuncA;