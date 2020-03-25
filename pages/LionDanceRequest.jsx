import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import Layout from 'components/layout';

import styles from './LionDanceRequest.scss';

import PropTypes from 'prop-types';

class LionDanceRequest extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	render() {
		const {
			router
		} = this.props;

		return (
			<>
				<Header router={router} />
				<Layout padding >
					<iframe 
						src="https://docs.google.com/forms/d/e/1FAIpQLSf4wNUSAepdrgs1SQqxCFdq3xT2jFPXpiobIN4U2S7KSyJfTw/viewform?embedded=true" 
						width="640" 
						height="1302" 
						className={styles('form')}
						frameBorder="0" 
						marginHeight="0" 
						marginWidth="0" 
						scrolling="no">
						Loading…
					</iframe>
				</Layout>
			</>
		)
	}
}

export default withRouter(LionDanceRequest);
