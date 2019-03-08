import React, { Component } from 'react';
import { FaFolder, FaFlask, FaGavel, FaGlobe } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './App.css';
import Home from './Home';
import Document from './Document';
////import Stateless from './Stateless';
//import LifeCycle from './LifeCycle';
//import AjaxCall from './AjaxCall';
import {BrowserRouter as Router,  Switch, Route, Link } from 'react-router-dom';


class List extends Component{
    render(){
        return(
            <li>
                <a href="/" onClick={this.props.toggleClass} 
                    className={this.props.condition ? 'active' : ''}>
                    {this.props.detail}
                </a>
            </li>
        )
    }
}

class Nav extends Component{
    render(){
        return(
            <li>
                <a href="/">{this.props.detail.icon} {this.props.detail.name}</a>
            </li>
        )
    }
}

class Sidebar extends Component{ 
    constructor(props){        
        super(props);

        this.toggleClass = this.toggleClass.bind(this);

        this.state = {
            condition: true,
            
            links : ['Documents', 'Stateless', 'LifeCycle Method', 'Ajax Calling', 'Stateless1'],
            navs : [
                {
                    name:'Documents A',
                    icon:'<FaFolder />'
                }, 
                {
                    name:'Stateless A',
                    icon:'<FaFlask/>'
                },
                {
                    name:'LifeCycle Method A',
                    icon:'<FaGavel/>'
                },
                {
                    name:'Ajax Calling A',
                    icon:'<FaGlobe/>'
                },
                {
                    name:'Stateless B',
                    icon:'<FaFolder/>'
                }           
            ],
        }        
    }
    
    toggleClass(e){
        e.preventDefualt();
        this.setState(state => ({
            condition: !state.condition
        }));
    }

   

    render(){
        return(
            <div className='sidebar'>
               <div className="sideNav">
                    <ul>
                        {
                            this.state.links.map(function(link){
                                return <List detail={link} key={link} />
                            })
                        }                        
                    </ul>                                      
               </div>

               <div className="sideNav">
                    <ul>
                        {
                            this.state.navs.map((nav, index) => {
                                return <Nav 
                                    detail={nav}
                                    key={index}
                                    index={index}
                                />
                            })
                        }                        
                    </ul>                    
               </div>

               <Router>
                    <div>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/Document'}>Document</Link></li>
                        </ul>                       
                    </div>                                              
                </Router>
              
            </div>            
        );
    }
}

export default Sidebar;