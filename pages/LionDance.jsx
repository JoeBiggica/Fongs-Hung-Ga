import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleBody from 'components/article/article-body';
import Button from '/components/button';
import lion_dance_article from 'static/articles/lion_dance_article.json';

import styles from './LionDance.scss';

import PropTypes from 'prop-types';

class LionDance extends Component {
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
					title='Lion Dance' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/three-lions.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout padding >
					<div className={styles('button-container')}>
						<Button
							className={styles('button')}
							text='Request a Lion Dance'
							url='/liondance/request'
							target='_blank'
						/>
					</div>
					<PageHeader 
						className={styles('page-header')}
						title='An Intro to Lion Dance'
					/>
					<ArticleBody 
						className={styles('article')} 
						items={lion_dance_article.items} 
					/>
					<PageHeader 
						className={styles('page-header')}
						title='Our Clients'
					/>
					<div className={styles('clients-container')}>
						<img src='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/client-logos.png' alt='Client Logos' />
					</div>
				</Layout>
			</>
		)
	}
}

export default withRouter(LionDance);
