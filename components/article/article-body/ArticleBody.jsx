import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Image from 'components/image';

import styles from './ArticleBody.scss';

class ArticleBody extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		article_data: PropTypes.object
	}

	renderTitle = content => {
		return <h1 className={styles('title')}>{content.text}</h1>;
	}

	renderSubHeader = content => {
		return <h3 className={styles('subheader')}>{content.text}</h3>;
	}

	renderParagraph = content => {
		return <p className={styles('paragraph')}>{content.text}</p>
	}

	renderList = content => {
		return (
			<ul className={styles('list')}>
				{content.items && content.items.map(this.renderListItem)}
			</ul>
		);
	}

	renderListItem = (item, index) => {
		return (
			<li key={`${item.text}-${index}`}>
				<a href={item.url}>
					{item.text}
				</a>
			</li>
		);
	}

	renderImage = content => {
		const size = content.size;
		const alignment = content.alignment;
		const image_container_classname = styles('image-container', `${size}`, `${alignment}`);

		return (
			<div className={styles(image_container_classname)}>
				<Image
					style={{
						width: '100%',
					}}
					fill_mode={Image.FillMode.COVER}
					src={content.src}
					alt={content.caption}
				/>
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
			case 'list':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderList(item.content)}
					</div>
				);
			case 'image':
				return (
					<div key={`${item.type}-${index}`}>
						{this.renderImage(item.content)}
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

		return (
			<div className={classnames(styles('container'), className)}>
				{article_data.title && this.renderTitle(article_data.title)}
				{article_data.body_items.map(this.renderItems)}
			</div>
		);	
	}
}

export default ArticleBody;
