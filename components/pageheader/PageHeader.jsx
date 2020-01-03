import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './PageHeader.scss';


class PageHeader extends PureComponent {

	static propTypes = {
		title: PropTypes.string,
	}


	render() {
		const {
			title
		} = this.props;

		return (
			<div className={styles('container')}>
				<div className={styles('inner')}>
					<h1 className={styles('title')}>{title}</h1>
					<div className={styles('underline')} />
				</div>
			</div>
		);	
	}
}

export default PageHeader;
