import React, { PureComponent } from 'react';
import { Slide } from 'react-slideshow-image';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Slideshow.scss';


class Slideshow extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		images: PropTypes.array,
	}

	const renderSlide = (image, index) => {
	    return (
        	<div className="slide" key={`slide-${index}`}>
            	<div style={{'backgroundImage': `url(${image.src})`}}>
              		<span>Slide ${index}</span>
            	</div>
          	</div>
	    );
	}

	render() {
		const {
			className,
			title,
			images
		} = this.props;
		 
		const properties = {
			duration: 5000,
			transitionDuration: 500,
			infinite: true,
			indicators: true,
			arrows: true,
			pauseOnHover: true,
			onChange: (oldIndex, newIndex) => {
				console.log(`slide transition from ${oldIndex} to ${newIndex}`);
			}
		}

		return (
			<div className={classnames(styles('container'), className)}>
				<div className="slide-container" key={`slide-${index}`}>
			        <Slide {...properties}>
			          {images.map(this.renderSlide)}
			        </Slide>
			    </div>
			</div>
		);	
	}
}

export default Slideshow;
