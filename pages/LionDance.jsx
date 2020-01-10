import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Header from 'components/header';
import HeroBanner from 'components/herobanner';
import Layout from 'components/layout';
import PageHeader from 'components/pageheader';

import styles from './LionDance.scss';

import PropTypes from 'prop-types';

class LionDance extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	render() {
		const {
			router
		} = this.props;

		return (
			<>
				<Header router={router} />
				<HeroBanner 
					className={styles('herobanner')}
					title='Lion Dance' 
					text_position={HeroBanner.TextPosition.BOTTOM}

					background_image='https://lh3.googleusercontent.com/wsyy5L7WLY3sOBCfhB3Zogr4n8nuPNFYnVz-YXn_-5ARJJoOAfpqVkBM-MfL5mzN7zHDu0Yrh69zhOnd9ii3BuT7kg9ICxvwfr3m0eame9le2Gll4JMKnhJ1rR4lK5ya-4qmrjkwm0t8TwYwdofSSf4kPjuBfHTYgugWOYG9x1HJZ7aBV71mIPNFuZnYted6jtmKFUd3pD7m6AVmYRWc9KT73DSUMn7fEqq_sqFPZQytpkBcjaZ_dkmwD2l91EMWJZxt972m49nuLN2YEV8ePF6HYKyAegqPJeTZYmg29GsLc-G9zYeQiSkGtvZew0FGEzs5MfiEw5F_ZWX5t9olmfSZviyv9hZw8eMEIlQxzKt3tgvAbM7cCTwozY4l2LC2RTS56o0khCKk7PTCugACU2ly-BBUThSihx1fOeyicYMPojT_HU6Mtr8WjU94VeOnaADhOJCdDvp7WCs4CiQ6MJAK1FCRljsFpiTwJI1zxElGo-RBZEJL8ftHiARGOC6CGTE1nu-9I6iC31zB8Bno3Y74tNez2y5fGnz90jetAKL63XnLLO1EoIRCFq5iGBQkBFHQvXBApSVhoHeWJF8lpd2w2eMIcGkOstL3C07fsy990fS9klnoIEWQbjabxCdZgjv9lLmKOcU1w92-qmw5mURk9cRhkqXaTPKrJfdM4ukHufac3KmUx3k=w1024-h768-no'
					background_position={HeroBanner.BackgroundPosition.CENTER}
					hero_height={HeroBanner.HeroHeight.HALF} 
					gradient={HeroBanner.Gradient.BOTTOM}
				/>
				<Layout>
					<PageHeader 
						title='Lion Dance'
					/>
					<div className={styles('content')} />
				</Layout>
			</>
		)
	}
}

export default withRouter(LionDance);
