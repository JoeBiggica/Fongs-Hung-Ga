import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';

import styles from './Contact.scss';

import PropTypes from 'prop-types';

class Contact extends Component {
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
						title='Contact'
					/>
					<div className={styles('content')} />
				</Layout>
			</>
		)
	}
}

export default withRouter(Contact);
