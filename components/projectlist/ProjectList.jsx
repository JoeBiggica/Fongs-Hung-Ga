import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectList.scss';


class ProjectList extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
	}


	render() {
		const {
			className,
			text,
		} = this.props;

		return (
			<div className={styles('container')}>
				<h3>Projects</h3>
				<div className={styles('projects-contiainer')}>
					<div className={styles('project')}>
					
					</div>
				</div>
			</div>
		);	
	}
}

export default ProjectList;
