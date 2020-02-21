import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Image from 'components/image';

import styles from './ArticleHeader.scss';

class ArticleHeader extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		title: PropTypes.string,
		byline: PropTypes.object,
		primary_asset: PropTypes.object
	}

	renderByline = byline => {
		return (
			<div className={styles('byline')}>
				{byline.image && 
					<div 
						className={styles('image')} 
						style={{backgroundImage: `url(${byline.image})`}}
					/>
				}
				<span className={styles('name')}>
					{ byline.url ? 
						<a href={byline.url}> 
							{byline.name}
						</a> : byline.name
					}
				</span>
			</div>
		);
	}

	renderPrimaryAsset = asset => {
		const type = asset.type;
		const content = asset.content;
		switch(asset.type) {
			case 'image':
				return (
					<Image
						style={{
							width: '100%',
						}}
						fill_mode={Image.FillMode.COVER}
						src={content.src}
						alt={content.caption}
						aspect_ratio={16/9}
					/>
				);
			default:
				return <div />;
		}
	}


	render() {
		const {
			className,
			title,
			byline,
			primary_asset
		} = this.props;
		console.log(primary_asset, 'byline');
		return (
			<div className={classnames(styles('container'), className)}>
				{ title && <h1 className={styles('title')}>{title}</h1> }
				{ byline && this.renderByline(byline) }
				{ primary_asset && 
					<div className={styles('primary-asset')}>
						{this.renderPrimaryAsset(primary_asset)}
					</div> 
				}
			</div>
		);	
	}
}

export default ArticleHeader;
