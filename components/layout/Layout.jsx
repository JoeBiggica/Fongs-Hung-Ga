import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.scss';

class Layout extends PureComponent {

	static propTypes = {
		children: PropTypes.node,
	}


	render() {
		const {
			children
		} = this.props;

		return (
			<div className={styles('container')}>
				<div className={styles('inner')}>
					{children}
				</div>
			</div>
		);	
	}
}

export default Layout;
