import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { Action } from 'actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import ArticleBody from 'components/article/article-body';

import styles from './Article.scss';

import PropTypes from 'prop-types';

class Article extends Component {

	static getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const slug = query.slug;
		console.log('#####SLUG', slug);
		Action.fetchArticle(slug);
		return {};
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

const mapStateToProps = state => {
	return {
		article: state.article
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchArticle(slug) {
			return dispatch(Action.fetchArticle(slug));
		},
	};
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(withRouter(Article));
