import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from './../../logo.svg';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import './../../App.css';

class Header extends React.Component {
	constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);  
        this.state = {
            current_time: new Date().toLocaleTimeString() 
        }
    }

    toggleMenu(e) {
        e.preventDefault();
        this.props.toggleMenu(!this.state.condition)
    }
    
    componentWillMount() {
        setInterval(()=> {
          let current_time = new Date().toLocaleTimeString() 
            this.setState({current_time})
        }, 1000);
      }
    
    render(){
        const { condition } = this.props;
        return(
            <header>
                <div className="logo">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /> <span>React Port</span></Link>
                </div>
                <div className="headerRight">
                    <Link to="/" onClick={this.toggleMenu}
                        className={condition ? 'toggleMenu' : 'toggleMenu active'}><FaBars/>
                    </Link>

                    <Link to="/Login" onClick={this.logOut} className="logOut" ><FaPowerOff/></Link>

                    <div className="CurrentTime"> {this.state.current_time}</div>                    
                                        
                </div>
            </header>            
        );
    }
}

export default withRouter(Header)