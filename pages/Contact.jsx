import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ContactInfo from 'components/contactinfo';
import Social from 'components/social';
import schools from 'static/schools.json';

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

	renderContactInfo = (school, index) => {
		return <ContactInfo key={`school-${index}`} className={styles('school')} {...school} />;
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
					title='Contact' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/images/lion-dance/lion-dance-banner-cart.png'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout 
					padding 
				>
					<PageHeader 
						className={styles('page-header')}
						title='Schools'
					/>
					<div className={styles('schools-container')}>
						{schools.locations && schools.locations.map(this.renderContactInfo)}
					</div>
					<PageHeader 
						className={styles('page-header')}
						title='Social'
					/>
					<div className={styles['social-buttons']}>
						<Social
							platforms={['facebook', 'instagram', 'email']}
							urls={['https://www.facebook.com/fongslions/', 'https://www.instagram.com/fongslions/', 'mailto:sifu.fong@fonghungga.com']}
							color={Social.Color.BLACK_TO_RED}
						/>
					</div>
				</Layout>
			</>
		)
	}
}

export default withRouter(Contact);
