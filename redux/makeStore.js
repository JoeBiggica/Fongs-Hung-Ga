import {
	createStore,
	applyMiddleware,
	compose,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'
import { apiMiddleware } from 'redux-api-middleware';

import reducer from './reducers';

export default function makeStore(initial_state = {}, {isServer}) {
	const dev_compose = isServer ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

	const store = createStore(
		reducer,
		initial_state,
		composeWithDevTools(applyMiddleware())
	)

	return store;
}
