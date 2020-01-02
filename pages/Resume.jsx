import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';

import GlobalStyles from 'styles/styles.scss';

class Resume extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	state = {
		load_pdf: false,
	}

	constructor(props) {
		super(props);

		this.banner_buttons = [
			{
				text: 'Download PDF',
				onClick: this.onClick,
			},
		];
	}

	onClick = () => {
		this.setState({
			load_pdf: true,
		})
	}

	render() {
		return (
			<>
				<Header />
				{!this.state.load_pdf &&
					<HeroBanner 
						title='Resume' 
						title_border
						text_position='top'
						buttons={this.banner_buttons}
						image={{src: '/static/resume_image.png', onClick: this.onClick}}
					/>
				}
				{this.state.load_pdf &&
					<section>
						<iframe 
							src="/static/resume.pdf" 
							type="application/pdf" 
							style={{width: '100%', height: '100vh'}} 
							width='100%' 
							height='100%'>
						   {/* <embed src="/static/resume.pdf" type="application/pdf" />*/}
						</iframe>
					</section>
				}
				
			</>
		)
	}
}

export default Resume;
