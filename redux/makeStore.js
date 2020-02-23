import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducers';

export function initializeStore (initial_state = {}) {

	return createStore(
		reducer,
		initial_state,
		composeWithDevTools(applyMiddleware())
	)
}