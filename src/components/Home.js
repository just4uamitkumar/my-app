import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import Tabs from './Tabs';

class HomeList extends React.Component{
    render(){        
        return (
            <li><span>{this.props.detail}</span></li>
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
           HomeLinks : ['Home List 1', 'Home List 2', 'Home List 3', 'Home List 4', 'Home List 5']         
        }        
        this.clearInput = this.clearInput.bind(this)
    }

    updateState(e){
        this.setState({data: e.target.value})
    }

    clearInput(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myText).focus();
    }

    updateCount(){
        this.setState({count: this.state.count + 1})
    }
    
	render() {
		return (
			<div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="contentBlock clearfix">
                    <h2>Map Array </h2>
                    <p>We have an array values in a list.</p>
                    <ul className="HomeLink">{
                        this.state.HomeLinks.map(function(HomeLink){
                            return <HomeList detail={HomeLink} key={HomeLink} />
                        })
                    }
                    </ul>
                </div>

                <div className="clearfix col-4">
                    <div className="contentBlock">
                        <h2>Using Forms</h2>
                        <div className="form-group">
                            <input className="form-control" type="text" value={this.state.data}
                            onChange={this.updateState.bind(this)} ref='myText'/>
                            <button className="btn btn-primary btn-sm" onClick={this.clearInput}>
                                Clear
                            </button>
                            <p>{this.state.data}</p>
                        </div>
                        <input className="form-control" type="text" value={this.state.data}
                        readOnly/>                       
                        <p>{this.state.data.split('')}</p>
                        <input className="form-control" type="text" value={this.state.data.split('').reverse()}
                        readOnly/>
                        <p>{this.state.data.split('').reverse()}</p>
                        
                    </div>                    
                </div>

                <div className="col-4">
                    <div className="contentBlock clearfix">
                        <h2>Set State</h2>
                        <p className="m-10">Value : {this.state.count}</p>
                        <button className="btn-primary btn btn-sm" 
                            onClick={this.updateCount.bind(this)}>Count
                        </button>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="col-8">
                    <div className="contentBlock clearfix">
                        <h2>Tab</h2>
                        <Tabs>
                          <div label="Tab 1">
                            See ya later, <em>Alligator</em>!
                          </div>
                          <div label="Tab 2">
                            After 'while, <em>Crocodile</em>!
                          </div>
                          <div label="Tab 3">
                            Nothing to see here, this tab is <em>extinct</em>!
                          </div>
                        </Tabs>
                    </div>
                </div>               
            </div>
		)
	}
}

export default withRouter(Home)