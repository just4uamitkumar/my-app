import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class SoftApp extends React.Component{
    render(){        
        return (
            <li><span>{this.props.index + 1}-{this.props.detail}</span></li>
        )        
    }
}

class CityApp extends React.Component{
    render(){
        return(
            <li><span>{this.props.index + 1} : {this.props.city}-{this.props.stateName}</span></li>           
        )
    }
}

class Home extends React.Component {
	constructor(props){
        super(props )        
        this.state = {
           title : 'Welcome to React Port',
           data : '',
           count:0,
           softSkills : ['Photoshop', 'PageMaker', 'Illustrator', 'Indesign', 'Quark'],
           CityList : [{city:'Ajmer', stateName:'Rajasthan'}, {city:'Dehradun', stateName:'Uttrakhand'},
           {city:'Agra', stateName:'Uttar Pradesh'}, {city:'Mumbai', stateName:'Maharashtra'}]
           
        }        
        this.clearInput = this.clearInput.bind(this);       
    }

    updateState(e){
        this.setState({data: e.target.value})
    }

    clearInput(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myText).focus();
    }

    incrementCount(){
        //this.setState({count: this.state.count + 1})
        this.setState(prevState => {
            return{
                count:prevState.count + 1
            }
        })
    }

    shouldComponentUpdate(){
        if(this.state.count > 9){
          return false;
        }
        return true;
    }
    
	render() {
		return (
			<div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                    <div className="breadCrumb">
                        <ul>
                            <li>{(window.location.href).replace('http://localhost:3000/', 'Home')}</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="contentBlock clearfix">
                            <h2>Map Array </h2>
                            <p>We have an array values in a list.</p>
                            <div className="m-b-20">
                                <ul className="HomeLink">{
                                    this.state.softSkills.map(function(skill, index){
                                        return <SoftApp detail={skill} key={skill} index={index} />
                                    })
                                }
                                </ul>
                            </div>
                            <div>
                                <ul className="HomeLink">{
                                    this.state.CityList.map((e, index) => {
                                        return <CityApp key={e.city} index={index}
                                        id={e.index} city={e.city} stateName={e.stateName}                                        
                                        />
                                    })
                                }                            
                                </ul>
                            </div>
                        </div>                                        
                    </div>

                    <div className="col-3">
                        <div className="contentBlock">
                            <h2>Using Forms</h2>
                            <div className="form-group clearfix">
                                <input className="form-control" type="text" value={this.state.data}
                                onChange={this.updateState.bind(this)} ref='myText'/>
                                <button className="btn btn-primary btn-sm" onClick={this.clearInput}>
                                    Clear
                                </button>
                                <p>{this.state.data}</p>
                            </div>
                            <input className="form-control" type="text" value={this.state.data.split('')}
                            readOnly />                           
                            <input className="form-control" type="text" value={this.state.data.split('').reverse()}
                            readOnly />                                                      
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="contentBlock clearfix">
                            <h2>Set State</h2>
                            <div className="form-group">
                                <p className="m-10">Value : {this.state.count}</p>
                                <button className="btn-primary btn btn-sm" 
                                    onClick={this.incrementCount.bind(this)}>Count
                                </button>
                            </div>
                            <p>Date validation in FormValid.js </p>
                            <p>Recheck FormValidation and FormElement </p>
                        </div>
                    </div> 
                </div>
                                              
            </div>
		)
	}
}

export default withRouter(Home)