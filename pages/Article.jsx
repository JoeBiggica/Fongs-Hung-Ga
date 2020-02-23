import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
/* import fetch from 'isomorphic-unfetch'; */
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleHeader from 'components/article/article-header';
import ArticleBody from 'components/article/article-body';

import styles from './Article.scss';

import PropTypes from 'prop-types';

class Article extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const slug = query.slug;

		if (typeof(fetch) !== 'undefinded') {
			const article_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}/article-data.json`);
			const article_json = await article_res.json();

			if (article_json) {
				return {
					article: article_json.article
				};
			}
		}

		return {};
		
	}

	static propTypes = {
		router: PropTypes.object,
		article: PropTypes.object
	}

	static defaultProps = {
		article: {}
	}

	render() {
		const {
			router,
			article
		} = this.props;

		const header = article.header;
		const body = article.body;

		console.log('article', article);

		return (
			<>
				<Header router={router} />
				<Layout className={styles('container')}>
					{header && 
						<ArticleHeader
							className={styles('article-header')}
							title={header.title}
							byline={header.byline}
							primary_asset={header.primary_asset}
						/>
					}
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

export default withRouter(Article);
