import React from 'react';
import { withRouter } from 'react-router-dom';

import { Header, Sidebar, Home, Document } from './../components'

class DefaultLayout extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            condition: true,
        }
    }

	toggleMenu(condition) {
		this.setState(state => ({
      condition: !state.condition
    }));
	}

	render() {
		const { location, match } = this.props;
		let pageContent = '';
		switch(location.pathname) {
			case '/':
				pageContent = <Home />
				break;
			case '/document':
				pageContent = <Document />
				break;
			case `/test/${match.params.id}`:
				pageContent = <Document />
				break;
			default: break;
		}

		const { condition } = this.state;

		return (
			<div className={condition ? "wrapper toggleMenu" : "wrapper toggleMenu active"}>
				<Header
					toggleMenu={(condition) => this.toggleMenu(condition)}
					condition={condition}
				/>
				<Sidebar />
				{pageContent}
				{/*<Footer />*/}
			</div>
		)
	}
}

export default withRouter(DefaultLayout)