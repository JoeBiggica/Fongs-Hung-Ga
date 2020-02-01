import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Table.scss';


class Table extends PureComponent {

	static propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		color: PropTypes.string,
	}

	static defaultProps = {
		color: '#ffffff',
		text_position: 'right',
	}


	render() {
		const {
			className,
			title,
			description,
			color,
			background_image,
			image,
			url,
			text_position,
			title_border,
		} = this.props;

		return (
			<div className={styles('container')}>
			</div>
		);	
	}
}

export default Table;
