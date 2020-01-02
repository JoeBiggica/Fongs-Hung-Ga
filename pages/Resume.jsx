import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';

import GlobalStyles from 'styles/styles.scss';

class Resume extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}
	render() {
		return (
			<div />
		)
	}
}

export default Resume;
