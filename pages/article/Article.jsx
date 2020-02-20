import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
import fetch from 'isomorphic-unfetch'
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleBody from 'components/article/article-body';

import styles from './Article.scss';

import PropTypes from 'prop-types';

class Article extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const slug = query.slug;

		const article_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}.json`)
		const article_json = await article_res.json()
		console.log('#########', article_json);
		if (article_json) {
			return {
				article: article_json.article
			};
		}
	}

	static propTypes = {
		router: PropTypes.object,
		article: PropTypes.object
	}

	render() {
		const {
			router,
			article
		} = this.props;

		console.log('ARTICLE', article)
		return (
			<>
				<Header router={router} />
				<Layout>
					<PageHeader 
						className={styles('page-header')}
						title='ARTICLE TEST'
					/>
				</Layout>
			</>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		article: state.article
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchArticle(slug) {
// 			return dispatch(Action.fetchArticle(slug));
// 		},
// 	};
// };

export default withRouter(Article);
