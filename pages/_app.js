import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper';
import makeStore from '../redux/makeStore';
import SiteHead from '/components/sitehead'
import GlobalStyles from 'styles/styles.scss';

class NextApp extends App {

	static async getInitialProps({Component, ctx}) {
    
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps,
		};
	}
	
	render () {
		const { Component, store, pageProps } = this.props
		return (
			<Container>
				<Provider store={store}>
					<SiteHead/>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withRedux(makeStore)(NextApp);
