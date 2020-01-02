import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HamburgerButton from './hamburgerbutton';

import styles from './Header.scss';

class Header extends PureComponent {

	state = {
		menu_active: false,
	}

	constructor(props) {
		super(props);

		this.menu_items = [
			{
				name: 'Home',
				id: 'home',
			},
			{
				name: 'Classes',
				id: 'classes',
			},
			{
				name: 'Lion Dance',
				id: 'liondance',
			},
			{
				name: 'About',
				id: 'about',
			},
			{
				name: 'Contact',
				id: 'contact',
			},
			
		];
	}

	onClick = () => {
		this.setState({ menu_active: !this.state.menu_active });
	}

	renderMenuItem = item => {
		return (
			<li key={`${item.id}`}>
				<a href={`/${item.id}`}>{item.name}</a>
				<div className={styles('underline')} />
			</li>
		);
	}

	render() {
		const {
			className,
			text,
		} = this.props;

		const banner_styles = {
			backgroundImage: `url(/static/fongs-banner-logo.png)`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};


		return (
			<header className={styles('container')}>
				<div className={styles('inner')}>
					<div className={styles('banner')} style={banner_styles} />
					<nav className={styles('nav')}>
						<ul>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</nav>
					<div className={styles('menu-container')}>
						<HamburgerButton className={styles('button')} onClick={this.onClick} />
						<ul className={styles('menu', {'active': this.state.menu_active})}>
							{this.menu_items.map(this.renderMenuItem)}
						</ul>
					</div>
				</div>
			</header>
		);	
	}
}

export default Header;
