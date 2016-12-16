webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _server = __webpack_require__(671);

	var _reactTapEventPlugin = __webpack_require__(707);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _reactRouter = __webpack_require__(86);

	var _layout = __webpack_require__(329);

	var _layout2 = _interopRequireDefault(_layout);

	var _getMuiTheme = __webpack_require__(265);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _MuiThemeProvider = __webpack_require__(264);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _mobxReact = __webpack_require__(30);

	var _stores = __webpack_require__(345);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(0, _reactTapEventPlugin2.default)();

	var App = function (_Component) {
	  _inherits(App, _Component);

	  _createClass(App, null, [{
	    key: 'init',
	    value: function init(appInstance) {
	      var proto = this.prototype;
	      if (typeof window !== 'undefined') {
	        proto.muiTheme = null;
	        this.window = true;

	        (0, _reactDom.render)(appInstance, document.getElementById('app'));
	      } else {

	        return function (userAgent) {
	          proto.muiTheme = (0, _getMuiTheme2.default)({ userAgent: userAgent });
	          return _react2.default.createElement(App, null);
	        };
	      }
	    }
	  }]);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _MuiThemeProvider2.default,
	          { muiTheme: this.muiTheme },
	          _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.browserHistory },
	            _react2.default.createElement(_reactRouter.Route, { path: '/', component: function component(props) {
	                return _react2.default.createElement(_layout2.default, { stores: _stores.STORES });
	              } })
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App.init(_react2.default.createElement(App, null)) && App;

/***/ },

/***/ 47:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0,
	        v = c == 'x' ? r : r & 0x3 | 0x8;
	    return v.toString(16);
	  });
	};

/***/ },

/***/ 88:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (func, wait, immediate) {

	  var timeout;
	  return function () {
	    var context = this,
	        args = arguments;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	};

/***/ },

/***/ 89:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regex = exports.regex = {
	  path: /^[a-z0-9\- _]+/i,
	  firebase_path: /^\/?[a-z0-9\-\/]/g,
	  url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

	};

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mobx = __webpack_require__(39);

	var _debounce = __webpack_require__(88);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _queryString = __webpack_require__(159);

	var _reactRouter = __webpack_require__(86);

	var _regex = __webpack_require__(89);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _superagent = __webpack_require__(321);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var firebase_interface = function () {
	  function firebase_interface(mobx$, requestMessages, superClass) {
	    var _this = this;

	    _classCallCheck(this, firebase_interface);

	    //this methods add added to proto automatily

	    this.$ = mobx$;
	    this.msg = function (newMessage) {
	      return requestMessages.then(function (msg) {
	        return msg.say(newMessage);
	      });
	    };
	    this.socket = window.firebase_dashboard.sockets.db;
	    this.superClass = superClass;
	    this.socket.emit('connected');
	    this.socket.emit('snapshots');
	    this.socket.on('status', this.status.bind(this));
	    this.socket.on('err', this.error.bind(this));
	    this.socket.on('config', this.loadConfig.bind(this));
	    this.socket.on('sync-complete', this.doneSyncing.bind(this));
	    this.socket.on('got-cache', this.checkBackendCache.bind(this));
	    this.socket.on('got-snapshots', this.updateSnapshots.bind(this));
	    this.socket.on('query-result', function (result) {
	      _this.superClass.then(function (parent) {
	        parent.traverse.onQuery(result);
	      });
	    });
	  }

	  _createClass(firebase_interface, [{
	    key: 'error',
	    value: function error(msg) {
	      console.error('ERROR', msg);
	      if (msg && msg.length) {
	        this.msg(msg);
	      }
	    }
	  }, {
	    key: 'status',
	    value: function status(msg) {
	      console.log('STATUS', msg);
	      if (msg && msg.length) {
	        this.msg(msg);
	      }
	    }
	  }, {
	    key: 'checkCache',
	    value: function checkCache() {
	      console.log("checking cache...");
	      this.socket.emit('check-cache');
	    }
	  }, {
	    key: 'checkBackendCache',
	    value: function checkBackendCache(result) {
	      console.log(result);
	    }
	  }, {
	    key: 'updateSnapshots',
	    value: function updateSnapshots(newSnapshots) {
	      this.$.snapshots = newSnapshots;
	    }
	  }, {
	    key: 'doneSyncing',
	    value: function doneSyncing() {
	      console.log("done syncing");
	      this.$.setProp('syncing', false);
	    }
	  }, {
	    key: 'loadConfig',
	    value: function loadConfig(config) {
	      this.$.active = config.defaultNode;
	      this.$.config.mode = config.defaultMode;
	      this.$.config.databaseName = config.databaseURL.split(/\.|\//g)[2];
	      this.$.config.keyboardSave = config.keyboardSave;
	      this.$.config.persistToDisk = config.persistToDisk;
	      this.$.config.watch = config.watch;
	      this.$.config.databaseURL = config.databaseURL;
	      this.$.config.cacheChecking = config.cacheChecking;
	      this.$.config.editor.charLimit = 8000 || config.editor.charLimit;
	      this.socket.emit('query', config.defaultNode);
	      this.setupKeyboard();
	      console.log("config loaded.");
	    }
	  }, {
	    key: 'setupKeyboard',
	    value: function setupKeyboard() {
	      var modify = this.modify;


	      this.$.config.keyboardSave && window.addEventListener('keydown', function (e) {
	        if (e.key === 's' && e.ctrlKey) {
	          e.preventDefault();
	          (0, _debounce2.default)(modify.onSave.bind(modify), 800)();
	        }
	      });
	    }
	  }]);

	  return firebase_interface;
	}();

	exports.default = firebase_interface;

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionHome = function ActionHome(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
	  );
	};
	ActionHome = (0, _pure2.default)(ActionHome);
	ActionHome.displayName = 'ActionHome';
	ActionHome.muiName = 'SvgIcon';

	exports.default = ActionHome;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FileCloud = function FileCloud(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z' })
	  );
	};
	FileCloud = (0, _pure2.default)(FileCloud);
	FileCloud.displayName = 'FileCloud';
	FileCloud.muiName = 'SvgIcon';

	exports.default = FileCloud;

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(738);
	var reduce = __webpack_require__(739);

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return obj === Object(obj);
	}

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Allow for extension
	 */

	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */

	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */

	Request.prototype.parse = function(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename || file.name);
	  return this;
	};

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }

	  // initiate request
	  xhr.open(this.method, this.url, true);

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};

	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */

	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }

	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }

	  return new Request(method, url);
	}

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * Expose `request`.
	 */

	module.exports = request;


/***/ },

/***/ 322:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Popover = __webpack_require__(65);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Divider = __webpack_require__(108);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Dialog = __webpack_require__(64);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(81);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _flatInput = __webpack_require__(336);

	var _flatInput2 = _interopRequireDefault(_flatInput);

	var _TextField = __webpack_require__(52);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _List = __webpack_require__(109);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Modes = function (_Component) {
	  _inherits(Modes, _Component);

	  function Modes(props) {
	    _classCallCheck(this, Modes);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modes).call(this));

	    _this.state = {
	      dialog: false,
	      input: ''
	    };
	    return _this;
	  }

	  _createClass(Modes, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'validateFile',
	    value: function validateFile(e) {
	      //let global = this.props.store;
	      var util = this.props.store.util;


	      var messages = this.props.messages;
	      var file = e.target.files[0];
	      var reader = new FileReader();
	      var isJson = /\.json$/.test(file.name);
	      var isEmpty = file.size < 1;

	      if (isJson && !isEmpty) {
	        reader.onload = function (res) {
	          var data = res.target.result;
	          try {
	            data = JSON.parse(data);
	            util.importFromLocal(data);
	          } catch (err) {
	            messages.say('Error parsing \'' + file.name + '\'');
	          }
	          console.log(data);
	        };
	        reader.readAsText(file);
	      } else {
	        messages.say('\'' + file.name + '\' is either not json or is empty');
	      }
	    }
	  }, {
	    key: 'exportToFile',
	    value: function exportToFile() {
	      var observables = this.props.store.observables;

	      var currentView = observables.currentView;
	      var path = observables.active;
	      var filename = path.replace(/\//g, '-');
	      window.firebase_dashboard.sockets.db.emit('export-path', { path: path, data: currentView });
	    }
	  }, {
	    key: 'createSnapshot',
	    value: function createSnapshot() {
	      window.firebase_dashboard.sockets.db.emit('create-snapshot');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var global = this.props.store;
	      var observables = global.observables;
	      var util = global.util;

	      var open = this.props.open;
	      var close = this.props.close;
	      var elm = this.props.elm;
	      var secondaryText = observables.active;
	      if (secondaryText === '/') {
	        secondaryText = 'ROOT';
	      }
	      if (secondaryText.length > 20) {
	        secondaryText = secondaryText.substr(0, 20);
	        secondaryText += '...';
	      }
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        primary: true,
	        onTouchTap: function onTouchTap(e) {
	          return _this2.setState({ dialog: false });
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'import',
	        primary: true,
	        onTouchTap: function onTouchTap(e) {
	          return !util.importFromURL(_this2.state.input) && _this2.setState({ dialog: false });
	        }
	      })];

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: open,
	            anchorEl: elm,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: close },
	          _react2.default.createElement(
	            _List.List,
	            null,
	            _react2.default.createElement(_List.ListItem, { primaryText: 'Import from URL', onTouchTap: function onTouchTap(e) {
	                return _this2.setState({ dialog: true });
	              } }),
	            _react2.default.createElement(_flatInput2.default, { label: 'Import from File-System', accept: '*.json', onChange: this.validateFile.bind(this) }),
	            _react2.default.createElement(_Divider2.default, null),
	            _react2.default.createElement(_List.ListItem, { primaryText: 'Export Current path', secondaryText: secondaryText,
	              onTouchTap: function onTouchTap(e) {
	                return !close() && _this2.exportToFile();
	              } }),
	            _react2.default.createElement(_List.ListItem, { primaryText: 'Create database snapshot', onTouchTap: function onTouchTap(e) {
	                return !close() && _this2.createSnapshot();
	              } })
	          )
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            ref: 'dialog',

	            title: 'Import JSON from URL',
	            actions: actions,
	            modal: false,
	            open: this.state.dialog,
	            onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ dialog: false });
	            } },
	          _react2.default.createElement(_TextField2.default, { id: 'clear',
	            fullWidth: true,
	            onChange: function onChange(e) {
	              return _this2.setState({ input: e.target.value });
	            },
	            hintText: 'Enter url to import json from',
	            floatingLabelText: 'URL' })
	        )
	      );
	    }
	  }]);

	  return Modes;
	}(Component);

	exports.default = Modes;

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _FontIcon = __webpack_require__(94);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _BottomNavigation = __webpack_require__(230);

	var _Paper = __webpack_require__(23);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _mobxReact = __webpack_require__(30);

	var _reactMotion = __webpack_require__(181);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _Popover = __webpack_require__(65);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _addBox = __webpack_require__(563);

	var _addBox2 = _interopRequireDefault(_addBox);

	var _deleteSweep = __webpack_require__(565);

	var _deleteSweep2 = _interopRequireDefault(_deleteSweep);

	var _undo = __webpack_require__(567);

	var _undo2 = _interopRequireDefault(_undo);

	var _add = __webpack_require__(564);

	var _add2 = _interopRequireDefault(_add);

	var _save = __webpack_require__(566);

	var _save2 = _interopRequireDefault(_save);

	var _viewCarousel = __webpack_require__(560);

	var _viewCarousel2 = _interopRequireDefault(_viewCarousel);

	var _cloud = __webpack_require__(267);

	var _cloud2 = _interopRequireDefault(_cloud);

	var _warning = __webpack_require__(561);

	var _warning2 = _interopRequireDefault(_warning);

	var _done = __webpack_require__(557);

	var _done2 = _interopRequireDefault(_done);

	var _history = __webpack_require__(558);

	var _history2 = _interopRequireDefault(_history);

	var _new = __webpack_require__(327);

	var _new2 = _interopRequireDefault(_new);

	var _modes = __webpack_require__(326);

	var _modes2 = _interopRequireDefault(_modes);

	var _importExport = __webpack_require__(324);

	var _importExport2 = _interopRequireDefault(_importExport);

	var _recovery = __webpack_require__(328);

	var _recovery2 = _interopRequireDefault(_recovery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  bar: {
	    width: 'calc(100% - 280px)',
	    position: 'fixed',
	    bottom: 0,
	    zIndex: 2,
	    boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'
	  },
	  update: {
	    background: '#4fd566',
	    position: 'absolute',
	    right: 0
	  },
	  validJSON: {
	    position: 'absolute',
	    left: 0,
	    background: '#4fd566'
	  },
	  invalidJSON: {
	    position: 'absolute',
	    left: 0,
	    color: 'white',
	    background: 'rgb(203, 49, 49)'
	  }

	};

	var Navigation = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Navigation, _Component);

	  function Navigation(props) {
	    _classCallCheck(this, Navigation);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).call(this));

	    _this.state = {
	      show_new: false,
	      show_modes: false,
	      show_import: false,
	      show_recovery: false,
	      elm_new: null,
	      elm_modes: null,
	      elm_import: null,
	      elm_recovery: null,
	      selectedIndex: 0
	    };
	    return _this;
	  }

	  _createClass(Navigation, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'createNew',
	    value: function createNew() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var global = this.props.store;
	      var observables = global.observables;
	      var modify = global.modify;

	      var messages = this.props.messages;
	      var view = observables.currentView;
	      var isJSONValid = observables.validJSON;
	      var jsonMode = observables.config.mode === 'json';
	      var updated = observables.show_update ? 'block' : 'none';
	      var modified = observables.show_modified ? 'block' : 'none';
	      var checking = observables.checking;
	      var notNull = observables.validJSON !== null;
	      var syncing = observables.syncing ? 'block' : 'none';

	      var vaildJSON = notNull && isJSONValid && view && jsonMode ? 'block' : 'none';
	      var invaildJSON = !isJSONValid && notNull && view && jsonMode ? 'block' : 'none';
	      //console.log('json',isJSONValid);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _BottomNavigation.BottomNavigation,
	          { style: styles.bar },
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	            style: _extends({}, styles.validJSON, { display: vaildJSON }),
	            label: _react2.default.createElement(
	              'span',
	              { style: { color: 'white' } },
	              'Valid JSON'
	            ),
	            icon: _react2.default.createElement(_done2.default, { style: { fill: 'white' } }) }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	            style: _extends({}, styles.invalidJSON, { display: invaildJSON }),
	            label: _react2.default.createElement(
	              'span',
	              { style: { color: 'white' } },
	              'Invalid JSON'
	            ),
	            icon: _react2.default.createElement(_warning2.default, { style: { fill: 'white' } }) }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, {
	            label: 'New',
	            icon: _react2.default.createElement(_add2.default, null),
	            onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ show_new: true, elm_new: e.currentTarget });
	            } }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'update', icon: _react2.default.createElement(_save2.default, null),
	            onTouchTap: function onTouchTap() {
	              return modify.sync();
	            } }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Undo', icon: _react2.default.createElement(_undo2.default, null), onTouchTap: function onTouchTap(e) {
	              return modify.undo();
	            } }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Mode', icon: _react2.default.createElement(_viewCarousel2.default, null),
	            onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ show_modes: true, elm_modes: e.currentTarget });
	            } }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Export / Import', icon: _react2.default.createElement(_cloud2.default, null),
	            onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ show_import: true, elm_import: e.currentTarget });
	            } }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Recovery', icon: _react2.default.createElement(_history2.default, null),
	            onTouchTap: function onTouchTap(e) {
	              return _this2.setState({ show_recovery: true, elm_recovery: e.currentTarget });
	            } }),
	          _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { style: _extends({}, styles.update, { display: syncing }), label: 'Syncing', icon: _react2.default.createElement(_warning2.default, null) })
	        ),
	        _react2.default.createElement(_new2.default, {
	          open: this.state.show_new, store: global, elm: this.state.elm_new,
	          close: function close(e) {
	            return _this2.setState({ show_new: false });
	          } }),
	        _react2.default.createElement(_modes2.default, { open: this.state.show_modes, store: global, elm: this.state.elm_modes,
	          close: function close(e) {
	            return _this2.setState({ show_modes: false });
	          } }),
	        _react2.default.createElement(_importExport2.default, { open: this.state.show_import, store: global, elm: this.state.elm_import, messages: messages,
	          close: function close(e) {
	            return _this2.setState({ show_import: false });
	          } }),
	        _react2.default.createElement(_recovery2.default, { open: this.state.show_recovery, store: global, elm: this.state.elm_recovery, messages: messages,
	          close: function close(e) {
	            return _this2.setState({ show_recovery: false });
	          } })
	      );
	    }
	  }]);

	  return Navigation;
	}(Component)) || _class;

	exports.default = Navigation;

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Popover = __webpack_require__(65);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Modes = function (_Component) {
	  _inherits(Modes, _Component);

	  function Modes(props) {
	    _classCallCheck(this, Modes);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modes).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Modes, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var global = this.props.store;
	      var observables = global.observables;
	      var util = global.util;

	      var open = this.props.open;
	      var close = this.props.close;
	      var elm = this.props.elm;
	      return _react2.default.createElement(
	        _Popover2.default,
	        {
	          open: open,
	          anchorEl: elm,
	          anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	          targetOrigin: { horizontal: 'left', vertical: 'top' },
	          onRequestClose: close },
	        _react2.default.createElement(
	          _Menu2.default,
	          null,
	          _react2.default.createElement(_MenuItem2.default, { primaryText: 'JSON', onTouchTap: function onTouchTap(e) {
	              return !close() && util.switchMode('json');
	            } }),
	          _react2.default.createElement(_MenuItem2.default, { primaryText: 'Interactive', onTouchTap: function onTouchTap(e) {
	              return !close() && util.switchMode('interactive');
	            } })
	        )
	      );
	    }
	  }]);

	  return Modes;
	}(Component);

	exports.default = Modes;

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Popover = __webpack_require__(65);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _mobxReact = __webpack_require__(30);

	var _Snackbar = __webpack_require__(149);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _TextField = __webpack_require__(52);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _IconButton = __webpack_require__(51);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _home = __webpack_require__(266);

	var _home2 = _interopRequireDefault(_home);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _regex = __webpack_require__(89);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var NewItem = function (_Component) {
	  _inherits(NewItem, _Component);

	  function NewItem(props) {
	    _classCallCheck(this, NewItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewItem).call(this));

	    _this.state = {
	      newPath: false,
	      currentVal: '',
	      err: ''
	    };
	    return _this;
	  }

	  _createClass(NewItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'processPath',
	    value: function processPath(e) {
	      var modify = this.props.store.modify;

	      if (!e) {
	        this.setState({ newPath: false, currentVal: '' });
	        return;
	      }
	      console.log(e.type);

	      if (e.type === 'change') {

	        this.state.currentVal = e.target.value;
	        //this.setState({currentVal:e.target.value});
	      } else if (e.type === 'mouseup') {
	          this.state.currentVal.length && modify.createNewPath(this.state.currentVal);
	          this.setState({ newPath: false, currentVal: '' });
	        }
	      //let value = e.
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var global = this.props.store;
	      var open = this.props.open;
	      var close = this.props.close;
	      var elm = this.props.elm;
	      var modify = global.modify;


	      var enterPath = _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(_TextField2.default, { id: 'clear', onChange: this.processPath.bind(this),
	          underlineStyle: { color: '#ff5f95' }, hintStyle: { color: '#f23d7a' },
	          inputStyle: { color: '#ff5f95' },
	          hintText: 'Enter new pathname to create',
	          errorText: this.state.err
	        }),
	        _react2.default.createElement(_FlatButton2.default, { label: 'Cancel', secondary: true, onTouchTap: function onTouchTap(e) {
	            return _this2.processPath.call(_this2);
	          } })
	      );

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: open,
	            anchorEl: elm,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: close },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Path', onTouchTap: function onTouchTap(e) {
	                return !close() && _this2.setState({ newPath: true });
	              } }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Array', onTouchTap: function onTouchTap(e) {
	                return !modify.newItem('array') && close();
	              } }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Object', onTouchTap: function onTouchTap(e) {
	                return !modify.newItem('object') && close();
	              } }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'String', onTouchTap: function onTouchTap(e) {
	                return !modify.newItem('string') && close();
	              } }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Number', onTouchTap: function onTouchTap(e) {
	                return !modify.newItem('number') && close();
	              } })
	          )
	        ),
	        _react2.default.createElement(_Snackbar2.default, {

	          open: this.state.newPath,
	          message: enterPath,
	          action: 'Create',
	          onActionTouchTap: this.processPath.bind(this),
	          autoHideDuration: 60000,
	          onRequestClose: function onRequestClose(e) {
	            return !_this2.processPath.call(_this2) && _this2.setState({ newPath: false });
	          }
	        })
	      );
	    }
	  }]);

	  return NewItem;
	}(Component);

	exports.default = NewItem;

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Popover = __webpack_require__(65);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _mobxReact = __webpack_require__(30);

	var _List = __webpack_require__(109);

	var _Dialog = __webpack_require__(64);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _Subheader = __webpack_require__(111);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Recovery = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Recovery, _Component);

	  function Recovery(props) {
	    _classCallCheck(this, Recovery);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recovery).call(this));

	    _this.state = {
	      dialog: false
	    };
	    return _this;
	  }

	  _createClass(Recovery, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'recoverSnapshot',
	    value: function recoverSnapshot() {}
	  }, {
	    key: 'select',
	    value: function select(value) {
	      var util = this.props.store.util;

	      util.useSnapshot(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var global = this.props.store;
	      var open = this.props.open;
	      var close = this.props.close;
	      var elm = this.props.elm;
	      var observables = global.observables;
	      var util = global.util;
	      var modify = global.modify;

	      var availableSnapshots = observables.snapshots;
	      var selected = observables.selectedSnapshot;
	      var filename = selected.replace('.json', '');
	      var confirm = selected ? 'inline-block' : 'none';
	      var databaseName = observables.config.databaseURL.split(/\.|\//g)[2];
	      var sortedSnapshots = availableSnapshots.sort(function (a, b) {
	        a = a.replace('.json', '');
	        b = b.replace('.json', '');
	        var timeA = Number(a.match(/\d+$/));
	        var timeB = Number(b.match(/\d+$/));
	        return timeB - timeA;
	      });

	      var time = filename.match(/\d+$/);

	      var formatSnapshot = databaseName + ' | ' + new Date(Number(time));
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: function onTouchTap(e) {
	          return _this2.setState({ dialog: false });
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'are you sure you want to use this snapshot?',
	        secondary: true,
	        style: { display: confirm },
	        onTouchTap: function onTouchTap(e) {
	          return !util.failsafe() && _this2.setState({ dialog: false });
	        }
	      })];
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: open,
	            anchorEl: elm,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: close },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            _react2.default.createElement(_MenuItem2.default, { onTouchTap: function onTouchTap(e) {
	                return !close() && modify.resetPath();
	              },
	              primaryText: 'Revert \'' + observables.active + '\' to earliest version from this session' }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Recover from Snapshot', onTouchTap: function onTouchTap(e) {
	                return !close() && _this2.setState({ dialog: true });
	              } })
	          )
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Restore to Snapshot',
	            actions: actions,
	            modal: false,
	            open: this.state.dialog,
	            onRequestClose: function onRequestClose(e) {
	              return _this2.setState({ dialog: false });
	            } },
	          _react2.default.createElement(
	            'span',
	            null,
	            'Arranged from newest to oldest'
	          ),
	          time && databaseName && _react2.default.createElement(
	            _Subheader2.default,
	            null,
	            'Snapshot: ',
	            formatSnapshot
	          ),
	          _react2.default.createElement(
	            _List.List,
	            null,
	            sortedSnapshots.map(function (e) {
	              return _react2.default.createElement(_List.ListItem, { key: (0, _uuid2.default)(), primaryText: e.replace(/\-\d+\.json$/, ''), onTouchTap: _this2.select.bind(_this2, e) });
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return Recovery;
	}(Component)) || _class;

	exports.default = Recovery;

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconButton = __webpack_require__(51);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _sideMenu = __webpack_require__(334);

	var _sideMenu2 = _interopRequireDefault(_sideMenu);

	var _mobxReact = __webpack_require__(30);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _reactRouter = __webpack_require__(86);

	var _home = __webpack_require__(266);

	var _home2 = _interopRequireDefault(_home);

	var _Dialog = __webpack_require__(64);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _reactRouterTransition = __webpack_require__(303);

	var _cloud = __webpack_require__(267);

	var _cloud2 = _interopRequireDefault(_cloud);

	var _actions = __webpack_require__(325);

	var _actions2 = _interopRequireDefault(_actions);

	var _uiMessage = __webpack_require__(332);

	var _uiMessage2 = _interopRequireDefault(_uiMessage);

	var _viewOutput = __webpack_require__(333);

	var _viewOutput2 = _interopRequireDefault(_viewOutput);

	var _uiDialog = __webpack_require__(331);

	var _uiDialog2 = _interopRequireDefault(_uiDialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  x: [100, -100]
	};

	var layout = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(layout, _Component);

	  _createClass(layout, null, [{
	    key: 'init',
	    value: function init() {
	      //console.log('that')
	    }
	  }]);

	  function layout(props) {
	    _classCallCheck(this, layout);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(layout).call(this));

	    _this.state = {
	      sidemenu: false,
	      toast: {
	        open: false
	      }
	    };

	    return _this;
	  }

	  _createClass(layout, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _props$stores$global = this.props.stores.global;
	      var observables = _props$stores$global.observables;
	      var util = _props$stores$global.util;
	      var validate = _props$stores$global.validate;

	      window.applicationReady = true;
	      var elm = this.refs.output.refs.elm;

	      JSONEditor.defaults.theme = 'foundation5';
	      JSONEditor.defaults.iconlib = 'fontawesome4';

	      //  console.log(elm , this.refs.output.refs.elm);
	      var opts = {
	        schema: {
	          format: 'row'
	        }
	      };
	      this.editor = new JSONEditor(elm, opts);
	      this.editor.on('change', function () {
	        var checkErrors = _this2.editor.validate();
	        validate.checkEditor(checkErrors);
	      });

	      util.setEditor(this.editor);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.state;

	      var props = this.props;
	      var messages = this.props.stores.messages;
	      var store = this.props.stores.global;

	      return _react2.default.createElement(
	        'div',
	        { className: 'layout-main' },
	        _react2.default.createElement(
	          'div',
	          { className: 'menu-container' },
	          _react2.default.createElement(_sideMenu2.default, { store: store })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'view', style: { marginLeft: 300, width: 'calc(100% - 300px)' } },
	          _react2.default.createElement(
	            'div',
	            { className: 'child-view' },
	            _react2.default.createElement(_viewOutput2.default, { store: store, message: messages, ref: 'output' }),
	            _react2.default.createElement(_actions2.default, { store: store, messages: messages })
	          )
	        ),
	        _react2.default.createElement(_uiMessage2.default, { store: messages }),
	        _react2.default.createElement(_uiDialog2.default, { store: store })
	      );
	    }
	  }]);

	  return layout;
	}(Component)) || _class;

	exports.default = !layout.init() && layout;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var JSONMode = function (_Component) {
	  _inherits(JSONMode, _Component);

	  function JSONMode(props) {
	    _classCallCheck(this, JSONMode);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSONMode).call(this));

	    _this.state = {
	      elm: null,
	      value: ''
	    };
	    return _this;
	  }

	  _createClass(JSONMode, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ elm: this.refs.elm });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'processKeyboard',
	    value: function processKeyboard(e) {
	      console.log(e.key);
	      var target = e.target;
	      var insertPoint = target.selectionStart;
	      var insertWith = '    '; //4 spaces;
	      var textBefore = target.value.substr(0, insertPoint);
	      var textAfter = target.value.substr(insertPoint, target.value.length);

	      if (e.key === 'Tab') {
	        e.preventDefault();
	        target.value = '' + textBefore + insertWith + textAfter;
	        target.setSelectionRange(insertPoint + 4, insertPoint + 4);
	      }
	      if (e.key === 'Enter') {
	        e.preventDefault();
	        var match = /\,|\"|\d|[a-z]/i;
	        if (target.value[insertPoint - 1].match(match)) {

	          target.value = textBefore + '\n        ' + textAfter;
	          target.setSelectionRange(insertPoint + 4, insertPoint + 4);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(props, state) {

	      //  console.log('SHOULD RENDER')
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //temporary solution
	      //TODO: properly handle onChange event
	      var validator = this.props.validate;
	      var isClean = this.props.clean;
	      var cleanJSON = this.props.data;
	      var data = void 0;
	      var shouldShow = this.props.style.display;
	      if ((typeof cleanJSON === 'undefined' ? 'undefined' : _typeof(cleanJSON)) === 'object') {
	        data = JSON.stringify(cleanJSON, null, 2);
	      } else {
	        data = this.props.data;
	      }
	      // dont set the view / parse the view unless changing modes
	      // make use of component should update!
	      //console.log('got!',cleanJSON)
	      //data = cleanJSON || '';
	      //  console.log(data);
	      return _react2.default.createElement('textarea', { ref: 'elm',
	        id: 'json-mode',
	        onKeyDown: this.processKeyboard.bind(this),
	        onChange: function onChange(e) {
	          return validator(e.target.value);
	        },
	        value: data,
	        style: { height: 'calc(100% - 50px)', position: 'relative', display: shouldShow } });
	    }
	  }]);

	  return JSONMode;
	}(Component);

	exports.default = JSONMode;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(64);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(81);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _mobxReact = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var schemas = {
	  blog: {},
	  code: {},
	  project: {}

	};

	var ui_dialog = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(ui_dialog, _Component);

	  function ui_dialog(props) {
	    _classCallCheck(this, ui_dialog);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ui_dialog).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(ui_dialog, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var global = this.props.store;
	      var _props$store = this.props.store;
	      var observables = _props$store.observables;
	      var util = _props$store.util;
	      //console.log(">>>" ,observables.show_dialog);

	      var actions = [_react2.default.createElement(_RaisedButton2.default, {
	        label: 'ok',
	        primary: true,

	        onTouchTap: function onTouchTap(e) {
	          return util.toggle('dialog', false);
	        }
	      }), _react2.default.createElement(_RaisedButton2.default, {
	        label: 'Add',
	        secondary: true,

	        onTouchTap: function onTouchTap(e) {
	          return !util.update() && util.toggle('dialog', false);
	        }
	      })];
	      return _react2.default.createElement(_Dialog2.default, {
	        title: 'Edit item for ' + observables.active,
	        actions: actions,
	        modal: false,
	        open: observables.show_dialog,
	        onRequestClose: function onRequestClose(e) {
	          return store.closeDialog();
	        } });
	    }
	  }]);

	  return ui_dialog;
	}(Component)) || _class;

	exports.default = ui_dialog;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Snackbar = __webpack_require__(149);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _mobxReact = __webpack_require__(30);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _RaisedButton = __webpack_require__(81);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  container: {
	    display: 'flex',
	    flexDirection: 'row'

	  },
	  msg: {
	    flex: 2,
	    paddingLeft: 10
	    //  order:1
	  },
	  button: {
	    //flex:'auto',
	    color: 'rgb(255, 64, 129)',
	    height: 'calc(100% - 10px)',
	    margin: 5
	  }
	};

	var UIMessage = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(UIMessage, _Component);

	  function UIMessage() {
	    _classCallCheck(this, UIMessage);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UIMessage).apply(this, arguments));
	  }

	  _createClass(UIMessage, [{
	    key: 'render',
	    value: function render() {
	      var store = this.props.store;
	      var actions = store.actions.map(function (e) {
	        return(
	          //e.callback is a observable
	          _react2.default.createElement(_FlatButton2.default, { style: _extends({}, styles.button, { minWidth: 10 }),
	            key: (0, _uuid2.default)(), label: e.label, onTouchTap: function onTouchTap(f) {
	              return e.callback;
	            } })
	        );
	      });

	      var body = _react2.default.createElement(
	        'div',
	        { style: styles.container },
	        _react2.default.createElement(
	          'div',
	          { style: styles.msg },
	          store.message
	        ),
	        actions
	      );
	      return _react2.default.createElement(_Snackbar2.default, {
	        open: store.open,
	        bodyStyle: { padding: 0, maxWidth: 900 },
	        message: body,
	        autoHideDuration: store.timeout,
	        onRequestClose: function onRequestClose(e) {
	          return store.setToggle(false);
	        }
	      });
	    }
	  }]);

	  return UIMessage;
	}(Component)) || _class;

	exports.default = UIMessage;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(30);

	var _jsonMode = __webpack_require__(330);

	var _jsonMode2 = _interopRequireDefault(_jsonMode);

	var _debounce = __webpack_require__(88);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var ViewOutput = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(ViewOutput, _Component);

	  function ViewOutput(props) {
	    _classCallCheck(this, ViewOutput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ViewOutput).call(this));

	    _this.state = {};
	    var validate = props.store.validate;
	    _this.checkJSON = (0, _debounce2.default)(validate.check.bind(validate), 400);
	    return _this;
	  }

	  _createClass(ViewOutput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var global = this.props.store;
	      var observables = global.observables;
	      var _validate = global.validate;

	      var active = observables.active;
	      var root = active === '/';
	      var showRoot = observables.config.editor.showRoot;
	      var mode = observables.config.mode;
	      var rootSnapshot = observables.rootSnapshot;
	      var showRootSnapshot = root && showRoot && observables.currentView === null;

	      //let interactiveMode = mode === 'interactive' ? 'block' : 'none';
	      var interactiveMode = root && showRoot && mode === 'interactive' || !root && mode === 'interactive' ? 'block' : 'none';
	      var jsonMode = showRootSnapshot || showRoot && observables.currentView && root && mode === 'json' || !root && mode === 'json' && observables.currentView ? 'block' : 'none';
	      var view = void 0;
	      var clean = void 0;

	      try {
	        view = JSON.parse(observables.currentView);
	        clean = true;
	      } catch (err) {
	        view = observables.currentView;
	        clean = false;
	      }
	      if (showRootSnapshot) {
	        view = rootSnapshot;
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', { style: { display: interactiveMode }, ref: 'elm' }),
	        root && !showRoot && _react2.default.createElement(
	          'span',
	          { style: { padding: 10 } },
	          'Cant show rooot. Enable \'show root\' in the config.json or toggle root from the settings icon.'
	        ),
	        _react2.default.createElement(_jsonMode2.default, { data: view, validate: function validate(value) {
	            return _validate.check(value);
	          }, clean: clean, style: { display: jsonMode } })
	      );
	    }
	  }]);

	  return ViewOutput;
	}(Component)) || _class;

	exports.default = ViewOutput;

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Drawer = __webpack_require__(237);

	var _Drawer2 = _interopRequireDefault(_Drawer);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _RaisedButton = __webpack_require__(81);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _Divider = __webpack_require__(108);

	var _Divider2 = _interopRequireDefault(_Divider);

	var _Paper = __webpack_require__(23);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Toggle = __webpack_require__(151);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _IconButton = __webpack_require__(51);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _mobxReact = __webpack_require__(30);

	var _reactRouter = __webpack_require__(86);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _List = __webpack_require__(109);

	var _Subheader = __webpack_require__(111);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _chatBubble = __webpack_require__(562);

	var _chatBubble2 = _interopRequireDefault(_chatBubble);

	var _TextField = __webpack_require__(52);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _debounce = __webpack_require__(88);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _settings = __webpack_require__(559);

	var _settings2 = _interopRequireDefault(_settings);

	var _settings3 = __webpack_require__(335);

	var _settings4 = _interopRequireDefault(_settings3);

	var _FontIcon = __webpack_require__(94);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _delete = __webpack_require__(556);

	var _delete2 = _interopRequireDefault(_delete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  drawer: {
	    overflow: 'none',
	    width: 280
	  },
	  button: {
	    right: 0,
	    position: 'absolute'

	  },
	  flex: {
	    marginTop: 20
	  },
	  show: {
	    transform: 'translateX(280px)'

	  },
	  textField: {
	    width: '100%',
	    boxShadow: 'none'
	  }

	};

	var Sidemenu = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Sidemenu, _Component);

	  function Sidemenu(props) {
	    _classCallCheck(this, Sidemenu);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidemenu).call(this));

	    _this.state = {
	      open: true,
	      settings: false,
	      elm: null
	    };
	    var traverse = props.store.traverse;
	    _this.query = (0, _debounce2.default)(traverse.queryInput.bind(traverse), 800);
	    return _this;
	  }

	  _createClass(Sidemenu, [{
	    key: 'openDatabse',
	    value: function openDatabse(db) {
	      this.props.store.traverse.setCurrentDB(db);
	    }
	  }, {
	    key: 'prepareDelete',
	    value: function prepareDelete(path) {
	      var _props$store = this.props.store;
	      var observables = _props$store.observables;
	      var modify = _props$store.modify;

	      var active = observables.active;

	      if (active === '/') {
	        path = '/' + path;
	      } else {
	        path = active + '/' + path;
	      }

	      var confirm = window.confirm('Are you sure you want to delete \'' + path + '\'? ');
	      if (confirm) {
	        modify.deletePath(path);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var state = this.state;
	      var props = this.props;

	      var global = props.store;
	      var traverse = global.traverse;
	      var observables = global.observables;
	      var util = global.util;


	      var watching = observables.config.watch ? 'Enabled' : 'Disabled';
	      var keyboardSave = observables.config.keyboardSave ? 'Enabled' : 'Disabled';
	      var persistToDisk = observables.config.persistToDisk ? 'Enabled' : 'Disabled';
	      var showRoot = observables.config.editor.showRoot ? 'Enabled' : 'Disabled';
	      var db = observables.nodes.map(function (e) {
	        return _react2.default.createElement(
	          'div',
	          { key: (0, _uuid2.default)(), style: { display: 'inline-flex', width: 270, position: 'relative' } },
	          _react2.default.createElement(_List.ListItem, { className: 'sd', innerDivStyle: { width: 270 },
	            primaryText: _react2.default.createElement(
	              'strong',
	              null,
	              e
	            ), onTouchTap: _this2.openDatabse.bind(_this2, e) }),
	          _react2.default.createElement(
	            _IconButton2.default,
	            { touch: true, onTouchTap: function onTouchTap(f) {
	                return _this2.prepareDelete(e);
	              },
	              tooltip: 'Delete ' + e + '?', tooltipPosition: 'top-left', style: { position: 'absolute', right: 0 }, iconStyle: { fill: '#fa6060' } },
	            _react2.default.createElement(_delete2.default, null)
	          )
	        );
	      });
	      //console.log(props.store.active ,'asnd');
	      return _react2.default.createElement(
	        'div',
	        { className: 'Sidebar' },
	        _react2.default.createElement(
	          _Drawer2.default,
	          { open: true, docked: true, style: { width: 300, overflowX: 'hidden' }, containerStyle: { width: 300, padding: 5 } },
	          _react2.default.createElement(
	            'span',
	            { style: { fontSize: 12 } },
	            observables.config.databaseURL
	          ),
	          _react2.default.createElement(
	            _Subheader2.default,
	            null,
	            _react2.default.createElement(
	              'strong',
	              null,
	              observables.config.databaseName
	            )
	          ),
	          _react2.default.createElement(
	            _Subheader2.default,
	            null,
	            observables.active
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { display: 'flex' } },
	            _react2.default.createElement(_TextField2.default, { id: 'clear', hintText: 'Path', fullWidth: true, style: styles.textField,
	              onChange: function onChange(e) {
	                return _this2.query(e.target.value);
	              } }),
	            _react2.default.createElement(
	              _IconButton2.default,
	              { tooltip: 'Settings', onTouchTap: function onTouchTap(e) {
	                  return _this2.setState({ settings: true, elm: e.currentTarget });
	                } },
	              _react2.default.createElement(_settings2.default, null)
	            )
	          ),
	          _react2.default.createElement(_FlatButton2.default, { style: { width: '100%' }, label: 'back', onTouchTap: function onTouchTap(e) {
	              return traverse.back();
	            } }),
	          _react2.default.createElement(
	            _List.List,
	            null,
	            _react2.default.createElement(
	              _Subheader2.default,
	              null,
	              'Nodes'
	            ),
	            db
	          )
	        ),
	        _react2.default.createElement(_settings4.default, {
	          elm: this.state.elm,
	          open: this.state.settings,
	          store: global, close: function close(e) {
	            return _this2.setState({ settings: false });
	          } })
	      );
	    }
	  }]);

	  return Sidemenu;
	}(Component)) || _class;

	exports.default = Sidemenu;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(30);

	var _Popover = __webpack_require__(65);

	var _Popover2 = _interopRequireDefault(_Popover);

	var _Menu = __webpack_require__(43);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(38);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Toggle = __webpack_require__(151);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Settings = function (_Component) {
	  _inherits(Settings, _Component);

	  function Settings(props) {
	    _classCallCheck(this, Settings);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Settings, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$store = this.props.store;
	      var traverse = _props$store.traverse;
	      var observables = _props$store.observables;
	      var util = _props$store.util;


	      var watching = observables.config.watch ? 'Enabled' : 'Disabled';
	      var keyboardSave = observables.config.keyboardSave ? 'Enabled' : 'Disabled';
	      var persistToDisk = observables.config.persistToDisk ? 'Enabled' : 'Disabled';
	      var showRoot = observables.config.editor.showRoot ? 'Enabled' : 'Disabled';
	      var cacheChecking = observables.config.cacheChecking ? 'Enabled' : 'Disabled';
	      var close = this.props.close;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: this.props.open,
	            anchorEl: this.props.elm,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: close },
	          _react2.default.createElement(
	            'div',
	            { style: { padding: 10, width: 250 } },
	            _react2.default.createElement(_Toggle2.default, { onToggle: function onToggle(e, bool) {
	                return util.toggleCacheChecking(bool);
	              },
	              label: 'Toggle caching?', defaultToggled: observables.config.cacheChecking }),
	            _react2.default.createElement(_Toggle2.default, { onToggle: function onToggle(e, bool) {
	                return util.setupRoot(bool);
	              },
	              label: 'Show Root?', defaultToggled: observables.config.editor.showRoot }),
	            _react2.default.createElement(_Toggle2.default, { onToggle: function onToggle(e, bool) {
	                return util.setupWatch(bool);
	              },
	              label: 'Watch for changes?', defaultToggled: observables.config.watch }),
	            _react2.default.createElement(_Toggle2.default, { onToggle: function onToggle(e, bool) {
	                return util.setProp('config/keyboardSave', bool);
	              },
	              label: 'Ctrl + S to save?', defaultToggled: observables.config.keyboardSave }),
	            _react2.default.createElement(_Toggle2.default, { onToggle: function onToggle(e, bool) {
	                return util.togglePersistToDisk(bool);
	              },
	              label: 'Save to disk on change?', defaultToggled: observables.config.persistToDisk })
	          )
	        )
	      );
	    }
	  }]);

	  return Settings;
	}(Component);

	exports.default = Settings;

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _FlatButton = __webpack_require__(29);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(81);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;


	var styles = {
	  input: {
	    opacity: 0,
	    width: '100%',
	    height: '100%',
	    position: 'absolute',
	    zIndex: 2,
	    cursor: 'pointer'
	  }
	};

	var FlatInput = function (_Component) {
	  _inherits(FlatInput, _Component);

	  function FlatInput(props) {
	    _classCallCheck(this, FlatInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlatInput).call(this));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(FlatInput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'streamData',
	    value: function streamData(onchange, ev) {
	      var fileArray = Array.apply(0, ev.target.files);

	      var self = this;
	      var count = 0;
	      var files = [];
	      fileArray.forEach(function (fileData, index, arr) {
	        var reader = new FileReader();
	        reader.onload = function (res) {
	          count += 1;
	          var data = res.target.result;
	          files.push({ name: fileData.name, data: data });
	          if (count === arr.length) {
	            onchange(files);
	          }
	        };
	        reader.readAsBinaryString(fileData);
	      });

	      console.log("streaming");
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var stream = this.props.stream ? this.streamData.bind(this, this.props.onChange) : this.props.onChange;
	      var multiple = this.props.multiple ? true : false;
	      var input = _react2.default.createElement('input', { accept: this.props.accept,
	        multiple: multiple,
	        style: styles.input,
	        type: 'file',
	        onChange: stream
	      });

	      if (this.props.raised) {
	        return _react2.default.createElement(_RaisedButton2.default, { secondary: this.props.secondary, primary: this.props.primary, label: this.props.label, children: input, style: { cursor: 'pointer' } });
	      } else {
	        return _react2.default.createElement(_FlatButton2.default, { secondary: this.props.secondary, primary: this.props.primary, label: this.props.label, children: input,
	          labelStyle: { textTransform: 'none', fontSize: 16 },
	          style: { height: 48, cursor: 'pointer', width: '100%', textAlign: 'left' } });
	      }
	    }
	  }]);

	  return FlatInput;
	}(Component);

	exports.default = FlatInput;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * UAParser.js v0.7.12
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */

	(function (window, undefined) {

	            'use strict';

	            //////////////
	            // Constants
	            /////////////

	            var LIBVERSION = '0.7.12',
	                EMPTY = '',
	                UNKNOWN = '?',
	                FUNC_TYPE = 'function',
	                UNDEF_TYPE = 'undefined',
	                OBJ_TYPE = 'object',
	                STR_TYPE = 'string',
	                MAJOR = 'major',
	                // deprecated
	            MODEL = 'model',
	                NAME = 'name',
	                TYPE = 'type',
	                VENDOR = 'vendor',
	                VERSION = 'version',
	                ARCHITECTURE = 'architecture',
	                CONSOLE = 'console',
	                MOBILE = 'mobile',
	                TABLET = 'tablet',
	                SMARTTV = 'smarttv',
	                WEARABLE = 'wearable',
	                EMBEDDED = 'embedded';

	            ///////////
	            // Helper
	            //////////

	            var util = {
	                        extend: function extend(regexes, extensions) {
	                                    var margedRegexes = {};
	                                    for (var i in regexes) {
	                                                if (extensions[i] && extensions[i].length % 2 === 0) {
	                                                            margedRegexes[i] = extensions[i].concat(regexes[i]);
	                                                } else {
	                                                            margedRegexes[i] = regexes[i];
	                                                }
	                                    }
	                                    return margedRegexes;
	                        },
	                        has: function has(str1, str2) {
	                                    if (typeof str1 === "string") {
	                                                return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	                                    } else {
	                                                return false;
	                                    }
	                        },
	                        lowerize: function lowerize(str) {
	                                    return str.toLowerCase();
	                        },
	                        major: function major(version) {
	                                    return (typeof version === 'undefined' ? 'undefined' : _typeof(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
	                        },
	                        trim: function trim(str) {
	                                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	                        }
	            };

	            ///////////////
	            // Map helper
	            //////////////

	            var mapper = {

	                        rgx: function rgx() {

	                                    var result = {},
	                                        i = 0,
	                                        j,
	                                        k,
	                                        p,
	                                        q,
	                                        matches,
	                                        match,
	                                        args = arguments;

	                                    // construct object barebones
	                                    for (p = 0; p < args[1].length; p++) {
	                                                q = args[1][p];
	                                                result[(typeof q === 'undefined' ? 'undefined' : _typeof(q)) === OBJ_TYPE ? q[0] : q] = undefined;
	                                    }

	                                    // loop through all regexes maps
	                                    while (i < args.length && !matches) {

	                                                var regex = args[i],
	                                                    // even sequence (0,2,4,..)
	                                                props = args[i + 1]; // odd sequence (1,3,5,..)
	                                                j = k = 0;

	                                                // try matching uastring with regexes
	                                                while (j < regex.length && !matches) {

	                                                            matches = regex[j++].exec(this.getUA());

	                                                            if (!!matches) {
	                                                                        for (p = 0; p < props.length; p++) {
	                                                                                    match = matches[++k];
	                                                                                    q = props[p];
	                                                                                    // check if given property is actually array
	                                                                                    if ((typeof q === 'undefined' ? 'undefined' : _typeof(q)) === OBJ_TYPE && q.length > 0) {
	                                                                                                if (q.length == 2) {
	                                                                                                            if (_typeof(q[1]) == FUNC_TYPE) {
	                                                                                                                        // assign modified match
	                                                                                                                        result[q[0]] = q[1].call(this, match);
	                                                                                                            } else {
	                                                                                                                        // assign given value, ignore regex match
	                                                                                                                        result[q[0]] = q[1];
	                                                                                                            }
	                                                                                                } else if (q.length == 3) {
	                                                                                                            // check whether function or regex
	                                                                                                            if (_typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                                                                                                        // call function (usually string mapper)
	                                                                                                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                                                                                            } else {
	                                                                                                                        // sanitize match using given regex
	                                                                                                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                                                                                            }
	                                                                                                } else if (q.length == 4) {
	                                                                                                            result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                                                                                }
	                                                                                    } else {
	                                                                                                result[q] = match ? match : undefined;
	                                                                                    }
	                                                                        }
	                                                            }
	                                                }
	                                                i += 2;
	                                    }
	                                    return result;
	                        },

	                        str: function str(_str, map) {

	                                    for (var i in map) {
	                                                // check if array
	                                                if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
	                                                            for (var j = 0; j < map[i].length; j++) {
	                                                                        if (util.has(map[i][j], _str)) {
	                                                                                    return i === UNKNOWN ? undefined : i;
	                                                                        }
	                                                            }
	                                                } else if (util.has(map[i], _str)) {
	                                                            return i === UNKNOWN ? undefined : i;
	                                                }
	                                    }
	                                    return _str;
	                        }
	            };

	            ///////////////
	            // String map
	            //////////////

	            var maps = {

	                        browser: {
	                                    oldsafari: {
	                                                version: {
	                                                            '1.0': '/8',
	                                                            '1.2': '/1',
	                                                            '1.3': '/3',
	                                                            '2.0': '/412',
	                                                            '2.0.2': '/416',
	                                                            '2.0.3': '/417',
	                                                            '2.0.4': '/419',
	                                                            '?': '/'
	                                                }
	                                    }
	                        },

	                        device: {
	                                    amazon: {
	                                                model: {
	                                                            'Fire Phone': ['SD', 'KF']
	                                                }
	                                    },
	                                    sprint: {
	                                                model: {
	                                                            'Evo Shift 4G': '7373KT'
	                                                },
	                                                vendor: {
	                                                            'HTC': 'APA',
	                                                            'Sprint': 'Sprint'
	                                                }
	                                    }
	                        },

	                        os: {
	                                    windows: {
	                                                version: {
	                                                            'ME': '4.90',
	                                                            'NT 3.11': 'NT3.51',
	                                                            'NT 4.0': 'NT4.0',
	                                                            '2000': 'NT 5.0',
	                                                            'XP': ['NT 5.1', 'NT 5.2'],
	                                                            'Vista': 'NT 6.0',
	                                                            '7': 'NT 6.1',
	                                                            '8': 'NT 6.2',
	                                                            '8.1': 'NT 6.3',
	                                                            '10': ['NT 6.4', 'NT 10.0'],
	                                                            'RT': 'ARM'
	                                                }
	                                    }
	                        }
	            };

	            //////////////
	            // Regex map
	            /////////////

	            var regexes = {

	                        browser: [[

	                        // Presto based
	                        /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
	                        /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
	                        /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
	                        /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
	                        ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
	                        ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
	                        ], [[NAME, 'Opera'], VERSION], [

	                        // Mixed
	                        /(kindle)\/([\w\.]+)/i, // Kindle
	                        /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                        // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	                        // Trident based
	                        /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                        // Avant/IEMobile/SlimBrowser/Baidu
	                        /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer

	                        // Webkit/KHTML based
	                        /(rekonq)\/([\w\.]+)*/i, // Rekonq
	                        /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
	                        // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
	                        ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
	                        ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
	                        ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
	                        ], [[NAME, 'Yandex'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
	                        ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
	                        ], [[NAME, 'WeChat'], VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
	                        ], [VERSION, [NAME, 'MIUI Browser']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
	                        ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
	                        ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
	                        // Chrome/OmniWeb/Arora/Tizen/Nokia
	                        /(qqbrowser)[\/\s]?([\w\.]+)/i
	                        // QQBrowser
	                        ], [NAME, VERSION], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i
	                        // UCBrowser
	                        ], [[NAME, 'UCBrowser'], VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
	                        ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
	                        ], [[NAME, 'Chrome'], VERSION], [/;fbav\/([\w\.]+);/i // Facebook App for iOS
	                        ], [VERSION, [NAME, 'Facebook']], [/fxios\/([\w\.-]+)/i // Firefox for iOS
	                        ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
	                        ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
	                        ], [VERSION, NAME], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
	                        ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, // Konqueror
	                        /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [

	                        // Gecko based
	                        /(navigator|netscape)\/([\w\.-]+)/i // Netscape
	                        ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, // Swiftfox
	                        /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                        // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	                        /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                        // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	                        /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla

	                        // Other
	                        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	                        /(links)\s\(([\w\.]+)/i, // Links
	                        /(gobrowser)\/?([\w\.]+)*/i, // GoBrowser
	                        /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
	                        /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
	                        ], [NAME, VERSION]

	                        /* /////////////////////
	                        // Media players BEGIN
	                        ////////////////////////
	                          , [
	                          /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	                        /(coremedia) v((\d+)[\w\._]+)/i
	                        ], [NAME, VERSION], [
	                          /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	                        ], [NAME, VERSION], [
	                          /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	                        ], [NAME, VERSION], [
	                          /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                            // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                            // NSPlayer/PSP-InternetRadioPlayer/Videos
	                        /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	                        /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	                        /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	                        ], [NAME, VERSION], [
	                        /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	                        ], [NAME, VERSION], [
	                          /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	                        ], [[NAME, 'Flip Player'], VERSION], [
	                          /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                            // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	                        ], [NAME], [
	                          /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                            // Gstreamer
	                        ], [NAME, VERSION], [
	                          /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	                        /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                            // Java/urllib/requests/wget/cURL
	                        /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	                        ], [NAME, VERSION], [
	                          /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	                        ], [[NAME, /_/g, ' '], VERSION], [
	                          /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                            // MPlayer SVN
	                        ], [NAME, VERSION], [
	                          /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	                        ], [NAME, VERSION], [
	                          /(mplayer)/i,                                                       // MPlayer (no other info)
	                        /(yourmuze)/i,                                                      // YourMuze
	                        /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	                        ], [NAME], [
	                          /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	                        ], [NAME, VERSION], [
	                          /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	                        ], [NAME, VERSION], [
	                          /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	                        ], [NAME, VERSION], [
	                          /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	                        /(winamp)\s((\d+)[\w\.-]+)/i,
	                        /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	                        ], [NAME, VERSION], [
	                          /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                            // inlight radio
	                        ], [NAME], [
	                          /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                            // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                            // SoundTap/Totem/Stagefright/Streamium
	                        ], [NAME, VERSION], [
	                          /(smp)((\d+)[\d\.]+)/i                                              // SMP
	                        ], [NAME, VERSION], [
	                          /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	                        /(vlc)\/((\d+)[\w\.-]+)/i,
	                        /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	                        /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	                        /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	                        ], [NAME, VERSION], [
	                          /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	                        /(windows-media-player)\/((\d+)[\w\.-]+)/i
	                        ], [[NAME, /-/g, ' '], VERSION], [
	                          /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                            // Windows Media Server
	                        ], [VERSION, [NAME, 'Windows']], [
	                          /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	                        ], [NAME, VERSION], [
	                          /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	                        /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	                        ], [[NAME, 'rad.io'], VERSION]
	                          //////////////////////
	                        // Media players END
	                        ////////////////////*/

	                        ],

	                        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
	                        ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
	                        ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
	                        ], [[ARCHITECTURE, 'ia32']], [

	                        // PocketPC mistakenly identified as PowerPC
	                        /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
	                        ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
	                        ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                        // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	                        ], [[ARCHITECTURE, util.lowerize]]],

	                        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
	                        ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
	                        ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
	                        ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, // Archos
	                        /(hp).+(touchpad)/i, // HP TouchPad
	                        /(hp).+(tablet)/i, // HP Tablet
	                        /(kindle)\/([\w\.]+)/i, // Kindle
	                        /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
	                        /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
	                        ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
	                        ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
	                        ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
	                        ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
	                        ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, // BlackBerry
	                        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                        // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
	                        /(hp)\s([\w\s]+\w)/i, // HP iPAQ
	                        /(asus)-?(\w+)/i // Asus
	                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
	                        ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                        // Asus Tablets
	                        /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
	                        /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [/\s(ouya)\s/i, // Ouya
	                        /(nintendo)\s([wids3u]+)/i // Nintendo
	                        ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
	                        ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
	                        ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
	                        ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
	                        ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, // HTC
	                        /(zte)-(\w+)*/i, // ZTE
	                        /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                        // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
	                        ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
	                        ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/(nexus\s6p)/i // Huawei Nexus 6P
	                        ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
	                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
	                        ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
	                        ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

	                        // Motorola
	                        /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
	                        ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
	                        ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [// Samsung
	                        /smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
	                        ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
	                        /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
	                        ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
	                        ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
	                        ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, // LG
	                        /lg[e;\s\/-]+(\w+)*/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
	                        ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
	                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
	                        ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(glass)\s\d/i // Google Glass
	                        ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i // Google Pixel C
	                        ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i // Google Pixel
	                        ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
	                        /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
	                        /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i // Xiaomi Mi
	                        ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+a000(1)\s+build/i // OnePlus
	                        ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/\s(tablet)[;\/]/i, // Unidentifiable Tablet
	                        /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
	                        ], [[TYPE, util.lowerize], VENDOR, MODEL]

	                        /*//////////////////////////
	                        // TODO: move to string map
	                        ////////////////////////////
	                          /(C6603)/i                                                          // Sony Xperia Z C6603
	                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	                        /(C6903)/i                                                          // Sony Xperia Z 1
	                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	                          /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	                          /(R1001)/i                                                          // Oppo R1001
	                        ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
	                        /(X9006)/i                                                          // Oppo Find 7a
	                        ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	                        /(R2001)/i                                                          // Oppo YOYO R2001
	                        ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	                        /(R815)/i                                                           // Oppo Clover R815
	                        ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	                         /(U707)/i                                                          // Oppo Find Way S
	                        ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	                          /(T3C)/i                                                            // Advan Vandroid T3C
	                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
	                          /(V972M)/i                                                          // ZTE V972M
	                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
	                          /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	                          /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
	                          /////////////
	                        // END TODO
	                        ///////////*/

	                        ],

	                        engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
	                        ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, // Presto
	                        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	                        /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
	                        /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
	                        ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
	                        ], [VERSION, NAME]],

	                        os: [[

	                        // Windows based
	                        /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
	                        ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
	                        /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, // Windows Phone
	                        /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	                        // Mobile/Embedded OS
	                        /\((bb)(10);/i // BlackBerry 10
	                        ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, // Blackberry
	                        /(tizen)[\/\s]([\w\.]+)/i, // Tizen
	                        /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                        // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	                        /linux;.+(sailfish);/i // Sailfish OS
	                        ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
	                        ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
	                        ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
	                        ], [[NAME, 'Firefox OS'], VERSION], [

	                        // Console
	                        /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation

	                        // GNU/Linux based
	                        /(mint)[\/\s\(]?(\w+)*/i, // Mint
	                        /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
	                        /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
	                        // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                        // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	                        /(hurd|linux)\s?([\w\.]+)*/i, // Hurd/Linux
	                        /(gnu)\s?([\w\.]+)*/i // GNU
	                        ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
	                        ], [[NAME, 'Chromium OS'], VERSION], [

	                        // Solaris
	                        /(sunos)\s?([\w\.]+\d)*/i // Solaris
	                        ], [[NAME, 'Solaris'], VERSION], [

	                        // BSD based
	                        /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	                        ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
	                        ], [NAME, VERSION], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i // iOS
	                        ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
	                        ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	                        // Other
	                        /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, // Solaris
	                        /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, // AIX
	                        /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                        // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	                        /(unix)\s?([\w\.]+)*/i // UNIX
	                        ], [NAME, VERSION]]
	            };

	            /////////////////
	            // Constructor
	            ////////////////

	            var UAParser = function UAParser(uastring, extensions) {

	                        if (!(this instanceof UAParser)) {
	                                    return new UAParser(uastring, extensions).getResult();
	                        }

	                        var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
	                        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

	                        this.getBrowser = function () {
	                                    var browser = mapper.rgx.apply(this, rgxmap.browser);
	                                    browser.major = util.major(browser.version);
	                                    return browser;
	                        };
	                        this.getCPU = function () {
	                                    return mapper.rgx.apply(this, rgxmap.cpu);
	                        };
	                        this.getDevice = function () {
	                                    return mapper.rgx.apply(this, rgxmap.device);
	                        };
	                        this.getEngine = function () {
	                                    return mapper.rgx.apply(this, rgxmap.engine);
	                        };
	                        this.getOS = function () {
	                                    return mapper.rgx.apply(this, rgxmap.os);
	                        };
	                        this.getResult = function () {
	                                    return {
	                                                ua: this.getUA(),
	                                                browser: this.getBrowser(),
	                                                engine: this.getEngine(),
	                                                os: this.getOS(),
	                                                device: this.getDevice(),
	                                                cpu: this.getCPU()
	                                    };
	                        };
	                        this.getUA = function () {
	                                    return ua;
	                        };
	                        this.setUA = function (uastring) {
	                                    ua = uastring;
	                                    return this;
	                        };
	                        return this;
	            };

	            UAParser.VERSION = LIBVERSION;
	            UAParser.BROWSER = {
	                        NAME: NAME,
	                        MAJOR: MAJOR, // deprecated
	                        VERSION: VERSION
	            };
	            UAParser.CPU = {
	                        ARCHITECTURE: ARCHITECTURE
	            };
	            UAParser.DEVICE = {
	                        MODEL: MODEL,
	                        VENDOR: VENDOR,
	                        TYPE: TYPE,
	                        CONSOLE: CONSOLE,
	                        MOBILE: MOBILE,
	                        SMARTTV: SMARTTV,
	                        TABLET: TABLET,
	                        WEARABLE: WEARABLE,
	                        EMBEDDED: EMBEDDED
	            };
	            UAParser.ENGINE = {
	                        NAME: NAME,
	                        VERSION: VERSION
	            };
	            UAParser.OS = {
	                        NAME: NAME,
	                        VERSION: VERSION
	            };

	            ///////////
	            // Export
	            //////////

	            // check js environment
	            if (( false ? 'undefined' : _typeof(exports)) !== UNDEF_TYPE) {
	                        // nodejs env
	                        if (( false ? 'undefined' : _typeof(module)) !== UNDEF_TYPE && module.exports) {
	                                    exports = module.exports = UAParser;
	                        }
	                        exports.UAParser = UAParser;
	            } else {
	                        // requirejs env (optional)
	                        if (( false ? 'undefined' : _typeof(__webpack_require__(194))) === FUNC_TYPE && __webpack_require__(322)) {
	                                    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                                                return UAParser;
	                                    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	                        } else {
	                                    // browser env
	                                    window.UAParser = UAParser;
	                        }
	            }
	})((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(195)(module)))

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor;

	var _mobx = __webpack_require__(39);

	var _debounce = __webpack_require__(88);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _queryString = __webpack_require__(159);

	var _reactRouter = __webpack_require__(86);

	var _userAgent = __webpack_require__(337);

	var _userAgent2 = _interopRequireDefault(_userAgent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var x_device = (_class = function () {
	  _createClass(x_device, [{
	    key: 'resize',
	    value: function resize(width, height) {
	      this.screen.width = width;
	      this.screen.height = height;

	      var self = this;
	      if (width > self.mq.lg) {
	        self.global.then(function (global) {
	          return global.toggle('sidebar', true);
	        });
	      } else {
	        self.global.then(function (global) {
	          return global.toggle('sidebar', false);
	        });
	      }

	      if (width !== this.screen.init_width && height !== this.screen.init_height) {

	        if (width > self.mq.lg) {
	          self.global.then(function (global) {
	            return global.toggle('sidebar', true);
	          });
	        } else {
	          self.global.then(function (global) {
	            return global.toggle('sidebar', false);
	          });
	        }
	      }
	    }
	  }, {
	    key: 'autoCheckScreen',
	    value: function autoCheckScreen() {

	      if (this.deviceType === 'mobile' || this.deviceType === 'tablet') {
	        this.global.then(function (global) {
	          return global.toggle('sidebar', false);
	        });
	      } else {
	        // device is desktop
	        if (this.screen.width > this.mq.lg) {
	          // if window width > 1200px then open sidebar
	          this.global.then(function (global) {
	            return global.toggle('sidebar', true);
	          });
	        }
	      }
	    }
	  }], [{
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      if (typeof window !== 'undefined') {
	        (function () {
	          _this.window = true;
	          var self = _this.prototype;
	          var ua = (0, _userAgent2.default)(window.navigator.userAgent);
	          self.os = ua.os.name.toLowerCase() + ' ' + ua.os.version;
	          self.deviceType = ua.device.type ? ua.device.type : 'desktop';
	          self.browser = ua.browser.name;
	          self.engine = ua.engine.name;
	          self.cpuCount = window.navigator.hardwareConcurrency;
	          self.mq = {
	            xsm: 400,
	            sm: 450,
	            md: 720,
	            lg: 1200,
	            xlg: 1920,
	            xxlg: 2100
	          };
	          self.screen.width = window.innerWidth;
	          self.screen.height = window.innerHeight;
	          self.screen.init_width = window.innerWidth;
	          self.screen.init_height = window.innerHeight;
	          self.watchScreen = function () {
	            var _this2 = this;

	            var work = function work(e) {
	              return self.resize.bind(_this2)(window.innerWidth, window.innerHeight);
	            };
	            window.addEventListener('resize', (0, _debounce2.default)(work, 200));
	          };
	        })();
	      }
	    }
	  }]);

	  function x_device(global_store) {
	    _classCallCheck(this, x_device);

	    _initDefineProp(this, 'screen', _descriptor, this);

	    this.global = global_store;
	    // checks if sidebar should be open or not
	    if (this.window) {
	      this.autoCheckScreen();
	      this.watchScreen();
	    }
	  }

	  return x_device;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'screen', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return {
	      width: 0,
	      height: 0,
	      init_width: 0,
	      init_height: 0
	    };
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'resize', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'resize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'autoCheckScreen', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'autoCheckScreen'), _class.prototype)), _class);
	exports.default = !x_device.init() && x_device;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

	var _mobx = __webpack_require__(39);

	var _index = __webpack_require__(90);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	// observables only

	var _observables = (_class = function () {
	  function _observables() {
	    _classCallCheck(this, _observables);

	    _initDefineProp(this, 'show_sidebar', _descriptor, this);

	    _initDefineProp(this, 'show_bottom_action', _descriptor2, this);

	    _initDefineProp(this, 'show_dialog', _descriptor3, this);

	    _initDefineProp(this, 'show_recovery', _descriptor4, this);

	    _initDefineProp(this, 'firebase_action', _descriptor5, this);

	    _initDefineProp(this, 'currentView', _descriptor6, this);

	    _initDefineProp(this, 'errorCurrentView', _descriptor7, this);

	    _initDefineProp(this, 'active', _descriptor8, this);

	    _initDefineProp(this, 'editor', _descriptor9, this);

	    _initDefineProp(this, 'nodes', _descriptor10, this);

	    _initDefineProp(this, 'modes', _descriptor11, this);

	    _initDefineProp(this, 'isWatching', _descriptor12, this);

	    _initDefineProp(this, 'hasError', _descriptor13, this);

	    _initDefineProp(this, 'show_update', _descriptor14, this);

	    _initDefineProp(this, 'show_modified', _descriptor15, this);

	    _initDefineProp(this, 'validJSON', _descriptor16, this);

	    _initDefineProp(this, 'checking', _descriptor17, this);

	    _initDefineProp(this, 'syncing', _descriptor18, this);

	    _initDefineProp(this, 'snapshots', _descriptor19, this);

	    _initDefineProp(this, 'selectedSnapshot', _descriptor20, this);

	    _initDefineProp(this, 'config', _descriptor21, this);
	  }

	  _createClass(_observables, [{
	    key: 'setProp',
	    value: function setProp(prop, value) {
	      this[prop] = value;
	    }
	  }]);

	  return _observables;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'show_sidebar', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'show_bottom_action', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'show_dialog', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'show_recovery', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'firebase_action', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 'update';
	  }
	}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'currentView', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'errorCurrentView', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'active', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'editor', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'nodes', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'modes', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return ['json', 'interactive'];
	  }
	}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'isWatching', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'hasError', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'show_update', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'show_modified', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'validJSON', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'checking', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return null;
	  }
	}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'syncing', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'snapshots', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'selectedSnapshot', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return '';
	  }
	}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'config', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return {
	      databaseName: '',
	      databaseURL: '',
	      defaultNode: '/',
	      localDB: '',
	      watch: false,
	      keyboardSave: true,
	      persistToDisk: true,
	      cacheChecking: true,
	      mode: 'json',
	      url: '',
	      editor: {
	        showRoot: false,
	        firstRun: false,
	        charLimit: 0
	      }
	    };
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'setProp', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setProp'), _class.prototype)), _class);

	exports.default = _observables;

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _mobx = __webpack_require__(39);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _regex = __webpack_require__(89);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var Modify = (_class = function () {
	  function Modify(mobx$, requestMessages, superClass) {
	    _classCallCheck(this, Modify);

	    this.$ = mobx$;
	    this.msg = function (newMessage) {
	      return requestMessages.then(function (msg) {
	        return msg.say(newMessage);
	      });
	    };
	    this.requestMessages = requestMessages;
	    this.socket = window.firebase_dashboard.sockets.db;
	    this.superClass = superClass;
	  }

	  _createClass(Modify, [{
	    key: 'onSave',
	    value: function onSave() {
	      //console.log(33, this.$.currentView);
	    }
	  }, {
	    key: 'undo',
	    value: function undo() {
	      console.log('undoing', this.$.active);
	      this.socket.emit('undo', this.$.active);
	    }
	  }, {
	    key: 'setView',
	    value: function setView(obj) {
	      console.log('setting view...');
	      if (obj) {
	        this.$.currentView = JSON.stringify(obj);
	        this.$.editor.setValue(obj);
	      } else {
	        this.$.currentView = null;
	        this.$.editor.setValue(false);
	      }
	    }
	  }, {
	    key: 'sync',
	    value: function sync() {
	      console.log("syncing");
	      if (this.$.active && this.$.currentView) {
	        if (this.$.config.editor.showRoot) {
	          this.$.syncing = true;
	          this.socket.emit('sync', { path: this.$.active, method: 'set', data: JSON.parse(this.$.currentView) });
	        } else if (this.$.active !== '/' && this.$.currentView) {
	          this.$.syncing = true;
	          this.socket.emit('sync', { path: this.$.active, method: 'set', data: JSON.parse(this.$.currentView) });
	        }
	      }
	    }
	  }, {
	    key: 'newItem',
	    value: function newItem(type) {
	      console.log("adding new item", type);
	      var view = this.$.currentView;
	      var allowAll = type === 'object' || type === 'array' || type === 'number' || type === 'string';

	      var getType = function getType(_type) {
	        var allTypes = {
	          string: '',
	          number: 0,
	          array: [],
	          object: {}
	        };
	        return allTypes[type];
	      };

	      if (view !== null) {
	        try {
	          var nextView = JSON.parse(view);
	          var currentType = Array.isArray(nextView) ? 'array' : 'object';

	          if (currentType === 'array') {

	            nextView.push(getType(type));
	          }
	          if (currentType === 'object') {
	            var id = (0, _uuid2.default)().match(/[a-z0-9]+$/i);

	            var temp = _defineProperty({}, type.toUpperCase() + '_' + id[0], getType(type));

	            nextView = Object.assign(nextView, temp);
	          }
	          this.setView(nextView);
	        } catch (err) {
	          console.log("failed", err);
	          this.msg('cant add \'' + type + '\' to type \'' + (typeof view === 'undefined' ? 'undefined' : _typeof(view)) + '\'');
	        }
	      }
	    }
	  }, {
	    key: 'resetPath',
	    value: function resetPath() {
	      var path = this.$.active;
	      var self = this;
	      console.log('Reseting ' + path + ' to ealiest version for this session');
	      var actions = [{ label: 'Reset', callback: function callback() {

	          self.requestMessages.then(function (msg) {
	            return msg.cancel();
	          });
	          self.socket.emit('reset-path', path);
	        }
	      }, { label: 'Cancel', callback: function callback() {
	          self.requestMessages.then(function (msg) {
	            return msg.cancel();
	          });
	        }
	      }];
	      this.requestMessages.then(function (msg) {
	        msg.specialSay('Reset \'' + path + '\' to earliest version?', actions);
	      });
	    }
	  }, {
	    key: 'createNewPath',
	    value: function createNewPath(pathname) {
	      var match = pathname.match(_regex.regex.path);
	      console.log('creating new path ' + this.$.active + '/pathname');
	      if (match) {
	        if (match[0].trim().length) {
	          this.socket.emit('sync', { path: this.$.active + '/' + pathname, method: 'update', data: { init: (0, _uuid2.default)() } });
	          this.$.nodes.push(pathname);
	        } else {
	          this.msg('Invalid path');
	        }
	      } else {
	        this.msg('Invalid path');
	      }
	    }
	  }, {
	    key: 'deletePath',
	    value: function deletePath(pathname) {
	      var index = this.$.nodes.indexOf(pathname);
	      this.$.nodes.splice(index, 1);

	      this.socket.emit('sync', { path: this.$.active + '/' + pathname, method: 'set', data: {} });
	    }
	  }]);

	  return Modify;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'onSave', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'onSave'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'undo', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'undo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setView', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setView'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sync', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'sync'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'newItem', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'newItem'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resetPath', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'resetPath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createNewPath', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'createNewPath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'deletePath', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'deletePath'), _class.prototype)), _class);
	exports.default = Modify;

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _mobx = __webpack_require__(39);

	var _index = __webpack_require__(90);

	var _index2 = _interopRequireDefault(_index);

	var _regex = __webpack_require__(89);

	var _debounce = __webpack_require__(88);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var Traverse = (_class = function () {
	  function Traverse(mobx$, requestMessages, superClass) {
	    _classCallCheck(this, Traverse);

	    this.$ = mobx$;
	    this.requestMessages = requestMessages;
	    this.msg = function (newMessage) {
	      return requestMessages.then(function (msg) {
	        return msg.say(newMessage);
	      });
	    };
	    this.socket = window.firebase_dashboard.sockets.db;
	    this.superClass = superClass;
	  }

	  _createClass(Traverse, [{
	    key: 'query',
	    value: function query(path) {
	      this.$.active = path;
	      this.socket.emit('query', path);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this = this;

	      this.global.then(function (parent) {

	        var result = parent.check(_this.$.currentView);
	        if (!result) {
	          return;
	        }
	        //this will be only updateing
	        var data = _this.$.editor.getValue();
	        if (data) {
	          _this.socket.emit('update-cache', { path: _this.$.active, data: data });
	          _this.socket.emit('sync-firebase', { path: _this.$.active, data: data, method: 'update' });
	        }
	      });
	    }
	  }, {
	    key: 'query',
	    value: function query(nextPath) {
	      this.$.active = nextPath;
	      this.socket.emit('query', nextPath);
	    }
	  }, {
	    key: 'back',
	    value: function back() {
	      var active = this.$.active;

	      if (active.match(_regex.regex.firebase_path)) {
	        var nextPath = active.split('/');
	        nextPath.pop();

	        if (nextPath.length === 1 && nextPath[0] === '') {
	          nextPath = '/';
	          this.setView(this.$.rootSnapshot);
	          this.query('/');
	        } else {
	          this.setView(null);
	          nextPath = nextPath.join('/');
	          this.query(nextPath);
	        }
	      }
	    }
	  }, {
	    key: 'setCurrentDB',
	    value: function setCurrentDB(db) {

	      if (this.$.active === '/') {
	        this.$.active = '' + this.$.active + db;
	      } else {
	        this.$.active = this.$.active + '/' + db;
	      }

	      this.socket.emit('query', this.$.active);
	    }
	  }, {
	    key: 'setView',
	    value: function setView(obj) {

	      if (obj) {
	        for (var prop in obj) {
	          if (typeof obj[prop] === 'number') {
	            obj[prop] = obj[prop].toString();
	          }
	        }
	        this.$.currentView = JSON.stringify(obj);
	        this.$.editor.setValue(obj);
	      } else {
	        this.$.currentView = null;
	        this.$.editor.setValue(false);
	      }
	    }
	  }, {
	    key: 'checkSize',
	    value: function checkSize(json, _callback) {
	      var _this2 = this;

	      var js = JSON.stringify(json);
	      var self = this;
	      if (js.length > 8000) {
	        (function () {
	          var actions = [{ label: 'Render', callback: function callback() {
	              self.requestMessages.then(function (msg) {
	                msg.cancel();
	              });
	              _callback('render');
	            }
	          }, { label: 'show first 8000 chars', callback: function callback() {
	              self.requestMessages.then(function (msg) {
	                msg.cancel();
	              });
	              _callback('first 8000');
	            }
	          }, { label: 'cancel', callback: function callback() {
	              self.requestMessages.then(function (msg) {
	                msg.cancel();
	              });
	              _callback(null);
	            }
	          }];
	          _this2.requestMessages.then(function (msg) {
	            msg.specialSay('Content exeeds 8000+ chars!', actions);
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'limitJSONSize',
	    value: function limitJSONSize(json, limit) {
	      var score = 0;
	      var newObj = {};

	      var rootKeys = Object.keys(json).reduce(function (start, item) {
	        return start += item.length;
	      }, score);
	      score += rootKeys;

	      var walker = function walker(tree, parentProp) {
	        if (score >= limit) {
	          return newObj;
	        } else {
	          if ((typeof tree === 'undefined' ? 'undefined' : _typeof(tree)) === 'object') {
	            for (var prop in tree) {
	              score += tree[prop].toString().length + prop.toString().length;
	              walker(tree[prop], prop);
	            }
	          } else {
	            newObj[parentProp] = tree;
	          }
	        }

	        return newObj;
	      };
	      return walker(json);
	    }
	  }, {
	    key: 'prepareSnapshot',
	    value: function prepareSnapshot(obj) {
	      var _this3 = this;

	      var self = this;
	      var totalLength = JSON.stringify(obj);
	      var root = this.$.active === '/';
	      var showRoot = this.$.config.editor.showRoot;
	      var nodes = this.$.nodes;
	      var charLimit = self.$.config.editor.charLimit;
	      var actions = [{ label: 'Render', callback: function callback() {
	          self.setView(obj);
	          nodes = Object.keys(obj);
	          self.requestMessages.then(function (msg) {
	            msg.cancel();
	          });
	        }
	      }, { label: 'show first ' + self.$.config.editor.charLimit + ' chars', callback: function callback() {
	          var data = self.limitJSONSize(obj, charLimit);

	          nodes = Object.keys(data);
	          if (!nodes.length) {
	            self.setView(null);
	            self.msg('could not render ' + self.$.active);
	            return;
	          }

	          self.setView(data);
	          self.requestMessages.then(function (msg) {
	            msg.cancel();
	          });
	        }
	      }, { label: 'cancel', callback: function callback() {
	          nodes = [];
	          self.setView(null);
	          self.requestMessages.then(function (msg) {
	            msg.cancel();
	          });
	        }
	      }];

	      if (totalLength.length > this.$.config.editor.charLimit) {
	        if (root && showRoot) {
	          this.requestMessages.then(function (msg) {
	            msg.specialSay('Content exeeds ' + _this3.$.config.editor.charLimit + ' chars!', actions);
	          });
	        } else if (!root) {
	          this.requestMessages.then(function (msg) {
	            msg.specialSay('Content exeeds ' + _this3.$.config.editor.charLimit + ' chars!', actions);
	          });
	        }
	      }
	    }
	  }, {
	    key: 'onQuery',
	    value: function onQuery(snapshot) {
	      var _this4 = this;

	      var self = this;
	      var charLimit = self.$.config.editor.charLimit;
	      var nodes = this.$.nodes;
	      var totalLength = JSON.stringify(snapshot);
	      if (snapshot) {
	        (function () {
	          //this.prepareSnapshot(snapshot);

	          if (!_this4.$.rootSnapshot) {
	            _this4.$.rootSnapshot = snapshot;
	          }

	          var nodes = Object.keys(snapshot);
	          if ((typeof snapshot === 'undefined' ? 'undefined' : _typeof(snapshot)) === 'object' && snapshot !== null || Array.isArray(snapshot)) {
	            _this4.$.nodes = nodes;
	            //  console.log(nodes);
	          } else {
	              _this4.$.nodes = [];
	            }

	          if (_this4.$.config.persistToDisk) {
	            _this4.socket.emit('sync-locally', { path: _this4.$.active, data: snapshot });
	          }
	          if (!_this4.$.config.editor.firstRun) {
	            _this4.$.config.editor.firstRun = true;
	          } else {

	            if (_this4.$.active === '/') {
	              _this4.$.rootSnapshot = snapshot;

	              _this4.$.config.editor.showRoot ? _this4.setView(snapshot) : _this4.setView(null);
	            } else {
	              if (totalLength.length > _this4.$.config.editor.charLimit) {
	                (function () {

	                  var actions = [{ label: 'Render', callback: function callback() {
	                      self.setView(snapshot);
	                      nodes = Object.keys(snapshot);
	                      self.requestMessages.then(function (msg) {
	                        msg.cancel();
	                      });
	                    }
	                  }, { label: 'show first \'' + self.$.config.editor.charLimit + '\' chars', callback: function callback() {
	                      var data = self.limitJSONSize(snapshot, charLimit);
	                      nodes = Object.keys(data);
	                      if (!nodes.length) {

	                        self.setView(null);
	                        self.requestMessages.then(function (msg) {
	                          msg.cancel();
	                          self.msg('could not render ' + self.$.active);
	                        });
	                        return;
	                      }
	                      self.setView(data);
	                      self.requestMessages.then(function (msg) {
	                        msg.cancel();
	                      });
	                    }
	                  }, { label: 'cancel', callback: function callback() {
	                      nodes = [];
	                      self.setView(null);
	                      self.requestMessages.then(function (msg) {
	                        msg.cancel();
	                      });
	                    }
	                  }];

	                  _this4.requestMessages.then(function (msg) {
	                    msg.specialSay('Content exeeds ' + _this4.$.config.editor.charLimit + ' chars!', actions);
	                  });
	                })();
	              } else {
	                self.setView(snapshot);
	              }
	            }
	          }
	        })();
	      } else {
	        this.setView(null);
	        this.msg('Nothing found at \'' + this.$.active + '\'');
	      }
	    }
	  }, {
	    key: 'queryInput',
	    value: function queryInput(uncleanPath) {
	      if (uncleanPath.match(_regex.regex.firebase_path)) {
	        //  this.$.active = uncleanPath;
	        this.query(uncleanPath);
	      } else {

	        if (this.$.active === '/' || !uncleanPath.lenth) {
	          this.setView(null);
	          this.$.active = '/';
	        } else {
	          this.msg('invalid path got \'' + uncleanPath + '\'');
	        }
	      }
	    }
	  }]);

	  return Traverse;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'query', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'query'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'update', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'update'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'query', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'query'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'back', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'back'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setCurrentDB', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setCurrentDB'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setView', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setView'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkSize', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'checkSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'prepareSnapshot', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'prepareSnapshot'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onQuery', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'onQuery'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'queryInput', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'queryInput'), _class.prototype)), _class);
	exports.default = Traverse;

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _index = __webpack_require__(90);

	var _index2 = _interopRequireDefault(_index);

	var _mobx = __webpack_require__(39);

	var _regex = __webpack_require__(89);

	var _uuid = __webpack_require__(47);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _superagent = __webpack_require__(321);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var Util = (_class = function () {
	  function Util(mobx$, requestMessages, superClass) {
	    _classCallCheck(this, Util);

	    this.$ = mobx$;
	    this.msg = function (newMessage) {
	      return requestMessages.then(function (msg) {
	        return msg.say(newMessage);
	      });
	    };
	    this.requestMessages = requestMessages;
	    this.socket = window.firebase_dashboard.sockets.db;
	    this.superClass = superClass;
	  }

	  _createClass(Util, [{
	    key: 'setEditor',
	    value: function setEditor(editor) {
	      console.log("interactive editor mounted");
	      this.$.editor = editor;
	    }
	  }, {
	    key: 'setProp',
	    value: function setProp(prop, value) {
	      var nested = prop.split('/');
	      if (nested.length === 1) {
	        this.$[prop] = value;
	      }
	      if (nested.length === 2) {
	        this.$[nested[0]][nested[1]] = value;
	      }
	      if (nested.length === 3) {
	        this.$[nested[0]][nested[1]][nested[2]] = value;
	      }
	      //console.log(prop , value);
	    }
	  }, {
	    key: 'setView',
	    value: function setView(obj) {
	      console.log("setting view...");
	      if (obj) {
	        this.$.currentView = JSON.stringify(obj);
	        this.$.editor.setValue(obj);
	      } else {
	        this.$.currentView = null;
	        this.$.editor.setValue(false);
	      }
	    }
	  }, {
	    key: 'query',
	    value: function query(path) {
	      console.log("querying", path);
	      this.socket.emit('query', path);
	    }
	  }, {
	    key: 'setupWatch',
	    value: function setupWatch(bool) {
	      this.$.config.editor.showRoot = bool;
	      console.log("currently watching", bool);
	      if (this.$.active === '/' && bool) {
	        if (this.$.rootSnapshot) {
	          this.setView(this.$.rootSnapshot);
	        } else {
	          this.query('/');
	        }
	      } else {
	        this.setView({});
	      }
	    }
	  }, {
	    key: 'importFromURL',
	    value: function importFromURL(url) {
	      var _this = this;

	      var self = this;
	      console.log('importing from ' + url);
	      if (url.match(_regex.regex.url)) {
	        var request = _superagent2.default.get(url).send().set('Accept', 'application/json').end(function (err, res) {
	          if (err) {
	            _this.msg('Error fetching ' + url);
	            return;
	          }
	          try {
	            (function () {
	              var data = JSON.parse(res.text);

	              var messageToSay = 'This will overwrite \'' + _this.$.active + '\' path! Continue?';
	              var actions = [{ label: 'Yes', callback: function callback() {
	                  self.setView(data);
	                  self.requestMessages.then(function (msg) {
	                    return msg.cancel();
	                  });
	                  self.socket.emit('sync', { path: self.$.active, method: 'set', data: data });
	                }
	              }, { label: 'Cancel', callback: function callback() {
	                  self.requestMessages.then(function (msg) {
	                    return msg.cancel();
	                  });
	                }
	              }];
	              _this.requestMessages.then(function (msg) {
	                return msg.specialSay(messageToSay, actions);
	              });
	            })();
	          } catch (err) {
	            _this.msg('Error parseing JSON | ' + err.toString());
	          }
	        });
	      } else {
	        this.msg('invalid url');
	      }
	    }
	  }, {
	    key: 'importFromLocal',
	    value: function importFromLocal(incomingData) {
	      var self = this;
	      console.log('importing locally');
	      var messageToSay = 'This will overwrite \'' + this.$.active + '\' path! Continue?';
	      var actions = [{ label: 'Yes', callback: function callback() {
	          self.setView(incomingData);
	          self.requestMessages.then(function (msg) {
	            return msg.cancel();
	          });
	          self.socket.emit('sync', { path: self.$.active, method: 'set', data: incomingData });
	        }
	      }, { label: 'Cancel', callback: function callback() {
	          self.requestMessages.then(function (msg) {
	            return msg.cancel();
	          });
	        }
	      }];
	      this.requestMessages.then(function (msg) {
	        return msg.specialSay(messageToSay, actions);
	      });
	    }
	  }, {
	    key: 'switchMode',
	    value: function switchMode(nextMode) {
	      var modes = this.$.modes;
	      console.log('switched to ' + nextMode);
	      if (modes.includes(nextMode)) {
	        this.$.config.mode = nextMode;
	      } else {
	        this.msg('invalid mode');
	      }
	    }
	  }, {
	    key: 'useSnapshot',
	    value: function useSnapshot(snapshotName) {
	      console.log('now using snapshot \'' + snapshotName + '\'');
	      if (this.$.snapshots.includes(snapshotName)) {
	        this.$.selectedSnapshot = snapshotName;
	      } else {
	        this.msg('Cant find snapshot \'' + snapshotName + '\'');
	      }
	    }
	  }, {
	    key: 'failsafe',
	    value: function failsafe() {
	      console.warn('About to switch databases!!! to ' + this.$.selectedSnapshot);
	      var confirm = window.confirm('THIS CANT BE UNDONE! Countie anyways?');
	      if (confirm) {
	        this.socket.emit('use-snapshot', this.$.selectedSnapshot);
	      }
	    }
	  }, {
	    key: 'togglePersistToDisk',
	    value: function togglePersistToDisk(bool) {
	      this.$.config.persistToDisk = bool;
	      var config = this.$.config;
	      this.socket.emit('sync-config', JSON.stringify(config));
	    }
	  }, {
	    key: 'setupRoot',
	    value: function setupRoot(bool) {
	      this.$.config.editor.showRoot = bool;
	      console.log("show root enabled");
	    }
	  }, {
	    key: 'toggleCacheChecking',
	    value: function toggleCacheChecking(bool) {
	      console.log('toggleing cache checking');
	      this.$.config.cacheChecking = bool;
	      var config = this.$.config;
	      this.socket.emit('sync-config', JSON.stringify(config));
	    }
	  }]);

	  return Util;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'setEditor', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setEditor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setProp', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setProp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setView', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setView'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'query', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'query'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setupWatch', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setupWatch'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'importFromURL', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'importFromURL'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'importFromLocal', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'importFromLocal'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'switchMode', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'switchMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'useSnapshot', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'useSnapshot'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'failsafe', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'failsafe'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'togglePersistToDisk', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'togglePersistToDisk'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setupRoot', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setupRoot'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'toggleCacheChecking', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'toggleCacheChecking'), _class.prototype)), _class);
	exports.default = Util;

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _index = __webpack_require__(90);

	var _index2 = _interopRequireDefault(_index);

	var _mobx = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var Validator = (_class = function () {
	  function Validator(mobx$, requestMessages) {
	    _classCallCheck(this, Validator);

	    this.$ = mobx$;
	    this.msg = function (newMessage) {
	      return requestMessages.then(function (msg) {
	        return msg.say(newMessage);
	      });
	    };
	    this.timeout = null;
	    this.socket = window.firebase_dashboard.sockets.db;
	  }

	  _createClass(Validator, [{
	    key: 'setView',
	    value: function setView(obj) {
	      console.log("setting view...");
	      if (obj) {
	        this.$.currentView = JSON.stringify(obj);
	        this.$.editor.setValue(obj);
	      } else {
	        this.$.currentView = null;
	        this.$.editor.setValue(false);
	      }
	    }
	  }, {
	    key: 'check',
	    value: function check(json) {
	      var _this = this;

	      console.log("checking json...");
	      //  console.log(json);

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        if (_this.$.validJSON) {
	          _this.$.syncing = true;
	          _this.socket.emit('sync', { path: _this.$.active, method: 'set', data: JSON.parse(_this.$.currentView) });
	        } else {}
	        _this.$.validJSON = null;
	      }, 4000);

	      try {
	        var newview = JSON.parse(json);
	        for (var prop in newview) {
	          if (typeof newview[prop] === 'number') {
	            newview[prop] = newview[prop].toString();
	          }
	        }
	        this.$.validJSON = true;
	        this.$.currentView = json;
	      } catch (err) {
	        this.$.validJSON = false;
	        this.$.currentView = json;
	        this.msg(err.toString());
	      }
	      //console.log(this.$.validJSON);
	    }
	  }, {
	    key: 'checkEditor',
	    value: function checkEditor(errorArray) {
	      if (this.$.config.mode === 'interactive' && this.$.currentView) {

	        this.$.syncing = true;
	        this.socket.emit('sync', { path: this.$.active, method: 'set', data: JSON.parse(this.$.currentView) });
	      }
	    }
	  }, {
	    key: 'resetValidateUI',
	    value: function resetValidateUI() {}
	  }]);

	  return Validator;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'setView', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setView'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'check', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'check'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkEditor', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'checkEditor'), _class.prototype)), _class);
	exports.default = Validator;

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (messages, this_instance) {
	  var observables = new _$2.default();

	  return Object.assign(new _index2.default(observables, messages, this_instance), {
	    observables: observables,
	    traverse: new _traverse2.default(observables, messages, this_instance),
	    modify: new _modify2.default(observables, messages),
	    validate: new _validate2.default(observables, messages),
	    util: new _util2.default(observables, messages)
	  });
	};

	var _index = __webpack_require__(90);

	var _index2 = _interopRequireDefault(_index);

	var _traverse = __webpack_require__(341);

	var _traverse2 = _interopRequireDefault(_traverse);

	var _$ = __webpack_require__(339);

	var _$2 = _interopRequireDefault(_$);

	var _modify = __webpack_require__(340);

	var _modify2 = _interopRequireDefault(_modify);

	var _validate = __webpack_require__(343);

	var _validate2 = _interopRequireDefault(_validate);

	var _util = __webpack_require__(342);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.STORES = undefined;

	var _global = __webpack_require__(344);

	var _global2 = _interopRequireDefault(_global);

	var _messages = __webpack_require__(346);

	var _messages2 = _interopRequireDefault(_messages);

	var _device = __webpack_require__(338);

	var _device2 = _interopRequireDefault(_device);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function requestStore(name) {
	  return new Promise(function (resolve) {
	    var i = null;
	    clearInterval(i);
	    i = setInterval(function () {
	      if (STORES && STORES[name]) {
	        resolve(STORES[name]);
	        clearInterval(i);
	      }
	    }, 10);
	  });
	}

	var STORES = exports.STORES = {
	  global: (0, _global2.default)(requestStore('messages'), requestStore('global')),
	  messages: new _messages2.default(),
	  device: new _device2.default(requestStore('global'))
	};

	var actions = exports.actions = {
	  inject: function inject() {
	    for (var _len = arguments.length, storesArray = Array(_len), _key = 0; _key < _len; _key++) {
	      storesArray[_key] = arguments[_key];
	    }

	    return storesArray.reduce(function (start, item) {
	      if (STORES.hasOwnProperty(item)) {
	        start[item] = STORES[item];
	      } else {
	        start[item] = null;
	      }

	      return start;
	    }, {});
	  }
	};
	// console.warn('stores enabled');
	// window.STORES = STORES

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

	var _mobx = __webpack_require__(39);

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var x_messages = (_class = function () {
	  _createClass(x_messages, [{
	    key: 'setToggle',
	    value: function setToggle(bool) {
	      this.open = bool;
	    }
	  }, {
	    key: 'say',
	    value: function say(msg) {
	      this.message = msg;
	      this.open = true;
	    }
	  }, {
	    key: 'specialSay',
	    value: function specialSay(msg, actions) {
	      this.message = msg;
	      this.actions = actions;
	      this.open = true;
	      this.timeout = 60000;
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {

	      this.message = 'null';
	      this.actions = [];
	      this.open = false;
	      this.timeout = 4000;
	    }
	  }]);

	  function x_messages() {
	    _classCallCheck(this, x_messages);

	    _initDefineProp(this, 'open', _descriptor, this);

	    _initDefineProp(this, 'message', _descriptor2, this);

	    _initDefineProp(this, 'actions', _descriptor3, this);

	    _initDefineProp(this, 'timeout', _descriptor4, this);
	  }

	  return x_messages;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'open', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return false;
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'message', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 'null';
	  }
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'actions', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return [];
	  }
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'timeout', [_mobx.observable], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 4000;
	  }
	}), _applyDecoratedDescriptor(_class.prototype, 'setToggle', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setToggle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'say', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'say'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'specialSay', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'specialSay'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cancel', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'cancel'), _class.prototype)), _class);
	exports.default = x_messages;

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 408:
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionDelete = function ActionDelete(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' })
	  );
	};
	ActionDelete = (0, _pure2.default)(ActionDelete);
	ActionDelete.displayName = 'ActionDelete';
	ActionDelete.muiName = 'SvgIcon';

	exports.default = ActionDelete;

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionDone = function ActionDone(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
	  );
	};
	ActionDone = (0, _pure2.default)(ActionDone);
	ActionDone.displayName = 'ActionDone';
	ActionDone.muiName = 'SvgIcon';

	exports.default = ActionDone;

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionHistory = function ActionHistory(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' })
	  );
	};
	ActionHistory = (0, _pure2.default)(ActionHistory);
	ActionHistory.displayName = 'ActionHistory';
	ActionHistory.muiName = 'SvgIcon';

	exports.default = ActionHistory;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionSettings = function ActionSettings(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' })
	  );
	};
	ActionSettings = (0, _pure2.default)(ActionSettings);
	ActionSettings.displayName = 'ActionSettings';
	ActionSettings.muiName = 'SvgIcon';

	exports.default = ActionSettings;

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionViewCarousel = function ActionViewCarousel(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z' })
	  );
	};
	ActionViewCarousel = (0, _pure2.default)(ActionViewCarousel);
	ActionViewCarousel.displayName = 'ActionViewCarousel';
	ActionViewCarousel.muiName = 'SvgIcon';

	exports.default = ActionViewCarousel;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AlertWarning = function AlertWarning(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' })
	  );
	};
	AlertWarning = (0, _pure2.default)(AlertWarning);
	AlertWarning.displayName = 'AlertWarning';
	AlertWarning.muiName = 'SvgIcon';

	exports.default = AlertWarning;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommunicationChatBubble = function CommunicationChatBubble(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' })
	  );
	};
	CommunicationChatBubble = (0, _pure2.default)(CommunicationChatBubble);
	CommunicationChatBubble.displayName = 'CommunicationChatBubble';
	CommunicationChatBubble.muiName = 'SvgIcon';

	exports.default = CommunicationChatBubble;

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentAddBox = function ContentAddBox(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z' })
	  );
	};
	ContentAddBox = (0, _pure2.default)(ContentAddBox);
	ContentAddBox.displayName = 'ContentAddBox';
	ContentAddBox.muiName = 'SvgIcon';

	exports.default = ContentAddBox;

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentAdd = function ContentAdd(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
	  );
	};
	ContentAdd = (0, _pure2.default)(ContentAdd);
	ContentAdd.displayName = 'ContentAdd';
	ContentAdd.muiName = 'SvgIcon';

	exports.default = ContentAdd;

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentDeleteSweep = function ContentDeleteSweep(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z' })
	  );
	};
	ContentDeleteSweep = (0, _pure2.default)(ContentDeleteSweep);
	ContentDeleteSweep.displayName = 'ContentDeleteSweep';
	ContentDeleteSweep.muiName = 'SvgIcon';

	exports.default = ContentDeleteSweep;

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentSave = function ContentSave(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' })
	  );
	};
	ContentSave = (0, _pure2.default)(ContentSave);
	ContentSave.displayName = 'ContentSave';
	ContentSave.muiName = 'SvgIcon';

	exports.default = ContentSave;

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(16);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(14);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentUndo = function ContentUndo(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z' })
	  );
	};
	ContentUndo = (0, _pure2.default)(ContentUndo);
	ContentUndo.displayName = 'ContentUndo';
	ContentUndo.muiName = 'SvgIcon';

	exports.default = ContentUndo;

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactDefaultInjection = __webpack_require__(167);
	var ReactServerRendering = __webpack_require__(631);
	var ReactVersion = __webpack_require__(288);

	ReactDefaultInjection.inject();

	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};

	module.exports = ReactDOMServer;

/***/ },

/***/ 630:
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};

	module.exports = ReactServerBatchingStrategy;

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var React = __webpack_require__(31);
	var ReactDOMContainerInfo = __webpack_require__(275);
	var ReactDefaultBatchingStrategy = __webpack_require__(278);
	var ReactInstrumentation = __webpack_require__(27);
	var ReactMarkupChecksum = __webpack_require__(283);
	var ReactReconciler = __webpack_require__(55);
	var ReactServerBatchingStrategy = __webpack_require__(630);
	var ReactServerRenderingTransaction = __webpack_require__(287);
	var ReactUpdates = __webpack_require__(28);

	var emptyObject = __webpack_require__(119);
	var instantiateReactComponent = __webpack_require__(175);
	var invariant = __webpack_require__(12);

	var pendingTransactions = 0;

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToStringImpl(element, makeStaticMarkup) {
	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);

	    pendingTransactions++;

	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, true);
	      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
	      );
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
	      }
	      if (!makeStaticMarkup) {
	        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
	      }
	      return markup;
	    }, null);
	  } finally {
	    pendingTransactions--;
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    if (!pendingTransactions) {
	      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	    }
	  }
	}

	/**
	 * Render a ReactElement to its initial HTML. This should only be used on the
	 * server.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
	 */
	function renderToString(element) {
	  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
	  return renderToStringImpl(element, false);
	}

	/**
	 * Similar to renderToString, except this doesn't create extra DOM attributes
	 * such as data-react-id that React uses internally.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
	 */
	function renderToStaticMarkup(element) {
	  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
	  return renderToStringImpl(element, true);
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(613);


/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(272);
	var EventPluginUtils = __webpack_require__(114);
	var EventPropagators = __webpack_require__(68);
	var SyntheticUIEvent = __webpack_require__(84);
	var TouchEventUtils = __webpack_require__(705);
	var ViewportMetrics = __webpack_require__(170);

	var keyOf = __webpack_require__(408);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    'topTouchCancel',
	    'topTouchEnd',
	    'topTouchStart',
	    'topTouchMove'
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  'topTouchStart',
	  'topTouchCancel',
	  'topTouchEnd',
	  'topTouchMove',
	];

	var dependencies = [
	  'topMouseDown',
	  'topMouseMove',
	  'topMouseUp',
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	function createTapEventPlugin(shouldRejectClick) {
	  return {

	    tapMoveThreshold: tapMoveThreshold,

	    ignoreMouseThreshold: ignoreMouseThreshold,

	    eventTypes: eventTypes,

	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {

	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }

	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }

	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }

	  };
	}

	module.exports = createTapEventPlugin;


/***/ },

/***/ 705:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },

/***/ 706:
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(407);
	var defaultClickRejectionStrategy = __webpack_require__(706);

	var alreadyInjected = false;

	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }

	  alreadyInjected = true;

	  __webpack_require__(67).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(704)(shouldRejectClick)
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 738:
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },

/***/ 739:
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ }

});