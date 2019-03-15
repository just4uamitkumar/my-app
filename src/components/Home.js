import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class HomeList extends React.Component{
    render(){        
        return (
            <li><a href="javascript:void();">{this.props.detail}</a></li>
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

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('mounted')
    }

    componentWillReceiveProps(){
        console.log('Will recieve Props')
    }

    // shouldComponentUpdate(){
    //     console.log('should component update')
    // }

    componentWillUpdate(){
        console.log('Component will update')
    }

    componentDidUpdate(){
        console.log('Component did update')
    }

	render() {
		return (
			<div className="content">
                <div className="pageHeader">
                    <h1>{this.state.title} </h1>
                </div>

                <div className="contentBlock clearfix">
                    <h2>Map Array </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>

                        <ul className="HomeLink">
                        {
                            this.state.HomeLinks.map(function(HomeLink){
                                return <HomeList detail={HomeLink} key={HomeLink} />
                            })
                        }                            
                        </ul>                    
                    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>                        
                </div>

                <div className="contentBlock clearfix">
                    <h2>Using Forms</h2>
                    <div className="col-4">
                        <input className="form-control" type="text" value={this.state.data}
                        onChange={this.updateState.bind(this)} ref = 'myText'/>
                        <p>{this.state.data}</p>
                    </div>
                    
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={this.clearInput}>
                            Clear
                        </button>
                    </div>
                    <div className="col-4">
                        <input className="form-control" type="text" value={this.state.data}
                        readOnly/>
                        <p>{this.state.data}</p>
                    </div>
                    
                </div>

                <div className="contentBlock clearfix">
                        <h2>Set State</h2>
                        <p className="m-20">Value : {this.state.count}</p>
                        <button className="btn-primary btn" 
                            onClick={this.updateCount.bind(this)}>Count
                        </button>
                </div>
            </div>
		)
	}
}

export default withRouter(Home)