import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.scss';

const Color = {
	RED: 'red',
	BLACK: 'black',
	WHITE: 'white'
}


class Button extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
		color: PropTypes.string
	}

	static defaultProps = {
		color: COLOR.RED
	}


	render() {
		const {
			className,
			text,
			color
		} = this.props;

		const container_classname = styles('container', {
			color
		}, className);

		return (
			<div className={classnames(container_classname)}>
				<div className={styles('text')}>{text}</div>
			</div>
		);	
	}
}

export default Button;
