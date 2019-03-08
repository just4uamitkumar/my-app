import React, { Component } from 'react';
//import './index.css';
import Header from './Header';
//import Sidebar from './Sidebar';
import Home from './Home';
import Document from './Document';
import {BrowserRouter as Router,  Switch, Route, Link } from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <div className='sidebar'>
               <div className="sideNav">
                    <Router>                   
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/Document'}>Document</Link></li>
                        </ul>                                    
                    </Router>                    
               </div>
            </div>            
        );
    }
}

class Wrapper extends Component{
    render(){
        return(
            <div className="wrapper">
                <Header />
                <Sidebar/>
                <Router>                                        
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path="/Document" component={Document} />
                    </Switch>                                 
                </Router>
            </div>
            
        );
    }
}

export default Wrapper;