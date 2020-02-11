import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Article.scss';

class Article extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		article_data: PropTypes.object
	}

	renderTitle = content => {
		return <h1 className={styles('title')}>{content}</h1>;
	}

	renderSubHeader = content => {
		return <h3 className={styles('subheader')}>{content}</h3>;
	}

	renderParagraph = content => {
		return <p className={styles('paragraph')}>{content}</p>
	}

	renderImage = content => {
		const size = data.size;
		const image_container_classname = styles('image-container', {size});

		return (
			<div className={image_container_classname}>
			</div>
		);
	}

	renderItems = (item, index) => {
		switch(item.type) {
			case 'paragraph':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderParagraph(item.content)}
					</div>
				);
			case 'subheader':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderSubHeader(item.content)}
					</div>
				);
				

			default:
				return <div />;
		}
	}


	render() {
		const {
			className,
			article_data
		} = this.props;
		console.log(article_data.body_items)
		return (
			<div className={classnames(styles('container'), className)}>
				{article_data.title && this.renderTitle(article_data.title)}
				{article_data.body_items.map(this.renderItems)}
			</div>
		);	
	}
}

export default Article;
