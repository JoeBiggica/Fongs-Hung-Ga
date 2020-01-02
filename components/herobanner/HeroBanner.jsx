import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './HeroBanner.scss';


class HeroBanner extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		title_border: PropTypes.bool,
		text_position: PropTypes.string,
		buttons: PropTypes.array,
		button_border: PropTypes.bool,
		button_direction: PropTypes.string,
		image: PropTypes.object,
		full_height: PropTypes.bool,
	}

	static defaultProps = {
		button_direction: 'row',
		full_height: true,
	}

	renderButton = (button, index) => {
		const button_container_classname = styles('button-container', {
			'border': this.props.button_border,
			'column': this.props.button_direction === 'column',
			'row': this.props.button_direction === 'row',
		});

		const button_classname = styles('button', {
			'border': this.props.button_border,
		});
		return (	
			<li className={button_container_classname}>
				{button.label && 
					<span className={styles('label')}>{button.label}</span>
				}
				<div className={button_classname}>
					<a href={button.url} target={button.target} onClick={button.onClick}>
						{button.text}
					</a>
				</div>
			</li>	
		);
	}


	render() {
		const {
			className,
			title,
			title_border,
			text_position,
			buttons,
			button_border,
			image,
			full_height,
		} = this.props;

		const container_classname = styles('container', {
			'justify-top': text_position === 'top',
			'justify-bottom': text_position === 'bottom',
			'full-height': full_height,
		});

		const text_container_classname = styles('text-container', {
			'border': title_border,
		});

		const image_style = {
			backgroundImage: image,
		}

		return (
			<div className={classnames(container_classname, className)}>
				<div className={text_container_classname}>
					<h1 className={styles('title')}>{this.props.title}</h1>
				</div>
				{buttons &&
					<ul className={styles('buttons-container')}>
						{buttons.map(this.renderButton)}
					</ul>
				}
				{image &&
					<div className={styles('image-container')} onClick={image.onClick}>
						<img className={styles('image')} src={image.src} />
					</div>
				}
			</div>
		);	
	}
}

export default HeroBanner;
