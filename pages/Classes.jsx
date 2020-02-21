import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import class_schedule from 'static/class_schedule.json';
import schools from 'static/schools.json';
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

	renderInstructor = (instructor, i) => {
		const name = (i && i !== 0) ? `, ${instructor.name}` : instructor.name
		return (
			<a 
				key={`${instructor.name}`} 
				className={styles('name')} 
				href={`${instructor.url}`}
			>
				{name} 
			</a>
		);
	}

	renderSchool = (school, i) => {
		const {
			head,
			instructors,
			address,
			number,
			email,
			class_schedule
		} = school;

		return (
			<section key={`school-${i}`} className={styles('school')}>
				<h3 className={styles('title')}>{school.address.city}</h3>
				<div className={styles('info-container')}>
					{head &&
						<div className={styles('instructor')}>
							<span className={styles('label')}>Head Instructor</span>
							{this.renderInstructor(head)}
						</div> 
						
					}
					{instructors && 
						<div className={styles('instructor')}>
							<span className={styles('label')}>{instructors.length > 1 ? 'Instructors' : 'Instructor'}</span>
							{instructors.map(this.renderInstructor)}
						</div> 

					}
					{address.street &&
						<a href={address.google_maps_url && address.google_maps_url} target='_blank'>
							<div className={styles('address')}>
								<p>{school.address.street}</p>
								<p>{school.address.city} {school.address.zipcode}</p>
							</div>
						</a>	
					}
					<div className={styles('contact')}>
						{number && <a href={`tel:${number}`}>{number}</a>}
						{email && <a href={`mailto:${email}`}>{email}</a>}
					</div>
				</div>
				{class_schedule &&
					<div className={styles('table-container')}>
						<Table 
							table_data={this.classes_table}
						/>
					</div>
				}
				{!class_schedule && <p className={styles('more-info')}>Please call or email for more class information.</p>}
			</section>
		);
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

					background_image='https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/adult-class.jpg'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.THREE_QUATER} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout padding >
					<PageHeader 
						className={styles('page-header')}
						title='Class Schedules'
					/>
					<div className={styles('schools-container')}>
						{schools.locations && schools.locations.map(this.renderSchool)}
					</div>
					<p className={styles('disclaimer')}>All locations have group and private lessons available.</p>
				</Layout>
			</>
		)
	}
}

export default withRouter(Classes);
