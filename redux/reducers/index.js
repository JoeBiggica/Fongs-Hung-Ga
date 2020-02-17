import { Action } from 'actions';

// REDUCERS
export default function reducer(state = {}, action) {

	const { meta, payload } = action;

	switch (action.type) {
		case 'FETCH_ARTICLE_SUCCESS': {
			console.log('PAYLOAD', payload);

			console.log('ARTICLE SUCCESS!');

			return {
				...state,
				article: payload.article
			};
		}

		case 'FETCH_ARTICLE_REQUEST': {
			console.log('ARTICLE REQUEST');
			return {
				...state
			};
		}

		default:
			return state
	}
}