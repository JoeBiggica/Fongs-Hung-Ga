import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import Article from 'components/article';
import about_article from 'static/about_article.json';

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
				<HeroBanner 
					className={styles('herobanner')}
					title='About' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/fongs-doyers-pose.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.HALF} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout>
					<PageHeader 
						className={styles('page-header')}
						title='Who We Are'
					/>
					<Article 
						className={styles('article')} 
						article_data={about_article} 
					/>
				</Layout>
			</>
		)
	}
}

export default withRouter(About);
