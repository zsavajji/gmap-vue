(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGoogleMap"] = factory();
	else
		root["VueGoogleMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MapElementMixin = exports.PlaceInput = exports.Rectangle = exports.Circle = exports.Polygon = exports.Polyline = exports.InfoWindow = exports.Cluster = exports.Marker = exports.Map = exports.loaded = exports.load = undefined;
	
	var _manager = __webpack_require__(2);
	
	Object.defineProperty(exports, 'load', {
	  enumerable: true,
	  get: function get() {
	    return _manager.load;
	  }
	});
	Object.defineProperty(exports, 'loaded', {
	  enumerable: true,
	  get: function get() {
	    return _manager.loaded;
	  }
	});
	
	var _map = __webpack_require__(71);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _marker = __webpack_require__(84);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _cluster = __webpack_require__(87);
	
	var _cluster2 = _interopRequireDefault(_cluster);
	
	var _infoWindow = __webpack_require__(96);
	
	var _infoWindow2 = _interopRequireDefault(_infoWindow);
	
	var _polyline = __webpack_require__(99);
	
	var _polyline2 = _interopRequireDefault(_polyline);
	
	var _polygon = __webpack_require__(101);
	
	var _polygon2 = _interopRequireDefault(_polygon);
	
	var _circle = __webpack_require__(103);
	
	var _circle2 = _interopRequireDefault(_circle);
	
	var _rectangle = __webpack_require__(105);
	
	var _rectangle2 = _interopRequireDefault(_rectangle);
	
	var _placeInput = __webpack_require__(107);
	
	var _placeInput2 = _interopRequireDefault(_placeInput);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Map = _map2.default;
	exports.Marker = _marker2.default;
	exports.Cluster = _cluster2.default;
	exports.InfoWindow = _infoWindow2.default;
	exports.Polyline = _polyline2.default;
	exports.Polygon = _polygon2.default;
	exports.Circle = _circle2.default;
	exports.Rectangle = _rectangle2.default;
	exports.PlaceInput = _placeInput2.default;
	exports.MapElementMixin = _mapElementMixin2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load = exports.loaded = undefined;
	
	var _keys = __webpack_require__(3);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(15);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _promise = __webpack_require__(40);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	
	var setUp = false;
	
	var loaded = exports.loaded = new _promise2.default(function (resolve, reject) {
	  window['vueGoogleMapsInit'] = resolve;
	});
	
	/**
	 * @param apiKey    API Key, or object with the URL parameters. For example
	 *                  to use Google Maps Premium API, pass
	 *                    `{ client: <YOUR-CLIENT-ID> }`.
	 *                  You may pass the libraries and/or version (as `v`) parameter into
	 *                  this parameter and skip the next two parameters
	 * @param version   Google for Maps version
	 * @param libraries Libraries to load (@see
	 *                  https://developers.google.com/maps/documentation/javascript/libraries)
	 * @param loadCn    Boolean. If set to true, the map will be loaded form goole maps China
	 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
	 *
	 * Example:
	 * ```
	 *      import {load} from 'vue-google-maps'
	 *
	 *      load(<YOUR-API-KEY>)
	 *
	 *      load({
	 *              key: <YOUR-API-KEY>,
	 *      })
	 *
	 *      load({
	 *              client: <YOUR-CLIENT-ID>,
	 *              channel: <YOUR CHANNEL>
	 *      })
	 * ```
	 */
	var load = exports.load = function load(apiKey, version, libraries, loadCn) {
	  if (!setUp) {
	    var googleMapScript = document.createElement('SCRIPT');
	
	    // Allow apiKey to be an object.
	    // This is to support more esoteric means of loading Google Maps,
	    // such as Google for business
	    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
	    var options = {};
	    if (typeof apiKey == 'string') {
	      options.key = apiKey;
	    } else if ((typeof apiKey === 'undefined' ? 'undefined' : (0, _typeof3.default)(apiKey)) == 'object') {
	      for (var k in apiKey) {
	        // transfer values in apiKey to options
	        options[k] = apiKey[k];
	      }
	    } else {
	      throw new Error('apiKey should either be a string or an object');
	    }
	
	    // libraries
	    var librariesPath = "";
	    if (libraries && libraries.length > 0) {
	      librariesPath = libraries.join(',');
	      options['libraries'] = librariesPath;
	    } else if (Array.prototype.isPrototypeOf(options.libraries)) {
	      options.libraries = options.libraries.join(',');
	    }
	    options['callback'] = 'vueGoogleMapsInit';
	
	    var baseUrl = 'https://maps.googleapis.com/';
	
	    if (typeof loadCn == 'boolean' && loadCn === true) {
	      baseUrl = 'http://maps.google.cn/';
	    }
	
	    var url = baseUrl + 'maps/api/js?' + (0, _keys2.default)(options).map(function (key) {
	      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
	    }).join('&');
	
	    if (version) {
	      url = url + '&v=' + version;
	    }
	
	    googleMapScript.setAttribute('src', url);
	    googleMapScript.setAttribute('async', '');
	    googleMapScript.setAttribute('defer', '');
	    document.body.appendChild(googleMapScript);
	  } else {
	    throw new Error('You already started the loading of google maps');
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(11).Object.keys;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6);
	
	__webpack_require__(8)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(11)
	  , fails   = __webpack_require__(14);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , ctx       = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
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

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(16)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	__webpack_require__(39);
	module.exports = __webpack_require__(11).Symbol;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(19)
	  , global         = __webpack_require__(10)
	  , has            = __webpack_require__(20)
	  , DESCRIPTORS    = __webpack_require__(21)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(22)
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(26)
	  , uid            = __webpack_require__(28)
	  , wks            = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , $names         = __webpack_require__(33)
	  , enumKeys       = __webpack_require__(34)
	  , isArray        = __webpack_require__(35)
	  , anObject       = __webpack_require__(36)
	  , toIObject      = __webpack_require__(30)
	  , createDesc     = __webpack_require__(24)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
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
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(38)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 19 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(19)
	  , createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).setDesc
	  , has = __webpack_require__(20)
	  , TAG = __webpack_require__(27)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(25)('wks')
	  , uid    = __webpack_require__(28)
	  , Symbol = __webpack_require__(10).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(19)
	  , toIObject = __webpack_require__(30);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(30)
	  , getNames  = __webpack_require__(19).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(19);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(32);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 39 */
/***/ function(module, exports) {



/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	__webpack_require__(42);
	__webpack_require__(48);
	__webpack_require__(52);
	module.exports = __webpack_require__(11).Promise;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(43)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(45)(String, 'String', function(iterated){
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

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , defined   = __webpack_require__(7);
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

/***/ },
/* 44 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(38)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(22)
	  , hide           = __webpack_require__(23)
	  , has            = __webpack_require__(20)
	  , Iterators      = __webpack_require__(46)
	  , $iterCreate    = __webpack_require__(47)
	  , setToStringTag = __webpack_require__(26)
	  , getProto       = __webpack_require__(19).getProto
	  , ITERATOR       = __webpack_require__(27)('iterator')
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
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
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
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(19)
	  , descriptor     = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(26)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(23)(IteratorPrototype, __webpack_require__(27)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	var Iterators = __webpack_require__(46);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(50)
	  , step             = __webpack_require__(51)
	  , Iterators        = __webpack_require__(46)
	  , toIObject        = __webpack_require__(30);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(45)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(19)
	  , LIBRARY    = __webpack_require__(38)
	  , global     = __webpack_require__(10)
	  , ctx        = __webpack_require__(12)
	  , classof    = __webpack_require__(53)
	  , $export    = __webpack_require__(9)
	  , isObject   = __webpack_require__(37)
	  , anObject   = __webpack_require__(36)
	  , aFunction  = __webpack_require__(13)
	  , strictNew  = __webpack_require__(54)
	  , forOf      = __webpack_require__(55)
	  , setProto   = __webpack_require__(60).set
	  , same       = __webpack_require__(61)
	  , SPECIES    = __webpack_require__(27)('species')
	  , speciesConstructor = __webpack_require__(62)
	  , asap       = __webpack_require__(63)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , empty      = function(){ /* empty */ }
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(empty), promise;
	  if(sub)test.constructor = function(exec){
	    exec(empty, empty);
	  };
	  (promise = P.resolve(test))['catch'](empty);
	  return promise === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(21)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(68)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(26)(P, PROMISE);
	__webpack_require__(69)(PROMISE);
	Wrapper = __webpack_require__(11)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(70)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(32)
	  , TAG = __webpack_require__(27)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(12)
	  , call        = __webpack_require__(56)
	  , isArrayIter = __webpack_require__(57)
	  , anObject    = __webpack_require__(36)
	  , toLength    = __webpack_require__(58)
	  , getIterFn   = __webpack_require__(59);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(36);
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

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(46)
	  , ITERATOR   = __webpack_require__(27)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(44)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(27)('iterator')
	  , Iterators = __webpack_require__(46);
	module.exports = __webpack_require__(11).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(19).getDesc
	  , isObject = __webpack_require__(37)
	  , anObject = __webpack_require__(36);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(12)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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

/***/ },
/* 61 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(36)
	  , aFunction = __webpack_require__(13)
	  , SPECIES   = __webpack_require__(27)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , macrotask = __webpack_require__(64).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(32)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(12)
	  , invoke             = __webpack_require__(65)
	  , html               = __webpack_require__(66)
	  , cel                = __webpack_require__(67)
	  , global             = __webpack_require__(10)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(32)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(22);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(11)
	  , $           = __webpack_require__(19)
	  , DESCRIPTORS = __webpack_require__(21)
	  , SPECIES     = __webpack_require__(27)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(27)('iterator')
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

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(72)
	__vue_script__ = __webpack_require__(76)
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\map.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(75)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c48ce990&file=map.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./map.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c48ce990&file=map.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./map.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(74)();
	// imports
	
	
	// module
	exports.push([module.id, ".vue-map-container {\n  width: 100%;\n  height: 100%;\n}\n.vue-map-container .vue-map {\n  width: 100%;\n  height: 100%;\n}\n", "", {"version":3,"sources":["/./src/components/map.vue.style"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;CACd","file":"map.vue","sourcesContent":[".vue-map-container {\n  width: 100%;\n  height: 100%;\n}\n.vue-map-container .vue-map {\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 74 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(40);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _manager = __webpack_require__(2);
	
	var _deferredReady = __webpack_require__(78);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _vue = __webpack_require__(81);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <template>
	//   <div class="vue-map-container">
	//     <div ref="vue-map" class="vue-map"></div>
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	_vue2.default.use(_deferredReady.DeferredReady);
	
	var props = {
	  center: {
	    required: true,
	    twoWay: true,
	    type: Object
	  },
	  zoom: {
	    required: false,
	    twoWay: true,
	    type: Number
	  },
	  heading: {
	    type: Number,
	    twoWay: true
	  },
	  mapTypeId: {
	    twoWay: true,
	    type: String
	  },
	  bounds: {
	    twoWay: true,
	    type: Object
	  },
	  projection: {
	    twoWay: true,
	    type: Object
	  },
	  tilt: {
	    twoWay: true,
	    type: Number
	  },
	  options: {
	    type: Object,
	    default: function _default() {
	      return {};
	    }
	  }
	};
	
	var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];
	
	var callableMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'];
	
	var methods = {
	  resize: function resize() {
	    if (this.mapObject) {
	      google.maps.event.trigger(this.mapObject, 'resize');
	
	      // FIXME: In version 1, we preserved the center of the map
	    }
	  }
	};
	
	var eventListeners = {};
	
	_lodash2.default.each(callableMethods, function (methodName) {
	  var applier = function applier() {
	    if (this.mapObject) {
	      this.mapObject[methodName].apply(this.mapObject, arguments);
	    }
	  };
	  eventListeners['g-' + methodName] = applier;
	  methods[methodName] = applier;
	});
	
	exports.default = _vue2.default.extend({
	  mixins: [_getPropsValuesMixin2.default, _deferredReady.DeferredReadyMixin],
	  props: props,
	  replace: false, // necessary for css styles
	
	  created: function created() {
	    var _this = this;
	
	    this.mapCreated = new _promise2.default(function (resolve, reject) {
	      _this.mapCreatedDeferred = { resolve: resolve, reject: reject };
	    });
	  },
	  deferredReady: function deferredReady() {
	    var _this2 = this;
	
	    return _manager.loaded.then(function () {
	      // getting the DOM element where to create the map
	      var element = _this2.$refs['vue-map'];
	
	      // creating the map
	      var copiedData = _lodash2.default.clone(_this2.getPropsValues());
	      delete copiedData.options;
	      var options = _lodash2.default.clone(_this2.options);
	      _lodash2.default.assign(options, copiedData);
	      _this2.mapObject = new google.maps.Map(element, options);
	
	      // binding properties (two and one way)
	      (0, _propsBinder2.default)(_this2, _this2.mapObject, props);
	
	      //binding events
	      (0, _eventsBinder2.default)(_this2, _this2.mapObject, events);
	
	      _lodash2.default.forEach(eventListeners, function (fn, event) {
	        _this2.$on(event, fn.bind(_this2));
	      });
	
	      _this2.mapCreatedDeferred.resolve(_this2.mapObject);
	
	      return _this2.mapCreated;
	    }).catch(function (error) {
	      throw error;
	    });
	  },
	
	  methods: methods
	});
	// </script>
	//
	// <style lang="less">
	//
	// .full() {
	//   width: 100%;
	//   height:100%;
	// }
	//
	// .vue-map-container {
	//   .full();
	//   .vue-map {
	//     .full();
	//   }
	// }
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = window._;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DeferredReadyMixin = exports.DeferredReady = undefined;
	
	var _promise = __webpack_require__(40);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 1. Create a DeferredReady plugin.
	 *
	 * a. Updates options.configMergeStrategies to handle our new hook correctly (using Promise.all!)
	 *
	 * 2. VueGoogleMaps uses a DeferredReady mixin.
	 *
	 *     a. Each component checks for ancestors that are also DeferredReady (via dispatch/emit)
	 *     b. If no, then run DeferredReady after ready.
	 *     c. If yes, then run DeferredReady after parent's deferredReady.
	 *
	 *
	 * Say we have the following inheritance:
	 *
	 * --> == 'child of'
	 *
	 * A --> B --> C
	 *
	 * ready is called in the following order:
	 *
	 * A.ready, B.ready, C.ready
	 *
	 * C.ready -- no further ancestors supporting mixin, so in ready() we run+
	 *
	   **/
	
	var DeferredReady = exports.DeferredReady = {
	  install: function install(Vue, options) {
	    // Use the same merge strategy as regular hooks
	    Vue.config.optionMergeStrategies.deferredReady = Vue.config.optionMergeStrategies.created;
	    Vue.config.optionMergeStrategies.beforeDeferredReady = Vue.config.optionMergeStrategies.beforeDeferredReady;
	  }
	};
	
	function runHooks(vm) {
	  var hooks = vm.$options.deferredReady || [];
	
	  // Run the beforeDeferredReady methods first
	  var beforePromise = vm.beforeDeferredReady ? typeof vm.beforeDeferredReady.then === 'function' ? vm.beforeDeferredReady : _promise2.default.all(vm.beforeDeferredReady) : _promise2.default.resolve(null);
	
	  beforePromise.then(function () {
	    if (typeof hooks === 'function') {
	      hooks = [hooks];
	    }
	    return _promise2.default.all(hooks.map(function (x) {
	      try {
	        return x.apply(vm);
	      } catch (err) {
	        console.error(err.stack);
	      }
	    }));
	    // execute all handlers, expecting them to return promises
	    // wait for the promises to complete, before allowing child to execute
	  }).then(function () {
	    vm.$deferredReadyPromiseResolve();
	  });
	}
	
	var DeferredReadyMixin = exports.DeferredReadyMixin = {
	  /* Resolved after the deferredReady has been called
	    and the (optional) promise it returns has been
	    resolved */
	  $deferredReadyPromise: false,
	  $deferredReadyPromiseResolve: false,
	  $deferredReadyAncestor: false,
	
	  created: function created() {
	    var _this = this;
	
	    this.$deferredReadyPromise = new _promise2.default(function (resolve, reject) {
	      _this.$deferredReadyPromiseResolve = resolve;
	    });
	
	    var search = this.$parent;
	    while (search) {
	      if (search.$deferredReadyPromise) {
	        this.$deferredReadyAncestor = search;
	        search.$deferredReadyPromise.then(function () {
	          runHooks(_this);
	        });
	        break;
	      }
	      search = search.$parent;
	    }
	  },
	  mounted: function mounted() {
	    // Execute the hooks only if this is the first
	    // ancestor that is a DeferredReady
	    if (!this.$deferredReadyAncestor) {
	      runHooks(this);
	    }
	  }
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vueElement, googleMapObject, events) {
	  _lodash2.default.forEach(events, function (eventName) {
	    var exposedName = 'g-' + eventName;
	    googleMapObject.addListener(eventName, function (ev) {
	      vueElement.$emit(exposedName, ev);
	    });
	  });
	}; /* vim: set softtabstop=2 shiftwidth=2 expandtab : */

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function capitalizeFirstLetter(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	} /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	
	exports.default = function (vueElement, googleMapsElement, props, options) {
	  options = options || {};
	  var _options = options,
	      afterModelChanged = _options.afterModelChanged;
	
	  _lodash2.default.forEach(props, function (_ref, attribute) {
	    var twoWay = _ref.twoWay,
	        type = _ref.type;
	
	    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
	    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
	    var eventName = attribute.toLowerCase() + '_changed';
	
	    // We need to avoid an endless
	    // propChanged -> event emitted -> propChanged -> event emitted loop
	    // although this may really be the user's responsibility
	    var timesSet = 0;
	
	    vueElement.$watch(attribute, function () {
	      var attributeValue = vueElement[attribute];
	
	      timesSet++;
	      googleMapsElement[setMethodName](attributeValue);
	      if (afterModelChanged) {
	        afterModelChanged(attribute, attributeValue);
	      }
	    }, {
	      deep: type === Object
	    });
	
	    if (twoWay) {
	      googleMapsElement.addListener(eventName, function (ev) {
	        if (timesSet > 0) {
	          timesSet--;
	          return;
	        } else {
	          vueElement.$emit('g-' + eventName, googleMapsElement[getMethodName]());
	        }
	      });
	    }
	  });
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = window.Vue;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  methods: {
	    getPropsValues: function getPropsValues() {
	      var _this = this;
	
	      return _lodash2.default.mapValues(this.$options.props, function (v, k) {
	        return _this[k];
	      });
	    }
	  }
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"vue-map-container\">\n    <div ref=\"vue-map\" class=\"vue-map\"></div>\n    <slot></slot>\n  </div>\n";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\marker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(40);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _cluster = __webpack_require__(87);
	
	var _cluster2 = _interopRequireDefault(_cluster);
	
	var _vue = __webpack_require__(81);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _assert = __webpack_require__(91);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <script>
	
	var props = {
	  animation: {
	    twoWay: true,
	    type: Number
	  },
	  attribution: {
	    type: Object
	  },
	  clickable: {
	    type: Boolean,
	    twoWay: true,
	    default: true
	  },
	  cursor: {
	    type: String,
	    twoWay: true
	  },
	  draggable: {
	    type: Boolean,
	    twoWay: true,
	    default: false
	  },
	  icon: {
	    type: Object,
	    twoWay: true
	  },
	  label: {},
	  opacity: {
	    type: Number,
	    default: 1
	  },
	  place: {
	    type: Object
	  },
	  position: {
	    type: Object,
	    twoWay: true
	  },
	  shape: {
	    type: Object,
	    twoWay: true
	  },
	  title: {
	    type: String,
	    twoWay: true
	  },
	  zIndex: {
	    type: Number,
	    twoWay: true
	  },
	  visible: {
	    twoWay: true,
	    default: true
	  }
	};
	
	var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];
	
	var container;
	
	/**
	 * @class Marker
	 *
	 * Marker class with extra support for
	 *
	 * - Embedded info windows
	 * - Clustered markers
	 *
	 * Support for clustered markers is for backward-compatability
	 * reasons. Otherwise we should use a cluster-marker mixin or
	 * subclass.
	 */
	exports.default = _vue2.default.extend({
	  mixins: [_mapElementMixin2.default, _getPropsValuesMixin2.default],
	  props: props,
	
	  render: function render() {
	    return '';
	  },
	  created: function created() {
	    var _this = this;
	
	    var search = this.$parent;
	    var clusterObjectPromise = null;
	
	    while (search) {
	      if (search instanceof _cluster2.default) {
	        this.$clusterAncestor = search;
	        clusterObjectPromise = search.$deferredReadyPromise.then(function () {
	          _this.$clusterObject = search.$clusterObject;
	        });
	        break;
	      }
	      search = search.$parent;
	    }
	
	    this.$clusterObjectPromise = clusterObjectPromise || _promise2.default.resolve(null);
	  },
	  destroyed: function destroyed() {
	    if (!this.$markerObject) return;
	
	    if (this.$clusterObject) {
	      this.$clusterObject.removeMarker(this.$markerObject);
	    } else {
	      this.$markerObject.setMap(null);
	    }
	  },
	  deferredReady: function deferredReady() {
	    var _this2 = this;
	
	    var options = _lodash2.default.mapValues(props, function (value, prop) {
	      return _this2[prop];
	    });
	    options.map = this.$map;
	
	    this.$clusterObjectPromise.then(function () {
	      return _this2.createMarker(options, _this2.$map);
	    });
	  },
	
	
	  methods: {
	    createMarker: function createMarker(options, map) {
	      this.$markerObject = new google.maps.Marker(options);
	      (0, _propsBinder2.default)(this, this.$markerObject, props);
	      (0, _eventsBinder2.default)(this, this.$markerObject, events);
	
	      if (this.$clusterObject) {
	        this.$clusterObject.addMarker(this.$markerObject);
	      }
	    }
	  }
	});
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(81);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _deferredReady = __webpack_require__(78);
	
	var _deferredReady2 = __webpack_require__(78);
	
	var _map = __webpack_require__(71);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	
	_vue2.default.use(_deferredReady2.DeferredReady);
	
	/**
	 * @class MapElementMixin @mixins DeferredReadyMixin
	 *
	 * Extends components to include the following fields:
	 *
	 * @property $map        The Google map (valid only after the promise returns)
	 *
	 *
	 * */
	exports.default = {
	
	  mixins: [_deferredReady.DeferredReadyMixin],
	
	  created: function created() {
	    var _this = this;
	
	    /* Search for the Map component in the parent */
	    var search = this.$findAncestor(function (ans) {
	      return ans instanceof _map2.default;
	    });
	
	    if (!search) {
	      throw new Error(this.constructor.name + ' component must be used within a <Map>');
	    }
	
	    this.$mapPromise = search.mapCreated.then(function (map) {
	      _this.$map = map;
	    });
	    // This is a hack. FIXME
	    if (search.mapObject) {
	      this.$map = search.mapObject;
	    }
	    this.$MapElementMixin = search;
	    this.$map = null;
	  },
	  beforeDeferredReady: function beforeDeferredReady() {
	    return this.$mapPromise;
	  },
	
	
	  methods: {
	    $findAncestor: function $findAncestor(condition) {
	      var search = this.$parent;
	
	      while (search) {
	        if (condition(search)) {
	          return search;
	        }
	        search = search.$parent;
	      }
	      return null;
	    }
	  }
	
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(88)
	__vue_template__ = __webpack_require__(90)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\cluster.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _vue = __webpack_require__(81);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(89); // /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// /**
	//   * @class Cluster
	//   * @prop $clusterObject -- Exposes the marker clusterer to
	//         descendent Marker classes. Override this if you area
	//         extending the class
	// **/
	//
	// <template>
	//   <div> <!-- needed because Vue 2 disallows root slot element -->
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	
	var props = {
	  maxZoom: {
	    type: Number,
	    twoWay: false
	  },
	  calculor: {
	    type: Function,
	    twoWay: false
	  },
	  gridSize: {
	    type: Number,
	    twoWay: false
	  },
	  styles: {
	    type: Array,
	    twoWay: false
	  }
	};
	
	exports.default = _vue2.default.extend({
	  mixins: [_mapElementMixin2.default, _getPropsValuesMixin2.default],
	  props: props,
	
	  deferredReady: function deferredReady() {
	    var _this = this;
	
	    var options = _lodash2.default.clone(this.getPropsValues());
	    this.$clusterObject = new MarkerClusterer(this.$map, [], options);
	
	    (0, _propsBinder2.default)(this, this.$clusterObject, props, {
	      afterModelChanged: function afterModelChanged(a, v) {
	        var oldMarkers = _this.$clusterObject.getMarkers();
	        _this.$clusterObject.clearMarkers();
	        _this.$clusterObject.addMarkers(oldMarkers);
	      }
	    });
	  },
	  detached: function detached() {
	    this.$clusterObject.clearMarkers();
	  }
	});
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 89 */
/***/ function(module, exports) {

	// ==ClosureCompiler==
	// @compilation_level ADVANCED_OPTIMIZATIONS
	// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
	// ==/ClosureCompiler==
	
	/**
	 * @name MarkerClusterer for Google Maps v3
	 * @version version 1.0
	 * @author Luke Mahe
	 * @fileoverview
	 * The library creates and manages per-zoom-level clusters for large amounts of
	 * markers.
	 * <br/>
	 * This is a v3 implementation of the
	 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
	 * >v2 MarkerClusterer</a>.
	 */
	
	/**
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	
	/**
	 * A Marker Clusterer that clusters markers.
	 *
	 * @param {google.maps.Map} map The Google map to attach to.
	 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
	 *   the cluster.
	 * @param {Object=} opt_options support the following options:
	 *     'gridSize': (number) The grid size of a cluster in pixels.
	 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
	 *                cluster.
	 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
	 *                    cluster is to zoom into it.
	 *     'averageCenter': (boolean) Wether the center of each cluster should be
	 *                      the average of all markers in the cluster.
	 *     'minimumClusterSize': (number) The minimum number of markers to be in a
	 *                           cluster before the markers are hidden and a count
	 *                           is shown.
	 *     'styles': (object) An object that has style properties:
	 *       'url': (string) The image url.
	 *       'height': (number) The image height.
	 *       'width': (number) The image width.
	 *       'anchor': (Array) The anchor position of the label text.
	 *       'textColor': (string) The text color.
	 *       'textSize': (number) The text size.
	 *       'backgroundPosition': (string) The position of the backgound x, y.
	 *       'iconAnchor': (Array) The anchor position of the icon x, y.
	 * @constructor
	 * @extends google.maps.OverlayView
	 */
	function MarkerClusterer(map, opt_markers, opt_options) {
	  // MarkerClusterer implements google.maps.OverlayView interface. We use the
	  // extend function to extend MarkerClusterer with google.maps.OverlayView
	  // because it might not always be available when the code is defined so we
	  // look for it at the last possible moment. If it doesn't exist now then
	  // there is no point going ahead :)
	  this.extend(MarkerClusterer, google.maps.OverlayView);
	  this.map_ = map;
	
	  /**
	   * @type {Array.<google.maps.Marker>}
	   * @private
	   */
	  this.markers_ = [];
	
	  /**
	   *  @type {Array.<Cluster>}
	   */
	  this.clusters_ = [];
	
	  this.sizes = [53, 56, 66, 78, 90];
	
	  /**
	   * @private
	   */
	  this.styles_ = [];
	
	  /**
	   * @type {boolean}
	   * @private
	   */
	  this.ready_ = false;
	
	  var options = opt_options || {};
	
	  /**
	   * @type {number}
	   * @private
	   */
	  this.gridSize_ = options['gridSize'] || 60;
	
	  /**
	   * @private
	   */
	  this.minClusterSize_ = options['minimumClusterSize'] || 2;
	
	
	  /**
	   * @type {?number}
	   * @private
	   */
	  this.maxZoom_ = options['maxZoom'] || null;
	
	  this.styles_ = options['styles'] || [];
	
	  /**
	   * @type {string}
	   * @private
	   */
	  this.imagePath_ = options['imagePath'] ||
	      this.MARKER_CLUSTER_IMAGE_PATH_;
	
	  /**
	   * @type {string}
	   * @private
	   */
	  this.imageExtension_ = options['imageExtension'] ||
	      this.MARKER_CLUSTER_IMAGE_EXTENSION_;
	
	  /**
	   * @type {boolean}
	   * @private
	   */
	  this.zoomOnClick_ = true;
	
	  if (options['zoomOnClick'] != undefined) {
	    this.zoomOnClick_ = options['zoomOnClick'];
	  }
	
	  /**
	   * @type {boolean}
	   * @private
	   */
	  this.averageCenter_ = false;
	
	  if (options['averageCenter'] != undefined) {
	    this.averageCenter_ = options['averageCenter'];
	  }
	
	  this.setupStyles_();
	
	  this.setMap(map);
	
	  /**
	   * @type {number}
	   * @private
	   */
	  this.prevZoom_ = this.map_.getZoom();
	
	  // Add the map event listeners
	  var that = this;
	  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
	    var zoom = that.map_.getZoom();
	
	    if (that.prevZoom_ != zoom) {
	      that.prevZoom_ = zoom;
	      that.resetViewport();
	    }
	  });
	
	  google.maps.event.addListener(this.map_, 'idle', function() {
	    that.redraw();
	  });
	
	  // Finally, add the markers
	  if (opt_markers && opt_markers.length) {
	    this.addMarkers(opt_markers, false);
	  }
	}
	
	
	/**
	 * The marker cluster image path.
	 *
	 * @type {string}
	 * @private
	 */
	MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
	    'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
	    'images/m';
	
	
	/**
	 * The marker cluster image path.
	 *
	 * @type {string}
	 * @private
	 */
	MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';
	
	
	/**
	 * Extends a objects prototype by anothers.
	 *
	 * @param {Object} obj1 The object to be extended.
	 * @param {Object} obj2 The object to extend with.
	 * @return {Object} The new extended object.
	 * @ignore
	 */
	MarkerClusterer.prototype.extend = function(obj1, obj2) {
	  return (function(object) {
	    for (var property in object.prototype) {
	      this.prototype[property] = object.prototype[property];
	    }
	    return this;
	  }).apply(obj1, [obj2]);
	};
	
	
	/**
	 * Implementaion of the interface method.
	 * @ignore
	 */
	MarkerClusterer.prototype.onAdd = function() {
	  this.setReady_(true);
	};
	
	/**
	 * Implementaion of the interface method.
	 * @ignore
	 */
	MarkerClusterer.prototype.draw = function() {};
	
	/**
	 * Sets up the styles object.
	 *
	 * @private
	 */
	MarkerClusterer.prototype.setupStyles_ = function() {
	  if (this.styles_.length) {
	    return;
	  }
	
	  for (var i = 0, size; size = this.sizes[i]; i++) {
	    this.styles_.push({
	      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
	      height: size,
	      width: size
	    });
	  }
	};
	
	/**
	 *  Fit the map to the bounds of the markers in the clusterer.
	 */
	MarkerClusterer.prototype.fitMapToMarkers = function() {
	  var markers = this.getMarkers();
	  var bounds = new google.maps.LatLngBounds();
	  for (var i = 0, marker; marker = markers[i]; i++) {
	    bounds.extend(marker.getPosition());
	  }
	
	  this.map_.fitBounds(bounds);
	};
	
	
	/**
	 *  Sets the styles.
	 *
	 *  @param {Object} styles The style to set.
	 */
	MarkerClusterer.prototype.setStyles = function(styles) {
	  this.styles_ = styles;
	};
	
	
	/**
	 *  Gets the styles.
	 *
	 *  @return {Object} The styles object.
	 */
	MarkerClusterer.prototype.getStyles = function() {
	  return this.styles_;
	};
	
	
	/**
	 * Whether zoom on click is set.
	 *
	 * @return {boolean} True if zoomOnClick_ is set.
	 */
	MarkerClusterer.prototype.isZoomOnClick = function() {
	  return this.zoomOnClick_;
	};
	
	/**
	 * Whether average center is set.
	 *
	 * @return {boolean} True if averageCenter_ is set.
	 */
	MarkerClusterer.prototype.isAverageCenter = function() {
	  return this.averageCenter_;
	};
	
	
	/**
	 *  Returns the array of markers in the clusterer.
	 *
	 *  @return {Array.<google.maps.Marker>} The markers.
	 */
	MarkerClusterer.prototype.getMarkers = function() {
	  return this.markers_;
	};
	
	
	/**
	 *  Returns the number of markers in the clusterer
	 *
	 *  @return {Number} The number of markers.
	 */
	MarkerClusterer.prototype.getTotalMarkers = function() {
	  return this.markers_.length;
	};
	
	
	/**
	 *  Sets the max zoom for the clusterer.
	 *
	 *  @param {number} maxZoom The max zoom level.
	 */
	MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
	  this.maxZoom_ = maxZoom;
	};
	
	
	/**
	 *  Gets the max zoom for the clusterer.
	 *
	 *  @return {number} The max zoom level.
	 */
	MarkerClusterer.prototype.getMaxZoom = function() {
	  return this.maxZoom_;
	};
	
	
	/**
	 *  The function for calculating the cluster icon image.
	 *
	 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
	 *  @param {number} numStyles The number of styles available.
	 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
	 *  @private
	 */
	MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
	  var index = 0;
	  var count = markers.length;
	  var dv = count;
	  while (dv !== 0) {
	    dv = parseInt(dv / 10, 10);
	    index++;
	  }
	
	  index = Math.min(index, numStyles);
	  return {
	    text: count,
	    index: index
	  };
	};
	
	
	/**
	 * Set the calculator function.
	 *
	 * @param {function(Array, number)} calculator The function to set as the
	 *     calculator. The function should return a object properties:
	 *     'text' (string) and 'index' (number).
	 *
	 */
	MarkerClusterer.prototype.setCalculator = function(calculator) {
	  this.calculator_ = calculator;
	};
	
	
	/**
	 * Get the calculator function.
	 *
	 * @return {function(Array, number)} the calculator function.
	 */
	MarkerClusterer.prototype.getCalculator = function() {
	  return this.calculator_;
	};
	
	
	/**
	 * Add an array of markers to the clusterer.
	 *
	 * @param {Array.<google.maps.Marker>} markers The markers to add.
	 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
	 */
	MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
	  for (var i = 0, marker; marker = markers[i]; i++) {
	    this.pushMarkerTo_(marker);
	  }
	  if (!opt_nodraw) {
	    this.redraw();
	  }
	};
	
	
	/**
	 * Pushes a marker to the clusterer.
	 *
	 * @param {google.maps.Marker} marker The marker to add.
	 * @private
	 */
	MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
	  marker.isAdded = false;
	  if (marker['draggable']) {
	    // If the marker is draggable add a listener so we update the clusters on
	    // the drag end.
	    var that = this;
	    google.maps.event.addListener(marker, 'dragend', function() {
	      marker.isAdded = false;
	      that.repaint();
	    });
	  }
	  this.markers_.push(marker);
	};
	
	
	/**
	 * Adds a marker to the clusterer and redraws if needed.
	 *
	 * @param {google.maps.Marker} marker The marker to add.
	 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
	 */
	MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
	  this.pushMarkerTo_(marker);
	  if (!opt_nodraw) {
	    this.redraw();
	  }
	};
	
	
	/**
	 * Removes a marker and returns true if removed, false if not
	 *
	 * @param {google.maps.Marker} marker The marker to remove
	 * @return {boolean} Whether the marker was removed or not
	 * @private
	 */
	MarkerClusterer.prototype.removeMarker_ = function(marker) {
	  var index = -1;
	  if (this.markers_.indexOf) {
	    index = this.markers_.indexOf(marker);
	  } else {
	    for (var i = 0, m; m = this.markers_[i]; i++) {
	      if (m == marker) {
	        index = i;
	        break;
	      }
	    }
	  }
	
	  if (index == -1) {
	    // Marker is not in our list of markers.
	    return false;
	  }
	
	  marker.setMap(null);
	
	  this.markers_.splice(index, 1);
	
	  return true;
	};
	
	
	/**
	 * Remove a marker from the cluster.
	 *
	 * @param {google.maps.Marker} marker The marker to remove.
	 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
	 * @return {boolean} True if the marker was removed.
	 */
	MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
	  var removed = this.removeMarker_(marker);
	
	  if (!opt_nodraw && removed) {
	    this.resetViewport();
	    this.redraw();
	    return true;
	  } else {
	   return false;
	  }
	};
	
	
	/**
	 * Removes an array of markers from the cluster.
	 *
	 * @param {Array.<google.maps.Marker>} markers The markers to remove.
	 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
	 */
	MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
	  var removed = false;
	
	  for (var i = 0, marker; marker = markers[i]; i++) {
	    var r = this.removeMarker_(marker);
	    removed = removed || r;
	  }
	
	  if (!opt_nodraw && removed) {
	    this.resetViewport();
	    this.redraw();
	    return true;
	  }
	};
	
	
	/**
	 * Sets the clusterer's ready state.
	 *
	 * @param {boolean} ready The state.
	 * @private
	 */
	MarkerClusterer.prototype.setReady_ = function(ready) {
	  if (!this.ready_) {
	    this.ready_ = ready;
	    this.createClusters_();
	  }
	};
	
	
	/**
	 * Returns the number of clusters in the clusterer.
	 *
	 * @return {number} The number of clusters.
	 */
	MarkerClusterer.prototype.getTotalClusters = function() {
	  return this.clusters_.length;
	};
	
	
	/**
	 * Returns the google map that the clusterer is associated with.
	 *
	 * @return {google.maps.Map} The map.
	 */
	MarkerClusterer.prototype.getMap = function() {
	  return this.map_;
	};
	
	
	/**
	 * Sets the google map that the clusterer is associated with.
	 *
	 * @param {google.maps.Map} map The map.
	 */
	MarkerClusterer.prototype.setMap = function(map) {
	  this.map_ = map;
	};
	
	
	/**
	 * Returns the size of the grid.
	 *
	 * @return {number} The grid size.
	 */
	MarkerClusterer.prototype.getGridSize = function() {
	  return this.gridSize_;
	};
	
	
	/**
	 * Sets the size of the grid.
	 *
	 * @param {number} size The grid size.
	 */
	MarkerClusterer.prototype.setGridSize = function(size) {
	  this.gridSize_ = size;
	};
	
	
	/**
	 * Returns the min cluster size.
	 *
	 * @return {number} The grid size.
	 */
	MarkerClusterer.prototype.getMinClusterSize = function() {
	  return this.minClusterSize_;
	};
	
	/**
	 * Sets the min cluster size.
	 *
	 * @param {number} size The grid size.
	 */
	MarkerClusterer.prototype.setMinClusterSize = function(size) {
	  this.minClusterSize_ = size;
	};
	
	
	/**
	 * Extends a bounds object by the grid size.
	 *
	 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
	 * @return {google.maps.LatLngBounds} The extended bounds.
	 */
	MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
	  var projection = this.getProjection();
	
	  // Turn the bounds into latlng.
	  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
	      bounds.getNorthEast().lng());
	  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
	      bounds.getSouthWest().lng());
	
	  // Convert the points to pixels and the extend out by the grid size.
	  var trPix = projection.fromLatLngToDivPixel(tr);
	  trPix.x += this.gridSize_;
	  trPix.y -= this.gridSize_;
	
	  var blPix = projection.fromLatLngToDivPixel(bl);
	  blPix.x -= this.gridSize_;
	  blPix.y += this.gridSize_;
	
	  // Convert the pixel points back to LatLng
	  var ne = projection.fromDivPixelToLatLng(trPix);
	  var sw = projection.fromDivPixelToLatLng(blPix);
	
	  // Extend the bounds to contain the new bounds.
	  bounds.extend(ne);
	  bounds.extend(sw);
	
	  return bounds;
	};
	
	
	/**
	 * Determins if a marker is contained in a bounds.
	 *
	 * @param {google.maps.Marker} marker The marker to check.
	 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
	 * @return {boolean} True if the marker is in the bounds.
	 * @private
	 */
	MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
	  return bounds.contains(marker.getPosition());
	};
	
	
	/**
	 * Clears all clusters and markers from the clusterer.
	 */
	MarkerClusterer.prototype.clearMarkers = function() {
	  this.resetViewport(true);
	
	  // Set the markers a empty array.
	  this.markers_ = [];
	};
	
	
	/**
	 * Clears all existing clusters and recreates them.
	 * @param {boolean} opt_hide To also hide the marker.
	 */
	MarkerClusterer.prototype.resetViewport = function(opt_hide) {
	  // Remove all the clusters
	  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
	    cluster.remove();
	  }
	
	  // Reset the markers to not be added and to be invisible.
	  for (var i = 0, marker; marker = this.markers_[i]; i++) {
	    marker.isAdded = false;
	    if (opt_hide) {
	      marker.setMap(null);
	    }
	  }
	
	  this.clusters_ = [];
	};
	
	/**
	 *
	 */
	MarkerClusterer.prototype.repaint = function() {
	  var oldClusters = this.clusters_.slice();
	  this.clusters_.length = 0;
	  this.resetViewport();
	  this.redraw();
	
	  // Remove the old clusters.
	  // Do it in a timeout so the other clusters have been drawn first.
	  window.setTimeout(function() {
	    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
	      cluster.remove();
	    }
	  }, 0);
	};
	
	
	/**
	 * Redraws the clusters.
	 */
	MarkerClusterer.prototype.redraw = function() {
	  this.createClusters_();
	};
	
	
	/**
	 * Calculates the distance between two latlng locations in km.
	 * @see http://www.movable-type.co.uk/scripts/latlong.html
	 *
	 * @param {google.maps.LatLng} p1 The first lat lng point.
	 * @param {google.maps.LatLng} p2 The second lat lng point.
	 * @return {number} The distance between the two points in km.
	 * @private
	*/
	MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
	  if (!p1 || !p2) {
	    return 0;
	  }
	
	  var R = 6371; // Radius of the Earth in km
	  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
	  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
	  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
	    Math.sin(dLon / 2) * Math.sin(dLon / 2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  var d = R * c;
	  return d;
	};
	
	
	/**
	 * Add a marker to a cluster, or creates a new cluster.
	 *
	 * @param {google.maps.Marker} marker The marker to add.
	 * @private
	 */
	MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
	  var distance = 40000; // Some large number
	  var clusterToAddTo = null;
	  var pos = marker.getPosition();
	  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
	    var center = cluster.getCenter();
	    if (center) {
	      var d = this.distanceBetweenPoints_(center, marker.getPosition());
	      if (d < distance) {
	        distance = d;
	        clusterToAddTo = cluster;
	      }
	    }
	  }
	
	  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
	    clusterToAddTo.addMarker(marker);
	  } else {
	    var cluster = new Cluster(this);
	    cluster.addMarker(marker);
	    this.clusters_.push(cluster);
	  }
	};
	
	
	/**
	 * Creates the clusters.
	 *
	 * @private
	 */
	MarkerClusterer.prototype.createClusters_ = function() {
	  if (!this.ready_) {
	    return;
	  }
	
	  // Get our current map view bounds.
	  // Create a new bounds object so we don't affect the map.
	  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
	      this.map_.getBounds().getNorthEast());
	  var bounds = this.getExtendedBounds(mapBounds);
	
	  for (var i = 0, marker; marker = this.markers_[i]; i++) {
	    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
	      this.addToClosestCluster_(marker);
	    }
	  }
	};
	
	
	/**
	 * A cluster that contains markers.
	 *
	 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
	 *     cluster is associated with.
	 * @constructor
	 * @ignore
	 */
	function Cluster(markerClusterer) {
	  this.markerClusterer_ = markerClusterer;
	  this.map_ = markerClusterer.getMap();
	  this.gridSize_ = markerClusterer.getGridSize();
	  this.minClusterSize_ = markerClusterer.getMinClusterSize();
	  this.averageCenter_ = markerClusterer.isAverageCenter();
	  this.center_ = null;
	  this.markers_ = [];
	  this.bounds_ = null;
	  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
	      markerClusterer.getGridSize());
	}
	
	/**
	 * Determins if a marker is already added to the cluster.
	 *
	 * @param {google.maps.Marker} marker The marker to check.
	 * @return {boolean} True if the marker is already added.
	 */
	Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
	  if (this.markers_.indexOf) {
	    return this.markers_.indexOf(marker) != -1;
	  } else {
	    for (var i = 0, m; m = this.markers_[i]; i++) {
	      if (m == marker) {
	        return true;
	      }
	    }
	  }
	  return false;
	};
	
	
	/**
	 * Add a marker the cluster.
	 *
	 * @param {google.maps.Marker} marker The marker to add.
	 * @return {boolean} True if the marker was added.
	 */
	Cluster.prototype.addMarker = function(marker) {
	  if (this.isMarkerAlreadyAdded(marker)) {
	    return false;
	  }
	
	  if (!this.center_) {
	    this.center_ = marker.getPosition();
	    this.calculateBounds_();
	  } else {
	    if (this.averageCenter_) {
	      var l = this.markers_.length + 1;
	      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
	      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
	      this.center_ = new google.maps.LatLng(lat, lng);
	      this.calculateBounds_();
	    }
	  }
	
	  marker.isAdded = true;
	  this.markers_.push(marker);
	
	  var len = this.markers_.length;
	  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
	    // Min cluster size not reached so show the marker.
	    marker.setMap(this.map_);
	  }
	
	  if (len == this.minClusterSize_) {
	    // Hide the markers that were showing.
	    for (var i = 0; i < len; i++) {
	      this.markers_[i].setMap(null);
	    }
	  }
	
	  if (len >= this.minClusterSize_) {
	    marker.setMap(null);
	  }
	
	  this.updateIcon();
	  return true;
	};
	
	
	/**
	 * Returns the marker clusterer that the cluster is associated with.
	 *
	 * @return {MarkerClusterer} The associated marker clusterer.
	 */
	Cluster.prototype.getMarkerClusterer = function() {
	  return this.markerClusterer_;
	};
	
	
	/**
	 * Returns the bounds of the cluster.
	 *
	 * @return {google.maps.LatLngBounds} the cluster bounds.
	 */
	Cluster.prototype.getBounds = function() {
	  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
	  var markers = this.getMarkers();
	  for (var i = 0, marker; marker = markers[i]; i++) {
	    bounds.extend(marker.getPosition());
	  }
	  return bounds;
	};
	
	
	/**
	 * Removes the cluster
	 */
	Cluster.prototype.remove = function() {
	  this.clusterIcon_.remove();
	  this.markers_.length = 0;
	  delete this.markers_;
	};
	
	
	/**
	 * Returns the center of the cluster.
	 *
	 * @return {number} The cluster center.
	 */
	Cluster.prototype.getSize = function() {
	  return this.markers_.length;
	};
	
	
	/**
	 * Returns the center of the cluster.
	 *
	 * @return {Array.<google.maps.Marker>} The cluster center.
	 */
	Cluster.prototype.getMarkers = function() {
	  return this.markers_;
	};
	
	
	/**
	 * Returns the center of the cluster.
	 *
	 * @return {google.maps.LatLng} The cluster center.
	 */
	Cluster.prototype.getCenter = function() {
	  return this.center_;
	};
	
	
	/**
	 * Calculated the extended bounds of the cluster with the grid.
	 *
	 * @private
	 */
	Cluster.prototype.calculateBounds_ = function() {
	  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
	  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
	};
	
	
	/**
	 * Determines if a marker lies in the clusters bounds.
	 *
	 * @param {google.maps.Marker} marker The marker to check.
	 * @return {boolean} True if the marker lies in the bounds.
	 */
	Cluster.prototype.isMarkerInClusterBounds = function(marker) {
	  return this.bounds_.contains(marker.getPosition());
	};
	
	
	/**
	 * Returns the map that the cluster is associated with.
	 *
	 * @return {google.maps.Map} The map.
	 */
	Cluster.prototype.getMap = function() {
	  return this.map_;
	};
	
	
	/**
	 * Updates the cluster icon
	 */
	Cluster.prototype.updateIcon = function() {
	  var zoom = this.map_.getZoom();
	  var mz = this.markerClusterer_.getMaxZoom();
	
	  if (mz && zoom > mz) {
	    // The zoom is greater than our max zoom so show all the markers in cluster.
	    for (var i = 0, marker; marker = this.markers_[i]; i++) {
	      marker.setMap(this.map_);
	    }
	    return;
	  }
	
	  if (this.markers_.length < this.minClusterSize_) {
	    // Min cluster size not yet reached.
	    this.clusterIcon_.hide();
	    return;
	  }
	
	  var numStyles = this.markerClusterer_.getStyles().length;
	  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
	  this.clusterIcon_.setCenter(this.center_);
	  this.clusterIcon_.setSums(sums);
	  this.clusterIcon_.show();
	};
	
	
	/**
	 * A cluster icon
	 *
	 * @param {Cluster} cluster The cluster to be associated with.
	 * @param {Object} styles An object that has style properties:
	 *     'url': (string) The image url.
	 *     'height': (number) The image height.
	 *     'width': (number) The image width.
	 *     'anchor': (Array) The anchor position of the label text.
	 *     'textColor': (string) The text color.
	 *     'textSize': (number) The text size.
	 *     'backgroundPosition: (string) The background postition x, y.
	 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
	 * @constructor
	 * @extends google.maps.OverlayView
	 * @ignore
	 */
	function ClusterIcon(cluster, styles, opt_padding) {
	  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
	
	  this.styles_ = styles;
	  this.padding_ = opt_padding || 0;
	  this.cluster_ = cluster;
	  this.center_ = null;
	  this.map_ = cluster.getMap();
	  this.div_ = null;
	  this.sums_ = null;
	  this.visible_ = false;
	
	  this.setMap(this.map_);
	}
	
	
	/**
	 * Triggers the clusterclick event and zoom's if the option is set.
	 */
	ClusterIcon.prototype.triggerClusterClick = function() {
	  var markerClusterer = this.cluster_.getMarkerClusterer();
	
	  // Trigger the clusterclick event.
	  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);
	
	  if (markerClusterer.isZoomOnClick()) {
	    // Zoom into the cluster.
	    this.map_.fitBounds(this.cluster_.getBounds());
	  }
	};
	
	
	/**
	 * Adding the cluster icon to the dom.
	 * @ignore
	 */
	ClusterIcon.prototype.onAdd = function() {
	  this.div_ = document.createElement('DIV');
	  if (this.visible_) {
	    var pos = this.getPosFromLatLng_(this.center_);
	    this.div_.style.cssText = this.createCss(pos);
	    this.div_.innerHTML = this.sums_.text;
	  }
	
	  var panes = this.getPanes();
	  panes.overlayMouseTarget.appendChild(this.div_);
	
	  var that = this;
	  google.maps.event.addDomListener(this.div_, 'click', function() {
	    that.triggerClusterClick();
	  });
	};
	
	
	/**
	 * Returns the position to place the div dending on the latlng.
	 *
	 * @param {google.maps.LatLng} latlng The position in latlng.
	 * @return {google.maps.Point} The position in pixels.
	 * @private
	 */
	ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
	  var pos = this.getProjection().fromLatLngToDivPixel(latlng);
	
	  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
	    pos.x -= this.iconAnchor_[0];
	    pos.y -= this.iconAnchor_[1];
	  } else {
	    pos.x -= parseInt(this.width_ / 2, 10);
	    pos.y -= parseInt(this.height_ / 2, 10);
	  }
	  return pos;
	};
	
	
	/**
	 * Draw the icon.
	 * @ignore
	 */
	ClusterIcon.prototype.draw = function() {
	  if (this.visible_) {
	    var pos = this.getPosFromLatLng_(this.center_);
	    this.div_.style.top = pos.y + 'px';
	    this.div_.style.left = pos.x + 'px';
	  }
	};
	
	
	/**
	 * Hide the icon.
	 */
	ClusterIcon.prototype.hide = function() {
	  if (this.div_) {
	    this.div_.style.display = 'none';
	  }
	  this.visible_ = false;
	};
	
	
	/**
	 * Position and show the icon.
	 */
	ClusterIcon.prototype.show = function() {
	  if (this.div_) {
	    var pos = this.getPosFromLatLng_(this.center_);
	    this.div_.style.cssText = this.createCss(pos);
	    this.div_.style.display = '';
	  }
	  this.visible_ = true;
	};
	
	
	/**
	 * Remove the icon from the map
	 */
	ClusterIcon.prototype.remove = function() {
	  this.setMap(null);
	};
	
	
	/**
	 * Implementation of the onRemove interface.
	 * @ignore
	 */
	ClusterIcon.prototype.onRemove = function() {
	  if (this.div_ && this.div_.parentNode) {
	    this.hide();
	    this.div_.parentNode.removeChild(this.div_);
	    this.div_ = null;
	  }
	};
	
	
	/**
	 * Set the sums of the icon.
	 *
	 * @param {Object} sums The sums containing:
	 *   'text': (string) The text to display in the icon.
	 *   'index': (number) The style index of the icon.
	 */
	ClusterIcon.prototype.setSums = function(sums) {
	  this.sums_ = sums;
	  this.text_ = sums.text;
	  this.index_ = sums.index;
	  if (this.div_) {
	    this.div_.innerHTML = sums.text;
	  }
	
	  this.useStyle();
	};
	
	
	/**
	 * Sets the icon to the the styles.
	 */
	ClusterIcon.prototype.useStyle = function() {
	  var index = Math.max(0, this.sums_.index - 1);
	  index = Math.min(this.styles_.length - 1, index);
	  var style = this.styles_[index];
	  this.url_ = style['url'];
	  this.height_ = style['height'];
	  this.width_ = style['width'];
	  this.textColor_ = style['textColor'];
	  this.anchor_ = style['anchor'];
	  this.textSize_ = style['textSize'];
	  this.backgroundPosition_ = style['backgroundPosition'];
	  this.iconAnchor_ = style['iconAnchor'];
	};
	
	
	/**
	 * Sets the center of the icon.
	 *
	 * @param {google.maps.LatLng} center The latlng to set as the center.
	 */
	ClusterIcon.prototype.setCenter = function(center) {
	  this.center_ = center;
	};
	
	
	/**
	 * Create the css text based on the position of the icon.
	 *
	 * @param {google.maps.Point} pos The position.
	 * @return {string} The css style text.
	 */
	ClusterIcon.prototype.createCss = function(pos) {
	  var style = [];
	  style.push('background-image:url(' + this.url_ + ');');
	  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
	  style.push('background-position:' + backgroundPosition + ';');
	
	  if (typeof this.anchor_ === 'object') {
	    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
	        this.anchor_[0] < this.height_) {
	      style.push('height:' + (this.height_ - this.anchor_[0]) +
	          'px; padding-top:' + this.anchor_[0] + 'px;');
	    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
	        -this.anchor_[0] < this.height_) {
	      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
	          'px;');
	    } else {
	      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
	          'px;');
	    }
	    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
	        this.anchor_[1] < this.width_) {
	      style.push('width:' + (this.width_ - this.anchor_[1]) +
	          'px; padding-left:' + this.anchor_[1] + 'px;');
	    } else {
	      style.push('width:' + this.width_ + 'px; text-align:center;');
	    }
	  } else {
	    style.push('height:' + this.height_ + 'px; line-height:' +
	        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
	  }
	
	  var txtColor = this.textColor_ ? this.textColor_ : 'black';
	  var txtSize = this.textSize_ ? this.textSize_ : 11;
	
	  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
	      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
	      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
	  return style.join('');
	};
	
	
	// Export Symbols for Closure
	// If you are not going to compile with closure then you can remove the
	// code below.
	window['MarkerClusterer'] = MarkerClusterer;
	MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
	MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
	MarkerClusterer.prototype['clearMarkers'] =
	    MarkerClusterer.prototype.clearMarkers;
	MarkerClusterer.prototype['fitMapToMarkers'] =
	    MarkerClusterer.prototype.fitMapToMarkers;
	MarkerClusterer.prototype['getCalculator'] =
	    MarkerClusterer.prototype.getCalculator;
	MarkerClusterer.prototype['getGridSize'] =
	    MarkerClusterer.prototype.getGridSize;
	MarkerClusterer.prototype['getExtendedBounds'] =
	    MarkerClusterer.prototype.getExtendedBounds;
	MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
	MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
	MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
	MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
	MarkerClusterer.prototype['getTotalClusters'] =
	    MarkerClusterer.prototype.getTotalClusters;
	MarkerClusterer.prototype['getTotalMarkers'] =
	    MarkerClusterer.prototype.getTotalMarkers;
	MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
	MarkerClusterer.prototype['removeMarker'] =
	    MarkerClusterer.prototype.removeMarker;
	MarkerClusterer.prototype['removeMarkers'] =
	    MarkerClusterer.prototype.removeMarkers;
	MarkerClusterer.prototype['resetViewport'] =
	    MarkerClusterer.prototype.resetViewport;
	MarkerClusterer.prototype['repaint'] =
	    MarkerClusterer.prototype.repaint;
	MarkerClusterer.prototype['setCalculator'] =
	    MarkerClusterer.prototype.setCalculator;
	MarkerClusterer.prototype['setGridSize'] =
	    MarkerClusterer.prototype.setGridSize;
	MarkerClusterer.prototype['setMaxZoom'] =
	    MarkerClusterer.prototype.setMaxZoom;
	MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
	MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;
	
	Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
	Cluster.prototype['getSize'] = Cluster.prototype.getSize;
	Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;
	
	ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
	ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
	ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "\n  <div> <!-- needed because Vue 2 disallows root slot element -->\n    <slot></slot>\n  </div>\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(92);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function(err) { if (err) throw err; };
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(94);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(95);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(93)))

/***/ },
/* 93 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(97)
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\infoWindow.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _marker = __webpack_require__(84);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	  options: {
	    type: Object,
	    required: false,
	    default: function _default() {
	      return {};
	    }
	  },
	  content: {
	    default: null
	  },
	  opened: {
	    type: Boolean,
	    default: true
	  },
	  position: {
	    type: Object,
	    twoWay: true
	  },
	  zIndex: {
	    type: Number,
	    twoWay: true
	  }
	}; // /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <template>
	//   <div>
	//     <div ref="flyaway"> <!-- so named because it will fly away to another component -->
	//       <slot>
	//         <div v-html="content"></div>
	//       </slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	
	var events = ['domready', 'closeclick', 'content_changed'];
	
	exports.default = {
	  mixins: [_mapElementMixin2.default],
	  replace: false,
	  props: props,
	
	  created: function created() {
	    this.$markerObject = null;
	    this.$markerComponent = this.$findAncestor(function (ans) {
	      return ans instanceof _marker2.default;
	    });
	  },
	  mounted: function mounted() {
	    var el = this.$refs.flyaway;
	    el.parentNode.removeChild(el);
	  },
	  deferredReady: function deferredReady() {
	    if (this.$markerComponent) {
	      this.$markerObject = this.$markerComponent.$markerObject;
	    }
	    this.createInfoWindow(this.$map);
	  },
	  destroyed: function destroyed() {
	    if (this.disconnect) {
	      this.disconnect();
	    }
	    if (this.$infoWindow) {
	      this.$infoWindow.setMap(null);
	    }
	  },
	
	
	  methods: {
	    openInfoWindow: function openInfoWindow() {
	      if (this.opened) {
	        if (this.$markerObject !== null) {
	          this.$infoWindow.open(this.$map, this.$markerObject);
	        } else {
	          this.$infoWindow.open(this.$map);
	        }
	      } else {
	        this.$infoWindow.close();
	      }
	    },
	    createInfoWindow: function createInfoWindow(map) {
	      var _this = this;
	
	      // setting options
	      var options = _lodash2.default.clone(this.options);
	      options.content = this.$refs.flyaway;
	
	      // only set the position if the info window is not bound to a marker
	      if (this.$markerComponent === null) {
	        options.position = this.position;
	      }
	
	      this.$infoWindow = new google.maps.InfoWindow(options);
	
	      // Binding
	      (0, _propsBinder2.default)(this, this.$infoWindow, _lodash2.default.omit(props, ['opened']));
	      (0, _eventsBinder2.default)(this, this.$infoWindow, events);
	
	      this.openInfoWindow();
	      this.$watch('opened', function () {
	        _this.openInfoWindow();
	      });
	    }
	  }
	};
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "\n  <div>\n    <div ref=\"flyaway\"> <!-- so named because it will fly away to another component -->\n      <slot>\n        <div v-html=\"content\"></div>\n      </slot>\n    </div>\n  </div>\n";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(100)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\polyline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray2 = __webpack_require__(115);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	  draggable: {
	    type: Boolean
	  },
	  editable: {
	    type: Boolean
	  },
	  options: {
	    twoWay: false,
	    type: Object
	  },
	  path: {
	    type: Array,
	    twoWay: true
	  },
	  deepWatch: {
	    type: Boolean,
	    default: false
	  }
	}; // /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <script>
	
	var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
	
	exports.default = {
	  mixins: [_mapElementMixin2.default, _getPropsValuesMixin2.default],
	  props: props,
	
	  render: function render() {
	    return '';
	  },
	  destroyed: function destroyed() {
	    if (this.$polyLineObject) {
	      this.$polyLineObject.setMap(null);
	    }
	  },
	  deferredReady: function deferredReady() {
	    var _this = this;
	
	    var options = _lodash2.default.clone(this.getPropsValues());
	    delete options.options;
	    _lodash2.default.assign(options, this.options);
	    this.$polyLineObject = new google.maps.Polyline(options);
	    this.$polyLineObject.setMap(this.$map);
	
	    (0, _propsBinder2.default)(this, this.$polyLineObject, _lodash2.default.omit(props, ['deepWatch', 'path']));
	    (0, _eventsBinder2.default)(this, this.$polyLineObject, events);
	
	    this.$watch('path', function (path) {
	      if (path) {
	        (function () {
	          clearEvents();
	
	          _this.$polyLineObject.setPaths(path);
	
	          var mvcPath = _this.$polyLineObject.getPath();
	          var eventListeners = [];
	
	          var updatePaths = function updatePaths() {
	            _this.$emit('g-path_changed', _this.$polyLineObject.getPath());
	          };
	
	          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
	          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
	          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
	
	          clearEvents = function clearEvents() {
	            eventListeners.map(function (_ref) {
	              var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
	                  obj = _ref2[0],
	                  listenerHandle = _ref2[1];
	
	              return obj.removeListener(listenerHandle);
	            });
	          };
	        })();
	      }
	    }, {
	      deep: this.deepWatch
	    });
	
	    // Display the map
	    this.$polyLineObject.setMap(this.$map);
	  }
	};
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\polygon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(112);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _slicedToArray2 = __webpack_require__(115);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	  draggable: {
	    type: Boolean
	  },
	  editable: {
	    type: Boolean
	  },
	  options: {
	    type: Object
	  },
	  path: {
	    type: Array,
	    twoWay: true
	  },
	  paths: {
	    type: Array,
	    twoWay: true
	  },
	  deepWatch: {
	    type: Boolean,
	    default: false
	  }
	}; // /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <script>
	
	var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
	
	exports.default = {
	  mixins: [_mapElementMixin2.default, _getPropsValuesMixin2.default],
	  props: props,
	
	  render: function render() {
	    return '';
	  },
	  destroyed: function destroyed() {
	    if (this.$polygonObject) {
	      this.$polygonObject.setMap(null);
	    }
	  },
	  deferredReady: function deferredReady() {
	    var _this = this;
	
	    var options = _lodash2.default.clone(this.getPropsValues());
	    delete options.options;
	    _lodash2.default.assign(options, this.options);
	    if (!options.path) {
	      delete options.path;
	    }
	    if (!options.paths) {
	      delete options.paths;
	    }
	    this.$polygonObject = new google.maps.Polygon(options);
	
	    (0, _propsBinder2.default)(this, this.$polygonObject, _lodash2.default.omit(props, ['path', 'paths']));
	    (0, _eventsBinder2.default)(this, this.$polygonObject, events);
	
	    var clearEvents = function clearEvents() {};
	
	    // Watch paths, on our own, because we do not want to set either when it is
	    // empty
	    this.$watch('paths', function (paths) {
	      if (paths) {
	        (function () {
	          clearEvents();
	
	          _this.$polygonObject.setPaths(paths);
	
	          var updatePaths = function updatePaths() {
	            _this.$emit('g-paths_changed', _this.$polygonObject.getPaths());
	          };
	          var eventListeners = [];
	
	          var mvcArray = _this.$polygonObject.getPaths();
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = (0, _getIterator3.default)(mvcArray), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var mvcPath = _step.value;
	
	              eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
	              eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
	              eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
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
	
	          eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
	          eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
	          eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);
	
	          clearEvents = function clearEvents() {
	            eventListeners.map(function (_ref) {
	              var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
	                  obj = _ref2[0],
	                  listenerHandle = _ref2[1];
	
	              return obj.removeListener(listenerHandle);
	            });
	          };
	        })();
	      }
	    }, {
	      deep: this.deepWatch
	    });
	
	    this.$watch('path', function (path) {
	      if (path) {
	        (function () {
	          clearEvents();
	
	          _this.$polygonObject.setPaths(path);
	
	          var mvcPath = _this.$polygonObject.getPath();
	          var eventListeners = [];
	
	          var updatePaths = function updatePaths() {
	            _this.$emit('g-path_changed', _this.$polygonObject.getPath());
	          };
	
	          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
	          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
	          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
	
	          clearEvents = function clearEvents() {
	            eventListeners.map(function (_ref3) {
	              var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
	                  obj = _ref4[0],
	                  listenerHandle = _ref4[1];
	
	              return obj.removeListener(listenerHandle);
	            });
	          };
	        })();
	      }
	    }, {
	      deep: this.deepWatch
	    });
	
	    // Display the map
	    this.$polygonObject.setMap(this.$map);
	  }
	};
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(104)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\circle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	    center: {
	        type: Object,
	        twoWay: true,
	        required: true
	    },
	    radius: {
	        type: Number,
	        default: 1000,
	        twoWay: true
	    },
	    bounds: {
	        type: Object,
	        twoWay: true
	    },
	    draggable: {
	        type: Boolean,
	        default: false
	    },
	    editable: {
	        type: Boolean,
	        default: false
	    },
	    options: {
	        type: Object,
	        twoWay: false
	    }
	}; // /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <script>
	
	var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radius_changed', 'rightclick'];
	
	exports.default = {
	    mixins: [_mapElementMixin2.default, _getPropsValuesMixin2.default],
	    props: props,
	    version: 2,
	
	    render: function render() {
	        return '';
	    },
	    deferredReady: function deferredReady() {
	        var options = _lodash2.default.clone(this.getPropsValues());
	        options.map = this.$map;
	        delete options.bounds;
	        this.createCircle(options, this.$map);
	    },
	
	
	    methods: {
	        createCircle: function createCircle(options, map) {
	            var _this = this;
	
	            this.$circleObject = new google.maps.Circle(options);
	            // we cant bind bounds because there is no `setBounds` method
	            // on the Circle object
	            var boundProps = _lodash2.default.clone(props);
	            delete boundProps.bounds;
	            (0, _propsBinder2.default)(this, this.$circleObject, boundProps);
	            (0, _eventsBinder2.default)(this, this.$circleObject, events);
	
	            var updateBounds = function updateBounds() {
	                _this.$emit('g-bounds_changed', _this.$circleObject.getBounds());
	            };
	
	            this.$watch('radius', updateBounds);
	            // because center is an object and we need to be warned even if only the lat or lng change. not the whole reference
	            this.$watch('center', updateBounds, { deep: true });
	        }
	    },
	
	    destroyed: function destroyed() {
	        if (this.$circleObject) {
	            this.$circleObject.setMap(null);
	        }
	    }
	};
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\rectangle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _mapElementMixin = __webpack_require__(86);
	
	var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	    bounds: {
	        type: Object,
	        twoWay: true
	    },
	    draggable: {
	        type: Boolean,
	        default: false
	    },
	    editable: {
	        type: Boolean,
	        default: false
	    },
	    options: {
	        type: Object,
	        twoWay: false
	    }
	}; // /* vim: set softtabstop=2 shiftwidth=2 expandtab : */
	//
	// <script>
	
	var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
	
	exports.default = {
	    mixins: [_mapElementMixin2.default, _getPropsValuesMixin2.default],
	    props: props,
	
	    render: function render() {
	        return '';
	    },
	    deferredReady: function deferredReady() {
	        var options = _lodash2.default.clone(this.getPropsValues());
	        options.map = this.$map;
	        this.createRectangle(options, this.$map);
	    },
	
	
	    methods: {
	        createRectangle: function createRectangle(options, map) {
	            this.$rectangleObject = new google.maps.Rectangle(options);
	            (0, _propsBinder2.default)(this, this.$rectangleObject, props);
	            (0, _eventsBinder2.default)(this, this.$rectangleObject, events);
	        }
	    },
	
	    destroyed: function destroyed() {
	        if (this.$rectangleObject) {
	            this.$rectangleObject.setMap(null);
	        }
	    }
	};
	
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(108)
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\Daniel\\Desktop\\vue-google-maps\\src\\components\\placeInput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(77);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _eventsBinder = __webpack_require__(79);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(80);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	var _simulateArrowDown = __webpack_require__(109);
	
	var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);
	
	var _getPropsValuesMixin = __webpack_require__(82);
	
	var _getPropsValuesMixin2 = _interopRequireDefault(_getPropsValuesMixin);
	
	var _manager = __webpack_require__(2);
	
	var _assert = __webpack_require__(91);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var props = {
	  bounds: {
	    type: Object
	  },
	  defaultPlace: {
	    type: String,
	    default: ''
	  },
	  componentRestrictions: {
	    type: Object,
	    default: null
	  },
	  types: {
	    type: Array,
	    default: function _default() {
	      return [];
	    }
	  },
	  placeholder: {
	    required: false,
	    type: String
	  },
	  className: {
	    required: false,
	    type: String
	  },
	  label: {
	    required: false,
	    type: String,
	    default: null
	  },
	  selectFirstOnEnter: {
	    require: false,
	    type: Boolean,
	    default: false
	  }
	}; // <template>
	//     <label>
	//         <span v-text="label"></span>
	//         <input type="text" :placeholder="placeholder" :class="className"
	//           ref="input"/>
	//     </label>
	// </template>
	//
	// <script>
	exports.default = {
	  mixins: [_getPropsValuesMixin2.default],
	
	  mounted: function mounted() {
	    var _this = this;
	
	    var input = this.$refs.input;
	    input.value = this.defaultPlace;
	    _manager.loaded.then(function () {
	      window.i = input;
	      var options = _lodash2.default.clone(_this.getPropsValues());
	      if (_this.selectFirstOnEnter) {
	        (0, _simulateArrowDown2.default)(_this.$refs.input);
	      }
	
	      (0, _assert2.default)(typeof google.maps.places.Autocomplete === 'function', "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");
	
	      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);
	      (0, _propsBinder2.default)(_this, _this.autoCompleter, _lodash2.default.omit(props, ['placeholder', 'place', 'selectFirstOnEnter']));
	
	      _this.autoCompleter.addListener('place_changed', function () {
	        _this.$emit('g-place_changed', _this.autoCompleter.getPlace());
	      });
	    });
	  },
	
	  props: props
	};
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	//This piece of code was orignally written by amirnissim and can be seen here
	//http://stackoverflow.com/a/11703018/2694653
	//This has been ported to Vanilla.js by GuillaumeLeclerc
	exports.default = function (input) {
	  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;
	
	  function addEventListenerWrapper(type, listener) {
	    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
	    // and then trigger the original listener.
	    if (type == "keydown") {
	      var orig_listener = listener;
	      listener = function listener(event) {
	        var suggestion_selected = document.getElementsByClassName('pac-item-selected').length > 0;
	        if (event.which == 13 && !suggestion_selected) {
	          var simulatedEvent = document.createEvent('Event');
	          simulatedEvent.keyCode = 40;
	          simulatedEvent.which = 40;
	          orig_listener.apply(input, [simulatedEvent]);
	        }
	        orig_listener.apply(input, [event]);
	      };
	    }
	    _addEventListener.apply(input, [type, listener]);
	  }
	
	  input.addEventListener = addEventListenerWrapper;
	  input.attachEvent = addEventListenerWrapper;
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\n    <label>\n        <span v-text=\"label\"></span>\n        <input type=\"text\" :placeholder=\"placeholder\" :class=\"className\"\n          ref=\"input\"/>\n    </label>\n";

/***/ },
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	__webpack_require__(42);
	module.exports = __webpack_require__(114);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(36)
	  , get      = __webpack_require__(59);
	module.exports = __webpack_require__(11).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(116);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(112);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	__webpack_require__(42);
	module.exports = __webpack_require__(118);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(27)('iterator')
	  , Iterators = __webpack_require__(46);
	module.exports = __webpack_require__(11).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-google-maps.js.map