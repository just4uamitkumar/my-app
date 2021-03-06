import React from 'react';
import { withRouter } from 'react-router-dom';

import { Header, Sidebar, Home, Document, LifeCycle, Stateless, AjaxCall, 
	AxiosCallA, AxiosCallC, UseJson, FormValid, 
	FormValidation, Login, CashDispatch, ImageGalleryA, JokeContent, ExternalContent,
	ConditionalRender, FormElement, MemeGenerator, UIFuncA, ToolTip, Calculator,
	Game} from './../components';

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
	    })
	   );
	}

	componentWillUnmount(){
		
	}

	render() {

		const { location, match } = this.props;
		let pageContent = '';

		switch(location.pathname) {
			case '/': pageContent = <Home />
			break;

			case '/Login': pageContent = <Login />
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

			case '/AxiosCallC' : pageContent = <AxiosCallC />
			break;
			
			case '/UseJson' : pageContent = <UseJson />
			break;			

			case '/FormValid' : pageContent = <FormValid />
			break;

			case '/FormElement' : pageContent = <FormElement />
			break;

			case '/FormValidation' : pageContent = <FormValidation />
			break;			

			case '/CashDispatch' : pageContent = <CashDispatch />
			break;
			
			case '/ImageGalleryA' : pageContent = <ImageGalleryA />
			break;
			
			case '/JokeContent' : pageContent = <JokeContent />
			break;

			case '/ExternalContent' : pageContent = <ExternalContent />
			break;

			case '/ConditionalRender' : pageContent = <ConditionalRender />
			break;

			case '/MemeGenerator' : pageContent = <MemeGenerator />
			break;

			case '/UIFuncA' : pageContent = <UIFuncA />
			break;

			case '/ToolTip' : pageContent = <ToolTip />
			break;

			case '/Calculator' : pageContent = <Calculator />
			break;

			case '/Game' : pageContent = <Game />
			break;
			
			case `/test/${match.params.id}`: pageContent = <Home />
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