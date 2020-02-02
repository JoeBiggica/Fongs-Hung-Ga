import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import class_schedule from 'static/class_schedule.json';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';
import Table from 'components/table';

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

	constructor(props) {
		super(props);

		this.classes_table = class_schedule;
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

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/fongs-doyers-pose.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.HALF} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout>
					<PageHeader 
						className={styles('page-header')}
						title='Class Schedules'
					/>
					<Table 
						title='Staten Island, New York'
						data={this.classes_table}
					/>
				</Layout>
			</>
		)
	}
}

export default withRouter(Classes);
