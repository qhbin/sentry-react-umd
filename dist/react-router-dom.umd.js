
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ReactRouterDOM = factory(global.React, global.ReactDOM));
})(this, (function (React3, ReactDOM) { 'use strict';

	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n.default = e;
		return Object.freeze(n);
	}

	var React3__namespace = /*#__PURE__*/_interopNamespaceDefault(React3);
	var ReactDOM__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM);

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				var isInstance = false;
	      try {
	        isInstance = this instanceof a;
	      } catch {}
				if (isInstance) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

	function toPrimitive(t, r) {
	  if ("object" != _typeof(t) || !t) return t;
	  var e = t[Symbol.toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r);
	    if ("object" != _typeof(i)) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}

	function toPropertyKey(t) {
	  var i = toPrimitive(t, "string");
	  return "symbol" == _typeof(i) ? i : i + "";
	}

	function _defineProperty(e, r, t) {
	  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
	    value: t,
	    enumerable: true,
	    configurable: true,
	    writable: true
	  }) : e[r] = t, e;
	}

	function ownKeys(e, r) {
	  var t = Object.keys(e);
	  if (Object.getOwnPropertySymbols) {
	    var o = Object.getOwnPropertySymbols(e);
	    r && (o = o.filter(function (r) {
	      return Object.getOwnPropertyDescriptor(e, r).enumerable;
	    })), t.push.apply(t, o);
	  }
	  return t;
	}
	function _objectSpread2(e) {
	  for (var r = 1; r < arguments.length; r++) {
	    var t = null != arguments[r] ? arguments[r] : {};
	    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
	      _defineProperty(e, r, t[r]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
	      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
	    });
	  }
	  return e;
	}

	function _arrayLikeToArray(r, a) {
	  (null == a || a > r.length) && (a = r.length);
	  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	  return n;
	}

	function _unsupportedIterableToArray(r, a) {
	  if (r) {
	    if ("string" == typeof r) return _arrayLikeToArray(r, a);
	    var t = {}.toString.call(r).slice(8, -1);
	    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	  }
	}

	function _createForOfIteratorHelper(r, e) {
	  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (!t) {
	    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
	      t && (r = t);
	      var _n = 0,
	        F = function F() {};
	      return {
	        s: F,
	        n: function n() {
	          return _n >= r.length ? {
	            done: true
	          } : {
	            done: false,
	            value: r[_n++]
	          };
	        },
	        e: function e(r) {
	          throw r;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var o,
	    a = true,
	    u = false;
	  return {
	    s: function s() {
	      t = t.call(r);
	    },
	    n: function n() {
	      var r = t.next();
	      return a = r.done, r;
	    },
	    e: function e(r) {
	      u = true, o = r;
	    },
	    f: function f() {
	      try {
	        a || null == t["return"] || t["return"]();
	      } finally {
	        if (u) throw o;
	      }
	    }
	  };
	}

	var dist$1 = {exports: {}};

	function _arrayWithHoles(r) {
	  if (Array.isArray(r)) return r;
	}

	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = true,
	      o = false;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) {
	        if (Object(t) !== t) return;
	        f = !1;
	      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = true, n = r;
	    } finally {
	      try {
	        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(r, e) {
	  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}

	function _classCallCheck(a, n) {
	  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}

	function _defineProperties(e, r) {
	  for (var t = 0; t < r.length; t++) {
	    var o = r[t];
	    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
	  }
	}
	function _createClass(e, r, t) {
	  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
	    writable: false
	  }), e;
	}

	function _getPrototypeOf(t) {
	  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
	    return t.__proto__ || Object.getPrototypeOf(t);
	  }, _getPrototypeOf(t);
	}

	function _isNativeReflectConstruct() {
	  try {
	    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	  } catch (t) {}
	  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
	    return !!t;
	  })();
	}

	function _assertThisInitialized(e) {
	  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  return e;
	}

	function _possibleConstructorReturn(t, e) {
	  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
	  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
	  return _assertThisInitialized(t);
	}

	function _callSuper(t, o, e) {
	  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}

	function _setPrototypeOf(t, e) {
	  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
	    return t.__proto__ = e, t;
	  }, _setPrototypeOf(t, e);
	}

	function _inherits(t, e) {
	  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
	  t.prototype = Object.create(e && e.prototype, {
	    constructor: {
	      value: t,
	      writable: true,
	      configurable: true
	    }
	  }), Object.defineProperty(t, "prototype", {
	    writable: false
	  }), e && _setPrototypeOf(t, e);
	}

	function _objectWithoutPropertiesLoose(r, e) {
	  if (null == r) return {};
	  var t = {};
	  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
	    if (-1 !== e.indexOf(n)) continue;
	    t[n] = r[n];
	  }
	  return t;
	}

	function _objectWithoutProperties(e, t) {
	  if (null == e) return {};
	  var o,
	    r,
	    i = _objectWithoutPropertiesLoose(e, t);
	  if (Object.getOwnPropertySymbols) {
	    var n = Object.getOwnPropertySymbols(e);
	    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	  }
	  return i;
	}

	function _regeneratorDefine(e, r, n, t) {
	  var i = Object.defineProperty;
	  try {
	    i({}, "", {});
	  } catch (e) {
	    i = 0;
	  }
	  _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
	    function o(r, n) {
	      _regeneratorDefine(e, r, function (e) {
	        return this._invoke(r, n, e);
	      });
	    }
	    r ? i ? i(e, r, {
	      value: n,
	      enumerable: !t,
	      configurable: !t,
	      writable: !t
	    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
	  }, _regeneratorDefine(e, r, n, t);
	}

	function _regenerator() {
	  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
	  var e,
	    t,
	    r = "function" == typeof Symbol ? Symbol : {},
	    n = r.iterator || "@@iterator",
	    o = r.toStringTag || "@@toStringTag";
	  function i(r, n, o, i) {
	    var c = n && n.prototype instanceof Generator ? n : Generator,
	      u = Object.create(c.prototype);
	    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
	      var i,
	        c,
	        u,
	        f = 0,
	        p = o || [],
	        y = false,
	        G = {
	          p: 0,
	          n: 0,
	          v: e,
	          a: d,
	          f: d.bind(e, 4),
	          d: function d(t, r) {
	            return i = t, c = 0, u = e, G.n = r, a;
	          }
	        };
	      function d(r, n) {
	        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
	          var o,
	            i = p[t],
	            d = G.p,
	            l = i[2];
	          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
	        }
	        if (o || r > 1) return a;
	        throw y = true, n;
	      }
	      return function (o, p, l) {
	        if (f > 1) throw TypeError("Generator is already running");
	        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
	          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
	          try {
	            if (f = 2, i) {
	              if (c || (o = "next"), t = i[o]) {
	                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
	                if (!t.done) return t;
	                u = t.value, c < 2 && (c = 0);
	              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
	              i = e;
	            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
	          } catch (t) {
	            i = e, c = 1, u = t;
	          } finally {
	            f = 1;
	          }
	        }
	        return {
	          value: t,
	          done: y
	        };
	      };
	    }(r, o, i), true), u;
	  }
	  var a = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  t = Object.getPrototypeOf;
	  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
	      return this;
	    }), t),
	    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
	  function f(e) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
	    return this;
	  }), _regeneratorDefine(u, "toString", function () {
	    return "[object Generator]";
	  }), (_regenerator = function _regenerator() {
	    return {
	      w: i,
	      m: f
	    };
	  })();
	}

	function _arrayWithoutHoles(r) {
	  if (Array.isArray(r)) return _arrayLikeToArray(r);
	}

	function _iterableToArray(r) {
	  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(r) {
	  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
	}

	function asyncGeneratorStep(n, t, e, r, o, a, c) {
	  try {
	    var i = n[a](c),
	      u = i.value;
	  } catch (n) {
	    return void e(n);
	  }
	  i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
	  return function () {
	    var t = this,
	      e = arguments;
	    return new Promise(function (r, o) {
	      var a = n.apply(t, e);
	      function _next(n) {
	        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
	      }
	      function _throw(n) {
	        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
	      }
	      _next(void 0);
	    });
	  };
	}

	function _isNativeFunction(t) {
	  try {
	    return -1 !== Function.toString.call(t).indexOf("[native code]");
	  } catch (n) {
	    return "function" == typeof t;
	  }
	}

	function _construct(t, e, r) {
	  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
	  var o = [null];
	  o.push.apply(o, e);
	  var p = new (t.bind.apply(t, o))();
	  return r && _setPrototypeOf(p, r.prototype), p;
	}

	function _wrapNativeSuper(t) {
	  var r = "function" == typeof Map ? new Map() : void 0;
	  return _wrapNativeSuper = function _wrapNativeSuper(t) {
	    if (null === t || !_isNativeFunction(t)) return t;
	    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
	    if (void 0 !== r) {
	      if (r.has(t)) return r.get(t);
	      r.set(t, Wrapper);
	    }
	    function Wrapper() {
	      return _construct(t, arguments, _getPrototypeOf(this).constructor);
	    }
	    return Wrapper.prototype = Object.create(t.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    }), _setPrototypeOf(Wrapper, t);
	  }, _wrapNativeSuper(t);
	}

	function _regeneratorKeys(e) {
	  var n = Object(e),
	    r = [];
	  for (var t in n) r.unshift(t);
	  return function e() {
	    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = false, e;
	    return e.done = true, e;
	  };
	}

	function _regeneratorValues(e) {
	  if (null != e) {
	    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
	      r = 0;
	    if (t) return t.call(e);
	    if ("function" == typeof e.next) return e;
	    if (!isNaN(e.length)) return {
	      next: function next() {
	        return e && r >= e.length && (e = void 0), {
	          value: e && e[r++],
	          done: !e
	        };
	      }
	    };
	  }
	  throw new TypeError(_typeof(e) + " is not iterable");
	}

	function _toArray(r) {
	  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
	}

	var _excluded$1 = ["sri"],
	  _excluded2 = ["page"],
	  _excluded3 = ["page", "matches"],
	  _excluded4 = ["tagName"],
	  _excluded5 = ["onClick", "discover", "prefetch", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
	  _excluded6 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
	  _excluded7 = ["discover", "fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"],
	  _excluded8 = ["getKey", "storageKey"];
	/**
	 * react-router v7.9.1
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	var __typeError = function __typeError(msg) {
	  throw TypeError(msg);
	};
	var __accessCheck = function __accessCheck(obj, member, msg) {
	  return member.has(obj) || __typeError("Cannot " + msg);
	};
	var __privateGet = function __privateGet(obj, member, getter) {
	  return __accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj);
	};
	var __privateAdd = function __privateAdd(obj, member, value) {
	  return member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	};

	// lib/router/history.ts
	var Action = /* @__PURE__ */function (Action2) {
	  Action2["Pop"] = "POP";
	  Action2["Push"] = "PUSH";
	  Action2["Replace"] = "REPLACE";
	  return Action2;
	}(Action || {});
	var PopStateEventType = "popstate";
	function createMemoryHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$initialEntri = options.initialEntries,
	    initialEntries = _options$initialEntri === void 0 ? ["/"] : _options$initialEntri,
	    initialIndex = options.initialIndex,
	    _options$v5Compat = options.v5Compat,
	    v5Compat = _options$v5Compat === void 0 ? false : _options$v5Compat;
	  var entries;
	  entries = initialEntries.map(function (entry, index2) {
	    return createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : void 0);
	  });
	  var index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
	  var action = "POP" /* Pop */;
	  var listener = null;
	  function clampIndex(n) {
	    return Math.min(Math.max(n, 0), entries.length - 1);
	  }
	  function getCurrentLocation() {
	    return entries[index];
	  }
	  function createMemoryLocation(to) {
	    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var key = arguments.length > 2 ? arguments[2] : undefined;
	    var location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
	    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: ".concat(JSON.stringify(to)));
	    return location;
	  }
	  function createHref2(to) {
	    return typeof to === "string" ? to : createPath(to);
	  }
	  var history = {
	    get index() {
	      return index;
	    },
	    get action() {
	      return action;
	    },
	    get location() {
	      return getCurrentLocation();
	    },
	    createHref: createHref2,
	    createURL: function createURL(to) {
	      return new URL(createHref2(to), "http://localhost");
	    },
	    encodeLocation: function encodeLocation(to) {
	      var path = typeof to === "string" ? parsePath(to) : to;
	      return {
	        pathname: path.pathname || "",
	        search: path.search || "",
	        hash: path.hash || ""
	      };
	    },
	    push: function push(to, state) {
	      action = "PUSH" /* Push */;
	      var nextLocation = createMemoryLocation(to, state);
	      index += 1;
	      entries.splice(index, entries.length, nextLocation);
	      if (v5Compat && listener) {
	        listener({
	          action: action,
	          location: nextLocation,
	          delta: 1
	        });
	      }
	    },
	    replace: function replace(to, state) {
	      action = "REPLACE" /* Replace */;
	      var nextLocation = createMemoryLocation(to, state);
	      entries[index] = nextLocation;
	      if (v5Compat && listener) {
	        listener({
	          action: action,
	          location: nextLocation,
	          delta: 0
	        });
	      }
	    },
	    go: function go(delta) {
	      action = "POP" /* Pop */;
	      var nextIndex = clampIndex(index + delta);
	      var nextLocation = entries[nextIndex];
	      index = nextIndex;
	      if (listener) {
	        listener({
	          action: action,
	          location: nextLocation,
	          delta: delta
	        });
	      }
	    },
	    listen: function listen(fn) {
	      listener = fn;
	      return function () {
	        listener = null;
	      };
	    }
	  };
	  return history;
	}
	function createBrowserHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  function createBrowserLocation(window2, globalHistory) {
	    var _window2$location = window2.location,
	      pathname = _window2$location.pathname,
	      search = _window2$location.search,
	      hash = _window2$location.hash;
	    return createLocation("", {
	      pathname: pathname,
	      search: search,
	      hash: hash
	    },
	    // state defaults to `null` because `window.history.state` does
	    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	  }
	  function createBrowserHref(window2, to) {
	    return typeof to === "string" ? to : createPath(to);
	  }
	  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
	}
	function createHashHistory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  function createHashLocation(window2, globalHistory) {
	    var _parsePath = parsePath(window2.location.hash.substring(1)),
	      _parsePath$pathname = _parsePath.pathname,
	      pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname,
	      _parsePath$search = _parsePath.search,
	      search = _parsePath$search === void 0 ? "" : _parsePath$search,
	      _parsePath$hash = _parsePath.hash,
	      hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
	    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
	      pathname = "/" + pathname;
	    }
	    return createLocation("", {
	      pathname: pathname,
	      search: search,
	      hash: hash
	    },
	    // state defaults to `null` because `window.history.state` does
	    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	  }
	  function createHashHref(window2, to) {
	    var base = window2.document.querySelector("base");
	    var href = "";
	    if (base && base.getAttribute("href")) {
	      var url = window2.location.href;
	      var hashIndex = url.indexOf("#");
	      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
	    }
	    return href + "#" + (typeof to === "string" ? to : createPath(to));
	  }
	  function validateHashLocation(location, to) {
	    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(".concat(JSON.stringify(to), ")"));
	  }
	  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
	}
	function invariant(value, message) {
	  if (value === false || value === null || typeof value === "undefined") {
	    throw new Error(message);
	  }
	}
	function warning(cond, message) {
	  if (!cond) {
	    if (typeof console !== "undefined") console.warn(message);
	    try {
	      throw new Error(message);
	    } catch (e) {}
	  }
	}
	function createKey$1() {
	  return Math.random().toString(36).substring(2, 10);
	}
	function getHistoryState(location, index) {
	  return {
	    usr: location.state,
	    key: location.key,
	    idx: index
	  };
	}
	function createLocation(current, to) {
	  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var key = arguments.length > 3 ? arguments[3] : undefined;
	  var location = _objectSpread2(_objectSpread2({
	    pathname: typeof current === "string" ? current : current.pathname,
	    search: "",
	    hash: ""
	  }, typeof to === "string" ? parsePath(to) : to), {}, {
	    state: state,
	    // TODO: This could be cleaned up.  push/replace should probably just take
	    // full Locations now and avoid the need to run through this flow at all
	    // But that's a pretty big refactor to the current test suite so going to
	    // keep as is for the time being and just let any incoming keys take precedence
	    key: to && to.key || key || createKey$1()
	  });
	  return location;
	}
	function createPath(_ref) {
	  var _ref$pathname = _ref.pathname,
	    pathname = _ref$pathname === void 0 ? "/" : _ref$pathname,
	    _ref$search = _ref.search,
	    search = _ref$search === void 0 ? "" : _ref$search,
	    _ref$hash = _ref.hash,
	    hash = _ref$hash === void 0 ? "" : _ref$hash;
	  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	  return pathname;
	}
	function parsePath(path) {
	  var parsedPath = {};
	  if (path) {
	    var hashIndex = path.indexOf("#");
	    if (hashIndex >= 0) {
	      parsedPath.hash = path.substring(hashIndex);
	      path = path.substring(0, hashIndex);
	    }
	    var searchIndex = path.indexOf("?");
	    if (searchIndex >= 0) {
	      parsedPath.search = path.substring(searchIndex);
	      path = path.substring(0, searchIndex);
	    }
	    if (path) {
	      parsedPath.pathname = path;
	    }
	  }
	  return parsedPath;
	}
	function getUrlBasedHistory(getLocation, createHref2, validateLocation) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var _options$window = options.window,
	    window2 = _options$window === void 0 ? document.defaultView : _options$window,
	    _options$v5Compat2 = options.v5Compat,
	    v5Compat = _options$v5Compat2 === void 0 ? false : _options$v5Compat2;
	  var globalHistory = window2.history;
	  var action = "POP" /* Pop */;
	  var listener = null;
	  var index = getIndex();
	  if (index == null) {
	    index = 0;
	    globalHistory.replaceState(_objectSpread2(_objectSpread2({}, globalHistory.state), {}, {
	      idx: index
	    }), "");
	  }
	  function getIndex() {
	    var state = globalHistory.state || {
	      idx: null
	    };
	    return state.idx;
	  }
	  function handlePop() {
	    action = "POP" /* Pop */;
	    var nextIndex = getIndex();
	    var delta = nextIndex == null ? null : nextIndex - index;
	    index = nextIndex;
	    if (listener) {
	      listener({
	        action: action,
	        location: history.location,
	        delta: delta
	      });
	    }
	  }
	  function push(to, state) {
	    action = "PUSH" /* Push */;
	    var location = createLocation(history.location, to, state);
	    if (validateLocation) validateLocation(location, to);
	    index = getIndex() + 1;
	    var historyState = getHistoryState(location, index);
	    var url = history.createHref(location);
	    try {
	      globalHistory.pushState(historyState, "", url);
	    } catch (error) {
	      if (error instanceof DOMException && error.name === "DataCloneError") {
	        throw error;
	      }
	      window2.location.assign(url);
	    }
	    if (v5Compat && listener) {
	      listener({
	        action: action,
	        location: history.location,
	        delta: 1
	      });
	    }
	  }
	  function replace2(to, state) {
	    action = "REPLACE" /* Replace */;
	    var location = createLocation(history.location, to, state);
	    if (validateLocation) validateLocation(location, to);
	    index = getIndex();
	    var historyState = getHistoryState(location, index);
	    var url = history.createHref(location);
	    globalHistory.replaceState(historyState, "", url);
	    if (v5Compat && listener) {
	      listener({
	        action: action,
	        location: history.location,
	        delta: 0
	      });
	    }
	  }
	  function createURL(to) {
	    return createBrowserURLImpl(to);
	  }
	  var history = {
	    get action() {
	      return action;
	    },
	    get location() {
	      return getLocation(window2, globalHistory);
	    },
	    listen: function listen(fn) {
	      if (listener) {
	        throw new Error("A history only accepts one active listener");
	      }
	      window2.addEventListener(PopStateEventType, handlePop);
	      listener = fn;
	      return function () {
	        window2.removeEventListener(PopStateEventType, handlePop);
	        listener = null;
	      };
	    },
	    createHref: function createHref(to) {
	      return createHref2(window2, to);
	    },
	    createURL: createURL,
	    encodeLocation: function encodeLocation(to) {
	      var url = createURL(to);
	      return {
	        pathname: url.pathname,
	        search: url.search,
	        hash: url.hash
	      };
	    },
	    push: push,
	    replace: replace2,
	    go: function go(n) {
	      return globalHistory.go(n);
	    }
	  };
	  return history;
	}
	function createBrowserURLImpl(to) {
	  var isAbsolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var base = "http://localhost";
	  if (typeof window !== "undefined") {
	    base = window.location.origin !== "null" ? window.location.origin : window.location.href;
	  }
	  invariant(base, "No window.location.(origin|href) available to create URL");
	  var href = typeof to === "string" ? to : createPath(to);
	  href = href.replace(/ $/, "%20");
	  if (!isAbsolute && href.startsWith("//")) {
	    href = base + href;
	  }
	  return new URL(href, base);
	}

	// lib/router/utils.ts
	function createContext(defaultValue) {
	  return {
	    defaultValue: defaultValue
	  };
	}
	var _map;
	var RouterContextProvider = /*#__PURE__*/function () {
	  /**
	   * Create a new `RouterContextProvider` instance
	   * @param init An optional initial context map to populate the provider with
	   */
	  function RouterContextProvider(init) {
	    _classCallCheck(this, RouterContextProvider);
	    __privateAdd(this, _map, /* @__PURE__ */new Map());
	    if (init) {
	      var _iterator = _createForOfIteratorHelper(init),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var _step$value = _slicedToArray(_step.value, 2),
	            context = _step$value[0],
	            value = _step$value[1];
	          this.set(context, value);
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	    }
	  }
	  /**
	   * Access a value from the context. If no value has been set for the context,
	   * it will return the context's `defaultValue` if provided, or throw an error
	   * if no `defaultValue` was set.
	   * @param context The context to get the value for
	   * @returns The value for the context, or the context's `defaultValue` if no
	   * value was set
	   */
	  return _createClass(RouterContextProvider, [{
	    key: "get",
	    value: function get(context) {
	      if (__privateGet(this, _map).has(context)) {
	        return __privateGet(this, _map).get(context);
	      }
	      if (context.defaultValue !== void 0) {
	        return context.defaultValue;
	      }
	      throw new Error("No value found for context");
	    }
	    /**
	     * Set a value for the context. If the context already has a value set, this
	     * will overwrite it.
	     *
	     * @param context The context to set the value for
	     * @param value The value to set for the context
	     * @returns {void}
	     */
	  }, {
	    key: "set",
	    value: function set(context, value) {
	      __privateGet(this, _map).set(context, value);
	    }
	  }]);
	}();
	_map = new WeakMap();
	var unsupportedLazyRouteObjectKeys = /* @__PURE__ */new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
	function isUnsupportedLazyRouteObjectKey(key) {
	  return unsupportedLazyRouteObjectKeys.has(key);
	}
	var unsupportedLazyRouteFunctionKeys = /* @__PURE__ */new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
	function isUnsupportedLazyRouteFunctionKey(key) {
	  return unsupportedLazyRouteFunctionKeys.has(key);
	}
	function isIndexRoute(route) {
	  return route.index === true;
	}
	function convertRoutesToDataRoutes(routes, mapRouteProperties2) {
	  var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var manifest = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var allowInPlaceMutations = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  return routes.map(function (route, index) {
	    var treePath = [].concat(_toConsumableArray(parentPath), [String(index)]);
	    var id = typeof route.id === "string" ? route.id : treePath.join("-");
	    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
	    invariant(allowInPlaceMutations || !manifest[id], "Found a route id collision on id \"".concat(id, "\".  Route id's must be globally unique within Data Router usages"));
	    if (isIndexRoute(route)) {
	      var indexRoute = _objectSpread2(_objectSpread2(_objectSpread2({}, route), mapRouteProperties2(route)), {}, {
	        id: id
	      });
	      manifest[id] = indexRoute;
	      return indexRoute;
	    } else {
	      var pathOrLayoutRoute = _objectSpread2(_objectSpread2(_objectSpread2({}, route), mapRouteProperties2(route)), {}, {
	        id: id,
	        children: void 0
	      });
	      manifest[id] = pathOrLayoutRoute;
	      if (route.children) {
	        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties2, treePath, manifest, allowInPlaceMutations);
	      }
	      return pathOrLayoutRoute;
	    }
	  });
	}
	function matchRoutes(routes, locationArg) {
	  var basename = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
	  return matchRoutesImpl(routes, locationArg, basename, false);
	}
	function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
	  var location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	  var pathname = stripBasename(location.pathname || "/", basename);
	  if (pathname == null) {
	    return null;
	  }
	  var branches = flattenRoutes(routes);
	  rankRouteBranches(branches);
	  var matches = null;
	  for (var i = 0; matches == null && i < branches.length; ++i) {
	    var decoded = decodePath(pathname);
	    matches = matchRouteBranch(branches[i], decoded, allowPartial);
	  }
	  return matches;
	}
	function convertRouteMatchToUiMatch(match, loaderData) {
	  var route = match.route,
	    pathname = match.pathname,
	    params = match.params;
	  return {
	    id: route.id,
	    pathname: pathname,
	    params: params,
	    data: loaderData[route.id],
	    loaderData: loaderData[route.id],
	    handle: route.handle
	  };
	}
	function flattenRoutes(routes) {
	  var branches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var parentsMeta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var parentPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
	  var _hasParentOptionalSegments = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  var flattenRoute = function flattenRoute(route, index) {
	    var hasParentOptionalSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _hasParentOptionalSegments;
	    var relativePath = arguments.length > 3 ? arguments[3] : undefined;
	    var meta = {
	      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
	      caseSensitive: route.caseSensitive === true,
	      childrenIndex: index,
	      route: route
	    };
	    if (meta.relativePath.startsWith("/")) {
	      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
	        return;
	      }
	      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"".concat(meta.relativePath, "\" nested under path \"").concat(parentPath, "\" is not valid. An absolute child route path must start with the combined path of all its parent routes."));
	      meta.relativePath = meta.relativePath.slice(parentPath.length);
	    }
	    var path = joinPaths([parentPath, meta.relativePath]);
	    var routesMeta = parentsMeta.concat(meta);
	    if (route.children && route.children.length > 0) {
	      invariant(
	      // Our types know better, but runtime JS may not!
	      // @ts-expect-error
	      route.index !== true, "Index routes must not have child routes. Please remove all child routes from route path \"".concat(path, "\"."));
	      flattenRoutes(route.children, branches, routesMeta, path, hasParentOptionalSegments);
	    }
	    if (route.path == null && !route.index) {
	      return;
	    }
	    branches.push({
	      path: path,
	      score: computeScore(path, route.index),
	      routesMeta: routesMeta
	    });
	  };
	  routes.forEach(function (route, index) {
	    var _route$path;
	    if (route.path === "" || !((_route$path = route.path) !== null && _route$path !== void 0 && _route$path.includes("?"))) {
	      flattenRoute(route, index);
	    } else {
	      var _iterator2 = _createForOfIteratorHelper(explodeOptionalSegments(route.path)),
	        _step2;
	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var exploded = _step2.value;
	          flattenRoute(route, index, true, exploded);
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }
	    }
	  });
	  return branches;
	}
	function explodeOptionalSegments(path) {
	  var segments = path.split("/");
	  if (segments.length === 0) return [];
	  var _segments = _toArray(segments),
	    first = _segments[0],
	    rest = _segments.slice(1);
	  var isOptional = first.endsWith("?");
	  var required = first.replace(/\?$/, "");
	  if (rest.length === 0) {
	    return isOptional ? [required, ""] : [required];
	  }
	  var restExploded = explodeOptionalSegments(rest.join("/"));
	  var result = [];
	  result.push.apply(result, _toConsumableArray(restExploded.map(function (subpath) {
	    return subpath === "" ? required : [required, subpath].join("/");
	  })));
	  if (isOptional) {
	    result.push.apply(result, _toConsumableArray(restExploded));
	  }
	  return result.map(function (exploded) {
	    return path.startsWith("/") && exploded === "" ? "/" : exploded;
	  });
	}
	function rankRouteBranches(branches) {
	  branches.sort(function (a, b) {
	    return a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map(function (meta) {
	      return meta.childrenIndex;
	    }), b.routesMeta.map(function (meta) {
	      return meta.childrenIndex;
	    }));
	  });
	}
	var paramRe = /^:[\w-]+$/;
	var dynamicSegmentValue = 3;
	var indexRouteValue = 2;
	var emptySegmentValue = 1;
	var staticSegmentValue = 10;
	var splatPenalty = -2;
	var isSplat = function isSplat(s) {
	  return s === "*";
	};
	function computeScore(path, index) {
	  var segments = path.split("/");
	  var initialScore = segments.length;
	  if (segments.some(isSplat)) {
	    initialScore += splatPenalty;
	  }
	  if (index) {
	    initialScore += indexRouteValue;
	  }
	  return segments.filter(function (s) {
	    return !isSplat(s);
	  }).reduce(function (score, segment) {
	    return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
	  }, initialScore);
	}
	function compareIndexes(a, b) {
	  var siblings = a.length === b.length && a.slice(0, -1).every(function (n, i) {
	    return n === b[i];
	  });
	  return siblings ?
	  // If two routes are siblings, we should try to match the earlier sibling
	  // first. This allows people to have fine-grained control over the matching
	  // behavior by simply putting routes with identical paths in the order they
	  // want them tried.
	  a[a.length - 1] - b[b.length - 1] :
	  // Otherwise, it doesn't really make sense to rank non-siblings by index,
	  // so they sort equally.
	  0;
	}
	function matchRouteBranch(branch, pathname) {
	  var allowPartial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var routesMeta = branch.routesMeta;
	  var matchedParams = {};
	  var matchedPathname = "/";
	  var matches = [];
	  for (var i = 0; i < routesMeta.length; ++i) {
	    var meta = routesMeta[i];
	    var end = i === routesMeta.length - 1;
	    var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
	    var match = matchPath({
	      path: meta.relativePath,
	      caseSensitive: meta.caseSensitive,
	      end: end
	    }, remainingPathname);
	    var route = meta.route;
	    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
	      match = matchPath({
	        path: meta.relativePath,
	        caseSensitive: meta.caseSensitive,
	        end: false
	      }, remainingPathname);
	    }
	    if (!match) {
	      return null;
	    }
	    Object.assign(matchedParams, match.params);
	    matches.push({
	      // TODO: Can this as be avoided?
	      params: matchedParams,
	      pathname: joinPaths([matchedPathname, match.pathname]),
	      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
	      route: route
	    });
	    if (match.pathnameBase !== "/") {
	      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	    }
	  }
	  return matches;
	}
	function generatePath(originalPath) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var path = originalPath;
	  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
	    warning(false, "Route path \"".concat(path, "\" will be treated as if it were \"").concat(path.replace(/\*$/, "/*"), "\" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to \"").concat(path.replace(/\*$/, "/*"), "\"."));
	    path = path.replace(/\*$/, "/*");
	  }
	  var prefix = path.startsWith("/") ? "/" : "";
	  var stringify2 = function stringify2(p) {
	    return p == null ? "" : typeof p === "string" ? p : String(p);
	  };
	  var segments = path.split(/\/+/).map(function (segment, index, array) {
	    var isLastSegment = index === array.length - 1;
	    if (isLastSegment && segment === "*") {
	      var star = "*";
	      return stringify2(params[star]);
	    }
	    var keyMatch = segment.match(/^:([\w-]+)(\??)$/);
	    if (keyMatch) {
	      var _keyMatch = _slicedToArray(keyMatch, 3),
	        key = _keyMatch[1],
	        optional = _keyMatch[2];
	      var param = params[key];
	      invariant(optional === "?" || param != null, "Missing \":".concat(key, "\" param"));
	      return encodeURIComponent(stringify2(param));
	    }
	    return segment.replace(/\?$/g, "");
	  }).filter(function (segment) {
	    return !!segment;
	  });
	  return prefix + segments.join("/");
	}
	function matchPath(pattern, pathname) {
	  if (typeof pattern === "string") {
	    pattern = {
	      path: pattern,
	      caseSensitive: false,
	      end: true
	    };
	  }
	  var _compilePath = compilePath(pattern.path, pattern.caseSensitive, pattern.end),
	    _compilePath2 = _slicedToArray(_compilePath, 2),
	    matcher = _compilePath2[0],
	    compiledParams = _compilePath2[1];
	  var match = pathname.match(matcher);
	  if (!match) return null;
	  var matchedPathname = match[0];
	  var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	  var captureGroups = match.slice(1);
	  var params = compiledParams.reduce(function (memo2, _ref2, index) {
	    var paramName = _ref2.paramName,
	      isOptional = _ref2.isOptional;
	    if (paramName === "*") {
	      var splatValue = captureGroups[index] || "";
	      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
	    }
	    var value = captureGroups[index];
	    if (isOptional && !value) {
	      memo2[paramName] = void 0;
	    } else {
	      memo2[paramName] = (value || "").replace(/%2F/g, "/");
	    }
	    return memo2;
	  }, {});
	  return {
	    params: params,
	    pathname: matchedPathname,
	    pathnameBase: pathnameBase,
	    pattern: pattern
	  };
	}
	function compilePath(path) {
	  var caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"".concat(path, "\" will be treated as if it were \"").concat(path.replace(/\*$/, "/*"), "\" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to \"").concat(path.replace(/\*$/, "/*"), "\"."));
	  var params = [];
	  var regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, function (_, paramName, isOptional) {
	    params.push({
	      paramName: paramName,
	      isOptional: isOptional != null
	    });
	    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
	  }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	  if (path.endsWith("*")) {
	    params.push({
	      paramName: "*"
	    });
	    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
	  } else if (end) {
	    regexpSource += "\\/*$";
	  } else if (path !== "" && path !== "/") {
	    regexpSource += "(?:(?=\\/|$))";
	  } else ;
	  var matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
	  return [matcher, params];
	}
	function decodePath(value) {
	  try {
	    return value.split("/").map(function (v) {
	      return decodeURIComponent(v).replace(/\//g, "%2F");
	    }).join("/");
	  } catch (error) {
	    warning(false, "The URL path \"".concat(value, "\" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (").concat(error, ")."));
	    return value;
	  }
	}
	function stripBasename(pathname, basename) {
	  if (basename === "/") return pathname;
	  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
	    return null;
	  }
	  var startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	  var nextChar = pathname.charAt(startIndex);
	  if (nextChar && nextChar !== "/") {
	    return null;
	  }
	  return pathname.slice(startIndex) || "/";
	}
	function prependBasename(_ref3) {
	  var basename = _ref3.basename,
	    pathname = _ref3.pathname;
	  return pathname === "/" ? basename : joinPaths([basename, pathname]);
	}
	function resolvePath(to) {
	  var fromPathname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
	  var _ref4 = typeof to === "string" ? parsePath(to) : to,
	    toPathname = _ref4.pathname,
	    _ref4$search = _ref4.search,
	    search = _ref4$search === void 0 ? "" : _ref4$search,
	    _ref4$hash = _ref4.hash,
	    hash = _ref4$hash === void 0 ? "" : _ref4$hash;
	  var pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
	  return {
	    pathname: pathname,
	    search: normalizeSearch(search),
	    hash: normalizeHash(hash)
	  };
	}
	function resolvePathname(relativePath, fromPathname) {
	  var segments = fromPathname.replace(/\/+$/, "").split("/");
	  var relativeSegments = relativePath.split("/");
	  relativeSegments.forEach(function (segment) {
	    if (segment === "..") {
	      if (segments.length > 1) segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return segments.length > 1 ? segments.join("/") : "/";
	}
	function getInvalidPathError(_char, field, dest, path) {
	  return "Cannot include a '".concat(_char, "' character in a manually specified `to.").concat(field, "` field [").concat(JSON.stringify(path), "].  Please separate it out to the `to.").concat(dest, "` field. Alternatively you may provide the full path as a string in <Link to=\"...\"> and the router will parse it for you.");
	}
	function getPathContributingMatches(matches) {
	  return matches.filter(function (match, index) {
	    return index === 0 || match.route.path && match.route.path.length > 0;
	  });
	}
	function getResolveToMatches(matches) {
	  var pathMatches = getPathContributingMatches(matches);
	  return pathMatches.map(function (match, idx) {
	    return idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase;
	  });
	}
	function resolveTo(toArg, routePathnames, locationPathname) {
	  var isPathRelative = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var to;
	  if (typeof toArg === "string") {
	    to = parsePath(toArg);
	  } else {
	    to = _objectSpread2({}, toArg);
	    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
	    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
	    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
	  }
	  var isEmptyPath = toArg === "" || to.pathname === "";
	  var toPathname = isEmptyPath ? "/" : to.pathname;
	  var from;
	  if (toPathname == null) {
	    from = locationPathname;
	  } else {
	    var routePathnameIndex = routePathnames.length - 1;
	    if (!isPathRelative && toPathname.startsWith("..")) {
	      var toSegments = toPathname.split("/");
	      while (toSegments[0] === "..") {
	        toSegments.shift();
	        routePathnameIndex -= 1;
	      }
	      to.pathname = toSegments.join("/");
	    }
	    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	  }
	  var path = resolvePath(to, from);
	  var hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
	  var hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
	  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
	    path.pathname += "/";
	  }
	  return path;
	}
	var joinPaths = function joinPaths(paths) {
	  return paths.join("/").replace(/\/\/+/g, "/");
	};
	var normalizePathname = function normalizePathname(pathname) {
	  return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
	};
	var normalizeSearch = function normalizeSearch(search) {
	  return !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
	};
	var normalizeHash = function normalizeHash(hash) {
	  return !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
	};
	var DataWithResponseInit = /*#__PURE__*/_createClass(function DataWithResponseInit(data2, init) {
	  _classCallCheck(this, DataWithResponseInit);
	  this.type = "DataWithResponseInit";
	  this.data = data2;
	  this.init = init || null;
	});
	function data(data2, init) {
	  return new DataWithResponseInit(data2, typeof init === "number" ? {
	    status: init
	  } : init);
	}
	var redirect = function redirect(url) {
	  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 302;
	  var responseInit = init;
	  if (typeof responseInit === "number") {
	    responseInit = {
	      status: responseInit
	    };
	  } else if (typeof responseInit.status === "undefined") {
	    responseInit.status = 302;
	  }
	  var headers = new Headers(responseInit.headers);
	  headers.set("Location", url);
	  return new Response(null, _objectSpread2(_objectSpread2({}, responseInit), {}, {
	    headers: headers
	  }));
	};
	var redirectDocument = function redirectDocument(url, init) {
	  var response = redirect(url, init);
	  response.headers.set("X-Remix-Reload-Document", "true");
	  return response;
	};
	var replace = function replace(url, init) {
	  var response = redirect(url, init);
	  response.headers.set("X-Remix-Replace", "true");
	  return response;
	};
	var ErrorResponseImpl = /*#__PURE__*/_createClass(function ErrorResponseImpl(status, statusText, data2) {
	  var internal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  _classCallCheck(this, ErrorResponseImpl);
	  this.status = status;
	  this.statusText = statusText || "";
	  this.internal = internal;
	  if (data2 instanceof Error) {
	    this.data = data2.toString();
	    this.error = data2;
	  } else {
	    this.data = data2;
	  }
	});
	function isRouteErrorResponse(error) {
	  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
	}

	// lib/router/router.ts
	var validMutationMethodsArr = ["POST", "PUT", "PATCH", "DELETE"];
	var validMutationMethods = new Set(validMutationMethodsArr);
	var validRequestMethodsArr = ["GET"].concat(validMutationMethodsArr);
	var validRequestMethods = new Set(validRequestMethodsArr);
	var redirectStatusCodes = /* @__PURE__ */new Set([301, 302, 303, 307, 308]);
	var redirectPreserveMethodStatusCodes = /* @__PURE__ */new Set([307, 308]);
	var IDLE_NAVIGATION = {
	  state: "idle",
	  location: void 0,
	  formMethod: void 0,
	  formAction: void 0,
	  formEncType: void 0,
	  formData: void 0,
	  json: void 0,
	  text: void 0
	};
	var IDLE_FETCHER = {
	  state: "idle",
	  data: void 0,
	  formMethod: void 0,
	  formAction: void 0,
	  formEncType: void 0,
	  formData: void 0,
	  json: void 0,
	  text: void 0
	};
	var IDLE_BLOCKER = {
	  state: "unblocked",
	  proceed: void 0,
	  reset: void 0,
	  location: void 0
	};
	var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
	var isAbsoluteUrl = function isAbsoluteUrl(url) {
	  return ABSOLUTE_URL_REGEX.test(url);
	};
	var defaultMapRouteProperties = function defaultMapRouteProperties(route) {
	  return {
	    hasErrorBoundary: Boolean(route.hasErrorBoundary)
	  };
	};
	var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
	var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
	function createRouter(init) {
	  var routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
	  var isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
	  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	  var hydrationRouteProperties2 = init.hydrationRouteProperties || [];
	  var mapRouteProperties2 = init.mapRouteProperties || defaultMapRouteProperties;
	  var manifest = {};
	  var dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties2, void 0, manifest);
	  var inFlightDataRoutes;
	  var basename = init.basename || "/";
	  if (!basename.startsWith("/")) {
	    basename = "/".concat(basename);
	  }
	  var dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
	  var future = _objectSpread2({}, init.future);
	  var unlistenHistory = null;
	  var subscribers = /* @__PURE__ */new Set();
	  var savedScrollPositions2 = null;
	  var getScrollRestorationKey2 = null;
	  var getScrollPosition = null;
	  var initialScrollRestored = init.hydrationData != null;
	  var initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
	  var initialMatchesIsFOW = false;
	  var initialErrors = null;
	  var initialized;
	  if (initialMatches == null && !init.patchRoutesOnNavigation) {
	    var error = getInternalRouterError(404, {
	      pathname: init.history.location.pathname
	    });
	    var _getShortCircuitMatch = getShortCircuitMatches(dataRoutes),
	      matches = _getShortCircuitMatch.matches,
	      route = _getShortCircuitMatch.route;
	    initialized = true;
	    initialMatches = matches;
	    initialErrors = _defineProperty({}, route.id, error);
	  } else {
	    if (initialMatches && !init.hydrationData) {
	      var fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
	      if (fogOfWar.active) {
	        initialMatches = null;
	      }
	    }
	    if (!initialMatches) {
	      initialized = false;
	      initialMatches = [];
	      var _fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
	      if (_fogOfWar.active && _fogOfWar.matches) {
	        initialMatchesIsFOW = true;
	        initialMatches = _fogOfWar.matches;
	      }
	    } else if (initialMatches.some(function (m) {
	      return m.route.lazy;
	    })) {
	      initialized = false;
	    } else if (!initialMatches.some(function (m) {
	      return m.route.loader;
	    })) {
	      initialized = true;
	    } else {
	      var loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
	      var errors = init.hydrationData ? init.hydrationData.errors : null;
	      if (errors) {
	        var idx = initialMatches.findIndex(function (m) {
	          return errors[m.route.id] !== void 0;
	        });
	        initialized = initialMatches.slice(0, idx + 1).every(function (m) {
	          return !shouldLoadRouteOnHydration(m.route, loaderData, errors);
	        });
	      } else {
	        initialized = initialMatches.every(function (m) {
	          return !shouldLoadRouteOnHydration(m.route, loaderData, errors);
	        });
	      }
	    }
	  }
	  var router;
	  var state = {
	    historyAction: init.history.action,
	    location: init.history.location,
	    matches: initialMatches,
	    initialized: initialized,
	    navigation: IDLE_NAVIGATION,
	    // Don't restore on initial updateState() if we were SSR'd
	    restoreScrollPosition: init.hydrationData != null ? false : null,
	    preventScrollReset: false,
	    revalidation: "idle",
	    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
	    actionData: init.hydrationData && init.hydrationData.actionData || null,
	    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
	    fetchers: /* @__PURE__ */new Map(),
	    blockers: /* @__PURE__ */new Map()
	  };
	  var pendingAction = "POP" /* Pop */;
	  var pendingPreventScrollReset = false;
	  var pendingNavigationController;
	  var pendingViewTransitionEnabled = false;
	  var appliedViewTransitions = /* @__PURE__ */new Map();
	  var removePageHideEventListener = null;
	  var isUninterruptedRevalidation = false;
	  var isRevalidationRequired = false;
	  var cancelledFetcherLoads = /* @__PURE__ */new Set();
	  var fetchControllers = /* @__PURE__ */new Map();
	  var incrementingLoadId = 0;
	  var pendingNavigationLoadId = -1;
	  var fetchReloadIds = /* @__PURE__ */new Map();
	  var fetchRedirectIds = /* @__PURE__ */new Set();
	  var fetchLoadMatches = /* @__PURE__ */new Map();
	  var activeFetchers = /* @__PURE__ */new Map();
	  var fetchersQueuedForDeletion = /* @__PURE__ */new Set();
	  var blockerFunctions = /* @__PURE__ */new Map();
	  var unblockBlockerHistoryUpdate = void 0;
	  var pendingRevalidationDfd = null;
	  function initialize() {
	    unlistenHistory = init.history.listen(function (_ref5) {
	      var historyAction = _ref5.action,
	        location = _ref5.location,
	        delta = _ref5.delta;
	      if (unblockBlockerHistoryUpdate) {
	        unblockBlockerHistoryUpdate();
	        unblockBlockerHistoryUpdate = void 0;
	        return;
	      }
	      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
	      var blockerKey = shouldBlockNavigation({
	        currentLocation: state.location,
	        nextLocation: location,
	        historyAction: historyAction
	      });
	      if (blockerKey && delta != null) {
	        var nextHistoryUpdatePromise = new Promise(function (resolve) {
	          unblockBlockerHistoryUpdate = resolve;
	        });
	        init.history.go(delta * -1);
	        updateBlocker(blockerKey, {
	          state: "blocked",
	          location: location,
	          proceed: function proceed() {
	            updateBlocker(blockerKey, {
	              state: "proceeding",
	              proceed: void 0,
	              reset: void 0,
	              location: location
	            });
	            nextHistoryUpdatePromise.then(function () {
	              return init.history.go(delta);
	            });
	          },
	          reset: function reset() {
	            var blockers = new Map(state.blockers);
	            blockers.set(blockerKey, IDLE_BLOCKER);
	            updateState({
	              blockers: blockers
	            });
	          }
	        });
	        return;
	      }
	      return startNavigation(historyAction, location);
	    });
	    if (isBrowser2) {
	      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
	      var _saveAppliedTransitions = function _saveAppliedTransitions() {
	        return persistAppliedTransitions(routerWindow, appliedViewTransitions);
	      };
	      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
	      removePageHideEventListener = function removePageHideEventListener() {
	        return routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
	      };
	    }
	    if (!state.initialized) {
	      startNavigation("POP" /* Pop */, state.location, {
	        initialHydration: true
	      });
	    }
	    return router;
	  }
	  function dispose() {
	    if (unlistenHistory) {
	      unlistenHistory();
	    }
	    if (removePageHideEventListener) {
	      removePageHideEventListener();
	    }
	    subscribers.clear();
	    pendingNavigationController && pendingNavigationController.abort();
	    state.fetchers.forEach(function (_, key) {
	      return deleteFetcher(key);
	    });
	    state.blockers.forEach(function (_, key) {
	      return deleteBlocker(key);
	    });
	  }
	  function subscribe(fn) {
	    subscribers.add(fn);
	    return function () {
	      return subscribers["delete"](fn);
	    };
	  }
	  function updateState(newState) {
	    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (newState.matches) {
	      newState.matches = newState.matches.map(function (m) {
	        var route = manifest[m.route.id];
	        var matchRoute = m.route;
	        if (matchRoute.element !== route.element || matchRoute.errorElement !== route.errorElement || matchRoute.hydrateFallbackElement !== route.hydrateFallbackElement) {
	          return _objectSpread2(_objectSpread2({}, m), {}, {
	            route: route
	          });
	        }
	        return m;
	      });
	    }
	    state = _objectSpread2(_objectSpread2({}, state), newState);
	    var unmountedFetchers = [];
	    var mountedFetchers = [];
	    state.fetchers.forEach(function (fetcher, key) {
	      if (fetcher.state === "idle") {
	        if (fetchersQueuedForDeletion.has(key)) {
	          unmountedFetchers.push(key);
	        } else {
	          mountedFetchers.push(key);
	        }
	      }
	    });
	    fetchersQueuedForDeletion.forEach(function (key) {
	      if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
	        unmountedFetchers.push(key);
	      }
	    });
	    _toConsumableArray(subscribers).forEach(function (subscriber) {
	      return subscriber(state, {
	        deletedFetchers: unmountedFetchers,
	        viewTransitionOpts: opts.viewTransitionOpts,
	        flushSync: opts.flushSync === true
	      });
	    });
	    unmountedFetchers.forEach(function (key) {
	      return deleteFetcher(key);
	    });
	    mountedFetchers.forEach(function (key) {
	      return state.fetchers["delete"](key);
	    });
	  }
	  function completeNavigation(location, newState) {
	    var _location$state, _location$state2, _pendingRevalidationD;
	    var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      flushSync = _ref6.flushSync;
	    var isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state._isRedirect) !== true;
	    var actionData;
	    if (newState.actionData) {
	      if (Object.keys(newState.actionData).length > 0) {
	        actionData = newState.actionData;
	      } else {
	        actionData = null;
	      }
	    } else if (isActionReload) {
	      actionData = state.actionData;
	    } else {
	      actionData = null;
	    }
	    var loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
	    var blockers = state.blockers;
	    if (blockers.size > 0) {
	      blockers = new Map(blockers);
	      blockers.forEach(function (_, k) {
	        return blockers.set(k, IDLE_BLOCKER);
	      });
	    }
	    var restoreScrollPosition = isUninterruptedRevalidation ? false : getSavedScrollPosition(location, newState.matches || state.matches);
	    var preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : _location$state2._isRedirect) !== true;
	    if (inFlightDataRoutes) {
	      dataRoutes = inFlightDataRoutes;
	      inFlightDataRoutes = void 0;
	    }
	    if (isUninterruptedRevalidation) ; else if (pendingAction === "POP" /* Pop */) ; else if (pendingAction === "PUSH" /* Push */) {
	      init.history.push(location, location.state);
	    } else if (pendingAction === "REPLACE" /* Replace */) {
	      init.history.replace(location, location.state);
	    }
	    var viewTransitionOpts;
	    if (pendingAction === "POP" /* Pop */) {
	      var priorPaths = appliedViewTransitions.get(state.location.pathname);
	      if (priorPaths && priorPaths.has(location.pathname)) {
	        viewTransitionOpts = {
	          currentLocation: state.location,
	          nextLocation: location
	        };
	      } else if (appliedViewTransitions.has(location.pathname)) {
	        viewTransitionOpts = {
	          currentLocation: location,
	          nextLocation: state.location
	        };
	      }
	    } else if (pendingViewTransitionEnabled) {
	      var toPaths = appliedViewTransitions.get(state.location.pathname);
	      if (toPaths) {
	        toPaths.add(location.pathname);
	      } else {
	        toPaths = /* @__PURE__ */new Set([location.pathname]);
	        appliedViewTransitions.set(state.location.pathname, toPaths);
	      }
	      viewTransitionOpts = {
	        currentLocation: state.location,
	        nextLocation: location
	      };
	    }
	    updateState(_objectSpread2(_objectSpread2({}, newState), {}, {
	      // matches, errors, fetchers go through as-is
	      actionData: actionData,
	      loaderData: loaderData,
	      historyAction: pendingAction,
	      location: location,
	      initialized: true,
	      navigation: IDLE_NAVIGATION,
	      revalidation: "idle",
	      restoreScrollPosition: restoreScrollPosition,
	      preventScrollReset: preventScrollReset,
	      blockers: blockers
	    }), {
	      viewTransitionOpts: viewTransitionOpts,
	      flushSync: flushSync === true
	    });
	    pendingAction = "POP" /* Pop */;
	    pendingPreventScrollReset = false;
	    pendingViewTransitionEnabled = false;
	    isUninterruptedRevalidation = false;
	    isRevalidationRequired = false;
	    (_pendingRevalidationD = pendingRevalidationDfd) === null || _pendingRevalidationD === void 0 ? void 0 : _pendingRevalidationD.resolve();
	    pendingRevalidationDfd = null;
	  }
	  function navigate(_x, _x2) {
	    return _navigate.apply(this, arguments);
	  }
	  function _navigate() {
	    _navigate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(to, opts) {
	      var normalizedPath, _normalizeNavigateOpt, path, submission, error, currentLocation, nextLocation, userReplace, historyAction, preventScrollReset, flushSync, blockerKey;
	      return _regenerator().w(function (_context) {
	        while (1) switch (_context.n) {
	          case 0:
	            if (!(typeof to === "number")) {
	              _context.n = 1;
	              break;
	            }
	            init.history.go(to);
	            return _context.a(2);
	          case 1:
	            normalizedPath = normalizeTo(state.location, state.matches, basename, to, opts === null || opts === void 0 ? void 0 : opts.fromRouteId, opts === null || opts === void 0 ? void 0 : opts.relative);
	            _normalizeNavigateOpt = normalizeNavigateOptions(false, normalizedPath, opts), path = _normalizeNavigateOpt.path, submission = _normalizeNavigateOpt.submission, error = _normalizeNavigateOpt.error;
	            currentLocation = state.location;
	            nextLocation = createLocation(state.location, path, opts && opts.state);
	            nextLocation = _objectSpread2(_objectSpread2({}, nextLocation), init.history.encodeLocation(nextLocation));
	            userReplace = opts && opts.replace != null ? opts.replace : void 0;
	            historyAction = "PUSH";
	            if (userReplace === true) {
	              historyAction = "REPLACE" /* Replace */;
	            } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
	              historyAction = "REPLACE" /* Replace */;
	            }
	            preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
	            flushSync = (opts && opts.flushSync) === true;
	            blockerKey = shouldBlockNavigation({
	              currentLocation: currentLocation,
	              nextLocation: nextLocation,
	              historyAction: historyAction
	            });
	            if (!blockerKey) {
	              _context.n = 2;
	              break;
	            }
	            updateBlocker(blockerKey, {
	              state: "blocked",
	              location: nextLocation,
	              proceed: function proceed() {
	                updateBlocker(blockerKey, {
	                  state: "proceeding",
	                  proceed: void 0,
	                  reset: void 0,
	                  location: nextLocation
	                });
	                navigate(to, opts);
	              },
	              reset: function reset() {
	                var blockers = new Map(state.blockers);
	                blockers.set(blockerKey, IDLE_BLOCKER);
	                updateState({
	                  blockers: blockers
	                });
	              }
	            });
	            return _context.a(2);
	          case 2:
	            _context.n = 3;
	            return startNavigation(historyAction, nextLocation, {
	              submission: submission,
	              // Send through the formData serialization error if we have one so we can
	              // render at the right error boundary after we match routes
	              pendingError: error,
	              preventScrollReset: preventScrollReset,
	              replace: opts && opts.replace,
	              enableViewTransition: opts && opts.viewTransition,
	              flushSync: flushSync
	            });
	          case 3:
	            return _context.a(2);
	        }
	      }, _callee);
	    }));
	    return _navigate.apply(this, arguments);
	  }
	  function revalidate() {
	    if (!pendingRevalidationDfd) {
	      pendingRevalidationDfd = createDeferred();
	    }
	    interruptActiveLoads();
	    updateState({
	      revalidation: "loading"
	    });
	    var promise = pendingRevalidationDfd.promise;
	    if (state.navigation.state === "submitting") {
	      return promise;
	    }
	    if (state.navigation.state === "idle") {
	      startNavigation(state.historyAction, state.location, {
	        startUninterruptedRevalidation: true
	      });
	      return promise;
	    }
	    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
	      overrideNavigation: state.navigation,
	      // Proxy through any rending view transition
	      enableViewTransition: pendingViewTransitionEnabled === true
	    });
	    return promise;
	  }
	  function startNavigation(_x3, _x4, _x5) {
	    return _startNavigation.apply(this, arguments);
	  }
	  function _startNavigation() {
	    _startNavigation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(historyAction, location, opts) {
	      var routesToUse, loadingNavigation, matches, flushSync, fogOfWar, _handleNavigational, _error, notFoundMatches, _route, request, scopedContext, pendingActionResult, actionResult, _actionResult$pending, routeId, result, _yield$handleLoaders, shortCircuited, updatedMatches, loaderData, errors, _t;
	      return _regenerator().w(function (_context2) {
	        while (1) switch (_context2.n) {
	          case 0:
	            pendingNavigationController && pendingNavigationController.abort();
	            pendingNavigationController = null;
	            pendingAction = historyAction;
	            isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
	            saveScrollPosition(state.location, state.matches);
	            pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
	            pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
	            routesToUse = inFlightDataRoutes || dataRoutes;
	            loadingNavigation = opts && opts.overrideNavigation;
	            matches = opts !== null && opts !== void 0 && opts.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ?
	            // `matchRoutes()` has already been called if we're in here via `router.initialize()`
	            state.matches : matchRoutes(routesToUse, location, basename);
	            flushSync = (opts && opts.flushSync) === true;
	            if (!(matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod)))) {
	              _context2.n = 1;
	              break;
	            }
	            completeNavigation(location, {
	              matches: matches
	            }, {
	              flushSync: flushSync
	            });
	            return _context2.a(2);
	          case 1:
	            fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
	            if (fogOfWar.active && fogOfWar.matches) {
	              matches = fogOfWar.matches;
	            }
	            if (matches) {
	              _context2.n = 2;
	              break;
	            }
	            _handleNavigational = handleNavigational404(location.pathname), _error = _handleNavigational.error, notFoundMatches = _handleNavigational.notFoundMatches, _route = _handleNavigational.route;
	            completeNavigation(location, {
	              matches: notFoundMatches,
	              loaderData: {},
	              errors: _defineProperty({}, _route.id, _error)
	            }, {
	              flushSync: flushSync
	            });
	            return _context2.a(2);
	          case 2:
	            pendingNavigationController = new AbortController();
	            request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
	            if (!init.getContext) {
	              _context2.n = 4;
	              break;
	            }
	            _context2.n = 3;
	            return init.getContext();
	          case 3:
	            _t = _context2.v;
	            _context2.n = 5;
	            break;
	          case 4:
	            _t = new RouterContextProvider();
	          case 5:
	            scopedContext = _t;
	            if (!(opts && opts.pendingError)) {
	              _context2.n = 6;
	              break;
	            }
	            pendingActionResult = [findNearestBoundary(matches).route.id, {
	              type: "error" /* error */,
	              error: opts.pendingError
	            }];
	            _context2.n = 10;
	            break;
	          case 6:
	            if (!(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
	              _context2.n = 10;
	              break;
	            }
	            _context2.n = 7;
	            return handleAction(request, location, opts.submission, matches, scopedContext, fogOfWar.active, opts && opts.initialHydration === true, {
	              replace: opts.replace,
	              flushSync: flushSync
	            });
	          case 7:
	            actionResult = _context2.v;
	            if (!actionResult.shortCircuited) {
	              _context2.n = 8;
	              break;
	            }
	            return _context2.a(2);
	          case 8:
	            if (!actionResult.pendingActionResult) {
	              _context2.n = 9;
	              break;
	            }
	            _actionResult$pending = _slicedToArray(actionResult.pendingActionResult, 2), routeId = _actionResult$pending[0], result = _actionResult$pending[1];
	            if (!(isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404)) {
	              _context2.n = 9;
	              break;
	            }
	            pendingNavigationController = null;
	            completeNavigation(location, {
	              matches: actionResult.matches,
	              loaderData: {},
	              errors: _defineProperty({}, routeId, result.error)
	            });
	            return _context2.a(2);
	          case 9:
	            matches = actionResult.matches || matches;
	            pendingActionResult = actionResult.pendingActionResult;
	            loadingNavigation = getLoadingNavigation(location, opts.submission);
	            flushSync = false;
	            fogOfWar.active = false;
	            request = createClientSideRequest(init.history, request.url, request.signal);
	          case 10:
	            _context2.n = 11;
	            return handleLoaders(request, location, matches, scopedContext, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
	          case 11:
	            _yield$handleLoaders = _context2.v;
	            shortCircuited = _yield$handleLoaders.shortCircuited;
	            updatedMatches = _yield$handleLoaders.matches;
	            loaderData = _yield$handleLoaders.loaderData;
	            errors = _yield$handleLoaders.errors;
	            if (!shortCircuited) {
	              _context2.n = 12;
	              break;
	            }
	            return _context2.a(2);
	          case 12:
	            pendingNavigationController = null;
	            completeNavigation(location, _objectSpread2(_objectSpread2({
	              matches: updatedMatches || matches
	            }, getActionDataForCommit(pendingActionResult)), {}, {
	              loaderData: loaderData,
	              errors: errors
	            }));
	          case 13:
	            return _context2.a(2);
	        }
	      }, _callee2);
	    }));
	    return _startNavigation.apply(this, arguments);
	  }
	  function handleAction(_x6, _x7, _x8, _x9, _x0, _x1, _x10) {
	    return _handleAction.apply(this, arguments);
	  }
	  function _handleAction() {
	    _handleAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(request, location, submission, matches, scopedContext, isFogOfWar, initialHydration) {
	      var opts,
	        navigation,
	        discoverResult,
	        _getShortCircuitMatch3,
	        matches2,
	        _route2,
	        boundaryId,
	        _handleNavigational2,
	        notFoundMatches,
	        _error2,
	        _route3,
	        result,
	        actionMatch,
	        dsMatches,
	        results,
	        _iterator6,
	        _step6,
	        match,
	        replace2,
	        location2,
	        boundaryMatch,
	        _args3 = arguments,
	        _t2;
	      return _regenerator().w(function (_context3) {
	        while (1) switch (_context3.p = _context3.n) {
	          case 0:
	            opts = _args3.length > 7 && _args3[7] !== undefined ? _args3[7] : {};
	            interruptActiveLoads();
	            navigation = getSubmittingNavigation(location, submission);
	            updateState({
	              navigation: navigation
	            }, {
	              flushSync: opts.flushSync === true
	            });
	            if (!isFogOfWar) {
	              _context3.n = 6;
	              break;
	            }
	            _context3.n = 1;
	            return discoverRoutes(matches, location.pathname, request.signal);
	          case 1:
	            discoverResult = _context3.v;
	            if (!(discoverResult.type === "aborted")) {
	              _context3.n = 2;
	              break;
	            }
	            return _context3.a(2, {
	              shortCircuited: true
	            });
	          case 2:
	            if (!(discoverResult.type === "error")) {
	              _context3.n = 4;
	              break;
	            }
	            if (!(discoverResult.partialMatches.length === 0)) {
	              _context3.n = 3;
	              break;
	            }
	            _getShortCircuitMatch3 = getShortCircuitMatches(dataRoutes), matches2 = _getShortCircuitMatch3.matches, _route2 = _getShortCircuitMatch3.route;
	            return _context3.a(2, {
	              matches: matches2,
	              pendingActionResult: [_route2.id, {
	                type: "error" /* error */,
	                error: discoverResult.error
	              }]
	            });
	          case 3:
	            boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
	            return _context3.a(2, {
	              matches: discoverResult.partialMatches,
	              pendingActionResult: [boundaryId, {
	                type: "error" /* error */,
	                error: discoverResult.error
	              }]
	            });
	          case 4:
	            if (discoverResult.matches) {
	              _context3.n = 5;
	              break;
	            }
	            _handleNavigational2 = handleNavigational404(location.pathname), notFoundMatches = _handleNavigational2.notFoundMatches, _error2 = _handleNavigational2.error, _route3 = _handleNavigational2.route;
	            return _context3.a(2, {
	              matches: notFoundMatches,
	              pendingActionResult: [_route3.id, {
	                type: "error" /* error */,
	                error: _error2
	              }]
	            });
	          case 5:
	            matches = discoverResult.matches;
	          case 6:
	            actionMatch = getTargetMatch(matches, location);
	            if (!(!actionMatch.route.action && !actionMatch.route.lazy)) {
	              _context3.n = 7;
	              break;
	            }
	            result = {
	              type: "error" /* error */,
	              error: getInternalRouterError(405, {
	                method: request.method,
	                pathname: location.pathname,
	                routeId: actionMatch.route.id
	              })
	            };
	            _context3.n = 16;
	            break;
	          case 7:
	            dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, actionMatch, initialHydration ? [] : hydrationRouteProperties2, scopedContext);
	            _context3.n = 8;
	            return callDataStrategy(request, dsMatches, scopedContext, null);
	          case 8:
	            results = _context3.v;
	            result = results[actionMatch.route.id];
	            if (result) {
	              _context3.n = 15;
	              break;
	            }
	            _iterator6 = _createForOfIteratorHelper(matches);
	            _context3.p = 9;
	            _iterator6.s();
	          case 10:
	            if ((_step6 = _iterator6.n()).done) {
	              _context3.n = 12;
	              break;
	            }
	            match = _step6.value;
	            if (!results[match.route.id]) {
	              _context3.n = 11;
	              break;
	            }
	            result = results[match.route.id];
	            return _context3.a(3, 12);
	          case 11:
	            _context3.n = 10;
	            break;
	          case 12:
	            _context3.n = 14;
	            break;
	          case 13:
	            _context3.p = 13;
	            _t2 = _context3.v;
	            _iterator6.e(_t2);
	          case 14:
	            _context3.p = 14;
	            _iterator6.f();
	            return _context3.f(14);
	          case 15:
	            if (!request.signal.aborted) {
	              _context3.n = 16;
	              break;
	            }
	            return _context3.a(2, {
	              shortCircuited: true
	            });
	          case 16:
	            if (!isRedirectResult(result)) {
	              _context3.n = 18;
	              break;
	            }
	            if (opts && opts.replace != null) {
	              replace2 = opts.replace;
	            } else {
	              location2 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
	              replace2 = location2 === state.location.pathname + state.location.search;
	            }
	            _context3.n = 17;
	            return startRedirectNavigation(request, result, true, {
	              submission: submission,
	              replace: replace2
	            });
	          case 17:
	            return _context3.a(2, {
	              shortCircuited: true
	            });
	          case 18:
	            if (!isErrorResult(result)) {
	              _context3.n = 19;
	              break;
	            }
	            boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
	            if ((opts && opts.replace) !== true) {
	              pendingAction = "PUSH" /* Push */;
	            }
	            return _context3.a(2, {
	              matches: matches,
	              pendingActionResult: [boundaryMatch.route.id, result, actionMatch.route.id]
	            });
	          case 19:
	            return _context3.a(2, {
	              matches: matches,
	              pendingActionResult: [actionMatch.route.id, result]
	            });
	        }
	      }, _callee3, null, [[9, 13, 14, 15]]);
	    }));
	    return _handleAction.apply(this, arguments);
	  }
	  function handleLoaders(_x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22) {
	    return _handleLoaders.apply(this, arguments);
	  }
	  function _handleLoaders() {
	    _handleLoaders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(request, location, matches, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
	      var loadingNavigation, activeSubmission, shouldUpdateNavigationState, actionData, discoverResult, _getShortCircuitMatch4, matches2, _route4, boundaryId, _handleNavigational3, _error3, notFoundMatches, _route5, routesToUse, _getMatchesToLoad, dsMatches, revalidatingFetchers, updatedFetchers2, updates, _actionData, abortPendingFetchRevalidations, _yield$callLoadersAnd, loaderResults, fetcherResults, redirect2, _processLoaderData, loaderData, errors, updatedFetchers, didAbortFetchLoads, shouldUpdateFetchers;
	      return _regenerator().w(function (_context4) {
	        while (1) switch (_context4.n) {
	          case 0:
	            loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
	            activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
	            shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
	            if (!isFogOfWar) {
	              _context4.n = 6;
	              break;
	            }
	            if (shouldUpdateNavigationState) {
	              actionData = getUpdatedActionData(pendingActionResult);
	              updateState(_objectSpread2({
	                navigation: loadingNavigation
	              }, actionData !== void 0 ? {
	                actionData: actionData
	              } : {}), {
	                flushSync: flushSync
	              });
	            }
	            _context4.n = 1;
	            return discoverRoutes(matches, location.pathname, request.signal);
	          case 1:
	            discoverResult = _context4.v;
	            if (!(discoverResult.type === "aborted")) {
	              _context4.n = 2;
	              break;
	            }
	            return _context4.a(2, {
	              shortCircuited: true
	            });
	          case 2:
	            if (!(discoverResult.type === "error")) {
	              _context4.n = 4;
	              break;
	            }
	            if (!(discoverResult.partialMatches.length === 0)) {
	              _context4.n = 3;
	              break;
	            }
	            _getShortCircuitMatch4 = getShortCircuitMatches(dataRoutes), matches2 = _getShortCircuitMatch4.matches, _route4 = _getShortCircuitMatch4.route;
	            return _context4.a(2, {
	              matches: matches2,
	              loaderData: {},
	              errors: _defineProperty({}, _route4.id, discoverResult.error)
	            });
	          case 3:
	            boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
	            return _context4.a(2, {
	              matches: discoverResult.partialMatches,
	              loaderData: {},
	              errors: _defineProperty({}, boundaryId, discoverResult.error)
	            });
	          case 4:
	            if (discoverResult.matches) {
	              _context4.n = 5;
	              break;
	            }
	            _handleNavigational3 = handleNavigational404(location.pathname), _error3 = _handleNavigational3.error, notFoundMatches = _handleNavigational3.notFoundMatches, _route5 = _handleNavigational3.route;
	            return _context4.a(2, {
	              matches: notFoundMatches,
	              loaderData: {},
	              errors: _defineProperty({}, _route5.id, _error3)
	            });
	          case 5:
	            matches = discoverResult.matches;
	          case 6:
	            routesToUse = inFlightDataRoutes || dataRoutes;
	            _getMatchesToLoad = getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, activeSubmission, location, initialHydration ? [] : hydrationRouteProperties2, initialHydration === true, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, pendingActionResult), dsMatches = _getMatchesToLoad.dsMatches, revalidatingFetchers = _getMatchesToLoad.revalidatingFetchers;
	            pendingNavigationLoadId = ++incrementingLoadId;
	            if (!(!init.dataStrategy && !dsMatches.some(function (m) {
	              return m.shouldLoad;
	            }) && !dsMatches.some(function (m) {
	              return m.route.middleware;
	            }) && revalidatingFetchers.length === 0)) {
	              _context4.n = 7;
	              break;
	            }
	            updatedFetchers2 = markFetchRedirectsDone();
	            completeNavigation(location, _objectSpread2(_objectSpread2({
	              matches: matches,
	              loaderData: {},
	              // Commit pending error if we're short circuiting
	              errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? _defineProperty({}, pendingActionResult[0], pendingActionResult[1].error) : null
	            }, getActionDataForCommit(pendingActionResult)), updatedFetchers2 ? {
	              fetchers: new Map(state.fetchers)
	            } : {}), {
	              flushSync: flushSync
	            });
	            return _context4.a(2, {
	              shortCircuited: true
	            });
	          case 7:
	            if (shouldUpdateNavigationState) {
	              updates = {};
	              if (!isFogOfWar) {
	                updates.navigation = loadingNavigation;
	                _actionData = getUpdatedActionData(pendingActionResult);
	                if (_actionData !== void 0) {
	                  updates.actionData = _actionData;
	                }
	              }
	              if (revalidatingFetchers.length > 0) {
	                updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
	              }
	              updateState(updates, {
	                flushSync: flushSync
	              });
	            }
	            revalidatingFetchers.forEach(function (rf) {
	              abortFetcher(rf.key);
	              if (rf.controller) {
	                fetchControllers.set(rf.key, rf.controller);
	              }
	            });
	            abortPendingFetchRevalidations = function abortPendingFetchRevalidations() {
	              return revalidatingFetchers.forEach(function (f) {
	                return abortFetcher(f.key);
	              });
	            };
	            if (pendingNavigationController) {
	              pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
	            }
	            _context4.n = 8;
	            return callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, request, scopedContext);
	          case 8:
	            _yield$callLoadersAnd = _context4.v;
	            loaderResults = _yield$callLoadersAnd.loaderResults;
	            fetcherResults = _yield$callLoadersAnd.fetcherResults;
	            if (!request.signal.aborted) {
	              _context4.n = 9;
	              break;
	            }
	            return _context4.a(2, {
	              shortCircuited: true
	            });
	          case 9:
	            if (pendingNavigationController) {
	              pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
	            }
	            revalidatingFetchers.forEach(function (rf) {
	              return fetchControllers["delete"](rf.key);
	            });
	            redirect2 = findRedirect(loaderResults);
	            if (!redirect2) {
	              _context4.n = 11;
	              break;
	            }
	            _context4.n = 10;
	            return startRedirectNavigation(request, redirect2.result, true, {
	              replace: replace2
	            });
	          case 10:
	            return _context4.a(2, {
	              shortCircuited: true
	            });
	          case 11:
	            redirect2 = findRedirect(fetcherResults);
	            if (!redirect2) {
	              _context4.n = 13;
	              break;
	            }
	            fetchRedirectIds.add(redirect2.key);
	            _context4.n = 12;
	            return startRedirectNavigation(request, redirect2.result, true, {
	              replace: replace2
	            });
	          case 12:
	            return _context4.a(2, {
	              shortCircuited: true
	            });
	          case 13:
	            _processLoaderData = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults), loaderData = _processLoaderData.loaderData, errors = _processLoaderData.errors;
	            if (initialHydration && state.errors) {
	              errors = _objectSpread2(_objectSpread2({}, state.errors), errors);
	            }
	            updatedFetchers = markFetchRedirectsDone();
	            didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
	            shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
	            return _context4.a(2, _objectSpread2({
	              matches: matches,
	              loaderData: loaderData,
	              errors: errors
	            }, shouldUpdateFetchers ? {
	              fetchers: new Map(state.fetchers)
	            } : {}));
	        }
	      }, _callee4);
	    }));
	    return _handleLoaders.apply(this, arguments);
	  }
	  function getUpdatedActionData(pendingActionResult) {
	    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
	      return _defineProperty({}, pendingActionResult[0], pendingActionResult[1].data);
	    } else if (state.actionData) {
	      if (Object.keys(state.actionData).length === 0) {
	        return null;
	      } else {
	        return state.actionData;
	      }
	    }
	  }
	  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
	    revalidatingFetchers.forEach(function (rf) {
	      var fetcher = state.fetchers.get(rf.key);
	      var revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
	      state.fetchers.set(rf.key, revalidatingFetcher);
	    });
	    return new Map(state.fetchers);
	  }
	  function fetch2(_x23, _x24, _x25, _x26) {
	    return _fetch.apply(this, arguments);
	  }
	  function _fetch() {
	    _fetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(key, routeId, href, opts) {
	      var flushSync, routesToUse, normalizedPath, matches, fogOfWar, _normalizeNavigateOpt2, path, submission, error, scopedContext, preventScrollReset, _t3;
	      return _regenerator().w(function (_context5) {
	        while (1) switch (_context5.n) {
	          case 0:
	            abortFetcher(key);
	            flushSync = (opts && opts.flushSync) === true;
	            routesToUse = inFlightDataRoutes || dataRoutes;
	            normalizedPath = normalizeTo(state.location, state.matches, basename, href, routeId, opts === null || opts === void 0 ? void 0 : opts.relative);
	            matches = matchRoutes(routesToUse, normalizedPath, basename);
	            fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
	            if (fogOfWar.active && fogOfWar.matches) {
	              matches = fogOfWar.matches;
	            }
	            if (matches) {
	              _context5.n = 1;
	              break;
	            }
	            setFetcherError(key, routeId, getInternalRouterError(404, {
	              pathname: normalizedPath
	            }), {
	              flushSync: flushSync
	            });
	            return _context5.a(2);
	          case 1:
	            _normalizeNavigateOpt2 = normalizeNavigateOptions(true, normalizedPath, opts), path = _normalizeNavigateOpt2.path, submission = _normalizeNavigateOpt2.submission, error = _normalizeNavigateOpt2.error;
	            if (!error) {
	              _context5.n = 2;
	              break;
	            }
	            setFetcherError(key, routeId, error, {
	              flushSync: flushSync
	            });
	            return _context5.a(2);
	          case 2:
	            if (!init.getContext) {
	              _context5.n = 4;
	              break;
	            }
	            _context5.n = 3;
	            return init.getContext();
	          case 3:
	            _t3 = _context5.v;
	            _context5.n = 5;
	            break;
	          case 4:
	            _t3 = new RouterContextProvider();
	          case 5:
	            scopedContext = _t3;
	            preventScrollReset = (opts && opts.preventScrollReset) === true;
	            if (!(submission && isMutationMethod(submission.formMethod))) {
	              _context5.n = 7;
	              break;
	            }
	            _context5.n = 6;
	            return handleFetcherAction(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
	          case 6:
	            return _context5.a(2);
	          case 7:
	            fetchLoadMatches.set(key, {
	              routeId: routeId,
	              path: path
	            });
	            _context5.n = 8;
	            return handleFetcherLoader(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission);
	          case 8:
	            return _context5.a(2);
	        }
	      }, _callee5);
	    }));
	    return _fetch.apply(this, arguments);
	  }
	  function handleFetcherAction(_x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34, _x35) {
	    return _handleFetcherAction.apply(this, arguments);
	  }
	  function _handleFetcherAction() {
	    _handleFetcherAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(key, routeId, path, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
	      var existingFetcher, abortController, fetchRequest, discoverResult, match, _error4, originatingLoadId, fetchMatches, actionResults, actionResult, nextLocation, revalidationRequest, routesToUse, matches, loadId, loadFetcher, _getMatchesToLoad2, dsMatches, revalidatingFetchers, abortPendingFetchRevalidations, _yield$callLoadersAnd2, loaderResults, fetcherResults, doneFetcher, redirect2, _processLoaderData2, loaderData, errors;
	      return _regenerator().w(function (_context6) {
	        while (1) switch (_context6.n) {
	          case 0:
	            interruptActiveLoads();
	            fetchLoadMatches["delete"](key);
	            existingFetcher = state.fetchers.get(key);
	            updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
	              flushSync: flushSync
	            });
	            abortController = new AbortController();
	            fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
	            if (!isFogOfWar) {
	              _context6.n = 5;
	              break;
	            }
	            _context6.n = 1;
	            return discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
	          case 1:
	            discoverResult = _context6.v;
	            if (!(discoverResult.type === "aborted")) {
	              _context6.n = 2;
	              break;
	            }
	            return _context6.a(2);
	          case 2:
	            if (!(discoverResult.type === "error")) {
	              _context6.n = 3;
	              break;
	            }
	            setFetcherError(key, routeId, discoverResult.error, {
	              flushSync: flushSync
	            });
	            return _context6.a(2);
	          case 3:
	            if (discoverResult.matches) {
	              _context6.n = 4;
	              break;
	            }
	            setFetcherError(key, routeId, getInternalRouterError(404, {
	              pathname: path
	            }), {
	              flushSync: flushSync
	            });
	            return _context6.a(2);
	          case 4:
	            requestMatches = discoverResult.matches;
	          case 5:
	            match = getTargetMatch(requestMatches, path);
	            if (!(!match.route.action && !match.route.lazy)) {
	              _context6.n = 6;
	              break;
	            }
	            _error4 = getInternalRouterError(405, {
	              method: submission.formMethod,
	              pathname: path,
	              routeId: routeId
	            });
	            setFetcherError(key, routeId, _error4, {
	              flushSync: flushSync
	            });
	            return _context6.a(2);
	          case 6:
	            fetchControllers.set(key, abortController);
	            originatingLoadId = incrementingLoadId;
	            fetchMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, requestMatches, match, hydrationRouteProperties2, scopedContext);
	            _context6.n = 7;
	            return callDataStrategy(fetchRequest, fetchMatches, scopedContext, key);
	          case 7:
	            actionResults = _context6.v;
	            actionResult = actionResults[match.route.id];
	            if (!fetchRequest.signal.aborted) {
	              _context6.n = 8;
	              break;
	            }
	            if (fetchControllers.get(key) === abortController) {
	              fetchControllers["delete"](key);
	            }
	            return _context6.a(2);
	          case 8:
	            if (!fetchersQueuedForDeletion.has(key)) {
	              _context6.n = 10;
	              break;
	            }
	            if (!(isRedirectResult(actionResult) || isErrorResult(actionResult))) {
	              _context6.n = 9;
	              break;
	            }
	            updateFetcherState(key, getDoneFetcher(void 0));
	            return _context6.a(2);
	          case 9:
	            _context6.n = 13;
	            break;
	          case 10:
	            if (!isRedirectResult(actionResult)) {
	              _context6.n = 12;
	              break;
	            }
	            fetchControllers["delete"](key);
	            if (!(pendingNavigationLoadId > originatingLoadId)) {
	              _context6.n = 11;
	              break;
	            }
	            updateFetcherState(key, getDoneFetcher(void 0));
	            return _context6.a(2);
	          case 11:
	            fetchRedirectIds.add(key);
	            updateFetcherState(key, getLoadingFetcher(submission));
	            return _context6.a(2, startRedirectNavigation(fetchRequest, actionResult, false, {
	              fetcherSubmission: submission,
	              preventScrollReset: preventScrollReset
	            }));
	          case 12:
	            if (!isErrorResult(actionResult)) {
	              _context6.n = 13;
	              break;
	            }
	            setFetcherError(key, routeId, actionResult.error);
	            return _context6.a(2);
	          case 13:
	            nextLocation = state.navigation.location || state.location;
	            revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
	            routesToUse = inFlightDataRoutes || dataRoutes;
	            matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
	            invariant(matches, "Didn't find any matches after fetcher action");
	            loadId = ++incrementingLoadId;
	            fetchReloadIds.set(key, loadId);
	            loadFetcher = getLoadingFetcher(submission, actionResult.data);
	            state.fetchers.set(key, loadFetcher);
	            _getMatchesToLoad2 = getMatchesToLoad(revalidationRequest, scopedContext, mapRouteProperties2, manifest, init.history, state, matches, submission, nextLocation, hydrationRouteProperties2, false, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, init.patchRoutesOnNavigation != null, [match.route.id, actionResult]), dsMatches = _getMatchesToLoad2.dsMatches, revalidatingFetchers = _getMatchesToLoad2.revalidatingFetchers;
	            revalidatingFetchers.filter(function (rf) {
	              return rf.key !== key;
	            }).forEach(function (rf) {
	              var staleKey = rf.key;
	              var existingFetcher2 = state.fetchers.get(staleKey);
	              var revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
	              state.fetchers.set(staleKey, revalidatingFetcher);
	              abortFetcher(staleKey);
	              if (rf.controller) {
	                fetchControllers.set(staleKey, rf.controller);
	              }
	            });
	            updateState({
	              fetchers: new Map(state.fetchers)
	            });
	            abortPendingFetchRevalidations = function abortPendingFetchRevalidations() {
	              return revalidatingFetchers.forEach(function (rf) {
	                return abortFetcher(rf.key);
	              });
	            };
	            abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
	            _context6.n = 14;
	            return callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, revalidationRequest, scopedContext);
	          case 14:
	            _yield$callLoadersAnd2 = _context6.v;
	            loaderResults = _yield$callLoadersAnd2.loaderResults;
	            fetcherResults = _yield$callLoadersAnd2.fetcherResults;
	            if (!abortController.signal.aborted) {
	              _context6.n = 15;
	              break;
	            }
	            return _context6.a(2);
	          case 15:
	            abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
	            fetchReloadIds["delete"](key);
	            fetchControllers["delete"](key);
	            revalidatingFetchers.forEach(function (r) {
	              return fetchControllers["delete"](r.key);
	            });
	            if (state.fetchers.has(key)) {
	              doneFetcher = getDoneFetcher(actionResult.data);
	              state.fetchers.set(key, doneFetcher);
	            }
	            redirect2 = findRedirect(loaderResults);
	            if (!redirect2) {
	              _context6.n = 16;
	              break;
	            }
	            return _context6.a(2, startRedirectNavigation(revalidationRequest, redirect2.result, false, {
	              preventScrollReset: preventScrollReset
	            }));
	          case 16:
	            redirect2 = findRedirect(fetcherResults);
	            if (!redirect2) {
	              _context6.n = 17;
	              break;
	            }
	            fetchRedirectIds.add(redirect2.key);
	            return _context6.a(2, startRedirectNavigation(revalidationRequest, redirect2.result, false, {
	              preventScrollReset: preventScrollReset
	            }));
	          case 17:
	            _processLoaderData2 = processLoaderData(state, matches, loaderResults, void 0, revalidatingFetchers, fetcherResults), loaderData = _processLoaderData2.loaderData, errors = _processLoaderData2.errors;
	            abortStaleFetchLoads(loadId);
	            if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
	              invariant(pendingAction, "Expected pending action");
	              pendingNavigationController && pendingNavigationController.abort();
	              completeNavigation(state.navigation.location, {
	                matches: matches,
	                loaderData: loaderData,
	                errors: errors,
	                fetchers: new Map(state.fetchers)
	              });
	            } else {
	              updateState({
	                errors: errors,
	                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
	                fetchers: new Map(state.fetchers)
	              });
	              isRevalidationRequired = false;
	            }
	          case 18:
	            return _context6.a(2);
	        }
	      }, _callee6);
	    }));
	    return _handleFetcherAction.apply(this, arguments);
	  }
	  function handleFetcherLoader(_x36, _x37, _x38, _x39, _x40, _x41, _x42, _x43, _x44) {
	    return _handleFetcherLoader.apply(this, arguments);
	  }
	  function _handleFetcherLoader() {
	    _handleFetcherLoader = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(key, routeId, path, matches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
	      var existingFetcher, abortController, fetchRequest, discoverResult, match, originatingLoadId, dsMatches, results, result;
	      return _regenerator().w(function (_context7) {
	        while (1) switch (_context7.n) {
	          case 0:
	            existingFetcher = state.fetchers.get(key);
	            updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), {
	              flushSync: flushSync
	            });
	            abortController = new AbortController();
	            fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
	            if (!isFogOfWar) {
	              _context7.n = 5;
	              break;
	            }
	            _context7.n = 1;
	            return discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
	          case 1:
	            discoverResult = _context7.v;
	            if (!(discoverResult.type === "aborted")) {
	              _context7.n = 2;
	              break;
	            }
	            return _context7.a(2);
	          case 2:
	            if (!(discoverResult.type === "error")) {
	              _context7.n = 3;
	              break;
	            }
	            setFetcherError(key, routeId, discoverResult.error, {
	              flushSync: flushSync
	            });
	            return _context7.a(2);
	          case 3:
	            if (discoverResult.matches) {
	              _context7.n = 4;
	              break;
	            }
	            setFetcherError(key, routeId, getInternalRouterError(404, {
	              pathname: path
	            }), {
	              flushSync: flushSync
	            });
	            return _context7.a(2);
	          case 4:
	            matches = discoverResult.matches;
	          case 5:
	            match = getTargetMatch(matches, path);
	            fetchControllers.set(key, abortController);
	            originatingLoadId = incrementingLoadId;
	            dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, matches, match, hydrationRouteProperties2, scopedContext);
	            _context7.n = 6;
	            return callDataStrategy(fetchRequest, dsMatches, scopedContext, key);
	          case 6:
	            results = _context7.v;
	            result = results[match.route.id];
	            if (fetchControllers.get(key) === abortController) {
	              fetchControllers["delete"](key);
	            }
	            if (!fetchRequest.signal.aborted) {
	              _context7.n = 7;
	              break;
	            }
	            return _context7.a(2);
	          case 7:
	            if (!fetchersQueuedForDeletion.has(key)) {
	              _context7.n = 8;
	              break;
	            }
	            updateFetcherState(key, getDoneFetcher(void 0));
	            return _context7.a(2);
	          case 8:
	            if (!isRedirectResult(result)) {
	              _context7.n = 11;
	              break;
	            }
	            if (!(pendingNavigationLoadId > originatingLoadId)) {
	              _context7.n = 9;
	              break;
	            }
	            updateFetcherState(key, getDoneFetcher(void 0));
	            return _context7.a(2);
	          case 9:
	            fetchRedirectIds.add(key);
	            _context7.n = 10;
	            return startRedirectNavigation(fetchRequest, result, false, {
	              preventScrollReset: preventScrollReset
	            });
	          case 10:
	            return _context7.a(2);
	          case 11:
	            if (!isErrorResult(result)) {
	              _context7.n = 12;
	              break;
	            }
	            setFetcherError(key, routeId, result.error);
	            return _context7.a(2);
	          case 12:
	            updateFetcherState(key, getDoneFetcher(result.data));
	          case 13:
	            return _context7.a(2);
	        }
	      }, _callee7);
	    }));
	    return _handleFetcherLoader.apply(this, arguments);
	  }
	  function startRedirectNavigation(_x45, _x46, _x47) {
	    return _startRedirectNavigation.apply(this, arguments);
	  }
	  function _startRedirectNavigation() {
	    _startRedirectNavigation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(request, redirect2, isNavigation) {
	      var _ref0,
	        submission,
	        fetcherSubmission,
	        preventScrollReset,
	        replace2,
	        location,
	        redirectLocation,
	        isDocumentReload,
	        url,
	        redirectNavigationType,
	        _state$navigation,
	        formMethod,
	        formAction,
	        formEncType,
	        activeSubmission,
	        overrideNavigation,
	        _args8 = arguments;
	      return _regenerator().w(function (_context8) {
	        while (1) switch (_context8.n) {
	          case 0:
	            _ref0 = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : {}, submission = _ref0.submission, fetcherSubmission = _ref0.fetcherSubmission, preventScrollReset = _ref0.preventScrollReset, replace2 = _ref0.replace;
	            if (redirect2.response.headers.has("X-Remix-Revalidate")) {
	              isRevalidationRequired = true;
	            }
	            location = redirect2.response.headers.get("Location");
	            invariant(location, "Expected a Location header on the redirect Response");
	            location = normalizeRedirectLocation(location, new URL(request.url), basename);
	            redirectLocation = createLocation(state.location, location, {
	              _isRedirect: true
	            });
	            if (!isBrowser2) {
	              _context8.n = 1;
	              break;
	            }
	            isDocumentReload = false;
	            if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
	              isDocumentReload = true;
	            } else if (isAbsoluteUrl(location)) {
	              url = createBrowserURLImpl(location, true);
	              isDocumentReload =
	              // Hard reload if it's an absolute URL to a new origin
	              url.origin !== routerWindow.location.origin ||
	              // Hard reload if it's an absolute URL that does not match our basename
	              stripBasename(url.pathname, basename) == null;
	            }
	            if (!isDocumentReload) {
	              _context8.n = 1;
	              break;
	            }
	            if (replace2) {
	              routerWindow.location.replace(location);
	            } else {
	              routerWindow.location.assign(location);
	            }
	            return _context8.a(2);
	          case 1:
	            pendingNavigationController = null;
	            redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" /* Replace */ : "PUSH";
	            _state$navigation = state.navigation, formMethod = _state$navigation.formMethod, formAction = _state$navigation.formAction, formEncType = _state$navigation.formEncType;
	            if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
	              submission = getSubmissionFromNavigation(state.navigation);
	            }
	            activeSubmission = submission || fetcherSubmission;
	            if (!(redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod))) {
	              _context8.n = 3;
	              break;
	            }
	            _context8.n = 2;
	            return startNavigation(redirectNavigationType, redirectLocation, {
	              submission: _objectSpread2(_objectSpread2({}, activeSubmission), {}, {
	                formAction: location
	              }),
	              // Preserve these flags across redirects
	              preventScrollReset: preventScrollReset || pendingPreventScrollReset,
	              enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
	            });
	          case 2:
	            _context8.n = 4;
	            break;
	          case 3:
	            overrideNavigation = getLoadingNavigation(redirectLocation, submission);
	            _context8.n = 4;
	            return startNavigation(redirectNavigationType, redirectLocation, {
	              overrideNavigation: overrideNavigation,
	              // Send fetcher submissions through for shouldRevalidate
	              fetcherSubmission: fetcherSubmission,
	              // Preserve these flags across redirects
	              preventScrollReset: preventScrollReset || pendingPreventScrollReset,
	              enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
	            });
	          case 4:
	            return _context8.a(2);
	        }
	      }, _callee8);
	    }));
	    return _startRedirectNavigation.apply(this, arguments);
	  }
	  function callDataStrategy(_x48, _x49, _x50, _x51) {
	    return _callDataStrategy.apply(this, arguments);
	  }
	  function _callDataStrategy() {
	    _callDataStrategy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(request, matches, scopedContext, fetcherKey) {
	      var results, dataResults, _i, _Object$entries, _Object$entries$_i, routeId, result, response, _t4;
	      return _regenerator().w(function (_context9) {
	        while (1) switch (_context9.p = _context9.n) {
	          case 0:
	            dataResults = {};
	            _context9.p = 1;
	            _context9.n = 2;
	            return callDataStrategyImpl(dataStrategyImpl, request, matches, fetcherKey, scopedContext, false);
	          case 2:
	            results = _context9.v;
	            _context9.n = 4;
	            break;
	          case 3:
	            _context9.p = 3;
	            _t4 = _context9.v;
	            matches.filter(function (m) {
	              return m.shouldLoad;
	            }).forEach(function (m) {
	              dataResults[m.route.id] = {
	                type: "error" /* error */,
	                error: _t4
	              };
	            });
	            return _context9.a(2, dataResults);
	          case 4:
	            if (!request.signal.aborted) {
	              _context9.n = 5;
	              break;
	            }
	            return _context9.a(2, dataResults);
	          case 5:
	            _i = 0, _Object$entries = Object.entries(results);
	          case 6:
	            if (!(_i < _Object$entries.length)) {
	              _context9.n = 10;
	              break;
	            }
	            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), routeId = _Object$entries$_i[0], result = _Object$entries$_i[1];
	            if (!isRedirectDataStrategyResult(result)) {
	              _context9.n = 7;
	              break;
	            }
	            response = result.result;
	            dataResults[routeId] = {
	              type: "redirect" /* redirect */,
	              response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename)
	            };
	            _context9.n = 9;
	            break;
	          case 7:
	            _context9.n = 8;
	            return convertDataStrategyResultToDataResult(result);
	          case 8:
	            dataResults[routeId] = _context9.v;
	          case 9:
	            _i++;
	            _context9.n = 6;
	            break;
	          case 10:
	            return _context9.a(2, dataResults);
	        }
	      }, _callee9, null, [[1, 3]]);
	    }));
	    return _callDataStrategy.apply(this, arguments);
	  }
	  function callLoadersAndMaybeResolveData(_x52, _x53, _x54, _x55) {
	    return _callLoadersAndMaybeResolveData.apply(this, arguments);
	  }
	  function _callLoadersAndMaybeResolveData() {
	    _callLoadersAndMaybeResolveData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(matches, fetchersToLoad, request, scopedContext) {
	      var loaderResultsPromise, fetcherResultsPromise, loaderResults, fetcherResults;
	      return _regenerator().w(function (_context1) {
	        while (1) switch (_context1.n) {
	          case 0:
	            loaderResultsPromise = callDataStrategy(request, matches, scopedContext, null);
	            fetcherResultsPromise = Promise.all(fetchersToLoad.map(/*#__PURE__*/function () {
	              var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(f) {
	                var results, result;
	                return _regenerator().w(function (_context0) {
	                  while (1) switch (_context0.n) {
	                    case 0:
	                      if (!(f.matches && f.match && f.request && f.controller)) {
	                        _context0.n = 2;
	                        break;
	                      }
	                      _context0.n = 1;
	                      return callDataStrategy(f.request, f.matches, scopedContext, f.key);
	                    case 1:
	                      results = _context0.v;
	                      result = results[f.match.route.id];
	                      return _context0.a(2, _defineProperty({}, f.key, result));
	                    case 2:
	                      return _context0.a(2, Promise.resolve(_defineProperty({}, f.key, {
	                        type: "error" /* error */,
	                        error: getInternalRouterError(404, {
	                          pathname: f.path
	                        })
	                      })));
	                    case 3:
	                      return _context0.a(2);
	                  }
	                }, _callee0);
	              }));
	              return function (_x60) {
	                return _ref1.apply(this, arguments);
	              };
	            }()));
	            _context1.n = 1;
	            return loaderResultsPromise;
	          case 1:
	            loaderResults = _context1.v;
	            _context1.n = 2;
	            return fetcherResultsPromise;
	          case 2:
	            fetcherResults = _context1.v.reduce(function (acc, r) {
	              return Object.assign(acc, r);
	            }, {});
	            return _context1.a(2, {
	              loaderResults: loaderResults,
	              fetcherResults: fetcherResults
	            });
	        }
	      }, _callee1);
	    }));
	    return _callLoadersAndMaybeResolveData.apply(this, arguments);
	  }
	  function interruptActiveLoads() {
	    isRevalidationRequired = true;
	    fetchLoadMatches.forEach(function (_, key) {
	      if (fetchControllers.has(key)) {
	        cancelledFetcherLoads.add(key);
	      }
	      abortFetcher(key);
	    });
	  }
	  function updateFetcherState(key, fetcher) {
	    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    state.fetchers.set(key, fetcher);
	    updateState({
	      fetchers: new Map(state.fetchers)
	    }, {
	      flushSync: (opts && opts.flushSync) === true
	    });
	  }
	  function setFetcherError(key, routeId, error) {
	    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var boundaryMatch = findNearestBoundary(state.matches, routeId);
	    deleteFetcher(key);
	    updateState({
	      errors: _defineProperty({}, boundaryMatch.route.id, error),
	      fetchers: new Map(state.fetchers)
	    }, {
	      flushSync: (opts && opts.flushSync) === true
	    });
	  }
	  function getFetcher(key) {
	    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
	    if (fetchersQueuedForDeletion.has(key)) {
	      fetchersQueuedForDeletion["delete"](key);
	    }
	    return state.fetchers.get(key) || IDLE_FETCHER;
	  }
	  function deleteFetcher(key) {
	    var fetcher = state.fetchers.get(key);
	    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
	      abortFetcher(key);
	    }
	    fetchLoadMatches["delete"](key);
	    fetchReloadIds["delete"](key);
	    fetchRedirectIds["delete"](key);
	    fetchersQueuedForDeletion["delete"](key);
	    cancelledFetcherLoads["delete"](key);
	    state.fetchers["delete"](key);
	  }
	  function queueFetcherForDeletion(key) {
	    var count = (activeFetchers.get(key) || 0) - 1;
	    if (count <= 0) {
	      activeFetchers["delete"](key);
	      fetchersQueuedForDeletion.add(key);
	    } else {
	      activeFetchers.set(key, count);
	    }
	    updateState({
	      fetchers: new Map(state.fetchers)
	    });
	  }
	  function abortFetcher(key) {
	    var controller = fetchControllers.get(key);
	    if (controller) {
	      controller.abort();
	      fetchControllers["delete"](key);
	    }
	  }
	  function markFetchersDone(keys) {
	    var _iterator3 = _createForOfIteratorHelper(keys),
	      _step3;
	    try {
	      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	        var key = _step3.value;
	        var fetcher = getFetcher(key);
	        var doneFetcher = getDoneFetcher(fetcher.data);
	        state.fetchers.set(key, doneFetcher);
	      }
	    } catch (err) {
	      _iterator3.e(err);
	    } finally {
	      _iterator3.f();
	    }
	  }
	  function markFetchRedirectsDone() {
	    var doneKeys = [];
	    var updatedFetchers = false;
	    var _iterator4 = _createForOfIteratorHelper(fetchRedirectIds),
	      _step4;
	    try {
	      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	        var key = _step4.value;
	        var fetcher = state.fetchers.get(key);
	        invariant(fetcher, "Expected fetcher: ".concat(key));
	        if (fetcher.state === "loading") {
	          fetchRedirectIds["delete"](key);
	          doneKeys.push(key);
	          updatedFetchers = true;
	        }
	      }
	    } catch (err) {
	      _iterator4.e(err);
	    } finally {
	      _iterator4.f();
	    }
	    markFetchersDone(doneKeys);
	    return updatedFetchers;
	  }
	  function abortStaleFetchLoads(landedId) {
	    var yeetedKeys = [];
	    var _iterator5 = _createForOfIteratorHelper(fetchReloadIds),
	      _step5;
	    try {
	      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	        var _step5$value = _slicedToArray(_step5.value, 2),
	          key = _step5$value[0],
	          id = _step5$value[1];
	        if (id < landedId) {
	          var fetcher = state.fetchers.get(key);
	          invariant(fetcher, "Expected fetcher: ".concat(key));
	          if (fetcher.state === "loading") {
	            abortFetcher(key);
	            fetchReloadIds["delete"](key);
	            yeetedKeys.push(key);
	          }
	        }
	      }
	    } catch (err) {
	      _iterator5.e(err);
	    } finally {
	      _iterator5.f();
	    }
	    markFetchersDone(yeetedKeys);
	    return yeetedKeys.length > 0;
	  }
	  function getBlocker(key, fn) {
	    var blocker = state.blockers.get(key) || IDLE_BLOCKER;
	    if (blockerFunctions.get(key) !== fn) {
	      blockerFunctions.set(key, fn);
	    }
	    return blocker;
	  }
	  function deleteBlocker(key) {
	    state.blockers["delete"](key);
	    blockerFunctions["delete"](key);
	  }
	  function updateBlocker(key, newBlocker) {
	    var blocker = state.blockers.get(key) || IDLE_BLOCKER;
	    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: ".concat(blocker.state, " -> ").concat(newBlocker.state));
	    var blockers = new Map(state.blockers);
	    blockers.set(key, newBlocker);
	    updateState({
	      blockers: blockers
	    });
	  }
	  function shouldBlockNavigation(_ref8) {
	    var currentLocation = _ref8.currentLocation,
	      nextLocation = _ref8.nextLocation,
	      historyAction = _ref8.historyAction;
	    if (blockerFunctions.size === 0) {
	      return;
	    }
	    if (blockerFunctions.size > 1) {
	      warning(false, "A router only supports one blocker at a time");
	    }
	    var entries = Array.from(blockerFunctions.entries());
	    var _entries = _slicedToArray(entries[entries.length - 1], 2),
	      blockerKey = _entries[0],
	      blockerFunction = _entries[1];
	    var blocker = state.blockers.get(blockerKey);
	    if (blocker && blocker.state === "proceeding") {
	      return;
	    }
	    if (blockerFunction({
	      currentLocation: currentLocation,
	      nextLocation: nextLocation,
	      historyAction: historyAction
	    })) {
	      return blockerKey;
	    }
	  }
	  function handleNavigational404(pathname) {
	    var error = getInternalRouterError(404, {
	      pathname: pathname
	    });
	    var routesToUse = inFlightDataRoutes || dataRoutes;
	    var _getShortCircuitMatch2 = getShortCircuitMatches(routesToUse),
	      matches = _getShortCircuitMatch2.matches,
	      route = _getShortCircuitMatch2.route;
	    return {
	      notFoundMatches: matches,
	      route: route,
	      error: error
	    };
	  }
	  function enableScrollRestoration(positions, getPosition, getKey) {
	    savedScrollPositions2 = positions;
	    getScrollPosition = getPosition;
	    getScrollRestorationKey2 = getKey || null;
	    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
	      initialScrollRestored = true;
	      var y = getSavedScrollPosition(state.location, state.matches);
	      if (y != null) {
	        updateState({
	          restoreScrollPosition: y
	        });
	      }
	    }
	    return function () {
	      savedScrollPositions2 = null;
	      getScrollPosition = null;
	      getScrollRestorationKey2 = null;
	    };
	  }
	  function getScrollKey(location, matches) {
	    if (getScrollRestorationKey2) {
	      var key = getScrollRestorationKey2(location, matches.map(function (m) {
	        return convertRouteMatchToUiMatch(m, state.loaderData);
	      }));
	      return key || location.key;
	    }
	    return location.key;
	  }
	  function saveScrollPosition(location, matches) {
	    if (savedScrollPositions2 && getScrollPosition) {
	      var key = getScrollKey(location, matches);
	      savedScrollPositions2[key] = getScrollPosition();
	    }
	  }
	  function getSavedScrollPosition(location, matches) {
	    if (savedScrollPositions2) {
	      var key = getScrollKey(location, matches);
	      var y = savedScrollPositions2[key];
	      if (typeof y === "number") {
	        return y;
	      }
	    }
	    return null;
	  }
	  function checkFogOfWar(matches, routesToUse, pathname) {
	    if (init.patchRoutesOnNavigation) {
	      if (!matches) {
	        var fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
	        return {
	          active: true,
	          matches: fogMatches || []
	        };
	      } else {
	        if (Object.keys(matches[0].params).length > 0) {
	          var partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
	          return {
	            active: true,
	            matches: partialMatches
	          };
	        }
	      }
	    }
	    return {
	      active: false,
	      matches: null
	    };
	  }
	  function discoverRoutes(_x56, _x57, _x58, _x59) {
	    return _discoverRoutes.apply(this, arguments);
	  }
	  function _discoverRoutes() {
	    _discoverRoutes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(matches, pathname, signal, fetcherKey) {
	      var partialMatches, _loop, _ret;
	      return _regenerator().w(function (_context11) {
	        while (1) switch (_context11.n) {
	          case 0:
	            if (init.patchRoutesOnNavigation) {
	              _context11.n = 1;
	              break;
	            }
	            return _context11.a(2, {
	              type: "success",
	              matches: matches
	            });
	          case 1:
	            partialMatches = matches;
	            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
	              var isNonHMR, routesToUse, localManifest, newMatches, newPartialMatches, _t5;
	              return _regenerator().w(function (_context10) {
	                while (1) switch (_context10.p = _context10.n) {
	                  case 0:
	                    isNonHMR = inFlightDataRoutes == null;
	                    routesToUse = inFlightDataRoutes || dataRoutes;
	                    localManifest = manifest;
	                    _context10.p = 1;
	                    _context10.n = 2;
	                    return init.patchRoutesOnNavigation({
	                      signal: signal,
	                      path: pathname,
	                      matches: partialMatches,
	                      fetcherKey: fetcherKey,
	                      patch: function patch(routeId, children) {
	                        if (signal.aborted) return;
	                        patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties2, false);
	                      }
	                    });
	                  case 2:
	                    _context10.n = 4;
	                    break;
	                  case 3:
	                    _context10.p = 3;
	                    _t5 = _context10.v;
	                    return _context10.a(2, {
	                      v: {
	                        type: "error",
	                        error: _t5,
	                        partialMatches: partialMatches
	                      }
	                    });
	                  case 4:
	                    _context10.p = 4;
	                    if (isNonHMR && !signal.aborted) {
	                      dataRoutes = _toConsumableArray(dataRoutes);
	                    }
	                    return _context10.f(4);
	                  case 5:
	                    if (!signal.aborted) {
	                      _context10.n = 6;
	                      break;
	                    }
	                    return _context10.a(2, {
	                      v: {
	                        type: "aborted"
	                      }
	                    });
	                  case 6:
	                    newMatches = matchRoutes(routesToUse, pathname, basename);
	                    if (!newMatches) {
	                      _context10.n = 7;
	                      break;
	                    }
	                    return _context10.a(2, {
	                      v: {
	                        type: "success",
	                        matches: newMatches
	                      }
	                    });
	                  case 7:
	                    newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
	                    if (!(!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every(function (m, i) {
	                      return m.route.id === newPartialMatches[i].route.id;
	                    }))) {
	                      _context10.n = 8;
	                      break;
	                    }
	                    return _context10.a(2, {
	                      v: {
	                        type: "success",
	                        matches: null
	                      }
	                    });
	                  case 8:
	                    partialMatches = newPartialMatches;
	                  case 9:
	                    return _context10.a(2);
	                }
	              }, _loop, null, [[1, 3, 4, 5]]);
	            });
	          case 2:
	            return _context11.d(_regeneratorValues(_loop()), 3);
	          case 3:
	            _ret = _context11.v;
	            if (!_ret) {
	              _context11.n = 4;
	              break;
	            }
	            return _context11.a(2, _ret.v);
	          case 4:
	            _context11.n = 2;
	            break;
	          case 5:
	            return _context11.a(2);
	        }
	      }, _callee10);
	    }));
	    return _discoverRoutes.apply(this, arguments);
	  }
	  function _internalSetRoutes(newRoutes) {
	    manifest = {};
	    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties2, void 0, manifest);
	  }
	  function patchRoutes(routeId, children) {
	    var unstable_allowElementMutations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    var isNonHMR = inFlightDataRoutes == null;
	    var routesToUse = inFlightDataRoutes || dataRoutes;
	    patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2, unstable_allowElementMutations);
	    if (isNonHMR) {
	      dataRoutes = _toConsumableArray(dataRoutes);
	      updateState({});
	    }
	  }
	  router = {
	    get basename() {
	      return basename;
	    },
	    get future() {
	      return future;
	    },
	    get state() {
	      return state;
	    },
	    get routes() {
	      return dataRoutes;
	    },
	    get window() {
	      return routerWindow;
	    },
	    initialize: initialize,
	    subscribe: subscribe,
	    enableScrollRestoration: enableScrollRestoration,
	    navigate: navigate,
	    fetch: fetch2,
	    revalidate: revalidate,
	    // Passthrough to history-aware createHref used by useHref so we get proper
	    // hash-aware URLs in DOM paths
	    createHref: function createHref(to) {
	      return init.history.createHref(to);
	    },
	    encodeLocation: function encodeLocation(to) {
	      return init.history.encodeLocation(to);
	    },
	    getFetcher: getFetcher,
	    deleteFetcher: queueFetcherForDeletion,
	    dispose: dispose,
	    getBlocker: getBlocker,
	    deleteBlocker: deleteBlocker,
	    patchRoutes: patchRoutes,
	    _internalFetchControllers: fetchControllers,
	    // TODO: Remove setRoutes, it's temporary to avoid dealing with
	    // updating the tree while validating the update algorithm.
	    _internalSetRoutes: _internalSetRoutes,
	    _internalSetStateDoNotUseOrYouWillBreakYourApp: function _internalSetStateDoNotUseOrYouWillBreakYourApp(newState) {
	      updateState(newState);
	    }
	  };
	  return router;
	}
	function createStaticHandler(routes, opts) {
	  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
	  var manifest = {};
	  var basename = (opts ? opts.basename : null) || "/";
	  var mapRouteProperties2 = (opts === null || opts === void 0 ? void 0 : opts.mapRouteProperties) || defaultMapRouteProperties;
	  var dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties2, void 0, manifest);
	  function query(_x61) {
	    return _query.apply(this, arguments);
	  }
	  function _query() {
	    _query = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(request) {
	      var _ref11,
	        requestContext,
	        filterMatchesToLoad,
	        skipLoaderErrorBubbling,
	        skipRevalidation,
	        dataStrategy,
	        generateMiddlewareResponse,
	        url,
	        method,
	        location,
	        matches,
	        error,
	        _getShortCircuitMatch5,
	        methodNotAllowedMatches,
	        route,
	        staticContext,
	        _error5,
	        _getShortCircuitMatch6,
	        notFoundMatches,
	        _route6,
	        _staticContext,
	        renderedStaticContext,
	        response,
	        result,
	        _args15 = arguments,
	        _t1;
	      return _regenerator().w(function (_context15) {
	        while (1) switch (_context15.p = _context15.n) {
	          case 0:
	            _ref11 = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {}, requestContext = _ref11.requestContext, filterMatchesToLoad = _ref11.filterMatchesToLoad, skipLoaderErrorBubbling = _ref11.skipLoaderErrorBubbling, skipRevalidation = _ref11.skipRevalidation, dataStrategy = _ref11.dataStrategy, generateMiddlewareResponse = _ref11.generateMiddlewareResponse;
	            url = new URL(request.url);
	            method = request.method;
	            location = createLocation("", createPath(url), null, "default");
	            matches = matchRoutes(dataRoutes, location, basename);
	            requestContext = requestContext != null ? requestContext : new RouterContextProvider();
	            if (!(!isValidMethod(method) && method !== "HEAD")) {
	              _context15.n = 1;
	              break;
	            }
	            error = getInternalRouterError(405, {
	              method: method
	            });
	            _getShortCircuitMatch5 = getShortCircuitMatches(dataRoutes), methodNotAllowedMatches = _getShortCircuitMatch5.matches, route = _getShortCircuitMatch5.route;
	            staticContext = {
	              basename: basename,
	              location: location,
	              matches: methodNotAllowedMatches,
	              loaderData: {},
	              actionData: null,
	              errors: _defineProperty({}, route.id, error),
	              statusCode: error.status,
	              loaderHeaders: {},
	              actionHeaders: {}
	            };
	            return _context15.a(2, generateMiddlewareResponse ? generateMiddlewareResponse(function () {
	              return Promise.resolve(staticContext);
	            }) : staticContext);
	          case 1:
	            if (matches) {
	              _context15.n = 2;
	              break;
	            }
	            _error5 = getInternalRouterError(404, {
	              pathname: location.pathname
	            });
	            _getShortCircuitMatch6 = getShortCircuitMatches(dataRoutes), notFoundMatches = _getShortCircuitMatch6.matches, _route6 = _getShortCircuitMatch6.route;
	            _staticContext = {
	              basename: basename,
	              location: location,
	              matches: notFoundMatches,
	              loaderData: {},
	              actionData: null,
	              errors: _defineProperty({}, _route6.id, _error5),
	              statusCode: _error5.status,
	              loaderHeaders: {},
	              actionHeaders: {}
	            };
	            return _context15.a(2, generateMiddlewareResponse ? generateMiddlewareResponse(function () {
	              return Promise.resolve(_staticContext);
	            }) : _staticContext);
	          case 2:
	            if (!generateMiddlewareResponse) {
	              _context15.n = 8;
	              break;
	            }
	            invariant(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
	            _context15.p = 3;
	            _context15.n = 4;
	            return loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2);
	          case 4:
	            _context15.n = 5;
	            return runServerMiddlewarePipeline({
	              request: request,
	              matches: matches,
	              params: matches[0].params,
	              // If we're calling middleware then it must be enabled so we can cast
	              // this to the proper type knowing it's not an `AppLoadContext`
	              context: requestContext
	            }, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
	              var res;
	              return _regenerator().w(function (_context13) {
	                while (1) switch (_context13.n) {
	                  case 0:
	                    _context13.n = 1;
	                    return generateMiddlewareResponse(/*#__PURE__*/function () {
	                      var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(revalidationRequest) {
	                        var _opts2$filterMatchesT;
	                        var opts2,
	                          result2,
	                          _args12 = arguments;
	                        return _regenerator().w(function (_context12) {
	                          while (1) switch (_context12.n) {
	                            case 0:
	                              opts2 = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
	                              _context12.n = 1;
	                              return queryImpl(revalidationRequest, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, "filterMatchesToLoad" in opts2 ? (_opts2$filterMatchesT = opts2.filterMatchesToLoad) !== null && _opts2$filterMatchesT !== void 0 ? _opts2$filterMatchesT : null : filterMatchesToLoad !== null && filterMatchesToLoad !== void 0 ? filterMatchesToLoad : null, skipRevalidation === true);
	                            case 1:
	                              result2 = _context12.v;
	                              if (!isResponse(result2)) {
	                                _context12.n = 2;
	                                break;
	                              }
	                              return _context12.a(2, result2);
	                            case 2:
	                              renderedStaticContext = _objectSpread2({
	                                location: location,
	                                basename: basename
	                              }, result2);
	                              return _context12.a(2, renderedStaticContext);
	                          }
	                        }, _callee11);
	                      }));
	                      return function (_x94) {
	                        return _ref13.apply(this, arguments);
	                      };
	                    }());
	                  case 1:
	                    res = _context13.v;
	                    return _context13.a(2, res);
	                }
	              }, _callee12);
	            })), /*#__PURE__*/function () {
	              var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(error, routeId) {
	                var _staticContext2, _matches$find, boundaryRouteId, _staticContext3, _t6, _t7, _t8, _t9, _t0;
	                return _regenerator().w(function (_context14) {
	                  while (1) switch (_context14.p = _context14.n) {
	                    case 0:
	                      if (!isRedirectResponse(error)) {
	                        _context14.n = 1;
	                        break;
	                      }
	                      return _context14.a(2, error);
	                    case 1:
	                      if (!isResponse(error)) {
	                        _context14.n = 5;
	                        break;
	                      }
	                      _context14.p = 2;
	                      _t6 = ErrorResponseImpl;
	                      _t7 = error.status;
	                      _t8 = error.statusText;
	                      _context14.n = 3;
	                      return parseResponseBody(error);
	                    case 3:
	                      _t9 = _context14.v;
	                      error = new _t6(_t7, _t8, _t9);
	                      _context14.n = 5;
	                      break;
	                    case 4:
	                      _context14.p = 4;
	                      _t0 = _context14.v;
	                      error = _t0;
	                    case 5:
	                      if (isDataWithResponseInit(error)) {
	                        error = dataWithResponseInitToErrorResponse(error);
	                      }
	                      if (!renderedStaticContext) {
	                        _context14.n = 6;
	                        break;
	                      }
	                      if (routeId in renderedStaticContext.loaderData) {
	                        renderedStaticContext.loaderData[routeId] = void 0;
	                      }
	                      _staticContext2 = getStaticContextFromError(dataRoutes, renderedStaticContext, error, skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, routeId).route.id);
	                      return _context14.a(2, generateMiddlewareResponse(function () {
	                        return Promise.resolve(_staticContext2);
	                      }));
	                    case 6:
	                      boundaryRouteId = skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, ((_matches$find = matches.find(function (m) {
	                        return m.route.id === routeId || m.route.loader;
	                      })) === null || _matches$find === void 0 ? void 0 : _matches$find.route.id) || routeId).route.id;
	                      _staticContext3 = {
	                        matches: matches,
	                        location: location,
	                        basename: basename,
	                        loaderData: {},
	                        actionData: null,
	                        errors: _defineProperty({}, boundaryRouteId, error),
	                        statusCode: isRouteErrorResponse(error) ? error.status : 500,
	                        actionHeaders: {},
	                        loaderHeaders: {}
	                      };
	                      return _context14.a(2, generateMiddlewareResponse(function () {
	                        return Promise.resolve(_staticContext3);
	                      }));
	                    case 7:
	                      return _context14.a(2);
	                  }
	                }, _callee13, null, [[2, 4]]);
	              }));
	              return function (_x95, _x96) {
	                return _ref14.apply(this, arguments);
	              };
	            }());
	          case 5:
	            response = _context15.v;
	            invariant(isResponse(response), "Expected a response in query()");
	            return _context15.a(2, response);
	          case 6:
	            _context15.p = 6;
	            _t1 = _context15.v;
	            if (!isResponse(_t1)) {
	              _context15.n = 7;
	              break;
	            }
	            return _context15.a(2, _t1);
	          case 7:
	            throw _t1;
	          case 8:
	            _context15.n = 9;
	            return queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
	          case 9:
	            result = _context15.v;
	            if (!isResponse(result)) {
	              _context15.n = 10;
	              break;
	            }
	            return _context15.a(2, result);
	          case 10:
	            return _context15.a(2, _objectSpread2({
	              location: location,
	              basename: basename
	            }, result));
	        }
	      }, _callee14, null, [[3, 6]]);
	    }));
	    return _query.apply(this, arguments);
	  }
	  function queryRoute(_x62) {
	    return _queryRoute.apply(this, arguments);
	  }
	  function _queryRoute() {
	    _queryRoute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(request) {
	      var _ref15,
	        routeId,
	        requestContext,
	        dataStrategy,
	        generateMiddlewareResponse,
	        url,
	        method,
	        location,
	        matches,
	        match,
	        response,
	        result,
	        handleQueryResult,
	        _args18 = arguments;
	      return _regenerator().w(function (_context18) {
	        while (1) switch (_context18.n) {
	          case 0:
	            handleQueryResult = function _handleQueryResult(result2) {
	              if (isResponse(result2)) {
	                return result2;
	              }
	              var error = result2.errors ? Object.values(result2.errors)[0] : void 0;
	              if (error !== void 0) {
	                throw error;
	              }
	              if (result2.actionData) {
	                return Object.values(result2.actionData)[0];
	              }
	              if (result2.loaderData) {
	                return Object.values(result2.loaderData)[0];
	              }
	              return void 0;
	            };
	            _ref15 = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : {}, routeId = _ref15.routeId, requestContext = _ref15.requestContext, dataStrategy = _ref15.dataStrategy, generateMiddlewareResponse = _ref15.generateMiddlewareResponse;
	            url = new URL(request.url);
	            method = request.method;
	            location = createLocation("", createPath(url), null, "default");
	            matches = matchRoutes(dataRoutes, location, basename);
	            requestContext = requestContext != null ? requestContext : new RouterContextProvider();
	            if (!(!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS")) {
	              _context18.n = 1;
	              break;
	            }
	            throw getInternalRouterError(405, {
	              method: method
	            });
	          case 1:
	            if (matches) {
	              _context18.n = 2;
	              break;
	            }
	            throw getInternalRouterError(404, {
	              pathname: location.pathname
	            });
	          case 2:
	            match = routeId ? matches.find(function (m) {
	              return m.route.id === routeId;
	            }) : getTargetMatch(matches, location);
	            if (!(routeId && !match)) {
	              _context18.n = 3;
	              break;
	            }
	            throw getInternalRouterError(403, {
	              pathname: location.pathname,
	              routeId: routeId
	            });
	          case 3:
	            if (match) {
	              _context18.n = 4;
	              break;
	            }
	            throw getInternalRouterError(404, {
	              pathname: location.pathname
	            });
	          case 4:
	            if (!generateMiddlewareResponse) {
	              _context18.n = 7;
	              break;
	            }
	            invariant(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
	            _context18.n = 5;
	            return loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2);
	          case 5:
	            _context18.n = 6;
	            return runServerMiddlewarePipeline({
	              request: request,
	              matches: matches,
	              params: matches[0].params,
	              // If we're calling middleware then it must be enabled so we can cast
	              // this to the proper type knowing it's not an `AppLoadContext`
	              context: requestContext
	            }, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
	              var res;
	              return _regenerator().w(function (_context17) {
	                while (1) switch (_context17.n) {
	                  case 0:
	                    _context17.n = 1;
	                    return generateMiddlewareResponse(/*#__PURE__*/function () {
	                      var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(innerRequest) {
	                        var result2, processed;
	                        return _regenerator().w(function (_context16) {
	                          while (1) switch (_context16.n) {
	                            case 0:
	                              _context16.n = 1;
	                              return queryImpl(innerRequest, location, matches, requestContext, dataStrategy || null, false, match, null, false);
	                            case 1:
	                              result2 = _context16.v;
	                              processed = handleQueryResult(result2);
	                              return _context16.a(2, isResponse(processed) ? processed : typeof processed === "string" ? new Response(processed) : Response.json(processed));
	                          }
	                        }, _callee15);
	                      }));
	                      return function (_x97) {
	                        return _ref17.apply(this, arguments);
	                      };
	                    }());
	                  case 1:
	                    res = _context17.v;
	                    return _context17.a(2, res);
	                }
	              }, _callee16);
	            })), function (error) {
	              if (isDataWithResponseInit(error)) {
	                return Promise.resolve(dataWithResponseInitToResponse(error));
	              }
	              if (isResponse(error)) {
	                return Promise.resolve(error);
	              }
	              throw error;
	            });
	          case 6:
	            response = _context18.v;
	            return _context18.a(2, response);
	          case 7:
	            _context18.n = 8;
	            return queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match, null, false);
	          case 8:
	            result = _context18.v;
	            return _context18.a(2, handleQueryResult(result));
	        }
	      }, _callee17);
	    }));
	    return _queryRoute.apply(this, arguments);
	  }
	  function queryImpl(_x63, _x64, _x65, _x66, _x67, _x68, _x69, _x70, _x71) {
	    return _queryImpl.apply(this, arguments);
	  }
	  function _queryImpl() {
	    _queryImpl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, skipRevalidation) {
	      var result2, result, _t10;
	      return _regenerator().w(function (_context19) {
	        while (1) switch (_context19.p = _context19.n) {
	          case 0:
	            invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
	            _context19.p = 1;
	            if (!isMutationMethod(request.method)) {
	              _context19.n = 3;
	              break;
	            }
	            _context19.n = 2;
	            return submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null, filterMatchesToLoad, skipRevalidation);
	          case 2:
	            result2 = _context19.v;
	            return _context19.a(2, result2);
	          case 3:
	            _context19.n = 4;
	            return loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad);
	          case 4:
	            result = _context19.v;
	            return _context19.a(2, isResponse(result) ? result : _objectSpread2(_objectSpread2({}, result), {}, {
	              actionData: null,
	              actionHeaders: {}
	            }));
	          case 5:
	            _context19.p = 5;
	            _t10 = _context19.v;
	            if (!(isDataStrategyResult(_t10) && isResponse(_t10.result))) {
	              _context19.n = 7;
	              break;
	            }
	            if (!(_t10.type === "error" /* error */)) {
	              _context19.n = 6;
	              break;
	            }
	            throw _t10.result;
	          case 6:
	            return _context19.a(2, _t10.result);
	          case 7:
	            if (!isRedirectResponse(_t10)) {
	              _context19.n = 8;
	              break;
	            }
	            return _context19.a(2, _t10);
	          case 8:
	            throw _t10;
	          case 9:
	            return _context19.a(2);
	        }
	      }, _callee18, null, [[1, 5]]);
	    }));
	    return _queryImpl.apply(this, arguments);
	  }
	  function submit(_x72, _x73, _x74, _x75, _x76, _x77, _x78, _x79, _x80) {
	    return _submit.apply(this, arguments);
	  }
	  function _submit() {
	    _submit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest, filterMatchesToLoad, skipRevalidation) {
	      var result, error, dsMatches, results, boundaryMatch, loaderRequest, _boundaryMatch, handlerContext2, handlerContext;
	      return _regenerator().w(function (_context20) {
	        while (1) switch (_context20.n) {
	          case 0:
	            if (!(!actionMatch.route.action && !actionMatch.route.lazy)) {
	              _context20.n = 2;
	              break;
	            }
	            error = getInternalRouterError(405, {
	              method: request.method,
	              pathname: new URL(request.url).pathname,
	              routeId: actionMatch.route.id
	            });
	            if (!isRouteRequest) {
	              _context20.n = 1;
	              break;
	            }
	            throw error;
	          case 1:
	            result = {
	              type: "error" /* error */,
	              error: error
	            };
	            _context20.n = 4;
	            break;
	          case 2:
	            dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, actionMatch, [], requestContext);
	            _context20.n = 3;
	            return callDataStrategy(request, dsMatches, isRouteRequest, requestContext, dataStrategy);
	          case 3:
	            results = _context20.v;
	            result = results[actionMatch.route.id];
	            if (request.signal.aborted) {
	              throwStaticHandlerAbortedError(request, isRouteRequest);
	            }
	          case 4:
	            if (!isRedirectResult(result)) {
	              _context20.n = 5;
	              break;
	            }
	            throw new Response(null, {
	              status: result.response.status,
	              headers: {
	                Location: result.response.headers.get("Location")
	              }
	            });
	          case 5:
	            if (!isRouteRequest) {
	              _context20.n = 7;
	              break;
	            }
	            if (!isErrorResult(result)) {
	              _context20.n = 6;
	              break;
	            }
	            throw result.error;
	          case 6:
	            return _context20.a(2, {
	              matches: [actionMatch],
	              loaderData: {},
	              actionData: _defineProperty({}, actionMatch.route.id, result.data),
	              errors: null,
	              // Note: statusCode + headers are unused here since queryRoute will
	              // return the raw Response or value
	              statusCode: 200,
	              loaderHeaders: {},
	              actionHeaders: {}
	            });
	          case 7:
	            if (!skipRevalidation) {
	              _context20.n = 9;
	              break;
	            }
	            if (!isErrorResult(result)) {
	              _context20.n = 8;
	              break;
	            }
	            boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
	            return _context20.a(2, {
	              statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
	              actionData: null,
	              actionHeaders: _objectSpread2({}, result.headers ? _defineProperty({}, actionMatch.route.id, result.headers) : {}),
	              matches: matches,
	              loaderData: {},
	              errors: _defineProperty({}, boundaryMatch.route.id, result.error),
	              loaderHeaders: {}
	            });
	          case 8:
	            return _context20.a(2, {
	              actionData: _defineProperty({}, actionMatch.route.id, result.data),
	              actionHeaders: result.headers ? _defineProperty({}, actionMatch.route.id, result.headers) : {},
	              matches: matches,
	              loaderData: {},
	              errors: null,
	              statusCode: result.statusCode || 200,
	              loaderHeaders: {}
	            });
	          case 9:
	            loaderRequest = new Request(request.url, {
	              headers: request.headers,
	              redirect: request.redirect,
	              signal: request.signal
	            });
	            if (!isErrorResult(result)) {
	              _context20.n = 11;
	              break;
	            }
	            _boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
	            _context20.n = 10;
	            return loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad, [_boundaryMatch.route.id, result]);
	          case 10:
	            handlerContext2 = _context20.v;
	            return _context20.a(2, _objectSpread2(_objectSpread2({}, handlerContext2), {}, {
	              statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
	              actionData: null,
	              actionHeaders: _objectSpread2({}, result.headers ? _defineProperty({}, actionMatch.route.id, result.headers) : {})
	            }));
	          case 11:
	            _context20.n = 12;
	            return loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad);
	          case 12:
	            handlerContext = _context20.v;
	            return _context20.a(2, _objectSpread2(_objectSpread2(_objectSpread2({}, handlerContext), {}, {
	              actionData: _defineProperty({}, actionMatch.route.id, result.data)
	            }, result.statusCode ? {
	              statusCode: result.statusCode
	            } : {}), {}, {
	              actionHeaders: result.headers ? _defineProperty({}, actionMatch.route.id, result.headers) : {}
	            }));
	        }
	      }, _callee19);
	    }));
	    return _submit.apply(this, arguments);
	  }
	  function loadRouteData(_x81, _x82, _x83, _x84, _x85, _x86, _x87, _x88) {
	    return _loadRouteData.apply(this, arguments);
	  }
	  function _loadRouteData() {
	    _loadRouteData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, pendingActionResult) {
	      var isRouteRequest, dsMatches, maxIdx, results, handlerContext;
	      return _regenerator().w(function (_context21) {
	        while (1) switch (_context21.n) {
	          case 0:
	            isRouteRequest = routeMatch != null;
	            if (!(isRouteRequest && !(routeMatch !== null && routeMatch !== void 0 && routeMatch.route.loader) && !(routeMatch !== null && routeMatch !== void 0 && routeMatch.route.lazy))) {
	              _context21.n = 1;
	              break;
	            }
	            throw getInternalRouterError(400, {
	              method: request.method,
	              pathname: new URL(request.url).pathname,
	              routeId: routeMatch === null || routeMatch === void 0 ? void 0 : routeMatch.route.id
	            });
	          case 1:
	            if (routeMatch) {
	              dsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, routeMatch, [], requestContext);
	            } else {
	              maxIdx = pendingActionResult && isErrorResult(pendingActionResult[1]) ?
	              // Up to but not including the boundary
	              matches.findIndex(function (m) {
	                return m.route.id === pendingActionResult[0];
	              }) - 1 : void 0;
	              dsMatches = matches.map(function (match, index) {
	                if (maxIdx != null && index > maxIdx) {
	                  return getDataStrategyMatch(mapRouteProperties2, manifest, request, match, [], requestContext, false);
	                }
	                return getDataStrategyMatch(mapRouteProperties2, manifest, request, match, [], requestContext, (match.route.loader || match.route.lazy) != null && (!filterMatchesToLoad || filterMatchesToLoad(match)));
	              });
	            }
	            if (!(!dataStrategy && !dsMatches.some(function (m) {
	              return m.shouldLoad;
	            }))) {
	              _context21.n = 2;
	              break;
	            }
	            return _context21.a(2, {
	              matches: matches,
	              loaderData: {},
	              errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? _defineProperty({}, pendingActionResult[0], pendingActionResult[1].error) : null,
	              statusCode: 200,
	              loaderHeaders: {}
	            });
	          case 2:
	            _context21.n = 3;
	            return callDataStrategy(request, dsMatches, isRouteRequest, requestContext, dataStrategy);
	          case 3:
	            results = _context21.v;
	            if (request.signal.aborted) {
	              throwStaticHandlerAbortedError(request, isRouteRequest);
	            }
	            handlerContext = processRouteLoaderData(matches, results, pendingActionResult, true, skipLoaderErrorBubbling);
	            return _context21.a(2, _objectSpread2(_objectSpread2({}, handlerContext), {}, {
	              matches: matches
	            }));
	        }
	      }, _callee20);
	    }));
	    return _loadRouteData.apply(this, arguments);
	  }
	  function callDataStrategy(_x89, _x90, _x91, _x92, _x93) {
	    return _callDataStrategy2.apply(this, arguments);
	  }
	  function _callDataStrategy2() {
	    _callDataStrategy2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(request, matches, isRouteRequest, requestContext, dataStrategy) {
	      var results, dataResults;
	      return _regenerator().w(function (_context23) {
	        while (1) switch (_context23.n) {
	          case 0:
	            _context23.n = 1;
	            return callDataStrategyImpl(dataStrategy || defaultDataStrategy, request, matches, null, requestContext, true);
	          case 1:
	            results = _context23.v;
	            dataResults = {};
	            _context23.n = 2;
	            return Promise.all(matches.map(/*#__PURE__*/function () {
	              var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(match) {
	                var result, response;
	                return _regenerator().w(function (_context22) {
	                  while (1) switch (_context22.n) {
	                    case 0:
	                      if (match.route.id in results) {
	                        _context22.n = 1;
	                        break;
	                      }
	                      return _context22.a(2);
	                    case 1:
	                      result = results[match.route.id];
	                      if (!isRedirectDataStrategyResult(result)) {
	                        _context22.n = 2;
	                        break;
	                      }
	                      response = result.result;
	                      throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename);
	                    case 2:
	                      if (!isRouteRequest) {
	                        _context22.n = 4;
	                        break;
	                      }
	                      if (!isResponse(result.result)) {
	                        _context22.n = 3;
	                        break;
	                      }
	                      throw result;
	                    case 3:
	                      if (!isDataWithResponseInit(result.result)) {
	                        _context22.n = 4;
	                        break;
	                      }
	                      throw dataWithResponseInitToResponse(result.result);
	                    case 4:
	                      _context22.n = 5;
	                      return convertDataStrategyResultToDataResult(result);
	                    case 5:
	                      dataResults[match.route.id] = _context22.v;
	                    case 6:
	                      return _context22.a(2);
	                  }
	                }, _callee21);
	              }));
	              return function (_x98) {
	                return _ref23.apply(this, arguments);
	              };
	            }()));
	          case 2:
	            return _context23.a(2, dataResults);
	        }
	      }, _callee22);
	    }));
	    return _callDataStrategy2.apply(this, arguments);
	  }
	  return {
	    dataRoutes: dataRoutes,
	    query: query,
	    queryRoute: queryRoute
	  };
	}
	function getStaticContextFromError(routes, handlerContext, error, boundaryId) {
	  var errorBoundaryId = boundaryId || handlerContext._deepestRenderedBoundaryId || routes[0].id;
	  return _objectSpread2(_objectSpread2({}, handlerContext), {}, {
	    statusCode: isRouteErrorResponse(error) ? error.status : 500,
	    errors: _defineProperty({}, errorBoundaryId, error)
	  });
	}
	function throwStaticHandlerAbortedError(request, isRouteRequest) {
	  if (request.signal.reason !== void 0) {
	    throw request.signal.reason;
	  }
	  var method = isRouteRequest ? "queryRoute" : "query";
	  throw new Error("".concat(method, "() call aborted without an `AbortSignal.reason`: ").concat(request.method, " ").concat(request.url));
	}
	function isSubmissionNavigation(opts) {
	  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
	}
	function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
	  var contextualMatches;
	  var activeRouteMatch;
	  if (fromRouteId) {
	    contextualMatches = [];
	    var _iterator7 = _createForOfIteratorHelper(matches),
	      _step7;
	    try {
	      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
	        var match = _step7.value;
	        contextualMatches.push(match);
	        if (match.route.id === fromRouteId) {
	          activeRouteMatch = match;
	          break;
	        }
	      }
	    } catch (err) {
	      _iterator7.e(err);
	    } finally {
	      _iterator7.f();
	    }
	  } else {
	    contextualMatches = matches;
	    activeRouteMatch = matches[matches.length - 1];
	  }
	  var path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
	  if (to == null) {
	    path.search = location.search;
	    path.hash = location.hash;
	  }
	  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
	    var nakedIndex = hasNakedIndexQuery(path.search);
	    if (activeRouteMatch.route.index && !nakedIndex) {
	      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
	    } else if (!activeRouteMatch.route.index && nakedIndex) {
	      var params = new URLSearchParams(path.search);
	      var indexValues = params.getAll("index");
	      params["delete"]("index");
	      indexValues.filter(function (v) {
	        return v;
	      }).forEach(function (v) {
	        return params.append("index", v);
	      });
	      var qs = params.toString();
	      path.search = qs ? "?".concat(qs) : "";
	    }
	  }
	  if (basename !== "/") {
	    path.pathname = prependBasename({
	      basename: basename,
	      pathname: path.pathname
	    });
	  }
	  return createPath(path);
	}
	function normalizeNavigateOptions(isFetcher, path, opts) {
	  if (!opts || !isSubmissionNavigation(opts)) {
	    return {
	      path: path
	    };
	  }
	  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
	    return {
	      path: path,
	      error: getInternalRouterError(405, {
	        method: opts.formMethod
	      })
	    };
	  }
	  var getInvalidBodyError = function getInvalidBodyError() {
	    return {
	      path: path,
	      error: getInternalRouterError(400, {
	        type: "invalid-body"
	      })
	    };
	  };
	  var rawFormMethod = opts.formMethod || "get";
	  var formMethod = rawFormMethod.toUpperCase();
	  var formAction = stripHashFromPath(path);
	  if (opts.body !== void 0) {
	    if (opts.formEncType === "text/plain") {
	      if (!isMutationMethod(formMethod)) {
	        return getInvalidBodyError();
	      }
	      var text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
	      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
	      Array.from(opts.body.entries()).reduce(function (acc, _ref24) {
	        var _ref25 = _slicedToArray(_ref24, 2),
	          name = _ref25[0],
	          value = _ref25[1];
	        return "".concat(acc).concat(name, "=").concat(value, "\n");
	      }, "") : String(opts.body);
	      return {
	        path: path,
	        submission: {
	          formMethod: formMethod,
	          formAction: formAction,
	          formEncType: opts.formEncType,
	          formData: void 0,
	          json: void 0,
	          text: text
	        }
	      };
	    } else if (opts.formEncType === "application/json") {
	      if (!isMutationMethod(formMethod)) {
	        return getInvalidBodyError();
	      }
	      try {
	        var json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
	        return {
	          path: path,
	          submission: {
	            formMethod: formMethod,
	            formAction: formAction,
	            formEncType: opts.formEncType,
	            formData: void 0,
	            json: json,
	            text: void 0
	          }
	        };
	      } catch (e) {
	        return getInvalidBodyError();
	      }
	    }
	  }
	  invariant(typeof FormData === "function", "FormData is not available in this environment");
	  var searchParams;
	  var formData;
	  if (opts.formData) {
	    searchParams = convertFormDataToSearchParams(opts.formData);
	    formData = opts.formData;
	  } else if (opts.body instanceof FormData) {
	    searchParams = convertFormDataToSearchParams(opts.body);
	    formData = opts.body;
	  } else if (opts.body instanceof URLSearchParams) {
	    searchParams = opts.body;
	    formData = convertSearchParamsToFormData(searchParams);
	  } else if (opts.body == null) {
	    searchParams = new URLSearchParams();
	    formData = new FormData();
	  } else {
	    try {
	      searchParams = new URLSearchParams(opts.body);
	      formData = convertSearchParamsToFormData(searchParams);
	    } catch (e) {
	      return getInvalidBodyError();
	    }
	  }
	  var submission = {
	    formMethod: formMethod,
	    formAction: formAction,
	    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
	    formData: formData,
	    json: void 0,
	    text: void 0
	  };
	  if (isMutationMethod(submission.formMethod)) {
	    return {
	      path: path,
	      submission: submission
	    };
	  }
	  var parsedPath = parsePath(path);
	  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
	    searchParams.append("index", "");
	  }
	  parsedPath.search = "?".concat(searchParams);
	  return {
	    path: createPath(parsedPath),
	    submission: submission
	  };
	}
	function getMatchesToLoad(request, scopedContext, mapRouteProperties2, manifest, history, state, matches, submission, location, lazyRoutePropertiesToSkip, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, hasPatchRoutesOnNavigation, pendingActionResult) {
	  var _state$matches$;
	  var actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
	  var currentUrl = history.createURL(state.location);
	  var nextUrl = history.createURL(location);
	  var maxIdx;
	  if (initialHydration && state.errors) {
	    var boundaryId = Object.keys(state.errors)[0];
	    maxIdx = matches.findIndex(function (m) {
	      return m.route.id === boundaryId;
	    });
	  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
	    var _boundaryId = pendingActionResult[0];
	    maxIdx = matches.findIndex(function (m) {
	      return m.route.id === _boundaryId;
	    }) - 1;
	  }
	  var actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
	  var shouldSkipRevalidation = actionStatus && actionStatus >= 400;
	  var baseShouldRevalidateArgs = _objectSpread2(_objectSpread2({
	    currentUrl: currentUrl,
	    currentParams: ((_state$matches$ = state.matches[0]) === null || _state$matches$ === void 0 ? void 0 : _state$matches$.params) || {},
	    nextUrl: nextUrl,
	    nextParams: matches[0].params
	  }, submission), {}, {
	    actionResult: actionResult,
	    actionStatus: actionStatus
	  });
	  var dsMatches = matches.map(function (match, index) {
	    var route = match.route;
	    var forceShouldLoad = null;
	    if (maxIdx != null && index > maxIdx) {
	      forceShouldLoad = false;
	    } else if (route.lazy) {
	      forceShouldLoad = true;
	    } else if (route.loader == null) {
	      forceShouldLoad = false;
	    } else if (initialHydration) {
	      forceShouldLoad = shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
	    } else if (isNewLoader(state.loaderData, state.matches[index], match)) {
	      forceShouldLoad = true;
	    }
	    if (forceShouldLoad !== null) {
	      return getDataStrategyMatch(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, forceShouldLoad);
	    }
	    var defaultShouldRevalidate = shouldSkipRevalidation ? false :
	    // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
	    isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
	    // Search params affect all loaders
	    currentUrl.search !== nextUrl.search || isNewRouteInstance(state.matches[index], match);
	    var shouldRevalidateArgs = _objectSpread2(_objectSpread2({}, baseShouldRevalidateArgs), {}, {
	      defaultShouldRevalidate: defaultShouldRevalidate
	    });
	    var shouldLoad = shouldRevalidateLoader(match, shouldRevalidateArgs);
	    return getDataStrategyMatch(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, shouldRevalidateArgs);
	  });
	  var revalidatingFetchers = [];
	  fetchLoadMatches.forEach(function (f, key) {
	    if (initialHydration || !matches.some(function (m) {
	      return m.route.id === f.routeId;
	    }) || fetchersQueuedForDeletion.has(key)) {
	      return;
	    }
	    var fetcher = state.fetchers.get(key);
	    var isMidInitialLoad = fetcher && fetcher.state !== "idle" && fetcher.data === void 0;
	    var fetcherMatches = matchRoutes(routesToUse, f.path, basename);
	    if (!fetcherMatches) {
	      if (hasPatchRoutesOnNavigation && isMidInitialLoad) {
	        return;
	      }
	      revalidatingFetchers.push({
	        key: key,
	        routeId: f.routeId,
	        path: f.path,
	        matches: null,
	        match: null,
	        request: null,
	        controller: null
	      });
	      return;
	    }
	    if (fetchRedirectIds.has(key)) {
	      return;
	    }
	    var fetcherMatch = getTargetMatch(fetcherMatches, f.path);
	    var fetchController = new AbortController();
	    var fetchRequest = createClientSideRequest(history, f.path, fetchController.signal);
	    var fetcherDsMatches = null;
	    if (cancelledFetcherLoads.has(key)) {
	      cancelledFetcherLoads["delete"](key);
	      fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
	    } else if (isMidInitialLoad) {
	      if (isRevalidationRequired) {
	        fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
	      }
	    } else {
	      var shouldRevalidateArgs = _objectSpread2(_objectSpread2({}, baseShouldRevalidateArgs), {}, {
	        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
	      });
	      if (shouldRevalidateLoader(fetcherMatch, shouldRevalidateArgs)) {
	        fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties2, manifest, fetchRequest, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs);
	      }
	    }
	    if (fetcherDsMatches) {
	      revalidatingFetchers.push({
	        key: key,
	        routeId: f.routeId,
	        path: f.path,
	        matches: fetcherDsMatches,
	        match: fetcherMatch,
	        request: fetchRequest,
	        controller: fetchController
	      });
	    }
	  });
	  return {
	    dsMatches: dsMatches,
	    revalidatingFetchers: revalidatingFetchers
	  };
	}
	function shouldLoadRouteOnHydration(route, loaderData, errors) {
	  if (route.lazy) {
	    return true;
	  }
	  if (!route.loader) {
	    return false;
	  }
	  var hasData = loaderData != null && route.id in loaderData;
	  var hasError = errors != null && errors[route.id] !== void 0;
	  if (!hasData && hasError) {
	    return false;
	  }
	  if (typeof route.loader === "function" && route.loader.hydrate === true) {
	    return true;
	  }
	  return !hasData && !hasError;
	}
	function isNewLoader(currentLoaderData, currentMatch, match) {
	  var isNew =
	  // [a] -> [a, b]
	  !currentMatch ||
	  // [a, b] -> [a, c]
	  match.route.id !== currentMatch.route.id;
	  var isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
	  return isNew || isMissingData;
	}
	function isNewRouteInstance(currentMatch, match) {
	  var currentPath = currentMatch.route.path;
	  return (
	    // param change for this match, /users/123 -> /users/456
	    currentMatch.pathname !== match.pathname ||
	    // splat param changed, which is not present in match.path
	    // e.g. /files/images/avatar.jpg -> files/finances.xls
	    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
	  );
	}
	function shouldRevalidateLoader(loaderMatch, arg) {
	  if (loaderMatch.route.shouldRevalidate) {
	    var routeChoice = loaderMatch.route.shouldRevalidate(arg);
	    if (typeof routeChoice === "boolean") {
	      return routeChoice;
	    }
	  }
	  return arg.defaultShouldRevalidate;
	}
	function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2, allowElementMutations) {
	  var childrenToPatch;
	  if (routeId) {
	    var route = manifest[routeId];
	    invariant(route, "No route found to patch children into: routeId = ".concat(routeId));
	    if (!route.children) {
	      route.children = [];
	    }
	    childrenToPatch = route.children;
	  } else {
	    childrenToPatch = routesToUse;
	  }
	  var uniqueChildren = [];
	  var existingChildren = [];
	  children.forEach(function (newRoute) {
	    var existingRoute = childrenToPatch.find(function (existingRoute2) {
	      return isSameRoute(newRoute, existingRoute2);
	    });
	    if (existingRoute) {
	      existingChildren.push({
	        existingRoute: existingRoute,
	        newRoute: newRoute
	      });
	    } else {
	      uniqueChildren.push(newRoute);
	    }
	  });
	  if (uniqueChildren.length > 0) {
	    var _childrenToPatch, _childrenToPatch2;
	    var newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties2, [routeId || "_", "patch", String(((_childrenToPatch = childrenToPatch) === null || _childrenToPatch === void 0 ? void 0 : _childrenToPatch.length) || "0")], manifest);
	    (_childrenToPatch2 = childrenToPatch).push.apply(_childrenToPatch2, _toConsumableArray(newRoutes));
	  }
	  if (allowElementMutations && existingChildren.length > 0) {
	    for (var i = 0; i < existingChildren.length; i++) {
	      var _existingChildren$i = existingChildren[i],
	        existingRoute = _existingChildren$i.existingRoute,
	        newRoute = _existingChildren$i.newRoute;
	      var existingRouteTyped = existingRoute;
	      var _convertRoutesToDataR = convertRoutesToDataRoutes([newRoute], mapRouteProperties2, [],
	        // Doesn't matter for mutated routes since they already have an id
	        {},
	        // Don't touch the manifest here since we're updating in place
	        true),
	        _convertRoutesToDataR2 = _slicedToArray(_convertRoutesToDataR, 1),
	        newRouteTyped = _convertRoutesToDataR2[0];
	      Object.assign(existingRouteTyped, {
	        element: newRouteTyped.element ? newRouteTyped.element : existingRouteTyped.element,
	        errorElement: newRouteTyped.errorElement ? newRouteTyped.errorElement : existingRouteTyped.errorElement,
	        hydrateFallbackElement: newRouteTyped.hydrateFallbackElement ? newRouteTyped.hydrateFallbackElement : existingRouteTyped.hydrateFallbackElement
	      });
	    }
	  }
	}
	function isSameRoute(newRoute, existingRoute) {
	  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
	    return true;
	  }
	  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
	    return false;
	  }
	  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
	    return true;
	  }
	  return newRoute.children.every(function (aChild, i) {
	    var _existingRoute$childr;
	    return (_existingRoute$childr = existingRoute.children) === null || _existingRoute$childr === void 0 ? void 0 : _existingRoute$childr.some(function (bChild) {
	      return isSameRoute(aChild, bChild);
	    });
	  });
	}
	var lazyRoutePropertyCache = /* @__PURE__ */new WeakMap();
	var loadLazyRouteProperty = function loadLazyRouteProperty(_ref26) {
	  var key = _ref26.key,
	    route = _ref26.route,
	    manifest = _ref26.manifest,
	    mapRouteProperties2 = _ref26.mapRouteProperties;
	  var routeToUpdate = manifest[route.id];
	  invariant(routeToUpdate, "No route found in manifest");
	  if (!routeToUpdate.lazy || typeof routeToUpdate.lazy !== "object") {
	    return;
	  }
	  var lazyFn = routeToUpdate.lazy[key];
	  if (!lazyFn) {
	    return;
	  }
	  var cache = lazyRoutePropertyCache.get(routeToUpdate);
	  if (!cache) {
	    cache = {};
	    lazyRoutePropertyCache.set(routeToUpdate, cache);
	  }
	  var cachedPromise = cache[key];
	  if (cachedPromise) {
	    return cachedPromise;
	  }
	  var propertyPromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
	    var isUnsupported, staticRouteValue, isStaticallyDefined, value;
	    return _regenerator().w(function (_context24) {
	      while (1) switch (_context24.n) {
	        case 0:
	          isUnsupported = isUnsupportedLazyRouteObjectKey(key);
	          staticRouteValue = routeToUpdate[key];
	          isStaticallyDefined = staticRouteValue !== void 0 && key !== "hasErrorBoundary";
	          if (!isUnsupported) {
	            _context24.n = 1;
	            break;
	          }
	          warning(!isUnsupported, "Route property " + key + " is not a supported lazy route property. This property will be ignored.");
	          cache[key] = Promise.resolve();
	          _context24.n = 4;
	          break;
	        case 1:
	          if (!isStaticallyDefined) {
	            _context24.n = 2;
	            break;
	          }
	          warning(false, "Route \"".concat(routeToUpdate.id, "\" has a static property \"").concat(key, "\" defined. The lazy property will be ignored."));
	          _context24.n = 4;
	          break;
	        case 2:
	          _context24.n = 3;
	          return lazyFn();
	        case 3:
	          value = _context24.v;
	          if (value != null) {
	            Object.assign(routeToUpdate, _defineProperty({}, key, value));
	            Object.assign(routeToUpdate, mapRouteProperties2(routeToUpdate));
	          }
	        case 4:
	          if (typeof routeToUpdate.lazy === "object") {
	            routeToUpdate.lazy[key] = void 0;
	            if (Object.values(routeToUpdate.lazy).every(function (value) {
	              return value === void 0;
	            })) {
	              routeToUpdate.lazy = void 0;
	            }
	          }
	        case 5:
	          return _context24.a(2);
	      }
	    }, _callee23);
	  }))();
	  cache[key] = propertyPromise;
	  return propertyPromise;
	};
	var lazyRouteFunctionCache = /* @__PURE__ */new WeakMap();
	function loadLazyRoute(route, type, manifest, mapRouteProperties2, lazyRoutePropertiesToSkip) {
	  var _lazyHandlerPromise;
	  var routeToUpdate = manifest[route.id];
	  invariant(routeToUpdate, "No route found in manifest");
	  if (!route.lazy) {
	    return {
	      lazyRoutePromise: void 0,
	      lazyHandlerPromise: void 0
	    };
	  }
	  if (typeof route.lazy === "function") {
	    var cachedPromise = lazyRouteFunctionCache.get(routeToUpdate);
	    if (cachedPromise) {
	      return {
	        lazyRoutePromise: cachedPromise,
	        lazyHandlerPromise: cachedPromise
	      };
	    }
	    var lazyRoutePromise2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
	      var lazyRoute, routeUpdates, lazyRouteProperty, lazyValue, isUnsupported, staticRouteValue, isStaticallyDefined, _t11, _t12;
	      return _regenerator().w(function (_context25) {
	        while (1) switch (_context25.n) {
	          case 0:
	            invariant(typeof route.lazy === "function", "No lazy route function found");
	            _context25.n = 1;
	            return route.lazy();
	          case 1:
	            lazyRoute = _context25.v;
	            routeUpdates = {};
	            _t11 = _regeneratorKeys(lazyRoute);
	          case 2:
	            if ((_t12 = _t11()).done) {
	              _context25.n = 4;
	              break;
	            }
	            lazyRouteProperty = _t12.value;
	            lazyValue = lazyRoute[lazyRouteProperty];
	            if (!(lazyValue === void 0)) {
	              _context25.n = 3;
	              break;
	            }
	            return _context25.a(3, 2);
	          case 3:
	            isUnsupported = isUnsupportedLazyRouteFunctionKey(lazyRouteProperty);
	            staticRouteValue = routeToUpdate[lazyRouteProperty];
	            isStaticallyDefined = staticRouteValue !== void 0 &&
	            // This property isn't static since it should always be updated based
	            // on the route updates
	            lazyRouteProperty !== "hasErrorBoundary";
	            if (isUnsupported) {
	              warning(!isUnsupported, "Route property " + lazyRouteProperty + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
	            } else if (isStaticallyDefined) {
	              warning(!isStaticallyDefined, "Route \"".concat(routeToUpdate.id, "\" has a static property \"").concat(lazyRouteProperty, "\" defined but its lazy function is also returning a value for this property. The lazy route property \"").concat(lazyRouteProperty, "\" will be ignored."));
	            } else {
	              routeUpdates[lazyRouteProperty] = lazyValue;
	            }
	            _context25.n = 2;
	            break;
	          case 4:
	            Object.assign(routeToUpdate, routeUpdates);
	            Object.assign(routeToUpdate, _objectSpread2(_objectSpread2({}, mapRouteProperties2(routeToUpdate)), {}, {
	              lazy: void 0
	            }));
	          case 5:
	            return _context25.a(2);
	        }
	      }, _callee24);
	    }))();
	    lazyRouteFunctionCache.set(routeToUpdate, lazyRoutePromise2);
	    lazyRoutePromise2["catch"](function () {});
	    return {
	      lazyRoutePromise: lazyRoutePromise2,
	      lazyHandlerPromise: lazyRoutePromise2
	    };
	  }
	  var lazyKeys = Object.keys(route.lazy);
	  var lazyPropertyPromises = [];
	  var lazyHandlerPromise = void 0;
	  for (var _i2 = 0, _lazyKeys = lazyKeys; _i2 < _lazyKeys.length; _i2++) {
	    var key = _lazyKeys[_i2];
	    if (lazyRoutePropertiesToSkip && lazyRoutePropertiesToSkip.includes(key)) {
	      continue;
	    }
	    var promise = loadLazyRouteProperty({
	      key: key,
	      route: route,
	      manifest: manifest,
	      mapRouteProperties: mapRouteProperties2
	    });
	    if (promise) {
	      lazyPropertyPromises.push(promise);
	      if (key === type) {
	        lazyHandlerPromise = promise;
	      }
	    }
	  }
	  var lazyRoutePromise = lazyPropertyPromises.length > 0 ? Promise.all(lazyPropertyPromises).then(function () {}) : void 0;
	  lazyRoutePromise === null || lazyRoutePromise === void 0 ? void 0 : lazyRoutePromise["catch"](function () {});
	  (_lazyHandlerPromise = lazyHandlerPromise) === null || _lazyHandlerPromise === void 0 ? void 0 : _lazyHandlerPromise["catch"](function () {});
	  return {
	    lazyRoutePromise: lazyRoutePromise,
	    lazyHandlerPromise: lazyHandlerPromise
	  };
	}
	function isNonNullable(value) {
	  return value !== void 0;
	}
	function loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties2) {
	  var promises = matches.map(function (_ref29) {
	    var route = _ref29.route;
	    if (typeof route.lazy !== "object" || !route.lazy.middleware) {
	      return void 0;
	    }
	    return loadLazyRouteProperty({
	      key: "middleware",
	      route: route,
	      manifest: manifest,
	      mapRouteProperties: mapRouteProperties2
	    });
	  }).filter(isNonNullable);
	  return promises.length > 0 ? Promise.all(promises) : void 0;
	}
	function defaultDataStrategy(_x99) {
	  return _defaultDataStrategy.apply(this, arguments);
	}
	function _defaultDataStrategy() {
	  _defaultDataStrategy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee57(args) {
	    var matchesToLoad, keyedResults, results;
	    return _regenerator().w(function (_context59) {
	      while (1) switch (_context59.n) {
	        case 0:
	          matchesToLoad = args.matches.filter(function (m) {
	            return m.shouldLoad;
	          });
	          keyedResults = {};
	          _context59.n = 1;
	          return Promise.all(matchesToLoad.map(function (m) {
	            return m.resolve();
	          }));
	        case 1:
	          results = _context59.v;
	          results.forEach(function (result, i) {
	            keyedResults[matchesToLoad[i].route.id] = result;
	          });
	          return _context59.a(2, keyedResults);
	      }
	    }, _callee57);
	  }));
	  return _defaultDataStrategy.apply(this, arguments);
	}
	function defaultDataStrategyWithMiddleware(_x100) {
	  return _defaultDataStrategyWithMiddleware.apply(this, arguments);
	}
	function _defaultDataStrategyWithMiddleware() {
	  _defaultDataStrategyWithMiddleware = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee58(args) {
	    return _regenerator().w(function (_context60) {
	      while (1) switch (_context60.n) {
	        case 0:
	          if (args.matches.some(function (m) {
	            return m.route.middleware;
	          })) {
	            _context60.n = 1;
	            break;
	          }
	          return _context60.a(2, defaultDataStrategy(args));
	        case 1:
	          return _context60.a(2, runClientMiddlewarePipeline(args, function () {
	            return defaultDataStrategy(args);
	          }));
	      }
	    }, _callee58);
	  }));
	  return _defaultDataStrategyWithMiddleware.apply(this, arguments);
	}
	function runServerMiddlewarePipeline(args, handler, errorHandler) {
	  return runMiddlewarePipeline(args, handler, processResult, isResponse, errorHandler);
	  function processResult(result) {
	    return isDataWithResponseInit(result) ? dataWithResponseInitToResponse(result) : result;
	  }
	}
	function runClientMiddlewarePipeline(args, handler) {
	  return runMiddlewarePipeline(args, handler, function (r) {
	    return r;
	  },
	  // No post-processing needed on the client
	  isDataStrategyResults, errorHandler);
	  function errorHandler(error, routeId, nextResult) {
	    if (nextResult) {
	      return Promise.resolve(Object.assign(nextResult.value, _defineProperty({}, routeId, {
	        type: "error",
	        result: error
	      })));
	    } else {
	      var matches = args.matches;
	      var maxBoundaryIdx = Math.min(
	      // Throwing route
	      matches.findIndex(function (m) {
	        return m.route.id === routeId;
	      }) || 0,
	      // or the shallowest route that needs to load data
	      matches.findIndex(function (m) {
	        return m.unstable_shouldCallHandler();
	      }) || 0);
	      var boundaryRouteId = findNearestBoundary(matches, matches[maxBoundaryIdx].route.id).route.id;
	      return Promise.resolve(_defineProperty({}, boundaryRouteId, {
	        type: "error",
	        result: error
	      }));
	    }
	  }
	}
	function runMiddlewarePipeline(_x101, _x102, _x103, _x104, _x105) {
	  return _runMiddlewarePipeline.apply(this, arguments);
	}
	function _runMiddlewarePipeline() {
	  _runMiddlewarePipeline = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee59(args, handler, processResult, isResult, errorHandler) {
	    var matches, request, params, context, tuples, result;
	    return _regenerator().w(function (_context61) {
	      while (1) switch (_context61.n) {
	        case 0:
	          matches = args.matches, request = args.request, params = args.params, context = args.context;
	          tuples = matches.flatMap(function (m) {
	            return m.route.middleware ? m.route.middleware.map(function (fn) {
	              return [m.route.id, fn];
	            }) : [];
	          });
	          _context61.n = 1;
	          return callRouteMiddleware({
	            request: request,
	            params: params,
	            context: context
	          }, tuples, handler, processResult, isResult, errorHandler);
	        case 1:
	          result = _context61.v;
	          return _context61.a(2, result);
	      }
	    }, _callee59);
	  }));
	  return _runMiddlewarePipeline.apply(this, arguments);
	}
	function callRouteMiddleware(_x106, _x107, _x108, _x109, _x110, _x111) {
	  return _callRouteMiddleware.apply(this, arguments);
	}
	function _callRouteMiddleware() {
	  _callRouteMiddleware = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee61(args, middlewares, handler, processResult, isResult, errorHandler) {
	    var idx,
	      request,
	      _request$signal$reaso,
	      tuple,
	      result,
	      _tuple,
	      routeId,
	      middleware,
	      nextResult,
	      next,
	      value,
	      _result2,
	      response,
	      _args63 = arguments,
	      _t22,
	      _t23;
	    return _regenerator().w(function (_context63) {
	      while (1) switch (_context63.p = _context63.n) {
	        case 0:
	          idx = _args63.length > 6 && _args63[6] !== undefined ? _args63[6] : 0;
	          request = args.request;
	          if (!request.signal.aborted) {
	            _context63.n = 1;
	            break;
	          }
	          throw (_request$signal$reaso = request.signal.reason) !== null && _request$signal$reaso !== void 0 ? _request$signal$reaso : new Error("Request aborted: ".concat(request.method, " ").concat(request.url));
	        case 1:
	          tuple = middlewares[idx];
	          if (tuple) {
	            _context63.n = 3;
	            break;
	          }
	          _context63.n = 2;
	          return handler();
	        case 2:
	          result = _context63.v;
	          return _context63.a(2, result);
	        case 3:
	          _tuple = _slicedToArray(tuple, 2), routeId = _tuple[0], middleware = _tuple[1];
	          next = /*#__PURE__*/function () {
	            var _ref115 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee60() {
	              var _result, _t20, _t21;
	              return _regenerator().w(function (_context62) {
	                while (1) switch (_context62.p = _context62.n) {
	                  case 0:
	                    if (!nextResult) {
	                      _context62.n = 1;
	                      break;
	                    }
	                    throw new Error("You may only call `next()` once per middleware");
	                  case 1:
	                    _context62.p = 1;
	                    _context62.n = 2;
	                    return callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx + 1);
	                  case 2:
	                    _result = _context62.v;
	                    nextResult = {
	                      value: _result
	                    };
	                    return _context62.a(2, nextResult.value);
	                  case 3:
	                    _context62.p = 3;
	                    _t20 = _context62.v;
	                    _context62.n = 4;
	                    return errorHandler(_t20, routeId, nextResult);
	                  case 4:
	                    _t21 = _context62.v;
	                    nextResult = {
	                      value: _t21
	                    };
	                    return _context62.a(2, nextResult.value);
	                }
	              }, _callee60, null, [[1, 3]]);
	            }));
	            return function next() {
	              return _ref115.apply(this, arguments);
	            };
	          }();
	          _context63.p = 4;
	          _context63.n = 5;
	          return middleware(args, next);
	        case 5:
	          value = _context63.v;
	          _result2 = value != null ? processResult(value) : void 0;
	          if (!isResult(_result2)) {
	            _context63.n = 6;
	            break;
	          }
	          return _context63.a(2, _result2);
	        case 6:
	          if (!nextResult) {
	            _context63.n = 7;
	            break;
	          }
	          return _context63.a(2, _result2 !== null && _result2 !== void 0 ? _result2 : nextResult.value);
	        case 7:
	          _context63.n = 8;
	          return next();
	        case 8:
	          _t22 = _context63.v;
	          nextResult = {
	            value: _t22
	          };
	          return _context63.a(2, nextResult.value);
	        case 9:
	          _context63.n = 12;
	          break;
	        case 10:
	          _context63.p = 10;
	          _t23 = _context63.v;
	          _context63.n = 11;
	          return errorHandler(_t23, routeId, nextResult);
	        case 11:
	          response = _context63.v;
	          return _context63.a(2, response);
	        case 12:
	          return _context63.a(2);
	      }
	    }, _callee61, null, [[4, 10]]);
	  }));
	  return _callRouteMiddleware.apply(this, arguments);
	}
	function getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip) {
	  var lazyMiddlewarePromise = loadLazyRouteProperty({
	    key: "middleware",
	    route: match.route,
	    manifest: manifest,
	    mapRouteProperties: mapRouteProperties2
	  });
	  var lazyRoutePromises = loadLazyRoute(match.route, isMutationMethod(request.method) ? "action" : "loader", manifest, mapRouteProperties2, lazyRoutePropertiesToSkip);
	  return {
	    middleware: lazyMiddlewarePromise,
	    route: lazyRoutePromises.lazyRoutePromise,
	    handler: lazyRoutePromises.lazyHandlerPromise
	  };
	}
	function getDataStrategyMatch(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad) {
	  var unstable_shouldRevalidateArgs = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
	  var isUsingNewApi = false;
	  var _lazyPromises = getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip);
	  return _objectSpread2(_objectSpread2({}, match), {}, {
	    _lazyPromises: _lazyPromises,
	    shouldLoad: shouldLoad,
	    unstable_shouldRevalidateArgs: unstable_shouldRevalidateArgs,
	    unstable_shouldCallHandler: function unstable_shouldCallHandler(defaultShouldRevalidate) {
	      isUsingNewApi = true;
	      if (!unstable_shouldRevalidateArgs) {
	        return shouldLoad;
	      }
	      if (typeof defaultShouldRevalidate === "boolean") {
	        return shouldRevalidateLoader(match, _objectSpread2(_objectSpread2({}, unstable_shouldRevalidateArgs), {}, {
	          defaultShouldRevalidate: defaultShouldRevalidate
	        }));
	      }
	      return shouldRevalidateLoader(match, unstable_shouldRevalidateArgs);
	    },
	    resolve: function resolve(handlerOverride) {
	      if (isUsingNewApi || shouldLoad || handlerOverride && !isMutationMethod(request.method) && (match.route.lazy || match.route.loader)) {
	        return callLoaderOrAction({
	          request: request,
	          match: match,
	          lazyHandlerPromise: _lazyPromises === null || _lazyPromises === void 0 ? void 0 : _lazyPromises.handler,
	          lazyRoutePromise: _lazyPromises === null || _lazyPromises === void 0 ? void 0 : _lazyPromises.route,
	          handlerOverride: handlerOverride,
	          scopedContext: scopedContext
	        });
	      }
	      return Promise.resolve({
	        type: "data" /* data */,
	        result: void 0
	      });
	    }
	  });
	}
	function getTargetedDataStrategyMatches(mapRouteProperties2, manifest, request, matches, targetMatch, lazyRoutePropertiesToSkip, scopedContext) {
	  var shouldRevalidateArgs = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
	  return matches.map(function (match) {
	    if (match.route.id !== targetMatch.route.id) {
	      return _objectSpread2(_objectSpread2({}, match), {}, {
	        shouldLoad: false,
	        unstable_shouldRevalidateArgs: shouldRevalidateArgs,
	        unstable_shouldCallHandler: function unstable_shouldCallHandler() {
	          return false;
	        },
	        _lazyPromises: getDataStrategyMatchLazyPromises(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip),
	        resolve: function resolve() {
	          return Promise.resolve({
	            type: "data",
	            result: void 0
	          });
	        }
	      });
	    }
	    return getDataStrategyMatch(mapRouteProperties2, manifest, request, match, lazyRoutePropertiesToSkip, scopedContext, true, shouldRevalidateArgs);
	  });
	}
	function callDataStrategyImpl(_x112, _x113, _x114, _x115, _x116, _x117) {
	  return _callDataStrategyImpl.apply(this, arguments);
	}
	function _callDataStrategyImpl() {
	  _callDataStrategyImpl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee62(dataStrategyImpl, request, matches, fetcherKey, scopedContext, isStaticHandler) {
	    var dataStrategyArgs, runClientMiddleware, results;
	    return _regenerator().w(function (_context64) {
	      while (1) switch (_context64.p = _context64.n) {
	        case 0:
	          if (!matches.some(function (m) {
	            var _m$_lazyPromises;
	            return (_m$_lazyPromises = m._lazyPromises) === null || _m$_lazyPromises === void 0 ? void 0 : _m$_lazyPromises.middleware;
	          })) {
	            _context64.n = 1;
	            break;
	          }
	          _context64.n = 1;
	          return Promise.all(matches.map(function (m) {
	            var _m$_lazyPromises2;
	            return (_m$_lazyPromises2 = m._lazyPromises) === null || _m$_lazyPromises2 === void 0 ? void 0 : _m$_lazyPromises2.middleware;
	          }));
	        case 1:
	          dataStrategyArgs = {
	            request: request,
	            params: matches[0].params,
	            context: scopedContext,
	            matches: matches
	          };
	          runClientMiddleware = isStaticHandler ? function () {
	            throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	          } : function (cb) {
	            var typedDataStrategyArgs = dataStrategyArgs;
	            return runClientMiddlewarePipeline(typedDataStrategyArgs, function () {
	              return cb(_objectSpread2(_objectSpread2({}, typedDataStrategyArgs), {}, {
	                fetcherKey: fetcherKey,
	                runClientMiddleware: function runClientMiddleware() {
	                  throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
	                }
	              }));
	            });
	          };
	          _context64.n = 2;
	          return dataStrategyImpl(_objectSpread2(_objectSpread2({}, dataStrategyArgs), {}, {
	            fetcherKey: fetcherKey,
	            runClientMiddleware: runClientMiddleware
	          }));
	        case 2:
	          results = _context64.v;
	          _context64.p = 3;
	          _context64.n = 4;
	          return Promise.all(matches.flatMap(function (m) {
	            var _m$_lazyPromises3, _m$_lazyPromises4;
	            return [(_m$_lazyPromises3 = m._lazyPromises) === null || _m$_lazyPromises3 === void 0 ? void 0 : _m$_lazyPromises3.handler, (_m$_lazyPromises4 = m._lazyPromises) === null || _m$_lazyPromises4 === void 0 ? void 0 : _m$_lazyPromises4.route];
	          }));
	        case 4:
	          _context64.n = 6;
	          break;
	        case 5:
	          _context64.p = 5;
	          _context64.v;
	        case 6:
	          return _context64.a(2, results);
	      }
	    }, _callee62, null, [[3, 5]]);
	  }));
	  return _callDataStrategyImpl.apply(this, arguments);
	}
	function callLoaderOrAction(_x118) {
	  return _callLoaderOrAction.apply(this, arguments);
	}
	function _callLoaderOrAction() {
	  _callLoaderOrAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee64(_ref30) {
	    var request, match, lazyHandlerPromise, lazyRoutePromise, handlerOverride, scopedContext, result, onReject, isAction, type, runHandler, handler, handlerError, _yield$Promise$all, _yield$Promise$all2, value, handler2, _yield$Promise$all3, _yield$Promise$all4, url, pathname, _url, _pathname, _t26;
	    return _regenerator().w(function (_context66) {
	      while (1) switch (_context66.p = _context66.n) {
	        case 0:
	          request = _ref30.request, match = _ref30.match, lazyHandlerPromise = _ref30.lazyHandlerPromise, lazyRoutePromise = _ref30.lazyRoutePromise, handlerOverride = _ref30.handlerOverride, scopedContext = _ref30.scopedContext;
	          isAction = isMutationMethod(request.method);
	          type = isAction ? "action" : "loader";
	          runHandler = function runHandler(handler) {
	            var reject;
	            var abortPromise = new Promise(function (_, r) {
	              return reject = r;
	            });
	            onReject = function onReject() {
	              return reject();
	            };
	            request.signal.addEventListener("abort", onReject);
	            var actualHandler = function actualHandler(ctx) {
	              if (typeof handler !== "function") {
	                return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean \"".concat(type, "\" [routeId: ").concat(match.route.id, "]")));
	              }
	              return handler.apply(void 0, [{
	                request: request,
	                params: match.params,
	                context: scopedContext
	              }].concat(_toConsumableArray(ctx !== void 0 ? [ctx] : [])));
	            };
	            var handlerPromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee63() {
	              var val, _t25;
	              return _regenerator().w(function (_context65) {
	                while (1) switch (_context65.p = _context65.n) {
	                  case 0:
	                    _context65.p = 0;
	                    _context65.n = 1;
	                    return handlerOverride ? handlerOverride(function (ctx) {
	                      return actualHandler(ctx);
	                    }) : actualHandler();
	                  case 1:
	                    val = _context65.v;
	                    return _context65.a(2, {
	                      type: "data",
	                      result: val
	                    });
	                  case 2:
	                    _context65.p = 2;
	                    _t25 = _context65.v;
	                    return _context65.a(2, {
	                      type: "error",
	                      result: _t25
	                    });
	                }
	              }, _callee63, null, [[0, 2]]);
	            }))();
	            return Promise.race([handlerPromise, abortPromise]);
	          };
	          _context66.p = 1;
	          handler = isAction ? match.route.action : match.route.loader;
	          if (!(lazyHandlerPromise || lazyRoutePromise)) {
	            _context66.n = 10;
	            break;
	          }
	          if (!handler) {
	            _context66.n = 4;
	            break;
	          }
	          _context66.n = 2;
	          return Promise.all([
	          // If the handler throws, don't let it immediately bubble out,
	          // since we need to let the lazy() execution finish so we know if this
	          // route has a boundary that can handle the error
	          runHandler(handler)["catch"](function (e) {
	            handlerError = e;
	          }),
	          // Ensure all lazy route promises are resolved before continuing
	          lazyHandlerPromise, lazyRoutePromise]);
	        case 2:
	          _yield$Promise$all = _context66.v;
	          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
	          value = _yield$Promise$all2[0];
	          if (!(handlerError !== void 0)) {
	            _context66.n = 3;
	            break;
	          }
	          throw handlerError;
	        case 3:
	          result = value;
	          _context66.n = 9;
	          break;
	        case 4:
	          _context66.n = 5;
	          return lazyHandlerPromise;
	        case 5:
	          handler2 = isAction ? match.route.action : match.route.loader;
	          if (!handler2) {
	            _context66.n = 7;
	            break;
	          }
	          _context66.n = 6;
	          return Promise.all([runHandler(handler2), lazyRoutePromise]);
	        case 6:
	          _yield$Promise$all3 = _context66.v;
	          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 1);
	          result = _yield$Promise$all4[0];
	          _context66.n = 9;
	          break;
	        case 7:
	          if (!(type === "action")) {
	            _context66.n = 8;
	            break;
	          }
	          url = new URL(request.url);
	          pathname = url.pathname + url.search;
	          throw getInternalRouterError(405, {
	            method: request.method,
	            pathname: pathname,
	            routeId: match.route.id
	          });
	        case 8:
	          return _context66.a(2, {
	            type: "data" /* data */,
	            result: void 0
	          });
	        case 9:
	          _context66.n = 13;
	          break;
	        case 10:
	          if (handler) {
	            _context66.n = 11;
	            break;
	          }
	          _url = new URL(request.url);
	          _pathname = _url.pathname + _url.search;
	          throw getInternalRouterError(404, {
	            pathname: _pathname
	          });
	        case 11:
	          _context66.n = 12;
	          return runHandler(handler);
	        case 12:
	          result = _context66.v;
	        case 13:
	          _context66.n = 15;
	          break;
	        case 14:
	          _context66.p = 14;
	          _t26 = _context66.v;
	          return _context66.a(2, {
	            type: "error" /* error */,
	            result: _t26
	          });
	        case 15:
	          _context66.p = 15;
	          if (onReject) {
	            request.signal.removeEventListener("abort", onReject);
	          }
	          return _context66.f(15);
	        case 16:
	          return _context66.a(2, result);
	      }
	    }, _callee64, null, [[1, 14, 15, 16]]);
	  }));
	  return _callLoaderOrAction.apply(this, arguments);
	}
	function parseResponseBody(_x119) {
	  return _parseResponseBody.apply(this, arguments);
	}
	function _parseResponseBody() {
	  _parseResponseBody = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee65(response) {
	    var contentType;
	    return _regenerator().w(function (_context67) {
	      while (1) switch (_context67.n) {
	        case 0:
	          contentType = response.headers.get("Content-Type");
	          if (!(contentType && /\bapplication\/json\b/.test(contentType))) {
	            _context67.n = 1;
	            break;
	          }
	          return _context67.a(2, response.body == null ? null : response.json());
	        case 1:
	          return _context67.a(2, response.text());
	      }
	    }, _callee65);
	  }));
	  return _parseResponseBody.apply(this, arguments);
	}
	function convertDataStrategyResultToDataResult(_x120) {
	  return _convertDataStrategyResultToDataResult.apply(this, arguments);
	}
	function _convertDataStrategyResultToDataResult() {
	  _convertDataStrategyResultToDataResult = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee66(dataStrategyResult) {
	    var result, type, data2, _result$init3, _result$init4, _result$init, _result$init2, _result$init5, _result$init6, _t27;
	    return _regenerator().w(function (_context68) {
	      while (1) switch (_context68.p = _context68.n) {
	        case 0:
	          result = dataStrategyResult.result, type = dataStrategyResult.type;
	          if (!isResponse(result)) {
	            _context68.n = 6;
	            break;
	          }
	          _context68.p = 1;
	          _context68.n = 2;
	          return parseResponseBody(result);
	        case 2:
	          data2 = _context68.v;
	          _context68.n = 4;
	          break;
	        case 3:
	          _context68.p = 3;
	          _t27 = _context68.v;
	          return _context68.a(2, {
	            type: "error" /* error */,
	            error: _t27
	          });
	        case 4:
	          if (!(type === "error" /* error */)) {
	            _context68.n = 5;
	            break;
	          }
	          return _context68.a(2, {
	            type: "error" /* error */,
	            error: new ErrorResponseImpl(result.status, result.statusText, data2),
	            statusCode: result.status,
	            headers: result.headers
	          });
	        case 5:
	          return _context68.a(2, {
	            type: "data" /* data */,
	            data: data2,
	            statusCode: result.status,
	            headers: result.headers
	          });
	        case 6:
	          if (!(type === "error" /* error */)) {
	            _context68.n = 9;
	            break;
	          }
	          if (!isDataWithResponseInit(result)) {
	            _context68.n = 8;
	            break;
	          }
	          if (!(result.data instanceof Error)) {
	            _context68.n = 7;
	            break;
	          }
	          return _context68.a(2, {
	            type: "error" /* error */,
	            error: result.data,
	            statusCode: (_result$init = result.init) === null || _result$init === void 0 ? void 0 : _result$init.status,
	            headers: (_result$init2 = result.init) !== null && _result$init2 !== void 0 && _result$init2.headers ? new Headers(result.init.headers) : void 0
	          });
	        case 7:
	          return _context68.a(2, {
	            type: "error" /* error */,
	            error: new ErrorResponseImpl(((_result$init3 = result.init) === null || _result$init3 === void 0 ? void 0 : _result$init3.status) || 500, void 0, result.data),
	            statusCode: isRouteErrorResponse(result) ? result.status : void 0,
	            headers: (_result$init4 = result.init) !== null && _result$init4 !== void 0 && _result$init4.headers ? new Headers(result.init.headers) : void 0
	          });
	        case 8:
	          return _context68.a(2, {
	            type: "error" /* error */,
	            error: result,
	            statusCode: isRouteErrorResponse(result) ? result.status : void 0
	          });
	        case 9:
	          if (!isDataWithResponseInit(result)) {
	            _context68.n = 10;
	            break;
	          }
	          return _context68.a(2, {
	            type: "data" /* data */,
	            data: result.data,
	            statusCode: (_result$init5 = result.init) === null || _result$init5 === void 0 ? void 0 : _result$init5.status,
	            headers: (_result$init6 = result.init) !== null && _result$init6 !== void 0 && _result$init6.headers ? new Headers(result.init.headers) : void 0
	          });
	        case 10:
	          return _context68.a(2, {
	            type: "data" /* data */,
	            data: result
	          });
	      }
	    }, _callee66, null, [[1, 3]]);
	  }));
	  return _convertDataStrategyResultToDataResult.apply(this, arguments);
	}
	function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
	  var location = response.headers.get("Location");
	  invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
	  if (!isAbsoluteUrl(location)) {
	    var trimmedMatches = matches.slice(0, matches.findIndex(function (m) {
	      return m.route.id === routeId;
	    }) + 1);
	    location = normalizeTo(new URL(request.url), trimmedMatches, basename, location);
	    response.headers.set("Location", location);
	  }
	  return response;
	}
	function normalizeRedirectLocation(location, currentUrl, basename) {
	  if (isAbsoluteUrl(location)) {
	    var normalizedLocation = location;
	    var url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
	    var isSameBasename = stripBasename(url.pathname, basename) != null;
	    if (url.origin === currentUrl.origin && isSameBasename) {
	      return url.pathname + url.search + url.hash;
	    }
	  }
	  return location;
	}
	function createClientSideRequest(history, location, signal, submission) {
	  var url = history.createURL(stripHashFromPath(location)).toString();
	  var init = {
	    signal: signal
	  };
	  if (submission && isMutationMethod(submission.formMethod)) {
	    var formMethod = submission.formMethod,
	      formEncType = submission.formEncType;
	    init.method = formMethod.toUpperCase();
	    if (formEncType === "application/json") {
	      init.headers = new Headers({
	        "Content-Type": formEncType
	      });
	      init.body = JSON.stringify(submission.json);
	    } else if (formEncType === "text/plain") {
	      init.body = submission.text;
	    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
	      init.body = convertFormDataToSearchParams(submission.formData);
	    } else {
	      init.body = submission.formData;
	    }
	  }
	  return new Request(url, init);
	}
	function convertFormDataToSearchParams(formData) {
	  var searchParams = new URLSearchParams();
	  var _iterator8 = _createForOfIteratorHelper(formData.entries()),
	    _step8;
	  try {
	    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
	      var _step8$value = _slicedToArray(_step8.value, 2),
	        key = _step8$value[0],
	        value = _step8$value[1];
	      searchParams.append(key, typeof value === "string" ? value : value.name);
	    }
	  } catch (err) {
	    _iterator8.e(err);
	  } finally {
	    _iterator8.f();
	  }
	  return searchParams;
	}
	function convertSearchParamsToFormData(searchParams) {
	  var formData = new FormData();
	  var _iterator9 = _createForOfIteratorHelper(searchParams.entries()),
	    _step9;
	  try {
	    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
	      var _step9$value = _slicedToArray(_step9.value, 2),
	        key = _step9$value[0],
	        value = _step9$value[1];
	      formData.append(key, value);
	    }
	  } catch (err) {
	    _iterator9.e(err);
	  } finally {
	    _iterator9.f();
	  }
	  return formData;
	}
	function processRouteLoaderData(matches, results, pendingActionResult) {
	  var isStaticHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var skipLoaderErrorBubbling = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  var loaderData = {};
	  var errors = null;
	  var statusCode;
	  var foundError = false;
	  var loaderHeaders = {};
	  var pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
	  matches.forEach(function (match) {
	    if (!(match.route.id in results)) {
	      return;
	    }
	    var id = match.route.id;
	    var result = results[id];
	    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
	    if (isErrorResult(result)) {
	      var error = result.error;
	      if (pendingError !== void 0) {
	        error = pendingError;
	        pendingError = void 0;
	      }
	      errors = errors || {};
	      if (skipLoaderErrorBubbling) {
	        errors[id] = error;
	      } else {
	        var boundaryMatch = findNearestBoundary(matches, id);
	        if (errors[boundaryMatch.route.id] == null) {
	          errors[boundaryMatch.route.id] = error;
	        }
	      }
	      if (!isStaticHandler) {
	        loaderData[id] = ResetLoaderDataSymbol;
	      }
	      if (!foundError) {
	        foundError = true;
	        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
	      }
	      if (result.headers) {
	        loaderHeaders[id] = result.headers;
	      }
	    } else {
	      loaderData[id] = result.data;
	      if (result.statusCode && result.statusCode !== 200 && !foundError) {
	        statusCode = result.statusCode;
	      }
	      if (result.headers) {
	        loaderHeaders[id] = result.headers;
	      }
	    }
	  });
	  if (pendingError !== void 0 && pendingActionResult) {
	    errors = _defineProperty({}, pendingActionResult[0], pendingError);
	    if (pendingActionResult[2]) {
	      loaderData[pendingActionResult[2]] = void 0;
	    }
	  }
	  return {
	    loaderData: loaderData,
	    errors: errors,
	    statusCode: statusCode || 200,
	    loaderHeaders: loaderHeaders
	  };
	}
	function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
	  var _processRouteLoaderDa = processRouteLoaderData(matches, results, pendingActionResult),
	    loaderData = _processRouteLoaderDa.loaderData,
	    errors = _processRouteLoaderDa.errors;
	  revalidatingFetchers.filter(function (f) {
	    return !f.matches || f.matches.some(function (m) {
	      return m.shouldLoad;
	    });
	  }).forEach(function (rf) {
	    var key = rf.key,
	      match = rf.match,
	      controller = rf.controller;
	    if (controller && controller.signal.aborted) {
	      return;
	    }
	    var result = fetcherResults[key];
	    invariant(result, "Did not find corresponding fetcher result");
	    if (isErrorResult(result)) {
	      var boundaryMatch = findNearestBoundary(state.matches, match === null || match === void 0 ? void 0 : match.route.id);
	      if (!(errors && errors[boundaryMatch.route.id])) {
	        errors = _objectSpread2(_objectSpread2({}, errors), {}, _defineProperty({}, boundaryMatch.route.id, result.error));
	      }
	      state.fetchers["delete"](key);
	    } else if (isRedirectResult(result)) {
	      invariant(false, "Unhandled fetcher revalidation redirect");
	    } else {
	      var doneFetcher = getDoneFetcher(result.data);
	      state.fetchers.set(key, doneFetcher);
	    }
	  });
	  return {
	    loaderData: loaderData,
	    errors: errors
	  };
	}
	function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
	  var mergedLoaderData = Object.entries(newLoaderData).filter(function (_ref31) {
	    var _ref32 = _slicedToArray(_ref31, 2),
	      v = _ref32[1];
	    return v !== ResetLoaderDataSymbol;
	  }).reduce(function (merged, _ref33) {
	    var _ref34 = _slicedToArray(_ref33, 2),
	      k = _ref34[0],
	      v = _ref34[1];
	    merged[k] = v;
	    return merged;
	  }, {});
	  var _iterator0 = _createForOfIteratorHelper(matches),
	    _step0;
	  try {
	    for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
	      var match = _step0.value;
	      var id = match.route.id;
	      if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
	        mergedLoaderData[id] = loaderData[id];
	      }
	      if (errors && errors.hasOwnProperty(id)) {
	        break;
	      }
	    }
	  } catch (err) {
	    _iterator0.e(err);
	  } finally {
	    _iterator0.f();
	  }
	  return mergedLoaderData;
	}
	function getActionDataForCommit(pendingActionResult) {
	  if (!pendingActionResult) {
	    return {};
	  }
	  return isErrorResult(pendingActionResult[1]) ? {
	    // Clear out prior actionData on errors
	    actionData: {}
	  } : {
	    actionData: _defineProperty({}, pendingActionResult[0], pendingActionResult[1].data)
	  };
	}
	function findNearestBoundary(matches, routeId) {
	  var eligibleMatches = routeId ? matches.slice(0, matches.findIndex(function (m) {
	    return m.route.id === routeId;
	  }) + 1) : _toConsumableArray(matches);
	  return eligibleMatches.reverse().find(function (m) {
	    return m.route.hasErrorBoundary === true;
	  }) || matches[0];
	}
	function getShortCircuitMatches(routes) {
	  var route = routes.length === 1 ? routes[0] : routes.find(function (r) {
	    return r.index || !r.path || r.path === "/";
	  }) || {
	    id: "__shim-error-route__"
	  };
	  return {
	    matches: [{
	      params: {},
	      pathname: "",
	      pathnameBase: "",
	      route: route
	    }],
	    route: route
	  };
	}
	function getInternalRouterError(status) {
	  var _ref35 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    pathname = _ref35.pathname,
	    routeId = _ref35.routeId,
	    method = _ref35.method,
	    type = _ref35.type;
	    _ref35.message;
	  var statusText = "Unknown Server Error";
	  var errorMessage = "Unknown @remix-run/router error";
	  if (status === 400) {
	    statusText = "Bad Request";
	    if (method && pathname && routeId) {
	      errorMessage = "You made a ".concat(method, " request to \"").concat(pathname, "\" but did not provide a `loader` for route \"").concat(routeId, "\", so there is no way to handle the request.");
	    } else if (type === "invalid-body") {
	      errorMessage = "Unable to encode submission body";
	    }
	  } else if (status === 403) {
	    statusText = "Forbidden";
	    errorMessage = "Route \"".concat(routeId, "\" does not match URL \"").concat(pathname, "\"");
	  } else if (status === 404) {
	    statusText = "Not Found";
	    errorMessage = "No route matches URL \"".concat(pathname, "\"");
	  } else if (status === 405) {
	    statusText = "Method Not Allowed";
	    if (method && pathname && routeId) {
	      errorMessage = "You made a ".concat(method.toUpperCase(), " request to \"").concat(pathname, "\" but did not provide an `action` for route \"").concat(routeId, "\", so there is no way to handle the request.");
	    } else if (method) {
	      errorMessage = "Invalid request method \"".concat(method.toUpperCase(), "\"");
	    }
	  }
	  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
	}
	function findRedirect(results) {
	  var entries = Object.entries(results);
	  for (var i = entries.length - 1; i >= 0; i--) {
	    var _entries$i = _slicedToArray(entries[i], 2),
	      key = _entries$i[0],
	      result = _entries$i[1];
	    if (isRedirectResult(result)) {
	      return {
	        key: key,
	        result: result
	      };
	    }
	  }
	}
	function stripHashFromPath(path) {
	  var parsedPath = typeof path === "string" ? parsePath(path) : path;
	  return createPath(_objectSpread2(_objectSpread2({}, parsedPath), {}, {
	    hash: ""
	  }));
	}
	function isHashChangeOnly(a, b) {
	  if (a.pathname !== b.pathname || a.search !== b.search) {
	    return false;
	  }
	  if (a.hash === "") {
	    return b.hash !== "";
	  } else if (a.hash === b.hash) {
	    return true;
	  } else if (b.hash !== "") {
	    return true;
	  }
	  return false;
	}
	function dataWithResponseInitToResponse(data2) {
	  var _data2$init;
	  return Response.json(data2.data, (_data2$init = data2.init) !== null && _data2$init !== void 0 ? _data2$init : void 0);
	}
	function dataWithResponseInitToErrorResponse(data2) {
	  var _data2$init$status, _data2$init2, _data2$init$statusTex, _data2$init3;
	  return new ErrorResponseImpl((_data2$init$status = (_data2$init2 = data2.init) === null || _data2$init2 === void 0 ? void 0 : _data2$init2.status) !== null && _data2$init$status !== void 0 ? _data2$init$status : 500, (_data2$init$statusTex = (_data2$init3 = data2.init) === null || _data2$init3 === void 0 ? void 0 : _data2$init3.statusText) !== null && _data2$init$statusTex !== void 0 ? _data2$init$statusTex : "Internal Server Error", data2.data);
	}
	function isDataStrategyResults(result) {
	  return result != null && typeof result === "object" && Object.entries(result).every(function (_ref36) {
	    var _ref37 = _slicedToArray(_ref36, 2),
	      key = _ref37[0],
	      value = _ref37[1];
	    return typeof key === "string" && isDataStrategyResult(value);
	  });
	}
	function isDataStrategyResult(result) {
	  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" /* data */ || result.type === "error" /* error */);
	}
	function isRedirectDataStrategyResult(result) {
	  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
	}
	function isErrorResult(result) {
	  return result.type === "error" /* error */;
	}
	function isRedirectResult(result) {
	  return (result && result.type) === "redirect" /* redirect */;
	}
	function isDataWithResponseInit(value) {
	  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
	}
	function isResponse(value) {
	  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
	}
	function isRedirectStatusCode(statusCode) {
	  return redirectStatusCodes.has(statusCode);
	}
	function isRedirectResponse(result) {
	  return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
	}
	function isValidMethod(method) {
	  return validRequestMethods.has(method.toUpperCase());
	}
	function isMutationMethod(method) {
	  return validMutationMethods.has(method.toUpperCase());
	}
	function hasNakedIndexQuery(search) {
	  return new URLSearchParams(search).getAll("index").some(function (v) {
	    return v === "";
	  });
	}
	function getTargetMatch(matches, location) {
	  var search = typeof location === "string" ? parsePath(location).search : location.search;
	  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
	    return matches[matches.length - 1];
	  }
	  var pathMatches = getPathContributingMatches(matches);
	  return pathMatches[pathMatches.length - 1];
	}
	function getSubmissionFromNavigation(navigation) {
	  var formMethod = navigation.formMethod,
	    formAction = navigation.formAction,
	    formEncType = navigation.formEncType,
	    text = navigation.text,
	    formData = navigation.formData,
	    json = navigation.json;
	  if (!formMethod || !formAction || !formEncType) {
	    return;
	  }
	  if (text != null) {
	    return {
	      formMethod: formMethod,
	      formAction: formAction,
	      formEncType: formEncType,
	      formData: void 0,
	      json: void 0,
	      text: text
	    };
	  } else if (formData != null) {
	    return {
	      formMethod: formMethod,
	      formAction: formAction,
	      formEncType: formEncType,
	      formData: formData,
	      json: void 0,
	      text: void 0
	    };
	  } else if (json !== void 0) {
	    return {
	      formMethod: formMethod,
	      formAction: formAction,
	      formEncType: formEncType,
	      formData: void 0,
	      json: json,
	      text: void 0
	    };
	  }
	}
	function getLoadingNavigation(location, submission) {
	  if (submission) {
	    var navigation = {
	      state: "loading",
	      location: location,
	      formMethod: submission.formMethod,
	      formAction: submission.formAction,
	      formEncType: submission.formEncType,
	      formData: submission.formData,
	      json: submission.json,
	      text: submission.text
	    };
	    return navigation;
	  } else {
	    var _navigation = {
	      state: "loading",
	      location: location,
	      formMethod: void 0,
	      formAction: void 0,
	      formEncType: void 0,
	      formData: void 0,
	      json: void 0,
	      text: void 0
	    };
	    return _navigation;
	  }
	}
	function getSubmittingNavigation(location, submission) {
	  var navigation = {
	    state: "submitting",
	    location: location,
	    formMethod: submission.formMethod,
	    formAction: submission.formAction,
	    formEncType: submission.formEncType,
	    formData: submission.formData,
	    json: submission.json,
	    text: submission.text
	  };
	  return navigation;
	}
	function getLoadingFetcher(submission, data2) {
	  if (submission) {
	    var fetcher = {
	      state: "loading",
	      formMethod: submission.formMethod,
	      formAction: submission.formAction,
	      formEncType: submission.formEncType,
	      formData: submission.formData,
	      json: submission.json,
	      text: submission.text,
	      data: data2
	    };
	    return fetcher;
	  } else {
	    var _fetcher = {
	      state: "loading",
	      formMethod: void 0,
	      formAction: void 0,
	      formEncType: void 0,
	      formData: void 0,
	      json: void 0,
	      text: void 0,
	      data: data2
	    };
	    return _fetcher;
	  }
	}
	function getSubmittingFetcher(submission, existingFetcher) {
	  var fetcher = {
	    state: "submitting",
	    formMethod: submission.formMethod,
	    formAction: submission.formAction,
	    formEncType: submission.formEncType,
	    formData: submission.formData,
	    json: submission.json,
	    text: submission.text,
	    data: existingFetcher ? existingFetcher.data : void 0
	  };
	  return fetcher;
	}
	function getDoneFetcher(data2) {
	  var fetcher = {
	    state: "idle",
	    formMethod: void 0,
	    formAction: void 0,
	    formEncType: void 0,
	    formData: void 0,
	    json: void 0,
	    text: void 0,
	    data: data2
	  };
	  return fetcher;
	}
	function restoreAppliedTransitions(_window, transitions) {
	  try {
	    var sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
	    if (sessionPositions) {
	      var json = JSON.parse(sessionPositions);
	      for (var _i3 = 0, _Object$entries2 = Object.entries(json || {}); _i3 < _Object$entries2.length; _i3++) {
	        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
	          k = _Object$entries2$_i[0],
	          v = _Object$entries2$_i[1];
	        if (v && Array.isArray(v)) {
	          transitions.set(k, new Set(v || []));
	        }
	      }
	    }
	  } catch (e) {}
	}
	function persistAppliedTransitions(_window, transitions) {
	  if (transitions.size > 0) {
	    var json = {};
	    var _iterator1 = _createForOfIteratorHelper(transitions),
	      _step1;
	    try {
	      for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
	        var _step1$value = _slicedToArray(_step1.value, 2),
	          k = _step1$value[0],
	          v = _step1$value[1];
	        json[k] = _toConsumableArray(v);
	      }
	    } catch (err) {
	      _iterator1.e(err);
	    } finally {
	      _iterator1.f();
	    }
	    try {
	      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
	    } catch (error) {
	      warning(false, "Failed to save applied view transitions in sessionStorage (".concat(error, ")."));
	    }
	  }
	}
	function createDeferred() {
	  var resolve;
	  var reject;
	  var promise = new Promise(function (res, rej) {
	    resolve = /*#__PURE__*/function () {
	      var _ref38 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(val) {
	        return _regenerator().w(function (_context26) {
	          while (1) switch (_context26.p = _context26.n) {
	            case 0:
	              res(val);
	              _context26.p = 1;
	              _context26.n = 2;
	              return promise;
	            case 2:
	              _context26.n = 4;
	              break;
	            case 3:
	              _context26.p = 3;
	              _context26.v;
	            case 4:
	              return _context26.a(2);
	          }
	        }, _callee25, null, [[1, 3]]);
	      }));
	      return function resolve(_x121) {
	        return _ref38.apply(this, arguments);
	      };
	    }();
	    reject = /*#__PURE__*/function () {
	      var _ref39 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(error) {
	        return _regenerator().w(function (_context27) {
	          while (1) switch (_context27.p = _context27.n) {
	            case 0:
	              rej(error);
	              _context27.p = 1;
	              _context27.n = 2;
	              return promise;
	            case 2:
	              _context27.n = 4;
	              break;
	            case 3:
	              _context27.p = 3;
	              _context27.v;
	            case 4:
	              return _context27.a(2);
	          }
	        }, _callee26, null, [[1, 3]]);
	      }));
	      return function reject(_x122) {
	        return _ref39.apply(this, arguments);
	      };
	    }();
	  });
	  return {
	    promise: promise,
	    //@ts-ignore
	    resolve: resolve,
	    //@ts-ignore
	    reject: reject
	  };
	}
	var DataRouterContext = /*#__PURE__*/React3__namespace.createContext(null);
	DataRouterContext.displayName = "DataRouter";
	var DataRouterStateContext = /*#__PURE__*/React3__namespace.createContext(null);
	DataRouterStateContext.displayName = "DataRouterState";
	var RSCRouterContext = /*#__PURE__*/React3__namespace.createContext(false);
	function useIsRSCRouterContext() {
	  return React3__namespace.useContext(RSCRouterContext);
	}
	var ViewTransitionContext = /*#__PURE__*/React3__namespace.createContext({
	  isTransitioning: false
	});
	ViewTransitionContext.displayName = "ViewTransition";
	var FetchersContext = /*#__PURE__*/React3__namespace.createContext(/* @__PURE__ */new Map());
	FetchersContext.displayName = "Fetchers";
	var AwaitContext = /*#__PURE__*/React3__namespace.createContext(null);
	AwaitContext.displayName = "Await";
	var AwaitContextProvider = function AwaitContextProvider(props) {
	  return /*#__PURE__*/React3__namespace.createElement(AwaitContext.Provider, props);
	};
	var NavigationContext = /*#__PURE__*/React3__namespace.createContext(null);
	NavigationContext.displayName = "Navigation";
	var LocationContext = /*#__PURE__*/React3__namespace.createContext(null);
	LocationContext.displayName = "Location";
	var RouteContext = /*#__PURE__*/React3__namespace.createContext({
	  outlet: null,
	  matches: [],
	  isDataRoute: false
	});
	RouteContext.displayName = "Route";
	var RouteErrorContext = /*#__PURE__*/React3__namespace.createContext(null);
	RouteErrorContext.displayName = "RouteError";
	function useHref(to) {
	  var _ref40 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    relative = _ref40.relative;
	  invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
	  // router loaded. We can help them understand how to avoid that.
	  "useHref() may be used only in the context of a <Router> component.");
	  var _React2$useContext = React3__namespace.useContext(NavigationContext),
	    basename = _React2$useContext.basename,
	    navigator = _React2$useContext.navigator;
	  var _useResolvedPath = useResolvedPath(to, {
	      relative: relative
	    }),
	    hash = _useResolvedPath.hash,
	    pathname = _useResolvedPath.pathname,
	    search = _useResolvedPath.search;
	  var joinedPathname = pathname;
	  if (basename !== "/") {
	    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
	  }
	  return navigator.createHref({
	    pathname: joinedPathname,
	    search: search,
	    hash: hash
	  });
	}
	function useInRouterContext() {
	  return React3__namespace.useContext(LocationContext) != null;
	}
	function useLocation() {
	  invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
	  // router loaded. We can help them understand how to avoid that.
	  "useLocation() may be used only in the context of a <Router> component.");
	  return React3__namespace.useContext(LocationContext).location;
	}
	function useNavigationType() {
	  return React3__namespace.useContext(LocationContext).navigationType;
	}
	function useMatch(pattern) {
	  invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
	  // router loaded. We can help them understand how to avoid that.
	  "useMatch() may be used only in the context of a <Router> component.");
	  var _useLocation = useLocation(),
	    pathname = _useLocation.pathname;
	  return React3__namespace.useMemo(function () {
	    return matchPath(pattern, decodePath(pathname));
	  }, [pathname, pattern]);
	}
	var navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
	function useIsomorphicLayoutEffect(cb) {
	  var isStatic = React3__namespace.useContext(NavigationContext)["static"];
	  if (!isStatic) {
	    React3__namespace.useLayoutEffect(cb);
	  }
	}
	function useNavigate() {
	  var _React2$useContext2 = React3__namespace.useContext(RouteContext),
	    isDataRoute = _React2$useContext2.isDataRoute;
	  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
	}
	function useNavigateUnstable() {
	  invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
	  // router loaded. We can help them understand how to avoid that.
	  "useNavigate() may be used only in the context of a <Router> component.");
	  var dataRouterContext = React3__namespace.useContext(DataRouterContext);
	  var _React2$useContext3 = React3__namespace.useContext(NavigationContext),
	    basename = _React2$useContext3.basename,
	    navigator = _React2$useContext3.navigator;
	  var _React2$useContext4 = React3__namespace.useContext(RouteContext),
	    matches = _React2$useContext4.matches;
	  var _useLocation2 = useLocation(),
	    locationPathname = _useLocation2.pathname;
	  var routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
	  var activeRef = React3__namespace.useRef(false);
	  useIsomorphicLayoutEffect(function () {
	    activeRef.current = true;
	  });
	  var navigate = React3__namespace.useCallback(function (to) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    warning(activeRef.current, navigateEffectWarning);
	    if (!activeRef.current) return;
	    if (typeof to === "number") {
	      navigator.go(to);
	      return;
	    }
	    var path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
	    if (dataRouterContext == null && basename !== "/") {
	      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
	    }
	    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
	  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
	  return navigate;
	}
	var OutletContext = /*#__PURE__*/React3__namespace.createContext(null);
	function useOutletContext() {
	  return React3__namespace.useContext(OutletContext);
	}
	function useOutlet(context) {
	  var outlet = React3__namespace.useContext(RouteContext).outlet;
	  if (outlet) {
	    return /* @__PURE__ */React3__namespace.createElement(OutletContext.Provider, {
	      value: context
	    }, outlet);
	  }
	  return outlet;
	}
	function useParams() {
	  var _React2$useContext5 = React3__namespace.useContext(RouteContext),
	    matches = _React2$useContext5.matches;
	  var routeMatch = matches[matches.length - 1];
	  return routeMatch ? routeMatch.params : {};
	}
	function useResolvedPath(to) {
	  var _ref41 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    relative = _ref41.relative;
	  var _React2$useContext6 = React3__namespace.useContext(RouteContext),
	    matches = _React2$useContext6.matches;
	  var _useLocation3 = useLocation(),
	    locationPathname = _useLocation3.pathname;
	  var routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
	  return React3__namespace.useMemo(function () {
	    return resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path");
	  }, [to, routePathnamesJson, locationPathname, relative]);
	}
	function useRoutes(routes, locationArg) {
	  return useRoutesImpl(routes, locationArg);
	}
	function useRoutesImpl(routes, locationArg, dataRouterState, unstable_onError, future) {
	  invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of the
	  // router loaded. We can help them understand how to avoid that.
	  "useRoutes() may be used only in the context of a <Router> component.");
	  var _React2$useContext7 = React3__namespace.useContext(NavigationContext),
	    navigator = _React2$useContext7.navigator;
	  var _React2$useContext8 = React3__namespace.useContext(RouteContext),
	    parentMatches = _React2$useContext8.matches;
	  var routeMatch = parentMatches[parentMatches.length - 1];
	  var parentParams = routeMatch ? routeMatch.params : {};
	  var parentPathname = routeMatch ? routeMatch.pathname : "/";
	  var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	  var parentRoute = routeMatch && routeMatch.route;
	  {
	    var parentPath = parentRoute && parentRoute.path || "";
	    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"), "You rendered descendant <Routes> (or called `useRoutes()`) at \"".concat(parentPathname, "\" (under <Route path=\"").concat(parentPath, "\">) but the parent route path has no trailing \"*\". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path=\"").concat(parentPath, "\"> to <Route path=\"").concat(parentPath === "/" ? "*" : "".concat(parentPath, "/*"), "\">."));
	  }
	  var locationFromContext = useLocation();
	  var location;
	  if (locationArg) {
	    var _parsedLocationArg$pa;
	    var parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	    invariant(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) === null || _parsedLocationArg$pa === void 0 ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase)), "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is \"".concat(parentPathnameBase, "\" but pathname \"").concat(parsedLocationArg.pathname, "\" was given in the `location` prop."));
	    location = parsedLocationArg;
	  } else {
	    location = locationFromContext;
	  }
	  var pathname = location.pathname || "/";
	  var remainingPathname = pathname;
	  if (parentPathnameBase !== "/") {
	    var parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
	    var segments = pathname.replace(/^\//, "").split("/");
	    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
	  }
	  var matches = matchRoutes(routes, {
	    pathname: remainingPathname
	  });
	  {
	    warning(parentRoute || matches != null, "No routes matched location \"".concat(location.pathname).concat(location.search).concat(location.hash, "\" "));
	    warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, "Matched leaf route at location \"".concat(location.pathname).concat(location.search).concat(location.hash, "\" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page."));
	  }
	  var renderedMatches = _renderMatches(matches && matches.map(function (match) {
	    return Object.assign({}, match, {
	      params: Object.assign({}, parentParams, match.params),
	      pathname: joinPaths([parentPathnameBase,
	      // Re-encode pathnames that were decoded inside matchRoutes
	      navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
	      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase,
	      // Re-encode pathnames that were decoded inside matchRoutes
	      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
	    });
	  }), parentMatches, dataRouterState, unstable_onError, future);
	  if (locationArg && renderedMatches) {
	    return /* @__PURE__ */React3__namespace.createElement(LocationContext.Provider, {
	      value: {
	        location: _objectSpread2({
	          pathname: "/",
	          search: "",
	          hash: "",
	          state: null,
	          key: "default"
	        }, location),
	        navigationType: "POP" /* Pop */
	      }
	    }, renderedMatches);
	  }
	  return renderedMatches;
	}
	function DefaultErrorComponent() {
	  var error = useRouteError();
	  var message = isRouteErrorResponse(error) ? "".concat(error.status, " ").concat(error.statusText) : error instanceof Error ? error.message : JSON.stringify(error);
	  var stack = error instanceof Error ? error.stack : null;
	  var lightgrey = "rgba(200,200,200, 0.5)";
	  var preStyles = {
	    padding: "0.5rem",
	    backgroundColor: lightgrey
	  };
	  var codeStyles = {
	    padding: "2px 4px",
	    backgroundColor: lightgrey
	  };
	  var devInfo = null;
	  {
	    console.error("Error handled by React Router default ErrorBoundary:", error);
	    devInfo = /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /* @__PURE__ */React3__namespace.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */React3__namespace.createElement("code", {
	      style: codeStyles
	    }, "ErrorBoundary"), " or", " ", /* @__PURE__ */React3__namespace.createElement("code", {
	      style: codeStyles
	    }, "errorElement"), " prop on your route."));
	  }
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */React3__namespace.createElement("h3", {
	    style: {
	      fontStyle: "italic"
	    }
	  }, message), stack ? /* @__PURE__ */React3__namespace.createElement("pre", {
	    style: preStyles
	  }, stack) : null, devInfo);
	}
	var defaultErrorElement = /* @__PURE__ */React3__namespace.createElement(DefaultErrorComponent, null);
	var RenderErrorBoundary = /*#__PURE__*/function (_React2$Component) {
	  function RenderErrorBoundary(props) {
	    var _this;
	    _classCallCheck(this, RenderErrorBoundary);
	    _this = _callSuper(this, RenderErrorBoundary, [props]);
	    _this.state = {
	      location: props.location,
	      revalidation: props.revalidation,
	      error: props.error
	    };
	    return _this;
	  }
	  _inherits(RenderErrorBoundary, _React2$Component);
	  return _createClass(RenderErrorBoundary, [{
	    key: "componentDidCatch",
	    value: function componentDidCatch(error, errorInfo) {
	      if (this.props.unstable_onError) {
	        this.props.unstable_onError(error, errorInfo);
	      } else {
	        console.error("React Router caught the following error during render", error);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return this.state.error !== void 0 ? /* @__PURE__ */React3__namespace.createElement(RouteContext.Provider, {
	        value: this.props.routeContext
	      }, /* @__PURE__ */React3__namespace.createElement(RouteErrorContext.Provider, {
	        value: this.state.error,
	        children: this.props.component
	      })) : this.props.children;
	    }
	  }], [{
	    key: "getDerivedStateFromError",
	    value: function getDerivedStateFromError(error) {
	      return {
	        error: error
	      };
	    }
	  }, {
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(props, state) {
	      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
	        return {
	          error: props.error,
	          location: props.location,
	          revalidation: props.revalidation
	        };
	      }
	      return {
	        error: props.error !== void 0 ? props.error : state.error,
	        location: state.location,
	        revalidation: props.revalidation || state.revalidation
	      };
	    }
	  }]);
	}(React3__namespace.Component);
	function RenderedRoute(_ref42) {
	  var routeContext = _ref42.routeContext,
	    match = _ref42.match,
	    children = _ref42.children;
	  var dataRouterContext = React3__namespace.useContext(DataRouterContext);
	  if (dataRouterContext && dataRouterContext["static"] && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
	    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
	  }
	  return /* @__PURE__ */React3__namespace.createElement(RouteContext.Provider, {
	    value: routeContext
	  }, children);
	}
	function _renderMatches(matches) {
	  var parentMatches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var dataRouterState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var unstable_onError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	  if (matches == null) {
	    if (!dataRouterState) {
	      return null;
	    }
	    if (dataRouterState.errors) {
	      matches = dataRouterState.matches;
	    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
	      matches = dataRouterState.matches;
	    } else {
	      return null;
	    }
	  }
	  var renderedMatches = matches;
	  var errors = dataRouterState === null || dataRouterState === void 0 ? void 0 : dataRouterState.errors;
	  if (errors != null) {
	    var errorIndex = renderedMatches.findIndex(function (m) {
	      return m.route.id && (errors === null || errors === void 0 ? void 0 : errors[m.route.id]) !== void 0;
	    });
	    invariant(errorIndex >= 0, "Could not find a matching route for errors on route IDs: ".concat(Object.keys(errors).join(",")));
	    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
	  }
	  var renderFallback = false;
	  var fallbackIndex = -1;
	  if (dataRouterState) {
	    for (var i = 0; i < renderedMatches.length; i++) {
	      var match = renderedMatches[i];
	      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
	        fallbackIndex = i;
	      }
	      if (match.route.id) {
	        var loaderData = dataRouterState.loaderData,
	          errors2 = dataRouterState.errors;
	        var needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
	        if (match.route.lazy || needsToRunLoader) {
	          renderFallback = true;
	          if (fallbackIndex >= 0) {
	            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
	          } else {
	            renderedMatches = [renderedMatches[0]];
	          }
	          break;
	        }
	      }
	    }
	  }
	  return renderedMatches.reduceRight(function (outlet, match, index) {
	    var error;
	    var shouldRenderHydrateFallback = false;
	    var errorElement = null;
	    var hydrateFallbackElement = null;
	    if (dataRouterState) {
	      error = errors && match.route.id ? errors[match.route.id] : void 0;
	      errorElement = match.route.errorElement || defaultErrorElement;
	      if (renderFallback) {
	        if (fallbackIndex < 0 && index === 0) {
	          warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
	          shouldRenderHydrateFallback = true;
	          hydrateFallbackElement = null;
	        } else if (fallbackIndex === index) {
	          shouldRenderHydrateFallback = true;
	          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
	        }
	      }
	    }
	    var matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
	    var getChildren = function getChildren() {
	      var children;
	      if (error) {
	        children = errorElement;
	      } else if (shouldRenderHydrateFallback) {
	        children = hydrateFallbackElement;
	      } else if (match.route.Component) {
	        children = /* @__PURE__ */React3__namespace.createElement(match.route.Component, null);
	      } else if (match.route.element) {
	        children = match.route.element;
	      } else {
	        children = outlet;
	      }
	      return /* @__PURE__ */React3__namespace.createElement(RenderedRoute, {
	        match: match,
	        routeContext: {
	          outlet: outlet,
	          matches: matches2,
	          isDataRoute: dataRouterState != null
	        },
	        children: children
	      });
	    };
	    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */React3__namespace.createElement(RenderErrorBoundary, {
	      location: dataRouterState.location,
	      revalidation: dataRouterState.revalidation,
	      component: errorElement,
	      error: error,
	      children: getChildren(),
	      routeContext: {
	        outlet: null,
	        matches: matches2,
	        isDataRoute: true
	      },
	      unstable_onError: unstable_onError
	    }) : getChildren();
	  }, null);
	}
	function getDataRouterConsoleError(hookName) {
	  return "".concat(hookName, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.");
	}
	function useDataRouterContext(hookName) {
	  var ctx = React3__namespace.useContext(DataRouterContext);
	  invariant(ctx, getDataRouterConsoleError(hookName));
	  return ctx;
	}
	function useDataRouterState(hookName) {
	  var state = React3__namespace.useContext(DataRouterStateContext);
	  invariant(state, getDataRouterConsoleError(hookName));
	  return state;
	}
	function useRouteContext(hookName) {
	  var route = React3__namespace.useContext(RouteContext);
	  invariant(route, getDataRouterConsoleError(hookName));
	  return route;
	}
	function useCurrentRouteId(hookName) {
	  var route = useRouteContext(hookName);
	  var thisRoute = route.matches[route.matches.length - 1];
	  invariant(thisRoute.route.id, "".concat(hookName, " can only be used on routes that contain a unique \"id\""));
	  return thisRoute.route.id;
	}
	function useRouteId() {
	  return useCurrentRouteId("useRouteId" /* UseRouteId */);
	}
	function useNavigation() {
	  var state = useDataRouterState("useNavigation" /* UseNavigation */);
	  return state.navigation;
	}
	function useRevalidator() {
	  var dataRouterContext = useDataRouterContext("useRevalidator" /* UseRevalidator */);
	  var state = useDataRouterState("useRevalidator" /* UseRevalidator */);
	  var revalidate = React3__namespace.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
	    return _regenerator().w(function (_context28) {
	      while (1) switch (_context28.n) {
	        case 0:
	          _context28.n = 1;
	          return dataRouterContext.router.revalidate();
	        case 1:
	          return _context28.a(2);
	      }
	    }, _callee27);
	  })), [dataRouterContext.router]);
	  return React3__namespace.useMemo(function () {
	    return {
	      revalidate: revalidate,
	      state: state.revalidation
	    };
	  }, [revalidate, state.revalidation]);
	}
	function useMatches() {
	  var _useDataRouterState = useDataRouterState("useMatches" /* UseMatches */),
	    matches = _useDataRouterState.matches,
	    loaderData = _useDataRouterState.loaderData;
	  return React3__namespace.useMemo(function () {
	    return matches.map(function (m) {
	      return convertRouteMatchToUiMatch(m, loaderData);
	    });
	  }, [matches, loaderData]);
	}
	function useLoaderData() {
	  var state = useDataRouterState("useLoaderData" /* UseLoaderData */);
	  var routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */);
	  return state.loaderData[routeId];
	}
	function useRouteLoaderData(routeId) {
	  var state = useDataRouterState("useRouteLoaderData" /* UseRouteLoaderData */);
	  return state.loaderData[routeId];
	}
	function useActionData() {
	  var state = useDataRouterState("useActionData" /* UseActionData */);
	  var routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */);
	  return state.actionData ? state.actionData[routeId] : void 0;
	}
	function useRouteError() {
	  var _state$errors;
	  var error = React3__namespace.useContext(RouteErrorContext);
	  var state = useDataRouterState("useRouteError" /* UseRouteError */);
	  var routeId = useCurrentRouteId("useRouteError" /* UseRouteError */);
	  if (error !== void 0) {
	    return error;
	  }
	  return (_state$errors = state.errors) === null || _state$errors === void 0 ? void 0 : _state$errors[routeId];
	}
	function useAsyncValue() {
	  var value = React3__namespace.useContext(AwaitContext);
	  return value === null || value === void 0 ? void 0 : value._data;
	}
	function useAsyncError() {
	  var value = React3__namespace.useContext(AwaitContext);
	  return value === null || value === void 0 ? void 0 : value._error;
	}
	var blockerId = 0;
	function useBlocker(shouldBlock) {
	  var _useDataRouterContext = useDataRouterContext("useBlocker" /* UseBlocker */),
	    router = _useDataRouterContext.router,
	    basename = _useDataRouterContext.basename;
	  var state = useDataRouterState("useBlocker" /* UseBlocker */);
	  var _React2$useState = React3__namespace.useState(""),
	    _React2$useState2 = _slicedToArray(_React2$useState, 2),
	    blockerKey = _React2$useState2[0],
	    setBlockerKey = _React2$useState2[1];
	  var blockerFunction = React3__namespace.useCallback(function (arg) {
	    if (typeof shouldBlock !== "function") {
	      return !!shouldBlock;
	    }
	    if (basename === "/") {
	      return shouldBlock(arg);
	    }
	    var currentLocation = arg.currentLocation,
	      nextLocation = arg.nextLocation,
	      historyAction = arg.historyAction;
	    return shouldBlock({
	      currentLocation: _objectSpread2(_objectSpread2({}, currentLocation), {}, {
	        pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
	      }),
	      nextLocation: _objectSpread2(_objectSpread2({}, nextLocation), {}, {
	        pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
	      }),
	      historyAction: historyAction
	    });
	  }, [basename, shouldBlock]);
	  React3__namespace.useEffect(function () {
	    var key = String(++blockerId);
	    setBlockerKey(key);
	    return function () {
	      return router.deleteBlocker(key);
	    };
	  }, [router]);
	  React3__namespace.useEffect(function () {
	    if (blockerKey !== "") {
	      router.getBlocker(blockerKey, blockerFunction);
	    }
	  }, [router, blockerKey, blockerFunction]);
	  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
	}
	function useNavigateStable() {
	  var _useDataRouterContext2 = useDataRouterContext("useNavigate" /* UseNavigateStable */),
	    router = _useDataRouterContext2.router;
	  var id = useCurrentRouteId("useNavigate" /* UseNavigateStable */);
	  var activeRef = React3__namespace.useRef(false);
	  useIsomorphicLayoutEffect(function () {
	    activeRef.current = true;
	  });
	  var navigate = React3__namespace.useCallback(/*#__PURE__*/function () {
	    var _ref44 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(to) {
	      var options,
	        _args29 = arguments;
	      return _regenerator().w(function (_context29) {
	        while (1) switch (_context29.n) {
	          case 0:
	            options = _args29.length > 1 && _args29[1] !== undefined ? _args29[1] : {};
	            warning(activeRef.current, navigateEffectWarning);
	            if (activeRef.current) {
	              _context29.n = 1;
	              break;
	            }
	            return _context29.a(2);
	          case 1:
	            if (!(typeof to === "number")) {
	              _context29.n = 2;
	              break;
	            }
	            router.navigate(to);
	            _context29.n = 3;
	            break;
	          case 2:
	            _context29.n = 3;
	            return router.navigate(to, _objectSpread2({
	              fromRouteId: id
	            }, options));
	          case 3:
	            return _context29.a(2);
	        }
	      }, _callee28);
	    }));
	    return function (_x123) {
	      return _ref44.apply(this, arguments);
	    };
	  }(), [router, id]);
	  return navigate;
	}
	var alreadyWarned = {};
	function warningOnce(key, cond, message) {
	  if (!cond && !alreadyWarned[key]) {
	    alreadyWarned[key] = true;
	    warning(false, message);
	  }
	}

	// lib/server-runtime/warnings.ts
	var alreadyWarned2 = {};
	function warnOnce(condition, message) {
	  if (!condition && !alreadyWarned2[message]) {
	    alreadyWarned2[message] = true;
	    console.warn(message);
	  }
	}

	// lib/components.tsx
	function mapRouteProperties(route) {
	  var updates = {
	    // Note: this check also occurs in createRoutesFromChildren so update
	    // there if you change this -- please and thank you!
	    hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
	  };
	  if (route.Component) {
	    {
	      if (route.element) {
	        warning(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
	      }
	    }
	    Object.assign(updates, {
	      element: /*#__PURE__*/React3__namespace.createElement(route.Component),
	      Component: void 0
	    });
	  }
	  if (route.HydrateFallback) {
	    {
	      if (route.hydrateFallbackElement) {
	        warning(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
	      }
	    }
	    Object.assign(updates, {
	      hydrateFallbackElement: /*#__PURE__*/React3__namespace.createElement(route.HydrateFallback),
	      HydrateFallback: void 0
	    });
	  }
	  if (route.ErrorBoundary) {
	    {
	      if (route.errorElement) {
	        warning(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
	      }
	    }
	    Object.assign(updates, {
	      errorElement: /*#__PURE__*/React3__namespace.createElement(route.ErrorBoundary),
	      ErrorBoundary: void 0
	    });
	  }
	  return updates;
	}
	var hydrationRouteProperties = ["HydrateFallback", "hydrateFallbackElement"];
	function createMemoryRouter(routes, opts) {
	  return createRouter({
	    basename: opts === null || opts === void 0 ? void 0 : opts.basename,
	    getContext: opts === null || opts === void 0 ? void 0 : opts.getContext,
	    future: opts === null || opts === void 0 ? void 0 : opts.future,
	    history: createMemoryHistory({
	      initialEntries: opts === null || opts === void 0 ? void 0 : opts.initialEntries,
	      initialIndex: opts === null || opts === void 0 ? void 0 : opts.initialIndex
	    }),
	    hydrationData: opts === null || opts === void 0 ? void 0 : opts.hydrationData,
	    routes: routes,
	    hydrationRouteProperties: hydrationRouteProperties,
	    mapRouteProperties: mapRouteProperties,
	    dataStrategy: opts === null || opts === void 0 ? void 0 : opts.dataStrategy,
	    patchRoutesOnNavigation: opts === null || opts === void 0 ? void 0 : opts.patchRoutesOnNavigation
	  }).initialize();
	}
	var Deferred = /*#__PURE__*/_createClass(function Deferred() {
	  var _this2 = this;
	  _classCallCheck(this, Deferred);
	  this.status = "pending";
	  this.promise = new Promise(function (resolve, reject) {
	    _this2.resolve = function (value) {
	      if (_this2.status === "pending") {
	        _this2.status = "resolved";
	        resolve(value);
	      }
	    };
	    _this2.reject = function (reason) {
	      if (_this2.status === "pending") {
	        _this2.status = "rejected";
	        reject(reason);
	      }
	    };
	  });
	});
	function RouterProvider(_ref45) {
	  var router = _ref45.router,
	    reactDomFlushSyncImpl = _ref45.flushSync,
	    unstable_onError = _ref45.unstable_onError;
	  var _React3$useState = React3__namespace.useState(router.state),
	    _React3$useState2 = _slicedToArray(_React3$useState, 2),
	    state = _React3$useState2[0],
	    setStateImpl = _React3$useState2[1];
	  var _React3$useState3 = React3__namespace.useState(),
	    _React3$useState4 = _slicedToArray(_React3$useState3, 2),
	    pendingState = _React3$useState4[0],
	    setPendingState = _React3$useState4[1];
	  var _React3$useState5 = React3__namespace.useState({
	      isTransitioning: false
	    }),
	    _React3$useState6 = _slicedToArray(_React3$useState5, 2),
	    vtContext = _React3$useState6[0],
	    setVtContext = _React3$useState6[1];
	  var _React3$useState7 = React3__namespace.useState(),
	    _React3$useState8 = _slicedToArray(_React3$useState7, 2),
	    renderDfd = _React3$useState8[0],
	    setRenderDfd = _React3$useState8[1];
	  var _React3$useState9 = React3__namespace.useState(),
	    _React3$useState0 = _slicedToArray(_React3$useState9, 2),
	    transition = _React3$useState0[0],
	    setTransition = _React3$useState0[1];
	  var _React3$useState1 = React3__namespace.useState(),
	    _React3$useState10 = _slicedToArray(_React3$useState1, 2),
	    interruption = _React3$useState10[0],
	    setInterruption = _React3$useState10[1];
	  var fetcherData = React3__namespace.useRef(/* @__PURE__ */new Map());
	  var logErrorsAndSetState = React3__namespace.useCallback(function (newState) {
	    setStateImpl(function (prevState) {
	      if (newState.errors && unstable_onError) {
	        Object.entries(newState.errors).forEach(function (_ref46) {
	          var _prevState$errors;
	          var _ref47 = _slicedToArray(_ref46, 2),
	            routeId = _ref47[0],
	            error = _ref47[1];
	          if (((_prevState$errors = prevState.errors) === null || _prevState$errors === void 0 ? void 0 : _prevState$errors[routeId]) !== error) {
	            unstable_onError(error);
	          }
	        });
	      }
	      return newState;
	    });
	  }, [unstable_onError]);
	  var setState = React3__namespace.useCallback(function (newState, _ref48) {
	    var deletedFetchers = _ref48.deletedFetchers,
	      flushSync = _ref48.flushSync,
	      viewTransitionOpts = _ref48.viewTransitionOpts;
	    newState.fetchers.forEach(function (fetcher, key) {
	      if (fetcher.data !== void 0) {
	        fetcherData.current.set(key, fetcher.data);
	      }
	    });
	    deletedFetchers.forEach(function (key) {
	      return fetcherData.current["delete"](key);
	    });
	    warnOnce(flushSync === false || reactDomFlushSyncImpl != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
	    var isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
	    warnOnce(viewTransitionOpts == null || isViewTransitionAvailable, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
	    if (!viewTransitionOpts || !isViewTransitionAvailable) {
	      if (reactDomFlushSyncImpl && flushSync) {
	        reactDomFlushSyncImpl(function () {
	          return logErrorsAndSetState(newState);
	        });
	      } else {
	        React3__namespace.startTransition(function () {
	          return logErrorsAndSetState(newState);
	        });
	      }
	      return;
	    }
	    if (reactDomFlushSyncImpl && flushSync) {
	      reactDomFlushSyncImpl(function () {
	        if (transition) {
	          renderDfd && renderDfd.resolve();
	          transition.skipTransition();
	        }
	        setVtContext({
	          isTransitioning: true,
	          flushSync: true,
	          currentLocation: viewTransitionOpts.currentLocation,
	          nextLocation: viewTransitionOpts.nextLocation
	        });
	      });
	      var t = router.window.document.startViewTransition(function () {
	        reactDomFlushSyncImpl(function () {
	          return logErrorsAndSetState(newState);
	        });
	      });
	      t.finished["finally"](function () {
	        reactDomFlushSyncImpl(function () {
	          setRenderDfd(void 0);
	          setTransition(void 0);
	          setPendingState(void 0);
	          setVtContext({
	            isTransitioning: false
	          });
	        });
	      });
	      reactDomFlushSyncImpl(function () {
	        return setTransition(t);
	      });
	      return;
	    }
	    if (transition) {
	      renderDfd && renderDfd.resolve();
	      transition.skipTransition();
	      setInterruption({
	        state: newState,
	        currentLocation: viewTransitionOpts.currentLocation,
	        nextLocation: viewTransitionOpts.nextLocation
	      });
	    } else {
	      setPendingState(newState);
	      setVtContext({
	        isTransitioning: true,
	        flushSync: false,
	        currentLocation: viewTransitionOpts.currentLocation,
	        nextLocation: viewTransitionOpts.nextLocation
	      });
	    }
	  }, [router.window, reactDomFlushSyncImpl, transition, renderDfd, logErrorsAndSetState]);
	  React3__namespace.useLayoutEffect(function () {
	    return router.subscribe(setState);
	  }, [router, setState]);
	  React3__namespace.useEffect(function () {
	    if (vtContext.isTransitioning && !vtContext.flushSync) {
	      setRenderDfd(new Deferred());
	    }
	  }, [vtContext]);
	  React3__namespace.useEffect(function () {
	    if (renderDfd && pendingState && router.window) {
	      var newState = pendingState;
	      var renderPromise = renderDfd.promise;
	      var transition2 = router.window.document.startViewTransition(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29() {
	        return _regenerator().w(function (_context30) {
	          while (1) switch (_context30.n) {
	            case 0:
	              React3__namespace.startTransition(function () {
	                return logErrorsAndSetState(newState);
	              });
	              _context30.n = 1;
	              return renderPromise;
	            case 1:
	              return _context30.a(2);
	          }
	        }, _callee29);
	      })));
	      transition2.finished["finally"](function () {
	        setRenderDfd(void 0);
	        setTransition(void 0);
	        setPendingState(void 0);
	        setVtContext({
	          isTransitioning: false
	        });
	      });
	      setTransition(transition2);
	    }
	  }, [pendingState, renderDfd, router.window, logErrorsAndSetState]);
	  React3__namespace.useEffect(function () {
	    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
	      renderDfd.resolve();
	    }
	  }, [renderDfd, transition, state.location, pendingState]);
	  React3__namespace.useEffect(function () {
	    if (!vtContext.isTransitioning && interruption) {
	      setPendingState(interruption.state);
	      setVtContext({
	        isTransitioning: true,
	        flushSync: false,
	        currentLocation: interruption.currentLocation,
	        nextLocation: interruption.nextLocation
	      });
	      setInterruption(void 0);
	    }
	  }, [vtContext.isTransitioning, interruption]);
	  var navigator = React3__namespace.useMemo(function () {
	    return {
	      createHref: router.createHref,
	      encodeLocation: router.encodeLocation,
	      go: function go(n) {
	        return router.navigate(n);
	      },
	      push: function push(to, state2, opts) {
	        return router.navigate(to, {
	          state: state2,
	          preventScrollReset: opts === null || opts === void 0 ? void 0 : opts.preventScrollReset
	        });
	      },
	      replace: function replace(to, state2, opts) {
	        return router.navigate(to, {
	          replace: true,
	          state: state2,
	          preventScrollReset: opts === null || opts === void 0 ? void 0 : opts.preventScrollReset
	        });
	      }
	    };
	  }, [router]);
	  var basename = router.basename || "/";
	  var dataRouterContext = React3__namespace.useMemo(function () {
	    return {
	      router: router,
	      navigator: navigator,
	      "static": false,
	      basename: basename,
	      unstable_onError: unstable_onError
	    };
	  }, [router, navigator, basename, unstable_onError]);
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement(DataRouterContext.Provider, {
	    value: dataRouterContext
	  }, /* @__PURE__ */React3__namespace.createElement(DataRouterStateContext.Provider, {
	    value: state
	  }, /* @__PURE__ */React3__namespace.createElement(FetchersContext.Provider, {
	    value: fetcherData.current
	  }, /* @__PURE__ */React3__namespace.createElement(ViewTransitionContext.Provider, {
	    value: vtContext
	  }, /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: basename,
	    location: state.location,
	    navigationType: state.historyAction,
	    navigator: navigator
	  }, /* @__PURE__ */React3__namespace.createElement(MemoizedDataRoutes, {
	    routes: router.routes,
	    future: router.future,
	    state: state,
	    unstable_onError: unstable_onError
	  })))))), null);
	}
	var MemoizedDataRoutes = /*#__PURE__*/React3__namespace.memo(DataRoutes);
	function DataRoutes(_ref50) {
	  var routes = _ref50.routes,
	    future = _ref50.future,
	    state = _ref50.state,
	    unstable_onError = _ref50.unstable_onError;
	  return useRoutesImpl(routes, void 0, state, unstable_onError, future);
	}
	function MemoryRouter(_ref51) {
	  var basename = _ref51.basename,
	    children = _ref51.children,
	    initialEntries = _ref51.initialEntries,
	    initialIndex = _ref51.initialIndex;
	  var historyRef = React3__namespace.useRef();
	  if (historyRef.current == null) {
	    historyRef.current = createMemoryHistory({
	      initialEntries: initialEntries,
	      initialIndex: initialIndex,
	      v5Compat: true
	    });
	  }
	  var history = historyRef.current;
	  var _React3$useState11 = React3__namespace.useState({
	      action: history.action,
	      location: history.location
	    }),
	    _React3$useState12 = _slicedToArray(_React3$useState11, 2),
	    state = _React3$useState12[0],
	    setStateImpl = _React3$useState12[1];
	  var setState = React3__namespace.useCallback(function (newState) {
	    React3__namespace.startTransition(function () {
	      return setStateImpl(newState);
	    });
	  }, [setStateImpl]);
	  React3__namespace.useLayoutEffect(function () {
	    return history.listen(setState);
	  }, [history, setState]);
	  return /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}
	function Navigate(_ref52) {
	  var to = _ref52.to,
	    replace2 = _ref52.replace,
	    state = _ref52.state,
	    relative = _ref52.relative;
	  invariant(useInRouterContext(), // TODO: This error is probably because they somehow have 2 versions of
	  // the router loaded. We can help them understand how to avoid that.
	  "<Navigate> may be used only in the context of a <Router> component.");
	  var _React3$useContext = React3__namespace.useContext(NavigationContext),
	    isStatic = _React3$useContext["static"];
	  warning(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	  var _React3$useContext2 = React3__namespace.useContext(RouteContext),
	    matches = _React3$useContext2.matches;
	  var _useLocation4 = useLocation(),
	    locationPathname = _useLocation4.pathname;
	  var navigate = useNavigate();
	  var path = resolveTo(to, getResolveToMatches(matches), locationPathname, relative === "path");
	  var jsonPath = JSON.stringify(path);
	  React3__namespace.useEffect(function () {
	    navigate(JSON.parse(jsonPath), {
	      replace: replace2,
	      state: state,
	      relative: relative
	    });
	  }, [navigate, jsonPath, relative, replace2, state]);
	  return null;
	}
	function Outlet(props) {
	  return useOutlet(props.context);
	}
	function Route(props) {
	  invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
	}
	function Router(_ref53) {
	  var _ref53$basename = _ref53.basename,
	    basenameProp = _ref53$basename === void 0 ? "/" : _ref53$basename,
	    _ref53$children = _ref53.children,
	    children = _ref53$children === void 0 ? null : _ref53$children,
	    locationProp = _ref53.location,
	    _ref53$navigationType = _ref53.navigationType,
	    navigationType = _ref53$navigationType === void 0 ? "POP" : _ref53$navigationType,
	    navigator = _ref53.navigator,
	    _ref53$static = _ref53["static"],
	    staticProp = _ref53$static === void 0 ? false : _ref53$static;
	  invariant(!useInRouterContext(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	  var basename = basenameProp.replace(/^\/*/, "/");
	  var navigationContext = React3__namespace.useMemo(function () {
	    return {
	      basename: basename,
	      navigator: navigator,
	      "static": staticProp,
	      future: {}
	    };
	  }, [basename, navigator, staticProp]);
	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }
	  var _locationProp = locationProp,
	    _locationProp$pathnam = _locationProp.pathname,
	    pathname = _locationProp$pathnam === void 0 ? "/" : _locationProp$pathnam,
	    _locationProp$search = _locationProp.search,
	    search = _locationProp$search === void 0 ? "" : _locationProp$search,
	    _locationProp$hash = _locationProp.hash,
	    hash = _locationProp$hash === void 0 ? "" : _locationProp$hash,
	    _locationProp$state = _locationProp.state,
	    state = _locationProp$state === void 0 ? null : _locationProp$state,
	    _locationProp$key = _locationProp.key,
	    key = _locationProp$key === void 0 ? "default" : _locationProp$key;
	  var locationContext = React3__namespace.useMemo(function () {
	    var trailingPathname = stripBasename(pathname, basename);
	    if (trailingPathname == null) {
	      return null;
	    }
	    return {
	      location: {
	        pathname: trailingPathname,
	        search: search,
	        hash: hash,
	        state: state,
	        key: key
	      },
	      navigationType: navigationType
	    };
	  }, [basename, pathname, search, hash, state, key, navigationType]);
	  warning(locationContext != null, "<Router basename=\"".concat(basename, "\"> is not able to match the URL \"").concat(pathname).concat(search).concat(hash, "\" because it does not start with the basename, so the <Router> won't render anything."));
	  if (locationContext == null) {
	    return null;
	  }
	  return /* @__PURE__ */React3__namespace.createElement(NavigationContext.Provider, {
	    value: navigationContext
	  }, /* @__PURE__ */React3__namespace.createElement(LocationContext.Provider, {
	    children: children,
	    value: locationContext
	  }));
	}
	function Routes(_ref54) {
	  var children = _ref54.children,
	    location = _ref54.location;
	  return useRoutes(createRoutesFromChildren(children), location);
	}
	function Await(_ref55) {
	  var children = _ref55.children,
	    errorElement = _ref55.errorElement,
	    resolve = _ref55.resolve;
	  var dataRouterContext = React3__namespace.useContext(DataRouterContext);
	  return /* @__PURE__ */React3__namespace.createElement(AwaitErrorBoundary, {
	    resolve: resolve,
	    errorElement: errorElement,
	    unstable_onError: dataRouterContext === null || dataRouterContext === void 0 ? void 0 : dataRouterContext.unstable_onError
	  }, /* @__PURE__ */React3__namespace.createElement(ResolveAwait, null, children));
	}
	var AwaitErrorBoundary = /*#__PURE__*/function (_React3$Component) {
	  function AwaitErrorBoundary(props) {
	    var _this3;
	    _classCallCheck(this, AwaitErrorBoundary);
	    _this3 = _callSuper(this, AwaitErrorBoundary, [props]);
	    _this3.state = {
	      error: null
	    };
	    return _this3;
	  }
	  _inherits(AwaitErrorBoundary, _React3$Component);
	  return _createClass(AwaitErrorBoundary, [{
	    key: "componentDidCatch",
	    value: function componentDidCatch(error, errorInfo) {
	      if (this.props.unstable_onError) {
	        this.props.unstable_onError(error, errorInfo);
	      } else {
	        console.error("<Await> caught the following error during render", error, errorInfo);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this4 = this;
	      var _this$props = this.props,
	        children = _this$props.children,
	        errorElement = _this$props.errorElement,
	        resolve = _this$props.resolve;
	      var promise = null;
	      var status = 0 /* pending */;
	      if (!(resolve instanceof Promise)) {
	        status = 1 /* success */;
	        promise = Promise.resolve();
	        Object.defineProperty(promise, "_tracked", {
	          get: function get() {
	            return true;
	          }
	        });
	        Object.defineProperty(promise, "_data", {
	          get: function get() {
	            return resolve;
	          }
	        });
	      } else if (this.state.error) {
	        status = 2 /* error */;
	        var renderError = this.state.error;
	        promise = Promise.reject()["catch"](function () {});
	        Object.defineProperty(promise, "_tracked", {
	          get: function get() {
	            return true;
	          }
	        });
	        Object.defineProperty(promise, "_error", {
	          get: function get() {
	            return renderError;
	          }
	        });
	      } else if (resolve._tracked) {
	        promise = resolve;
	        status = "_error" in promise ? 2 /* error */ : "_data" in promise ? 1 /* success */ : 0 /* pending */;
	      } else {
	        status = 0 /* pending */;
	        Object.defineProperty(resolve, "_tracked", {
	          get: function get() {
	            return true;
	          }
	        });
	        promise = resolve.then(function (data2) {
	          return Object.defineProperty(resolve, "_data", {
	            get: function get() {
	              return data2;
	            }
	          });
	        }, function (error) {
	          var _this4$props$unstable, _this4$props;
	          (_this4$props$unstable = (_this4$props = _this4.props).unstable_onError) === null || _this4$props$unstable === void 0 ? void 0 : _this4$props$unstable.call(_this4$props, error);
	          Object.defineProperty(resolve, "_error", {
	            get: function get() {
	              return error;
	            }
	          });
	        });
	      }
	      if (status === 2 /* error */ && !errorElement) {
	        throw promise._error;
	      }
	      if (status === 2 /* error */) {
	        return /* @__PURE__ */React3__namespace.createElement(AwaitContext.Provider, {
	          value: promise,
	          children: errorElement
	        });
	      }
	      if (status === 1 /* success */) {
	        return /* @__PURE__ */React3__namespace.createElement(AwaitContext.Provider, {
	          value: promise,
	          children: children
	        });
	      }
	      throw promise;
	    }
	  }], [{
	    key: "getDerivedStateFromError",
	    value: function getDerivedStateFromError(error) {
	      return {
	        error: error
	      };
	    }
	  }]);
	}(React3__namespace.Component);
	function ResolveAwait(_ref56) {
	  var children = _ref56.children;
	  var data2 = useAsyncValue();
	  var toRender = typeof children === "function" ? children(data2) : children;
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, toRender);
	}
	function createRoutesFromChildren(children) {
	  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var routes = [];
	  React3__namespace.Children.forEach(children, function (element, index) {
	    if (! /*#__PURE__*/React3__namespace.isValidElement(element)) {
	      return;
	    }
	    var treePath = [].concat(_toConsumableArray(parentPath), [index]);
	    if (element.type === React3__namespace.Fragment) {
	      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
	      return;
	    }
	    invariant(element.type === Route, "[".concat(typeof element.type === "string" ? element.type : element.type.name, "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"));
	    invariant(!element.props.index || !element.props.children, "An index route cannot have child routes.");
	    var route = {
	      id: element.props.id || treePath.join("-"),
	      caseSensitive: element.props.caseSensitive,
	      element: element.props.element,
	      Component: element.props.Component,
	      index: element.props.index,
	      path: element.props.path,
	      loader: element.props.loader,
	      action: element.props.action,
	      hydrateFallbackElement: element.props.hydrateFallbackElement,
	      HydrateFallback: element.props.HydrateFallback,
	      errorElement: element.props.errorElement,
	      ErrorBoundary: element.props.ErrorBoundary,
	      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
	      shouldRevalidate: element.props.shouldRevalidate,
	      handle: element.props.handle,
	      lazy: element.props.lazy
	    };
	    if (element.props.children) {
	      route.children = createRoutesFromChildren(element.props.children, treePath);
	    }
	    routes.push(route);
	  });
	  return routes;
	}
	var createRoutesFromElements = createRoutesFromChildren;
	function renderMatches(matches) {
	  return _renderMatches(matches);
	}
	function useRouteComponentProps() {
	  return {
	    params: useParams(),
	    loaderData: useLoaderData(),
	    actionData: useActionData(),
	    matches: useMatches()
	  };
	}
	function WithComponentProps(_ref57) {
	  var children = _ref57.children;
	  var props = useRouteComponentProps();
	  return /*#__PURE__*/React3__namespace.cloneElement(children, props);
	}
	function withComponentProps(Component4) {
	  return function WithComponentProps2() {
	    var props = useRouteComponentProps();
	    return /*#__PURE__*/React3__namespace.createElement(Component4, props);
	  };
	}
	function useHydrateFallbackProps() {
	  return {
	    params: useParams(),
	    loaderData: useLoaderData(),
	    actionData: useActionData()
	  };
	}
	function WithHydrateFallbackProps(_ref58) {
	  var children = _ref58.children;
	  var props = useHydrateFallbackProps();
	  return /*#__PURE__*/React3__namespace.cloneElement(children, props);
	}
	function withHydrateFallbackProps(HydrateFallback) {
	  return function WithHydrateFallbackProps2() {
	    var props = useHydrateFallbackProps();
	    return /*#__PURE__*/React3__namespace.createElement(HydrateFallback, props);
	  };
	}
	function useErrorBoundaryProps() {
	  return {
	    params: useParams(),
	    loaderData: useLoaderData(),
	    actionData: useActionData(),
	    error: useRouteError()
	  };
	}
	function WithErrorBoundaryProps(_ref59) {
	  var children = _ref59.children;
	  var props = useErrorBoundaryProps();
	  return /*#__PURE__*/React3__namespace.cloneElement(children, props);
	}
	function withErrorBoundaryProps(ErrorBoundary) {
	  return function WithErrorBoundaryProps2() {
	    var props = useErrorBoundaryProps();
	    return /*#__PURE__*/React3__namespace.createElement(ErrorBoundary, props);
	  };
	}

	// lib/dom/dom.ts
	var defaultMethod = "get";
	var defaultEncType = "application/x-www-form-urlencoded";
	function isHtmlElement(object) {
	  return object != null && typeof object.tagName === "string";
	}
	function isButtonElement(object) {
	  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
	}
	function isFormElement(object) {
	  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
	}
	function isInputElement(object) {
	  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
	}
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	function shouldProcessLinkClick(event, target) {
	  return event.button === 0 && (
	  // Ignore everything but left clicks
	  !target || target === "_self") &&
	  // Let browser handle "target=_blank" etc.
	  !isModifiedEvent(event);
	}
	function createSearchParams() {
	  var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce(function (memo2, key) {
	    var value = init[key];
	    return memo2.concat(Array.isArray(value) ? value.map(function (v) {
	      return [key, v];
	    }) : [[key, value]]);
	  }, []));
	}
	function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
	  var searchParams = createSearchParams(locationSearch);
	  if (defaultSearchParams) {
	    defaultSearchParams.forEach(function (_, key) {
	      if (!searchParams.has(key)) {
	        defaultSearchParams.getAll(key).forEach(function (value) {
	          searchParams.append(key, value);
	        });
	      }
	    });
	  }
	  return searchParams;
	}
	var _formDataSupportsSubmitter = null;
	function isFormDataSubmitterSupported() {
	  if (_formDataSupportsSubmitter === null) {
	    try {
	      new FormData(document.createElement("form"),
	      // @ts-expect-error if FormData supports the submitter parameter, this will throw
	      0);
	      _formDataSupportsSubmitter = false;
	    } catch (e) {
	      _formDataSupportsSubmitter = true;
	    }
	  }
	  return _formDataSupportsSubmitter;
	}
	var supportedFormEncTypes = /* @__PURE__ */new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
	function getFormEncType(encType) {
	  if (encType != null && !supportedFormEncTypes.has(encType)) {
	    warning(false, "\"".concat(encType, "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to \"").concat(defaultEncType, "\""));
	    return null;
	  }
	  return encType;
	}
	function getFormSubmissionInfo(target, basename) {
	  var method;
	  var action;
	  var encType;
	  var formData;
	  var body;
	  if (isFormElement(target)) {
	    var attr = target.getAttribute("action");
	    action = attr ? stripBasename(attr, basename) : null;
	    method = target.getAttribute("method") || defaultMethod;
	    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
	    formData = new FormData(target);
	  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
	    var form = target.form;
	    if (form == null) {
	      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
	    }
	    var _attr = target.getAttribute("formaction") || form.getAttribute("action");
	    action = _attr ? stripBasename(_attr, basename) : null;
	    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
	    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
	    formData = new FormData(form, target);
	    if (!isFormDataSubmitterSupported()) {
	      var name = target.name,
	        type = target.type,
	        value = target.value;
	      if (type === "image") {
	        var prefix = name ? "".concat(name, ".") : "";
	        formData.append("".concat(prefix, "x"), "0");
	        formData.append("".concat(prefix, "y"), "0");
	      } else if (name) {
	        formData.append(name, value);
	      }
	    }
	  } else if (isHtmlElement(target)) {
	    throw new Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	  } else {
	    method = defaultMethod;
	    action = null;
	    encType = defaultEncType;
	    body = target;
	  }
	  if (formData && encType === "text/plain") {
	    body = formData;
	    formData = void 0;
	  }
	  return {
	    action: action,
	    method: method.toLowerCase(),
	    encType: encType,
	    formData: formData,
	    body: body
	  };
	}

	// vendor/turbo-stream-v2/utils.ts
	var HOLE = -1;
	var NAN = -2;
	var NEGATIVE_INFINITY = -3;
	var NEGATIVE_ZERO = -4;
	var NULL = -5;
	var POSITIVE_INFINITY = -6;
	var UNDEFINED = -7;
	var TYPE_BIGINT = "B";
	var TYPE_DATE = "D";
	var TYPE_ERROR = "E";
	var TYPE_MAP = "M";
	var TYPE_NULL_OBJECT = "N";
	var TYPE_PROMISE = "P";
	var TYPE_REGEXP = "R";
	var TYPE_SET = "S";
	var TYPE_SYMBOL = "Y";
	var TYPE_URL = "U";
	var TYPE_PREVIOUS_RESOLVED = "Z";
	var Deferred2 = /*#__PURE__*/_createClass(function Deferred2() {
	  var _this5 = this;
	  _classCallCheck(this, Deferred2);
	  this.promise = new Promise(function (resolve, reject) {
	    _this5.resolve = resolve;
	    _this5.reject = reject;
	  });
	});
	function createLineSplittingTransform() {
	  var decoder = new TextDecoder();
	  var leftover = "";
	  return new TransformStream({
	    transform: function transform(chunk, controller) {
	      var str = decoder.decode(chunk, {
	        stream: true
	      });
	      var parts = (leftover + str).split("\n");
	      leftover = parts.pop() || "";
	      var _iterator10 = _createForOfIteratorHelper(parts),
	        _step10;
	      try {
	        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
	          var part = _step10.value;
	          controller.enqueue(part);
	        }
	      } catch (err) {
	        _iterator10.e(err);
	      } finally {
	        _iterator10.f();
	      }
	    },
	    flush: function flush(controller) {
	      if (leftover) {
	        controller.enqueue(leftover);
	      }
	    }
	  });
	}

	// vendor/turbo-stream-v2/flatten.ts
	function flatten(input) {
	  var indices = this.indices;
	  var existing = indices.get(input);
	  if (existing) return [existing];
	  if (input === void 0) return UNDEFINED;
	  if (input === null) return NULL;
	  if (Number.isNaN(input)) return NAN;
	  if (input === Number.POSITIVE_INFINITY) return POSITIVE_INFINITY;
	  if (input === Number.NEGATIVE_INFINITY) return NEGATIVE_INFINITY;
	  if (input === 0 && 1 / input < 0) return NEGATIVE_ZERO;
	  var index = this.index++;
	  indices.set(input, index);
	  stringify.call(this, input, index);
	  return index;
	}
	function stringify(input, index) {
	  var _this6 = this;
	  var deferred = this.deferred,
	    plugins = this.plugins,
	    postPlugins = this.postPlugins;
	  var str = this.stringified;
	  var stack = [[input, index]];
	  while (stack.length > 0) {
	    var _stack$pop = stack.pop(),
	      _stack$pop2 = _slicedToArray(_stack$pop, 2),
	      input2 = _stack$pop2[0],
	      index2 = _stack$pop2[1];
	    var partsForObj = function partsForObj(obj) {
	      return Object.keys(obj).map(function (k) {
	        return "\"_".concat(flatten.call(_this6, k), "\":").concat(flatten.call(_this6, obj[k]));
	      }).join(",");
	    };
	    var error = null;
	    switch (typeof input2) {
	      case "boolean":
	      case "number":
	      case "string":
	        str[index2] = JSON.stringify(input2);
	        break;
	      case "bigint":
	        str[index2] = "[\"".concat(TYPE_BIGINT, "\",\"").concat(input2, "\"]");
	        break;
	      case "symbol":
	        {
	          var keyFor = Symbol.keyFor(input2);
	          if (!keyFor) {
	            error = new Error("Cannot encode symbol unless created with Symbol.for()");
	          } else {
	            str[index2] = "[\"".concat(TYPE_SYMBOL, "\",").concat(JSON.stringify(keyFor), "]");
	          }
	          break;
	        }
	      case "object":
	        {
	          if (!input2) {
	            str[index2] = "".concat(NULL);
	            break;
	          }
	          var isArray = Array.isArray(input2);
	          var pluginHandled = false;
	          if (!isArray && plugins) {
	            var _iterator11 = _createForOfIteratorHelper(plugins),
	              _step11;
	            try {
	              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
	                var plugin = _step11.value;
	                var pluginResult = plugin(input2);
	                if (Array.isArray(pluginResult)) {
	                  pluginHandled = true;
	                  var _pluginResult = _toArray(pluginResult),
	                    pluginIdentifier = _pluginResult[0],
	                    rest = _pluginResult.slice(1);
	                  str[index2] = "[".concat(JSON.stringify(pluginIdentifier));
	                  if (rest.length > 0) {
	                    str[index2] += ",".concat(rest.map(function (v) {
	                      return flatten.call(_this6, v);
	                    }).join(","));
	                  }
	                  str[index2] += "]";
	                  break;
	                }
	              }
	            } catch (err) {
	              _iterator11.e(err);
	            } finally {
	              _iterator11.f();
	            }
	          }
	          if (!pluginHandled) {
	            var result = isArray ? "[" : "{";
	            if (isArray) {
	              for (var i = 0; i < input2.length; i++) result += (i ? "," : "") + (i in input2 ? flatten.call(this, input2[i]) : HOLE);
	              str[index2] = "".concat(result, "]");
	            } else if (input2 instanceof Date) {
	              var dateTime = input2.getTime();
	              str[index2] = "[\"".concat(TYPE_DATE, "\",").concat(Number.isNaN(dateTime) ? JSON.stringify("invalid") : dateTime, "]");
	            } else if (input2 instanceof URL) {
	              str[index2] = "[\"".concat(TYPE_URL, "\",").concat(JSON.stringify(input2.href), "]");
	            } else if (input2 instanceof RegExp) {
	              str[index2] = "[\"".concat(TYPE_REGEXP, "\",").concat(JSON.stringify(input2.source), ",").concat(JSON.stringify(input2.flags), "]");
	            } else if (input2 instanceof Set) {
	              if (input2.size > 0) {
	                str[index2] = "[\"".concat(TYPE_SET, "\",").concat(_toConsumableArray(input2).map(function (val) {
	                  return flatten.call(_this6, val);
	                }).join(","), "]");
	              } else {
	                str[index2] = "[\"".concat(TYPE_SET, "\"]");
	              }
	            } else if (input2 instanceof Map) {
	              if (input2.size > 0) {
	                str[index2] = "[\"".concat(TYPE_MAP, "\",").concat(_toConsumableArray(input2).flatMap(function (_ref60) {
	                  var _ref61 = _slicedToArray(_ref60, 2),
	                    k = _ref61[0],
	                    v = _ref61[1];
	                  return [flatten.call(_this6, k), flatten.call(_this6, v)];
	                }).join(","), "]");
	              } else {
	                str[index2] = "[\"".concat(TYPE_MAP, "\"]");
	              }
	            } else if (input2 instanceof Promise) {
	              str[index2] = "[\"".concat(TYPE_PROMISE, "\",").concat(index2, "]");
	              deferred[index2] = input2;
	            } else if (input2 instanceof Error) {
	              str[index2] = "[\"".concat(TYPE_ERROR, "\",").concat(JSON.stringify(input2.message));
	              if (input2.name !== "Error") {
	                str[index2] += ",".concat(JSON.stringify(input2.name));
	              }
	              str[index2] += "]";
	            } else if (Object.getPrototypeOf(input2) === null) {
	              str[index2] = "[\"".concat(TYPE_NULL_OBJECT, "\",{").concat(partsForObj(input2), "}]");
	            } else if (isPlainObject(input2)) {
	              str[index2] = "{".concat(partsForObj(input2), "}");
	            } else {
	              error = new Error("Cannot encode object with prototype");
	            }
	          }
	          break;
	        }
	      default:
	        {
	          var _isArray = Array.isArray(input2);
	          var _pluginHandled = false;
	          if (!_isArray && plugins) {
	            var _iterator12 = _createForOfIteratorHelper(plugins),
	              _step12;
	            try {
	              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
	                var _plugin = _step12.value;
	                var _pluginResult2 = _plugin(input2);
	                if (Array.isArray(_pluginResult2)) {
	                  _pluginHandled = true;
	                  var _pluginResult3 = _toArray(_pluginResult2),
	                    _pluginIdentifier = _pluginResult3[0],
	                    _rest = _pluginResult3.slice(1);
	                  str[index2] = "[".concat(JSON.stringify(_pluginIdentifier));
	                  if (_rest.length > 0) {
	                    str[index2] += ",".concat(_rest.map(function (v) {
	                      return flatten.call(_this6, v);
	                    }).join(","));
	                  }
	                  str[index2] += "]";
	                  break;
	                }
	              }
	            } catch (err) {
	              _iterator12.e(err);
	            } finally {
	              _iterator12.f();
	            }
	          }
	          if (!_pluginHandled) {
	            error = new Error("Cannot encode function or unexpected type");
	          }
	        }
	    }
	    if (error) {
	      var _pluginHandled2 = false;
	      if (postPlugins) {
	        var _iterator13 = _createForOfIteratorHelper(postPlugins),
	          _step13;
	        try {
	          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
	            var _plugin2 = _step13.value;
	            var _pluginResult4 = _plugin2(input2);
	            if (Array.isArray(_pluginResult4)) {
	              _pluginHandled2 = true;
	              var _pluginResult5 = _toArray(_pluginResult4),
	                _pluginIdentifier2 = _pluginResult5[0],
	                _rest2 = _pluginResult5.slice(1);
	              str[index2] = "[".concat(JSON.stringify(_pluginIdentifier2));
	              if (_rest2.length > 0) {
	                str[index2] += ",".concat(_rest2.map(function (v) {
	                  return flatten.call(_this6, v);
	                }).join(","));
	              }
	              str[index2] += "]";
	              break;
	            }
	          }
	        } catch (err) {
	          _iterator13.e(err);
	        } finally {
	          _iterator13.f();
	        }
	      }
	      if (!_pluginHandled2) {
	        throw error;
	      }
	    }
	  }
	}
	var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
	function isPlainObject(thing) {
	  var proto = Object.getPrototypeOf(thing);
	  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames;
	}

	// vendor/turbo-stream-v2/unflatten.ts
	var globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : void 0;
	function unflatten(parsed) {
	  var hydrated = this.hydrated,
	    values = this.values;
	  if (typeof parsed === "number") return hydrate.call(this, parsed);
	  if (!Array.isArray(parsed) || !parsed.length) throw new SyntaxError();
	  var startIndex = values.length;
	  var _iterator14 = _createForOfIteratorHelper(parsed),
	    _step14;
	  try {
	    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
	      var value = _step14.value;
	      values.push(value);
	    }
	  } catch (err) {
	    _iterator14.e(err);
	  } finally {
	    _iterator14.f();
	  }
	  hydrated.length = values.length;
	  return hydrate.call(this, startIndex);
	}
	function hydrate(index) {
	  var hydrated = this.hydrated,
	    values = this.values,
	    deferred = this.deferred,
	    plugins = this.plugins;
	  var result;
	  var stack = [[index, function (v) {
	    result = v;
	  }]];
	  var postRun = [];
	  var _loop2 = function _loop2() {
	      var _stack$pop3 = stack.pop(),
	        _stack$pop4 = _slicedToArray(_stack$pop3, 2),
	        index2 = _stack$pop4[0],
	        set = _stack$pop4[1];
	      switch (index2) {
	        case UNDEFINED:
	          set(void 0);
	          return 0; // continue
	        case NULL:
	          set(null);
	          return 0; // continue
	        case NAN:
	          set(NaN);
	          return 0; // continue
	        case POSITIVE_INFINITY:
	          set(Infinity);
	          return 0; // continue
	        case NEGATIVE_INFINITY:
	          set(-Infinity);
	          return 0; // continue
	        case NEGATIVE_ZERO:
	          set(-0);
	          return 0; // continue
	      }
	      if (hydrated[index2]) {
	        set(hydrated[index2]);
	        return 0; // continue
	      }
	      var value = values[index2];
	      if (!value || typeof value !== "object") {
	        hydrated[index2] = value;
	        set(value);
	        return 0; // continue
	      }
	      if (Array.isArray(value)) {
	        if (typeof value[0] === "string") {
	          var _value = _slicedToArray(value, 3),
	            type = _value[0],
	            b = _value[1],
	            c = _value[2];
	          switch (type) {
	            case TYPE_DATE:
	              set(hydrated[index2] = new Date(b));
	              return 0; // continue
	            case TYPE_URL:
	              set(hydrated[index2] = new URL(b));
	              return 0; // continue
	            case TYPE_BIGINT:
	              set(hydrated[index2] = BigInt(b));
	              return 0; // continue
	            case TYPE_REGEXP:
	              set(hydrated[index2] = new RegExp(b, c));
	              return 0; // continue
	            case TYPE_SYMBOL:
	              set(hydrated[index2] = Symbol["for"](b));
	              return 0; // continue
	            case TYPE_SET:
	              var newSet = /* @__PURE__ */new Set();
	              hydrated[index2] = newSet;
	              for (var i = value.length - 1; i > 0; i--) stack.push([value[i], function (v) {
	                newSet.add(v);
	              }]);
	              set(newSet);
	              return 0; // continue
	            case TYPE_MAP:
	              var map = /* @__PURE__ */new Map();
	              hydrated[index2] = map;
	              var _loop3 = function _loop3() {
	                var r = [];
	                stack.push([value[_i4 + 1], function (v) {
	                  r[1] = v;
	                }]);
	                stack.push([value[_i4], function (k) {
	                  r[0] = k;
	                }]);
	                postRun.push(function () {
	                  map.set(r[0], r[1]);
	                });
	              };
	              for (var _i4 = value.length - 2; _i4 > 0; _i4 -= 2) {
	                _loop3();
	              }
	              set(map);
	              return 0; // continue
	            case TYPE_NULL_OBJECT:
	              var obj = /* @__PURE__ */Object.create(null);
	              hydrated[index2] = obj;
	              var _iterator15 = _createForOfIteratorHelper(Object.keys(b).reverse()),
	                _step15;
	              try {
	                var _loop4 = function _loop4() {
	                  var key = _step15.value;
	                  var r = [];
	                  stack.push([b[key], function (v) {
	                    r[1] = v;
	                  }]);
	                  stack.push([Number(key.slice(1)), function (k) {
	                    r[0] = k;
	                  }]);
	                  postRun.push(function () {
	                    obj[r[0]] = r[1];
	                  });
	                };
	                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
	                  _loop4();
	                }
	              } catch (err) {
	                _iterator15.e(err);
	              } finally {
	                _iterator15.f();
	              }
	              set(obj);
	              return 0; // continue
	            case TYPE_PROMISE:
	              if (hydrated[b]) {
	                set(hydrated[index2] = hydrated[b]);
	              } else {
	                var d = new Deferred2();
	                deferred[b] = d;
	                set(hydrated[index2] = d.promise);
	              }
	              return 0; // continue
	            case TYPE_ERROR:
	              var _value2 = _slicedToArray(value, 3),
	                message = _value2[1],
	                errorType = _value2[2];
	              var error = errorType && globalObj && globalObj[errorType] ? new globalObj[errorType](message) : new Error(message);
	              hydrated[index2] = error;
	              set(error);
	              return 0; // continue
	            case TYPE_PREVIOUS_RESOLVED:
	              set(hydrated[index2] = hydrated[b]);
	              return 0; // continue
	            default:
	              if (Array.isArray(plugins)) {
	                var r = [];
	                var vals = value.slice(1);
	                var _loop5 = function _loop5(_i5) {
	                  var v = vals[_i5];
	                  stack.push([v, function (v2) {
	                    r[_i5] = v2;
	                  }]);
	                };
	                for (var _i5 = 0; _i5 < vals.length; _i5++) {
	                  _loop5(_i5);
	                }
	                postRun.push(function () {
	                  var _iterator16 = _createForOfIteratorHelper(plugins),
	                    _step16;
	                  try {
	                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
	                      var plugin = _step16.value;
	                      var result2 = plugin.apply(void 0, [value[0]].concat(r));
	                      if (result2) {
	                        set(hydrated[index2] = result2.value);
	                        return;
	                      }
	                    }
	                  } catch (err) {
	                    _iterator16.e(err);
	                  } finally {
	                    _iterator16.f();
	                  }
	                  throw new SyntaxError();
	                });
	                return 0; // continue
	              }
	              throw new SyntaxError();
	          }
	        } else {
	          var array = [];
	          hydrated[index2] = array;
	          var _loop6 = function _loop6(_i6) {
	            var n = value[_i6];
	            if (n !== HOLE) {
	              stack.push([n, function (v) {
	                array[_i6] = v;
	              }]);
	            }
	          };
	          for (var _i6 = 0; _i6 < value.length; _i6++) {
	            _loop6(_i6);
	          }
	          set(array);
	          return 0; // continue
	        }
	      } else {
	        var object = {};
	        hydrated[index2] = object;
	        var _iterator17 = _createForOfIteratorHelper(Object.keys(value).reverse()),
	          _step17;
	        try {
	          var _loop7 = function _loop7() {
	            var key = _step17.value;
	            var r = [];
	            stack.push([value[key], function (v) {
	              r[1] = v;
	            }]);
	            stack.push([Number(key.slice(1)), function (k) {
	              r[0] = k;
	            }]);
	            postRun.push(function () {
	              object[r[0]] = r[1];
	            });
	          };
	          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
	            _loop7();
	          }
	        } catch (err) {
	          _iterator17.e(err);
	        } finally {
	          _iterator17.f();
	        }
	        set(object);
	        return 0; // continue
	      }
	    },
	    _ret2;
	  while (stack.length > 0) {
	    _ret2 = _loop2();
	    if (_ret2 === 0) continue;
	  }
	  while (postRun.length > 0) {
	    postRun.pop()();
	  }
	  return result;
	}

	// vendor/turbo-stream-v2/turbo-stream.ts
	function decode(_x124, _x125) {
	  return _decode.apply(this, arguments);
	}
	function _decode() {
	  _decode = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee67(readable, options) {
	    var _ref117, plugins, done, reader, decoder, decoded, donePromise;
	    return _regenerator().w(function (_context69) {
	      while (1) switch (_context69.n) {
	        case 0:
	          _ref117 = options !== null && options !== void 0 ? options : {}, plugins = _ref117.plugins;
	          done = new Deferred2();
	          reader = readable.pipeThrough(createLineSplittingTransform()).getReader();
	          decoder = {
	            values: [],
	            hydrated: [],
	            deferred: {},
	            plugins: plugins
	          };
	          _context69.n = 1;
	          return decodeInitial.call(decoder, reader);
	        case 1:
	          decoded = _context69.v;
	          donePromise = done.promise;
	          if (decoded.done) {
	            done.resolve();
	          } else {
	            donePromise = decodeDeferred.call(decoder, reader).then(done.resolve)["catch"](function (reason) {
	              for (var _i1 = 0, _Object$values = Object.values(decoder.deferred); _i1 < _Object$values.length; _i1++) {
	                var deferred = _Object$values[_i1];
	                deferred.reject(reason);
	              }
	              done.reject(reason);
	            });
	          }
	          return _context69.a(2, {
	            done: donePromise.then(function () {
	              return reader.closed;
	            }),
	            value: decoded.value
	          });
	      }
	    }, _callee67);
	  }));
	  return _decode.apply(this, arguments);
	}
	function decodeInitial(_x126) {
	  return _decodeInitial.apply(this, arguments);
	}
	function _decodeInitial() {
	  _decodeInitial = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee68(reader) {
	    var read, line;
	    return _regenerator().w(function (_context70) {
	      while (1) switch (_context70.p = _context70.n) {
	        case 0:
	          _context70.n = 1;
	          return reader.read();
	        case 1:
	          read = _context70.v;
	          if (read.value) {
	            _context70.n = 2;
	            break;
	          }
	          throw new SyntaxError();
	        case 2:
	          _context70.p = 2;
	          line = JSON.parse(read.value);
	          _context70.n = 4;
	          break;
	        case 3:
	          _context70.p = 3;
	          _context70.v;
	          throw new SyntaxError();
	        case 4:
	          return _context70.a(2, {
	            done: read.done,
	            value: unflatten.call(this, line)
	          });
	      }
	    }, _callee68, this, [[2, 3]]);
	  }));
	  return _decodeInitial.apply(this, arguments);
	}
	function decodeDeferred(_x127) {
	  return _decodeDeferred.apply(this, arguments);
	}
	function _decodeDeferred() {
	  _decodeDeferred = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee69(reader) {
	    var read, line, colonIndex, deferredId, deferred, lineData, jsonLine, value, _colonIndex, _deferredId, _deferred, _lineData, _jsonLine, _value4, _t29;
	    return _regenerator().w(function (_context71) {
	      while (1) switch (_context71.p = _context71.n) {
	        case 0:
	          _context71.n = 1;
	          return reader.read();
	        case 1:
	          read = _context71.v;
	        case 2:
	          if (read.done) {
	            _context71.n = 17;
	            break;
	          }
	          if (read.value) {
	            _context71.n = 3;
	            break;
	          }
	          return _context71.a(3, 2);
	        case 3:
	          line = read.value;
	          _t29 = line[0];
	          _context71.n = _t29 === TYPE_PROMISE ? 4 : _t29 === TYPE_ERROR ? 9 : 14;
	          break;
	        case 4:
	          colonIndex = line.indexOf(":");
	          deferredId = Number(line.slice(1, colonIndex));
	          deferred = this.deferred[deferredId];
	          if (deferred) {
	            _context71.n = 5;
	            break;
	          }
	          throw new Error("Deferred ID ".concat(deferredId, " not found in stream"));
	        case 5:
	          lineData = line.slice(colonIndex + 1);
	          jsonLine = void 0;
	          _context71.p = 6;
	          jsonLine = JSON.parse(lineData);
	          _context71.n = 8;
	          break;
	        case 7:
	          _context71.p = 7;
	          _context71.v;
	          throw new SyntaxError();
	        case 8:
	          value = unflatten.call(this, jsonLine);
	          deferred.resolve(value);
	          return _context71.a(3, 15);
	        case 9:
	          _colonIndex = line.indexOf(":");
	          _deferredId = Number(line.slice(1, _colonIndex));
	          _deferred = this.deferred[_deferredId];
	          if (_deferred) {
	            _context71.n = 10;
	            break;
	          }
	          throw new Error("Deferred ID ".concat(_deferredId, " not found in stream"));
	        case 10:
	          _lineData = line.slice(_colonIndex + 1);
	          _jsonLine = void 0;
	          _context71.p = 11;
	          _jsonLine = JSON.parse(_lineData);
	          _context71.n = 13;
	          break;
	        case 12:
	          _context71.p = 12;
	          _context71.v;
	          throw new SyntaxError();
	        case 13:
	          _value4 = unflatten.call(this, _jsonLine);
	          _deferred.reject(_value4);
	          return _context71.a(3, 15);
	        case 14:
	          throw new SyntaxError();
	        case 15:
	          _context71.n = 16;
	          return reader.read();
	        case 16:
	          read = _context71.v;
	          _context71.n = 2;
	          break;
	        case 17:
	          return _context71.a(2);
	      }
	    }, _callee69, this, [[11, 12], [6, 7]]);
	  }));
	  return _decodeDeferred.apply(this, arguments);
	}
	function encode(input, options) {
	  var _ref62 = options !== null && options !== void 0 ? options : {},
	    plugins = _ref62.plugins,
	    postPlugins = _ref62.postPlugins,
	    signal = _ref62.signal;
	  var encoder = {
	    deferred: {},
	    index: 0,
	    indices: /* @__PURE__ */new Map(),
	    stringified: [],
	    plugins: plugins,
	    postPlugins: postPlugins,
	    signal: signal
	  };
	  var textEncoder = new TextEncoder();
	  var lastSentIndex = 0;
	  var readable = new ReadableStream({
	    start: function start(controller) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30() {
	        var id, seenPromises, raceDone, racePromise, _loop8, _i7, _Object$entries3;
	        return _regenerator().w(function (_context32) {
	          while (1) switch (_context32.n) {
	            case 0:
	              id = flatten.call(encoder, input);
	              if (!Array.isArray(id)) {
	                _context32.n = 1;
	                break;
	              }
	              throw new Error("This should never happen");
	            case 1:
	              if (id < 0) {
	                controller.enqueue(textEncoder.encode("".concat(id, "\n")));
	              } else {
	                controller.enqueue(textEncoder.encode("[".concat(encoder.stringified.join(","), "]\n")));
	                lastSentIndex = encoder.stringified.length - 1;
	              }
	              seenPromises = /* @__PURE__ */new WeakSet();
	              if (!Object.keys(encoder.deferred).length) {
	                _context32.n = 9;
	                break;
	              }
	              racePromise = new Promise(function (resolve, reject) {
	                raceDone = resolve;
	                if (signal) {
	                  var rejectPromise = function rejectPromise() {
	                    return reject(signal.reason || new Error("Signal was aborted."));
	                  };
	                  if (signal.aborted) {
	                    rejectPromise();
	                  } else {
	                    signal.addEventListener("abort", function (event) {
	                      rejectPromise();
	                    });
	                  }
	                }
	              });
	            case 2:
	              if (!(Object.keys(encoder.deferred).length > 0)) {
	                _context32.n = 8;
	                break;
	              }
	              _loop8 = /*#__PURE__*/_regenerator().m(function _loop8() {
	                var _Object$entries3$_i, deferredId, deferred;
	                return _regenerator().w(function (_context31) {
	                  while (1) switch (_context31.n) {
	                    case 0:
	                      _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 2), deferredId = _Object$entries3$_i[0], deferred = _Object$entries3$_i[1];
	                      if (!seenPromises.has(deferred)) {
	                        _context31.n = 1;
	                        break;
	                      }
	                      return _context31.a(2, 1);
	                    case 1:
	                      seenPromises.add(
	                      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	                      encoder.deferred[Number(deferredId)] = Promise.race([racePromise, deferred]).then(function (resolved) {
	                        var id2 = flatten.call(encoder, resolved);
	                        if (Array.isArray(id2)) {
	                          controller.enqueue(textEncoder.encode("".concat(TYPE_PROMISE).concat(deferredId, ":[[\"").concat(TYPE_PREVIOUS_RESOLVED, "\",").concat(id2[0], "]]\n")));
	                          encoder.index++;
	                          lastSentIndex++;
	                        } else if (id2 < 0) {
	                          controller.enqueue(textEncoder.encode("".concat(TYPE_PROMISE).concat(deferredId, ":").concat(id2, "\n")));
	                        } else {
	                          var values = encoder.stringified.slice(lastSentIndex + 1).join(",");
	                          controller.enqueue(textEncoder.encode("".concat(TYPE_PROMISE).concat(deferredId, ":[").concat(values, "]\n")));
	                          lastSentIndex = encoder.stringified.length - 1;
	                        }
	                      }, function (reason) {
	                        if (!reason || typeof reason !== "object" || !(reason instanceof Error)) {
	                          reason = new Error("An unknown error occurred");
	                        }
	                        var id2 = flatten.call(encoder, reason);
	                        if (Array.isArray(id2)) {
	                          controller.enqueue(textEncoder.encode("".concat(TYPE_ERROR).concat(deferredId, ":[[\"").concat(TYPE_PREVIOUS_RESOLVED, "\",").concat(id2[0], "]]\n")));
	                          encoder.index++;
	                          lastSentIndex++;
	                        } else if (id2 < 0) {
	                          controller.enqueue(textEncoder.encode("".concat(TYPE_ERROR).concat(deferredId, ":").concat(id2, "\n")));
	                        } else {
	                          var values = encoder.stringified.slice(lastSentIndex + 1).join(",");
	                          controller.enqueue(textEncoder.encode("".concat(TYPE_ERROR).concat(deferredId, ":[").concat(values, "]\n")));
	                          lastSentIndex = encoder.stringified.length - 1;
	                        }
	                      })["finally"](function () {
	                        delete encoder.deferred[Number(deferredId)];
	                      }));
	                    case 2:
	                      return _context31.a(2);
	                  }
	                }, _loop8);
	              });
	              _i7 = 0, _Object$entries3 = Object.entries(encoder.deferred);
	            case 3:
	              if (!(_i7 < _Object$entries3.length)) {
	                _context32.n = 6;
	                break;
	              }
	              return _context32.d(_regeneratorValues(_loop8()), 4);
	            case 4:
	              if (!_context32.v) {
	                _context32.n = 5;
	                break;
	              }
	              return _context32.a(3, 5);
	            case 5:
	              _i7++;
	              _context32.n = 3;
	              break;
	            case 6:
	              _context32.n = 7;
	              return Promise.race(Object.values(encoder.deferred));
	            case 7:
	              _context32.n = 2;
	              break;
	            case 8:
	              raceDone();
	            case 9:
	              _context32.n = 10;
	              return Promise.all(Object.values(encoder.deferred));
	            case 10:
	              controller.close();
	            case 11:
	              return _context32.a(2);
	          }
	        }, _callee30);
	      }))();
	    }
	  });
	  return readable;
	}

	// lib/dom/ssr/data.ts
	function createRequestInit(_x128) {
	  return _createRequestInit.apply(this, arguments);
	} // lib/dom/ssr/markup.ts
	function _createRequestInit() {
	  _createRequestInit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee70(request) {
	    var init, contentType, _t32, _t33, _t34;
	    return _regenerator().w(function (_context72) {
	      while (1) switch (_context72.n) {
	        case 0:
	          init = {
	            signal: request.signal
	          };
	          if (!(request.method !== "GET")) {
	            _context72.n = 8;
	            break;
	          }
	          init.method = request.method;
	          contentType = request.headers.get("Content-Type");
	          if (!(contentType && /\bapplication\/json\b/.test(contentType))) {
	            _context72.n = 2;
	            break;
	          }
	          init.headers = {
	            "Content-Type": contentType
	          };
	          _t32 = JSON;
	          _context72.n = 1;
	          return request.json();
	        case 1:
	          init.body = _t32.stringify.call(_t32, _context72.v);
	          _context72.n = 8;
	          break;
	        case 2:
	          if (!(contentType && /\btext\/plain\b/.test(contentType))) {
	            _context72.n = 4;
	            break;
	          }
	          init.headers = {
	            "Content-Type": contentType
	          };
	          _context72.n = 3;
	          return request.text();
	        case 3:
	          init.body = _context72.v;
	          _context72.n = 8;
	          break;
	        case 4:
	          if (!(contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType))) {
	            _context72.n = 6;
	            break;
	          }
	          _t33 = URLSearchParams;
	          _context72.n = 5;
	          return request.text();
	        case 5:
	          _t34 = _context72.v;
	          init.body = new _t33(_t34);
	          _context72.n = 8;
	          break;
	        case 6:
	          _context72.n = 7;
	          return request.formData();
	        case 7:
	          init.body = _context72.v;
	        case 8:
	          return _context72.a(2, init);
	      }
	    }, _callee70);
	  }));
	  return _createRequestInit.apply(this, arguments);
	}
	var ESCAPE_LOOKUP = {
	  "&": "\\u0026",
	  ">": "\\u003e",
	  "<": "\\u003c",
	  "\u2028": "\\u2028",
	  "\u2029": "\\u2029"
	};
	var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
	function escapeHtml(html) {
	  return html.replace(ESCAPE_REGEX, function (match) {
	    return ESCAPE_LOOKUP[match];
	  });
	}

	// lib/dom/ssr/invariant.ts
	function invariant2$1(value, message) {
	  if (value === false || value === null || typeof value === "undefined") {
	    throw new Error(message);
	  }
	}

	// lib/dom/ssr/single-fetch.tsx
	var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
	var SingleFetchNoResultError = /*#__PURE__*/function (_Error) {
	  function SingleFetchNoResultError() {
	    _classCallCheck(this, SingleFetchNoResultError);
	    return _callSuper(this, SingleFetchNoResultError, arguments);
	  }
	  _inherits(SingleFetchNoResultError, _Error);
	  return _createClass(SingleFetchNoResultError);
	}(/*#__PURE__*/_wrapNativeSuper(Error));
	var SINGLE_FETCH_REDIRECT_STATUS = 202;
	var NO_BODY_STATUS_CODES = /* @__PURE__ */new Set([100, 101, 204, 205]);
	function StreamTransfer(_ref63) {
	  var context = _ref63.context,
	    identifier = _ref63.identifier,
	    reader = _ref63.reader,
	    textDecoder = _ref63.textDecoder,
	    nonce = _ref63.nonce;
	  if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
	    return null;
	  }
	  if (!context.renderMeta.streamCache) {
	    context.renderMeta.streamCache = {};
	  }
	  var streamCache = context.renderMeta.streamCache;
	  var promise = streamCache[identifier];
	  if (!promise) {
	    promise = streamCache[identifier] = reader.read().then(function (result) {
	      streamCache[identifier].result = {
	        done: result.done,
	        value: textDecoder.decode(result.value, {
	          stream: true
	        })
	      };
	    })["catch"](function (e) {
	      streamCache[identifier].error = e;
	    });
	  }
	  if (promise.error) {
	    throw promise.error;
	  }
	  if (promise.result === void 0) {
	    throw promise;
	  }
	  var _promise$result = promise.result,
	    done = _promise$result.done,
	    value = _promise$result.value;
	  var scriptTag = value ? /* @__PURE__ */React3__namespace.createElement("script", {
	    nonce: nonce,
	    dangerouslySetInnerHTML: {
	      __html: "window.__reactRouterContext.streamController.enqueue(".concat(escapeHtml(JSON.stringify(value)), ");")
	    }
	  }) : null;
	  if (done) {
	    return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, scriptTag, /* @__PURE__ */React3__namespace.createElement("script", {
	      nonce: nonce,
	      dangerouslySetInnerHTML: {
	        __html: "window.__reactRouterContext.streamController.close();"
	      }
	    }));
	  } else {
	    return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, scriptTag, /* @__PURE__ */React3__namespace.createElement(React3__namespace.Suspense, null, /* @__PURE__ */React3__namespace.createElement(StreamTransfer, {
	      context: context,
	      identifier: identifier + 1,
	      reader: reader,
	      textDecoder: textDecoder,
	      nonce: nonce
	    })));
	  }
	}
	function getTurboStreamSingleFetchDataStrategy(getRouter, manifest, routeModules, ssr, basename) {
	  var dataStrategy = getSingleFetchDataStrategyImpl(getRouter, function (match) {
	    var manifestRoute = manifest.routes[match.route.id];
	    invariant2$1(manifestRoute, "Route not found in manifest");
	    var routeModule = routeModules[match.route.id];
	    return {
	      hasLoader: manifestRoute.hasLoader,
	      hasClientLoader: manifestRoute.hasClientLoader,
	      hasShouldRevalidate: Boolean(routeModule === null || routeModule === void 0 ? void 0 : routeModule.shouldRevalidate)
	    };
	  }, fetchAndDecodeViaTurboStream, ssr, basename);
	  return /*#__PURE__*/function () {
	    var _ref64 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(args) {
	      return _regenerator().w(function (_context33) {
	        while (1) switch (_context33.n) {
	          case 0:
	            return _context33.a(2, args.runClientMiddleware(dataStrategy));
	        }
	      }, _callee31);
	    }));
	    return function (_x129) {
	      return _ref64.apply(this, arguments);
	    };
	  }();
	}
	function getSingleFetchDataStrategyImpl(getRouter, getRouteInfo, fetchAndDecode, ssr, basename) {
	  var shouldAllowOptOut = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {
	    return true;
	  };
	  return /*#__PURE__*/function () {
	    var _ref65 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(args) {
	      var request, matches, fetcherKey, router, foundRevalidatingServerLoader;
	      return _regenerator().w(function (_context34) {
	        while (1) switch (_context34.n) {
	          case 0:
	            request = args.request, matches = args.matches, fetcherKey = args.fetcherKey;
	            router = getRouter();
	            if (!(request.method !== "GET")) {
	              _context34.n = 1;
	              break;
	            }
	            return _context34.a(2, singleFetchActionStrategy(args, fetchAndDecode, basename));
	          case 1:
	            foundRevalidatingServerLoader = matches.some(function (m) {
	              var _getRouteInfo = getRouteInfo(m),
	                hasLoader = _getRouteInfo.hasLoader,
	                hasClientLoader = _getRouteInfo.hasClientLoader;
	              return m.unstable_shouldCallHandler() && hasLoader && !hasClientLoader;
	            });
	            if (!(!ssr && !foundRevalidatingServerLoader)) {
	              _context34.n = 2;
	              break;
	            }
	            return _context34.a(2, nonSsrStrategy(args, getRouteInfo, fetchAndDecode, basename));
	          case 2:
	            if (!fetcherKey) {
	              _context34.n = 3;
	              break;
	            }
	            return _context34.a(2, singleFetchLoaderFetcherStrategy(args, fetchAndDecode, basename));
	          case 3:
	            return _context34.a(2, singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, basename, shouldAllowOptOut));
	        }
	      }, _callee32);
	    }));
	    return function (_x130) {
	      return _ref65.apply(this, arguments);
	    };
	  }();
	}
	function singleFetchActionStrategy(_x131, _x132, _x133) {
	  return _singleFetchActionStrategy.apply(this, arguments);
	}
	function _singleFetchActionStrategy() {
	  _singleFetchActionStrategy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee73(args, fetchAndDecode, basename) {
	    var actionMatch, actionStatus, result;
	    return _regenerator().w(function (_context75) {
	      while (1) switch (_context75.n) {
	        case 0:
	          actionMatch = args.matches.find(function (m) {
	            return m.unstable_shouldCallHandler();
	          });
	          invariant2$1(actionMatch, "No action match found");
	          actionStatus = void 0;
	          _context75.n = 1;
	          return actionMatch.resolve(/*#__PURE__*/function () {
	            var _ref118 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee72(handler) {
	              var result2;
	              return _regenerator().w(function (_context74) {
	                while (1) switch (_context74.n) {
	                  case 0:
	                    _context74.n = 1;
	                    return handler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee71() {
	                      var _yield$fetchAndDecode, data2, status;
	                      return _regenerator().w(function (_context73) {
	                        while (1) switch (_context73.n) {
	                          case 0:
	                            _context73.n = 1;
	                            return fetchAndDecode(args, basename, [actionMatch.route.id]);
	                          case 1:
	                            _yield$fetchAndDecode = _context73.v;
	                            data2 = _yield$fetchAndDecode.data;
	                            status = _yield$fetchAndDecode.status;
	                            actionStatus = status;
	                            return _context73.a(2, unwrapSingleFetchResult(data2, actionMatch.route.id));
	                        }
	                      }, _callee71);
	                    })));
	                  case 1:
	                    result2 = _context74.v;
	                    return _context74.a(2, result2);
	                }
	              }, _callee72);
	            }));
	            return function (_x186) {
	              return _ref118.apply(this, arguments);
	            };
	          }());
	        case 1:
	          result = _context75.v;
	          if (!(isResponse(result.result) || isRouteErrorResponse(result.result) || isDataWithResponseInit(result.result))) {
	            _context75.n = 2;
	            break;
	          }
	          return _context75.a(2, _defineProperty({}, actionMatch.route.id, result));
	        case 2:
	          return _context75.a(2, _defineProperty({}, actionMatch.route.id, {
	            type: result.type,
	            result: data(result.result, actionStatus)
	          }));
	      }
	    }, _callee73);
	  }));
	  return _singleFetchActionStrategy.apply(this, arguments);
	}
	function nonSsrStrategy(_x134, _x135, _x136, _x137) {
	  return _nonSsrStrategy.apply(this, arguments);
	}
	function _nonSsrStrategy() {
	  _nonSsrStrategy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee76(args, getRouteInfo, fetchAndDecode, basename) {
	    var matchesToLoad, results;
	    return _regenerator().w(function (_context78) {
	      while (1) switch (_context78.n) {
	        case 0:
	          matchesToLoad = args.matches.filter(function (m) {
	            return m.unstable_shouldCallHandler();
	          });
	          results = {};
	          _context78.n = 1;
	          return Promise.all(matchesToLoad.map(function (m) {
	            return m.resolve(/*#__PURE__*/function () {
	              var _ref122 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee75(handler) {
	                var _getRouteInfo2, hasClientLoader, routeId, result, _t35, _t36;
	                return _regenerator().w(function (_context77) {
	                  while (1) switch (_context77.p = _context77.n) {
	                    case 0:
	                      _context77.p = 0;
	                      _getRouteInfo2 = getRouteInfo(m), hasClientLoader = _getRouteInfo2.hasClientLoader;
	                      routeId = m.route.id;
	                      if (!hasClientLoader) {
	                        _context77.n = 2;
	                        break;
	                      }
	                      _context77.n = 1;
	                      return handler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee74() {
	                        var _yield$fetchAndDecode2, data2;
	                        return _regenerator().w(function (_context76) {
	                          while (1) switch (_context76.n) {
	                            case 0:
	                              _context76.n = 1;
	                              return fetchAndDecode(args, basename, [routeId]);
	                            case 1:
	                              _yield$fetchAndDecode2 = _context76.v;
	                              data2 = _yield$fetchAndDecode2.data;
	                              return _context76.a(2, unwrapSingleFetchResult(data2, routeId));
	                          }
	                        }, _callee74);
	                      })));
	                    case 1:
	                      _t35 = _context77.v;
	                      _context77.n = 4;
	                      break;
	                    case 2:
	                      _context77.n = 3;
	                      return handler();
	                    case 3:
	                      _t35 = _context77.v;
	                    case 4:
	                      result = _t35;
	                      results[m.route.id] = {
	                        type: "data",
	                        result: result
	                      };
	                      _context77.n = 6;
	                      break;
	                    case 5:
	                      _context77.p = 5;
	                      _t36 = _context77.v;
	                      results[m.route.id] = {
	                        type: "error",
	                        result: _t36
	                      };
	                    case 6:
	                      return _context77.a(2);
	                  }
	                }, _callee75, null, [[0, 5]]);
	              }));
	              return function (_x187) {
	                return _ref122.apply(this, arguments);
	              };
	            }());
	          }));
	        case 1:
	          return _context78.a(2, results);
	      }
	    }, _callee76);
	  }));
	  return _nonSsrStrategy.apply(this, arguments);
	}
	function singleFetchLoaderNavigationStrategy(_x138, _x139, _x140, _x141, _x142, _x143) {
	  return _singleFetchLoaderNavigationStrategy.apply(this, arguments);
	}
	function _singleFetchLoaderNavigationStrategy() {
	  _singleFetchLoaderNavigationStrategy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee81(args, router, getRouteInfo, fetchAndDecode, ssr, basename) {
	    var shouldAllowOptOut,
	      routesParams,
	      foundOptOutRoute,
	      routeDfds,
	      singleFetchDfd,
	      results,
	      resolvePromise,
	      isInitialLoad,
	      targetRoutes,
	      data2,
	      _args83 = arguments,
	      _t39;
	    return _regenerator().w(function (_context83) {
	      while (1) switch (_context83.p = _context83.n) {
	        case 0:
	          shouldAllowOptOut = _args83.length > 6 && _args83[6] !== undefined ? _args83[6] : function () {
	            return true;
	          };
	          routesParams = /* @__PURE__ */new Set();
	          foundOptOutRoute = false;
	          routeDfds = args.matches.map(function () {
	            return createDeferred2();
	          });
	          singleFetchDfd = createDeferred2();
	          results = {};
	          resolvePromise = Promise.all(args.matches.map(/*#__PURE__*/function () {
	            var _ref124 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee80(m, i) {
	              return _regenerator().w(function (_context82) {
	                while (1) switch (_context82.n) {
	                  case 0:
	                    return _context82.a(2, m.resolve(/*#__PURE__*/function () {
	                      var _ref125 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee79(handler) {
	                        var routeId, _getRouteInfo3, hasLoader, hasClientLoader, hasShouldRevalidate, defaultShouldRevalidate, shouldCall, result, _result3, _t37, _t38;
	                        return _regenerator().w(function (_context81) {
	                          while (1) switch (_context81.p = _context81.n) {
	                            case 0:
	                              routeDfds[i].resolve();
	                              routeId = m.route.id;
	                              _getRouteInfo3 = getRouteInfo(m), hasLoader = _getRouteInfo3.hasLoader, hasClientLoader = _getRouteInfo3.hasClientLoader, hasShouldRevalidate = _getRouteInfo3.hasShouldRevalidate;
	                              defaultShouldRevalidate = !m.unstable_shouldRevalidateArgs || m.unstable_shouldRevalidateArgs.actionStatus == null || m.unstable_shouldRevalidateArgs.actionStatus < 400;
	                              shouldCall = m.unstable_shouldCallHandler(defaultShouldRevalidate);
	                              if (shouldCall) {
	                                _context81.n = 1;
	                                break;
	                              }
	                              foundOptOutRoute || (foundOptOutRoute = m.unstable_shouldRevalidateArgs != null &&
	                              // This is a revalidation,
	                              hasLoader &&
	                              // for a route with a server loader,
	                              hasShouldRevalidate === true);
	                              return _context81.a(2);
	                            case 1:
	                              if (!(shouldAllowOptOut(m) && hasClientLoader)) {
	                                _context81.n = 6;
	                                break;
	                              }
	                              if (hasLoader) {
	                                foundOptOutRoute = true;
	                              }
	                              _context81.p = 2;
	                              _context81.n = 3;
	                              return handler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee77() {
	                                var _yield$fetchAndDecode3, data2;
	                                return _regenerator().w(function (_context79) {
	                                  while (1) switch (_context79.n) {
	                                    case 0:
	                                      _context79.n = 1;
	                                      return fetchAndDecode(args, basename, [routeId]);
	                                    case 1:
	                                      _yield$fetchAndDecode3 = _context79.v;
	                                      data2 = _yield$fetchAndDecode3.data;
	                                      return _context79.a(2, unwrapSingleFetchResult(data2, routeId));
	                                  }
	                                }, _callee77);
	                              })));
	                            case 3:
	                              result = _context81.v;
	                              results[routeId] = {
	                                type: "data",
	                                result: result
	                              };
	                              _context81.n = 5;
	                              break;
	                            case 4:
	                              _context81.p = 4;
	                              _t37 = _context81.v;
	                              results[routeId] = {
	                                type: "error",
	                                result: _t37
	                              };
	                            case 5:
	                              return _context81.a(2);
	                            case 6:
	                              if (hasLoader) {
	                                routesParams.add(routeId);
	                              }
	                              _context81.p = 7;
	                              _context81.n = 8;
	                              return handler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee78() {
	                                var data2;
	                                return _regenerator().w(function (_context80) {
	                                  while (1) switch (_context80.n) {
	                                    case 0:
	                                      _context80.n = 1;
	                                      return singleFetchDfd.promise;
	                                    case 1:
	                                      data2 = _context80.v;
	                                      return _context80.a(2, unwrapSingleFetchResult(data2, routeId));
	                                  }
	                                }, _callee78);
	                              })));
	                            case 8:
	                              _result3 = _context81.v;
	                              results[routeId] = {
	                                type: "data",
	                                result: _result3
	                              };
	                              _context81.n = 10;
	                              break;
	                            case 9:
	                              _context81.p = 9;
	                              _t38 = _context81.v;
	                              results[routeId] = {
	                                type: "error",
	                                result: _t38
	                              };
	                            case 10:
	                              return _context81.a(2);
	                          }
	                        }, _callee79, null, [[7, 9], [2, 4]]);
	                      }));
	                      return function (_x190) {
	                        return _ref125.apply(this, arguments);
	                      };
	                    }()));
	                }
	              }, _callee80);
	            }));
	            return function (_x188, _x189) {
	              return _ref124.apply(this, arguments);
	            };
	          }()));
	          _context83.n = 1;
	          return Promise.all(routeDfds.map(function (d) {
	            return d.promise;
	          }));
	        case 1:
	          isInitialLoad = !router.state.initialized && router.state.navigation.state === "idle";
	          if (!((isInitialLoad || routesParams.size === 0) && !window.__reactRouterHdrActive)) {
	            _context83.n = 2;
	            break;
	          }
	          singleFetchDfd.resolve({
	            routes: {}
	          });
	          _context83.n = 6;
	          break;
	        case 2:
	          targetRoutes = ssr && foundOptOutRoute && routesParams.size > 0 ? _toConsumableArray(routesParams.keys()) : void 0;
	          _context83.p = 3;
	          _context83.n = 4;
	          return fetchAndDecode(args, basename, targetRoutes);
	        case 4:
	          data2 = _context83.v;
	          singleFetchDfd.resolve(data2.data);
	          _context83.n = 6;
	          break;
	        case 5:
	          _context83.p = 5;
	          _t39 = _context83.v;
	          singleFetchDfd.reject(_t39);
	        case 6:
	          _context83.n = 7;
	          return resolvePromise;
	        case 7:
	          _context83.n = 8;
	          return bubbleMiddlewareErrors(singleFetchDfd.promise, args.matches, routesParams, results);
	        case 8:
	          return _context83.a(2, results);
	      }
	    }, _callee81, null, [[3, 5]]);
	  }));
	  return _singleFetchLoaderNavigationStrategy.apply(this, arguments);
	}
	function bubbleMiddlewareErrors(_x144, _x145, _x146, _x147) {
	  return _bubbleMiddlewareErrors.apply(this, arguments);
	}
	function _bubbleMiddlewareErrors() {
	  _bubbleMiddlewareErrors = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee82(singleFetchPromise, matches, routesParams, results) {
	    var middlewareError, fetchedData, _iterator20, _step20, _match2, routeResult, _results$_match2$rout, _t40;
	    return _regenerator().w(function (_context84) {
	      while (1) switch (_context84.p = _context84.n) {
	        case 0:
	          _context84.p = 0;
	          _context84.n = 1;
	          return singleFetchPromise;
	        case 1:
	          fetchedData = _context84.v;
	          if (!("routes" in fetchedData)) {
	            _context84.n = 8;
	            break;
	          }
	          _iterator20 = _createForOfIteratorHelper(matches);
	          _context84.p = 2;
	          _iterator20.s();
	        case 3:
	          if ((_step20 = _iterator20.n()).done) {
	            _context84.n = 5;
	            break;
	          }
	          _match2 = _step20.value;
	          if (!(_match2.route.id in fetchedData.routes)) {
	            _context84.n = 4;
	            break;
	          }
	          routeResult = fetchedData.routes[_match2.route.id];
	          if (!("error" in routeResult)) {
	            _context84.n = 4;
	            break;
	          }
	          middlewareError = routeResult.error;
	          if (((_results$_match2$rout = results[_match2.route.id]) === null || _results$_match2$rout === void 0 ? void 0 : _results$_match2$rout.result) == null) {
	            results[_match2.route.id] = {
	              type: "error",
	              result: middlewareError
	            };
	          }
	          return _context84.a(3, 5);
	        case 4:
	          _context84.n = 3;
	          break;
	        case 5:
	          _context84.n = 7;
	          break;
	        case 6:
	          _context84.p = 6;
	          _t40 = _context84.v;
	          _iterator20.e(_t40);
	        case 7:
	          _context84.p = 7;
	          _iterator20.f();
	          return _context84.f(7);
	        case 8:
	          if (middlewareError !== void 0) {
	            Array.from(routesParams.values()).forEach(function (routeId) {
	              if (results[routeId].result instanceof SingleFetchNoResultError) {
	                results[routeId].result = middlewareError;
	              }
	            });
	          }
	          _context84.n = 10;
	          break;
	        case 9:
	          _context84.p = 9;
	          _context84.v;
	        case 10:
	          return _context84.a(2);
	      }
	    }, _callee82, null, [[2, 6, 7, 8], [0, 9]]);
	  }));
	  return _bubbleMiddlewareErrors.apply(this, arguments);
	}
	function singleFetchLoaderFetcherStrategy(_x148, _x149, _x150) {
	  return _singleFetchLoaderFetcherStrategy.apply(this, arguments);
	}
	function _singleFetchLoaderFetcherStrategy() {
	  _singleFetchLoaderFetcherStrategy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee85(args, fetchAndDecode, basename) {
	    var fetcherMatch, routeId, result;
	    return _regenerator().w(function (_context87) {
	      while (1) switch (_context87.n) {
	        case 0:
	          fetcherMatch = args.matches.find(function (m) {
	            return m.unstable_shouldCallHandler();
	          });
	          invariant2$1(fetcherMatch, "No fetcher match found");
	          routeId = fetcherMatch.route.id;
	          _context87.n = 1;
	          return fetcherMatch.resolve(/*#__PURE__*/function () {
	            var _ref128 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee84(handler) {
	              return _regenerator().w(function (_context86) {
	                while (1) switch (_context86.n) {
	                  case 0:
	                    return _context86.a(2, handler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee83() {
	                      var _yield$fetchAndDecode4, data2;
	                      return _regenerator().w(function (_context85) {
	                        while (1) switch (_context85.n) {
	                          case 0:
	                            _context85.n = 1;
	                            return fetchAndDecode(args, basename, [routeId]);
	                          case 1:
	                            _yield$fetchAndDecode4 = _context85.v;
	                            data2 = _yield$fetchAndDecode4.data;
	                            return _context85.a(2, unwrapSingleFetchResult(data2, routeId));
	                        }
	                      }, _callee83);
	                    }))));
	                }
	              }, _callee84);
	            }));
	            return function (_x191) {
	              return _ref128.apply(this, arguments);
	            };
	          }());
	        case 1:
	          result = _context87.v;
	          return _context87.a(2, _defineProperty({}, fetcherMatch.route.id, result));
	      }
	    }, _callee85);
	  }));
	  return _singleFetchLoaderFetcherStrategy.apply(this, arguments);
	}
	function stripIndexParam(url) {
	  var indexValues = url.searchParams.getAll("index");
	  url.searchParams["delete"]("index");
	  var indexValuesToKeep = [];
	  var _iterator18 = _createForOfIteratorHelper(indexValues),
	    _step18;
	  try {
	    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
	      var indexValue = _step18.value;
	      if (indexValue) {
	        indexValuesToKeep.push(indexValue);
	      }
	    }
	  } catch (err) {
	    _iterator18.e(err);
	  } finally {
	    _iterator18.f();
	  }
	  for (var _i8 = 0, _indexValuesToKeep = indexValuesToKeep; _i8 < _indexValuesToKeep.length; _i8++) {
	    var toKeep = _indexValuesToKeep[_i8];
	    url.searchParams.append("index", toKeep);
	  }
	  return url;
	}
	function singleFetchUrl(reqUrl, basename, extension) {
	  var url = typeof reqUrl === "string" ? new URL(reqUrl,
	  // This can be called during the SSR flow via PrefetchPageLinksImpl so
	  // don't assume window is available
	  typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : reqUrl;
	  if (url.pathname === "/") {
	    url.pathname = "_root.".concat(extension);
	  } else if (basename && stripBasename(url.pathname, basename) === "/") {
	    url.pathname = "".concat(basename.replace(/\/$/, ""), "/_root.").concat(extension);
	  } else {
	    url.pathname = "".concat(url.pathname.replace(/\/$/, ""), ".").concat(extension);
	  }
	  return url;
	}
	function fetchAndDecodeViaTurboStream(_x151, _x152, _x153) {
	  return _fetchAndDecodeViaTurboStream.apply(this, arguments);
	}
	function _fetchAndDecodeViaTurboStream() {
	  _fetchAndDecodeViaTurboStream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee86(args, basename, targetRoutes) {
	    var request, url, res, routes, decoded, data2, typed, _typed, routeId, _t42, _t43;
	    return _regenerator().w(function (_context88) {
	      while (1) switch (_context88.p = _context88.n) {
	        case 0:
	          request = args.request;
	          url = singleFetchUrl(request.url, basename, "data");
	          if (request.method === "GET") {
	            url = stripIndexParam(url);
	            if (targetRoutes) {
	              url.searchParams.set("_routes", targetRoutes.join(","));
	            }
	          }
	          _t42 = fetch;
	          _t43 = url;
	          _context88.n = 1;
	          return createRequestInit(request);
	        case 1:
	          _context88.n = 2;
	          return _t42(_t43, _context88.v);
	        case 2:
	          res = _context88.v;
	          if (!(res.status === 404 && !res.headers.has("X-Remix-Response"))) {
	            _context88.n = 3;
	            break;
	          }
	          throw new ErrorResponseImpl(404, "Not Found", true);
	        case 3:
	          if (!(res.status === 204 && res.headers.has("X-Remix-Redirect"))) {
	            _context88.n = 4;
	            break;
	          }
	          return _context88.a(2, {
	            status: SINGLE_FETCH_REDIRECT_STATUS,
	            data: {
	              redirect: {
	                redirect: res.headers.get("X-Remix-Redirect"),
	                status: Number(res.headers.get("X-Remix-Status") || "302"),
	                revalidate: res.headers.get("X-Remix-Revalidate") === "true",
	                reload: res.headers.get("X-Remix-Reload-Document") === "true",
	                replace: res.headers.get("X-Remix-Replace") === "true"
	              }
	            }
	          });
	        case 4:
	          if (!NO_BODY_STATUS_CODES.has(res.status)) {
	            _context88.n = 5;
	            break;
	          }
	          routes = {};
	          if (targetRoutes && request.method !== "GET") {
	            routes[targetRoutes[0]] = {
	              data: void 0
	            };
	          }
	          return _context88.a(2, {
	            status: res.status,
	            data: {
	              routes: routes
	            }
	          });
	        case 5:
	          invariant2$1(res.body, "No response body to decode");
	          _context88.p = 6;
	          _context88.n = 7;
	          return decodeViaTurboStream(res.body, window);
	        case 7:
	          decoded = _context88.v;
	          if (request.method === "GET") {
	            typed = decoded.value;
	            if (SingleFetchRedirectSymbol in typed) {
	              data2 = {
	                redirect: typed[SingleFetchRedirectSymbol]
	              };
	            } else {
	              data2 = {
	                routes: typed
	              };
	            }
	          } else {
	            _typed = decoded.value;
	            routeId = targetRoutes === null || targetRoutes === void 0 ? void 0 : targetRoutes[0];
	            invariant2$1(routeId, "No routeId found for single fetch call decoding");
	            if ("redirect" in _typed) {
	              data2 = {
	                redirect: _typed
	              };
	            } else {
	              data2 = {
	                routes: _defineProperty({}, routeId, _typed)
	              };
	            }
	          }
	          return _context88.a(2, {
	            status: res.status,
	            data: data2
	          });
	        case 8:
	          _context88.p = 8;
	          _context88.v;
	          throw new Error("Unable to decode turbo-stream response");
	        case 9:
	          return _context88.a(2);
	      }
	    }, _callee86, null, [[6, 8]]);
	  }));
	  return _fetchAndDecodeViaTurboStream.apply(this, arguments);
	}
	function decodeViaTurboStream(body, global) {
	  return decode(body, {
	    plugins: [function (type) {
	      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        rest[_key - 1] = arguments[_key];
	      }
	      if (type === "SanitizedError") {
	        var name = rest[0],
	          message = rest[1],
	          stack = rest[2];
	        var Constructor = Error;
	        if (name && name in global && typeof global[name] === "function") {
	          Constructor = global[name];
	        }
	        var error = new Constructor(message);
	        error.stack = stack;
	        return {
	          value: error
	        };
	      }
	      if (type === "ErrorResponse") {
	        var data2 = rest[0],
	          status = rest[1],
	          statusText = rest[2];
	        return {
	          value: new ErrorResponseImpl(status, statusText, data2)
	        };
	      }
	      if (type === "SingleFetchRedirect") {
	        return {
	          value: _defineProperty({}, SingleFetchRedirectSymbol, rest[0])
	        };
	      }
	      if (type === "SingleFetchClassInstance") {
	        return {
	          value: rest[0]
	        };
	      }
	      if (type === "SingleFetchFallback") {
	        return {
	          value: void 0
	        };
	      }
	    }]
	  });
	}
	function unwrapSingleFetchResult(result, routeId) {
	  if ("redirect" in result) {
	    var _result$redirect = result.redirect,
	      location = _result$redirect.redirect,
	      revalidate = _result$redirect.revalidate,
	      reload = _result$redirect.reload,
	      replace2 = _result$redirect.replace,
	      status = _result$redirect.status;
	    throw redirect(location, {
	      status: status,
	      headers: _objectSpread2(_objectSpread2(_objectSpread2({}, revalidate ? {
	        "X-Remix-Revalidate": "yes"
	      } : null), reload ? {
	        "X-Remix-Reload-Document": "yes"
	      } : null), replace2 ? {
	        "X-Remix-Replace": "yes"
	      } : null)
	    });
	  }
	  var routeResult = result.routes[routeId];
	  if (routeResult == null) {
	    throw new SingleFetchNoResultError("No result found for routeId \"".concat(routeId, "\""));
	  } else if ("error" in routeResult) {
	    throw routeResult.error;
	  } else if ("data" in routeResult) {
	    return routeResult.data;
	  } else {
	    throw new Error("Invalid response found for routeId \"".concat(routeId, "\""));
	  }
	}
	function createDeferred2() {
	  var resolve;
	  var reject;
	  var promise = new Promise(function (res, rej) {
	    resolve = /*#__PURE__*/function () {
	      var _ref66 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(val) {
	        return _regenerator().w(function (_context35) {
	          while (1) switch (_context35.p = _context35.n) {
	            case 0:
	              res(val);
	              _context35.p = 1;
	              _context35.n = 2;
	              return promise;
	            case 2:
	              _context35.n = 4;
	              break;
	            case 3:
	              _context35.p = 3;
	              _context35.v;
	            case 4:
	              return _context35.a(2);
	          }
	        }, _callee33, null, [[1, 3]]);
	      }));
	      return function resolve(_x154) {
	        return _ref66.apply(this, arguments);
	      };
	    }();
	    reject = /*#__PURE__*/function () {
	      var _ref67 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(error) {
	        return _regenerator().w(function (_context36) {
	          while (1) switch (_context36.p = _context36.n) {
	            case 0:
	              rej(error);
	              _context36.p = 1;
	              _context36.n = 2;
	              return promise;
	            case 2:
	              _context36.n = 4;
	              break;
	            case 3:
	              _context36.p = 3;
	              _context36.v;
	            case 4:
	              return _context36.a(2);
	          }
	        }, _callee34, null, [[1, 3]]);
	      }));
	      return function reject(_x155) {
	        return _ref67.apply(this, arguments);
	      };
	    }();
	  });
	  return {
	    promise: promise,
	    //@ts-ignore
	    resolve: resolve,
	    //@ts-ignore
	    reject: reject
	  };
	}

	// lib/dom/ssr/routeModules.ts
	function loadRouteModule(_x156, _x157) {
	  return _loadRouteModule.apply(this, arguments);
	} // lib/dom/ssr/links.ts
	function _loadRouteModule() {
	  _loadRouteModule = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee87(route, routeModulesCache) {
	    var routeModule, _t45;
	    return _regenerator().w(function (_context89) {
	      while (1) switch (_context89.p = _context89.n) {
	        case 0:
	          if (!(route.id in routeModulesCache)) {
	            _context89.n = 1;
	            break;
	          }
	          return _context89.a(2, routeModulesCache[route.id]);
	        case 1:
	          _context89.p = 1;
	          _context89.n = 2;
	          return import(/* @vite-ignore */
	          /* webpackIgnore: true */
	          route.module);
	        case 2:
	          routeModule = _context89.v;
	          routeModulesCache[route.id] = routeModule;
	          return _context89.a(2, routeModule);
	        case 3:
	          _context89.p = 3;
	          _t45 = _context89.v;
	          console.error("Error loading route module `".concat(route.module, "`, reloading page..."));
	          console.error(_t45);
	          if (!(window.__reactRouterContext && window.__reactRouterContext.isSpaMode &&
	          // @ts-expect-error
	          undefined)) {
	            _context89.n = 4;
	            break;
	          }
	          throw _t45;
	        case 4:
	          window.location.reload();
	          return _context89.a(2, new Promise(function () {}));
	      }
	    }, _callee87, null, [[1, 3]]);
	  }));
	  return _loadRouteModule.apply(this, arguments);
	}
	function getKeyedLinksForMatches(matches, routeModules, manifest) {
	  var descriptors = matches.map(function (match) {
	    var _module$links;
	    var module = routeModules[match.route.id];
	    var route = manifest.routes[match.route.id];
	    return [route && route.css ? route.css.map(function (href) {
	      return {
	        rel: "stylesheet",
	        href: href
	      };
	    }) : [], (module === null || module === void 0 ? void 0 : (_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || []];
	  }).flat(2);
	  var preloads = getModuleLinkHrefs(matches, manifest);
	  return dedupeLinkDescriptors(descriptors, preloads);
	}
	function getRouteCssDescriptors(route) {
	  if (!route.css) return [];
	  return route.css.map(function (href) {
	    return {
	      rel: "stylesheet",
	      href: href
	    };
	  });
	}
	function prefetchRouteCss(_x158) {
	  return _prefetchRouteCss.apply(this, arguments);
	}
	function _prefetchRouteCss() {
	  _prefetchRouteCss = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee88(route) {
	    var descriptors;
	    return _regenerator().w(function (_context90) {
	      while (1) switch (_context90.n) {
	        case 0:
	          if (route.css) {
	            _context90.n = 1;
	            break;
	          }
	          return _context90.a(2);
	        case 1:
	          descriptors = getRouteCssDescriptors(route);
	          _context90.n = 2;
	          return Promise.all(descriptors.map(prefetchStyleLink));
	        case 2:
	          return _context90.a(2);
	      }
	    }, _callee88);
	  }));
	  return _prefetchRouteCss.apply(this, arguments);
	}
	function prefetchStyleLinks(_x159, _x160) {
	  return _prefetchStyleLinks.apply(this, arguments);
	}
	function _prefetchStyleLinks() {
	  _prefetchStyleLinks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee89(route, routeModule) {
	    var descriptors, styleLinks, _i10, _descriptors, descriptor;
	    return _regenerator().w(function (_context91) {
	      while (1) switch (_context91.n) {
	        case 0:
	          if (!(!route.css && !routeModule.links || !isPreloadSupported())) {
	            _context91.n = 1;
	            break;
	          }
	          return _context91.a(2);
	        case 1:
	          descriptors = [];
	          if (route.css) {
	            descriptors.push.apply(descriptors, _toConsumableArray(getRouteCssDescriptors(route)));
	          }
	          if (routeModule.links) {
	            descriptors.push.apply(descriptors, _toConsumableArray(routeModule.links()));
	          }
	          if (!(descriptors.length === 0)) {
	            _context91.n = 2;
	            break;
	          }
	          return _context91.a(2);
	        case 2:
	          styleLinks = [];
	          for (_i10 = 0, _descriptors = descriptors; _i10 < _descriptors.length; _i10++) {
	            descriptor = _descriptors[_i10];
	            if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
	              styleLinks.push(_objectSpread2(_objectSpread2({}, descriptor), {}, {
	                rel: "preload",
	                as: "style"
	              }));
	            }
	          }
	          _context91.n = 3;
	          return Promise.all(styleLinks.map(prefetchStyleLink));
	        case 3:
	          return _context91.a(2);
	      }
	    }, _callee89);
	  }));
	  return _prefetchStyleLinks.apply(this, arguments);
	}
	function prefetchStyleLink(_x161) {
	  return _prefetchStyleLink.apply(this, arguments);
	}
	function _prefetchStyleLink() {
	  _prefetchStyleLink = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee90(descriptor) {
	    return _regenerator().w(function (_context92) {
	      while (1) switch (_context92.n) {
	        case 0:
	          return _context92.a(2, new Promise(function (resolve) {
	            if (descriptor.media && !window.matchMedia(descriptor.media).matches || document.querySelector("link[rel=\"stylesheet\"][href=\"".concat(descriptor.href, "\"]"))) {
	              return resolve();
	            }
	            var link = document.createElement("link");
	            Object.assign(link, descriptor);
	            function removeLink() {
	              if (document.head.contains(link)) {
	                document.head.removeChild(link);
	              }
	            }
	            link.onload = function () {
	              removeLink();
	              resolve();
	            };
	            link.onerror = function () {
	              removeLink();
	              resolve();
	            };
	            document.head.appendChild(link);
	          }));
	      }
	    }, _callee90);
	  }));
	  return _prefetchStyleLink.apply(this, arguments);
	}
	function isPageLinkDescriptor(object) {
	  return object != null && typeof object.page === "string";
	}
	function isHtmlLinkDescriptor(object) {
	  if (object == null) {
	    return false;
	  }
	  if (object.href == null) {
	    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
	  }
	  return typeof object.rel === "string" && typeof object.href === "string";
	}
	function getKeyedPrefetchLinks(_x162, _x163, _x164) {
	  return _getKeyedPrefetchLinks.apply(this, arguments);
	}
	function _getKeyedPrefetchLinks() {
	  _getKeyedPrefetchLinks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee92(matches, manifest, routeModules) {
	    var links;
	    return _regenerator().w(function (_context94) {
	      while (1) switch (_context94.n) {
	        case 0:
	          _context94.n = 1;
	          return Promise.all(matches.map(/*#__PURE__*/function () {
	            var _ref131 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee91(match) {
	              var route, mod;
	              return _regenerator().w(function (_context93) {
	                while (1) switch (_context93.n) {
	                  case 0:
	                    route = manifest.routes[match.route.id];
	                    if (!route) {
	                      _context93.n = 2;
	                      break;
	                    }
	                    _context93.n = 1;
	                    return loadRouteModule(route, routeModules);
	                  case 1:
	                    mod = _context93.v;
	                    return _context93.a(2, mod.links ? mod.links() : []);
	                  case 2:
	                    return _context93.a(2, []);
	                }
	              }, _callee91);
	            }));
	            return function (_x192) {
	              return _ref131.apply(this, arguments);
	            };
	          }()));
	        case 1:
	          links = _context94.v;
	          return _context94.a(2, dedupeLinkDescriptors(links.flat(1).filter(isHtmlLinkDescriptor).filter(function (link) {
	            return link.rel === "stylesheet" || link.rel === "preload";
	          }).map(function (link) {
	            return link.rel === "stylesheet" ? _objectSpread2(_objectSpread2({}, link), {}, {
	              rel: "prefetch",
	              as: "style"
	            }) : _objectSpread2(_objectSpread2({}, link), {}, {
	              rel: "prefetch"
	            });
	          })));
	      }
	    }, _callee92);
	  }));
	  return _getKeyedPrefetchLinks.apply(this, arguments);
	}
	function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
	  var isNew = function isNew(match, index) {
	    if (!currentMatches[index]) return true;
	    return match.route.id !== currentMatches[index].route.id;
	  };
	  var matchPathChanged = function matchPathChanged(match, index) {
	    var _currentMatches$index;
	    return (
	      // param change, /users/123 -> /users/456
	      currentMatches[index].pathname !== match.pathname ||
	      // splat param changed, which is not present in match.path
	      // e.g. /files/images/avatar.jpg -> files/finances.xls
	      ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"]
	    );
	  };
	  if (mode === "assets") {
	    return nextMatches.filter(function (match, index) {
	      return isNew(match, index) || matchPathChanged(match, index);
	    });
	  }
	  if (mode === "data") {
	    return nextMatches.filter(function (match, index) {
	      var manifestRoute = manifest.routes[match.route.id];
	      if (!manifestRoute || !manifestRoute.hasLoader) {
	        return false;
	      }
	      if (isNew(match, index) || matchPathChanged(match, index)) {
	        return true;
	      }
	      if (match.route.shouldRevalidate) {
	        var _currentMatches$;
	        var routeChoice = match.route.shouldRevalidate({
	          currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
	          currentParams: ((_currentMatches$ = currentMatches[0]) === null || _currentMatches$ === void 0 ? void 0 : _currentMatches$.params) || {},
	          nextUrl: new URL(page, window.origin),
	          nextParams: match.params,
	          defaultShouldRevalidate: true
	        });
	        if (typeof routeChoice === "boolean") {
	          return routeChoice;
	        }
	      }
	      return true;
	    });
	  }
	  return [];
	}
	function getModuleLinkHrefs(matches, manifest) {
	  var _ref68 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	    includeHydrateFallback = _ref68.includeHydrateFallback;
	  return dedupeHrefs(matches.map(function (match) {
	    var route = manifest.routes[match.route.id];
	    if (!route) return [];
	    var hrefs = [route.module];
	    if (route.clientActionModule) {
	      hrefs = hrefs.concat(route.clientActionModule);
	    }
	    if (route.clientLoaderModule) {
	      hrefs = hrefs.concat(route.clientLoaderModule);
	    }
	    if (includeHydrateFallback && route.hydrateFallbackModule) {
	      hrefs = hrefs.concat(route.hydrateFallbackModule);
	    }
	    if (route.imports) {
	      hrefs = hrefs.concat(route.imports);
	    }
	    return hrefs;
	  }).flat(1));
	}
	function dedupeHrefs(hrefs) {
	  return _toConsumableArray(new Set(hrefs));
	}
	function sortKeys(obj) {
	  var sorted = {};
	  var keys = Object.keys(obj).sort();
	  var _iterator19 = _createForOfIteratorHelper(keys),
	    _step19;
	  try {
	    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
	      var key = _step19.value;
	      sorted[key] = obj[key];
	    }
	  } catch (err) {
	    _iterator19.e(err);
	  } finally {
	    _iterator19.f();
	  }
	  return sorted;
	}
	function dedupeLinkDescriptors(descriptors, preloads) {
	  var set = /* @__PURE__ */new Set();
	  var preloadsSet = new Set(preloads);
	  return descriptors.reduce(function (deduped, descriptor) {
	    var alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
	    if (alreadyModulePreload) {
	      return deduped;
	    }
	    var key = JSON.stringify(sortKeys(descriptor));
	    if (!set.has(key)) {
	      set.add(key);
	      deduped.push({
	        key: key,
	        link: descriptor
	      });
	    }
	    return deduped;
	  }, []);
	}
	var _isPreloadSupported;
	function isPreloadSupported() {
	  if (_isPreloadSupported !== void 0) {
	    return _isPreloadSupported;
	  }
	  var el = document.createElement("link");
	  _isPreloadSupported = el.relList.supports("preload");
	  el = null;
	  return _isPreloadSupported;
	}
	function RemixRootDefaultHydrateFallback() {
	  return /* @__PURE__ */React3__namespace.createElement(BoundaryShell, {
	    title: "Loading...",
	    renderScripts: true
	  }, /* @__PURE__ */React3__namespace.createElement("script", {
	    dangerouslySetInnerHTML: {
	      __html: "\n              console.log(\n                \"\uD83D\uDCBF Hey developer \uD83D\uDC4B. You can provide a way better UX than this \" +\n                \"when your app is loading JS modules and/or running `clientLoader` \" +\n                \"functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback \" +\n                \"for more information.\"\n              );\n            "
	    }
	  }) );
	}

	// lib/dom/ssr/routes.tsx
	function groupRoutesByParentId$1(manifest) {
	  var routes = {};
	  Object.values(manifest).forEach(function (route) {
	    if (route) {
	      var parentId = route.parentId || "";
	      if (!routes[parentId]) {
	        routes[parentId] = [];
	      }
	      routes[parentId].push(route);
	    }
	  });
	  return routes;
	}
	function getRouteComponents(route, routeModule, isSpaMode) {
	  var Component4 = getRouteModuleComponent(routeModule);
	  var HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
	  var ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? function () {
	    return /* @__PURE__ */React3__namespace.createElement(RemixRootDefaultErrorBoundary, {
	      error: useRouteError()
	    });
	  } : void 0;
	  if (route.id === "root" && routeModule.Layout) {
	    return _objectSpread2(_objectSpread2(_objectSpread2({}, Component4 ? {
	      element: /* @__PURE__ */React3__namespace.createElement(routeModule.Layout, null, /* @__PURE__ */React3__namespace.createElement(Component4, null))
	    } : {
	      Component: Component4
	    }), ErrorBoundary ? {
	      errorElement: /* @__PURE__ */React3__namespace.createElement(routeModule.Layout, null, /* @__PURE__ */React3__namespace.createElement(ErrorBoundary, null))
	    } : {
	      ErrorBoundary: ErrorBoundary
	    }), HydrateFallback ? {
	      hydrateFallbackElement: /* @__PURE__ */React3__namespace.createElement(routeModule.Layout, null, /* @__PURE__ */React3__namespace.createElement(HydrateFallback, null))
	    } : {
	      HydrateFallback: HydrateFallback
	    });
	  }
	  return {
	    Component: Component4,
	    ErrorBoundary: ErrorBoundary,
	    HydrateFallback: HydrateFallback
	  };
	}
	function createServerRoutes(manifest, routeModules, future, isSpaMode) {
	  var parentId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
	  var routesByParentId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : groupRoutesByParentId$1(manifest);
	  var spaModeLazyPromise = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Promise.resolve({
	    Component: function Component() {
	      return null;
	    }
	  });
	  return (routesByParentId[parentId] || []).map(function (route) {
	    var routeModule = routeModules[route.id];
	    invariant2$1(routeModule, "No `routeModule` available to create server routes");
	    var dataRoute = _objectSpread2(_objectSpread2({}, getRouteComponents(route, routeModule, isSpaMode)), {}, {
	      caseSensitive: route.caseSensitive,
	      id: route.id,
	      index: route.index,
	      path: route.path,
	      handle: routeModule.handle,
	      // For SPA Mode, all routes are lazy except root.  However we tell the
	      // router root is also lazy here too since we don't need a full
	      // implementation - we just need a `lazy` prop to tell the RR rendering
	      // where to stop which is always at the root route in SPA mode
	      lazy: isSpaMode ? function () {
	        return spaModeLazyPromise;
	      } : void 0,
	      // For partial hydration rendering, we need to indicate when the route
	      // has a loader/clientLoader, but it won't ever be called during the static
	      // render, so just give it a no-op function so we can render down to the
	      // proper fallback
	      loader: route.hasLoader || route.hasClientLoader ? function () {
	        return null;
	      } : void 0
	      // We don't need middleware/action/shouldRevalidate on these routes since
	      // they're for a static render
	    });
	    var children = createServerRoutes(manifest, routeModules, future, isSpaMode, route.id, routesByParentId, spaModeLazyPromise);
	    if (children.length > 0) dataRoute.children = children;
	    return dataRoute;
	  });
	}
	function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, ssr, isSpaMode) {
	  return createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, "", groupRoutesByParentId$1(manifest), needsRevalidation);
	}
	function preventInvalidServerHandlerCall$1(type, route) {
	  if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
	    var fn = type === "action" ? "serverAction()" : "serverLoader()";
	    var msg = "You are trying to call ".concat(fn, " on a route that does not have a server ").concat(type, " (routeId: \"").concat(route.id, "\")");
	    console.error(msg);
	    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
	  }
	}
	function noActionDefinedError(type, routeId) {
	  var article = type === "clientAction" ? "a" : "an";
	  var msg = "Route \"".concat(routeId, "\" does not have ").concat(article, " ").concat(type, ", but you are trying to submit to it. To fix this, please add ").concat(article, " `").concat(type, "` function to the route");
	  console.error(msg);
	  throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
	}
	function createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode) {
	  var parentId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
	  var routesByParentId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : groupRoutesByParentId$1(manifest);
	  var needsRevalidation = arguments.length > 7 ? arguments[7] : undefined;
	  return (routesByParentId[parentId] || []).map(function (route) {
	    var routeModule = routeModulesCache[route.id];
	    function fetchServerHandler(singleFetch) {
	      invariant2$1(typeof singleFetch === "function", "No single fetch function available for route handler");
	      return singleFetch();
	    }
	    function fetchServerLoader(singleFetch) {
	      if (!route.hasLoader) return Promise.resolve(null);
	      return fetchServerHandler(singleFetch);
	    }
	    function fetchServerAction(singleFetch) {
	      if (!route.hasAction) {
	        throw noActionDefinedError("action", route.id);
	      }
	      return fetchServerHandler(singleFetch);
	    }
	    function prefetchModule(modulePath) {
	      import(/* @vite-ignore */
	      /* webpackIgnore: true */
	      modulePath);
	    }
	    function prefetchRouteModuleChunks(route2) {
	      if (route2.clientActionModule) {
	        prefetchModule(route2.clientActionModule);
	      }
	      if (route2.clientLoaderModule) {
	        prefetchModule(route2.clientLoaderModule);
	      }
	    }
	    function prefetchStylesAndCallHandler(_x165) {
	      return _prefetchStylesAndCallHandler.apply(this, arguments);
	    }
	    function _prefetchStylesAndCallHandler() {
	      _prefetchStylesAndCallHandler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee51(handler) {
	        var cachedModule, linkPrefetchPromise;
	        return _regenerator().w(function (_context53) {
	          while (1) switch (_context53.p = _context53.n) {
	            case 0:
	              cachedModule = routeModulesCache[route.id];
	              linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
	              _context53.p = 1;
	              return _context53.a(2, handler());
	            case 2:
	              _context53.p = 2;
	              _context53.n = 3;
	              return linkPrefetchPromise;
	            case 3:
	              return _context53.f(2);
	            case 4:
	              return _context53.a(2);
	          }
	        }, _callee51, null, [[1,, 2, 4]]);
	      }));
	      return _prefetchStylesAndCallHandler.apply(this, arguments);
	    }
	    var dataRoute = {
	      id: route.id,
	      index: route.index,
	      path: route.path
	    };
	    if (routeModule) {
	      var _initialState$loaderD, _initialState$errors, _routeModule$clientLo;
	      Object.assign(dataRoute, _objectSpread2(_objectSpread2(_objectSpread2({}, dataRoute), getRouteComponents(route, routeModule, isSpaMode)), {}, {
	        middleware: routeModule.clientMiddleware,
	        handle: routeModule.handle,
	        shouldRevalidate: getShouldRevalidateFunction(dataRoute.path, routeModule, route, ssr, needsRevalidation)
	      }));
	      var hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
	      var initialData = hasInitialData ? initialState === null || initialState === void 0 ? void 0 : (_initialState$loaderD = initialState.loaderData) === null || _initialState$loaderD === void 0 ? void 0 : _initialState$loaderD[route.id] : void 0;
	      var hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
	      var initialError = hasInitialError ? initialState === null || initialState === void 0 ? void 0 : (_initialState$errors = initialState.errors) === null || _initialState$errors === void 0 ? void 0 : _initialState$errors[route.id] : void 0;
	      var isHydrationRequest = needsRevalidation == null && (((_routeModule$clientLo = routeModule.clientLoader) === null || _routeModule$clientLo === void 0 ? void 0 : _routeModule$clientLo.hydrate) === true || !route.hasLoader);
	      dataRoute.loader = /*#__PURE__*/function () {
	        var _ref70 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37(_ref69, singleFetch) {
	          var request, params, context, result;
	          return _regenerator().w(function (_context39) {
	            while (1) switch (_context39.p = _context39.n) {
	              case 0:
	                request = _ref69.request, params = _ref69.params, context = _ref69.context;
	                _context39.p = 1;
	                _context39.n = 2;
	                return prefetchStylesAndCallHandler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36() {
	                  return _regenerator().w(function (_context38) {
	                    while (1) switch (_context38.n) {
	                      case 0:
	                        invariant2$1(routeModule, "No `routeModule` available for critical-route loader");
	                        if (routeModule.clientLoader) {
	                          _context38.n = 1;
	                          break;
	                        }
	                        return _context38.a(2, fetchServerLoader(singleFetch));
	                      case 1:
	                        return _context38.a(2, routeModule.clientLoader({
	                          request: request,
	                          params: params,
	                          context: context,
	                          serverLoader: function serverLoader() {
	                            return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35() {
	                              return _regenerator().w(function (_context37) {
	                                while (1) switch (_context37.n) {
	                                  case 0:
	                                    preventInvalidServerHandlerCall$1("loader", route);
	                                    if (!isHydrationRequest) {
	                                      _context37.n = 2;
	                                      break;
	                                    }
	                                    if (!hasInitialData) {
	                                      _context37.n = 1;
	                                      break;
	                                    }
	                                    return _context37.a(2, initialData);
	                                  case 1:
	                                    if (!hasInitialError) {
	                                      _context37.n = 2;
	                                      break;
	                                    }
	                                    throw initialError;
	                                  case 2:
	                                    return _context37.a(2, fetchServerLoader(singleFetch));
	                                }
	                              }, _callee35);
	                            }))();
	                          }
	                        }));
	                    }
	                  }, _callee36);
	                })));
	              case 2:
	                result = _context39.v;
	                return _context39.a(2, result);
	              case 3:
	                _context39.p = 3;
	                isHydrationRequest = false;
	                return _context39.f(3);
	              case 4:
	                return _context39.a(2);
	            }
	          }, _callee37, null, [[1,, 3, 4]]);
	        }));
	        return function (_x166, _x167) {
	          return _ref70.apply(this, arguments);
	        };
	      }();
	      dataRoute.loader.hydrate = shouldHydrateRouteLoader(route.id, routeModule.clientLoader, route.hasLoader, isSpaMode);
	      dataRoute.action = function (_ref72, singleFetch) {
	        var request = _ref72.request,
	          params = _ref72.params,
	          context = _ref72.context;
	        return prefetchStylesAndCallHandler(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39() {
	          return _regenerator().w(function (_context41) {
	            while (1) switch (_context41.n) {
	              case 0:
	                invariant2$1(routeModule, "No `routeModule` available for critical-route action");
	                if (routeModule.clientAction) {
	                  _context41.n = 2;
	                  break;
	                }
	                if (!isSpaMode) {
	                  _context41.n = 1;
	                  break;
	                }
	                throw noActionDefinedError("clientAction", route.id);
	              case 1:
	                return _context41.a(2, fetchServerAction(singleFetch));
	              case 2:
	                return _context41.a(2, routeModule.clientAction({
	                  request: request,
	                  params: params,
	                  context: context,
	                  serverAction: function serverAction() {
	                    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38() {
	                      return _regenerator().w(function (_context40) {
	                        while (1) switch (_context40.n) {
	                          case 0:
	                            preventInvalidServerHandlerCall$1("action", route);
	                            return _context40.a(2, fetchServerAction(singleFetch));
	                        }
	                      }, _callee38);
	                    }))();
	                  }
	                }));
	            }
	          }, _callee39);
	        })));
	      };
	    } else {
	      var getLazyRoute = /*#__PURE__*/function () {
	        var _ref74 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41() {
	          return _regenerator().w(function (_context43) {
	            while (1) switch (_context43.n) {
	              case 0:
	                if (!lazyRoutePromise) {
	                  _context43.n = 2;
	                  break;
	                }
	                _context43.n = 1;
	                return lazyRoutePromise;
	              case 1:
	                return _context43.a(2, _context43.v);
	              case 2:
	                lazyRoutePromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40() {
	                  var routeModulePromise;
	                  return _regenerator().w(function (_context42) {
	                    while (1) switch (_context42.n) {
	                      case 0:
	                        if (!(route.clientLoaderModule || route.clientActionModule)) {
	                          _context42.n = 1;
	                          break;
	                        }
	                        _context42.n = 1;
	                        return new Promise(function (resolve) {
	                          return setTimeout(resolve, 0);
	                        });
	                      case 1:
	                        routeModulePromise = loadRouteModuleWithBlockingLinks(route, routeModulesCache);
	                        prefetchRouteModuleChunks(route);
	                        _context42.n = 2;
	                        return routeModulePromise;
	                      case 2:
	                        return _context42.a(2, _context42.v);
	                    }
	                  }, _callee40);
	                }))();
	                _context43.n = 3;
	                return lazyRoutePromise;
	              case 3:
	                return _context43.a(2, _context43.v);
	            }
	          }, _callee41);
	        }));
	        return function getLazyRoute() {
	          return _ref74.apply(this, arguments);
	        };
	      }();
	      if (!route.hasClientLoader) {
	        dataRoute.loader = function (_, singleFetch) {
	          return prefetchStylesAndCallHandler(function () {
	            return fetchServerLoader(singleFetch);
	          });
	        };
	      }
	      if (!route.hasClientAction) {
	        dataRoute.action = function (_, singleFetch) {
	          return prefetchStylesAndCallHandler(function () {
	            if (isSpaMode) {
	              throw noActionDefinedError("clientAction", route.id);
	            }
	            return fetchServerAction(singleFetch);
	          });
	        };
	      }
	      var lazyRoutePromise;
	      dataRoute.lazy = {
	        loader: route.hasClientLoader ? /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
	          var _ref77, clientLoader, _t17;
	          return _regenerator().w(function (_context45) {
	            while (1) switch (_context45.n) {
	              case 0:
	                if (!route.clientLoaderModule) {
	                  _context45.n = 2;
	                  break;
	                }
	                _context45.n = 1;
	                return import(/* @vite-ignore */
	                /* webpackIgnore: true */
	                route.clientLoaderModule);
	              case 1:
	                _t17 = _context45.v;
	                _context45.n = 4;
	                break;
	              case 2:
	                _context45.n = 3;
	                return getLazyRoute();
	              case 3:
	                _t17 = _context45.v;
	              case 4:
	                _ref77 = _t17;
	                clientLoader = _ref77.clientLoader;
	                invariant2$1(clientLoader, "No `clientLoader` export found");
	                return _context45.a(2, function (args, singleFetch) {
	                  return clientLoader(_objectSpread2(_objectSpread2({}, args), {}, {
	                    serverLoader: function serverLoader() {
	                      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42() {
	                        return _regenerator().w(function (_context44) {
	                          while (1) switch (_context44.n) {
	                            case 0:
	                              preventInvalidServerHandlerCall$1("loader", route);
	                              return _context44.a(2, fetchServerLoader(singleFetch));
	                          }
	                        }, _callee42);
	                      }))();
	                    }
	                  }));
	                });
	            }
	          }, _callee43);
	        })) : void 0,
	        action: route.hasClientAction ? /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45() {
	          var clientActionPromise, _yield$clientActionPr, clientAction;
	          return _regenerator().w(function (_context47) {
	            while (1) switch (_context47.n) {
	              case 0:
	                clientActionPromise = route.clientActionModule ? import(/* @vite-ignore */
	                /* webpackIgnore: true */
	                route.clientActionModule) : getLazyRoute();
	                prefetchRouteModuleChunks(route);
	                _context47.n = 1;
	                return clientActionPromise;
	              case 1:
	                _yield$clientActionPr = _context47.v;
	                clientAction = _yield$clientActionPr.clientAction;
	                invariant2$1(clientAction, "No `clientAction` export found");
	                return _context47.a(2, function (args, singleFetch) {
	                  return clientAction(_objectSpread2(_objectSpread2({}, args), {}, {
	                    serverAction: function serverAction() {
	                      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44() {
	                        return _regenerator().w(function (_context46) {
	                          while (1) switch (_context46.n) {
	                            case 0:
	                              preventInvalidServerHandlerCall$1("action", route);
	                              return _context46.a(2, fetchServerAction(singleFetch));
	                          }
	                        }, _callee44);
	                      }))();
	                    }
	                  }));
	                });
	            }
	          }, _callee45);
	        })) : void 0,
	        middleware: route.hasClientMiddleware ? /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee46() {
	          var _ref80, clientMiddleware, _t18;
	          return _regenerator().w(function (_context48) {
	            while (1) switch (_context48.n) {
	              case 0:
	                if (!route.clientMiddlewareModule) {
	                  _context48.n = 2;
	                  break;
	                }
	                _context48.n = 1;
	                return import(/* @vite-ignore */
	                /* webpackIgnore: true */
	                route.clientMiddlewareModule);
	              case 1:
	                _t18 = _context48.v;
	                _context48.n = 4;
	                break;
	              case 2:
	                _context48.n = 3;
	                return getLazyRoute();
	              case 3:
	                _t18 = _context48.v;
	              case 4:
	                _ref80 = _t18;
	                clientMiddleware = _ref80.clientMiddleware;
	                invariant2$1(clientMiddleware, "No `clientMiddleware` export found");
	                return _context48.a(2, clientMiddleware);
	            }
	          }, _callee46);
	        })) : void 0,
	        shouldRevalidate: function () {
	          var _shouldRevalidate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee47() {
	            var lazyRoute;
	            return _regenerator().w(function (_context49) {
	              while (1) switch (_context49.n) {
	                case 0:
	                  _context49.n = 1;
	                  return getLazyRoute();
	                case 1:
	                  lazyRoute = _context49.v;
	                  return _context49.a(2, getShouldRevalidateFunction(dataRoute.path, lazyRoute, route, ssr, needsRevalidation));
	              }
	            }, _callee47);
	          }));
	          function shouldRevalidate() {
	            return _shouldRevalidate.apply(this, arguments);
	          }
	          return shouldRevalidate;
	        }(),
	        handle: function () {
	          var _handle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee48() {
	            return _regenerator().w(function (_context50) {
	              while (1) switch (_context50.n) {
	                case 0:
	                  _context50.n = 1;
	                  return getLazyRoute();
	                case 1:
	                  return _context50.a(2, _context50.v.handle);
	              }
	            }, _callee48);
	          }));
	          function handle() {
	            return _handle.apply(this, arguments);
	          }
	          return handle;
	        }(),
	        // No need to wrap these in layout since the root route is never
	        // loaded via route.lazy()
	        Component: function () {
	          var _Component = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee49() {
	            return _regenerator().w(function (_context51) {
	              while (1) switch (_context51.n) {
	                case 0:
	                  _context51.n = 1;
	                  return getLazyRoute();
	                case 1:
	                  return _context51.a(2, _context51.v.Component);
	              }
	            }, _callee49);
	          }));
	          function Component() {
	            return _Component.apply(this, arguments);
	          }
	          return Component;
	        }(),
	        ErrorBoundary: route.hasErrorBoundary ? /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee50() {
	          return _regenerator().w(function (_context52) {
	            while (1) switch (_context52.n) {
	              case 0:
	                _context52.n = 1;
	                return getLazyRoute();
	              case 1:
	                return _context52.a(2, _context52.v.ErrorBoundary);
	            }
	          }, _callee50);
	        })) : void 0
	      };
	    }
	    var children = createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, route.id, routesByParentId, needsRevalidation);
	    if (children.length > 0) dataRoute.children = children;
	    return dataRoute;
	  });
	}
	function getShouldRevalidateFunction(path, route, manifestRoute, ssr, needsRevalidation) {
	  if (needsRevalidation) {
	    return wrapShouldRevalidateForHdr(manifestRoute.id, route.shouldRevalidate, needsRevalidation);
	  }
	  if (!ssr && manifestRoute.hasLoader && !manifestRoute.hasClientLoader) {
	    var myParams = path ? compilePath(path)[1].map(function (p) {
	      return p.paramName;
	    }) : [];
	    var didParamsChange = function didParamsChange(opts) {
	      return myParams.some(function (p) {
	        return opts.currentParams[p] !== opts.nextParams[p];
	      });
	    };
	    if (route.shouldRevalidate) {
	      var fn = route.shouldRevalidate;
	      return function (opts) {
	        return fn(_objectSpread2(_objectSpread2({}, opts), {}, {
	          defaultShouldRevalidate: didParamsChange(opts)
	        }));
	      };
	    } else {
	      return function (opts) {
	        return didParamsChange(opts);
	      };
	    }
	  }
	  if (ssr && route.shouldRevalidate) {
	    var _fn = route.shouldRevalidate;
	    return function (opts) {
	      return _fn(_objectSpread2(_objectSpread2({}, opts), {}, {
	        defaultShouldRevalidate: true
	      }));
	    };
	  }
	  return route.shouldRevalidate;
	}
	function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
	  var handledRevalidation = false;
	  return function (arg) {
	    if (!handledRevalidation) {
	      handledRevalidation = true;
	      return needsRevalidation.has(routeId);
	    }
	    return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
	  };
	}
	function loadRouteModuleWithBlockingLinks(_x168, _x169) {
	  return _loadRouteModuleWithBlockingLinks.apply(this, arguments);
	}
	function _loadRouteModuleWithBlockingLinks() {
	  _loadRouteModuleWithBlockingLinks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee93(route, routeModules) {
	    var routeModulePromise, prefetchRouteCssPromise, routeModule;
	    return _regenerator().w(function (_context95) {
	      while (1) switch (_context95.n) {
	        case 0:
	          routeModulePromise = loadRouteModule(route, routeModules);
	          prefetchRouteCssPromise = prefetchRouteCss(route);
	          _context95.n = 1;
	          return routeModulePromise;
	        case 1:
	          routeModule = _context95.v;
	          _context95.n = 2;
	          return Promise.all([prefetchRouteCssPromise, prefetchStyleLinks(route, routeModule)]);
	        case 2:
	          return _context95.a(2, {
	            Component: getRouteModuleComponent(routeModule),
	            ErrorBoundary: routeModule.ErrorBoundary,
	            clientMiddleware: routeModule.clientMiddleware,
	            clientAction: routeModule.clientAction,
	            clientLoader: routeModule.clientLoader,
	            handle: routeModule.handle,
	            links: routeModule.links,
	            meta: routeModule.meta,
	            shouldRevalidate: routeModule.shouldRevalidate
	          });
	      }
	    }, _callee93);
	  }));
	  return _loadRouteModuleWithBlockingLinks.apply(this, arguments);
	}
	function getRouteModuleComponent(routeModule) {
	  if (routeModule["default"] == null) return void 0;
	  var isEmptyObject = typeof routeModule["default"] === "object" && Object.keys(routeModule["default"]).length === 0;
	  if (!isEmptyObject) {
	    return routeModule["default"];
	  }
	}
	function shouldHydrateRouteLoader(routeId, clientLoader, hasLoader, isSpaMode) {
	  return isSpaMode && routeId !== "root" || clientLoader != null && (clientLoader.hydrate === true || hasLoader !== true);
	}

	// lib/dom/ssr/fog-of-war.ts
	var nextPaths$1 = /* @__PURE__ */new Set();
	var discoveredPathsMaxSize$1 = 1e3;
	var discoveredPaths$1 = /* @__PURE__ */new Set();
	var URL_LIMIT$1 = 7680;
	function isFogOfWarEnabled(routeDiscovery, ssr) {
	  return routeDiscovery.mode === "lazy" && ssr === true;
	}
	function getPartialManifest(_ref82, router) {
	  var sri = _ref82.sri,
	    manifest = _objectWithoutProperties(_ref82, _excluded$1);
	  var routeIds = new Set(router.state.matches.map(function (m) {
	    return m.route.id;
	  }));
	  var segments = router.state.location.pathname.split("/").filter(Boolean);
	  var paths = ["/"];
	  segments.pop();
	  while (segments.length > 0) {
	    paths.push("/".concat(segments.join("/")));
	    segments.pop();
	  }
	  paths.forEach(function (path) {
	    var matches = matchRoutes(router.routes, path, router.basename);
	    if (matches) {
	      matches.forEach(function (m) {
	        return routeIds.add(m.route.id);
	      });
	    }
	  });
	  var initialRoutes = _toConsumableArray(routeIds).reduce(function (acc, id) {
	    return Object.assign(acc, _defineProperty({}, id, manifest.routes[id]));
	  }, {});
	  return _objectSpread2(_objectSpread2({}, manifest), {}, {
	    routes: initialRoutes,
	    sri: sri ? true : void 0
	  });
	}
	function getPatchRoutesOnNavigationFunction(manifest, routeModules, ssr, routeDiscovery, isSpaMode, basename) {
	  if (!isFogOfWarEnabled(routeDiscovery, ssr)) {
	    return void 0;
	  }
	  return /*#__PURE__*/function () {
	    var _ref84 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee52(_ref83) {
	      var path, patch, signal, fetcherKey;
	      return _regenerator().w(function (_context54) {
	        while (1) switch (_context54.n) {
	          case 0:
	            path = _ref83.path, patch = _ref83.patch, signal = _ref83.signal, fetcherKey = _ref83.fetcherKey;
	            if (!discoveredPaths$1.has(path)) {
	              _context54.n = 1;
	              break;
	            }
	            return _context54.a(2);
	          case 1:
	            _context54.n = 2;
	            return fetchAndApplyManifestPatches$1([path], fetcherKey ? window.location.href : path, manifest, routeModules, ssr, isSpaMode, basename, routeDiscovery.manifestPath, patch, signal);
	          case 2:
	            return _context54.a(2);
	        }
	      }, _callee52);
	    }));
	    return function (_x170) {
	      return _ref84.apply(this, arguments);
	    };
	  }();
	}
	function useFogOFWarDiscovery(router, manifest, routeModules, ssr, routeDiscovery, isSpaMode) {
	  React3__namespace.useEffect(function () {
	    var _window$navigator, _window$navigator$con;
	    if (!isFogOfWarEnabled(routeDiscovery, ssr) ||
	    // @ts-expect-error - TS doesn't know about this yet
	    ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$con = _window$navigator.connection) === null || _window$navigator$con === void 0 ? void 0 : _window$navigator$con.saveData) === true) {
	      return;
	    }
	    function registerElement(el) {
	      var path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
	      if (!path) {
	        return;
	      }
	      var pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
	      if (!discoveredPaths$1.has(pathname)) {
	        nextPaths$1.add(pathname);
	      }
	    }
	    function fetchPatches() {
	      return _fetchPatches.apply(this, arguments);
	    }
	    function _fetchPatches() {
	      _fetchPatches = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee53() {
	        var lazyPaths, _t19;
	        return _regenerator().w(function (_context55) {
	          while (1) switch (_context55.p = _context55.n) {
	            case 0:
	              document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
	              lazyPaths = Array.from(nextPaths$1.keys()).filter(function (path) {
	                if (discoveredPaths$1.has(path)) {
	                  nextPaths$1["delete"](path);
	                  return false;
	                }
	                return true;
	              });
	              if (!(lazyPaths.length === 0)) {
	                _context55.n = 1;
	                break;
	              }
	              return _context55.a(2);
	            case 1:
	              _context55.p = 1;
	              _context55.n = 2;
	              return fetchAndApplyManifestPatches$1(lazyPaths, null, manifest, routeModules, ssr, isSpaMode, router.basename, routeDiscovery.manifestPath, router.patchRoutes);
	            case 2:
	              _context55.n = 4;
	              break;
	            case 3:
	              _context55.p = 3;
	              _t19 = _context55.v;
	              console.error("Failed to fetch manifest patches", _t19);
	            case 4:
	              return _context55.a(2);
	          }
	        }, _callee53, null, [[1, 3]]);
	      }));
	      return _fetchPatches.apply(this, arguments);
	    }
	    var debouncedFetchPatches = debounce$1(fetchPatches, 100);
	    fetchPatches();
	    var observer = new MutationObserver(function () {
	      return debouncedFetchPatches();
	    });
	    observer.observe(document.documentElement, {
	      subtree: true,
	      childList: true,
	      attributes: true,
	      attributeFilter: ["data-discover", "href", "action"]
	    });
	    return function () {
	      return observer.disconnect();
	    };
	  }, [ssr, isSpaMode, manifest, routeModules, router, routeDiscovery]);
	}
	function getManifestPath(_manifestPath, basename) {
	  var manifestPath = _manifestPath || "/__manifest";
	  if (basename == null) {
	    return manifestPath;
	  }
	  return "".concat(basename).concat(manifestPath).replace(/\/+/g, "/");
	}
	var MANIFEST_VERSION_STORAGE_KEY = "react-router-manifest-version";
	function fetchAndApplyManifestPatches$1(_x171, _x172, _x173, _x174, _x175, _x176, _x177, _x178, _x179, _x180) {
	  return _fetchAndApplyManifestPatches$1.apply(this, arguments);
	}
	function _fetchAndApplyManifestPatches$1() {
	  _fetchAndApplyManifestPatches$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee94(paths, errorReloadPath, manifest, routeModules, ssr, isSpaMode, basename, manifestPath, patchRoutes, signal) {
	    var searchParams, url, serverPatches, res, knownRoutes, patches, parentIds, _t46, _t47, _t48;
	    return _regenerator().w(function (_context96) {
	      while (1) switch (_context96.p = _context96.n) {
	        case 0:
	          searchParams = new URLSearchParams();
	          paths.sort().forEach(function (path) {
	            return searchParams.append("p", path);
	          });
	          searchParams.set("version", manifest.version);
	          url = new URL(getManifestPath(manifestPath, basename), window.location.origin);
	          url.search = searchParams.toString();
	          if (!(url.toString().length > URL_LIMIT$1)) {
	            _context96.n = 1;
	            break;
	          }
	          nextPaths$1.clear();
	          return _context96.a(2);
	        case 1:
	          _context96.p = 1;
	          _context96.n = 2;
	          return fetch(url, {
	            signal: signal
	          });
	        case 2:
	          res = _context96.v;
	          if (res.ok) {
	            _context96.n = 3;
	            break;
	          }
	          throw new Error("".concat(res.status, " ").concat(res.statusText));
	        case 3:
	          if (!(res.status === 204 && res.headers.has("X-Remix-Reload-Document"))) {
	            _context96.n = 7;
	            break;
	          }
	          if (errorReloadPath) {
	            _context96.n = 4;
	            break;
	          }
	          console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
	          return _context96.a(2);
	        case 4:
	          if (!(sessionStorage.getItem(MANIFEST_VERSION_STORAGE_KEY) === manifest.version)) {
	            _context96.n = 5;
	            break;
	          }
	          console.error("Unable to discover routes due to manifest version mismatch.");
	          return _context96.a(2);
	        case 5:
	          sessionStorage.setItem(MANIFEST_VERSION_STORAGE_KEY, manifest.version);
	          window.location.href = errorReloadPath;
	          console.warn("Detected manifest version mismatch, reloading...");
	          _context96.n = 6;
	          return new Promise(function () {});
	        case 6:
	          _context96.n = 9;
	          break;
	        case 7:
	          if (!(res.status >= 400)) {
	            _context96.n = 9;
	            break;
	          }
	          _t46 = Error;
	          _context96.n = 8;
	          return res.text();
	        case 8:
	          _t47 = _context96.v;
	          throw new _t46(_t47);
	        case 9:
	          sessionStorage.removeItem(MANIFEST_VERSION_STORAGE_KEY);
	          _context96.n = 10;
	          return res.json();
	        case 10:
	          serverPatches = _context96.v;
	          _context96.n = 13;
	          break;
	        case 11:
	          _context96.p = 11;
	          _t48 = _context96.v;
	          if (!(signal !== null && signal !== void 0 && signal.aborted)) {
	            _context96.n = 12;
	            break;
	          }
	          return _context96.a(2);
	        case 12:
	          throw _t48;
	        case 13:
	          knownRoutes = new Set(Object.keys(manifest.routes));
	          patches = Object.values(serverPatches).reduce(function (acc, route) {
	            if (route && !knownRoutes.has(route.id)) {
	              acc[route.id] = route;
	            }
	            return acc;
	          }, {});
	          Object.assign(manifest.routes, patches);
	          paths.forEach(function (p) {
	            return addToFifoQueue$1(p, discoveredPaths$1);
	          });
	          parentIds = /* @__PURE__ */new Set();
	          Object.values(patches).forEach(function (patch) {
	            if (patch && (!patch.parentId || !patches[patch.parentId])) {
	              parentIds.add(patch.parentId);
	            }
	          });
	          parentIds.forEach(function (parentId) {
	            return patchRoutes(parentId || null, createClientRoutes(patches, routeModules, null, ssr, isSpaMode, parentId));
	          });
	        case 14:
	          return _context96.a(2);
	      }
	    }, _callee94, null, [[1, 11]]);
	  }));
	  return _fetchAndApplyManifestPatches$1.apply(this, arguments);
	}
	function addToFifoQueue$1(path, queue) {
	  if (queue.size >= discoveredPathsMaxSize$1) {
	    var first = queue.values().next().value;
	    queue["delete"](first);
	  }
	  queue.add(path);
	}
	function debounce$1(callback, wait) {
	  var timeoutId;
	  return function () {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	    window.clearTimeout(timeoutId);
	    timeoutId = window.setTimeout(function () {
	      return callback.apply(void 0, args);
	    }, wait);
	  };
	}

	// lib/dom/ssr/components.tsx
	function useDataRouterContext2() {
	  var context = React3__namespace.useContext(DataRouterContext);
	  invariant2$1(context, "You must render this element inside a <DataRouterContext.Provider> element");
	  return context;
	}
	function useDataRouterStateContext() {
	  var context = React3__namespace.useContext(DataRouterStateContext);
	  invariant2$1(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
	  return context;
	}
	var FrameworkContext = /*#__PURE__*/React3__namespace.createContext(void 0);
	FrameworkContext.displayName = "FrameworkContext";
	function useFrameworkContext() {
	  var context = React3__namespace.useContext(FrameworkContext);
	  invariant2$1(context, "You must render this element inside a <HydratedRouter> element");
	  return context;
	}
	function usePrefetchBehavior(prefetch, theirElementProps) {
	  var frameworkContext = React3__namespace.useContext(FrameworkContext);
	  var _React8$useState = React3__namespace.useState(false),
	    _React8$useState2 = _slicedToArray(_React8$useState, 2),
	    maybePrefetch = _React8$useState2[0],
	    setMaybePrefetch = _React8$useState2[1];
	  var _React8$useState3 = React3__namespace.useState(false),
	    _React8$useState4 = _slicedToArray(_React8$useState3, 2),
	    shouldPrefetch = _React8$useState4[0],
	    setShouldPrefetch = _React8$useState4[1];
	  var onFocus = theirElementProps.onFocus,
	    onBlur = theirElementProps.onBlur,
	    onMouseEnter = theirElementProps.onMouseEnter,
	    onMouseLeave = theirElementProps.onMouseLeave,
	    onTouchStart = theirElementProps.onTouchStart;
	  var ref = React3__namespace.useRef(null);
	  React3__namespace.useEffect(function () {
	    if (prefetch === "render") {
	      setShouldPrefetch(true);
	    }
	    if (prefetch === "viewport") {
	      var callback = function callback(entries) {
	        entries.forEach(function (entry) {
	          setShouldPrefetch(entry.isIntersecting);
	        });
	      };
	      var observer = new IntersectionObserver(callback, {
	        threshold: 0.5
	      });
	      if (ref.current) observer.observe(ref.current);
	      return function () {
	        observer.disconnect();
	      };
	    }
	  }, [prefetch]);
	  React3__namespace.useEffect(function () {
	    if (maybePrefetch) {
	      var id = setTimeout(function () {
	        setShouldPrefetch(true);
	      }, 100);
	      return function () {
	        clearTimeout(id);
	      };
	    }
	  }, [maybePrefetch]);
	  var setIntent = function setIntent() {
	    setMaybePrefetch(true);
	  };
	  var cancelIntent = function cancelIntent() {
	    setMaybePrefetch(false);
	    setShouldPrefetch(false);
	  };
	  if (!frameworkContext) {
	    return [false, ref, {}];
	  }
	  if (prefetch !== "intent") {
	    return [shouldPrefetch, ref, {}];
	  }
	  return [shouldPrefetch, ref, {
	    onFocus: composeEventHandlers(onFocus, setIntent),
	    onBlur: composeEventHandlers(onBlur, cancelIntent),
	    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
	    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
	    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
	  }];
	}
	function composeEventHandlers(theirHandler, ourHandler) {
	  return function (event) {
	    theirHandler && theirHandler(event);
	    if (!event.defaultPrevented) {
	      ourHandler(event);
	    }
	  };
	}
	function getActiveMatches(matches, errors, isSpaMode) {
	  if (isSpaMode && !isHydrated) {
	    return [matches[0]];
	  }
	  if (errors) {
	    var errorIdx = matches.findIndex(function (m) {
	      return errors[m.route.id] !== void 0;
	    });
	    return matches.slice(0, errorIdx + 1);
	  }
	  return matches;
	}
	var CRITICAL_CSS_DATA_ATTRIBUTE = "data-react-router-critical-css";
	function Links(_ref85) {
	  var nonce = _ref85.nonce;
	  var _useFrameworkContext = useFrameworkContext(),
	    isSpaMode = _useFrameworkContext.isSpaMode,
	    manifest = _useFrameworkContext.manifest,
	    routeModules = _useFrameworkContext.routeModules,
	    criticalCss = _useFrameworkContext.criticalCss;
	  var _useDataRouterStateCo = useDataRouterStateContext(),
	    errors = _useDataRouterStateCo.errors,
	    routerMatches = _useDataRouterStateCo.matches;
	  var matches = getActiveMatches(routerMatches, errors, isSpaMode);
	  var keyedLinks = React3__namespace.useMemo(function () {
	    return getKeyedLinksForMatches(matches, routeModules, manifest);
	  }, [matches, routeModules, manifest]);
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, typeof criticalCss === "string" ? /* @__PURE__ */React3__namespace.createElement("style", _objectSpread2(_objectSpread2({}, _defineProperty({}, CRITICAL_CSS_DATA_ATTRIBUTE, "")), {}, {
	    dangerouslySetInnerHTML: {
	      __html: criticalCss
	    }
	  })) : null, typeof criticalCss === "object" ? /* @__PURE__ */React3__namespace.createElement("link", _objectSpread2(_objectSpread2({}, _defineProperty({}, CRITICAL_CSS_DATA_ATTRIBUTE, "")), {}, {
	    rel: "stylesheet",
	    href: criticalCss.href,
	    nonce: nonce
	  })) : null, keyedLinks.map(function (_ref86) {
	    var key = _ref86.key,
	      link = _ref86.link;
	    return isPageLinkDescriptor(link) ? /* @__PURE__ */React3__namespace.createElement(PrefetchPageLinks, _objectSpread2({
	      key: key,
	      nonce: nonce
	    }, link)) : /* @__PURE__ */React3__namespace.createElement("link", _objectSpread2({
	      key: key,
	      nonce: nonce
	    }, link));
	  }));
	}
	function PrefetchPageLinks(_ref87) {
	  var page = _ref87.page,
	    linkProps = _objectWithoutProperties(_ref87, _excluded2);
	  var _useDataRouterContext3 = useDataRouterContext2(),
	    router = _useDataRouterContext3.router;
	  var matches = React3__namespace.useMemo(function () {
	    return matchRoutes(router.routes, page, router.basename);
	  }, [router.routes, page, router.basename]);
	  if (!matches) {
	    return null;
	  }
	  return /* @__PURE__ */React3__namespace.createElement(PrefetchPageLinksImpl, _objectSpread2({
	    page: page,
	    matches: matches
	  }, linkProps));
	}
	function useKeyedPrefetchLinks(matches) {
	  var _useFrameworkContext2 = useFrameworkContext(),
	    manifest = _useFrameworkContext2.manifest,
	    routeModules = _useFrameworkContext2.routeModules;
	  var _React8$useState5 = React3__namespace.useState([]),
	    _React8$useState6 = _slicedToArray(_React8$useState5, 2),
	    keyedPrefetchLinks = _React8$useState6[0],
	    setKeyedPrefetchLinks = _React8$useState6[1];
	  React3__namespace.useEffect(function () {
	    var interrupted = false;
	    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(function (links) {
	      if (!interrupted) {
	        setKeyedPrefetchLinks(links);
	      }
	    });
	    return function () {
	      interrupted = true;
	    };
	  }, [matches, manifest, routeModules]);
	  return keyedPrefetchLinks;
	}
	function PrefetchPageLinksImpl(_ref88) {
	  var page = _ref88.page,
	    nextMatches = _ref88.matches,
	    linkProps = _objectWithoutProperties(_ref88, _excluded3);
	  var location = useLocation();
	  var _useFrameworkContext3 = useFrameworkContext(),
	    manifest = _useFrameworkContext3.manifest,
	    routeModules = _useFrameworkContext3.routeModules;
	  var _useDataRouterContext4 = useDataRouterContext2(),
	    basename = _useDataRouterContext4.basename;
	  var _useDataRouterStateCo2 = useDataRouterStateContext(),
	    loaderData = _useDataRouterStateCo2.loaderData,
	    matches = _useDataRouterStateCo2.matches;
	  var newMatchesForData = React3__namespace.useMemo(function () {
	    return getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data");
	  }, [page, nextMatches, matches, manifest, location]);
	  var newMatchesForAssets = React3__namespace.useMemo(function () {
	    return getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets");
	  }, [page, nextMatches, matches, manifest, location]);
	  var dataHrefs = React3__namespace.useMemo(function () {
	    if (page === location.pathname + location.search + location.hash) {
	      return [];
	    }
	    var routesParams = /* @__PURE__ */new Set();
	    var foundOptOutRoute = false;
	    nextMatches.forEach(function (m) {
	      var _routeModules$m$route;
	      var manifestRoute = manifest.routes[m.route.id];
	      if (!manifestRoute || !manifestRoute.hasLoader) {
	        return;
	      }
	      if (!newMatchesForData.some(function (m2) {
	        return m2.route.id === m.route.id;
	      }) && m.route.id in loaderData && (_routeModules$m$route = routeModules[m.route.id]) !== null && _routeModules$m$route !== void 0 && _routeModules$m$route.shouldRevalidate) {
	        foundOptOutRoute = true;
	      } else if (manifestRoute.hasClientLoader) {
	        foundOptOutRoute = true;
	      } else {
	        routesParams.add(m.route.id);
	      }
	    });
	    if (routesParams.size === 0) {
	      return [];
	    }
	    var url = singleFetchUrl(page, basename, "data");
	    if (foundOptOutRoute && routesParams.size > 0) {
	      url.searchParams.set("_routes", nextMatches.filter(function (m) {
	        return routesParams.has(m.route.id);
	      }).map(function (m) {
	        return m.route.id;
	      }).join(","));
	    }
	    return [url.pathname + url.search];
	  }, [basename, loaderData, location, manifest, newMatchesForData, nextMatches, page, routeModules]);
	  var moduleHrefs = React3__namespace.useMemo(function () {
	    return getModuleLinkHrefs(newMatchesForAssets, manifest);
	  }, [newMatchesForAssets, manifest]);
	  var keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, dataHrefs.map(function (href) {
	    return /* @__PURE__ */React3__namespace.createElement("link", _objectSpread2({
	      key: href,
	      rel: "prefetch",
	      as: "fetch",
	      href: href
	    }, linkProps));
	  }), moduleHrefs.map(function (href) {
	    return /* @__PURE__ */React3__namespace.createElement("link", _objectSpread2({
	      key: href,
	      rel: "modulepreload",
	      href: href
	    }, linkProps));
	  }), keyedPrefetchLinks.map(function (_ref89) {
	    var key = _ref89.key,
	      link = _ref89.link;
	    return (
	      // these don't spread `linkProps` because they are full link descriptors
	      // already with their own props
	      /* @__PURE__ */
	      React3__namespace.createElement("link", _objectSpread2({
	        key: key,
	        nonce: linkProps.nonce
	      }, link))
	    );
	  }));
	}
	function Meta() {
	  var _useFrameworkContext4 = useFrameworkContext(),
	    isSpaMode = _useFrameworkContext4.isSpaMode,
	    routeModules = _useFrameworkContext4.routeModules;
	  var _useDataRouterStateCo3 = useDataRouterStateContext(),
	    errors = _useDataRouterStateCo3.errors,
	    routerMatches = _useDataRouterStateCo3.matches,
	    loaderData = _useDataRouterStateCo3.loaderData;
	  var location = useLocation();
	  var _matches = getActiveMatches(routerMatches, errors, isSpaMode);
	  var error = null;
	  if (errors) {
	    error = errors[_matches[_matches.length - 1].route.id];
	  }
	  var meta = [];
	  var leafMeta = null;
	  var matches = [];
	  for (var i = 0; i < _matches.length; i++) {
	    var _match = _matches[i];
	    var routeId = _match.route.id;
	    var data2 = loaderData[routeId];
	    var params = _match.params;
	    var routeModule = routeModules[routeId];
	    var routeMeta = [];
	    var match = {
	      id: routeId,
	      data: data2,
	      loaderData: data2,
	      meta: [],
	      params: _match.params,
	      pathname: _match.pathname,
	      handle: _match.route.handle,
	      error: error
	    };
	    matches[i] = match;
	    if (routeModule !== null && routeModule !== void 0 && routeModule.meta) {
	      routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
	        data: data2,
	        loaderData: data2,
	        params: params,
	        location: location,
	        matches: matches,
	        error: error
	      }) : Array.isArray(routeModule.meta) ? _toConsumableArray(routeModule.meta) : routeModule.meta;
	    } else if (leafMeta) {
	      routeMeta = _toConsumableArray(leafMeta);
	    }
	    routeMeta = routeMeta || [];
	    if (!Array.isArray(routeMeta)) {
	      throw new Error("The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://remix.run/route/meta");
	    }
	    match.meta = routeMeta;
	    matches[i] = match;
	    meta = _toConsumableArray(routeMeta);
	    leafMeta = meta;
	  }
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, meta.flat().map(function (metaProps) {
	    if (!metaProps) {
	      return null;
	    }
	    if ("tagName" in metaProps) {
	      var tagName = metaProps.tagName,
	        rest = _objectWithoutProperties(metaProps, _excluded4);
	      if (!isValidMetaTag(tagName)) {
	        console.warn("A meta object uses an invalid tagName: ".concat(tagName, ". Expected either 'link' or 'meta'"));
	        return null;
	      }
	      var Comp = tagName;
	      return /* @__PURE__ */React3__namespace.createElement(Comp, _objectSpread2({
	        key: JSON.stringify(rest)
	      }, rest));
	    }
	    if ("title" in metaProps) {
	      return /* @__PURE__ */React3__namespace.createElement("title", {
	        key: "title"
	      }, String(metaProps.title));
	    }
	    if ("charset" in metaProps) {
	      var _metaProps$charSet;
	      (_metaProps$charSet = metaProps.charSet) !== null && _metaProps$charSet !== void 0 ? _metaProps$charSet : metaProps.charSet = metaProps.charset;
	      delete metaProps.charset;
	    }
	    if ("charSet" in metaProps && metaProps.charSet != null) {
	      return typeof metaProps.charSet === "string" ? /* @__PURE__ */React3__namespace.createElement("meta", {
	        key: "charSet",
	        charSet: metaProps.charSet
	      }) : null;
	    }
	    if ("script:ld+json" in metaProps) {
	      try {
	        var json = JSON.stringify(metaProps["script:ld+json"]);
	        return /* @__PURE__ */React3__namespace.createElement("script", {
	          key: "script:ld+json:".concat(json),
	          type: "application/ld+json",
	          dangerouslySetInnerHTML: {
	            __html: escapeHtml(json)
	          }
	        });
	      } catch (err) {
	        return null;
	      }
	    }
	    return /* @__PURE__ */React3__namespace.createElement("meta", _objectSpread2({
	      key: JSON.stringify(metaProps)
	    }, metaProps));
	  }));
	}
	function isValidMetaTag(tagName) {
	  return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
	}
	var isHydrated = false;
	function setIsHydrated() {
	  isHydrated = true;
	}
	function Scripts(scriptProps) {
	  var _useFrameworkContext5 = useFrameworkContext(),
	    manifest = _useFrameworkContext5.manifest,
	    serverHandoffString = _useFrameworkContext5.serverHandoffString,
	    isSpaMode = _useFrameworkContext5.isSpaMode,
	    renderMeta = _useFrameworkContext5.renderMeta,
	    routeDiscovery = _useFrameworkContext5.routeDiscovery,
	    ssr = _useFrameworkContext5.ssr;
	  var _useDataRouterContext5 = useDataRouterContext2(),
	    router = _useDataRouterContext5.router,
	    isStatic = _useDataRouterContext5["static"],
	    staticContext = _useDataRouterContext5.staticContext;
	  var _useDataRouterStateCo4 = useDataRouterStateContext(),
	    routerMatches = _useDataRouterStateCo4.matches;
	  var isRSCRouterContext = useIsRSCRouterContext();
	  var enableFogOfWar = isFogOfWarEnabled(routeDiscovery, ssr);
	  if (renderMeta) {
	    renderMeta.didRenderScripts = true;
	  }
	  var matches = getActiveMatches(routerMatches, null, isSpaMode);
	  React3__namespace.useEffect(function () {
	    setIsHydrated();
	  }, []);
	  var initialScripts = React3__namespace.useMemo(function () {
	    var _manifest$hmr;
	    if (isRSCRouterContext) {
	      return null;
	    }
	    var streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
	    var contextScript = staticContext ? "window.__reactRouterContext = ".concat(serverHandoffString, ";").concat(streamScript) : " ";
	    var routeModulesScript = !isStatic ? " " : "".concat((_manifest$hmr = manifest.hmr) !== null && _manifest$hmr !== void 0 && _manifest$hmr.runtime ? "import ".concat(JSON.stringify(manifest.hmr.runtime), ";") : "").concat(!enableFogOfWar ? "import ".concat(JSON.stringify(manifest.url)) : "", ";\n").concat(matches.map(function (match, routeIndex) {
	      var routeVarName = "route".concat(routeIndex);
	      var manifestEntry = manifest.routes[match.route.id];
	      invariant2$1(manifestEntry, "Route ".concat(match.route.id, " not found in manifest"));
	      var clientActionModule = manifestEntry.clientActionModule,
	        clientLoaderModule = manifestEntry.clientLoaderModule,
	        clientMiddlewareModule = manifestEntry.clientMiddlewareModule,
	        hydrateFallbackModule = manifestEntry.hydrateFallbackModule,
	        module = manifestEntry.module;
	      var chunks = [].concat(_toConsumableArray(clientActionModule ? [{
	        module: clientActionModule,
	        varName: "".concat(routeVarName, "_clientAction")
	      }] : []), _toConsumableArray(clientLoaderModule ? [{
	        module: clientLoaderModule,
	        varName: "".concat(routeVarName, "_clientLoader")
	      }] : []), _toConsumableArray(clientMiddlewareModule ? [{
	        module: clientMiddlewareModule,
	        varName: "".concat(routeVarName, "_clientMiddleware")
	      }] : []), _toConsumableArray(hydrateFallbackModule ? [{
	        module: hydrateFallbackModule,
	        varName: "".concat(routeVarName, "_HydrateFallback")
	      }] : []), [{
	        module: module,
	        varName: "".concat(routeVarName, "_main")
	      }]);
	      if (chunks.length === 1) {
	        return "import * as ".concat(routeVarName, " from ").concat(JSON.stringify(module), ";");
	      }
	      var chunkImportsSnippet = chunks.map(function (chunk) {
	        return "import * as ".concat(chunk.varName, " from \"").concat(chunk.module, "\";");
	      }).join("\n");
	      var mergedChunksSnippet = "const ".concat(routeVarName, " = {").concat(chunks.map(function (chunk) {
	        return "...".concat(chunk.varName);
	      }).join(","), "};");
	      return [chunkImportsSnippet, mergedChunksSnippet].join("\n");
	    }).join("\n"), "\n  ").concat(enableFogOfWar ? // Inline a minimal manifest with the SSR matches
	    "window.__reactRouterManifest = ".concat(JSON.stringify(getPartialManifest(manifest, router), null, 2), ";") : "", "\n  window.__reactRouterRouteModules = {").concat(matches.map(function (match, index) {
	      return "".concat(JSON.stringify(match.route.id), ":route").concat(index);
	    }).join(","), "};\n\nimport(").concat(JSON.stringify(manifest.entry.module), ");");
	    return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement("script", _objectSpread2(_objectSpread2({}, scriptProps), {}, {
	      suppressHydrationWarning: true,
	      dangerouslySetInnerHTML: {
	        __html: contextScript
	      },
	      type: void 0
	    })), /* @__PURE__ */React3__namespace.createElement("script", _objectSpread2(_objectSpread2({}, scriptProps), {}, {
	      suppressHydrationWarning: true,
	      dangerouslySetInnerHTML: {
	        __html: routeModulesScript
	      },
	      type: "module",
	      async: true
	    })));
	  }, []);
	  var preloads = isHydrated || isRSCRouterContext ? [] : dedupe(manifest.entry.imports.concat(getModuleLinkHrefs(matches, manifest, {
	    includeHydrateFallback: true
	  })));
	  var sri = typeof manifest.sri === "object" ? manifest.sri : {};
	  warnOnce(!isRSCRouterContext, "The <Scripts /> element is a no-op when using RSC and can be safely removed.");
	  return isHydrated || isRSCRouterContext ? null : /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, typeof manifest.sri === "object" ? /* @__PURE__ */React3__namespace.createElement("script", {
	    "rr-importmap": "",
	    type: "importmap",
	    suppressHydrationWarning: true,
	    dangerouslySetInnerHTML: {
	      __html: JSON.stringify({
	        integrity: sri
	      })
	    }
	  }) : null, !enableFogOfWar ? /* @__PURE__ */React3__namespace.createElement("link", {
	    rel: "modulepreload",
	    href: manifest.url,
	    crossOrigin: scriptProps.crossOrigin,
	    integrity: sri[manifest.url],
	    suppressHydrationWarning: true
	  }) : null, /* @__PURE__ */React3__namespace.createElement("link", {
	    rel: "modulepreload",
	    href: manifest.entry.module,
	    crossOrigin: scriptProps.crossOrigin,
	    integrity: sri[manifest.entry.module],
	    suppressHydrationWarning: true
	  }), preloads.map(function (path) {
	    return /* @__PURE__ */React3__namespace.createElement("link", {
	      key: path,
	      rel: "modulepreload",
	      href: path,
	      crossOrigin: scriptProps.crossOrigin,
	      integrity: sri[path],
	      suppressHydrationWarning: true
	    });
	  }), initialScripts);
	}
	function dedupe(array) {
	  return _toConsumableArray(new Set(array));
	}
	function mergeRefs() {
	  for (var _len3 = arguments.length, refs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    refs[_key3] = arguments[_key3];
	  }
	  return function (value) {
	    refs.forEach(function (ref) {
	      if (typeof ref === "function") {
	        ref(value);
	      } else if (ref != null) {
	        ref.current = value;
	      }
	    });
	  };
	}

	// lib/dom/ssr/errorBoundaries.tsx
	var RemixErrorBoundary = /*#__PURE__*/function (_React9$Component) {
	  function RemixErrorBoundary(props) {
	    var _this7;
	    _classCallCheck(this, RemixErrorBoundary);
	    _this7 = _callSuper(this, RemixErrorBoundary, [props]);
	    _this7.state = {
	      error: props.error || null,
	      location: props.location
	    };
	    return _this7;
	  }
	  _inherits(RemixErrorBoundary, _React9$Component);
	  return _createClass(RemixErrorBoundary, [{
	    key: "render",
	    value: function render() {
	      if (this.state.error) {
	        return /* @__PURE__ */React3__namespace.createElement(RemixRootDefaultErrorBoundary, {
	          error: this.state.error,
	          isOutsideRemixApp: true
	        });
	      } else {
	        return this.props.children;
	      }
	    }
	  }], [{
	    key: "getDerivedStateFromError",
	    value: function getDerivedStateFromError(error) {
	      return {
	        error: error
	      };
	    }
	  }, {
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(props, state) {
	      if (state.location !== props.location) {
	        return {
	          error: props.error || null,
	          location: props.location
	        };
	      }
	      return {
	        error: props.error || state.error,
	        location: state.location
	      };
	    }
	  }]);
	}(React3__namespace.Component);
	function RemixRootDefaultErrorBoundary(_ref90) {
	  var error = _ref90.error,
	    isOutsideRemixApp = _ref90.isOutsideRemixApp;
	  console.error(error);
	  var heyDeveloper = /* @__PURE__ */React3__namespace.createElement("script", {
	    dangerouslySetInnerHTML: {
	      __html: "\n        console.log(\n          \"\uD83D\uDCBF Hey developer \uD83D\uDC4B. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information.\"\n        );\n      "
	    }
	  });
	  if (isRouteErrorResponse(error)) {
	    return /* @__PURE__ */React3__namespace.createElement(BoundaryShell, {
	      title: "Unhandled Thrown Response!"
	    }, /* @__PURE__ */React3__namespace.createElement("h1", {
	      style: {
	        fontSize: "24px"
	      }
	    }, error.status, " ", error.statusText), heyDeveloper );
	  }
	  var errorInstance;
	  if (error instanceof Error) {
	    errorInstance = error;
	  } else {
	    var errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
	    errorInstance = new Error(errorString);
	  }
	  return /* @__PURE__ */React3__namespace.createElement(BoundaryShell, {
	    title: "Application Error!",
	    isOutsideRemixApp: isOutsideRemixApp
	  }, /* @__PURE__ */React3__namespace.createElement("h1", {
	    style: {
	      fontSize: "24px"
	    }
	  }, "Application Error"), /* @__PURE__ */React3__namespace.createElement("pre", {
	    style: {
	      padding: "2rem",
	      background: "hsla(10, 50%, 50%, 0.1)",
	      color: "red",
	      overflow: "auto"
	    }
	  }, errorInstance.stack), heyDeveloper);
	}
	function BoundaryShell(_ref91) {
	  var _routeModules$root;
	  var title = _ref91.title,
	    renderScripts = _ref91.renderScripts,
	    isOutsideRemixApp = _ref91.isOutsideRemixApp,
	    children = _ref91.children;
	  var _useFrameworkContext6 = useFrameworkContext(),
	    routeModules = _useFrameworkContext6.routeModules;
	  if ((_routeModules$root = routeModules.root) !== null && _routeModules$root !== void 0 && _routeModules$root.Layout && !isOutsideRemixApp) {
	    return children;
	  }
	  return /* @__PURE__ */React3__namespace.createElement("html", {
	    lang: "en"
	  }, /* @__PURE__ */React3__namespace.createElement("head", null, /* @__PURE__ */React3__namespace.createElement("meta", {
	    charSet: "utf-8"
	  }), /* @__PURE__ */React3__namespace.createElement("meta", {
	    name: "viewport",
	    content: "width=device-width,initial-scale=1,viewport-fit=cover"
	  }), /* @__PURE__ */React3__namespace.createElement("title", null, title)), /* @__PURE__ */React3__namespace.createElement("body", null, /* @__PURE__ */React3__namespace.createElement("main", {
	    style: {
	      fontFamily: "system-ui, sans-serif",
	      padding: "2rem"
	    }
	  }, children, renderScripts ? /* @__PURE__ */React3__namespace.createElement(Scripts, null) : null)));
	}
	var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
	try {
	  if (isBrowser) {
	    window.__reactRouterVersion =
	    // @ts-expect-error
	    "7.9.1";
	  }
	} catch (e) {}
	function createBrowserRouter(routes, opts) {
	  return createRouter({
	    basename: opts === null || opts === void 0 ? void 0 : opts.basename,
	    getContext: opts === null || opts === void 0 ? void 0 : opts.getContext,
	    future: opts === null || opts === void 0 ? void 0 : opts.future,
	    history: createBrowserHistory({
	      window: opts === null || opts === void 0 ? void 0 : opts.window
	    }),
	    hydrationData: (opts === null || opts === void 0 ? void 0 : opts.hydrationData) || parseHydrationData(),
	    routes: routes,
	    mapRouteProperties: mapRouteProperties,
	    hydrationRouteProperties: hydrationRouteProperties,
	    dataStrategy: opts === null || opts === void 0 ? void 0 : opts.dataStrategy,
	    patchRoutesOnNavigation: opts === null || opts === void 0 ? void 0 : opts.patchRoutesOnNavigation,
	    window: opts === null || opts === void 0 ? void 0 : opts.window
	  }).initialize();
	}
	function createHashRouter(routes, opts) {
	  return createRouter({
	    basename: opts === null || opts === void 0 ? void 0 : opts.basename,
	    getContext: opts === null || opts === void 0 ? void 0 : opts.getContext,
	    future: opts === null || opts === void 0 ? void 0 : opts.future,
	    history: createHashHistory({
	      window: opts === null || opts === void 0 ? void 0 : opts.window
	    }),
	    hydrationData: (opts === null || opts === void 0 ? void 0 : opts.hydrationData) || parseHydrationData(),
	    routes: routes,
	    mapRouteProperties: mapRouteProperties,
	    hydrationRouteProperties: hydrationRouteProperties,
	    dataStrategy: opts === null || opts === void 0 ? void 0 : opts.dataStrategy,
	    patchRoutesOnNavigation: opts === null || opts === void 0 ? void 0 : opts.patchRoutesOnNavigation,
	    window: opts === null || opts === void 0 ? void 0 : opts.window
	  }).initialize();
	}
	function parseHydrationData() {
	  var _window2;
	  var state = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.__staticRouterHydrationData;
	  if (state && state.errors) {
	    state = _objectSpread2(_objectSpread2({}, state), {}, {
	      errors: deserializeErrors$1(state.errors)
	    });
	  }
	  return state;
	}
	function deserializeErrors$1(errors) {
	  if (!errors) return null;
	  var entries = Object.entries(errors);
	  var serialized = {};
	  for (var _i9 = 0, _entries2 = entries; _i9 < _entries2.length; _i9++) {
	    var _entries2$_i = _slicedToArray(_entries2[_i9], 2),
	      key = _entries2$_i[0],
	      val = _entries2$_i[1];
	    if (val && val.__type === "RouteErrorResponse") {
	      serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
	    } else if (val && val.__type === "Error") {
	      if (val.__subType) {
	        var ErrorConstructor = window[val.__subType];
	        if (typeof ErrorConstructor === "function") {
	          try {
	            var error = new ErrorConstructor(val.message);
	            error.stack = "";
	            serialized[key] = error;
	          } catch (e) {}
	        }
	      }
	      if (serialized[key] == null) {
	        var _error6 = new Error(val.message);
	        _error6.stack = "";
	        serialized[key] = _error6;
	      }
	    } else {
	      serialized[key] = val;
	    }
	  }
	  return serialized;
	}
	function BrowserRouter(_ref92) {
	  var basename = _ref92.basename,
	    children = _ref92.children,
	    window2 = _ref92.window;
	  var historyRef = React3__namespace.useRef();
	  if (historyRef.current == null) {
	    historyRef.current = createBrowserHistory({
	      window: window2,
	      v5Compat: true
	    });
	  }
	  var history = historyRef.current;
	  var _React10$useState = React3__namespace.useState({
	      action: history.action,
	      location: history.location
	    }),
	    _React10$useState2 = _slicedToArray(_React10$useState, 2),
	    state = _React10$useState2[0],
	    setStateImpl = _React10$useState2[1];
	  var setState = React3__namespace.useCallback(function (newState) {
	    React3__namespace.startTransition(function () {
	      return setStateImpl(newState);
	    });
	  }, [setStateImpl]);
	  React3__namespace.useLayoutEffect(function () {
	    return history.listen(setState);
	  }, [history, setState]);
	  return /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}
	function HashRouter(_ref93) {
	  var basename = _ref93.basename,
	    children = _ref93.children,
	    window2 = _ref93.window;
	  var historyRef = React3__namespace.useRef();
	  if (historyRef.current == null) {
	    historyRef.current = createHashHistory({
	      window: window2,
	      v5Compat: true
	    });
	  }
	  var history = historyRef.current;
	  var _React10$useState3 = React3__namespace.useState({
	      action: history.action,
	      location: history.location
	    }),
	    _React10$useState4 = _slicedToArray(_React10$useState3, 2),
	    state = _React10$useState4[0],
	    setStateImpl = _React10$useState4[1];
	  var setState = React3__namespace.useCallback(function (newState) {
	    React3__namespace.startTransition(function () {
	      return setStateImpl(newState);
	    });
	  }, [setStateImpl]);
	  React3__namespace.useLayoutEffect(function () {
	    return history.listen(setState);
	  }, [history, setState]);
	  return /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}
	function HistoryRouter(_ref94) {
	  var basename = _ref94.basename,
	    children = _ref94.children,
	    history = _ref94.history;
	  var _React10$useState5 = React3__namespace.useState({
	      action: history.action,
	      location: history.location
	    }),
	    _React10$useState6 = _slicedToArray(_React10$useState5, 2),
	    state = _React10$useState6[0],
	    setStateImpl = _React10$useState6[1];
	  var setState = React3__namespace.useCallback(function (newState) {
	    React3__namespace.startTransition(function () {
	      return setStateImpl(newState);
	    });
	  }, [setStateImpl]);
	  React3__namespace.useLayoutEffect(function () {
	    return history.listen(setState);
	  }, [history, setState]);
	  return /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}
	HistoryRouter.displayName = "unstable_HistoryRouter";
	var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
	var Link = /*#__PURE__*/React3__namespace.forwardRef(function LinkWithRef(_ref95, forwardedRef) {
	  var onClick = _ref95.onClick,
	    _ref95$discover = _ref95.discover,
	    discover = _ref95$discover === void 0 ? "render" : _ref95$discover,
	    _ref95$prefetch = _ref95.prefetch,
	    prefetch = _ref95$prefetch === void 0 ? "none" : _ref95$prefetch,
	    relative = _ref95.relative,
	    reloadDocument = _ref95.reloadDocument,
	    replace2 = _ref95.replace,
	    state = _ref95.state,
	    target = _ref95.target,
	    to = _ref95.to,
	    preventScrollReset = _ref95.preventScrollReset,
	    viewTransition = _ref95.viewTransition,
	    rest = _objectWithoutProperties(_ref95, _excluded5);
	  var _React10$useContext = React3__namespace.useContext(NavigationContext),
	    basename = _React10$useContext.basename;
	  var isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
	  var absoluteHref;
	  var isExternal = false;
	  if (typeof to === "string" && isAbsolute) {
	    absoluteHref = to;
	    if (isBrowser) {
	      try {
	        var currentUrl = new URL(window.location.href);
	        var targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
	        var path = stripBasename(targetUrl.pathname, basename);
	        if (targetUrl.origin === currentUrl.origin && path != null) {
	          to = path + targetUrl.search + targetUrl.hash;
	        } else {
	          isExternal = true;
	        }
	      } catch (e) {
	        warning(false, "<Link to=\"".concat(to, "\"> contains an invalid URL which will probably break when clicked - please update to a valid URL path."));
	      }
	    }
	  }
	  var href = useHref(to, {
	    relative: relative
	  });
	  var _usePrefetchBehavior = usePrefetchBehavior(prefetch, rest),
	    _usePrefetchBehavior2 = _slicedToArray(_usePrefetchBehavior, 3),
	    shouldPrefetch = _usePrefetchBehavior2[0],
	    prefetchRef = _usePrefetchBehavior2[1],
	    prefetchHandlers = _usePrefetchBehavior2[2];
	  var internalOnClick = useLinkClickHandler(to, {
	    replace: replace2,
	    state: state,
	    target: target,
	    preventScrollReset: preventScrollReset,
	    relative: relative,
	    viewTransition: viewTransition
	  });
	  function handleClick(event) {
	    if (onClick) onClick(event);
	    if (!event.defaultPrevented) {
	      internalOnClick(event);
	    }
	  }
	  var link =
	  // eslint-disable-next-line jsx-a11y/anchor-has-content
	  /* @__PURE__ */
	  React3__namespace.createElement("a", _objectSpread2(_objectSpread2(_objectSpread2({}, rest), prefetchHandlers), {}, {
	    href: absoluteHref || href,
	    onClick: isExternal || reloadDocument ? onClick : handleClick,
	    ref: mergeRefs(forwardedRef, prefetchRef),
	    target: target,
	    "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
	  }));
	  return shouldPrefetch && !isAbsolute ? /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, link, /* @__PURE__ */React3__namespace.createElement(PrefetchPageLinks, {
	    page: href
	  })) : link;
	});
	Link.displayName = "Link";
	var NavLink = /*#__PURE__*/React3__namespace.forwardRef(function NavLinkWithRef(_ref96, ref) {
	  var _ref96$ariaCurrent = _ref96["aria-current"],
	    ariaCurrentProp = _ref96$ariaCurrent === void 0 ? "page" : _ref96$ariaCurrent,
	    _ref96$caseSensitive = _ref96.caseSensitive,
	    caseSensitive = _ref96$caseSensitive === void 0 ? false : _ref96$caseSensitive,
	    _ref96$className = _ref96.className,
	    classNameProp = _ref96$className === void 0 ? "" : _ref96$className,
	    _ref96$end = _ref96.end,
	    end = _ref96$end === void 0 ? false : _ref96$end,
	    styleProp = _ref96.style,
	    to = _ref96.to,
	    viewTransition = _ref96.viewTransition,
	    children = _ref96.children,
	    rest = _objectWithoutProperties(_ref96, _excluded6);
	  var path = useResolvedPath(to, {
	    relative: rest.relative
	  });
	  var location = useLocation();
	  var routerState = React3__namespace.useContext(DataRouterStateContext);
	  var _React10$useContext2 = React3__namespace.useContext(NavigationContext),
	    navigator = _React10$useContext2.navigator,
	    basename = _React10$useContext2.basename;
	  var isTransitioning = routerState != null &&
	  // Conditional usage is OK here because the usage of a data router is static
	  // eslint-disable-next-line react-hooks/rules-of-hooks
	  useViewTransitionState(path) && viewTransition === true;
	  var toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
	  var locationPathname = location.pathname;
	  var nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
	  if (!caseSensitive) {
	    locationPathname = locationPathname.toLowerCase();
	    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
	    toPathname = toPathname.toLowerCase();
	  }
	  if (nextLocationPathname && basename) {
	    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
	  }
	  var endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
	  var isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
	  var isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
	  var renderProps = {
	    isActive: isActive,
	    isPending: isPending,
	    isTransitioning: isTransitioning
	  };
	  var ariaCurrent = isActive ? ariaCurrentProp : void 0;
	  var className;
	  if (typeof classNameProp === "function") {
	    className = classNameProp(renderProps);
	  } else {
	    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
	  }
	  var style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
	  return /* @__PURE__ */React3__namespace.createElement(Link, _objectSpread2(_objectSpread2({}, rest), {}, {
	    "aria-current": ariaCurrent,
	    className: className,
	    ref: ref,
	    style: style,
	    to: to,
	    viewTransition: viewTransition
	  }), typeof children === "function" ? children(renderProps) : children);
	});
	NavLink.displayName = "NavLink";
	var Form = /*#__PURE__*/React3__namespace.forwardRef(function (_ref97, forwardedRef) {
	  var _ref97$discover = _ref97.discover,
	    discover = _ref97$discover === void 0 ? "render" : _ref97$discover,
	    fetcherKey = _ref97.fetcherKey,
	    navigate = _ref97.navigate,
	    reloadDocument = _ref97.reloadDocument,
	    replace2 = _ref97.replace,
	    state = _ref97.state,
	    _ref97$method = _ref97.method,
	    method = _ref97$method === void 0 ? defaultMethod : _ref97$method,
	    action = _ref97.action,
	    onSubmit = _ref97.onSubmit,
	    relative = _ref97.relative,
	    preventScrollReset = _ref97.preventScrollReset,
	    viewTransition = _ref97.viewTransition,
	    props = _objectWithoutProperties(_ref97, _excluded7);
	  var submit = useSubmit();
	  var formAction = useFormAction(action, {
	    relative: relative
	  });
	  var formMethod = method.toLowerCase() === "get" ? "get" : "post";
	  var isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
	  var submitHandler = function submitHandler(event) {
	    onSubmit && onSubmit(event);
	    if (event.defaultPrevented) return;
	    event.preventDefault();
	    var submitter = event.nativeEvent.submitter;
	    var submitMethod = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || method;
	    submit(submitter || event.currentTarget, {
	      fetcherKey: fetcherKey,
	      method: submitMethod,
	      navigate: navigate,
	      replace: replace2,
	      state: state,
	      relative: relative,
	      preventScrollReset: preventScrollReset,
	      viewTransition: viewTransition
	    });
	  };
	  return /* @__PURE__ */React3__namespace.createElement("form", _objectSpread2(_objectSpread2({
	    ref: forwardedRef,
	    method: formMethod,
	    action: formAction,
	    onSubmit: reloadDocument ? onSubmit : submitHandler
	  }, props), {}, {
	    "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
	  }));
	});
	Form.displayName = "Form";
	function ScrollRestoration(_ref98) {
	  var getKey = _ref98.getKey,
	    storageKey = _ref98.storageKey,
	    props = _objectWithoutProperties(_ref98, _excluded8);
	  var remixContext = React3__namespace.useContext(FrameworkContext);
	  var _React10$useContext3 = React3__namespace.useContext(NavigationContext),
	    basename = _React10$useContext3.basename;
	  var location = useLocation();
	  var matches = useMatches();
	  useScrollRestoration({
	    getKey: getKey,
	    storageKey: storageKey
	  });
	  var ssrKey = React3__namespace.useMemo(function () {
	    if (!remixContext || !getKey) return null;
	    var userKey = getScrollRestorationKey(location, matches, basename, getKey);
	    return userKey !== location.key ? userKey : null;
	  },
	  // Nah, we only need this the first time for the SSR render
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	  []);
	  if (!remixContext || remixContext.isSpaMode) {
	    return null;
	  }
	  var restoreScroll = function (storageKey2, restoreKey) {
	    if (!window.history.state || !window.history.state.key) {
	      var key = Math.random().toString(32).slice(2);
	      window.history.replaceState({
	        key: key
	      }, "");
	    }
	    try {
	      var positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
	      var storedY = positions[restoreKey || window.history.state.key];
	      if (typeof storedY === "number") {
	        window.scrollTo(0, storedY);
	      }
	    } catch (error) {
	      console.error(error);
	      sessionStorage.removeItem(storageKey2);
	    }
	  }.toString();
	  return /* @__PURE__ */React3__namespace.createElement("script", _objectSpread2(_objectSpread2({}, props), {}, {
	    suppressHydrationWarning: true,
	    dangerouslySetInnerHTML: {
	      __html: "(".concat(restoreScroll, ")(").concat(JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY), ", ").concat(JSON.stringify(ssrKey), ")")
	    }
	  }));
	}
	ScrollRestoration.displayName = "ScrollRestoration";
	function getDataRouterConsoleError2(hookName) {
	  return "".concat(hookName, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.");
	}
	function useDataRouterContext3(hookName) {
	  var ctx = React3__namespace.useContext(DataRouterContext);
	  invariant(ctx, getDataRouterConsoleError2(hookName));
	  return ctx;
	}
	function useDataRouterState2(hookName) {
	  var state = React3__namespace.useContext(DataRouterStateContext);
	  invariant(state, getDataRouterConsoleError2(hookName));
	  return state;
	}
	function useLinkClickHandler(to) {
	  var _ref99 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    target = _ref99.target,
	    replaceProp = _ref99.replace,
	    state = _ref99.state,
	    preventScrollReset = _ref99.preventScrollReset,
	    relative = _ref99.relative,
	    viewTransition = _ref99.viewTransition;
	  var navigate = useNavigate();
	  var location = useLocation();
	  var path = useResolvedPath(to, {
	    relative: relative
	  });
	  return React3__namespace.useCallback(function (event) {
	    if (shouldProcessLinkClick(event, target)) {
	      event.preventDefault();
	      var replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
	      navigate(to, {
	        replace: replace2,
	        state: state,
	        preventScrollReset: preventScrollReset,
	        relative: relative,
	        viewTransition: viewTransition
	      });
	    }
	  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
	}
	function useSearchParams(defaultInit) {
	  warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
	  var defaultSearchParamsRef = React3__namespace.useRef(createSearchParams(defaultInit));
	  var hasSetSearchParamsRef = React3__namespace.useRef(false);
	  var location = useLocation();
	  var searchParams = React3__namespace.useMemo(function () {
	    return (
	      // Only merge in the defaults if we haven't yet called setSearchParams.
	      // Once we call that we want those to take precedence, otherwise you can't
	      // remove a param with setSearchParams({}) if it has an initial value
	      getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current)
	    );
	  }, [location.search]);
	  var navigate = useNavigate();
	  var setSearchParams = React3__namespace.useCallback(function (nextInit, navigateOptions) {
	    var newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(new URLSearchParams(searchParams)) : nextInit);
	    hasSetSearchParamsRef.current = true;
	    navigate("?" + newSearchParams, navigateOptions);
	  }, [navigate, searchParams]);
	  return [searchParams, setSearchParams];
	}
	var fetcherId = 0;
	var getUniqueFetcherId = function getUniqueFetcherId() {
	  return "__".concat(String(++fetcherId), "__");
	};
	function useSubmit() {
	  var _useDataRouterContext6 = useDataRouterContext3("useSubmit" /* UseSubmit */),
	    router = _useDataRouterContext6.router;
	  var _React10$useContext4 = React3__namespace.useContext(NavigationContext),
	    basename = _React10$useContext4.basename;
	  var currentRouteId = useRouteId();
	  return React3__namespace.useCallback(/*#__PURE__*/function () {
	    var _ref100 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee54(target) {
	      var options,
	        _getFormSubmissionInf,
	        action,
	        method,
	        encType,
	        formData,
	        body,
	        key,
	        _args56 = arguments;
	      return _regenerator().w(function (_context56) {
	        while (1) switch (_context56.n) {
	          case 0:
	            options = _args56.length > 1 && _args56[1] !== undefined ? _args56[1] : {};
	            _getFormSubmissionInf = getFormSubmissionInfo(target, basename), action = _getFormSubmissionInf.action, method = _getFormSubmissionInf.method, encType = _getFormSubmissionInf.encType, formData = _getFormSubmissionInf.formData, body = _getFormSubmissionInf.body;
	            if (!(options.navigate === false)) {
	              _context56.n = 2;
	              break;
	            }
	            key = options.fetcherKey || getUniqueFetcherId();
	            _context56.n = 1;
	            return router.fetch(key, currentRouteId, options.action || action, {
	              preventScrollReset: options.preventScrollReset,
	              formData: formData,
	              body: body,
	              formMethod: options.method || method,
	              formEncType: options.encType || encType,
	              flushSync: options.flushSync
	            });
	          case 1:
	            _context56.n = 3;
	            break;
	          case 2:
	            _context56.n = 3;
	            return router.navigate(options.action || action, {
	              preventScrollReset: options.preventScrollReset,
	              formData: formData,
	              body: body,
	              formMethod: options.method || method,
	              formEncType: options.encType || encType,
	              replace: options.replace,
	              state: options.state,
	              fromRouteId: currentRouteId,
	              flushSync: options.flushSync,
	              viewTransition: options.viewTransition
	            });
	          case 3:
	            return _context56.a(2);
	        }
	      }, _callee54);
	    }));
	    return function (_x181) {
	      return _ref100.apply(this, arguments);
	    };
	  }(), [router, basename, currentRouteId]);
	}
	function useFormAction(action) {
	  var _ref101 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    relative = _ref101.relative;
	  var _React10$useContext5 = React3__namespace.useContext(NavigationContext),
	    basename = _React10$useContext5.basename;
	  var routeContext = React3__namespace.useContext(RouteContext);
	  invariant(routeContext, "useFormAction must be used inside a RouteContext");
	  var _routeContext$matches = routeContext.matches.slice(-1),
	    _routeContext$matches2 = _slicedToArray(_routeContext$matches, 1),
	    match = _routeContext$matches2[0];
	  var path = _objectSpread2({}, useResolvedPath(action ? action : ".", {
	    relative: relative
	  }));
	  var location = useLocation();
	  if (action == null) {
	    path.search = location.search;
	    var params = new URLSearchParams(path.search);
	    var indexValues = params.getAll("index");
	    var hasNakedIndexParam = indexValues.some(function (v) {
	      return v === "";
	    });
	    if (hasNakedIndexParam) {
	      params["delete"]("index");
	      indexValues.filter(function (v) {
	        return v;
	      }).forEach(function (v) {
	        return params.append("index", v);
	      });
	      var qs = params.toString();
	      path.search = qs ? "?".concat(qs) : "";
	    }
	  }
	  if ((!action || action === ".") && match.route.index) {
	    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
	  }
	  if (basename !== "/") {
	    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
	  }
	  return createPath(path);
	}
	function useFetcher() {
	  var _route$matches;
	  var _ref102 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    key = _ref102.key;
	  var _useDataRouterContext7 = useDataRouterContext3("useFetcher" /* UseFetcher */),
	    router = _useDataRouterContext7.router;
	  var state = useDataRouterState2("useFetcher" /* UseFetcher */);
	  var fetcherData = React3__namespace.useContext(FetchersContext);
	  var route = React3__namespace.useContext(RouteContext);
	  var routeId = (_route$matches = route.matches[route.matches.length - 1]) === null || _route$matches === void 0 ? void 0 : _route$matches.route.id;
	  invariant(fetcherData, "useFetcher must be used inside a FetchersContext");
	  invariant(route, "useFetcher must be used inside a RouteContext");
	  invariant(routeId != null, "useFetcher can only be used on routes that contain a unique \"id\"");
	  var defaultKey = React3__namespace.useId();
	  var _React10$useState7 = React3__namespace.useState(key || defaultKey),
	    _React10$useState8 = _slicedToArray(_React10$useState7, 2),
	    fetcherKey = _React10$useState8[0],
	    setFetcherKey = _React10$useState8[1];
	  if (key && key !== fetcherKey) {
	    setFetcherKey(key);
	  }
	  React3__namespace.useEffect(function () {
	    router.getFetcher(fetcherKey);
	    return function () {
	      return router.deleteFetcher(fetcherKey);
	    };
	  }, [router, fetcherKey]);
	  var load = React3__namespace.useCallback(/*#__PURE__*/function () {
	    var _ref103 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee55(href, opts) {
	      return _regenerator().w(function (_context57) {
	        while (1) switch (_context57.n) {
	          case 0:
	            invariant(routeId, "No routeId available for fetcher.load()");
	            _context57.n = 1;
	            return router.fetch(fetcherKey, routeId, href, opts);
	          case 1:
	            return _context57.a(2);
	        }
	      }, _callee55);
	    }));
	    return function (_x182, _x183) {
	      return _ref103.apply(this, arguments);
	    };
	  }(), [fetcherKey, routeId, router]);
	  var submitImpl = useSubmit();
	  var submit = React3__namespace.useCallback(/*#__PURE__*/function () {
	    var _ref104 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee56(target, opts) {
	      return _regenerator().w(function (_context58) {
	        while (1) switch (_context58.n) {
	          case 0:
	            _context58.n = 1;
	            return submitImpl(target, _objectSpread2(_objectSpread2({}, opts), {}, {
	              navigate: false,
	              fetcherKey: fetcherKey
	            }));
	          case 1:
	            return _context58.a(2);
	        }
	      }, _callee56);
	    }));
	    return function (_x184, _x185) {
	      return _ref104.apply(this, arguments);
	    };
	  }(), [fetcherKey, submitImpl]);
	  var FetcherForm = React3__namespace.useMemo(function () {
	    var FetcherForm2 = /*#__PURE__*/React3__namespace.forwardRef(function (props, ref) {
	      return /* @__PURE__ */React3__namespace.createElement(Form, _objectSpread2(_objectSpread2({}, props), {}, {
	        navigate: false,
	        fetcherKey: fetcherKey,
	        ref: ref
	      }));
	    });
	    FetcherForm2.displayName = "fetcher.Form";
	    return FetcherForm2;
	  }, [fetcherKey]);
	  var fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
	  var data2 = fetcherData.get(fetcherKey);
	  var fetcherWithComponents = React3__namespace.useMemo(function () {
	    return _objectSpread2(_objectSpread2({
	      Form: FetcherForm,
	      submit: submit,
	      load: load
	    }, fetcher), {}, {
	      data: data2
	    });
	  }, [FetcherForm, submit, load, fetcher, data2]);
	  return fetcherWithComponents;
	}
	function useFetchers() {
	  var state = useDataRouterState2("useFetchers" /* UseFetchers */);
	  return Array.from(state.fetchers.entries()).map(function (_ref105) {
	    var _ref106 = _slicedToArray(_ref105, 2),
	      key = _ref106[0],
	      fetcher = _ref106[1];
	    return _objectSpread2(_objectSpread2({}, fetcher), {}, {
	      key: key
	    });
	  });
	}
	var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
	var savedScrollPositions = {};
	function getScrollRestorationKey(location, matches, basename, getKey) {
	  var key = null;
	  if (getKey) {
	    if (basename !== "/") {
	      key = getKey(_objectSpread2(_objectSpread2({}, location), {}, {
	        pathname: stripBasename(location.pathname, basename) || location.pathname
	      }), matches);
	    } else {
	      key = getKey(location, matches);
	    }
	  }
	  if (key == null) {
	    key = location.key;
	  }
	  return key;
	}
	function useScrollRestoration() {
	  var _ref107 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    getKey = _ref107.getKey,
	    storageKey = _ref107.storageKey;
	  var _useDataRouterContext8 = useDataRouterContext3("useScrollRestoration" /* UseScrollRestoration */),
	    router = _useDataRouterContext8.router;
	  var _useDataRouterState2 = useDataRouterState2("useScrollRestoration" /* UseScrollRestoration */),
	    restoreScrollPosition = _useDataRouterState2.restoreScrollPosition,
	    preventScrollReset = _useDataRouterState2.preventScrollReset;
	  var _React10$useContext6 = React3__namespace.useContext(NavigationContext),
	    basename = _React10$useContext6.basename;
	  var location = useLocation();
	  var matches = useMatches();
	  var navigation = useNavigation();
	  React3__namespace.useEffect(function () {
	    window.history.scrollRestoration = "manual";
	    return function () {
	      window.history.scrollRestoration = "auto";
	    };
	  }, []);
	  usePageHide(React3__namespace.useCallback(function () {
	    if (navigation.state === "idle") {
	      var key = getScrollRestorationKey(location, matches, basename, getKey);
	      savedScrollPositions[key] = window.scrollY;
	    }
	    try {
	      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
	    } catch (error) {
	      warning(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (".concat(error, ")."));
	    }
	    window.history.scrollRestoration = "auto";
	  }, [navigation.state, getKey, basename, location, matches, storageKey]));
	  if (typeof document !== "undefined") {
	    React3__namespace.useLayoutEffect(function () {
	      try {
	        var sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
	        if (sessionPositions) {
	          savedScrollPositions = JSON.parse(sessionPositions);
	        }
	      } catch (e) {}
	    }, [storageKey]);
	    React3__namespace.useLayoutEffect(function () {
	      var disableScrollRestoration = router === null || router === void 0 ? void 0 : router.enableScrollRestoration(savedScrollPositions, function () {
	        return window.scrollY;
	      }, getKey ? function (location2, matches2) {
	        return getScrollRestorationKey(location2, matches2, basename, getKey);
	      } : void 0);
	      return function () {
	        return disableScrollRestoration && disableScrollRestoration();
	      };
	    }, [router, basename, getKey]);
	    React3__namespace.useLayoutEffect(function () {
	      if (restoreScrollPosition === false) {
	        return;
	      }
	      if (typeof restoreScrollPosition === "number") {
	        window.scrollTo(0, restoreScrollPosition);
	        return;
	      }
	      try {
	        if (location.hash) {
	          var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
	          if (el) {
	            el.scrollIntoView();
	            return;
	          }
	        }
	      } catch (_unused) {
	        warning(false, "\"".concat(location.hash.slice(1), "\" is not a decodable element ID. The view will not scroll to it."));
	      }
	      if (preventScrollReset === true) {
	        return;
	      }
	      window.scrollTo(0, 0);
	    }, [location, restoreScrollPosition, preventScrollReset]);
	  }
	}
	function useBeforeUnload(callback, options) {
	  var _ref108 = options || {},
	    capture = _ref108.capture;
	  React3__namespace.useEffect(function () {
	    var opts = capture != null ? {
	      capture: capture
	    } : void 0;
	    window.addEventListener("beforeunload", callback, opts);
	    return function () {
	      window.removeEventListener("beforeunload", callback, opts);
	    };
	  }, [callback, capture]);
	}
	function usePageHide(callback, options) {
	  var _ref109 = {},
	    capture = _ref109.capture;
	  React3__namespace.useEffect(function () {
	    var opts = capture != null ? {
	      capture: capture
	    } : void 0;
	    window.addEventListener("pagehide", callback, opts);
	    return function () {
	      window.removeEventListener("pagehide", callback, opts);
	    };
	  }, [callback, capture]);
	}
	function usePrompt(_ref110) {
	  var when = _ref110.when,
	    message = _ref110.message;
	  var blocker = useBlocker(when);
	  React3__namespace.useEffect(function () {
	    if (blocker.state === "blocked") {
	      var proceed = window.confirm(message);
	      if (proceed) {
	        setTimeout(blocker.proceed, 0);
	      } else {
	        blocker.reset();
	      }
	    }
	  }, [blocker, message]);
	  React3__namespace.useEffect(function () {
	    if (blocker.state === "blocked" && !when) {
	      blocker.reset();
	    }
	  }, [blocker, when]);
	}
	function useViewTransitionState(to) {
	  var _ref111 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    relative = _ref111.relative;
	  var vtContext = React3__namespace.useContext(ViewTransitionContext);
	  invariant(vtContext != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	  var _useDataRouterContext9 = useDataRouterContext3("useViewTransitionState" /* useViewTransitionState */),
	    basename = _useDataRouterContext9.basename;
	  var path = useResolvedPath(to, {
	    relative: relative
	  });
	  if (!vtContext.isTransitioning) {
	    return false;
	  }
	  var currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
	  var nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
	  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
	}
	function StaticRouter(_ref112) {
	  var basename = _ref112.basename,
	    children = _ref112.children,
	    _ref112$location = _ref112.location,
	    locationProp = _ref112$location === void 0 ? "/" : _ref112$location;
	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }
	  var action = "POP" /* Pop */;
	  var location = {
	    pathname: locationProp.pathname || "/",
	    search: locationProp.search || "",
	    hash: locationProp.hash || "",
	    state: locationProp.state != null ? locationProp.state : null,
	    key: locationProp.key || "default"
	  };
	  var staticNavigator = getStatelessNavigator();
	  return /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: location,
	    navigationType: action,
	    navigator: staticNavigator,
	    "static": true
	  });
	}
	function StaticRouterProvider(_ref113) {
	  var context = _ref113.context,
	    router = _ref113.router,
	    _ref113$hydrate = _ref113.hydrate,
	    hydrate2 = _ref113$hydrate === void 0 ? true : _ref113$hydrate,
	    nonce = _ref113.nonce;
	  invariant(router && context, "You must provide `router` and `context` to <StaticRouterProvider>");
	  var dataRouterContext = {
	    router: router,
	    navigator: getStatelessNavigator(),
	    "static": true,
	    staticContext: context,
	    basename: context.basename || "/"
	  };
	  var fetchersContext = /* @__PURE__ */new Map();
	  var hydrateScript = "";
	  if (hydrate2 !== false) {
	    var data2 = {
	      loaderData: context.loaderData,
	      actionData: context.actionData,
	      errors: serializeErrors$1(context.errors)
	    };
	    var json = htmlEscape(JSON.stringify(JSON.stringify(data2)));
	    hydrateScript = "window.__staticRouterHydrationData = JSON.parse(".concat(json, ");");
	  }
	  var state = dataRouterContext.router.state;
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement(DataRouterContext.Provider, {
	    value: dataRouterContext
	  }, /* @__PURE__ */React3__namespace.createElement(DataRouterStateContext.Provider, {
	    value: state
	  }, /* @__PURE__ */React3__namespace.createElement(FetchersContext.Provider, {
	    value: fetchersContext
	  }, /* @__PURE__ */React3__namespace.createElement(ViewTransitionContext.Provider, {
	    value: {
	      isTransitioning: false
	    }
	  }, /* @__PURE__ */React3__namespace.createElement(Router, {
	    basename: dataRouterContext.basename,
	    location: state.location,
	    navigationType: state.historyAction,
	    navigator: dataRouterContext.navigator,
	    "static": dataRouterContext["static"]
	  }, /* @__PURE__ */React3__namespace.createElement(DataRoutes2, {
	    routes: router.routes,
	    future: router.future,
	    state: state
	  })))))), hydrateScript ? /* @__PURE__ */React3__namespace.createElement("script", {
	    suppressHydrationWarning: true,
	    nonce: nonce,
	    dangerouslySetInnerHTML: {
	      __html: hydrateScript
	    }
	  }) : null);
	}
	function DataRoutes2(_ref114) {
	  var routes = _ref114.routes,
	    future = _ref114.future,
	    state = _ref114.state;
	  return useRoutesImpl(routes, void 0, state, void 0, future);
	}
	function serializeErrors$1(errors) {
	  if (!errors) return null;
	  var entries = Object.entries(errors);
	  var serialized = {};
	  for (var _i0 = 0, _entries3 = entries; _i0 < _entries3.length; _i0++) {
	    var _entries3$_i = _slicedToArray(_entries3[_i0], 2),
	      key = _entries3$_i[0],
	      val = _entries3$_i[1];
	    if (isRouteErrorResponse(val)) {
	      serialized[key] = _objectSpread2(_objectSpread2({}, val), {}, {
	        __type: "RouteErrorResponse"
	      });
	    } else if (val instanceof Error) {
	      serialized[key] = _objectSpread2({
	        message: val.message,
	        __type: "Error"
	      }, val.name !== "Error" ? {
	        __subType: val.name
	      } : {});
	    } else {
	      serialized[key] = val;
	    }
	  }
	  return serialized;
	}
	function getStatelessNavigator() {
	  return {
	    createHref: createHref,
	    encodeLocation: encodeLocation,
	    push: function push(to) {
	      throw new Error("You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a `navigate(".concat(JSON.stringify(to), ")` somewhere in your app."));
	    },
	    replace: function replace(to) {
	      throw new Error("You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a `navigate(".concat(JSON.stringify(to), ", { replace: true })` somewhere in your app."));
	    },
	    go: function go(delta) {
	      throw new Error("You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a `navigate(".concat(delta, ")` somewhere in your app."));
	    },
	    back: function back() {
	      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
	    },
	    forward: function forward() {
	      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
	    }
	  };
	}
	function createStaticHandler2(routes, opts) {
	  return createStaticHandler(routes, _objectSpread2(_objectSpread2({}, opts), {}, {
	    mapRouteProperties: mapRouteProperties
	  }));
	}
	function createStaticRouter(routes, context) {
	  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var manifest = {};
	  var dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, void 0, manifest);
	  var matches = context.matches.map(function (match) {
	    var route = manifest[match.route.id] || match.route;
	    return _objectSpread2(_objectSpread2({}, match), {}, {
	      route: route
	    });
	  });
	  var msg = function msg(method) {
	    return "You cannot use router.".concat(method, "() on the server because it is a stateless environment");
	  };
	  return {
	    get basename() {
	      return context.basename;
	    },
	    get future() {
	      return _objectSpread2({
	        v8_middleware: false
	      }, opts === null || opts === void 0 ? void 0 : opts.future);
	    },
	    get state() {
	      return {
	        historyAction: "POP" /* Pop */,
	        location: context.location,
	        matches: matches,
	        loaderData: context.loaderData,
	        actionData: context.actionData,
	        errors: context.errors,
	        initialized: true,
	        navigation: IDLE_NAVIGATION,
	        restoreScrollPosition: null,
	        preventScrollReset: false,
	        revalidation: "idle",
	        fetchers: /* @__PURE__ */new Map(),
	        blockers: /* @__PURE__ */new Map()
	      };
	    },
	    get routes() {
	      return dataRoutes;
	    },
	    get window() {
	      return void 0;
	    },
	    initialize: function initialize() {
	      throw msg("initialize");
	    },
	    subscribe: function subscribe() {
	      throw msg("subscribe");
	    },
	    enableScrollRestoration: function enableScrollRestoration() {
	      throw msg("enableScrollRestoration");
	    },
	    navigate: function navigate() {
	      throw msg("navigate");
	    },
	    fetch: function fetch() {
	      throw msg("fetch");
	    },
	    revalidate: function revalidate() {
	      throw msg("revalidate");
	    },
	    createHref: createHref,
	    encodeLocation: encodeLocation,
	    getFetcher: function getFetcher() {
	      return IDLE_FETCHER;
	    },
	    deleteFetcher: function deleteFetcher() {
	      throw msg("deleteFetcher");
	    },
	    dispose: function dispose() {
	      throw msg("dispose");
	    },
	    getBlocker: function getBlocker() {
	      return IDLE_BLOCKER;
	    },
	    deleteBlocker: function deleteBlocker() {
	      throw msg("deleteBlocker");
	    },
	    patchRoutes: function patchRoutes() {
	      throw msg("patchRoutes");
	    },
	    _internalFetchControllers: /* @__PURE__ */new Map(),
	    _internalSetRoutes: function _internalSetRoutes() {
	      throw msg("_internalSetRoutes");
	    },
	    _internalSetStateDoNotUseOrYouWillBreakYourApp: function _internalSetStateDoNotUseOrYouWillBreakYourApp() {
	      throw msg("_internalSetStateDoNotUseOrYouWillBreakYourApp");
	    }
	  };
	}
	function createHref(to) {
	  return typeof to === "string" ? to : createPath(to);
	}
	function encodeLocation(to) {
	  var href = typeof to === "string" ? to : createPath(to);
	  href = href.replace(/ $/, "%20");
	  var encoded = ABSOLUTE_URL_REGEX3.test(href) ? new URL(href) : new URL(href, "http://localhost");
	  return {
	    pathname: encoded.pathname,
	    search: encoded.search,
	    hash: encoded.hash
	  };
	}
	var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
	var ESCAPE_LOOKUP2 = {
	  "&": "\\u0026",
	  ">": "\\u003e",
	  "<": "\\u003c",
	  "\u2028": "\\u2028",
	  "\u2029": "\\u2029"
	};
	var ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
	function htmlEscape(str) {
	  return str.replace(ESCAPE_REGEX2, function (match) {
	    return ESCAPE_LOOKUP2[match];
	  });
	}

	var dist = {};

	var hasRequiredDist$1;
	function requireDist$1() {
	  if (hasRequiredDist$1) return dist;
	  hasRequiredDist$1 = 1;
	  Object.defineProperty(dist, "__esModule", {
	    value: true
	  });
	  dist.parse = parse;
	  dist.serialize = serialize;
	  /**
	   * RegExp to match cookie-name in RFC 6265 sec 4.1.1
	   * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
	   * which has been replaced by the token definition in RFC 7230 appendix B.
	   *
	   * cookie-name       = token
	   * token             = 1*tchar
	   * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
	   *                     "*" / "+" / "-" / "." / "^" / "_" /
	   *                     "`" / "|" / "~" / DIGIT / ALPHA
	   *
	   * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
	   * Allow same range as cookie value, except `=`, which delimits end of name.
	   */
	  var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
	  /**
	   * RegExp to match cookie-value in RFC 6265 sec 4.1.1
	   *
	   * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
	   * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
	   *                     ; US-ASCII characters excluding CTLs,
	   *                     ; whitespace DQUOTE, comma, semicolon,
	   *                     ; and backslash
	   *
	   * Allowing more characters: https://github.com/jshttp/cookie/issues/191
	   * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
	   */
	  var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
	  /**
	   * RegExp to match domain-value in RFC 6265 sec 4.1.1
	   *
	   * domain-value      = <subdomain>
	   *                     ; defined in [RFC1034], Section 3.5, as
	   *                     ; enhanced by [RFC1123], Section 2.1
	   * <subdomain>       = <label> | <subdomain> "." <label>
	   * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
	   *                     Labels must be 63 characters or less.
	   *                     'let-dig' not 'letter' in the first char, per RFC1123
	   * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
	   * <let-dig-hyp>     = <let-dig> | "-"
	   * <let-dig>         = <letter> | <digit>
	   * <letter>          = any one of the 52 alphabetic characters A through Z in
	   *                     upper case and a through z in lower case
	   * <digit>           = any one of the ten digits 0 through 9
	   *
	   * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
	   *
	   * > (Note that a leading %x2E ("."), if present, is ignored even though that
	   * character is not permitted, but a trailing %x2E ("."), if present, will
	   * cause the user agent to ignore the attribute.)
	   */
	  var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
	  /**
	   * RegExp to match path-value in RFC 6265 sec 4.1.1
	   *
	   * path-value        = <any CHAR except CTLs or ";">
	   * CHAR              = %x01-7F
	   *                     ; defined in RFC 5234 appendix B.1
	   */
	  var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
	  var __toString = Object.prototype.toString;
	  var NullObject = /* @__PURE__ */function () {
	    var C = function C() {};
	    C.prototype = Object.create(null);
	    return C;
	  }();
	  /**
	   * Parse a cookie header.
	   *
	   * Parse the given cookie header string into an object
	   * The object has the various cookies as keys(names) => values
	   */
	  function parse(str, options) {
	    var obj = new NullObject();
	    var len = str.length;
	    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
	    if (len < 2) return obj;
	    var dec = (options === null || options === void 0 ? void 0 : options.decode) || decode;
	    var index = 0;
	    do {
	      var eqIdx = str.indexOf("=", index);
	      if (eqIdx === -1) break; // No more cookie pairs.
	      var colonIdx = str.indexOf(";", index);
	      var endIdx = colonIdx === -1 ? len : colonIdx;
	      if (eqIdx > endIdx) {
	        // backtrack on prior semicolon
	        index = str.lastIndexOf(";", eqIdx - 1) + 1;
	        continue;
	      }
	      var keyStartIdx = startIndex(str, index, eqIdx);
	      var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
	      var key = str.slice(keyStartIdx, keyEndIdx);
	      // only assign once
	      if (obj[key] === undefined) {
	        var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
	        var valEndIdx = endIndex(str, endIdx, valStartIdx);
	        var value = dec(str.slice(valStartIdx, valEndIdx));
	        obj[key] = value;
	      }
	      index = endIdx + 1;
	    } while (index < len);
	    return obj;
	  }
	  function startIndex(str, index, max) {
	    do {
	      var code = str.charCodeAt(index);
	      if (code !== 0x20 /*   */ && code !== 0x09 /* \t */) return index;
	    } while (++index < max);
	    return max;
	  }
	  function endIndex(str, index, min) {
	    while (index > min) {
	      var code = str.charCodeAt(--index);
	      if (code !== 0x20 /*   */ && code !== 0x09 /* \t */) return index + 1;
	    }
	    return min;
	  }
	  /**
	   * Serialize data into a cookie header.
	   *
	   * Serialize a name value pair into a cookie string suitable for
	   * http headers. An optional options object specifies cookie parameters.
	   *
	   * serialize('foo', 'bar', { httpOnly: true })
	   *   => "foo=bar; httpOnly"
	   */
	  function serialize(name, val, options) {
	    var enc = (options === null || options === void 0 ? void 0 : options.encode) || encodeURIComponent;
	    if (!cookieNameRegExp.test(name)) {
	      throw new TypeError("argument name is invalid: ".concat(name));
	    }
	    var value = enc(val);
	    if (!cookieValueRegExp.test(value)) {
	      throw new TypeError("argument val is invalid: ".concat(val));
	    }
	    var str = name + "=" + value;
	    if (!options) return str;
	    if (options.maxAge !== undefined) {
	      if (!Number.isInteger(options.maxAge)) {
	        throw new TypeError("option maxAge is invalid: ".concat(options.maxAge));
	      }
	      str += "; Max-Age=" + options.maxAge;
	    }
	    if (options.domain) {
	      if (!domainValueRegExp.test(options.domain)) {
	        throw new TypeError("option domain is invalid: ".concat(options.domain));
	      }
	      str += "; Domain=" + options.domain;
	    }
	    if (options.path) {
	      if (!pathValueRegExp.test(options.path)) {
	        throw new TypeError("option path is invalid: ".concat(options.path));
	      }
	      str += "; Path=" + options.path;
	    }
	    if (options.expires) {
	      if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
	        throw new TypeError("option expires is invalid: ".concat(options.expires));
	      }
	      str += "; Expires=" + options.expires.toUTCString();
	    }
	    if (options.httpOnly) {
	      str += "; HttpOnly";
	    }
	    if (options.secure) {
	      str += "; Secure";
	    }
	    if (options.partitioned) {
	      str += "; Partitioned";
	    }
	    if (options.priority) {
	      var priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
	      switch (priority) {
	        case "low":
	          str += "; Priority=Low";
	          break;
	        case "medium":
	          str += "; Priority=Medium";
	          break;
	        case "high":
	          str += "; Priority=High";
	          break;
	        default:
	          throw new TypeError("option priority is invalid: ".concat(options.priority));
	      }
	    }
	    if (options.sameSite) {
	      var sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
	      switch (sameSite) {
	        case true:
	        case "strict":
	          str += "; SameSite=Strict";
	          break;
	        case "lax":
	          str += "; SameSite=Lax";
	          break;
	        case "none":
	          str += "; SameSite=None";
	          break;
	        default:
	          throw new TypeError("option sameSite is invalid: ".concat(options.sameSite));
	      }
	    }
	    return str;
	  }
	  /**
	   * URL-decode string value. Optimized to skip native call when no %.
	   */
	  function decode(str) {
	    if (str.indexOf("%") === -1) return str;
	    try {
	      return decodeURIComponent(str);
	    } catch (e) {
	      return str;
	    }
	  }
	  /**
	   * Determine if value is a Date.
	   */
	  function isDate(val) {
	    return __toString.call(val) === "[object Date]";
	  }
	  return dist;
	}

	var distExports$1 = requireDist$1();

	var setCookie = {exports: {}};

	var hasRequiredSetCookie;
	function requireSetCookie() {
	  if (hasRequiredSetCookie) return setCookie.exports;
	  hasRequiredSetCookie = 1;
	  var defaultParseOptions = {
	    decodeValues: true,
	    map: false,
	    silent: false
	  };
	  function isNonEmptyString(str) {
	    return typeof str === "string" && !!str.trim();
	  }
	  function parseString(setCookieValue, options) {
	    var parts = setCookieValue.split(";").filter(isNonEmptyString);
	    var nameValuePairStr = parts.shift();
	    var parsed = parseNameValuePair(nameValuePairStr);
	    var name = parsed.name;
	    var value = parsed.value;
	    options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
	    try {
	      value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
	    } catch (e) {
	      console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
	    }
	    var cookie = {
	      name: name,
	      value: value
	    };
	    parts.forEach(function (part) {
	      var sides = part.split("=");
	      var key = sides.shift().trimLeft().toLowerCase();
	      var value = sides.join("=");
	      if (key === "expires") {
	        cookie.expires = new Date(value);
	      } else if (key === "max-age") {
	        cookie.maxAge = parseInt(value, 10);
	      } else if (key === "secure") {
	        cookie.secure = true;
	      } else if (key === "httponly") {
	        cookie.httpOnly = true;
	      } else if (key === "samesite") {
	        cookie.sameSite = value;
	      } else if (key === "partitioned") {
	        cookie.partitioned = true;
	      } else {
	        cookie[key] = value;
	      }
	    });
	    return cookie;
	  }
	  function parseNameValuePair(nameValuePairStr) {
	    // Parses name-value-pair according to rfc6265bis draft

	    var name = "";
	    var value = "";
	    var nameValueArr = nameValuePairStr.split("=");
	    if (nameValueArr.length > 1) {
	      name = nameValueArr.shift();
	      value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
	    } else {
	      value = nameValuePairStr;
	    }
	    return {
	      name: name,
	      value: value
	    };
	  }
	  function parse(input, options) {
	    options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
	    if (!input) {
	      if (!options.map) {
	        return [];
	      } else {
	        return {};
	      }
	    }
	    if (input.headers) {
	      if (typeof input.headers.getSetCookie === "function") {
	        // for fetch responses - they combine headers of the same type in the headers array,
	        // but getSetCookie returns an uncombined array
	        input = input.headers.getSetCookie();
	      } else if (input.headers["set-cookie"]) {
	        // fast-path for node.js (which automatically normalizes header names to lower-case
	        input = input.headers["set-cookie"];
	      } else {
	        // slow-path for other environments - see #25
	        var sch = input.headers[Object.keys(input.headers).find(function (key) {
	          return key.toLowerCase() === "set-cookie";
	        })];
	        // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
	        if (!sch && input.headers.cookie && !options.silent) {
	          console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
	        }
	        input = sch;
	      }
	    }
	    if (!Array.isArray(input)) {
	      input = [input];
	    }
	    if (!options.map) {
	      return input.filter(isNonEmptyString).map(function (str) {
	        return parseString(str, options);
	      });
	    } else {
	      var cookies = {};
	      return input.filter(isNonEmptyString).reduce(function (cookies, str) {
	        var cookie = parseString(str, options);
	        cookies[cookie.name] = cookie;
	        return cookies;
	      }, cookies);
	    }
	  }

	  /*
	    Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
	    that are within a single set-cookie field-value, such as in the Expires portion.
	  	  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
	    Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
	    React Native's fetch does this for *every* header, including set-cookie.
	  	  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
	    Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
	  */
	  function splitCookiesString(cookiesString) {
	    if (Array.isArray(cookiesString)) {
	      return cookiesString;
	    }
	    if (typeof cookiesString !== "string") {
	      return [];
	    }
	    var cookiesStrings = [];
	    var pos = 0;
	    var start;
	    var ch;
	    var lastComma;
	    var nextStart;
	    var cookiesSeparatorFound;
	    function skipWhitespace() {
	      while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
	        pos += 1;
	      }
	      return pos < cookiesString.length;
	    }
	    function notSpecialChar() {
	      ch = cookiesString.charAt(pos);
	      return ch !== "=" && ch !== ";" && ch !== ",";
	    }
	    while (pos < cookiesString.length) {
	      start = pos;
	      cookiesSeparatorFound = false;
	      while (skipWhitespace()) {
	        ch = cookiesString.charAt(pos);
	        if (ch === ",") {
	          // ',' is a cookie separator if we have later first '=', not ';' or ','
	          lastComma = pos;
	          pos += 1;
	          skipWhitespace();
	          nextStart = pos;
	          while (pos < cookiesString.length && notSpecialChar()) {
	            pos += 1;
	          }

	          // currently special character
	          if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	            // we found cookies separator
	            cookiesSeparatorFound = true;
	            // pos is inside the next cookie, so back up and return it.
	            pos = nextStart;
	            cookiesStrings.push(cookiesString.substring(start, lastComma));
	            start = pos;
	          } else {
	            // in param ',' or param separator ';',
	            // we continue from that comma
	            pos = lastComma + 1;
	          }
	        } else {
	          pos += 1;
	        }
	      }
	      if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	        cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	      }
	    }
	    return cookiesStrings;
	  }
	  setCookie.exports = parse;
	  setCookie.exports.parse = parse;
	  setCookie.exports.parseString = parseString;
	  setCookie.exports.splitCookiesString = splitCookiesString;
	  return setCookie.exports;
	}

	var setCookieExports = /*@__PURE__*/ requireSetCookie();

	var _excluded = ["secrets"];
	function ServerRouter(_ref) {
	  var context = _ref.context,
	    url = _ref.url,
	    nonce = _ref.nonce;
	  if (typeof url === "string") {
	    url = new URL(url);
	  }
	  var manifest = context.manifest,
	    routeModules = context.routeModules,
	    criticalCss = context.criticalCss,
	    serverHandoffString = context.serverHandoffString;
	  var routes = createServerRoutes(manifest.routes, routeModules, context.future, context.isSpaMode);
	  context.staticHandlerContext.loaderData = _objectSpread2({}, context.staticHandlerContext.loaderData);
	  var _iterator = _createForOfIteratorHelper(context.staticHandlerContext.matches),
	    _step;
	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var match = _step.value;
	      var routeId = match.route.id;
	      var route = routeModules[routeId];
	      var manifestRoute = context.manifest.routes[routeId];
	      if (route && manifestRoute && shouldHydrateRouteLoader(routeId, route.clientLoader, manifestRoute.hasLoader, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
	        delete context.staticHandlerContext.loaderData[routeId];
	      }
	    }
	  } catch (err) {
	    _iterator.e(err);
	  } finally {
	    _iterator.f();
	  }
	  var router = createStaticRouter(routes, context.staticHandlerContext);
	  return /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement(FrameworkContext.Provider, {
	    value: {
	      manifest: manifest,
	      routeModules: routeModules,
	      criticalCss: criticalCss,
	      serverHandoffString: serverHandoffString,
	      future: context.future,
	      ssr: context.ssr,
	      isSpaMode: context.isSpaMode,
	      routeDiscovery: context.routeDiscovery,
	      serializeError: context.serializeError,
	      renderMeta: context.renderMeta
	    }
	  }, /* @__PURE__ */React3__namespace.createElement(RemixErrorBoundary, {
	    location: router.state.location
	  }, /* @__PURE__ */React3__namespace.createElement(StaticRouterProvider, {
	    router: router,
	    context: context.staticHandlerContext,
	    hydrate: false
	  }))), context.serverHandoffStream ? /* @__PURE__ */React3__namespace.createElement(React3__namespace.Suspense, null, /* @__PURE__ */React3__namespace.createElement(StreamTransfer, {
	    context: context,
	    identifier: 0,
	    reader: context.serverHandoffStream.getReader(),
	    textDecoder: new TextDecoder(),
	    nonce: nonce
	  })) : null);
	}
	function createRoutesStub(routes, _context) {
	  return function RoutesTestStub(_ref2) {
	    var initialEntries = _ref2.initialEntries,
	      initialIndex = _ref2.initialIndex,
	      hydrationData = _ref2.hydrationData,
	      future = _ref2.future;
	    var routerRef = React3__namespace.useRef();
	    var frameworkContextRef = React3__namespace.useRef();
	    if (routerRef.current == null) {
	      frameworkContextRef.current = {
	        future: {
	          unstable_subResourceIntegrity: (future === null || future === void 0 ? void 0 : future.unstable_subResourceIntegrity) === true,
	          v8_middleware: (future === null || future === void 0 ? void 0 : future.v8_middleware) === true
	        },
	        manifest: {
	          routes: {},
	          entry: {
	            imports: [],
	            module: ""
	          },
	          url: "",
	          version: ""
	        },
	        routeModules: {},
	        ssr: false,
	        isSpaMode: false,
	        routeDiscovery: {
	          mode: "lazy",
	          manifestPath: "/__manifest"
	        }
	      };
	      var patched = processRoutes(
	      // @ts-expect-error `StubRouteObject` is stricter about `loader`/`action`
	      // types compared to `AgnosticRouteObject`
	      convertRoutesToDataRoutes(routes, function (r) {
	        return r;
	      }), _context !== void 0 ? _context : future !== null && future !== void 0 && future.v8_middleware ? new RouterContextProvider() : {}, frameworkContextRef.current.manifest, frameworkContextRef.current.routeModules);
	      routerRef.current = createMemoryRouter(patched, {
	        initialEntries: initialEntries,
	        initialIndex: initialIndex,
	        hydrationData: hydrationData
	      });
	    }
	    return /* @__PURE__ */React3__namespace.createElement(FrameworkContext.Provider, {
	      value: frameworkContextRef.current
	    }, /* @__PURE__ */React3__namespace.createElement(RouterProvider, {
	      router: routerRef.current
	    }));
	  };
	}
	function processRoutes(routes, context, manifest, routeModules, parentId) {
	  return routes.map(function (route) {
	    if (!route.id) {
	      throw new Error("Expected a route.id in react-router processRoutes() function");
	    }
	    var newRoute = {
	      id: route.id,
	      path: route.path,
	      index: route.index,
	      Component: route.Component ? withComponentProps(route.Component) : void 0,
	      HydrateFallback: route.HydrateFallback ? withHydrateFallbackProps(route.HydrateFallback) : void 0,
	      ErrorBoundary: route.ErrorBoundary ? withErrorBoundaryProps(route.ErrorBoundary) : void 0,
	      action: route.action ? function (args) {
	        return route.action(_objectSpread2(_objectSpread2({}, args), {}, {
	          context: context
	        }));
	      } : void 0,
	      loader: route.loader ? function (args) {
	        return route.loader(_objectSpread2(_objectSpread2({}, args), {}, {
	          context: context
	        }));
	      } : void 0,
	      handle: route.handle,
	      shouldRevalidate: route.shouldRevalidate
	    };
	    var entryRoute = {
	      id: route.id,
	      path: route.path,
	      index: route.index,
	      parentId: parentId,
	      hasAction: route.action != null,
	      hasLoader: route.loader != null,
	      // When testing routes, you should be stubbing loader/action/middleware,
	      // not trying to re-implement the full loader/clientLoader/SSR/hydration
	      // flow. That is better tested via E2E tests.
	      hasClientAction: false,
	      hasClientLoader: false,
	      hasClientMiddleware: false,
	      hasErrorBoundary: route.ErrorBoundary != null,
	      // any need for these?
	      module: "build/stub-path-to-module.js",
	      clientActionModule: void 0,
	      clientLoaderModule: void 0,
	      clientMiddlewareModule: void 0,
	      hydrateFallbackModule: void 0
	    };
	    manifest.routes[newRoute.id] = entryRoute;
	    routeModules[route.id] = {
	      "default": newRoute.Component || Outlet,
	      ErrorBoundary: newRoute.ErrorBoundary || void 0,
	      handle: route.handle,
	      links: route.links,
	      meta: route.meta,
	      shouldRevalidate: route.shouldRevalidate
	    };
	    if (route.children) {
	      newRoute.children = processRoutes(route.children, context, manifest, routeModules, newRoute.id);
	    }
	    return newRoute;
	  });
	}

	// lib/server-runtime/crypto.ts
	var encoder = /* @__PURE__ */new TextEncoder();
	var sign = /*#__PURE__*/function () {
	  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(value, secret) {
	    var data2, key, signature, hash;
	    return _regenerator().w(function (_context2) {
	      while (1) switch (_context2.n) {
	        case 0:
	          data2 = encoder.encode(value);
	          _context2.n = 1;
	          return createKey(secret, ["sign"]);
	        case 1:
	          key = _context2.v;
	          _context2.n = 2;
	          return crypto.subtle.sign("HMAC", key, data2);
	        case 2:
	          signature = _context2.v;
	          hash = btoa(String.fromCharCode.apply(String, _toConsumableArray(new Uint8Array(signature)))).replace(/=+$/, "");
	          return _context2.a(2, value + "." + hash);
	      }
	    }, _callee);
	  }));
	  return function sign(_x, _x2) {
	    return _ref3.apply(this, arguments);
	  };
	}();
	var unsign = /*#__PURE__*/function () {
	  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(cookie, secret) {
	    var index, value, hash, data2, key, signature, valid;
	    return _regenerator().w(function (_context3) {
	      while (1) switch (_context3.p = _context3.n) {
	        case 0:
	          index = cookie.lastIndexOf(".");
	          value = cookie.slice(0, index);
	          hash = cookie.slice(index + 1);
	          data2 = encoder.encode(value);
	          _context3.n = 1;
	          return createKey(secret, ["verify"]);
	        case 1:
	          key = _context3.v;
	          _context3.p = 2;
	          signature = byteStringToUint8Array(atob(hash));
	          _context3.n = 3;
	          return crypto.subtle.verify("HMAC", key, signature, data2);
	        case 3:
	          valid = _context3.v;
	          return _context3.a(2, valid ? value : false);
	        case 4:
	          _context3.p = 4;
	          _context3.v;
	          return _context3.a(2, false);
	      }
	    }, _callee2, null, [[2, 4]]);
	  }));
	  return function unsign(_x3, _x4) {
	    return _ref4.apply(this, arguments);
	  };
	}();
	var createKey = /*#__PURE__*/function () {
	  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(secret, usages) {
	    return _regenerator().w(function (_context4) {
	      while (1) switch (_context4.n) {
	        case 0:
	          return _context4.a(2, crypto.subtle.importKey("raw", encoder.encode(secret), {
	            name: "HMAC",
	            hash: "SHA-256"
	          }, false, usages));
	      }
	    }, _callee3);
	  }));
	  return function createKey(_x5, _x6) {
	    return _ref5.apply(this, arguments);
	  };
	}();
	function byteStringToUint8Array(byteString) {
	  var array = new Uint8Array(byteString.length);
	  for (var i = 0; i < byteString.length; i++) {
	    array[i] = byteString.charCodeAt(i);
	  }
	  return array;
	}

	// lib/server-runtime/cookies.ts
	var createCookie = function createCookie(name) {
	  var cookieOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _path$sameSite$cookie = _objectSpread2({
	      path: "/",
	      sameSite: "lax"
	    }, cookieOptions),
	    _path$sameSite$cookie2 = _path$sameSite$cookie.secrets,
	    secrets = _path$sameSite$cookie2 === void 0 ? [] : _path$sameSite$cookie2,
	    options = _objectWithoutProperties(_path$sameSite$cookie, _excluded);
	  warnOnceAboutExpiresCookie(name, options.expires);
	  return {
	    get name() {
	      return name;
	    },
	    get isSigned() {
	      return secrets.length > 0;
	    },
	    get expires() {
	      return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
	    },
	    parse: function parse(cookieHeader, parseOptions) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
	        var cookies, value, decoded;
	        return _regenerator().w(function (_context5) {
	          while (1) switch (_context5.n) {
	            case 0:
	              if (cookieHeader) {
	                _context5.n = 1;
	                break;
	              }
	              return _context5.a(2, null);
	            case 1:
	              cookies = distExports$1.parse(cookieHeader, _objectSpread2(_objectSpread2({}, options), parseOptions));
	              if (!(name in cookies)) {
	                _context5.n = 5;
	                break;
	              }
	              value = cookies[name];
	              if (!(typeof value === "string" && value !== "")) {
	                _context5.n = 3;
	                break;
	              }
	              _context5.n = 2;
	              return decodeCookieValue(value, secrets);
	            case 2:
	              decoded = _context5.v;
	              return _context5.a(2, decoded);
	            case 3:
	              return _context5.a(2, "");
	            case 4:
	              _context5.n = 6;
	              break;
	            case 5:
	              return _context5.a(2, null);
	            case 6:
	              return _context5.a(2);
	          }
	        }, _callee4);
	      }))();
	    },
	    serialize: function serialize(value, serializeOptions) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
	        var _t2, _t3, _t4;
	        return _regenerator().w(function (_context6) {
	          while (1) switch (_context6.n) {
	            case 0:
	              _t2 = distExports$1.serialize;
	              _t3 = name;
	              if (!(value === "")) {
	                _context6.n = 1;
	                break;
	              }
	              _t4 = "";
	              _context6.n = 3;
	              break;
	            case 1:
	              _context6.n = 2;
	              return encodeCookieValue(value, secrets);
	            case 2:
	              _t4 = _context6.v;
	            case 3:
	              return _context6.a(2, _t2(_t3, _t4, _objectSpread2(_objectSpread2({}, options), serializeOptions)));
	          }
	        }, _callee5);
	      }))();
	    }
	  };
	};
	var isCookie = function isCookie(object) {
	  return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
	};
	function encodeCookieValue(_x7, _x8) {
	  return _encodeCookieValue.apply(this, arguments);
	}
	function _encodeCookieValue() {
	  _encodeCookieValue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(value, secrets) {
	    var encoded;
	    return _regenerator().w(function (_context28) {
	      while (1) switch (_context28.n) {
	        case 0:
	          encoded = encodeData(value);
	          if (!(secrets.length > 0)) {
	            _context28.n = 2;
	            break;
	          }
	          _context28.n = 1;
	          return sign(encoded, secrets[0]);
	        case 1:
	          encoded = _context28.v;
	        case 2:
	          return _context28.a(2, encoded);
	      }
	    }, _callee27);
	  }));
	  return _encodeCookieValue.apply(this, arguments);
	}
	function decodeCookieValue(_x9, _x0) {
	  return _decodeCookieValue.apply(this, arguments);
	}
	function _decodeCookieValue() {
	  _decodeCookieValue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(value, secrets) {
	    var _iterator1, _step1, secret, unsignedValue, _t22;
	    return _regenerator().w(function (_context29) {
	      while (1) switch (_context29.p = _context29.n) {
	        case 0:
	          if (!(secrets.length > 0)) {
	            _context29.n = 9;
	            break;
	          }
	          _iterator1 = _createForOfIteratorHelper(secrets);
	          _context29.p = 1;
	          _iterator1.s();
	        case 2:
	          if ((_step1 = _iterator1.n()).done) {
	            _context29.n = 5;
	            break;
	          }
	          secret = _step1.value;
	          _context29.n = 3;
	          return unsign(value, secret);
	        case 3:
	          unsignedValue = _context29.v;
	          if (!(unsignedValue !== false)) {
	            _context29.n = 4;
	            break;
	          }
	          return _context29.a(2, decodeData(unsignedValue));
	        case 4:
	          _context29.n = 2;
	          break;
	        case 5:
	          _context29.n = 7;
	          break;
	        case 6:
	          _context29.p = 6;
	          _t22 = _context29.v;
	          _iterator1.e(_t22);
	        case 7:
	          _context29.p = 7;
	          _iterator1.f();
	          return _context29.f(7);
	        case 8:
	          return _context29.a(2, null);
	        case 9:
	          return _context29.a(2, decodeData(value));
	      }
	    }, _callee28, null, [[1, 6, 7, 8]]);
	  }));
	  return _decodeCookieValue.apply(this, arguments);
	}
	function encodeData(value) {
	  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
	}
	function decodeData(value) {
	  try {
	    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
	  } catch (error) {
	    return {};
	  }
	}
	function myEscape(value) {
	  var str = value.toString();
	  var result = "";
	  var index = 0;
	  var chr, code;
	  while (index < str.length) {
	    chr = str.charAt(index++);
	    if (/[\w*+\-./@]/.exec(chr)) {
	      result += chr;
	    } else {
	      code = chr.charCodeAt(0);
	      if (code < 256) {
	        result += "%" + hex(code, 2);
	      } else {
	        result += "%u" + hex(code, 4).toUpperCase();
	      }
	    }
	  }
	  return result;
	}
	function hex(code, length) {
	  var result = code.toString(16);
	  while (result.length < length) result = "0" + result;
	  return result;
	}
	function myUnescape(value) {
	  var str = value.toString();
	  var result = "";
	  var index = 0;
	  var chr, part;
	  while (index < str.length) {
	    chr = str.charAt(index++);
	    if (chr === "%") {
	      if (str.charAt(index) === "u") {
	        part = str.slice(index + 1, index + 5);
	        if (/^[\da-f]{4}$/i.exec(part)) {
	          result += String.fromCharCode(parseInt(part, 16));
	          index += 5;
	          continue;
	        }
	      } else {
	        part = str.slice(index, index + 2);
	        if (/^[\da-f]{2}$/i.exec(part)) {
	          result += String.fromCharCode(parseInt(part, 16));
	          index += 2;
	          continue;
	        }
	      }
	    }
	    result += chr;
	  }
	  return result;
	}
	function warnOnceAboutExpiresCookie(name, expires) {
	  warnOnce(!expires, "The \"".concat(name, "\" cookie has an \"expires\" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use `commitSession(session, { expires })` if using a session storage object, or `cookie.serialize(\"value\", { expires })` if you're using the cookie directly."));
	}

	// lib/server-runtime/entry.ts
	function createEntryRouteModules(manifest) {
	  return Object.keys(manifest).reduce(function (memo, routeId) {
	    var route = manifest[routeId];
	    if (route) {
	      memo[routeId] = route.module;
	    }
	    return memo;
	  }, {});
	}

	// lib/server-runtime/mode.ts
	var ServerMode = /* @__PURE__ */function (ServerMode2) {
	  ServerMode2["Development"] = "development";
	  ServerMode2["Production"] = "production";
	  ServerMode2["Test"] = "test";
	  return ServerMode2;
	}(ServerMode || {});
	function isServerMode(value) {
	  return value === "development" /* Development */ || value === "production" /* Production */ || value === "test" /* Test */;
	}

	// lib/server-runtime/errors.ts
	function sanitizeError(error, serverMode) {
	  if (error instanceof Error && serverMode !== "development" /* Development */) {
	    var sanitized = new Error("Unexpected Server Error");
	    sanitized.stack = void 0;
	    return sanitized;
	  }
	  return error;
	}
	function sanitizeErrors(errors, serverMode) {
	  return Object.entries(errors).reduce(function (acc, _ref6) {
	    var _ref7 = _slicedToArray(_ref6, 2),
	      routeId = _ref7[0],
	      error = _ref7[1];
	    return Object.assign(acc, _defineProperty({}, routeId, sanitizeError(error, serverMode)));
	  }, {});
	}
	function _serializeError(error, serverMode) {
	  var sanitized = sanitizeError(error, serverMode);
	  return {
	    message: sanitized.message,
	    stack: sanitized.stack
	  };
	}
	function serializeErrors(errors, serverMode) {
	  if (!errors) return null;
	  var entries = Object.entries(errors);
	  var serialized = {};
	  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
	    var _entries$_i = _slicedToArray(_entries[_i], 2),
	      key = _entries$_i[0],
	      val = _entries$_i[1];
	    if (isRouteErrorResponse(val)) {
	      serialized[key] = _objectSpread2(_objectSpread2({}, val), {}, {
	        __type: "RouteErrorResponse"
	      });
	    } else if (val instanceof Error) {
	      var sanitized = sanitizeError(val, serverMode);
	      serialized[key] = _objectSpread2({
	        message: sanitized.message,
	        stack: sanitized.stack,
	        __type: "Error"
	      }, sanitized.name !== "Error" ? {
	        __subType: sanitized.name
	      } : {});
	    } else {
	      serialized[key] = val;
	    }
	  }
	  return serialized;
	}

	// lib/server-runtime/routeMatching.ts
	function matchServerRoutes(routes, pathname, basename) {
	  var matches = matchRoutes(routes, pathname, basename);
	  if (!matches) return null;
	  return matches.map(function (match) {
	    return {
	      params: match.params,
	      pathname: match.pathname,
	      route: match.route
	    };
	  });
	}

	// lib/server-runtime/data.ts
	function callRouteHandler(_x1, _x10) {
	  return _callRouteHandler.apply(this, arguments);
	}
	function _callRouteHandler() {
	  _callRouteHandler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(handler, args) {
	    var result;
	    return _regenerator().w(function (_context30) {
	      while (1) switch (_context30.n) {
	        case 0:
	          _context30.n = 1;
	          return handler({
	            request: stripRoutesParam(stripIndexParam2(args.request)),
	            params: args.params,
	            context: args.context
	          });
	        case 1:
	          result = _context30.v;
	          if (!(isDataWithResponseInit(result) && result.init && result.init.status && isRedirectStatusCode(result.init.status))) {
	            _context30.n = 2;
	            break;
	          }
	          throw new Response(null, result.init);
	        case 2:
	          return _context30.a(2, result);
	      }
	    }, _callee29);
	  }));
	  return _callRouteHandler.apply(this, arguments);
	}
	function stripIndexParam2(request) {
	  var url = new URL(request.url);
	  var indexValues = url.searchParams.getAll("index");
	  url.searchParams["delete"]("index");
	  var indexValuesToKeep = [];
	  var _iterator2 = _createForOfIteratorHelper(indexValues),
	    _step2;
	  try {
	    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	      var indexValue = _step2.value;
	      if (indexValue) {
	        indexValuesToKeep.push(indexValue);
	      }
	    }
	  } catch (err) {
	    _iterator2.e(err);
	  } finally {
	    _iterator2.f();
	  }
	  for (var _i2 = 0, _indexValuesToKeep = indexValuesToKeep; _i2 < _indexValuesToKeep.length; _i2++) {
	    var toKeep = _indexValuesToKeep[_i2];
	    url.searchParams.append("index", toKeep);
	  }
	  var init = {
	    method: request.method,
	    body: request.body,
	    headers: request.headers,
	    signal: request.signal
	  };
	  if (init.body) {
	    init.duplex = "half";
	  }
	  return new Request(url.href, init);
	}
	function stripRoutesParam(request) {
	  var url = new URL(request.url);
	  url.searchParams["delete"]("_routes");
	  var init = {
	    method: request.method,
	    body: request.body,
	    headers: request.headers,
	    signal: request.signal
	  };
	  if (init.body) {
	    init.duplex = "half";
	  }
	  return new Request(url.href, init);
	}

	// lib/server-runtime/invariant.ts
	function invariant2(value, message) {
	  if (value === false || value === null || typeof value === "undefined") {
	    console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose");
	    throw new Error(message);
	  }
	}

	// lib/server-runtime/dev.ts
	var globalDevServerHooksKey = "__reactRouterDevServerHooks";
	function setDevServerHooks(devServerHooks) {
	  globalThis[globalDevServerHooksKey] = devServerHooks;
	}
	function getDevServerHooks() {
	  return globalThis[globalDevServerHooksKey];
	}
	function getBuildTimeHeader(request, headerName) {
	  if (typeof process !== "undefined") {
	    try {
	      var _ref8;
	      if (((_ref8 = {}) === null || _ref8 === void 0 ? void 0 : _ref8.IS_RR_BUILD_REQUEST) === "yes") {
	        return request.headers.get(headerName);
	      }
	    } catch (e) {}
	  }
	  return null;
	}

	// lib/server-runtime/routes.ts
	function groupRoutesByParentId(manifest) {
	  var routes = {};
	  Object.values(manifest).forEach(function (route) {
	    if (route) {
	      var parentId = route.parentId || "";
	      if (!routes[parentId]) {
	        routes[parentId] = [];
	      }
	      routes[parentId].push(route);
	    }
	  });
	  return routes;
	}
	function createRoutes(manifest) {
	  var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  var routesByParentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : groupRoutesByParentId(manifest);
	  return (routesByParentId[parentId] || []).map(function (route) {
	    return _objectSpread2(_objectSpread2({}, route), {}, {
	      children: createRoutes(manifest, route.id, routesByParentId)
	    });
	  });
	}
	function createStaticHandlerDataRoutes(manifest, future) {
	  var parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	  var routesByParentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : groupRoutesByParentId(manifest);
	  return (routesByParentId[parentId] || []).map(function (route) {
	    var commonRoute = {
	      // Always include root due to default boundaries
	      hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
	      id: route.id,
	      path: route.path,
	      middleware: route.module.middleware,
	      // Need to use RR's version in the param typed here to permit the optional
	      // context even though we know it'll always be provided in remix
	      loader: route.module.loader ? (/*#__PURE__*/function () {
	        var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(args) {
	          var preRenderedData, encoded, uint8array, stream, decoded, data2, result, init, _result, val;
	          return _regenerator().w(function (_context7) {
	            while (1) switch (_context7.n) {
	              case 0:
	                preRenderedData = getBuildTimeHeader(args.request, "X-React-Router-Prerender-Data");
	                if (!(preRenderedData != null)) {
	                  _context7.n = 6;
	                  break;
	                }
	                encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
	                invariant2(encoded, "Missing prerendered data for route");
	                uint8array = new TextEncoder().encode(encoded);
	                stream = new ReadableStream({
	                  start: function start(controller) {
	                    controller.enqueue(uint8array);
	                    controller.close();
	                  }
	                });
	                _context7.n = 1;
	                return decodeViaTurboStream(stream, global);
	              case 1:
	                decoded = _context7.v;
	                data2 = decoded.value;
	                if (!(data2 && SingleFetchRedirectSymbol in data2)) {
	                  _context7.n = 5;
	                  break;
	                }
	                result = data2[SingleFetchRedirectSymbol];
	                init = {
	                  status: result.status
	                };
	                if (!result.reload) {
	                  _context7.n = 2;
	                  break;
	                }
	                throw redirectDocument(result.redirect, init);
	              case 2:
	                if (!result.replace) {
	                  _context7.n = 3;
	                  break;
	                }
	                throw replace(result.redirect, init);
	              case 3:
	                throw redirect(result.redirect, init);
	              case 4:
	                _context7.n = 6;
	                break;
	              case 5:
	                invariant2(data2 && route.id in data2, "Unable to decode prerendered data");
	                _result = data2[route.id];
	                invariant2("data" in _result, "Unable to process prerendered data");
	                return _context7.a(2, _result.data);
	              case 6:
	                _context7.n = 7;
	                return callRouteHandler(route.module.loader, args);
	              case 7:
	                val = _context7.v;
	                return _context7.a(2, val);
	            }
	          }, _callee6);
	        }));
	        return function (_x11) {
	          return _ref9.apply(this, arguments);
	        };
	      }()) : void 0,
	      action: route.module.action ? function (args) {
	        return callRouteHandler(route.module.action, args);
	      } : void 0,
	      handle: route.module.handle
	    };
	    return route.index ? _objectSpread2({
	      index: true
	    }, commonRoute) : _objectSpread2({
	      caseSensitive: route.caseSensitive,
	      children: createStaticHandlerDataRoutes(manifest, future, route.id, routesByParentId)
	    }, commonRoute);
	  });
	}

	// lib/server-runtime/serverHandoff.ts
	function createServerHandoffString(serverHandoff) {
	  return escapeHtml(JSON.stringify(serverHandoff));
	}
	function getDocumentHeaders(context, build) {
	  return getDocumentHeadersImpl(context, function (m) {
	    var route = build.routes[m.route.id];
	    invariant2(route, "Route with id \"".concat(m.route.id, "\" not found in build"));
	    return route.module.headers;
	  });
	}
	function getDocumentHeadersImpl(context, getRouteHeadersFn, _defaultHeaders) {
	  var boundaryIdx = context.errors ? context.matches.findIndex(function (m) {
	    return context.errors[m.route.id];
	  }) : -1;
	  var matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
	  var errorHeaders;
	  if (boundaryIdx >= 0) {
	    var actionHeaders = context.actionHeaders,
	      actionData = context.actionData,
	      loaderHeaders = context.loaderHeaders,
	      loaderData = context.loaderData;
	    context.matches.slice(boundaryIdx).some(function (match) {
	      var id = match.route.id;
	      if (actionHeaders[id] && (!actionData || !actionData.hasOwnProperty(id))) {
	        errorHeaders = actionHeaders[id];
	      } else if (loaderHeaders[id] && !loaderData.hasOwnProperty(id)) {
	        errorHeaders = loaderHeaders[id];
	      }
	      return errorHeaders != null;
	    });
	  }
	  var defaultHeaders = new Headers(_defaultHeaders);
	  return matches.reduce(function (parentHeaders, match, idx) {
	    var id = match.route.id;
	    var loaderHeaders = context.loaderHeaders[id] || new Headers();
	    var actionHeaders = context.actionHeaders[id] || new Headers();
	    var includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
	    var includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
	    var headersFn = getRouteHeadersFn(match);
	    if (headersFn == null) {
	      var headers2 = new Headers(parentHeaders);
	      if (includeErrorCookies) {
	        prependCookies(errorHeaders, headers2);
	      }
	      prependCookies(actionHeaders, headers2);
	      prependCookies(loaderHeaders, headers2);
	      return headers2;
	    }
	    var headers = new Headers(typeof headersFn === "function" ? headersFn({
	      loaderHeaders: loaderHeaders,
	      parentHeaders: parentHeaders,
	      actionHeaders: actionHeaders,
	      errorHeaders: includeErrorHeaders ? errorHeaders : void 0
	    }) : headersFn);
	    if (includeErrorCookies) {
	      prependCookies(errorHeaders, headers);
	    }
	    prependCookies(actionHeaders, headers);
	    prependCookies(loaderHeaders, headers);
	    prependCookies(parentHeaders, headers);
	    return headers;
	  }, new Headers(defaultHeaders));
	}
	function prependCookies(parentHeaders, childHeaders) {
	  var parentSetCookieString = parentHeaders.get("Set-Cookie");
	  if (parentSetCookieString) {
	    var cookies = setCookieExports.splitCookiesString(parentSetCookieString);
	    var childCookies = new Set(childHeaders.getSetCookie());
	    cookies.forEach(function (cookie) {
	      if (!childCookies.has(cookie)) {
	        childHeaders.append("Set-Cookie", cookie);
	      }
	    });
	  }
	}

	// lib/server-runtime/single-fetch.ts
	var SERVER_NO_BODY_STATUS_CODES = /* @__PURE__ */new Set([].concat(_toConsumableArray(NO_BODY_STATUS_CODES), [304]));
	function singleFetchAction(_x12, _x13, _x14, _x15, _x16, _x17, _x18) {
	  return _singleFetchAction.apply(this, arguments);
	}
	function _singleFetchAction() {
	  _singleFetchAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
	    var handlerRequest, result, handleQueryResult, handleQueryError, staticContextToResponse, _t24;
	    return _regenerator().w(function (_context32) {
	      while (1) switch (_context32.p = _context32.n) {
	        case 0:
	          staticContextToResponse = function _staticContextToRespo(context) {
	            var headers = getDocumentHeaders(context, build);
	            if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
	              return new Response(null, {
	                status: context.statusCode,
	                headers: headers
	              });
	            }
	            if (context.errors) {
	              Object.values(context.errors).forEach(function (err) {
	                if (!isRouteErrorResponse(err) || err.error) {
	                  handleError(err);
	                }
	              });
	              context.errors = sanitizeErrors(context.errors, serverMode);
	            }
	            var singleFetchResult;
	            if (context.errors) {
	              singleFetchResult = {
	                error: Object.values(context.errors)[0]
	              };
	            } else {
	              singleFetchResult = {
	                data: Object.values(context.actionData || {})[0]
	              };
	            }
	            return generateSingleFetchResponse(request, build, serverMode, {
	              result: singleFetchResult,
	              headers: headers,
	              status: context.statusCode
	            });
	          };
	          handleQueryError = function _handleQueryError(error) {
	            handleError(error);
	            return generateSingleFetchResponse(request, build, serverMode, {
	              result: {
	                error: error
	              },
	              headers: new Headers(),
	              status: 500
	            });
	          };
	          handleQueryResult = function _handleQueryResult(result) {
	            return isResponse(result) ? result : staticContextToResponse(result);
	          };
	          _context32.p = 1;
	          handlerRequest = new Request(handlerUrl, _objectSpread2({
	            method: request.method,
	            body: request.body,
	            headers: request.headers,
	            signal: request.signal
	          }, request.body ? {
	            duplex: "half"
	          } : void 0));
	          _context32.n = 2;
	          return staticHandler.query(handlerRequest, {
	            requestContext: loadContext,
	            skipLoaderErrorBubbling: true,
	            skipRevalidation: true,
	            generateMiddlewareResponse: build.future.v8_middleware ? (/*#__PURE__*/function () {
	              var _ref33 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(query) {
	                var innerResult, _t23;
	                return _regenerator().w(function (_context31) {
	                  while (1) switch (_context31.p = _context31.n) {
	                    case 0:
	                      _context31.p = 0;
	                      _context31.n = 1;
	                      return query(handlerRequest);
	                    case 1:
	                      innerResult = _context31.v;
	                      return _context31.a(2, handleQueryResult(innerResult));
	                    case 2:
	                      _context31.p = 2;
	                      _t23 = _context31.v;
	                      return _context31.a(2, handleQueryError(_t23));
	                  }
	                }, _callee30, null, [[0, 2]]);
	              }));
	              return function (_x68) {
	                return _ref33.apply(this, arguments);
	              };
	            }()) : void 0
	          });
	        case 2:
	          result = _context32.v;
	          return _context32.a(2, handleQueryResult(result));
	        case 3:
	          _context32.p = 3;
	          _t24 = _context32.v;
	          return _context32.a(2, handleQueryError(_t24));
	      }
	    }, _callee31, null, [[1, 3]]);
	  }));
	  return _singleFetchAction.apply(this, arguments);
	}
	function singleFetchLoaders(_x19, _x20, _x21, _x22, _x23, _x24, _x25) {
	  return _singleFetchLoaders.apply(this, arguments);
	}
	function _singleFetchLoaders() {
	  _singleFetchLoaders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
	    var routesParam, loadRouteIds, handlerRequest, result, handleQueryResult, handleQueryError, staticContextToResponse, _t26;
	    return _regenerator().w(function (_context34) {
	      while (1) switch (_context34.p = _context34.n) {
	        case 0:
	          staticContextToResponse = function _staticContextToRespo2(context) {
	            var headers = getDocumentHeaders(context, build);
	            if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
	              return new Response(null, {
	                status: context.statusCode,
	                headers: headers
	              });
	            }
	            if (context.errors) {
	              Object.values(context.errors).forEach(function (err) {
	                if (!isRouteErrorResponse(err) || err.error) {
	                  handleError(err);
	                }
	              });
	              context.errors = sanitizeErrors(context.errors, serverMode);
	            }
	            var results = {};
	            var loadedMatches = new Set(context.matches.filter(function (m) {
	              return loadRouteIds ? loadRouteIds.has(m.route.id) : m.route.loader != null;
	            }).map(function (m) {
	              return m.route.id;
	            }));
	            if (context.errors) {
	              for (var _i7 = 0, _Object$entries3 = Object.entries(context.errors); _i7 < _Object$entries3.length; _i7++) {
	                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 2),
	                  id = _Object$entries3$_i[0],
	                  error = _Object$entries3$_i[1];
	                results[id] = {
	                  error: error
	                };
	              }
	            }
	            for (var _i8 = 0, _Object$entries4 = Object.entries(context.loaderData); _i8 < _Object$entries4.length; _i8++) {
	              var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i8], 2),
	                _id = _Object$entries4$_i[0],
	                data2 = _Object$entries4$_i[1];
	              if (!(_id in results) && loadedMatches.has(_id)) {
	                results[_id] = {
	                  data: data2
	                };
	              }
	            }
	            return generateSingleFetchResponse(request, build, serverMode, {
	              result: results,
	              headers: headers,
	              status: context.statusCode
	            });
	          };
	          handleQueryError = function _handleQueryError2(error) {
	            handleError(error);
	            return generateSingleFetchResponse(request, build, serverMode, {
	              result: {
	                error: error
	              },
	              headers: new Headers(),
	              status: 500
	            });
	          };
	          handleQueryResult = function _handleQueryResult2(result) {
	            return isResponse(result) ? result : staticContextToResponse(result);
	          };
	          routesParam = new URL(request.url).searchParams.get("_routes");
	          loadRouteIds = routesParam ? new Set(routesParam.split(",")) : null;
	          _context34.p = 1;
	          handlerRequest = new Request(handlerUrl, {
	            headers: request.headers,
	            signal: request.signal
	          });
	          _context34.n = 2;
	          return staticHandler.query(handlerRequest, {
	            requestContext: loadContext,
	            filterMatchesToLoad: function filterMatchesToLoad(m) {
	              return !loadRouteIds || loadRouteIds.has(m.route.id);
	            },
	            skipLoaderErrorBubbling: true,
	            generateMiddlewareResponse: build.future.v8_middleware ? (/*#__PURE__*/function () {
	              var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(query) {
	                var innerResult, _t25;
	                return _regenerator().w(function (_context33) {
	                  while (1) switch (_context33.p = _context33.n) {
	                    case 0:
	                      _context33.p = 0;
	                      _context33.n = 1;
	                      return query(handlerRequest);
	                    case 1:
	                      innerResult = _context33.v;
	                      return _context33.a(2, handleQueryResult(innerResult));
	                    case 2:
	                      _context33.p = 2;
	                      _t25 = _context33.v;
	                      return _context33.a(2, handleQueryError(_t25));
	                  }
	                }, _callee32, null, [[0, 2]]);
	              }));
	              return function (_x69) {
	                return _ref34.apply(this, arguments);
	              };
	            }()) : void 0
	          });
	        case 2:
	          result = _context34.v;
	          return _context34.a(2, handleQueryResult(result));
	        case 3:
	          _context34.p = 3;
	          _t26 = _context34.v;
	          return _context34.a(2, handleQueryError(_t26));
	      }
	    }, _callee33, null, [[1, 3]]);
	  }));
	  return _singleFetchLoaders.apply(this, arguments);
	}
	function generateSingleFetchResponse(request, build, serverMode, _ref0) {
	  var result = _ref0.result,
	    headers = _ref0.headers,
	    status = _ref0.status;
	  var resultHeaders = new Headers(headers);
	  resultHeaders.set("X-Remix-Response", "yes");
	  if (SERVER_NO_BODY_STATUS_CODES.has(status)) {
	    return new Response(null, {
	      status: status,
	      headers: resultHeaders
	    });
	  }
	  resultHeaders.set("Content-Type", "text/x-script");
	  resultHeaders["delete"]("Content-Length");
	  return new Response(encodeViaTurboStream(result, request.signal, build.entry.module.streamTimeout, serverMode), {
	    status: status || 200,
	    headers: resultHeaders
	  });
	}
	function generateSingleFetchRedirectResponse(redirectResponse, request, build, serverMode) {
	  var redirect2 = getSingleFetchRedirect(redirectResponse.status, redirectResponse.headers, build.basename);
	  var headers = new Headers(redirectResponse.headers);
	  headers["delete"]("Location");
	  headers.set("Content-Type", "text/x-script");
	  return generateSingleFetchResponse(request, build, serverMode, {
	    result: request.method === "GET" ? _defineProperty({}, SingleFetchRedirectSymbol, redirect2) : redirect2,
	    headers: headers,
	    status: SINGLE_FETCH_REDIRECT_STATUS
	  });
	}
	function getSingleFetchRedirect(status, headers, basename) {
	  var redirect2 = headers.get("Location");
	  if (basename) {
	    redirect2 = stripBasename(redirect2, basename) || redirect2;
	  }
	  return {
	    redirect: redirect2,
	    status: status,
	    revalidate:
	    // Technically X-Remix-Revalidate isn't needed here - that was an implementation
	    // detail of ?_data requests as our way to tell the front end to revalidate when
	    // we didn't have a response body to include that information in.
	    // With single fetch, we tell the front end via this revalidate boolean field.
	    // However, we're respecting it for now because it may be something folks have
	    // used in their own responses
	    // TODO(v3): Consider removing or making this official public API
	    headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie"),
	    reload: headers.has("X-Remix-Reload-Document"),
	    replace: headers.has("X-Remix-Replace")
	  };
	}
	function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
	  var controller = new AbortController();
	  var timeoutId = setTimeout(function () {
	    return controller.abort(new Error("Server Timeout"));
	  }, typeof streamTimeout === "number" ? streamTimeout : 4950);
	  requestSignal.addEventListener("abort", function () {
	    return clearTimeout(timeoutId);
	  });
	  return encode(data2, {
	    signal: controller.signal,
	    plugins: [function (value) {
	      if (value instanceof Error) {
	        var _ref10 = serverMode === "production" /* Production */ ? sanitizeError(value, serverMode) : value,
	          name = _ref10.name,
	          message = _ref10.message,
	          stack = _ref10.stack;
	        return ["SanitizedError", name, message, stack];
	      }
	      if (value instanceof ErrorResponseImpl) {
	        var data3 = value.data,
	          status = value.status,
	          statusText = value.statusText;
	        return ["ErrorResponse", data3, status, statusText];
	      }
	      if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) {
	        return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
	      }
	    }],
	    postPlugins: [function (value) {
	      if (!value) return;
	      if (typeof value !== "object") return;
	      return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(value))];
	    }, function () {
	      return ["SingleFetchFallback"];
	    }]
	  });
	}

	// lib/server-runtime/server.ts
	function derive(build, mode) {
	  var routes = createRoutes(build.routes);
	  var dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
	  var serverMode = isServerMode(mode) ? mode : "production" /* Production */;
	  var staticHandler = createStaticHandler(dataRoutes, {
	    basename: build.basename
	  });
	  var errorHandler = build.entry.module.handleError || function (error, _ref11) {
	    var request = _ref11.request;
	    if (serverMode !== "test" /* Test */ && !request.signal.aborted) {
	      console.error(
	      // @ts-expect-error This is "private" from users but intended for internal use
	      isRouteErrorResponse(error) && error.error ? error.error : error);
	    }
	  };
	  return {
	    routes: routes,
	    dataRoutes: dataRoutes,
	    serverMode: serverMode,
	    staticHandler: staticHandler,
	    errorHandler: errorHandler
	  };
	}
	var createRequestHandler = function createRequestHandler(build, mode) {
	  var _build;
	  var routes;
	  var serverMode;
	  var staticHandler;
	  var errorHandler;
	  return /*#__PURE__*/function () {
	    var _requestHandler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(request, initialContext) {
	      var derived, _derived, params, loadContext, handleError, error, url, normalizedBasename, normalizedPath, isSpaMode, decodedPath, strippedPath, manifestUrl, res, matches, response, handlerUrl, singleFetchMatches, _getDevServerHooks2, pathname, criticalCss, _getDevServerHooks3, _getDevServerHooks3$g, _t5, _t6;
	      return _regenerator().w(function (_context8) {
	        while (1) switch (_context8.p = _context8.n) {
	          case 0:
	            if (!(typeof build === "function")) {
	              _context8.n = 2;
	              break;
	            }
	            _context8.n = 1;
	            return build();
	          case 1:
	            _t5 = _context8.v;
	            _context8.n = 3;
	            break;
	          case 2:
	            _t5 = build;
	          case 3:
	            _build = _t5;
	            if (typeof build === "function") {
	              derived = derive(_build, mode);
	              routes = derived.routes;
	              serverMode = derived.serverMode;
	              staticHandler = derived.staticHandler;
	              errorHandler = derived.errorHandler;
	            } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
	              _derived = derive(_build, mode);
	              routes = _derived.routes;
	              serverMode = _derived.serverMode;
	              staticHandler = _derived.staticHandler;
	              errorHandler = _derived.errorHandler;
	            }
	            params = {};
	            handleError = function handleError(error) {
	              if (mode === "development" /* Development */) {
	                var _getDevServerHooks, _getDevServerHooks$pr;
	                (_getDevServerHooks = getDevServerHooks()) === null || _getDevServerHooks === void 0 ? void 0 : (_getDevServerHooks$pr = _getDevServerHooks.processRequestError) === null || _getDevServerHooks$pr === void 0 ? void 0 : _getDevServerHooks$pr.call(_getDevServerHooks, error);
	              }
	              errorHandler(error, {
	                context: loadContext,
	                params: params,
	                request: request
	              });
	            };
	            if (!_build.future.v8_middleware) {
	              _context8.n = 5;
	              break;
	            }
	            if (!(initialContext && !(initialContext instanceof RouterContextProvider))) {
	              _context8.n = 4;
	              break;
	            }
	            error = new Error("Invalid `context` value provided to `handleRequest`. When middleware is enabled you must return an instance of `RouterContextProvider` from your `getLoadContext` function.");
	            handleError(error);
	            return _context8.a(2, returnLastResortErrorResponse(error, serverMode));
	          case 4:
	            loadContext = initialContext || new RouterContextProvider();
	            _context8.n = 6;
	            break;
	          case 5:
	            loadContext = initialContext || {};
	          case 6:
	            url = new URL(request.url);
	            normalizedBasename = _build.basename || "/";
	            normalizedPath = url.pathname;
	            if (stripBasename(normalizedPath, normalizedBasename) === "/_root.data") {
	              normalizedPath = normalizedBasename;
	            } else if (normalizedPath.endsWith(".data")) {
	              normalizedPath = normalizedPath.replace(/\.data$/, "");
	            }
	            if (stripBasename(normalizedPath, normalizedBasename) !== "/" && normalizedPath.endsWith("/")) {
	              normalizedPath = normalizedPath.slice(0, -1);
	            }
	            isSpaMode = getBuildTimeHeader(request, "X-React-Router-SPA-Mode") === "yes";
	            if (_build.ssr) {
	              _context8.n = 11;
	              break;
	            }
	            decodedPath = decodeURI(normalizedPath);
	            if (!(normalizedBasename !== "/")) {
	              _context8.n = 8;
	              break;
	            }
	            strippedPath = stripBasename(decodedPath, normalizedBasename);
	            if (!(strippedPath == null)) {
	              _context8.n = 7;
	              break;
	            }
	            errorHandler(new ErrorResponseImpl(404, "Not Found", "Refusing to prerender the `".concat(decodedPath, "` path because it does not start with the basename `").concat(normalizedBasename, "`")), {
	              context: loadContext,
	              params: params,
	              request: request
	            });
	            return _context8.a(2, new Response("Not Found", {
	              status: 404,
	              statusText: "Not Found"
	            }));
	          case 7:
	            decodedPath = strippedPath;
	          case 8:
	            if (!(_build.prerender.length === 0)) {
	              _context8.n = 9;
	              break;
	            }
	            isSpaMode = true;
	            _context8.n = 11;
	            break;
	          case 9:
	            if (!(!_build.prerender.includes(decodedPath) && !_build.prerender.includes(decodedPath + "/"))) {
	              _context8.n = 11;
	              break;
	            }
	            if (!url.pathname.endsWith(".data")) {
	              _context8.n = 10;
	              break;
	            }
	            errorHandler(new ErrorResponseImpl(404, "Not Found", "Refusing to SSR the path `".concat(decodedPath, "` because `ssr:false` is set and the path is not included in the `prerender` config, so in production the path will be a 404.")), {
	              context: loadContext,
	              params: params,
	              request: request
	            });
	            return _context8.a(2, new Response("Not Found", {
	              status: 404,
	              statusText: "Not Found"
	            }));
	          case 10:
	            isSpaMode = true;
	          case 11:
	            manifestUrl = getManifestPath(_build.routeDiscovery.manifestPath, normalizedBasename);
	            if (!(url.pathname === manifestUrl)) {
	              _context8.n = 15;
	              break;
	            }
	            _context8.p = 12;
	            _context8.n = 13;
	            return handleManifestRequest(_build, routes, url);
	          case 13:
	            res = _context8.v;
	            return _context8.a(2, res);
	          case 14:
	            _context8.p = 14;
	            _t6 = _context8.v;
	            handleError(_t6);
	            return _context8.a(2, new Response("Unknown Server Error", {
	              status: 500
	            }));
	          case 15:
	            matches = matchServerRoutes(routes, normalizedPath, _build.basename);
	            if (matches && matches.length > 0) {
	              Object.assign(params, matches[0].params);
	            }
	            if (!url.pathname.endsWith(".data")) {
	              _context8.n = 19;
	              break;
	            }
	            handlerUrl = new URL(request.url);
	            handlerUrl.pathname = normalizedPath;
	            singleFetchMatches = matchServerRoutes(routes, handlerUrl.pathname, _build.basename);
	            _context8.n = 16;
	            return handleSingleFetchRequest(serverMode, _build, staticHandler, request, handlerUrl, loadContext, handleError);
	          case 16:
	            response = _context8.v;
	            if (isRedirectResponse(response)) {
	              response = generateSingleFetchRedirectResponse(response, request, _build, serverMode);
	            }
	            if (!_build.entry.module.handleDataRequest) {
	              _context8.n = 18;
	              break;
	            }
	            _context8.n = 17;
	            return _build.entry.module.handleDataRequest(response, {
	              context: loadContext,
	              params: singleFetchMatches ? singleFetchMatches[0].params : {},
	              request: request
	            });
	          case 17:
	            response = _context8.v;
	            if (isRedirectResponse(response)) {
	              response = generateSingleFetchRedirectResponse(response, request, _build, serverMode);
	            }
	          case 18:
	            _context8.n = 27;
	            break;
	          case 19:
	            if (!(!isSpaMode && matches && matches[matches.length - 1].route.module["default"] == null && matches[matches.length - 1].route.module.ErrorBoundary == null)) {
	              _context8.n = 21;
	              break;
	            }
	            _context8.n = 20;
	            return handleResourceRequest(serverMode, _build, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError);
	          case 20:
	            response = _context8.v;
	            _context8.n = 27;
	            break;
	          case 21:
	            pathname = url.pathname;
	            criticalCss = void 0;
	            if (!_build.unstable_getCriticalCss) {
	              _context8.n = 23;
	              break;
	            }
	            _context8.n = 22;
	            return _build.unstable_getCriticalCss({
	              pathname: pathname
	            });
	          case 22:
	            criticalCss = _context8.v;
	            _context8.n = 25;
	            break;
	          case 23:
	            if (!(mode === "development" /* Development */ && (_getDevServerHooks2 = getDevServerHooks()) !== null && _getDevServerHooks2 !== void 0 && _getDevServerHooks2.getCriticalCss)) {
	              _context8.n = 25;
	              break;
	            }
	            _context8.n = 24;
	            return (_getDevServerHooks3 = getDevServerHooks()) === null || _getDevServerHooks3 === void 0 ? void 0 : (_getDevServerHooks3$g = _getDevServerHooks3.getCriticalCss) === null || _getDevServerHooks3$g === void 0 ? void 0 : _getDevServerHooks3$g.call(_getDevServerHooks3, pathname);
	          case 24:
	            criticalCss = _context8.v;
	          case 25:
	            _context8.n = 26;
	            return handleDocumentRequest(serverMode, _build, staticHandler, request, loadContext, handleError, isSpaMode, criticalCss);
	          case 26:
	            response = _context8.v;
	          case 27:
	            if (!(request.method === "HEAD")) {
	              _context8.n = 28;
	              break;
	            }
	            return _context8.a(2, new Response(null, {
	              headers: response.headers,
	              status: response.status,
	              statusText: response.statusText
	            }));
	          case 28:
	            return _context8.a(2, response);
	        }
	      }, _callee7, null, [[12, 14]]);
	    }));
	    function requestHandler(_x26, _x27) {
	      return _requestHandler.apply(this, arguments);
	    }
	    return requestHandler;
	  }();
	};
	function handleManifestRequest(_x28, _x29, _x30) {
	  return _handleManifestRequest.apply(this, arguments);
	}
	function _handleManifestRequest() {
	  _handleManifestRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(build, routes, url) {
	    var patches, paths, _iterator10, _step10, path, matches, _iterator11, _step11, match, routeId, route;
	    return _regenerator().w(function (_context35) {
	      while (1) switch (_context35.n) {
	        case 0:
	          if (!(build.assets.version !== url.searchParams.get("version"))) {
	            _context35.n = 1;
	            break;
	          }
	          return _context35.a(2, new Response(null, {
	            status: 204,
	            headers: {
	              "X-Remix-Reload-Document": "true"
	            }
	          }));
	        case 1:
	          patches = {};
	          if (!url.searchParams.has("p")) {
	            _context35.n = 2;
	            break;
	          }
	          paths = /* @__PURE__ */new Set();
	          url.searchParams.getAll("p").forEach(function (path) {
	            if (!path.startsWith("/")) {
	              path = "/".concat(path);
	            }
	            var segments = path.split("/").slice(1);
	            segments.forEach(function (_, i) {
	              var partialPath = segments.slice(0, i + 1).join("/");
	              paths.add("/".concat(partialPath));
	            });
	          });
	          _iterator10 = _createForOfIteratorHelper(paths);
	          try {
	            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
	              path = _step10.value;
	              matches = matchServerRoutes(routes, path, build.basename);
	              if (matches) {
	                _iterator11 = _createForOfIteratorHelper(matches);
	                try {
	                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
	                    match = _step11.value;
	                    routeId = match.route.id;
	                    route = build.assets.routes[routeId];
	                    if (route) {
	                      patches[routeId] = route;
	                    }
	                  }
	                } catch (err) {
	                  _iterator11.e(err);
	                } finally {
	                  _iterator11.f();
	                }
	              }
	            }
	          } catch (err) {
	            _iterator10.e(err);
	          } finally {
	            _iterator10.f();
	          }
	          return _context35.a(2, Response.json(patches, {
	            headers: {
	              "Cache-Control": "public, max-age=31536000, immutable"
	            }
	          }));
	        case 2:
	          return _context35.a(2, new Response("Invalid Request", {
	            status: 400
	          }));
	      }
	    }, _callee34);
	  }));
	  return _handleManifestRequest.apply(this, arguments);
	}
	function handleSingleFetchRequest(_x31, _x32, _x33, _x34, _x35, _x36, _x37) {
	  return _handleSingleFetchRequest.apply(this, arguments);
	}
	function _handleSingleFetchRequest() {
	  _handleSingleFetchRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(serverMode, build, staticHandler, request, handlerUrl, loadContext, handleError) {
	    var response, _t27;
	    return _regenerator().w(function (_context36) {
	      while (1) switch (_context36.n) {
	        case 0:
	          if (!(request.method !== "GET")) {
	            _context36.n = 2;
	            break;
	          }
	          _context36.n = 1;
	          return singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError);
	        case 1:
	          _t27 = _context36.v;
	          _context36.n = 4;
	          break;
	        case 2:
	          _context36.n = 3;
	          return singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError);
	        case 3:
	          _t27 = _context36.v;
	        case 4:
	          response = _t27;
	          return _context36.a(2, response);
	      }
	    }, _callee35);
	  }));
	  return _handleSingleFetchRequest.apply(this, arguments);
	}
	function handleDocumentRequest(_x38, _x39, _x40, _x41, _x42, _x43, _x44, _x45) {
	  return _handleDocumentRequest.apply(this, arguments);
	}
	function _handleDocumentRequest() {
	  _handleDocumentRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38(serverMode, build, staticHandler, request, loadContext, handleError, isSpaMode, criticalCss) {
	    var result, renderHtml, _renderHtml, _t32;
	    return _regenerator().w(function (_context39) {
	      while (1) switch (_context39.p = _context39.n) {
	        case 0:
	          _renderHtml = function _renderHtml3() {
	            _renderHtml = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37(context, isSpaMode2) {
	              var headers, state, baseServerHandoff, entryContext, handleDocumentRequestFunction, errorForSecondRender, data2, state2, _t29, _t31;
	              return _regenerator().w(function (_context38) {
	                while (1) switch (_context38.p = _context38.n) {
	                  case 0:
	                    headers = getDocumentHeaders(context, build);
	                    if (!SERVER_NO_BODY_STATUS_CODES.has(context.statusCode)) {
	                      _context38.n = 1;
	                      break;
	                    }
	                    return _context38.a(2, new Response(null, {
	                      status: context.statusCode,
	                      headers: headers
	                    }));
	                  case 1:
	                    if (context.errors) {
	                      Object.values(context.errors).forEach(function (err) {
	                        if (!isRouteErrorResponse(err) || err.error) {
	                          handleError(err);
	                        }
	                      });
	                      context.errors = sanitizeErrors(context.errors, serverMode);
	                    }
	                    state = {
	                      loaderData: context.loaderData,
	                      actionData: context.actionData,
	                      errors: serializeErrors(context.errors, serverMode)
	                    };
	                    baseServerHandoff = {
	                      basename: build.basename,
	                      future: build.future,
	                      routeDiscovery: build.routeDiscovery,
	                      ssr: build.ssr,
	                      isSpaMode: isSpaMode2
	                    };
	                    entryContext = {
	                      manifest: build.assets,
	                      routeModules: createEntryRouteModules(build.routes),
	                      staticHandlerContext: context,
	                      criticalCss: criticalCss,
	                      serverHandoffString: createServerHandoffString(_objectSpread2(_objectSpread2({}, baseServerHandoff), {}, {
	                        criticalCss: criticalCss
	                      })),
	                      serverHandoffStream: encodeViaTurboStream(state, request.signal, build.entry.module.streamTimeout, serverMode),
	                      renderMeta: {},
	                      future: build.future,
	                      ssr: build.ssr,
	                      routeDiscovery: build.routeDiscovery,
	                      isSpaMode: isSpaMode2,
	                      serializeError: function serializeError(err) {
	                        return _serializeError(err, serverMode);
	                      }
	                    };
	                    handleDocumentRequestFunction = build.entry.module["default"];
	                    _context38.p = 2;
	                    _context38.n = 3;
	                    return handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
	                  case 3:
	                    return _context38.a(2, _context38.v);
	                  case 4:
	                    _context38.p = 4;
	                    _t29 = _context38.v;
	                    handleError(_t29);
	                    errorForSecondRender = _t29;
	                    if (!isResponse(_t29)) {
	                      _context38.n = 8;
	                      break;
	                    }
	                    _context38.p = 5;
	                    _context38.n = 6;
	                    return unwrapResponse(_t29);
	                  case 6:
	                    data2 = _context38.v;
	                    errorForSecondRender = new ErrorResponseImpl(_t29.status, _t29.statusText, data2);
	                    _context38.n = 8;
	                    break;
	                  case 7:
	                    _context38.p = 7;
	                    _context38.v;
	                  case 8:
	                    context = getStaticContextFromError(staticHandler.dataRoutes, context, errorForSecondRender);
	                    if (context.errors) {
	                      context.errors = sanitizeErrors(context.errors, serverMode);
	                    }
	                    state2 = {
	                      loaderData: context.loaderData,
	                      actionData: context.actionData,
	                      errors: serializeErrors(context.errors, serverMode)
	                    };
	                    entryContext = _objectSpread2(_objectSpread2({}, entryContext), {}, {
	                      staticHandlerContext: context,
	                      serverHandoffString: createServerHandoffString(baseServerHandoff),
	                      serverHandoffStream: encodeViaTurboStream(state2, request.signal, build.entry.module.streamTimeout, serverMode),
	                      renderMeta: {}
	                    });
	                    _context38.p = 9;
	                    _context38.n = 10;
	                    return handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
	                  case 10:
	                    return _context38.a(2, _context38.v);
	                  case 11:
	                    _context38.p = 11;
	                    _t31 = _context38.v;
	                    handleError(_t31);
	                    return _context38.a(2, returnLastResortErrorResponse(_t31, serverMode));
	                }
	              }, _callee37, null, [[9, 11], [5, 7], [2, 4]]);
	            }));
	            return _renderHtml.apply(this, arguments);
	          };
	          renderHtml = function _renderHtml2(_x71, _x72) {
	            return _renderHtml.apply(this, arguments);
	          };
	          _context39.p = 1;
	          _context39.n = 2;
	          return staticHandler.query(request, {
	            requestContext: loadContext,
	            generateMiddlewareResponse: build.future.v8_middleware ? (/*#__PURE__*/function () {
	              var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36(query) {
	                var innerResult, _t28;
	                return _regenerator().w(function (_context37) {
	                  while (1) switch (_context37.p = _context37.n) {
	                    case 0:
	                      _context37.p = 0;
	                      _context37.n = 1;
	                      return query(request);
	                    case 1:
	                      innerResult = _context37.v;
	                      if (isResponse(innerResult)) {
	                        _context37.n = 3;
	                        break;
	                      }
	                      _context37.n = 2;
	                      return renderHtml(innerResult, isSpaMode);
	                    case 2:
	                      innerResult = _context37.v;
	                    case 3:
	                      return _context37.a(2, innerResult);
	                    case 4:
	                      _context37.p = 4;
	                      _t28 = _context37.v;
	                      handleError(_t28);
	                      return _context37.a(2, new Response(null, {
	                        status: 500
	                      }));
	                  }
	                }, _callee36, null, [[0, 4]]);
	              }));
	              return function (_x70) {
	                return _ref35.apply(this, arguments);
	              };
	            }()) : void 0
	          });
	        case 2:
	          result = _context39.v;
	          if (isResponse(result)) {
	            _context39.n = 4;
	            break;
	          }
	          _context39.n = 3;
	          return renderHtml(result, isSpaMode);
	        case 3:
	          result = _context39.v;
	        case 4:
	          return _context39.a(2, result);
	        case 5:
	          _context39.p = 5;
	          _t32 = _context39.v;
	          handleError(_t32);
	          return _context39.a(2, new Response(null, {
	            status: 500
	          }));
	      }
	    }, _callee38, null, [[1, 5]]);
	  }));
	  return _handleDocumentRequest.apply(this, arguments);
	}
	function handleResourceRequest(_x46, _x47, _x48, _x49, _x50, _x51, _x52) {
	  return _handleResourceRequest.apply(this, arguments);
	}
	function _handleResourceRequest() {
	  _handleResourceRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40(serverMode, build, staticHandler, routeId, request, loadContext, handleError) {
	    var result, handleQueryRouteResult, handleQueryRouteError, _t34;
	    return _regenerator().w(function (_context41) {
	      while (1) switch (_context41.p = _context41.n) {
	        case 0:
	          handleQueryRouteError = function _handleQueryRouteErro(error) {
	            if (isResponse(error)) {
	              error.headers.set("X-Remix-Catch", "yes");
	              return error;
	            }
	            if (isRouteErrorResponse(error)) {
	              handleError(error);
	              return errorResponseToJson(error, serverMode);
	            }
	            if (error instanceof Error && error.message === "Expected a response from queryRoute") {
	              var newError = new Error("Expected a Response to be returned from resource route handler");
	              handleError(newError);
	              return returnLastResortErrorResponse(newError, serverMode);
	            }
	            handleError(error);
	            return returnLastResortErrorResponse(error, serverMode);
	          };
	          handleQueryRouteResult = function _handleQueryRouteResu(result) {
	            if (isResponse(result)) {
	              return result;
	            }
	            if (typeof result === "string") {
	              return new Response(result);
	            }
	            return Response.json(result);
	          };
	          _context41.p = 1;
	          _context41.n = 2;
	          return staticHandler.queryRoute(request, {
	            routeId: routeId,
	            requestContext: loadContext,
	            generateMiddlewareResponse: build.future.v8_middleware ? (/*#__PURE__*/function () {
	              var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39(queryRoute) {
	                var innerResult, _t33;
	                return _regenerator().w(function (_context40) {
	                  while (1) switch (_context40.p = _context40.n) {
	                    case 0:
	                      _context40.p = 0;
	                      _context40.n = 1;
	                      return queryRoute(request);
	                    case 1:
	                      innerResult = _context40.v;
	                      return _context40.a(2, handleQueryRouteResult(innerResult));
	                    case 2:
	                      _context40.p = 2;
	                      _t33 = _context40.v;
	                      return _context40.a(2, handleQueryRouteError(_t33));
	                  }
	                }, _callee39, null, [[0, 2]]);
	              }));
	              return function (_x73) {
	                return _ref36.apply(this, arguments);
	              };
	            }()) : void 0
	          });
	        case 2:
	          result = _context41.v;
	          return _context41.a(2, handleQueryRouteResult(result));
	        case 3:
	          _context41.p = 3;
	          _t34 = _context41.v;
	          return _context41.a(2, handleQueryRouteError(_t34));
	      }
	    }, _callee40, null, [[1, 3]]);
	  }));
	  return _handleResourceRequest.apply(this, arguments);
	}
	function errorResponseToJson(errorResponse, serverMode) {
	  return Response.json(_serializeError(
	  // @ts-expect-error This is "private" from users but intended for internal use
	  errorResponse.error || new Error("Unexpected Server Error"), serverMode), {
	    status: errorResponse.status,
	    statusText: errorResponse.statusText,
	    headers: {
	      "X-Remix-Error": "yes"
	    }
	  });
	}
	function returnLastResortErrorResponse(error, serverMode) {
	  var message = "Unexpected Server Error";
	  if (serverMode !== "production" /* Production */) {
	    message += "\n\n".concat(String(error));
	  }
	  return new Response(message, {
	    status: 500,
	    headers: {
	      "Content-Type": "text/plain"
	    }
	  });
	}
	function unwrapResponse(response) {
	  var contentType = response.headers.get("Content-Type");
	  return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
	}

	// lib/server-runtime/sessions.ts
	function _flash(name) {
	  return "__flash_".concat(name, "__");
	}
	var createSession = function createSession() {
	  var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  var map = new Map(Object.entries(initialData));
	  return {
	    get id() {
	      return id;
	    },
	    get data() {
	      return Object.fromEntries(map);
	    },
	    has: function has(name) {
	      return map.has(name) || map.has(_flash(name));
	    },
	    get: function get(name) {
	      if (map.has(name)) return map.get(name);
	      var flashName = _flash(name);
	      if (map.has(flashName)) {
	        var value = map.get(flashName);
	        map["delete"](flashName);
	        return value;
	      }
	      return void 0;
	    },
	    set: function set(name, value) {
	      map.set(name, value);
	    },
	    flash: function flash(name, value) {
	      map.set(_flash(name), value);
	    },
	    unset: function unset(name) {
	      map["delete"](name);
	    }
	  };
	};
	var isSession = function isSession(object) {
	  return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
	};
	function createSessionStorage(_ref12) {
	  var cookieArg = _ref12.cookie,
	    createData = _ref12.createData,
	    readData = _ref12.readData,
	    updateData = _ref12.updateData,
	    deleteData = _ref12.deleteData;
	  var cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
	  warnOnceAboutSigningSessionCookie(cookie);
	  return {
	    getSession: function getSession(cookieHeader, options) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
	        var id, data2, _t7, _t8;
	        return _regenerator().w(function (_context9) {
	          while (1) switch (_context9.n) {
	            case 0:
	              _t7 = cookieHeader;
	              if (!_t7) {
	                _context9.n = 2;
	                break;
	              }
	              _context9.n = 1;
	              return cookie.parse(cookieHeader, options);
	            case 1:
	              _t7 = _context9.v;
	            case 2:
	              id = _t7;
	              _t8 = id;
	              if (!_t8) {
	                _context9.n = 4;
	                break;
	              }
	              _context9.n = 3;
	              return readData(id);
	            case 3:
	              _t8 = _context9.v;
	            case 4:
	              data2 = _t8;
	              return _context9.a(2, createSession(data2 || {}, id || ""));
	          }
	        }, _callee8);
	      }))();
	    },
	    commitSession: function commitSession(session, options) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
	        var id, data2, expires;
	        return _regenerator().w(function (_context0) {
	          while (1) switch (_context0.n) {
	            case 0:
	              id = session.id, data2 = session.data;
	              expires = (options === null || options === void 0 ? void 0 : options.maxAge) != null ? new Date(Date.now() + options.maxAge * 1e3) : (options === null || options === void 0 ? void 0 : options.expires) != null ? options.expires : cookie.expires;
	              if (!id) {
	                _context0.n = 2;
	                break;
	              }
	              _context0.n = 1;
	              return updateData(id, data2, expires);
	            case 1:
	              _context0.n = 4;
	              break;
	            case 2:
	              _context0.n = 3;
	              return createData(data2, expires);
	            case 3:
	              id = _context0.v;
	            case 4:
	              return _context0.a(2, cookie.serialize(id, options));
	          }
	        }, _callee9);
	      }))();
	    },
	    destroySession: function destroySession(session, options) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
	        return _regenerator().w(function (_context1) {
	          while (1) switch (_context1.n) {
	            case 0:
	              _context1.n = 1;
	              return deleteData(session.id);
	            case 1:
	              return _context1.a(2, cookie.serialize("", _objectSpread2(_objectSpread2({}, options), {}, {
	                maxAge: void 0,
	                expires: /* @__PURE__ */new Date(0)
	              })));
	          }
	        }, _callee0);
	      }))();
	    }
	  };
	}
	function warnOnceAboutSigningSessionCookie(cookie) {
	  warnOnce(cookie.isSigned, "The \"".concat(cookie.name, "\" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information."));
	}

	// lib/server-runtime/sessions/cookieStorage.ts
	function createCookieSessionStorage() {
	  var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    cookieArg = _ref13.cookie;
	  var cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
	  warnOnceAboutSigningSessionCookie(cookie);
	  return {
	    getSession: function getSession(cookieHeader, options) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
	        var _t9, _t0, _t1;
	        return _regenerator().w(function (_context10) {
	          while (1) switch (_context10.n) {
	            case 0:
	              _t9 = createSession;
	              _t1 = cookieHeader;
	              if (!_t1) {
	                _context10.n = 2;
	                break;
	              }
	              _context10.n = 1;
	              return cookie.parse(cookieHeader, options);
	            case 1:
	              _t1 = _context10.v;
	            case 2:
	              _t0 = _t1;
	              if (_t0) {
	                _context10.n = 3;
	                break;
	              }
	              _t0 = {};
	            case 3:
	              return _context10.a(2, _t9(_t0));
	          }
	        }, _callee1);
	      }))();
	    },
	    commitSession: function commitSession(session, options) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
	        var serializedCookie;
	        return _regenerator().w(function (_context11) {
	          while (1) switch (_context11.n) {
	            case 0:
	              _context11.n = 1;
	              return cookie.serialize(session.data, options);
	            case 1:
	              serializedCookie = _context11.v;
	              if (!(serializedCookie.length > 4096)) {
	                _context11.n = 2;
	                break;
	              }
	              throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
	            case 2:
	              return _context11.a(2, serializedCookie);
	          }
	        }, _callee10);
	      }))();
	    },
	    destroySession: function destroySession(_session, options) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
	        return _regenerator().w(function (_context12) {
	          while (1) switch (_context12.n) {
	            case 0:
	              return _context12.a(2, cookie.serialize("", _objectSpread2(_objectSpread2({}, options), {}, {
	                maxAge: void 0,
	                expires: /* @__PURE__ */new Date(0)
	              })));
	          }
	        }, _callee11);
	      }))();
	    }
	  };
	}

	// lib/server-runtime/sessions/memoryStorage.ts
	function createMemorySessionStorage() {
	  var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    cookie = _ref14.cookie;
	  var map = /* @__PURE__ */new Map();
	  return createSessionStorage({
	    cookie: cookie,
	    createData: function createData(data2, expires) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
	        var id;
	        return _regenerator().w(function (_context13) {
	          while (1) switch (_context13.n) {
	            case 0:
	              id = Math.random().toString(36).substring(2, 10);
	              map.set(id, {
	                data: data2,
	                expires: expires
	              });
	              return _context13.a(2, id);
	          }
	        }, _callee12);
	      }))();
	    },
	    readData: function readData(id) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
	        var _map$get, data2, expires;
	        return _regenerator().w(function (_context14) {
	          while (1) switch (_context14.n) {
	            case 0:
	              if (!map.has(id)) {
	                _context14.n = 2;
	                break;
	              }
	              _map$get = map.get(id), data2 = _map$get.data, expires = _map$get.expires;
	              if (!(!expires || expires > /* @__PURE__ */new Date())) {
	                _context14.n = 1;
	                break;
	              }
	              return _context14.a(2, data2);
	            case 1:
	              if (expires) map["delete"](id);
	            case 2:
	              return _context14.a(2, null);
	          }
	        }, _callee13);
	      }))();
	    },
	    updateData: function updateData(id, data2, expires) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
	        return _regenerator().w(function (_context15) {
	          while (1) switch (_context15.n) {
	            case 0:
	              map.set(id, {
	                data: data2,
	                expires: expires
	              });
	            case 1:
	              return _context15.a(2);
	          }
	        }, _callee14);
	      }))();
	    },
	    deleteData: function deleteData(id) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
	        return _regenerator().w(function (_context16) {
	          while (1) switch (_context16.n) {
	            case 0:
	              map["delete"](id);
	            case 1:
	              return _context16.a(2);
	          }
	        }, _callee15);
	      }))();
	    }
	  });
	}

	// lib/href.ts
	function href(path) {
	  var params = arguments.length <= 1 ? undefined : arguments[1];
	  var result = path.replace(/\/*\*?$/, "").replace(/\/:([\w-]+)(\?)?/g,
	  // same regex as in .\router\utils.ts: compilePath().
	  function (_, param, questionMark) {
	    var isRequired = questionMark === void 0;
	    var value = params ? params[param] : void 0;
	    if (isRequired && value === void 0) {
	      throw new Error("Path '".concat(path, "' requires param '").concat(param, "' but it was not provided"));
	    }
	    return value === void 0 ? "" : "/" + value;
	  });
	  if (path.endsWith("*")) {
	    var value = params ? params["*"] : void 0;
	    if (value !== void 0) {
	      result += "/" + value;
	    }
	  }
	  return result || "/";
	}

	// lib/dom/ssr/hydration.tsx
	function getHydrationData(_ref15) {
	  var state = _ref15.state,
	    routes = _ref15.routes,
	    getRouteInfo = _ref15.getRouteInfo,
	    location2 = _ref15.location,
	    basename = _ref15.basename,
	    isSpaMode = _ref15.isSpaMode;
	  var hydrationData = _objectSpread2(_objectSpread2({}, state), {}, {
	    loaderData: _objectSpread2({}, state.loaderData)
	  });
	  var initialMatches = matchRoutes(routes, location2, basename);
	  if (initialMatches) {
	    var _iterator3 = _createForOfIteratorHelper(initialMatches),
	      _step3;
	    try {
	      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	        var match = _step3.value;
	        var routeId = match.route.id;
	        var routeInfo = getRouteInfo(routeId);
	        if (shouldHydrateRouteLoader(routeId, routeInfo.clientLoader, routeInfo.hasLoader, isSpaMode) && (routeInfo.hasHydrateFallback || !routeInfo.hasLoader)) {
	          delete hydrationData.loaderData[routeId];
	        } else if (!routeInfo.hasLoader) {
	          hydrationData.loaderData[routeId] = null;
	        }
	      }
	    } catch (err) {
	      _iterator3.e(err);
	    } finally {
	      _iterator3.f();
	    }
	  }
	  return hydrationData;
	}
	var RSCRouterGlobalErrorBoundary = /*#__PURE__*/function (_React3$Component) {
	  function RSCRouterGlobalErrorBoundary(props) {
	    var _this;
	    _classCallCheck(this, RSCRouterGlobalErrorBoundary);
	    _this = _callSuper(this, RSCRouterGlobalErrorBoundary, [props]);
	    _this.state = {
	      error: null,
	      location: props.location
	    };
	    return _this;
	  }
	  _inherits(RSCRouterGlobalErrorBoundary, _React3$Component);
	  return _createClass(RSCRouterGlobalErrorBoundary, [{
	    key: "render",
	    value: function render() {
	      if (this.state.error) {
	        return /* @__PURE__ */React3.createElement(RSCDefaultRootErrorBoundaryImpl, {
	          error: this.state.error,
	          renderAppShell: true
	        });
	      } else {
	        return this.props.children;
	      }
	    }
	  }], [{
	    key: "getDerivedStateFromError",
	    value: function getDerivedStateFromError(error) {
	      return {
	        error: error
	      };
	    }
	  }, {
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(props, state) {
	      if (state.location !== props.location) {
	        return {
	          error: null,
	          location: props.location
	        };
	      }
	      return {
	        error: state.error,
	        location: state.location
	      };
	    }
	  }]);
	}(React3.Component);
	function ErrorWrapper(_ref16) {
	  var renderAppShell = _ref16.renderAppShell,
	    title = _ref16.title,
	    children = _ref16.children;
	  if (!renderAppShell) {
	    return children;
	  }
	  return /* @__PURE__ */React3.createElement("html", {
	    lang: "en"
	  }, /* @__PURE__ */React3.createElement("head", null, /* @__PURE__ */React3.createElement("meta", {
	    charSet: "utf-8"
	  }), /* @__PURE__ */React3.createElement("meta", {
	    name: "viewport",
	    content: "width=device-width,initial-scale=1,viewport-fit=cover"
	  }), /* @__PURE__ */React3.createElement("title", null, title)), /* @__PURE__ */React3.createElement("body", null, /* @__PURE__ */React3.createElement("main", {
	    style: {
	      fontFamily: "system-ui, sans-serif",
	      padding: "2rem"
	    }
	  }, children)));
	}
	function RSCDefaultRootErrorBoundaryImpl(_ref17) {
	  var error = _ref17.error,
	    renderAppShell = _ref17.renderAppShell;
	  console.error(error);
	  var heyDeveloper = /* @__PURE__ */React3.createElement("script", {
	    dangerouslySetInnerHTML: {
	      __html: "\n        console.log(\n          \"\uD83D\uDCBF Hey developer \uD83D\uDC4B. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information.\"\n        );\n      "
	    }
	  });
	  if (isRouteErrorResponse(error)) {
	    return /* @__PURE__ */React3.createElement(ErrorWrapper, {
	      renderAppShell: renderAppShell,
	      title: "Unhandled Thrown Response!"
	    }, /* @__PURE__ */React3.createElement("h1", {
	      style: {
	        fontSize: "24px"
	      }
	    }, error.status, " ", error.statusText), heyDeveloper );
	  }
	  var errorInstance;
	  if (error instanceof Error) {
	    errorInstance = error;
	  } else {
	    var errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
	    errorInstance = new Error(errorString);
	  }
	  return /* @__PURE__ */React3.createElement(ErrorWrapper, {
	    renderAppShell: renderAppShell,
	    title: "Application Error!"
	  }, /* @__PURE__ */React3.createElement("h1", {
	    style: {
	      fontSize: "24px"
	    }
	  }, "Application Error"), /* @__PURE__ */React3.createElement("pre", {
	    style: {
	      padding: "2rem",
	      background: "hsla(10, 50%, 50%, 0.1)",
	      color: "red",
	      overflow: "auto"
	    }
	  }, errorInstance.stack), heyDeveloper);
	}
	function RSCDefaultRootErrorBoundary(_ref18) {
	  var hasRootLayout = _ref18.hasRootLayout;
	  var error = useRouteError();
	  if (hasRootLayout === void 0) {
	    throw new Error("Missing 'hasRootLayout' prop");
	  }
	  return /* @__PURE__ */React3.createElement(RSCDefaultRootErrorBoundaryImpl, {
	    renderAppShell: !hasRootLayout,
	    error: error
	  });
	}

	// lib/rsc/route-modules.ts
	function createRSCRouteModules(payload) {
	  var routeModules = {};
	  var _iterator4 = _createForOfIteratorHelper(payload.matches),
	    _step4;
	  try {
	    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	      var match = _step4.value;
	      populateRSCRouteModules(routeModules, match);
	    }
	  } catch (err) {
	    _iterator4.e(err);
	  } finally {
	    _iterator4.f();
	  }
	  return routeModules;
	}
	function populateRSCRouteModules(routeModules, matches) {
	  matches = Array.isArray(matches) ? matches : [matches];
	  var _iterator5 = _createForOfIteratorHelper(matches),
	    _step5;
	  try {
	    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	      var match = _step5.value;
	      routeModules[match.id] = {
	        links: match.links,
	        meta: match.meta,
	        "default": noopComponent
	      };
	    }
	  } catch (err) {
	    _iterator5.e(err);
	  } finally {
	    _iterator5.f();
	  }
	}
	var noopComponent = function noopComponent() {
	  return null;
	};

	// lib/rsc/browser.tsx
	function createCallServer(_ref19) {
	  var createFromReadableStream = _ref19.createFromReadableStream,
	    createTemporaryReferenceSet = _ref19.createTemporaryReferenceSet,
	    encodeReply = _ref19.encodeReply,
	    _ref19$fetch = _ref19.fetch,
	    fetchImplementation = _ref19$fetch === void 0 ? fetch : _ref19$fetch;
	  var globalVar = window;
	  var landedActionId = 0;
	  return /*#__PURE__*/function () {
	    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(id, args) {
	      var _globalVar$__routerAc;
	      var actionId, temporaryReferences, response, payload, _t10, _t11, _t12, _t13, _t14, _t15;
	      return _regenerator().w(function (_context18) {
	        while (1) switch (_context18.n) {
	          case 0:
	            actionId = globalVar.__routerActionID = ((_globalVar$__routerAc = globalVar.__routerActionID) !== null && _globalVar$__routerAc !== void 0 ? _globalVar$__routerAc : globalVar.__routerActionID = 0) + 1;
	            temporaryReferences = createTemporaryReferenceSet();
	            _t10 = fetchImplementation;
	            _t11 = Request;
	            _t12 = location.href;
	            _context18.n = 1;
	            return encodeReply(args, {
	              temporaryReferences: temporaryReferences
	            });
	          case 1:
	            _t13 = _context18.v;
	            _t14 = {
	              Accept: "text/x-component",
	              "rsc-action-id": id
	            };
	            _t15 = {
	              body: _t13,
	              method: "POST",
	              headers: _t14
	            };
	            _context18.n = 2;
	            return _t10(new _t11(_t12, _t15));
	          case 2:
	            response = _context18.v;
	            if (response.body) {
	              _context18.n = 3;
	              break;
	            }
	            throw new Error("No response body");
	          case 3:
	            _context18.n = 4;
	            return createFromReadableStream(response.body, {
	              temporaryReferences: temporaryReferences
	            });
	          case 4:
	            payload = _context18.v;
	            if (!(payload.type === "redirect")) {
	              _context18.n = 6;
	              break;
	            }
	            if (!payload.reload) {
	              _context18.n = 5;
	              break;
	            }
	            window.location.href = payload.location;
	            return _context18.a(2);
	          case 5:
	            globalVar.__reactRouterDataRouter.navigate(payload.location, {
	              replace: payload.replace
	            });
	            return _context18.a(2, payload.actionResult);
	          case 6:
	            if (!(payload.type !== "action")) {
	              _context18.n = 7;
	              break;
	            }
	            throw new Error("Unexpected payload type");
	          case 7:
	            if (payload.rerender) {
	              React3__namespace.startTransition(
	              /*#__PURE__*/
	              // @ts-expect-error - We have old react types that don't know this can be async
	              _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
	                var rerender, lastMatch, _iterator6, _step6, _lastMatch$id, _lastMatch, match;
	                return _regenerator().w(function (_context17) {
	                  while (1) switch (_context17.n) {
	                    case 0:
	                      _context17.n = 1;
	                      return payload.rerender;
	                    case 1:
	                      rerender = _context17.v;
	                      if (rerender) {
	                        _context17.n = 2;
	                        break;
	                      }
	                      return _context17.a(2);
	                    case 2:
	                      if (!(landedActionId < actionId && globalVar.__routerActionID <= actionId)) {
	                        _context17.n = 5;
	                        break;
	                      }
	                      landedActionId = actionId;
	                      if (!(rerender.type === "redirect")) {
	                        _context17.n = 4;
	                        break;
	                      }
	                      if (!rerender.reload) {
	                        _context17.n = 3;
	                        break;
	                      }
	                      window.location.href = rerender.location;
	                      return _context17.a(2);
	                    case 3:
	                      globalVar.__reactRouterDataRouter.navigate(rerender.location, {
	                        replace: rerender.replace
	                      });
	                      return _context17.a(2);
	                    case 4:
	                      _iterator6 = _createForOfIteratorHelper(rerender.matches);
	                      try {
	                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
	                          match = _step6.value;
	                          globalVar.__reactRouterDataRouter.patchRoutes((_lastMatch$id = (_lastMatch = lastMatch) === null || _lastMatch === void 0 ? void 0 : _lastMatch.id) !== null && _lastMatch$id !== void 0 ? _lastMatch$id : null, [createRouteFromServerManifest(match)], true);
	                          lastMatch = match;
	                        }
	                      } catch (err) {
	                        _iterator6.e(err);
	                      } finally {
	                        _iterator6.f();
	                      }
	                      window.__reactRouterDataRouter._internalSetStateDoNotUseOrYouWillBreakYourApp({});
	                      React3__namespace.startTransition(function () {
	                        window.__reactRouterDataRouter._internalSetStateDoNotUseOrYouWillBreakYourApp({
	                          loaderData: Object.assign({}, globalVar.__reactRouterDataRouter.state.loaderData, rerender.loaderData),
	                          errors: rerender.errors ? Object.assign({}, globalVar.__reactRouterDataRouter.state.errors, rerender.errors) : null
	                        });
	                      });
	                    case 5:
	                      return _context17.a(2);
	                  }
	                }, _callee16);
	              })));
	            }
	            return _context18.a(2, payload.actionResult);
	        }
	      }, _callee17);
	    }));
	    return function (_x53, _x54) {
	      return _ref20.apply(this, arguments);
	    };
	  }();
	}
	function createRouterFromPayload(_ref22) {
	  var _globalVar$__reactRou, _payload$patches;
	  var fetchImplementation = _ref22.fetchImplementation,
	    createFromReadableStream = _ref22.createFromReadableStream,
	    getContext = _ref22.getContext,
	    payload = _ref22.payload;
	  var globalVar = window;
	  if (globalVar.__reactRouterDataRouter && globalVar.__reactRouterRouteModules) return {
	    router: globalVar.__reactRouterDataRouter,
	    routeModules: globalVar.__reactRouterRouteModules
	  };
	  if (payload.type !== "render") throw new Error("Invalid payload type");
	  globalVar.__reactRouterRouteModules = (_globalVar$__reactRou = globalVar.__reactRouterRouteModules) !== null && _globalVar$__reactRou !== void 0 ? _globalVar$__reactRou : {};
	  populateRSCRouteModules(globalVar.__reactRouterRouteModules, payload.matches);
	  var patches = /* @__PURE__ */new Map();
	  (_payload$patches = payload.patches) === null || _payload$patches === void 0 ? void 0 : _payload$patches.forEach(function (patch) {
	    var _patches$get;
	    invariant(patch.parentId, "Invalid patch parentId");
	    if (!patches.has(patch.parentId)) {
	      patches.set(patch.parentId, []);
	    }
	    (_patches$get = patches.get(patch.parentId)) === null || _patches$get === void 0 ? void 0 : _patches$get.push(patch);
	  });
	  var routes = payload.matches.reduceRight(function (previous, match) {
	    var route = createRouteFromServerManifest(match, payload);
	    if (previous.length > 0) {
	      route.children = previous;
	      var childrenToPatch = patches.get(match.id);
	      if (childrenToPatch) {
	        var _route$children;
	        (_route$children = route.children).push.apply(_route$children, _toConsumableArray(childrenToPatch.map(function (r) {
	          return createRouteFromServerManifest(r);
	        })));
	      }
	    }
	    return [route];
	  }, []);
	  globalVar.__reactRouterDataRouter = createRouter({
	    routes: routes,
	    getContext: getContext,
	    basename: payload.basename,
	    history: createBrowserHistory(),
	    hydrationData: getHydrationData({
	      state: {
	        loaderData: payload.loaderData,
	        actionData: payload.actionData,
	        errors: payload.errors
	      },
	      routes: routes,
	      getRouteInfo: function getRouteInfo(routeId) {
	        var match = payload.matches.find(function (m) {
	          return m.id === routeId;
	        });
	        invariant(match, "Route not found in payload");
	        return {
	          clientLoader: match.clientLoader,
	          hasLoader: match.hasLoader,
	          hasHydrateFallback: match.hydrateFallbackElement != null
	        };
	      },
	      location: payload.location,
	      basename: payload.basename,
	      isSpaMode: false
	    }),
	    patchRoutesOnNavigation: function patchRoutesOnNavigation(_ref23) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
	        var path, signal;
	        return _regenerator().w(function (_context19) {
	          while (1) switch (_context19.n) {
	            case 0:
	              path = _ref23.path, signal = _ref23.signal;
	              if (!discoveredPaths.has(path)) {
	                _context19.n = 1;
	                break;
	              }
	              return _context19.a(2);
	            case 1:
	              _context19.n = 2;
	              return fetchAndApplyManifestPatches([path], createFromReadableStream, fetchImplementation, signal);
	            case 2:
	              return _context19.a(2);
	          }
	        }, _callee18);
	      }))();
	    },
	    // FIXME: Pass `build.ssr` into this function
	    dataStrategy: getRSCSingleFetchDataStrategy(function () {
	      return globalVar.__reactRouterDataRouter;
	    }, true, payload.basename, createFromReadableStream, fetchImplementation)
	  });
	  if (globalVar.__reactRouterDataRouter.state.initialized) {
	    globalVar.__routerInitialized = true;
	    globalVar.__reactRouterDataRouter.initialize();
	  } else {
	    globalVar.__routerInitialized = false;
	  }
	  var lastLoaderData = void 0;
	  globalVar.__reactRouterDataRouter.subscribe(function (_ref24) {
	    var loaderData = _ref24.loaderData;
	      _ref24.actionData;
	    if (lastLoaderData !== loaderData) {
	      var _globalVar$__routerAc2;
	      globalVar.__routerActionID = ((_globalVar$__routerAc2 = globalVar.__routerActionID) !== null && _globalVar$__routerAc2 !== void 0 ? _globalVar$__routerAc2 : globalVar.__routerActionID = 0) + 1;
	    }
	  });
	  globalVar.__reactRouterDataRouter._updateRoutesForHMR = function (routeUpdateByRouteId) {
	    var oldRoutes = window.__reactRouterDataRouter.routes;
	    var newRoutes = [];
	    function walkRoutes(routes2, parentId) {
	      return routes2.map(function (route) {
	        var routeUpdate = routeUpdateByRouteId.get(route.id);
	        if (routeUpdate) {
	          var routeModule = routeUpdate.routeModule,
	            hasAction = routeUpdate.hasAction,
	            hasComponent = routeUpdate.hasComponent,
	            hasErrorBoundary = routeUpdate.hasErrorBoundary,
	            hasLoader = routeUpdate.hasLoader;
	          var newRoute = createRouteFromServerManifest({
	            clientAction: routeModule.clientAction,
	            clientLoader: routeModule.clientLoader,
	            element: route.element,
	            errorElement: route.errorElement,
	            handle: route.handle,
	            hasAction: hasAction,
	            hasComponent: hasComponent,
	            hasErrorBoundary: hasErrorBoundary,
	            hasLoader: hasLoader,
	            hydrateFallbackElement: route.hydrateFallbackElement,
	            id: route.id,
	            index: route.index,
	            links: routeModule.links,
	            meta: routeModule.meta,
	            parentId: parentId,
	            path: route.path,
	            shouldRevalidate: routeModule.shouldRevalidate
	          });
	          if (route.children) {
	            newRoute.children = walkRoutes(route.children, route.id);
	          }
	          return newRoute;
	        }
	        var updatedRoute = _objectSpread2({}, route);
	        if (route.children) {
	          updatedRoute.children = walkRoutes(route.children, route.id);
	        }
	        return updatedRoute;
	      });
	    }
	    newRoutes.push.apply(newRoutes, _toConsumableArray(walkRoutes(oldRoutes, void 0)));
	    window.__reactRouterDataRouter._internalSetRoutes(newRoutes);
	  };
	  return {
	    router: globalVar.__reactRouterDataRouter,
	    routeModules: globalVar.__reactRouterRouteModules
	  };
	}
	var renderedRoutesContext = createContext();
	function getRSCSingleFetchDataStrategy(getRouter, ssr, basename, createFromReadableStream, fetchImplementation) {
	  var dataStrategy = getSingleFetchDataStrategyImpl(getRouter, function (match) {
	    var M = match;
	    return {
	      hasLoader: M.route.hasLoader,
	      hasClientLoader: M.route.hasClientLoader,
	      hasComponent: M.route.hasComponent,
	      hasAction: M.route.hasAction,
	      hasClientAction: M.route.hasClientAction,
	      hasShouldRevalidate: M.route.hasShouldRevalidate
	    };
	  },
	  // pass map into fetchAndDecode so it can add payloads
	  getFetchAndDecodeViaRSC(createFromReadableStream, fetchImplementation), ssr, basename,
	  // If the route has a component but we don't have an element, we need to hit
	  // the server loader flow regardless of whether the client loader calls
	  // `serverLoader` or not, otherwise we'll have nothing to render.
	  function (match) {
	    var M = match;
	    return M.route.hasComponent && !M.route.element;
	  });
	  return /*#__PURE__*/function () {
	    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(args) {
	      return _regenerator().w(function (_context21) {
	        while (1) switch (_context21.n) {
	          case 0:
	            return _context21.a(2, args.runClientMiddleware(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
	              var context, results, renderedRoutesById, _iterator7, _step7, route, _iterator8, _step8, match, renderedRoutes, _iterator9, _step9, _rendered$parentId, rendered;
	              return _regenerator().w(function (_context20) {
	                while (1) switch (_context20.n) {
	                  case 0:
	                    context = args.context;
	                    context.set(renderedRoutesContext, []);
	                    _context20.n = 1;
	                    return dataStrategy(args);
	                  case 1:
	                    results = _context20.v;
	                    renderedRoutesById = /* @__PURE__ */new Map();
	                    _iterator7 = _createForOfIteratorHelper(context.get(renderedRoutesContext));
	                    try {
	                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
	                        route = _step7.value;
	                        if (!renderedRoutesById.has(route.id)) {
	                          renderedRoutesById.set(route.id, []);
	                        }
	                        renderedRoutesById.get(route.id).push(route);
	                      }
	                    } catch (err) {
	                      _iterator7.e(err);
	                    } finally {
	                      _iterator7.f();
	                    }
	                    _iterator8 = _createForOfIteratorHelper(args.matches);
	                    try {
	                      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
	                        match = _step8.value;
	                        renderedRoutes = renderedRoutesById.get(match.route.id);
	                        if (renderedRoutes) {
	                          _iterator9 = _createForOfIteratorHelper(renderedRoutes);
	                          try {
	                            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
	                              rendered = _step9.value;
	                              window.__reactRouterDataRouter.patchRoutes((_rendered$parentId = rendered.parentId) !== null && _rendered$parentId !== void 0 ? _rendered$parentId : null, [createRouteFromServerManifest(rendered)], true);
	                            }
	                          } catch (err) {
	                            _iterator9.e(err);
	                          } finally {
	                            _iterator9.f();
	                          }
	                        }
	                      }
	                    } catch (err) {
	                      _iterator8.e(err);
	                    } finally {
	                      _iterator8.f();
	                    }
	                    return _context20.a(2, results);
	                }
	              }, _callee19);
	            }))));
	        }
	      }, _callee20);
	    }));
	    return function (_x55) {
	      return _ref25.apply(this, arguments);
	    };
	  }();
	}
	function getFetchAndDecodeViaRSC(createFromReadableStream, fetchImplementation) {
	  return /*#__PURE__*/function () {
	    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(args, basename, targetRoutes) {
	      var request, context, url, res, _context$get, payload, results, dataKey, _i3, _Object$entries, _Object$entries$_i, routeId, data2, _i4, _Object$entries2, _Object$entries2$_i, _routeId, error, _t16, _t17, _t18, _t19;
	      return _regenerator().w(function (_context22) {
	        while (1) switch (_context22.p = _context22.n) {
	          case 0:
	            request = args.request, context = args.context;
	            url = singleFetchUrl(request.url, basename, "rsc");
	            if (request.method === "GET") {
	              url = stripIndexParam(url);
	              if (targetRoutes) {
	                url.searchParams.set("_routes", targetRoutes.join(","));
	              }
	            }
	            _t16 = fetchImplementation;
	            _t17 = Request;
	            _t18 = url;
	            _context22.n = 1;
	            return createRequestInit(request);
	          case 1:
	            _t19 = _context22.v;
	            _context22.n = 2;
	            return _t16(new _t17(_t18, _t19));
	          case 2:
	            res = _context22.v;
	            if (!(res.status === 404 && !res.headers.has("X-Remix-Response"))) {
	              _context22.n = 3;
	              break;
	            }
	            throw new ErrorResponseImpl(404, "Not Found", true);
	          case 3:
	            invariant(res.body, "No response body to decode");
	            _context22.p = 4;
	            _context22.n = 5;
	            return createFromReadableStream(res.body, {
	              temporaryReferences: void 0
	            });
	          case 5:
	            payload = _context22.v;
	            if (!(payload.type === "redirect")) {
	              _context22.n = 6;
	              break;
	            }
	            return _context22.a(2, {
	              status: res.status,
	              data: {
	                redirect: {
	                  redirect: payload.location,
	                  reload: payload.reload,
	                  replace: payload.replace,
	                  revalidate: false,
	                  status: payload.status
	                }
	              }
	            });
	          case 6:
	            if (!(payload.type !== "render")) {
	              _context22.n = 7;
	              break;
	            }
	            throw new Error("Unexpected payload type");
	          case 7:
	            (_context$get = context.get(renderedRoutesContext)).push.apply(_context$get, _toConsumableArray(payload.matches));
	            results = {
	              routes: {}
	            };
	            dataKey = isMutationMethod(request.method) ? "actionData" : "loaderData";
	            for (_i3 = 0, _Object$entries = Object.entries(payload[dataKey] || {}); _i3 < _Object$entries.length; _i3++) {
	              _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2), routeId = _Object$entries$_i[0], data2 = _Object$entries$_i[1];
	              results.routes[routeId] = {
	                data: data2
	              };
	            }
	            if (payload.errors) {
	              for (_i4 = 0, _Object$entries2 = Object.entries(payload.errors); _i4 < _Object$entries2.length; _i4++) {
	                _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2), _routeId = _Object$entries2$_i[0], error = _Object$entries2$_i[1];
	                results.routes[_routeId] = {
	                  error: error
	                };
	              }
	            }
	            return _context22.a(2, {
	              status: res.status,
	              data: results
	            });
	          case 8:
	            _context22.p = 8;
	            _context22.v;
	            throw new Error("Unable to decode RSC response");
	          case 9:
	            return _context22.a(2);
	        }
	      }, _callee21, null, [[4, 8]]);
	    }));
	    return function (_x56, _x57, _x58) {
	      return _ref27.apply(this, arguments);
	    };
	  }();
	}
	function RSCHydratedRouter(_ref28) {
	  var createFromReadableStream = _ref28.createFromReadableStream,
	    _ref28$fetch = _ref28.fetch,
	    fetchImplementation = _ref28$fetch === void 0 ? fetch : _ref28$fetch,
	    payload = _ref28.payload,
	    _ref28$routeDiscovery = _ref28.routeDiscovery,
	    routeDiscovery = _ref28$routeDiscovery === void 0 ? "eager" : _ref28$routeDiscovery,
	    getContext = _ref28.getContext;
	  if (payload.type !== "render") throw new Error("Invalid payload type");
	  var _React4$useMemo = React3__namespace.useMemo(function () {
	      return createRouterFromPayload({
	        payload: payload,
	        fetchImplementation: fetchImplementation,
	        getContext: getContext,
	        createFromReadableStream: createFromReadableStream
	      });
	    }, [createFromReadableStream, payload, fetchImplementation, getContext]),
	    router = _React4$useMemo.router,
	    routeModules = _React4$useMemo.routeModules;
	  React3__namespace.useEffect(function () {
	    setIsHydrated();
	  }, []);
	  React3__namespace.useLayoutEffect(function () {
	    var globalVar = window;
	    if (!globalVar.__routerInitialized) {
	      globalVar.__routerInitialized = true;
	      globalVar.__reactRouterDataRouter.initialize();
	    }
	  }, []);
	  var _React4$useState = React3__namespace.useState(router.state.location),
	    _React4$useState2 = _slicedToArray(_React4$useState, 2),
	    location2 = _React4$useState2[0],
	    setLocation = _React4$useState2[1];
	  React3__namespace.useLayoutEffect(function () {
	    return router.subscribe(function (newState) {
	      if (newState.location !== location2) {
	        setLocation(newState.location);
	      }
	    });
	  }, [router, location2]);
	  React3__namespace.useEffect(function () {
	    var _window$navigator, _window$navigator$con;
	    if (routeDiscovery === "lazy" ||
	    // @ts-expect-error - TS doesn't know about this yet
	    ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$con = _window$navigator.connection) === null || _window$navigator$con === void 0 ? void 0 : _window$navigator$con.saveData) === true) {
	      return;
	    }
	    function registerElement(el) {
	      var path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
	      if (!path) {
	        return;
	      }
	      var pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
	      if (!discoveredPaths.has(pathname)) {
	        nextPaths.add(pathname);
	      }
	    }
	    function fetchPatches() {
	      return _fetchPatches.apply(this, arguments);
	    }
	    function _fetchPatches() {
	      _fetchPatches = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
	        var paths, _t21;
	        return _regenerator().w(function (_context23) {
	          while (1) switch (_context23.p = _context23.n) {
	            case 0:
	              document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
	              paths = Array.from(nextPaths.keys()).filter(function (path) {
	                if (discoveredPaths.has(path)) {
	                  nextPaths["delete"](path);
	                  return false;
	                }
	                return true;
	              });
	              if (!(paths.length === 0)) {
	                _context23.n = 1;
	                break;
	              }
	              return _context23.a(2);
	            case 1:
	              _context23.p = 1;
	              _context23.n = 2;
	              return fetchAndApplyManifestPatches(paths, createFromReadableStream, fetchImplementation);
	            case 2:
	              _context23.n = 4;
	              break;
	            case 3:
	              _context23.p = 3;
	              _t21 = _context23.v;
	              console.error("Failed to fetch manifest patches", _t21);
	            case 4:
	              return _context23.a(2);
	          }
	        }, _callee22, null, [[1, 3]]);
	      }));
	      return _fetchPatches.apply(this, arguments);
	    }
	    var debouncedFetchPatches = debounce(fetchPatches, 100);
	    fetchPatches();
	    var observer = new MutationObserver(function () {
	      return debouncedFetchPatches();
	    });
	    observer.observe(document.documentElement, {
	      subtree: true,
	      childList: true,
	      attributes: true,
	      attributeFilter: ["data-discover", "href", "action"]
	    });
	  }, [routeDiscovery, createFromReadableStream, fetchImplementation]);
	  var frameworkContext = {
	    future: {
	      // These flags have no runtime impact so can always be false.  If we add
	      // flags that drive runtime behavior they'll need to be proxied through.
	      v8_middleware: false,
	      unstable_subResourceIntegrity: false
	    },
	    isSpaMode: false,
	    ssr: true,
	    criticalCss: "",
	    manifest: {
	      routes: {},
	      version: "1",
	      url: "",
	      entry: {
	        module: "",
	        imports: []
	      }
	    },
	    routeDiscovery: {
	      mode: "lazy",
	      manifestPath: "/__manifest"
	    },
	    routeModules: routeModules
	  };
	  return /* @__PURE__ */React3__namespace.createElement(RSCRouterContext.Provider, {
	    value: true
	  }, /* @__PURE__ */React3__namespace.createElement(RSCRouterGlobalErrorBoundary, {
	    location: location2
	  }, /* @__PURE__ */React3__namespace.createElement(FrameworkContext.Provider, {
	    value: frameworkContext
	  }, /* @__PURE__ */React3__namespace.createElement(RouterProvider, {
	    router: router,
	    flushSync: ReactDOM__namespace.flushSync
	  }))));
	}
	function createRouteFromServerManifest(match, payload) {
	  var _payload$errors, _match$clientLoader;
	  var hasInitialData = payload && match.id in payload.loaderData;
	  var initialData = payload === null || payload === void 0 ? void 0 : payload.loaderData[match.id];
	  var hasInitialError = (payload === null || payload === void 0 ? void 0 : payload.errors) && match.id in payload.errors;
	  var initialError = payload === null || payload === void 0 ? void 0 : (_payload$errors = payload.errors) === null || _payload$errors === void 0 ? void 0 : _payload$errors[match.id];
	  var isHydrationRequest = ((_match$clientLoader = match.clientLoader) === null || _match$clientLoader === void 0 ? void 0 : _match$clientLoader.hydrate) === true || !match.hasLoader ||
	  // If the route has a component but we don't have an element, we need to hit
	  // the server loader flow regardless of whether the client loader calls
	  // `serverLoader` or not, otherwise we'll have nothing to render.
	  match.hasComponent && !match.element;
	  invariant(window.__reactRouterRouteModules);
	  populateRSCRouteModules(window.__reactRouterRouteModules, match);
	  var dataRoute = {
	    id: match.id,
	    element: match.element,
	    errorElement: match.errorElement,
	    handle: match.handle,
	    hasErrorBoundary: match.hasErrorBoundary,
	    hydrateFallbackElement: match.hydrateFallbackElement,
	    index: match.index,
	    loader: match.clientLoader ? (/*#__PURE__*/function () {
	      var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(args, singleFetch) {
	        var result;
	        return _regenerator().w(function (_context24) {
	          while (1) switch (_context24.p = _context24.n) {
	            case 0:
	              _context24.p = 0;
	              _context24.n = 1;
	              return match.clientLoader(_objectSpread2(_objectSpread2({}, args), {}, {
	                serverLoader: function serverLoader() {
	                  preventInvalidServerHandlerCall("loader", match.id, match.hasLoader);
	                  if (isHydrationRequest) {
	                    if (hasInitialData) {
	                      return initialData;
	                    }
	                    if (hasInitialError) {
	                      throw initialError;
	                    }
	                  }
	                  return callSingleFetch(singleFetch);
	                }
	              }));
	            case 1:
	              result = _context24.v;
	              return _context24.a(2, result);
	            case 2:
	              _context24.p = 2;
	              isHydrationRequest = false;
	              return _context24.f(2);
	            case 3:
	              return _context24.a(2);
	          }
	        }, _callee23, null, [[0,, 2, 3]]);
	      }));
	      return function (_x59, _x60) {
	        return _ref29.apply(this, arguments);
	      };
	    }()) :
	    // We always make the call in this RSC world since even if we don't
	    // have a `loader` we may need to get the `element` implementation
	    function (_, singleFetch) {
	      return callSingleFetch(singleFetch);
	    },
	    action: match.clientAction ? function (args, singleFetch) {
	      return match.clientAction(_objectSpread2(_objectSpread2({}, args), {}, {
	        serverAction: function () {
	          var _serverAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
	            return _regenerator().w(function (_context25) {
	              while (1) switch (_context25.n) {
	                case 0:
	                  preventInvalidServerHandlerCall("action", match.id, match.hasLoader);
	                  _context25.n = 1;
	                  return callSingleFetch(singleFetch);
	                case 1:
	                  return _context25.a(2, _context25.v);
	              }
	            }, _callee24);
	          }));
	          function serverAction() {
	            return _serverAction.apply(this, arguments);
	          }
	          return serverAction;
	        }()
	      }));
	    } : match.hasAction ? function (_, singleFetch) {
	      return callSingleFetch(singleFetch);
	    } : function () {
	      throw noActionDefinedError("action", match.id);
	    },
	    path: match.path,
	    shouldRevalidate: match.shouldRevalidate,
	    // We always have a "loader" in this RSC world since even if we don't
	    // have a `loader` we may need to get the `element` implementation
	    hasLoader: true,
	    hasClientLoader: match.clientLoader != null,
	    hasAction: match.hasAction,
	    hasClientAction: match.clientAction != null,
	    hasShouldRevalidate: match.shouldRevalidate != null
	  };
	  if (typeof dataRoute.loader === "function") {
	    dataRoute.loader.hydrate = shouldHydrateRouteLoader(match.id, match.clientLoader, match.hasLoader, false);
	  }
	  return dataRoute;
	}
	function callSingleFetch(singleFetch) {
	  invariant(typeof singleFetch === "function", "Invalid singleFetch parameter");
	  return singleFetch();
	}
	function preventInvalidServerHandlerCall(type, routeId, hasHandler) {
	  if (!hasHandler) {
	    var fn = type === "action" ? "serverAction()" : "serverLoader()";
	    var msg = "You are trying to call ".concat(fn, " on a route that does not have a server ").concat(type, " (routeId: \"").concat(routeId, "\")");
	    console.error(msg);
	    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
	  }
	}
	var nextPaths = /* @__PURE__ */new Set();
	var discoveredPathsMaxSize = 1e3;
	var discoveredPaths = /* @__PURE__ */new Set();
	var URL_LIMIT = 7680;
	function getManifestUrl(paths) {
	  var _globalVar$__reactRou2;
	  if (paths.length === 0) {
	    return null;
	  }
	  if (paths.length === 1) {
	    return new URL("".concat(paths[0], ".manifest"), window.location.origin);
	  }
	  var globalVar = window;
	  var basename = ((_globalVar$__reactRou2 = globalVar.__reactRouterDataRouter.basename) !== null && _globalVar$__reactRou2 !== void 0 ? _globalVar$__reactRou2 : "").replace(/^\/|\/$/g, "");
	  var url = new URL("".concat(basename, "/.manifest"), window.location.origin);
	  paths.sort().forEach(function (path) {
	    return url.searchParams.append("p", path);
	  });
	  return url;
	}
	function fetchAndApplyManifestPatches(_x61, _x62, _x63, _x64) {
	  return _fetchAndApplyManifestPatches.apply(this, arguments);
	}
	function _fetchAndApplyManifestPatches() {
	  _fetchAndApplyManifestPatches = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41(paths, createFromReadableStream, fetchImplementation, signal) {
	    var url, response, payload;
	    return _regenerator().w(function (_context42) {
	      while (1) switch (_context42.n) {
	        case 0:
	          url = getManifestUrl(paths);
	          if (!(url == null)) {
	            _context42.n = 1;
	            break;
	          }
	          return _context42.a(2);
	        case 1:
	          if (!(url.toString().length > URL_LIMIT)) {
	            _context42.n = 2;
	            break;
	          }
	          nextPaths.clear();
	          return _context42.a(2);
	        case 2:
	          _context42.n = 3;
	          return fetchImplementation(new Request(url, {
	            signal: signal
	          }));
	        case 3:
	          response = _context42.v;
	          if (!(!response.body || response.status < 200 || response.status >= 300)) {
	            _context42.n = 4;
	            break;
	          }
	          throw new Error("Unable to fetch new route matches from the server");
	        case 4:
	          _context42.n = 5;
	          return createFromReadableStream(response.body, {
	            temporaryReferences: void 0
	          });
	        case 5:
	          payload = _context42.v;
	          if (!(payload.type !== "manifest")) {
	            _context42.n = 6;
	            break;
	          }
	          throw new Error("Failed to patch routes");
	        case 6:
	          paths.forEach(function (p) {
	            return addToFifoQueue(p, discoveredPaths);
	          });
	          payload.patches.forEach(function (p) {
	            var _p$parentId;
	            window.__reactRouterDataRouter.patchRoutes((_p$parentId = p.parentId) !== null && _p$parentId !== void 0 ? _p$parentId : null, [createRouteFromServerManifest(p)]);
	          });
	        case 7:
	          return _context42.a(2);
	      }
	    }, _callee41);
	  }));
	  return _fetchAndApplyManifestPatches.apply(this, arguments);
	}
	function addToFifoQueue(path, queue) {
	  if (queue.size >= discoveredPathsMaxSize) {
	    var first = queue.values().next().value;
	    queue["delete"](first);
	  }
	  queue.add(path);
	}
	function debounce(callback, wait) {
	  var timeoutId;
	  return function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    window.clearTimeout(timeoutId);
	    timeoutId = window.setTimeout(function () {
	      return callback.apply(void 0, args);
	    }, wait);
	  };
	}

	// lib/rsc/html-stream/server.ts
	var encoder2 = new TextEncoder();
	var trailer = "</body></html>";
	function injectRSCPayload(rscStream) {
	  var decoder = new TextDecoder();
	  var resolveFlightDataPromise;
	  var flightDataPromise = new Promise(function (resolve) {
	    return resolveFlightDataPromise = resolve;
	  });
	  var startedRSC = false;
	  var buffered = [];
	  var timeout = null;
	  function flushBufferedChunks(controller) {
	    for (var _i5 = 0, _buffered = buffered; _i5 < _buffered.length; _i5++) {
	      var chunk = _buffered[_i5];
	      var buf = decoder.decode(chunk, {
	        stream: true
	      });
	      if (buf.endsWith(trailer)) {
	        buf = buf.slice(0, -trailer.length);
	      }
	      controller.enqueue(encoder2.encode(buf));
	    }
	    buffered.length = 0;
	    timeout = null;
	  }
	  return new TransformStream({
	    transform: function transform(chunk, controller) {
	      buffered.push(chunk);
	      if (timeout) {
	        return;
	      }
	      timeout = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25() {
	        return _regenerator().w(function (_context26) {
	          while (1) switch (_context26.n) {
	            case 0:
	              flushBufferedChunks(controller);
	              if (!startedRSC) {
	                startedRSC = true;
	                writeRSCStream(rscStream, controller)["catch"](function (err) {
	                  return controller.error(err);
	                }).then(resolveFlightDataPromise);
	              }
	            case 1:
	              return _context26.a(2);
	          }
	        }, _callee25);
	      })), 0);
	    },
	    flush: function flush(controller) {
	      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
	        return _regenerator().w(function (_context27) {
	          while (1) switch (_context27.n) {
	            case 0:
	              _context27.n = 1;
	              return flightDataPromise;
	            case 1:
	              if (timeout) {
	                clearTimeout(timeout);
	                flushBufferedChunks(controller);
	              }
	              controller.enqueue(encoder2.encode("</body></html>"));
	            case 2:
	              return _context27.a(2);
	          }
	        }, _callee26);
	      }))();
	    }
	  });
	}
	function writeRSCStream(_x65, _x66) {
	  return _writeRSCStream.apply(this, arguments);
	}
	function _writeRSCStream() {
	  _writeRSCStream = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42(rscStream, controller) {
	    var decoder, reader, read, chunk, base64, remaining, _t35;
	    return _regenerator().w(function (_context43) {
	      while (1) switch (_context43.p = _context43.n) {
	        case 0:
	          decoder = new TextDecoder("utf-8", {
	            fatal: true
	          });
	          reader = rscStream.getReader();
	          _context43.p = 1;
	        case 2:
	          _context43.n = 3;
	          return reader.read();
	        case 3:
	          _t35 = read = _context43.v;
	          if (!_t35) {
	            _context43.n = 4;
	            break;
	          }
	          _t35 = !read.done;
	        case 4:
	          if (!_t35) {
	            _context43.n = 5;
	            break;
	          }
	          chunk = read.value;
	          try {
	            writeChunk(JSON.stringify(decoder.decode(chunk, {
	              stream: true
	            })), controller);
	          } catch (err) {
	            base64 = JSON.stringify(btoa(String.fromCodePoint.apply(String, _toConsumableArray(chunk))));
	            writeChunk("Uint8Array.from(atob(".concat(base64, "), m => m.codePointAt(0))"), controller);
	          }
	          _context43.n = 2;
	          break;
	        case 5:
	          _context43.p = 5;
	          reader.releaseLock();
	          return _context43.f(5);
	        case 6:
	          remaining = decoder.decode();
	          if (remaining.length) {
	            writeChunk(JSON.stringify(remaining), controller);
	          }
	        case 7:
	          return _context43.a(2);
	      }
	    }, _callee42, null, [[1,, 5, 6]]);
	  }));
	  return _writeRSCStream.apply(this, arguments);
	}
	function writeChunk(chunk, controller) {
	  controller.enqueue(encoder2.encode("<script>".concat(escapeScript("(self.__FLIGHT_DATA||=[]).push(".concat(chunk, ")")), "</script>")));
	}
	function escapeScript(script) {
	  return script.replace(/<!--/g, "<\\!--").replace(/<\/(script)/gi, "</\\$1");
	}

	// lib/rsc/server.ssr.tsx
	var REACT_USE = "use";
	var useImpl = React3__namespace[REACT_USE];
	function useSafe(promise) {
	  if (useImpl) {
	    return useImpl(promise);
	  }
	  throw new Error("React Router v7 requires React 19+ for RSC features.");
	}
	function routeRSCServerRequest(_x67) {
	  return _routeRSCServerRequest.apply(this, arguments);
	}
	function _routeRSCServerRequest() {
	  _routeRSCServerRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44(_ref31) {
	    var request, fetchServer, createFromReadableStream, renderHTML, _ref31$hydrate, hydrate, url, isDataRequest, respondWithRSCPayload, serverResponse, detectRedirectResponse, serverResponseB, body, buffer, streamControllers, createStream, getPayload, _serverResponseB2, payload, _serverResponseB, headers2, html, headers, body2, _t36;
	    return _regenerator().w(function (_context45) {
	      while (1) switch (_context45.p = _context45.n) {
	        case 0:
	          request = _ref31.request, fetchServer = _ref31.fetchServer, createFromReadableStream = _ref31.createFromReadableStream, renderHTML = _ref31.renderHTML, _ref31$hydrate = _ref31.hydrate, hydrate = _ref31$hydrate === void 0 ? true : _ref31$hydrate;
	          url = new URL(request.url);
	          isDataRequest = isReactServerRequest(url);
	          respondWithRSCPayload = isDataRequest || isManifestRequest(url) || request.headers.has("rsc-action-id");
	          _context45.n = 1;
	          return fetchServer(request);
	        case 1:
	          serverResponse = _context45.v;
	          if (!(respondWithRSCPayload || serverResponse.headers.get("React-Router-Resource") === "true")) {
	            _context45.n = 2;
	            break;
	          }
	          return _context45.a(2, serverResponse);
	        case 2:
	          if (serverResponse.body) {
	            _context45.n = 3;
	            break;
	          }
	          throw new Error("Missing body in server response");
	        case 3:
	          detectRedirectResponse = serverResponse.clone();
	          serverResponseB = null;
	          if (hydrate) {
	            serverResponseB = serverResponse.clone();
	          }
	          body = serverResponse.body;
	          streamControllers = [];
	          createStream = function createStream() {
	            if (!buffer) {
	              buffer = [];
	              return body.pipeThrough(new TransformStream({
	                transform: function transform(chunk, controller) {
	                  buffer.push(chunk);
	                  controller.enqueue(chunk);
	                  streamControllers.forEach(function (c) {
	                    return c.enqueue(chunk);
	                  });
	                },
	                flush: function flush() {
	                  streamControllers.forEach(function (c) {
	                    return c.close();
	                  });
	                  streamControllers = [];
	                }
	              }));
	            }
	            return new ReadableStream({
	              start: function start(controller) {
	                buffer.forEach(function (chunk) {
	                  return controller.enqueue(chunk);
	                });
	                streamControllers.push(controller);
	              }
	            });
	          };
	          getPayload = /*#__PURE__*/function () {
	            var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
	              return _regenerator().w(function (_context44) {
	                while (1) switch (_context44.n) {
	                  case 0:
	                    return _context44.a(2, createFromReadableStream(createStream()));
	                }
	              }, _callee43);
	            }));
	            return function getPayload() {
	              return _ref37.apply(this, arguments);
	            };
	          }();
	          _context45.p = 4;
	          if (detectRedirectResponse.body) {
	            _context45.n = 5;
	            break;
	          }
	          throw new Error("Failed to clone server response");
	        case 5:
	          _context45.n = 6;
	          return createFromReadableStream(detectRedirectResponse.body);
	        case 6:
	          payload = _context45.v;
	          if (!(serverResponse.status === SINGLE_FETCH_REDIRECT_STATUS && payload.type === "redirect")) {
	            _context45.n = 7;
	            break;
	          }
	          headers2 = new Headers(serverResponse.headers);
	          headers2["delete"]("Content-Encoding");
	          headers2["delete"]("Content-Length");
	          headers2["delete"]("Content-Type");
	          headers2["delete"]("x-remix-response");
	          headers2.set("Location", payload.location);
	          return _context45.a(2, new Response(((_serverResponseB = serverResponseB) === null || _serverResponseB === void 0 ? void 0 : _serverResponseB.body) || "", {
	            headers: headers2,
	            status: payload.status,
	            statusText: serverResponse.statusText
	          }));
	        case 7:
	          _context45.n = 8;
	          return renderHTML(getPayload);
	        case 8:
	          html = _context45.v;
	          headers = new Headers(serverResponse.headers);
	          headers.set("Content-Type", "text/html");
	          if (hydrate) {
	            _context45.n = 9;
	            break;
	          }
	          return _context45.a(2, new Response(html, {
	            status: serverResponse.status,
	            headers: headers
	          }));
	        case 9:
	          if ((_serverResponseB2 = serverResponseB) !== null && _serverResponseB2 !== void 0 && _serverResponseB2.body) {
	            _context45.n = 10;
	            break;
	          }
	          throw new Error("Failed to clone server response");
	        case 10:
	          body2 = html.pipeThrough(injectRSCPayload(serverResponseB.body));
	          return _context45.a(2, new Response(body2, {
	            status: serverResponse.status,
	            headers: headers
	          }));
	        case 11:
	          _context45.p = 11;
	          _t36 = _context45.v;
	          if (!(_t36 instanceof Response)) {
	            _context45.n = 12;
	            break;
	          }
	          return _context45.a(2, _t36);
	        case 12:
	          throw _t36;
	        case 13:
	          return _context45.a(2);
	      }
	    }, _callee44, null, [[4, 11]]);
	  }));
	  return _routeRSCServerRequest.apply(this, arguments);
	}
	function RSCStaticRouter(_ref32) {
	  var getPayload = _ref32.getPayload;
	  var payload = useSafe(getPayload());
	  if (payload.type === "redirect") {
	    throw new Response(null, {
	      status: payload.status,
	      headers: {
	        Location: payload.location
	      }
	    });
	  }
	  if (payload.type !== "render") return null;
	  var patchedLoaderData = _objectSpread2({}, payload.loaderData);
	  var _iterator0 = _createForOfIteratorHelper(payload.matches),
	    _step0;
	  try {
	    for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
	      var match = _step0.value;
	      if (shouldHydrateRouteLoader(match.id, match.clientLoader, match.hasLoader, false) && (match.hydrateFallbackElement || !match.hasLoader)) {
	        delete patchedLoaderData[match.id];
	      }
	    }
	  } catch (err) {
	    _iterator0.e(err);
	  } finally {
	    _iterator0.f();
	  }
	  var context = {
	    actionData: payload.actionData,
	    actionHeaders: {},
	    basename: payload.basename,
	    errors: payload.errors,
	    loaderData: patchedLoaderData,
	    loaderHeaders: {},
	    location: payload.location,
	    statusCode: 200,
	    matches: payload.matches.map(function (match) {
	      return {
	        params: match.params,
	        pathname: match.pathname,
	        pathnameBase: match.pathnameBase,
	        route: {
	          id: match.id,
	          action: match.hasAction || !!match.clientAction,
	          handle: match.handle,
	          hasErrorBoundary: match.hasErrorBoundary,
	          loader: match.hasLoader || !!match.clientLoader,
	          index: match.index,
	          path: match.path,
	          shouldRevalidate: match.shouldRevalidate
	        }
	      };
	    })
	  };
	  var router = createStaticRouter(payload.matches.reduceRight(function (previous, match) {
	    var route = {
	      id: match.id,
	      action: match.hasAction || !!match.clientAction,
	      element: match.element,
	      errorElement: match.errorElement,
	      handle: match.handle,
	      hasErrorBoundary: !!match.errorElement,
	      hydrateFallbackElement: match.hydrateFallbackElement,
	      index: match.index,
	      loader: match.hasLoader || !!match.clientLoader,
	      path: match.path,
	      shouldRevalidate: match.shouldRevalidate
	    };
	    if (previous.length > 0) {
	      route.children = previous;
	    }
	    return [route];
	  }, []), context);
	  var frameworkContext = {
	    future: {
	      // These flags have no runtime impact so can always be false.  If we add
	      // flags that drive runtime behavior they'll need to be proxied through.
	      v8_middleware: false,
	      unstable_subResourceIntegrity: false
	    },
	    isSpaMode: false,
	    ssr: true,
	    criticalCss: "",
	    manifest: {
	      routes: {},
	      version: "1",
	      url: "",
	      entry: {
	        module: "",
	        imports: []
	      }
	    },
	    routeDiscovery: {
	      mode: "lazy",
	      manifestPath: "/__manifest"
	    },
	    routeModules: createRSCRouteModules(payload)
	  };
	  return /* @__PURE__ */React3__namespace.createElement(RSCRouterContext.Provider, {
	    value: true
	  }, /* @__PURE__ */React3__namespace.createElement(RSCRouterGlobalErrorBoundary, {
	    location: payload.location
	  }, /* @__PURE__ */React3__namespace.createElement(FrameworkContext.Provider, {
	    value: frameworkContext
	  }, /* @__PURE__ */React3__namespace.createElement(StaticRouterProvider, {
	    context: context,
	    router: router,
	    hydrate: false,
	    nonce: payload.nonce
	  }))));
	}
	function isReactServerRequest(url) {
	  return url.pathname.endsWith(".rsc");
	}
	function isManifestRequest(url) {
	  return url.pathname.endsWith(".manifest");
	}

	// lib/rsc/html-stream/browser.ts
	function getRSCStream() {
	  var encoder3 = new TextEncoder();
	  var streamController = null;
	  var rscStream = new ReadableStream({
	    start: function start(controller) {
	      if (typeof window === "undefined") {
	        return;
	      }
	      var handleChunk = function handleChunk(chunk) {
	        if (typeof chunk === "string") {
	          controller.enqueue(encoder3.encode(chunk));
	        } else {
	          controller.enqueue(chunk);
	        }
	      };
	      window.__FLIGHT_DATA || (window.__FLIGHT_DATA = []);
	      window.__FLIGHT_DATA.forEach(handleChunk);
	      window.__FLIGHT_DATA.push = function (chunk) {
	        handleChunk(chunk);
	        return 0;
	      };
	      streamController = controller;
	    }
	  });
	  if (typeof document !== "undefined" && document.readyState === "loading") {
	    document.addEventListener("DOMContentLoaded", function () {
	      var _streamController;
	      (_streamController = streamController) === null || _streamController === void 0 ? void 0 : _streamController.close();
	    });
	  } else {
	    var _streamController2;
	    (_streamController2 = streamController) === null || _streamController2 === void 0 ? void 0 : _streamController2.close();
	  }
	  return rscStream;
	}

	// lib/dom/ssr/errors.ts
	function deserializeErrors(errors) {
	  if (!errors) return null;
	  var entries = Object.entries(errors);
	  var serialized = {};
	  for (var _i6 = 0, _entries2 = entries; _i6 < _entries2.length; _i6++) {
	    var _entries2$_i = _slicedToArray(_entries2[_i6], 2),
	      key = _entries2$_i[0],
	      val = _entries2$_i[1];
	    if (val && val.__type === "RouteErrorResponse") {
	      serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
	    } else if (val && val.__type === "Error") {
	      if (val.__subType) {
	        var ErrorConstructor = window[val.__subType];
	        if (typeof ErrorConstructor === "function") {
	          try {
	            var error = new ErrorConstructor(val.message);
	            error.stack = val.stack;
	            serialized[key] = error;
	          } catch (e) {}
	        }
	      }
	      if (serialized[key] == null) {
	        var _error = new Error(val.message);
	        _error.stack = val.stack;
	        serialized[key] = _error;
	      }
	    } else {
	      serialized[key] = val;
	    }
	  }
	  return serialized;
	}

	/**
	 * react-router v7.9.1
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	function RouterProvider2(props) {
	  return /* @__PURE__ */React3__namespace.createElement(RouterProvider, _objectSpread2({
	    flushSync: ReactDOM__namespace.flushSync
	  }, props));
	}
	var ssrInfo = null;
	var router = null;
	function initSsrInfo() {
	  if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
	    if (window.__reactRouterManifest.sri === true) {
	      var importMap = document.querySelector("script[rr-importmap]");
	      if (importMap !== null && importMap !== void 0 && importMap.textContent) {
	        try {
	          window.__reactRouterManifest.sri = JSON.parse(importMap.textContent).integrity;
	        } catch (err) {
	          console.error("Failed to parse import map", err);
	        }
	      }
	    }
	    ssrInfo = {
	      context: window.__reactRouterContext,
	      manifest: window.__reactRouterManifest,
	      routeModules: window.__reactRouterRouteModules,
	      stateDecodingPromise: void 0,
	      router: void 0,
	      routerInitialized: false
	    };
	  }
	}
	function createHydratedRouter(_ref) {
	  var getContext = _ref.getContext;
	  initSsrInfo();
	  if (!ssrInfo) {
	    throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
	  }
	  var localSsrInfo = ssrInfo;
	  if (!ssrInfo.stateDecodingPromise) {
	    var stream = ssrInfo.context.stream;
	    invariant(stream, "No stream found for single fetch decoding");
	    ssrInfo.context.stream = void 0;
	    ssrInfo.stateDecodingPromise = decodeViaTurboStream(stream, window).then(function (value) {
	      ssrInfo.context.state = value.value;
	      localSsrInfo.stateDecodingPromise.value = true;
	    })["catch"](function (e) {
	      localSsrInfo.stateDecodingPromise.error = e;
	    });
	  }
	  if (ssrInfo.stateDecodingPromise.error) {
	    throw ssrInfo.stateDecodingPromise.error;
	  }
	  if (!ssrInfo.stateDecodingPromise.value) {
	    throw ssrInfo.stateDecodingPromise;
	  }
	  var routes = createClientRoutes(ssrInfo.manifest.routes, ssrInfo.routeModules, ssrInfo.context.state, ssrInfo.context.ssr, ssrInfo.context.isSpaMode);
	  var hydrationData = void 0;
	  if (ssrInfo.context.isSpaMode) {
	    var _ssrInfo$manifest$rou;
	    var loaderData = ssrInfo.context.state.loaderData;
	    if ((_ssrInfo$manifest$rou = ssrInfo.manifest.routes.root) !== null && _ssrInfo$manifest$rou !== void 0 && _ssrInfo$manifest$rou.hasLoader && loaderData && "root" in loaderData) {
	      hydrationData = {
	        loaderData: {
	          root: loaderData.root
	        }
	      };
	    }
	  } else {
	    var _window$__reactRouter;
	    hydrationData = getHydrationData({
	      state: ssrInfo.context.state,
	      routes: routes,
	      getRouteInfo: function getRouteInfo(routeId) {
	        var _ssrInfo$routeModules, _ssrInfo$manifest$rou2, _ssrInfo$routeModules2;
	        return {
	          clientLoader: (_ssrInfo$routeModules = ssrInfo.routeModules[routeId]) === null || _ssrInfo$routeModules === void 0 ? void 0 : _ssrInfo$routeModules.clientLoader,
	          hasLoader: ((_ssrInfo$manifest$rou2 = ssrInfo.manifest.routes[routeId]) === null || _ssrInfo$manifest$rou2 === void 0 ? void 0 : _ssrInfo$manifest$rou2.hasLoader) === true,
	          hasHydrateFallback: ((_ssrInfo$routeModules2 = ssrInfo.routeModules[routeId]) === null || _ssrInfo$routeModules2 === void 0 ? void 0 : _ssrInfo$routeModules2.HydrateFallback) != null
	        };
	      },
	      location: window.location,
	      basename: (_window$__reactRouter = window.__reactRouterContext) === null || _window$__reactRouter === void 0 ? void 0 : _window$__reactRouter.basename,
	      isSpaMode: ssrInfo.context.isSpaMode
	    });
	    if (hydrationData && hydrationData.errors) {
	      hydrationData.errors = deserializeErrors(hydrationData.errors);
	    }
	  }
	  var router2 = createRouter({
	    routes: routes,
	    history: createBrowserHistory(),
	    basename: ssrInfo.context.basename,
	    getContext: getContext,
	    hydrationData: hydrationData,
	    hydrationRouteProperties: hydrationRouteProperties,
	    mapRouteProperties: mapRouteProperties,
	    future: {
	      middleware: ssrInfo.context.future.v8_middleware
	    },
	    dataStrategy: getTurboStreamSingleFetchDataStrategy(function () {
	      return router2;
	    }, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.basename),
	    patchRoutesOnNavigation: getPatchRoutesOnNavigationFunction(ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.routeDiscovery, ssrInfo.context.isSpaMode, ssrInfo.context.basename)
	  });
	  ssrInfo.router = router2;
	  if (router2.state.initialized) {
	    ssrInfo.routerInitialized = true;
	    router2.initialize();
	  }
	  router2.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
	  createClientRoutesWithHMRRevalidationOptOut;
	  window.__reactRouterDataRouter = router2;
	  return router2;
	}
	function HydratedRouter(props) {
	  if (!router) {
	    router = createHydratedRouter({
	      getContext: props.getContext
	    });
	  }
	  var _React2$useState = React3__namespace.useState(void 0),
	    _React2$useState2 = _slicedToArray(_React2$useState, 2),
	    criticalCss = _React2$useState2[0];
	    _React2$useState2[1];
	  React3__namespace.useEffect(function () {
	  }, []);
	  React3__namespace.useEffect(function () {
	  }, [criticalCss]);
	  var _React2$useState3 = React3__namespace.useState(router.state.location),
	    _React2$useState4 = _slicedToArray(_React2$useState3, 2),
	    location = _React2$useState4[0],
	    setLocation = _React2$useState4[1];
	  React3__namespace.useLayoutEffect(function () {
	    if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
	      ssrInfo.routerInitialized = true;
	      ssrInfo.router.initialize();
	    }
	  }, []);
	  React3__namespace.useLayoutEffect(function () {
	    if (ssrInfo && ssrInfo.router) {
	      return ssrInfo.router.subscribe(function (newState) {
	        if (newState.location !== location) {
	          setLocation(newState.location);
	        }
	      });
	    }
	  }, [location]);
	  invariant(ssrInfo, "ssrInfo unavailable for HydratedRouter");
	  useFogOFWarDiscovery(router, ssrInfo.manifest, ssrInfo.routeModules, ssrInfo.context.ssr, ssrInfo.context.routeDiscovery, ssrInfo.context.isSpaMode);
	  return (
	    // This fragment is important to ensure we match the <ServerRouter> JSX
	    // structure so that useId values hydrate correctly
	    /* @__PURE__ */
	    React3__namespace.createElement(React3__namespace.Fragment, null, /* @__PURE__ */React3__namespace.createElement(FrameworkContext.Provider, {
	      value: {
	        manifest: ssrInfo.manifest,
	        routeModules: ssrInfo.routeModules,
	        future: ssrInfo.context.future,
	        criticalCss: criticalCss,
	        ssr: ssrInfo.context.ssr,
	        isSpaMode: ssrInfo.context.isSpaMode,
	        routeDiscovery: ssrInfo.context.routeDiscovery
	      }
	    }, /* @__PURE__ */React3__namespace.createElement(RemixErrorBoundary, {
	      location: location
	    }, /* @__PURE__ */React3__namespace.createElement(RouterProvider2, {
	      router: router,
	      unstable_onError: props.unstable_onError
	    }))), /* @__PURE__ */React3__namespace.createElement(React3__namespace.Fragment, null))
	  );
	}

	var domExport = /*#__PURE__*/Object.freeze({
		__proto__: null,
		HydratedRouter: HydratedRouter,
		RouterProvider: RouterProvider2
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(domExport);

	/**
	 * react-router v7.9.1
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	var development = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Await: Await,
		BrowserRouter: BrowserRouter,
		Form: Form,
		HashRouter: HashRouter,
		IDLE_BLOCKER: IDLE_BLOCKER,
		IDLE_FETCHER: IDLE_FETCHER,
		IDLE_NAVIGATION: IDLE_NAVIGATION,
		Link: Link,
		Links: Links,
		MemoryRouter: MemoryRouter,
		Meta: Meta,
		NavLink: NavLink,
		Navigate: Navigate,
		NavigationType: Action,
		Outlet: Outlet,
		PrefetchPageLinks: PrefetchPageLinks,
		Route: Route,
		Router: Router,
		RouterContextProvider: RouterContextProvider,
		RouterProvider: RouterProvider,
		Routes: Routes,
		Scripts: Scripts,
		ScrollRestoration: ScrollRestoration,
		ServerRouter: ServerRouter,
		StaticRouter: StaticRouter,
		StaticRouterProvider: StaticRouterProvider,
		UNSAFE_AwaitContextProvider: AwaitContextProvider,
		UNSAFE_DataRouterContext: DataRouterContext,
		UNSAFE_DataRouterStateContext: DataRouterStateContext,
		UNSAFE_ErrorResponseImpl: ErrorResponseImpl,
		UNSAFE_FetchersContext: FetchersContext,
		UNSAFE_FrameworkContext: FrameworkContext,
		UNSAFE_LocationContext: LocationContext,
		UNSAFE_NavigationContext: NavigationContext,
		UNSAFE_RSCDefaultRootErrorBoundary: RSCDefaultRootErrorBoundary,
		UNSAFE_RemixErrorBoundary: RemixErrorBoundary,
		UNSAFE_RouteContext: RouteContext,
		UNSAFE_ServerMode: ServerMode,
		UNSAFE_SingleFetchRedirectSymbol: SingleFetchRedirectSymbol,
		UNSAFE_ViewTransitionContext: ViewTransitionContext,
		UNSAFE_WithComponentProps: WithComponentProps,
		UNSAFE_WithErrorBoundaryProps: WithErrorBoundaryProps,
		UNSAFE_WithHydrateFallbackProps: WithHydrateFallbackProps,
		UNSAFE_createBrowserHistory: createBrowserHistory,
		UNSAFE_createClientRoutes: createClientRoutes,
		UNSAFE_createClientRoutesWithHMRRevalidationOptOut: createClientRoutesWithHMRRevalidationOptOut,
		UNSAFE_createRouter: createRouter,
		UNSAFE_decodeViaTurboStream: decodeViaTurboStream,
		UNSAFE_deserializeErrors: deserializeErrors,
		UNSAFE_getHydrationData: getHydrationData,
		UNSAFE_getPatchRoutesOnNavigationFunction: getPatchRoutesOnNavigationFunction,
		UNSAFE_getTurboStreamSingleFetchDataStrategy: getTurboStreamSingleFetchDataStrategy,
		UNSAFE_hydrationRouteProperties: hydrationRouteProperties,
		UNSAFE_invariant: invariant,
		UNSAFE_mapRouteProperties: mapRouteProperties,
		UNSAFE_shouldHydrateRouteLoader: shouldHydrateRouteLoader,
		UNSAFE_useFogOFWarDiscovery: useFogOFWarDiscovery,
		UNSAFE_useScrollRestoration: useScrollRestoration,
		UNSAFE_withComponentProps: withComponentProps,
		UNSAFE_withErrorBoundaryProps: withErrorBoundaryProps,
		UNSAFE_withHydrateFallbackProps: withHydrateFallbackProps,
		createBrowserRouter: createBrowserRouter,
		createContext: createContext,
		createCookie: createCookie,
		createCookieSessionStorage: createCookieSessionStorage,
		createHashRouter: createHashRouter,
		createMemoryRouter: createMemoryRouter,
		createMemorySessionStorage: createMemorySessionStorage,
		createPath: createPath,
		createRequestHandler: createRequestHandler,
		createRoutesFromChildren: createRoutesFromChildren,
		createRoutesFromElements: createRoutesFromElements,
		createRoutesStub: createRoutesStub,
		createSearchParams: createSearchParams,
		createSession: createSession,
		createSessionStorage: createSessionStorage,
		createStaticHandler: createStaticHandler2,
		createStaticRouter: createStaticRouter,
		data: data,
		generatePath: generatePath,
		href: href,
		isCookie: isCookie,
		isRouteErrorResponse: isRouteErrorResponse,
		isSession: isSession,
		matchPath: matchPath,
		matchRoutes: matchRoutes,
		parsePath: parsePath,
		redirect: redirect,
		redirectDocument: redirectDocument,
		renderMatches: renderMatches,
		replace: replace,
		resolvePath: resolvePath,
		unstable_HistoryRouter: HistoryRouter,
		unstable_RSCHydratedRouter: RSCHydratedRouter,
		unstable_RSCStaticRouter: RSCStaticRouter,
		unstable_createCallServer: createCallServer,
		unstable_getRSCStream: getRSCStream,
		unstable_routeRSCServerRequest: routeRSCServerRequest,
		unstable_setDevServerHooks: setDevServerHooks,
		unstable_usePrompt: usePrompt,
		useActionData: useActionData,
		useAsyncError: useAsyncError,
		useAsyncValue: useAsyncValue,
		useBeforeUnload: useBeforeUnload,
		useBlocker: useBlocker,
		useFetcher: useFetcher,
		useFetchers: useFetchers,
		useFormAction: useFormAction,
		useHref: useHref,
		useInRouterContext: useInRouterContext,
		useLinkClickHandler: useLinkClickHandler,
		useLoaderData: useLoaderData,
		useLocation: useLocation,
		useMatch: useMatch,
		useMatches: useMatches,
		useNavigate: useNavigate,
		useNavigation: useNavigation,
		useNavigationType: useNavigationType,
		useOutlet: useOutlet,
		useOutletContext: useOutletContext,
		useParams: useParams,
		useResolvedPath: useResolvedPath,
		useRevalidator: useRevalidator,
		useRouteError: useRouteError,
		useRouteLoaderData: useRouteLoaderData,
		useRoutes: useRoutes,
		useSearchParams: useSearchParams,
		useSubmit: useSubmit,
		useViewTransitionState: useViewTransitionState
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(development);

	var hasRequiredDist;
	function requireDist() {
	  if (hasRequiredDist) return dist$1.exports;
	  hasRequiredDist = 1;
	  (function (module) {

	    var __defProp = Object.defineProperty;
	    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	    var __getOwnPropNames = Object.getOwnPropertyNames;
	    var __hasOwnProp = Object.prototype.hasOwnProperty;
	    var __export = function __export(target, all) {
	      for (var name in all) __defProp(target, name, {
	        get: all[name],
	        enumerable: true
	      });
	    };
	    var __copyProps = function __copyProps(to, from, except, desc) {
	      if (from && typeof from === "object" || typeof from === "function") {
	        var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
	          _step;
	        try {
	          var _loop = function _loop() {
	            var key = _step.value;
	            if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
	              get: function get() {
	                return from[key];
	              },
	              enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
	            });
	          };
	          for (_iterator.s(); !(_step = _iterator.n()).done;) {
	            _loop();
	          }
	        } catch (err) {
	          _iterator.e(err);
	        } finally {
	          _iterator.f();
	        }
	      }
	      return to;
	    };
	    var __reExport = function __reExport(target, mod, secondTarget) {
	      return __copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default");
	    };
	    var __toCommonJS = function __toCommonJS(mod) {
	      return __copyProps(__defProp({}, "__esModule", {
	        value: true
	      }), mod);
	    };

	    // index.ts
	    var index_exports = {};
	    __export(index_exports, {
	      HydratedRouter: function HydratedRouter() {
	        return import_dom.HydratedRouter;
	      },
	      RouterProvider: function RouterProvider() {
	        return import_dom.RouterProvider;
	      }
	    });
	    module.exports = __toCommonJS(index_exports);
	    var import_dom = require$$0;
	    __reExport(index_exports, require$$1, module.exports);
	  })(dist$1);
	  return dist$1.exports;
	}

	var distExports = requireDist();
	var index = /*@__PURE__*/getDefaultExportFromCjs(distExports);

	return index;

}));
//# sourceMappingURL=react-router-dom.umd.js.map
