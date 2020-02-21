webpackHotUpdate("styles",{

/***/ "./node_modules/extracted-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./components/header/Header.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extracted-loader!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./components/header/Header.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"Header-container-3ZpuA","fixed":"Header-fixed-39ltI","gradient":"Header-gradient-2Ht_W","dark-mode":"Header-dark-mode-1DaGR","inner":"Header-inner-2A1qX","banner":"Header-banner-3w3mF","nav":"Header-nav-3jI7E","active":"Header-active-1uMAQ","underline":"Header-underline-1IEy8","menu-container":"Header-menu-container-2rqw1","button":"Header-button-3USmz","menu":"Header-menu-sKL0B"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1582316956395");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b1fc02ab428f4e56f561.hot-update.js.map