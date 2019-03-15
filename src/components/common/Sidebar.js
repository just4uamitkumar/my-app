import React from 'react';
import { FaHome, FaLeanpub, FaBullhorn, FaGlobe, FaGavel } from 'react-icons/fa';
import { withRouter, Link } from 'react-router-dom';

class Sidebar extends React.Component {
	render() {
		const sidemenu = [
			{path: '/', label: 'Home', icon:<FaHome/>},
			{path: '/Document', label: 'Document', icon:<FaLeanpub/>},
			{path: '/LifeCycle', label: 'LifeCycle', icon:<FaBullhorn/>},
			{path: '/Stateless', label: 'Stateless', icon:<FaGavel/>},
			{path: '/AjaxCall', label: 'AjaxCall', icon:<FaGlobe/>}
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