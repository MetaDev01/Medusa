/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkslim"] = self["webpackChunkslim"] || []).push([["src_components_config-subtitles_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/config-subtitles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/config-subtitles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers/index.js\");\n/* harmony import */ var vue_nav_tabs_dist_vue_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-nav-tabs/dist/vue-tabs.js */ \"./node_modules/vue-nav-tabs/dist/vue-tabs.js\");\n/* harmony import */ var vue_nav_tabs_dist_vue_tabs_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_nav_tabs_dist_vue_tabs_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ \"./node_modules/vue-multiselect/dist/vue-multiselect.min.js\");\n/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ \"./node_modules/vue-multiselect/dist/vue-multiselect.min.css\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'config-anime',\n  components: {\n    AppLink: _helpers__WEBPACK_IMPORTED_MODULE_0__.AppLink,\n    ConfigTemplate: _helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigTemplate,\n    ConfigTextbox: _helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigTextbox,\n    ConfigToggleSlider: _helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigToggleSlider,\n    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default()),\n    VueTabs: vue_nav_tabs_dist_vue_tabs_js__WEBPACK_IMPORTED_MODULE_1__.VueTabs,\n    VTab: vue_nav_tabs_dist_vue_tabs_js__WEBPACK_IMPORTED_MODULE_1__.VTab\n  },\n\n  data() {\n    return {\n      saving: false\n    };\n  },\n\n  methods: { ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['setConfig', 'updateShowlistDefault']),\n\n    async save() {\n      const {\n        anime,\n        setConfig\n      } = this; // Disable the save button until we're done.\n\n      this.saving = true;\n      const section = 'main';\n\n      try {\n        await setConfig({\n          section,\n          config: {\n            anime\n          }\n        });\n        this.$snotify.success('Saved Anime config', 'Saved', {\n          timeout: 5000\n        });\n      } catch (error) {\n        this.$snotify.error('Error while trying to save anime config', 'Error');\n      } finally {\n        this.saving = false;\n      }\n    }\n\n  },\n  computed: { ...(0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)({\n      anime: state => state.config.anime,\n      layout: state => state.config.layout\n    }),\n    animeShowlistDefaultAnime: {\n      get() {\n        const {\n          anime\n        } = this;\n        return anime.showlistDefaultAnime;\n      },\n\n      set(value) {\n        const {\n          anime,\n          updateShowlistDefault\n        } = this;\n        updateShowlistDefault(value, anime.showlistDefaultAnime);\n      }\n\n    }\n  }\n});\n\n//# sourceURL=webpack://slim/./src/components/config-subtitles.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/components/config-subtitles.vue":
/*!*********************************************!*\
  !*** ./src/components/config-subtitles.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_subtitles_vue_vue_type_template_id_5c6602c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-subtitles.vue?vue&type=template&id=5c6602c0& */ \"./src/components/config-subtitles.vue?vue&type=template&id=5c6602c0&\");\n/* harmony import */ var _config_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-subtitles.vue?vue&type=script&lang=js& */ \"./src/components/config-subtitles.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _config_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _config_subtitles_vue_vue_type_template_id_5c6602c0___WEBPACK_IMPORTED_MODULE_0__.render,\n  _config_subtitles_vue_vue_type_template_id_5c6602c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/config-subtitles.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://slim/./src/components/config-subtitles.vue?");

/***/ }),

/***/ "./src/components/config-subtitles.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/config-subtitles.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./config-subtitles.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/config-subtitles.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://slim/./src/components/config-subtitles.vue?");

/***/ }),

/***/ "./src/components/config-subtitles.vue?vue&type=template&id=5c6602c0&":
/*!****************************************************************************!*\
  !*** ./src/components/config-subtitles.vue?vue&type=template&id=5c6602c0& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_subtitles_vue_vue_type_template_id_5c6602c0___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_subtitles_vue_vue_type_template_id_5c6602c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_subtitles_vue_vue_type_template_id_5c6602c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./config-subtitles.vue?vue&type=template&id=5c6602c0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/config-subtitles.vue?vue&type=template&id=5c6602c0&\");\n\n\n//# sourceURL=webpack://slim/./src/components/config-subtitles.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/config-subtitles.vue?vue&type=template&id=5c6602c0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/config-subtitles.vue?vue&type=template&id=5c6602c0& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://slim/./src/components/config-subtitles.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);