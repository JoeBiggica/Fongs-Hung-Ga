import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Table.scss';


class Table extends PureComponent {

	static propTypes = {
		title: PropTypes.string,
		headers: PropTypes.array,
		rows: PropTypes.array,
	}

	render() {
		const {
			className,
			title,
			headers,
			rows,
		} = this.props;

		return (
			<div className={styles('container')}>
			</div>
		);	
	}
}

export default Table;
