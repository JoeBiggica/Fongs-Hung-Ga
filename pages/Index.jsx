import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Header from 'components/header';


import styles from './Index.scss';

class Index extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	constructor(props) {
		super(props);

		this.banner_buttons = [
			{
				text: 'Resume',
				url: '/resume',
			},
			{
				text: 'Projects',
				url: '/projects',
			},
			{
				text: 'Contact',
				url: '/contact',
			},
		];
	}

	// toggle = () => {
	// 	const { toggleTap } = this.props
	// 	toggleTap()
	// }

	// increment = () => {
	// 	const { incrementCount } = this.props
	// 	incrementCount()
	// }

	// decrement = () => {
	// 	const { decrementCount } = this.props
	// 	decrementCount()
	// }

	render() {
		return (
			<>
				<Header />
				<section>
					<div className={styles('video-banner')}>
						<iframe src='//www.youtube.com/embed/182EssGqBf0?start=33&controls=0&autoplay=1&mute=1&loop=1&playsinline=1&showinfo=0&rel=0&wmode=transparent&autohide=1&playlist=182EssGqBf0&enablejsapi=1' />
					</div>
				</section>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		tap: state.tap,
		count: state.count
	}
}

const mapDispatchToProps = dispatch => {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);
