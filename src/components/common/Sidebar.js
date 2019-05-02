import React from 'react';
import {FaLeanpub, FaBullhorn, FaGlobe, FaGavel, FaUmbrella, FaWpforms } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';

class Sidebar extends React.Component {
	render() {
		const sidemenu = [
			//{path: '/', label: 'Home', icon:<FaHome/>},
			{path: '/Document', label: 'Document', icon:<FaLeanpub/>},
			{path: '/LifeCycle', label: 'LifeCycle', icon:<FaBullhorn/>},
			{path: '/Stateless', label: 'Stateless', icon:<FaGavel/>},
			{path: '/AjaxCall', label: 'AjaxCall', icon:<FaGlobe/>},
			{path: '/AxiosCallA', label: 'AxiosCall A', icon:<FaUmbrella/>},
			{path: '/AxiosCallB', label: 'AxiosCall B', icon:<FaUmbrella/>},
			{path: '/AxiosCallC', label: 'AxiosCall C', icon:<FaUmbrella/>},
			{path: '/AxiosCallD', label: 'AxiosCall D', icon:<FaUmbrella/>},
			{path: '/UseJson', label: 'UseJson', icon:<FaUmbrella/>},			
			{path: '/FormValid', label: 'FormValid', icon:<FaWpforms/>},
			{path: '/FormValidation', label: 'FormValidation', icon:<FaWpforms/>},
			{path: '/Hook', label: 'Hook', icon:<FaWpforms/>},
			{path: '/Tabs', label: 'Tabs', icon:<FaWpforms/>}
						
		];
		return (
			<div className='sidebar'>
               <div className="sideNav">
	                <ul>
	                	{sidemenu.map(e => <li key={e.path}><Link to={e.path}>{e.icon} {e.label}</Link></li>)}
	                </ul>
               </div>
            </div>
		)
	}
}

export default withRouter(Sidebar)