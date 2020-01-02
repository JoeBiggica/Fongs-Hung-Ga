import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Feature from 'components/feature';

import GlobalStyles from 'styles/styles.scss';

class Projects extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	render() {
		return (
			<>
				<Header />
				<section>
					<HeroBanner 
						title='Projects' 
						title_border
						text_position='top'
						full_height={false}
					/>
				</section>
				<section>
					<Feature 
						title={'Reuters'}
						description={'A global news site specializing in world class journalism, photography, and market data and analysis. I helped lead the initiative to modernize Reuters.com, elevating it to industry standards in technology and performance. We are in the process of building a brand new site from the ground, starting with our live blog, market data, and video sections.'}
						color='#FF8000'
						background_image={'static/reuters_background.png'}
						image={'static/reuters_site.png'}
						url='https://www.reuters.com/companies/AMZN.O'
						text_position='right'
						title_border
					/>
				</section>
				<section>
					<Feature 
						title={'Artichoke Designs'}
						description={'A portfolio site for the design firm Artichoke Designs. They are a small startup who achieve big wins in their designs and customer service. They are experts in branding, print design, web design, and also alternative posters. I helped them build their site from the ground up, and continue to consult them on the next steps in their web presence.'}
						color='#499324'
						background_image={'static/artichoke_background.png'}
						image={'static/artichoke_site.png'}
						url='http://www.artichoke.design'
						text_position='left'
						title_border
					/>
				</section>
			</>
		)
	}
}

export default Projects;
