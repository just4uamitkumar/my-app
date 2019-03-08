import React, { Component } from 'react';
import logo from './logo.svg';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import './App.css';



class Header extends Component{ 
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);  
        this.state = {
            condition: true,
            current_time: new Date().toLocaleTimeString() 
        }
    }

    toggleMenu(e) {
        e.preventDefault();
        this.setState(state => ({
            condition: !state.condition
        }));
    }
    
      componentWillMount() {
        setInterval(()=> {
          let current_time = new Date().toLocaleTimeString() 
            this.setState({current_time})
        }, 1000);
      }
    
    render(){      
        return(
            <header>
                <div className="logo">
                    <a href="/"><img src={logo} className="App-logo" alt="logo" />
                    <span>React Port</span></a>
                </div>
                <div className="headerRight">
                    <a href="/" onClick={this.toggleMenu}
                        className={this.state.condition ? 'toggleMenu' : 'toggleMenu active'}><FaBars/>
                    </a>

                    <a href="/Login" onClick={this.logOut} className="logOut" ><FaPowerOff/></a>

                    <div className="CurrentTime"> {this.state.current_time}</div>                    
                                        
                </div>
            </header>            
        );
    }
}

export default Header;