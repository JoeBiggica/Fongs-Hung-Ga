webpackHotUpdate("styles",{

/***/ "./node_modules/extracted-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./components/article/article-body/ArticleBody.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extracted-loader!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./components/article/article-body/ArticleBody.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"ArticleBody-container-1MHeD","paragraph":"ArticleBody-paragraph-2I40G","subheader":"ArticleBody-subheader-2d5PN","list":"ArticleBody-list-2Rrd-","ordered":"ArticleBody-ordered-1BE_-","image-container":"ArticleBody-image-container-1w9XO","small":"ArticleBody-small-uu_-_","left":"ArticleBody-left-2suTo","right":"ArticleBody-right-1cP21"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1582313893779");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e8d48aeb5f76638f26b3.hot-update.js.map