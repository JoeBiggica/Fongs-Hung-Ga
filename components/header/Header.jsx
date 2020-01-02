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
				name: 'Resume',
				id: 'resume',
			},
			{
				name: 'Projects',
				id: 'projects',
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
			</li>
		);
	}

	render() {
		const {
			className,
			text,
		} = this.props;

		return (
			<header className={styles('container')}>
				<div className={styles('inner')}>
					<div className={styles('logo')}>
						<a href='/'>Joe Biggica</a>
					</div>
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
