webpackHotUpdate("styles",{

/***/ "./node_modules/extracted-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./pages/Classes.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extracted-loader!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./pages/Classes.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"herobanner":"Classes-herobanner-hGTqS","page-header":"Classes-page-header-1ipoY","content":"Classes-content-1new4","schools-container":"Classes-schools-container-2daf4","school":"Classes-school-3pmtP","info-container":"Classes-info-container-1VUpl","title":"Classes-title-3uCC9","instructor":"Classes-instructor-1W08x","label":"Classes-label-2F5hW","name":"Classes-name-1emSx","address":"Classes-address-6bSH0","contact":"Classes-contact-1cTKz"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1581112151361");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.615f08ab8f2ae6f2618d.hot-update.js.map