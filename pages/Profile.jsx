import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
import fetch from 'isomorphic-unfetch';
import Header from 'components/header';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleHeader from 'components/article/article-header';
import ArticleBody from 'components/article/article-body';

import mock_profile from 'static/mock-profile.json';

import styles from './Profile.scss';

import PropTypes from 'prop-types';

class Profile extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const name = query.name;

		// if (typeof(fetch) !== 'undefinded') {
		// 	const article_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}/article-data.json`);
		// 	const article_json = await article_res.json();

		// 	if (article_json) {
		// 		return {
		// 			article: article_json.article
		// 		};
		// 	}
		// }

		return {};
		
	}

	static propTypes = {
		router: PropTypes.object,
		profile: PropTypes.object
	}

	static defaultProps = {
		profile: {}
	}

	render() {
		const {
			router,
			profile
		} = this.props;

		const name = mock_profile.profile.name;
		const image = mock_profile.profile.image;
		const body = mock_profile.profile.body;

		const image_styles = {
			backgroundImage: `url(${image})`
		}

		return (
			<>
				<Header router={router} />
				<Layout 
					className={styles('container')} 
					padding
				>
					<div className={styles('header-container')}>
						<div className={styles('picture')} style={image_styles}></div>
						<h1 className={styles('name')}>{name}</h1>
					</div>
					<PageHeader 
						className={styles('page-header')}
						title='Bio'
					/>
					{body && 
						<ArticleBody 
							className={styles('article-body')}
							items={body.items} 
						/> 
					}
				</Layout>
			</>
		)
	}
}

export default withRouter(Profile);
