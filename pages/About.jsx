import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';

import styles from './About.scss';

import PropTypes from 'prop-types';

class About extends Component {
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
				<Layout>
					<PageHeader 
						title='About'
					/>
					<div className={styles('content')} />
				</Layout>
			</>
		)
	}
}

export default withRouter(About);
