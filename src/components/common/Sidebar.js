import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Sidebar extends React.Component {
	render() {
		const sidemenu = [
			{path: '/', label: 'Home'},
			{path: '/document', label: 'Document'}
		];
		return (
			<div className='sidebar'>
               <div className="sideNav">
	                <ul>
	                	{sidemenu.map(e => <li key={e.path}><Link to={e.path}>{e.label}</Link></li>)}
	                </ul>
               </div>
            </div>
		)
	}
}

export default withRouter(Sidebar)