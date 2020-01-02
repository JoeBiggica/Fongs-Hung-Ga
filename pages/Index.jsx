import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';

import GlobalStyles from 'styles/styles.scss';

class Index extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	constructor(props) {
		super(props);

		this.banner_buttons = [
			{
				text: 'Resume',
				url: '/resume',
			},
			{
				text: 'Projects',
				url: '/projects',
			},
			{
				text: 'Contact',
				url: '/contact',
			},
		];
	}

	// toggle = () => {
	// 	const { toggleTap } = this.props
	// 	toggleTap()
	// }

	// increment = () => {
	// 	const { incrementCount } = this.props
	// 	incrementCount()
	// }

	// decrement = () => {
	// 	const { decrementCount } = this.props
	// 	decrementCount()
	// }

	render() {
		return (
			<>
				<Header />
				<section>
					<HeroBanner 
						title='Web engineer specializing in front-end development and modern frameworks'
						buttons={this.banner_buttons}
						button_border
					/>
				</section>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		tap: state.tap,
		count: state.count
	}
}

const mapDispatchToProps = dispatch => {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);
