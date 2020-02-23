webpackHotUpdate("static/development/pages/Article.js",{

/***/ "./node_modules/redux-api-middleware/lib/index.umd.js":
false,

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: Type, Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* import { RSAA, getJSON } from 'redux-api-middleware'; */
// ACTIONS
var Type = {
  FETCH_ARTICLE: 'FETCH_ARTICLE'
};
var Action = {
  /* fetchArticle: slug => {
  	console.log('FETCH ARTICLE');
  	return {
  		[RSAA]: {
  			endpoint: `https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/${slug}.json`,
  			method: 'GET',
  			headers: {},
  			types: [
  				{
  					type: `${Type.FETCH_ARTICLE}_REQUEST`,
  				},
  				{
  					type: `${Type.FETCH_ARTICLE}_SUCCESS`,
  					payload: (action, state, res) => {
  						console.log('SUCCESS', res);
  						return getJSON(res).then(json => json, err => undefined);
  					},
  				},
  				{
  					type: `${Type.FETCH_ARTICLE}_FAILURE`,
  					meta: (action, state, res) => {
  						console.log('FAIL', res);
  						if (res) {
  							return {
  								status: res.status,
  								statusText: res.statusText
  							};
  						}
  							return {
  							status: 'Network request failed'
  						};
  					}
  				}
  			]
  		}
  	}
  } */
};


/***/ })

})
//# sourceMappingURL=Article.js.5b7e2110d958cfc86104.hot-update.js.map