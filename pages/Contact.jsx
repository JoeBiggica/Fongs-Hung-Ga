import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';

import GlobalStyles from 'styles/styles.scss';

class Contact extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	constructor(props) {
		super(props);

		this.banner_buttons = [
			{
				text: 'joe@biggica.com',
				url: 'mailto:joe@biggica.com',
				label: 'Email',
			},
			{
				text:'github.com/JoeBiggica',
				url:'https://github.com/JoeBiggica',
				target: '_blank',
				label: 'GitHub',
			},
			{
				text: 'linkedin.com/in/joebiggica',
				url: 'https://www.linkedin.com/in/joebiggica',
				target: '_blank',
				label: 'LinkedIn',
			},
		];
	}

	render() {
		return (
			<>
				<Header />
				<section>
					<HeroBanner 
						title='Contact' 
						title_border
						text_position='top'
						buttons={this.banner_buttons}
						button_direction='column'
					/>
				</section>
			</>
		)
	}
}

export default Contact;
