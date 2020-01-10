import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';

import styles from './Classes.scss';

import PropTypes from 'prop-types';

class Classes extends Component {
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
				<HeroBanner 
					className={styles('herobanner')}
					title='Classes' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://lh3.googleusercontent.com/f_3Yx4hv_8yowGDlC1QM9e0SjlKvWFQ51wgrAqL8TRAAo532EOkopjbFCqer6RILCyMJhURG9JIktkdzy7CwsW4B4fJKmIoBpn2PHyL1D3V-mQin11U4h_yZp2oQ5YndABBDJu39v3ui6iJpx41xUn1aEerngKLuTzUyTJHaHQ4RJOaMPq5sKCC1HcGm9kMHJR3XoReNYr6GFGp5wlAhgw6aOdq03Rv2xpAeCPw-94u2s9-a3stA88EbTpeAY-Ew_QA_YQrLrAq3_68FqNDxzlfsVbz0-2bRHLKfIpnSMr9GHfJmbQJQh0gBc_px6YYD41_eldazdRXl8sALw_v4btsQkT_eZ8Xtdq--JUB3r5E01j_cKDE4vFS_DT_TIVzW2yAk4mt81HTiubsJeGkHcG8ImS7ADNU7HxYEr0SABqeZIm0QApyOJrOr6lHx2U3s2M35O5qjHNeJwi7LK0SfML1hiZ5Ngj0SdU5RF0xwHXrpIXNJB1XsGTPR3DIWsFumXL1M4QhmsUMUyk1lc--nOiNLPTOC4LOUepY63tqWLiB3ekHvyHo8JATr1O8LSerHvRdc3XciZWKN_d9ESBNjdKYQvaopq8eL0uoppeOrkdJoIV8wZi-Fd4N1j2sbmwmOgw3yx1yqjDwaBUrHwUZHihRYc5eGXjKF5FKr4L_1rguXbhhlCScwszg=w1996-h1496-no'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.HALF} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout>
					<PageHeader 
						title='Classes'
					/>
					<div className={styles('content')} />
				</Layout>
			</>
		)
	}
}

export default withRouter(Classes);
