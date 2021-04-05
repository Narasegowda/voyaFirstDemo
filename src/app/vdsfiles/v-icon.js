/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "/PLo");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/PLo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VIcon", function() { return /* binding */ v_icon_VIcon; });

// EXTERNAL MODULE: ./node_modules/lit-element/lit-element.js + 5 modules
var lit_element = __webpack_require__("CQbg");

// EXTERNAL MODULE: ./node_modules/lit-html/directives/class-map.js
var class_map = __webpack_require__("4qtV");

// EXTERNAL MODULE: ./src/styles/commonStyles.js
var commonStyles = __webpack_require__("ONJ/");

// EXTERNAL MODULE: ./src/utils/index.js + 8 modules
var utils = __webpack_require__("7Qib");

// CONCATENATED MODULE: ./src/components/v-icon/slottedStyles.js
/* harmony default export */ var slottedStyles = ("\nsvg {\n    display: inline-block;\n    margin-right: 8px;\n  }\n\n  [primary] .fillable {\n    fill: var(--v-colors__primary);\n  }\n\n  [primary] .circle {\n    stroke: var(--v-colors__primary-50);\n  }\n\n  [primary]:not([disabled]):not([error]) svg:hover .fillable,\n  [primary][hover]:not([disabled]):not([error]) svg .fillable {\n    fill: var(--v-colors__primary-darker-1);\n  }\n\n  [primary]:not([disabled]):not([error]) svg:hover .circle,\n  [primary][hover]:not([disabled]):not([error]) .circle {\n    stroke: var(--v-colors__primary-darker-1);\n  }\n\n  [primary][active]:not([disabled]):not([error]) svg .fillable,\n  [primary]:not([disabled]):not([error]) svg:active .fillable {\n    fill: var(--v-colors__primary-darker-2);\n  }\n\n  [primary]:not([disabled]):not([error]) svg:active .circle,\n  [primary][active]:not([disabled]):not([error]) .circle {\n    stroke: var(--v-colors__primary-darker-2);\n  }\n\n  [secondary]:not([disabled]):not([error]) svg .fillable {\n    fill: var(--v-colors__secondary);\n  }\n\n  [secondary][hover]:not([disabled]):not([error]) svg .fillable,\n  [secondary]:not([disabled]):not([error]) svg:hover .fillable {\n    fill: var(--v-states__secondary-hover-color);\n  }\n\n  [secondary][active]:not([disabled]):not([error]) svg .fillable,\n  [secondary]:not([disabled]):not([error]) svg:active .fillable {\n    fill: var(--v-states__secondary-active-color);\n  }\n\n  [darkOrange]:not([disabled]):not([error]) svg .fillable {\n    fill: var(--v-colors__voya-dark-orange);\n  }\n\n  [darkOrange][hover]:not([disabled]):not([error]) svg .fillable,\n  [darkOrange]:not([disabled]):not([error]) svg:hover .fillable {\n    fill: var(--v-states__secondary-hover-color);\n  }\n\n  [darkOrange][active]:not([disabled]):not([error]) svg .fillable,\n  [darkOrange]:not([disabled]):not([error]) svg:active .fillable {\n    fill: var(--v-states__secondary-active-color);\n  }\n\n  [primary][selected] svg .fillable {\n    fill: var(--v-colors__secondary);\n  }\n\n  [primary][selected] svg .circle {\n    stroke: var(--v-colors__secondary);\n    stroke-width: 2px;\n  }\n\n  [disabled] svg .fillable {\n    fill: var(--v-states__disabled-color);\n  }\n\n  [disabled] svg .circle {\n    stroke: var(--v-states__disabled-color);\n  }\n\n  [error] svg .fillable {\n    fill: var(--v-states__error-color);\n  }\n\n  [error] svg .circle {\n    stroke: var(--v-states__error-color);\n  }\n\n  :host {\n    display: inline-block;\n    min-height: 20px;\n  }\n  \n");
// CONCATENATED MODULE: ./src/components/v-icon/styles.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  :host([primary]) .fillable {\n    fill: var(--v-colors__primary);\n  }\n\n  :host([primary]) .circle {\n    stroke: var(--v-colors__primary-50);\n  }\n\n  :host([primary]:not([disabled]):not([error])) svg:hover .fillable,\n  :host([primary][hover]:not([disabled]):not([error])) svg .fillable {\n    fill: var(--v-colors__primary-darker-1);\n  }\n\n  :host([primary]:not([disabled]):not([error])) svg:hover .circle,\n  :host([primary][hover]:not([disabled]):not([error])) .circle {\n    stroke: var(--v-colors__primary-darker-1);\n  }\n\n  :host([primary][active]:not([disabled]):not([error])) svg .fillable,\n  :host([primary]:not([disabled]):not([error])) svg:active .fillable {\n    fill: var(--v-colors__primary-darker-2);\n  }\n\n  :host([primary]:not([disabled]):not([error])) svg:active .circle,\n  :host([primary][active]:not([disabled]):not([error])) .circle {\n    stroke: var(--v-colors__primary-darker-2);\n  }\n\n  :host([secondary]:not([disabled]):not([error])) svg .fillable {\n    fill: var(--v-colors__secondary);\n  }\n\n  :host([secondary][hover]:not([disabled]):not([error])) svg .fillable,\n  :host([secondary]:not([disabled]):not([error])) svg:hover .fillable {\n    fill: var(--v-states__secondary-hover-color);\n  }\n\n  :host([secondary][active]:not([disabled]):not([error])) svg .fillable,\n  :host([secondary]:not([disabled]):not([error])) svg:active .fillable {\n    fill: var(--v-states__secondary-active-color);\n  }\n\n  :host([darkOrange]:not([disabled]):not([error])) svg .fillable {\n    fill: var(--v-colors__voya-dark-orange);\n  }\n\n  :host([darkOrange][hover]:not([disabled]):not([error])) svg .fillable,\n  :host([darkOrange]:not([disabled]):not([error])) svg:hover .fillable {\n    fill: var(--v-states__secondary-hover-color);\n  }\n\n  :host([darkOrange][active]:not([disabled]):not([error])) svg .fillable,\n  :host([darkOrange]:not([disabled]):not([error])) svg:active .fillable {\n    fill: var(--v-states__secondary-active-color);\n  }\n\n  :host([primary][selected]) svg .fillable {\n    fill: var(--v-colors__secondary);\n  }\n\n  :host([primary][selected]) svg .circle {\n    stroke: var(--v-colors__secondary);\n    stroke-width: 2px;\n  }\n\n  :host([disabled]) svg .fillable {\n    fill: var(--v-states__disabled-color);\n  }\n\n  :host([disabled]) svg .circle {\n    stroke: var(--v-states__disabled-color);\n  }\n\n  :host([error]) svg .fillable {\n    fill: var(--v-states__error-color);\n  }\n\n  :host([error]) svg .circle {\n    stroke: var(--v-states__error-color);\n  }\n\n  /* FontAwesome primary secondary darkOrange Styles */\n\n  :host([primary]) i,\n  :host([primary]) .link-icon span {\n    color: var(--v-colors__primary);\n  }\n  /* TODO:Need to determine stroke for fontAwesome */\n\n  :host([primary]) i,\n  :host([primary]) .link-icon span {\n    stroke: var(--v-colors__primary-50);\n  }\n\n  :host([primary]:not([disabled]):not([error])) i:hover,\n  :host([primary][hover]:not([disabled]):not([error])) i,\n  :host([primary]:not([disabled]):not([error])) .link-icon span:hover,\n  :host([primary][hover]:not([disabled]):not([error])) .link-icon span {\n    color: var(--v-colors__primary-darker-1);\n  }\n\n  :host([primary]:not([disabled]):not([error])) i:hover,\n  :host([primary][hover]:not([disabled]):not([error])) i,\n  :host([primary]:not([disabled]):not([error])) .link-icon span:hover,\n  :host([primary][hover]:not([disabled]):not([error])) .link-icon span {\n    stroke: var(--v-colors__primary-darker-1);\n  }\n\n  :host([primary][active]:not([disabled]):not([error])) i,\n  :host([primary]:not([disabled]):not([error])) i:active,\n  :host([primary][active]:not([disabled]):not([error])) .link-icon span,\n  :host([primary]:not([disabled]):not([error])) .link-icon span:active {\n    color: var(--v-states__button-active-color);\n  }\n\n  :host([primary]:not([disabled]):not([error])) i:active,\n  :host([primary][active]:not([disabled]):not([error])) i,\n  :host([primary]:not([disabled]):not([error])) .link-icon span:active,\n  :host([primary][active]:not([disabled]):not([error])) .link-icon span {\n    stroke: var(--v-states__button-active-color);\n  }\n\n  :host([secondary]:not([disabled]):not([error])) i,\n  :host([secondary]:not([disabled]):not([error])) .link-icon span {\n    color: var(--v-colors__secondary);\n  }\n\n  :host([secondary][hover]:not([disabled]):not([error])) i,\n  :host([secondary]:not([disabled]):not([error])) i:hover,\n  :host([secondary][hover]:not([disabled]):not([error])) .link-icon span,\n  :host([secondary]:not([disabled]):not([error])) .link-icon span:hover {\n    color: var(--v-states__secondary-hover-color);\n  }\n\n  :host([secondary][active]:not([disabled]):not([error])) i,\n  :host([secondary]:not([disabled]):not([error])) i:active,\n  :host([secondary][active]:not([disabled]):not([error])) .link-icon span,\n  :host([secondary]:not([disabled]):not([error])) .link-icon span:active {\n    color: var(--v-states__secondary-active-color);\n  }\n\n  :host([darkOrange]:not([disabled]):not([error])) i,\n  :host([darkOrange]:not([disabled]):not([error])) .link-icon span {\n    color: var(--v-colors__voya-dark-orange);\n  }\n\n  :host([darkOrange][hover]:not([disabled]):not([error])) i,\n  :host([darkOrange]:not([disabled]):not([error])) i:hover,\n  :host([darkOrange][hover]:not([disabled]):not([error])) .link-icon span,\n  :host([darkOrange]:not([disabled]):not([error])) .link-icon span:hover {\n    color: var(--v-states__secondary-hover-color);\n  }\n\n  :host([darkOrange][active]:not([disabled]):not([error])) i,\n  :host([darkOrange]:not([disabled]):not([error])) i:active,\n  :host([darkOrange][active]:not([disabled]):not([error])) .link-icon span,\n  :host([darkOrange]:not([disabled]):not([error])) .link-icon span:active {\n    color: var(--v-states__secondary-active-color);\n  }\n\n  :host([primary][selected]) i,\n  :host([primary][selected]) .link-icon span {\n    color: var(--v-colors__secondary);\n  }\n\n  :host([primary][selected]) i,\n  :host([primary][selected]) .link-icon span {\n    stroke: var(--v-colors__secondary);\n    stroke-width: 2px;\n  }\n\n  :host([disabled]) i,\n  :host([disabled]) .link-icon span {\n    color: var(--v-states__disabled-color);\n  }\n\n  :host([disabled]) i,\n  :host([disabled]) .link-icon span {\n    stroke: var(--v-states__disabled-color);\n  }\n\n  :host([error]) i,\n  :host([error]) .link-icon span {\n    color: var(--v-states__error-color);\n  }\n\n  :host([error]) i,\n  :host([error]) .link-icon span {\n    stroke: var(--v-states__error-color);\n  }\n  /* End of fontAwesome styles */\n\n  :host {\n    display: inline-block;\n    min-height: 20px;\n  }\n\n  a {\n    align-items: center;\n    color: #333333;\n    color: var(--v-colors__black);\n    display: flex;\n    font-family: var(--v-fonts__primary);\n    font-size: 16px;\n    text-decoration: none;\n  }\n\n  button {\n    align-items: center;\n    color: #145a7b;\n    color: var(--v-states__link-color);\n    display: flex;\n    font-family: var(--v-fonts__primary);\n    font-size: 16px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    text-decoration: underline;\n  }\n\n  .anchorButtonWidth {\n    width: 500px;\n    width: max-content;\n  }\n\n  a:hover,\n  button:hover {\n    color: #02385b;\n    color: var(--v-states__link-hover-color);\n    text-decoration: underline;\n  }\n\n  a:active,\n  button:active {\n    color: #333333;\n    color: var(--v-colors__black);\n  }\n\n  a:visited,\n  button:visited {\n    color: #333333;\n    color: var(--v-colors__black);\n  }\n\n  a:focus,\n  button:focus {\n    box-shadow: var(--v-states__focus-box-shadow-with-inset);\n    outline: none;\n  }\n\n  a svg,\n  a i,\n  button svg,\n  button i,\n  .link-icon span {\n    flex: 0 0 auto;\n    margin-right: 8px;\n  }\n\n  v-icon {\n    margin-right: 8px;\n  }\n\n  .anchorText {\n    align-items: center;\n    color: #333333;\n    color: var(--v-colors__black);\n    display: inline-flex;\n    font-family: var(--v-fonts__primary);\n    font-size: 16px;\n    text-align: left;\n    text-decoration: none;\n  }\n\n  .buttonText {\n    align-items: center;\n    color: #333333;\n    color: var(--v-colors__black);\n    display: inline-flex;\n    font-family: var(--v-fonts__primary);\n    font-size: 16px;\n    text-align: left;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    text-decoration: none;\n  }\n\n  .anchorText:hover,\n  .buttonText:hover {\n    color: #02385b;\n    color: var(--v-states__link-hover-color, #02385b);\n    text-decoration: none;\n  }\n\n  .flexNone {\n    flex: none;\n  }\n\n  .textCircle {\n    border-radius: 50%;\n    text-align: center;\n    background-color: var(--v-colors__primary);\n    font-size: 12px;\n  }\n\n  .textCircle.applyHoverStyles.hover {\n    background-color: white;\n  }\n\n  .textCircle span {\n    font-weight: 600;\n    color: white;\n    font-size: 100%;\n  }\n\n  .textCircle.applyHoverStyles.hover span {\n    color: var(--v-colors__primary);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ var v_icon_styles = (Object(lit_element["b" /* css */])(_templateObject()));
// EXTERNAL MODULE: ./src/images/index.js + 25 modules
var src_images = __webpack_require__("ZinC");

// CONCATENATED MODULE: ./src/components/v-icon/svg.js

/* harmony default export */ var svg = (function (name, useCustomIcon) {
  if (!useCustomIcon) {
    switch (name) {
      // Introduce additional cases here for each icon, and import them above.
      case 'archiveselected':
      case 'archiveSelected':
        return 'fas fa-archive';

      case 'arrowaltdown':
      case 'arrowAltDown':
        return 'fas fa-long-arrow-alt-down';
      // case 'Accessibility':
      // case 'accessibility':
      //   return "fas fa-accessibility";

      case 'bell':
        return 'far fa-bell';

      case 'calendaralt':
      case 'calendarAlt':
        return 'fas fa-calendar-alt';

      case 'caretdown':
      case 'caretDown':
        return 'fas fa-caret-down';

      case 'caretup':
      case 'caretUp':
        return 'fas fa-caret-up';

      case 'check':
        return 'fas fa-check';
      // case 'chevronleftcircle':
      // case 'chevronLeftCircle':
      //   return "far fa-chevron-circle-left";

      case 'chevronup':
      case 'chevronUp':
        return 'fas fa-chevron-up';

      case 'chevronright':
      case 'chevronRight':
        return 'fas fa-chevron-right';

      case 'cog':
        return 'fas fa-cog';
      // case 'cogcircle':
      // case 'cogCircle':
      //   return "fas fa-cog-circle";
      // case 'collapse':
      //   return "far fa-minus-circle";
      // case 'contactUs':
      //   return "fas fa-contact-us";
      // case 'magnifier':
      //   return "fas fa-magnifier";

      case 'comment':
        return 'far fa-comment';

      case 'commentdots':
      case 'commentDots':
        return 'far fa-comment-dots';

      case 'edit':
        return 'fas fa-edit';

      case 'ellipsis':
        return 'fas fa-ellipsis-h';

      case 'envelope':
        return 'far fa-envelope';
      // case 'envelopecircle':
      // case 'envelopeCircle':
      //   return "fas fa-envelope-circle";

      case 'exclamation':
        return 'fas fa-exclamation';

      case 'exclamationtriangle':
      case 'exclamationTriangle':
        return 'fas fa-exclamation-triangle';

      case 'externalLink':
        return 'fas fa-external-link-alt';
      // case 'expand':
      //   return "far fa-plus-circle";

      case 'eye':
        return 'fas fa-eye';

      case 'eyeslash':
      case 'eyeSlash':
        return 'fas fa-eye-slash';

      case 'facebook':
      case 'Facebook':
        return 'fab fa-facebook-square';

      case 'file':
      case 'File':
        return 'fas fa-file-alt';

      case 'globeamericas':
      case 'globeAmericas':
        return 'fas fa-globe-americas';

      case 'googleplus':
      case 'googlePlus':
        return 'fab fa-google-plus-square';

      case 'infocircle':
      case 'infoCircle':
        return 'fas fa-info-circle';

      case 'instagram':
        return 'fab fa-instagram';

      case 'lightbulb':
        return 'far fa-lightbulb';

      case 'linkedin':
        return 'fab fa-linkedin';

      case 'listalt':
      case 'listAlt':
        return 'fas fa-list-alt';

      case 'mapmarker':
        return 'fas fa-map-marker';

      case 'mapmarkeralt':
        return 'fas fa-map-marker-alt';

      case 'pdf':
        return 'far fa-file-pdf';

      case 'playcircle':
      case 'playCircle':
        return 'fas fa-play-circle';

      case 'print':
        return 'fas fa-print';
      // case 'profile':
      //   return "far fa-user-alt";
      // case 'profilecircle':
      // case 'profileCircle':
      //   return "fas fa-profile-circle";

      case 'privacy':
        return 'fas fa-lock';

      case 'questioncircle':
      case 'questionCircle':
        return 'far fa-question-circle';
      // case 'quote':
      //   return "fas fa-quote";

      case 'scorehealthgreen':
      case 'scoreHealthGreen':
        return 'far fa-check-circle';

      case 'scorehealthred':
      case 'scoreHealthRed':
        return 'fas fa-exclamation-circle';
      // case 'scorehealthyellow':
      // case 'scoreHealthYellow':
      //   return "far fa-minus-circle";

      case 'search':
        return 'fas fa-search';

      case 'share':
        return 'fas fa-share';
      // case 'shareCircle':
      //   return "fas fa-share-circle";

      case 'sort':
        return 'fas fa-sort';

      case 'star':
        return 'fas fa-star';
      // case 'siteMap':
      // case 'sitemap':
      //   return "fas fa-sitemap";
      // case 'security':
      //   return "fas fa-shield-alt";

      case 'twitter':
        return 'fab fa-twitter-square';

      case 'undo':
        return 'fas fa-undo';

      case 'universalaccess':
      case 'universalAccess':
        return 'fas fa-universal-access';

      case 'x':
        return 'fas fa-times';

      case 'xsolid':
      case 'xSolid':
        return 'fas fa-times-circle';

      case 'youtube':
      case 'Youtube':
        return 'fab fa-youtube-square';
      // case 'Phone':
      //   return "fas fa-phone";

      default:
        return name;
    }
  } else {
    switch (name) {
      // Introduce additional cases here for each icon, and import them above
      case 'Accessibility':
      case 'accessibility':
        return src_images["a" /* Accessibility */];

      case 'chevronleftcircle':
      case 'chevronLeftCircle':
        return src_images["c" /* chevronLeftCircle */];

      case 'clock':
        return src_images["d" /* clock */];

      case 'cogcircle':
      case 'cogCircle':
        return src_images["e" /* cogCircle */];

      case 'collapse':
        return src_images["f" /* collapse */];

      case 'contactUs':
        return src_images["g" /* contactUs */];

      case 'magnifier':
        return src_images["n" /* magnifier */];

      case 'envelopecircle':
      case 'envelopeCircle':
        return src_images["k" /* envelopeCircle */];

      case 'expand':
        return src_images["l" /* expand */];

      case 'profile':
        return src_images["q" /* profile */];

      case 'profilecircle':
      case 'profileCircle':
        return src_images["r" /* profileCircle */];

      case 'quote':
        return src_images["s" /* quote */];

      case 'scorehealthyellow':
      case 'scoreHealthYellow':
        return src_images["t" /* scoreHealthYellow */];

      case 'shareCircle':
        return src_images["w" /* shareCircle */];

      case 'siteMap':
      case 'sitemap':
        return src_images["x" /* siteMap */];

      case 'search':
      case 'Search':
        return src_images["u" /* search */];

      case 'security':
        return src_images["v" /* security */];

      case 'phone':
      case 'Phone':
        return src_images["p" /* phone */];

      case 'nucleo':
      case 'Nucleo':
        return src_images["o" /* nucleo */];

      default:
        return name;
    }
  }
});
// EXTERNAL MODULE: ./src/utils/keyboardAccessibility.js
var keyboardAccessibility = __webpack_require__("BAbn");

// CONCATENATED MODULE: ./src/components/v-icon/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject13() {
  var data = v_icon_taggedTemplateLiteral([" <span\n          @mouseover=", "\n          @mouseout=", "\n          @mousedown=", "\n          @mouseup=", "\n          class=\"link-icon\"\n        >\n          <link rel=\"stylesheet\" href=\"", "\" />\n          <span\n            class=\"", "\"\n            style=", "\n          ></span>\n        </span>"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = v_icon_taggedTemplateLiteral(["\n          <span\n            @mouseover=", "\n            @mouseout=", "\n            @mousedown=", "\n            @mouseup=", "\n            class=\"link-icon\"\n          >\n            ", "\n          </span>\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = v_icon_taggedTemplateLiteral(["\n      <button\n        @mousedown=", "\n        @mouseout=", "\n        @mouseover=", "\n        @mouseup=", "\n        tabindex=", "\n        type=\"button\"\n        class=\"buttonText\"\n        aria-label=", "\n      >\n        ", "\n        <slot></slot>\n      </button>\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = v_icon_taggedTemplateLiteral(["\n      <a\n        @mousedown=", "\n        @mouseout=", "\n        @mouseover=", "\n        @mouseup=", "\n        tabindex=", "\n        href=", "\n        target=", "\n        class=\"anchorText\"\n        aria-label=", "\n      >\n        ", "\n        <slot></slot>\n      </a>\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = v_icon_taggedTemplateLiteral(["\n      <button\n        type=\"button\"\n        class=\"anchorButtonWidth\"\n        aria-label=", "\n      >\n        ", "\n        <slot class=\"flexNone slotClass\"></slot>\n      </button>\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = v_icon_taggedTemplateLiteral(["\n          <a\n            href=", "\n            class=\"anchorButtonWidth\"\n            aria-label=", "\n          >\n            ", "\n            <slot class=\"flexNone slotClass\"></slot>\n          </a>\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = v_icon_taggedTemplateLiteral(["<a\n          href=", "\n          class=\"anchorButtonWidth\"\n          aria-label=", "\n          ><slot id=\"iconSlot\"></slot\n        ></a>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = v_icon_taggedTemplateLiteral(["<a\n          aria-label=", "\n          href=", "\n          @click=", "\n        >\n          <link rel=\"stylesheet\" href=\"", "\" />\n          <i class=\"", "\" style=", "></i>\n        </a>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = v_icon_taggedTemplateLiteral(["<a\n          aria-label=", "\n          href=", "\n          @click=", "\n        >\n          ", "\n        </a>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = v_icon_taggedTemplateLiteral(["\n          <span\n            tabindex=", "\n            @mouseover=", "\n            @mouseout=", "\n            @mousedown=", "\n            @mouseup=", "\n            @keyup=", "\n          >\n            <link rel=\"stylesheet\" href=\"", "\" />\n            <i class=\"", "\" style=", "></i>\n          </span>\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = v_icon_taggedTemplateLiteral(["\n          <span\n            tabindex=", "\n            @mouseover=", "\n            @mouseout=", "\n            @mousedown=", "\n            @mouseup=", "\n            @keyup=", "\n          >\n            ", "\n          </span>\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = v_icon_taggedTemplateLiteral(["<div\n      class=", "\n      @mouseout=", "\n      @mouseover=", "\n    >\n      <span>", "</span>\n    </div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function v_icon_templateObject() {
  var data = v_icon_taggedTemplateLiteral(["<span\n      @mouseover=", "\n      @mouseout=", "\n      @mousedown=", "\n      @mouseup=", "\n    >\n      <slot id=\"iconSlot\"></slot>\n    </span>"]);

  v_icon_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function v_icon_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var v_icon_VIcon = _decorate([Object(lit_element["c" /* customElement */])('v-icon')], function (_initialize, _LitElement) {
  var VIcon = /*#__PURE__*/function (_LitElement2) {
    _inherits(VIcon, _LitElement2);

    var _super = _createSuper(VIcon);

    function VIcon() {
      var _this;

      _classCallCheck(this, VIcon);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return VIcon;
  }(_LitElement);

  return {
    F: VIcon,
    d: [{
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "active",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "color",
      value: function value() {
        return '--v-colors__secondary';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "disabled",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "error",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "height",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "hover",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "name",
      value: function value() {
        return 'infocircle';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "primary",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "secondary",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "darkOrange",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "selected",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "size",
      value: function value() {
        return '25px';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "href",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Number
      })],
      key: "tabIndex",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "target",
      value: function value() {
        return '_self';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "linkText",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "linkButton",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "applyHoverStyles",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "previousColor",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "hoverColorForIE",
      value: function value() {
        return '--v-colors__primary-darker-1';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "activeColorForIE",
      value: function value() {
        return '--v-states__button-active-color';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "hoverColor",
      value: function value() {
        return '--v-colors__voya-darker-orange';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "disableDefaultPrint",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "circleText",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Boolean
      })],
      key: "useCustomIcon",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "slot",
      value: function value() {
        return this.slot === 'iconSlot' && !this.name || '';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: String
      })],
      key: "focusable",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element["f" /* property */])({
        type: Number
      })],
      key: "iconTabIndex",
      value: function value() {
        return -1;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        if (this.slot) {
          Object(utils["d" /* createSlottedStyles */])(this, slottedStyles);
        }

        this.$svg = this.slot && this.shadowRoot.querySelector('slot') || this.shadowRoot.querySelector('svg') || this.shadowRoot.querySelector('i');
        this.$div = this.shadowRoot.querySelector('div');

        if (this.$svg) {
          this.$fillables = this.slot && this.querySelectorAll('.fillable') || this.$svg.querySelectorAll('.fillable');
          this.$circles = this.slot && this.querySelectorAll('.circle') || this.$svg.querySelectorAll('.circle');

          if (this.focusable === 'false' || Object(utils["p" /* isIE */])() && this.focusable !== 'true') {
            this.$svg.setAttribute('focusable', 'false');
          }
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        _get(_getPrototypeOf(VIcon.prototype), "connectedCallback", this).call(this);

        if (this.name === 'print' && !this.disableDefaultPrint) {
          this.shadowRoot.addEventListener('click', function () {
            _this2._callPrint();
          });
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this.name === 'print' && !this.disableDefaultPrint) {
          this.shadowRoot.removeEventListener('click', this._callPrint);
        }

        _get(_getPrototypeOf(VIcon.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('color') && !(this.primary || this.secondary || this.darkOrange)) this._assignColor();

        if (changedProperties.has('hover') && this.applyHoverStyles) {
          this._assignColor();
        }

        if ((this.$svg || this.circleText) && (changedProperties.has('size') || changedProperties.has('height') || changedProperties.has('width'))) this._assignSize();
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [commonStyles["a" /* default */], v_icon_styles];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this.linkText ? this._renderLinkText() : this.linkButton ? this.render_Button() : this.circleText ? this._renderCircle() : this._renderIcon();
      }
    }, {
      kind: "method",
      key: "renderSlottedIcon",
      value: function renderSlottedIcon() {
        return Object(lit_element["d" /* html */])(v_icon_templateObject(), this._handleMouseover_span, this._handleMouseout_span, this._handleMousedown_span, this._handleMouseup_span);
      }
    }, {
      kind: "method",
      key: "_renderCircle",
      value: function _renderCircle() {
        return Object(lit_element["d" /* html */])(_templateObject2(), Object(class_map["a" /* classMap */])({
          textCircle: true,
          applyHoverStyles: this.applyHoverStyles,
          hover: this.hover
        }), this._handleMouseout, this._handleMouseover, this.circleText);
      }
    }, {
      kind: "method",
      key: "_renderIcon",
      value: function _renderIcon() {
        return this.href ? this._renderAnchorIcon() : this._renderNormalIcon();
      }
    }, {
      kind: "field",
      key: "iconStyleRender",
      value: function value() {
        var _this3 = this;

        return function () {
          var renderCssDesignedStyles = _this3.primary || _this3.secondary || _this3.darkOrange || _this3.disabled || _this3.error;
          return "color: ".concat(!renderCssDesignedStyles && _this3._getBrowserSupportedColor(_this3.color), "; font-size: ").concat(_this3.size);
        };
      }
    }, {
      kind: "field",
      key: "existingCustomIcons",
      value: function value() {
        var _this4 = this;

        return function () {
          var existingCustomizedIcons = ['Accessibility', 'chevronleftcircle', 'clock', 'cogCircle', 'collapse', 'contactUs', 'envelopeCircle', 'expand', 'magnifier', 'profile', 'profileCircle', 'quote', 'scoreHealthYellow', 'search', 'security', 'shareCircle', 'siteMap', 'phone', 'nucleo'];
          var nameOfIcon = _this4.name;
          return existingCustomizedIcons.find(function (customIcons) {
            return customIcons.toLowerCase() === nameOfIcon.toLowerCase();
          });
        };
      }
    }, {
      kind: "method",
      key: "_renderNormalIcon",
      value: //TODO:Need to cleanup this existing custom icons once those are available in fa. For some reason most
      // of below icons are available in solid not rendering in regular version.
      function _renderNormalIcon() {
        var cdnBaseUrl = window && window.vds && window.vds.baseUrls && window.vds.baseUrls.cdnBaseUrl;
        var vdsfa = "".concat(cdnBaseUrl, "/global/fonts/font-awesome-icons/fontawesome-icons-all.css");
        return this.useCustomIcon || this.existingCustomIcons() ? Object(lit_element["d" /* html */])(_templateObject3(), this.iconTabIndex, this._handleMouseover_span, this._handleMouseout_span, this._handleMousedown_span, this._handleMouseup_span, this._handleKeyUp, svg(this.name, true)) : this.slot ? this.renderSlottedIcon() : Object(lit_element["d" /* html */])(_templateObject4(), this.iconTabIndex, this._handleMouseover_span, this._handleMouseout_span, this._handleMousedown_span, this._handleMouseup_span, this._handleKeyUp, vdsfa, svg(this.name), this.iconStyleRender());
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(e) {
        if (Object(keyboardAccessibility["d" /* spaceKeyup */])(e) || Object(keyboardAccessibility["b" /* enterKeyup */])(e)) {
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('vicon-keyup', {
            bubbles: true,
            composed: true,
            detail: {
              value: e.keyCode
            }
          }));
          return false;
        }
      }
    }, {
      kind: "method",
      key: "_renderAnchorIcon",
      value: function _renderAnchorIcon() {
        var cdnBaseUrl = window && window.vds && window.vds.baseUrls && window.vds.baseUrls.cdnBaseUrl;
        var vdsfa = "".concat(cdnBaseUrl, "/global/fonts/font-awesome-icons/fontawesome-icons-all.css");
        return this.useCustomIcon || this.existingCustomIcons() ? Object(lit_element["d" /* html */])(_templateObject5(), this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page', this.href, this.anchorIcon, svg(this.name, true)) : Object(lit_element["d" /* html */])(_templateObject6(), this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page', this.href, this.anchorIcon, vdsfa, svg(this.name), this.iconStyleRender());
      }
    }, {
      kind: "method",
      key: "_renderLinkText",
      value: function _renderLinkText() {
        this.size = '20px';
        return this.href ? this._anchorTemplate() : this._buttonTemplate();
      }
    }, {
      kind: "method",
      key: "render_Button",
      value: function render_Button() {
        return this.href && this.name !== 'print' ? this._anchorTemplate_Button() : this._buttonTemplate_Button();
      }
    }, {
      kind: "method",
      key: "_assignColor",
      value: function _assignColor() {
        var color = this._getColor();

        if (this.$fillables) {
          this.$fillables.forEach(function (fillable) {
            fillable.style.fill = color;
          });
        }

        if (this.$circles) {
          this.$circles.forEach(function (circle) {
            circle.style.stroke = color;
          });
        }
      }
    }, {
      kind: "method",
      key: "_assignHeightAndWidth",
      value: function _assignHeightAndWidth(height, width) {
        if (this.useCustomIcon || !this.existingCustomIcons()) {
          this.style.height = height;
          this.style.width = width;
        }

        if (this.$svg) {
          this.$svg.style.height = height;
          this.$svg.style.width = width;
        }

        if (this.circleText) {
          this.$div.style.lineHeight = height;
        }
      }
    }, {
      kind: "method",
      key: "_assignSize",
      value: function _assignSize() {
        var height, width;

        if (Boolean(this.height) && Boolean(this.width)) {
          height = this.height;
          width = this.width;
        } else {
          height = this.size;
          width = this.size;
        }

        this._assignHeightAndWidth(height, width);
      }
    }, {
      kind: "method",
      key: "_getColor",
      value: function _getColor() {
        if (this.disabled) return '--v-states__disabled-color';
        if (this.error) return '--v-states__error-color';
        if ((this.hover || this.active) && this.applyHoverStyles) return this._getBrowserSupportedColor(this.hoverColor);
        return this._getBrowserSupportedColor(this.color);
      }
    }, {
      kind: "method",
      key: "_getBrowserSupportedColor",
      value: function _getBrowserSupportedColor(color) {
        if (color && !color.startsWith('--v-')) {
          return color;
        } else {
          return Object(utils["b" /* browserSupportsCssVariables */])() ? "var(".concat(color, ")") : Object(utils["f" /* extractCssVarFromPolyfill */])({
            variable: color
          });
        }
      }
    }, {
      kind: "method",
      key: "_anchorTemplate",
      value: function _anchorTemplate() {
        return this.slot ? Object(lit_element["d" /* html */])(_templateObject7(), this.href, this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page') : Object(lit_element["d" /* html */])(_templateObject8(), this.href, this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page', this._renderIcon());
      }
    }, {
      kind: "method",
      key: "_buttonTemplate",
      value: function _buttonTemplate() {
        return Object(lit_element["d" /* html */])(_templateObject9(), this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page', this._renderIcon());
      }
    }, {
      kind: "method",
      key: "_anchorTemplate_Button",
      value: function _anchorTemplate_Button() {
        return Object(lit_element["d" /* html */])(_templateObject10(), this._handleMousedown, this._handleMouseout, this._handleMouseover, this._handleMouseup, this.tabIndex, this.href, this.target, this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page', this._getLinkIcon());
      }
    }, {
      kind: "method",
      key: "_buttonTemplate_Button",
      value: function _buttonTemplate_Button() {
        return Object(lit_element["d" /* html */])(_templateObject11(), this._handleMousedown, this._handleMouseout, this._handleMouseover, this._handleMouseup, this.tabIndex, this.getAttribute('aria-label') ? this.getAttribute('aria-label') : this.target === '_blank' ? 'opens ' + this.name + ' in new tab' : 'redirects to ' + this.name + ' page', this._getLinkIcon());
      }
    }, {
      kind: "method",
      key: "_handleMousedown",
      value: function _handleMousedown() {
        this.active = true;
      }
    }, {
      kind: "method",
      key: "_handleMouseout",
      value: function _handleMouseout() {
        this.hover = false;
        this.active = false;
      }
    }, {
      kind: "method",
      key: "_handleMouseover",
      value: function _handleMouseover() {
        this.hover = true;
      }
    }, {
      kind: "method",
      key: "_handleMouseup",
      value: function _handleMouseup() {
        this.active = false;
      }
    }, {
      kind: "method",
      key: "_handleMouseover_span",
      value: function _handleMouseover_span() {
        var _this5 = this;

        var primaryOrSecondary = this.primary || this.secondary || this.darkOrange;

        if (Object(utils["p" /* isIE */])() && primaryOrSecondary && !this.disabled && !this.error) {
          this.hover = true;

          var color = this._getBrowserSupportedColor(this.hoverColorForIE);

          if (this.$fillables) {
            this.$fillables.forEach(function (fillable) {
              _this5.previousColor = fillable.style.fill;
              fillable.style.fill = color;
            });
          }

          if (this.$circles) {
            this.$circles.forEach(function (circle) {
              _this5.previousColor = circle.style.stroke;
              circle.style.stroke = color;
            });
          }
        }
      }
    }, {
      kind: "method",
      key: "_handleMouseout_span",
      value: function _handleMouseout_span() {
        var _this6 = this;

        var primaryOrSecondary = this.primary || this.secondary || this.darkOrange;

        if (Object(utils["p" /* isIE */])() && primaryOrSecondary && !this.disabled && !this.error) {
          this.hover = false;

          if (this.$fillables) {
            this.$fillables.forEach(function (fillable) {
              fillable.style.fill = _this6.previousColor;
            });
          }

          if (this.$circles) {
            this.$circles.forEach(function (circle) {
              circle.style.stroke = _this6.previousColor;
            });
          }
        }
      }
    }, {
      kind: "method",
      key: "_handleMousedown_span",
      value: function _handleMousedown_span() {
        var primaryOrSecondary = this.primary || this.secondary || this.darkOrange;

        if (Object(utils["p" /* isIE */])() && primaryOrSecondary && !this.disabled && !this.error) {
          this.active = true;

          var color = this._getBrowserSupportedColor(this.activeColorForIE);

          if (this.$fillables) {
            this.$fillables.forEach(function (fillable) {
              fillable.style.fill = color;
            });
          }

          if (this.$circles) {
            this.$circles.forEach(function (circle) {
              circle.style.stroke = color;
            });
          }
        }

        this.dispatchEvent(new CustomEvent('vicon-keyup', {
          bubbles: true,
          composed: true,
          detail: {
            value: this.value
          }
        }));
      }
    }, {
      kind: "method",
      key: "_handleMouseup_span",
      value: function _handleMouseup_span() {
        var _this7 = this;

        var primaryOrSecondary = this.primary || this.secondary || this.darkOrange;

        if (Object(utils["p" /* isIE */])() && primaryOrSecondary && !this.disabled && !this.error) {
          this.active = false;
          this.hover = false;

          if (this.$fillables) {
            this.$fillables.forEach(function (fillable) {
              fillable.style.fill = _this7.previousColor;
            });
          }

          if (this.$circles) {
            this.$circles.forEach(function (circle) {
              circle.style.stroke = _this7.previousColor;
            });
          }
        }
      }
    }, {
      kind: "method",
      key: "_callPrint",
      value: function _callPrint() {
        window.print();
      }
    }, {
      kind: "method",
      key: "_getLinkIcon",
      value: function _getLinkIcon() {
        var cdnBaseUrl = window && window.vds && window.vds.baseUrls && window.vds.baseUrls.cdnBaseUrl;
        var vdsfa = "".concat(cdnBaseUrl, "/global/fonts/font-awesome-icons/fontawesome-icons-all.css");
        return this.useCustomIcon || this.existingCustomIcons() ? Object(lit_element["d" /* html */])(_templateObject12(), this._handleMouseover_span, this._handleMouseout_span, this._handleMousedown_span, this._handleMouseup_span, svg(this.name, true)) : Object(lit_element["d" /* html */])(_templateObject13(), this._handleMouseover_span, this._handleMouseout_span, this._handleMousedown_span, this._handleMouseup_span, vdsfa, svg(this.name), this.iconStyleRender());
      }
    }]
  };
}, lit_element["a" /* LitElement */]);

/***/ }),

/***/ "1VLE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

/***/ }),

/***/ "2ysu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadFontAwesome; });
var loadFontAwesome = function loadFontAwesome() {
  var cdnBaseUrl = window && window.vds && window.vds.baseUrls && window.vds.baseUrls.cdnBaseUrl; //https://stackoverflow.com/questions/50342356/how-to-use-font-awesome-with-polymer-litelement
  //I think we need to move below logic to VDS start up or app teams need to load in thier application.

  var fontEl = document.createElement('link');
  fontEl.rel = 'stylesheet';
  fontEl.href = "".concat(cdnBaseUrl, "/global/fonts/font-awesome-icons/fontawesome-icons-all.css");

  if (document.head && !window.vdsFontAwesomeLoaded) {
    window.vdsFontAwesomeLoaded = true;
    document.head.appendChild(fontEl);
  }
};

/***/ }),

/***/ "4qtV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AaG5");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 // IE11 doesn't support classList on SVG elements, so we emulate it with a Set

var ClassList = /*#__PURE__*/function () {
  function ClassList(element) {
    _classCallCheck(this, ClassList);

    this.classes = new Set();
    this.changed = false;
    this.element = element;
    var classList = (element.getAttribute('class') || '').split(/\s+/);

    var _iterator = _createForOfIteratorHelper(classList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cls = _step.value;
        this.classes.add(cls);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _createClass(ClassList, [{
    key: "add",
    value: function add(cls) {
      this.classes.add(cls);
      this.changed = true;
    }
  }, {
    key: "remove",
    value: function remove(cls) {
      this.classes["delete"](cls);
      this.changed = true;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.changed) {
        var classString = '';
        this.classes.forEach(function (cls) {
          return classString += cls + ' ';
        });
        this.element.setAttribute('class', classString);
      }
    }
  }]);

  return ClassList;
}();
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */


var previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */

var classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__[/* directive */ "d"])(function (classInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__[/* AttributePart */ "a"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__[/* PropertyPart */ "c"] || part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var element = committer.element;
    var previousClasses = previousClassesCache.get(part);

    if (previousClasses === undefined) {
      // Write static classes once
      // Use setAttribute() because className isn't a string on SVG elements
      element.setAttribute('class', committer.strings.join(' '));
      previousClassesCache.set(part, previousClasses = new Set());
    }

    var classList = element.classList || new ClassList(element); // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.

    previousClasses.forEach(function (name) {
      if (!(name in classInfo)) {
        classList.remove(name);
        previousClasses["delete"](name);
      }
    }); // Add or remove classes based on their classMap value

    for (var name in classInfo) {
      var value = classInfo[name];

      if (value != previousClasses.has(name)) {
        // We explicitly want a loose truthy check of `value` because it seems
        // more convenient that '' and 0 are skipped.
        if (value) {
          classList.add(name);
          previousClasses.add(name);
        } else {
          classList.remove(name);
          previousClasses["delete"](name);
        }
      }
    }

    if (typeof classList.commit === 'function') {
      classList.commit();
    }
  };
});

/***/ }),

/***/ "4yuk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return nodeMarker; });
/* unused harmony export markerRegex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lastAttributeNameRegex; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

  var walker = document.createTreeWalker(element.content, 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  , null, false); // Keeps track of the last index associated with a part. We try to delete
  // unnecessary nodes, but we never want to associate two different parts
  // to the same index. They must have a constant node between.

  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;

  while (partIndex < length) {
    var node = walker.nextNode();

    if (node === null) {
      // We've exhausted the content inside a nested template element.
      // Because we still have parts (the outer for-loop), we know:
      // - There is a template in the stack
      // - The walker will find a nextNode outside the template
      walker.currentNode = stack.pop();
      continue;
    }

    index++;

    if (node.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) {
        if (node.hasAttributes()) {
          var attributes = node.attributes;
          var _length = attributes.length; // Per
          // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order.
          // In particular, Edge/IE can return them out of order, so we cannot
          // assume a correspondence between part index and attribute index.

          var count = 0;

          for (var i = 0; i < _length; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }

          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = strings[partIndex]; // Find the attribute name

            var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
            // All bound attributes have had a suffix added in
            // TemplateResult#getHTML to opt out of special attribute
            // handling. To look up the attribute value we also need to add
            // the suffix.

            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            var attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            var statics = attributeValue.split(markerRegex);
            this.parts.push({
              type: 'attribute',
              index: index,
              name: name,
              strings: statics
            });
            partIndex += statics.length - 1;
          }
        }

        if (node.tagName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        var data = node.data;

        if (data.indexOf(marker) >= 0) {
          var parent = node.parentNode;

          var _strings = data.split(markerRegex);

          var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts

          for (var _i = 0; _i < lastIndex; _i++) {
            var insert = void 0;
            var s = _strings[_i];

            if (s === '') {
              insert = createMarker();
            } else {
              var match = lastAttributeNameRegex.exec(s);

              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }

              insert = document.createTextNode(s);
            }

            parent.insertBefore(insert, node);
            this.parts.push({
              type: 'node',
              index: ++index
            });
          } // If there's no text, we must insert a comment to mark our place.
          // Else, we can trust it will stick around after cloning.


          if (_strings[lastIndex] === '') {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = _strings[lastIndex];
          } // We have a part for each match found


          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8
    /* Node.COMMENT_NODE */
    ) {
        if (node.data === marker) {
          var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
          // the following are true:
          //  * We don't have a previousSibling
          //  * The previousSibling is already the start of a previous part

          if (node.previousSibling === null || index === lastPartIndex) {
            index++;

            _parent.insertBefore(createMarker(), node);
          }

          lastPartIndex = index;
          this.parts.push({
            type: 'node',
            index: index
          }); // If we don't have a nextSibling, keep this node so we have an end.
          // Else, we can remove it to save future costs.

          if (node.nextSibling === null) {
            node.data = '';
          } else {
            nodesToRemove.push(node);
            index--;
          }

          partIndex++;
        } else {
          var _i2 = -1;

          while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            // TODO (justinfagnani): consider whether it's even worth it to
            // make bindings in comments work
            this.parts.push({
              type: 'node',
              index: -1
            });
            partIndex++;
          }
        }
      }
  } // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "6unr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tFPJ");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4yuk");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance = /*#__PURE__*/function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.__parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.__parts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari does not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      var fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__[/* isCEPolyfill */ "a"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

      var walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length) {
        part = parts[partIndex];

        if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__[/* isTemplatePartActive */ "d"])(part)) {
          this.__parts.push(undefined);

          partIndex++;
          continue;
        } // Progress the tree walker until we find our next part's node.
        // Note that multiple parts may share the same node (attribute parts
        // on a single element), so this loop may not run at all.


        while (nodeIndex < part.index) {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }

          if ((node = walker.nextNode()) === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        } // We've arrived at our part's node.


        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);

          _part2.insertAfterNode(node.previousSibling);

          this.__parts.push(_part2);
        } else {
          var _this$__parts;

          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }

        partIndex++;
      }

      if (_dom_js__WEBPACK_IMPORTED_MODULE_0__[/* isCEPolyfill */ "a"]) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

/***/ }),

/***/ "7Qib":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ isChrome; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ isSafari; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ isIE; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ isIEOrEdge; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ createSlottedStyles["a" /* createSlottedStyles */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ extractCssVarFromPolyfill; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ replaceCssVars; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ DEFAULT_SLOT_NAME; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getAssignedElements; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ getSlottedElements; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ getSlottedElementsBySlotName; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ getElementByIdx; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ removeElements; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ eventEmitters_emitStandardEvent; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ featureDetection["a" /* browserSupportsCssVariables */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ featureDetection["b" /* browserSupportsWidthMaxContent */]; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ featureDetection["c" /* isMobileDevice */]; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ transposeAttributes; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ isMobile; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ isIosMobile; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ isHostMatchWithVoya; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ isAbsoluteUrl; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ googleAnalytics["a" /* gaEvent */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ getUniqueId; });

// UNUSED EXPORTS: extractCssVarsFromStylesheet, filterNodesByTagName, getSlotsByName, listenForEvents, loadFontAwesome, enterKeypress, enterKeyup, tapKeypress, tabKeyup, spaceKeypress, spaceKeyup

// CONCATENATED MODULE: ./src/utils/browserDetection.js
var isChrome = function isChrome() {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
};
var isSafari = function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
var isIE = function isIE() {
  return document.body.style.msTouchAction !== undefined;
};
var isIEOrEdge = function isIEOrEdge() {
  return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
};
// EXTERNAL MODULE: ./src/utils/createSlottedStyles.js
var createSlottedStyles = __webpack_require__("ZEzQ");

// CONCATENATED MODULE: ./src/utils/cssVariableExtractors.js
var extractCssVarFromPolyfill = function extractCssVarFromPolyfill(_ref) {
  var _ref$context = _ref.context,
      context = _ref$context === void 0 ? document : _ref$context,
      variable = _ref.variable;
  return (// eslint-disable-next-line
    ShadyCSS.getComputedStyleValue(context, variable)
  );
};
var extractCssVarsFromStylesheet = function extractCssVarsFromStylesheet(stylesheet) {
  return stylesheet.match(/var\((--[\-\_a-zA-Z0-9]+)\)/g) // eslint-disable-line
  .filter(function (value, index, self) {
    return self.indexOf(value) === index;
  }).map(function (value) {
    return value.replace(/var\(|\)/g, '');
  });
};
var replaceCssVars = function replaceCssVars(_ref2) {
  var context = _ref2.context,
      styles = _ref2.styles;
  var stylesWithoutVars = styles;
  var cssVars = extractCssVarsFromStylesheet(styles);
  cssVars.forEach(function (variable) {
    var regex = new RegExp("var\\(".concat(variable, "\\)"), 'g');
    var value = extractCssVarFromPolyfill({
      context: context,
      variable: variable
    });
    stylesWithoutVars = stylesWithoutVars.replace(regex, value);
  });
  return stylesWithoutVars;
};
// CONCATENATED MODULE: ./src/utils/elementIterators.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_SLOT_NAME = 'default';
var filterNodesByTagName = function filterNodesByTagName(nodes, tagName) {
  return Array.prototype.filter.call(nodes, function (node) {
    return node.tagName === tagName;
  });
};
var getAssignedElements = function getAssignedElements(slot) {
  return Array.prototype.filter.call(slot.assignedNodes(), function (e) {
    return e.nodeType === Node.ELEMENT_NODE;
  });
};
var getSlottedElements = function getSlottedElements(component) {
  var slot = component.shadowRoot.querySelector('slot');
  return getAssignedElements(slot);
};
var getSlotsByName = function getSlotsByName(component) {
  var slots = component.shadowRoot.querySelectorAll('slot');
  return Array.prototype.reduce.call(slots, function (acc, slot) {
    var name = slot.name ? slot.name : slot.getAttribute('name') ? slot.getAttribute('name') : DEFAULT_SLOT_NAME;
    acc = _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, name, slot));
    return acc;
  }, {});
};
var getSlottedElementsBySlotName = function getSlottedElementsBySlotName(component) {
  var slotsByName = getSlotsByName(component);
  return Object.entries(slotsByName).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        slot = _ref2[1];

    acc = _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, name, getAssignedElements(slot)));
    return acc;
  }, {});
};
var getElementByIdx = function getElementByIdx(elements, idx) {
  return Array.prototype.slice.call(elements, idx)[0];
};
var removeElements = function removeElements(elements) {
  return elements.map(function (el) {
    return el.parentNode.removeChild(el);
  });
};
// CONCATENATED MODULE: ./src/utils/eventEmitters.js

var eventEmitters_emitStandardEvent = function emitStandardEvent(component, DOMString) {
  var event;

  if (isIE()) {
    event = document.createEvent('Event');
    event.initEvent('input', true, true);
  } else {
    event = new Event(DOMString, {
      bubbles: true,
      cancelable: true
    });
  }

  component.dispatchEvent(event);
};
// EXTERNAL MODULE: ./src/utils/featureDetection.js
var featureDetection = __webpack_require__("KXV8");

// CONCATENATED MODULE: ./src/utils/transposeAttributes.js
var transposeAttributes = function transposeAttributes(_ref) {
  var _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? [] : _ref$attributes,
      target = _ref.target,
      root = _ref.root;
  var validAttributes = Object.values(root.attributes).filter(function (_ref2) {
    var name = _ref2.name;
    return attributes.includes(name);
  });
  validAttributes.forEach(function (_ref3) {
    var name = _ref3.name,
        value = _ref3.value;
    target.setAttribute(name, value);
  });
};
// CONCATENATED MODULE: ./src/utils/deviceDetection.js
var isMobile = function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
};
var isIosMobile = function isIosMobile() {
  return (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
};
// CONCATENATED MODULE: ./src/utils/uRLUtility.js
var isHostMatchWithVoya = function isHostMatchWithVoya(Url) {
  var hostRegexList = [/.*voya.com/, /.*voya.net/, /.*localhost/, /.*voyaemployeebenefits.com/];
  return hostRegexList.some(function (host) {
    return host.test(Url);
  });
};
var isAbsoluteUrl = function isAbsoluteUrl(Url) {
  var hostRegexList = [/.*http:/, /.*https:/];
  return hostRegexList.some(function (host) {
    return host.test(Url);
  });
};
// EXTERNAL MODULE: ./src/utils/googleAnalytics.js
var googleAnalytics = __webpack_require__("pAs2");

// EXTERNAL MODULE: ./src/utils/loadFontAwesome.js
var loadFontAwesome = __webpack_require__("2ysu");

// CONCATENATED MODULE: ./src/utils/uniqueId.js
function getUniqueId() {
  return Date.now() + Math.random();
}
// EXTERNAL MODULE: ./src/utils/keyboardAccessibility.js
var keyboardAccessibility = __webpack_require__("BAbn");

// CONCATENATED MODULE: ./src/utils/index.js














/***/ }),

/***/ "AaG5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ directive["a" /* directive */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ parts["b" /* AttributePart */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ parts["e" /* NodePart */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ parts["g" /* PropertyPart */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ render["b" /* render */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ lit_html_html; });

// UNUSED EXPORTS: DefaultTemplateProcessor, defaultTemplateProcessor, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, BooleanAttributePart, EventPart, isIterable, isPrimitive, PropertyCommitter, parts, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, svg

// EXTERNAL MODULE: ./node_modules/lit-html/lib/parts.js
var parts = __webpack_require__("XI78");

// CONCATENATED MODULE: ./node_modules/lit-html/lib/default-template-processor.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

var default_template_processor_DefaultTemplateProcessor = /*#__PURE__*/function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _committer = new parts["f" /* PropertyCommitter */](element, name.slice(1), strings);

        return _committer.parts;
      }

      if (prefix === '@') {
        return [new parts["d" /* EventPart */](element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new parts["c" /* BooleanAttributePart */](element, name.slice(1), strings)];
      }

      var committer = new parts["a" /* AttributeCommitter */](element, name, strings);
      return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new parts["e" /* NodePart */](options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new default_template_processor_DefaultTemplateProcessor();
// EXTERNAL MODULE: ./node_modules/lit-html/lib/template-result.js
var template_result = __webpack_require__("GMCd");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/directive.js
var directive = __webpack_require__("eByC");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/dom.js
var dom = __webpack_require__("tFPJ");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/part.js
var part = __webpack_require__("1VLE");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/render.js
var render = __webpack_require__("wmha");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/template-factory.js
var template_factory = __webpack_require__("PqmH");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/template-instance.js
var template_instance = __webpack_require__("6unr");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/template.js
var template = __webpack_require__("4yuk");

// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


var lit_html_html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new template_result["b" /* TemplateResult */](strings, values, 'html', defaultTemplateProcessor);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

var lit_html_svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new template_result["a" /* SVGTemplateResult */](strings, values, 'svg', defaultTemplateProcessor);
};

/***/ }),

/***/ "BAbn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enterKeypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enterKeyup; });
/* unused harmony export tapKeypress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tabKeyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return spaceKeypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return spaceKeyup; });
var enterKeypress = function enterKeypress(event) {
  return event.type === 'keypress' && event.keyCode === 13;
};
var enterKeyup = function enterKeyup(event) {
  return event.type === 'keyup' && event.keyCode === 13;
};
var tapKeypress = function tapKeypress(event) {
  return event.type === 'keypress' && event.keyCode === 9;
};
var tabKeyup = function tabKeyup(event) {
  return event.type === 'keyup' && event.keyCode === 9;
};
var spaceKeypress = function spaceKeypress(event) {
  return event.type === 'keypress' && event.keyCode === 32;
};
var spaceKeyup = function spaceKeyup(event) {
  return event.type === 'keyup' && event.keyCode === 32;
};

/***/ }),

/***/ "CQbg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ customElement; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ property; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ internalProperty; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ lit_html["e" /* html */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ unsafeCSS; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ css; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ lit_element_LitElement; });

// UNUSED EXPORTS: defaultConverter, notEqual, UpdatingElement, query, queryAsync, queryAll, eventOptions, queryAssignedNodes, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult

// EXTERNAL MODULE: ./node_modules/lit-html/lib/dom.js
var dom = __webpack_require__("tFPJ");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/template.js
var lib_template = __webpack_require__("4yuk");

// CONCATENATED MODULE: ./node_modules/lit-html/lib/modify-template.js
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = modify_template_nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = modify_template_nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var modify_template_nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if (Object(lib_template["d" /* isTemplatePartActive */])(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = modify_template_nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = modify_template_nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = modify_template_nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/lit-html/lib/render.js
var lib_render = __webpack_require__("wmha");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/template-factory.js
var template_factory = __webpack_require__("PqmH");

// EXTERNAL MODULE: ./node_modules/lit-html/lib/template-instance.js
var template_instance = __webpack_require__("6unr");

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js + 1 modules
var lit_html = __webpack_require__("AaG5");

// CONCATENATED MODULE: ./node_modules/lit-html/lib/shady-render.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */






 // Get a key to lookup in `templateCaches`.

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shady_render_shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = template_factory["a" /* templateCaches */].get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      template_factory["a" /* templateCaches */].set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(lib_template["f" /* marker */]);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new lib_template["a" /* Template */](result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};
var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var shady_render_removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = template_factory["a" /* templateCaches */].get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var shady_render_prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style');
  var length = styles.length; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < length; i++) {
    var _style = styles[i];

    _style.parentNode.removeChild(_style);

    condensedStyle.textContent += _style.textContent;
  } // Remove styles from nested templates in this scope.


  shady_render_removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  var content = templateElement.content;

  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  var style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var shady_render_render = function render(result, container, options) {
  if (!options || _typeof(options) !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  var scopeName = options.scopeName;
  var hasRendered = lib_render["a" /* parts */].has(container);
  var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  Object(lib_render["b" /* render */])(result, renderContainer, Object.assign({
    templateFactory: shady_render_shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = lib_render["a" /* parts */].get(renderContainer);
    lib_render["a" /* parts */]["delete"](renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.

    var template = part.value instanceof template_instance["a" /* TemplateInstance */] ? part.value.template : undefined;
    shady_render_prepareTemplateStyles(scopeName, renderContainer, template);
    Object(dom["b" /* removeNodes */])(container, container.firstChild);
    container.appendChild(renderContainer);
    lib_render["a" /* parts */].set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};
// CONCATENATED MODULE: ./node_modules/lit-element/lib/updating-element.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function updating_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { updating_element_typeof = function _typeof(obj) { return typeof obj; }; } else { updating_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return updating_element_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (updating_element_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

var finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

var UpdatingElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  var _super = _createSuper(UpdatingElement);

  function UpdatingElement() {
    var _this;

    _classCallCheck(this, UpdatingElement);

    _this = _super.call(this);

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      var _this2 = this;

      this._updateState = 0;
      this._updatePromise = new Promise(function (res) {
        return _this2._enableUpdatingResolver = res;
      });
      this._changedProperties = new Map();

      this._saveInstanceProperties(); // ensures first update will be caught by an early access of
      // `updateComplete`


      this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this3.hasOwnProperty(p)) {
          var value = _this3[p];
          delete _this3[p];

          if (!_this3._instanceProperties) {
            _this3._instanceProperties = new Map();
          }

          _this3._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this4 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this4[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // Ensure first connection completes an update. Updates cannot complete
      // before connection.
      this.enableUpdating();
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating() {
      if (this._enableUpdatingResolver !== undefined) {
        this._enableUpdatingResolver();

        this._enableUpdatingResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
      // the type; it has issues with tracking types through statics
      // tslint:disable-next-line:no-unnecessary-type-assertion

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor.getPropertyOptions(propName); // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "requestUpdateInternal",
    value: function requestUpdateInternal(name, oldValue, options) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        options = options || ctor.getPropertyOptions(name);

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._updatePromise = this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this.requestUpdateInternal(name, oldValue);
      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                _context.prev = 1;
                _context.next = 4;
                return this._updatePromise;

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return result;

              case 12:
                return _context.abrupt("return", !this._hasRequestedUpdate);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "performUpdate",

    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    value: function performUpdate() {
      // Abort any update if one is not pending when this is called.
      // This can happen if `performUpdate` is called early to "flush"
      // the update.
      if (!this._hasRequestedUpdate) {
        return;
      } // Mixin instance properties once, if they exist.


      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        } else {
          this._markUpdated();
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false; // Ensure element can accept additional updates after an exception.

        this._markUpdated();

        throw e;
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "_getUpdateComplete",

    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    value: function _getUpdateComplete() {
      return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

        this._reflectingProperties = undefined;
      }

      this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
  }], [{
    key: "_ensureClassProperties",

    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */
    value: function _ensureClassProperties() {
      var _this6 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this6._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = updating_element_typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      var descriptor = this.getPropertyDescriptor(name, key, options);

      if (descriptor !== undefined) {
        Object.defineProperty(this.prototype, name, descriptor);
      }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */

  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(name, key, options) {
      return {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          var oldValue = this[name];
          this[key] = value;
          this.requestUpdateInternal(name, oldValue, options);
        },
        configurable: true,
        enumerable: true
      };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */

  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(name) {
      return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      // finalize any superclasses
      var superCtor = Object.getPrototypeOf(this);

      if (!superCtor.hasOwnProperty(finalized)) {
        superCtor.finalize();
      }

      this[finalized] = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iterator = _createForOfIteratorHelper(propKeys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this7 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this7._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this7._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
  }]);

  return UpdatingElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;
// CONCATENATED MODULE: ./node_modules/lit-element/lib/decorators.js
function decorators_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function decorators_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { decorators_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { decorators_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function decorators_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { decorators_typeof = function _typeof(obj) { return typeof obj; }; } else { decorators_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return decorators_typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

var standardCustomElement = function standardCustomElement(tagName, descriptor) {
  var kind = descriptor.kind,
      elements = descriptor.elements;
  return {
    kind: kind,
    elements: elements,
    // This callback is called once the class is otherwise fully defined
    finisher: function finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */


var customElement = function customElement(tagName) {
  return function (classOrDescriptor) {
    return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
};

var standardProperty = function standardProperty(options, element) {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign(Object.assign({}, element), {
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer: function initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};

var legacyProperty = function legacyProperty(options, proto, name) {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
  };
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */

function internalProperty(options) {
  return property({
    attribute: false,
    hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged
  });
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function query(selector, cache) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };

    if (cache) {
      var key = decorators_typeof(name) === 'symbol' ? Symbol() : "__".concat(name);

      descriptor.get = function () {
        if (this[key] === undefined) {
          this[key] = this.renderRoot.querySelector(selector);
        }

        return this[key];
      };
    }

    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
} // Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.

/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */

function queryAsync(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        var _this = this;

        return decorators_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.updateComplete;

                case 2:
                  return _context.abrupt("return", _this.renderRoot.querySelector(selector));

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAll(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelectorAll(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

var legacyQuery = function legacyQuery(descriptor, proto, name) {
  Object.defineProperty(proto, name, descriptor);
};

var standardQuery = function standardQuery(descriptor, element) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor: descriptor
  };
};

var standardEventOptions = function standardEventOptions(options, element) {
  return Object.assign(Object.assign({}, element), {
    finisher: function finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }
  });
};

var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options, proto, name) {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */


function eventOptions(options) {
  // Return value typed as any to prevent TypeScript from complaining that
  // standard decorator function signature does not match TypeScript decorator
  // signature
  // TODO(kschaaf): unclear why it was only failing on this decorator and not
  // the others
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
  };
} // x-browser support for matches
// tslint:disable-next-line:no-any

var ElementProto = Element.prototype;
var legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAssignedNodes() {
  var slotName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var flatten = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        var slotSelector = "slot".concat(slotName ? "[name=".concat(slotName, "]") : ':not([name])');
        var slot = this.renderRoot.querySelector(slotSelector);
        var nodes = slot && slot.assignedNodes({
          flatten: flatten
        });

        if (nodes && selector) {
          nodes = nodes.filter(function (node) {
            return node.nodeType === Node.ELEMENT_NODE && node.matches ? node.matches(selector) : legacyMatches.call(node, selector);
          });
        }

        return nodes;
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
// CONCATENATED MODULE: ./node_modules/lit-element/lib/css-tag.js
function css_tag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function css_tag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function css_tag_createClass(Constructor, protoProps, staticProps) { if (protoProps) css_tag_defineProperties(Constructor.prototype, protoProps); if (staticProps) css_tag_defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult = /*#__PURE__*/function () {
  function CSSResult(cssText, safeToken) {
    css_tag_classCallCheck(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  css_tag_createClass(CSSResult, [{
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }, {
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }]);

  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};
// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js
function lit_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lit_element_typeof = function _typeof(obj) { return typeof obj; }; } else { lit_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lit_element_typeof(obj); }

function lit_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lit_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lit_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) lit_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) lit_element_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = lit_element_getPrototypeOf(object); if (object === null) break; } return object; }

function lit_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) lit_element_setPrototypeOf(subClass, superClass); }

function lit_element_setPrototypeOf(o, p) { lit_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return lit_element_setPrototypeOf(o, p); }

function lit_element_createSuper(Derived) { var hasNativeReflectConstruct = lit_element_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = lit_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = lit_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return lit_element_possibleConstructorReturn(this, result); }; }

function lit_element_possibleConstructorReturn(self, call) { if (call && (lit_element_typeof(call) === "object" || typeof call === "function")) { return call; } return lit_element_assertThisInitialized(self); }

function lit_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function lit_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function lit_element_getPrototypeOf(o) { lit_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return lit_element_getPrototypeOf(o); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
 * The `UpdatingElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */






 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.4.0');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

var renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

var lit_element_LitElement = /*#__PURE__*/function (_UpdatingElement) {
  lit_element_inherits(LitElement, _UpdatingElement);

  var _super = lit_element_createSuper(LitElement);

  function LitElement() {
    lit_element_classCallCheck(this, LitElement);

    return _super.apply(this, arguments);
  }

  lit_element_createClass(LitElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    value: function initialize() {
      _get(lit_element_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.constructor._getUniqueStyles();

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open'
      });
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s instanceof CSSStyleSheet ? s : s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(lit_element_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      var templateResult = this.render();

      _get(lit_element_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties); // If render is not implemented by the component, don't call lit-html render


      if (templateResult !== renderNotImplemented) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */

  }, {
    key: "render",
    value: function render() {
      return renderNotImplemented;
    }
  }], [{
    key: "getStyles",

    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    value: function getStyles() {
      return this.styles;
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Only gather styles once per class
      if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
        return;
      } // Take care not to call `this.getStyles()` multiple times since this
      // generates new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.


      var userStyles = this.getStyles();

      if (Array.isArray(userStyles)) {
        // De-duplicate styles preserving the _last_ instance in the set.
        // This is a performance optimization to avoid duplicated styles that can
        // occur especially when composing via subclassing.
        // The last item is kept to try to preserve the cascade order with the
        // assumption that it's most important that last added styles override
        // previous styles.
        var addStyles = function addStyles(styles, set) {
          return styles.reduceRight(function (set, s) {
            return (// Note: On IE set.add() does not return the set
              Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
            );
          }, set);
        }; // Array.from does not work on Set in IE, otherwise return
        // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


        var set = addStyles(userStyles, new Set());
        var styles = [];
        set.forEach(function (v) {
          return styles.unshift(v);
        });
        this._styles = styles;
      } else {
        this._styles = userStyles === undefined ? [] : [userStyles];
      } // Ensure that there are no invalid CSSStyleSheet instances here. They are
      // invalid in two conditions.
      // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
      //     this is impossible to check except via .replaceSync or use
      // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
      //     false)


      this._styles = this._styles.map(function (s) {
        if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
          // Flatten the cssText from the passed constructible stylesheet (or
          // undetectable non-constructible stylesheet). The user might have
          // expected to update their stylesheets over time, but the alternative
          // is a crash.
          var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
            return css + rule.cssText;
          }, '');
          return unsafeCSS(cssText);
        }

        return s;
      });
    }
  }]);

  return LitElement;
}(UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */

lit_element_LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

lit_element_LitElement.render = shady_render_render;

/***/ }),

/***/ "GMCd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tFPJ");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4yuk");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */

var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
});
var commentMarker = " ".concat(_template_js__WEBPACK_IMPORTED_MODULE_1__[/* marker */ "f"], " ");
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult = /*#__PURE__*/function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment position.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__[/* lastAttributeNameRegex */ "e"].exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__[/* nodeMarker */ "g"]);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__[/* boundAttributeSuffix */ "b"] + attributeMatch[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__[/* marker */ "f"];
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      var value = this.getHTML();

      if (policy !== undefined) {
        // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
      }

      template.innerHTML = value;
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

var SVGTemplateResult = /*#__PURE__*/function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  var _super = _createSuper(SVGTemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _super.apply(this, arguments);
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[/* reparentNodes */ "c"])(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

/***/ }),

/***/ "KXV8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return browserSupportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return browserSupportsWidthMaxContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMobileDevice; });
var browserSupportsCssVariables = function browserSupportsCssVariables() {
  return typeof CSS !== 'undefined' ? CSS.supports('color', 'var(--fake-var)') : false;
};
var browserSupportsWidthMaxContent = function browserSupportsWidthMaxContent() {
  return typeof CSS !== 'undefined' ? CSS.supports('width', 'max-content') || CSS.supports('width', '-moz-max-content') || CSS.supports('width', '-webkit-max-content') : false;
};
var isMobileDevice = function isMobileDevice() {
  return screen.width < 700 ? true : false;
};

/***/ }),

/***/ "ONJ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CQbg");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Universal Box Model Fix */\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  p {\n    margin: 0;\n  }\n\n  /* Common component styles */\n  :host {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["a"] = (Object(lit_element__WEBPACK_IMPORTED_MODULE_0__[/* css */ "b"])(_templateObject()));

/***/ }),

/***/ "PqmH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4yuk");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__[/* marker */ "f"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__[/* Template */ "a"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/***/ }),

/***/ "XI78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isPrimitive; });
/* unused harmony export isIterable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eByC");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tFPJ");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1VLE");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6unr");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GMCd");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4yuk");
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var isIterable = function isIterable(value) {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

var AttributeCommitter = /*#__PURE__*/function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var parts = this.parts; // If we're assigning an attribute via syntax like:
      //    attr="${foo}"  or  attr=${foo}
      // but not
      //    attr="${foo} ${bar}" or attr="${foo} baz"
      // then we don't want to coerce the attribute value into one long
      // string. Instead we want to just return the value itself directly,
      // so that sanitizeDOMValue can get the actual value rather than
      // String(value)
      // The exception is if v is an array, in which case we do want to smash
      // it together into a string without calling String() on the array.
      //
      // This also allows trusted values (when using TrustedTypes) being
      // assigned to DOM sinks without being stringified in the process.

      if (l === 1 && strings[0] === '' && strings[1] === '') {
        var v = parts[0].value;

        if (_typeof(v) === 'symbol') {
          return String(v);
        }

        if (typeof v === 'string' || !isIterable(v)) {
          return v;
        }
      }

      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = parts[i];

        if (part !== undefined) {
          var _v = part.value;

          if (isPrimitive(_v) || !isIterable(_v)) {
            text += typeof _v === 'string' ? _v : String(_v);
          } else {
            var _iterator = _createForOfIteratorHelper(_v),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
/**
 * A Part that controls all or part of an attribute value.
 */

var AttributePart = /*#__PURE__*/function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = committer;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"] && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__[/* isDirective */ "b"])(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__[/* isDirective */ "b"])(this.value)) {
        var directive = this.value;
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"];
        directive(this);
      }

      if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"]) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

var NodePart = /*#__PURE__*/function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[/* createMarker */ "c"])());
      this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[/* createMarker */ "c"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[/* createMarker */ "c"])());

      part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[/* createMarker */ "c"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[/* createMarker */ "c"])());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.startNode.parentNode === null) {
        return;
      }

      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__[/* isDirective */ "b"])(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"];
        directive(this);
      }

      var value = this.__pendingValue;

      if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"]) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__[/* TemplateResult */ "b"]) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__[/* nothing */ "b"]) {
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* nothing */ "b"];
        this.clear();
      } else {
        // Fallback, will render the string representation
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this.__insert(value);

      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
      // it can't be implicitly converted - i.e. it's a symbol.

      var valueAsString = typeof value === 'string' ? value : String(value);

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = valueAsString;
        } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }

      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__[/* TemplateInstance */ "a"] && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__[/* TemplateInstance */ "a"](template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this.__commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;

      var _iterator2 = _createForOfIteratorHelper(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__[/* removeNodes */ "b"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart = /*#__PURE__*/function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__[/* isDirective */ "b"])(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"];
        directive(this);
      }

      if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"]) {
        return;
      }

      var value = !!this.__pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }

        this.value = value;
      }

      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"];
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  var _super = _createSuper(PropertyCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _super.call(this, element, name, strings);
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart = /*#__PURE__*/function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  var _super2 = _createSuper(PropertyPart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _super2.apply(this, arguments);
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(function () {
  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

var EventPart = /*#__PURE__*/function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__[/* isDirective */ "b"])(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"];
        directive(this);
      }

      if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"]) {
        return;
      }

      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      this.value = newListener;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__[/* noChange */ "a"];
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/***/ }),

/***/ "ZEzQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSlottedStyles; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7Qib");

var createSlottedStyles = function createSlottedStyles(component, slottedStyles) {
  component.$slotStyles = document.createElement('style');
  var styles = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* browserSupportsCssVariables */ "b"])() ? slottedStyles : Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* replaceCssVars */ "w"])({
    context: component,
    styles: slottedStyles
  });
  component.$slotStyles.innerHTML = styles;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* isIE */ "p"])() ? component.parentNode.appendChild(component.$slotStyles) : component.appendChild(component.$slotStyles);
};

/***/ }),

/***/ "ZinC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ chevronLeftCircle; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ clock; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ cogCircle; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ collapse; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ contactUs; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ magnifier; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ envelopeCircle; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ expand; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ quote; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ scoreHealthYellow; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ search; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ shareCircle; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ nucleo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Accessibility; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ phone; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ profile; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ profileCircle; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ security; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ siteMap; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ spinner; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ documents; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ hand; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ bargraph; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ dollarbill; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ docmagnifier; });

// EXTERNAL MODULE: ./node_modules/lit-element/lit-element.js + 5 modules
var lit_element = __webpack_require__("CQbg");

// CONCATENATED MODULE: ./src/images/customIcons/chevronLeftCircle.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 40 40\"\n    focusable=\"false\"\n    aria-label=\"Chevron left circle icon\"\n  >\n    <circle cx=\"20\" cy=\"20\" r=\"19.5\" class=\"circle\" fill=\"none\" />\n    <path\n      class=\"fillable\"\n      d=\"M14.05 20c0 .132.068.281.17.38l7.927 7.705c.102.099.255.165.391.165s.29-.066.391-.165l.85-.827c.103-.1.171-.231.171-.38a.562.562 0 0 0-.17-.38L17.095 20l6.685-6.497c.102-.1.17-.248.17-.38a.562.562 0 0 0-.17-.381l-.85-.827a.594.594 0 0 0-.392-.165.594.594 0 0 0-.391.165L14.22 19.62a.562.562 0 0 0-.17.38z\"\n    />\n  </svg>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var chevronLeftCircle = Object(lit_element["d" /* html */])(_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/clock.js
function clock_templateObject() {
  var data = clock_taggedTemplateLiteral(["\n  <svg\n    aria-label=\"Clock Icon\"\n    focusable=\"false\"\n    data-prefix=\"far\"\n    data-icon=\"clock\"\n    role=\"img\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 512 512\"\n    class=\"svg-inline--fa fa-clock fa-w-16 fa-3x\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\">\n      <circle class=\"circle\" cx=\"12.5\" cy=\"12.5\" r=\"12\" fill-rule=\"nonzero\" />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z\"\n        class=\"\"\n      ></path>\n    </g>\n  </svg>\n"]);

  clock_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function clock_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var clock = Object(lit_element["d" /* html */])(clock_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/cogCircle.js
function cogCircle_templateObject() {
  var data = cogCircle_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 25 25\"\n    aria-label=\"Cog circle icon\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\">\n      <circle class=\"circle\" cx=\"12.5\" cy=\"12.5\" r=\"12\" fill-rule=\"nonzero\" />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M18.963 14.278l-1.146-.661a5.182 5.182 0 0 0 0-1.89l1.146-.66a.325.325 0 0 0 .148-.378 6.7 6.7 0 0 0-1.472-2.545.324.324 0 0 0-.398-.062l-1.146.662A5.078 5.078 0 0 0 14.46 7.8V6.479a.322.322 0 0 0-.253-.315 6.764 6.764 0 0 0-2.937 0 .322.322 0 0 0-.253.315v1.324a5.238 5.238 0 0 0-1.636.944l-1.144-.662a.32.32 0 0 0-.398.062 6.66 6.66 0 0 0-1.471 2.545.322.322 0 0 0 .148.377l1.146.662a5.182 5.182 0 0 0 0 1.888l-1.146.662a.325.325 0 0 0-.148.377 6.7 6.7 0 0 0 1.471 2.545c.102.11.27.137.398.062l1.147-.662a5.078 5.078 0 0 0 1.635.944v1.324c0 .15.105.283.253.315.988.22 2 .21 2.938 0a.322.322 0 0 0 .253-.315v-1.324a5.238 5.238 0 0 0 1.636-.944l1.146.662a.32.32 0 0 0 .398-.062 6.66 6.66 0 0 0 1.472-2.545.332.332 0 0 0-.15-.38zm-6.225.547a2.155 2.155 0 0 1-2.153-2.153c0-1.186.966-2.152 2.153-2.152 1.186 0 2.152.966 2.152 2.152a2.155 2.155 0 0 1-2.152 2.153z\"\n      />\n    </g>\n  </svg>\n"]);

  cogCircle_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function cogCircle_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var cogCircle = Object(lit_element["d" /* html */])(cogCircle_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/collapse.js
function collapse_templateObject() {
  var data = collapse_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    viewBox=\"0 0 27 27\"\n    aria-label=\"Collapse icon\"\n  >\n    <circle\n      class=\"circle\"\n      fill=\"none\"\n      fill-rule=\"nonzero\"\n      cx=\"12.5\"\n      cy=\"12.5\"\n      r=\"12.5\"\n      transform=\"translate(1 1)\"\n    />\n    <path\n      class=\"fillable\"\n      d=\"M13.51 14.13H5.76a.323.323 0 0 1-.325-.32v-1.533c0-.177.15-.32.325-.32h13.48c.18 0 .325.142.325.32v1.533c0 .177-.15.32-.325.32h-5.73z\"\n      transform=\"translate(1 1)\"\n    />\n  </svg>\n"]);

  collapse_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function collapse_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var collapse = Object(lit_element["d" /* html */])(collapse_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/contactUs.js
function contactUs_templateObject() {
  var data = contactUs_taggedTemplateLiteral(["\n  <svg\n    version=\"1.1\"\n    id=\"Layer_1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    x=\"0px\"\n    y=\"0px\"\n    viewBox=\"0 0 42 41\"\n    aria-label=\"Contact Us icon\"\n  >\n    <style type=\"text/css\">\n      .st1 {\n      }\n    </style>\n    <g fill=\"none\" fill-rule=\"evenodd\">\n      <circle\n        class=\"circle\"\n        fill=\"none\"\n        fill-rule=\"nonzero\"\n        cx=\"19.5\"\n        cy=\"18.5\"\n        r=\"19.5\"\n        transform=\"translate(1 1)\"\n      />\n      <path\n        fill=\"none\"\n        d=\"M10.4,11.7c0.2,9.5,7.9,17.2,17.3,17.3l2.3-2.3l-3.5-3.5L24,25.7c-0.3,0.3-0.8,0.3-1.1,0l-5.5-5.5h-0.3\n\t\tc-1.3,0-2.4-1.1-2.4-2.4v-0.3l-1.1-1.1c-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.4,0.2-0.5l1.1-1.1v-2.9l-2.1-2.1L10.4,11.7z\"\n      />\n      <path\n        class=\"fillable\"\n        d=\"M17.8,13.4c0.3-0.3,0.3-0.8,0-1.1l-1.5-1.5v4L17.8,13.4z M16.4,17.8c0,0.4,0.4,0.8,0.8,0.8H18L16.4,17V17.8z M13.4,15.9c0,0.2,0.1,0.4,0.2,0.5l1.1,1.1v-3.2l-1.1,1.1C13.5,15.5,13.4,15.7,13.4,15.9z M22.9,25.7c0.3,0.3,0.8,0.3,1.1,0l2.5-2.5l3.5,3.5L27.7,29c-9.5-0.2-17.2-7.9-17.3-17.3l2.3-2.3l2.1,2.1V9.2\n\t\tl-1.5-1.5c-0.3-0.3-0.8-0.3-1.1,0l-3.1,3.1c-0.1,0.1-0.2,0.3-0.2,0.5c0,10.6,8.6,19.2,19.2,19.2c0.2,0,0.4-0.1,0.5-0.2l3.1-3.1\n\t\tc0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5L27,21.5c-0.3-0.3-0.8-0.3-1.1,0l-2.5,2.5l-3.8-3.8h-2.2L22.9,25.7z M17.2,18.6c-0.4,0-0.8-0.4-0.8-0.8V17l-1.1-1.1l1.1-1.1v-4l-1.6-1.6v2.2l1.5,1.5l-1.5,1.5v3.2l2.7,2.7h2.2\n\t\tL18,18.6H17.2z\"\n      />\n    </g>\n  </svg>\n"]);

  contactUs_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function contactUs_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var contactUs = Object(lit_element["d" /* html */])(contactUs_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/magnifier.js
function magnifier_templateObject() {
  var data = magnifier_taggedTemplateLiteral(["\n  <?xml version=\"1.0\" encoding=\"utf-8\"?>\n  <svg\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    x=\"0px\"\n    y=\"0px\"\n    viewBox=\"0 0 129.9 137.5\"\n    style=\"enable-background:new 0 0 129.9 137.5;\"\n    xml:space=\"preserve\"\n    aria-label=\"Magnifier icon\"\n  >\n    <style type=\"text/css\">\n      .st0 {\n        fill: #208baf;\n      }\n      .st1 {\n        fill: #035273;\n      }\n      .st2 {\n        fill: #38a7cd;\n      }\n      .st3 {\n        fill: #95d5ed;\n      }\n      .st4 {\n        fill: #36a4c9;\n      }\n      .st5 {\n        fill: #41b0d5;\n      }\n      .st6 {\n        fill: #00769c;\n      }\n      .st7 {\n        fill: #541a52;\n      }\n      .st8 {\n        fill: #9e2368;\n      }\n    </style>\n    <g>\n      <g>\n        <g>\n          <path\n            class=\"st0\"\n            d=\"M95,4.1c-3.7-1.7-8.1-0.1-9.8,3.5L60.7,59.8c-1.7,3.7-0.1,8.1,3.5,9.8l34.6,16.2c3.7,1.7,8.1,0.1,9.8-3.5\n\t\t\t\tl21.3-45.3l-6.6-19.6L95,4.1z\"\n          />\n        </g>\n        <polygon class=\"st1\" points=\"123.3,17.4 117.1,30.6 129.9,36.9 \t\t\" />\n        <path\n          class=\"st1\"\n          d=\"M114.8,46.1L85.9,32.5c-1.3-0.6-1.9-2.2-1.3-3.5v0c0.6-1.3,2.2-1.9,3.5-1.3l28.9,13.6\n\t\t\tc1.3,0.6,1.9,2.2,1.3,3.5l0,0C117.7,46.2,116.1,46.7,114.8,46.1z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M110,54.9L81,41.3c-1.3-0.6-1.9-2.2-1.3-3.5l0,0c0.6-1.3,2.2-1.9,3.5-1.3l28.9,13.6c1.3,0.6,1.9,2.2,1.3,3.5\n\t\t\tv0C112.9,54.9,111.3,55.5,110,54.9z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M105.9,65.1L76.9,51.6c-1.3-0.6-1.9-2.2-1.3-3.5l0,0c0.6-1.3,2.2-1.9,3.5-1.3l28.9,13.6\n\t\t\tc1.3,0.6,1.9,2.2,1.3,3.5v0C108.8,65.2,107.2,65.7,105.9,65.1z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M101.6,74.2L72.7,60.6c-1.3-0.6-1.9-2.2-1.3-3.5l0,0c0.6-1.3,2.2-1.9,3.5-1.3l28.9,13.6\n\t\t\tc1.3,0.6,1.9,2.2,1.3,3.5v0C104.6,74.2,103,74.8,101.6,74.2z\"\n        />\n      </g>\n      <g>\n        <g>\n          <path\n            class=\"st0\"\n            d=\"M4.9,10.6c-3.8,1.4-5.8,5.6-4.4,9.4l19.5,54.3c1.4,3.8,5.6,5.8,9.4,4.4l36-12.9c3.8-1.4,5.8-5.6,4.4-9.4\n\t\t\t\tL52.8,9.2L34.3,0L4.9,10.6z\"\n          />\n        </g>\n        <polygon class=\"st1\" points=\"34.3,0 39.3,13.8 52.8,9.2 \t\t\" />\n        <path\n          class=\"st1\"\n          d=\"M48.6,26.4L18.5,37.2c-1.4,0.5-2.9-0.2-3.4-1.6l0,0c-0.5-1.4,0.2-2.9,1.6-3.4l30.1-10.8\n\t\t\tc1.4-0.5,2.9,0.2,3.4,1.6l0,0C50.7,24.4,49.9,25.9,48.6,26.4z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M51.3,36L21.2,46.8c-1.4,0.5-2.9-0.2-3.4-1.6l0,0c-0.5-1.4,0.2-2.9,1.6-3.4L49.5,31c1.4-0.5,2.9,0.2,3.4,1.6\n\t\t\tl0,0C53.4,34,52.7,35.6,51.3,36z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M55.7,46.2L25.6,57c-1.4,0.5-2.9-0.2-3.4-1.6l0,0c-0.5-1.4,0.2-2.9,1.6-3.4l30.1-10.8\n\t\t\tc1.4-0.5,2.9,0.2,3.4,1.6l0,0C57.8,44.2,57,45.7,55.7,46.2z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M59,55.6L28.9,66.4c-1.4,0.5-2.9-0.2-3.4-1.6l0,0c-0.5-1.4,0.2-2.9,1.6-3.4l30.1-10.8\n\t\t\tc1.4-0.5,2.9,0.2,3.4,1.6v0C61.1,53.6,60.4,55.1,59,55.6z\"\n        />\n      </g>\n      <g>\n        <g>\n          <path\n            class=\"st2\"\n            d=\"M39.2,22.8c-4,0-7.4,3.3-7.4,7.4v57.7c0,4,3.3,7.4,7.4,7.4h38.2c4,0,7.4-3.3,7.4-7.4V37.7L70.5,22.8H39.2z\"\n          />\n        </g>\n        <polygon class=\"st1\" points=\"70.5,22.8 70.5,37.5 84.7,37.7 \t\t\" />\n        <path\n          class=\"st1\"\n          d=\"M74.9,52.5H43c-1.5,0-2.7-1.2-2.7-2.7v0c0-1.5,1.2-2.7,2.7-2.7h32c1.5,0,2.7,1.2,2.7,2.7v0\n\t\t\tC77.6,51.3,76.4,52.5,74.9,52.5z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M74.3,62.5h-32c-1.5,0-2.7-1.2-2.7-2.7v0c0-1.5,1.2-2.7,2.7-2.7h32c1.5,0,2.7,1.2,2.7,2.7v0\n\t\t\tC76.9,61.3,75.7,62.5,74.3,62.5z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M74.9,73.5H43c-1.5,0-2.7-1.2-2.7-2.7v0c0-1.5,1.2-2.7,2.7-2.7h32c1.5,0,2.7,1.2,2.7,2.7v0\n\t\t\tC77.6,72.3,76.4,73.5,74.9,73.5z\"\n        />\n        <path\n          class=\"st1\"\n          d=\"M74.9,83.5H43c-1.5,0-2.7-1.2-2.7-2.7v0c0-1.5,1.2-2.7,2.7-2.7h32c1.5,0,2.7,1.2,2.7,2.7v0\n\t\t\tC77.6,82.3,76.4,83.5,74.9,83.5z\"\n        />\n      </g>\n    </g>\n    <g>\n      <polyline\n        class=\"st3\"\n        points=\"45,89.8 80.9,70.8 95.3,79.1 102.6,95.2 85.6,109.8 66.3,111.8 51.5,104.5 45,91.3 \t\"\n      />\n      <polygon\n        class=\"st4\"\n        points=\"80.9,78.1 99.6,86.5 102.6,76.7 94.1,62.5 80.9,55.9 \t\"\n      />\n      <path\n        class=\"st5\"\n        d=\"M49.6,97.5h31.3c0,0,6.7-2,6.7-8V59.8l-13-3.9L62,58.5l-12.3,9.6L45,83.5L49.6,97.5z\"\n      />\n    </g>\n    <path\n      class=\"st6\"\n      d=\"M76.1,73H52.5c-1.6,0-2.8-1.3-2.8-2.8v-0.7c0-1.6,1.3-2.8,2.8-2.8h23.7c1.6,0,2.8,1.3,2.8,2.8v0.7\n\tC79,71.7,77.7,73,76.1,73z\"\n    />\n    <path\n      class=\"st6\"\n      d=\"M56.3,84H45.6c-1.1,0-2-0.9-2-2v-2.3c0-1.1,0.9-2,2-2h10.7c1.1,0,2,0.9,2,2V82C58.3,83.1,57.4,84,56.3,84z\"\n    />\n    <g>\n      <path\n        class=\"st7\"\n        d=\"M119.2,126.8l-22.5-22.4c4.4-5.3,7-12.2,7-19.6c0-17.1-13.9-31-31-31c-17.1,0-31,13.9-31,31s13.9,31,31,31\n\t\tc7.2,0,13.8-2.4,19-6.5l22.6,22.5c1.3,1.3,3.4,1.3,4.7,0l0.2-0.2C120.5,130.3,120.5,128.1,119.2,126.8z M72.6,109.8\n\t\tc-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S86.4,109.8,72.6,109.8z\"\n      />\n      <path\n        class=\"st8\"\n        d=\"M121.2,125.8l-22.5-22.4c4.4-5.3,7-12.2,7-19.6c0-17.1-13.9-31-31-31c-17.1,0-31,13.9-31,31s13.9,31,31,31\n\t\tc7.2,0,13.8-2.4,19-6.5l22.6,22.5c1.3,1.3,3.4,1.3,4.7,0l0.2-0.2C122.5,129.3,122.5,127.1,121.2,125.8z M74.6,108.8\n\t\tc-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S88.4,108.8,74.6,108.8z\"\n      />\n    </g>\n  </svg>\n"]);

  magnifier_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function magnifier_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var magnifier = Object(lit_element["d" /* html */])(magnifier_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/envelopeCircle.js
function envelopeCircle_templateObject() {
  var data = envelopeCircle_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 42 42\"\n    aria-label=\"Envelope icon\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1,1)\">\n      <circle class=\"circle\" cx=\"20\" cy=\"20\" r=\"19.5\" fill-rule=\"nonzero\" />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M28.125 13.133h-16.25c-1.036 0-1.875.857-1.875 1.913V26.52c0 1.056.84 1.912 1.875 1.912h16.25c1.036 0 1.875-.856 1.875-1.912V15.046c0-1.056-.84-1.913-1.875-1.913zm0 1.913v1.626c-.876.727-2.272 1.858-5.257 4.243-.658.527-1.961 1.795-2.868 1.78-.907.016-2.21-1.253-2.868-1.78-2.984-2.384-4.381-3.516-5.257-4.243v-1.626h16.25zM11.875 26.52v-7.395c.895.727 2.164 1.747 4.1 3.293.853.685 2.348 2.198 4.025 2.19 1.669.008 3.145-1.483 4.026-2.19a665.78 665.78 0 0 0 4.099-3.293v7.395h-16.25z\"\n      />\n    </g>\n  </svg>\n"]);

  envelopeCircle_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function envelopeCircle_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var envelopeCircle = Object(lit_element["d" /* html */])(envelopeCircle_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/expand.js
function expand_templateObject() {
  var data = expand_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 27 27\"\n    aria-label=\"Expand icon\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1 1)\">\n      <circle\n        class=\"circle\"\n        cx=\"12.5\"\n        cy=\"12.5\"\n        r=\"12.5\"\n        stroke-linecap=\"square\"\n      />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M13.51 14.13H5.76a.323.323 0 0 1-.325-.32v-1.533c0-.177.15-.32.325-.32h13.48c.18 0 .325.142.325.32v1.533c0 .177-.15.32-.325.32h-5.73z\"\n      />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M11.413 14.053V6.304c0-.18.143-.326.32-.326h1.533c.177 0 .321.15.321.326V19.783c0 .18-.143.326-.32.326h-1.533a.326.326 0 0 1-.321-.326v-5.73z\"\n      />\n    </g>\n  </svg>\n"]);

  expand_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function expand_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var expand = Object(lit_element["d" /* html */])(expand_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/quote.js
function quote_templateObject() {
  var data = quote_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    x=\"0px\"\n    y=\"0px\"\n    width=\"48px\"\n    height=\"48px\"\n    viewBox=\"0 0 48 48\"\n    aria-label=\"Quote icon\"\n  >\n    <path\n      class=\"fillable\"\n      d=\"M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z\"\n    ></path>\n  </svg>\n"]);

  quote_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function quote_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var quote = Object(lit_element["d" /* html */])(quote_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/scoreHealthYellow.js
function scoreHealthYellow_templateObject() {
  var data = scoreHealthYellow_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 32 32\"\n    aria-label=\"Score Health yellow icon\"\n  >\n    <g class=\"fillable\" fill-rule=\"nonzero\">\n      <path\n        d=\"M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z\"\n      />\n      <g transform=\"translate(14 8)\">\n        <path\n          d=\"M1.961.5A1.51 1.51 0 0 1 3.468 2l.03 7.005a1.49 1.49 0 0 1-1.494 1.494h.035A1.51 1.51 0 0 1 .532 9.002l-.03-7.006A1.49 1.49 0 0 1 1.996.501h-.035z\"\n        />\n        <circle cx=\"2\" cy=\"13.786\" r=\"1.5\" />\n      </g>\n    </g>\n  </svg>\n"]);

  scoreHealthYellow_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function scoreHealthYellow_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var scoreHealthYellow = Object(lit_element["d" /* html */])(scoreHealthYellow_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/search.js
function search_templateObject() {
  var data = search_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 40 40\"\n    focusable=\"false\"\n    aria-label=\"Search icon\"\n  >\n    <path\n      class=\"fillable\"\n      fill-rule=\"nonzero\"\n      d=\"M25 17c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7 7-3.14 7-7zm8 13c0 1.094-.906 2-2 2a1.96 1.96 0 0 1-1.406-.594l-5.36-5.343A10.974 10.974 0 0 1 18 28c-6.078 0-11-4.922-11-11S11.922 6 18 6s11 4.922 11 11c0 2.219-.672 4.406-1.938 6.234l5.36 5.36c.36.36.578.875.578 1.406z\"\n    />\n  </svg>\n"]);

  search_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function search_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var search = Object(lit_element["d" /* html */])(search_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/shareCircle.js
function shareCircle_templateObject() {
  var data = shareCircle_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 42 42\"\n    aria-label=\"Share icon\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1,1)\">\n      <circle class=\"circle\" cx=\"20\" cy=\"20\" r=\"19.5\" fill-rule=\"nonzero\" />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M31.627 17.046l-7.907-6.785c-.692-.594-1.782-.112-1.782.811v3.574C14.722 14.728 9 16.166 9 22.96c0 2.743 1.778 5.46 3.743 6.88.614.444 1.488-.112 1.262-.83-2.037-6.475.966-8.193 7.933-8.293v3.925c0 .924 1.091 1.404 1.782.81l7.907-6.785a1.067 1.067 0 0 0 0-1.622z\"\n      />\n    </g>\n  </svg>\n"]);

  shareCircle_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function shareCircle_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var shareCircle = Object(lit_element["d" /* html */])(shareCircle_templateObject());
// CONCATENATED MODULE: ./src/images/customIcons/nucleo.js
function nucleo_templateObject() {
  var data = nucleo_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    x=\"0px\"\n    y=\"0px\"\n    viewBox=\"0 0 64 64\"\n    aria-label=\"nucleo icon\"\n  >\n    <g transform=\"translate(0, 0)\">\n      <path\n        class=\"fillable\"\n        d=\"M59,3H17a2,2,0,0,0-2,2V54A5,5,0,1,1,5,54V37h6a1,1,0,0,0,0-2H4a1,1,0,0,0-1,1V54a7.034,7.034,0,0,0,7,7H54a7.035,7.035,0,0,0,7-7V5A2,2,0,0,0,59,3ZM52,51H24a1,1,0,0,1,0-2H52a1,1,0,0,1,0,2Zm0-8H24a1,1,0,0,1,0-2H52a1,1,0,0,1,0,2Zm0-8H24a1,1,0,0,1,0-2H52a1,1,0,0,1,0,2Zm1-9a1,1,0,0,1-1,1H24a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H52a1,1,0,0,1,1,1Z\"\n      />\n    </g>\n  </svg>\n"]);

  nucleo_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function nucleo_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var nucleo = Object(lit_element["d" /* html */])(nucleo_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/Accessibility.js
function Accessibility_templateObject() {
  var data = Accessibility_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"24\"\n    height=\"24\"\n    viewBox=\"0 0 24 24\"\n    aria-label=\"Accessibility Icon\"\n  >\n    <path\n      class=\"fillable\"\n      fill-rule=\"nonzero\"\n      d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z\"\n    />\n  </svg>\n"]);

  Accessibility_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Accessibility_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Accessibility = Object(lit_element["d" /* html */])(Accessibility_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/Phone.js
function Phone_templateObject() {
  var data = Phone_taggedTemplateLiteral([" <svg\n  aria-hidden=\"true\"\n  focusable=\"false\"\n  aria-label=\"Phone\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 512 512\"\n>\n  <path\n    fill=\"currentColor\"\n    class=\"fillable\"\n    d=\"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z\"\n  ></path>\n</svg>"]);

  Phone_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Phone_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var phone = Object(lit_element["d" /* html */])(Phone_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/profile.js
function profile_templateObject() {
  var data = profile_taggedTemplateLiteral(["\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 40 40\"\n    aria-label=\"Profile Icon\"\n  >\n    <path\n      class=\"fillable\"\n      fill-rule=\"nonzero\"\n      d=\"M26.4 22.714c-2.05 0-3.036 1.143-6.4 1.143-3.364 0-4.343-1.143-6.4-1.143-5.3 0-9.6 4.3-9.6 9.6v1.829a3.43 3.43 0 0 0 3.429 3.428H32.57A3.43 3.43 0 0 0 36 34.143v-1.829c0-5.3-4.3-9.6-9.6-9.6zm6.171 11.429H7.43v-1.829c0-3.4 2.771-6.171 6.171-6.171 1.043 0 2.736 1.143 6.4 1.143 3.693 0 5.35-1.143 6.4-1.143 3.4 0 6.171 2.771 6.171 6.171v1.829zM20 21.57c5.679 0 10.286-4.607 10.286-10.285C30.286 5.607 25.679 1 20 1 14.321 1 9.714 5.607 9.714 11.286c0 5.678 4.607 10.285 10.286 10.285zM20 4.43c3.779 0 6.857 3.078 6.857 6.857 0 3.778-3.078 6.857-6.857 6.857-3.779 0-6.857-3.079-6.857-6.857 0-3.779 3.078-6.857 6.857-6.857z\"\n    />\n  </svg>\n"]);

  profile_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function profile_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var profile = Object(lit_element["d" /* html */])(profile_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/profileCircle.js
function profileCircle_templateObject() {
  var data = profileCircle_taggedTemplateLiteral(["\n  <svg\n    class=\"profile-circle\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 42 42\"\n    aria-label=\"Profile Icon\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1 1)\">\n      <circle class=\"circle\" cx=\"20\" cy=\"20\" r=\"20\" stroke-linecap=\"square\" />\n      <path\n        class=\"fillable\"\n        fill-rule=\"nonzero\"\n        d=\"M23.84 21.629c-1.23 0-1.821.685-3.84.685s-2.606-.685-3.84-.685c-3.18 0-5.76 2.58-5.76 5.76v1.097c0 1.135.921 2.057 2.057 2.057h15.086a2.058 2.058 0 0 0 2.057-2.057v-1.097c0-3.18-2.58-5.76-5.76-5.76zm3.703 6.857H12.457v-1.097a3.71 3.71 0 0 1 3.703-3.703c.626 0 1.641.685 3.84.685 2.216 0 3.21-.685 3.84-.685a3.71 3.71 0 0 1 3.703 3.703v1.097zM20 20.943a6.173 6.173 0 0 0 6.171-6.172A6.173 6.173 0 0 0 20 8.6a6.173 6.173 0 0 0-6.171 6.171A6.173 6.173 0 0 0 20 20.943zm0-10.286a4.12 4.12 0 0 1 4.114 4.114A4.12 4.12 0 0 1 20 18.886a4.12 4.12 0 0 1-4.114-4.115A4.12 4.12 0 0 1 20 10.657z\"\n      />\n    </g>\n  </svg>\n"]);

  profileCircle_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function profileCircle_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var profileCircle = Object(lit_element["d" /* html */])(profileCircle_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/security.js
function security_templateObject() {
  var data = security_taggedTemplateLiteral(["\t\n  <svg\t\n    xmlns=\"http://www.w3.org/2000/svg\"\t\n    width=\"24\"\t\n    height=\"24\"\t\n    viewBox=\"0 0 24 24\"\t\n    aria-label=\"Security Icon\"\t\n  >\t\n    <path\t\n      class=\"fillable\"\t\n      fill-rule=\"nonzero\"\t\n      d=\"M12 4.942c1.827 1.105 3.474 1.6 5 1.833v7.76c0 1.606-.415 1.935-5 4.76v-14.353zm9-1.942v11.535c0 4.603-3.203 5.804-9 9.465-5.797-3.661-9-4.862-9-9.465v-11.535c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-2 1.96c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v9.575c0 3.042 1.69 3.83 7 7.107 5.313-3.281 7-4.065 7-7.107v-9.575z\"\t\n    />\t\n  </svg>\t\n"]);

  security_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function security_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var security = Object(lit_element["d" /* html */])(security_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/siteMap.js
function siteMap_templateObject() {
  var data = siteMap_taggedTemplateLiteral(["\t\n  <svg\t\n    xmlns=\"http://www.w3.org/2000/svg\"\t\n    width=\"24\"\t\n    height=\"24\"\t\n    viewBox=\"0 0 24 24\"\t\n    aria-label=\"Site Map Icon\"\t\n  >\t\n    <path\t\n      class=\"fillable\"\t\n      fill-rule=\"nonzero\"\t\n      d=\"M22 18v-7h-9v-5h3v-6h-8v6h3v5h-9v7h-2v6h6v-6h-2v-5h7v5h-2v6h6v-6h-2v-5h7v5h-2v6h6v-6z\"\t\n    />\t\n  </svg>\t\n"]);

  siteMap_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function siteMap_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var siteMap = Object(lit_element["d" /* html */])(siteMap_templateObject());
// CONCATENATED MODULE: ./src/images/fontAwesomeIcons/spinner.js
function spinner_templateObject() {
  var data = spinner_taggedTemplateLiteral(["\n  <svg\n    aria-hidden=\"true\"\n    focusable=\"false\"\n    data-prefix=\"fas\"\n    data-icon=\"spinner\"\n    class=\"svg-inline--fa fa-spinner fa-w-16 v-spin\"\n    role=\"img\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 512 512\"\n    aria-label=\"spinner Icon\"\n  >\n    <path\n      class=\"fillable\"\n      d=\"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z\"\n    ></path>\n  </svg>\n"]);

  spinner_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function spinner_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var spinner = Object(lit_element["d" /* html */])(spinner_templateObject());
// CONCATENATED MODULE: ./src/images/illustrations/documents.js
function documents_templateObject() {
  var data = documents_taggedTemplateLiteral(["\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg\n    version=\"1.1\"\n    viewBox=\"-9 0 56 38\"\n    width=\"56\"\n    height=\"68\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    aria-label=\"Book illustration\"\n  >\n    <title>Documents</title>\n    <style type=\"text/css\">\n      .st0 {\n        fill: #b6b7b7;\n      }\n      .st1 {\n        fill: #cbcaca;\n      }\n      .st2 {\n        fill: #e5e5e4;\n      }\n      .st3 {\n        fill: #b4b2b4;\n      }\n      .st4 {\n        fill: #45a5dc;\n      }\n    </style>\n    <g>\n      <path\n        class=\"st0\"\n        d=\"M45.3,1.9v38.9c0,1-0.8,1.9-1.9,1.9H12c-1,0-1.9-0.8-1.9-1.9V1.9c0-1,0.8-1.9,1.9-1.9h31.5\n\t\tC44.5,0,45.3,0.8,45.3,1.9z\"\n      />\n      <path\n        class=\"st1\"\n        d=\"M40.3,5.4v38.9c0,1-0.8,1.9-1.9,1.9H6.9c-1,0-1.9-0.8-1.9-1.9V5.4c0-1,0.8-1.9,1.9-1.9h31.5\n\t\tC39.4,3.5,40.3,4.4,40.3,5.4z\"\n      />\n      <path\n        class=\"st2\"\n        d=\"M35.2,9.1V48c0,1-0.8,1.9-1.9,1.9H1.9C0.8,49.8,0,49,0,48V9.1c0-1,0.8-1.9,1.9-1.9h31.5\n\t\tC34.4,7.2,35.2,8.1,35.2,9.1z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M26.9,18.4h-5.6c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h5.6c0.5,0,0.9,0.4,0.9,0.9\n\t\tC27.8,17.9,27.4,18.4,26.9,18.4z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M26.9,25.8h-5.6c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h5.6c0.5,0,0.9,0.4,0.9,0.9\n\t\tC27.8,25.3,27.4,25.8,26.9,25.8z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M26.9,33.2H8.3c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h18.5c0.5,0,0.9,0.4,0.9,0.9\n\t\tC27.8,32.8,27.4,33.2,26.9,33.2z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M26.9,40.6H8.3c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9h18.5c0.5,0,0.9,0.4,0.9,0.9\n\t\tC27.8,40.2,27.4,40.6,26.9,40.6z\"\n      />\n      <path\n        class=\"st4\"\n        d=\"M15.7,25.8H8.3c-0.5,0-0.9-0.4-0.9-0.9v-7.4c0-0.5,0.4-0.9,0.9-0.9h7.4c0.5,0,0.9,0.4,0.9,0.9v7.4\n\t\tC16.7,25.3,16.3,25.8,15.7,25.8z\"\n      />\n    </g>\n  </svg>\n"]);

  documents_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function documents_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var documents = Object(lit_element["d" /* html */])(documents_templateObject());
// CONCATENATED MODULE: ./src/images/illustrations/hand.js
function hand_templateObject() {
  var data = hand_taggedTemplateLiteral(["\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg\n    version=\"1.1\"\n    viewBox=\"-7 0 68 54\"\n    width=\"64\"\n    height=\"84\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    aria-label=\"Rabbit illustration\"\n  >\n    <title>Hand</title>\n    <style type=\"text/css\">\n      .st0 {\n        fill: #f1c8ab;\n      }\n      .st1 {\n        fill: #175b7c;\n      }\n      .st2 {\n        fill: #f0d459;\n      }\n    </style>\n    <g>\n      <path\n        class=\"st0\"\n        d=\"M55.3,50.5l-22.5,2c-2.1,0.2-4.2-0.3-6-1.3l-6.2-3.5h14.5c1.9,0,3.5-1.6,3.5-3.5v0c0-1.7-1.2-3.1-2.9-3.5\n\t\tl-13-2.4c-3.1-0.6-6.3-0.9-9.5-0.9H2.6v18.6l21.2,8.8c2.3,0.9,4.9,0.9,7.3,0.3l28.1-11v0C59.2,51.9,57.4,50.3,55.3,50.5z\"\n      />\n      <path\n        class=\"st1\"\n        d=\"M7.7,61.7H1.3c-0.7,0-1.3-0.6-1.3-1.3V36c0-0.7,0.6-1.3,1.3-1.3h6.4C8.4,34.7,9,35.3,9,36v24.4\n\t\tC9,61.2,8.4,61.7,7.7,61.7z\"\n      />\n      <path\n        class=\"st2\"\n        d=\"M37.6,26.8c0-4.2-3.2-5.6-6-6.4v-7.8c1.5,0.2,2.7,1.5,2.9,3.1c0.1,0.4,0.4,0.6,0.7,0.6h1.5\n\t\tc0.4,0,0.8-0.4,0.7-0.8c-0.4-3.2-2.9-5.6-5.9-5.9V7.3c0-0.4-0.3-0.7-0.7-0.7h-1.5c-0.4,0-0.7,0.3-0.7,0.7v2.3c-3.3,0.3-6,3.2-6,6.7\n\t\tc0,4.2,3.2,5.6,6,6.4v7.8c-1.5-0.2-2.7-1.5-2.9-3.1c-0.1-0.4-0.4-0.6-0.7-0.6h-1.5c-0.4,0-0.8,0.4-0.7,0.8c0.4,3.2,2.9,5.6,5.9,5.9\n\t\tv2.3c0,0.4,0.3,0.7,0.7,0.7h1.5c0.4,0,0.7-0.3,0.7-0.7v-2.3C35,33.2,37.6,30.3,37.6,26.8z M25.6,16.3c0-1.9,1.3-3.4,3-3.7v6.9\n\t\tC26.5,18.9,25.6,18.1,25.6,16.3z M31.6,30.5v-6.9c2.1,0.7,3,1.4,3,3.3C34.6,28.7,33.3,30.2,31.6,30.5z\"\n      />\n    </g>\n  </svg>\n"]);

  hand_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function hand_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var hand = Object(lit_element["d" /* html */])(hand_templateObject());
// CONCATENATED MODULE: ./src/images/illustrations/bargraph.js
function bargraph_templateObject() {
  var data = bargraph_taggedTemplateLiteral(["\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg\n    version=\"1.1\"\n    viewBox=\"3 0 46 62\"\n    width=\"65\"\n    height=\"62\"\n    style=\"enable-background:new 0 0 50.3 45.3;\"\n    xml:space=\"preserve\"\n    aria-label=\"Sappling small leaves illustration\"\n  >\n    <style type=\"text/css\">\n      .st0 {\n        fill: #f27a21;\n      }\n      .st1 {\n        fill: #b7407d;\n      }\n      .st2 {\n        fill: #0797a8;\n      }\n    </style>\n    <title>Bar Graph</title>\n    <path\n      class=\"st0\"\n      d=\"M30,0h-9.6c-0.7,0-1.2,0.5-1.2,1.2v38.3c0,0.7,0.5,1.2,1.2,1.2H30c0.7,0,1.2-0.5,1.2-1.2V1.2\n\tC31.1,0.5,30.6,0,30,0z\"\n    />\n    <path\n      class=\"st1\"\n      d=\"M10.8,24H1.2C0.5,24,0,24.5,0,25.2v14.4c0,0.7,0.5,1.2,1.2,1.2h9.6c0.7,0,1.2-0.5,1.2-1.2V25.2\n\tC12,24.5,11.4,24,10.8,24z\"\n    />\n    <path\n      class=\"st2\"\n      d=\"M49.1,12h-9.6c-0.7,0-1.2,0.5-1.2,1.2v26.4c0,0.7,0.5,1.2,1.2,1.2h9.6c0.7,0,1.2-0.5,1.2-1.2V13.2\n\tC50.3,12.5,49.8,12,49.1,12z\"\n    />\n  </svg>\n"]);

  bargraph_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function bargraph_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var bargraph = Object(lit_element["d" /* html */])(bargraph_templateObject());
// CONCATENATED MODULE: ./src/images/illustrations/dollarbill.js
function dollarbill_templateObject() {
  var data = dollarbill_taggedTemplateLiteral(["\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg\n    version=\"1.1\"\n    viewBox=\"5 0 43 59\"\n    width=\"100\"\n    height=\"59\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    style=\"enable-background:new 0 0 50.9 46.5;\"\n    xml:space=\"preserve\"\n    aria-label=\"Sapling big leaves illustration\"\n  >\n    <style type=\"text/css\">\n      .st0 {\n        fill: #f27a21;\n      }\n      .st1 {\n        fill: #f9ae6b;\n      }\n      .st2 {\n        fill: #d7bc47;\n      }\n      .st3 {\n        fill: #ffdc67;\n      }\n    </style>\n    <title>Dollar Bill</title>\n    <g>\n      <path\n        class=\"st0\"\n        d=\"M49.8,33.2H1.1c-0.6,0-1.1-0.5-1.1-1.1v-31C0,0.5,0.5,0,1.1,0h48.7c0.6,0,1.1,0.5,1.1,1.1v31\n\t\tC50.9,32.7,50.4,33.2,49.8,33.2z\"\n      />\n      <path\n        class=\"st1\"\n        d=\"M40.9,3.3H10C10,7,7,10,3.3,10v13.3c3.7,0,6.6,3,6.6,6.6h31c0-3.7,3-6.6,6.6-6.6V10C43.9,10,40.9,7,40.9,3.3z\"\n      />\n      <circle class=\"st0\" cx=\"25.4\" cy=\"16.6\" r=\"7.7\" />\n      <path\n        class=\"st2\"\n        d=\"M47.6,37.6H29.9c-0.6,0-1.1,0.5-1.1,1.1V42c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4v-3.3\n\t\tC48.7,38.1,48.2,37.6,47.6,37.6z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M38.7,34.3c-4.9,0-10,1.5-10,4.4c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4C48.7,35.8,43.7,34.3,38.7,34.3z\"\n      />\n      <path\n        class=\"st2\"\n        d=\"M47.6,32.1H29.9c-0.6,0-1.1,0.5-1.1,1.1v3.3c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4v-3.3\n\t\tC48.7,32.6,48.2,32.1,47.6,32.1z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M38.7,28.8c-4.9,0-10,1.5-10,4.4c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4C48.7,30.3,43.7,28.8,38.7,28.8z\"\n      />\n      <path\n        class=\"st2\"\n        d=\"M47.6,26.5H29.9c-0.6,0-1.1,0.5-1.1,1.1V31c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4v-3.3\n\t\tC48.7,27,48.2,26.5,47.6,26.5z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M38.7,23.2c-4.9,0-10,1.5-10,4.4s5,4.4,10,4.4s10-1.5,10-4.4S43.7,23.2,38.7,23.2z\"\n      />\n      <path\n        class=\"st2\"\n        d=\"M47.6,21H29.9c-0.6,0-1.1,0.5-1.1,1.1v3.3c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4v-3.3C48.7,21.5,48.2,21,47.6,21z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M38.7,17.7c-4.9,0-10,1.5-10,4.4s5,4.4,10,4.4s10-1.5,10-4.4S43.7,17.7,38.7,17.7z\"\n      />\n      <path\n        class=\"st2\"\n        d=\"M47.6,15.5H29.9c-0.6,0-1.1,0.5-1.1,1.1v3.3c0,2.9,5,4.4,10,4.4s10-1.5,10-4.4v-3.3\n\t\tC48.7,16,48.2,15.5,47.6,15.5z\"\n      />\n      <path\n        class=\"st3\"\n        d=\"M38.7,12.2c-4.9,0-10,1.5-10,4.4s5,4.4,10,4.4s10-1.5,10-4.4S43.7,12.2,38.7,12.2z\"\n      />\n    </g>\n  </svg>\n"]);

  dollarbill_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function dollarbill_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var dollarbill = Object(lit_element["d" /* html */])(dollarbill_templateObject());
// CONCATENATED MODULE: ./src/images/illustrations/docmagnifier.js
function docmagnifier_templateObject() {
  var data = docmagnifier_taggedTemplateLiteral(["\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg\n    version=\"1.1\"\n    viewBox=\"-15 0 85 53\"\n    width=\"85\"\n    height=\"53\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    style=\"enable-background:new 0 0 51.9 55.1;\"\n    xml:space=\"preserve\"\n    aria-label=\"Squirrel illustration\"\n  >\n    <style type=\"text/css\">\n      .st0 {\n        fill: #706f70;\n      }\n      .st1 {\n        fill: #ffffff;\n      }\n      .st2 {\n        fill: #e76c61;\n      }\n      .st3 {\n        fill: #f0d459;\n      }\n      .st4 {\n        fill: #75c173;\n      }\n      .st5 {\n        fill: #f27a21;\n      }\n      .st6 {\n        fill: #b4b2b4;\n      }\n      .st7 {\n        fill: #bdddf4;\n      }\n      .st8 {\n        fill: #78c4e4;\n      }\n      .st9 {\n        fill: #333333;\n      }\n    </style>\n    <title>Magnifier</title>\n    <g>\n      <path\n        class=\"st0\"\n        d=\"M42,40.1H1.9c-1.1,0-1.9-0.9-1.9-1.9V1.9C0,0.9,0.9,0,1.9,0H42c1.1,0,1.9,0.9,1.9,1.9v36.3\n\t\tC43.9,39.2,43.1,40.1,42,40.1z\"\n      />\n      <rect x=\"1.9\" y=\"6.7\" class=\"st1\" width=\"40.1\" height=\"31.5\" />\n      <circle class=\"st2\" cx=\"3.3\" cy=\"3.3\" r=\"1.4\" />\n      <circle class=\"st3\" cx=\"8.1\" cy=\"3.3\" r=\"1.4\" />\n      <circle class=\"st4\" cx=\"12.9\" cy=\"3.3\" r=\"1.4\" />\n      <path\n        class=\"st5\"\n        d=\"M18.1,23.9H6.7c-0.5,0-1-0.4-1-1V11.5c0-0.5,0.4-1,1-1h11.5c0.5,0,1,0.4,1,1v11.5\n\t\tC19.1,23.4,18.7,23.9,18.1,23.9z\"\n      />\n      <path\n        class=\"st6\"\n        d=\"M37.2,12.4H23.9c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1h13.4c0.5,0,1,0.4,1,1C38.2,12,37.8,12.4,37.2,12.4z\"\n      />\n      <path\n        class=\"st6\"\n        d=\"M37.2,18.1H23.9c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1h13.4c0.5,0,1,0.4,1,1C38.2,17.7,37.8,18.1,37.2,18.1z\"\n      />\n      <g>\n        <path\n          class=\"st6\"\n          d=\"M6.7,26.7c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1h14.9c0.1-0.7,0.2-1.3,0.4-1.9H6.7z\"\n        />\n        <path\n          class=\"st6\"\n          d=\"M6.7,32.5c-0.5,0-1,0.4-1,1s0.4,1,1,1h15.6c-0.2-0.6-0.4-1.3-0.5-1.9H6.7z\"\n        />\n        <path\n          class=\"st6\"\n          d=\"M23.9,22c-0.5,0-1,0.4-1,1c0,0.3,0.2,0.6,0.5,0.8c0.4-0.6,0.9-1.2,1.4-1.8H23.9z\"\n        />\n        <path\n          class=\"st7\"\n          d=\"M37.2,26.7c0.5,0,1,0.4,1,1c0,0.5-0.4,1-1,1H24c-0.1,0.5-0.1,1-0.1,1.5c0,0.8,0.1,1.5,0.3,2.3h5.4\n\t\t\tc0.5,0,1,0.4,1,1s-0.4,1-1,1h-4.7c1.6,3.2,4.8,5.4,8.6,5.4c5.3,0,9.6-4.3,9.6-9.6c0-5.3-4.3-9.6-9.6-9.6c-1.8,0-3.4,0.5-4.9,1.3\n\t\t\th3.9c0.5,0,1,0.4,1,1s-0.4,1-1,1h-6.2c-0.7,0.8-1.3,1.8-1.7,2.9H37.2z\"\n        />\n        <path\n          class=\"st8\"\n          d=\"M38.2,27.7c0-0.5-0.4-1-1-1H24.5c-0.2,0.6-0.4,1.2-0.5,1.9h13.2C37.8,28.6,38.2,28.2,38.2,27.7z\"\n        />\n        <path\n          class=\"st8\"\n          d=\"M30.5,33.4c0-0.5-0.4-1-1-1h-5.4c0.2,0.7,0.4,1.3,0.7,1.9h4.7C30.1,34.4,30.5,33.9,30.5,33.4z\"\n        />\n        <path\n          class=\"st8\"\n          d=\"M33.4,22.9c0-0.5-0.4-1-1-1h-3.9c-0.9,0.5-1.6,1.2-2.3,1.9h6.2C33,23.9,33.4,23.4,33.4,22.9z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M24.7,23.9h-0.9c-0.2,0-0.3-0.1-0.5-0.1c-0.6,0.9-1.1,1.9-1.4,3h1.3C23.6,25.7,24.1,24.7,24.7,23.9z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M51.5,44.9l-8.1-8.1c1.3-1.9,2-4.2,2-6.6c0-6.6-5.4-12-12-12c-3.4,0-6.5,1.4-8.7,3.7h1.7\n\t\t\tc1.9-1.6,4.3-2.5,6.9-2.5c5.9,0,10.8,4.8,10.8,10.8c0,5.9-4.8,10.8-10.8,10.8c-4.5,0-8.3-2.7-9.9-6.6h-1.3\n\t\t\tc1.7,4.5,6.1,7.8,11.2,7.8c2.4,0,4.7-0.7,6.6-2l8.1,8.1c0.5,0.5,1.2,0.5,1.7,0l1.7-1.7C52,46.1,52,45.3,51.5,44.9z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M22.7,30.2c0-0.5,0-1,0.1-1.5h-1.2c-0.1,0.5-0.1,1-0.1,1.5c0,0.8,0.1,1.5,0.2,2.3h1.2\n\t\t\tC22.8,31.7,22.7,31,22.7,30.2z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M23.2,26.7H22c-0.2,0.6-0.3,1.3-0.4,1.9h1.2C22.9,28,23,27.3,23.2,26.7z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M22.9,32.5h-1.2c0.1,0.7,0.3,1.3,0.5,1.9h1.3C23.3,33.8,23.1,33.1,22.9,32.5z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M24.7,23.9c0.5-0.7,1.1-1.3,1.8-1.9h-1.7c-0.5,0.5-1,1.1-1.4,1.8c0.1,0.1,0.3,0.1,0.5,0.1H24.7z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M26.3,23.9h-1.5c-0.6,0.9-1.1,1.8-1.5,2.9h1.3C24.9,25.7,25.5,24.7,26.3,23.9z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M23.9,30.2c0-0.5,0.1-1,0.1-1.5h-1.2c-0.1,0.5-0.1,1-0.1,1.5c0,0.8,0.1,1.5,0.2,2.3h1.2\n\t\t\tC24,31.7,23.9,31,23.9,30.2z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M33.4,20.6c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6c-3.8,0-7-2.2-8.6-5.4h-1.3c1.6,3.9,5.5,6.6,9.9,6.6\n\t\t\tc5.9,0,10.8-4.8,10.8-10.8c0-5.9-4.8-10.8-10.8-10.8c-2.6,0-5.1,1-6.9,2.5h2.1C30,21.1,31.7,20.6,33.4,20.6z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M24.5,26.7h-1.3c-0.2,0.6-0.4,1.3-0.5,1.9H24C24.1,28,24.3,27.3,24.5,26.7z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M24.2,32.5h-1.2c0.1,0.7,0.3,1.3,0.6,1.9h1.3C24.6,33.8,24.3,33.1,24.2,32.5z\"\n        />\n        <path\n          class=\"st9\"\n          d=\"M24.7,23.9h1.5c0.7-0.8,1.4-1.4,2.3-1.9h-2.1C25.8,22.5,25.2,23.2,24.7,23.9z\"\n        />\n      </g>\n    </g>\n  </svg>\n"]);

  docmagnifier_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function docmagnifier_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var docmagnifier = Object(lit_element["d" /* html */])(docmagnifier_templateObject());
// CONCATENATED MODULE: ./src/images/index.js


























/***/ }),

/***/ "eByC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "pAs2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listenForEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gaEvent; });
function getEventCategory(path) {
  var nodes = [];
  var innerText = '';
  var isVDSElement = false;
  path.forEach(function (el) {
    var _el$nodeName;

    if (el.nodeName && el.nodeName.slice(0, 2) === 'V-' || el.nodeName === 'A' || el.nodeName === 'NAV') {
      nodes.push(el.cloneNode(true));

      if (!innerText && el.innerText) {
        innerText = el.innerText;
      }
    }

    if (!isVDSElement) isVDSElement = (el === null || el === void 0 ? void 0 : (_el$nodeName = el.nodeName) === null || _el$nodeName === void 0 ? void 0 : _el$nodeName.slice(0, 2)) === 'V-';
  }); //workaround slotted text for v-icon, v-footer-nav-item

  if (innerText && !nodes[0].innerText) {
    nodes[0].text = innerText;
  }

  if (isVDSElement) return nodes;else return [];
}

function getEventLabel(nodes) {
  var eventLabel = '';
  var node = nodes[0]; //add any additional properties to include here

  var props = ['gaLabel', 'gaCategory', 'gaAction', 'href', 'link', 'id', 'linkText', 'tabtext', 'innerText', 'text', 'name', 'dataset', 'altLabel', 'value', 'tileTitle', 'tileHref', 'currentTopic', 'data-index', 'aria-label'];
  props.forEach(function (prop) {
    if (node[prop]) {
      if (['linkText', 'innerText', 'text', 'tileTitle', 'tabtext'].includes(prop) && typeof node[prop] === 'string') {
        if (node[prop].trim() === '' && nodes[1] && nodes[1][prop] && nodes[1][prop].trim() !== '') {
          var txt = nodes[1][prop].trim();
          eventLabel += "<".concat(prop, ": ").concat(txt.substring(0, 20), ">");
        } else if (node[prop].trim() !== '') {
          eventLabel += "<".concat(prop, ": ").concat(node[prop].trim().substring(0, 20), ">");
        }
      } else if (['href', 'tileHref'].includes(prop) && node[prop].indexOf('?') !== -1) {
        eventLabel += "<".concat(prop, ": ").concat(getURL(node[prop]), ">");
      } else if ('dataset' === prop) {
        if (node['index'] !== undefined) {
          eventLabel += "<data-index: ".concat(node['index'], ">");
        } else if (node['dataset'].label !== undefined) {
          eventLabel += "<data-label: ".concat(node['dataset'].label, ">");
        }
      } else if (node[prop] === 'pdf') {
        eventLabel += "<".concat(prop, ": ").concat(node.parentNode.innerText, ">");
      } else if (['value'].includes(prop) && (node.nodeName === 'V-INPUT-FIELD' || node.nodeName === 'V-TEXTAREA')) {
        eventLabel += "<".concat(prop, ": ****>");
      } else {
        eventLabel += "<".concat(prop, ": ").concat(node[prop], ">");
      }
    } else if (node.getAttribute(prop)) {
      eventLabel += "<".concat(prop, ": ").concat(node.getAttribute(prop), ">");
    } else if (['id'].includes(prop) && nodes[1] && nodes[1][prop]) {
      eventLabel += "<".concat(prop, ": ").concat(nodes[1][prop], ">");
    }
  });

  if (nodes[1] && nodes[1].linkText || nodes[1] && nodes[1].nodeName === 'V-BUTTON' && nodes[2] && nodes[1].linkText) {
    if (nodes[1] && nodes[1].linkText) {
      eventLabel += "<linkText: ".concat(nodes[1].linkText, ">");
    } else if (nodes[2] && nodes[2].linkText) {
      eventLabel += "<linkText: ".concat(nodes[2].linkText, ">");
    }
  }

  if (nodes[1] && nodes[1].getAttribute('title') || nodes[1] && nodes[1].nodeName === 'V-BUTTON' && nodes[2] && nodes[2].getAttribute('title')) {
    if (nodes[1] && nodes[1].getAttribute('title')) {
      eventLabel += "<title: ".concat(nodes[1].getAttribute('title').substring(0, 20), ">");
    } else if (nodes[2] && nodes[2].getAttribute('title')) {
      eventLabel += "<title: ".concat(nodes[2].getAttribute('title').substring(0, 20), ">");
    }
  }

  if (nodes[1] && nodes[1].getAttribute('headingtext') || nodes[1] && nodes[1].nodeName === 'V-BUTTON' && nodes[2] && nodes[2].getAttribute('headingtext')) {
    if (nodes[1] && nodes[1].getAttribute('headingtext')) {
      eventLabel += "<headingtext: ".concat(nodes[1].getAttribute('headingtext').substring(0, 20), ">");
    } else if (nodes[2] && nodes[2].getAttribute('headingtext')) {
      eventLabel += "<headingtext: ".concat(nodes[2].getAttribute('headingtext').substring(0, 20), ">");
    }
  }

  if (nodes[1] && nodes[1].getAttribute('headertext') || nodes[1] && nodes[1].nodeName === 'V-BUTTON' && nodes[2] && nodes[2].getAttribute('headertext')) {
    if (nodes[1] && nodes[1].getAttribute('headertext')) {
      eventLabel += "<headingtext: ".concat(nodes[1].getAttribute('headertext').substring(0, 20), ">");
    } else if (nodes[2] && nodes[2].getAttribute('headertext')) {
      eventLabel += "<headingtext: ".concat(nodes[2].getAttribute('headertext').substring(0, 20), ">");
    }
  }

  if (node.nodeName === 'V-BUTTON' && nodes[1] && nodes[1].nodeName === 'V-COLUMN') {
    var headerText = nodes[1].querySelector('.columnHeaders').innerHTML;
    eventLabel += "<columnHeader: ".concat(headerText.substring(0, 20), ">");
  }

  if (nodes[1] && nodes[1].currentTopic) {
    eventLabel += "<currentTopic: ".concat(nodes[1].currentTopic, ">");
  }

  if (nodes[2] && nodes[2].labelText) {
    eventLabel += "<labelText: ".concat(nodes[2].labelText, ">");
  }

  if (node.nodeName === 'V-WYSIWYG' && nodes[1] && nodes[1].subID) {
    eventLabel += "<subId: ".concat(nodes[1].subID, ">");
  }

  if (node.nodeName === 'A' && nodes[1] && nodes[1].nodeName === 'V-ICON') {
    eventLabel += "<Name: ".concat(nodes[1].name, ">");
  }

  return eventLabel;
}

function waitToRedirect(e, link) {
  e.preventDefault();
  setTimeout(function () {
    if (link.target && link.target === '_blank') {
      window.open(link.href);
    } else {
      window.location.href = link.href;
    }
  }, 500);
}

function getURL(url) {
  var hostName = url.substring(0, url.indexOf('?'));
  var hash = url.substring(url.indexOf('#'), url.length);
  return hostName + hash;
}

function listenForEvents() {
  window.addEventListener('click', function (e) {
    var nodes = getEventCategory(e.composedPath());

    if (nodes.length > 0 && !(nodes.length === 1 && nodes[0].nodeName === 'A')) {
      var eventDetail = nodes.map(function (el) {
        return el.nodeName + ' ';
      }).join('');

      if (nodes[0]['href']) {
        eventDetail += nodes[0]['href'];
      }

      var eventLabel = getEventLabel(nodes);
      var eventCategory = '';

      if (nodes[0].nodeName === 'A') {
        eventCategory = nodes[1].nodeName;
      } else if (nodes[0].nodeName === 'V-ICON') {
        eventCategory = nodes[1].nodeName + ' V-ICON';
      } else if (nodes[0].nodeName === 'V-WYSIWYG') {
        eventCategory = nodes[1].nodeName;
      } else {
        eventCategory = nodes[0].nodeName;
      }

      if (nodes[0].nodeName === 'A' && nodes[0].href) {
        waitToRedirect(e, nodes[0]);
      }

      if (window.dataLayer && typeof window.dataLayer.push === 'function' && eventDetail !== 'V-DEMO-APP ') {
        window.dataLayer.push({
          event: 'GAEvent',
          eventCategory: eventCategory,
          eventAction: 'click',
          eventLabel: eventLabel,
          eventValue: 0,
          eventDetail: '<place: ' + eventDetail + '>',
          nonInteraction: false
        });
      }
    }
  });
}
function gaEvent(e, eventCategory, eventAction, eventLabel) {
  var nodes = [];

  if (e) {
    e.composedPath().forEach(function (el) {
      if (el.nodeName && el.nodeName.slice(0, 2) === 'V-' || el.nodeName === 'A') {
        nodes.push(el.cloneNode(true));
      }
    });
    var eventDetail = nodes.map(function (el) {
      return el.nodeName + ' ';
    }).join('');

    if (window.dataLayer && typeof window.dataLayer.push === 'function') {
      window.dataLayer.push({
        event: 'GAEvent',
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        eventValue: 0,
        eventDetail: '<place: ' + eventDetail + '>',
        nonInteraction: false
      });
    }
  }
}

/***/ }),

/***/ "tFPJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/***/ }),

/***/ "wmha":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tFPJ");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XI78");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PqmH");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



var parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__[/* removeNodes */ "b"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__[/* NodePart */ "e"](Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__[/* templateFactory */ "b"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ })

/******/ });