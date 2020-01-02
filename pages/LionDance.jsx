import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'components/header';

class LionDance extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}
	render() {
		return (
			<>
			<Header />
			<div>
				LionDance
			</div>
			</>
		)
	}
}

export default LionDance;
