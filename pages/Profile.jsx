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

import styles from './Profile.scss';

import PropTypes from 'prop-types';

class Profile extends Component {

	static async getInitialProps ({ store, req, res, query }) {
		const isServer = !!req
		const name = query.name;
		const name_shaped = name.replace('sifu-', '');
		
		if (typeof(fetch) !== 'undefinded') {
			const profile_res = await fetch(`https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/profiles/${name_shaped}/profile-data.json`);
			const profile_json = await profile_res.json();
			console.log(profile_json);
			if (profile_json) {
				return {
					profile: profile_json.profile
				};
			}
		}

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

		const name = profile.name;
		const image = profile.image;
		const body = profile.body;
		const contact = profile.contact;

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
					{contact && 
						<>
							<PageHeader 
								className={styles('page-header')}
								title='Contact'
							/>
							<div className={styles('contact-container')}>
								{contact.phone && 
									<div>
										<span className={styles('label')}>Phone:</span>
										<a href={`tel:${contact.phone}`}>{contact.phone}</a>
									</div>
								}
								{contact.email && 
									<div>
										<span className={styles('label')}>Email:</span>
										<a href={`mailto:${contact.email}`}>{contact.email}</a>
									</div>
								}
							</div>
						</>
					}
					
				</Layout>
			</>
		)
	}
}

export default withRouter(Profile);
