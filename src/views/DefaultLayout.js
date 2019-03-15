import React from 'react';
import { withRouter } from 'react-router-dom';

import { Header, Sidebar, Home, Document, LifeCycle, Stateless, AjaxCall, AxiosCallA } from './../components'

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
			case '/': pageContent = <Home />
			break;

			case '/Document': pageContent = <Document />
			break;

			case '/LifeCycle': pageContent = <LifeCycle />
			break;

			case '/Stateless': pageContent = <Stateless />
			break;

			case '/AjaxCall' : pageContent = <AjaxCall />
			break;

			case '/AxiosCallA' : pageContent = <AxiosCallA />
			break;

			case `/test/${match.params.id}`: pageContent = <Stateless />
			break;

			default: break;
		}

		const { condition } = this.state;

		return (
			<div className={condition ? "wrapper" : "wrapper toggleNav"}>
				<Header
					toggleMenu={(condition) => this.toggleMenu(condition)}
					condition={condition}
				/>
				<Sidebar />
				{pageContent}
			</div>
		)
	}
}

export default withRouter(DefaultLayout)