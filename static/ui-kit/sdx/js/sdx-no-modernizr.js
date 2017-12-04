(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./imports");

},{"./imports":2}],2:[function(require,module,exports){
"use strict";

require("./polyfills/selectedOptions");

var _Utils = require("./src/Utils");

var _LoaderBar = require("./src/loader/LoaderBar");

var LoaderBar = _interopRequireWildcard(_LoaderBar);

var _InputField = require("./src/form/InputField");

var InputFields = _interopRequireWildcard(_InputField);

var _Textarea = require("./src/form/Textarea");

var Textarea = _interopRequireWildcard(_Textarea);

var _Select = require("./src/form/Select");

var Select = _interopRequireWildcard(_Select);

var _Range = require("./src/form/Range");

var Range = _interopRequireWildcard(_Range);

var _Autocomplete = require("./src/form/Autocomplete");

var Autocomplete = _interopRequireWildcard(_Autocomplete);

var _ProgressLight = require("./src/progress/ProgressLight");

var ProgressLight = _interopRequireWildcard(_ProgressLight);

var _ProgressFull = require("./src/progress/ProgressFull");

var ProgressFull = _interopRequireWildcard(_ProgressFull);

var _Modal = require("./src/modal/Modal");

var Modal = _interopRequireWildcard(_Modal);

var _Toolbar = require("./src/toolbar/Toolbar");

var Toolbar = _interopRequireWildcard(_Toolbar);

var _Notification = require("./src/notification/Notification");

var Notification = _interopRequireWildcard(_Notification);

var _Collapse = require("./src/collapse/Collapse");

var Collapse = _interopRequireWildcard(_Collapse);

var _Accordion = require("./src/accordion/Accordion");

var Accordion = _interopRequireWildcard(_Accordion);

var _MenuFlyout = require("./src/menu/MenuFlyout");

var MenuFlyout = _interopRequireWildcard(_MenuFlyout);

var _Navigation = require("./src/navigation/Navigation");

var Navigation = _interopRequireWildcard(_Navigation);

var _NavigationSide = require("./src/navigation/NavigationSide");

var NavigationSide = _interopRequireWildcard(_NavigationSide);

var _SearchInput = require("./src/search/SearchInput");

var SearchInput = _interopRequireWildcard(_SearchInput);

var _EmptyState = require("./src/empty-states/EmptyState");

var EmptyState = _interopRequireWildcard(_EmptyState);

var _Carousel = require("./src/carousel/Carousel");

var Carousel = _interopRequireWildcard(_Carousel);

var _Table = require("./src/table/Table");

var Table = _interopRequireWildcard(_Table);

var _PieChart = require("./src/charts/PieChart");

var PieChart = _interopRequireWildcard(_PieChart);

var _BarChartHorizontal = require("./src/charts/BarChartHorizontal");

var BarChartHorizontal = _interopRequireWildcard(_BarChartHorizontal);

var _BarChartVertical = require("./src/charts/BarChartVertical");

var BarChartVertical = _interopRequireWildcard(_BarChartVertical);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* Form Components */
(0, _Utils.onDocumentReady)(function () {
  InputFields.init();
  Textarea.init();
  Select.init();
  LoaderBar.init();
  Autocomplete.init();

  ProgressLight.init();
  ProgressFull.init();

  Range.init();
  Modal.init();

  Accordion.init();
  Collapse.init();
  MenuFlyout.init();

  Navigation.init();
  NavigationSide.init();
  SearchInput.init();
  EmptyState.init();
  Carousel.init();
  Table.init();

  PieChart.init();
  BarChartHorizontal.init();
  BarChartVertical.init();
}); /* Polyfills */


var sdx = window.sdx || {};

sdx.VERSION = "1.3.6";
sdx.LoaderBar = LoaderBar.default;
sdx.Select = Select.default;
sdx.InputField = InputFields.default;
sdx.Textarea = Textarea.default;
sdx.Autocomplete = Autocomplete.default;

sdx.ProgressLight = ProgressLight.default;
sdx.ProgressFull = ProgressFull.default;

sdx.Range = Range.default;
sdx.Modal = Modal.default;
sdx.Toolbar = Toolbar.default;
sdx.Notification = Notification;

sdx.Collapse = Collapse.default;
sdx.Accordion = Accordion.default;

sdx.MenuFlyout = MenuFlyout.default;

sdx.Navigation = Navigation.default;
sdx.NavigationSide = NavigationSide.default;
sdx.SearchInput = SearchInput.default;
sdx.EmptyState = EmptyState.default;
sdx.Carousel = Carousel.default;

sdx.Table = Table.default;

sdx.PieChart = PieChart.default;
sdx.BarChartHorizontal = BarChartHorizontal.default;
sdx.BarChartVertical = BarChartVertical.default;

window.sdx = sdx;

},{"./polyfills/selectedOptions":3,"./src/Utils":7,"./src/accordion/Accordion":8,"./src/carousel/Carousel":9,"./src/charts/BarChartHorizontal":10,"./src/charts/BarChartVertical":11,"./src/charts/PieChart":13,"./src/collapse/Collapse":14,"./src/empty-states/EmptyState":15,"./src/form/Autocomplete":16,"./src/form/InputField":17,"./src/form/Range":18,"./src/form/Select":19,"./src/form/Textarea":20,"./src/loader/LoaderBar":21,"./src/menu/MenuFlyout":22,"./src/modal/Modal":23,"./src/navigation/Navigation":24,"./src/navigation/NavigationSide":25,"./src/notification/Notification":26,"./src/progress/ProgressFull":27,"./src/progress/ProgressLight":28,"./src/search/SearchInput":29,"./src/table/Table":30,"./src/toolbar/Toolbar":31}],3:[function(require,module,exports){
"use strict";

try {
  Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
    get: function () {
      try {
        document.querySelector(":checked");
        return function () {
          return this.querySelectorAll(":checked");
        };
      } catch (e) {
        return function () {
          if (!this.multiple) {
            return this.selectedIndex >= 0 ? [this.options[this.selectedIndex]] : [];
          }
          for (var i = 0, a = []; i < this.options.length; i++) {
            if (this.options[i].selected) a.push(this.options[i]);
          }return a;
        };
      }
    }()
  });
} catch (e) {
  // Ignore errors with Object.defineProperty on Safari
  // as detection with Object.isExtensible() is not reliable.
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DomFunctions = require("./DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global htmlEvents:true */

/**
 * A wrapper class for DOM Elements.
 */
var DomElement = function () {
  /**
   * Creates a new instance.
   * @param {Element} - The element to wrap.
   * @param {String} - The DOM element to create.
   */
  function DomElement(element) {
    (0, _classCallCheck3.default)(this, DomElement);

    if (typeof element === "string") {
      this.element = document.createElement(element);
    } else {
      this.element = element;
    }
  }

  /**
   * Adds the specified CSS class to the element.
   * @param {String} - The class name to add.
   * @return {DomElement} Returns the current instance for fluent chaining of calls.
   */


  (0, _createClass3.default)(DomElement, [{
    key: "addClass",
    value: function addClass(name) {
      Dom.addClass(this.element, name);
      return this;
    }

    /**
     * Removes the specified CSS class from the element.
     * @param {String} - The class name to remove.
     * @return {DomElement} Returns the current instance for fluent chaining of calls.
     */

  }, {
    key: "removeClass",
    value: function removeClass(name) {
      Dom.removeClass(this.element, name);
      return this;
    }
  }, {
    key: "hasClass",
    value: function hasClass(name) {
      return Dom.hasClass(this.element, name);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(name) {
      Dom.toggleClass(this.element, name);
      return this;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.element.setAttribute("id", id);
      return this;
    }
  }, {
    key: "setHtml",
    value: function setHtml(value) {
      if (typeof value !== "string") {
        throw new Error("Expected HTML string");
      }

      this.element.innerHTML = value;
      return this;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.element.getAttribute(name);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.element.setAttribute(name, value);
      return this;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(name, event) {
      this.element.addEventListener(name, event);
    }
  }, {
    key: "appendChild",
    value: function appendChild(newChild) {
      if (!(newChild instanceof DomElement)) {
        throw new Error("Only other DomElements can be added as children");
      }

      this.element.appendChild(newChild.element);
      return this;
    }
  }, {
    key: "prependChild",
    value: function prependChild(newChild) {
      if (!(newChild instanceof DomElement)) {
        throw new Error("Only other DomElements can be added as children");
      }

      this.element.insertBefore(newChild.element, this.element.firstChild);
      return this;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild) {
      if (!(newChild instanceof DomElement)) {
        throw new Error("Only other DomElements can be added as children");
      }

      this.element.parentNode.insertBefore(newChild.element, this.element);
      return this;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(newChild) {
      if (!(newChild instanceof DomElement)) {
        throw new Error("Only other DomElements can be added as children");
      }

      this.element.parentNode.insertBefore(newChild.element, this.element.nextSibling);
      return this;
    }
  }, {
    key: "removeChild",
    value: function removeChild(oldChild) {
      if (!(oldChild instanceof DomElement)) {
        throw new Error("Only a DomElements child can be removed");
      }

      this.element.removeChild(oldChild.element);
    }
  }, {
    key: "find",
    value: function find(selectors) {
      var e = this.element.querySelector(selectors);
      if (e) {
        return new DomElement(e);
      }

      return undefined;
    }
  }, {
    key: "wrapWithElement",
    value: function wrapWithElement(wrapperElement) {
      this.element.parentNode.replaceChild(wrapperElement.element, this.element);
      wrapperElement.element.appendChild(this.element);

      return this;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(eventName) {
      var event = void 0;
      var el = this.element;

      if (document.createEvent) {
        event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, true, true);
      } else if (document.createEventObject) {
        // IE < 9
        event = document.createEventObject();
        event.eventType = eventName;
      }
      event.eventName = eventName;
      if (el.dispatchEvent) {
        el.dispatchEvent(event);
      } else if (el.fireEvent && htmlEvents["on" + eventName]) {
        // IE < 9
        el.fireEvent("on" + event.eventType, event); // can trigger only real event (e.g. 'click')
      } else if (el[eventName]) {
        el[eventName]();
      } else if (el["on" + eventName]) {
        el["on" + eventName]();
      }
    }
  }, {
    key: "css",
    value: function css(property) {
      return Dom.css(this.element, property);
    }

    /**
     * Removes all child nodes of the current DomElement.
     */

  }, {
    key: "empty",
    value: function empty() {
      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }
    }
  }, {
    key: "classes",
    get: function get() {
      return this.element.classList;
    }
  }, {
    key: "innerText",
    get: function get() {
      return Dom.text(this.element);
    }
  }, {
    key: "innerHtml",
    get: function get() {
      return this.element.innerHTML;
    }
  }]);
  return DomElement;
}();

exports.default = DomElement;

},{"./DomFunctions":5,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.toggleClass = toggleClass;
exports.isHidden = isHidden;
exports.text = text;
exports.parentWithClass = parentWithClass;
exports.textWidth = textWidth;
exports.css = css;
exports.getAttributeReference = getAttributeReference;
exports.getRootElement = getRootElement;
exports.empty = empty;
function addClass(element, name) {
  if (typeof name !== "string") {
    throw new Error("Expected string class name");
  }

  element.classList.add(name);
}

function removeClass(element, name) {
  if (typeof name !== "string") {
    throw new Error("Expected string class name");
  }

  element.classList.remove(name);
}

function hasClass(element, name) {
  if (typeof name !== "string") {
    throw new Error("Expected string class name");
  }

  return element.classList.contains(name);
}

function toggleClass(element, name) {
  if (typeof name !== "string") {
    throw new Error("Expected string class name");
  }

  element.classList.toggle(name);
}

/**
 * Determines if the given element is hidden from view.
 * @param {Element} Element The dom element to check.
 * @param {boolean} includeParents If set to `true` searches up the DOM and checks parent visibility as well. Defaults to `false`.
 */
function isHidden(element) {
  var includeParents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (includeParents === false) {
    var style = window.getComputedStyle(element);
    return style.display === "none" || element.offsetLeft < 0;
  }

  var result = void 0;
  while ((result = isHidden(element, false)) === false && element.parentElement) {
    element = element.parentElement;
  }

  return result;
}

/**
 * Gets the text of an element an makes sure this works on all browsers.
 */
function text(element) {
  return element.textContent || element.innerText;
}

function parentWithClass(element, className) {
  var current = element;

  while (!hasClass(current, className) && current.parentElement) {
    current = current.parentElement;
  }

  if (hasClass(current, className)) {
    return current;
  }

  return undefined;
}

function textWidth(text, font) {
  // NOTE: this width measuring algorithm is a lot faster
  // but does unfortunately not work on IE 10...

  // let canvas = document.createElement("canvas")
  // let context = canvas.getContext("2d")
  // context.font = font
  // let metrics = context.measureText(text)
  // return Math.round(metrics.width)

  var div = document.createElement("div");
  div.innerHTML = text;

  div.style.font = font;
  div.style.position = "absolute";
  div.style.left = -10000;
  div.style.right = -10000;
  div.style.visibility = "hidden";

  document.body.appendChild(div);

  var result = div.offsetWidth;
  document.body.removeChild(div);

  return result;
}

function css(element, property) {
  return window.getComputedStyle(element, null).getPropertyValue(property);
}

/**
 * Gets the single element referenced in an items data-* attribute.
 * @param {DomElement} element - The element containing the reference attribute.
 * @param {string} attribute - The name of the reference attribute.
 * @returns {DomElement} The referenced element; or `undefined` if the reference is invalid
 * or the attribute could not be found.
 */
function getAttributeReference(element, attribute) {
  var attrValue = element.getAttribute(attribute);

  if (!attrValue || attrValue === "") {
    return undefined;
  }

  return document.querySelector(attrValue);
}

/**
 * Gets the document root element (normally the body element)
 * If the document uses a sdx-container wrapper this is returned instead.
 * @returns {Element} The root dom element.
 */
function getRootElement() {
  var element = document.querySelector(".sdx-container");
  if (!element) {
    element = document.body;
  }

  return element;
}

/**
 * Removes all child nodes from the provided element.
 * @param {Element} element The Dom element
 */
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Keyboard input keycode definitions */

var KEY_ENTER = exports.KEY_ENTER = 13;
var KEY_ESCAPE = exports.KEY_ESCAPE = 27;

// Arrow keys
var KEY_ARROW_UP = exports.KEY_ARROW_UP = 38;
var KEY_ARROW_DOWN = exports.KEY_ARROW_DOWN = 40;
var KEY_ARROW_LEFT = exports.KEY_ARROW_LEFT = 37;
var KEY_ARROW_RIGHT = exports.KEY_ARROW_RIGHT = 39;

// Page keys
var KEY_PAGE_UP = exports.KEY_PAGE_UP = 33;
var KEY_PAGE_DOWN = exports.KEY_PAGE_DOWN = 34;

// Numbers
var KEY_NR_0 = exports.KEY_NR_0 = 48;
var KEY_NR_1 = exports.KEY_NR_1 = 49;
var KEY_NR_9 = exports.KEY_NR_9 = 57;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

exports.onDocumentReady = onDocumentReady;
exports.eachElement = eachElement;
exports.searchAndInitialize = searchAndInitialize;
exports.clamp = clamp;
exports.preventDefault = preventDefault;
exports.remove = remove;
exports.find = find;
exports.msIEVersion = msIEVersion;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calls the callback function when the document has been completely parsed.
 * @param {callback} value The callback function to execute.
 */
function onDocumentReady(callback) {
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed, false);
    window.removeEventListener("load", completed, false);
    callback();
  }

  if (document.readyState === "complete") {
    setTimeout(callback);
  } else {

    document.addEventListener("DOMContentLoaded", completed, false);

    // A fallback to window.onload, that will always work
    window.addEventListener("load", completed, false);
  }
}

function eachElement(selectors, callback) {
  if (!callback) {
    throw new Error("The callback cannot be undefined");
  }

  var elements = (0, _from2.default)(document.querySelectorAll(selectors));

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(elements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

      callback(e);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Searches for elements with the given selector and calls the callback
 * function if the `data-init` attribute is present on the element.
 * @param {selector} value The query.
 * @param {callback} value The callback function to initialize the element.
 * @param {function} initSelector The inititalization element selector function.
 */
function searchAndInitialize(selector, callback) {
  var initSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (!callback) {
    throw new Error("The callback cannot be undefined");
  }

  var elements = (0, _from2.default)(document.querySelectorAll(selector));

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(elements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var e = _step2.value;


      var initElement = e;

      if (initSelector) {
        initElement = initSelector(e);
      }

      if (initElement.getAttribute("data-init") === "auto") {
        callback(e);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * Utils.clamp(number, 0, 255)
 *
 * @param {Number} value The number to clamp
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * A polyfill for Event.preventDefault().
 * @param {Event} event - The event to prevent the default action.
 */
function preventDefault(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

/**
 * A polyfill for Node.remove().
 * @param {Node} node - The node to remove.
 */
function remove(node) {
  if (!node || !node.parentNode) {
    return;
  }

  node.parentNode.removeChild(node);
}

/**
 * A simple polyfill for the Array.find() method.
 * @param {Array} array - The array to search in.
 * @param {function} expression - The expresstion to evaluate. Must return true if the element matches.
 */
function find(array, expression) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (expression(item) === true) {
      return item;
    }
  }

  return undefined;
}

/**
 * Checks the useragent and returns the Microsoft Internet Explorer / Edge version.
 * If another browser is detected 0 is returned.
 */
function msIEVersion() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  // see http://stackoverflow.com/questions/19999388/check-if-user-is-using-ie-with-jquery
  var ua = userAgent || window.navigator.userAgent;

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  // other browser
  return 0;
}

},{"babel-runtime/core-js/array/from":32,"babel-runtime/core-js/get-iterator":33}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _gsap = require("gsap");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_TOGGLE = ".accordion__toggle";
var QUERY_OPEN_SECTION = ".accordion__item.is-open";
var QUERY_COLLAPSE = ".accordion__collapse";

var CLASS_ITEM = "accordion__item";
var CLASS_OPEN = "is-open";

var REGEX_HIDDEN = /accordion--hidden-.*/;

var ANIMATION_OPEN = 0.3;

var ANIMATION_DELAY_OPEN = 0.2;
var ANIMATION_VISIBLE_OPEN = 0.5;

var ANIMATION_VISIBLE_CLOSE = 0.1;

/**
 * The Accordion component
 */

var Accordion = function (_DomElement) {
  (0, _inherits3.default)(Accordion, _DomElement);

  /**
   * Creates and initializes the Accordion component.
   * @param {DomElement} - The root element of the Accordion component.
   */
  function Accordion(element) {
    (0, _classCallCheck3.default)(this, Accordion);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Accordion.__proto__ || (0, _getPrototypeOf2.default)(Accordion)).call(this, element));

    _this._sectionClickHandler = _this._handleSectionClick.bind(_this);
    _this._initialize();
    return _this;
  }

  /**
   * Initializes the Accordion component.
   * @private
   */


  (0, _createClass3.default)(Accordion, [{
    key: "_initialize",
    value: function _initialize() {
      if (this.element.className.split(" ").some(function (c) {
        return REGEX_HIDDEN.test(c);
      })) {
        var indicator = new _DomElement3.default("input").setAttribute("type", "hidden").addClass("js-hidden");

        this.appendChild(indicator);
        this._hiddenIndicator = indicator.element;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.element.querySelectorAll(QUERY_TOGGLE)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var toggle = _step.value;

          toggle.addEventListener("click", this._sectionClickHandler);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_handleSectionClick",
    value: function _handleSectionClick(event) {
      if (this._hiddenIndicator) {
        var style = window.getComputedStyle(this._hiddenIndicator, null);

        if (style.visibility !== "visible") {
          return;
        }
      }

      var navSection = event.target.parentElement;

      while (!Dom.hasClass(navSection, CLASS_ITEM) && navSection.parentElement) {
        navSection = navSection.parentElement;
      }

      var prevSection = this.element.querySelector(QUERY_OPEN_SECTION);

      if (prevSection && prevSection !== navSection) {
        this._toggleSection(prevSection);
      }

      this._toggleSection(navSection);
    }
  }, {
    key: "_toggleSection",
    value: function _toggleSection(accSection) {
      var collapseElement = accSection.querySelector(QUERY_COLLAPSE);

      if (Dom.hasClass(accSection, CLASS_OPEN)) {
        Dom.removeClass(accSection, CLASS_OPEN);
        this._closeCollapseSection(collapseElement);
      } else {
        Dom.addClass(accSection, CLASS_OPEN);
        this._openCollapseSection(collapseElement);
      }
    }
  }, {
    key: "_openCollapseSection",
    value: function _openCollapseSection(el) {
      _gsap.TweenLite.killTweensOf(el);

      _gsap.TweenLite.set(el, {
        display: "block"
      });

      _gsap.TweenLite.to(el, ANIMATION_OPEN, {
        className: "+=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });

      _gsap.TweenLite.to(el, ANIMATION_VISIBLE_OPEN, {
        autoAlpha: 1,
        delay: ANIMATION_DELAY_OPEN
      });

      // set aria expanded
      el.setAttribute("aria-expanded", true);
    }
  }, {
    key: "_closeCollapseSection",
    value: function _closeCollapseSection(el) {
      _gsap.TweenLite.killTweensOf(el);

      _gsap.TweenLite.to(el, ANIMATION_VISIBLE_CLOSE, {
        autoAlpha: 0
      });

      _gsap.TweenLite.to(el, ANIMATION_OPEN, {
        className: "-=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut],
        onComplete: function onComplete() {
          _gsap.TweenLite.set(el, {
            clearProps: "display, visibility, opacity"
          });
        }
      });

      // set aria expanded
      el.setAttribute("aria-expanded", false);
    }

    /**
     * Removes all event handlers and clears references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.element.querySelectorAll(QUERY_TOGGLE)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var toggle = _step2.value;

          toggle.removeEventListener("click", this._sectionClickHandler);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._sectionClickHandler = null;
      this.element = null;
    }
  }]);
  return Accordion;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".accordion", function (e) {
    new Accordion(e);
  });
}

exports.default = Accordion;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trunc = require("babel-runtime/core-js/math/trunc");

var _trunc2 = _interopRequireDefault(_trunc);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

var _DomFunctions = require("../DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_SLIDER = ".carousel__container";
var QUERY_SLIDE_AREA = ".carousel__slider";
var QUERY_WRAPPER = ".carousel__slider-wrapper";

var QUERY_PAGINATION = ".carousel__pagination";

var CLASS_ACTIVE = "slide--active";
var CLASS_PREV = "slide--prev";
var CLASS_NEXT = "slide--next";

var CLASS_BULLET = "pagination-bullet";
var CLASS_BULLET_ACTIVE = "pagination-bullet--active";

var QUERY_BTN_PREV = ".carousel__button-prev";
var QUERY_BTN_NEXT = ".carousel__button-next";
var QUERY_BTN_WRAPPER = ".carousel__button-wrapper";

var ATTRIBUTE_INDEX = "js-index";

var ANIMATION_DURATION = 350;
var ANIMATION_EASING = "ease-in-out";

var TOUCH_DURATION = 300;
var TOUCH_DELTA_MIN = 25;

/**
 * The carousel component definition.
 */

var Carousel = function (_DomElement) {
  (0, _inherits3.default)(Carousel, _DomElement);

  /**
   * Creates and initializes the carousel component.
   * @param {DomElement} element - The root element of the Carousel component.
   * @param {index} - The initial index.
   */
  function Carousel(element) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck3.default)(this, Carousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).call(this, element));

    _this._breakpoint = undefined;
    _this._slider = _this.element.querySelector(QUERY_SLIDER);
    _this._wrapper = _this._slider.querySelector(QUERY_WRAPPER);
    _this._pagination = _this._slider.querySelector(QUERY_PAGINATION);
    _this._slideArea = _this._slider.querySelector(QUERY_SLIDE_AREA);

    _this._btnWrapper = _this.element.querySelector(QUERY_BTN_WRAPPER);
    _this._prevCtrl = _this.element.querySelector(QUERY_BTN_PREV);
    _this._nextCtrl = _this.element.querySelector(QUERY_BTN_NEXT);

    _this._container = _this.element.querySelector(QUERY_SLIDER);
    _this._slides = [];

    _this._index = index || 0;
    _this._slidesPerGroup = 1;

    _this._sliderWrapper = new SliderWrapper(_this._wrapper, _this._slideArea, _this.element);
    _this._sliderWrapper._index = _this._index;
    _this._additionalSlideMargin = 0;

    _this._resizeHandler = _this._onresize.bind(_this);
    _this._prevHandler = _this.prev.bind(_this);
    _this._nextHandler = _this.next.bind(_this);
    _this._paginationClickHandler = _this._handlePaginationClick.bind(_this);
    _this._keydownHandler = _this._handleKeydown.bind(_this);

    _this._handleTouchstart = _this._onTouchstart.bind(_this);
    _this._handleTouchmove = _this._onTouchmove.bind(_this);
    _this._handleTouchend = _this._onTouchend.bind(_this);

    _this._initialize();
    _this.slide(_this._index, 0, false);

    _this._updateCtrlOffsets();
    return _this;
  }

  /**
   * Initializes the carousel component.
   * @private
   */


  (0, _createClass3.default)(Carousel, [{
    key: "_initialize",
    value: function _initialize() {
      // responsive helpers
      this._breakpointPhone = new _DomElement3.default("div").addClass("js-phone").element;

      this._breakpointTablet = new _DomElement3.default("div").addClass("js-tablet").element;

      this._breakpointDesktop = new _DomElement3.default("div").addClass("js-desktop").element;

      this.element.appendChild(this._breakpointPhone);
      this.element.appendChild(this._breakpointTablet);
      this.element.appendChild(this._breakpointDesktop);

      if (this._prevCtrl && this._nextCtrl) {
        this._prevCtrl.addEventListener("click", this._prevHandler);
        this._nextCtrl.addEventListener("click", this._nextHandler);
      }

      if (this._pagination) {
        this._pagination.addEventListener("click", this._paginationClickHandler);
      }

      this._slides = (0, _from2.default)(this._wrapper.children);
      if (this._slides.length === 0) {
        throw Error("Provide at least one slide to the slider");
      }

      for (var i = 0; i < this._slides.length; i++) {
        var slide = this._slides[i];
        slide.setAttribute(ATTRIBUTE_INDEX, i);
      }

      this._updateResponsiveOptions();
      this._sliderWrapper.initialize();

      this.reset();

      this.element.addEventListener("keydown", this._keydownHandler);

      this._slideArea.addEventListener("mousedown", this._handleTouchstart);
      this._slideArea.addEventListener("touchstart", this._handleTouchstart);

      window.addEventListener("resize", this._resizeHandler);
      window.addEventListener("orientationchange", this._resizeHandler);
    }
  }, {
    key: "_isBreakpointActive",
    value: function _isBreakpointActive(breakpoint) {
      var style = window.getComputedStyle(breakpoint, null);
      return style.visibility === "visible";
    }
  }, {
    key: "_onresize",
    value: function _onresize() {
      this.reset();
      this._updateCtrlOffsets();
    }

    /**
     * Makes sure the index is always in the range of available slide
     * In case it's to high or to low it is wrapped around
     * @param {Number} index - The index to adjust and sanitize
     * @returns {Number} The adjusted index
     * @private
     */

  }, {
    key: "_adjustIndex",
    value: function _adjustIndex(index) {
      if (typeof index !== "number") {
        index = 0;
      }

      if (index < 0) {
        index = this._wrapround(index, 0, this._slides.length);
      } else if (index >= this._slides.length) {
        index %= this._slides.length;
      }

      return Math.floor(index / this._slidesPerGroup) * this._slidesPerGroup;
    }
  }, {
    key: "_wrapround",
    value: function _wrapround(n, min, max) {
      if (n >= max) {
        return min;
      }

      if (n < min) {
        return max - 1;
      }

      return n;
    }
  }, {
    key: "_wraproundCount",
    value: function _wraproundCount(a, b, min, max, direction) {
      if (direction === 0) {
        return 0;
      }

      if (a < min || a >= max) {
        throw new Error("Argument 'a' is out of range, Value: " + a + " Min: " + min + ", Max: " + max);
      }

      if (b < min || b >= max) {
        throw new Error("Argument 'b' is out of range, Value: " + b + " Min: " + min + ", Max: " + max);
      }

      var i = 0;
      while (a !== b) {
        i++;
        a = this._wrapround(a + direction, min, max);
      }

      return i;
    }
  }, {
    key: "_updateCtrlOffsets",
    value: function _updateCtrlOffsets() {
      if (!this._nextCtrl || !this._prevCtrl || !this._btnWrapper) {
        return;
      }

      var prevCtrlMargin = 0;
      var nextCtrlMargin = 0;

      if (this._slidesPerGroup > 1) {
        var wrapperRect = this._btnWrapper.getBoundingClientRect();

        var prevSlideCount = Math.floor(0.5 * this._slidesPerGroup);
        var rightIndex = this._sliderWrapper.index + prevSlideCount + 1;

        var leftIndex = this._sliderWrapper.index - 1;
        if (this._slidesPerGroup % 2 !== 0) {
          leftIndex -= prevSlideCount;
        }

        if (leftIndex >= 0 && leftIndex < this._wrapper.children.length && rightIndex >= 0 && rightIndex < this._wrapper.children.length) {
          var leftSlide = this._sliderWrapper.getSlideProperties(leftIndex);
          var rightSlide = this._sliderWrapper.getSlideProperties(rightIndex);

          var btnWidth = this._prevCtrl.offsetWidth;
          if (btnWidth <= 0) {
            btnWidth = 60;
          }

          prevCtrlMargin = leftSlide.right - wrapperRect.left - btnWidth;
          nextCtrlMargin = wrapperRect.right - rightSlide.left - btnWidth;
        }
      }

      var left = prevCtrlMargin !== 0 ? prevCtrlMargin + "px" : "";
      this._prevCtrl.style.left = left;

      var right = nextCtrlMargin !== 0 ? nextCtrlMargin + "px" : "";
      this._nextCtrl.style.right = right;
    }
  }, {
    key: "_updateActiveSlides",
    value: function _updateActiveSlides(nextIndex) {
      var prevSlideCount = Math.floor(0.5 * (this._slidesPerGroup - 1));
      var evenGroup = this._slidesPerGroup % 2 === 0;

      for (var i = 0; i < this._wrapper.children.length; i++) {
        var slide = this._wrapper.children[i];

        if (i === nextIndex || evenGroup && i === nextIndex + 1) {
          Dom.addClass(slide, CLASS_ACTIVE);
        } else {
          Dom.removeClass(slide, CLASS_ACTIVE);
        }

        if (i < nextIndex && i >= nextIndex - prevSlideCount) {
          Dom.addClass(slide, CLASS_PREV);
        } else {
          Dom.removeClass(slide, CLASS_PREV);
        }

        if (i > nextIndex && (i <= nextIndex + prevSlideCount || evenGroup && i <= nextIndex + 1 + prevSlideCount)) {
          Dom.addClass(slide, CLASS_NEXT);
        } else {
          Dom.removeClass(slide, CLASS_NEXT);
        }
      }
    }

    /**
     * Updates and creates the pagination bullets.
     * @private
     */

  }, {
    key: "_updatePagination",
    value: function _updatePagination() {
      if (!this._pagination) {
        return;
      }

      var to = this._index;

      var bullets = this._pagination.children;
      var totalItems = Math.max(this._slides.length, bullets.length);
      var slideCount = Math.ceil(this._slides.length / this._slidesPerGroup);
      var activeSlideIndex = Math.floor(to / this._slidesPerGroup);

      for (var i = 0; i < totalItems; i++) {
        var bullet = void 0;

        if (bullets.length > i) {
          if (bullets.length <= slideCount) {
            bullet = bullets[i];
          } else {
            (0, _Utils.remove)(bullets[i]);
          }
        } else if (i < slideCount) {
          bullet = new _DomElement3.default("div").addClass(CLASS_BULLET).element;
          this._pagination.appendChild(bullet);
        }

        if (bullet && i < slideCount) {
          if (i === activeSlideIndex) {
            Dom.addClass(bullet, CLASS_BULLET_ACTIVE);
          } else {
            Dom.removeClass(bullet, CLASS_BULLET_ACTIVE);
          }
        }
      }
    }
  }, {
    key: "_handlePaginationClick",
    value: function _handlePaginationClick(e) {
      if (!Dom.hasClass(e.target, CLASS_BULLET)) {
        return;
      }

      var index = (0, _from2.default)(this._pagination.children).indexOf(e.target);
      var slideNumber = index * this._slidesPerGroup;

      this.slideTo(slideNumber);
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var evt = evt || window.event;
      var keycode = event.which || event.keyCode;

      switch (keycode) {
        case Inputs.KEY_ARROW_LEFT:
          this.prev();
          break;
        case Inputs.KEY_ARROW_RIGHT:
          this.next();
          break;
        case Inputs.KEY_ESCAPE:
          this.element.blur();
          break;
        default:
      }
    }
  }, {
    key: "_onTouchstart",
    value: function _onTouchstart(event) {
      var touches = event.touches ? event.touches[0] : event;

      this._slideArea.removeEventListener("mousedown", this._handleTouchstart);
      this._slideArea.removeEventListener("touchstart", this._handleTouchstart);

      this._sliderWrapper.beginDrag();
      var pageX = touches.pageX;


      this._touchOffset = {
        x: pageX,
        time: Date.now()
      };

      this._delta = {
        lastMove: pageX
      };

      document.addEventListener("mousemove", this._handleTouchmove);
      document.addEventListener("touchmove", this._handleTouchmove);

      document.addEventListener("mouseup", this._handleTouchend);
      document.addEventListener("mouseleave", this._handleTouchend);
      document.addEventListener("touchend", this._handleTouchend);
    }
  }, {
    key: "_onTouchmove",
    value: function _onTouchmove(event) {
      var touches = event.touches ? event.touches[0] : event;
      var pageX = touches.pageX;


      var deltaMove = pageX - this._delta.lastMove;

      this._delta = {
        x: pageX - this._touchOffset.x,
        lastMove: pageX
      };

      if (this._touchOffset) {
        (0, _Utils.preventDefault)(event);

        this._sliderWrapper.move(deltaMove);
        this._cloneSlidesToFitWrapper(false, deltaMove);
      }
    }
  }, {
    key: "_onTouchend",
    value: function _onTouchend() {
      var duration = this._touchOffset ? Date.now() - this._touchOffset.time : undefined;

      var isValid = Number(duration) < TOUCH_DURATION && Math.abs(this._delta.x) > TOUCH_DELTA_MIN || Math.abs(this._delta.x) > this._frameWidth / 3;

      if (isValid) {
        var direction = (0, _Utils.clamp)(this._delta.x, -1, 1) * -1;
        this.slide(false, direction, true);

        this._sliderWrapper.endDrag();
      } else {
        // Slide back to the starting point of the drag operation
        this._sliderWrapper.cancelDrag();
      }

      this._touchOffset = undefined;

      this._slideArea.addEventListener("mousedown", this._handleTouchstart);
      this._slideArea.addEventListener("touchstart", this._handleTouchstart);

      document.removeEventListener("mousemove", this._handleTouchmove);
      document.removeEventListener("mouseup", this._handleTouchend);
      document.removeEventListener("mouseleave", this._handleTouchend);
      document.removeEventListener("touchmove", this._handleTouchmove);
      document.removeEventListener("touchend", this._handleTouchend);
    }

    /**
     * Updated parameters in regard to the currently active responsive
     * breakpoint.
     * @private
     */

  }, {
    key: "_updateResponsiveOptions",
    value: function _updateResponsiveOptions() {
      if (this._isBreakpointActive(this._breakpointPhone)) {
        this._slidesPerGroup = 1;
      }

      if (this._isBreakpointActive(this._breakpointTablet)) {
        this._slidesPerGroup = 2;
      }

      if (this._isBreakpointActive(this._breakpointDesktop)) {
        this._slidesPerGroup = 3;
      }

      this._groupSlidesEven = this._slidesPerGroup % 2 === 0;
      this._sliderWrapper.slidesPerGroup = this._slidesPerGroup;
    }

    /**
     * Clones the requested slide and adds it to the slider.
     * @param {Number} index - The original slide index of the template slide
     * @param {Number} direction - The direction in which to add the slides, -1 for left, 1 for right
     * @private
     */

  }, {
    key: "_cloneSlide",
    value: function _cloneSlide(index, direction) {
      var clone = this._slides[index].cloneNode(true);
      Dom.removeClass(clone, CLASS_ACTIVE);
      Dom.removeClass(clone, CLASS_PREV);
      Dom.removeClass(clone, CLASS_NEXT);

      this._sliderWrapper.addSlide(clone, direction);

      var slideMargin = this._additionalSlideMargin > 0 ? this._additionalSlideMargin + "px" : "";
      clone.style.marginLeft = slideMargin;
      clone.style.marginRight = slideMargin;

      return clone.offsetWidth;
    }

    /**
     * Clones and adds the requested ammount of slides.
     * @param {Number} slideCount - The number of slides to add
     * @param {Number} direction - The direction in which to add the slides, -1 for left, 1 for right
     * @private
     */

  }, {
    key: "_cloneSlidesByCount",
    value: function _cloneSlidesByCount(slideCount, direction) {
      var originalIndex = direction < 0 ? 0 : this._wrapper.children.length - 1;
      var index = parseInt(this._wrapper.children[originalIndex].getAttribute(ATTRIBUTE_INDEX), 10);

      while (slideCount > 0) {
        index = this._wrapround(index + direction, 0, this._slides.length);
        this._cloneSlide(index, direction);
        slideCount--;
      }
    }

    /**
     * Calculates the scroll clount and inserts the required ammount of slides
     * in the apropriate direction.
     * @param {Number} nextIndex - The slide to scroll to
     * @param {Number} direction - The direction of the scroll
     * @private
     */

  }, {
    key: "_cloneSlidesByScrollCount",
    value: function _cloneSlidesByScrollCount(nextIndex, direction) {
      var scrollCount = this._wraproundCount(this._index, nextIndex, 0, this._slides.length, direction);

      var outerSlideProps = this._sliderWrapper.getSlideProperties(direction > 0 ? this._wrapper.children.length - 1 : 0);
      var indexToOuterSlideCount = this._wraproundCount(this._index, outerSlideProps.index, 0, this._slides.length, direction);

      var slidesToInsert = scrollCount - indexToOuterSlideCount;
      if (slidesToInsert > 0) {
        this._cloneSlidesByCount(slidesToInsert, direction);
      }
    }
  }, {
    key: "_cloneSlidesByToFill",
    value: function _cloneSlidesByToFill(spaceToFill, direction) {
      var originalIndex = direction < 0 ? 0 : this._wrapper.children.length - 1;
      var index = parseInt(this._wrapper.children[originalIndex].getAttribute(ATTRIBUTE_INDEX), 10);

      while (spaceToFill > 0) {
        index = this._wrapround(index + direction, 0, this._slides.length);
        spaceToFill -= this._cloneSlide(index, direction);
      }
    }
  }, {
    key: "_cloneSlidesToFitWrapper",
    value: function _cloneSlidesToFitWrapper(cleanup) {
      var slideDelta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var realIndex = this._sliderWrapper.index;
      var first = void 0,
          last = void 0;

      if (cleanup === false) {
        first = this._sliderWrapper.getSlideProperties(0);
        last = this._sliderWrapper.getSlideProperties(this._wrapper.children.length - 1);
      } else {
        var result = this._sliderWrapper.getRemovableSlides(slideDelta);
        first = result.first;
        last = result.last;

        // Remove the slides from view
        for (var i = result.slides.length - 1; i >= 0; i--) {
          if (result.slides[i] === true) {
            this._sliderWrapper.removeSlide(i);
          }
        }
      }

      var spaceToFill = this._sliderWrapper.getEmptySpace(first.left, last.right);

      // Check if additional slides are required on the left
      if (first.visible === true && spaceToFill.left > 0) {
        this._cloneSlidesByToFill(spaceToFill.left, -1);
      }

      // Check if additional slides are required on the right
      if (last.visible === true && spaceToFill.right > 0) {
        this._cloneSlidesByToFill(spaceToFill.right, 1);
      }

      return realIndex - this._sliderWrapper.index;
    }

    /**
     * Gets the real (wrapper) index for the slide with the given original index
     * @param {Number} index - The index to search for
     * @param {Number} direction - The direction in which to search
     * @returns {Number} The wrapper index
     * @private
     */

  }, {
    key: "_getRealIndexFor",
    value: function _getRealIndexFor(index, direction) {
      var i = this._sliderWrapper.index;
      while (i >= 0 && i < this._wrapper.children.length) {
        var slideIndex = parseInt(this._wrapper.children[i].getAttribute(ATTRIBUTE_INDEX), 10);
        if (slideIndex === index) {
          return i;
        }

        i += direction;
      }

      throw new Error("Cloud not find real index for slide " + index + " in direction " + direction);
    }

    /**
     * Gets the index of the current active slide. If the slides are grouped evenly
     * the active slide is always the first in the group.
     * @returns {Number} The index of the active slide.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._frameWidth = this._slider.getBoundingClientRect().width || this._slider.offsetWidth;

      this._updateResponsiveOptions();

      if (this._nextCtrl) {
        this._nextCtrl.disabled = false;
      }

      if (this._prevCtrl) {
        this._prevCtrl.disabled = false;
      }

      if (this._slidesPerGroup === 1) {
        var style = window.getComputedStyle(this._slider.parentElement);
        var parentWidth = this._slider.parentElement.clientWidth + (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);

        var outerMargin = Math.ceil(parentWidth - this._frameWidth);
        this._additionalSlideMargin = Math.ceil(outerMargin * 0.5) + 1;
      } else {
        this._additionalSlideMargin = 0;
      }

      var slideMargin = this._additionalSlideMargin > 0 ? this._additionalSlideMargin + "px" : "";
      for (var i = 0; i < this._wrapper.children.length; i++) {
        var slide = this._wrapper.children[i];
        slide.style.marginLeft = slideMargin;
        slide.style.marginRight = slideMargin;
      }

      this._sliderWrapper.onresize();
      this._cloneSlidesToFitWrapper(false);
      this._sliderWrapper.moveTo(this._sliderWrapper.index);

      this._updatePagination();
      this._updateActiveSlides(this._sliderWrapper.index);
    }

    /**
     * Moves the slider to the next item.
     */

  }, {
    key: "prev",
    value: function prev() {
      this.slide(false, -1);
    }

    /**
     * Moves the slider to the previous item.
     */

  }, {
    key: "next",
    value: function next() {
      this.slide(false, 1);
    }
  }, {
    key: "slide",
    value: function slide(nextIndex, direction) {
      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (typeof nextIndex !== "number") {
        if (direction > 0) {
          nextIndex = this._index + this._slidesPerGroup;
          direction = 1;
        } else {
          nextIndex = this._index - this._slidesPerGroup;
          direction = -1;
        }
      }

      nextIndex = this._adjustIndex(nextIndex);

      if (!direction) {
        direction = (0, _Utils.clamp)(nextIndex - this._index, -1, 1);
      }

      // Make sure there are enought slides on screen
      this._cloneSlidesToFitWrapper(false);

      // Make sure there are enough slides for the scroll operation
      this._cloneSlidesByScrollCount(nextIndex, direction);

      var realIndex = this._getRealIndexFor(nextIndex, direction);
      var slideDelta = this._sliderWrapper.getSlideDelta(realIndex);
      realIndex = Math.max(realIndex - this._cloneSlidesToFitWrapper(true, slideDelta), 0);

      this._sliderWrapper.moveTo(realIndex, undefined, animate);

      // Update the active index
      this._index = nextIndex;

      // Mark slides as active
      this._updatePagination();
      this._updateActiveSlides(realIndex);

      // console.log(`Performed slide to ${this._index}, realIndex: ${this._sliderWrapper.index}`)
    }

    /**
     * Moves the slider to the selected slide.
     * @param {Number} index - The index of the slide to slide to.
     * @param {Boolean} animate - `True` if the slide should be animated; otherwise `false`. Defaults to `true`.
     */

  }, {
    key: "slideTo",
    value: function slideTo(index) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.slide(index, undefined, animate);
    }

    /**
     * Destorys the components and frees all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("resize", this._resizeHandler);
      window.removeEventListener("orientationchange", this._resizeHandler);

      this.element.removeEventListener("keydown", this._keydownHandler);
      this._slideArea.removeEventListener("mousedown", this._handleTouchstart);
      this._slideArea.removeEventListener("touchstart", this._handleTouchstart);

      this._breakpointPhone.remove();
      this._breakpointTablet.remove();
      this._breakpointDesktop.remove();

      if (this._prevCtrl && this._nextCtrl) {
        this._prevCtrl.removeEventListener("click", this._prevHandler);
        this._nextCtrl.removeEventListener("click", this._nextHandler);
      }

      this._prevCtrl = undefined;
      this._nextCtrl = undefined;

      if (this._pagination) {
        this._pagination.removeEventListener("click", this._paginationClickHandler);
        this._pagination = undefined;
      }

      this._sliderWrapper.destory();
      this._sliderWrapper = undefined;
    }
  }, {
    key: "index",
    get: function get() {
      return this._index;
    }
  }]);
  return Carousel;
}(_DomElement3.default);

var SliderWrapper = function () {
  function SliderWrapper(wrapperElement, slideAreaElement, carouselElement) {
    (0, _classCallCheck3.default)(this, SliderWrapper);

    this._wrapperElement = wrapperElement;
    this._slideAreaElement = slideAreaElement;
    this._carouselElement = carouselElement;

    this._position = 0;
    this._translate = 0;
    this._index = 0;
    this._isdragging = false;
  }

  (0, _createClass3.default)(SliderWrapper, [{
    key: "_getSlide",
    value: function _getSlide(index) {
      if (index < 0 || index >= this._wrapperElement.children.length) {
        throw new Error("Argument 'index' is out of range, Value: " + index + " Min: 0, Max: " + (this._wrapperElement.children.length - 1));
      }

      return this._wrapperElement.children[index];
    }
  }, {
    key: "_setTransform",
    value: function _setTransform(targetPosition) {
      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ANIMATION_DURATION;
      var ease = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ANIMATION_EASING;

      if (animated === false) {
        duration = 0;
      }

      var style = this._wrapperElement.style;
      if (style) {
        style[this._prefixes.duration] = duration + "ms";
        style[this._prefixes.timing] = ease;

        // No sub pixel transitions.
        targetPosition = Math.floor(targetPosition);

        style[this._prefixes.transform] = "translate(" + targetPosition + "px, 0)";
        this._position = targetPosition;
      }
    }
  }, {
    key: "_getWrapperSlidePosition",
    value: function _getWrapperSlidePosition(index) {
      var wrapperCenter = 0.5 * this._wrapperElement.offsetWidth;
      var slide = this._getSlide(index);

      var result = 0;
      // Calculate the position of the slide (centered)
      if (this._slidesPerGroup % 2 === 0) {
        var slideStyle = window.getComputedStyle(slide, null);
        var slideMargin = slideStyle ? parseInt(slideStyle.marginRight, 10) : 0;
        // Centered to the space between the two center slides of the group
        result = -slide.offsetLeft - slide.clientWidth + wrapperCenter - slideMargin;
      } else {
        result = -slide.offsetLeft - 0.5 * slide.clientWidth + wrapperCenter;
      }

      return result;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this._prefixes = {
        transition: "transition",
        transform: "transform",
        duration: "transition-duration",
        timing: "transition-timing-function"
      };

      this.onresize();
    }
  }, {
    key: "onresize",
    value: function onresize() {
      // update the area offset for slide position calculation
      this._areaOffset = this._slideAreaElement.getBoundingClientRect().left;

      // Get the container dimensions
      var containerRect = this._carouselElement.getBoundingClientRect();
      this._containerMin = containerRect.left;
      this._containerMax = containerRect.right;
      this._containerCenter = 0.5 * (this._containerMax - this._containerMin);
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      this._isdragging = true;
      this._dragStartPosition = this._position;
      this._dragStartIndex = this._index;
    }
  }, {
    key: "cancelDrag",
    value: function cancelDrag() {
      this._isdragging = false;
      this._setTransform(this._dragStartPosition, true, ANIMATION_DURATION, ANIMATION_EASING);

      this._dragStartPosition = undefined;
      this._dragStartIndex = undefined;
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      this._isdragging = false;
      this._dragStartPosition = undefined;
      this._dragStartIndex = undefined;
    }
  }, {
    key: "move",
    value: function move(delta) {
      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ANIMATION_DURATION;
      var ease = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ANIMATION_EASING;

      delta = (0, _trunc2.default)(delta);
      if (Math.abs(delta) <= 0) {
        return;
      }

      var targetPosition = this._position += delta;
      this._setTransform(targetPosition, animated, duration, ease);
    }
  }, {
    key: "moveTo",
    value: function moveTo(index) {
      var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var newPosition = 0;
      if (!delta) {
        newPosition = this._getWrapperSlidePosition(index);
      } else {
        newPosition = this._position += delta;
      }

      this._index = index;
      this._setTransform(newPosition, animated);
    }
  }, {
    key: "addSlide",
    value: function addSlide(slide, position) {
      if (!slide) {
        throw new Error("Cannot add an undefined slide");
      }

      if (position !== -1 && position !== 1) {
        throw new Error("Argument out of range, 'position' must be either 1 or -1. Value " + position);
      }

      if (position > 0) {
        this._wrapperElement.appendChild(slide);
      } else {
        this._wrapperElement.insertBefore(slide, this._wrapperElement.children[0]);
        this._index++;
      }

      if (position < 0) {
        var width = slide.offsetWidth;

        var style = window.getComputedStyle(slide, null);
        var marginLeft = style ? parseInt(style.marginLeft, 10) : 0;
        var marginRight = style ? parseInt(style.marginRight, 10) : 0;

        this.move(-(width + marginLeft + marginRight));
      }
    }
  }, {
    key: "removeSlide",
    value: function removeSlide(index) {
      var slide = this._getSlide(index);
      var width = slide.offsetWidth;

      if (index <= this._index) {
        width *= -1;
        this._index--;
      }

      (0, _Utils.remove)(slide);

      if (width < 0) {
        this.move(-width);
      }
    }
  }, {
    key: "getSlideDelta",
    value: function getSlideDelta(index) {
      var currentPosition = this._position;
      if (this._isdragging === true) {
        currentPosition = this._dragStartPosition - this._position;
      }

      var newPosition = this._getWrapperSlidePosition(index);
      return newPosition - currentPosition;
    }
  }, {
    key: "getSlideProperties",
    value: function getSlideProperties(index) {
      var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      delta = delta || 0;
      var currentOffset = this._areaOffset + this._position + delta;
      var currentLeft = currentOffset;
      var currentRight = currentOffset;
      var _ = 0,
          currentMarginLeft = _.currentMarginLeft,
          currentMarginRight = _.currentMarginRight;


      var slide = this._getSlide(index);
      var slideIndex = parseInt(slide.getAttribute(ATTRIBUTE_INDEX), 10);

      for (var i = 0; i <= index; i++) {
        slide = this._getSlide(i);
        var slideStyle = window.getComputedStyle(slide);

        currentMarginLeft = parseInt(slideStyle.marginLeft, 10);
        currentMarginRight = parseInt(slideStyle.marginRight, 10);

        currentOffset += currentMarginLeft;
        currentLeft = currentOffset;
        currentRight = currentLeft + slide.offsetWidth;

        if (i < index) {
          currentOffset = currentRight + currentMarginRight;
        }
      }

      var visible = false;
      if (currentLeft > this._containerMin && currentLeft < this._containerMax || currentRight > this._containerMin && currentRight < this._containerMax) {
        visible = true;
      }

      return {
        visible: visible,
        index: slideIndex,
        left: currentLeft,
        right: currentRight,
        width: currentRight - currentLeft,
        marginLeft: currentMarginLeft,
        marginRight: currentMarginRight
      };
    }
  }, {
    key: "getRemovableSlides",
    value: function getRemovableSlides(delta) {
      var slides = [];
      var first = void 0,
          last = void 0;

      var index = this._wrapperElement.children.length;
      while (index > 0) {
        index--;

        var propsNow = this.getSlideProperties(index);
        var propsNew = this.getSlideProperties(index, delta);

        if (index === this._wrapperElement.children.length - 1) {
          last = propsNew;
        }

        if (index === 0) {
          first = propsNew;
        }

        if (propsNow.visible === false && propsNew.visible === false && index !== this._index && this._isdragging === false) {
          slides.push(true);
        } else {
          slides.push(false);
        }
      }

      slides.reverse();

      var firstToKeep = slides.indexOf(false);
      var lastToKeep = slides.lastIndexOf(false);

      for (var i = firstToKeep; i < lastToKeep; i++) {
        slides[i] = false;
      }

      // let log1 = ""
      // let log2 = ""
      // for (let i = 0; i < slides.length; i++) {
      //   let addon = i > 9 ? " " : ""
      //   log1 += `${addon} ${i}`
      //   log2 += `${addon}${addon} ${slides[i] === true ? "X" : "-"}`
      // }

      // console.log(log1)
      // console.log(log2)

      return {
        slides: slides,
        first: first,
        last: last
      };
    }
  }, {
    key: "getEmptySpace",
    value: function getEmptySpace(left, right) {
      return {
        left: Math.max(Math.ceil(left - this._containerMin), 0),
        right: Math.max(Math.ceil(this._containerMax - right), 0)
      };
    }
  }, {
    key: "destory",
    value: function destory() {
      this._wrapperElement = null;
      this._slideAreaElement = null;
      this._carouselElement = null;

      this._prefixes = null;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
  }, {
    key: "index",
    get: function get() {
      return this._index;
    }
  }, {
    key: "slidesPerGroup",
    set: function set(value) {
      this._slidesPerGroup = value;
    }
  }]);
  return SliderWrapper;
}();

function init() {
  (0, _Utils.searchAndInitialize)(".carousel", function (e) {
    new Carousel(e);
  });
}

exports.default = Carousel;

},{"../DomElement":4,"../DomFunctions":5,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/array/from":32,"babel-runtime/core-js/math/trunc":35,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Utils = require("../Utils");

var _DomFunctions = require("../DomFunctions");

var _ChartFunctions = require("./ChartFunctions");

var _gsap = require("gsap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_INDICATOR = ".bar-chart__progress";
var QUERY_DETAIL_RIGHT = ".detail-right";
var QUERY_DETAIL_BOTTOM = ".detail-bottom";
var QUERY_PROGRESS = ".bar-chart__progress";

var CLASS_UNLIMITED = "bar-chart-horizontal--unlimited";
var CLASS_LIMITED = "bar-chart-horizontal--limited";

var CLASS_DETAIL_VALUE = "value";
var CLASS_DETAIL_UNIT = "unit";

var CLASS_INDICATOR = "indicator";
var CLASS_INDICATOR_WRAPPER = "indicator-wrapper";

var CLASS_TOOLTIP = "tooltip";
var CLASS_TOOLTIP_MULTILINE = "tooltip--multiline";

var ANIMATION_DURATION = 0.5;

/**
 * Bar Chart Horizontal Component.
 */

var BarChartHorizontal = function (_DomElement) {
  (0, _inherits3.default)(BarChartHorizontal, _DomElement);

  /**
   * Creates and initializes the bar chart horizontal component.
   * @param {DomElement} - root element of the chart.
   */
  function BarChartHorizontal(element, data) {
    (0, _classCallCheck3.default)(this, BarChartHorizontal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BarChartHorizontal.__proto__ || (0, _getPrototypeOf2.default)(BarChartHorizontal)).call(this, element));

    _this._data = data;

    _this._legendItems = [];

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(BarChartHorizontal, [{
    key: "_initialize",
    value: function _initialize() {
      this._indicatorWrapper = this.element.querySelector(QUERY_INDICATOR);

      this._unit = this.getAttribute("data-unit") || "";
      this._maxValue = parseFloat(this.getAttribute("data-max"));
      this._precision = parseInt(this.getAttribute("data-precision"), 10) || 0;

      this._isUnlimited = this.hasClass(CLASS_UNLIMITED);
      this._isLimited = this.hasClass(CLASS_LIMITED);

      this._progessWrapper = this.element.querySelector(QUERY_PROGRESS);

      if (this._isLimited === true) {
        this._detailRight = this.element.querySelector(QUERY_DETAIL_BOTTOM);
      } else {
        this._detailRight = this.element.querySelector(QUERY_DETAIL_RIGHT);
      }

      if (this._isUnlimited === false && this._isLimited === false) {
        this._legend = (0, _DomFunctions.getAttributeReference)(this.element, "data-legend");
      }

      if (!this._data) {
        this._data = (0, _ChartFunctions.tryGetData)(this.element);
      }

      this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var dataOne = this._data[0];
      var dataTwo = this._data[1];

      var tl = new _gsap.TimelineLite();
      var tooltip = this._isLimited === false ? this._getTooltipContent(this._data) : undefined;

      var animatedValueElement = void 0;

      // Cleanup
      (0, _ChartFunctions.removeAllChildren)(this._detailRight);
      (0, _ChartFunctions.removeAllChildren)(this._progessWrapper);

      // Clear only own legend items
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this._legendItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          (0, _Utils.remove)(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._legendItems = [];

      if (dataOne) {
        if (this._isUnlimited === false || this._isUnlimited === true && !dataTwo) {

          var valElement = animatedValueElement = this._createValueElement(dataOne);
          this._detailRight.appendChild(valElement);

          if (this._isLimited === false) {
            var separatorElement = new _DomElement3.default("div").addClass(CLASS_DETAIL_UNIT).setHtml(" " + this._unit).element;

            this._detailRight.appendChild(separatorElement);
          }
        }

        // Add the indicator
        var indicator = this._addIndicator(dataOne, tooltip);

        tl.from(indicator, ANIMATION_DURATION, {
          width: 0,
          ease: _gsap.Power4.easeInOut
        });

        // Animate the value if required
        if (animatedValueElement && this._isLimited === true) {
          var counter = { var: 0 };
          tl.to(counter, ANIMATION_DURATION, {
            var: dataOne.value,
            roundProps: "var",
            onUpdate: function onUpdate() {
              animatedValueElement.innerHTML = "" + counter.var;
            },
            ease: _gsap.Power4.easeOut
          }, "-=" + ANIMATION_DURATION);
        }

        // Add the legend
        if (this._legend) {
          var legendItem = (0, _ChartFunctions.createLegendItem)(dataOne);
          this._legend.appendChild(legendItem);
          this._legendItems.push(legendItem);

          tl.from(legendItem, ANIMATION_DURATION, {
            opacity: 0,
            ease: _gsap.Power4.easeInOut
          }, "-=" + ANIMATION_DURATION);
        }
      }

      if (dataTwo) {
        var _valElement = this._createValueElement(dataTwo);

        var unitElement = new _DomElement3.default("div").addClass(CLASS_DETAIL_UNIT).setHtml(" " + this._unit).element;

        this._detailRight.appendChild(_valElement);
        this._detailRight.appendChild(unitElement);

        // Add the indicator
        var _indicator = this._addIndicator(dataTwo, tooltip);
        tl.from(_indicator, ANIMATION_DURATION, {
          width: 0,
          ease: _gsap.Power4.easeInOut
        });

        // Add the legend
        if (this._legend) {
          var _legendItem = (0, _ChartFunctions.createLegendItem)(dataTwo);
          this._legend.appendChild(_legendItem);
          this._legendItems.push(_legendItem);

          tl.from(_legendItem, ANIMATION_DURATION, {
            opacity: 0,
            ease: _gsap.Power4.easeInOut
          }, "-=" + ANIMATION_DURATION);
        }
      }

      if (this._isLimited === true) {
        var _valElement2 = this._createValueElement({ value: this._maxValue });

        var _unitElement = new _DomElement3.default("div").addClass(CLASS_DETAIL_UNIT).setHtml(" " + this._unit).element;

        this._detailRight.appendChild(_valElement2);
        this._detailRight.appendChild(_unitElement);
      }
    }
  }, {
    key: "_createValueElement",
    value: function _createValueElement(data) {
      var unlimitedPrefix = "";

      if (this._isUnlimited === true) {
        unlimitedPrefix = "+";
      }

      var value = parseFloat(data.value);
      if (value <= 0) {
        value = ".00";
      } else {
        value = value.toFixed(this._precision);
      }

      return new _DomElement3.default("div").addClass(CLASS_DETAIL_VALUE).setHtml("" + unlimitedPrefix + value).element;
    }
  }, {
    key: "_addIndicator",
    value: function _addIndicator(data, tooltip) {
      var width = 99.8 / this._maxValue * data.value;

      var indicator = new _DomElement3.default("div").addClass(CLASS_INDICATOR);

      if ((0, _ChartFunctions.isColor)(data.color) === true) {
        indicator.setAttribute("style", "background-color: " + data.color + ";");
      } else {
        indicator.addClass(data.color);
      }

      var indicatorWrapper = new _DomElement3.default("div").addClass(CLASS_INDICATOR_WRAPPER).setAttribute("style", "width: " + width + "%").appendChild(indicator).setAttribute("onclick", "void(0)");

      if (tooltip && tooltip !== "") {
        indicatorWrapper.addClass(CLASS_TOOLTIP).addClass(CLASS_TOOLTIP_MULTILINE).setAttribute("aria-label", tooltip);
      }

      this._progessWrapper.appendChild(indicatorWrapper.element);
      return indicatorWrapper.element;
    }
  }, {
    key: "_getTooltipContent",
    value: function _getTooltipContent(dataList) {
      var tooltip = "";
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(dataList), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var data = _step2.value;

          tooltip += data.title + ": " + data.value + " " + this._unit + "\n";
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return tooltip.trim();
    }

    /**
     * Updates the bar chart with the specified data definitions.
     * @param {Array} - bar chart data definitions.
     */

  }, {
    key: "update",
    value: function update(data) {
      if (data) {
        this._data = data;
      }

      this._render();
    }

    /**
     * Removes all event handlers and clears references.
     */

  }, {
    key: "destory",
    value: function destory() {
      this._data = undefined;

      (0, _ChartFunctions.removeAllChildren)(this._detailRight);
      (0, _ChartFunctions.removeAllChildren)(this._progessWrapper);

      this._detailRight = undefined;
      this._progessWrapper = undefined;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(this._legendItems), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          (0, _Utils.remove)(item);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this._legendItems = undefined;
      this._legend = undefined;
    }
  }]);
  return BarChartHorizontal;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".bar-chart-horizontal", function (e) {
    new BarChartHorizontal(e);
  });
}

exports.default = BarChartHorizontal;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"./ChartFunctions":12,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Utils = require("../Utils");

var _DomFunctions = require("../DomFunctions");

var _ChartFunctions = require("./ChartFunctions");

var _gsap = require("gsap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_DATA_CATEGORIES = ".js-data-list .js-category";
var QUERY_DATA_ITEMS = ".js-data-list .js-data";
var QUERY_CHART = ".js-chart";
var QUERY_LEGEND = ".bar-chart__legend";

var CLASS_INDICATOR = "indicator";
var CLASS_LABEL_X = "axis-x-label";
var CLASS_INDICATOR_WRAPPER = "indicator-wrapper";
var CLASS_INDICATOR_INNER_WRAPPER = "indicator-wrapper-inner";
var CLASS_INDICATOR_EMPTY = "empty";

var CLASS_TOOLTIP = "tooltip";
var CLASS_TOOLTIP_RIGHT = "tooltip--right";
var CLASS_TOOLTIP_MULTILINE = "tooltip--multiline";

var ANIMATION_DURATION = 0.5;

/**
 * Bar Chart Horizontal Component.
 */

var BarChartVertical = function (_DomElement) {
  (0, _inherits3.default)(BarChartVertical, _DomElement);

  /**
   * Creates and initializes the bar chart horizontal component.
   * @param {DomElement} - root element of the chart.
   */
  function BarChartVertical(element, data) {
    (0, _classCallCheck3.default)(this, BarChartVertical);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BarChartVertical.__proto__ || (0, _getPrototypeOf2.default)(BarChartVertical)).call(this, element));

    _this._data = data;

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(BarChartVertical, [{
    key: "_initialize",
    value: function _initialize() {
      this._unit = this.getAttribute("data-unit") || "";

      this._minValue = parseFloat(this.getAttribute("data-min")) || 0;
      this._maxValue = parseFloat(this.getAttribute("data-max")) || 100;

      this._chart = this.element.querySelector(QUERY_CHART);
      this._legend = this.element.querySelector(QUERY_LEGEND);

      if (!this._data) {
        this._data = this._tryGetData(this.element);
      }

      this._render();
    }
  }, {
    key: "_tryGetData",
    value: function _tryGetData(element) {
      var data = {
        categories: [],
        items: []
      };

      var categories = element.querySelectorAll(QUERY_DATA_CATEGORIES);
      var items = element.querySelectorAll(QUERY_DATA_ITEMS);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(categories), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var category = _step.value;

          data.categories.push({
            title: (0, _DomFunctions.text)(category),
            color: category.getAttribute("data-color")
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var dataEnty = {
            title: (0, _DomFunctions.text)(item),
            class: item.getAttribute("data-class"),
            values: []
          };

          var vals = item.getAttribute("data-value");
          if (vals) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = (0, _getIterator3.default)(vals.split(",")), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var val = _step3.value;

                dataEnty.values.push(parseFloat(val));
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          data.items.push(dataEnty);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return data;
    }
  }, {
    key: "_getTooltipContent",
    value: function _getTooltipContent(entry, categories) {
      var tooltip = "";
      for (var i = 0; i < entry.values.length; i++) {
        tooltip += categories[i].title + ": " + entry.values[i] + " " + this._unit + "\n";
      }

      return tooltip.trim();
    }
  }, {
    key: "_render",
    value: function _render() {
      if (this._legend) {
        (0, _ChartFunctions.removeAllChildren)(this._legend);

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = (0, _getIterator3.default)(this._data.categories), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var category = _step4.value;

            var legendItem = (0, _ChartFunctions.createLegendItem)(category);
            this._legend.appendChild(legendItem);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      (0, _ChartFunctions.removeAllChildren)(this._chart);

      var animationStages = [];

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = (0, _getIterator3.default)(this._data.items), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var item = _step5.value;

          var element = new _DomElement3.default("li");

          if (item.class && item.class !== "") {
            element.addClass(item.class);
          }

          var listElement = new _DomElement3.default("ul").addClass(CLASS_INDICATOR_WRAPPER);

          var wrapper = new _DomElement3.default("div").addClass(CLASS_INDICATOR_INNER_WRAPPER);
          listElement.appendChild(wrapper);

          element.appendChild(listElement);

          var tooltip = this._getTooltipContent(item, this._data.categories);
          if (tooltip && tooltip !== "") {
            wrapper.addClass(CLASS_TOOLTIP).addClass(CLASS_TOOLTIP_RIGHT).setAttribute("aria-label", tooltip);

            if (item.values.length > 1) {
              wrapper.addClass(CLASS_TOOLTIP_MULTILINE);
            }
          }

          for (var _i = 0; _i < item.values.length; _i++) {
            var height = this._chart.offsetHeight / this._maxValue * item.values[_i];

            var indicator = new _DomElement3.default("li").addClass(CLASS_INDICATOR).setAttribute("style", "height: " + height + "px;");

            if (height > 0) {
              var color = this._data.categories[_i].color;
              if ((0, _ChartFunctions.isColor)(color) === true) {
                indicator.setAttribute("style", "background-color: " + color + ";");
              } else {
                indicator.addClass(color);
              }

              if (animationStages.length <= _i) {
                animationStages.push([]);
              }

              animationStages[_i].push(indicator.element);
            } else {
              indicator.addClass(CLASS_INDICATOR_EMPTY);
            }

            wrapper.appendChild(indicator);
          }

          element.appendChild(new _DomElement3.default("div").addClass(CLASS_LABEL_X).setHtml(item.title));

          this._chart.appendChild(element.element);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      var tl = new _gsap.TimelineLite();
      for (var i = 0; i < animationStages.length; i++) {
        tl.from(animationStages[i], ANIMATION_DURATION, {
          height: 0,
          ease: _gsap.Power4.easeInOut,
          autoRound: false
        });

        if (this._legend) {
          tl.from(this._legend.children[i], ANIMATION_DURATION, {
            opacity: 0,
            ease: _gsap.Power4.easeInOut
          }, "-=" + ANIMATION_DURATION);
        }
      }
    }

    /**
     * Updates the bar chart with the specified data definitions.
     * @param {Array} - bar chart data definitions.
     */

  }, {
    key: "update",
    value: function update(data) {
      if (data) {
        this._data = data;
      }

      this._render();
    }

    /**
     * Removes all event handlers and clears references.
     */

  }, {
    key: "destory",
    value: function destory() {
      this._data = undefined;

      if (this._legend) {
        (0, _ChartFunctions.removeAllChildren)(this._legend);
        this._legend = undefined;
      }
    }
  }]);
  return BarChartVertical;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".bar-chart-vertical", function (e) {
    new BarChartVertical(e);
  });
}

exports.default = BarChartVertical;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"./ChartFunctions":12,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.tryGetData = tryGetData;
exports.removeAllChildren = removeAllChildren;
exports.createLegendItem = createLegendItem;
exports.isColor = isColor;

var _DomElement = require("../DomElement");

var _DomElement2 = _interopRequireDefault(_DomElement);

var _DomFunctions = require("../DomFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_DATA = ".js-data";

function tryGetData(element) {
  var data = [];
  var elements = element.querySelectorAll(QUERY_DATA);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(elements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;

      var value = parseFloat(entry.getAttribute("data-value"));
      var color = entry.getAttribute("data-color");
      var title = (0, _DomFunctions.text)(entry);

      var item = {
        title: title,
        value: value,
        color: color
      };

      data.push(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return data;
}

function removeAllChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createLegendItem(data) {
  var bullet = new _DomElement2.default("span").addClass("bullet");

  if (isColor(data.color) === true) {
    bullet.setAttribute("style", "background-color: " + data.color + ";");
  } else {
    bullet.addClass(data.color);
  }

  var caption = new _DomElement2.default("span").setHtml(data.title);

  return new _DomElement2.default("li").appendChild(bullet).appendChild(caption).element;
}

function isColor(str) {
  var pattern = /^#/i;
  return pattern.test(str);
}

},{"../DomElement":4,"../DomFunctions":5,"babel-runtime/core-js/get-iterator":33}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Utils = require("../Utils");

var _ChartFunctions = require("./ChartFunctions");

var _gsap = require("gsap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_CHART = ".js-chart";
var QUERY_LEGEND = ".js-legend";

var DASH_SEPARATOR_WIDTH = 3;
var ANIMATION_DURATION = 1.5;

var QUERY_META_TITLE = ".meta .title";
var QUERY_META_SUBTITLE = ".meta .subtitle";

/**
 * Pie Chart Component.
 */

var PieChart = function (_DomElement) {
  (0, _inherits3.default)(PieChart, _DomElement);

  /**
   * Creates and initializes the Pie Chart component.
   * @param {DomElement} - root element of the chart.
   * @param {Array} - pie chart data definitions.
   */
  function PieChart(element) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    (0, _classCallCheck3.default)(this, PieChart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PieChart.__proto__ || (0, _getPrototypeOf2.default)(PieChart)).call(this, element));

    _this._data = data;

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(PieChart, [{
    key: "_initialize",
    value: function _initialize() {
      this._chart = this.element.querySelector(QUERY_CHART);
      this._legend = this.element.querySelector(QUERY_LEGEND);
      this._title = this.element.querySelector(QUERY_META_TITLE);
      this._subtitle = this.element.querySelector(QUERY_META_SUBTITLE);

      this._unit = this.getAttribute("data-unit") || "";

      if (!this._data) {
        this._data = (0, _ChartFunctions.tryGetData)(this.element);
      }

      this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      var total = this._data.reduce(function (a, b) {
        return a + b.value;
      }, 0);
      var r = 16;
      var dashTotal = 2 * r * Math.PI;

      var currentRotate = 9;

      // Cleanup
      (0, _ChartFunctions.removeAllChildren)(this._chart);

      if (this._legend) {
        (0, _ChartFunctions.removeAllChildren)(this._legend);
      }

      var tl = new _gsap.TimelineLite();

      var percentageAdjustTotal = 0;
      var percentageAdjust = 0;
      var separatorPercentage = DASH_SEPARATOR_WIDTH / 100;

      for (var i = 0; i < this._data.length; i++) {
        var entry = this._data[i];

        var percentage = entry.value / total;
        if (percentage < separatorPercentage) {
          percentageAdjustTotal += separatorPercentage - percentage;
          percentageAdjust++;
        }
      }

      if (percentageAdjust > 0) {
        percentageAdjust = percentageAdjustTotal / (this._data.length - percentageAdjust);
      }

      var _loop = function _loop(_i) {
        var entry = _this2._data[_i];

        var displayPercentage = entry.value / total;
        var percentage = Math.max(separatorPercentage, displayPercentage - percentageAdjust);

        var dashWidth = percentage * dashTotal - DASH_SEPARATOR_WIDTH;

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 34 34");
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-labelledby", "title desc");

        var title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.setAttribute("id", "title");
        title.innerHTML = "Pie chart segment " + Math.floor(displayPercentage * 100) + "%";

        var description = document.createElementNS("http://www.w3.org/2000/svg", "desc");
        description.setAttribute("id", "desc");
        description.innerHTML = entry.title + ": " + entry.value;

        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", 17);
        circle.setAttribute("cy", 17);
        circle.setAttribute("r", r);
        circle.setAttribute("stroke-dasharray", dashWidth + " " + dashTotal);

        circle.setAttribute("style", "stroke-width: 0");

        if ((0, _ChartFunctions.isColor)(entry.color) === true) {
          circle.setAttribute("stroke", "" + entry.color);
        } else {
          circle.setAttribute("class", entry.color);
        }

        circle.setAttribute("role", "presentation");
        svg.setAttribute("style", "transform: rotate(" + currentRotate + "deg);");

        svg.appendChild(title);
        svg.appendChild(description);
        svg.appendChild(circle);
        _this2._chart.appendChild(svg);

        var duration = ANIMATION_DURATION * percentage;

        tl.set(circle, {
          clearProps: "strokeWidth"
        });

        if (circle.classList) {
          tl.from(circle, duration, {
            strokeDasharray: "0.5 100",
            ease: _gsap.Power4.ease
          });
        } else {
          // IE 10 & 11 fallback since animating stroke-dasharray does not work
          // we have to do it manualy

          var counter = { var: 0.5 };
          tl.to(counter, duration, {
            var: dashWidth,
            onUpdate: function onUpdate() {
              circle.setAttribute("stroke-dasharray", counter.var + " " + dashTotal);
            },
            ease: _gsap.Power4.ease
          });
        }

        // Legend
        if (_this2._legend && _this2._data.length > 1) {
          var bullet = new _DomElement3.default("span").addClass("bullet");

          if ((0, _ChartFunctions.isColor)(entry.color) === true) {
            bullet.setAttribute("style", "background-color: " + entry.color);
          } else {
            bullet.addClass(entry.color);
          }

          var caption = new _DomElement3.default("span").setHtml(entry.title);

          var legendItem = new _DomElement3.default("li").appendChild(bullet).appendChild(caption);

          _this2._legend.appendChild(legendItem.element);

          tl.from(legendItem.element, duration, {
            opacity: 0,
            ease: _gsap.Power4.easeInOut
          }, "-=" + duration);
        }

        currentRotate += 360 * percentage;

        if (_i === _this2._data.length - 1) {
          _this2._title.innerHTML = entry.value + " " + _this2._unit;
          _this2._subtitle.innerHTML = entry.title;
        }
      };

      for (var _i = 0; _i < this._data.length; _i++) {
        _loop(_i);
      }
    }

    /**
     * Updates the pie chart with the specified data definitions.
     * @param {Array} - pie chart data definitions.
     */

  }, {
    key: "update",
    value: function update(data) {
      if (data) {
        this._data = data;
      }

      this._render();
    }

    /**
     * Removes all event handlers and clears references.
     */

  }, {
    key: "destory",
    value: function destory() {
      this._data = undefined;
      this._title = undefined;
      this._subtitle = undefined;
      this._unit = undefined;

      (0, _ChartFunctions.removeAllChildren)(this._chart);
      this._chart = undefined;

      if (this._legend) {
        (0, _ChartFunctions.removeAllChildren)(this._legend);
        this._legend = undefined;
      }
    }
  }]);
  return PieChart;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".pie-chart", function (e) {
    new PieChart(e);
  });
}

exports.default = PieChart;

},{"../DomElement":4,"../Utils":7,"./ChartFunctions":12,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _gsap = require("gsap");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_OPEN = "is-open";

var ANIMATION_OPEN = 0.3;

/**
 * The Collapse component.
 */

var Collapse = function (_DomElement) {
  (0, _inherits3.default)(Collapse, _DomElement);

  /**
   * Creates and initializes the Collapse component.
   * @param {DomElement} - The root element of the Collapse component.
   */
  function Collapse(element) {
    (0, _classCallCheck3.default)(this, Collapse);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call(this, element));

    _this._clickHandler = _this._handleClick.bind(_this);
    _this._initialize();
    return _this;
  }

  /**
   * Initializes the Collapse component.
   * @private
   */


  (0, _createClass3.default)(Collapse, [{
    key: "_initialize",
    value: function _initialize() {
      var dataTarget = this.element.getAttribute("data-target");
      if (dataTarget === null || dataTarget === "") {

        /* eslint-disable no-console */
        console.error("A collapsible element requires a 'data-target' that specifies the element to collapse");
        console.info(this.element);
        /* eslint-enable no-console */

        return;
      }

      var hiddenTarget = this.element.getAttribute("data-hidden");
      if (hiddenTarget !== null && hiddenTarget !== "") {
        this._hiddenIndicator = document.querySelector(hiddenTarget);
      }

      this._collapsibleElements = document.querySelectorAll(dataTarget);
      this.element.addEventListener("click", this._clickHandler);
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      (0, _Utils.preventDefault)(event);
      this.toggle();
    }

    /**
     * Toggles the collapseible.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._hiddenIndicator && (0, _DomFunctions.isHidden)(this._hiddenIndicator, false) === true) {
        return;
      }

      if ((0, _DomFunctions.hasClass)(this.element, CLASS_OPEN) === false) {
        (0, _DomFunctions.addClass)(this.element, CLASS_OPEN);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(this._collapsibleElements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            this._openCollapse(s);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        (0, _DomFunctions.removeClass)(this.element, CLASS_OPEN);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(this._collapsibleElements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _s = _step2.value;

            this._closeCollapse(_s);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: "_openCollapse",
    value: function _openCollapse(el) {
      _gsap.TweenLite.killTweensOf(el);

      _gsap.TweenLite.set(el, {
        display: "block"
      });

      _gsap.TweenLite.to(el, ANIMATION_OPEN, {
        className: "+=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });

      // set aria expanded
      el.setAttribute("aria-expanded", true);
    }
  }, {
    key: "_closeCollapse",
    value: function _closeCollapse(el) {
      _gsap.TweenLite.killTweensOf(el);

      _gsap.TweenLite.to(el, ANIMATION_OPEN, {
        className: "-=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut],
        onComplete: function onComplete() {
          _gsap.TweenLite.set(el, {
            clearProps: "display"
          });
        }
      });

      // set aria expanded
      el.setAttribute("aria-expanded", false);
    }

    /**
     * Removes all event handlers and clears references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._collapsibleElements = null;

      if (this._clickHandler) {
        this.element.removeEventListener("click", this._clickHandler);
      }

      this.element = null;
    }
  }]);
  return Collapse;
}(_DomElement3.default);

function init() {
  var elements = document.querySelectorAll("[data-toggle='collapse']");
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = (0, _getIterator3.default)(elements), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var e = _step3.value;

      if (e.getAttribute("data-init") === "auto") {
        new Collapse(e);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

exports.default = Collapse;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_BORDER = "empty-state__border";
var CLASS_BORDER_MODAL = "empty-state__border--modal";
var CLASS_ACTIVE = "is-active";
var CLASS_HASFILES = "has-files";
var CLASS_MODAL = "empty-state--modal";
var CLASS_MODAL_CONTENT = "modal__content";

var QUERY_MODAL_BODY = ".modal__body";
var QUERY_FILE = "input[type='file']";

/**
 * Empty state pattern
 */

var EmptyState = function (_DomElement) {
  (0, _inherits3.default)(EmptyState, _DomElement);

  /**
   * Creates and initializes the Empty-State pattern component.
   * @param {DomElement} - root element of the empty-state pattern.
   */
  function EmptyState(element) {
    (0, _classCallCheck3.default)(this, EmptyState);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmptyState.__proto__ || (0, _getPrototypeOf2.default)(EmptyState)).call(this, element));

    _this._border = new _DomElement3.default("div").addClass(CLASS_BORDER);

    _this._fileInput = _this.element.querySelector(QUERY_FILE);
    _this._button = _this.element.querySelector("label");

    _this._fileChangedHandler = _this._handleFileChanged.bind(_this);
    _this._preventEventsHandler = _this._preventDragEvents.bind(_this);
    _this._dragEnterHandler = _this._handleDragEnter.bind(_this);
    _this._dragLeaveHandler = _this._handleDragLeave.bind(_this);
    _this._dropHandler = _this._handleDrop.bind(_this);

    _this._isDragging = false;

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(EmptyState, [{
    key: "_initialize",
    value: function _initialize() {
      if (this.hasClass(CLASS_MODAL)) {
        // handle modal dialogs
        this._dragArea = (0, _DomFunctions.parentWithClass)(this.element, CLASS_MODAL_CONTENT);
        var borderArea = this._dragArea.querySelector(QUERY_MODAL_BODY);
        borderArea.setAttribute("style", "pointer-events: none;");

        this._border = new _DomElement3.default("div").addClass(CLASS_BORDER).addClass(CLASS_BORDER_MODAL);

        borderArea.appendChild(this._border.element);
      } else {
        // normal modal dialog
        this._dragArea = this.element;
        var _borderArea = (0, _DomFunctions.getRootElement)();

        if (!_borderArea.querySelector("." + CLASS_BORDER)) {
          _borderArea.appendChild(this._border.element);
        }
      }

      var form = this.element.querySelector("form");

      var _arr = ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"];
      for (var _i = 0; _i < _arr.length; _i++) {
        var event = _arr[_i];
        this.element.addEventListener(event, this._preventEventsHandler);
        form.addEventListener(event, this._preventEventsHandler);
        this._dragArea.addEventListener(event, this._preventEventsHandler);
      }

      this._dragArea.addEventListener("dragover", this._dragEnterHandler);
      this._dragArea.addEventListener("dragenter", this._dragEnterHandler);

      this._dragArea.addEventListener("dragleave", this._dragLeaveHandler);
      this._dragArea.addEventListener("dragend", this._dragLeaveHandler);
      this._dragArea.addEventListener("drop", this._dragLeaveHandler);

      this._dragArea.addEventListener("drop", this._dropHandler);
      this._fileInput.addEventListener("change", this._fileChangedHandler);
    }
  }, {
    key: "_preventDragEvents",
    value: function _preventDragEvents(e) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    }
  }, {
    key: "_handleDragEnter",
    value: function _handleDragEnter() {
      if (this._isDragging === true) {
        return;
      }

      this._isDragging = true;
      this._button.setAttribute("style", "pointer-events: none;");

      this.addClass(CLASS_ACTIVE);
      this._border.addClass(CLASS_ACTIVE);
    }
  }, {
    key: "_handleDragLeave",
    value: function _handleDragLeave() {
      if (this._isDragging === false) {
        return;
      }

      this._isDragging = false;
      this._button.setAttribute("style", "");

      this.removeClass(CLASS_ACTIVE);
      this._border.removeClass(CLASS_ACTIVE);
    }
  }, {
    key: "_handleDrop",
    value: function _handleDrop(e) {
      this._fileInput.files = e.dataTransfer.files;
    }
  }, {
    key: "_handleFileChanged",
    value: function _handleFileChanged() {
      var files = this._fileInput.files;

      if (files && files.length > 0) {
        this.addClass(CLASS_HASFILES);
      } else {
        this.removeClass(CLASS_HASFILES);
      }
    }

    /**
     * Gets the currently selected files.
     */

  }, {
    key: "files",
    get: function get() {
      return this._fileInput.files;
    }
  }]);
  return EmptyState;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".empty-state", function (e) {
    new EmptyState(e);
  });
}

exports.default = EmptyState;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomFunctions = require("../DomFunctions");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_DROPDOWN = ".js-autocomplete";
var CLASS_RESULT = "autocomplete__result";
var CLASS_OPEN = "is-open";
var CLASS_HOVER = "js-hover";
var ATTRIBUTE_VALUE = "data-value";

var TIMEOUT_BLUR = 400;

/**
 * Autocomplete component
 * @fires Autocomplete#change
 */

var Autocomplete = function (_DomElement) {
  (0, _inherits3.default)(Autocomplete, _DomElement);

  function Autocomplete(element, configuration) {
    (0, _classCallCheck3.default)(this, Autocomplete);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Autocomplete.__proto__ || (0, _getPrototypeOf2.default)(Autocomplete)).call(this, element));

    _this._input = _this.element.querySelector("input");
    _this._dropdown = _this.element.querySelector(QUERY_DROPDOWN);

    // Setup event context
    _this._clickHandler = _this._handleClick.bind(_this);
    _this._windowClickHander = _this._handleWindowClick.bind(_this);
    _this._keyUpHandler = _this._handleKeyUp.bind(_this);
    _this._blurHandler = _this._handleBlur.bind(_this);

    if (configuration) {
      _this._minChars = configuration.minChars;
      _this._source = configuration.source;
    }

    if (!_this._minChars || _this._minChars < 0) {
      _this._minChars = 2;
    }

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the Autocomplete component.
   * @private
   */


  (0, _createClass3.default)(Autocomplete, [{
    key: "_initialize",
    value: function _initialize() {
      this._clearSuggestions();

      if (this._input.getAttribute("disabled")) {
        this.disable();
      } else {
        this.enable();
      }

      // Disable browser autofill
      this._input.setAttribute("autocomplete", "off");
    }

    /**
     * The Autocomplete component configuration object
     * @callback Autocomplete~Suggest
     * @property {String} term - The current search term.
     * @property {String[]} matches - The list of matching strings.
     */

    /**
     * The Autocomplete component configuration object
     * @callback Autocomplete~Source
     * @property {String} term - The current search term.
     * @property {Autocomplete~Suggest} suggest - The autocomplete callback function to report the results.
     */

    /**
     * The Autocomplete component configuration object
     * @typedef {Object} Autocomplete~Config
     * @property {Number} minChars - The minimal required characters to start querying for autocomplete matches.
     * @property {Autocomplete~Source} source - The autocomplete source function.
     */

    /**
     * Updates the autocomplete component configuration for the current instance
     * @param {Autocomplete~Config} configuration The configuration object
     */

  }, {
    key: "configure",
    value: function configure(configuration) {
      if (!configuration) {
        return;
      }

      if (configuration.minChars) {
        this._minChars = Math.min(configuration.minChars, 1);
      }

      if (configuration.source) {
        this._source = configuration.source;
      }

      this._clearSuggestions();
    }

    /**
     * Sets the select control to the enabled state.
     */

  }, {
    key: "enable",
    value: function enable() {
      if (!this._input) {
        return;
      }

      this._input.removeAttribute("disabled");

      this._input.addEventListener("keyup", this._keyUpHandler);
      this._input.addEventListener("blur", this._blurHandler);
    }

    /**
     * Sets the select control to the disabled state.
     */

  }, {
    key: "disable",
    value: function disable() {
      if (!this._input) {
        return;
      }

      this._input.setAttribute("disabled", true);

      this._input.removeEventListener("keyup", this._keyUpHandler);
      this._input.removeEventListener("blur", this._blurHandler);

      this.close();
    }

    /**
     * Destroys the component and frees all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();

      this._keyUpHandler = undefined;
      this._windowClickHander = undefined;
      this._blurHandler = undefined;

      this._input = undefined;
    }

    /**
     * Closes the suggestions dropdown.
     */

  }, {
    key: "open",
    value: function open() {
      this._dropdown.addEventListener("click", this._clickHandler);
      window.addEventListener("click", this._windowClickHander);

      this.addClass(CLASS_OPEN);
    }

    /**
     * Opens the suggestions dropdown.
     */

  }, {
    key: "close",
    value: function close() {
      this._dropdown.removeEventListener("click", this._clickHandler);
      window.removeEventListener("click", this._windowClickHander);

      this.removeClass(CLASS_OPEN);
    }

    /**
     * Registers an event listener on the component.
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      this.element.addEventListener(type, listener);
    }

    /**
     * Unregisters an event listener on the component.
     */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      this.element.removeEventListener(type, listener);
    }

    /**
     * Gets the value of the input field.
     * @returns {String} The value of the input field.
     */

  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      if (!this._isDropdownTarget(event.target)) {
        return;
      }

      var current = event.target;
      while (current.nodeName !== "LI" && current.parentNode) {
        current = current.parentNode;
      }

      if (current.nodeName === "LI") {
        (0, _Utils.preventDefault)(event);
        this._selectItem(current);
      }
    }
  }, {
    key: "_handleBlur",
    value: function _handleBlur() {
      var _this2 = this;

      setTimeout(function () {
        _this2.close();
      }, TIMEOUT_BLUR);
    }
  }, {
    key: "_handleKeyUp",
    value: function _handleKeyUp(event) {
      var evt = event || window.event;
      var keycode = event.which || event.keyCode;
      var isOpen = (0, _DomFunctions.hasClass)(this.element, CLASS_OPEN);

      if (keycode === Inputs.KEY_ESCAPE && isOpen === true) {
        // handle Escape key (ESC)
        this.close();
        (0, _Utils.preventDefault)(evt);
        return;
      }

      if (isOpen === true && (keycode === Inputs.KEY_ARROW_UP || keycode === Inputs.KEY_ARROW_DOWN)) {
        // Up and down arrows

        var focusedElement = this._suggestionList.querySelector("." + CLASS_HOVER);
        if (focusedElement) {
          (0, _DomFunctions.removeClass)(focusedElement, CLASS_HOVER);

          var children = new (Function.prototype.bind.apply(Array, [null].concat((0, _toConsumableArray3.default)(this._suggestionList.childNodes))))();

          var totalNodes = children.length - 1;
          var direction = keycode === Inputs.KEY_ARROW_UP ? -1 : 1;

          var index = children.indexOf(focusedElement);

          index = Math.max(Math.min(index + direction, totalNodes), 0);
          focusedElement = this._suggestionList.childNodes[index];
        } else {
          focusedElement = this._suggestionList.querySelector("li");
        }

        (0, _DomFunctions.addClass)(focusedElement, CLASS_HOVER);
        (0, _Utils.preventDefault)(evt);
        return;
      }

      if (isOpen === true && keycode === Inputs.KEY_ENTER) {
        var _focusedElement = this._suggestionList.querySelector("." + CLASS_HOVER);

        (0, _Utils.preventDefault)(evt);
        this._selectItem(_focusedElement);
        return;
      }

      if (evt.currentTarget && evt.currentTarget.value && evt.currentTarget.value.length >= this._minChars) {
        this._getSuggestion(evt.currentTarget.value);
      } else {
        this.close();
      }
    }
  }, {
    key: "_handleWindowClick",
    value: function _handleWindowClick(event) {
      if (this._isDropdownTarget(event.target)) {
        return;
      }

      this.close();
    }
  }, {
    key: "_selectItem",
    value: function _selectItem(item) {
      if (!item) {
        return;
      }

      var text = item.getAttribute(ATTRIBUTE_VALUE);
      if (text) {
        this._input.value = text;

        // Dispatch the changed event
        this.dispatchEvent("change");
      }

      this.close();
    }
  }, {
    key: "_isDropdownTarget",
    value: function _isDropdownTarget(target) {
      var current = target;
      while (current !== this._dropdown && current.parentNode) {
        current = current.parentNode;
      }

      return current === this._dropdown;
    }
  }, {
    key: "_clearSuggestions",
    value: function _clearSuggestions() {
      // Clear the dropdown item
      (0, _DomFunctions.empty)(this._dropdown);

      this._suggestionList = document.createElement("ul");
      this._dropdown.appendChild(this._suggestionList);
    }
  }, {
    key: "_addSuggestion",
    value: function _addSuggestion(text, term) {
      var html = text.replace(new RegExp("(" + term + ")", "gi"), "<strong>$1</strong>");

      var textElement = new _DomElement3.default("span").setHtml(html);

      var innerElement = new _DomElement3.default("div").addClass(CLASS_RESULT).appendChild(textElement);

      var liElement = new _DomElement3.default("li").setAttribute(ATTRIBUTE_VALUE, text).appendChild(innerElement);

      this._suggestionList.appendChild(liElement.element);
    }
  }, {
    key: "_getSuggestion",
    value: function _getSuggestion(term) {
      var _this3 = this;

      if (!this._source) {
        throw new Error("The source function is undefined, cannot load suggestions");
      }

      this._source(term, function (matches, termused) {
        _this3._onMatchesReceived(matches, termused);
      });
    }
  }, {
    key: "_onMatchesReceived",
    value: function _onMatchesReceived(matches, term) {
      this._clearSuggestions();

      if (!matches || matches.length === 0) {
        this.close();
      } else {
        // Clear the dropdown item
        (0, _DomFunctions.empty)(this._suggestionList);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(matches), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var match = _step.value;

            this._addSuggestion(match, term);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.open();
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this._input.value;
    }
  }]);
  return Autocomplete;
}(_DomElement3.default);

/**
 * Change event
 *
 * @event Autocomplete#change
 * @type {object}
 */

function init() {
  (0, _Utils.searchAndInitialize)(".input-field--autocomplete", function (e) {
    new Autocomplete(e);
  });
}

exports.default = Autocomplete;

},{"../DomElement":4,"../DomFunctions":5,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"babel-runtime/helpers/toConsumableArray":48}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_HAS_VALUE = "is-fixed";
var CLASS_MESSAGE = ".message";

/**
 * Input field component
 */

var InputField = function (_DomElement) {
  (0, _inherits3.default)(InputField, _DomElement);

  function InputField(element) {
    (0, _classCallCheck3.default)(this, InputField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputField.__proto__ || (0, _getPrototypeOf2.default)(InputField)).call(this, element));

    _this._changedHandler = _this.onValueChanged.bind(_this);
    _this._animationStartHandler = _this._onAnimationStart.bind(_this);
    _this._initialize();
    return _this;
  }

  /**
   * Initializes the input field component.
   * @private
   */


  (0, _createClass3.default)(InputField, [{
    key: "_initialize",
    value: function _initialize() {
      this.element.addEventListener("input", this._changedHandler);

      if (this.element.getAttribute("type") === "password") {
        this.element.addEventListener("animationstart", this._animationStartHandler);
      }

      this.onValueChanged();
    }
  }, {
    key: "_onAnimationStart",
    value: function _onAnimationStart(e) {
      if (e.animationName === "onAutoFillStart") {
        this.onValueChanged(true);
      }
    }

    /**
     * Notifies the input field component that it's value has been changed.
     */

  }, {
    key: "onValueChanged",
    value: function onValueChanged() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.element.value && this.element.value !== "" || force === true) {
        this.addClass(CLASS_HAS_VALUE);
      } else {
        this.removeClass(CLASS_HAS_VALUE);
        this.element.value = "";
      }
    }

    /**
     * Destroys the component and frees all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener("input", this._changedHandler);

      if (this.element.getAttribute("type") === "password") {
        this.element.removeEventListener("animationstart", this._animationStartHandler);
      }

      this._changedHandler = undefined;
      this._animationStartHandler = undefined;
    }

    /**
     * Displays the specified error text underneath the input field.
     * @param {text} text The error text/html to display; or undefined to hide the message.
     */

  }, {
    key: "showError",
    value: function showError(text) {
      var message = void 0;
      if (this.element.parentElement) {
        var _msg = this.element.parentElement.querySelector(CLASS_MESSAGE);

        if (_msg) {
          message = new _DomElement3.default(_msg);
        }
      }

      if (!text || text === "") {
        if (message) {
          (0, _Utils.remove)(message.element);
        }

        this.removeClass("invalid");
        return;
      }

      this.addClass("invalid");

      if (!message) {
        message = new _DomElement3.default("div").addClass("message");

        this.element.parentElement.appendChild(message.element);
      } else {
        message.empty();
      }

      var icon = new _DomElement3.default("i").addClass("icon").addClass("icon-026-exclamation-mark-circle").setAttribute("aria-hidden", true);

      var msg = new _DomElement3.default("span").setHtml(text);

      message.appendChild(icon);
      message.appendChild(msg);
    }
  }]);
  return InputField;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".input-field input", function (e) {
    new InputField(e);
  }, function (e) {
    return e.parentElement;
  });
}

exports.default = InputField;

},{"../DomElement":4,"../Utils":7,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = require("babel-runtime/core-js/number/is-nan");

var _isNan2 = _interopRequireDefault(_isNan);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _gsap = require("gsap");

var _Utils = require("../Utils");

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MARGIN_TICK = 32;
var CLASS_HTML5 = "html5";
var RANGE_LIGHT = "range--light";

var CLASS_CONTAINER = "range-container";
var CLASS_SLIDER = "range-slider";
var CLASS_ACTIVE = "range--active";

var CLASS_TRACK = "range-track";
var CLASS_TRACK_PROGRESS = "range-track__progress";

var CLASS_TICK = "range-tick";
var CLASS_TICK_LABEL = "range-tick__label";
var CLASS_TICK_ACTIVE = "range-tick--active";

var CLASS_THUMB = "range-thumb";
var CLASS_THUMB_VALUE = "range-thumb__value";
var CLASS_DISABLED = "range--disabled";

var CLASS_DRAGGING = "range--dragging";

/**
 * The range slider component definition.
 */

var Range = function (_DomElement) {
  (0, _inherits3.default)(Range, _DomElement);

  function Range(element) {
    (0, _classCallCheck3.default)(this, Range);

    // Setup event context
    var _this = (0, _possibleConstructorReturn3.default)(this, (Range.__proto__ || (0, _getPrototypeOf2.default)(Range)).call(this, element));

    _this._downHander = _this._handleDown.bind(_this);
    _this._moveHandler = _this._handleMove.bind(_this);
    _this._endHander = _this._handleEnd.bind(_this);
    _this._keydownHandler = _this._handleKeydown.bind(_this);

    _this._focusHandler = _this._handleFocus.bind(_this);
    _this._blurHandler = _this._handleBlur.bind(_this);
    _this._resizeHandler = _this.layout.bind(_this);

    _this._initialize();

    if (_this.element.disabled) {
      _this.disable();
    } else {
      _this.enable();
    }
    return _this;
  }

  /**
   * Initializes the range slider component.
   *
   * This method inspects the select definition and its options and
   * generates new stylable DOM elements around the original range input-element
   * definitions.
   * @private
   */


  (0, _createClass3.default)(Range, [{
    key: "_initialize",
    value: function _initialize() {

      if (this.hasClass(CLASS_HTML5)) {
        // This element uses HTML5 styling, do not touch it...
        return;
      }

      this._wrapperElement = new _DomElement3.default(this.element.parentNode);

      this._rangeContainer = new _DomElement3.default("div").addClass(CLASS_CONTAINER);

      this._rangeTrack = new _DomElement3.default("div").addClass(CLASS_TRACK);

      // check if range--light slider then add progress
      if (this._wrapperElement.hasClass(RANGE_LIGHT)) {
        this._rangeProgress = new _DomElement3.default("div").addClass(CLASS_TRACK_PROGRESS);

        this._rangeTrack.appendChild(this._rangeProgress);
      }

      this._rangeThumb = new _DomElement3.default("div").addClass(CLASS_THUMB);

      this._ticksWrapper = new _DomElement3.default("div").addClass(CLASS_SLIDER);

      this._rangeContainer.appendChild(this._rangeTrack);
      this._rangeContainer.appendChild(this._ticksWrapper);
      this._rangeContainer.appendChild(this._rangeThumb);

      // add container to wrapper
      this._wrapperElement.appendChild(this._rangeContainer);

      // get min & max definitions
      this._minValue = parseFloat(this.element.min) || 0;
      this._maxValue = parseFloat(this.element.max) || 1;

      // get the label/output format string
      this._formatter = window[this.getAttribute("formatter")];

      // get the output label and move it below the container
      if (this.element.id) {
        this._outputLabel = this._wrapperElement.find("output[for='" + this.element.id + "']");
        this._wrapperElement.appendChild(this._outputLabel);
      }

      if (!this.element.step) {
        // fix issues with float sliders if the step is undefined
        this.element.step = "any";
      }

      var options = this._getOptionsList();
      if (options && options.length > 1) {
        this._addTicks(options);
      }

      if (this._rangeContainer.element.querySelectorAll("." + CLASS_TICK_LABEL).length <= 1) {
        this._thumbValue = new _DomElement3.default("div").addClass(CLASS_THUMB_VALUE);

        this._rangeThumb.appendChild(this._thumbValue);
      }

      this._trackValueTotal = this._maxValue - this._minValue;
      this.layout();

      this._updateTickState();

      // Apply the tab index
      var tabIndex = this.element.getAttribute("tabindex");
      if (tabIndex) {
        this._rangeContainer.setAttribute("tabindex", tabIndex);
      }

      window.addEventListener("resize", this._resizeHandler);
      window.addEventListener("orientationchange", this._resizeHandler);
    }
  }, {
    key: "_getOptionsList",
    value: function _getOptionsList() {
      var options = [];

      var listId = this.getAttribute("list");
      if (listId) {
        var dataList = document.querySelector("#" + listId);
        if (dataList) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(dataList.querySelectorAll("option")), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var entry = _step.value;

              var value = parseFloat(entry.innerText);
              var label = entry.getAttribute("label") || parseFloat(value.toFixed(2));

              options.push({
                value: value,
                label: label
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      // Sort the list to enable snapping
      options = options.sort(function (a, b) {
        return a.value - b.value;
      });

      if (options.length > 1) {
        this._minValue = Number.MAX_VALUE;
        this._maxValue = Number.MIN_VALUE;

        for (var i = 0; i < options.length; i++) {
          this._minValue = Math.min(this._minValue, options[i].value);
          this._maxValue = Math.max(this._maxValue, options[i].value);
        }
      }

      return options;
    }
  }, {
    key: "_addTicks",
    value: function _addTicks(dataItems) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(dataItems), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var entry = _step2.value;

          var tickElement = new _DomElement3.default("div").setAttribute("data-value", entry.value).addClass(CLASS_TICK);

          var tickLabel = new _DomElement3.default("span").addClass(CLASS_TICK_LABEL).setHtml(entry.label.toString());

          tickElement.appendChild(tickLabel);
          this._ticksWrapper.appendChild(tickElement);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_isEventOnLabel",
    value: function _isEventOnLabel(event) {
      return event.target.classList.contains(CLASS_TICK_LABEL);
    }
  }, {
    key: "_handleDown",
    value: function _handleDown(event) {
      this._wrapperElement.addClass(CLASS_DRAGGING);

      this._rangeContainer.element.addEventListener("mouseup", this._endHander);
      document.addEventListener("mousemove", this._moveHandler);
      document.addEventListener("mouseup", this._endHander);

      this._rangeContainer.element.addEventListener("touchmove", this._moveHandler);
      document.addEventListener("touchend", this._endHander);

      // Ignore clicks directly on the thumb
      if (event.target !== this._rangeThumb.element && !this._isEventOnLabel(event)) {
        var pos = this._getRelativePosition(event);
        this._setPosition(pos, true, false, false);
      }
    }
  }, {
    key: "_handleMove",
    value: function _handleMove(event) {
      (0, _Utils.preventDefault)(event);
      this._unfocus();

      if (!this._isEventOnLabel(event)) {
        var pos = this._getRelativePosition(event);
        this._setPosition(pos, true, false, false);
      }
    }
  }, {
    key: "_handleEnd",
    value: function _handleEnd(event) {
      this._wrapperElement.removeClass(CLASS_DRAGGING);

      this._rangeContainer.element.removeEventListener("mouseup", this._endHander);
      document.removeEventListener("mouseup", this._endHander);
      document.removeEventListener("mousemove", this._moveHandler);

      this._rangeContainer.element.removeEventListener("touchmove", this._moveHandler);
      document.removeEventListener("touchend", this._endHander);

      var pos = this._getRelativePosition(event);
      this._setPosition(pos, true, true, true);
      this._handleBlur();
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var evt = evt || window.event;
      var keycode = event.which || event.keyCode;

      if (keycode === Inputs.KEY_ESCAPE) {
        // handle Escape key (ESC)
        this._rangeContainer.element.blur();
        return;
      }

      var isUp = keycode === Inputs.KEY_ARROW_UP || keycode === Inputs.KEY_ARROW_RIGHT || keycode === Inputs.KEY_PAGE_UP;

      var isDown = keycode === Inputs.KEY_ARROW_DOWN || keycode === Inputs.KEY_ARROW_LEFT || keycode === Inputs.KEY_PAGE_DOWN;

      if (isUp || isDown) {
        evt.preventDefault();

        var direction = isDown ? -1 : 1;

        // make a larger step if its the vertical arrow or page keys
        if (keycode === Inputs.KEY_ARROW_UP || keycode === Inputs.KEY_ARROW_DOWN || keycode === Inputs.KEY_PAGE_UP || keycode === Inputs.KEY_PAGE_DOWN) {
          direction *= 10;
        }

        var val = this.value;
        if (this._ticksWrapper.element.childNodes.length > 1) {
          val = this._getNextValue(val, direction);
        } else {

          var step = this.element.step;
          if (!step || step === "any") {
            step = 0.1;
          }
          var newVal = val + parseFloat(step) * direction;
          val = newVal;
        }

        this._setValue(val, true, true);
        return;
      }
    }
  }, {
    key: "_handleFocus",
    value: function _handleFocus() {
      this._rangeContainer.addClass(CLASS_ACTIVE);
    }
  }, {
    key: "_handleBlur",
    value: function _handleBlur() {
      this._rangeContainer.removeClass(CLASS_ACTIVE);
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      if (document.selection) {
        document.selection.empty();
      } else {
        window.getSelection().removeAllRanges();
      }
    }
  }, {
    key: "_getRelativePosition",
    value: function _getRelativePosition(event) {
      var pageX = event.pageX;
      if (pageX === undefined) {
        var touch = event.touches[0] || event.changedTouches[0];
        pageX = touch.pageX;
      }

      return pageX - this._trackLeftPosition + this._grabPosition;
    }

    /**
     * Validates and updates the position and sets the corresponding value on the slider.
     * @param {position} the new position to set.
     * @param {updateValue} true if the value should be updated as well; otherwise false.
     * @param {snap} true if snapping should be used; otherwise false.
     * @param {animate} true if the UI update should be animated; otherwise false.
     * @private
     */

  }, {
    key: "_setPosition",
    value: function _setPosition(position) {
      var updateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var snap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var animate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (position === undefined || position === null || (0, _isNan2.default)(position)) {
        throw new Error("Position is not a number");
      }

      // Clamp to min and max range
      var newPos = (0, _Utils.clamp)(position, this._trackPositionMin, this._trackPositionMax);
      if (updateValue) {
        var value = this._trackValueTotal / this._trackWidth * newPos + this._minValue;

        if (this._ticksWrapper.element.childNodes.length > 1 && snap) {
          var snapPos = this._getSnapPosition(newPos);
          newPos = snapPos.position;
          value = snapPos.value;
        } else if (this.element.step && this.element.step !== "any") {
          value = Math.round(value / this.element.step, 0) * this.element.step;
        }

        this._setValue(value, false, false, false);
      }

      if (animate && updateValue) {
        this._updateTickState();
      }

      if (animate) {
        _gsap.TweenLite.to(this._rangeThumb.element, 0.2, {
          left: newPos,
          ease: _gsap.Power4.easeInOut
        });

        if (this._rangeProgress) {
          _gsap.TweenLite.to(this._rangeProgress.element, 0.2, {
            width: newPos,
            ease: _gsap.Power4.easeInOut
          });
        }
      } else {
        _gsap.TweenLite.set(this._rangeThumb.element, { left: newPos });

        if (this._rangeProgress) {
          _gsap.TweenLite.set(this._rangeProgress.element, { width: newPos });
        }
      }
    }

    /**
     * Gets the snap value corresponding to the given value.
     * @param {value} the target value.
     * @returns an object containing the snap position and the corresponding value.
     * @private
     */

  }, {
    key: "_getSnapValue",
    value: function _getSnapValue(value) {
      var ticks = this._ticksWrapper.element.childNodes;
      var currentPosition = 0;

      for (var i = 0; i < ticks.length; i++) {

        var currentElement = new _DomElement3.default(ticks[i]);
        var currentValue = parseFloat(currentElement.getAttribute("data-value"));
        var currentWidth = currentElement.element.clientWidth;

        var nextElement = void 0;
        var nextValue = Number.MAX_VALUE;

        if (i < ticks.length - 1) {
          nextElement = new _DomElement3.default(ticks[i + 1]);
          nextValue = parseFloat(nextElement.getAttribute("data-value"));
        }

        // left most element
        if (i === 0 && value <= currentValue) {
          return {
            value: currentValue,
            position: MARGIN_TICK - this._grabPosition };
        }

        // right most element
        if (!nextElement && value >= currentValue) {
          return {
            value: currentValue,
            position: currentPosition + (currentWidth - MARGIN_TICK) - this._grabPosition - 1 };
        }

        if (value >= currentValue && value < nextValue) {
          return {
            value: currentValue,
            position: currentPosition + 0.5 * currentWidth - this._grabPosition };
        }

        currentPosition += currentWidth;
      }

      throw new Error("Could not determine snap value");
    }

    /**
     * Gets the snap position corresponding to the given position.
     * @param {position} the target position.
     * @returns an object containing the snap position and the corresponding value.
     * @private
     */

  }, {
    key: "_getSnapPosition",
    value: function _getSnapPosition(position) {
      if (position === undefined || position === null || (0, _isNan2.default)(position)) {
        throw new Error("position is not a number");
      }

      var ticks = this._ticksWrapper.element.childNodes;
      var currentPosition = 0;

      for (var i = 0; i < ticks.length; i++) {

        var currentElement = new _DomElement3.default(ticks[i]);
        var currentValue = parseFloat(currentElement.getAttribute("data-value"));
        var currentWidth = currentElement.element.clientWidth;

        var nextElement = void 0;

        if (i < ticks.length - 1) {
          nextElement = new _DomElement3.default(ticks[i + 1]);
        }

        // left most element
        if (i === 0 && position <= currentPosition + currentWidth) {
          return {
            value: currentValue,
            position: MARGIN_TICK - this._grabPosition };
        }

        // right most element
        if (!nextElement && position >= currentPosition) {
          return {
            value: currentValue,
            position: currentPosition + (currentWidth - MARGIN_TICK) - this._grabPosition - 1 };
        }

        if (position >= currentPosition && position < currentPosition + currentWidth) {
          return {
            value: currentValue,
            position: currentPosition + 0.5 * currentWidth - this._grabPosition };
        }

        currentPosition += currentWidth;
      }

      throw new Error("Could not determine snap position");
    }

    /**
     * Gets the next value in the given direction with regards to snapping.
     * @param {value} The current value.
     * @param {direction} The direction (positive or negative integer).
     * @returns The next value.
     * @private
     */

  }, {
    key: "_getNextValue",
    value: function _getNextValue(value, direction) {
      var ticks = this._ticksWrapper.element.childNodes;

      for (var i = 0; i < ticks.length; i++) {
        var currentElement = new _DomElement3.default(ticks[i]);
        var currentVal = parseFloat(currentElement.getAttribute("data-value"));

        if (value === currentVal) {
          var index = (0, _Utils.clamp)(i + direction, 0, ticks.length - 1);
          value = ticks[index].getAttribute("data-value");
        }
      }

      return value;
    }
  }, {
    key: "_updateTickState",
    value: function _updateTickState() {
      if (this._ticksWrapper.element.childNodes.length > 1) {
        var activeTick = this._ticksWrapper.find("." + CLASS_TICK_ACTIVE);
        if (activeTick) {
          activeTick.removeClass(CLASS_TICK_ACTIVE);
        }
        var newActiveTick = this._ticksWrapper.find("." + CLASS_TICK + "[data-value='" + this.value + "']");
        if (newActiveTick) {
          newActiveTick.addClass(CLASS_TICK_ACTIVE);
        }
      }
    }
  }, {
    key: "_adjustTickLabelPosition",
    value: function _adjustTickLabelPosition(tickItem, outerItemsWidth, left) {
      var label = new _DomElement3.default(tickItem.querySelector("." + CLASS_TICK_LABEL));

      var dummyElement = new _DomElement3.default("span").addClass(CLASS_TICK_LABEL).setAttribute("style", "visibility: hidden; display: inline-block;").setHtml(label.innerText);

      this._rangeContainer.appendChild(dummyElement);

      var width = dummyElement.element.clientWidth / 2;
      this._rangeContainer.removeChild(dummyElement);

      var floatPosition = left ? "left" : "right";

      if (width < MARGIN_TICK) {
        // center small items on the tick
        label.setAttribute("style", floatPosition + ": " + (MARGIN_TICK - Math.floor(width)) + "px; text-align: " + floatPosition + ";");
      }
    }
  }, {
    key: "_formatOutput",
    value: function _formatOutput(value, short) {
      if (this._formatter) {
        return this._formatter(value, short);
      }

      var str = parseFloat(value.toFixed(2));
      return str.toString();
    }

    /**
     * Validates and updates the range value.
     * @param {value} the new value to set.
     * @param {update} true if the UI should be updated; otherwise false.
     * @param {animate} true if the UI update should be animated; otherwise false.
     * @private
     */

  }, {
    key: "_setValue",
    value: function _setValue(value) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var val = (0, _Utils.clamp)(value, this._minValue, this._maxValue);
      var position = void 0;

      if (this._ticksWrapper.element.childNodes.length > 1) {
        var snapValue = this._getSnapValue(val);
        position = snapValue.position;
        val = snapValue.value;
      } else {
        position = this._trackWidth / this._trackValueTotal * (value - this._minValue);
      }

      this.element.value = val;

      if (this._thumbValue) {
        this._thumbValue.setHtml(this._formatOutput(val, true));
      }

      if (this._outputLabel) {
        this._outputLabel.setHtml(this._formatOutput(val, false));
      }

      if (update) {
        this._setPosition(position, false, false, animate);
        this._updateTickState();
      }

      this.dispatchEvent("input");
    }

    /**
     * Sets the value of the range slider.
     */

  }, {
    key: "layout",


    /**
     * Force the component to re-layout itself.
     */
    value: function layout() {
      this._grabPosition = Math.round(this._rangeThumb.element.offsetWidth / 2);
      var tickItems = this._rangeContainer.element.querySelectorAll("." + CLASS_TICK);
      var ticksOffset = tickItems && tickItems.length > 0 ? 2 * MARGIN_TICK : MARGIN_TICK;

      this._trackWidth = this._rangeTrack.element.offsetWidth - ticksOffset;

      this._trackPositionMin = 0;
      this._trackPositionMax = this._rangeTrack.element.clientWidth - this._rangeThumb.element.offsetWidth + 1;
      this._trackLeftPosition = this._rangeTrack.element.getBoundingClientRect().left + MARGIN_TICK;

      var itemCount = tickItems.length - 1;

      this._itemWidth = this._trackWidth / itemCount;
      var outerItemsWidth = this._itemWidth * 0.5 + MARGIN_TICK;

      for (var i = 0; i <= itemCount; i++) {
        var width = this._itemWidth;

        if (i === 0 || i === itemCount) {
          width = outerItemsWidth;
        }

        var item = new _DomElement3.default(tickItems[i]);
        item.setAttribute("style", "width: " + Math.floor(width) + "px;");
      }

      // adjust first and last label positions
      if (tickItems.length > 1) {
        this._adjustTickLabelPosition(tickItems[0], outerItemsWidth, true);
        this._adjustTickLabelPosition(tickItems[tickItems.length - 1], outerItemsWidth, false);
      }

      // update the value
      this._setValue(this.element.value, true, false);
    }

    /**
     * Registers an event listener on the select control.
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      this.element.addEventListener(type, listener);
    }

    /**
     * Destroys the components and frees all references.
     */

  }, {
    key: "destoy",
    value: function destoy() {
      window.removeEventListener("resize", this._resizeHandler);
      window.removeEventListener("orientationchange", this._resizeHandler);

      this._downHander = null;
      this._moveHandler = null;
      this._endHander = null;
      this._focusHandler = null;
      this._blurHandler = null;

      this.element = null;
      this._rangeContainer = null;
      this._wrapperElement = null;
    }

    /**
     * Sets the component to the enabled state.
     */

  }, {
    key: "enable",
    value: function enable() {
      this.element.removeAttribute("disabled");
      this._wrapperElement.removeClass(CLASS_DISABLED);

      this._rangeContainer.element.addEventListener("mousedown", this._downHander);
      this._rangeContainer.element.addEventListener("touchstart", this._downHander);
      this._rangeContainer.element.addEventListener("keydown", this._keydownHandler);
      this._rangeContainer.element.addEventListener("focus", this._focusHandler);
      this._rangeContainer.element.addEventListener("blur", this._blurHandler);
    }

    /**
     * Sets the component to the disabled state.
     */

  }, {
    key: "disable",
    value: function disable() {
      this.element.setAttribute("disabled", "");
      this._wrapperElement.addClass(CLASS_DISABLED);

      this._rangeContainer.element.removeEventListener("mousedown", this._downHander);
      this._rangeContainer.element.removeEventListener("mouseup", this._endHander);
      this._rangeContainer.element.removeEventListener("mousemove", this._moveHandler);

      this._rangeContainer.element.removeEventListener("touchstart", this._downHander);

      this._rangeContainer.element.removeEventListener("focus", this._focusHandler);
      this._rangeContainer.element.removeEventListener("blur", this._blurHandler);
    }
  }, {
    key: "value",
    set: function set(value) {
      this._setValue(value, true, true, true);
    }

    /**
     * Gets the current value.
     */
    ,
    get: function get() {
      return parseFloat(this.element.value);
    }
  }]);
  return Range;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)("input[type='range']", function (e) {
    new Range(e);
  });
}

exports.default = Range;

},{"../DomElement":4,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/number/is-nan":36,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

var _DomFunctions = require("../DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_PLACEHOLDER = "select__placeholder";
var CLASS_THUMB = "select__thumb";
var CLASS_BUTTON = "select__button";
var CLASS_DROPDOWN = "select__dropdown";

var CLASS_OPEN = "select--open";
var CLASS_CLOSED = "select--closed";
var CLASS_DISABLED = "select--disabled";

var CLASS_ITEM = "dropdown-item";
var CLASS_ITEM_SELECTED = "dropdown-item--selected";
var CLASS_ITEM_FOCUSED = "dropdown-item--focused";
var CLASS_ITEM_DISABLED = "dropdown-item--disabled";

var CLASS_GROUP_ITEM = "dropdown-group";
var CLASS_GROUP_HEADER = "dropdown-group__item";

var QUERY_MESSAGE = ".message";

var TIMEOUT_CLOSE = 150;
var TIMEOUT_BLUR = 400;

/**
 * The select component API.
 */

var Select = function (_DomElement) {
  (0, _inherits3.default)(Select, _DomElement);

  function Select(element) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, element));

    _this._openByFocus = false;

    // Check for multi-selection
    _this._multiselection = _this.element.hasAttribute("multiple") === true;

    // Setup event context
    _this._clickHandler = _this._handleClick.bind(_this);
    _this._handleDropdownClick = _this._handleClick.bind(_this);
    _this._keydownHandler = _this._handleKeydown.bind(_this);
    _this._focusHandler = _this._handleFocus.bind(_this);
    _this._blurHandler = _this._handleBlur.bind(_this);
    _this._windowClickHander = _this._handleWindowClick.bind(_this);

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the select component.
   *
   * This method inspects the select definition and its options and
   * generates new stylable DOM elements around the original select-element
   * definitions.
   * @private
   */


  (0, _createClass3.default)(Select, [{
    key: "_initialize",
    value: function _initialize() {
      this._wrapperElement = new _DomElement3.default(this.element.parentNode).addClass(CLASS_CLOSED);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.classes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cls = _step.value;

          this._wrapperElement.addClass(cls);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._dropdownElement = new _DomElement3.default("div").addClass(CLASS_DROPDOWN);

      this._setupTarget();
      this._setupPlaceholder();

      this._wrapperElement.appendChild(this._dropdownElement);

      this._createOptions(this.element);

      this._updateSize();
      this._updateMessage();

      if (this.element.disabled) {
        this.disable();
      } else {
        this.enable();
      }
    }
  }, {
    key: "_setupTarget",
    value: function _setupTarget() {
      // move the id from the select element to the wrapper
      var id = this.element.getAttribute("id");
      if (id) {
        this.element.removeAttribute("id");
        this._wrapperElement.setAttribute("id", id);
      }

      // Apply the tab index
      var tabIndex = this.element.getAttribute("tabindex");
      if (tabIndex) {
        this._wrapperElement.setAttribute("tabIndex", tabIndex);
      }
    }
  }, {
    key: "_setupPlaceholder",
    value: function _setupPlaceholder() {
      if (!this._selectButtonElement) {
        this._selectButtonElement = new _DomElement3.default("div").addClass(CLASS_BUTTON);

        this._wrapperElement.appendChild(this._selectButtonElement);
      }

      if (!this._thumbElement) {
        this._thumbElement = new _DomElement3.default("div").addClass(CLASS_THUMB);

        var thumbIcon = new _DomElement3.default("div").addClass("thumb-icon");

        this._thumbElement.appendChild(thumbIcon);
        this._selectButtonElement.appendChild(this._thumbElement);
      }

      var placeholderText = "";

      this._placeholderOption = this.element.querySelector("option[value='']");

      if (this._placeholderOption) {
        placeholderText = Dom.text(this._placeholderOption);

        if (this._multiselection === true) {
          this._placeholderOption.selected = false;
        }
      }

      var selectedOption = this.element.querySelector("option[selected]");
      if (selectedOption) {
        placeholderText = Dom.text(selectedOption);
      }

      if (!this._placeholderElement) {
        this._placeholderElement = new _DomElement3.default("span").addClass(CLASS_PLACEHOLDER);

        this._selectButtonElement.appendChild(this._placeholderElement);
      }

      this._placeholderElement.setHtml(placeholderText);

      this._placeholderText = placeholderText;

      if (selectedOption !== this._placeholderOption) {
        this._updatePlaceholder(true);
      }
    }
  }, {
    key: "_updateMessage",
    value: function _updateMessage() {
      var messageNode = this._wrapperElement.element.querySelector(QUERY_MESSAGE);
      if (messageNode !== null) {
        this._wrapperElement.appendChild(new _DomElement3.default(messageNode));
      }
    }
  }, {
    key: "_createOptions",
    value: function _createOptions(element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        var child = element.childNodes[i];

        if (child.tagName === "OPTGROUP") {
          this._appendGroup(child);
        }

        if (child.tagName === "OPTION") {
          var option = this._createOption(child);

          if (option) {
            this._dropdownElement.appendChild(option);
          }
        }
      }
    }
  }, {
    key: "_createOption",
    value: function _createOption(option) {
      var opt = new _DomElement3.default("div").addClass(CLASS_ITEM).setHtml(option.innerHTML);

      if (option.selected) {
        opt.addClass(CLASS_ITEM_SELECTED);
      }

      if (option.disabled) {
        opt.addClass(CLASS_ITEM_DISABLED);
      }

      if (option.value) {
        opt.setAttribute("data-value", option.value);
        return opt;
      }

      return undefined;
    }
  }, {
    key: "_appendGroup",
    value: function _appendGroup(optgroup) {
      var label = optgroup.getAttribute("label");

      var group = new _DomElement3.default("div").addClass(CLASS_GROUP_ITEM);

      var groupHeader = new _DomElement3.default("div").addClass(CLASS_GROUP_HEADER).setHtml(label);

      group.appendChild(groupHeader);

      var options = optgroup.querySelectorAll("option");
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(options), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var entry = _step2.value;

          var option = this._createOption(entry);
          if (option) {
            group.appendChild(option);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._dropdownElement.appendChild(group);
      return group;
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      // Note: Mirroring the DOM and measuring the items using their clientWidth was very
      // unreliable, therefore measuring was switched to the new HTML5 measureText method
      // margins and paddings arround the text are copied from the original placeholder items
      // dimension
      var placeholderStyle = window.getComputedStyle(this._placeholderElement.element, null);

      var paddingRight = parseFloat(placeholderStyle.paddingRight);
      var paddingLeft = parseFloat(placeholderStyle.paddingLeft);

      var font = this._placeholderElement.css("font");
      var textWidth = Dom.textWidth(this._placeholderText, font);
      var maxWidth = paddingLeft + paddingRight + textWidth;

      var options = this._wrapperElement.element.querySelectorAll("." + CLASS_ITEM);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(options), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var entry = _step3.value;

          var width = Dom.textWidth(Dom.text(entry), font) + paddingLeft + paddingRight;

          if (width > maxWidth) {
            maxWidth = width;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this._selectButtonElement.setAttribute("style", "min-width: " + Math.round(maxWidth + 4) + "px;");
    }
  }, {
    key: "_isButtonTarget",
    value: function _isButtonTarget(target) {
      return target === this._wrapperElement.element || target === this._placeholderElement.element || target === this._selectButtonElement.element || target === this._thumbElement.element;
    }
  }, {
    key: "_isDropdownTarget",
    value: function _isDropdownTarget(target) {
      var current = target;
      while (current !== this._dropdownElement.element && current.parentNode) {
        current = current.parentNode;
      }

      return current === this._dropdownElement.element;
    }

    /**
     * Updates the UI if the selection has changed and makes sure the
     * select control and the generated markup are synchronized.
     * @private
     */

  }, {
    key: "_selectedItemChanged",
    value: function _selectedItemChanged(oldItems, newItem) {
      var _this2 = this;

      var autoClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var multiselect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (Dom.hasClass(newItem, CLASS_ITEM_DISABLED)) {
        return;
      }

      if (oldItems.length === 0 && !newItem) {
        throw new Error("Can not select undefined elements");
      }

      var oldItem = oldItems[0];
      if (multiselect === true) {
        oldItem = (0, _Utils.find)(oldItems, function (x) {
          return x.getAttribute("data-value") === newItem.getAttribute("data-value");
        });
      }

      if (newItem && oldItem && oldItem === newItem) {
        // Click on a previously selected element -> deselect
        newItem = undefined;
      }

      if (oldItem) {
        // Remove selection on the element
        var oldValue = oldItem.getAttribute("data-value") || -1;
        var optElement = (0, _Utils.find)(this.element.options, function (x) {
          return x.value === oldValue;
        });

        if (!optElement) {
          throw new Error("The option with value " + oldValue + " does not exist");
        }

        optElement.selected = false;
        Dom.removeClass(oldItem, CLASS_ITEM_SELECTED);
      }

      if (newItem) {
        // Select a new item
        var newValue = newItem.getAttribute("data-value") || -1;
        var _optElement = (0, _Utils.find)(this.element.options, function (x) {
          return x.value === newValue;
        });

        if (!_optElement) {
          throw new Error("The option with value " + newValue + " does not exist");
        }

        _optElement.selected = true;
        Dom.addClass(newItem, CLASS_ITEM_SELECTED);
      }

      var hasSelectedItems = true;
      if (this._multiselection === false && !newItem) {
        // Handle no selection for non multiselect states
        this._placeholderOption.selected = true;
        hasSelectedItems = false;
      }

      if (this._multiselection === true && this.element.selectedOptions.length === 0) {
        hasSelectedItems = false;
      }

      this._updatePlaceholder(hasSelectedItems);

      // Dispatch the changed event
      this.dispatchEvent("change");

      if (autoClose && !multiselect) {
        setTimeout(function () {
          _this2.close();
        }, TIMEOUT_CLOSE);
      }
    }
  }, {
    key: "_updatePlaceholder",
    value: function _updatePlaceholder(hasSelectedItems) {
      var text = this._placeholderOption ? Dom.text(this._placeholderOption) : " ";

      if (hasSelectedItems === true) {
        var selectedItems = Array.apply(undefined, (0, _toConsumableArray3.default)(this.element.selectedOptions));

        if (selectedItems.length > 0) {
          text = "";
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = (0, _getIterator3.default)(selectedItems), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var item = _step4.value;

              text += Dom.text(item) + ", ";
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }

        text = text.substring(0, text.length - 2);
      }

      // Update the placeholder text
      if (this._placeholderElement) {
        this._placeholderElement.setHtml(text);
      }
    }
  }, {
    key: "_handleFocus",
    value: function _handleFocus() {
      var _this3 = this;

      this.open();
      this._openByFocus = true;

      setTimeout(function () {
        _this3._openByFocus = false;
      }, TIMEOUT_BLUR);
    }
  }, {
    key: "_handleBlur",
    value: function _handleBlur() {
      this.close();
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      var handled = false;

      if (this._lastHandledEvent === event) {
        this._lastHandledEvent = undefined;
        return;
      }

      if (this._isButtonTarget(event.target) && this._openByFocus === false) {
        // handle header item clicks and toggle dropdown
        this.toggle();
        handled = true;
      }

      var newItem = event.target;

      if (!handled && Dom.hasClass(newItem, CLASS_ITEM)) {
        // handle clicks on dropdown items
        var oldItems = Array.apply(undefined, (0, _toConsumableArray3.default)(this._wrapperElement.element.querySelectorAll("." + CLASS_ITEM_SELECTED)));
        this._selectedItemChanged(oldItems, newItem, true, this._multiselection);
        handled = true;
      }

      if (handled) {
        this._lastHandledEvent = event;
        (0, _Utils.preventDefault)(event);
      }
    }
  }, {
    key: "_handleWindowClick",
    value: function _handleWindowClick(event) {
      if (this._isDropdownTarget(event.target) || this._isButtonTarget(event.target)) {
        return;
      }

      this.close();
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var evt = event || window.event;
      var keycode = event.which || event.keyCode;

      if (keycode === Inputs.KEY_ESCAPE) {
        // handle Escape key (ESC)
        if (this.isOpen()) {
          this.close();
        }
        evt.preventDefault();
        return;
      }

      if (keycode === Inputs.KEY_ARROW_UP || keycode === Inputs.KEY_ARROW_DOWN) {
        // Up and down arrows

        var options = this._wrapperElement.element.querySelectorAll("." + CLASS_ITEM);
        if (options.length > 0) {

          var newIndex = 0;
          var oldOption = void 0;

          var focusedElement = this._wrapperElement.find("." + CLASS_ITEM_FOCUSED);
          var searchFor = focusedElement ? CLASS_ITEM_FOCUSED : CLASS_ITEM_SELECTED;

          var newElement = void 0;

          for (var index = 0; index < options.length; index++) {
            var direction = keycode === Inputs.KEY_ARROW_DOWN ? 1 : -1;

            var item = new _DomElement3.default(options[index]);

            // search for selected or focusedElement elements
            if (item.hasClass(searchFor)) {
              oldOption = item;
              newIndex = index;

              // get the next not disabled element in the apropriate direction
              for (var count = 0; count < options.length; count++) {
                newIndex += direction;
                newIndex %= options.length;

                if (newIndex < 0) {
                  newIndex = options.length - 1;
                }

                newElement = new _DomElement3.default(options[newIndex]);
                if (!newElement.hasClass(CLASS_ITEM_DISABLED)) {
                  break;
                }
              }
            }
          }

          // set the new element focused
          var newOption = new _DomElement3.default(options[newIndex]);
          newOption.addClass(CLASS_ITEM_FOCUSED);

          if (oldOption) {
            oldOption.removeClass(CLASS_ITEM_FOCUSED);
          }
        }

        evt.preventDefault();
        return;
      }

      if (keycode === Inputs.KEY_ENTER) {
        // Handle enter key by selecting the currently focused element
        var newItem = this._wrapperElement.element.querySelector("." + CLASS_ITEM_FOCUSED);
        var oldItems = Array.apply(undefined, (0, _toConsumableArray3.default)(this._wrapperElement.element.querySelectorAll("." + CLASS_ITEM_SELECTED)));
        this._selectedItemChanged(oldItems, newItem, true, this._multiselection);
      }
    }

    /**
     * Gets the value of the currently selected option.
     * If multiple selection is enabled this property returns an array of values.
     */

  }, {
    key: "addEventListener",


    /**
     * Registers an event listener on the select control.
     */
    value: function addEventListener(type, listener) {
      this.element.addEventListener(type, listener);
    }

    /**
     * Reloads the dropdown's option data definitions from the DOM and updates
     * the generated dropdown display items.
     */

  }, {
    key: "reload",
    value: function reload() {
      // Remove all existing child elements
      while (this._dropdownElement.element.firstChild) {
        this._dropdownElement.element.removeChild(this._dropdownElement.element.firstChild);
      }

      this._setupPlaceholder();
      this._createOptions(this.element);

      this._updateSize();
      this._updateMessage();
    }

    /**
     * Sets the select control to the enabled state.
     */

  }, {
    key: "enable",
    value: function enable() {
      this.element.removeAttribute("disabled");
      this._wrapperElement.removeClass(CLASS_DISABLED);

      window.addEventListener("click", this._windowClickHander);

      this._wrapperElement.element.addEventListener("click", this._clickHandler);
      this._wrapperElement.element.addEventListener("keydown", this._keydownHandler);
      this._wrapperElement.element.addEventListener("focus", this._focusHandler);
      this._wrapperElement.element.addEventListener("blur", this._blurHandler);
    }

    /**
     * Sets the select control to the disabled state.
     */

  }, {
    key: "disable",
    value: function disable() {
      this.element.setAttribute("disabled", "");
      this._wrapperElement.addClass(CLASS_DISABLED);

      window.removeEventListener("click", this._windowClickHander);

      this._wrapperElement.element.removeEventListener("click", this._clickHandler);
      this._wrapperElement.element.removeEventListener("keydown", this._keydownHandler);
      this._wrapperElement.element.removeEventListener("focus", this._focusHandler);
      this._wrapperElement.element.removeEventListener("blur", this._blurHandler);

      this.close();
    }

    /**
     * Toggles the open/closed state of the select dropdown.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    }

    /**
     * Gets if the select dropdown is open or closed.
     * @return {boolean} True if open; otherwise false.
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this._wrapperElement.hasClass(CLASS_OPEN);
    }

    /**
     * Opens the select dropdown.
     */

  }, {
    key: "open",
    value: function open() {
      if (!this.isOpen()) {
        this._openByFocus = false;

        this._wrapperElement.removeClass(CLASS_CLOSED);
        this._wrapperElement.addClass(CLASS_OPEN);

        this._dropdownElement.element.addEventListener("click", this._handleDropdownClick);
        this._dropdownElement.element.addEventListener("tap", this._handleDropdownClick);
      }
    }

    /**
     * Closes the select dropdown.
     */

  }, {
    key: "close",
    value: function close() {
      if (this.isOpen()) {
        this._openByFocus = false;

        this._wrapperElement.removeClass(CLASS_OPEN);
        this._wrapperElement.addClass(CLASS_CLOSED);

        this._dropdownElement.element.removeEventListener("click", this._handleDropdownClick);
        this._dropdownElement.element.removeEventListener("tap", this._handleDropdownClick);

        var focusedItem = this._wrapperElement.find("." + CLASS_ITEM_FOCUSED);
        if (focusedItem) {
          focusedItem.removeClass(CLASS_ITEM_FOCUSED);
        }
      }
    }

    /**
     * Destroys the component and clears all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("click", this._windowClickHander);

      if (this._dropdownElement) {
        this._dropdownElement.element.removeEventListener("click", this._handleDropdownClick);
        this._dropdownElement.element.removeEventListener("tap", this._handleDropdownClick);

        (0, _Utils.remove)(this._dropdownElement.element);
        this._dropdownElement = undefined;
      }

      if (this._wrapperElement) {
        this._wrapperElement.element.removeEventListener("click", this._clickHandler);
        this._wrapperElement.element.removeEventListener("keydown", this._keydownHandler);
        this._wrapperElement.element.removeEventListener("focus", this._focusHandler);
        this._wrapperElement.element.removeEventListener("blur", this._blurHandler);

        this._wrapperElement = undefined;
      }

      if (this._selectButtonElement) {
        (0, _Utils.remove)(this._selectButtonElement.element);
        this._selectButtonElement = undefined;
      }

      this.removeClass(CLASS_CLOSED);
    }
  }, {
    key: "value",
    get: function get() {
      if (this._multiselection) {
        return Array.apply(undefined, (0, _toConsumableArray3.default)(this.element.selectedOptions)).map(function (x) {
          return x.value;
        });
      }

      if (this.element.value === "") {
        return null;
      }

      return this.element.value;
    }

    /**
     * Enables or disables the select component depending on the
     * 'value' parameter.
     * @param {value} If true disables the control; false enables it.
     */

  }, {
    key: "disabled",
    set: function set(value) {
      if (value) {
        this.disable();
      } else {
        this.enable();
      }
    }
  }]);
  return Select;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)("select", function (e) {
    new Select(e);
  });
}

exports.default = Select;

},{"../DomElement":4,"../DomFunctions":5,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"babel-runtime/helpers/toConsumableArray":48}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maxSafeInteger = require("babel-runtime/core-js/number/max-safe-integer");

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_TEXTAREA = "textarea";
var CLASS_HAS_VALUE = "is-fixed";

/**
 * Textarea component
 */

var Textarea = function (_DomElement) {
  (0, _inherits3.default)(Textarea, _DomElement);

  function Textarea(element) {
    (0, _classCallCheck3.default)(this, Textarea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call(this, element));

    _this._area = _this.element.querySelector(QUERY_TEXTAREA);

    _this._focusChangedHandler = _this._focusChanged.bind(_this);
    _this._valueChangedHander = _this._onValueChanged.bind(_this);
    _this._resizeHandler = _this._updateHeight.bind(_this);

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the textarea component.
   * @private
   */


  (0, _createClass3.default)(Textarea, [{
    key: "_initialize",
    value: function _initialize() {
      this._minRows = this._area.getAttribute("data-min-rows") || 3;
      this._maxRows = this._area.getAttribute("data-max-rows") || _maxSafeInteger2.default;

      // Make sure min an max are property specified
      this._minRows = Math.min(this._minRows, this._maxRows);
      this._maxRows = Math.max(this._minRows, this._maxRows);

      this._lineHeight = parseInt(this._css(this._area, "line-height"), 10);

      this._updateBaseHeight = Dom.isHidden(this._area, true);
      this._calculateBaseHeight();

      // add event listeners
      this._area.addEventListener("focus", this._focusChangedHandler);
      this._area.addEventListener("blur", this._focusChangedHandler);
      this._area.addEventListener("input", this._valueChangedHander);

      window.addEventListener("resize", this._resizeHandler);
      window.addEventListener("orientationchange", this._resizeHandler);

      this._onValueChanged();
    }
  }, {
    key: "_calculateBaseHeight",
    value: function _calculateBaseHeight() {
      // temporary clear the content to take measurements
      var value = this._area.value;
      this._area.value = "";

      this._baseHeight = this._area.offsetHeight - this._lineHeight;
      this._baseScrollHeight = this._area.scrollHeight - this._lineHeight;

      // restore initial content
      this._area.value = value;
    }
  }, {
    key: "_focusChanged",
    value: function _focusChanged() {
      this._updateHeight();
    }
  }, {
    key: "_css",
    value: function _css(element, property) {
      return window.getComputedStyle(element, null).getPropertyValue(property);
    }
  }, {
    key: "_updateHeight",
    value: function _updateHeight() {
      var hasFocus = this._area === document.activeElement;
      var maxRows = void 0,
          rows = 0;

      if (this._updateBaseHeight === true && Dom.isHidden(this._area, true) === false) {
        this._calculateBaseHeight();
        this._updateBaseHeight = false;
      }

      // Calculate the apropriate size for the control
      if (!this._hasValue()) {
        // Handle empty states
        rows = hasFocus === true ? this._minRows : 1;
        maxRows = rows;
      } else {
        // Reset the height for calculation of the row count
        this._area.style.height = "auto";

        // Get the new height
        rows = Math.ceil((this._area.scrollHeight - this._baseScrollHeight) / this._lineHeight) + 1;
        maxRows = Math.max(Math.min(this._maxRows, rows), this._minRows);
      }

      if (rows > this._maxRows) {
        this._area.style.overflow = "auto";
      } else {
        this._area.style.overflow = "hidden";
      }

      var height = (maxRows - 1) * this._lineHeight + this._baseHeight;
      this._area.style.height = height + "px";
    }
  }, {
    key: "_hasValue",
    value: function _hasValue() {
      return this._area.value && this._area.value.length > 0;
    }
  }, {
    key: "_onValueChanged",
    value: function _onValueChanged() {
      if (this._hasValue()) {
        Dom.addClass(this._area, CLASS_HAS_VALUE);
      } else {
        Dom.removeClass(this._area, CLASS_HAS_VALUE);
        this._area.value = "";
      }

      this._updateHeight();
    }

    /**
     * Destroys the component and clears all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("resize", this._resizeHandler);
      window.removeEventListener("orientationchange", this._resizeHandler);

      this._area.removeEventListener("focus", this._focusChangedHandler);
      this._area.removeEventListener("blur", this._focusChangedHandler);
      this._area.removeEventListener("input", this._valueChangedHander);

      this._focusChangedHandler = null;
      this._valueChangedHander = null;
      this._area = null;
      this._minRows = null;
      this._maxRows = null;
      this._lineHeight = null;
      this._baseHeight = null;
      this._baseScrollHeight = null;
      this.element = null;
    }
  }]);
  return Textarea;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".input-multiline", function (e) {
    new Textarea(e);
  });
}

exports.default = Textarea;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"babel-runtime/core-js/number/max-safe-integer":37,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loader bar component
 */
var LoaderBar = function (_DomElement) {
  (0, _inherits3.default)(LoaderBar, _DomElement);

  /**
   * Creates and initializes the LoaderBar component.
   * @param {Element} - The root element of the LoaderBar component.
   */
  function LoaderBar(element) {
    (0, _classCallCheck3.default)(this, LoaderBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoaderBar.__proto__ || (0, _getPrototypeOf2.default)(LoaderBar)).call(this, element));

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the loader bar component.
   * @private
   */


  (0, _createClass3.default)(LoaderBar, [{
    key: "_initialize",
    value: function _initialize() {
      this.progressElement = this.find(".indicator") || this.element;
      this.fileNameElement = this.find(".detail > .name");
      this.progressLabelElement = this.find(".progress");
      this.totalProgressElement = this.find(".progress > .file-size");
    }

    /**
     * Gets the current progress value in the range of 0..1.
     */

  }, {
    key: "progress",
    get: function get() {
      return this.value;
    }

    /**
     * Sets the current progress.
     * @param {number} - The progress in the range of 0..1.
     */
    ,
    set: function set(val) {
      // val = clamp(val, 0, 1)

      var percentage = (val * 100).toFixed(0);

      this.value = val;
      this.element.value = val;

      this.progressElement.setAttribute("style", "width: " + val * 100 + "%");

      if (this.progressLabelElement) {
        this.progressLabelElement.element.textContent = percentage + "%";
      }
    }

    /**
     * Gets the filename.
     * @returns {string} - The filename.
     */

  }, {
    key: "filename",
    get: function get() {
      if (!this.fileNameElement) {
        return undefined;
      }

      return this.fileNameElement.element.innerHtml;
    }

    /**
     * Sets the filename.
     */
    ,
    set: function set(val) {
      if (!this.fileNameElement) {
        throw new Error("Cannot set the filename, missing detail element");
      }

      this.fileNameElement.setHtml(val);
    }

    /**
     * Sets the file size label.
     */

  }, {
    key: "fileSize",
    set: function set(val) {
      if (!this.totalProgressElement) {
        throw new Error("Cannot set the fileSize, missing detail element");
      }

      this.fileSize.setHtml(val);
    }
  }]);
  return LoaderBar;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".loader-bar", function (e) {
    new LoaderBar(e);
  });
}

exports.default = LoaderBar;

},{"../DomElement":4,"../Utils":7,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _gsap = require("gsap");

var _popper = require("popper.js");

var _popper2 = _interopRequireDefault(_popper);

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_OPEN = "is-open";
var CLASS_MENU = "js-flyout";
var CLASS_TABS = "tabs";

var ANIMATION_OPEN = 0.3;

/**
 * A component for the flyout menu.
 */

var MenuFlyout = function (_DomElement) {
  (0, _inherits3.default)(MenuFlyout, _DomElement);

  /**
   * Creates and initializes the flyout component.
   * @param {DomElement} - The root element of the flyout menu component.
   */
  function MenuFlyout(element) {
    (0, _classCallCheck3.default)(this, MenuFlyout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MenuFlyout.__proto__ || (0, _getPrototypeOf2.default)(MenuFlyout)).call(this, element));

    _this._clickHandler = _this._handleClick.bind(_this);
    _this._windowClickHander = _this._handleWindowClick.bind(_this);

    _this._animationDuration = ANIMATION_OPEN;

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the flyout component.
   * @private
   */


  (0, _createClass3.default)(MenuFlyout, [{
    key: "_initialize",
    value: function _initialize() {
      var dataTarget = this.element.getAttribute("data-target");
      if (dataTarget === null || dataTarget === "") {

        /* eslint-disable no-console */
        console.error("A flyout menu element requires a 'data-target' that specifies the element to collapse");
        console.info(this.element);
        /* eslint-enable no-console */
        return;
      }

      if (this._useDynamicPlacement()) {
        this._dynamicPlacement = true;
      }

      var hiddenTarget = this.element.getAttribute("data-hidden");
      if (hiddenTarget !== null && hiddenTarget !== "") {
        this._hiddenIndicator = document.querySelector(hiddenTarget);
      }

      this._flyoutElement = document.querySelector(dataTarget);
      this.element.addEventListener("click", this._clickHandler);
    }
  }, {
    key: "_handleClick",
    value: function _handleClick() {
      this.toggle();
    }
  }, {
    key: "_handleWindowClick",
    value: function _handleWindowClick(event) {
      var target = event.target;

      if ((0, _DomFunctions.parentWithClass)(target, CLASS_MENU) === this._flyoutElement) {
        return false;
      }

      while (target !== this.element && target.parentElement) {
        target = target.parentElement;
      }

      if (target !== this.element) {
        this.close();
        return false;
      }

      return true;
    }
  }, {
    key: "_useDynamicPlacement",
    value: function _useDynamicPlacement() {
      return (0, _DomFunctions.parentWithClass)(this.element, CLASS_TABS);
    }
  }, {
    key: "_openMenu",
    value: function _openMenu(el) {
      _gsap.TweenLite.killTweensOf(el);

      _gsap.TweenLite.set(el, {
        display: "block"
      });

      if (this._dynamicPlacement === true) {
        var popperOptions = {
          placement: "bottom",
          flip: {
            enabled: false
          },
          eventsEnabled: false
        };

        this._popperInstance = new _popper2.default(this.element, this._flyoutElement, popperOptions);
      }

      _gsap.TweenLite.to(el, this._animationDuration, {
        className: "+=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });

      // set aria expanded
      el.setAttribute("aria-expanded", true);

      this.dispatchEvent("opened");
    }
  }, {
    key: "_closeMenu",
    value: function _closeMenu(el) {
      _gsap.TweenLite.killTweensOf(el);

      if (this._popperInstance) {
        this._popperInstance.destroy();
        this._popperInstance = undefined;
      }

      _gsap.TweenLite.to(el, ANIMATION_OPEN, {
        className: "-=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut],
        onComplete: function onComplete() {
          _gsap.TweenLite.set(el, {
            clearProps: "display"
          });
        }
      });

      // set aria expanded
      el.setAttribute("aria-expanded", false);

      this.dispatchEvent("closed");
    }

    /**
     * Sets the opening animation duration.
     * @param {durationInSeconds} - The animation duration in seconds.
     */

  }, {
    key: "open",


    /**
     * Opens the flyout menu.
     * @fires Modal#opened
     */
    value: function open() {
      var _this2 = this;

      if (this._hiddenIndicator && (0, _DomFunctions.isHidden)(this._hiddenIndicator, false) === true) {
        return;
      }

      if ((0, _DomFunctions.hasClass)(this.element, CLASS_OPEN) === true) {
        return;
      }

      (0, _DomFunctions.addClass)(this.element, CLASS_OPEN);
      this._openMenu(this._flyoutElement);

      setTimeout(function () {
        window.addEventListener("click", _this2._windowClickHander);
        window.addEventListener("touchend", _this2._windowClickHander);
      }, 50);
    }

    /**
     * Closes the flyout menu.
     * @fires Modal#closed
     */

  }, {
    key: "close",
    value: function close() {
      if (this._hiddenIndicator && (0, _DomFunctions.isHidden)(this._hiddenIndicator, false) === true) {
        return;
      }

      if ((0, _DomFunctions.hasClass)(this.element, CLASS_OPEN) === false) {
        return;
      }

      (0, _DomFunctions.removeClass)(this.element, CLASS_OPEN);

      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);

      this._closeMenu(this._flyoutElement);
    }

    /**
     * Toggles the flyout menu.
     * @fires Modal#opened
     * @fires Modal#closed
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if ((0, _DomFunctions.hasClass)(this.element, CLASS_OPEN) === false) {
        this.open();
      } else {
        this.close();
      }
    }

    /**
     * Removes all event handlers and clears references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._flyoutElement = null;

      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);

      if (this._clickHandler) {
        this.element.removeEventListener("click", this._clickHandler);
      }

      if (this._popperInstance) {
        this._popperInstance.destroy();
        this._popperInstance = undefined;
      }

      this._clickHandler = null;
      this._windowClickHander = null;
      this.element = null;
    }

    /**
     * Fired when the flyout menu is opened by the anchor link or using the
     * {@link MenuFlyout#open} method.
     * @event MenuFlyout#opened
     * @type {object}
     */

    /**
     * Fired when the flyout menu is closed by the user or using the
     * {@link MenuFlyout#close} method.
     * @event MenuFlyout#closed
     * @type {object}
     */

  }, {
    key: "animationDuration",
    set: function set(durationInSeconds) {
      this._animationDuration = durationInSeconds;
    }
  }]);
  return MenuFlyout;
}(_DomElement3.default);

function init() {
  var elements = document.querySelectorAll("[data-toggle='flyout']");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(elements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

      if (e.getAttribute("data-init") === "auto") {
        new MenuFlyout(e);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

exports.default = MenuFlyout;

},{"../DomElement":4,"../DomFunctions":5,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144,"popper.js":145}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_BACKDROP = "backdrop";
var CLASS_BACKDROP_OPEN = "backdrop--open";

var CLASS_OPEN = "modal--open";
var CLASS_TRIGGER = "modal-trigger";

var CLASS_MODAL_OPEN = "js-modal-open";

var CLASS_BUTTONS_OKAY = ".modal-close";
var CLASS_BUTTONS_CLOSE = ".modal-cancel";

/**
 * A component to open and close modal dialogs. It also handles cancellation and makes
 * sure that the modal background is present in the DOM.
 */

var Modal = function (_DomElement) {
  (0, _inherits3.default)(Modal, _DomElement);

  function Modal(element) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, element));

    _this._okayHandler = _this.close.bind(_this);
    _this._cancelHandler = _this._handleClick.bind(_this);
    _this._keydownHandler = _this._handleKeydown.bind(_this);

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the range modal component.
   * @private
   */


  (0, _createClass3.default)(Modal, [{
    key: "_initialize",
    value: function _initialize() {

      // Create the backdrop
      this._backdrop = new _DomElement3.default("div").addClass(CLASS_BACKDROP);

      this._backdropParent = (0, _DomFunctions.getRootElement)();
      this._subscribeToTrigger();
    }
  }, {
    key: "_subscribeToTrigger",
    value: function _subscribeToTrigger() {
      var triggerId = this.element.id;
      if (!triggerId) {
        return;
      }

      this._triggerClickHander = this.open.bind(this);

      var triggerElements = document.querySelectorAll("." + CLASS_TRIGGER + "[href=" + triggerId + "]");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(triggerElements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var triggerElement = _step.value;

          triggerElement.addEventListener("click", this._triggerClickHander);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_unsubscribeFromTrigger",
    value: function _unsubscribeFromTrigger() {
      var triggerId = this.element.id;
      if (!triggerId) {
        return;
      }

      var triggerElements = document.querySelectorAll("." + CLASS_TRIGGER + "[href=" + triggerId + "]");
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(triggerElements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var triggerElement = _step2.value;

          triggerElement.removeEventListener("click", this._triggerClickHander);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._triggerClickHander = undefined;
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var evt = evt || window.event;
      var keycode = event.which || event.keyCode;

      if (keycode === Inputs.KEY_ESCAPE) {
        // handle Escape key (ESC)
        this.cancel();
        return;
      }
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      (0, _Utils.preventDefault)(event);
      this.cancel();
    }
  }, {
    key: "_close",
    value: function _close() {
      var _this2 = this;

      document.removeEventListener("keydown", this._keydownHandler);
      this._backdrop.element.removeEventListener("click", this._cancelHandler);

      (0, _DomFunctions.removeClass)(this._backdropParent, CLASS_MODAL_OPEN);
      this._backdrop.removeClass(CLASS_BACKDROP_OPEN);
      this.removeClass(CLASS_OPEN);

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(this.element.querySelectorAll(CLASS_BUTTONS_CLOSE)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var closeButton = _step3.value;

          closeButton.removeEventListener("click", this._cancelHandler);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(this.element.querySelectorAll(CLASS_BUTTONS_OKAY)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var okayButton = _step4.value;

          okayButton.removeEventListener("click", this._okayHandler);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      setTimeout(function () {
        // remove the backdrop from the body
        _this2._backdropParent.removeChild(_this2._backdrop.element);
      }, 300);
    }

    /**
     * Opens the modal dialog.
     * @fires Modal#opened
     */

  }, {
    key: "open",
    value: function open() {
      var _this3 = this;

      // add the backdrop to the body
      this._backdropParent.appendChild(this._backdrop.element);

      // set the element to flex as it is initially hidden
      this.element.style.display = "flex";

      // remove the style after the animation completes
      setTimeout(function () {
        _this3.element.style.display = "";
      }, 800);

      // wait a bit to allow the browser to catch up and show the animation
      setTimeout(function () {
        _this3.addClass(CLASS_OPEN);
        _this3._backdrop.addClass(CLASS_BACKDROP_OPEN);
        (0, _DomFunctions.addClass)(_this3._backdropParent, CLASS_MODAL_OPEN);

        document.addEventListener("keydown", _this3._keydownHandler);

        _this3._backdrop.element.addEventListener("mousedown", _this3._handleButtonDown);
        _this3._backdrop.element.addEventListener("click", _this3._cancelHandler);

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = (0, _getIterator3.default)(_this3.element.querySelectorAll(CLASS_BUTTONS_CLOSE)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var closeButton = _step5.value;

            closeButton.addEventListener("click", _this3._cancelHandler);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = (0, _getIterator3.default)(_this3.element.querySelectorAll(CLASS_BUTTONS_OKAY)), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var okayButton = _step6.value;

            okayButton.addEventListener("click", _this3._okayHandler);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        _this3.dispatchEvent("opened");
      }, 50);
    }

    /**
     * Cancels (and closes) the modal dialog.
     * @fires Modal#cancelled
     * @fires Modal#closed
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this.dispatchEvent("cancelled");
      this._close();
    }

    /**
     * Closes the modal dialog.
     * @fires Modal#closed
     */

  }, {
    key: "close",
    value: function close() {
      this._close();
      this.dispatchEvent("closed");
    }

    /**
     * Destroys the component and frees all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.cancel();
      this._unsubscribeFromTrigger();
    }

    /**
     * Fired when the modal dialog is opened by the anchor link or using the
     * {@link Modal#open} method.
     * @event Modal#opened
     * @type {object}
     */

    /**
     * Fired when the modal dialog is closed by the user or using the
     * {@link Modal#close} method.
     * @event Modal#closed
     * @type {object}
     */

    /**
     * Fired when the modal dialog is cancelled by the user or using the
     * {@link Modal#cancel} method.
     * @event Modal#cancelled
     * @type {object}
     */

  }]);
  return Modal;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".modal", function (e) {
    new Modal(e);
  });
}

exports.default = Modal;

},{"../DomElement":4,"../DomFunctions":5,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _gsap = require("gsap");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

var _SearchInput = require("../search/SearchInput");

var _SearchInput2 = _interopRequireDefault(_SearchInput);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_OPEN = "is-open";
var CLASS_ACTIVE = "is-active";

var QUERY_NAV_HAMBURGER = ".nav-hamburger";
var QUERY_NAV_HB_BODY = ".nav__primary";

var CLASS_NAV_LINK = "nav-link--header";
var QUERY_NAV_LINK_ACTIVE = ".nav-link--header.is-active";

var QUERY_NAV_MOBILE = ".nav__level1 .nav__mainnav .nav__primary";
var QUERY_NAV_LEVEL0 = ".nav__level0";
var QUERY_NAV_LEVEL0_CONTAINER = ".nav__level0 .nav__subnav";
var QUERY_SECTION_OPEN = ".nav-section.is-open";

var QUERY_NAV_LEVEL1 = ".nav__level1 .nav__mainnav";

var QUERY_NAV_LEVEL0_LINK = ".nav-link.nav-link--header";
var QUERY_NAV_LEVEL1_LINK = ".nav-link--header";

var QUERY_NAV_COLUMN = ".nav-col";
var QUERY_NAV_COLUMN_ACTIVE = ".nav-col.is-active";

var QUERY_NAV_BODY = ".nav-body";
var QUERY_NAV_FOOTER = ".nav-footer";

var QUERY_SEARCH_ICON = ".nav-search";
var QUERY_SEARCH_FIELD = ".search__input";
var CLASS_SEARCH_DESKTOP = "search--desktop";

var ANIMATION_START_DELAY = 0.2;
var ANIMATION_OFFSET = 0.05;

var ANIMATION_BODY_DURATION = 0.3;
var ANIMATION_FOOTER_DURATION = 0.1;

/**
 * The navigation component definition.
 */

var Navigation = function (_DomElement) {
  (0, _inherits3.default)(Navigation, _DomElement);

  function Navigation(element) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, element));

    _this._navLevel0 = _this.element.querySelector(QUERY_NAV_LEVEL0) || document.createElement("div");
    _this._navLevel0Body = _this.element.querySelector(QUERY_NAV_LEVEL0_CONTAINER) || document.createElement("div");
    _this._navLevel1 = _this.element.querySelector(QUERY_NAV_LEVEL1) || document.createElement("div");

    _this._navMobile = _this.element.querySelector(QUERY_NAV_MOBILE);
    if (!_this._navMobile) {
      var dummyParent = document.createElement("div");
      _this._navMobile = document.createElement("div");
      dummyParent.appendChild(_this._navMobile);
    }

    _this._hamburgerElement = _this.element.querySelector(QUERY_NAV_HAMBURGER) || document.createElement("div");
    _this._searchComponents = [];

    _this._level0ClickHandler = _this._handleLevel0Click.bind(_this);
    _this._level1ClickHandler = _this._handleLevel1Click.bind(_this);
    _this._windowClickHander = _this._handleWindowClick.bind(_this);
    _this._searchClickHandler = _this._handleSearchClick.bind(_this);

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: "_resetMainTimeline",
    value: function _resetMainTimeline() {
      var _this2 = this;

      if (this._tlMain) {
        this._tlMain.stop();
      }

      this._tlMain = new _gsap.TimelineLite({
        onComplete: function onComplete() {
          _this2._tlMain = undefined;
        }
      });
    }
  }, {
    key: "_isMobile",
    value: function _isMobile() {
      return Dom.isHidden(this._hamburgerElement, true) === false;
    }
  }, {
    key: "_handleLevel0Click",
    value: function _handleLevel0Click(event) {
      var isDesktop = !this._isMobile();

      if (isDesktop) {
        this._resetMainTimeline();

        var navItems = new NavigationItems(this).fromLevel0(event.target);

        if (!navItems.section) {
          return;
        }

        var previousNavLink = this._navLevel0.querySelector(QUERY_NAV_LINK_ACTIVE);
        var previousNavSection = this._navLevel0.querySelector(QUERY_SECTION_OPEN);

        this._toggleContainer(navItems.link, this._navLevel0Body, navItems.section, undefined, previousNavLink, this._navLevel0Body, previousNavSection, undefined, true);
      }
    }
  }, {
    key: "_handleLevel1Click",
    value: function _handleLevel1Click(event) {
      var navItems = new NavigationItems(this).fromLevel1(event.target);

      var prevItems = navItems.previousLevel1();

      this._toggleContainer(navItems.link, navItems.container, navItems.section, navItems.footer, prevItems.link, prevItems.container, prevItems.section, prevItems.footer, false);

      return false;
    }
  }, {
    key: "_toggleContainer",
    value: function _toggleContainer(navLink, navContainer, navSection, navFooter, previousNavLink, previousNavContainer, previousNavSection, previousNavFooter) {
      var animateContainer = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

      var isDesktop = !this._isMobile();

      if (previousNavLink && previousNavLink !== navLink && navLink !== this._hamburgerElement) {
        Dom.removeClass(previousNavLink, CLASS_ACTIVE);
      }

      if (Dom.hasClass(navLink, CLASS_ACTIVE)) {
        Dom.removeClass(navLink, CLASS_ACTIVE);

        if (isDesktop) {
          this._onNavigationClosed();

          this._resetMainTimeline();
          this._closeSection(navContainer, navSection, navFooter, this._tlMain, true, animateContainer);
        } else if (navLink === this._hamburgerElement) {
          // Close mobile navigation
          this._onNavigationClosed();

          this._resetMainTimeline();
          this._closeSection(navContainer, navSection, undefined, this._tlMain, false, false);
        } else if (!isDesktop) {
          // Close the section
          this._closeSection(navContainer, navSection, navFooter, undefined, true, animateContainer);
        }
      } else {
        Dom.addClass(navLink, CLASS_ACTIVE);

        if (isDesktop) {
          Dom.addClass(this._navMobile, CLASS_OPEN);
          this._onNavigationOpened();
          this._resetMainTimeline();

          if (previousNavContainer && previousNavSection) {
            this._closeSection(previousNavContainer, previousNavSection, previousNavFooter, this._tlMain, true, animateContainer);
          }
          this._openSection(navContainer, navSection, navFooter, this._tlMain, true, animateContainer);
        } else if (navLink === this._hamburgerElement) {
          // Open mobile navigation
          this._onNavigationOpened();

          this._resetMainTimeline();
          this._openSection(navContainer, navSection, undefined, this._tlMain, false, false);
        } else if (!isDesktop) {
          // Open section
          if (previousNavContainer && previousNavSection) {
            this._closeSection(previousNavContainer, previousNavSection, previousNavFooter, undefined, true, animateContainer);
          }
          this._openSection(navContainer, navSection, navFooter, undefined, true, animateContainer);
        }
      }
    }
  }, {
    key: "_onNavigationOpened",
    value: function _onNavigationOpened() {
      Dom.addClass(this._navMobile, CLASS_OPEN);
      Dom.addClass(this._navMobile.parentElement, CLASS_OPEN);
      Dom.addClass(this._hamburgerElement, CLASS_ACTIVE);

      window.addEventListener("click", this._windowClickHander);
      window.addEventListener("touchend", this._windowClickHander);
    }
  }, {
    key: "_onNavigationClosed",
    value: function _onNavigationClosed() {
      Dom.removeClass(this._navMobile, CLASS_OPEN);
      Dom.removeClass(this._navMobile.parentElement, CLASS_OPEN);
      Dom.removeClass(this._hamburgerElement, CLASS_ACTIVE);

      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);
    }
  }, {
    key: "_handleWindowClick",
    value: function _handleWindowClick(event) {
      var target = event.target;

      while (target !== this.element && target.parentElement) {
        target = target.parentElement;
      }

      if (target !== this.element) {
        this.close();
        return false;
      }

      return true;
    }
  }, {
    key: "_openSection",
    value: function _openSection(navContainer, navSection, navFooter, tl) {
      var animateColumns = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var animateContainer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (!navSection) {
        return;
      }

      var activeItems = navSection.querySelectorAll(QUERY_NAV_COLUMN);

      if (animateContainer === true) {
        var container = navContainer;
        navContainer = navSection;
        navSection = container;
      }

      if (!tl) {
        tl = new _gsap.TimelineLite();
      }

      tl.set(navContainer, {
        className: "+=" + CLASS_OPEN
      });

      tl.set(navSection, {
        display: "block"
      });

      tl.to(navSection, ANIMATION_BODY_DURATION, {
        className: "+=" + CLASS_OPEN,
        clearProps: "all",
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });

      if (navFooter) {
        tl.set(navFooter.querySelectorAll(QUERY_NAV_COLUMN), {
          className: "+=" + CLASS_ACTIVE
        });

        tl.set(navFooter, {
          display: "block"
        }, 0);

        tl.to(navFooter, ANIMATION_FOOTER_DURATION, {
          className: "+=" + CLASS_OPEN,
          clearProps: "height, display",
          ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
        }, "-=0.1");
      }

      if (animateColumns === true) {
        var delay = ANIMATION_START_DELAY;
        var items = activeItems;

        for (var index = 0; index < items.length; index++) {
          tl.to(items[index], 0, {
            className: "+=" + CLASS_ACTIVE
          }, delay);
          delay += ANIMATION_OFFSET;
        }
      }
    }
  }, {
    key: "_closeSection",
    value: function _closeSection(navContainer, navSection, navFooter, tl) {
      var animateColumns = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var animateContainer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (!navSection) {
        return;
      }

      var activeItems = navSection.querySelectorAll(QUERY_NAV_COLUMN_ACTIVE);

      if (animateContainer === true) {
        var container = navContainer;
        navContainer = navSection;
        navSection = container;
      }

      if (!tl) {
        tl = new _gsap.TimelineLite();
      }

      tl.set(navSection, {
        display: "block"
      });

      if (animateColumns === true) {
        tl.set(activeItems, {
          className: "-=" + CLASS_ACTIVE
        }, 0);
      }

      tl.to(navSection, ANIMATION_BODY_DURATION, {
        className: "-=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut],
        clearProps: "all",
        onComplete: function onComplete() {
          Dom.removeClass(navContainer, CLASS_OPEN);

          if (animateColumns === true) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = (0, _getIterator3.default)(activeItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var active = _step.value;

                Dom.removeClass(active, CLASS_ACTIVE);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
      }, 0);

      if (navFooter) {
        tl.set(navFooter, {
          display: "block"
        }, 0);

        tl.to(navFooter, ANIMATION_FOOTER_DURATION, {
          className: "-=" + CLASS_OPEN,
          ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut],
          clearProps: "height,display",
          onComplete: function onComplete() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = (0, _getIterator3.default)(navFooter.querySelectorAll(QUERY_NAV_COLUMN_ACTIVE)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var active = _step2.value;

                Dom.removeClass(active, CLASS_ACTIVE);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, 0);
      }
    }
  }, {
    key: "_handleSearchClick",
    value: function _handleSearchClick() {
      this._searchDesktop.open();
    }

    /**
     * Initializes the navigation component.
     * @private
     */

  }, {
    key: "_initialize",
    value: function _initialize() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(this._navLevel0.querySelectorAll(QUERY_NAV_LEVEL0_LINK)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var navLink = _step3.value;

          navLink.addEventListener("click", this._level0ClickHandler);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(this._navLevel1.querySelectorAll(QUERY_NAV_LEVEL1_LINK)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _navLink = _step4.value;

          _navLink.addEventListener("click", this._level1ClickHandler);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this._hamburgerElement.addEventListener("click", this._level1ClickHandler);

      // Desktop search icon
      var searchIcon = this.element.querySelector(QUERY_SEARCH_ICON);
      if (searchIcon) {
        searchIcon.addEventListener("click", this._searchClickHandler);
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = (0, _getIterator3.default)(this.element.querySelectorAll(QUERY_SEARCH_FIELD)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var search = _step5.value;

          var searchComponent = new _SearchInput2.default(search);

          if (Dom.hasClass(search, CLASS_SEARCH_DESKTOP) || Dom.hasClass(search.parentNode, CLASS_SEARCH_DESKTOP)) {
            this._searchDesktop = searchComponent;
          }

          this._searchComponents.push(searchComponent);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }

    /**
     * Closes the navigation.
     */

  }, {
    key: "close",
    value: function close() {
      var isMoble = this._isMobile();
      this._resetMainTimeline();

      var level1 = this._navLevel1.querySelector(QUERY_NAV_LINK_ACTIVE);
      var level0 = this._navLevel0.querySelector(QUERY_NAV_LINK_ACTIVE);

      if (!level1 && isMoble && Dom.hasClass(this._hamburgerElement, CLASS_ACTIVE)) {
        level1 = this._hamburgerElement;
      }

      if (level1) {
        var navItems = new NavigationItems(this).fromLevel1(level1);

        Dom.removeClass(navItems.link, CLASS_ACTIVE);
        this._onNavigationClosed();
        this._closeSection(navItems.container, navItems.section, navItems.footer, this._tlMain, !isMoble, false);
      }

      if (level0) {
        var _navItems = new NavigationItems(this).fromLevel0(level0);

        Dom.removeClass(_navItems.link, CLASS_ACTIVE);
        this._onNavigationClosed();
        this._closeSection(_navItems.container, _navItems.section, _navItems.footer, this._tlMain, !isMoble, true);
      }
    }
  }]);
  return Navigation;
}(_DomElement3.default);

var NavigationItems = function () {
  function NavigationItems(nav) {
    (0, _classCallCheck3.default)(this, NavigationItems);

    this._navigation = nav;

    this._link = undefined;
    this._container = undefined;
    this._section = undefined;
    this._footer = undefined;
  }

  (0, _createClass3.default)(NavigationItems, [{
    key: "fromLevel0",
    value: function fromLevel0(navLink) {
      while (!Dom.hasClass(navLink, CLASS_NAV_LINK) && navLink.parentElement) {
        navLink = navLink.parentElement;
      }

      this._link = navLink;

      var toggleId = navLink.getAttribute("data-toggle");
      this._container = this._navigation._navLevel0Body;
      this._section = this._navigation._navLevel0.querySelector("#" + toggleId);

      return this;
    }
  }, {
    key: "fromLevel1",
    value: function fromLevel1(navLink) {
      while (navLink.parentElement) {
        if (navLink === this._navigation._hamburgerElement || Dom.hasClass(navLink, CLASS_NAV_LINK)) {
          break;
        }

        navLink = navLink.parentElement;
      }

      this._link = navLink;
      this._container = navLink.parentElement;
      this._section = this._container.querySelector(QUERY_NAV_BODY);
      this._footer = this._container.querySelector(QUERY_NAV_FOOTER);

      if (navLink === this._navigation._hamburgerElement) {
        this._container = this._navigation._navLevel1;
        this._section = this._container.querySelector(QUERY_NAV_HB_BODY);
      }

      return this;
    }
  }, {
    key: "previousLevel1",
    value: function previousLevel1() {
      var prev = new NavigationItems(this._navigation);

      prev._link = this._navigation._navLevel1.querySelector(QUERY_NAV_LINK_ACTIVE);
      prev._container = prev._link ? prev._link.parentElement : undefined;
      prev._section = prev._container ? prev._container.querySelector(QUERY_NAV_BODY) : undefined;
      prev._footer = prev._container ? prev._container.querySelector(QUERY_NAV_FOOTER) : undefined;

      return prev;
    }
  }, {
    key: "isHamburger",
    value: function isHamburger() {
      return this._link === this._navigation._hamburgerElement;
    }
  }, {
    key: "link",
    get: function get() {
      return this._link;
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }, {
    key: "section",
    get: function get() {
      return this._section;
    }
  }, {
    key: "footer",
    get: function get() {
      return this._footer;
    }
  }]);
  return NavigationItems;
}();

function init() {
  (0, _Utils.searchAndInitialize)(".nav", function (e) {
    new Navigation(e);
  });
}

exports.default = Navigation;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"../search/SearchInput":29,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _gsap = require("gsap");

var _DomFunctions = require("../DomFunctions");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_OPEN = "is-open";
var CLASS_ACTIVE = "is-active";

var QUERY_SITE_WRAPPER = ".js-site-wrapper";
var QUERY_NAV_HAMBURGER = ".js-site-wrapper .js-hamburger";

var QUERY_NAV_ITEM = ".js-nav-item";

var NAV_LINK_INITIAL_SCALE = 0.9;
var ANIMATION_DURATION_LINKS = 0.1;
var ANIMATION_DURATION_NAV = 0.3;

var ANIMATION_STAGGER_DELAY = 0.05;

/**
 * The navigation side component definition.
 */

var NavigationSide = function (_DomElement) {
  (0, _inherits3.default)(NavigationSide, _DomElement);

  function NavigationSide(element) {
    (0, _classCallCheck3.default)(this, NavigationSide);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavigationSide.__proto__ || (0, _getPrototypeOf2.default)(NavigationSide)).call(this, element));

    _this._clickHandler = _this._handleClick.bind(_this);
    _this._windowClickHander = _this._handleWindowClick.bind(_this);

    _this._siteWrapper = document.querySelector(QUERY_SITE_WRAPPER);
    _this._hamburgerElement = document.querySelector(QUERY_NAV_HAMBURGER) || document.createElement("div");
    _this._navItems = _this.element.querySelectorAll(QUERY_NAV_ITEM);

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(NavigationSide, [{
    key: "_initialize",
    value: function _initialize() {
      this._hamburgerElement.addEventListener("click", this._clickHandler);
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      (0, _Utils.preventDefault)(event);
      this.toggle();
    }
  }, {
    key: "_handleWindowClick",
    value: function _handleWindowClick(event) {
      var target = event.target;

      while (target !== this.element && target.parentElement) {
        target = target.parentElement;
      }

      if (target !== this.element) {
        this.close();
        return false;
      }

      return true;
    }

    /**
     * Toggles the side navigation.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if ((0, _DomFunctions.hasClass)(this.element, CLASS_OPEN) === false) {
        this.open();
      } else {
        this.close();
      }
    }

    /**
     * Opens the slide navigation.
     */

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var elements = [this.element, this._siteWrapper];
      _gsap.TweenLite.killTweensOf(elements);

      setTimeout(function () {
        window.addEventListener("click", _this2._windowClickHander);
        window.addEventListener("touchend", _this2._windowClickHander);
      }, 50);

      var tl = new _gsap.TimelineLite();

      (0, _DomFunctions.addClass)(this._hamburgerElement, CLASS_ACTIVE);

      tl.to(elements, ANIMATION_DURATION_NAV, {
        className: "+=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });

      tl.staggerFrom(this._navItems, ANIMATION_DURATION_LINKS, {
        autoAlpha: 0,
        scaleX: NAV_LINK_INITIAL_SCALE,
        scaleY: NAV_LINK_INITIAL_SCALE
      }, ANIMATION_STAGGER_DELAY);
    }

    /**
     * Closes the side navigation.
     */

  }, {
    key: "close",
    value: function close() {
      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);

      var elements = [this.element, this._siteWrapper];
      _gsap.TweenLite.killTweensOf(elements);

      (0, _DomFunctions.removeClass)(this._hamburgerElement, CLASS_ACTIVE);

      var tl = new _gsap.TimelineLite();

      tl.to(elements, ANIMATION_DURATION_NAV, {
        className: "-=" + CLASS_OPEN,
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });
    }

    /**
     * Destorys the component and removes all event
     * subscriptions and references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);

      this._windowClickHander = null;

      this._clickHandler = null;
      this._siteWrapper = null;

      this._hamburgerElement = null;
      this._navItems = null;
    }
  }]);
  return NavigationSide;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".nav-side", function (e) {
    new NavigationSide(e);
  });
}

exports.default = NavigationSide;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.showOnHeader = showOnHeader;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_NOTIFICATION = "notification-header";

var CLASS_OPEN = "notification--open";
var CLASS_BUTTON_CLOSE = "notification__close";

/**
 * Notification component.
 * @namespace Notification
 */

/**
 * The message click callback function.
 * @memberof Notification
 * @callback Notification~Click
 * @property {NotificationHeader} item - The current notification header instance.
 * @returns {boolean} Return true if the notification should be closed; return false if the
 *                    notification should remain open.
 */

/**
 * The cancel callback function.
 * @memberof Notification
 * @callback Notification~Cancel
 * @property {NotificationHeader} item - The current notification header instance.
 */

/**
 * Creates and shows a notification with the specified message.
 * @memberof Notification
 * @param {containerId} containerId - The id of the container on where to show the notification.
 * @param {message} message - The message to show.
 * @param {Notification~Click} messageClickCallback - The callback that gets called when the user clicks on the notification message text.
 * @param {Notification~Cancel} cancelCallback - The callback that gets called when the user cancels the notification by closing it.
 * @param {modifierClass} modifierClass - The css modifier class for the notification; this is an optional parameter
 * @returns {NotificationHeader} The notification header item instance.
 */
function showOnHeader(containerId, message) {
  var messageClickCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var cancelCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var modifierClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;


  var containerE = document.querySelector("#" + containerId);
  if (!containerE) {
    throw new Error("Could not find the container with id " + containerId);
  }

  var containerElement = new _DomElement3.default(containerE);
  var notificationElement = new NotificationHeader();

  if (modifierClass) {
    notificationElement.addClass(modifierClass);
  }

  notificationElement.message = message;
  notificationElement.messageClickCallback = messageClickCallback;
  notificationElement.cancelCallback = cancelCallback;

  containerElement.appendChild(notificationElement);
  notificationElement._open();

  return notificationElement;
}

/**
 * A component for displaying notifications on the page-header.
 * @inner
 * @memberof Notification
 */

var NotificationHeader = function (_DomElement) {
  (0, _inherits3.default)(NotificationHeader, _DomElement);

  function NotificationHeader() {
    (0, _classCallCheck3.default)(this, NotificationHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NotificationHeader.__proto__ || (0, _getPrototypeOf2.default)(NotificationHeader)).call(this, "div"));

    _this._closeHandler = _this._handleClose.bind(_this);
    _this._clickHandler = _this._handleClick.bind(_this);

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the range modal component.
   * @private
   */


  (0, _createClass3.default)(NotificationHeader, [{
    key: "_initialize",
    value: function _initialize() {
      this.addClass(CLASS_NOTIFICATION);
      this.addClass(CLASS_OPEN);

      var notificationContent = new _DomElement3.default("div").addClass("notification__content");

      this.appendChild(notificationContent);

      this._notificationBody = new _DomElement3.default("div").addClass("notification__body");

      notificationContent.appendChild(this._notificationBody);

      this._closeButton = new _DomElement3.default("button").addClass(CLASS_BUTTON_CLOSE).addClass("notification-cancel").setAttribute("aria-label", "Close");

      var closeIcon = new _DomElement3.default("i").addClass("icon").addClass("icon-022-close").setAttribute("aria-hidden", true);

      this._closeButton.appendChild(closeIcon);
      notificationContent.appendChild(this._closeButton);

      this.element.addEventListener("click", this._clickHandler);
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      (0, _Utils.preventDefault)(event);

      var closeNotification = true;
      if (this._callback) {
        if (this._callback(this) === false) {
          closeNotification = false;
        }
      }

      if (closeNotification === true) {
        this.close();
      }
    }
  }, {
    key: "_handleClose",
    value: function _handleClose(event) {
      (0, _Utils.preventDefault)(event);
      event.stopPropagation();

      if (this._cancelCallback) {
        this._cancelCallback(this);
      }

      this.close();
    }
  }, {
    key: "_close",
    value: function _close(event) {
      if (event) {
        event.stopPropagation();
      }

      this.removeClass(CLASS_OPEN);
      this._closeButton.element.removeEventListener("click", this._closeHandler);

      var el = this.element;
      setTimeout(function () {
        // remove the element from the dom
        if (el && el.parentElement) {
          el.parentElement.removeChild(el);
        }
      }, 300);
    }
  }, {
    key: "_open",
    value: function _open() {
      this.addClass(CLASS_OPEN);

      this._closeButton.element.addEventListener("click", this._closeHandler);
      this.dispatchEvent("opened");
    }
  }, {
    key: "close",


    /**
     * Closes the notification.
     */
    value: function close() {
      this._close();
      this.dispatchEvent("closed");
    }
  }, {
    key: "messageClickCallback",
    set: function set(callback) {
      this._callback = callback;
    }

    /**
     * Sets the cancel callback function.
     * @param {function} - The callback function to call.
     */

  }, {
    key: "cancelCallback",
    set: function set(callback) {
      this._cancelCallback = callback;
    }

    /**
     * Sets the notification message.
     * @param {String} - The message to set.
     */

  }, {
    key: "message",
    set: function set(value) {
      this._notificationBody.setHtml(value);
    }
  }]);
  return NotificationHeader;
}(_DomElement3.default);

},{"../DomElement":4,"../Utils":7,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sign = require("babel-runtime/core-js/math/sign");

var _sign2 = _interopRequireDefault(_sign);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _gsap = require("gsap");

var _Utils = require("../Utils");

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_HEADER = ".progress-full__bar";
var CLASS_SECTIONS = ".progress-full__sections > span";
var CLASS_SECTION_ACTIVE = "section--active";

var CLASS_INDICATOR = "indicator";
var CLASS_INDICATOR_CURRENT = "indicator--current";
var CLASS_INDICATOR_COMPLETED = "indicator--completed";

/**
 * Full progress bar component
 */

var ProgressFull = function (_DomElement) {
  (0, _inherits3.default)(ProgressFull, _DomElement);

  /**
   * Creates and initializes the ProgressFull component.
   * @param {DomElement} - The root element of the ProgressFull component.
   */
  function ProgressFull(element) {
    (0, _classCallCheck3.default)(this, ProgressFull);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProgressFull.__proto__ || (0, _getPrototypeOf2.default)(ProgressFull)).call(this, element));

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the loader bar component.
   * @private
   */


  (0, _createClass3.default)(ProgressFull, [{
    key: "_initialize",
    value: function _initialize() {
      this._buttonClickHandler = this._handleButtonClick.bind(this);
      this._keydownHandler = this._handleKeydown.bind(this);

      this._headerElement = this.find(CLASS_HEADER);

      this._pages = this.element.querySelectorAll(CLASS_SECTIONS);

      this._minValue = 1;
      this._value = 1;
      this._total = this._pages.length;

      for (var index = 0; index < this._pages.length; index++) {
        if (this._pages[index].classList.contains(CLASS_SECTION_ACTIVE)) {
          this._value = index + 1;
        }
      }

      this._addIncicators();
      this._update(-1, this._value, false);

      // Apply the tab index
      var tabIndex = this.getAttribute("tabindex");
      if (tabIndex) {
        this.setAttribute("tabindex", "");
        this._headerElement.setAttribute("tabindex", tabIndex);
      }

      this._headerElement.element.addEventListener("click", this._buttonClickHandler);
      this._headerElement.element.addEventListener("keydown", this._keydownHandler);
    }
  }, {
    key: "_addIncicators",
    value: function _addIncicators() {
      for (var i = this._pages.length - 1; i >= 0; i--) {
        var indicatorElement = new _DomElement3.default("button").addClass(CLASS_INDICATOR).setAttribute("data-value", i + 1).setHtml((i + 1).toString());

        this._headerElement.prependChild(indicatorElement);
      }
    }
  }, {
    key: "_update",
    value: function _update(oldValue, newValue) {
      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var indicators = this._headerElement.element.childNodes;

      for (var index = 0; index < indicators.length; index++) {
        var indicatorElement = new _DomElement3.default(indicators[index]);

        if (index + 1 < this._value) {
          indicatorElement.removeClass(CLASS_INDICATOR_CURRENT).addClass(CLASS_INDICATOR_COMPLETED);
        }

        if (index + 1 === this._value) {
          indicatorElement.removeClass(CLASS_INDICATOR_COMPLETED).addClass(CLASS_INDICATOR_CURRENT);
        }

        if (index + 1 > this._value) {
          indicatorElement.removeClass(CLASS_INDICATOR_COMPLETED).removeClass(CLASS_INDICATOR_CURRENT);
        }
      }

      if (oldValue !== newValue) {
        var direction = (0, _sign2.default)(oldValue - newValue);

        if (oldValue > 0 && oldValue !== newValue) {
          var oldSection = new _DomElement3.default(this._pages[oldValue - 1]);

          if (animate) {
            _gsap.TweenLite.to(oldSection.element, 0.3, {
              left: 100 * direction,
              ease: _gsap.Power4.easeInOut,
              autoAlpha: 0,
              onComplete: function onComplete() {
                oldSection.removeClass(CLASS_SECTION_ACTIVE);
                oldSection.setAttribute("style", "");
              }
            });
          } else {
            oldSection.removeClass(CLASS_SECTION_ACTIVE);
            oldSection.setAttribute("style", "");
          }
        }

        var newSection = new _DomElement3.default(this._pages[newValue - 1]);

        if (animate) {
          _gsap.TweenLite.from(newSection.element, 0.3, {
            left: -100 * direction,
            ease: _gsap.Power4.easeInOut,
            autoAlpha: 0,
            onComplete: function onComplete() {
              newSection.addClass(CLASS_SECTION_ACTIVE);
              newSection.setAttribute("style", "");
            }
          });
        } else {
          newSection.addClass(CLASS_SECTION_ACTIVE);
          newSection.setAttribute("style", "");
        }
      }
    }
  }, {
    key: "_handleButtonClick",
    value: function _handleButtonClick(event) {
      var element = new _DomElement3.default(event.target);
      if (!element.hasClass(CLASS_INDICATOR)) {
        return;
      }

      var value = element.getAttribute("data-value");
      this.value = value;
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var evt = evt || window.event;
      var keycode = event.which || event.keyCode;

      if (keycode === Inputs.KEY_ARROW_RIGHT) {
        this.value++;

        (0, _Utils.preventDefault)(event);
        return;
      }

      if (keycode === Inputs.KEY_ARROW_LEFT) {
        this.value--;

        (0, _Utils.preventDefault)(event);
        return;
      }

      if (keycode >= Inputs.KEY_NR_0 && keycode <= Inputs.KEY_NR_9) {
        this.value = keycode - Inputs.KEY_NR_0;
        (0, _Utils.preventDefault)(event);
        return;
      }
    }

    /**
     * Gets the current progress value in the range of 1..total.
     */

  }, {
    key: "addEventListener",


    /**
     * Register event listener on this component.
     */
    value: function addEventListener(type, listener) {
      this.element.addEventListener(type, listener);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }

    /**
     * Sets the current progress.
     * @param {number} - The progress in the range of 1..total.
     */
    ,
    set: function set(val) {
      var oldValue = this._value;

      this._value = (0, _Utils.clamp)(val, this._minValue, this._total);
      this._update(oldValue, this._value, true);

      this.dispatchEvent("changed");
    }

    /**
     * Gets the total progress value.
     */

  }, {
    key: "total",
    get: function get() {
      return this._total;
    }
  }]);
  return ProgressFull;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".progress-full", function (e) {
    new ProgressFull(e);
  });
}

exports.default = ProgressFull;

},{"../DomElement":4,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/math/sign":34,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _gsap = require("gsap");

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_BAR = ".progress-light__bar";
var CLASS_PROGRESS = ".bar__progress";
var CLASS_PROGRESS_COMPLETED = "bar__progress--complete";
var CLASS_TICK = "bar__tick";
var CLASS_PAGE_CURRENT = ".detail__currentpage";
var CLASS_PAGE_TOTAL = ".detail__totalpage";

var CLASS_DISABLED = "arrow--disabled";
var CLASS_BUTTON_LEFT = ".arrow--left";
var CLASS_BUTTON_RIGHT = ".arrow--right";

/**
 * Light progress bar component
 */

var ProgressLight = function (_DomElement) {
  (0, _inherits3.default)(ProgressLight, _DomElement);

  /**
   * Creates and initializes the ProgressLight component.
   * @param {DomElement} - The root element of the ProgressLight component.
   */
  function ProgressLight(element) {
    (0, _classCallCheck3.default)(this, ProgressLight);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProgressLight.__proto__ || (0, _getPrototypeOf2.default)(ProgressLight)).call(this, element));

    _this._initialize();
    return _this;
  }

  /**
   * Initializes the loader bar component.
   * @private
   */


  (0, _createClass3.default)(ProgressLight, [{
    key: "_initialize",
    value: function _initialize() {

      this._buttonClickHandler = this._handleButtonClick.bind(this);
      this._animationCompletedHandler = this._handleAnimationCompleted.bind(this);

      this._barElement = this.find(CLASS_BAR);
      this._progressElement = this.find(CLASS_PROGRESS);
      this._pageCurrentElement = this.find(CLASS_PAGE_CURRENT);
      this._pageTotalElement = this.find(CLASS_PAGE_TOTAL);
      this._buttonLeft = this.find(CLASS_BUTTON_LEFT);
      this._buttonRight = this.find(CLASS_BUTTON_RIGHT);

      this._minValue = 1;
      this._total = Math.max(parseInt(this.getAttribute("total"), 10), this._minValue);
      this._value = (0, _Utils.clamp)(parseInt(this.getAttribute("value"), 10), this._minValue, this._total);

      this._layout();

      this._addTicks();
      this._update(false);

      this.enable();
    }
  }, {
    key: "_addTicks",
    value: function _addTicks() {
      for (var i = 1; i < this._total; i++) {
        var position = this._itemWidth * i;

        var tickElement = new _DomElement3.default("div").addClass(CLASS_TICK).setAttribute("style", "left: " + position + "%");

        this._barElement.prependChild(tickElement);
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._pageCurrentElement.setHtml(this._value.toString());
      this._pageTotalElement.setHtml(this._total.toString());

      var position = this._value * this._itemWidth;

      // Add additional width to the last element to make sure
      // the rounded border on the left is filled as well
      if (this._value === this._total) {
        position += 5;
      }

      if (this._value >= this._total) {
        this._buttonRight.addClass(CLASS_DISABLED);
      } else {
        this._buttonRight.removeClass(CLASS_DISABLED);
      }

      if (this._value <= this._minValue) {
        this._buttonLeft.addClass(CLASS_DISABLED);
      } else {
        this._buttonLeft.removeClass(CLASS_DISABLED);
      }

      if (animate) {
        _gsap.TweenLite.to(this._progressElement.element, 0.2, {
          width: position + "%",
          ease: _gsap.Power4.easeInOut,
          onComplete: this._animationCompletedHandler
        });
      } else {
        _gsap.TweenLite.set(this._progressElement.element, {
          width: position + "%",
          onComplete: this._animationCompletedHandler
        });
      }
    }
  }, {
    key: "_layout",
    value: function _layout() {
      this._itemWidth = Math.floor(100 / this._total);
    }
  }, {
    key: "_handleButtonClick",
    value: function _handleButtonClick(event) {
      if (event.target === this._buttonLeft.element) {
        this.value = this._value - 1;
      } else if (event.target === this._buttonRight.element) {
        this.value = this._value + 1;
      }
    }
  }, {
    key: "_handleAnimationCompleted",
    value: function _handleAnimationCompleted() {
      if (this._value === this._total) {
        this._progressElement.addClass(CLASS_PROGRESS_COMPLETED);
      } else {
        this._progressElement.removeClass(CLASS_PROGRESS_COMPLETED);
      }
    }

    /**
     * Gets the current progress value in the range of 1..total.
     */

  }, {
    key: "addEventListener",


    /**
     * Registers an event listener.
     */
    value: function addEventListener(type, listener) {
      this.element.addEventListener(type, listener);
    }

    /**
     * Enables the component.
     */

  }, {
    key: "enable",
    value: function enable() {
      this._buttonLeft.element.addEventListener("click", this._buttonClickHandler);
      this._buttonRight.element.addEventListener("click", this._buttonClickHandler);
    }

    /**
     * Disables the component.
     */

  }, {
    key: "disable",
    value: function disable() {
      this._buttonLeft.element.removeEventListener("click", this._buttonClickHandler);
      this._buttonRight.element.removeEventListener("click", this._buttonClickHandler);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }

    /**
     * Sets the current progress.
     * @param {number} - The progress in the range of 1..total.
     */
    ,
    set: function set(val) {
      this._value = (0, _Utils.clamp)(val, this._minValue, this._total);
      this._update(true);

      this.dispatchEvent("changed");
    }

    /**
     * Gets the total progress value.
     */

  }, {
    key: "total",
    get: function get() {
      return this._total;
    }

    /**
     * Sets the total progress value and updates the UI accordingly.
     * @param {number} - The total progress positive integer value.
     */
    ,
    set: function set(value) {
      if (this._total === value) {
        return;
      }

      this._total = Math.max(value, this._minValue);
      this._value = (0, _Utils.clamp)(this._value, this._minValue, this._total);

      // Clear the thicks
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.element.querySelectorAll("." + CLASS_TICK)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tick = _step.value;

          this._barElement.element.removeChild(tick);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._layout();
      this._addTicks();

      this._update(false);

      this.dispatchEvent("totalchanged");
    }
  }]);
  return ProgressLight;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".progress-light", function (e) {
    new ProgressLight(e);
  });
}

exports.default = ProgressLight;

},{"../DomElement":4,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _gsap = require("gsap");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _Inputs = require("../Inputs");

var Inputs = _interopRequireWildcard(_Inputs);

var _Utils = require("../Utils");

var _DomFunctions = require("../DomFunctions");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_SEARCH_INPUT = "input.search__field";
var QUERY_BTN_CLOSE = ".search__icon-close";

var QUERY_LIVE_SUGESTIONS = ".js-suggestions";
var QUERY_LIVE_FOOTER = ".js-footer";

var CLASS_ACTIVE = "is-active";
var CLASS_OPEN = "is-open";

var CLASS_SEARCH = "search";

var ANIMATION_SUGGESTIONS_DURATION = 0.3;
var ANIMATION_FOOTER_DURATION = 0.1;

/**
 * The search input component definition.
 */

var SearchInput = function (_DomElement) {
  (0, _inherits3.default)(SearchInput, _DomElement);

  function SearchInput(element) {
    (0, _classCallCheck3.default)(this, SearchInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchInput.__proto__ || (0, _getPrototypeOf2.default)(SearchInput)).call(this, element));

    _this._input = _this.element.querySelector(QUERY_SEARCH_INPUT);
    _this._form = _this.element.querySelector("form");
    _this._btnClose = _this.element.querySelector(QUERY_BTN_CLOSE);

    var liveSearch = (0, _DomFunctions.getAttributeReference)(_this.element, "data-live");
    if (liveSearch) {
      _this._liveSuggestions = liveSearch.querySelector(QUERY_LIVE_SUGESTIONS);
      _this._liveFooter = liveSearch.querySelector(QUERY_LIVE_FOOTER);
    }

    _this._focusHandler = _this._handleInputFocus.bind(_this);
    _this._blurHandler = _this._handleInputBlur.bind(_this);
    _this._closeHandler = _this.close.bind(_this);
    _this._windowClickHander = _this._handleWindowClick.bind(_this);
    _this._keydownHandler = _this._handleKeydown.bind(_this);
    _this._resizeHandler = _this._handleResize.bind(_this);

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(SearchInput, [{
    key: "_initialize",
    value: function _initialize() {
      this._input.addEventListener("focus", this._focusHandler);
      this._input.addEventListener("blur", this._blurHandler);

      if ((0, _Utils.msIEVersion)() > 0) {
        // This is a workaround for IE browsers where a focused
        // input's cursor bleeds trough even if hidden

        window.addEventListener("resize", this._resizeHandler);
        window.addEventListener("orientationchange", this._resizeHandler);
      }

      if (this._btnClose) {
        this._btnClose.addEventListener("click", this._closeHandler);
      }
    }
  }, {
    key: "_handleInputFocus",
    value: function _handleInputFocus() {
      this.addClass(CLASS_ACTIVE);
    }
  }, {
    key: "_handleInputBlur",
    value: function _handleInputBlur() {
      this.removeClass(CLASS_ACTIVE);
    }
  }, {
    key: "_handleWindowClick",
    value: function _handleWindowClick(event) {
      var target = event.target;

      if (!(0, _DomFunctions.parentWithClass)(target, CLASS_SEARCH)) {
        this.close();
        return false;
      }

      return true;
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      var evt = evt || window.event;
      var keycode = event.which || event.keyCode;

      if (keycode === Inputs.KEY_ESCAPE) {
        this.close();
        (0, _Utils.preventDefault)(event);
      }
    }
  }, {
    key: "_handleResize",
    value: function _handleResize() {
      var style = window.getComputedStyle(this.element, null);
      if (style.display === "none") {
        this._input.blur();
      }
    }
  }, {
    key: "_resetMainTimeline",
    value: function _resetMainTimeline() {
      var _this2 = this;

      if (this._tlMain) {
        this._tlMain.stop();
      }

      this._tlMain = new _gsap.TimelineLite({
        onComplete: function onComplete() {
          _this2._tlMain = undefined;
        }
      });
    }

    /**
     * Gets the search input text content.
     * @returns {String} The input text.
     */

  }, {
    key: "open",


    /**
     * Opens/activates the search input.
     */
    value: function open() {
      var _this3 = this;

      this.addClass(CLASS_OPEN);
      this._input.focus();

      setTimeout(function () {
        window.addEventListener("click", _this3._windowClickHander);
        window.addEventListener("touchend", _this3._windowClickHander);
        window.addEventListener("keydown", _this3._keydownHandler);
      }, 50);
    }

    /**
     * Closes/deactivates the search input.
     */

  }, {
    key: "close",
    value: function close() {
      this._form.reset();
      this.removeClass(CLASS_OPEN);

      this.closeLiveSearch();

      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);
      window.removeEventListener("keydown", this._keydownHandler);
    }

    /**
     * Opens the live search suggestions.
     */

  }, {
    key: "openLiveSearch",
    value: function openLiveSearch() {
      if (!this._liveSuggestions || (0, _DomFunctions.hasClass)(this._liveSuggestions, CLASS_OPEN) === true) {
        return;
      }

      this._resetMainTimeline();

      this._tlMain.set(this._liveSuggestions, {
        display: "block"
      });

      this._tlMain.to(this._liveSuggestions, ANIMATION_SUGGESTIONS_DURATION, {
        className: "+=" + CLASS_OPEN,
        clearProps: "all",
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      });

      if (this._liveFooter) {
        this._tlMain.set(this._liveFooter, {
          display: "block"
        }, 0);

        this._tlMain.to(this._liveFooter, ANIMATION_FOOTER_DURATION, {
          className: "+=" + CLASS_OPEN,
          clearProps: "height, display",
          ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
        }, "-=0.1");
      }
    }

    /**
     * Closes the live search suggestions.
     */

  }, {
    key: "closeLiveSearch",
    value: function closeLiveSearch() {
      if (!this._liveSuggestions || (0, _DomFunctions.hasClass)(this._liveSuggestions, CLASS_OPEN) === false) {
        return;
      }

      this._resetMainTimeline();

      this._tlMain.set(this._liveSuggestions, {
        display: "block"
      });

      if (this._liveFooter) {
        this._tlMain.set(this._liveFooter, {
          display: "block"
        }, 0);

        this._tlMain.to(this._liveFooter, ANIMATION_FOOTER_DURATION, {
          className: "-=" + CLASS_OPEN,
          clearProps: "height, display",
          ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
        });
      }

      this._tlMain.to(this._liveSuggestions, ANIMATION_SUGGESTIONS_DURATION, {
        className: "-=" + CLASS_OPEN,
        clearProps: "all",
        ease: [_gsap.Power1.easeIn, _gsap.Power4.easeOut]
      }, "-=0.1");
    }

    /**
     * Destroys the component and clears all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("click", this._windowClickHander);
      window.removeEventListener("touchend", this._windowClickHander);
      window.removeEventListener("keydown", this._keydownHandler);

      this._input.removeEventListener("focus", this._focusHandler);
      this._input.removeEventListener("blur", this._blurHandler);

      window.removeEventListener("resize", this._resizeHandler);
      window.removeEventListener("orientationchange", this._resizeHandler);

      if (this._btnClose) {
        this._btnClose.removeEventListener("click", this._closeHandler);
      }

      this._input = null;
      this._form = null;
      this._btnClose = null;

      this._focusHandler = null;
      this._blurHandler = null;
      this._closeHandler = null;
      this._windowClickHander = null;
      this._keydownHandler = null;

      this._liveSuggestions = null;
      this._liveFooter = null;
    }

    /**
     * Determines if the SearchInput is open/visible.
     * @return {Boolean} - True if open; otherwise false.
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.hasClass(CLASS_OPEN);
    }
  }, {
    key: "value",
    get: function get() {
      return this._input.value;
    }
  }]);
  return SearchInput;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)(".search.search__input", function (e) {
    new SearchInput(e);
  });
}

exports.default = SearchInput;

},{"../DomElement":4,"../DomFunctions":5,"../Inputs":6,"../Utils":7,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.init = init;

var _Utils = require("../Utils");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

var _DomFunctions = require("../DomFunctions");

var Dom = _interopRequireWildcard(_DomFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_HEADER = "thead th";

var CLASS_SORTED_ASCENDING = "js-ascending";
var CLASS_SORTED_DESCENDING = "js-descending";
var CLASS_ARROW = "arrow-icon";

/**
 * The Table component. Adds additional capabilities to standard HTML 5 tables.
 */

var Table = function (_DomElement) {
  (0, _inherits3.default)(Table, _DomElement);

  /**
   * Creates a new instance of the table component.
   */
  function Table(element) {
    (0, _classCallCheck3.default)(this, Table);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call(this, element));

    _this._headerClickHandler = _this._handleHeaderClick.bind(_this);

    _this._body = _this.element.querySelector("tbody");
    _this._rows = _this._body.getElementsByTagName("tr");

    _this._initialize();
    return _this;
  }

  (0, _createClass3.default)(Table, [{
    key: "_initialize",
    value: function _initialize() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.element.querySelectorAll(QUERY_HEADER)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var header = _step.value;

          if (header.getAttribute("data-type")) {
            header.addEventListener("click", this._headerClickHandler);

            var arrowElement = new _DomElement3.default("div").addClass(CLASS_ARROW).element;

            header.appendChild(arrowElement);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_handleHeaderClick",
    value: function _handleHeaderClick(e) {
      var th = e.target;
      this.sort(th);
    }

    /**
     * Sorts the table according to the specified table header element.
     * The column is sorted ascending by default if no direction is specified and no
     * existing sort order class is found in the markup.
     *
     * If the displayed data is not suitable for sorting `<td/>` elements can define a `data-value` attribute
     * which is then used for the data-source.
     *
     * @param {TableHeader} tableHeader The header element of the row to sort by.
     * @param {Number} direction The direction to sort, `1` for ascending, `-1` for descending order. This parameter is optional.
     * @param {function} equalityComparer The equiality comparer function to compare individual cell values.
     */

  }, {
    key: "sort",
    value: function sort(tableHeader) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var equalityComparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      if (!tableHeader || tableHeader.tagName !== "TH") {
        throw new Error("The parameter 'tableHeader' must be a valid column header node");
      }

      if (direction !== 1 && direction !== -1 && direction) {
        throw new Error("Parameter out of range, parameter 'direction' with value '" + direction + "' must be either -1, 1 or undefined");
      }

      var columnIndex = tableHeader.cellIndex;

      if (!equalityComparer) {
        var dataType = tableHeader.getAttribute("data-type");
        equalityComparer = this._getComparer(dataType);
      }

      if (columnIndex >= this.element.querySelectorAll(QUERY_HEADER).length) {
        throw new Error("Column out of range");
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.element.querySelectorAll(QUERY_HEADER)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var header = _step2.value;

          if (header !== tableHeader) {
            Dom.removeClass(header, CLASS_SORTED_ASCENDING);
            Dom.removeClass(header, CLASS_SORTED_DESCENDING);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (Dom.hasClass(tableHeader, CLASS_SORTED_ASCENDING)) {
        Dom.removeClass(tableHeader, CLASS_SORTED_ASCENDING);
        Dom.addClass(tableHeader, CLASS_SORTED_DESCENDING);

        direction = direction || -1;
      } else {
        Dom.removeClass(tableHeader, CLASS_SORTED_DESCENDING);
        Dom.addClass(tableHeader, CLASS_SORTED_ASCENDING);
        direction = direction || 1;
      }

      this._quicksort(columnIndex, 0, this._rows.length - 1, direction, equalityComparer);
    }
  }, {
    key: "_getCell",
    value: function _getCell(column, row) {
      return this._rows[row].cells[column];
    }
  }, {
    key: "_getRow",
    value: function _getRow(row) {
      return this._rows[row];
    }
  }, {
    key: "_getComparer",
    value: function _getComparer(dataType) {
      switch (dataType) {
        case "number":
          {
            // parse the string as a number
            return function (a, b) {
              return parseFloat(a) - parseFloat(b);
            };
          }
        default:
          {
            // compare strings
            return function (a, b) {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }

              return 0;
            };
          }
      }
    }
  }, {
    key: "_quicksort",
    value: function _quicksort(column, left, right) {
      var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var equalityComparer = arguments[4];

      if (right - left > 1) {

        var partition = this._partition(column, left, right, direction, equalityComparer);

        if (left < partition - 1) {
          this._quicksort(column, left, partition - 1, direction, equalityComparer);
        }

        if (partition < right) {
          this._quicksort(column, partition, right, direction, equalityComparer);
        }
      }
    }
  }, {
    key: "_partition",
    value: function _partition(column, left, right, direction, equalityComparer) {
      var pivot = this._getCell(column, Math.floor((right + left) / 2));
      var i = left;
      var j = right;

      while (i <= j) {
        while (this._equals(this._getCell(column, i), pivot, equalityComparer) * direction < 0) {
          i++;
        }

        while (this._equals(this._getCell(column, j), pivot, equalityComparer) * direction > 0) {
          j--;
        }

        if (i <= j) {
          this._swap(i, j);
          i++;
          j--;
        }
      }

      return i;
    }
  }, {
    key: "_equals",
    value: function _equals(a, b, equalityComparer) {
      var dataA = a.getAttribute("data-value");
      var dataB = b.getAttribute("data-value");

      dataA = dataA || a.textContent || a.innerText;
      dataB = dataB || b.textContent || b.innerText;

      return equalityComparer(dataA, dataB);
    }
  }, {
    key: "_swap",
    value: function _swap(i, j) {
      var tmpNode = this._body.replaceChild(this._getRow(i), this._getRow(j));
      var referenceRow = this._getRow(i);

      if (!referenceRow) {
        this._body.appendChild(tmpNode);
      } else {
        this._body.insertBefore(tmpNode, referenceRow);
      }
    }

    /**
     * Destroys the component and clears all references.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(this.element.querySelectorAll(QUERY_HEADER)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var header = _step3.value;

          header.removeEventListener("click", this._headerClickHandler);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this._headerClickHandler = null;
      this._body = null;
      this._rows = null;
    }
  }]);
  return Table;
}(_DomElement3.default);

function init() {
  (0, _Utils.searchAndInitialize)("table", function (e) {
    new Table(e);
  });
}

exports.default = Table;

},{"../DomElement":4,"../DomFunctions":5,"../Utils":7,"babel-runtime/core-js/get-iterator":33,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _gsap = require("gsap");

var _DomElement2 = require("../DomElement");

var _DomElement3 = _interopRequireDefault(_DomElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ITEMS = ".toolbar__item";
var CLASS_SHOW = "item--show";

var ANIMATION_START_DELAY = 0.1;
var ANIMATION_OFFSET = 0.05;

/**
 * Toolbar component. Use this component to show and hide the
 * individual toolbar items.
 */

var Toolbar = function (_DomElement) {
  (0, _inherits3.default)(Toolbar, _DomElement);

  function Toolbar() {
    (0, _classCallCheck3.default)(this, Toolbar);
    return (0, _possibleConstructorReturn3.default)(this, (Toolbar.__proto__ || (0, _getPrototypeOf2.default)(Toolbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toolbar, [{
    key: "show",


    /**
     * Makes the toolbar items visible.
     */
    value: function show() {
      var delay = ANIMATION_START_DELAY;
      var items = this.element.querySelectorAll(CLASS_ITEMS);

      var timeline = new _gsap.TimelineLite();
      for (var index = 0; index < items.length; index++) {
        timeline.to(items[index], 0, { className: "+=" + CLASS_SHOW }, delay);
        delay += ANIMATION_OFFSET;
      }
    }

    /**
     * Hides the toolbar items.
     */

  }, {
    key: "hide",
    value: function hide() {
      var delay = ANIMATION_START_DELAY;
      var items = this.element.querySelectorAll(CLASS_ITEMS);

      var timeline = new _gsap.TimelineLite();
      for (var index = items.length - 1; index >= 0; index--) {
        timeline.to(items[index], 0, { className: "-=" + CLASS_SHOW }, delay);
        delay += ANIMATION_OFFSET;
      }
    }

    /**
     * Toggles the toolbar items visibility.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.element.querySelectorAll("." + CLASS_SHOW).length === 0) {
        this.show();
      } else {
        this.hide();
      }
    }
  }]);
  return Toolbar;
}(_DomElement3.default);

exports.default = Toolbar;

},{"../DomElement":4,"babel-runtime/core-js/object/get-prototype-of":40,"babel-runtime/helpers/classCallCheck":44,"babel-runtime/helpers/createClass":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/possibleConstructorReturn":47,"gsap":144}],32:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":50}],33:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":51}],34:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/math/sign"), __esModule: true };
},{"core-js/library/fn/math/sign":52}],35:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/math/trunc"), __esModule: true };
},{"core-js/library/fn/math/trunc":53}],36:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-nan"), __esModule: true };
},{"core-js/library/fn/number/is-nan":54}],37:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/max-safe-integer"), __esModule: true };
},{"core-js/library/fn/number/max-safe-integer":55}],38:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":56}],39:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":57}],40:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":58}],41:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":59}],42:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":60}],43:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":61}],44:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],45:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":39}],46:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":38,"../core-js/object/set-prototype-of":41,"../helpers/typeof":49}],47:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":49}],48:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":32}],49:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":42,"../core-js/symbol/iterator":43}],50:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":68,"../../modules/es6.array.from":128,"../../modules/es6.string.iterator":139}],51:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":127,"../modules/es6.string.iterator":139,"../modules/web.dom.iterable":143}],52:[function(require,module,exports){
require('../../modules/es6.math.sign');
module.exports = require('../../modules/_core').Math.sign;
},{"../../modules/_core":68,"../../modules/es6.math.sign":130}],53:[function(require,module,exports){
require('../../modules/es6.math.trunc');
module.exports = require('../../modules/_core').Math.trunc;
},{"../../modules/_core":68,"../../modules/es6.math.trunc":131}],54:[function(require,module,exports){
require('../../modules/es6.number.is-nan');
module.exports = require('../../modules/_core').Number.isNaN;
},{"../../modules/_core":68,"../../modules/es6.number.is-nan":132}],55:[function(require,module,exports){
require('../../modules/es6.number.max-safe-integer');
module.exports = 0x1fffffffffffff;
},{"../../modules/es6.number.max-safe-integer":133}],56:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":68,"../../modules/es6.object.create":134}],57:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":68,"../../modules/es6.object.define-property":135}],58:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":68,"../../modules/es6.object.get-prototype-of":136}],59:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":68,"../../modules/es6.object.set-prototype-of":137}],60:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":68,"../../modules/es6.object.to-string":138,"../../modules/es6.symbol":140,"../../modules/es7.symbol.async-iterator":141,"../../modules/es7.symbol.observable":142}],61:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":124,"../../modules/es6.string.iterator":139,"../../modules/web.dom.iterable":143}],62:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],63:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],64:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":86}],65:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":116,"./_to-iobject":118,"./_to-length":119}],66:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":67,"./_wks":125}],67:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],68:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],69:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":98,"./_property-desc":109}],70:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":62}],71:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],72:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":77}],73:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":78,"./_is-object":86}],74:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],75:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":103,"./_object-keys":106,"./_object-pie":107}],76:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":68,"./_ctx":70,"./_global":78,"./_hide":80}],77:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],78:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],79:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],80:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":72,"./_object-dp":98,"./_property-desc":109}],81:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":78}],82:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":72,"./_dom-create":73,"./_fails":77}],83:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":67}],84:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":92,"./_wks":125}],85:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":67}],86:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],87:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":64}],88:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":80,"./_object-create":97,"./_property-desc":109,"./_set-to-string-tag":112,"./_wks":125}],89:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":76,"./_has":79,"./_hide":80,"./_iter-create":88,"./_iterators":92,"./_library":94,"./_object-gpo":104,"./_redefine":110,"./_set-to-string-tag":112,"./_wks":125}],90:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":125}],91:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],92:[function(require,module,exports){
module.exports = {};
},{}],93:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":106,"./_to-iobject":118}],94:[function(require,module,exports){
module.exports = true;
},{}],95:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],96:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":77,"./_has":79,"./_is-object":86,"./_object-dp":98,"./_uid":122}],97:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":64,"./_dom-create":73,"./_enum-bug-keys":74,"./_html":81,"./_object-dps":99,"./_shared-key":113}],98:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":64,"./_descriptors":72,"./_ie8-dom-define":82,"./_to-primitive":121}],99:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":64,"./_descriptors":72,"./_object-dp":98,"./_object-keys":106}],100:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":72,"./_has":79,"./_ie8-dom-define":82,"./_object-pie":107,"./_property-desc":109,"./_to-iobject":118,"./_to-primitive":121}],101:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":102,"./_to-iobject":118}],102:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":74,"./_object-keys-internal":105}],103:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],104:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":79,"./_shared-key":113,"./_to-object":120}],105:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":65,"./_has":79,"./_shared-key":113,"./_to-iobject":118}],106:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":74,"./_object-keys-internal":105}],107:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],108:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":68,"./_export":76,"./_fails":77}],109:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],110:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":80}],111:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":64,"./_ctx":70,"./_is-object":86,"./_object-gopd":100}],112:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":79,"./_object-dp":98,"./_wks":125}],113:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":114,"./_uid":122}],114:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":78}],115:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":71,"./_to-integer":117}],116:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":117}],117:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],118:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":71,"./_iobject":83}],119:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":117}],120:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":71}],121:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":86}],122:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],123:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":68,"./_global":78,"./_library":94,"./_object-dp":98,"./_wks-ext":124}],124:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":125}],125:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":78,"./_shared":114,"./_uid":122}],126:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":66,"./_core":68,"./_iterators":92,"./_wks":125}],127:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":64,"./_core":68,"./core.get-iterator-method":126}],128:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":69,"./_ctx":70,"./_export":76,"./_is-array-iter":84,"./_iter-call":87,"./_iter-detect":90,"./_to-length":119,"./_to-object":120,"./core.get-iterator-method":126}],129:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":63,"./_iter-define":89,"./_iter-step":91,"./_iterators":92,"./_to-iobject":118}],130:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', {sign: require('./_math-sign')});
},{"./_export":76,"./_math-sign":95}],131:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
},{"./_export":76}],132:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
},{"./_export":76}],133:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"./_export":76}],134:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":76,"./_object-create":97}],135:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":72,"./_export":76,"./_object-dp":98}],136:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":104,"./_object-sap":108,"./_to-object":120}],137:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":76,"./_set-proto":111}],138:[function(require,module,exports){

},{}],139:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":89,"./_string-at":115}],140:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":64,"./_descriptors":72,"./_enum-keys":75,"./_export":76,"./_fails":77,"./_global":78,"./_has":79,"./_hide":80,"./_is-array":85,"./_keyof":93,"./_library":94,"./_meta":96,"./_object-create":97,"./_object-dp":98,"./_object-gopd":100,"./_object-gopn":102,"./_object-gopn-ext":101,"./_object-gops":103,"./_object-keys":106,"./_object-pie":107,"./_property-desc":109,"./_redefine":110,"./_set-to-string-tag":112,"./_shared":114,"./_to-iobject":118,"./_to-primitive":121,"./_uid":122,"./_wks":125,"./_wks-define":123,"./_wks-ext":124}],141:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":123}],142:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":123}],143:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":78,"./_hide":80,"./_iterators":92,"./_wks":125,"./es6.array.iterator":129}],144:[function(require,module,exports){
(function (global){
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

		var _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
				}
				delete vars.cycle;
			},
			TweenMax = function(target, duration, vars) {
				TweenLite.call(this, target, duration, vars);
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._dirty = true; //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = TweenLite._internals,
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
			_blankArray = [];

		TweenMax.version = "1.19.1";
		p.constructor = TweenMax;
		p.kill()._gc = false;
		TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
		TweenMax.getTweensOf = TweenLite.getTweensOf;
		TweenMax.lagSmoothing = TweenLite.lagSmoothing;
		TweenMax.ticker = TweenLite.ticker;
		TweenMax.render = TweenLite.render;

		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return TweenLite.prototype.invalidate.call(this);
		};
		
		p.updateTo = function(vars, resetDuration) {
			var curRatio = this.ratio,
				immediate = this.vars.immediateRender || vars.immediateRender,
				p;
			if (resetDuration && this._startTime < this._timeline._time) {
				this._startTime = this._timeline._time;
				this._uncache(false);
				if (this._gc) {
					this._enabled(true, false);
				} else {
					this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			for (p in vars) {
				this.vars[p] = vars[p];
			}
			if (this._initted || immediate) {
				if (resetDuration) {
					this._initted = false;
					if (immediate) {
						this.render(0, true, true);
					}
				} else {
					if (this._gc) {
						this._enabled(true, false);
					}
					if (this._notifyPluginsOfEnabled && this._firstPT) {
						TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
					}
					if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
						var prevTime = this._totalTime;
						this.render(0, true, false);
						this._initted = false;
						this.render(prevTime, true, false);
					} else {
						this._initted = false;
						this._init();
						if (this._time > 0 || immediate) {
							var inv = 1 / (1 - curRatio),
								pt = this._firstPT, endValue;
							while (pt) {
								endValue = pt.s + pt.c;
								pt.c *= inv;
								pt.s = endValue - pt.c;
								pt = pt._next;
							}
						}
					}
				}
			}
			return this;
		};
				
		p.render = function(time, suppressEvents, force) {
			if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
				this.invalidate();
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevTotalTime = this._totalTime, 
				prevCycle = this._cycle,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime;
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = totalDur;
				this._cycle = this._repeat;
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				} else {
					this._time = duration;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				}
				if (!this._reversed) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}
				
			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = this._cycle = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;
				if (this._repeat !== 0) {
					cycleDuration = duration + this._repeatDelay;
					this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
					if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
						this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
					}
					this._time = this._totalTime - (this._cycle * cycleDuration);
					if (this._yoyo) if ((this._cycle & 1) !== 0) {
						this._time = duration - this._time;
					}
					if (this._time > duration) {
						this._time = duration;
					} else if (this._time < 0) {
						this._time = 0;
					}
				}

				if (this._easeType) {
					r = this._time / duration;
					type = this._easeType;
					pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (this._time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(this._time / duration);
				}
				
			}
				
			if (prevTime === this._time && !force && prevCycle === this._cycle) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._callback("onUpdate");
				}
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
					this._time = prevTime;
					this._totalTime = prevTotalTime;
					this._rawPrevTime = prevRawPrevTime;
					this._cycle = prevCycle;
					TweenLiteInternals.lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) {
				this._lazy = false;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTotalTime === 0) {
				if (this._initted === 2 && time > 0) {
					//this.invalidate();
					this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
				}
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}
			
			if (this._onUpdate) {
				if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
					this._callback("onUpdate");
				}
			}
			if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
				this._callback("onRepeat");
			}
			if (callback) if (!this._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};
		
//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------
		
		TweenMax.to = function(target, duration, vars) {
			return new TweenMax(target, duration, vars);
		};
		
		TweenMax.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenMax(target, duration, vars);
		};
		
		TweenMax.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenMax(target, duration, toVars);
		};
		
		TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			stagger = stagger || 0;
			var delay = 0,
				a = [],
				finalComplete = function() {
					if (vars.onComplete) {
						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
					}
					onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
				},
				cycle = vars.cycle,
				fromCycle = (vars.startAt && vars.startAt.cycle),
				l, copy, i, p;
			if (!_isArray(targets)) {
				if (typeof(targets) === "string") {
					targets = TweenLite.selector(targets) || targets;
				}
				if (_isSelector(targets)) {
					targets = _slice(targets);
				}
			}
			targets = targets || [];
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			l = targets.length - 1;
			for (i = 0; i <= l; i++) {
				copy = {};
				for (p in vars) {
					copy[p] = vars[p];
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				if (fromCycle) {
					fromCycle = copy.startAt = {};
					for (p in vars.startAt) {
						fromCycle[p] = vars.startAt[p];
					}
					_applyCycle(copy.startAt, targets, i);
				}
				copy.delay = delay + (copy.delay || 0);
				if (i === l && onCompleteAll) {
					copy.onComplete = finalComplete;
				}
				a[i] = new TweenMax(targets[i], duration, copy);
				delay += stagger;
			}
			return a;
		};
		
		TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};
		
		TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};
				
		TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, useFrames:useFrames, overwrite:0});
		};
		
		TweenMax.set = function(target, vars) {
			return new TweenMax(target, 0, vars);
		};
		
		TweenMax.isTweening = function(target) {
			return (TweenLite.getTweensOf(target, true).length > 0);
		};
		
		var _getChildrenOf = function(timeline, includeTimelines) {
				var a = [],
					cnt = 0,
					tween = timeline._first;
				while (tween) {
					if (tween instanceof TweenLite) {
						a[cnt++] = tween;
					} else {
						if (includeTimelines) {
							a[cnt++] = tween;
						}
						a = a.concat(_getChildrenOf(tween, includeTimelines));
						cnt = a.length;
					}
					tween = tween._next;
				}
				return a;
			}, 
			getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
				return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat( _getChildrenOf(Animation._rootFramesTimeline, includeTimelines) );
			};
		
		TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
			if (tweens == null) {
				tweens = true;
			}
			if (delayedCalls == null) {
				delayedCalls = true;
			}
			var a = getAllTweens((timelines != false)),
				l = a.length,
				allTrue = (tweens && delayedCalls && timelines),
				isDC, tween, i;
			for (i = 0; i < l; i++) {
				tween = a[i];
				if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					if (complete) {
						tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
					} else {
						tween._enabled(false, false);
					}
				}
			}
		};
		
		TweenMax.killChildTweensOf = function(parent, complete) {
			if (parent == null) {
				return;
			}
			var tl = TweenLiteInternals.tweenLookup,
				a, curParent, p, i, l;
			if (typeof(parent) === "string") {
				parent = TweenLite.selector(parent) || parent;
			}
			if (_isSelector(parent)) {
				parent = _slice(parent);
			}
			if (_isArray(parent)) {
				i = parent.length;
				while (--i > -1) {
					TweenMax.killChildTweensOf(parent[i], complete);
				}
				return;
			}
			a = [];
			for (p in tl) {
				curParent = tl[p].target.parentNode;
				while (curParent) {
					if (curParent === parent) {
						a = a.concat(tl[p].tweens);
					}
					curParent = curParent.parentNode;
				}
			}
			l = a.length;
			for (i = 0; i < l; i++) {
				if (complete) {
					a[i].totalTime(a[i].totalDuration());
				}
				a[i]._enabled(false, false);
			}
		};

		var _changePause = function(pause, tweens, delayedCalls, timelines) {
			tweens = (tweens !== false);
			delayedCalls = (delayedCalls !== false);
			timelines = (timelines !== false);
			var a = getAllTweens(timelines),
				allTrue = (tweens && delayedCalls && timelines),
				i = a.length,
				isDC, tween;
			while (--i > -1) {
				tween = a[i];
				if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					tween.paused(pause);
				}
			}
		};
		
		TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
			_changePause(true, tweens, delayedCalls, timelines);
		};
		
		TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
			_changePause(false, tweens, delayedCalls, timelines);
		};

		TweenMax.globalTimeScale = function(value) {
			var tl = Animation._rootTimeline,
				t = TweenLite.ticker.time;
			if (!arguments.length) {
				return tl._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl = Animation._rootFramesTimeline;
			t = TweenLite.ticker.frame;
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl._timeScale = Animation._rootTimeline._timeScale = value;
			return value;
		};
		
	
//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------
		
		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};
		
		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
		};
		
		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};

		p.duration = function(value) {
			if (!arguments.length) {
				return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
			}
			return Animation.prototype.duration.call(this, value);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					//instead of Infinity, we use 999999999999 so that we can accommodate reverses
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
		};
		
		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};
		
		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};
		
		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};
		
		
		return TweenMax;
		
	}, true);








/*
 * ----------------------------------------------------------------
 * TimelineLite
 * ----------------------------------------------------------------
 */
	_gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

		var TimelineLite = function(vars) {
				SimpleTimeline.call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
					val, p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = TweenLite._internals,
			_internals = TimelineLite._internals = {},
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _gsScope._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
				}
				delete vars.cycle;
			},
			_pauseCallback = _internals.pauseCallback = function() {},
			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			p = TimelineLite.prototype = new SimpleTimeline();

		TimelineLite.version = "1.19.1";
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				cycle = vars.cycle,
				copy, i;
			if (typeof(targets) === "string") {
				targets = TweenLite.selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice(targets);
			}
			stagger = stagger || 0;
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (copy.startAt) {
					copy.startAt = _copy(copy.startAt);
					if (copy.startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				tl.to(targets[i], duration, copy, i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = (vars.immediateRender != false);
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = (position === this._time && !this._paused);
			}
			return this.add( new TweenLite(target, 0, vars), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
					tl.add(tween, tween._startTime - tween._delay);
				}
				tween = next;
			}
			root.add(tl, 0);
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof Animation)) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						this.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof(value) === "string") {
					return this.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = TweenLite.delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			SimpleTimeline.prototype.add.call(this, value, position);

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function(value) {
			if (value instanceof Animation) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > this.duration()) {
				this._time = this._duration;
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof Animation && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : this.duration();
			} else if (timeOrLabel == null) {
				timeOrLabel = this.duration();
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevPaused = this._paused,
				tween, isComplete, next, callback, internalForce, pauseTween, curTime;
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					if (time >= prevTime) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof TweenLite) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var disabled = this._gc,
				a = [],
				cnt = 0,
				tweens, i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = TweenLite.getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function() {
			return this._recent;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return Animation.prototype.invalidate.call(this);;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = Animation.prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						tween = this._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this.add(tween, tween._startTime - tween._delay);
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
		};

		p.paused = function(value) {
			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first,
					time = this._time;
				while (tween) {
					if (tween._startTime === time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return Animation.prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === Animation._rootFramesTimeline);
		};

		p.rawTime = function(wrapRepeats) {
			return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);








	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * TimelineMax
 * ----------------------------------------------------------------
 */
	_gsScope._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function(TimelineLite, TweenLite, Ease) {

		var TimelineMax = function(vars) {
				TimelineLite.call(this, vars);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true);
				this._dirty = true;
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = TweenLite._internals,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _gsScope._gsDefine.globals,
			_easeNone = new Ease(null, null, 1, 0),
			p = TimelineMax.prototype = new TimelineLite();

		p.constructor = TimelineMax;
		p.kill()._gc = false;
		TimelineMax.version = "1.19.1";

		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return TimelineLite.prototype.invalidate.call(this);
		};

		p.addCallback = function(callback, position, params, scope) {
			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.removeCallback = function(callback, position) {
			if (callback) {
				if (position == null) {
					this._kill(null, callback);
				} else {
					var a = this.getTweensOf(callback, false),
						i = a.length,
						time = this._parseTimeOrLabel(position);
					while (--i > -1) {
						if (a[i]._startTime === time) {
							a[i]._enabled(false, false);
						}
					}
				}
			}
			return this;
		};

		p.removePause = function(position) {
			return this.removeCallback(TimelineLite._internals.pauseCallback, position);
		};

		p.tweenTo = function(position, vars) {
			vars = vars || {};
			var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false},
				Engine = (vars.repeat && _globals.TweenMax) || TweenLite,
				duration, p, t;
			for (p in vars) {
				copy[p] = vars[p];
			}
			copy.time = this._parseTimeOrLabel(position);
			duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
			t = new Engine(this, duration, copy);
			copy.onStart = function() {
				t.target.paused(true);
				if (t.vars.time !== t.target.time() && duration === t.duration()) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
					t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale );
				}
				if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
					vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
				}
			};
			return t;
		};

		p.tweenFromTo = function(fromPosition, toPosition, vars) {
			vars = vars || {};
			fromPosition = this._parseTimeOrLabel(fromPosition);
			vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], callbackScope:this};
			vars.immediateRender = (vars.immediateRender !== false);
			var t = this.tweenTo(toPosition, vars);
			return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				dur = this._duration,
				prevTime = this._time,
				prevTotalTime = this._totalTime,
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevRawPrevTime = this._rawPrevTime,
				prevPaused = this._paused,
				prevCycle = this._cycle,
				tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime;
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				if (!this._locked) {
					this._totalTime = totalDur;
					this._cycle = this._repeat;
				}
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
						internalForce = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = time = 0;
				} else {
					this._time = dur;
					time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				if (!this._locked) {
					this._totalTime = this._cycle = 0;
				}
				this._time = 0;
				if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) {
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (prevRawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {
				if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
					internalForce = true;
				}
				this._time = this._rawPrevTime = time;
				if (!this._locked) {
					this._totalTime = time;
					if (this._repeat !== 0) {
						cycleDuration = dur + this._repeatDelay;
						this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						this._time = this._totalTime - (this._cycle * cycleDuration);
						if (this._yoyo) if ((this._cycle & 1) !== 0) {
							this._time = dur - this._time;
						}
						if (this._time > dur) {
							this._time = dur;
							time = dur + 0.0001; //to avoid occasional floating point rounding error
						} else if (this._time < 0) {
							this._time = time = 0;
						} else {
							time = this._time;
						}
					}
				}

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents && time < dur) {
					time = this._time;
					if (time >= prevTime || (this._repeat && prevCycle !== this._cycle)) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

			}

			if (this._cycle !== prevCycle) if (!this._locked) {
				/*
				make sure children at the end/beginning of the timeline are rendered properly. If, for example,
				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
				would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
				*/
				var backwards = (this._yoyo && (prevCycle & 1) !== 0),
					wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
					recTotalTime = this._totalTime,
					recCycle = this._cycle,
					recRawPrevTime = this._rawPrevTime,
					recTime = this._time;

				this._totalTime = prevCycle * dur;
				if (this._cycle < prevCycle) {
					backwards = !backwards;
				} else {
					this._totalTime += dur;
				}
				this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

				this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
				this._cycle = prevCycle;
				this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
				prevTime = (backwards) ? 0 : dur;
				this.render(prevTime, suppressEvents, (dur === 0));
				if (!suppressEvents) if (!this._gc) {
					if (this.vars.onRepeat) {
						this._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
						this._locked = false;
						this._callback("onRepeat");
					}
				}
				if (prevTime !== this._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
					return;
				}
				if (wrap) {
					this._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
					this._locked = true;
					prevTime = (backwards) ? dur + 0.0001 : -0.0001;
					this.render(prevTime, true, false);
				}
				this._locked = false;
				if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
					return;
				}
				this._time = recTime;
				this._totalTime = recTotalTime;
				this._cycle = recCycle;
				this._rawPrevTime = recRawPrevTime;
			}

			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._callback("onUpdate");
				}
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}
			if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p.getActive = function(nested, tweens, timelines) {
			if (nested == null) {
				nested = true;
			}
			if (tweens == null) {
				tweens = true;
			}
			if (timelines == null) {
				timelines = false;
			}
			var a = [],
				all = this.getChildren(nested, tweens, timelines),
				cnt = 0,
				l = all.length,
				i, tween;
			for (i = 0; i < l; i++) {
				tween = all[i];
				if (tween.isActive()) {
					a[cnt++] = tween;
				}
			}
			return a;
		};


		p.getLabelAfter = function(time) {
			if (!time) if (time !== 0) { //faster than isNan()
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				l = labels.length,
				i;
			for (i = 0; i < l; i++) {
				if (labels[i].time > time) {
					return labels[i].name;
				}
			}
			return null;
		};

		p.getLabelBefore = function(time) {
			if (time == null) {
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				i = labels.length;
			while (--i > -1) {
				if (labels[i].time < time) {
					return labels[i].name;
				}
			}
			return null;
		};

		p.getLabelsArray = function() {
			var a = [],
				cnt = 0,
				p;
			for (p in this._labels) {
				a[cnt++] = {time:this._labels[p], name:p};
			}
			a.sort(function(a,b) {
				return a.time - b.time;
			});
			return a;
		};

		p.invalidate = function() {
			this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
			return TimelineLite.prototype.invalidate.call(this);
		};


//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};

		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					TimelineLite.prototype.totalDuration.call(this); //just forces refresh
					//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
				}
				return this._totalDuration;
			}
			return (this._repeat === -1 || !value) ? this : this.timeScale( this.totalDuration() / value );
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};

		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};

		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};

		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};

		p.currentLabel = function(value) {
			if (!arguments.length) {
				return this.getLabelBefore(this._time + 0.00000001);
			}
			return this.seek(value, true);
		};

		return TimelineMax;

	}, true);
	




	
	
	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * BezierPlugin
 * ----------------------------------------------------------------
 */
	(function() {

		var _RAD2DEG = 180 / Math.PI,
			_r1 = [],
			_r2 = [],
			_r3 = [],
			_corProps = {},
			_globals = _gsScope._gsDefine.globals,
			Segment = function(a, b, c, d) {
				if (c === d) { //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
					c = d - (d - b) / 1000000;
				}
				if (a === b) { //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
					b = a + (c - a) / 1000000;
				}
				this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
				this.da = d - a;
				this.ca = c - a;
				this.ba = b - a;
			},
			_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			cubicToQuadratic = function(a, b, c, d) {
				var q1 = {a:a},
					q2 = {},
					q3 = {},
					q4 = {c:d},
					mab = (a + b) / 2,
					mbc = (b + c) / 2,
					mcd = (c + d) / 2,
					mabc = (mab + mbc) / 2,
					mbcd = (mbc + mcd) / 2,
					m8 = (mbcd - mabc) / 8;
				q1.b = mab + (a - mab) / 4;
				q2.b = mabc + m8;
				q1.c = q2.a = (q1.b + q2.b) / 2;
				q2.c = q3.a = (mabc + mbcd) / 2;
				q3.b = mbcd - m8;
				q4.b = mcd + (d - mcd) / 4;
				q3.c = q4.a = (q3.b + q4.b) / 2;
				return [q1, q2, q3, q4];
			},
			_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
				var l = a.length - 1,
					ii = 0,
					cp1 = a[0].a,
					i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
				for (i = 0; i < l; i++) {
					seg = a[ii];
					p1 = seg.a;
					p2 = seg.d;
					p3 = a[ii+1].d;

					if (correlate) {
						r1 = _r1[i];
						r2 = _r2[i];
						tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
						mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
					} else {
						m1 = p2 - (p2 - p1) * curviness * 0.5;
						m2 = p2 + (p3 - p2) * curviness * 0.5;
						mm = p2 - (m1 + m2) / 2;
					}
					m1 += mm;
					m2 += mm;

					seg.c = cp2 = m1;
					if (i !== 0) {
						seg.b = cp1;
					} else {
						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
					}

					seg.da = p2 - p1;
					seg.ca = cp2 - p1;
					seg.ba = cp1 - p1;

					if (quad) {
						qb = cubicToQuadratic(p1, cp1, cp2, p2);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
						ii += 4;
					} else {
						ii++;
					}

					cp1 = m2;
				}
				seg = a[ii];
				seg.b = cp1;
				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
				seg.da = seg.d - seg.a;
				seg.ca = seg.c - seg.a;
				seg.ba = cp1 - seg.a;
				if (quad) {
					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
				}
			},
			_parseAnchors = function(values, p, correlate, prepend) {
				var a = [],
					l, i, p1, p2, p3, tmp;
				if (prepend) {
					values = [prepend].concat(values);
					i = values.length;
					while (--i > -1) {
						if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
						}
					}
				}
				l = values.length - 2;
				if (l < 0) {
					a[0] = new Segment(values[0][p], 0, 0, values[(l < -1) ? 0 : 1][p]);
					return a;
				}
				for (i = 0; i < l; i++) {
					p1 = values[i][p];
					p2 = values[i+1][p];
					a[i] = new Segment(p1, 0, 0, p2);
					if (correlate) {
						p3 = values[i+2][p];
						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
					}
				}
				a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
				return a;
			},
			bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
				var obj = {},
					props = [],
					first = prepend || values[0],
					i, p, a, j, r, l, seamless, last;
				correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
				if (curviness == null) {
					curviness = 1;
				}
				for (p in values[0]) {
					props.push(p);
				}
				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
				if (values.length > 1) {
					last = values[values.length - 1];
					seamless = true;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors.
							seamless = false;
							break;
						}
					}
					if (seamless) {
						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
						if (prepend) {
							values.unshift(prepend);
						}
						values.push(values[1]);
						prepend = values[values.length - 3];
					}
				}
				_r1.length = _r2.length = _r3.length = 0;
				i = props.length;
				while (--i > -1) {
					p = props[i];
					_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
				}
				i = _r1.length;
				while (--i > -1) {
					_r1[i] = Math.sqrt(_r1[i]);
					_r2[i] = Math.sqrt(_r2[i]);
				}
				if (!basic) {
					i = props.length;
					while (--i > -1) {
						if (_corProps[p]) {
							a = obj[props[i]];
							l = a.length - 1;
							for (j = 0; j < l; j++) {
								r = (a[j+1].da / _r2[j] + a[j].da / _r1[j]) || 0;
								_r3[j] = (_r3[j] || 0) + r * r;
							}
						}
					}
					i = _r3.length;
					while (--i > -1) {
						_r3[i] = Math.sqrt(_r3[i]);
					}
				}
				i = props.length;
				j = quadratic ? 4 : 1;
				while (--i > -1) {
					p = props[i];
					a = obj[p];
					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
					if (seamless) {
						a.splice(0, j);
						a.splice(a.length - j, j);
					}
				}
				return obj;
			},
			_parseBezierData = function(values, type, prepend) {
				type = type || "soft";
				var obj = {},
					inc = (type === "cubic") ? 3 : 2,
					soft = (type === "soft"),
					props = [],
					a, b, c, d, cur, i, j, l, p, cnt, tmp;
				if (soft && prepend) {
					values = [prepend].concat(values);
				}
				if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
				for (p in values[0]) {
					props.push(p);
				}
				i = props.length;
				while (--i > -1) {
					p = props[i];
					obj[p] = cur = [];
					cnt = 0;
					l = values.length;
					for (j = 0; j < l; j++) {
						a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
						if (soft) if (j > 1) if (j < l - 1) {
							cur[cnt++] = (a + cur[cnt-2]) / 2;
						}
						cur[cnt++] = a;
					}
					l = cnt - inc + 1;
					cnt = 0;
					for (j = 0; j < l; j += inc) {
						a = cur[j];
						b = cur[j+1];
						c = cur[j+2];
						d = (inc === 2) ? 0 : cur[j+3];
						cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
					}
					cur.length = cnt;
				}
				return obj;
			},
			_addCubicLengths = function(a, steps, resolution) {
				var inc = 1 / resolution,
					j = a.length,
					d, d1, s, da, ca, ba, p, i, inv, bez, index;
				while (--j > -1) {
					bez = a[j];
					s = bez.a;
					da = bez.d - s;
					ca = bez.c - s;
					ba = bez.b - s;
					d = d1 = 0;
					for (i = 1; i <= resolution; i++) {
						p = inc * i;
						inv = 1 - p;
						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
						index = j * resolution + i - 1;
						steps[index] = (steps[index] || 0) + d * d;
					}
				}
			},
			_parseLengthData = function(obj, resolution) {
				resolution = resolution >> 0 || 6;
				var a = [],
					lengths = [],
					d = 0,
					total = 0,
					threshold = resolution - 1,
					segments = [],
					curLS = [], //current length segments array
					p, i, l, index;
				for (p in obj) {
					_addCubicLengths(obj[p], a, resolution);
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					d += Math.sqrt(a[i]);
					index = i % resolution;
					curLS[index] = d;
					if (index === threshold) {
						total += d;
						index = (i / resolution) >> 0;
						segments[index] = curLS;
						lengths[index] = total;
						d = 0;
						curLS = [];
					}
				}
				return {length:total, lengths:lengths, segments:segments};
			},



			BezierPlugin = _gsScope._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.7",
					API: 2,
					global:true,

					//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
					init: function(target, vars, tween) {
						this._target = target;
						if (vars instanceof Array) {
							vars = {values:vars};
						}
						this._func = {};
						this._mod = {};
						this._props = [];
						this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
						var values = vars.values || [],
							first = {},
							second = values[0],
							autoRotate = vars.autoRotate || tween.vars.orientToBezier,
							p, isFunc, i, j, prepend;

						this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
						for (p in second) {
							this._props.push(p);
						}

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];

							this._overwriteProps.push(p);
							isFunc = this._func[p] = (typeof(target[p]) === "function");
							first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
							if (!prepend) if (first[p] !== values[0][p]) {
								prepend = first;
							}
						}
						this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
						this._segCount = this._beziers[p].length;

						if (this._timeRes) {
							var ld = _parseLengthData(this._beziers, this._timeRes);
							this._length = ld.length;
							this._lengths = ld.lengths;
							this._segments = ld.segments;
							this._l1 = this._li = this._s1 = this._si = 0;
							this._l2 = this._lengths[0];
							this._curSeg = this._segments[0];
							this._s2 = this._curSeg[0];
							this._prec = 1 / this._curSeg.length;
						}

						if ((autoRotate = this._autoRotate)) {
							this._initialRotations = [];
							if (!(autoRotate[0] instanceof Array)) {
								this._autoRotate = autoRotate = [autoRotate];
							}
							i = autoRotate.length;
							while (--i > -1) {
								for (j = 0; j < 3; j++) {
									p = autoRotate[i][j];
									this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
								}
								p = autoRotate[i][2];
								this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
								this._overwriteProps.push(p);
							}
						}
						this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
						return true;
					},

					//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
					set: function(v) {
						var segments = this._segCount,
							func = this._func,
							target = this._target,
							notStart = (v !== this._startRatio),
							curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
						if (!this._timeRes) {
							curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
							t = (v - (curIndex * (1 / segments))) * segments;
						} else {
							lengths = this._lengths;
							curSeg = this._curSeg;
							v *= this._length;
							i = this._li;
							//find the appropriate segment (if the currently cached one isn't correct)
							if (v > this._l2 && i < segments - 1) {
								l = segments - 1;
								while (i < l && (this._l2 = lengths[++i]) <= v) {	}
								this._l1 = lengths[i-1];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s2 = curSeg[(this._s1 = this._si = 0)];
							} else if (v < this._l1 && i > 0) {
								while (i > 0 && (this._l1 = lengths[--i]) >= v) { }
								if (i === 0 && v < this._l1) {
									this._l1 = 0;
								} else {
									i++;
								}
								this._l2 = lengths[i];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
								this._s2 = curSeg[this._si];
							}
							curIndex = i;
							//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
							v -= this._l1;
							i = this._si;
							if (v > this._s2 && i < curSeg.length - 1) {
								l = curSeg.length - 1;
								while (i < l && (this._s2 = curSeg[++i]) <= v) {	}
								this._s1 = curSeg[i-1];
								this._si = i;
							} else if (v < this._s1 && i > 0) {
								while (i > 0 && (this._s1 = curSeg[--i]) >= v) {	}
								if (i === 0 && v < this._s1) {
									this._s1 = 0;
								} else {
									i++;
								}
								this._s2 = curSeg[i];
								this._si = i;
							}
							t = ((i + (v - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
						}
						inv = 1 - t;

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];
							b = this._beziers[p][curIndex];
							val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
							if (this._mod[p]) {
								val = this._mod[p](val, target);
							}
							if (func[p]) {
								target[p](val);
							} else {
								target[p] = val;
							}
						}

						if (this._autoRotate) {
							var ar = this._autoRotate,
								b2, x1, y1, x2, y2, add, conv;
							i = ar.length;
							while (--i > -1) {
								p = ar[i][2];
								add = ar[i][3] || 0;
								conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
								b = this._beziers[ar[i][0]];
								b2 = this._beziers[ar[i][1]];

								if (b && b2) { //in case one of the properties got overwritten.
									b = b[curIndex];
									b2 = b2[curIndex];

									x1 = b.a + (b.b - b.a) * t;
									x2 = b.b + (b.c - b.b) * t;
									x1 += (x2 - x1) * t;
									x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

									y1 = b2.a + (b2.b - b2.a) * t;
									y2 = b2.b + (b2.c - b2.b) * t;
									y1 += (y2 - y1) * t;
									y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

									val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

									if (this._mod[p]) {
										val = this._mod[p](val, target); //for modProps
									}

									if (func[p]) {
										target[p](val);
									} else {
										target[p] = val;
									}
								}
							}
						}
					}
			}),
			p = BezierPlugin.prototype;


		BezierPlugin.bezierThrough = bezierThrough;
		BezierPlugin.cubicToQuadratic = cubicToQuadratic;
		BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
		BezierPlugin.quadraticToCubic = function(a, b, c) {
			return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
		};

		BezierPlugin._cssRegister = function() {
			var CSSPlugin = _globals.CSSPlugin;
			if (!CSSPlugin) {
				return;
			}
			var _internals = CSSPlugin._internals,
				_parseToProxy = _internals._parseToProxy,
				_setPluginRatio = _internals._setPluginRatio,
				CSSPropTween = _internals.CSSPropTween;
			_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
				if (e instanceof Array) {
					e = {values:e};
				}
				plugin = new BezierPlugin();
				var values = e.values,
					l = values.length - 1,
					pluginValues = [],
					v = {},
					i, p, data;
				if (l < 0) {
					return pt;
				}
				for (i = 0; i <= l; i++) {
					data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
					pluginValues[i] = data.end;
				}
				for (p in e) {
					v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
				}
				v.values = pluginValues;
				pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
				pt.data = data;
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				if (v.autoRotate === 0) {
					v.autoRotate = true;
				}
				if (v.autoRotate && !(v.autoRotate instanceof Array)) {
					i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
					v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
				}
				if (v.autoRotate) {
					if (!cssp._transform) {
						cssp._enableTransforms(false);
					}
					data.autoRotate = cssp._target._gsTransform;
					data.proxy.rotation = data.autoRotate.rotation || 0;
					cssp._overwriteProps.push("rotation");
				}
				plugin._onInitTween(data.proxy, v, cssp._tween);
				return pt;
			}});
		};

		p._mod = function(lookup) {
			var op = this._overwriteProps,
				i = op.length,
				val;
			while (--i > -1) {
				val = lookup[op[i]];
				if (val && typeof(val) === "function") {
					this._mod[op[i]] = val;
				}
			}
		};

		p._kill = function(lookup) {
			var a = this._props,
				p, i;
			for (p in this._beziers) {
				if (p in lookup) {
					delete this._beziers[p];
					delete this._func[p];
					i = a.length;
					while (--i > -1) {
						if (a[i] === p) {
							a.splice(i, 1);
						}
					}
				}
			}
			a = this._autoRotate;
			if (a) {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i][2]]) {
						a.splice(i, 1);
					}
				}
			}
			return this._super._kill.call(this, lookup);
		};

	}());






	
	
	
	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * CSSPlugin
 * ----------------------------------------------------------------
 */
	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

		/** @constructor **/
		var CSSPlugin = function() {
				TweenPlugin.call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = _gsScope._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new TweenPlugin("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.19.1";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_dummyElement = {style:{}},
			_doc = _gsScope.document || {createElement: function() {return _dummyElement;}},
			_createElement = function(type, ns) {
				return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = (_gsScope.navigator || {}).userAgent || "",
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (_gsScope.console) {
					console.log(s);
				}
			},
			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || !sfx) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					precise = (v === 1),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (precise) {
					v *= 100;
				}
				if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						cache = node._gsCache;
						time = TweenLite.ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				if (precise) {
					pix /= 100;
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
					return (cs || _getComputedStyle(t))[p] || 0;
				} else if (t.getCTM && _isSVG(t)) {
					return t.getBBox()[p] || 0;
				}
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					return v + " ";
				}
				if (v == null || v === "") {
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
					i;
				if (a.length > 3 && !recObj) { //multiple positions
					a = v.split(", ").join(",").split(",");
					v = [];
					for (i = 0; i < a.length; i++) {
						v.push(_parsePosition(a[i]));
					}
					return v.join(",");
				}
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(v[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = colors.length ? "" : s,
					i, color, temp;
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed + s.substr(charIndex);
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + a[1],
				toHSL;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
			_colorExp.lastIndex = 0;
		};

		if (!TweenLite.defaultStringFilter) {
			TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str, p;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = Math.round(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
				if (v === 1 || v === 0) {
					mpt = d.firstMPT;
					p = (v === 1) ? "e" : "b";
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt[p] = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt[p] = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = r; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
					e = [b, e];
					CSSPlugin.colorStringFilter(e);
					b = e[0];
					e = e[1];
				}
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i];
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.indexOf(")") + 1;
						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra((hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra((hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), true);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = _internals._registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = _gsScope.SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement || {},
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !_gsScope.chrome),
					svg, rect, width;
				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
					}
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
						xOrigin = decoratee.xOrigin = v[0] = x;
						yOrigin = decoratee.yOrigin = v[1] = y;
					}
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (skipRecord) {
						decoratee.xOffset = tm.xOffset;
						decoratee.yOffset = tm.yOffset;
						tm = decoratee;
					}
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				if (!skipRecord) {
					e.setAttribute("data-svg-origin", v.join(" "));
				}
			},
			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
				var svg = _createElement("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
					oldParent = this.parentNode,
					oldSibling = this.nextSibling,
					oldCSS = this.style.cssText,
					bbox;
				_docElement.appendChild(svg);
				svg.appendChild(this);
				this.style.display = "block";
				if (swapIfPossible) {
					try {
						bbox = this.getBBox();
						this._originalGetBBox = this.getBBox;
						this.getBBox = _getBBoxHack;
					} catch (e) { }
				} else if (this._originalGetBBox) {
					bbox = this._originalGetBBox();
				}
				if (oldSibling) {
					oldParent.insertBefore(this, oldSibling);
				} else {
					oldParent.appendChild(this);
				}
				_docElement.removeChild(svg);
				this.style.cssText = oldCSS;
				return bbox;
			},
			_getBBox = function(e) {
				try {
					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
				} catch (error) {
					return _getBBoxHack.call(e, true);
				}
			},
			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
				return !!(_SVGElement && e.getCTM && _getBBox(e) && (!e.parentNode || e.ownerSVGElement));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					style = e.style,
					isDefault, s, m, n, dec, none;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (isDefault && _transformProp && ((none = (_getComputedStyle(e).display === "none")) || !e.parentNode)) {
					if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none".
						n = style.display;
						style.display = "block";
					}
					if (!e.parentNode) {
						dec = 1; //flag
						_docElement.appendChild(e);
					}
					s = _getStyle(e, _transformPropCSS, null, true);
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					if (n) {
						style.display = n;
					} else if (none) {
						_removeProp(style, "display");
					}
					if (dec) {
						_docElement.removeChild(e);
					}
				}
				if (tm.svg || (e.getCTM && _isSVG(e))) {
					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						if (m.indexOf("matrix") !== -1) { //just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
							s = m;
							isDefault = 0;
						} else if (m.indexOf("translate") !== -1) {
							s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
							isDefault = 0;
						}
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(_numExp) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getCTM && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;

						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(-a31, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							a11 = a11*cos+a12*sin;
							t2 = a21*cos+a22*sin;
							a22 = a21*-sin+a22*cos;
							a32 = a31*-sin+a32*cos;
							a21 = t2;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY = 180 - tm.rotationY;
						}

						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						if (tm.rotationX || tm.rotationY) {
							tm.skewX = 0;
						} else {
							tm.skewX = (a12 || a22) ? Math.atan2(a12, a22) * _RAD2DEG + tm.rotation : tm.skewX || 0;
							if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
								if (invX) {
									tm.scaleX *= -1;
									tm.skewX += (tm.rotation <= 0) ? 180 : -180;
									tm.rotation += (tm.rotation <= 0) ? 180 : -180;
								} else {
									tm.scaleY *= -1;
									tm.skewX += (tm.skewX <= 0) ? 180 : -180;
								}
							}
						}
						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
							if (invX) {
								scaleX *= -1;
								skewX += (rotation <= 0) ? 180 : -180;
								rotation += (rotation <= 0) ? 180 : -180;
							} else {
								scaleY *= -1;
								skewX += (skewX <= 0) ? 180 : -180;
							}
						}
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							TweenLite.delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							TweenLite.delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					skewY = t.skewY,
					skewX = t.skewX,
					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
					skewX += skewY;
					angle += skewY;
				}

				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew - skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (skewX) {
						angle -= skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0, //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
				swapFunc;
			if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
				swapFunc = vars[parsingProp];
				vars[parsingProp] = e;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc(_index, t);
			}
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1 = _getTransform(t, _cs, true, v.parseTransform),
				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
			cssp._transform = m1;
			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = orig;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
					x = m1.xOrigin;
					y = m1.yOrigin;
					m2.x -= m1.xOffset;
					m2.y -= m1.yOffset;
					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
						orig = {};
						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
						x = orig.xOrigin;
						y = orig.yOrigin;
						m2.x -= orig.xOffset - m1.xOffset;
						m2.y -= orig.yOffset - m1.yOffset;
					}
					if (x || y) {
						matrix = _getMatrix(_tempDiv, true);
						m2.x -= x - (x * matrix[0] + y * matrix[2]);
						m2.y -= y - (x * matrix[1] + y * matrix[3]);
					}
				}
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = _parseAngle(v.skewX, m1.skewX);
				m2.skewY = _parseAngle(v.skewY, m1.skewY);
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			if (swapFunc) {
				vars[parsingProp] = swapFunc;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc;
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
			v += ""; //ensure it's a string
			return _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong).
		}});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
				end = this.format(e).split(" "),
				esfx = end[0].replace(_suffixExp, "");
			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
			}
			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
							this.t.removeAttribute("transform");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween, index) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = _target = target;
			this._tween = tween;
			this._vars = vars;
			_index = index;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				if (typeof(es) === "function") {
					es = es(_index, _target);
				}
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);

				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && _complexExp.test(es)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = Math.round(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		p._mod = function(lookup) {
			var pt = this._firstPT;
			while (pt) {
				if (typeof(lookup[pt.p]) === "function" && lookup[pt.p] === Math.round) { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally..
					pt.r = 1;
				}
				pt = pt._next;
			}
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
					pt.plugin._kill(lookup);
					p = pt.plugin;
				}
				pt = pt._next;
			}
			return TweenPlugin.prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = TweenLite.to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = TweenLite._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(TweenLite.fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		TweenPlugin.activate([CSSPlugin]);
		return CSSPlugin;

	}, true);

	
	
	
	
	
	
	
	
	
	
/*
 * ----------------------------------------------------------------
 * RoundPropsPlugin
 * ----------------------------------------------------------------
 */
	(function() {

		var RoundPropsPlugin = _gsScope._gsDefine.plugin({
				propName: "roundProps",
				version: "1.6.0",
				priority: -1,
				API: 2,

				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function(target, value, tween) {
					this._tween = tween;
					return true;
				}

			}),
			_roundLinkedList = function(node) {
				while (node) {
					if (!node.f && !node.blob) {
						node.m = Math.round;
					}
					node = node._next;
				}
			},
			p = RoundPropsPlugin.prototype;

		p._onInitAllProps = function() {
			var tween = this._tween,
				rp = (tween.vars.roundProps.join) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
				i = rp.length,
				lookup = {},
				rpt = tween._propLookup.roundProps,
				prop, pt, next;
			while (--i > -1) {
				lookup[rp[i]] = Math.round;
			}
			i = rp.length;
			while (--i > -1) {
				prop = rp[i];
				pt = tween._firstPT;
				while (pt) {
					next = pt._next; //record here, because it may get removed
					if (pt.pg) {
						pt.t._mod(lookup);
					} else if (pt.n === prop) {
						if (pt.f === 2 && pt.t) { //a blob (text containing multiple numeric values)
							_roundLinkedList(pt.t._firstPT);
						} else {
							this._add(pt.t, prop, pt.s, pt.c);
							//remove from linked list
							if (next) {
								next._prev = pt._prev;
							}
							if (pt._prev) {
								pt._prev._next = next;
							} else if (tween._firstPT === pt) {
								tween._firstPT = next;
							}
							pt._next = pt._prev = null;
							tween._propLookup[prop] = rpt;
						}
					}
					pt = next;
				}
			}
			return false;
		};

		p._add = function(target, p, s, c) {
			this._addTween(target, p, s, s + c, p, Math.round);
			this._overwriteProps.push(p);
		};

	}());










/*
 * ----------------------------------------------------------------
 * AttrPlugin
 * ----------------------------------------------------------------
 */

	(function() {

		_gsScope._gsDefine.plugin({
			propName: "attr",
			API: 2,
			version: "0.6.0",

			//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
			init: function(target, value, tween, index) {
				var p, end;
				if (typeof(target.setAttribute) !== "function") {
					return false;
				}
				for (p in value) {
					end = value[p];
					if (typeof(end) === "function") {
						end = end(index, target);
					}
					this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
					this._overwriteProps.push(p);
				}
				return true;
			}

		});

	}());










/*
 * ----------------------------------------------------------------
 * DirectionalRotationPlugin
 * ----------------------------------------------------------------
 */
	_gsScope._gsDefine.plugin({
		propName: "directionalRotation",
		version: "0.3.0",
		API: 2,

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween, index) {
			if (typeof(value) !== "object") {
				value = {rotation:value};
			}
			this.finals = {};
			var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
				min = 0.000001,
				p, v, start, end, dif, split;
			for (p in value) {
				if (p !== "useRadians") {
					end = value[p];
					if (typeof(end) === "function") {
						end = end(index, target);
					}
					split = (end + "").split("_");
					v = split[0];
					start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
					end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
					dif = end - start;
					if (split.length) {
						v = split.join("_");
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					if (dif > min || dif < -min) {
						this._addTween(target, p, start, start + dif, p);
						this._overwriteProps.push(p);
					}
				}
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			var pt;
			if (ratio !== 1) {
				this._super.setRatio.call(this, ratio);
			} else {
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](this.finals[pt.p]);
					} else {
						pt.t[pt.p] = this.finals[pt.p];
					}
					pt = pt._next;
				}
			}
		}

	})._autoCSS = true;







	
	
	
	
/*
 * ----------------------------------------------------------------
 * EasePack
 * ----------------------------------------------------------------
 */
	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
		
		var w = (_gsScope.GreenSockGlobals || _gsScope),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new Ease(),
			SteppedEase, RoughEase, _createElastic;

		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);

		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + 1;
			}, true);
		p = SteppedEase.prototype = new Ease();
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return ((this._p2 * p) >> 0) * this._p1;
		};
		p.config = SteppedEase.config = function(steps) {
			return new SteppedEase(steps);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof Ease) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new Ease();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new Ease();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return Ease.map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");

		return Back;
		
	}, true);


});

if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); } //necessary in case TweenLite was already loaded separately.











/*
 * ----------------------------------------------------------------
 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
 * ----------------------------------------------------------------
 */
(function(window, moduleName) {

		"use strict";
		var _exports = {},
			_doc = window.document,
			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl, hasModule;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							hasModule = (typeof(module) !== "undefined" && module.exports);
							if (!hasModule && typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							} else if (hasModule){ //node
								if (ns === moduleName) {
									module.exports = _exports[moduleName] = cl;
									for (i in _exports) {
										cl[i] = _exports[i];
									}
								} else if (_exports[moduleName]) {
									_exports[moduleName][n] = cl;
								}
							}
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			_blankArray = [],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				if (i > 1) {
					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
				}
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function(seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF === "auto" && _self.frame < 5 && _doc.visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000) {
					_ticker.wake();
				}
				setTimeout(_checkTimeout, 2000);
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars,
				callback = v[type],
				params = v[type + "Params"],
				scope = v[type + "Scope"] || v.callbackScope || this,
				l = params ? params.length : 0;
			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
				case 0: callback.call(scope); break;
				case 1: callback.call(scope, params[0]); break;
				case 2: callback.call(scope, params[0], params[1]); break;
				default: callback.apply(scope, params);
			}
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				var pauseTime = this._pauseTime,
					t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			return this._uncache(false);
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "1.19.1";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			return (typeof(_doc) === "undefined") ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : (v === 1) ? this.end : v ? this.join("") : this.start;
					if (pt.m) {
						val = pt.m(val, this._target || pt.t);
					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				a.end = end;
				start = a[0] = start + ""; //ensure values are strings
				end = a[1] = end + "";
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
				if (typeof(end) === "function") {
					end = end(index || 0, target);
				}
				var type = typeof(target[prop]),
					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob;

				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, (isRelative ? pt.s + pt.c : end), stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else {
						pt.s = parseFloat(s);
						if (!isRelative) {
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars, l;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				this._startAt = TweenLite.to(this.target, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				l = this._targets.length;
				for (i = 0; i < l; i++) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					//m - mod           [function | 0]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative.
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a;
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.19.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._mod = p._roundProps = function(lookup) {
			var pt = this._firstPT,
				val;
			while (pt) {
				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					if (pt.f === 2) {
						pt.t._applyPT.m = val;
					} else {
						pt.m = val;
					}
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: " + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenMax");
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],145:[function(require,module,exports){
(function (global){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.10.8
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || element.firstElementChild.offsetParent === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  return offsetParent;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], html['client' + axis], html['offset' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'webkit', 'moz', 'o'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if the arrow style has been computed, apply the arrow style
  if (data.offsets.arrow) {
    setStyles(data.arrowElement, data.offsets.arrow);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update attributes and styles of `data`
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var side = isVertical ? 'top' : 'left';
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  var sideValue = center - getClientRect(data.offsets.popper)[side];

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[placement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])