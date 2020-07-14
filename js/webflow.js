/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!(function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ''),
    e((e.s = 84));
})([
  function (t, e) {
    var n = Array.isArray;
    t.exports = n;
  },
  function (t, e, n) {
    function r(t) {
      c.env() &&
        (h(t.design) && p.on('__wf_design', t.design),
        h(t.preview) && p.on('__wf_preview', t.preview)),
        h(t.destroy) && p.on('__wf_destroy', t.destroy),
        t.ready &&
          h(t.ready) &&
          (function (t) {
            if (m) return void t.ready();
            if (g.contains(f, t.ready)) return;
            f.push(t.ready);
          })(t);
    }
    function i(t) {
      h(t.design) && p.off('__wf_design', t.design),
        h(t.preview) && p.off('__wf_preview', t.preview),
        h(t.destroy) && p.off('__wf_destroy', t.destroy),
        t.ready &&
          h(t.ready) &&
          (function (t) {
            f = g.filter(f, function (e) {
              return e !== t.ready;
            });
          })(t);
    }
    function o(t, e) {
      var n = [],
        r = {};
      return (
        (r.up = g.throttle(function (t) {
          g.each(n, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, r.up),
        (r.on = function (t) {
          'function' == typeof t && (g.contains(n, t) || n.push(t));
        }),
        (r.off = function (t) {
          n = arguments.length
            ? g.filter(n, function (e) {
                return e !== t;
              })
            : [];
        }),
        r
      );
    }
    function a(t) {
      h(t) && t();
    }
    function u() {
      E && (E.reject(), p.off('load', E.resolve)),
        (E = new d.Deferred()),
        p.on('load', E.resolve);
    }
    var c = {},
      s = {},
      f = [],
      l = window.Webflow || [],
      d = window.jQuery,
      p = d(window),
      v = d(document),
      h = d.isFunction,
      g = (c._ = n(86)),
      y = n(48) && d.tram,
      m = !1,
      b = !1;
    (y.config.hideBackface = !1),
      (y.config.keepInherited = !0),
      (c.define = function (t, e, n) {
        s[t] && i(s[t]);
        var o = (s[t] = e(d, g, n) || {});
        return r(o), o;
      }),
      (c.require = function (t) {
        return s[t];
      }),
      (c.push = function (t) {
        m ? h(t) && t() : l.push(t);
      }),
      (c.env = function (t) {
        var e = window.__wf_design,
          n = void 0 !== e;
        return t
          ? 'design' === t
            ? n && e
            : 'preview' === t
            ? n && !e
            : 'slug' === t
            ? n && window.__wf_slug
            : 'editor' === t
            ? window.WebflowEditor
            : 'test' === t
            ? window.__wf_test
            : 'frame' === t
            ? window !== window.top
            : void 0
          : n;
      });
    var w = navigator.userAgent.toLowerCase(),
      x = (c.env.touch =
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      _ = (c.env.chrome =
        /chrome/.test(w) &&
        /Google/.test(navigator.vendor) &&
        parseInt(w.match(/chrome\/(\d+)\./)[1], 10)),
      O = (c.env.ios = /(ipod|iphone|ipad)/.test(w));
    c.env.safari = /safari/.test(w) && !_ && !O;
    var j;
    x &&
      v.on('touchstart mousedown', function (t) {
        j = t.target;
      }),
      (c.validClick = x
        ? function (t) {
            return t === j || d.contains(t, j);
          }
        : function () {
            return !0;
          });
    var I = 'resize.webflow orientationchange.webflow load.webflow';
    (c.resize = o(p, I)),
      (c.scroll = o(
        p,
        'scroll.webflow resize.webflow orientationchange.webflow load.webflow'
      )),
      (c.redraw = o()),
      (c.location = function (t) {
        window.location = t;
      }),
      c.env() && (c.location = function () {}),
      (c.ready = function () {
        (m = !0),
          b ? ((b = !1), g.each(s, r)) : g.each(f, a),
          g.each(l, a),
          c.resize.up();
      });
    var E;
    (c.load = function (t) {
      E.then(t);
    }),
      (c.destroy = function (t) {
        (t = t || {}),
          (b = !0),
          p.triggerHandler('__wf_destroy'),
          null != t.domready && (m = t.domready),
          g.each(s, i),
          c.resize.off(),
          c.scroll.off(),
          c.redraw.off(),
          (f = []),
          (l = []),
          'pending' === E.state() && u();
      }),
      d(c.ready),
      u(),
      (t.exports = window.Webflow = c);
  },
  function (t, e, n) {
    var r = n(60),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = r || i || Function('return this')();
    t.exports = o;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  function (t, e, n) {
    var r = n(127),
      i = n(132);
    t.exports = function (t, e) {
      var n = i(t, e);
      return r(n) ? n : void 0;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'l', function () {
      return r;
    }),
      n.d(e, 'm', function () {
        return i;
      }),
      n.d(e, 'n', function () {
        return o;
      }),
      n.d(e, 'k', function () {
        return a;
      }),
      n.d(e, 'j', function () {
        return u;
      }),
      n.d(e, 'o', function () {
        return c;
      }),
      n.d(e, 'c', function () {
        return s;
      }),
      n.d(e, 'd', function () {
        return f;
      }),
      n.d(e, 'e', function () {
        return l;
      }),
      n.d(e, 'b', function () {
        return d;
      }),
      n.d(e, 'i', function () {
        return p;
      }),
      n.d(e, 'f', function () {
        return v;
      }),
      n.d(e, 'h', function () {
        return h;
      }),
      n.d(e, 'g', function () {
        return g;
      }),
      n.d(e, 'a', function () {
        return y;
      }),
      n.d(e, 'p', function () {
        return m;
      });
    var r = 'IX2_RAW_DATA_IMPORTED',
      i = 'IX2_SESSION_STARTED',
      o = 'IX2_SESSION_STOPPED',
      a = 'IX2_PREVIEW_REQUESTED',
      u = 'IX2_PLAYBACK_REQUESTED',
      c = 'IX2_STOP_REQUESTED',
      s = 'IX2_CLEAR_REQUESTED',
      f = 'IX2_EVENT_LISTENER_ADDED',
      l = 'IX2_EVENT_STATE_CHANGED',
      d = 'IX2_ANIMATION_FRAME_CHANGED',
      p = 'IX2_PARAMETER_CHANGED',
      v = 'IX2_INSTANCE_ADDED',
      h = 'IX2_INSTANCE_STARTED',
      g = 'IX2_INSTANCE_REMOVED',
      y = 'IX2_ACTION_LIST_PLAYBACK_CHANGED',
      m = 'IX2_VIEWPORT_WIDTH_CHANGED';
  },
  function (t, e, n) {
    var r = n(115),
      i = n(167),
      o = n(38),
      a = n(0),
      u = n(174);
    t.exports = function (t) {
      return 'function' == typeof t
        ? t
        : null == t
        ? o
        : 'object' == typeof t
        ? a(t)
          ? i(t[0], t[1])
          : r(t)
        : u(t);
    };
  },
  function (t, e, n) {
    var r = n(10),
      i = n(128),
      o = n(129),
      a = '[object Null]',
      u = '[object Undefined]',
      c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : ((t = Object(t)), c && c in t ? i(t) : o(t));
    };
  },
  function (t, e, n) {
    var r = n(59),
      i = n(31);
    t.exports = function (t) {
      return null != t && i(t.length) && !r(t);
    };
  },
  function (t, e, n) {
    var r = n(2).Symbol;
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(22),
      i = 1 / 0;
    t.exports = function (t) {
      if ('string' == typeof t || r(t)) return t;
      var e = t + '';
      return '0' == e && 1 / t == -i ? '-0' : e;
    };
  },
  function (t, e, n) {
    'use strict';
    function r(t, e) {
      var n = document.createEvent('CustomEvent');
      n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
    }
    var i = n(88),
      o = window.jQuery,
      a = {},
      u = {
        reset: function (t, e) {
          i.triggers.reset(t, e);
        },
        intro: function (t, e) {
          i.triggers.intro(t, e), r(e, 'COMPONENT_ACTIVE');
        },
        outro: function (t, e) {
          i.triggers.outro(t, e), r(e, 'COMPONENT_INACTIVE');
        },
      };
    (a.triggers = {}),
      (a.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      o.extend(a.triggers, u),
      (t.exports = a);
  },
  function (t, e, n) {
    function r(t) {
      return t instanceof Array
        ? t.slice()
        : t && 'object' == typeof t
        ? f(new t.constructor(), t)
        : t;
    }
    function i() {
      function t(n, i) {
        (Array.isArray(n) && Array.isArray(i)) ||
          u(
            !Array.isArray(i),
            'update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.'
          ),
          u(
            'object' == typeof i && null !== i,
            'update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.',
            Object.keys(e).join(', ')
          );
        var o = n;
        l(i);
        return (
          l(i).forEach(function (a) {
            if (c.call(e, a)) o = e[a](i[a], o, i, n);
            else {
              var u = t(n[a], i[a]);
              u !== o[a] && (o === n && (o = r(n)), (o[a] = u));
            }
          }),
          o
        );
      }
      var e = f({}, d);
      return (
        (t.extend = function (t, n) {
          e[t] = n;
        }),
        t
      );
    }
    function o(t, e, n) {
      u(
        Array.isArray(t),
        'update(): expected target of %s to be an array; got %s.',
        n,
        t
      );
      var r = e[n];
      u(
        Array.isArray(r),
        'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?',
        n,
        r
      );
    }
    function a(t) {
      u(
        Array.isArray(t),
        'update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?',
        t
      );
    }
    var u = n(108),
      c = Object.prototype.hasOwnProperty,
      s = Array.prototype.splice,
      f =
        Object.assign ||
        function (t, e) {
          return (
            l(e).forEach(function (n) {
              c.call(e, n) && (t[n] = e[n]);
            }),
            t
          );
        },
      l =
        'function' == typeof Object.getOwnPropertySymbols
          ? function (t) {
              return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
            }
          : function (t) {
              return Object.keys(t);
            },
      d = {
        $push: function (t, e, n) {
          return o(e, n, '$push'), e.concat(t);
        },
        $unshift: function (t, e, n) {
          return o(e, n, '$unshift'), t.concat(e);
        },
        $splice: function (t, e, n, i) {
          var o = e === i ? r(i) : e;
          return (
            (function (t, e) {
              u(
                Array.isArray(t),
                'Expected $splice target to be an array; got %s',
                t
              ),
                a(e.$splice);
            })(o, n),
            t.forEach(function (t) {
              a(t), s.apply(o, t);
            }),
            o
          );
        },
        $set: function (t, e, n) {
          return (
            (function (t) {
              u(
                1 === Object.keys(t).length,
                'Cannot have more than one key in an object with $set'
              );
            })(n),
            t
          );
        },
        $unset: function (t, e, n, i) {
          u(
            Array.isArray(t),
            'update(): expected spec of $unset to be an array; got %s. Did you forget to wrap the key(s) in an array?',
            t
          );
          var o = e;
          return (
            t.forEach(function (t) {
              Object.hasOwnProperty.call(o, t) &&
                (e === i && (e = r(i)), delete e[t]);
            }),
            e
          );
        },
        $merge: function (t, e, n, i) {
          return (
            (function (t, e) {
              u(
                e && 'object' == typeof e,
                "update(): $merge expects a spec of type 'object'; got %s",
                e
              ),
                u(
                  t && 'object' == typeof t,
                  "update(): $merge expects a target of type 'object'; got %s",
                  t
                );
            })((e = e), t),
            l(t).forEach(function (n) {
              t[n] !== e[n] && (e === i && (e = r(i)), (e[n] = t[n]));
            }),
            e
          );
        },
        $apply: function (t, e) {
          return (
            (function (t) {
              u(
                'function' == typeof t,
                'update(): expected spec of $apply to be a function; got %s.',
                t
              );
            })(t),
            t(e)
          );
        },
      };
    (t.exports = i()), (t.exports.newContext = i);
  },
  function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    var i = n(117),
      o = n(118),
      a = n(119),
      u = n(120),
      c = n(121);
    (r.prototype.clear = i),
      (r.prototype.delete = o),
      (r.prototype.get = a),
      (r.prototype.has = u),
      (r.prototype.set = c),
      (t.exports = r);
  },
  function (t, e, n) {
    var r = n(25);
    t.exports = function (t, e) {
      for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(4)(Object, 'create');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(141);
    t.exports = function (t, e) {
      var n = t.__data__;
      return r(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
    };
  },
  function (t, e, n) {
    var r = n(64),
      i = n(32),
      o = n(9);
    t.exports = function (t) {
      return o(t) ? r(t) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(157),
      i = n(5),
      o = Object.prototype,
      a = o.hasOwnProperty,
      u = o.propertyIsEnumerable,
      c = r(
        (function () {
          return arguments;
        })()
      )
        ? r
        : function (t) {
            return i(t) && a.call(t, 'callee') && !u.call(t, 'callee');
          };
    t.exports = c;
  },
  function (t, e, n) {
    var r = n(36);
    t.exports = function (t, e, n) {
      var i = null == t ? void 0 : r(t, e);
      return void 0 === i ? n : i;
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(37),
      o = n(168),
      a = n(68);
    t.exports = function (t, e) {
      return r(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(5),
      o = '[object Symbol]';
    t.exports = function (t) {
      return 'symbol' == typeof t || (i(t) && r(t) == o);
    };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, n) {
    var r = n(4)(n(2), 'Map');
    t.exports = r;
  },
  function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    var i = n(133),
      o = n(140),
      a = n(142),
      u = n(143),
      c = n(144);
    (r.prototype.clear = i),
      (r.prototype.delete = o),
      (r.prototype.get = a),
      (r.prototype.has = u),
      (r.prototype.set = c),
      (t.exports = r);
  },
  function (t, e, n) {
    (function (t) {
      var r = n(2),
        i = n(158),
        o = 'object' == typeof e && e && !e.nodeType && e,
        a = o && 'object' == typeof t && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
      t.exports = c;
    }.call(e, n(24)(t)));
  },
  function (t, e) {
    var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
      return (
        !!(e = null == e ? n : e) &&
        ('number' == typeof t || r.test(t)) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function (t, e, n) {
    var r = n(159),
      i = n(160),
      o = n(161),
      a = o && o.isTypedArray,
      u = a ? i(a) : r;
    t.exports = u;
  },
  function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= n;
    };
  },
  function (t, e, n) {
    var r = n(33),
      i = n(162),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return i(t);
      var e = [];
      for (var n in Object(t)) o.call(t, n) && 'constructor' != n && e.push(n);
      return e;
    };
  },
  function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || n);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return t(e(n));
      };
    };
  },
  function (t, e, n) {
    var r = n(163),
      i = n(26),
      o = n(164),
      a = n(165),
      u = n(65),
      c = n(8),
      s = n(61),
      f = s(r),
      l = s(i),
      d = s(o),
      p = s(a),
      v = s(u),
      h = c;
    ((r && '[object DataView]' != h(new r(new ArrayBuffer(1)))) ||
      (i && '[object Map]' != h(new i())) ||
      (o && '[object Promise]' != h(o.resolve())) ||
      (a && '[object Set]' != h(new a())) ||
      (u && '[object WeakMap]' != h(new u()))) &&
      (h = function (t) {
        var e = c(t),
          n = '[object Object]' == e ? t.constructor : void 0,
          r = n ? s(n) : '';
        if (r)
          switch (r) {
            case f:
              return '[object DataView]';
            case l:
              return '[object Map]';
            case d:
              return '[object Promise]';
            case p:
              return '[object Set]';
            case v:
              return '[object WeakMap]';
          }
        return e;
      }),
      (t.exports = h);
  },
  function (t, e, n) {
    var r = n(21),
      i = n(11);
    t.exports = function (t, e) {
      for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
        t = t[i(e[n++])];
      return n && n == o ? t : void 0;
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(22),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = function (t, e) {
      if (r(t)) return !1;
      var n = typeof t;
      return (
        !(
          'number' != n &&
          'symbol' != n &&
          'boolean' != n &&
          null != t &&
          !i(t)
        ) ||
        a.test(t) ||
        !o.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
      return t;
    };
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function i(t) {
      var e = void 0 === t ? 'undefined' : k(t);
      if ('string' === e) return { id: t };
      if (null != t && 'object' === e) {
        return {
          id: t.id,
          selector: t.selector,
          selectorGuids: t.selectorGuids,
          appliesTo: t.appliesTo,
          useEventTarget: t.useEventTarget,
        };
      }
      return {};
    }
    function o(t) {
      var e = t.config,
        n = t.event,
        r = t.eventTarget,
        o = t.elementApi;
      if (!o) throw new Error('IX2 missing elementApi');
      var a = o.getValidDocument,
        u = o.getQuerySelector,
        c = o.queryDocument,
        s = o.getChildElements,
        f = o.getSiblingElements,
        l = o.matchSelector,
        d = o.elementContains,
        p = o.isSiblingNode,
        v = e.target;
      if (!v) return [];
      var h = i(v),
        g = h.id,
        y = h.selector,
        m = h.selectorGuids,
        w = h.appliesTo,
        x = h.useEventTarget;
      if (w === S.o) {
        var _ = a(g);
        return _ ? [_] : [];
      }
      var O = b()(n, 'action.config.affectedElements', {})[g || y] || {},
        j = Boolean(O.id || O.selector),
        I = void 0,
        E = void 0,
        T = void 0,
        k = n && u(i(n.target));
      if (
        (j
          ? ((I = O.limitAffectedElements), (E = k), (T = u(O)))
          : (E = T = u({ id: g, selector: y, selectorGuids: m })),
        null == E || null == T)
      )
        return [];
      if (n && x) {
        var M = r ? [r] : c(k);
        return x === A.f
          ? c(T).filter(function (t) {
              return M.some(function (e) {
                return d(e, t);
              });
            })
          : x === A.v
          ? c(T).filter(function (t) {
              return M.some(function (e) {
                return p(e, t);
              });
            })
          : M;
      }
      return I === A.f
        ? c(E, T)
        : I === A.m
        ? s(c(E)).filter(l(T))
        : I === A.v
        ? f(c(E)).filter(l(T))
        : c(T);
    }
    function a(t) {
      return t
        .map(function (t) {
          return t[0] + '(' + t[1] + ')';
        })
        .join(' ');
    }
    function u(t, e) {
      var n = t.exec(e);
      return n ? n[1] : '';
    }
    function c(t, e, n, r) {
      return t.replace(e, n + '(' + r + ')');
    }
    function s(t, e, n) {
      if (T.c) {
        var r = P[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, A.E);
          if (a) {
            var u = a.split(A.i).map(M);
            -1 === u.indexOf(r) && o(t, A.E, u.concat(r).join(A.i));
          } else o(t, A.E, r);
        }
      }
    }
    function f(t, e, n) {
      if (T.c) {
        var r = P[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, A.E);
          a &&
            -1 !== a.indexOf(r) &&
            o(
              t,
              A.E,
              a
                .split(A.i)
                .map(M)
                .filter(function (t) {
                  return t !== r;
                })
                .join(A.i)
            );
        }
      }
    }
    function l(t) {
      var e = t.actionList,
        n = void 0 === e ? {} : e,
        r = t.event,
        i = t.elementApi,
        o = n.actionItemGroups,
        a = n.continuousParameterGroups;
      o &&
        o.forEach(function (t) {
          d({ actionGroup: t, event: r, elementApi: i });
        }),
        a &&
          a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
              d({ actionGroup: t, event: r, elementApi: i });
            });
          });
    }
    function d(t) {
      var e = t.actionGroup,
        n = t.event,
        r = t.elementApi;
      e.actionItems.forEach(function (t) {
        var e = t.actionTypeId,
          i = t.config,
          a = J({ effect: p, actionTypeId: e, elementApi: r });
        o({ config: i, event: n, elementApi: r }).forEach(a);
      });
    }
    function p(t, e, n) {
      var r = n.setStyle;
      f(t, e, n), r(t, e, '');
    }
    function v(t) {
      var e = 0,
        n = 0;
      return (
        t.forEach(function (t, r) {
          var i = t.config,
            o = i.delay + i.duration;
          o >= e && ((e = o), (n = r));
        }),
        n
      );
    }
    (e.f = function () {
      return 'i' + L++;
    }),
      (e.l = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.events,
          n = t.actionLists,
          r = t.site,
          i = O()(
            e,
            function (t, e) {
              var n = e.eventTypeId;
              return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
            },
            {}
          ),
          o = r && r.mediaQueries,
          a = [];
        return (
          o
            ? (a = o.map(function (t) {
                return t.key;
              }))
            : ((o = []), console.warn('IX2 missing mediaQueries in site data')),
          {
            ixData: {
              events: e,
              actionLists: n,
              eventTypeMap: i,
              mediaQueries: o,
              mediaQueryKeys: a,
            },
          }
        );
      }),
      (e.j = function (t) {
        var e = t.store,
          n = t.select,
          r = t.onChange,
          i = t.comparator,
          o = void 0 === i ? D : i,
          a = e.getState,
          u = (0, e.subscribe)(function () {
            var t = n(a());
            null != t ? o(t, c) || r((c = t), e) : u();
          }),
          c = n(a());
        return u;
      }),
      (e.c = o),
      (e.d = function (t) {
        var e = t.element,
          n = t.actionItem;
        if (!T.c) return {};
        switch (n.actionTypeId) {
          case E.g:
          case E.d:
          case E.e:
          case E.h:
          case E.b:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }),
      (e.g = function (t) {
        var e = t.element,
          n = t.actionItem,
          r = t.computedStyle,
          i = void 0 === r ? {} : r,
          o = t.elementApi.getStyle,
          a = n.actionTypeId,
          c = n.config;
        switch (a) {
          case E.i:
          case E.k:
          case E.j:
          case E.l:
            return (function (t, e) {
              var n = z[e];
              if (!t) return n;
              var r = function (t) {
                return {
                  xValue: x()(parseFloat(t[0]), n.xValue),
                  yValue: x()(parseFloat(t[1]), n.yValue),
                  zValue: x()(parseFloat(t[2]), n.zValue),
                };
              };
              switch (e) {
                case E.i:
                  var i = [u(N, t), u($, t), u(F, t)];
                  return r(i);
                case E.k:
                  var o = [u(G, t), u(W, t), u(X, t)];
                  return r(o);
                case E.j:
                  var a = [u(H, t), u(q, t), u(B, t)];
                  return r(a);
                case E.l:
                  var c = [u(U, t), u(Q, t)];
                  return {
                    xValue: x()(parseFloat(c[0]), n.xValue),
                    yValue: x()(parseFloat(c[1]), n.yValue),
                  };
                default:
                  return;
              }
            })(o(e, T.d), a);
          case E.f:
            return { value: x()(parseFloat(o(e, A.o)), 1) };
          case E.g:
            var s = o(e, A.D),
              f = o(e, A.l),
              l = void 0,
              d = void 0;
            return (
              (l =
                c.widthUnit === A.a
                  ? R.test(s)
                    ? parseFloat(s)
                    : parseFloat(i.width)
                  : x()(parseFloat(s), parseFloat(i.width))),
              (d =
                c.heightUnit === A.a
                  ? R.test(f)
                    ? parseFloat(f)
                    : parseFloat(i.height)
                  : x()(parseFloat(f), parseFloat(i.height))),
              { widthValue: l, heightValue: d }
            );
          case E.d:
          case E.e:
          case E.h:
            return (function (t) {
              var e = t.element,
                n = t.actionTypeId,
                r = t.computedStyle,
                i = t.getStyle,
                o = C[n],
                a = i(e, o),
                c = K.test(a) ? a : r[o],
                s = u(Z, c).split(A.i);
              return {
                rValue: x()(parseInt(s[0], 10), 255),
                gValue: x()(parseInt(s[1], 10), 255),
                bValue: x()(parseInt(s[2], 10), 255),
                aValue: x()(parseFloat(s[3]), 1),
              };
            })({ element: e, actionTypeId: a, computedStyle: i, getStyle: o });
          case E.b:
            return { value: x()(o(e, A.j), i.display) };
          default:
            return;
        }
      }),
      (e.e = function (t) {
        var e = t.element,
          n = t.actionItem,
          r = t.elementApi;
        switch (n.actionTypeId) {
          case E.i:
          case E.k:
          case E.j:
          case E.l:
            var i = n.config;
            return { xValue: i.xValue, yValue: i.yValue, zValue: i.zValue };
          case E.g:
            var o = r.getStyle,
              a = r.setStyle,
              u = r.getProperty,
              c = n.config,
              s = c.widthUnit,
              f = c.heightUnit,
              l = n.config,
              d = l.widthValue,
              p = l.heightValue;
            if (!T.c) return { widthValue: d, heightValue: p };
            if (s === A.a) {
              var v = o(e, A.D);
              a(e, A.D, ''), (d = u(e, 'offsetWidth')), a(e, A.D, v);
            }
            if (f === A.a) {
              var h = o(e, A.l);
              a(e, A.l, ''), (p = u(e, 'offsetHeight')), a(e, A.l, h);
            }
            return { widthValue: d, heightValue: p };
          case E.d:
          case E.e:
          case E.h:
            var g = n.config;
            return {
              rValue: g.rValue,
              gValue: g.gValue,
              bValue: g.bValue,
              aValue: g.aValue,
            };
          default:
            return { value: n.config.value };
        }
      }),
      (e.m = function (t, e) {
        var n = t.isTransform,
          r = t.isStyle,
          i = t.isGeneral;
        return n
          ? (function (t, e) {
              var n = t.element,
                r = t.current,
                i = t.actionItem,
                o = e.getStyle,
                a = e.setStyle,
                u = o(n, T.d),
                f = (function (t, e, n) {
                  var r = e.actionTypeId,
                    i = e.config,
                    o = i.xUnit,
                    a = void 0 === o ? '' : o,
                    u = i.yUnit,
                    s = void 0 === u ? '' : u,
                    f = i.zUnit,
                    l = void 0 === f ? '' : f,
                    d = n.xValue,
                    p = n.yValue,
                    v = n.zValue,
                    h = t || Y;
                  switch (r) {
                    case E.i:
                      return (
                        void 0 !== d && (h = c(h, N, A.z, d + a)),
                        void 0 !== p && (h = c(h, $, A.A, p + s)),
                        void 0 !== v && (h = c(h, F, A.B, v + l)),
                        h
                      );
                    case E.k:
                      return (
                        void 0 !== d && (h = c(h, G, A.s, d + a)),
                        void 0 !== p && (h = c(h, W, A.t, p + s)),
                        void 0 !== v && (h = c(h, X, A.u, v + l)),
                        h
                      );
                    case E.j:
                      return (
                        void 0 !== d && (h = c(h, H, A.p, d + a)),
                        void 0 !== p && (h = c(h, q, A.q, p + s)),
                        void 0 !== v && (h = c(h, B, A.r, v + l)),
                        h
                      );
                    case E.l:
                      return (
                        void 0 !== d && (h = c(h, U, A.w, d + a)),
                        void 0 !== p && (h = c(h, Q, A.x, p + s)),
                        h
                      );
                    default:
                      return h;
                  }
                })(u, i, r);
              u !== f && (s(n, T.d, e), a(n, T.d, f));
            })(t, e)
          : r
          ? (function (t, e) {
              var n = t.element,
                r = t.actionItem,
                i = t.current,
                o = t.styleProp,
                a = e.setStyle,
                u = r.actionTypeId,
                c = r.config;
              switch (u) {
                case E.g:
                  var f = r.config,
                    l = f.widthUnit,
                    d = void 0 === l ? '' : l,
                    p = f.heightUnit,
                    v = void 0 === p ? '' : p,
                    h = i.widthValue,
                    g = i.heightValue;
                  void 0 !== h &&
                    (d === A.a && (d = 'px'), s(n, A.D, e), a(n, A.D, h + d)),
                    void 0 !== g &&
                      (v === A.a && (v = 'px'), s(n, A.l, e), a(n, A.l, g + v));
                  break;
                case E.d:
                case E.e:
                case E.h:
                  var y = C[u],
                    m = i.rValue,
                    b = i.gValue,
                    w = i.bValue,
                    x = i.aValue;
                  s(n, y, e),
                    a(
                      n,
                      y,
                      x >= 1
                        ? 'rgb(' +
                            Math.round(m) +
                            ',' +
                            Math.round(b) +
                            ',' +
                            Math.round(w) +
                            ')'
                        : 'rgba(' +
                            Math.round(m) +
                            ',' +
                            Math.round(b) +
                            ',' +
                            Math.round(w) +
                            ',' +
                            x +
                            ')'
                    );
                  break;
                default:
                  var _ = c.unit,
                    O = void 0 === _ ? '' : _;
                  s(n, o, e), a(n, o, i.value + O);
              }
            })(t, e)
          : i
          ? (function (t, e) {
              var n = t.element,
                r = t.actionItem,
                i = e.setStyle;
              switch (r.actionTypeId) {
                case E.b:
                  var o = r.config.value;
                  return void (o === A.k && T.c
                    ? i(n, A.j, T.b)
                    : i(n, A.j, o));
              }
            })(t, e)
          : void 0;
      }),
      (e.b = function (t) {
        var e = t.store,
          n = t.elementApi,
          r = e.getState().ixData,
          i = r.events,
          o = void 0 === i ? {} : i,
          a = r.actionLists,
          u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
          var e = o[t],
            r = e.action.config.actionListId,
            i = u[r];
          i && l({ actionList: i, event: e, elementApi: n });
        }),
          Object.keys(u).forEach(function (t) {
            l({ actionList: u[t], elementApi: n });
          });
      }),
      (e.a = function (t, e) {
        var n = t.actionItem,
          r = t.element,
          i = e.setStyle,
          o = e.getStyle,
          a = n.actionTypeId;
        if (a === E.g) {
          var u = n.config;
          u.widthUnit === A.a && i(r, A.D, ''),
            u.heightUnit === A.a && i(r, A.l, '');
        }
        o(r, A.E) && J({ effect: f, actionTypeId: a, elementApi: e })(r);
      }),
      (e.h = v),
      (e.k = function (t) {
        var e = t.actionListId,
          n = t.actionItemId,
          i = t.rawData,
          o = i.actionLists[e],
          a = o.actionItemGroups,
          u = o.continuousParameterGroups,
          c = [],
          s = function (t) {
            return (
              c.push(I()(t, { config: { $merge: { delay: 0, duration: 0 } } })),
              t.id === n
            );
          };
        return (
          a &&
            a.some(function (t) {
              return t.actionItems.some(s);
            }),
          u &&
            u.some(function (t) {
              return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(s);
              });
            }),
          I()(i, {
            actionLists: {
              $set: r({}, e, { id: e, actionItemGroups: [{ actionItems: c }] }),
            },
          })
        );
      }),
      (e.o = function (t, e) {
        var n = e.basedOn;
        return (
          (t === S.u && (n === S.e || null == n)) || (t === S.h && n === S.e)
        );
      }),
      (e.i = function (t, e) {
        return t + A.g + e;
      }),
      (e.n = function (t, e) {
        return null == e || -1 !== t.indexOf(e);
      }),
      (e.p = function (t) {
        if ('string' == typeof t) return t;
        var e = t.id,
          n = void 0 === e ? '' : e,
          r = t.selector,
          i = void 0 === r ? '' : r,
          o = t.useEventTarget,
          a = void 0 === o ? '' : o;
        return n + A.d + i + A.d + a;
      });
    var h,
      g,
      y,
      m = n(20),
      b = n.n(m),
      w = n(208),
      x = n.n(w),
      _ = n(209),
      O = n.n(_),
      j = n(13),
      I = n.n(j),
      E = (n(55), n(41)),
      S = n(42),
      A = n(43),
      T = n(80),
      k =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      M = function (t) {
        return t.trim();
      },
      C = Object.freeze(
        ((h = {}), r(h, E.d, A.c), r(h, E.e, A.e), r(h, E.h, A.h), h)
      ),
      P = Object.freeze(
        ((g = {}),
        r(g, T.d, A.y),
        r(g, A.c, A.b),
        r(g, A.o, A.o),
        r(g, A.D, A.D),
        r(g, A.l, A.l),
        g)
      ),
      L = 1,
      D = function (t, e) {
        return t === e;
      },
      R = /px/,
      z =
        ((y = {}),
        r(y, E.i, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
        r(y, E.k, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })),
        r(y, E.j, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
        r(y, E.l, Object.freeze({ xValue: 0, yValue: 0 })),
        y),
      V = '\\(([^)]+)\\)',
      N = RegExp('' + A.z + V),
      $ = RegExp('' + A.A + V),
      F = RegExp('' + A.B + V),
      G = RegExp('' + A.s + V),
      W = RegExp('' + A.t + V),
      X = RegExp('' + A.u + V),
      H = RegExp('' + A.p + V),
      q = RegExp('' + A.q + V),
      B = RegExp('' + A.r + V),
      U = RegExp('' + A.w + V),
      Q = RegExp('' + A.x + V),
      Y = Object.keys(z)
        .map(function (t) {
          var e = z[t],
            n = e.xValue,
            r = e.yValue,
            i = e.zValue;
          switch (t) {
            case E.i:
              return a([
                [A.z, n],
                [A.A, r],
                [A.B, i],
              ]);
            case E.k:
              return a([
                [A.s, n],
                [A.t, r],
                [A.u, i],
              ]);
            case E.j:
              return a([
                [A.p, n],
                [A.q, r],
                [A.r, i],
              ]);
            case E.l:
              return a([
                [A.w, n],
                [A.x, r],
              ]);
            default:
              return '';
          }
        })
        .join(' '),
      K = /^rgb/,
      Z = RegExp('rgba?' + V),
      J = function (t) {
        var e = t.effect,
          n = t.actionTypeId,
          r = t.elementApi;
        return function (t) {
          switch (n) {
            case E.i:
            case E.k:
            case E.j:
            case E.l:
              e(t, T.d, r);
              break;
            case E.f:
              e(t, A.o, r);
              break;
            case E.g:
              e(t, A.D, r), e(t, A.l, r);
              break;
            case E.d:
            case E.e:
            case E.h:
              e(t, C[n], r);
              break;
            case E.b:
              e(t, A.j, r);
          }
        };
      };
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'i', function () {
      return r;
    }),
      n.d(e, 'k', function () {
        return i;
      }),
      n.d(e, 'j', function () {
        return o;
      }),
      n.d(e, 'l', function () {
        return a;
      }),
      n.d(e, 'f', function () {
        return u;
      }),
      n.d(e, 'g', function () {
        return c;
      }),
      n.d(e, 'd', function () {
        return s;
      }),
      n.d(e, 'e', function () {
        return f;
      }),
      n.d(e, 'h', function () {
        return l;
      }),
      n.d(e, 'b', function () {
        return d;
      }),
      n.d(e, 'a', function () {
        return p;
      }),
      n.d(e, 'c', function () {
        return v;
      });
    var r = 'TRANSFORM_MOVE',
      i = 'TRANSFORM_SCALE',
      o = 'TRANSFORM_ROTATE',
      a = 'TRANSFORM_SKEW',
      u = 'STYLE_OPACITY',
      c = 'STYLE_SIZE',
      s = 'STYLE_BACKGROUND_COLOR',
      f = 'STYLE_BORDER',
      l = 'STYLE_TEXT_COLOR',
      d = 'GENERAL_DISPLAY',
      p = 'GENERAL_CONTINUOUS_ACTION',
      v = 'GENERAL_START_ACTION';
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'f', function () {
      return r;
    }),
      n.d(e, 'k', function () {
        return i;
      }),
      n.d(e, 'g', function () {
        return o;
      }),
      n.d(e, 'l', function () {
        return a;
      }),
      n.d(e, 'j', function () {
        return u;
      }),
      n.d(e, 'i', function () {
        return c;
      }),
      n.d(e, 'h', function () {
        return s;
      }),
      n.d(e, 'v', function () {
        return f;
      }),
      n.d(e, 'w', function () {
        return l;
      }),
      n.d(e, 'u', function () {
        return d;
      }),
      n.d(e, 'z', function () {
        return p;
      }),
      n.d(e, 'A', function () {
        return v;
      }),
      n.d(e, 'n', function () {
        return h;
      }),
      n.d(e, 'm', function () {
        return g;
      }),
      n.d(e, 'x', function () {
        return y;
      }),
      n.d(e, 'y', function () {
        return m;
      }),
      n.d(e, 'd', function () {
        return b;
      }),
      n.d(e, 'c', function () {
        return w;
      }),
      n.d(e, 'a', function () {
        return x;
      }),
      n.d(e, 'b', function () {
        return _;
      }),
      n.d(e, 't', function () {
        return O;
      }),
      n.d(e, 'p', function () {
        return j;
      }),
      n.d(e, 's', function () {
        return I;
      }),
      n.d(e, 'r', function () {
        return E;
      }),
      n.d(e, 'q', function () {
        return S;
      }),
      n.d(e, 'e', function () {
        return A;
      }),
      n.d(e, 'B', function () {
        return T;
      }),
      n.d(e, 'o', function () {
        return k;
      });
    var r = 'MOUSE_CLICK',
      i = 'MOUSE_SECOND_CLICK',
      o = 'MOUSE_DOWN',
      a = 'MOUSE_UP',
      u = 'MOUSE_OVER',
      c = 'MOUSE_OUT',
      s = 'MOUSE_MOVE',
      f = 'SCROLL_INTO_VIEW',
      l = 'SCROLL_OUT_OF_VIEW',
      d = 'SCROLLING_IN_VIEW',
      p = 'TAB_ACTIVE',
      v = 'TAB_INACTIVE',
      h = 'NAVBAR_OPEN',
      g = 'NAVBAR_CLOSE',
      y = 'SLIDER_ACTIVE',
      m = 'SLIDER_INACTIVE',
      b = 'DROPDOWN_OPEN',
      w = 'DROPDOWN_CLOSE',
      x = 'COMPONENT_ACTIVE',
      _ = 'COMPONENT_INACTIVE',
      O = 'PAGE_START',
      j = 'PAGE_FINISH',
      I = 'PAGE_SCROLL_UP',
      E = 'PAGE_SCROLL_DOWN',
      S = 'PAGE_SCROLL',
      A = 'ELEMENT',
      T = 'VIEWPORT',
      k = 'PAGE';
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'n', function () {
      return r;
    }),
      n.d(e, 'C', function () {
        return i;
      }),
      n.d(e, 'y', function () {
        return o;
      }),
      n.d(e, 'z', function () {
        return a;
      }),
      n.d(e, 'A', function () {
        return u;
      }),
      n.d(e, 'B', function () {
        return c;
      }),
      n.d(e, 's', function () {
        return s;
      }),
      n.d(e, 't', function () {
        return f;
      }),
      n.d(e, 'u', function () {
        return l;
      }),
      n.d(e, 'p', function () {
        return d;
      }),
      n.d(e, 'q', function () {
        return p;
      }),
      n.d(e, 'r', function () {
        return v;
      }),
      n.d(e, 'w', function () {
        return h;
      }),
      n.d(e, 'x', function () {
        return g;
      }),
      n.d(e, 'o', function () {
        return y;
      }),
      n.d(e, 'D', function () {
        return m;
      }),
      n.d(e, 'l', function () {
        return b;
      }),
      n.d(e, 'c', function () {
        return w;
      }),
      n.d(e, 'b', function () {
        return x;
      }),
      n.d(e, 'e', function () {
        return _;
      }),
      n.d(e, 'h', function () {
        return O;
      }),
      n.d(e, 'j', function () {
        return j;
      }),
      n.d(e, 'k', function () {
        return I;
      }),
      n.d(e, 'E', function () {
        return E;
      }),
      n.d(e, 'a', function () {
        return S;
      }),
      n.d(e, 'i', function () {
        return A;
      }),
      n.d(e, 'g', function () {
        return T;
      }),
      n.d(e, 'd', function () {
        return k;
      }),
      n.d(e, 'f', function () {
        return M;
      }),
      n.d(e, 'm', function () {
        return C;
      }),
      n.d(e, 'v', function () {
        return P;
      });
    var r = '|',
      i = 'data-wf-page',
      o = 'transform',
      a = 'translateX',
      u = 'translateY',
      c = 'translateZ',
      s = 'scaleX',
      f = 'scaleY',
      l = 'scaleZ',
      d = 'rotateX',
      p = 'rotateY',
      v = 'rotateZ',
      h = 'skewX',
      g = 'skewY',
      y = 'opacity',
      m = 'width',
      b = 'height',
      w = 'backgroundColor',
      x = 'background',
      _ = 'borderColor',
      O = 'color',
      j = 'display',
      I = 'flex',
      E = 'willChange',
      S = 'AUTO',
      A = ',',
      T = ':',
      k = '|',
      M = 'CHILDREN',
      C = 'IMMEDIATE_CHILDREN',
      P = 'SIBLINGS';
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      n.d(e, 'rawDataImported', function () {
        return u;
      }),
      n.d(e, 'sessionStarted', function () {
        return c;
      }),
      n.d(e, 'sessionStopped', function () {
        return s;
      }),
      n.d(e, 'previewRequested', function () {
        return f;
      }),
      n.d(e, 'playbackRequested', function () {
        return l;
      }),
      n.d(e, 'stopRequested', function () {
        return d;
      }),
      n.d(e, 'clearRequested', function () {
        return p;
      }),
      n.d(e, 'eventListenerAdded', function () {
        return v;
      }),
      n.d(e, 'eventStateChanged', function () {
        return h;
      }),
      n.d(e, 'animationFrameChanged', function () {
        return g;
      }),
      n.d(e, 'parameterChanged', function () {
        return y;
      }),
      n.d(e, 'instanceAdded', function () {
        return m;
      }),
      n.d(e, 'instanceStarted', function () {
        return b;
      }),
      n.d(e, 'instanceRemoved', function () {
        return w;
      }),
      n.d(e, 'actionListPlaybackChanged', function () {
        return x;
      }),
      n.d(e, 'viewportWidthChanged', function () {
        return _;
      });
    var r = n(6),
      i = n(41),
      o = n(40),
      a =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      u = function (t) {
        return { type: r.l, payload: a({}, Object(o.l)(t)) };
      },
      c = function () {
        return { type: r.m, payload: {} };
      },
      s = function () {
        return { type: r.n, payload: {} };
      },
      f = function (t) {
        var e = t.rawData;
        return { type: r.k, payload: { rawData: e } };
      },
      l = function (t) {
        var e = t.actionTypeId,
          n = void 0 === e ? i.c : e,
          o = t.actionListId,
          a = t.actionItemId,
          u = t.eventId,
          c = t.allowEvents,
          s = t.immediate,
          f = t.verbose,
          l = t.rawData;
        return {
          type: r.j,
          payload: {
            actionTypeId: n,
            actionListId: o,
            actionItemId: a,
            eventId: u,
            allowEvents: c,
            immediate: s,
            verbose: f,
            rawData: l,
          },
        };
      },
      d = function (t) {
        return { type: r.o, payload: { actionListId: t } };
      },
      p = function () {
        return { type: r.c, payload: {} };
      },
      v = function (t, e) {
        return { type: r.d, payload: { target: t, listenerParams: e } };
      },
      h = function (t, e) {
        return { type: r.e, payload: { stateKey: t, newState: e } };
      },
      g = function (t, e) {
        return { type: r.b, payload: { now: t, parameters: e } };
      },
      y = function (t, e) {
        return { type: r.i, payload: { key: t, value: e } };
      },
      m = function (t) {
        return { type: r.f, payload: a({}, t) };
      },
      b = function (t) {
        return { type: r.h, payload: { instanceId: t } };
      },
      w = function (t) {
        return { type: r.g, payload: { instanceId: t } };
      },
      x = function (t) {
        var e = t.actionListId,
          n = t.isPlaying;
        return { type: r.a, payload: { actionListId: e, isPlaying: n } };
      },
      _ = function (t) {
        var e = t.width,
          n = t.mediaQueries;
        return { type: r.p, payload: { width: e, mediaQueries: n } };
      };
  },
  function (t, e, n) {
    function r(t, e) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__chain__ = !!e),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    var i = n(81),
      o = n(46);
    ((r.prototype = i(o.prototype)).constructor = r), (t.exports = r);
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e, n) {
    function r(t) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = a),
        (this.__views__ = []);
    }
    var i = n(81),
      o = n(46),
      a = 4294967295;
    ((r.prototype = i(o.prototype)).constructor = r), (t.exports = r);
  },
  function (t, e) {
    var n =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          };
    window.tram = (function (t) {
      function e(t, e) {
        return new L.Bare().init(t, e);
      }
      function r(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return '-' + t.toLowerCase();
        });
      }
      function i(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function o(t, e, n) {
        return (
          '#' + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
        );
      }
      function a() {}
      function u(t, e, n) {
        if ((void 0 !== e && (n = e), void 0 === t)) return n;
        var r = n;
        return (
          U.test(t) || !Q.test(t)
            ? (r = parseInt(t, 10))
            : Q.test(t) && (r = 1e3 * parseFloat(t)),
          0 > r && (r = 0),
          r == r ? r : n
        );
      }
      function c(t) {
        G.debug && window && window.console.warn(t);
      }
      var s = (function (t, e, r) {
          function i(t) {
            return 'object' == (void 0 === t ? 'undefined' : n(t));
          }
          function o(t) {
            return 'function' == typeof t;
          }
          function a() {}
          function u(n, c) {
            function s() {
              var t = new f();
              return o(t.init) && t.init.apply(t, arguments), t;
            }
            function f() {}
            c === r && ((c = n), (n = Object)), (s.Bare = f);
            var l,
              d = (a[t] = n[t]),
              p = (f[t] = s[t] = new a());
            return (
              (p.constructor = s),
              (s.mixin = function (e) {
                return (f[t] = s[t] = u(s, e)[t]), s;
              }),
              (s.open = function (t) {
                if (
                  ((l = {}),
                  o(t) ? (l = t.call(s, p, d, s, n)) : i(t) && (l = t),
                  i(l))
                )
                  for (var r in l) e.call(l, r) && (p[r] = l[r]);
                return o(p.init) || (p.init = n), s;
              }),
              s.open(c)
            );
          }
          return u;
        })('prototype', {}.hasOwnProperty),
        f = {
          ease: [
            'ease',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t)
              );
            },
          ],
          'ease-in': [
            'ease-in',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
            },
          ],
          'ease-out': [
            'ease-out',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
              );
            },
          ],
          'ease-in-out': [
            'ease-in-out',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
            },
          ],
          linear: [
            'linear',
            function (t, e, n, r) {
              return (n * t) / r + e;
            },
          ],
          'ease-in-quad': [
            'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
            function (t, e, n, r) {
              return n * (t /= r) * t + e;
            },
          ],
          'ease-out-quad': [
            'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            function (t, e, n, r) {
              return -n * (t /= r) * (t - 2) + e;
            },
          ],
          'ease-in-out-quad': [
            'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t + e
                : (-n / 2) * (--t * (t - 2) - 1) + e;
            },
          ],
          'ease-in-cubic': [
            'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t + e;
            },
          ],
          'ease-out-cubic': [
            'cubic-bezier(0.215, 0.610, 0.355, 1)',
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t + 1) + e;
            },
          ],
          'ease-in-out-cubic': [
            'cubic-bezier(0.645, 0.045, 0.355, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t + 2) + e;
            },
          ],
          'ease-in-quart': [
            'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t + e;
            },
          ],
          'ease-out-quart': [
            'cubic-bezier(0.165, 0.840, 0.440, 1)',
            function (t, e, n, r) {
              return -n * ((t = t / r - 1) * t * t * t - 1) + e;
            },
          ],
          'ease-in-out-quart': [
            'cubic-bezier(0.770, 0, 0.175, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t + e
                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
          ],
          'ease-in-quint': [
            'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t * t + e;
            },
          ],
          'ease-out-quint': [
            'cubic-bezier(0.230, 1, 0.320, 1)',
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
            },
          ],
          'ease-in-out-quint': [
            'cubic-bezier(0.860, 0, 0.070, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
          ],
          'ease-in-sine': [
            'cubic-bezier(0.470, 0, 0.745, 0.715)',
            function (t, e, n, r) {
              return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
            },
          ],
          'ease-out-sine': [
            'cubic-bezier(0.390, 0.575, 0.565, 1)',
            function (t, e, n, r) {
              return n * Math.sin((t / r) * (Math.PI / 2)) + e;
            },
          ],
          'ease-in-out-sine': [
            'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
            function (t, e, n, r) {
              return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
            },
          ],
          'ease-in-expo': [
            'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            function (t, e, n, r) {
              return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
            },
          ],
          'ease-out-expo': [
            'cubic-bezier(0.190, 1, 0.220, 1)',
            function (t, e, n, r) {
              return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
            },
          ],
          'ease-in-out-expo': [
            'cubic-bezier(1, 0, 0, 1)',
            function (t, e, n, r) {
              return 0 === t
                ? e
                : t === r
                ? e + n
                : (t /= r / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
          ],
          'ease-in-circ': [
            'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
            function (t, e, n, r) {
              return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
            },
          ],
          'ease-out-circ': [
            'cubic-bezier(0.075, 0.820, 0.165, 1)',
            function (t, e, n, r) {
              return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
            },
          ],
          'ease-in-out-circ': [
            'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
          ],
          'ease-in-back': [
            'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * (t /= r) * t * ((i + 1) * t - i) + e
              );
            },
          ],
          'ease-out-back': [
            'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
              );
            },
          ],
          'ease-in-out-back': [
            'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                (t /= r / 2) < 1
                  ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                  : (n / 2) *
                      ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) +
                    e
              );
            },
          ],
        },
        l = {
          'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
          'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
          'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
        },
        d = document,
        p = window,
        v = 'bkwld-tram',
        h = /[\-\.0-9]/g,
        g = /[A-Z]/,
        y = /^(rgb|#)/,
        m = /(em|cm|mm|in|pt|pc|px)$/,
        b = /(em|cm|mm|in|pt|pc|px|%)$/,
        w = /(deg|rad|turn)$/,
        x = /(all|none) 0s ease 0s/,
        _ = /^(width|height)$/,
        O = ' ',
        j = d.createElement('a'),
        I = ['Webkit', 'Moz', 'O', 'ms'],
        E = ['-webkit-', '-moz-', '-o-', '-ms-'],
        S = function (t) {
          if (t in j.style) return { dom: t, css: t };
          var e,
            n,
            r = '',
            i = t.split('-');
          for (e = 0; e < i.length; e++)
            r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
          for (e = 0; e < I.length; e++)
            if ((n = I[e] + r) in j.style) return { dom: n, css: E[e] + t };
        },
        A = (e.support = {
          bind: Function.prototype.bind,
          transform: S('transform'),
          transition: S('transition'),
          backface: S('backface-visibility'),
          timing: S('transition-timing-function'),
        });
      if (A.transition) {
        var T = A.timing.dom;
        if (((j.style[T] = f['ease-in-back'][0]), !j.style[T]))
          for (var k in l) f[k][0] = l[k];
      }
      var M = (e.frame = (function () {
          var t =
            p.requestAnimationFrame ||
            p.webkitRequestAnimationFrame ||
            p.mozRequestAnimationFrame ||
            p.oRequestAnimationFrame ||
            p.msRequestAnimationFrame;
          return t && A.bind
            ? t.bind(p)
            : function (t) {
                p.setTimeout(t, 16);
              };
        })()),
        C = (e.now = (function () {
          var t = p.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && A.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        P = s(function (e) {
          function i(t, e) {
            var n = (function (t) {
                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                  var i = t[e];
                  i && r.push(i);
                }
                return r;
              })(('' + t).split(O)),
              r = n[0];
            e = e || {};
            var i = q[r];
            if (!i) return c('Unsupported property: ' + r);
            if (!e.weak || !this.props[r]) {
              var o = i[0],
                a = this.props[r];
              return (
                a || (a = this.props[r] = new o.Bare()),
                a.init(this.$el, n, i, e),
                a
              );
            }
          }
          function o(t, e, r) {
            if (t) {
              var o = void 0 === t ? 'undefined' : n(t);
              if (
                (e ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                'number' == o && e)
              )
                return (
                  (this.timer = new $({
                    duration: t,
                    context: this,
                    complete: a,
                  })),
                  void (this.active = !0)
                );
              if ('string' == o && e) {
                switch (t) {
                  case 'hide':
                    f.call(this);
                    break;
                  case 'stop':
                    s.call(this);
                    break;
                  case 'redraw':
                    l.call(this);
                    break;
                  default:
                    i.call(this, t, r && r[1]);
                }
                return a.call(this);
              }
              if ('function' == o) return void t.call(this, this);
              if ('object' == o) {
                var c = 0;
                p.call(
                  this,
                  t,
                  function (t, e) {
                    t.span > c && (c = t.span), t.stop(), t.animate(e);
                  },
                  function (t) {
                    'wait' in t && (c = u(t.wait, 0));
                  }
                ),
                  d.call(this),
                  c > 0 &&
                    ((this.timer = new $({ duration: c, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = a));
                var v = this,
                  h = !1,
                  g = {};
                M(function () {
                  p.call(v, t, function (t) {
                    t.active && ((h = !0), (g[t.name] = t.nextStyle));
                  }),
                    h && v.$el.css(g);
                });
              }
            }
          }
          function a() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var t = this.queue.shift();
              o.call(this, t.options, !0, t.args);
            }
          }
          function s(t) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var e;
            'string' == typeof t
              ? ((e = {}), (e[t] = 1))
              : (e =
                  'object' == (void 0 === t ? 'undefined' : n(t)) && null != t
                    ? t
                    : this.props),
              p.call(this, e, h),
              d.call(this);
          }
          function f() {
            s.call(this), (this.el.style.display = 'none');
          }
          function l() {
            this.el.offsetHeight;
          }
          function d() {
            var t,
              e,
              n = [];
            this.upstream && n.push(this.upstream);
            for (t in this.props)
              (e = this.props[t]).active && n.push(e.string);
            (n = n.join(',')),
              this.style !== n &&
                ((this.style = n), (this.el.style[A.transition.dom] = n));
          }
          function p(t, e, n) {
            var o,
              a,
              u,
              c,
              s = e !== h,
              f = {};
            for (o in t)
              (u = t[o]),
                o in B
                  ? (f.transform || (f.transform = {}), (f.transform[o] = u))
                  : (g.test(o) && (o = r(o)),
                    o in q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
            for (o in f) {
              if (((u = f[o]), !(a = this.props[o]))) {
                if (!s) continue;
                a = i.call(this, o);
              }
              e.call(this, a, u);
            }
            n && c && n.call(this, c);
          }
          function h(t) {
            t.stop();
          }
          function y(t, e) {
            t.set(e);
          }
          function m(t) {
            this.$el.css(t);
          }
          function b(t, n) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var n,
                      r = this.children.length;
                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ''),
              (this.active = !1),
              G.keepInherited && !G.fallback)
            ) {
              var n = X(this.el, 'transition');
              n && !x.test(n) && (this.upstream = n);
            }
            A.backface &&
              G.hideBackface &&
              W(this.el, A.backface.css, 'hidden');
          }),
            b('add', i),
            b('start', o),
            b('wait', function (t) {
              (t = u(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new $({
                      duration: t,
                      context: this,
                      complete: a,
                    })),
                    (this.active = !0));
            }),
            b('then', function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }),
                  void (this.timer.complete = a))
                : c(
                    'No active transition timer. Use start() or wait() before then().'
                  );
            }),
            b('next', a),
            b('stop', s),
            b('set', function (t) {
              s.call(this, t), p.call(this, t, y, m);
            }),
            b('show', function (t) {
              'string' != typeof t && (t = 'block'),
                (this.el.style.display = t);
            }),
            b('hide', f),
            b('redraw', l),
            b('destroy', function () {
              s.call(this),
                t.removeData(this.el, v),
                (this.$el = this.el = null);
            });
        }),
        L = s(P, function (e) {
          function n(e, n) {
            var r = t.data(e, v) || t.data(e, v, new P.Bare());
            return r.el || r.init(e), n ? r.start(n) : r;
          }
          e.init = function (e, r) {
            var i = t(e);
            if (!i.length) return this;
            if (1 === i.length) return n(i[0], r);
            var o = [];
            return (
              i.each(function (t, e) {
                o.push(n(e, r));
              }),
              (this.children = o),
              this
            );
          };
        }),
        D = s(function (t) {
          function e() {
            var t = this.get();
            this.update('auto');
            var e = this.get();
            return this.update(t), e;
          }
          var r = 500,
            i = 'ease',
            a = 0;
          (t.init = function (t, e, n, o) {
            (this.$el = t), (this.el = t[0]);
            var c = e[0];
            n[2] && (c = n[2]),
              H[c] && (c = H[c]),
              (this.name = c),
              (this.type = n[1]),
              (this.duration = u(e[1], this.duration, r)),
              (this.ease = (function (t, e, n) {
                return void 0 !== e && (n = e), t in f ? t : n;
              })(e[2], this.ease, i)),
              (this.delay = u(e[3], this.delay, a)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = _.test(this.name)),
              (this.unit = o.unit || this.unit || G.defaultUnit),
              (this.angle = o.angle || this.angle || G.defaultAngle),
              G.fallback || o.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    O +
                    this.duration +
                    'ms' +
                    ('ease' != this.ease ? O + f[this.ease][0] : '') +
                    (this.delay ? O + this.delay + 'ms' : '')));
          }),
            (t.set = function (t) {
              (t = this.convert(t, this.type)), this.update(t), this.redraw();
            }),
            (t.transition = function (t) {
              (this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  'auto' == t && (t = e.call(this))),
                (this.nextStyle = t);
            }),
            (t.fallback = function (t) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == n && (n = this.convert(this.get(), this.type)),
                  'auto' == t && (t = e.call(this))),
                (this.tween = new N({
                  from: n,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (t.get = function () {
              return X(this.el, this.name);
            }),
            (t.update = function (t) {
              W(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                W(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ('auto' == t && this.auto) return t;
              var r,
                i = 'number' == typeof t,
                a = 'string' == typeof t;
              switch (e) {
                case 'number':
                  if (i) return t;
                  if (a && '' === t.replace(h, '')) return +t;
                  r = 'number(unitless)';
                  break;
                case y:
                  if (a) {
                    if ('' === t && this.original) return this.original;
                    if (e.test(t))
                      return '#' == t.charAt(0) && 7 == t.length
                        ? t
                        : (function (t) {
                            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                            return (e ? o(e[1], e[2], e[3]) : t).replace(
                              /#(\w)(\w)(\w)$/,
                              '#$1$1$2$2$3$3'
                            );
                          })(t);
                  }
                  r = 'hex or rgb string';
                  break;
                case m:
                  if (i) return t + this.unit;
                  if (a && e.test(t)) return t;
                  r = 'number(px) or string(unit)';
                  break;
                case b:
                  if (i) return t + this.unit;
                  if (a && e.test(t)) return t;
                  r = 'number(px) or string(unit or %)';
                  break;
                case w:
                  if (i) return t + this.angle;
                  if (a && e.test(t)) return t;
                  r = 'number(deg) or string(angle)';
                  break;
                case 'unitless':
                  if (i) return t;
                  if (a && b.test(t)) return t;
                  r = 'number(unitless) or string(unit or %)';
              }
              return (
                (function (t, e) {
                  c(
                    'Type warning: Expected: [' +
                      t +
                      '] Got: [' +
                      (void 0 === e ? 'undefined' : n(e)) +
                      '] ' +
                      e
                  );
                })(r, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        R = s(D, function (t, e) {
          t.init = function () {
            e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), y));
          };
        }),
        z = s(D, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            });
        }),
        V = s(D, function (t, e) {
          function n(t, e) {
            var n, r, i, o, a;
            for (n in t)
              (i = (o = B[n])[0]),
                (r = o[1] || n),
                (a = this.convert(t[n], i)),
                e.call(this, r, a, i);
          }
          (t.init = function () {
            e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                B.perspective &&
                  G.perspective &&
                  ((this.current.perspective = G.perspective),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (t.set = function (t) {
              n.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                W(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new F({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                r = {};
              for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(r));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new F({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (t.update = function () {
              W(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                n = '';
              for (e in t) n += e + '(' + t[e] + ') ';
              return n;
            }),
            (t.values = function (t) {
              var e,
                r = {};
              return (
                n.call(this, t, function (t, n, i) {
                  (r[t] = n),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf('scale') && (e = 1),
                      (this.current[t] = this.convert(e, i)));
                }),
                r
              );
            });
        }),
        N = s(function (e) {
          function n() {
            var t,
              e,
              r,
              i = u.length;
            if (i) for (M(n), e = C(), t = i; t--; ) (r = u[t]) && r.render(e);
          }
          var r = { ease: f.ease[1], from: 0, to: 1 };
          (e.init = function (t) {
            (this.duration = t.duration || 0), (this.delay = t.delay || 0);
            var e = t.ease || r.ease;
            f[e] && (e = f[e][1]),
              'function' != typeof e && (e = r.ease),
              (this.ease = e),
              (this.update = t.update || a),
              (this.complete = t.complete || a),
              (this.context = t.context || this),
              (this.name = t.name);
            var n = t.from,
              i = t.to;
            void 0 === n && (n = r.from),
              void 0 === i && (i = r.to),
              (this.unit = t.unit || ''),
              'number' == typeof n && 'number' == typeof i
                ? ((this.begin = n), (this.change = i - n))
                : this.format(i, n),
              (this.value = this.begin + this.unit),
              (this.start = C()),
              !1 !== t.autoplay && this.play();
          }),
            (e.play = function () {
              this.active ||
                (this.start || (this.start = C()),
                (this.active = !0),
                (function (t) {
                  1 === u.push(t) && M(n);
                })(this));
            }),
            (e.stop = function () {
              this.active &&
                ((this.active = !1),
                (function (e) {
                  var n,
                    r = t.inArray(e, u);
                  r >= 0 &&
                    ((n = u.slice(r + 1)),
                    (u.length = r),
                    n.length && (u = u.concat(n)));
                })(this));
            }),
            (e.render = function (t) {
              var e,
                n = t - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var r = this.ease(n, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, n) {
                        return o(
                          t[0] + n * (e[0] - t[0]),
                          t[1] + n * (e[1] - t[1]),
                          t[2] + n * (e[2] - t[2])
                        );
                      })(this.startRGB, this.endRGB, r)
                    : (function (t) {
                        return Math.round(t * s) / s;
                      })(this.begin + r * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (e.format = function (t, e) {
              if (((e += ''), '#' == (t += '').charAt(0)))
                return (
                  (this.startRGB = i(e)),
                  (this.endRGB = i(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = e.replace(h, '');
                n !== t.replace(h, '') &&
                  (function (t, e, n) {
                    c('Units do not match [' + t + ']: ' + e + ', ' + n);
                  })('tween', e, t),
                  (this.unit = n);
              }
              (e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e);
            }),
            (e.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = a);
            });
          var u = [],
            s = 1e3;
        }),
        $ = s(N, function (t) {
          (t.init = function (t) {
            (this.duration = t.duration || 0),
              (this.complete = t.complete || a),
              (this.context = t.context),
              this.play();
          }),
            (t.render = function (t) {
              t - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        F = s(N, function (t, e) {
          (t.init = function (t) {
            (this.context = t.context),
              (this.update = t.update),
              (this.tweens = []),
              (this.current = t.current);
            var e, n;
            for (e in t.values)
              (n = t.values[e]),
                this.current[e] !== n &&
                  this.tweens.push(
                    new N({
                      name: e,
                      from: this.current[e],
                      to: n,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (t.render = function (t) {
              var e,
                n,
                r = !1;
              for (e = this.tweens.length; e--; )
                (n = this.tweens[e]).context &&
                  (n.render(t), (this.current[n.name] = n.value), (r = !0));
              return r
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        G = (e.config = {
          debug: !1,
          defaultUnit: 'px',
          defaultAngle: 'deg',
          keepInherited: !1,
          hideBackface: !1,
          perspective: '',
          fallback: !A.transition,
          agentTests: [],
        });
      (e.fallback = function (t) {
        if (!A.transition) return (G.fallback = !0);
        G.agentTests.push('(' + t + ')');
        var e = new RegExp(G.agentTests.join('|'), 'i');
        G.fallback = e.test(navigator.userAgent);
      }),
        e.fallback('6.0.[2-5] Safari'),
        (e.tween = function (t) {
          return new N(t);
        }),
        (e.delay = function (t, e, n) {
          return new $({ complete: e, duration: t, context: n });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        });
      var W = t.style,
        X = t.css,
        H = { transform: A.transform && A.transform.css },
        q = {
          color: [R, y],
          background: [R, y, 'background-color'],
          'outline-color': [R, y],
          'border-color': [R, y],
          'border-top-color': [R, y],
          'border-right-color': [R, y],
          'border-bottom-color': [R, y],
          'border-left-color': [R, y],
          'border-width': [D, m],
          'border-top-width': [D, m],
          'border-right-width': [D, m],
          'border-bottom-width': [D, m],
          'border-left-width': [D, m],
          'border-spacing': [D, m],
          'letter-spacing': [D, m],
          margin: [D, m],
          'margin-top': [D, m],
          'margin-right': [D, m],
          'margin-bottom': [D, m],
          'margin-left': [D, m],
          padding: [D, m],
          'padding-top': [D, m],
          'padding-right': [D, m],
          'padding-bottom': [D, m],
          'padding-left': [D, m],
          'outline-width': [D, m],
          opacity: [D, 'number'],
          top: [D, b],
          right: [D, b],
          bottom: [D, b],
          left: [D, b],
          'font-size': [D, b],
          'text-indent': [D, b],
          'word-spacing': [D, b],
          width: [D, b],
          'min-width': [D, b],
          'max-width': [D, b],
          height: [D, b],
          'min-height': [D, b],
          'max-height': [D, b],
          'line-height': [D, 'unitless'],
          'scroll-top': [z, 'number', 'scrollTop'],
          'scroll-left': [z, 'number', 'scrollLeft'],
        },
        B = {};
      A.transform &&
        ((q.transform = [V]),
        (B = {
          x: [b, 'translateX'],
          y: [b, 'translateY'],
          rotate: [w],
          rotateX: [w],
          rotateY: [w],
          scale: ['number'],
          scaleX: ['number'],
          scaleY: ['number'],
          skew: [w],
          skewX: [w],
          skewY: [w],
        })),
        A.transform &&
          A.backface &&
          ((B.z = [b, 'translateZ']),
          (B.rotateZ = [w]),
          (B.scaleZ = ['number']),
          (B.perspective = [m]));
      var U = /ms/,
        Q = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, n) {
    'use strict';
    var r = n(50),
      i = n(102);
    n(103), n(104), n(54), n(53);
    n.d(e, 'b', function () {
      return r.b;
    }),
      n.d(e, 'a', function () {
        return i.a;
      });
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      function o() {
        h === v && (h = v.slice());
      }
      function c() {
        return p;
      }
      function s(t) {
        if ('function' != typeof t)
          throw new Error('Expected listener to be a function.');
        var e = !0;
        return (
          o(),
          h.push(t),
          function () {
            if (e) {
              (e = !1), o();
              var n = h.indexOf(t);
              h.splice(n, 1);
            }
          }
        );
      }
      function f(t) {
        if (!Object(i.a)(t))
          throw new Error(
            'Actions must be plain objects. Use custom middleware for async actions.'
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (g) throw new Error('Reducers may not dispatch actions.');
        try {
          (g = !0), (p = d(p, t));
        } finally {
          g = !1;
        }
        for (var e = (v = h), n = 0; n < e.length; n++) e[n]();
        return t;
      }
      var l;
      if (
        ('function' == typeof e && void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n)
      ) {
        if ('function' != typeof n)
          throw new Error('Expected the enhancer to be a function.');
        return n(r)(t, e);
      }
      if ('function' != typeof t)
        throw new Error('Expected the reducer to be a function.');
      var d = t,
        p = e,
        v = [],
        h = v,
        g = !1;
      return (
        f({ type: u.INIT }),
        (l = {
          dispatch: f,
          subscribe: s,
          getState: c,
          replaceReducer: function (t) {
            if ('function' != typeof t)
              throw new Error('Expected the nextReducer to be a function.');
            (d = t), f({ type: u.INIT });
          },
        }),
        (l[a.a] = function () {
          var t,
            e = s;
          return (
            (t = {
              subscribe: function (t) {
                function n() {
                  t.next && t.next(c());
                }
                if ('object' != typeof t)
                  throw new TypeError('Expected the observer to be an object.');
                return n(), { unsubscribe: e(n) };
              },
            }),
            (t[a.a] = function () {
              return this;
            }),
            t
          );
        }),
        l
      );
    }
    n.d(e, 'a', function () {
      return u;
    }),
      (e.b = r);
    var i = n(51),
      o = n(99),
      a = n.n(o),
      u = { INIT: '@@redux/INIT' };
  },
  function (t, e, n) {
    'use strict';
    var r = n(91),
      i = n(96),
      o = n(98),
      a = '[object Object]',
      u = Function.prototype,
      c = Object.prototype,
      s = u.toString,
      f = c.hasOwnProperty,
      l = s.call(Object);
    e.a = function (t) {
      if (!Object(o.a)(t) || Object(r.a)(t) != a) return !1;
      var e = Object(i.a)(t);
      if (null === e) return !0;
      var n = f.call(e, 'constructor') && e.constructor;
      return 'function' == typeof n && n instanceof n && s.call(n) == l;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(92).a.Symbol;
    e.a = r;
  },
  function (t, e, n) {
    'use strict';
  },
  function (t, e, n) {
    'use strict';
    e.a = function () {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      if (0 === e.length)
        return function (t) {
          return t;
        };
      if (1 === e.length) return e[0];
      var r = e[e.length - 1],
        i = e.slice(0, -1);
      return function () {
        return i.reduceRight(function (t, e) {
          return e(t);
        }, r.apply(void 0, arguments));
      };
    };
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = Math.pow(n, e),
        i = Number(Math.round(t * r) / r);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    (e.b = r),
      (e.a = function (t, e) {
        return 0 === e ? 0 : 1 === e ? 1 : r(e > 0 && t && i[t] ? i[t](e) : e);
      });
    var i = n(111);
  },
  function (t, e, n) {
    'use strict';
    function r(t, e) {
      c({ store: e, rawData: t.rawData, allowEvents: !0 }),
        document.dispatchEvent(new CustomEvent('IX2_PREVIEW_LOAD'));
    }
    function i(t) {
      return t && C()(t, '_EFFECT');
    }
    function o(t, e) {
      var n = t.actionTypeId,
        r = t.actionListId,
        o = t.actionItemId,
        a = t.eventId,
        u = t.allowEvents,
        s = t.immediate,
        f = t.verbose,
        v = void 0 === f || f,
        h = t.rawData;
      if (
        (r &&
          o &&
          h &&
          s &&
          (h = Object(P.k)({ actionListId: r, actionItemId: o, rawData: h })),
        c({ store: e, rawData: h, allowEvents: u }),
        (r && n === V.c) || i(n))
      ) {
        d({ store: e, actionListId: r }),
          l({ store: e, actionListId: r, eventId: a });
        var g = p({
          store: e,
          eventId: a,
          actionListId: r,
          immediate: s,
          verbose: v,
        });
        v &&
          g &&
          e.dispatch(
            Object(D.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !s,
            })
          );
      }
    }
    function a(t, e) {
      var n = t.actionListId;
      n
        ? d({ store: e, actionListId: n })
        : (function (t) {
            var e = t.store,
              n = e.getState().ixInstances;
            k()(n, function (t) {
              if (!t.continuous) {
                var n = t.actionListId,
                  r = t.verbose;
                h(t, e),
                  r &&
                    e.dispatch(
                      Object(D.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1,
                      })
                    );
              }
            });
          })({ store: e }),
        s(e);
    }
    function u(t, e) {
      s(e), Object(P.b)({ store: e, elementApi: R });
    }
    function c(t) {
      var e = t.store,
        n = t.rawData,
        r = t.allowEvents,
        o = e.getState().ixSession;
      n && e.dispatch(Object(D.rawDataImported)(n)),
        o.active ||
          (r &&
            (function (t) {
              var e = t.getState().ixData.eventTypeMap;
              k()(e, function (e, n) {
                var r = N.a[n];
                r
                  ? (function (t) {
                      var e = t.logic,
                        n = t.store,
                        r = t.events;
                      !(function (t) {
                        if (!G) return;
                        var e = {},
                          n = '';
                        for (var r in t) {
                          var i = t[r],
                            o = i.eventTypeId,
                            a = i.target,
                            u = R.getQuerySelector(a);
                          e[u] ||
                            (o !== L.f && o !== L.k) ||
                            ((e[u] = !0),
                            (n +=
                              u +
                              '{cursor: pointer;touch-action: manipulation;}'));
                        }
                        if (n) {
                          var c = document.createElement('style');
                          (c.textContent = n), document.body.appendChild(c);
                        }
                      })(r);
                      var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        c = u.actionLists,
                        s = X(r, q);
                      if (!_()(s)) return;
                      k()(s, function (t, e) {
                        var o = r[e],
                          a = o.action,
                          u = o.id,
                          s = a.config.actionListId;
                        if (a.actionTypeId === V.a) {
                          var f = Array.isArray(o.config)
                            ? o.config
                            : [o.config];
                          f.forEach(function (e) {
                            var r = e.continuousParameterGroupId,
                              i = w()(c, s + '.continuousParameterGroups', []),
                              o = m()(i, function (t) {
                                var e = t.id;
                                return e === r;
                              }),
                              a = (e.smoothing || 0) / 100,
                              f = (e.restingState || 0) / 100;
                            o &&
                              t.forEach(function (t, r) {
                                var i = u + z.g + r;
                                !(function (t) {
                                  var e = t.store,
                                    n = t.eventStateKey,
                                    r = t.eventTarget,
                                    i = t.eventId,
                                    o = t.eventConfig,
                                    a = t.actionListId,
                                    u = t.parameterGroup,
                                    c = t.smoothing,
                                    s = t.restingValue,
                                    f = e.getState().ixData.events[i],
                                    l = f.eventTypeId,
                                    d = {},
                                    p = {},
                                    h = [],
                                    g = u.continuousActionGroups,
                                    y = u.id;
                                  Object(P.o)(l, o) && (y = Object(P.i)(n, y));
                                  g.forEach(function (t) {
                                    var e = t.keyframe,
                                      n = t.actionItems;
                                    n.forEach(function (t) {
                                      var n = t.actionTypeId,
                                        i = t.config.target;
                                      if (i) {
                                        var o = Object(P.p)(i) + z.g + n;
                                        if (
                                          ((p[o] = (function () {
                                            var t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                  ? arguments[0]
                                                  : [],
                                              e = arguments[1],
                                              n = arguments[2],
                                              r = [].concat(
                                                (function (t) {
                                                  if (Array.isArray(t)) {
                                                    for (
                                                      var e = 0,
                                                        n = Array(t.length);
                                                      e < t.length;
                                                      e++
                                                    )
                                                      n[e] = t[e];
                                                    return n;
                                                  }
                                                  return Array.from(t);
                                                })(t)
                                              ),
                                              i = void 0;
                                            r.some(function (t, n) {
                                              return (
                                                t.keyframe === e &&
                                                ((i = n), !0)
                                              );
                                            }),
                                              null == i &&
                                                ((i = r.length),
                                                r.push({
                                                  keyframe: e,
                                                  actionItems: [],
                                                }));
                                            return r[i].actionItems.push(n), r;
                                          })(p[o], e, t)),
                                          !d[o])
                                        ) {
                                          d[o] = !0;
                                          var a = t.config;
                                          Object(P.c)({
                                            config: a,
                                            event: f,
                                            eventTarget: r,
                                            elementApi: R,
                                          }).forEach(function (t) {
                                            h.push({ element: t, key: o });
                                          });
                                        }
                                      }
                                    });
                                  }),
                                    h.forEach(function (t) {
                                      var n = t.element,
                                        r = t.key,
                                        o = p[r],
                                        u = w()(o, '[0].actionItems[0]', {}),
                                        f = Object(P.e)({
                                          element: n,
                                          actionItem: u,
                                          elementApi: R,
                                        });
                                      v({
                                        store: e,
                                        element: n,
                                        eventId: i,
                                        actionListId: a,
                                        actionItem: u,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: y,
                                        actionGroups: o,
                                        smoothing: c,
                                        restingValue: s,
                                      });
                                    });
                                })({
                                  store: n,
                                  eventStateKey: i,
                                  eventTarget: t,
                                  eventId: u,
                                  eventConfig: e,
                                  actionListId: s,
                                  parameterGroup: o,
                                  smoothing: a,
                                  restingValue: f,
                                });
                              });
                          });
                        }
                        (a.actionTypeId === V.c || i(a.actionTypeId)) &&
                          l({ store: n, actionListId: s, eventId: u });
                      });
                      var f = function (t) {
                          var e = n.getState(),
                            i = e.ixSession;
                          H(s, function (e, o, c) {
                            var s = r[o],
                              f = i.eventState[c],
                              l = s.action,
                              d = s.mediaQueries,
                              p = void 0 === d ? u.mediaQueryKeys : d;
                            if (Object(P.n)(p, i.mediaQueryKey)) {
                              var v = function () {
                                var r =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  i = a(
                                    {
                                      store: n,
                                      element: e,
                                      event: s,
                                      eventConfig: r,
                                      nativeEvent: t,
                                      eventStateKey: c,
                                    },
                                    f
                                  );
                                i !== f &&
                                  n.dispatch(Object(D.eventStateChanged)(c, i));
                              };
                              if (l.actionTypeId === V.a) {
                                var h = Array.isArray(s.config)
                                  ? s.config
                                  : [s.config];
                                h.forEach(v);
                              } else v();
                            }
                          });
                        },
                        d = function (t) {
                          var e = t.target,
                            r = void 0 === e ? document : e,
                            i = t.types;
                          i.split(' ')
                            .filter(Boolean)
                            .forEach(function (t) {
                              r.addEventListener(t, f),
                                n.dispatch(
                                  Object(D.eventListenerAdded)(r, [t, f])
                                );
                            });
                        };
                      Array.isArray(o)
                        ? o.forEach(d)
                        : 'string' == typeof o && d(e);
                    })({ logic: r, store: t, events: e })
                  : console.warn('IX2 event type not configured: ' + n);
              });
              t.getState().ixSession.eventListeners.length &&
                (function (t) {
                  function e() {
                    var e = t.getState(),
                      n = e.ixSession,
                      r = e.ixData,
                      i = window.innerWidth;
                    if (i !== n.viewportWidth) {
                      var o = r.mediaQueries;
                      t.dispatch(
                        Object(D.viewportWidthChanged)({
                          width: i,
                          mediaQueries: o,
                        })
                      );
                    }
                  }
                  W.forEach(function (n) {
                    window.addEventListener(n, e),
                      t.dispatch(Object(D.eventListenerAdded)(window, [n, e]));
                  });
                  e();
                })(t);
            })(e),
          e.dispatch(Object(D.sessionStarted)()),
          (function (t) {
            !(function e(n) {
              var r = t.getState(),
                i = r.ixSession,
                o = r.ixParameters;
              i.active &&
                (t.dispatch(Object(D.animationFrameChanged)(n, o)),
                requestAnimationFrame(e));
            })(window.performance.now());
          })(e));
    }
    function s(t) {
      var e = t.getState().ixSession;
      if (e.active) {
        e.eventListeners.forEach(f), t.dispatch(Object(D.sessionStopped)());
      }
    }
    function f(t) {
      var e = t.target,
        n = t.listenerParams;
      e.removeEventListener.apply(e, n);
    }
    function l(t) {
      var e = t.store,
        n = t.actionListId,
        r = t.eventId,
        i = e.getState().ixData,
        o = i.actionLists,
        a = i.events[r],
        u = o[n];
      if (u && u.useFirstGroupAsInitialState) {
        w()(u, 'actionItemGroups[0].actionItems', []).forEach(function (t) {
          var i = t.config;
          Object(P.c)({ config: i, event: a, elementApi: R }).forEach(function (
            i
          ) {
            v({
              destination: Object(P.e)({
                element: i,
                actionItem: t,
                elementApi: R,
              }),
              origin: Object(P.g)({ element: i, actionItem: t, elementApi: R }),
              immediate: !0,
              store: e,
              element: i,
              eventId: r,
              actionItem: t,
              actionListId: n,
            });
          });
        });
      }
    }
    function d(t) {
      var e = t.store,
        n = t.eventId,
        r = t.actionListId,
        i = e.getState().ixInstances;
      k()(i, function (t) {
        t.actionListId === r &&
          t.eventId === n &&
          (h(t, e),
          t.verbose &&
            e.dispatch(
              Object(D.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !1,
              })
            ));
      });
    }
    function p(t) {
      var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.actionListId,
        o = t.groupIndex,
        a = void 0 === o ? 0 : o,
        u = t.immediate,
        c = t.verbose,
        s = e.getState(),
        f = s.ixData,
        l = s.ixSession,
        d = f.events[n] || {},
        p = d.mediaQueries,
        h = void 0 === p ? f.mediaQueryKeys : p,
        g = w()(f, 'actionLists.' + i, {}),
        y = g.actionItemGroups;
      a >= y.length && w()(d, 'config.loop') && (a = 0),
        0 === a && g.useFirstGroupAsInitialState && a++;
      var m = w()(y, [a, 'actionItems'], []);
      if (!m.length) return !1;
      if (!Object(P.n)(h, l.mediaQueryKey)) return !1;
      var b = Object(P.h)(m),
        x = !1;
      return (
        m.forEach(function (t, o) {
          var s = t.config;
          Object(P.c)({
            config: s,
            event: d,
            eventTarget: r,
            elementApi: R,
          }).forEach(function (s, f) {
            x = !0;
            var l = b === o && 0 === f,
              d = Object(P.d)({ element: s, actionItem: t }),
              p = Object(P.g)({
                element: s,
                actionItem: t,
                computedStyle: d,
                elementApi: R,
              }),
              h = Object(P.e)({ element: s, actionItem: t, elementApi: R });
            v({
              store: e,
              element: s,
              actionItem: t,
              eventId: n,
              eventTarget: r,
              actionListId: i,
              groupIndex: a,
              isCarrier: l,
              origin: p,
              destination: h,
              immediate: u,
              verbose: c,
            });
          });
        }),
        x
      );
    }
    function v(t) {
      var e = t.store,
        n = (function (t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ['store']),
        r = !n.continuous,
        i = n.immediate,
        o = Object(P.f)();
      e.dispatch(Object(D.instanceAdded)($({ instanceId: o }, n))),
        i
          ? (function (t, e) {
              t.dispatch(Object(D.instanceStarted)(e));
              var n = t.getState().ixParameters;
              t.dispatch(
                Object(D.animationFrameChanged)(Number.POSITIVE_INFINITY, n)
              );
              g(t.getState().ixInstances[e], t);
            })(e, o)
          : (Object(P.j)({
              store: e,
              select: function (t) {
                return t.ixInstances[o];
              },
              onChange: g,
            }),
            r && e.dispatch(Object(D.instanceStarted)(o)));
    }
    function h(t, e) {
      Object(P.a)(t, R), e.dispatch(Object(D.instanceRemoved)(t.id));
    }
    function g(t, e) {
      var n = t.active,
        r = t.continuous,
        i = t.complete,
        o = t.current,
        a = t.groupIndex,
        u = t.eventId,
        c = t.eventTarget,
        s = t.actionListId,
        f = t.isGeneral,
        l = t.isCarrier,
        d = t.verbose,
        v = e.getState(),
        g = v.ixData,
        y = v.ixSession,
        m = (g.events[u] || {}).mediaQueries,
        b = void 0 === m ? g.mediaQueryKeys : m;
      if (
        Object(P.n)(b, y.mediaQueryKey) &&
        (r || n || i) &&
        ((o || (f && i)) && Object(P.m)(t, R), i)
      ) {
        if (l) {
          var w = p({
            store: e,
            eventId: u,
            eventTarget: c,
            actionListId: s,
            groupIndex: a + 1,
            verbose: d,
          });
          d &&
            !w &&
            e.dispatch(
              Object(D.actionListPlaybackChanged)({
                actionListId: s,
                isPlaying: !1,
              })
            );
        }
        h(t, e);
      }
    }
    (e.a = function (t) {
      Object(P.j)({
        store: t,
        select: function (t) {
          return t.ixRequest.preview;
        },
        onChange: r,
      }),
        Object(P.j)({
          store: t,
          select: function (t) {
            return t.ixRequest.playback;
          },
          onChange: o,
        }),
        Object(P.j)({
          store: t,
          select: function (t) {
            return t.ixRequest.stop;
          },
          onChange: a,
        }),
        Object(P.j)({
          store: t,
          select: function (t) {
            return t.ixRequest.clear;
          },
          onChange: u,
        });
    }),
      (e.c = c),
      (e.e = s),
      (e.d = d),
      (e.b = p);
    var y = n(57),
      m = n.n(y),
      b = n(20),
      w = n.n(b),
      x = n(179),
      _ = n.n(x),
      O = n(185),
      j = n.n(O),
      I = n(199),
      E = n.n(I),
      S = n(200),
      A = n.n(S),
      T = n(203),
      k = n.n(T),
      M = n(207),
      C = n.n(M),
      P = n(40),
      L = n(42),
      D = n(44),
      R = n(212),
      z = n(43),
      V = n(41),
      N = n(213),
      $ =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      F = navigator.userAgent,
      G = F.match(/iPad/i) || F.match(/iPhone/),
      W = ['resize', 'orientationchange'],
      X = function (t, e) {
        return j()(A()(t, e), E.a);
      },
      H = function (t, e) {
        k()(t, function (t, n) {
          t.forEach(function (t, r) {
            var i = n + z.g + r;
            e(t, n, i);
          });
        });
      },
      q = function (t) {
        var e = { target: t.target };
        return Object(P.c)({ config: e, elementApi: R });
      };
  },
  function (t, e, n) {
    var r = n(114)(n(176));
    t.exports = r;
  },
  function (t, e, n) {
    function r(t) {
      var e = (this.__data__ = new i(t));
      this.size = e.size;
    }
    var i = n(14),
      o = n(122),
      a = n(123),
      u = n(124),
      c = n(125),
      s = n(126);
    (r.prototype.clear = o),
      (r.prototype.delete = a),
      (r.prototype.get = u),
      (r.prototype.has = c),
      (r.prototype.set = s),
      (t.exports = r);
  },
  function (t, e, n) {
    var r = n(8),
      i = n(3),
      o = '[object AsyncFunction]',
      a = '[object Function]',
      u = '[object GeneratorFunction]',
      c = '[object Proxy]';
    t.exports = function (t) {
      if (!i(t)) return !1;
      var e = r(t);
      return e == a || e == u || e == o || e == c;
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = 'object' == typeof e && e && e.Object === Object && e;
      t.exports = n;
    }.call(e, n(23)));
  },
  function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    };
  },
  function (t, e, n) {
    function r(t, e, n, u, c) {
      return (
        t === e ||
        (null == t || null == e || (!o(t) && !a(e))
          ? t != t && e != e
          : i(t, e, n, u, r, c))
      );
    }
    var i = n(145),
      o = n(3),
      a = n(5);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(146),
      i = n(149),
      o = n(150),
      a = 1,
      u = 2;
    t.exports = function (t, e, n, c, s, f) {
      var l = n & a,
        d = t.length,
        p = e.length;
      if (d != p && !(l && p > d)) return !1;
      var v = f.get(t);
      if (v && f.get(e)) return v == e;
      var h = -1,
        g = !0,
        y = n & u ? new r() : void 0;
      for (f.set(t, e), f.set(e, t); ++h < d; ) {
        var m = t[h],
          b = e[h];
        if (c) var w = l ? c(b, m, h, e, t, f) : c(m, b, h, t, e, f);
        if (void 0 !== w) {
          if (w) continue;
          g = !1;
          break;
        }
        if (y) {
          if (
            !i(e, function (t, e) {
              if (!o(y, e) && (m === t || s(m, t, n, c, f))) return y.push(e);
            })
          ) {
            g = !1;
            break;
          }
        } else if (m !== b && !s(m, b, n, c, f)) {
          g = !1;
          break;
        }
      }
      return f.delete(t), f.delete(e), g;
    };
  },
  function (t, e, n) {
    var r = n(156),
      i = n(19),
      o = n(0),
      a = n(28),
      u = n(29),
      c = n(30),
      s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      var n = o(t),
        f = !n && i(t),
        l = !n && !f && a(t),
        d = !n && !f && !l && c(t),
        p = n || f || l || d,
        v = p ? r(t.length, String) : [],
        h = v.length;
      for (var g in t)
        (!e && !s.call(t, g)) ||
          (p &&
            ('length' == g ||
              (l && ('offset' == g || 'parent' == g)) ||
              (d &&
                ('buffer' == g || 'byteLength' == g || 'byteOffset' == g)) ||
              u(g, h))) ||
          v.push(g);
      return v;
    };
  },
  function (t, e, n) {
    var r = n(4)(n(2), 'WeakMap');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = function (t) {
      return t == t && !r(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
      };
    };
  },
  function (t, e, n) {
    var r = n(69);
    t.exports = function (t) {
      return null == t ? '' : r(t);
    };
  },
  function (t, e, n) {
    function r(t) {
      if ('string' == typeof t) return t;
      if (a(t)) return o(t, r) + '';
      if (u(t)) return f ? f.call(t) : '';
      var e = t + '';
      return '0' == e && 1 / t == -c ? '-0' : e;
    }
    var i = n(10),
      o = n(70),
      a = n(0),
      u = n(22),
      c = 1 / 0,
      s = i ? i.prototype : void 0,
      f = s ? s.toString : void 0;
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
        i[n] = e(t[n], n, t);
      return i;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  function (t, e, n) {
    var r = n(178);
    t.exports = function (t) {
      var e = r(t),
        n = e % 1;
      return e == e ? (n ? e - n : e) : 0;
    };
  },
  function (t, e, n) {
    var r = n(3),
      i = n(22),
      o = NaN,
      a = /^\s+|\s+$/g,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      f = parseInt;
    t.exports = function (t) {
      if ('number' == typeof t) return t;
      if (i(t)) return o;
      if (r(t)) {
        var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = r(e) ? e + '' : e;
      }
      if ('string' != typeof t) return 0 === t ? t : +t;
      t = t.replace(a, '');
      var n = c.test(t);
      return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
    };
  },
  function (t, e, n) {
    var r = n(75);
    t.exports = function (t, e, n) {
      '__proto__' == e && r
        ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (t[e] = n);
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = (function () {
        try {
          var t = r(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function (t, e) {
    t.exports = function () {
      return [];
    };
  },
  function (t, e, n) {
    var r = n(201),
      i = n(18);
    t.exports = function (t, e) {
      return t && r(t, e, i);
    };
  },
  function (t, e, n) {
    var r = n(77),
      i = n(205)(r);
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        t == t &&
          (void 0 !== n && (t = t <= n ? t : n),
          void 0 !== e && (t = t >= e ? t : e)),
        t
      );
    };
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'c', function () {
      return o;
    }),
      n.d(e, 'a', function () {
        return u;
      }),
      n.d(e, 'b', function () {
        return c;
      }),
      n.d(e, 'd', function () {
        return s;
      });
    var r = n(57),
      i = n.n(r),
      o = 'undefined' != typeof window,
      a = function (t, e) {
        return o ? t() : e;
      },
      u = a(function () {
        return i()(
          [
            'matches',
            'matchesSelector',
            'mozMatchesSelector',
            'msMatchesSelector',
            'oMatchesSelector',
            'webkitMatchesSelector',
          ],
          function (t) {
            return t in Element.prototype;
          }
        );
      }),
      c = a(function () {
        var t = document.createElement('i'),
          e = [
            'flex',
            '-webkit-flex',
            '-ms-flexbox',
            '-moz-box',
            '-webkit-box',
          ];
        try {
          for (var n = e.length, r = 0; r < n; r++) {
            var i = e[r];
            if (((t.style.display = i), t.style.display === i)) return i;
          }
          return '';
        } catch (t) {
          return '';
        }
      }, 'flex'),
      s = a(function () {
        var t = document.createElement('i');
        if (null == t.style.transform)
          for (
            var e = ['Webkit', 'Moz', 'ms'], n = e.length, r = 0;
            r < n;
            r++
          ) {
            var i = e[r] + 'Transform';
            if (void 0 !== t.style[i]) return i;
          }
        return 'transform';
      }, 'transform');
  },
  function (t, e, n) {
    var r = n(3),
      i = Object.create,
      o = (function () {
        function t() {}
        return function (e) {
          if (!r(e)) return {};
          if (i) return i(e);
          t.prototype = e;
          var n = new t();
          return (t.prototype = void 0), n;
        };
      })();
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(226),
      i = n(227),
      o = r
        ? function (t) {
            return r.get(t);
          }
        : i;
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(228),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      for (
        var e = t.name + '', n = r[e], o = i.call(r, e) ? n.length : 0;
        o--;

      ) {
        var a = n[o],
          u = a.func;
        if (null == u || u == t) return a.name;
      }
      return e;
    };
  },
  function (t, e, n) {
    n(85),
      n(87),
      n(89),
      n(234),
      n(235),
      n(236),
      n(237),
      n(238),
      (t.exports = n(239));
  },
  function (t, e, n) {
    var r = n(1);
    r.define(
      'brand',
      (t.exports = function (t) {
        function e() {
          var t = a.children(u),
            e = t.length && t.get(0) === n,
            i = r.env('editor');
          e ? i && t.remove() : (t.length && t.remove(), i || a.append(n));
        }
        var n,
          i = {},
          o = t('html'),
          a = t('body'),
          u = '.w-webflow-badge',
          c = window.location,
          s = /PhantomJS/i.test(navigator.userAgent);
        return (
          (i.ready = function () {
            var r = o.attr('data-wf-status'),
              i = o.attr('data-wf-domain') || '';
            /\.webflow\.io$/i.test(i) && c.hostname !== i && (r = !0),
              r &&
                !s &&
                ((n =
                  n ||
                  (function () {
                    var e = t('<a class="w-webflow-badge"></a>').attr(
                        'href',
                        'https://webflow.com?utm_campaign=brandjs'
                      ),
                      n = t('<img>')
                        .attr(
                          'src',
                          'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg'
                        )
                        .css({ marginRight: '8px', width: '16px' }),
                      r = t('<img>').attr(
                        'src',
                        'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg'
                      );
                    return e.append(n, r), e[0];
                  })()),
                e(),
                setTimeout(e, 500));
          }),
          i
        );
      })
    );
  },
  function (t, e, n) {
    var r = window.$,
      i = n(48) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = {};
      t.VERSION = '1.6.0-Webflow';
      var e = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        u = (n.concat, r.toString, r.hasOwnProperty),
        c = n.forEach,
        s = n.map,
        f = (n.reduce, n.reduceRight, n.filter),
        l = (n.every, n.some),
        d = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        v =
          (o.bind,
          (t.each = t.forEach = function (n, r, i) {
            if (null == n) return n;
            if (c && n.forEach === c) n.forEach(r, i);
            else if (n.length === +n.length) {
              for (var o = 0, a = n.length; o < a; o++)
                if (r.call(i, n[o], o, n) === e) return;
            } else {
              var u = t.keys(n);
              for (o = 0, a = u.length; o < a; o++)
                if (r.call(i, n[u[o]], u[o], n) === e) return;
            }
            return n;
          }));
      (t.map = t.collect = function (t, e, n) {
        var r = [];
        return null == t
          ? r
          : s && t.map === s
          ? t.map(e, n)
          : (v(t, function (t, i, o) {
              r.push(e.call(n, t, i, o));
            }),
            r);
      }),
        (t.find = t.detect = function (t, e, n) {
          var r;
          return (
            h(t, function (t, i, o) {
              if (e.call(n, t, i, o)) return (r = t), !0;
            }),
            r
          );
        }),
        (t.filter = t.select = function (t, e, n) {
          var r = [];
          return null == t
            ? r
            : f && t.filter === f
            ? t.filter(e, n)
            : (v(t, function (t, i, o) {
                e.call(n, t, i, o) && r.push(t);
              }),
              r);
        });
      var h = (t.some = t.any = function (n, r, i) {
        r || (r = t.identity);
        var o = !1;
        return null == n
          ? o
          : l && n.some === l
          ? n.some(r, i)
          : (v(n, function (t, n, a) {
              if (o || (o = r.call(i, t, n, a))) return e;
            }),
            !!o);
      });
      (t.contains = t.include = function (t, e) {
        return (
          null != t &&
          (d && t.indexOf === d
            ? -1 != t.indexOf(e)
            : h(t, function (t) {
                return t === e;
              }))
        );
      }),
        (t.delay = function (t, e) {
          var n = a.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, n);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, n, r;
          return function () {
            e ||
              ((e = !0),
              (n = arguments),
              (r = this),
              i.frame(function () {
                (e = !1), t.apply(r, n);
              }));
          };
        }),
        (t.debounce = function (e, n, r) {
          var i,
            o,
            a,
            u,
            c,
            s = function s() {
              var f = t.now() - u;
              f < n
                ? (i = setTimeout(s, n - f))
                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
            };
          return function () {
            (a = this), (o = arguments), (u = t.now());
            var f = r && !i;
            return (
              i || (i = setTimeout(s, n)),
              f && ((c = e.apply(a, o)), (a = o = null)),
              c
            );
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var n = 1, r = arguments.length; n < r; n++) {
            var i = arguments[n];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (p) return p(e);
          var n = [];
          for (var r in e) t.has(e, r) && n.push(r);
          return n;
        }),
        (t.has = function (t, e) {
          return u.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var g = /(.)^/,
        y = {
          "'": "'",
          '\\': '\\',
          '\r': 'r',
          '\n': 'n',
          '\u2028': 'u2028',
          '\u2029': 'u2029',
        },
        m = /\\|'|\r|\n|\u2028|\u2029/g,
        b = function (t) {
          return '\\' + y[t];
        };
      return (
        (t.template = function (e, n, r) {
          !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
          var i = RegExp(
              [
                (n.escape || g).source,
                (n.interpolate || g).source,
                (n.evaluate || g).source,
              ].join('|') + '|$',
              'g'
            ),
            o = 0,
            a = "__p+='";
          e.replace(i, function (t, n, r, i, u) {
            return (
              (a += e.slice(o, u).replace(m, b)),
              (o = u + t.length),
              n
                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : i && (a += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (a += "';\n"),
            n.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
            (a =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              a +
              'return __p;\n');
          try {
            var u = new Function(n.variable || 'obj', '_', a);
          } catch (t) {
            throw ((t.source = a), t);
          }
          var c = function (e) {
              return u.call(this, e, t);
            },
            s = n.variable || 'obj';
          return (c.source = 'function(' + s + '){\n' + a + '}'), c;
        }),
        t
      );
    })();
  },
  function (t, e, n) {
    var r = n(1),
      i = n(12);
    r.define(
      'dropdown',
      (t.exports = function (t, e) {
        function n() {
          (d = h && r.env('design')), (l = v.find(y)).each(o);
        }
        function o(n, i) {
          var o = t(i),
            l = t.data(i, y);
          l || (l = t.data(i, y, { open: !1, el: o, config: {} })),
            (l.list = o.children('.w-dropdown-list')),
            (l.toggle = o.children('.w-dropdown-toggle')),
            (l.links = l.list.children('.w-dropdown-link')),
            (l.outside = (function (n) {
              n.outside && v.off(f() + y, n.outside);
              return e.debounce(function (e) {
                if (n.open) {
                  var i = t(e.target);
                  if (!i.closest('.w-dropdown-toggle').length) {
                    var o = -1 === t.inArray(n.el[0], i.parents(y)),
                      a = r.env('editor');
                    if (o) {
                      if (a) {
                        var u =
                            1 === i.parents().length &&
                            1 === i.parents('svg').length,
                          c = i.parents('.w-editor-bem-EditorHoverControls')
                            .length;
                        if (u || c) return;
                      }
                      s(n);
                    }
                  }
                }
              });
            })(l)),
            (l.complete = (function (t) {
              return function () {
                t.list.removeClass(m),
                  t.toggle.removeClass(m),
                  t.manageZ && t.el.css('z-index', '');
              };
            })(l)),
            (l.leave = (function (t) {
              return function () {
                (t.hovering = !1), s(t);
              };
            })(l)),
            (l.moveOutside = (function (n) {
              return e.debounce(function (e) {
                if (n.open) {
                  var r = t(e.target),
                    i = -1 === t.inArray(n.el[0], r.parents(y));
                  if (i) {
                    var o = r.parents('.w-editor-bem-EditorHoverControls')
                        .length,
                      a = r.parents('.w-editor-bem-RTToolbar').length,
                      u = t('.w-editor-bem-EditorOverlay'),
                      c =
                        u.find('.w-editor-edit-outline').length ||
                        u.find('.w-editor-bem-RTToolbar').length;
                    if (o || a || c) return;
                    (n.hovering = !1), s(n);
                  }
                }
              });
            })(l)),
            o.off(y),
            l.toggle.off(y),
            a(l),
            l.nav && l.nav.off(y),
            (l.nav = o.closest('.w-nav')),
            l.nav.on(b, u(l)),
            d
              ? o.on('setting' + y, u(l))
              : (l.toggle.on(
                  f() + y,
                  (function (t) {
                    return e.debounce(function () {
                      t.open ? s(t) : c(t);
                    });
                  })(l)
                ),
                l.config.hover &&
                  l.toggle.on(
                    'mouseenter' + y,
                    (function (t) {
                      return function () {
                        (t.hovering = !0), c(t);
                      };
                    })(l)
                  ),
                o.on(b, u(l)),
                h && ((l.hovering = !1), s(l)));
        }
        function a(t) {
          var e = Number(t.el.css('z-index'));
          (t.manageZ = e === x || e === x + 1),
            (t.config = {
              hover: Boolean(t.el.attr('data-hover')) && !g,
              delay: Number(t.el.attr('data-delay')) || 0,
            });
        }
        function u(t) {
          return function (e, n) {
            return (
              (n = n || {}),
              'w-close' === e.type
                ? s(t)
                : 'setting' === e.type
                ? (a(t),
                  !0 === n.open && c(t),
                  void (!1 === n.open && s(t, !0)))
                : void 0
            );
          };
        }
        function c(e) {
          if (!e.open) {
            !(function (e) {
              var n = e.el[0];
              l.each(function (e, r) {
                var i = t(r);
                i.is(n) || i.has(n).length || i.triggerHandler(b);
              });
            })(e),
              (e.open = !0),
              e.list.addClass(m),
              e.toggle.addClass(m),
              w.intro(0, e.el[0]),
              r.redraw.up(),
              e.manageZ && e.el.css('z-index', x + 1);
            var n = r.env('editor');
            d || v.on(f() + y, e.outside),
              e.hovering && !n && e.el.on('mouseleave' + y, e.leave),
              e.hovering && n && v.on('mousemove' + y, e.moveOutside),
              window.clearTimeout(e.delayId);
          }
        }
        function s(t, e) {
          if (t.open && (!t.config.hover || !t.hovering)) {
            t.open = !1;
            var n = t.config;
            if (
              (w.outro(0, t.el[0]),
              v.off(f() + y, t.outside),
              t.el.off('mouseleave' + y, t.leave),
              v.off('mousemove' + y, t.moveOutside),
              window.clearTimeout(t.delayId),
              !n.delay || e)
            )
              return t.complete();
            t.delayId = window.setTimeout(t.complete, n.delay);
          }
        }
        function f() {
          return g ? 'tap' : 'mouseup';
        }
        var l,
          d,
          p = {},
          v = t(document),
          h = r.env(),
          g = r.env.touch,
          y = '.w-dropdown',
          m = 'w--open',
          b = 'w-close' + y,
          w = i.triggers,
          x = 900,
          _ = !1;
        return (
          (p.ready = n),
          (p.design = function () {
            _ &&
              v.find(y).each(function (e, n) {
                t(n).triggerHandler(b);
              }),
              (_ = !1),
              n();
          }),
          (p.preview = function () {
            (_ = !0), n();
          }),
          p
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = window.jQuery,
      i = {},
      o = [],
      a = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro ||
            ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro &&
            ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
        },
      };
    (i.triggers = {}),
      (i.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      (i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
          var n = o[e];
          n[0](0, n[1]);
        }
        (o = []), r.extend(i.triggers, a);
      }),
      (i.async = function () {
        for (var t in a) {
          var e = a[t];
          a.hasOwnProperty(t) &&
            (i.triggers[t] = function (t, n) {
              o.push([e, n]);
            });
        }
      }),
      i.async(),
      (t.exports = i);
  },
  function (t, e, n) {
    var r = n(1),
      i = n(90);
    r.define(
      'ix2',
      (t.exports = function () {
        return i;
      })
    );
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      i(), Object(u.c)({ store: l, rawData: t, allowEvents: !0 });
    }
    function i() {
      Object(u.e)(l);
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      n.d(e, 'init', function () {
        return r;
      }),
      n.d(e, 'destroy', function () {
        return i;
      }),
      n.d(e, 'store', function () {
        return l;
      });
    var o = n(49),
      a = n(105),
      u = n(56),
      c = n(1),
      s = n.n(c),
      f = n(44);
    n.d(e, 'actions', function () {
      return f;
    });
    var l = Object(o.b)(a.a);
    s.a.env() && Object(u.a)(l);
  },
  function (t, e, n) {
    'use strict';
    var r = n(52),
      i = n(94),
      o = n(95),
      a = '[object Null]',
      u = '[object Undefined]',
      c = r.a ? r.a.toStringTag : void 0;
    e.a = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? Object(i.a)(t)
        : Object(o.a)(t);
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(93),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = r.a || i || Function('return this')();
    e.a = o;
  },
  function (t, e, n) {
    'use strict';
    (function (t) {
      var n = 'object' == typeof t && t && t.Object === Object && t;
      e.a = n;
    }.call(e, n(23)));
  },
  function (t, e, n) {
    'use strict';
    var r = n(52),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r.a ? r.a.toStringTag : void 0;
    e.a = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = Object.prototype.toString;
    e.a = function (t) {
      return r.call(t);
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(97),
      i = Object(r.a)(Object.getPrototypeOf, Object);
    e.a = i;
  },
  function (t, e, n) {
    'use strict';
    e.a = function (t, e) {
      return function (n) {
        return t(e(n));
      };
    };
  },
  function (t, e, n) {
    'use strict';
    e.a = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  function (t, e, n) {
    t.exports = n(100);
  },
  function (t, e, n) {
    'use strict';
    (function (t, r) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i,
        o = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(101));
      i =
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : void 0 !== t
          ? t
          : r;
      var a = (0, o.default)(i);
      e.default = a;
    }.call(e, n(23), n(24)(t)));
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function (t) {
        var e,
          n = t.Symbol;
        return (
          'function' == typeof n
            ? n.observable
              ? (e = n.observable)
              : ((e = n('observable')), (n.observable = e))
            : (e = '@@observable'),
          e
        );
      });
  },
  function (t, e, n) {
    'use strict';
    function r(t, e) {
      var n = e && e.type;
      return (
        'Given action ' +
        ((n && '"' + n.toString() + '"') || 'an action') +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    e.a = function (t) {
      for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
        var a = e[o];
        'function' == typeof t[a] && (n[a] = t[a]);
      }
      var u,
        c = Object.keys(n);
      try {
        !(function (t) {
          Object.keys(t).forEach(function (e) {
            var n = t[e];
            if (void 0 === n(void 0, { type: i.a.INIT }))
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              n(void 0, {
                type:
                  '@@redux/PROBE_UNKNOWN_ACTION_' +
                  Math.random().toString(36).substring(7).split('').join('.'),
              })
            )
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined when probed with a random type. Don\'t try to handle ' +
                  i.a.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(n);
      } catch (t) {
        u = t;
      }
      return function () {
        var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          e = arguments[1];
        if (u) throw u;
        for (var i = !1, o = {}, a = 0; a < c.length; a++) {
          var s = c[a],
            f = n[s],
            l = t[s],
            d = f(l, e);
          if (void 0 === d) {
            var p = r(s, e);
            throw new Error(p);
          }
          (o[s] = d), (i = i || d !== l);
        }
        return i ? o : t;
      };
    };
    var i = n(50);
    n(51), n(53);
  },
  function (t, e, n) {
    'use strict';
  },
  function (t, e, n) {
    'use strict';
    n(54), Object.assign;
  },
  function (t, e, n) {
    'use strict';
    var r = n(49),
      i = n(106),
      o = n(107),
      a = n(109),
      u = n(110),
      c = n(113);
    e.a = Object(r.a)({
      ixData: i.a,
      ixRequest: o.a,
      ixSession: a.a,
      ixInstances: u.a,
      ixParameters: c.a,
    });
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return i;
    });
    var r = n(6),
      i = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Object.freeze({}),
          e = arguments[1];
        switch (e.type) {
          case r.l:
            return e.payload.ixData || Object.freeze({});
          default:
            return t;
        }
      };
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    n.d(e, 'a', function () {
      return l;
    });
    var i,
      o = n(6),
      a = n(13),
      u = n.n(a),
      c =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      s = { preview: {}, playback: {}, stop: {}, clear: {} },
      f = Object.create(
        null,
        ((i = {}),
        r(i, o.k, { value: 'preview' }),
        r(i, o.j, { value: 'playback' }),
        r(i, o.o, { value: 'stop' }),
        r(i, o.c, { value: 'clear' }),
        i)
      ),
      l = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          e = arguments[1];
        return e.type in f
          ? u()(t, r({}, f[e.type], { $set: c({}, e.payload) }))
          : t;
      };
  },
  function (t, e, n) {
    'use strict';
    t.exports = function (t, e, n, r, i, o, a, u) {
      if (!t) {
        var c;
        if (void 0 === e)
          c = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          );
        else {
          var s = [n, r, i, o, a, u],
            f = 0;
          (c = new Error(
            e.replace(/%s/g, function () {
              return s[f++];
            })
          )).name = 'Invariant Violation';
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    n.d(e, 'a', function () {
      return c;
    });
    var i = n(6),
      o = n(13),
      a = n.n(o),
      u = {
        active: !1,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
      },
      c = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
          e = arguments[1];
        switch (e.type) {
          case i.m:
            return a()(t, { active: { $set: !0 } });
          case i.n:
            return u;
          case i.d:
            return a()(t, { eventListeners: { $push: [e.payload] } });
          case i.e:
            return a()(t, {
              eventState: r({}, e.payload.stateKey, {
                $set: e.payload.newState,
              }),
            });
          case i.a:
            var n = e.payload,
              o = n.actionListId,
              c = n.isPlaying;
            return a()(t, { playbackState: r({}, o, { $set: c }) });
          case i.p:
            for (
              var s = e.payload,
                f = s.width,
                l = s.mediaQueries,
                d = l.length,
                p = null,
                v = 0;
              v < d;
              v++
            ) {
              var h = l[v],
                g = h.key,
                y = h.min,
                m = h.max;
              if (f >= y && f <= m) {
                p = g;
                break;
              }
            }
            return a()(t, {
              viewportWidth: { $set: f },
              mediaQueryKey: { $set: p },
            });
          default:
            return t;
        }
      };
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    n.d(e, 'a', function () {
      return f;
    });
    var i = n(6),
      o = n(13),
      a = n.n(o),
      u = n(55),
      c = function (t, e) {
        var n = t.position,
          r = t.parameterId,
          i = t.actionGroups,
          o = t.destinationKeys,
          c = t.smoothing,
          s = t.restingValue,
          f = e.payload.parameters,
          l = Math.max(1 - c, 0.01),
          d = f[r];
        null == d && ((l = 1), (d = s));
        var p = Math.max(d, 0) || 0,
          v = Object(u.b)(p - n),
          h = Object(u.b)(n + v * l),
          g = 100 * h;
        if (h === n && t.current) return t;
        for (
          var y = void 0,
            m = void 0,
            b = void 0,
            w = void 0,
            x = 0,
            _ = i.length;
          x < _;
          x++
        ) {
          var O = i[x],
            j = O.keyframe,
            I = O.actionItems;
          if (g >= j) {
            y = I[0];
            var E = i[x + 1],
              S = E && g !== j;
            (m = S ? E.actionItems[0] : null),
              S && ((b = j / 100), (w = (E.keyframe - j) / 100));
          }
        }
        var A = {};
        if (y && !m)
          for (var T = 0, k = o.length; T < k; T++) {
            var M = o[T];
            A[M] = y.config[M];
          }
        else if (y && m)
          for (
            var C = (h - b) / w,
              P = y.config.easing,
              L = Object(u.a)(P, C),
              D = 0,
              R = o.length;
            D < R;
            D++
          ) {
            var z = o[D],
              V = y.config[z],
              N = (m.config[z] - V) * L + V;
            A[z] = N;
          }
        return a()(t, { position: { $set: h }, current: { $set: A } });
      },
      s = function (t, e) {
        var n = t,
          r = n.active,
          i = n.origin,
          o = n.start,
          c = n.immediate,
          s = n.isGeneral,
          f = n.verbose,
          l = n.actionItem,
          d = n.destination,
          p = n.destinationKeys,
          v = l.config.easing,
          h = l.config,
          g = h.duration,
          y = h.delay;
        s ? (g = 0) : c && (g = y = 0);
        var m = e.payload.now;
        if (r && i) {
          var b = m - (o + y);
          if (f) {
            var w = m - o,
              x = g + y,
              _ = Object(u.b)(Math.min(Math.max(0, w / x), 1));
            t = a()(t, { verboseTimeElapsed: { $set: x * _ } });
          }
          if (b < 0) return t;
          var O = Object(u.b)(Math.min(Math.max(0, b / g), 1)),
            j = Object(u.a)(v, O),
            I = {},
            E = p.length
              ? p.reduce(function (t, e) {
                  var n = d[e],
                    r = parseFloat(i[e]) || 0,
                    o = (parseFloat(n) - r) * j + r;
                  return (t[e] = o), t;
                }, {})
              : null;
          return (
            (I.current = { $set: E }),
            (I.position = { $set: O }),
            1 === O && ((I.active = { $set: !1 }), (I.complete = { $set: !0 })),
            a()(t, I)
          );
        }
        return t;
      },
      f = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Object.freeze({}),
          e = arguments[1];
        switch (e.type) {
          case i.l:
            return e.payload.ixInstances || Object.freeze({});
          case i.n:
            return Object.freeze({});
          case i.f:
            var n = e.payload,
              o = n.instanceId,
              u = n.actionItem,
              f = n.element,
              l = n.eventId,
              d = n.eventTarget,
              p = n.actionListId,
              v = n.groupIndex,
              h = n.isCarrier,
              g = n.origin,
              y = n.destination,
              m = n.immediate,
              b = n.verbose,
              w = n.continuous,
              x = n.parameterId,
              _ = n.actionGroups,
              O = n.smoothing,
              j = n.restingValue,
              I = u.actionTypeId,
              E = void 0,
              S = (E = /^TRANSFORM_/.test(I)),
              A = !E && (E = /^STYLE_/.test(I)),
              T = !E && (E = /^GENERAL_/.test(I)),
              k = A && I.replace('STYLE_', '').toLowerCase(),
              M = Object.keys(y).filter(function (t) {
                return null != y[t];
              });
            return a()(
              t,
              r({}, o, {
                $set: {
                  id: o,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: g,
                  destination: y,
                  destinationKeys: M,
                  immediate: m,
                  verbose: b,
                  current: null,
                  actionItem: u,
                  element: f,
                  eventId: l,
                  eventTarget: d,
                  actionListId: p,
                  groupIndex: v,
                  isTransform: S,
                  isStyle: A,
                  isGeneral: T,
                  isCarrier: h,
                  styleProp: k,
                  continuous: w,
                  parameterId: x,
                  actionGroups: _,
                  smoothing: O,
                  restingValue: j,
                },
              })
            );
          case i.h:
            var C = e.payload.instanceId;
            return a()(
              t,
              r({}, C, {
                $merge: {
                  active: !0,
                  complete: !1,
                  start: window.performance.now(),
                },
              })
            );
          case i.g:
            var P = e.payload.instanceId;
            return a()(t, { $unset: [P] });
          case i.b:
            for (
              var L = t, D = Object.keys(t), R = D.length, z = 0;
              z < R;
              z++
            ) {
              var V = D[z],
                N = t[V],
                $ = N.continuous ? c : s;
              L = a()(L, r({}, V, { $set: $(N, e) }));
            }
            return L;
          default:
            return t;
        }
      };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      n.d(e, 'ease', function () {
        return a;
      }),
      n.d(e, 'easeIn', function () {
        return u;
      }),
      n.d(e, 'easeOut', function () {
        return c;
      }),
      n.d(e, 'easeInOut', function () {
        return s;
      }),
      (e.inQuad = function (t) {
        return Math.pow(t, 2);
      }),
      (e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1);
      }),
      (e.inOutQuad = function (t) {
        return (t /= 0.5) < 1
          ? 0.5 * Math.pow(t, 2)
          : -0.5 * ((t -= 2) * t - 2);
      }),
      (e.inCubic = function (t) {
        return Math.pow(t, 3);
      }),
      (e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1;
      }),
      (e.inOutCubic = function (t) {
        return (t /= 0.5) < 1
          ? 0.5 * Math.pow(t, 3)
          : 0.5 * (Math.pow(t - 2, 3) + 2);
      }),
      (e.inQuart = function (t) {
        return Math.pow(t, 4);
      }),
      (e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1);
      }),
      (e.inOutQuart = function (t) {
        return (t /= 0.5) < 1
          ? 0.5 * Math.pow(t, 4)
          : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
      }),
      (e.inQuint = function (t) {
        return Math.pow(t, 5);
      }),
      (e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1;
      }),
      (e.inOutQuint = function (t) {
        return (t /= 0.5) < 1
          ? 0.5 * Math.pow(t, 5)
          : 0.5 * (Math.pow(t - 2, 5) + 2);
      }),
      (e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      }),
      (e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2));
      }),
      (e.inOutSine = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
      }),
      (e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      }),
      (e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      }),
      (e.inOutExpo = function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (t - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --t));
      }),
      (e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
      }),
      (e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2));
      }),
      (e.inOutCirc = function (t) {
        return (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      }),
      (e.outBounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.inBack = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.inOutBack = function (t) {
        var e = o;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.inElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (n || (n = 0.3),
            r < 1
              ? ((r = 1), (e = n / 4))
              : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
            -r *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t - e) * (2 * Math.PI)) / n));
      }),
      (e.outElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (n || (n = 0.3),
            r < 1
              ? ((r = 1), (e = n / 4))
              : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
            r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) +
              1);
      }),
      (e.inOutElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        return 0 === t
          ? 0
          : 2 == (t /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            r < 1
              ? ((r = 1), (e = n / 4))
              : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
            t < 1
              ? r *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t - e) * (2 * Math.PI)) / n) *
                -0.5
              : r *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n) *
                  0.5 +
                1);
      }),
      (e.swingFromTo = function (t) {
        var e = o;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.bounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.bouncePast = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
          : t < 2.5 / 2.75
          ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
          : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
      });
    var r = n(112),
      i = n.n(r),
      o = 1.70158,
      a = i()(0.25, 0.1, 0.25, 1),
      u = i()(0.42, 0, 1, 1),
      c = i()(0, 0, 0.58, 1),
      s = i()(0.42, 0, 0.58, 1);
  },
  function (t, e) {
    function n(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function r(t, e) {
      return 3 * e - 6 * t;
    }
    function i(t) {
      return 3 * t;
    }
    function o(t, e, o) {
      return ((n(e, o) * t + r(e, o)) * t + i(e)) * t;
    }
    function a(t, e, o) {
      return 3 * n(e, o) * t * t + 2 * r(e, o) * t + i(e);
    }
    var u = 4,
      c = 0.001,
      s = 1e-7,
      f = 10,
      l = 11,
      d = 1 / (l - 1),
      p = 'function' == typeof Float32Array;
    t.exports = function (t, e, n, r) {
      function i(e) {
        for (var r = 0, i = 1, p = l - 1; i !== p && v[i] <= e; ++i) r += d;
        var h = r + ((e - v[--i]) / (v[i + 1] - v[i])) * d,
          g = a(h, t, n);
        return g >= c
          ? (function (t, e, n, r) {
              for (var i = 0; i < u; ++i) {
                var c = a(e, n, r);
                if (0 === c) return e;
                e -= (o(e, n, r) - t) / c;
              }
              return e;
            })(e, h, t, n)
          : 0 === g
          ? h
          : (function (t, e, n, r, i) {
              var a,
                u,
                c = 0;
              do {
                (a = o((u = e + (n - e) / 2), r, i) - t) > 0
                  ? (n = u)
                  : (e = u);
              } while (Math.abs(a) > s && ++c < f);
              return u;
            })(e, r, r + d, t, n);
      }
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error('bezier x values must be in [0, 1] range');
      var v = p ? new Float32Array(l) : new Array(l);
      if (t !== e || n !== r) for (var h = 0; h < l; ++h) v[h] = o(h * d, t, n);
      return function (a) {
        return t === e && n === r
          ? a
          : 0 === a
          ? 0
          : 1 === a
          ? 1
          : o(i(a), e, r);
      };
    };
  },
  function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return i;
    });
    var r = n(6),
      i = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments[1];
        switch (e.type) {
          case r.l:
            return e.payload.ixParameters || {};
          case r.n:
            return {};
          case r.i:
            var n = e.payload,
              i = n.key,
              o = n.value;
            return (t[i] = o), t;
          default:
            return t;
        }
      };
  },
  function (t, e, n) {
    var r = n(7),
      i = n(9),
      o = n(18);
    t.exports = function (t) {
      return function (e, n, a) {
        var u = Object(e);
        if (!i(e)) {
          var c = r(n, 3);
          (e = o(e)),
            (n = function (t) {
              return c(u[t], t, u);
            });
        }
        var s = t(e, n, a);
        return s > -1 ? u[c ? e[s] : s] : void 0;
      };
    };
  },
  function (t, e, n) {
    var r = n(116),
      i = n(166),
      o = n(67);
    t.exports = function (t) {
      var e = i(t);
      return 1 == e.length && e[0][2]
        ? o(e[0][0], e[0][1])
        : function (n) {
            return n === t || r(n, t, e);
          };
    };
  },
  function (t, e, n) {
    var r = n(58),
      i = n(62),
      o = 1,
      a = 2;
    t.exports = function (t, e, n, u) {
      var c = n.length,
        s = c,
        f = !u;
      if (null == t) return !s;
      for (t = Object(t); c--; ) {
        var l = n[c];
        if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
      }
      for (; ++c < s; ) {
        var d = (l = n[c])[0],
          p = t[d],
          v = l[1];
        if (f && l[2]) {
          if (void 0 === p && !(d in t)) return !1;
        } else {
          var h = new r();
          if (u) var g = u(p, v, d, t, e, h);
          if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1;
        }
      }
      return !0;
    };
  },
  function (t, e) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return !(
        n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)
      );
    };
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return n < 0 ? void 0 : e[n][1];
    };
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = function (t) {
      return r(this.__data__, t) > -1;
    };
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = function (t, e) {
      var n = this.__data__,
        i = r(n, t);
      return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
    };
  },
  function (t, e, n) {
    var r = n(14);
    t.exports = function () {
      (this.__data__ = new r()), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
        n = e.delete(t);
      return (this.size = e.size), n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(26),
      o = n(27),
      a = 200;
    t.exports = function (t, e) {
      var n = this.__data__;
      if (n instanceof r) {
        var u = n.__data__;
        if (!i || u.length < a - 1)
          return u.push([t, e]), (this.size = ++n.size), this;
        n = this.__data__ = new o(u);
      }
      return n.set(t, e), (this.size = n.size), this;
    };
  },
  function (t, e, n) {
    var r = n(59),
      i = n(130),
      o = n(3),
      a = n(61),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      f = c.toString,
      l = s.hasOwnProperty,
      d = RegExp(
        '^' +
          f
            .call(l)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    t.exports = function (t) {
      return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
    };
  },
  function (t, e, n) {
    var r = n(10),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
      return n.call(t);
    };
  },
  function (t, e, n) {
    var r = n(131),
      i = (function () {
        var t = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
        return t ? 'Symbol(src)_1.' + t : '';
      })();
    t.exports = function (t) {
      return !!i && i in t;
    };
  },
  function (t, e, n) {
    var r = n(2)['__core-js_shared__'];
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e, n) {
    var r = n(134),
      i = n(14),
      o = n(26);
    t.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new r(),
          map: new (o || i)(),
          string: new r(),
        });
    };
  },
  function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    var i = n(135),
      o = n(136),
      a = n(137),
      u = n(138),
      c = n(139);
    (r.prototype.clear = i),
      (r.prototype.delete = o),
      (r.prototype.get = a),
      (r.prototype.has = u),
      (r.prototype.set = c),
      (t.exports = r);
  },
  function (t, e, n) {
    var r = n(16);
    t.exports = function () {
      (this.__data__ = r ? r(null) : {}), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = '__lodash_hash_undefined__',
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (r) {
        var n = e[t];
        return n === i ? void 0 : n;
      }
      return o.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return r ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = '__lodash_hash_undefined__';
    t.exports = function (t, e) {
      var n = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = r && void 0 === e ? i : e),
        this
      );
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t) {
      var e = r(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t) {
      return r(this, t).get(t);
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t) {
      return r(this, t).has(t);
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t, e) {
      var n = r(this, t),
        i = n.size;
      return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
    };
  },
  function (t, e, n) {
    var r = n(58),
      i = n(63),
      o = n(151),
      a = n(155),
      u = n(35),
      c = n(0),
      s = n(28),
      f = n(30),
      l = 1,
      d = '[object Arguments]',
      p = '[object Array]',
      v = '[object Object]',
      h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, g, y, m) {
      var b = c(t),
        w = c(e),
        x = p,
        _ = p;
      b || (x = (x = u(t)) == d ? v : x), w || (_ = (_ = u(e)) == d ? v : _);
      var O = x == v,
        j = _ == v,
        I = x == _;
      if (I && s(t)) {
        if (!s(e)) return !1;
        (b = !0), (O = !1);
      }
      if (I && !O)
        return (
          m || (m = new r()),
          b || f(t) ? i(t, e, n, g, y, m) : o(t, e, x, n, g, y, m)
        );
      if (!(n & l)) {
        var E = O && h.call(t, '__wrapped__'),
          S = j && h.call(e, '__wrapped__');
        if (E || S) {
          var A = E ? t.value() : t,
            T = S ? e.value() : e;
          return m || (m = new r()), y(A, T, n, g, m);
        }
      }
      return !!I && (m || (m = new r()), a(t, e, n, g, y, m));
    };
  },
  function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new i(); ++e < n; ) this.add(t[e]);
    }
    var i = n(27),
      o = n(147),
      a = n(148);
    (r.prototype.add = r.prototype.push = o),
      (r.prototype.has = a),
      (t.exports = r);
  },
  function (t, e) {
    var n = '__lodash_hash_undefined__';
    t.exports = function (t) {
      return this.__data__.set(t, n), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
        if (e(t[n], n, t)) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, n) {
    var r = n(10),
      i = n(152),
      o = n(25),
      a = n(63),
      u = n(153),
      c = n(154),
      s = 1,
      f = 2,
      l = '[object Boolean]',
      d = '[object Date]',
      p = '[object Error]',
      v = '[object Map]',
      h = '[object Number]',
      g = '[object RegExp]',
      y = '[object Set]',
      m = '[object String]',
      b = '[object Symbol]',
      w = '[object ArrayBuffer]',
      x = '[object DataView]',
      _ = r ? r.prototype : void 0,
      O = _ ? _.valueOf : void 0;
    t.exports = function (t, e, n, r, _, j, I) {
      switch (n) {
        case x:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case w:
          return !(t.byteLength != e.byteLength || !j(new i(t), new i(e)));
        case l:
        case d:
        case h:
          return o(+t, +e);
        case p:
          return t.name == e.name && t.message == e.message;
        case g:
        case m:
          return t == e + '';
        case v:
          var E = u;
        case y:
          var S = r & s;
          if ((E || (E = c), t.size != e.size && !S)) return !1;
          var A = I.get(t);
          if (A) return A == e;
          (r |= f), I.set(t, e);
          var T = a(E(t), E(e), r, _, j, I);
          return I.delete(t), T;
        case b:
          if (O) return O.call(t) == O.call(e);
      }
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(2).Uint8Array;
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t, r) {
          n[++e] = [r, t];
        }),
        n
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(18),
      i = 1,
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
      var s = n & i,
        f = r(t),
        l = f.length;
      if (l != r(e).length && !s) return !1;
      for (var d = l; d--; ) {
        var p = f[d];
        if (!(s ? p in e : o.call(e, p))) return !1;
      }
      var v = c.get(t);
      if (v && c.get(e)) return v == e;
      var h = !0;
      c.set(t, e), c.set(e, t);
      for (var g = s; ++d < l; ) {
        var y = t[(p = f[d])],
          m = e[p];
        if (a) var b = s ? a(m, y, p, e, t, c) : a(y, m, p, t, e, c);
        if (!(void 0 === b ? y === m || u(y, m, n, a, c) : b)) {
          h = !1;
          break;
        }
        g || (g = 'constructor' == p);
      }
      if (h && !g) {
        var w = t.constructor,
          x = e.constructor;
        w != x &&
          'constructor' in t &&
          'constructor' in e &&
          !(
            'function' == typeof w &&
            w instanceof w &&
            'function' == typeof x &&
            x instanceof x
          ) &&
          (h = !1);
      }
      return c.delete(t), c.delete(e), h;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
      return r;
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(5),
      o = '[object Arguments]';
    t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  },
  function (t, e) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(31),
      o = n(5),
      a = {};
    (a['[object Float32Array]'] = a['[object Float64Array]'] = a[
      '[object Int8Array]'
    ] = a['[object Int16Array]'] = a['[object Int32Array]'] = a[
      '[object Uint8Array]'
    ] = a['[object Uint8ClampedArray]'] = a['[object Uint16Array]'] = a[
      '[object Uint32Array]'
    ] = !0),
      (a['[object Arguments]'] = a['[object Array]'] = a[
        '[object ArrayBuffer]'
      ] = a['[object Boolean]'] = a['[object DataView]'] = a[
        '[object Date]'
      ] = a['[object Error]'] = a['[object Function]'] = a['[object Map]'] = a[
        '[object Number]'
      ] = a['[object Object]'] = a['[object RegExp]'] = a['[object Set]'] = a[
        '[object String]'
      ] = a['[object WeakMap]'] = !1),
      (t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)];
      });
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(60),
        i = 'object' == typeof e && e && !e.nodeType && e,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = (function () {
          try {
            return a && a.binding && a.binding('util');
          } catch (t) {}
        })();
      t.exports = u;
    }.call(e, n(24)(t)));
  },
  function (t, e, n) {
    var r = n(34)(Object.keys, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(4)(n(2), 'DataView');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(4)(n(2), 'Promise');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(4)(n(2), 'Set');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(66),
      i = n(18);
    t.exports = function (t) {
      for (var e = i(t), n = e.length; n--; ) {
        var o = e[n],
          a = t[o];
        e[n] = [o, a, r(a)];
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(62),
      i = n(20),
      o = n(171),
      a = n(37),
      u = n(66),
      c = n(67),
      s = n(11),
      f = 1,
      l = 2;
    t.exports = function (t, e) {
      return a(t) && u(e)
        ? c(s(t), e)
        : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
          };
    };
  },
  function (t, e, n) {
    var r = /^\./,
      i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = n(169)(function (t) {
        var e = [];
        return (
          r.test(t) && e.push(''),
          t.replace(i, function (t, n, r, i) {
            e.push(r ? i.replace(o, '$1') : n || t);
          }),
          e
        );
      });
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(170),
      i = 500;
    t.exports = function (t) {
      var e = r(t, function (t) {
          return n.size === i && n.clear(), t;
        }),
        n = e.cache;
      return e;
    };
  },
  function (t, e, n) {
    function r(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError(o);
      var n = function () {
        var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (r.Cache || i)()), n;
    }
    var i = n(27),
      o = 'Expected a function';
    (r.Cache = i), (t.exports = r);
  },
  function (t, e, n) {
    var r = n(172),
      i = n(173);
    t.exports = function (t, e) {
      return null != t && i(t, e, r);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  function (t, e, n) {
    var r = n(21),
      i = n(19),
      o = n(0),
      a = n(29),
      u = n(31),
      c = n(11);
    t.exports = function (t, e, n) {
      for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
        var d = c(e[s]);
        if (!(l = null != t && n(t, d))) break;
        t = t[d];
      }
      return l || ++s != f
        ? l
        : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
    };
  },
  function (t, e, n) {
    var r = n(71),
      i = n(175),
      o = n(37),
      a = n(11);
    t.exports = function (t) {
      return o(t) ? r(a(t)) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(36);
    t.exports = function (t) {
      return function (e) {
        return r(e, t);
      };
    };
  },
  function (t, e, n) {
    var r = n(177),
      i = n(7),
      o = n(72),
      a = Math.max;
    t.exports = function (t, e, n) {
      var u = null == t ? 0 : t.length;
      if (!u) return -1;
      var c = null == n ? 0 : o(n);
      return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (e(t[o], o, t)) return o;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(73),
      i = 1 / 0,
      o = 1.7976931348623157e308;
    t.exports = function (t) {
      if (!t) return 0 === t ? t : 0;
      if ((t = r(t)) === i || t === -i) return (t < 0 ? -1 : 1) * o;
      return t == t ? t : 0;
    };
  },
  function (t, e, n) {
    var r = n(32),
      i = n(35),
      o = n(9),
      a = n(180),
      u = n(181),
      c = '[object Map]',
      s = '[object Set]';
    t.exports = function (t) {
      if (null == t) return 0;
      if (o(t)) return a(t) ? u(t) : t.length;
      var e = i(t);
      return e == c || e == s ? t.size : r(t).length;
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(0),
      o = n(5),
      a = '[object String]';
    t.exports = function (t) {
      return 'string' == typeof t || (!i(t) && o(t) && r(t) == a);
    };
  },
  function (t, e, n) {
    var r = n(182),
      i = n(183),
      o = n(184);
    t.exports = function (t) {
      return i(t) ? o(t) : r(t);
    };
  },
  function (t, e, n) {
    var r = n(71)('length');
    t.exports = r;
  },
  function (t, e) {
    var n = RegExp(
      '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
    );
    t.exports = function (t) {
      return n.test(t);
    };
  },
  function (t, e) {
    var n = '[\\ud800-\\udfff]',
      r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
      i = '\\ud83c[\\udffb-\\udfff]',
      o = '[^\\ud800-\\udfff]',
      a = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      u = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      c = '(?:' + r + '|' + i + ')' + '?',
      s =
        '[\\ufe0e\\ufe0f]?' +
        c +
        ('(?:\\u200d(?:' +
          [o, a, u].join('|') +
          ')[\\ufe0e\\ufe0f]?' +
          c +
          ')*'),
      f = '(?:' + [o + r + '?', r, a, u, n].join('|') + ')',
      l = RegExp(i + '(?=' + i + ')|' + f + s, 'g');
    t.exports = function (t) {
      for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(7),
      i = n(186),
      o = n(187);
    t.exports = function (t, e) {
      return o(t, i(r(e)));
    };
  },
  function (t, e) {
    var n = 'Expected a function';
    t.exports = function (t) {
      if ('function' != typeof t) throw new TypeError(n);
      return function () {
        var e = arguments;
        switch (e.length) {
          case 0:
            return !t.call(this);
          case 1:
            return !t.call(this, e[0]);
          case 2:
            return !t.call(this, e[0], e[1]);
          case 3:
            return !t.call(this, e[0], e[1], e[2]);
        }
        return !t.apply(this, e);
      };
    };
  },
  function (t, e, n) {
    var r = n(70),
      i = n(7),
      o = n(188),
      a = n(191);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n = r(a(t), function (t) {
        return [t];
      });
      return (
        (e = i(e)),
        o(t, n, function (t, n) {
          return e(t, n[0]);
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(36),
      i = n(189),
      o = n(21);
    t.exports = function (t, e, n) {
      for (var a = -1, u = e.length, c = {}; ++a < u; ) {
        var s = e[a],
          f = r(t, s);
        n(f, s) && i(c, o(s, t), f);
      }
      return c;
    };
  },
  function (t, e, n) {
    var r = n(190),
      i = n(21),
      o = n(29),
      a = n(3),
      u = n(11);
    t.exports = function (t, e, n, c) {
      if (!a(t)) return t;
      for (
        var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t;
        null != d && ++s < f;

      ) {
        var p = u(e[s]),
          v = n;
        if (s != l) {
          var h = d[p];
          void 0 === (v = c ? c(h, p, d) : void 0) &&
            (v = a(h) ? h : o(e[s + 1]) ? [] : {});
        }
        r(d, p, v), (d = d[p]);
      }
      return t;
    };
  },
  function (t, e, n) {
    var r = n(74),
      i = n(25),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
      var a = t[e];
      (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
    };
  },
  function (t, e, n) {
    var r = n(192),
      i = n(193),
      o = n(196);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e, n) {
    var r = n(39),
      i = n(0);
    t.exports = function (t, e, n) {
      var o = e(t);
      return i(t) ? o : r(o, n(t));
    };
  },
  function (t, e, n) {
    var r = n(39),
      i = n(194),
      o = n(195),
      a = n(76),
      u = Object.getOwnPropertySymbols
        ? function (t) {
            for (var e = []; t; ) r(e, o(t)), (t = i(t));
            return e;
          }
        : a;
    t.exports = u;
  },
  function (t, e, n) {
    var r = n(34)(Object.getPrototypeOf, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(34),
      i = n(76),
      o = Object.getOwnPropertySymbols,
      a = o ? r(o, Object) : i;
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(64),
      i = n(197),
      o = n(9);
    t.exports = function (t) {
      return o(t) ? r(t, !0) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(3),
      i = n(33),
      o = n(198),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return o(t);
      var e = i(t),
        n = [];
      for (var u in t)
        ('constructor' != u || (!e && a.call(t, u))) && n.push(u);
      return n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      if (null != t) for (var n in Object(t)) e.push(n);
      return e;
    };
  },
  function (t, e, n) {
    var r = n(32),
      i = n(35),
      o = n(19),
      a = n(0),
      u = n(9),
      c = n(28),
      s = n(33),
      f = n(30),
      l = '[object Map]',
      d = '[object Set]',
      p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (null == t) return !0;
      if (
        u(t) &&
        (a(t) ||
          'string' == typeof t ||
          'function' == typeof t.splice ||
          c(t) ||
          f(t) ||
          o(t))
      )
        return !t.length;
      var e = i(t);
      if (e == l || e == d) return !t.size;
      if (s(t)) return !r(t).length;
      for (var n in t) if (p.call(t, n)) return !1;
      return !0;
    };
  },
  function (t, e, n) {
    var r = n(74),
      i = n(77),
      o = n(7);
    t.exports = function (t, e) {
      var n = {};
      return (
        (e = o(e, 3)),
        i(t, function (t, i, o) {
          r(n, i, e(t, i, o));
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(202)();
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e, n, r) {
        for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
          var c = a[t ? u : ++i];
          if (!1 === n(o[c], c, o)) break;
        }
        return e;
      };
    };
  },
  function (t, e, n) {
    var r = n(204),
      i = n(78),
      o = n(206),
      a = n(0);
    t.exports = function (t, e) {
      return (a(t) ? r : i)(t, o(e));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (
        var n = -1, r = null == t ? 0 : t.length;
        ++n < r && !1 !== e(t[n], n, t);

      );
      return t;
    };
  },
  function (t, e, n) {
    var r = n(9);
    t.exports = function (t, e) {
      return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return t(n, i);
        for (
          var o = n.length, a = e ? o : -1, u = Object(n);
          (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

        );
        return n;
      };
    };
  },
  function (t, e, n) {
    var r = n(38);
    t.exports = function (t) {
      return 'function' == typeof t ? t : r;
    };
  },
  function (t, e, n) {
    var r = n(79),
      i = n(69),
      o = n(72),
      a = n(68);
    t.exports = function (t, e, n) {
      (t = a(t)), (e = i(e));
      var u = t.length,
        c = (n = void 0 === n ? u : r(o(n), 0, u));
      return (n -= e.length) >= 0 && t.slice(n, c) == e;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t || t != t ? e : t;
    };
  },
  function (t, e, n) {
    var r = n(210),
      i = n(78),
      o = n(7),
      a = n(211),
      u = n(0);
    t.exports = function (t, e, n) {
      var c = u(t) ? r : a,
        s = arguments.length < 3;
      return c(t, o(e, 4), n, s, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      var i = -1,
        o = null == t ? 0 : t.length;
      for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
      return n;
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i) {
      return (
        i(t, function (t, i, o) {
          n = r ? ((r = !1), t) : e(n, t, i, o);
        }),
        n
      );
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setStyle = function (t, e, n) {
        t.style[e] = n;
      }),
      (e.getStyle = function (t, e) {
        return t.style[e];
      }),
      (e.getProperty = function (t, e) {
        return t[e];
      }),
      (e.matchSelector = function (t) {
        return function (e) {
          return e[i.a](t);
        };
      }),
      (e.getQuerySelector = function (t) {
        var e = t.id,
          n = t.selector;
        if (e) {
          var i = e;
          if (-1 !== e.indexOf(r.n)) {
            var o = e.split(r.n),
              a = o[0];
            if (((i = o[1]), a !== document.documentElement.getAttribute(r.C)))
              return null;
          }
          return '[data-w-id="' + i + '"]';
        }
        return n;
      }),
      (e.getValidDocument = function (t) {
        return null == t || t === document.documentElement.getAttribute(r.C)
          ? document
          : null;
      }),
      (e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(
          document.querySelectorAll(e ? t + ' ' + e : t)
        );
      }),
      (e.elementContains = function (t, e) {
        return t.contains(e);
      }),
      (e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode;
      }),
      (e.getChildElements = function () {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [],
            n = 0,
            r = t.length;
          n < r;
          n++
        ) {
          var i = t[n].children,
            o = i.length;
          if (o) for (var a = 0; a < o; a++) e.push(i[a]);
        }
        return e;
      }),
      (e.getSiblingElements = function () {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [],
            n = [],
            r = 0,
            i = t.length;
          r < i;
          r++
        ) {
          var o = t[r].parentNode;
          if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
            n.push(o);
            for (var a = o.firstElementChild; null != a; )
              -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
          }
        }
        return e;
      });
    var r = n(43),
      i = n(80);
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var i,
      o = n(214),
      a = n.n(o),
      u = n(20),
      c = n.n(u),
      s = n(233),
      f = n.n(s),
      l = n(56),
      d = n(40),
      p = n(44),
      v = n(42),
      h =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      y = function (t) {
        return function (e) {
          return (
            !('object' !== (void 0 === e ? 'undefined' : g(e)) || !t(e)) || e
          );
        };
      },
      m = y(function (t) {
        return t.element === t.nativeEvent.target;
      }),
      b = y(function (t) {
        var e = t.element,
          n = t.nativeEvent;
        return e.contains(n.target);
      }),
      w = a()([m, b]),
      x = function (t, e) {
        var n = t.store,
          r = t.event,
          i = t.element,
          o = r.action,
          a = r.id,
          u = o.config,
          s = u.actionListId,
          f = u.autoStopEventId;
        if (f) {
          var d = n.getState().ixData.events;
          Object(l.d)({
            store: n,
            eventId: f,
            actionListId: c()(d[f], 'action.config.actionListId'),
          });
        }
        return (
          Object(l.d)({ store: n, eventId: a, actionListId: s }),
          Object(l.b)({
            store: n,
            eventId: a,
            eventTarget: i,
            actionListId: s,
          }),
          e
        );
      },
      _ = function (t, e) {
        return function (n, r) {
          return !0 === t(n, r) ? e(n, r) : r;
        };
      },
      O = { handler: _(w, x) },
      j = h({}, O, { types: [v.a, v.b].join(' ') }),
      I = [
        { target: window, types: 'resize orientationchange' },
        { target: document, types: 'scroll readystatechange IX2_PREVIEW_LOAD' },
      ],
      E = { types: [{ target: document, types: 'scroll' }] },
      S = (function () {
        var t = void 0 !== window.pageXOffset,
          e =
            'CSS1Compat' === document.compatMode
              ? document.documentElement
              : document.body;
        return function () {
          return {
            scrollLeft: t ? window.pageXOffset : e.scrollLeft,
            scrollTop: t ? window.pageYOffset : e.scrollTop,
            stiffScrollTop: f()(
              t ? window.pageYOffset : e.scrollTop,
              0,
              e.scrollHeight - window.innerHeight
            ),
            scrollWidth: e.scrollWidth,
            scrollHeight: e.scrollHeight,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        };
      })(),
      A = function (t) {
        return function (e, n) {
          var r =
              -1 !== [v.a, v.b].indexOf(e.nativeEvent.type)
                ? e.nativeEvent.type === v.a
                : n.isActive,
            i = h({}, n, { isActive: r });
          return n && i.isActive === n.isActive ? i : t(e, i) || i;
        };
      },
      T = function (t) {
        return function (e, n) {
          var r = {
            elementHovered: (function (t) {
              var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
              if ('mouseover' === r && a) return !0;
              var u = e.contains(o);
              return !('mouseout' !== r || !a || !u);
            })(e),
          };
          return (n ? r.elementHovered !== n.elementHovered : r.elementHovered)
            ? t(e, r) || r
            : r;
        };
      },
      k = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = S(),
            i = r.stiffScrollTop,
            o = r.scrollHeight,
            a = r.innerHeight,
            u = e.event,
            c = u.config,
            s = u.eventTypeId,
            f = c.scrollOffsetValue,
            l = 'PX' === c.scrollOffsetUnit,
            d = o - a,
            p = Number((i / d).toFixed(2));
          if (n && n.percentTop === p) return n;
          var g = (l ? f : (a * (f || 0)) / 100) / d,
            y = n ? p > n.percentTop : void 0,
            m = n ? n.scrollingDown !== y : void 0,
            b = n ? (m ? p : n.anchorTop) : 0,
            w = s === v.r ? p >= b + g : p <= b - g,
            x = h({}, n, {
              percentTop: p,
              inBounds: w,
              anchorTop: b,
              scrollingDown: y,
            });
          return n && w && (m || x.inBounds !== n.inBounds) ? t(e, x) || x : x;
        };
      },
      M = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return h({}, j, {
          handler: _(
            t ? w : m,
            A(function (t, e) {
              return e.isActive ? O.handler(t, e) : e;
            })
          ),
        });
      },
      C = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return h({}, j, {
          handler: _(
            t ? w : m,
            A(function (t, e) {
              return e.isActive ? e : O.handler(t, e);
            })
          ),
        });
      },
      P = h({}, E, {
        handler: (function (t) {
          return function (e, n) {
            var r = h({}, n, {
              elementVisible: (function (t) {
                var e = t.element,
                  n = t.event.config,
                  r = S(),
                  i = r.clientWidth,
                  o = r.clientHeight,
                  a = n.scrollOffsetValue,
                  u = 'PX' === n.scrollOffsetUnit ? a : (o * (a || 0)) / 100;
                return (function (t, e) {
                  return !(
                    t.left > e.right ||
                    t.right < e.left ||
                    t.top > e.bottom ||
                    t.bottom < e.top
                  );
                })(e.getBoundingClientRect(), {
                  left: 0,
                  top: u,
                  right: i,
                  bottom: o - u,
                });
              })(e),
            });
            return (
              n ? r.elementVisible !== n.elementVisible : r.elementVisible
            )
              ? t(e, r) || r
              : r;
          };
        })(function (t, e) {
          var n = e.elementVisible,
            r = t.event;
          return !t.store.getState().ixData.events[
            r.action.config.autoStopEventId
          ] && e.triggered
            ? e
            : (r.eventTypeId === v.v) === n
            ? (x(t), h({}, e, { triggered: !0 }))
            : e;
        }),
      });
    e.a =
      ((i = {}),
      r(i, v.x, M()),
      r(i, v.y, C()),
      r(i, v.d, M()),
      r(i, v.c, C()),
      r(i, v.n, M(!1)),
      r(i, v.m, C(!1)),
      r(i, v.z, M()),
      r(i, v.A, C()),
      r(i, v.f, h({}, O, { types: 'click' })),
      r(
        i,
        v.k,
        h({ types: 'click' }, O, {
          handler: _(w, function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clickCount: 1 },
              n = e.clickCount,
              r = (function (t, e) {
                var n = {};
                for (var r in t)
                  e.indexOf(r) >= 0 ||
                    (Object.prototype.hasOwnProperty.call(t, r) &&
                      (n[r] = t[r]));
                return n;
              })(e, ['clickCount']);
            return (
              n % 2 == 0 && ((n = 0), (r = x(t, r))),
              h({ clickCount: n + 1 }, r)
            );
          }),
        })
      ),
      r(i, v.g, h({}, O, { types: 'mousedown' })),
      r(i, v.l, h({}, O, { types: 'mouseup' })),
      r(i, v.j, {
        types: 'mouseover mouseout',
        handler: _(
          w,
          T(function (t, e) {
            e.elementHovered && x(t);
          })
        ),
      }),
      r(i, v.i, {
        types: 'mouseover mouseout',
        handler: _(
          w,
          T(function (t, e) {
            e.elementHovered || x(t);
          })
        ),
      }),
      r(i, v.h, {
        types: 'mousemove mouseout scroll',
        handler: function (t) {
          var e = t.store,
            n = t.element,
            r = t.eventConfig,
            i = t.nativeEvent,
            o = t.eventStateKey,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            u = r.basedOn,
            c = r.selectedAxis,
            s = r.continuousParameterGroupId,
            f = r.reverse,
            l = r.restingState,
            h = void 0 === l ? 0 : l,
            g = i.clientX,
            y = void 0 === g ? a.clientX : g,
            m = i.clientY,
            b = void 0 === m ? a.clientY : m,
            x = i.pageX,
            _ = void 0 === x ? a.pageX : x,
            O = i.pageY,
            j = void 0 === O ? a.pageY : O,
            I = 'X_AXIS' === c,
            E = 'mouseout' === i.type,
            A = h / 100,
            T = s,
            k = !1;
          switch (u) {
            case v.B:
              if (E) break;
              var M = S(),
                C = M.scrollLeft,
                P = M.scrollTop;
              A = I
                ? Math.min(C + y, window.innerWidth) / window.innerWidth
                : Math.min(P + b, window.innerHeight) / window.innerHeight;
              break;
            case v.o:
              if (E) break;
              var L = S(),
                D = L.scrollLeft,
                R = L.scrollTop,
                z = L.scrollWidth,
                V = L.scrollHeight;
              A = I ? Math.min(D + _, z) / z : Math.min(R + j, V) / V;
              break;
            case v.e:
            default:
              T = Object(d.i)(o, s);
              var N = 0 === i.type.indexOf('mouse');
              if (N && !0 !== w({ element: n, nativeEvent: i })) break;
              var $ = n.getBoundingClientRect(),
                F = $.left,
                G = $.top,
                W = $.width,
                X = $.height;
              if (
                !N &&
                !(function (t, e) {
                  return (
                    t.left > e.left &&
                    t.left < e.right &&
                    t.top > e.top &&
                    t.top < e.bottom
                  );
                })({ left: y, top: b }, $)
              )
                break;
              (k = !0), (A = I ? (y - F) / W : (b - G) / X);
          }
          return (
            (u !== v.e || k || k !== a.elementHovered) &&
              ((A = f ? 1 - A : A),
              e.dispatch(Object(p.parameterChanged)(T, A))),
            { elementHovered: k, clientX: y, clientY: b, pageX: _, pageY: j }
          );
        },
      }),
      r(i, v.q, {
        types: I,
        handler: function (t) {
          var e = t.store,
            n = t.eventConfig,
            r = n.continuousParameterGroupId,
            i = n.reverse,
            o = S(),
            a = o.scrollTop / (o.scrollHeight - o.clientHeight);
          (a = i ? 1 - a : a), e.dispatch(Object(p.parameterChanged)(r, a));
        },
      }),
      r(i, v.u, {
        types: I,
        handler: function (t) {
          var e = t.element,
            n = t.store,
            r = t.eventConfig,
            i = t.eventStateKey,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { scrollPercent: 0 },
            a = S(),
            u = a.scrollLeft,
            c = a.scrollTop,
            s = a.scrollWidth,
            f = a.scrollHeight,
            l = a.clientWidth,
            h = a.clientHeight,
            g = s - l,
            y = f - h,
            m = r.basedOn,
            b = r.selectedAxis,
            w = r.continuousParameterGroupId,
            x = r.startsEntering,
            _ = r.startsExiting,
            O = r.addEndOffset,
            j = r.addStartOffset,
            I = r.addOffsetValue,
            E = void 0 === I ? 0 : I,
            A = r.endOffsetValue,
            T = void 0 === A ? 0 : A,
            k = 'X_AXIS' === b;
          if (m === v.B) {
            var M = k ? u / g : c / y;
            return (
              M !== o.scrollPercent &&
                n.dispatch(Object(p.parameterChanged)(w, M)),
              { scrollPercent: M }
            );
          }
          var C = Object(d.i)(i, w),
            P = e.getBoundingClientRect(),
            L = (j ? E : 0) / 100,
            D = (O ? T : 0) / 100;
          (L = x ? L : 1 - L), (D = _ ? D : 1 - D);
          var R = P.top + Math.min(P.height * L, h),
            z = P.top + P.height * D - R,
            V = Math.min(h + z, y),
            N = Math.min(Math.max(0, h - R), V) / V;
          return (
            N !== o.scrollPercent &&
              n.dispatch(Object(p.parameterChanged)(C, N)),
            { scrollPercent: N }
          );
        },
      }),
      r(i, v.v, P),
      r(i, v.w, P),
      r(
        i,
        v.r,
        h({}, E, {
          handler: k(function (t, e) {
            e.scrollingDown && x(t);
          }),
        })
      ),
      r(
        i,
        v.s,
        h({}, E, {
          handler: k(function (t, e) {
            e.scrollingDown || x(t);
          }),
        })
      ),
      r(i, v.p, {
        types: 'readystatechange IX2_PREVIEW_LOAD',
        handler: _(
          m,
          (function (t) {
            return function (e, n) {
              var r = { finished: 'complete' === document.readyState };
              return !r.finished || (n && n.finshed) || t(e), r;
            };
          })(x)
        ),
      }),
      r(i, v.t, {
        types: 'readystatechange IX2_PREVIEW_LOAD',
        handler: _(
          m,
          (function (t) {
            return function (e, n) {
              return n || t(e), { started: !0 };
            };
          })(x)
        ),
      }),
      i);
  },
  function (t, e, n) {
    var r = n(215)();
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(45),
      i = n(216),
      o = n(82),
      a = n(83),
      u = n(0),
      c = n(229),
      s = 200,
      f = 'Expected a function',
      l = 8,
      d = 32,
      p = 128,
      v = 256;
    t.exports = function (t) {
      return i(function (e) {
        var n = e.length,
          i = n,
          h = r.prototype.thru;
        for (t && e.reverse(); i--; ) {
          var g = e[i];
          if ('function' != typeof g) throw new TypeError(f);
          if (h && !y && 'wrapper' == a(g)) var y = new r([], !0);
        }
        for (i = y ? i : n; ++i < n; ) {
          g = e[i];
          var m = a(g),
            b = 'wrapper' == m ? o(g) : void 0;
          y =
            b && c(b[0]) && b[1] == (p | l | d | v) && !b[4].length && 1 == b[9]
              ? y[a(b[0])].apply(y, b[3])
              : 1 == g.length && c(g)
              ? y[m]()
              : y.thru(g);
        }
        return function () {
          var t = arguments,
            r = t[0];
          if (y && 1 == t.length && u(r) && r.length >= s)
            return y.plant(r).value();
          for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
            o = e[i].call(this, o);
          return o;
        };
      });
    };
  },
  function (t, e, n) {
    var r = n(217),
      i = n(220),
      o = n(222);
    t.exports = function (t) {
      return o(i(t, void 0, r), t + '');
    };
  },
  function (t, e, n) {
    var r = n(218);
    t.exports = function (t) {
      return null != t && t.length ? r(t, 1) : [];
    };
  },
  function (t, e, n) {
    function r(t, e, n, a, u) {
      var c = -1,
        s = t.length;
      for (n || (n = o), u || (u = []); ++c < s; ) {
        var f = t[c];
        e > 0 && n(f)
          ? e > 1
            ? r(f, e - 1, n, a, u)
            : i(u, f)
          : a || (u[u.length] = f);
      }
      return u;
    }
    var i = n(39),
      o = n(219);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(10),
      i = n(19),
      o = n(0),
      a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  },
  function (t, e, n) {
    var r = n(221),
      i = Math.max;
    t.exports = function (t, e, n) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
            ++a < u;

          )
            c[a] = o[e + a];
          a = -1;
          for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
          return (s[e] = n(c)), r(t, this, s);
        }
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2]);
      }
      return t.apply(e, n);
    };
  },
  function (t, e, n) {
    var r = n(223),
      i = n(225)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(224),
      i = n(75),
      o = n(38),
      a = i
        ? function (t, e) {
            return i(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: r(e),
              writable: !0,
            });
          }
        : o;
    t.exports = a;
  },
  function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, e) {
    var n = 800,
      r = 16,
      i = Date.now;
    t.exports = function (t) {
      var e = 0,
        o = 0;
      return function () {
        var a = i(),
          u = r - (a - o);
        if (((o = a), u > 0)) {
          if (++e >= n) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function (t, e, n) {
    var r = n(65),
      i = r && new r();
    t.exports = i;
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(47),
      i = n(82),
      o = n(83),
      a = n(230);
    t.exports = function (t) {
      var e = o(t),
        n = a[e];
      if ('function' != typeof n || !(e in r.prototype)) return !1;
      if (t === n) return !0;
      var u = i(n);
      return !!u && t === u[0];
    };
  },
  function (t, e, n) {
    function r(t) {
      if (c(t) && !u(t) && !(t instanceof i)) {
        if (t instanceof o) return t;
        if (f.call(t, '__wrapped__')) return s(t);
      }
      return new o(t);
    }
    var i = n(47),
      o = n(45),
      a = n(46),
      u = n(0),
      c = n(5),
      s = n(231),
      f = Object.prototype.hasOwnProperty;
    ((r.prototype = a.prototype).constructor = r), (t.exports = r);
  },
  function (t, e, n) {
    var r = n(47),
      i = n(45),
      o = n(232);
    t.exports = function (t) {
      if (t instanceof r) return t.clone();
      var e = new i(t.__wrapped__, t.__chain__);
      return (
        (e.__actions__ = o(t.__actions__)),
        (e.__index__ = t.__index__),
        (e.__values__ = t.__values__),
        e
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = -1,
        r = t.length;
      for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
      return e;
    };
  },
  function (t, e, n) {
    var r = n(79),
      i = n(73);
    t.exports = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = i(n)) == n ? n : 0),
        void 0 !== e && (e = (e = i(e)) == e ? e : 0),
        r(i(t), e, n)
      );
    };
  },
  function (t, e, n) {
    var r = n(1);
    r.define(
      'links',
      (t.exports = function (t, e) {
        function n() {
          var t = s.scrollTop(),
            n = s.height();
          e.each(a, function (e) {
            var r = e.link,
              o = e.sec,
              a = o.offset().top,
              u = o.outerHeight(),
              c = 0.5 * n,
              s = o.is(':visible') && a + u - c >= t && a + c <= t + n;
            e.active !== s && ((e.active = s), i(r, p, s));
          });
        }
        function i(t, e, n) {
          var r = t.hasClass(e);
          (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
        }
        var o,
          a,
          u,
          c = {},
          s = t(window),
          f = r.env(),
          l = window.location,
          d = document.createElement('a'),
          p = 'w--current',
          v = /^#[\w:.-]+$/,
          h = /index\.(html|php)$/,
          g = /\/$/;
        return (
          (c.ready = c.design = c.preview = function () {
            (o = f && r.env('design')),
              (u = r.env('slug') || l.pathname || ''),
              r.scroll.off(n),
              (a = []);
            for (var e = document.links, c = 0; c < e.length; ++c)
              !(function (e) {
                var n =
                  (o && e.getAttribute('href-disabled')) ||
                  e.getAttribute('href');
                if (((d.href = n), !(n.indexOf(':') >= 0))) {
                  var r = t(e);
                  if (0 === n.indexOf('#') && v.test(n)) {
                    var c = t(n);
                    c.length && a.push({ link: r, sec: c, active: !1 });
                  } else if ('#' !== n && '' !== n) {
                    var s =
                      d.href === l.href || n === u || (h.test(n) && g.test(u));
                    i(r, p, s);
                  }
                }
              })(e[c]);
            a.length && (r.scroll.on(n), n());
          }),
          c
        );
      })
    );
  },
  function (t, e, n) {
    var r = n(1),
      i = n(12);
    r.define(
      'navbar',
      (t.exports = function (t, e) {
        function n() {
          r.resize.off(o);
        }
        function o() {
          g.each(l);
        }
        function a(n, i) {
          var o = t(i),
            a = t.data(i, j);
          a || (a = t.data(i, j, { open: !1, el: o, config: {} })),
            (a.menu = o.find('.w-nav-menu')),
            (a.links = a.menu.find('.w-nav-link')),
            (a.dropdowns = a.menu.find('.w-dropdown')),
            (a.button = o.find('.w-nav-button')),
            (a.container = o.find('.w-container')),
            (a.outside = (function (n) {
              n.outside && x.off('tap' + j, n.outside);
              return e.debounce(function (e) {
                if (n.open) {
                  var r = t(e.target).closest('.w-nav-menu');
                  n.menu.is(r) || v(n);
                }
              });
            })(a)),
            a.el.off(j),
            a.button.off(j),
            a.menu.off(j),
            s(a),
            y
              ? (c(a),
                a.el.on(
                  'setting' + j,
                  (function (t) {
                    return function (n, r) {
                      r = r || {};
                      var i = w.width();
                      s(t),
                        !0 === r.open && d(t, !0),
                        !1 === r.open && v(t, !0),
                        t.open &&
                          e.defer(function () {
                            i !== w.width() && f(t);
                          });
                    };
                  })(a)
                ))
              : (!(function (e) {
                  if (e.overlay) return;
                  (e.overlay = t(O).appendTo(e.el)),
                    (e.parent = e.menu.parent()),
                    v(e, !0);
                })(a),
                a.button.on(
                  'tap' + j,
                  (function (t) {
                    return e.debounce(function () {
                      t.open ? v(t) : d(t);
                    });
                  })(a)
                ),
                a.menu.on(
                  'click' + j,
                  'a',
                  (function (e) {
                    return function (n) {
                      var i = t(this),
                        o = i.attr('href');
                      r.validClick(n.currentTarget)
                        ? o && 0 === o.indexOf('#') && e.open && v(e)
                        : n.preventDefault();
                    };
                  })(a)
                )),
            l(n, i);
        }
        function u(e, n) {
          var r = t.data(n, j);
          r && (c(r), t.removeData(n, j));
        }
        function c(t) {
          t.overlay && (v(t, !0), t.overlay.remove(), (t.overlay = null));
        }
        function s(t) {
          var n = {},
            r = t.config || {},
            i = (n.animation = t.el.attr('data-animation') || 'default');
          (n.animOver = /^over/.test(i)),
            (n.animDirect = /left$/.test(i) ? -1 : 1),
            r.animation !== i && t.open && e.defer(f, t),
            (n.easing = t.el.attr('data-easing') || 'ease'),
            (n.easing2 = t.el.attr('data-easing2') || 'ease');
          var o = t.el.attr('data-duration');
          (n.duration = null != o ? Number(o) : 400),
            (n.docHeight = t.el.attr('data-doc-height')),
            (t.config = n);
        }
        function f(t) {
          t.open && (v(t, !0), d(t, !0));
        }
        function l(e, n) {
          var r = t.data(n, j),
            i = (r.collapsed = 'none' !== r.button.css('display'));
          if ((!r.open || i || y || v(r, !0), r.container.length)) {
            var o = (function (e) {
              var n = e.container.css(k);
              'none' === n && (n = '');
              return function (e, r) {
                (r = t(r)).css(k, ''), 'none' === r.css(k) && r.css(k, n);
              };
            })(r);
            r.links.each(o), r.dropdowns.each(o);
          }
          r.open && p(r);
        }
        function d(t, e) {
          if (!t.open) {
            (t.open = !0),
              t.menu.addClass(E),
              t.links.addClass(S),
              t.button.addClass(I);
            var n = t.config;
            ('none' !== n.animation && b.support.transform) || (e = !0);
            var i = p(t),
              o = t.menu.outerHeight(!0),
              a = t.menu.outerWidth(!0),
              u = t.el.height(),
              c = t.el[0];
            if (
              (l(0, c),
              A.intro(0, c),
              r.redraw.up(),
              y || x.on('tap' + j, t.outside),
              !e)
            ) {
              var s = 'transform ' + n.duration + 'ms ' + n.easing;
              if (
                (t.overlay &&
                  ((T = t.menu.prev()), t.overlay.show().append(t.menu)),
                n.animOver)
              )
                return (
                  b(t.menu)
                    .add(s)
                    .set({ x: n.animDirect * a, height: i })
                    .start({ x: 0 }),
                  void (t.overlay && t.overlay.width(a))
                );
              var f = u + o;
              b(t.menu).add(s).set({ y: -f }).start({ y: 0 });
            }
          }
        }
        function p(t) {
          var e = t.config,
            n = e.docHeight ? x.height() : h.height();
          return (
            e.animOver
              ? t.menu.height(n)
              : 'fixed' !== t.el.css('position') && (n -= t.el.height()),
            t.overlay && t.overlay.height(n),
            n
          );
        }
        function v(t, e) {
          function n() {
            t.menu.height(''),
              b(t.menu).set({ x: 0, y: 0 }),
              t.menu.removeClass(E),
              t.links.removeClass(S),
              t.overlay &&
                t.overlay.children().length &&
                (T.length ? t.menu.insertAfter(T) : t.menu.prependTo(t.parent),
                t.overlay.attr('style', '').hide()),
              t.el.triggerHandler('w-close');
          }
          if (t.open) {
            (t.open = !1), t.button.removeClass(I);
            var r = t.config;
            if (
              (('none' === r.animation ||
                !b.support.transform ||
                r.duration <= 0) &&
                (e = !0),
              A.outro(0, t.el[0]),
              x.off('tap' + j, t.outside),
              e)
            )
              return b(t.menu).stop(), void n();
            var i = 'transform ' + r.duration + 'ms ' + r.easing2,
              o = t.menu.outerHeight(!0),
              a = t.menu.outerWidth(!0),
              u = t.el.height();
            if (r.animOver)
              b(t.menu)
                .add(i)
                .start({ x: a * r.animDirect })
                .then(n);
            else {
              var c = u + o;
              b(t.menu).add(i).start({ y: -c }).then(n);
            }
          }
        }
        var h,
          g,
          y,
          m = {},
          b = t.tram,
          w = t(window),
          x = t(document),
          _ = r.env(),
          O = '<div class="w-nav-overlay" data-wf-ignore />',
          j = '.w-nav',
          I = 'w--open',
          E = 'w--nav-menu-open',
          S = 'w--nav-link-open',
          A = i.triggers,
          T = t();
        (m.ready = m.design = m.preview = function () {
          (y = _ && r.env('design')),
            (h = t(document.body)),
            (g = x.find(j)).length && (g.each(a), n(), r.resize.on(o));
        }),
          (m.destroy = function () {
            (T = t()), n(), g && g.length && g.each(u);
          });
        var k = 'max-width';
        return m;
      })
    );
  },
  function (t, e, n) {
    var r = n(1);
    r.define(
      'scroll',
      (t.exports = function (t) {
        function e(e, n) {
          if (u.test(e)) {
            var c = t('#' + e);
            if (c.length) {
              if (
                (n && (n.preventDefault(), n.stopPropagation()),
                o.hash !== e &&
                  a &&
                  a.pushState &&
                  (!r.env.chrome || 'file:' !== o.protocol))
              ) {
                (a.state && a.state.hash) !== e &&
                  a.pushState({ hash: e }, '', '#' + e);
              }
              var s = r.env('editor') ? '.w-editor-body' : 'body',
                f = t(
                  'header, ' +
                    s +
                    ' > .header, ' +
                    s +
                    ' > .w-nav:not([data-no-scroll])'
                ),
                l = 'fixed' === f.css('position') ? f.outerHeight() : 0;
              i.setTimeout(
                function () {
                  !(function (e, n) {
                    var r = t(i).scrollTop(),
                      o = e.offset().top - n;
                    if ('mid' === e.data('scroll')) {
                      var a = t(i).height() - n,
                        u = e.outerHeight();
                      u < a && (o -= Math.round((a - u) / 2));
                    }
                    var c = 1;
                    t('body')
                      .add(e)
                      .each(function () {
                        var e = parseFloat(
                          t(this).attr('data-scroll-time'),
                          10
                        );
                        !isNaN(e) && (0 === e || e > 0) && (c = e);
                      }),
                      Date.now ||
                        (Date.now = function () {
                          return new Date().getTime();
                        });
                    var s = Date.now(),
                      f =
                        i.requestAnimationFrame ||
                        i.mozRequestAnimationFrame ||
                        i.webkitRequestAnimationFrame ||
                        function (t) {
                          i.setTimeout(t, 15);
                        },
                      l = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * c;
                    !(function t() {
                      var e = Date.now() - s;
                      i.scroll(
                        0,
                        (function (t, e, n, r) {
                          if (n > r) return e;
                          return (
                            t +
                            (e - t) *
                              (function (t) {
                                return t < 0.5
                                  ? 4 * t * t * t
                                  : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                              })(n / r)
                          );
                        })(r, o, e, l)
                      ),
                        e <= l && f(t);
                    })();
                  })(c, l);
                },
                n ? 0 : 300
              );
            }
          }
        }
        var n = t(document),
          i = window,
          o = i.location,
          a = (function () {
            try {
              return Boolean(i.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : i.history,
          u = /^[a-zA-Z0-9][\w:.-]*$/;
        return {
          ready: function () {
            o.hash && e(o.hash.substring(1));
            var i = o.href.split('#')[0];
            n.on('click', 'a', function (n) {
              if (
                !(
                  r.env('design') ||
                  (window.$.mobile && t(n.currentTarget).hasClass('ui-link'))
                )
              )
                if ('#' !== this.getAttribute('href')) {
                  var o = this.href.split('#'),
                    a = o[0] === i ? o[1] : null;
                  a && e(a, n);
                } else n.preventDefault();
            });
          },
        };
      })
    );
  },
  function (t, e, n) {
    var r = n(1),
      i = n(12);
    r.define(
      'slider',
      (t.exports = function (t, e) {
        function n() {
          (m = j.find(E)).length &&
            (m.filter(':visible').each(u),
            (x = null),
            w || (o(), r.resize.on(a), r.redraw.on(_.redraw)));
        }
        function o() {
          r.resize.off(a), r.redraw.off(_.redraw);
        }
        function a() {
          m.filter(':visible').each(g);
        }
        function u(e, n) {
          var r = t(n),
            i = t.data(n, E);
          if (
            (i || (i = t.data(n, E, { index: 0, depth: 1, el: r, config: {} })),
            (i.mask = r.children('.w-slider-mask')),
            (i.left = r.children('.w-slider-arrow-left')),
            (i.right = r.children('.w-slider-arrow-right')),
            (i.nav = r.children('.w-slider-nav')),
            (i.slides = i.mask.children('.w-slide')),
            i.slides.each(A.reset),
            x && (i.maskWidth = 0),
            !O.support.transform)
          )
            return i.left.hide(), i.right.hide(), i.nav.hide(), void (w = !0);
          i.el.off(E),
            i.left.off(E),
            i.right.off(E),
            i.nav.off(E),
            c(i),
            b
              ? (i.el.on('setting' + E, v(i)), p(i), (i.hasTimer = !1))
              : (i.el.on('swipe' + E, v(i)),
                i.left.on('tap' + E, f(i)),
                i.right.on('tap' + E, l(i)),
                i.config.autoplay &&
                  !i.hasTimer &&
                  ((i.hasTimer = !0), (i.timerCount = 1), d(i))),
            i.nav.on('tap' + E, '> div', v(i)),
            I ||
              i.mask
                .contents()
                .filter(function () {
                  return 3 === this.nodeType;
                })
                .remove(),
            g(e, n);
        }
        function c(t) {
          var e = {};
          (e.crossOver = 0),
            (e.animation = t.el.attr('data-animation') || 'slide'),
            'outin' === e.animation &&
              ((e.animation = 'cross'), (e.crossOver = 0.5)),
            (e.easing = t.el.attr('data-easing') || 'ease');
          var n = t.el.attr('data-duration');
          if (
            ((e.duration = null != n ? parseInt(n, 10) : 500),
            s(t.el.attr('data-infinite')) && (e.infinite = !0),
            s(t.el.attr('data-disable-swipe')) && (e.disableSwipe = !0),
            s(t.el.attr('data-hide-arrows'))
              ? (e.hideArrows = !0)
              : t.config.hideArrows && (t.left.show(), t.right.show()),
            s(t.el.attr('data-autoplay')))
          ) {
            (e.autoplay = !0),
              (e.delay = parseInt(t.el.attr('data-delay'), 10) || 2e3),
              (e.timerMax = parseInt(t.el.attr('data-autoplay-limit'), 10));
            var r = 'mousedown' + E + ' touchstart' + E;
            b ||
              t.el.off(r).one(r, function () {
                p(t);
              });
          }
          var i = t.right.width();
          (e.edge = i ? i + 40 : 100), (t.config = e);
        }
        function s(t) {
          return '1' === t || 'true' === t;
        }
        function f(t) {
          return function () {
            h(t, { index: t.index - 1, vector: -1 });
          };
        }
        function l(t) {
          return function () {
            h(t, { index: t.index + 1, vector: 1 });
          };
        }
        function d(t) {
          p(t);
          var e = t.config,
            n = e.timerMax;
          (n && t.timerCount++ > n) ||
            (t.timerId = window.setTimeout(function () {
              null == t.timerId || b || (l(t)(), d(t));
            }, e.delay));
        }
        function p(t) {
          window.clearTimeout(t.timerId), (t.timerId = null);
        }
        function v(i) {
          return function (o, a) {
            a = a || {};
            var u = i.config;
            if (b && 'setting' === o.type) {
              if ('prev' === a.select) return f(i)();
              if ('next' === a.select) return l(i)();
              if ((c(i), y(i), null == a.select)) return;
              !(function (r, i) {
                var o = null;
                i === r.slides.length && (n(), y(r)),
                  e.each(r.anchors, function (e, n) {
                    t(e.els).each(function (e, r) {
                      t(r).index() === i && (o = n);
                    });
                  }),
                  null != o && h(r, { index: o, immediate: !0 });
              })(i, a.select);
            } else if ('swipe' !== o.type)
              i.nav.has(o.target).length &&
                h(i, { index: t(o.target).index() });
            else {
              if (u.disableSwipe) return;
              if (r.env('editor')) return;
              if ('left' === a.direction) return l(i)();
              if ('right' === a.direction) return f(i)();
            }
          };
        }
        function h(e, n) {
          function r() {
            (d = t(o[e.index].els)),
              (v = e.slides.not(d)),
              'slide' !== h && (l.visibility = 'hidden'),
              O(v).set(l);
          }
          n = n || {};
          var i = e.config,
            o = e.anchors;
          e.previous = e.index;
          var a = n.index,
            u = {};
          a < 0
            ? ((a = o.length - 1),
              i.infinite &&
                ((u.x = -e.endX), (u.from = 0), (u.to = o[0].width)))
            : a >= o.length &&
              ((a = 0),
              i.infinite &&
                ((u.x = o[o.length - 1].width),
                (u.from = -o[o.length - 1].x),
                (u.to = u.from - u.x))),
            (e.index = a);
          var c = e.nav.children().eq(e.index).addClass('w-active');
          e.nav.children().not(c).removeClass('w-active'),
            i.hideArrows &&
              (e.index === o.length - 1 ? e.right.hide() : e.right.show(),
              0 === e.index ? e.left.hide() : e.left.show());
          var s = e.offsetX || 0,
            f = (e.offsetX = -o[e.index].x),
            l = { x: f, opacity: 1, visibility: '' },
            d = t(o[e.index].els),
            p = t(o[e.previous] && o[e.previous].els),
            v = e.slides.not(d),
            h = i.animation,
            g = i.easing,
            y = Math.round(i.duration),
            m = n.vector || (e.index > e.previous ? 1 : -1),
            w = 'opacity ' + y + 'ms ' + g,
            _ = 'transform ' + y + 'ms ' + g;
          if ((b || (d.each(A.intro), v.each(A.outro)), n.immediate && !x))
            return O(d).set(l), void r();
          if (e.index !== e.previous) {
            if ('cross' === h) {
              var j = Math.round(y - y * i.crossOver),
                I = Math.round(y - j);
              return (
                (w = 'opacity ' + j + 'ms ' + g),
                O(p).set({ visibility: '' }).add(w).start({ opacity: 0 }),
                void O(d)
                  .set({ visibility: '', x: f, opacity: 0, zIndex: e.depth++ })
                  .add(w)
                  .wait(I)
                  .then({ opacity: 1 })
                  .then(r)
              );
            }
            return 'fade' === h
              ? (O(p).set({ visibility: '' }).stop(),
                void O(d)
                  .set({ visibility: '', x: f, opacity: 0, zIndex: e.depth++ })
                  .add(w)
                  .start({ opacity: 1 })
                  .then(r))
              : 'over' === h
              ? ((l = { x: e.endX }),
                O(p).set({ visibility: '' }).stop(),
                void O(d)
                  .set({
                    visibility: '',
                    zIndex: e.depth++,
                    x: f + o[e.index].width * m,
                  })
                  .add(_)
                  .start({ x: f })
                  .then(r))
              : void (i.infinite && u.x
                  ? (O(e.slides.not(p))
                      .set({ visibility: '', x: u.x })
                      .add(_)
                      .start({ x: f }),
                    O(p)
                      .set({ visibility: '', x: u.from })
                      .add(_)
                      .start({ x: u.to }),
                    (e.shifted = p))
                  : (i.infinite &&
                      e.shifted &&
                      (O(e.shifted).set({ visibility: '', x: s }),
                      (e.shifted = null)),
                    O(e.slides)
                      .set({ visibility: '' })
                      .add(_)
                      .start({ x: f })));
          }
        }
        function g(e, n) {
          var r = t.data(n, E);
          if (r)
            return (function (t) {
              var e = t.mask.width();
              if (t.maskWidth !== e) return (t.maskWidth = e), !0;
              return !1;
            })(r)
              ? y(r)
              : void (
                  b &&
                  (function (e) {
                    var n = 0;
                    if (
                      (e.slides.each(function (e, r) {
                        n += t(r).outerWidth(!0);
                      }),
                      e.slidesWidth !== n)
                    )
                      return (e.slidesWidth = n), !0;
                    return !1;
                  })(r) &&
                  y(r)
                );
        }
        function y(e) {
          var n = 1,
            r = 0,
            i = 0,
            o = 0,
            a = e.maskWidth,
            u = a - e.config.edge;
          u < 0 && (u = 0),
            (e.anchors = [{ els: [], x: 0, width: 0 }]),
            e.slides.each(function (c, s) {
              i - r > u &&
                (n++,
                (r += a),
                (e.anchors[n - 1] = { els: [], x: i, width: 0 })),
                (o = t(s).outerWidth(!0)),
                (i += o),
                (e.anchors[n - 1].width += o),
                e.anchors[n - 1].els.push(s);
            }),
            (e.endX = i),
            b && (e.pages = null),
            e.nav.length &&
              e.pages !== n &&
              ((e.pages = n),
              (function (e) {
                var n,
                  r = [],
                  i = e.el.attr('data-nav-spacing');
                i && (i = parseFloat(i) + 'px');
                for (var o = 0; o < e.pages; o++)
                  (n = t(S)),
                    e.nav.hasClass('w-num') && n.text(o + 1),
                    null != i && n.css({ 'margin-left': i, 'margin-right': i }),
                    r.push(n);
                e.nav.empty().append(r);
              })(e));
          var c = e.index;
          c >= n && (c = n - 1), h(e, { immediate: !0, index: c });
        }
        var m,
          b,
          w,
          x,
          _ = {},
          O = t.tram,
          j = t(document),
          I = r.env(),
          E = '.w-slider',
          S = '<div class="w-slider-dot" data-wf-ignore />',
          A = i.triggers;
        return (
          (_.ready = function () {
            (b = r.env('design')), n();
          }),
          (_.design = function () {
            (b = !0), n();
          }),
          (_.preview = function () {
            (b = !1), n();
          }),
          (_.redraw = function () {
            (x = !0), n();
          }),
          (_.destroy = o),
          _
        );
      })
    );
  },
  function (t, e, n) {
    var r = n(1),
      i = n(12);
    r.define(
      'tabs',
      (t.exports = function (t) {
        function e() {
          (s = h && r.env('design')),
            (c = d.find(y)).length &&
              (c.each(a),
              r.env('preview') && !x && c.each(o),
              n(),
              r.redraw.on(f.redraw));
        }
        function n() {
          r.redraw.off(f.redraw);
        }
        function o(e, n) {
          var r = t.data(n, y);
          r &&
            (r.links && r.links.each(w.reset),
            r.panes && r.panes.each(w.reset));
        }
        function a(e, n) {
          var r = t(n),
            i = t.data(n, y);
          if (
            (i || (i = t.data(n, y, { el: r, config: {} })),
            (i.current = null),
            (i.menu = r.children('.w-tab-menu')),
            (i.links = i.menu.children('.w-tab-link')),
            (i.content = r.children('.w-tab-content')),
            (i.panes = i.content.children('.w-tab-pane')),
            i.el.off(y),
            i.links.off(y),
            (function (t) {
              var e = {};
              e.easing = t.el.attr('data-easing') || 'ease';
              var n = parseInt(t.el.attr('data-duration-in'), 10);
              n = e.intro = n == n ? n : 0;
              var r = parseInt(t.el.attr('data-duration-out'), 10);
              (r = e.outro = r == r ? r : 0),
                (e.immediate = !n && !r),
                (t.config = e);
            })(i),
            !s)
          ) {
            i.links.on(
              'click' + y,
              (function (t) {
                return function (e) {
                  var n = e.currentTarget.getAttribute(g);
                  n && u(t, { tab: n });
                };
              })(i)
            );
            var o = i.links.filter('.' + m).attr(g);
            o && u(i, { tab: o, immediate: !0 });
          }
        }
        function u(e, n) {
          function i() {
            if (
              (d.removeClass(b).css({
                opacity: '',
                transition: '',
                transform: '',
                width: '',
                height: '',
              }),
              f.addClass(b).each(w.intro),
              r.redraw.up(),
              !o.intro)
            )
              return l(f).set({ opacity: 1 });
            l(f)
              .set({ opacity: 0 })
              .redraw()
              .add('opacity ' + o.intro + 'ms ' + a, { fallback: v })
              .start({ opacity: 1 });
          }
          n = n || {};
          var o = e.config,
            a = o.easing,
            u = n.tab;
          if (u !== e.current) {
            (e.current = u),
              e.links.each(function (e, n) {
                var r = t(n);
                n.getAttribute(g) === u
                  ? r.addClass(m).each(w.intro)
                  : r.hasClass(m) && r.removeClass(m).each(w.outro);
              });
            var c = [],
              s = [];
            e.panes.each(function (e, n) {
              var r = t(n);
              n.getAttribute(g) === u ? c.push(n) : r.hasClass(b) && s.push(n);
            });
            var f = t(c),
              d = t(s);
            if (n.immediate || o.immediate)
              return (
                f.addClass(b).each(w.intro),
                d.removeClass(b),
                void (x || r.redraw.up())
              );
            d.length && o.outro
              ? (d.each(w.outro),
                l(d)
                  .add('opacity ' + o.outro + 'ms ' + a, { fallback: v })
                  .start({ opacity: 0 })
                  .then(i))
              : i();
          }
        }
        var c,
          s,
          f = {},
          l = t.tram,
          d = t(document),
          p = r.env,
          v = p.safari,
          h = p(),
          g = 'data-w-tab',
          y = '.w-tabs',
          m = 'w--current',
          b = 'w--tab-active',
          w = i.triggers,
          x = !1;
        return (
          (f.ready = f.design = f.preview = e),
          (f.redraw = function () {
            (x = !0), e(), (x = !1);
          }),
          (f.destroy = function () {
            (c = d.find(y)).length && (c.each(o), n());
          }),
          f
        );
      })
    );
  },
  function (t, e, n) {
    n(1).define(
      'touch',
      (t.exports = function (t) {
        function e(e, n, r) {
          var i = t.Event(e, { originalEvent: n });
          t(n.target).trigger(i, r);
        }
        var n = {},
          r = !document.addEventListener,
          i = window.getSelection;
        return (
          r &&
            (t.event.special.tap = {
              bindType: 'click',
              delegateType: 'click',
            }),
          (n.init = function (n) {
            return r
              ? null
              : (n = 'string' == typeof n ? t(n).get(0) : n)
              ? new (function (t) {
                  function n(t) {
                    var e = t.touches;
                    (e && e.length > 1) ||
                      ((f = !0),
                      (l = !1),
                      e
                        ? ((d = !0), (u = e[0].clientX), (c = e[0].clientY))
                        : ((u = t.clientX), (c = t.clientY)),
                      (s = u));
                  }
                  function r(t) {
                    if (f) {
                      if (d && 'mousemove' === t.type)
                        return t.preventDefault(), void t.stopPropagation();
                      var n = t.touches,
                        r = n ? n[0].clientX : t.clientX,
                        o = n ? n[0].clientY : t.clientY,
                        v = r - s;
                      (s = r),
                        Math.abs(v) > p &&
                          i &&
                          '' === String(i()) &&
                          (e('swipe', t, {
                            direction: v > 0 ? 'right' : 'left',
                          }),
                          a()),
                        (Math.abs(r - u) > 10 || Math.abs(o - c) > 10) &&
                          (l = !0);
                    }
                  }
                  function o(t) {
                    if (f) {
                      if (((f = !1), d && 'mouseup' === t.type))
                        return (
                          t.preventDefault(), t.stopPropagation(), void (d = !1)
                        );
                      l || e('tap', t);
                    }
                  }
                  function a() {
                    f = !1;
                  }
                  var u,
                    c,
                    s,
                    f = !1,
                    l = !1,
                    d = !1,
                    p = Math.min(Math.round(0.04 * window.innerWidth), 40);
                  t.addEventListener('touchstart', n, !1),
                    t.addEventListener('touchmove', r, !1),
                    t.addEventListener('touchend', o, !1),
                    t.addEventListener('touchcancel', a, !1),
                    t.addEventListener('mousedown', n, !1),
                    t.addEventListener('mousemove', r, !1),
                    t.addEventListener('mouseup', o, !1),
                    t.addEventListener('mouseout', a, !1),
                    (this.destroy = function () {
                      t.removeEventListener('touchstart', n, !1),
                        t.removeEventListener('touchmove', r, !1),
                        t.removeEventListener('touchend', o, !1),
                        t.removeEventListener('touchcancel', a, !1),
                        t.removeEventListener('mousedown', n, !1),
                        t.removeEventListener('mousemove', r, !1),
                        t.removeEventListener('mouseup', o, !1),
                        t.removeEventListener('mouseout', a, !1),
                        (t = null);
                    });
                })(n)
              : null;
          }),
          (n.instance = n.init(document)),
          n
        );
      })
    );
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  events: {
    e: {
      id: 'e',
      eventTypeId: 'DROPDOWN_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-2',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|2f7ddcc6-b442-b13b-c7a0-29f9f4d8713c',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518067445490,
    },
    'e-2': {
      id: 'e-2',
      eventTypeId: 'DROPDOWN_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-2',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|2f7ddcc6-b442-b13b-c7a0-29f9f4d8713c',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518067445492,
    },
    'e-5': {
      id: 'e-5',
      eventTypeId: 'DROPDOWN_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-6',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|0e2790c1-8714-0878-283a-da962b018f41',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518069245880,
    },
    'e-6': {
      id: 'e-6',
      eventTypeId: 'DROPDOWN_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-2',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-5',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|0e2790c1-8714-0878-283a-da962b018f41',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518069245880,
    },
    'e-13': {
      id: 'e-13',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-7',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-14',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|ecdd0221-02c0-63a9-d172-8f6e068181ef',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518070800970,
    },
    'e-15': {
      id: 'e-15',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-16',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|ebe8c189-81b1-1b34-511e-93c39c837b15',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518070846196,
    },
    'e-17': {
      id: 'e-17',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-9',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-18',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|028699de-415d-fd1a-1f8d-0278fd287399',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518070950688,
    },
    'e-19': {
      id: 'e-19',
      eventTypeId: 'DROPDOWN_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-20',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|d5d98ba3-022a-dd77-c3d3-e38bdb652665',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518071078598,
    },
    'e-20': {
      id: 'e-20',
      eventTypeId: 'DROPDOWN_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-2',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-19',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|d5d98ba3-022a-dd77-c3d3-e38bdb652665',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518071078598,
    },
    'e-29': {
      id: 'e-29',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-10',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-30',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|94827cc3-9e68-29bb-1cab-dc6283082315',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518071271509,
    },
    'e-31': {
      id: 'e-31',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-11',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-32',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|b3717329-e5af-8aef-2cad-924f22dec14e',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518071334059,
    },
    'e-33': {
      id: 'e-33',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-12',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-34',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|d4c70615-94ea-08f4-c233-cfc6b447ac50',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518071498267,
    },
    'e-35': {
      id: 'e-35',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-13',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-36',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|9f5b1c2e-181c-6561-4965-c34c620b394a',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518071535844,
    },
    'e-37': {
      id: 'e-37',
      eventTypeId: 'DROPDOWN_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-38',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|956d22f0-4066-a5e3-f809-148aa9b45fe5',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518072017255,
    },
    'e-38': {
      id: 'e-38',
      eventTypeId: 'DROPDOWN_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-2',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-37',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|956d22f0-4066-a5e3-f809-148aa9b45fe5',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518072017255,
    },
    'e-39': {
      id: 'e-39',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-14',
          affectedElements: {
            '5a7bc61b5301890001e60d88|28c3817d-7736-23f7-d82e-71518628dc27': {
              selector: '.floating-dates',
              selectorGuids: ['d18c78cd-fa0e-354d-8028-c7e0d8423e0c'],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: 'e-40',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|0cc9b3b1-1f15-1eaf-edbd-71886889bfa0',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518072017255,
    },
    'e-43': {
      id: 'e-43',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-44',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|8def6613-8658-6cc5-9078-d80d5e263f19',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518072017255,
    },
    'e-45': {
      id: 'e-45',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-46',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|379d196c-a8cc-4cc9-870d-55a3df9ff10e',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518072327178,
    },
    'e-47': {
      id: 'e-47',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-17', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: { appliesTo: 'PAGE', id: '5a7bc61b5301890001e60d88' },
      config: [
        {
          continuousParameterGroupId: 'a-17-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 100,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-17-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 100,
          restingState: 50,
        },
      ],
      createdOn: 1518072421427,
    },
    'e-48': {
      id: 'e-48',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-18', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|64b3cb4d-3cd6-d560-c736-12a5851445f8',
      },
      config: [
        {
          continuousParameterGroupId: 'a-18-p',
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518153004529,
    },
    'e-50': {
      id: 'e-50',
      eventTypeId: 'PAGE_FINISH',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-19',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-49',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: { appliesTo: 'PAGE', id: '5a7bc61b5301890001e60d88' },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518154271876,
    },
    'e-51': {
      id: 'e-51',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-20', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|08584a36-58d3-66f1-4cb5-adbf018e1c99',
      },
      config: [
        {
          continuousParameterGroupId: 'a-20-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518155202851,
    },
    'e-58': {
      id: 'e-58',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-21',
          affectedElements: {
            '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2': {
              id:
                '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2',
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2',
      },
      config: [
        {
          continuousParameterGroupId: 'a-21-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518155498640,
    },
    'e-59': {
      id: 'e-59',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-22', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|7f79de50-428c-d740-a084-c030b530013d',
      },
      config: [
        {
          continuousParameterGroupId: 'a-22-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518155596885,
    },
    'e-60': {
      id: 'e-60',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-23', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|206d532b-42ea-0990-a7a1-b27cb5cbef49',
      },
      config: [
        {
          continuousParameterGroupId: 'a-23-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518155766291,
    },
    'e-61': {
      id: 'e-61',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-24', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|41596470-0d82-9243-79b9-0e56a1d63627',
      },
      config: [
        {
          continuousParameterGroupId: 'a-24-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518155821507,
    },
    'e-63': {
      id: 'e-63',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-21',
          affectedElements: {
            '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2': {
              id:
                '5a7bc61b5301890001e60d88|79f4f099-0bbd-c669-7c34-bbbae51122ce',
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|79f4f099-0bbd-c669-7c34-bbbae51122ce',
      },
      config: [
        {
          continuousParameterGroupId: 'a-21-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518157080018,
    },
    'e-65': {
      id: 'e-65',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-25',
          affectedElements: {
            '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab': {
              selector: '.image-1',
              selectorGuids: ['04cf787c-6c54-de3a-b9ca-ecaa7cdf5eed'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9': {
              selector: '.image-22',
              selectorGuids: ['0e8fbcfd-3d8a-00d8-fe8c-454de67ec30c'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162': {
              selector: '.margined-image.v2',
              selectorGuids: [
                'aab4cf6a-b929-196f-9884-f9dd5175e372',
                'aeb030a6-cf06-c8fc-0d36-8b92a6d3aa3e',
              ],
              limitAffectedElements: null,
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|87ab9c6f-ac50-e7f7-f8d0-3656f8f59f88',
      },
      config: [
        {
          continuousParameterGroupId: 'a-25-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518157276581,
    },
    'e-66': {
      id: 'e-66',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-26', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|93b58869-48b4-9c8c-fdd9-51763ccb425a',
      },
      config: [
        {
          continuousParameterGroupId: 'a-26-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518157396079,
    },
    'e-67': {
      id: 'e-67',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-27', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|4c35d758-3cca-8248-7ab7-b050cb267b4c',
      },
      config: [
        {
          continuousParameterGroupId: 'a-27-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518157591552,
    },
    'e-68': {
      id: 'e-68',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-27',
          affectedElements: {
            '5a7bc61b5301890001e60d88|53d3a6af-d38d-4623-ee39-ecf0f977bb2e': {
              selector: '.activity-pill._1',
              selectorGuids: [
                'ec2e1218-16a0-96c3-cba9-0855dfff1b54',
                'c4f422ff-91b3-b5a7-222f-452b91e9ccd1',
              ],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|d8489c88-da08-89e6-0af6-13e9a17d2892': {
              selector: '.activity-pill._2',
              selectorGuids: [
                'ec2e1218-16a0-96c3-cba9-0855dfff1b54',
                'e518713c-bb3d-3a22-da8b-dd509f11864e',
              ],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|4924e324-d86c-efcb-e065-94ceb8bc525c': {
              selector: '.activity-pill._3',
              selectorGuids: [
                'ec2e1218-16a0-96c3-cba9-0855dfff1b54',
                'a225bf12-f898-dd40-e542-b1eb0e16d7e8',
              ],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|025ba718-3b59-d7c6-7072-7f38bbebea1d': {
              selector: '.activity-pill._4',
              selectorGuids: [
                'ec2e1218-16a0-96c3-cba9-0855dfff1b54',
                '18daed7f-a55b-13c8-d12a-34588c3da6bb',
              ],
              limitAffectedElements: null,
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|47f30c3d-137d-5198-a108-a98f662dcdcb',
      },
      config: [
        {
          continuousParameterGroupId: 'a-27-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518157757244,
    },
    'e-69': {
      id: 'e-69',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-25',
          affectedElements: {
            '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab': {
              selector: '.image-1',
              selectorGuids: ['04cf787c-6c54-de3a-b9ca-ecaa7cdf5eed'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9': {
              selector: '.image-22',
              selectorGuids: ['0e8fbcfd-3d8a-00d8-fe8c-454de67ec30c'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162': {
              selector: '.margined-image.v2',
              selectorGuids: [
                'aab4cf6a-b929-196f-9884-f9dd5175e372',
                'aeb030a6-cf06-c8fc-0d36-8b92a6d3aa3e',
              ],
              limitAffectedElements: null,
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|b4b67e88-d0a1-9d04-16ee-ac5f45e8c912',
      },
      config: [
        {
          continuousParameterGroupId: 'a-25-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518158014480,
    },
    'e-70': {
      id: 'e-70',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-25',
          affectedElements: {
            '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab': {
              selector: '.image-1',
              selectorGuids: ['04cf787c-6c54-de3a-b9ca-ecaa7cdf5eed'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9': {
              selector: '.image-22',
              selectorGuids: ['0e8fbcfd-3d8a-00d8-fe8c-454de67ec30c'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162': {
              selector: '.margined-image.v2',
              selectorGuids: [
                'aab4cf6a-b929-196f-9884-f9dd5175e372',
                'aeb030a6-cf06-c8fc-0d36-8b92a6d3aa3e',
              ],
              limitAffectedElements: null,
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|f44a0a96-f2e1-7630-1642-9e7f4e423827',
      },
      config: [
        {
          continuousParameterGroupId: 'a-25-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518158133901,
    },
    'e-71': {
      id: 'e-71',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'RUBBER_BAND_EFFECT',
        config: { actionListId: 'e-71-rubberBand', autoStopEventId: 'e-72' },
        instant: false,
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|38b2819c-cddb-0776-51d9-a402ecd15096',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518158233970,
    },
    'e-73': {
      id: 'e-73',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'RUBBER_BAND_EFFECT',
        config: { actionListId: 'e-73-rubberBand', autoStopEventId: 'e-74' },
        instant: false,
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|d488a60a-25b9-93e7-91d3-e17a82bc7622',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518158265696,
    },
    'e-75': {
      id: 'e-75',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        config: { actionListId: 'e-75-growIn', autoStopEventId: 'e-76' },
        instant: false,
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1518158289107,
    },
    'e-77': {
      id: 'e-77',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_BIG_EFFECT',
        config: { actionListId: 'e-77-growBigIn', autoStopEventId: 'e-78' },
        instant: false,
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 150,
        direction: null,
        effectIn: true,
      },
      createdOn: 1518158301855,
    },
    'e-79': {
      id: 'e-79',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FLY_EFFECT',
        config: { actionListId: 'e-79-flyInRight', autoStopEventId: 'e-80' },
        instant: false,
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'RIGHT',
        effectIn: true,
      },
      createdOn: 1518158313351,
    },
    'e-81': {
      id: 'e-81',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FLY_EFFECT',
        config: { actionListId: 'e-81-flyInRight', autoStopEventId: 'e-82' },
        instant: false,
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 250,
        direction: 'RIGHT',
        effectIn: true,
      },
      createdOn: 1518158327807,
    },
    'e-84': {
      id: 'e-84',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-21',
          affectedElements: {
            '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2': {
              id:
                '5a7bc61b5301890001e60d88|f3485706-4490-abf2-a49f-65488006aa28',
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|f3485706-4490-abf2-a49f-65488006aa28',
      },
      config: [
        {
          continuousParameterGroupId: 'a-21-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518159320263,
    },
    'e-85': {
      id: 'e-85',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: {
          actionListId: 'a-21',
          affectedElements: {
            '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2': {
              id:
                '5a7bc61b5301890001e60d88|71f551f8-0a7e-b819-fb7c-2ed26f16b1aa',
            },
          },
          duration: 0,
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|71f551f8-0a7e-b819-fb7c-2ed26f16b1aa',
      },
      config: [
        {
          continuousParameterGroupId: 'a-21-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1518159369743,
    },
    'e-87': {
      id: 'e-87',
      eventTypeId: 'PAGE_FINISH',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-28',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-86',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: { appliesTo: 'PAGE', id: '5a7bc61b5301890001e60d88' },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518159934242,
    },
    'e-88': {
      id: 'e-88',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-29',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-89',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|42db8c63-ade2-1301-a3de-e16165f5a41f',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518160240195,
    },
    'e-90': {
      id: 'e-90',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-30',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-91',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '1cfac524-b5b7-2a34-ec50-8d3995e92535',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518236897045,
    },
    'e-91': {
      id: 'e-91',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-31',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-90',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '1cfac524-b5b7-2a34-ec50-8d3995e92535',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518236897048,
    },
    'e-92': {
      id: 'e-92',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-32',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-93',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|78ec5619-1445-20cd-dd74-140c363e485f',
      },
      config: {
        loop: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518323158658,
    },
    'e-94': {
      id: 'e-94',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-95',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|f28cdec6-7e28-370f-4f1b-ee44f8c1c5e8',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518391111169,
    },
    'e-96': {
      id: 'e-96',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-97',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|4bdbda29-b335-617b-d5f3-8642c47f4c59',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518391253949,
    },
    'e-98': {
      id: 'e-98',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {
            '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844': {
              selector: '.modal__container',
              selectorGuids: ['3a69b61e-6b57-3a3f-a422-2f4bc2517dd4'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75': {
              selector: '.modal__parent',
              selectorGuids: ['45a89489-d8f9-ea2c-77df-f8bf13597ac6'],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: 'e-99',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|1f72767b-26d3-52ab-e57d-c1366466f20d',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518391313035,
    },
    'e-100': {
      id: 'e-100',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {
            '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844': {
              selector: '.modal__container',
              selectorGuids: ['3a69b61e-6b57-3a3f-a422-2f4bc2517dd4'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75': {
              selector: '.modal__parent',
              selectorGuids: ['45a89489-d8f9-ea2c-77df-f8bf13597ac6'],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: 'e-101',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|a9579a24-e01d-e9b7-a559-ca1d623e55ae',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392526786,
    },
    'e-102': {
      id: 'e-102',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {
            '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844': {
              selector: '.modal__container',
              selectorGuids: ['3a69b61e-6b57-3a3f-a422-2f4bc2517dd4'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75': {
              selector: '.modal__parent',
              selectorGuids: ['45a89489-d8f9-ea2c-77df-f8bf13597ac6'],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: 'e-103',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|550f0178-77fa-ec0b-0a95-c7f1857b9a34',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392558710,
    },
    'e-104': {
      id: 'e-104',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {
            '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844': {
              selector: '.modal__container',
              selectorGuids: ['3a69b61e-6b57-3a3f-a422-2f4bc2517dd4'],
              limitAffectedElements: null,
            },
            '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75': {
              selector: '.modal__parent',
              selectorGuids: ['45a89489-d8f9-ea2c-77df-f8bf13597ac6'],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: 'e-105',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|5f45a503-c00f-aca1-4373-cc1f2bd11716',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392605290,
    },
    'e-106': {
      id: 'e-106',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-107',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|143ee32a-0a17-6ae0-9817-a611e7773c96',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392708571,
    },
    'e-108': {
      id: 'e-108',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-109',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|2da3fe3a-187b-878b-214e-0f224b2fed06',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392733815,
    },
    'e-110': {
      id: 'e-110',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-111',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|511f897b-3df3-d6be-7d22-84cc8153aea9',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392746530,
    },
    'e-112': {
      id: 'e-112',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-113',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|3d060102-1b60-a243-1f36-74d35705c0b8',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392754458,
    },
    'e-114': {
      id: 'e-114',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-115',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|95b9e003-502e-25f4-fa88-6a14faf3ccc1',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392772480,
    },
    'e-116': {
      id: 'e-116',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-117',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|d6bc1837-162d-7952-8050-1529c7e5c579',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518392779975,
    },
    'e-118': {
      id: 'e-118',
      eventTypeId: 'NAVBAR_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-36',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-119',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|b44ef363-88d7-8d9d-eee5-8f5959dbbbe4',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518418260511,
    },
    'e-119': {
      id: 'e-119',
      eventTypeId: 'NAVBAR_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-37',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-118',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        appliesTo: 'ELEMENT',
        id: '5a7bc61b5301890001e60d88|b44ef363-88d7-8d9d-eee5-8f5959dbbbe4',
      },
      config: {
        loop: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1518418260513,
    },
  },
  actionLists: {
    a: {
      id: 'a',
      title: 'Dropdown Open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7f3318c5-d38c-8884-4fbf-b962293a8d04',
                },
                xValue: 0,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 350,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7f3318c5-d38c-8884-4fbf-b962293a8d04',
                },
                xValue: 1,
                yValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      createdOn: 1518067452297,
      useFirstGroupAsInitialState: true,
    },
    'a-2': {
      id: 'a-2',
      title: 'Dropdown close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-2-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 150,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7f3318c5-d38c-8884-4fbf-b962293a8d04',
                },
                xValue: 0,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      createdOn: 1518067452297,
      useFirstGroupAsInitialState: false,
    },
    'a-3': {
      id: 'a-3',
      title: 'Move to 3',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-3-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|94edb2f1-4709-aa0a-db13-c3f926657887',
                },
                xValue: 21,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-3-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|94edb2f1-4709-aa0a-db13-c3f926657887',
                },
                xValue: -18,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518069807517,
      useFirstGroupAsInitialState: true,
    },
    'a-5': {
      id: 'a-5',
      title: 'Move to 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-5-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|94edb2f1-4709-aa0a-db13-c3f926657887',
                },
                xValue: 20,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518069807517,
      useFirstGroupAsInitialState: false,
    },
    'a-6': {
      id: 'a-6',
      title: 'Move to 1',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-6-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|94edb2f1-4709-aa0a-db13-c3f926657887',
                },
                xValue: 58,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518069807517,
      useFirstGroupAsInitialState: false,
    },
    'a-4': {
      id: 'a-4',
      title: 'Move to 4',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-4-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|94edb2f1-4709-aa0a-db13-c3f926657887',
                },
                xValue: -57,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518069807517,
      useFirstGroupAsInitialState: false,
    },
    'a-7': {
      id: 'a-7',
      title: 'Move to JFK',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-7-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7093b7ad-552b-5963-ca1d-fb00ac10b32d',
                },
                xValue: 51,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-7-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7093b7ad-552b-5963-ca1d-fb00ac10b32d',
                },
                xValue: 51,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518070804910,
      useFirstGroupAsInitialState: true,
    },
    'a-8': {
      id: 'a-8',
      title: 'Move to SFO',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-8-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7093b7ad-552b-5963-ca1d-fb00ac10b32d',
                },
                xValue: -7,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518070804910,
      useFirstGroupAsInitialState: false,
    },
    'a-9': {
      id: 'a-9',
      title: 'Move to MCO',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-9-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|7093b7ad-552b-5963-ca1d-fb00ac10b32d',
                },
                xValue: -66,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518070804910,
      useFirstGroupAsInitialState: false,
    },
    'a-10': {
      id: 'a-10',
      title: 'Move to moon',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-10-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|28c3817d-7736-23f7-d82e-71518628dc27',
                },
                xValue: 99,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-10-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|28c3817d-7736-23f7-d82e-71518628dc27',
                },
                xValue: 99,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: true,
    },
    'a-14': {
      id: 'a-14',
      title: 'March 2018',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-14-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e4fb1bcc-143b-09a2-ba9e-c7d0eb37f5af',
                },
                xValue: 100,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-14-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e4fb1bcc-143b-09a2-ba9e-c7d0eb37f5af',
                },
                xValue: 100,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: true,
    },
    'a-15': {
      id: 'a-15',
      title: 'April 2018',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-15-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e4fb1bcc-143b-09a2-ba9e-c7d0eb37f5af',
                },
                xValue: -16,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: false,
    },
    'a-16': {
      id: 'a-16',
      title: 'May 2018',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-16-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e4fb1bcc-143b-09a2-ba9e-c7d0eb37f5af',
                },
                xValue: -119,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: false,
    },
    'a-11': {
      id: 'a-11',
      title: 'Move to Mars',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-11-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|28c3817d-7736-23f7-d82e-71518628dc27',
                },
                xValue: 28,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: false,
    },
    'a-12': {
      id: 'a-12',
      title: 'Move to Jupiter',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-12-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|28c3817d-7736-23f7-d82e-71518628dc27',
                },
                xValue: -38,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: false,
    },
    'a-13': {
      id: 'a-13',
      title: 'Move to Saturn',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-13-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|28c3817d-7736-23f7-d82e-71518628dc27',
                },
                xValue: -119,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518071276123,
      useFirstGroupAsInitialState: false,
    },
    'a-17': {
      id: 'a-17',
      title: 'Move space man',
      continuousParameterGroups: [
        {
          id: 'a-17-p',
          type: 'MOUSE_X',
          parameterLabel: 'Mouse X',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-17-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                    },
                    xValue: 15,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-17-n-5',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                    },
                    zValue: 3,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-17-n-7',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|1639da1c-7f06-780e-f2fe-99051ce16dd6',
                    },
                    zValue: -3,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-17-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                    },
                    xValue: -15,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-17-n-6',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                    },
                    zValue: -3,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-17-n-8',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|1639da1c-7f06-780e-f2fe-99051ce16dd6',
                    },
                    zValue: 3,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'a-17-p-2',
          type: 'MOUSE_Y',
          parameterLabel: 'Mouse Y',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-17-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                    },
                    yValue: 15,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-17-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                    },
                    yValue: -15,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518072425260,
    },
    'a-18': {
      id: 'a-18',
      title: 'rotate',
      continuousParameterGroups: [
        {
          id: 'a-18-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-18-n',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|64b3cb4d-3cd6-d560-c736-12a5851445f8',
                    },
                    zValue: -50,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-3',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|b92ae949-4ae9-3b80-3e92-324bd9b4d3f3',
                    },
                    zValue: -15,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-5',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|22fbbb39-ad4b-ff3c-9cd8-a44bf48612d1',
                    },
                    zValue: 50,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-7',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|52ba0b3a-d4b7-37ce-4c37-4b62d30819e5',
                    },
                    zValue: 25,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-9',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|2a41a7d3-7821-9ca4-a23b-2d6a16a8cf1c',
                    },
                    zValue: -10,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-18-n-2',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|64b3cb4d-3cd6-d560-c736-12a5851445f8',
                    },
                    zValue: 360,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-4',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|b92ae949-4ae9-3b80-3e92-324bd9b4d3f3',
                    },
                    zValue: 15,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-6',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|22fbbb39-ad4b-ff3c-9cd8-a44bf48612d1',
                    },
                    zValue: 50,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-8',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|52ba0b3a-d4b7-37ce-4c37-4b62d30819e5',
                    },
                    zValue: -15,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-18-n-10',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|2a41a7d3-7821-9ca4-a23b-2d6a16a8cf1c',
                    },
                    zValue: -30,
                    xUnit: 'DEG',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518153010330,
    },
    'a-19': {
      id: 'a-19',
      title: 'Main Load Animation',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-19-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e2e45d9c-69fc-e7de-4e80-cd02d98ddb7a',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|25f51c47-faec-e0a2-14dd-197bc8b59d1b',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-14',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'block',
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|79930808-1437-4824-e6d7-6370aef2347d',
                },
              },
            },
            {
              id: 'a-19-n-15',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|993a679c-5a3a-c5c3-b34d-61ad76fb41ff',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-18',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-19',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1639da1c-7f06-780e-f2fe-99051ce16dd6',
                },
                xValue: -50,
                xUnit: 'VW',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-19-n-21',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|8b4be816-b198-bd67-58b9-70b283804b66',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-19-n-24',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|6b70ac25-7e91-819a-c2d5-48010a57cfd3',
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-19-n-26',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e0265ad7-07f6-fde8-5521-778f45ef26cb',
                },
                xValue: -50,
                yValue: 35,
                xUnit: 'VW',
                yUnit: 'VH',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-19-n-28',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|010358e6-b0c1-0836-c3db-4efbedbc424f',
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-19-n-30',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|66857567-7af8-b66b-10cf-08c612033dd0',
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-19-n-32',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d06a6424-4729-db83-71e6-ea941dfd1507',
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-19-n-36',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1cb0b4e1-aa8d-f128-7dc9-0fe3bd319044',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-38',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1449324b-0b12-2786-40f9-46dfa2fc5889',
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|8b4be816-b198-bd67-58b9-70b283804b66',
                },
                xValue: 20,
                xUnit: 'VW',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-19-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 1500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|8b4be816-b198-bd67-58b9-70b283804b66',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-20',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1639da1c-7f06-780e-f2fe-99051ce16dd6',
                },
                xValue: 0,
                xUnit: 'VW',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-19-n-23',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|26eb68d4-c74a-22a0-1d6a-44ab49e02fd9',
                },
                xValue: 4.5,
                yValue: 4.5,
                locked: true,
              },
            },
            {
              id: 'a-19-n-45',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|26eb68d4-c74a-22a0-1d6a-44ab49e02fd9',
                },
                xValue: 50,
                xUnit: 'VW',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-19-n-22',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|8b4be816-b198-bd67-58b9-70b283804b66',
                },
                xValue: 1.5,
                yValue: 1.5,
                locked: true,
              },
            },
            {
              id: 'a-19-n-27',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e0265ad7-07f6-fde8-5521-778f45ef26cb',
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'VW',
                yUnit: 'VH',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-13',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'none',
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|79930808-1437-4824-e6d7-6370aef2347d',
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|993a679c-5a3a-c5c3-b34d-61ad76fb41ff',
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|25f51c47-faec-e0a2-14dd-197bc8b59d1b',
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-25',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|6b70ac25-7e91-819a-c2d5-48010a57cfd3',
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-19-n-29',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|010358e6-b0c1-0836-c3db-4efbedbc424f',
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-19-n-31',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|66857567-7af8-b66b-10cf-08c612033dd0',
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-19-n-34',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d06a6424-4729-db83-71e6-ea941dfd1507',
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-19-n-39',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1449324b-0b12-2786-40f9-46dfa2fc5889',
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-35',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 150,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1cb0b4e1-aa8d-f128-7dc9-0fe3bd319044',
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-37',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d06a6424-4729-db83-71e6-ea941dfd1507',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-43',
              actionTypeId: 'STYLE_BACKGROUND_COLOR',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d06a6424-4729-db83-71e6-ea941dfd1507',
                },
                rValue: 255,
                gValue: 255,
                bValue: 255,
                aValue: 1,
              },
            },
            {
              id: 'a-19-n-41',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d06a6424-4729-db83-71e6-ea941dfd1507',
                },
                xValue: 110,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-40',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1449324b-0b12-2786-40f9-46dfa2fc5889',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-19-n-44',
              actionTypeId: 'STYLE_BACKGROUND_COLOR',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1449324b-0b12-2786-40f9-46dfa2fc5889',
                },
                rValue: 255,
                gValue: 255,
                bValue: 255,
                aValue: 1,
              },
            },
            {
              id: 'a-19-n-42',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|1449324b-0b12-2786-40f9-46dfa2fc5889',
                },
                xValue: 120,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-19-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|e2e45d9c-69fc-e7de-4e80-cd02d98ddb7a',
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-19-n-17',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 750,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|dd698758-23ef-23cd-d8b2-5c09b19bf0f1',
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      createdOn: 1518154284250,
      useFirstGroupAsInitialState: true,
    },
    'a-20': {
      id: 'a-20',
      title: 'Scale horizontal',
      continuousParameterGroups: [
        {
          id: 'a-20-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-20-n',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|08584a36-58d3-66f1-4cb5-adbf018e1c99',
                    },
                    xValue: 0,
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: 'a-20-n-2',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|08584a36-58d3-66f1-4cb5-adbf018e1c99',
                    },
                    xValue: 1,
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518155208091,
    },
    'a-21': {
      id: 'a-21',
      title: 'Slide',
      continuousParameterGroups: [
        {
          id: 'a-21-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-21-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2',
                    },
                    xValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-21-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|76925845-f43b-5246-c4cb-39f4a26bd8e2',
                    },
                    xValue: 100,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518155502690,
    },
    'a-22': {
      id: 'a-22',
      title: 'Fade in photos',
      continuousParameterGroups: [
        {
          id: 'a-22-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-22-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab',
                    },
                    yValue: 50,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-22-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9',
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-22-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162',
                    },
                    yValue: -57,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-22-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab',
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-22-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9',
                    },
                    yValue: 50,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-22-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162',
                    },
                    yValue: 65,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518155600700,
    },
    'a-25': {
      id: 'a-25',
      title: 'Fade in photos 2',
      continuousParameterGroups: [
        {
          id: 'a-25-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-25-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab',
                    },
                    yValue: 50,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-25-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9',
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-25-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162',
                    },
                    yValue: -57,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-25-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|cbb3d1df-135d-38b9-2639-ef0a5a268cab',
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-25-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|dd4402b4-90dc-d8b7-2687-580cf9ede4b9',
                    },
                    yValue: 50,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-25-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|896c3f88-47da-ae3c-121a-013228f5d162',
                    },
                    yValue: 65,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518155600700,
    },
    'a-23': {
      id: 'a-23',
      title: 'move left',
      continuousParameterGroups: [
        {
          id: 'a-23-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-23-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|206d532b-42ea-0990-a7a1-b27cb5cbef49',
                    },
                    xValue: 0,
                    xUnit: 'VW',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-23-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|206d532b-42ea-0990-a7a1-b27cb5cbef49',
                    },
                    xValue: -10,
                    xUnit: 'VW',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518155770083,
    },
    'a-24': {
      id: 'a-24',
      title: 'move photos',
      continuousParameterGroups: [
        {
          id: 'a-24-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-24-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|8c2e3a6f-9d69-8379-d95e-c681c8d7a6d2',
                    },
                    xValue: 0,
                    xUnit: 'VW',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-24-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|85bbf70f-d786-7b42-0f66-25a884590d95',
                    },
                    xValue: 0,
                    xUnit: 'VW',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-24-n-5',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|21131eaf-d085-a54a-7781-49cf1b7ca921',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-24-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|8c2e3a6f-9d69-8379-d95e-c681c8d7a6d2',
                    },
                    xValue: -15,
                    xUnit: 'VW',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-24-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|85bbf70f-d786-7b42-0f66-25a884590d95',
                    },
                    xValue: -10,
                    xUnit: 'VW',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-24-n-6',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|21131eaf-d085-a54a-7781-49cf1b7ca921',
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518155898773,
    },
    'a-26': {
      id: 'a-26',
      title: 'Pop in reviews',
      continuousParameterGroups: [
        {
          id: 'a-26-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 10,
              actionItems: [
                {
                  id: 'a-26-n',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|309dffe6-b562-6355-fe41-8328e22c6d17',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
                {
                  id: 'a-26-n-3',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|4a1ae388-9544-3962-587e-5c68fcedcb50',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
                {
                  id: 'a-26-n-5',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|995b82e1-a248-c262-859c-511952db7396',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: 'a-26-n-2',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: 'inOutBack',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|309dffe6-b562-6355-fe41-8328e22c6d17',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: 'a-26-n-4',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: 'inOutQuad',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|4a1ae388-9544-3962-587e-5c68fcedcb50',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: 'a-26-n-6',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: 'inOutBack',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|995b82e1-a248-c262-859c-511952db7396',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518157399871,
    },
    'a-27': {
      id: 'a-27',
      title: 'Pop in to scroll',
      continuousParameterGroups: [
        {
          id: 'a-27-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 5,
              actionItems: [
                {
                  id: 'a-27-n',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|53d3a6af-d38d-4623-ee39-ecf0f977bb2e',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
                {
                  id: 'a-27-n-3',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|d8489c88-da08-89e6-0af6-13e9a17d2892',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
                {
                  id: 'a-27-n-5',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|4924e324-d86c-efcb-e065-94ceb8bc525c',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
                {
                  id: 'a-27-n-7',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|025ba718-3b59-d7c6-7072-7f38bbebea1d',
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: 'a-27-n-2',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: 'inOutBack',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|53d3a6af-d38d-4623-ee39-ecf0f977bb2e',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: 'a-27-n-4',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: 'inOutBack',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|d8489c88-da08-89e6-0af6-13e9a17d2892',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: 'a-27-n-6',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: 'inOutBack',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|4924e324-d86c-efcb-e065-94ceb8bc525c',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: 'a-27-n-8',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id:
                        '5a7bc61b5301890001e60d88|025ba718-3b59-d7c6-7072-7f38bbebea1d',
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1518157596131,
    },
    'a-28': {
      id: 'a-28',
      title: 'bar load',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-28-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8517810-bdd8-77b8-636f-4357cb2ed637',
                },
                xValue: 0,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-28-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'swingTo',
                duration: 4500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8517810-bdd8-77b8-636f-4357cb2ed637',
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      createdOn: 1518159944897,
      useFirstGroupAsInitialState: true,
    },
    'a-29': {
      id: 'a-29',
      title: 'Wiggle Booking Engine',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-29-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|db6dc86a-9326-dd20-fc12-fb89c0d894ca',
                },
                xValue: 1.02,
                yValue: 1.02,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-29-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|db6dc86a-9326-dd20-fc12-fb89c0d894ca',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      createdOn: 1518160245017,
      useFirstGroupAsInitialState: false,
    },
    'a-30': {
      id: 'a-30',
      title: 'Show Tool tip',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-30-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '47e445f6-a9e2-ff76-a91a-958fd4a8bc2e' },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-30-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: { id: '47e445f6-a9e2-ff76-a91a-958fd4a8bc2e' },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      createdOn: 1518236901066,
      useFirstGroupAsInitialState: true,
    },
    'a-31': {
      id: 'a-31',
      title: 'Hide tool tip',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-31-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '47e445f6-a9e2-ff76-a91a-958fd4a8bc2e' },
                value: 0,
                unit: '',
              },
            },
          ],
        },
      ],
      createdOn: 1518236994829,
      useFirstGroupAsInitialState: false,
    },
    'a-32': {
      id: 'a-32',
      title: 'Show tweet box',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-32-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '1cfac524-b5b7-2a34-ec50-8d3995e92535' },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-32-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'none',
                target: { id: '1cfac524-b5b7-2a34-ec50-8d3995e92535' },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-32-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'block',
                target: { id: '1cfac524-b5b7-2a34-ec50-8d3995e92535' },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-32-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '1cfac524-b5b7-2a34-ec50-8d3995e92535' },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      createdOn: 1518323169947,
      useFirstGroupAsInitialState: true,
    },
    'a-33': {
      id: 'a-33',
      title: 'Slider animation',
      actionItemGroups: [],
      createdOn: 1518385832136,
      useFirstGroupAsInitialState: false,
    },
    'a-34': {
      id: 'a-34',
      title: 'Show modal',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-34-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'none',
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75',
                },
              },
            },
            {
              id: 'a-34-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-34-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844',
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-34-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844',
                },
                yValue: -50,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-34-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'block',
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75',
                },
              },
            },
            {
              id: 'a-34-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75',
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-34-n-6',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-34-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844',
                },
                yValue: -50,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518391116028,
      useFirstGroupAsInitialState: true,
    },
    'a-35': {
      id: 'a-35',
      title: 'hide modal',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-35-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75',
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-35-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 500,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844',
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-35-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|869608ad-ee5f-500c-cec4-367ff69a9844',
                },
                yValue: -50,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-35-n-5',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                value: 'none',
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|c8e667b6-77d1-6a93-b68a-20fe96e45f75',
                },
              },
            },
          ],
        },
      ],
      createdOn: 1518391116028,
      useFirstGroupAsInitialState: false,
    },
    'a-36': {
      id: 'a-36',
      title: 'Menu Open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-36-n',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|04d1347d-d036-b32e-985c-25a11a43abf0',
                },
                zValue: 45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-36-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|04d1347d-d036-b32e-985c-25a11a43abf0',
                },
                yValue: 12,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-36-n-3',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|b4dd2ab0-0b56-54cf-bcba-3ad19452249b',
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-36-n-4',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|ce7788a7-05e8-d2d5-6508-f5b846f0486d',
                },
                zValue: -45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-36-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|ce7788a7-05e8-d2d5-6508-f5b846f0486d',
                },
                yValue: -13,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518418267867,
      useFirstGroupAsInitialState: false,
    },
    'a-37': {
      id: 'a-37',
      title: 'Menu Close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-37-n',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|04d1347d-d036-b32e-985c-25a11a43abf0',
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-37-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|04d1347d-d036-b32e-985c-25a11a43abf0',
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-37-n-3',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|b4dd2ab0-0b56-54cf-bcba-3ad19452249b',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-37-n-4',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|ce7788a7-05e8-d2d5-6508-f5b846f0486d',
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-37-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutBack',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|ce7788a7-05e8-d2d5-6508-f5b846f0486d',
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      createdOn: 1518418267867,
      useFirstGroupAsInitialState: false,
    },
    'e-71-rubberBand': {
      id: 'e-71-rubberBand',
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|38b2819c-cddb-0776-51d9-a402ecd15096',
                  useEventTarget: true,
                },
                xValue: 1.25,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outElastic',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|38b2819c-cddb-0776-51d9-a402ecd15096',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
          ],
        },
      ],
    },
    'e-73-rubberBand': {
      id: 'e-73-rubberBand',
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 100,
                easing: 'outQuart',
                duration: 250,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d488a60a-25b9-93e7-91d3-e17a82bc7622',
                  useEventTarget: true,
                },
                xValue: 1.25,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outElastic',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|d488a60a-25b9-93e7-91d3-e17a82bc7622',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
          ],
        },
      ],
    },
    'e-75-growIn': {
      id: 'e-75-growIn',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c',
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    'e-77-growBigIn': {
      id: 'e-77-growBigIn',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 150,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    'e-79-flyInRight': {
      id: 'e-79-flyInRight',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
                  useEventTarget: true,
                },
                xValue: 800,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
                  useEventTarget: true,
                },
                xValue: 0.25,
                yValue: 0.25,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|2808e55f-3474-2aca-c091-cd6ee413a3b4',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    'e-81-flyInRight': {
      id: 'e-81-flyInRight',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 250,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
                  useEventTarget: true,
                },
                xValue: 800,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 250,
                duration: 0,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
                  useEventTarget: true,
                },
                xValue: 0.25,
                yValue: 0.25,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id:
                    '5a7bc61b5301890001e60d88|9f662b4a-97fc-2ab6-f4ea-0ef50074286d',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: 'main', min: 992, max: 10000 },
      { key: 'medium', min: 768, max: 991 },
      { key: 'small', min: 480, max: 767 },
      { key: 'tiny', min: 0, max: 479 },
    ],
  },
});
