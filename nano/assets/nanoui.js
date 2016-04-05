!function (e) {
    function t(e, t, n, a) {
        for (var r, i = n.slice(), l = s(t, e), o = 0, c = i.length; c > o && (handler = i[o], "object" == typeof handler && "function" == typeof handler.handleEvent ? handler.handleEvent(l) : handler.call(e, l), !l.stoppedImmediatePropagation); o++);
        return r = !l.stoppedPropagation, a && r && e.parentNode ? e.parentNode.dispatchEvent(l) : !l.defaultPrevented
    }

    function n(e, t) {
        return {configurable: !0, get: e, set: t}
    }

    function a(e, t, a) {
        var s = b(t || e, a);
        g(e, "textContent", n(function () {
            return s.get.call(this)
        }, function (e) {
            s.set.call(this, e)
        }))
    }

    function s(e, t) {
        return e.currentTarget = t, e.eventPhase = e.target === e.currentTarget ? 2 : 3, e
    }

    function r(e, t) {
        for (var n = e.length; n-- && e[n] !== t;);
        return n
    }

    function i() {
        if ("BR" === this.tagName)return "\n";
        for (var e = this.firstChild, t = []; e;)8 !== e.nodeType && 7 !== e.nodeType && t.push(e.textContent), e = e.nextSibling;
        return t.join("")
    }

    function l(e) {
        var t = document.createEvent("Event");
        t.initEvent("input", !0, !0), (e.srcElement || e.fromElement || document).dispatchEvent(t)
    }

    function o(e) {
        !p && x.test(document.readyState) && (p = !p, document.detachEvent(h, o), e = document.createEvent("Event"), e.initEvent(f, !0, !0), document.dispatchEvent(e))
    }

    function c(e) {
        for (var t; t = this.lastChild;)this.removeChild(t);
        null != e && this.appendChild(document.createTextNode(e))
    }

    function u(t, n) {
        return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n
    }

    if (!document.createEvent) {
        var d = !0, p = !1, h = "onreadystatechange", f = "DOMContentLoaded", v = "__IE8__" + Math.random(), g = Object.defineProperty || function (e, t, n) {
                e[t] = n.value
            }, m = Object.defineProperties || function (t, n) {
                for (var a in n)if (y.call(n, a))try {
                    g(t, a, n[a])
                } catch (s) {
                    e.console
                }
            }, b = Object.getOwnPropertyDescriptor, y = Object.prototype.hasOwnProperty, k = e.Element.prototype, w = e.Text.prototype, E = /^[a-z]+$/, x = /loaded|complete/, T = {}, S = document.createElement("div"), _ = document.documentElement, O = _.removeAttribute, P = _.setAttribute;
        a(e.HTMLCommentElement.prototype, k, "nodeValue"), a(e.HTMLScriptElement.prototype, null, "text"), a(w, null, "nodeValue"), a(e.HTMLTitleElement.prototype, null, "text"), g(e.HTMLStyleElement.prototype, "textContent", function (e) {
            return n(function () {
                return e.get.call(this.styleSheet)
            }, function (t) {
                e.set.call(this.styleSheet, t)
            })
        }(b(e.CSSStyleSheet.prototype, "cssText"))), m(k, {
            textContent: {get: i, set: c},
            firstElementChild: {
                get: function () {
                    for (var e = this.childNodes || [], t = 0, n = e.length; n > t; t++)if (1 == e[t].nodeType)return e[t]
                }
            },
            lastElementChild: {
                get: function () {
                    for (var e = this.childNodes || [], t = e.length; t--;)if (1 == e[t].nodeType)return e[t]
                }
            },
            oninput: {
                get: function () {
                    return this._oninput || null
                }, set: function (e) {
                    this._oninput && (this.removeEventListener("input", this._oninput), this._oninput = e, e && this.addEventListener("input", e))
                }
            },
            previousElementSibling: {
                get: function () {
                    for (var e = this.previousSibling; e && 1 != e.nodeType;)e = e.previousSibling;
                    return e
                }
            },
            nextElementSibling: {
                get: function () {
                    for (var e = this.nextSibling; e && 1 != e.nodeType;)e = e.nextSibling;
                    return e
                }
            },
            childElementCount: {
                get: function () {
                    for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += 1 == t[n].nodeType);
                    return e
                }
            },
            addEventListener: {
                value: function (e, n, a) {
                    var s, i, o = this, c = "on" + e, d = o[v] || g(o, v, {value: {}})[v], p = d[c] || (d[c] = {}), h = p.h || (p.h = []);
                    if (!y.call(p, "w")) {
                        if (p.w = function (e) {
                                return e[v] || t(o, u(o, e), h, !1)
                            }, !y.call(T, c))if (E.test(e)) {
                            try {
                                s = document.createEventObject(), s[v] = !0, 9 != o.nodeType && null == o.parentNode && S.appendChild(o), (i = o.getAttribute(c)) && O.call(o, c), o.fireEvent(c, s), T[c] = !0
                            } catch (s) {
                                for (T[c] = !1; S.hasChildNodes();)S.removeChild(S.firstChild)
                            }
                            null != i && P.call(o, c, i)
                        } else T[c] = !1;
                        (p.n = T[c]) && o.attachEvent(c, p.w)
                    }
                    r(h, n) < 0 && h[a ? "unshift" : "push"](n), "input" === e && o.attachEvent("onkeyup", l)
                }
            },
            dispatchEvent: {
                value: function (e) {
                    var n, a = this, s = "on" + e.type, r = a[v], i = r && r[s], l = !!i;
                    return e.target || (e.target = a), l ? i.n ? a.fireEvent(s, e) : t(a, e, i.h, !0) : (n = a.parentNode) ? n.dispatchEvent(e) : !0, !e.defaultPrevented
                }
            },
            removeEventListener: {
                value: function (e, t, n) {
                    var a = this, s = "on" + e, i = a[v], l = i && i[s], o = l && l.h, c = o ? r(o, t) : -1;
                    c > -1 && o.splice(c, 1)
                }
            }
        }), m(w, {
            addEventListener: {value: k.addEventListener},
            dispatchEvent: {value: k.dispatchEvent},
            removeEventListener: {value: k.removeEventListener}
        }), m(e.XMLHttpRequest.prototype, {
            addEventListener: {
                value: function (e, t, n) {
                    var a = this, s = "on" + e, i = a[v] || g(a, v, {value: {}})[v], l = i[s] || (i[s] = {}), o = l.h || (l.h = []);
                    r(o, t) < 0 && (a[s] || (a[s] = function () {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), a.dispatchEvent(t)
                    }), o[n ? "unshift" : "push"](t))
                }
            }, dispatchEvent: {
                value: function (e) {
                    var n = this, a = "on" + e.type, s = n[v], r = s && s[a], i = !!r;
                    return i && (r.n ? n.fireEvent(a, e) : t(n, e, r.h, !0))
                }
            }, removeEventListener: {value: k.removeEventListener}
        }), m(e.Event.prototype, {
            bubbles: {value: !0, writable: !0},
            cancelable: {value: !0, writable: !0},
            preventDefault: {
                value: function () {
                    this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1)
                }
            },
            stopPropagation: {
                value: function () {
                    this.stoppedPropagation = !0, this.cancelBubble = !0
                }
            },
            stopImmediatePropagation: {
                value: function () {
                    this.stoppedImmediatePropagation = !0, this.stopPropagation()
                }
            },
            initEvent: {
                value: function (e, t, n) {
                    this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation()
                }
            }
        }), m(e.HTMLDocument.prototype, {
            defaultView: {
                get: function () {
                    return this.parentWindow
                }
            },
            textContent: {
                get: function () {
                    return 11 === this.nodeType ? i.call(this) : null
                }, set: function (e) {
                    11 === this.nodeType && c.call(this, e)
                }
            },
            addEventListener: {
                value: function (t, n, a) {
                    var s = this;
                    k.addEventListener.call(s, t, n, a), d && t === f && !x.test(s.readyState) && (d = !1, s.attachEvent(h, o), e == top && !function r(e) {
                        try {
                            s.documentElement.doScroll("left"), o()
                        } catch (t) {
                            setTimeout(r, 50)
                        }
                    }())
                }
            },
            dispatchEvent: {value: k.dispatchEvent},
            removeEventListener: {value: k.removeEventListener},
            createEvent: {
                value: function (e) {
                    var t;
                    if ("Event" !== e)throw Error("unsupported " + e);
                    return t = document.createEventObject(), t.timeStamp = (new Date).getTime(), t
                }
            }
        }), m(e.Window.prototype, {
            getComputedStyle: {
                value: function () {
                    function e(e) {
                        this._ = e
                    }

                    function t() {
                    }

                    var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/, a = /^(top|right|bottom|left)$/, s = /\-([a-z])/g, r = function (e, t) {
                        return t.toUpperCase()
                    };
                    return e.prototype.getPropertyValue = function (e) {
                        var t, i, l, o = this._, c = o.style, u = o.currentStyle, d = o.runtimeStyle;
                        return e = ("float" === e ? "style-float" : e).replace(s, r), t = u ? u[e] : c[e], n.test(t) && !a.test(e) && (i = c.left, l = d && d.left, l && (d.left = u.left), c.left = "fontSize" === e ? "1em" : t, t = c.pixelLeft + "px", c.left = i, l && (d.left = l)), null == t ? t : t + "" || "auto"
                    }, t.prototype.getPropertyValue = function () {
                        return null
                    }, function (n, a) {
                        return a ? new t(n) : new e(n)
                    }
                }()
            }, addEventListener: {
                value: function (n, a, s) {
                    var i, l = e, o = "on" + n;
                    l[o] || (l[o] = function (e) {
                        return t(l, u(l, e), i, !1)
                    }), i = l[o][v] || (l[o][v] = []), r(i, a) < 0 && i[s ? "unshift" : "push"](a)
                }
            }, dispatchEvent: {
                value: function (t) {
                    var n = e["on" + t.type];
                    return n ? n.call(e, t) !== !1 && !t.defaultPrevented : !0
                }
            }, removeEventListener: {
                value: function (t, n, a) {
                    var s = "on" + t, i = (e[s] || Object)[v], l = i ? r(i, n) : -1;
                    l > -1 && i.splice(l, 1)
                }
            }
        }), function (e, t, n) {
            for (n = 0; n < t.length; n++)document.createElement(t[n]);
            e.length || document.createStyleSheet(""), e[0].addRule(t.join(","), "display:block;")
        }(document.styleSheets, ["header", "nav", "section", "article", "aside", "footer"])
    }
}(this.window || global), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.returnExports = t()
}(this, function () {
    var e, t = Array, n = t.prototype, a = Object, s = a.prototype, r = Function.prototype, i = String, l = i.prototype, o = Number, c = o.prototype, u = n.slice, d = n.splice, p = n.push, h = n.unshift, f = n.concat, v = r.call, g = Math.max, m = Math.min, b = s.toString, y = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, k = Function.prototype.toString, w = function (e) {
        try {
            return k.call(e), !0
        } catch (t) {
            return !1
        }
    }, E = "[object Function]", x = "[object GeneratorFunction]";
    e = function (e) {
        if ("function" != typeof e)return !1;
        if (y)return w(e);
        var t = b.call(e);
        return t === E || t === x
    };
    var T, S = RegExp.prototype.exec, _ = function (e) {
        try {
            return S.call(e), !0
        } catch (t) {
            return !1
        }
    }, O = "[object RegExp]";
    T = function (e) {
        return "object" != typeof e ? !1 : y ? _(e) : b.call(e) === O
    };
    var P, C = String.prototype.valueOf, L = function (e) {
        try {
            return C.call(e), !0
        } catch (t) {
            return !1
        }
    }, M = "[object String]";
    P = function (e) {
        return "string" == typeof e ? !0 : "object" != typeof e ? !1 : y ? L(e) : b.call(e) === M
    };
    var j = function (e) {
        var t, n = a.defineProperty && function () {
                try {
                    var e = {};
                    a.defineProperty(e, "x", {enumerable: !1, value: e});
                    for (var t in e)return !1;
                    return e.x === e
                } catch (n) {
                    return !1
                }
            }();
        return t = n ? function (e, t, n, s) {
            !s && t in e || a.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: !0, value: n})
        } : function (e, t, n, a) {
            !a && t in e || (e[t] = n)
        }, function (n, a, s) {
            for (var r in a)e.call(a, r) && t(n, r, a[r], s)
        }
    }(s.hasOwnProperty), A = function (e) {
        var t = typeof e;
        return null === e || "object" !== t && "function" !== t
    }, N = o.isNaN || function (e) {
            return e !== e
        }, D = {
        ToInteger: function (e) {
            var t = +e;
            return N(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
        }, ToPrimitive: function (t) {
            var n, a, s;
            if (A(t))return t;
            if (a = t.valueOf, e(a) && (n = a.call(t), A(n)))return n;
            if (s = t.toString, e(s) && (n = s.call(t), A(n)))return n;
            throw new TypeError
        }, ToObject: function (e) {
            if (null == e)throw new TypeError("can't convert " + e + " to object");
            return a(e)
        }, ToUint32: function (e) {
            return e >>> 0
        }
    }, I = function () {
    };
    j(r, {
        bind: function (t) {
            var n = this;
            if (!e(n))throw new TypeError("Function.prototype.bind called on incompatible " + n);
            for (var s, r = u.call(arguments, 1), i = function () {
                if (this instanceof s) {
                    var e = n.apply(this, f.call(r, u.call(arguments)));
                    return a(e) === e ? e : this
                }
                return n.apply(t, f.call(r, u.call(arguments)))
            }, l = g(0, n.length - r.length), o = [], c = 0; l > c; c++)p.call(o, "$" + c);
            return s = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this, arguments); }")(i), n.prototype && (I.prototype = n.prototype, s.prototype = new I, I.prototype = null), s
        }
    });
    var R = v.bind(s.hasOwnProperty), z = v.bind(s.toString), q = v.bind(l.slice), F = v.bind(l.split), U = v.bind(l.indexOf), B = v.bind(p), H = t.isArray || function (e) {
            return "[object Array]" === z(e)
        }, V = 1 !== [].unshift(0);
    j(n, {
        unshift: function () {
            return h.apply(this, arguments), this.length
        }
    }, V), j(t, {isArray: H});
    var $ = a("a"), W = "a" !== $[0] || !(0 in $), J = function (e) {
        var t = !0, n = !0;
        return e && (e.call("foo", function (e, n, a) {
            "object" != typeof a && (t = !1)
        }), e.call([1], function () {
            "use strict";
            n = "string" == typeof this
        }, "x")), !!e && t && n
    };
    j(n, {
        forEach: function (t) {
            var n, a = D.ToObject(this), s = W && P(this) ? F(this, "") : a, r = -1, i = D.ToUint32(s.length);
            if (arguments.length > 1 && (n = arguments[1]), !e(t))throw new TypeError("Array.prototype.forEach callback must be a function");
            for (; ++r < i;)r in s && (void 0 === n ? t(s[r], r, a) : t.call(n, s[r], r, a))
        }
    }, !J(n.forEach)), j(n, {
        map: function (n) {
            var a, s = D.ToObject(this), r = W && P(this) ? F(this, "") : s, i = D.ToUint32(r.length), l = t(i);
            if (arguments.length > 1 && (a = arguments[1]), !e(n))throw new TypeError("Array.prototype.map callback must be a function");
            for (var o = 0; i > o; o++)o in r && (void 0 === a ? l[o] = n(r[o], o, s) : l[o] = n.call(a, r[o], o, s));
            return l
        }
    }, !J(n.map)), j(n, {
        filter: function (t) {
            var n, a, s = D.ToObject(this), r = W && P(this) ? F(this, "") : s, i = D.ToUint32(r.length), l = [];
            if (arguments.length > 1 && (a = arguments[1]), !e(t))throw new TypeError("Array.prototype.filter callback must be a function");
            for (var o = 0; i > o; o++)o in r && (n = r[o], (void 0 === a ? t(n, o, s) : t.call(a, n, o, s)) && B(l, n));
            return l
        }
    }, !J(n.filter)), j(n, {
        every: function (t) {
            var n, a = D.ToObject(this), s = W && P(this) ? F(this, "") : a, r = D.ToUint32(s.length);
            if (arguments.length > 1 && (n = arguments[1]), !e(t))throw new TypeError("Array.prototype.every callback must be a function");
            for (var i = 0; r > i; i++)if (i in s && !(void 0 === n ? t(s[i], i, a) : t.call(n, s[i], i, a)))return !1;
            return !0
        }
    }, !J(n.every)), j(n, {
        some: function (t) {
            var n, a = D.ToObject(this), s = W && P(this) ? F(this, "") : a, r = D.ToUint32(s.length);
            if (arguments.length > 1 && (n = arguments[1]), !e(t))throw new TypeError("Array.prototype.some callback must be a function");
            for (var i = 0; r > i; i++)if (i in s && (void 0 === n ? t(s[i], i, a) : t.call(n, s[i], i, a)))return !0;
            return !1
        }
    }, !J(n.some));
    var G = !1;
    n.reduce && (G = "object" == typeof n.reduce.call("es5", function (e, t, n, a) {
        return a
    })), j(n, {
        reduce: function (t) {
            var n = D.ToObject(this), a = W && P(this) ? F(this, "") : n, s = D.ToUint32(a.length);
            if (!e(t))throw new TypeError("Array.prototype.reduce callback must be a function");
            if (0 === s && 1 === arguments.length)throw new TypeError("reduce of empty array with no initial value");
            var r, i = 0;
            if (arguments.length >= 2)r = arguments[1]; else for (; ;) {
                if (i in a) {
                    r = a[i++];
                    break
                }
                if (++i >= s)throw new TypeError("reduce of empty array with no initial value")
            }
            for (; s > i; i++)i in a && (r = t(r, a[i], i, n));
            return r
        }
    }, !G);
    var X = !1;
    n.reduceRight && (X = "object" == typeof n.reduceRight.call("es5", function (e, t, n, a) {
        return a
    })), j(n, {
        reduceRight: function (t) {
            var n = D.ToObject(this), a = W && P(this) ? F(this, "") : n, s = D.ToUint32(a.length);
            if (!e(t))throw new TypeError("Array.prototype.reduceRight callback must be a function");
            if (0 === s && 1 === arguments.length)throw new TypeError("reduceRight of empty array with no initial value");
            var r, i = s - 1;
            if (arguments.length >= 2)r = arguments[1]; else for (; ;) {
                if (i in a) {
                    r = a[i--];
                    break
                }
                if (--i < 0)throw new TypeError("reduceRight of empty array with no initial value")
            }
            if (0 > i)return r;
            do i in a && (r = t(r, a[i], i, n)); while (i--);
            return r
        }
    }, !X);
    var Z = n.indexOf && -1 !== [0, 1].indexOf(1, 2);
    j(n, {
        indexOf: function (e) {
            var t = W && P(this) ? F(this, "") : D.ToObject(this), n = D.ToUint32(t.length);
            if (0 === n)return -1;
            var a = 0;
            for (arguments.length > 1 && (a = D.ToInteger(arguments[1])), a = a >= 0 ? a : g(0, n + a); n > a; a++)if (a in t && t[a] === e)return a;
            return -1
        }
    }, Z);
    var Y = n.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
    j(n, {
        lastIndexOf: function (e) {
            var t = W && P(this) ? F(this, "") : D.ToObject(this), n = D.ToUint32(t.length);
            if (0 === n)return -1;
            var a = n - 1;
            for (arguments.length > 1 && (a = m(a, D.ToInteger(arguments[1]))), a = a >= 0 ? a : n - Math.abs(a); a >= 0; a--)if (a in t && e === t[a])return a;
            return -1
        }
    }, Y);
    var K = function () {
        var e = [1, 2], t = e.splice();
        return 2 === e.length && H(t) && 0 === t.length
    }();
    j(n, {
        splice: function (e, t) {
            return 0 === arguments.length ? [] : d.apply(this, arguments)
        }
    }, !K);
    var Q = function () {
        var e = {};
        return n.splice.call(e, 0, 0, 1), 1 === e.length
    }();
    j(n, {
        splice: function (e, t) {
            if (0 === arguments.length)return [];
            var n = arguments;
            return this.length = g(D.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = u.call(arguments), n.length < 2 ? B(n, this.length - e) : n[1] = D.ToInteger(t)), d.apply(this, n)
        }
    }, !Q);
    var ee = function () {
        var e = new t(1e5);
        return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
    }(), te = function () {
        var e = 256, t = [];
        return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e]
    }();
    j(n, {
        splice: function (e, t) {
            for (var n, a = D.ToObject(this), s = [], r = D.ToUint32(a.length), l = D.ToInteger(e), o = 0 > l ? g(r + l, 0) : m(l, r), c = m(g(D.ToInteger(t), 0), r - o), d = 0; c > d;)n = i(o + d), R(a, n) && (s[d] = a[n]), d += 1;
            var p, h = u.call(arguments, 2), f = h.length;
            if (c > f) {
                for (d = o; r - c > d;)n = i(d + c), p = i(d + f), R(a, n) ? a[p] = a[n] : delete a[p], d += 1;
                for (d = r; d > r - c + f;)delete a[d - 1], d -= 1
            } else if (f > c)for (d = r - c; d > o;)n = i(d + c - 1), p = i(d + f - 1), R(a, n) ? a[p] = a[n] : delete a[p], d -= 1;
            d = o;
            for (var v = 0; v < h.length; ++v)a[d] = h[v], d += 1;
            return a.length = r - c + f, s
        }
    }, !ee || !te);
    var ne = "1,2" !== [1, 2].join(void 0), ae = n.join;
    j(n, {
        join: function (e) {
            return ae.call(this, void 0 === e ? "," : e)
        }
    }, ne);
    var se = function (e) {
        for (var t = D.ToObject(this), n = D.ToUint32(t.length), a = 0; a < arguments.length;)t[n + a] = arguments[a], a += 1;
        return t.length = n + a, n + a
    }, re = function () {
        var e = {}, t = Array.prototype.push.call(e, void 0);
        return 1 !== t || 1 !== e.length || void 0 !== e[0] || !R(e, 0)
    }();
    j(n, {
        push: function (e) {
            return H(this) ? p.apply(this, arguments) : se.apply(this, arguments)
        }
    }, re);
    var ie = function () {
        var e = [], t = e.push(void 0);
        return 1 !== t || 1 !== e.length || void 0 !== e[0] || !R(e, 0)
    }();
    j(n, {push: se}, ie);
    var le = !{toString: null}.propertyIsEnumerable("toString"), oe = function () {
    }.propertyIsEnumerable("prototype"), ce = !R("x", "0"), ue = function (e) {
        var t = e.constructor;
        return t && t.prototype === e
    }, de = {
        $window: !0,
        $console: !0,
        $parent: !0,
        $self: !0,
        $frame: !0,
        $frames: !0,
        $frameElement: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0
    }, pe = function () {
        if ("undefined" == typeof window)return !1;
        for (var e in window)try {
            !de["$" + e] && R(window, e) && null !== window[e] && "object" == typeof window[e] && ue(window[e])
        } catch (t) {
            return !0
        }
        return !1
    }(), he = function (e) {
        if ("undefined" == typeof window || !pe)return ue(e);
        try {
            return ue(e)
        } catch (t) {
            return !1
        }
    }, fe = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], ve = fe.length, ge = function (e) {
        return "[object Arguments]" === z(e)
    }, me = function (t) {
        return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !H(t) && e(t.callee)
    }, be = ge(arguments) ? ge : me;
    j(a, {
        keys: function (t) {
            var n = e(t), a = be(t), s = null !== t && "object" == typeof t, r = s && P(t);
            if (!s && !n && !a)throw new TypeError("Object.keys called on a non-object");
            var l = [], o = oe && n;
            if (r && ce || a)for (var c = 0; c < t.length; ++c)B(l, i(c));
            if (!a)for (var u in t)o && "prototype" === u || !R(t, u) || B(l, i(u));
            if (le)for (var d = he(t), p = 0; ve > p; p++) {
                var h = fe[p];
                d && "constructor" === h || !R(t, h) || B(l, h)
            }
            return l
        }
    });
    var ye = a.keys && function () {
            return 2 === a.keys(arguments).length
        }(1, 2), ke = a.keys && function () {
            var e = a.keys(arguments);
            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
        }(1), we = a.keys;
    j(a, {
        keys: function (e) {
            return we(be(e) ? u.call(e) : e)
        }
    }, !ye || ke);
    var Ee = -621987552e5, xe = "-000001", Te = Date.prototype.toISOString && -1 === new Date(Ee).toISOString().indexOf(xe), Se = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString();
    j(Date.prototype, {
        toISOString: function () {
            var e, t, n, a, s;
            if (!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");
            for (a = this.getUTCFullYear(), s = this.getUTCMonth(), a += Math.floor(s / 12), s = (s % 12 + 12) % 12, e = [s + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], a = (0 > a ? "-" : a > 9999 ? "+" : "") + q("00000" + Math.abs(a), a >= 0 && 9999 >= a ? -4 : -6), t = e.length; t--;)n = e[t], 10 > n && (e[t] = "0" + n);
            return a + "-" + u.call(e, 0, 2).join("-") + "T" + u.call(e, 2).join(":") + "." + q("000" + this.getUTCMilliseconds(), -3) + "Z"
        }
    }, Te || Se);
    var _e = function () {
        try {
            return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(Ee).toJSON().indexOf(xe) && Date.prototype.toJSON.call({
                    toISOString: function () {
                        return !0
                    }
                })
        } catch (e) {
            return !1
        }
    }();
    _e || (Date.prototype.toJSON = function (t) {
        var n = a(this), s = D.ToPrimitive(n);
        if ("number" == typeof s && !isFinite(s))return null;
        var r = n.toISOString;
        if (!e(r))throw new TypeError("toISOString property is not callable");
        return r.call(n)
    });
    var Oe = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"), Pe = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")), Ce = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    if (Ce || Pe || !Oe) {
        var Le = Math.pow(2, 31) - 1, Me = (Math.floor(Le / 1e3), N(new Date(1970, 0, 1, 0, 0, 0, Le + 1).getTime()));
        Date = function (e) {
            var t = function (n, a, s, r, l, o, c) {
                var u, d = arguments.length;
                if (this instanceof e) {
                    var p = o, h = c;
                    if (Me && d >= 7 && c > Le) {
                        var f = Math.floor(c / Le) * Le, v = Math.floor(f / 1e3);
                        p += v, h -= 1e3 * v
                    }
                    u = 1 === d && i(n) === n ? new e(t.parse(n)) : d >= 7 ? new e(n, a, s, r, l, p, h) : d >= 6 ? new e(n, a, s, r, l, p) : d >= 5 ? new e(n, a, s, r, l) : d >= 4 ? new e(n, a, s, r) : d >= 3 ? new e(n, a, s) : d >= 2 ? new e(n, a) : d >= 1 ? new e(n) : new e
                } else u = e.apply(this, arguments);
                return A(u) || j(u, {constructor: t}, !0), u
            }, n = RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), a = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], s = function (e, t) {
                var n = t > 1 ? 1 : 0;
                return a[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
            }, r = function (t) {
                var n = 0, a = t;
                if (Me && a > Le) {
                    var s = Math.floor(a / Le) * Le, r = Math.floor(s / 1e3);
                    n += r, a -= 1e3 * r
                }
                return o(new e(1970, 0, 1, 0, 0, n, a))
            };
            for (var l in e)R(e, l) && (t[l] = e[l]);
            j(t, {now: e.now, UTC: e.UTC}, !0), t.prototype = e.prototype, j(t.prototype, {constructor: t}, !0);
            var c = function (t) {
                var a = n.exec(t);
                if (a) {
                    var i, l = o(a[1]), c = o(a[2] || 1) - 1, u = o(a[3] || 1) - 1, d = o(a[4] || 0), p = o(a[5] || 0), h = o(a[6] || 0), f = Math.floor(1e3 * o(a[7] || 0)), v = !(!a[4] || a[8]), g = "-" === a[9] ? 1 : -1, m = o(a[10] || 0), b = o(a[11] || 0), y = p > 0 || h > 0 || f > 0;
                    return (y ? 24 : 25) > d && 60 > p && 60 > h && 1e3 > f && c > -1 && 12 > c && 24 > m && 60 > b && u > -1 && u < s(l, c + 1) - s(l, c) && (i = 60 * (24 * (s(l, c) + u) + d + m * g), i = 1e3 * (60 * (i + p + b * g) + h) + f, v && (i = r(i)), i >= -864e13 && 864e13 >= i) ? i : NaN
                }
                return e.parse.apply(this, arguments)
            };
            return j(t, {parse: c}), t
        }(Date)
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var je = c.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)), Ae = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function (e, t) {
            for (var n = -1, a = t; ++n < Ae.size;)a += e * Ae.data[n], Ae.data[n] = a % Ae.base, a = Math.floor(a / Ae.base)
        },
        divide: function (e) {
            for (var t = Ae.size, n = 0; --t >= 0;)n += Ae.data[t], Ae.data[t] = Math.floor(n / e), n = n % e * Ae.base
        },
        numToString: function () {
            for (var e = Ae.size, t = ""; --e >= 0;)if ("" !== t || 0 === e || 0 !== Ae.data[e]) {
                var n = i(Ae.data[e]);
                "" === t ? t = n : t += q("0000000", 0, 7 - n.length) + n
            }
            return t
        },
        pow: function Ze(e, t, n) {
            return 0 === t ? n : t % 2 === 1 ? Ze(e, t - 1, n * e) : Ze(e * e, t / 2, n)
        },
        log: function (e) {
            for (var t = 0, n = e; n >= 4096;)t += 12, n /= 4096;
            for (; n >= 2;)t += 1, n /= 2;
            return t
        }
    }, Ne = function (e) {
        var t, n, a, s, r, l, c, u;
        if (t = o(e), t = N(t) ? 0 : Math.floor(t), 0 > t || t > 20)throw new RangeError("Number.toFixed called with invalid number of decimals");
        if (n = o(this), N(n))return "NaN";
        if (-1e21 >= n || n >= 1e21)return i(n);
        if (a = "", 0 > n && (a = "-", n = -n), s = "0", n > 1e-21)if (r = Ae.log(n * Ae.pow(2, 69, 1)) - 69, l = 0 > r ? n * Ae.pow(2, -r, 1) : n / Ae.pow(2, r, 1), l *= 4503599627370496, r = 52 - r, r > 0) {
            for (Ae.multiply(0, l), c = t; c >= 7;)Ae.multiply(1e7, 0), c -= 7;
            for (Ae.multiply(Ae.pow(10, c, 1), 0), c = r - 1; c >= 23;)Ae.divide(1 << 23), c -= 23;
            Ae.divide(1 << c), Ae.multiply(1, 1), Ae.divide(2), s = Ae.numToString()
        } else Ae.multiply(0, l), Ae.multiply(1 << -r, 0), s = Ae.numToString() + q("0.00000000000000000000", 2, 2 + t);
        return t > 0 ? (u = s.length, s = t >= u ? a + q("0.0000000000000000000", 0, t - u + 2) + s : a + q(s, 0, u - t) + "." + q(s, u - t)) : s = a + s, s
    };
    j(c, {toFixed: Ne}, je);
    var De = function () {
        try {
            return "1" === 1..toPrecision(void 0)
        } catch (e) {
            return !0
        }
    }(), Ie = c.toPrecision;
    j(c, {
        toPrecision: function (e) {
            return void 0 === e ? Ie.call(this) : Ie.call(this, e)
        }
    }, De), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function () {
        var e = void 0 === /()??/.exec("")[1], t = Math.pow(2, 32) - 1;
        l.split = function (n, a) {
            var s = this;
            if (void 0 === n && 0 === a)return [];
            if (!T(n))return F(this, n, a);
            var r, i, l, o, c = [], d = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (n.sticky ? "y" : ""), h = 0, f = RegExp(n.source, d + "g");
            s += "", e || (r = RegExp("^" + f.source + "$(?!\\s)", d));
            var v = void 0 === a ? t : D.ToUint32(a);
            for (i = f.exec(s); i && (l = i.index + i[0].length, !(l > h && (B(c, q(s, h, i.index)), !e && i.length > 1 && i[0].replace(r, function () {
                for (var e = 1; e < arguments.length - 2; e++)void 0 === arguments[e] && (i[e] = void 0)
            }), i.length > 1 && i.index < s.length && p.apply(c, u.call(i, 1)), o = i[0].length, h = l, c.length >= v)));)f.lastIndex === i.index && f.lastIndex++, i = f.exec(s);
            return h === s.length ? (o || !f.test("")) && B(c, "") : B(c, q(s, h)), c.length > v ? q(c, 0, v) : c
        }
    }() : "0".split(void 0, 0).length && (l.split = function (e, t) {
        return void 0 === e && 0 === t ? [] : F(this, e, t)
    });
    var Re = l.replace, ze = function () {
        var e = [];
        return "x".replace(/x(.)?/g, function (t, n) {
            B(e, n)
        }), 1 === e.length && void 0 === e[0]
    }();
    ze || (l.replace = function (t, n) {
        var a = e(n), s = T(t) && /\)[*?]/.test(t.source);
        if (a && s) {
            var r = function (e) {
                var a = arguments.length, s = t.lastIndex;
                t.lastIndex = 0;
                var r = t.exec(e) || [];
                return t.lastIndex = s, B(r, arguments[a - 2], arguments[a - 1]), n.apply(this, r)
            };
            return Re.call(this, t, r)
        }
        return Re.call(this, t, n)
    });
    var qe = l.substr, Fe = "".substr && "b" !== "0b".substr(-1);
    j(l, {
        substr: function (e, t) {
            var n = e;
            return 0 > e && (n = g(this.length + e, 0)), qe.call(this, n, t)
        }
    }, Fe);
    var Ue = "	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", Be = "​", He = "[" + Ue + "]", Ve = RegExp("^" + He + He + "*"), $e = RegExp(He + He + "*$"), We = l.trim && (Ue.trim() || !Be.trim());
    j(l, {
        trim: function () {
            if (void 0 === this || null === this)throw new TypeError("can't convert " + this + " to object");
            return i(this).replace(Ve, "").replace($e, "")
        }
    }, We);
    var Je = l.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
    j(l, {
        lastIndexOf: function (e) {
            if (void 0 === this || null === this)throw new TypeError("can't convert " + this + " to object");
            for (var t = i(this), n = i(e), a = arguments.length > 1 ? o(arguments[1]) : NaN, s = N(a) ? 1 / 0 : D.ToInteger(a), r = m(g(s, 0), t.length), l = n.length, c = r + l; c > 0;) {
                c = g(0, c - l);
                var u = U(q(t, c, r + l), n);
                if (-1 !== u)return c + u
            }
            return -1
        }
    }, Je);
    var Ge = l.lastIndexOf;
    if (j(l, {
            lastIndexOf: function (e) {
                return Ge.apply(this, arguments)
            }
        }, 1 !== l.lastIndexOf.length), (8 !== parseInt(Ue + "08") || 22 !== parseInt(Ue + "0x16")) && (parseInt = function (e) {
            var t = /^[\-+]?0[xX]/;
            return function (n, a) {
                var s = i(n).trim(), r = o(a) || (t.test(s) ? 16 : 10);
                return e(s, r)
            }
        }(parseInt)), new RangeError("test") + "" != "RangeError: test") {
        var Xe = (Error.prototype.toString, function () {
            if (void 0 === this || null === this)throw new TypeError("can't convert " + this + " to object");
            var e = this.name;
            void 0 === e ? e = "Error" : "string" != typeof e && (e = i(e));
            var t = this.message;
            return void 0 === t ? t = "" : "string" != typeof t && (t = i(t)), e ? t ? e + ": " + t : e : t
        });
        Error.prototype.toString = Xe
    }
}), function (e, t) {
    function n(e, t) {
        var n = e.createElement("p"), a = e.getElementsByTagName("head")[0] || e.documentElement;
        return n.innerHTML = "x<style>" + t + "</style>", a.insertBefore(n.lastChild, a.firstChild)
    }

    function a() {
        var e = y.elements;
        return "string" == typeof e ? e.split(" ") : e
    }

    function s(e, t) {
        var n = y.elements;
        "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, c(t)
    }

    function r(e) {
        var t = b[e[g]];
        return t || (t = {}, m++, e[g] = m, b[m] = t), t
    }

    function i(e, n, a) {
        if (n || (n = t), d)return n.createElement(e);
        a || (a = r(n));
        var s;
        return s = a.cache[e] ? a.cache[e].cloneNode() : v.test(e) ? (a.cache[e] = a.createElem(e)).cloneNode() : a.createElem(e), !s.canHaveChildren || f.test(e) || s.tagUrn ? s : a.frag.appendChild(s)
    }

    function l(e, n) {
        if (e || (e = t), d)return e.createDocumentFragment();
        n = n || r(e);
        for (var s = n.frag.cloneNode(), i = 0, l = a(), o = l.length; o > i; i++)s.createElement(l[i]);
        return s
    }

    function o(e, t) {
        t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
            return y.shivMethods ? i(n, e, t) : t.createElem(n)
        }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/[\w\-:]+/g, function (e) {
            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
        }) + ");return n}")(y, t.frag)
    }

    function c(e) {
        e || (e = t);
        var a = r(e);
        return !y.shivCSS || u || a.hasCSS || (a.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || o(e, a), e
    }

    var u, d, p = "3.7.3", h = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", m = 0, b = {};
    !function () {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>", u = "hidden"in e, d = 1 == e.childNodes.length || function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
            }()
        } catch (n) {
            u = !0, d = !0
        }
    }();
    var y = {
        elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: p,
        shivCSS: h.shivCSS !== !1,
        supportsUnknownElements: d,
        shivMethods: h.shivMethods !== !1,
        type: "default",
        shivDocument: c,
        createElement: i,
        createDocumentFragment: l,
        addElements: s
    };
    e.html5 = y, c(t), "object" == typeof module && module.exports && (module.exports = y)
}("undefined" != typeof window ? window : this, document), function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = e(); else if ("function" == typeof define && define.amd)define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.MiniSignal = e()
    }
}(function () {
    return function e(t, n, a) {
        function s(i, l) {
            if (!n[i]) {
                if (!t[i]) {
                    var o = "function" == typeof require && require;
                    if (!l && o)return o(i, !0);
                    if (r)return r(i, !0);
                    var c = Error("Cannot find module '" + i + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[i] = {exports: {}};
                t[i][0].call(u.exports, function (e) {
                    var n = t[i][1][e];
                    return s(n ? n : e)
                }, u, u.exports, e, t, n, a)
            }
            return n[i].exports
        }

        for (var r = "function" == typeof require && require, i = 0; i < a.length; i++)s(a[i]);
        return s
    }({
        1: [function (e, t, n) {
            "use strict";
            function a(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                return e._head ? (e._tail._next = t, t._prev = e._tail, e._tail = t) : (e._head = t, e._tail = t), t._owner = e, t
            }

            Object.defineProperty(n, "__esModule", {value: !0});
            var r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value"in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), i = function () {
                function e(t, n, s) {
                    void 0 === n && (n = !1), a(this, e), this._fn = t, this._once = n, this._thisArg = s, this._next = this._prev = this._owner = null
                }

                return r(e, [{
                    key: "detach", value: function () {
                        return null === this._owner ? !1 : (this._owner.detach(this), !0)
                    }
                }]), e
            }(), l = function () {
                function e() {
                    a(this, e), this._head = this._tail = void 0
                }

                return r(e, [{
                    key: "handlers", value: function () {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0], t = this._head;
                        if (e)return !!t;
                        for (var n = []; t;)n.push(t), t = t._next;
                        return n
                    }
                }, {
                    key: "has", value: function (e) {
                        if (!(e instanceof i))throw Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                        return e._owner === this
                    }
                }, {
                    key: "dispatch", value: function () {
                        var e = this._head;
                        if (!e)return !1;
                        for (; e;)e._fn.apply(e._thisArg, arguments), e._once && this.detach(e), e = e._next;
                        return !0
                    }
                }, {
                    key: "add", value: function (e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof e)throw Error("MiniSignal#add(): First arg must be a Function.");
                        return s(this, new i(e, !1, t))
                    }
                }, {
                    key: "once", value: function (e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof e)throw Error("MiniSignal#once(): First arg must be a Function.");
                        return s(this, new i(e, !0, t))
                    }
                }, {
                    key: "detach", value: function (e) {
                        if (!(e instanceof i))throw Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                        return e._owner !== this ? this : (e._prev && (e._prev._next = e._next), e._next && (e._next._prev = e._prev), e === this._head ? (this._head = e._next, null === e._next && (this._tail = null)) : e === this._tail && (this._tail = e._prev, this._tail._next = null), e._owner = null, this)
                    }
                }, {
                    key: "detachAll", value: function () {
                        var e = this._head;
                        if (!e)return this;
                        for (this._head = this._tail = null; e;)e._owner = null, e = e._next;
                        return this
                    }
                }]), e
            }();
            l.MiniSignalBinding = i, n["default"] = l, t.exports = n["default"]
        }, {}]
    }, {}, [1])(1)
}), function (e) {
    "use strict";
    function t() {
        return u.createDocumentFragment()
    }

    function n(e) {
        return u.createElement(e)
    }

    function a(e) {
        if (1 === e.length)return s(e[0]);
        for (var n = t(), a = q.call(e), r = 0; r < e.length; r++)n.appendChild(s(a[r]));
        return n
    }

    function s(e) {
        return "string" == typeof e ? u.createTextNode(e) : e
    }

    for (var r, i, l, o, c, u = e.document, d = Object.defineProperty || function (e, t, n) {
            e.__defineGetter__(t, n.get)
        }, p = [].indexOf || function (e) {
            for (var t = this.length; t-- && this[t] !== e;);
            return t
        }, h = function (e) {
        if (!e)throw"SyntaxError";
        if (b.test(e))throw"InvalidCharacterError";
        return e
    }, f = function (e) {
        var t = e.className, n = "object" == typeof t, a = (n ? t.baseVal : t).replace(m, "");
        a.length && z.push.apply(this, a.split(b)), this._isSVG = n, this._ = e
    }, v = {
        get: function () {
            return new f(this)
        }, set: function () {
        }
    }, g = "dom4-tmp-".concat(Math.random() * +new Date).replace(".", "-"), m = /^\s+|\s+$/g, b = /\s+/, y = " ", k = "classList", w = function (e, t) {
        return this.contains(e) ? t || this.remove(e) : (void 0 === t || t) && (t = !0, this.add(e)), !!t
    }, E = e.DocumentFragment, x = e.Node, T = (x || Element).prototype, S = e.CharacterData || x, _ = S && S.prototype, O = e.DocumentType, P = O && O.prototype, C = (e.Element || x || e.HTMLElement).prototype, L = e.HTMLSelectElement || n("select").constructor, M = L.prototype.remove, j = e.ShadowRoot, A = e.SVGElement, N = / /g, D = "\\ ", I = function (e) {
        var t = "querySelectorAll" === e;
        return function (n) {
            var a, s, r, i, l, o, c = this.parentNode;
            if (c) {
                for (r = this.getAttribute("id") || g, i = r === g ? r : r.replace(N, D), o = n.split(","), s = 0; s < o.length; s++)o[s] = "#" + i + " " + o[s];
                n = o.join(",")
            }
            if (r === g && this.setAttribute("id", r), l = (c || this)[e](n), r === g && this.removeAttribute("id"), t)for (s = l.length, a = Array(s); s--;)a[s] = l[s]; else a = l;
            return a
        }
    }, R = (function (e) {
        "query"in e || (e.query = C.query), "queryAll"in e || (e.queryAll = C.queryAll)
    }), z = ["matches", C.matchesSelector || C.webkitMatchesSelector || C.khtmlMatchesSelector || C.mozMatchesSelector || C.msMatchesSelector || C.oMatchesSelector || function (e) {
        var t = this.parentNode;
        return !!t && -1 < p.call(t.querySelectorAll(e), this)
    }, "closest", function (e) {
        for (var t, n = this; (t = n && n.matches) && !n.matches(e);)n = n.parentNode;
        return t ? n : null
    }, "prepend", function () {
        var e = this.firstChild, t = a(arguments);
        e ? this.insertBefore(t, e) : this.appendChild(t)
    }, "append", function () {
        this.appendChild(a(arguments))
    }, "before", function () {
        var e = this.parentNode;
        e && e.insertBefore(a(arguments), this)
    }, "after", function () {
        var e = this.parentNode, t = this.nextSibling, n = a(arguments);
        e && (t ? e.insertBefore(n, t) : e.appendChild(n))
    }, "replace", function () {
        this.replaceWith.apply(this, arguments)
    }, "replaceWith", function () {
        var e = this.parentNode;
        e && e.replaceChild(a(arguments), this)
    }, "remove", function () {
        var e = this.parentNode;
        e && e.removeChild(this)
    }, "query", I("querySelector"), "queryAll", I("querySelectorAll")], q = z.slice, F = z.length; F; F -= 2)i = z[F - 2], i in C || (C[i] = z[F - 1]), "remove" === i && (L.prototype[i] = function () {
        return 0 < arguments.length ? M.apply(this, arguments) : C.remove.call(this)
    }), /before|after|replace|remove/.test(i) && (!S || i in _ || (_[i] = z[F - 1]), !O || i in P || (P[i] = z[F - 1]));
    if (R(u), E)R(E.prototype); else try {
        R(t().constructor.prototype)
    } catch (U) {
    }
    j && R(j.prototype), n("a").matches("a") || (C[i] = function (e) {
        return function (n) {
            return e.call(this.parentNode ? this : t().appendChild(this), n)
        }
    }(C[i])), f.prototype = {
        length: 0, add: function () {
            for (var e, t = 0; t < arguments.length; t++)e = arguments[t], this.contains(e) || z.push.call(this, i);
            this._isSVG ? this._.setAttribute("class", "" + this) : this._.className = "" + this
        }, contains: function (e) {
            return function (t) {
                return F = e.call(this, i = h(t)), F > -1
            }
        }([].indexOf || function (e) {
            for (F = this.length; F-- && this[F] !== e;);
            return F
        }), item: function (e) {
            return this[e] || null
        }, remove: function () {
            for (var e, t = 0; t < arguments.length; t++)e = arguments[t], this.contains(e) && z.splice.call(this, F, 1);
            this._isSVG ? this._.setAttribute("class", "" + this) : this._.className = "" + this
        }, toggle: w, toString: function () {
            return z.join.call(this, y)
        }
    }, !A || k in A.prototype || d(A.prototype, k, v), k in u.documentElement ? (o = n("div")[k], o.add("a", "b", "a"), "a b" != o && (l = o.constructor.prototype, "add"in l || (l = e.TemporaryTokenList.prototype), c = function (e) {
        return function () {
            for (var t = 0; t < arguments.length;)e.call(this, arguments[t++])
        }
    }, l.add = c(l.add), l.remove = c(l.remove), l.toggle = w)) : d(C, k, v), "contains"in T || d(T, "contains", {
        value: function (e) {
            for (; e && e !== this;)e = e.parentNode;
            return this === e
        }
    }), "head"in u || d(u, "head", {
        get: function () {
            return r || (r = u.getElementsByTagName("head")[0])
        }
    }), function () {
        for (var t, n = e.requestAnimationFrame, a = e.cancelAnimationFrame, s = ["o", "ms", "moz", "webkit"], r = s.length; !a && r--;)n = n || e[s[r] + "RequestAnimationFrame"], a = e[s[r] + "CancelAnimationFrame"] || e[s[r] + "CancelRequestAnimationFrame"];
        a || (n ? (t = n, n = function (e) {
            var n = !0;
            return t(function () {
                n && e.apply(this, arguments)
            }), function () {
                n = !1
            }
        }, a = function (e) {
            e()
        }) : (n = function (e) {
            return setTimeout(e, 15, 15)
        }, a = function (e) {
            clearTimeout(e)
        })), e.requestAnimationFrame = n, e.cancelAnimationFrame = a
    }();
    try {
        new e.CustomEvent("?")
    } catch (U) {
        e.CustomEvent = function (e, t) {
            function n(n, s) {
                var r = u.createEvent(e);
                if ("string" != typeof n)throw Error("An event name must be provided");
                return "Event" == e && (r.initCustomEvent = a), null == s && (s = t), r.initCustomEvent(n, s.bubbles, s.cancelable, s.detail), r
            }

            function a(e, t, n, a) {
                this.initEvent(e, t, n), this.detail = a
            }

            return n
        }(e.CustomEvent ? "CustomEvent" : "Event", {bubbles: !1, cancelable: !1, detail: null})
    }
}(window), window.TMPL = {}, TMPL.airlock_electronics = function (e, t, n) {
    var a = '<article class="display"><section>';
    a += e.oneAccess ? "" + n.link("One Required", "unlock", "one_access") : "" + n.link("All Required", "lock", "one_access"), a += "" + n.link("Clear", "refresh", "clear") + '<section><table class="grow"><thead><tr>';
    var s = e.regions;
    if (s)for (var r, i = -1, l = s.length - 1; l > i;)r = s[i += 1], a += '<th><span class="highlight bold">' + r.name + "</span></th>";
    a += "</tr></thead><tbody><tr>";
    var o = e.regions;
    if (o)for (var r, i = -1, c = o.length - 1; c > i;) {
        r = o[i += 1], a += "<td>";
        var u = r.accesses;
        if (u)for (var d, p = -1, h = u.length - 1; h > p;)d = u[p += 1], a += "" + n.link(d.name, d.req ? "check-square-o" : "square-o", "set", {access: d.id}, null, d.req ? "selected" : null) + "<br />";
        a += "</td>"
    }
    return a += "</tr></tbody></table></article>"
}, TMPL.air_alarm = function (e, t, n) {
    var a = '<article class="notice">';
    if (a += e.siliconUser ? '<section><span class="label">Interface Lock:</span><div class="content">' + n.link("Engaged", "lock", "toggleaccess", null, e.locked ? "selected" : null) + n.link("Disengaged", "unlock", "toggleaccess", null, e.locked ? null : "selected") + "</div></section>" : e.locked ? "<span>Swipe an ID card to unlock this interface.</span>" : "<span>Swipe an ID card to lock this interface.</span>", a += '</article><article class="display"><header><h2>Air Status</h2></header>', e.environment_data) {
        var s = e.environment_data;
        if (s)for (var r, i = -1, l = s.length - 1; l > i;)r = s[i += 1], a += '<section><span class="label">' + r.name + ':</span><div class="content">', a += 2 == r.danger_level ? '<span class="bad">' : 1 == r.danger_level ? '<span class="average">' : '<span class="good">', a += "" + n.fixed(r.value, 2) + r.unit + "</span></div></section>";
        a += '<section><span class="label">Local Status:</span><div class="content">', a += 2 == e.danger_level ? '<span class="bad bold">Danger (Internals Required)</span>' : 1 == e.danger_level ? '<span class="average bold">Caution</span>' : '<span class="good">Optimal</span>', a += '</div></section><section><span class="label">Area Status:</span><div class="content">', a += e.atmos_alarm ? '<span class="bad bold">Atmosphere Alarm</span>' : e.fire_alarm ? '<span class="bad bold">Fire Alarm</span>' : '<span class="good">Nominal</span>', a += "</div></section>"
    } else a += '<section><span class="bad bold">Warning: Cannot obtain air sample for analysis.</span></section>';
    if (e.emagged && (a += '<hr /><section><span class="bad bold">Warning: Safety measures offline. Device may exhibit abnormal behavior.</span></section>'), a += "</article>", !e.locked || e.siliconUser)if (1 != e.screen && (a += "" + n.link("Back", "arrow-left", "screen", {screen: 1})), 1 == e.screen)a += '<article class="display"><header><h2>Air Controls</h2></header><section class="button">', a += e.atmos_alarm ? "" + n.link("Area Atmospheric Alarm", "close", "reset", null, null, "caution") : "" + n.link("Area Atmospheric Alarm", "hand-stop-o", "alarm"), a += '</section><section class="button">', a += 3 != e.mode ? "" + n.link("Panic Siphon", "exclamation", "mode", {mode: 3}) : "" + n.link("Panic Siphon", "close", "mode", {mode: 1}, null, "danger"), a += '</section><section class="button">' + n.link("Vent Controls", "sign-out", "screen", {screen: 2}) + '</section><section class="button">' + n.link("Scrubber Controls", "filter", "screen", {screen: 3}) + '</section><section class="button">' + n.link("Set Environmental Mode", "cog", "screen", {screen: 4}) + '</section><section class="button">' + n.link("Set Alarm Threshold", "bar-chart", "screen", {screen: 5}) + "</section></article>"; else if (2 == e.screen) {
        var o = e.vents;
        if (o)for (var c, i = -1, u = o.length - 1; u > i;)c = o[i += 1], a += '<article class="display"><header><h3>' + c.long_name + '</h3></header><section><span class="label">Power:</span><div class="content">', a += c.power ? "" + n.link("On", "power-off", "adjust", {
            id_tag: c.id_tag,
            command: "power",
            val: 0
        }, null, null) : "" + n.link("Off", "close", "adjust", {
            id_tag: c.id_tag,
            command: "power",
            val: 1
        }, null, "danger"), a += '</div></section><section><span class="label">Mode:</span><div class="content">', a += "release" == c.direction ? '<span class="good">Pressurizing</span>' : '<span class="bad">Siphoning</span>', a += '</div></section><section><span class="label">Pressure Checks:</span><div class="content">' + n.link("Internal", "sign-in", "adjust", {
            id_tag: c.id_tag,
            command: "incheck",
            val: c.checks
        }, null, c.incheck ? "selected" : null) + n.link("External", "sign-out", "adjust", {
            id_tag: c.id_tag,
            command: "excheck",
            val: c.checks
        }, null, c.excheck ? "selected" : null) + '</div></section><section><span class="label">Set Pressure:</span><div class="content">' + n.link(n.fixed(c.external), "pencil", "adjust", {
            id_tag: c.id_tag,
            command: "set_external_pressure"
        }) + n.link("Reset", "refresh", "adjust", {
            id_tag: c.id_tag,
            command: "reset_external_pressure"
        }, c.extdefault ? "disabled" : null) + "</div></section></article>";
        e.vents.length || (a += '<span class="bad">No vents connected.</span>')
    } else if (3 == e.screen) {
        var d = e.scrubbers;
        if (d)for (var p, i = -1, h = d.length - 1; h > i;)p = d[i += 1], a += '<article class="display"><header><h3>' + p.long_name + '</h3></header><section><span class="label">Power:</span><div class="content">', a += p.power ? "" + n.link("On", "power-off", "adjust", {
            id_tag: p.id_tag,
            command: "power",
            val: 0
        }, null, null) : "" + n.link("Off", "close", "adjust", {
            id_tag: p.id_tag,
            command: "power",
            val: 1
        }, null, "danger"), a += '</div></section><section><span class="label">Mode:</span><div class="content">', a += p.scrubbing ? "" + n.link("Scrubbing", "filter", "adjust", {
            id_tag: p.id_tag,
            command: "scrubbing",
            val: 0
        }, null, null) : "" + n.link("Siphoning", "sign-in", "adjust", {
            id_tag: p.id_tag,
            command: "scrubbing",
            val: 1
        }, null, "danger"), a += '</div></section><section><span class="label">Range:</span><div class="content">', a += p.widenet ? "" + n.link("Extended", "expand", "adjust", {
            id_tag: p.id_tag,
            command: "widenet",
            val: 0
        }, null, "caution") : "" + n.link("Normal", "compress", "adjust", {
            id_tag: p.id_tag,
            command: "widenet",
            val: 1
        }, null, null), a += '</div></section><section><span class="label">Filters:</span><div class="content">' + n.link("CO2", p.filter_co2 ? "check-square-o" : "square-o", "adjust", {
            id_tag: p.id_tag,
            command: "co2_scrub",
            val: p.filter_co2 ? 0 : 1
        }, null, p.filter_co2 ? "selected" : null) + n.link("N2O", p.filter_n2o ? "check-square-o" : "square-o", "adjust", {
            id_tag: p.id_tag,
            command: "n2o_scrub",
            val: p.filter_n2o ? 0 : 1
        }, null, p.filter_n2o ? "selected" : null) + n.link("Plasma", p.filter_toxins ? "check-square-o" : "square-o", "adjust", {
            id_tag: p.id_tag,
            command: "tox_scrub",
            val: p.filter_toxins ? 0 : 1
        }, null, p.filter_toxins ? "selected" : null) + "</div></section></article>";
        e.scrubbers.length || (a += '<span class="bad">No scrubbers connected.</span>')
    } else if (4 == e.screen) {
        a += '<article class="display"><header><h2>Environmental Modes</h2></header>';
        var f = e.modes;
        if (f)for (var v, i = -1, g = f.length - 1; g > i;)v = f[i += 1], a += '<section class="button">' + n.link(v.name, v.selected ? "check-square-o" : "square-o", "mode", {mode: v.mode}, null, v.selected ? v.danger ? "danger" : "selected" : null) + "</section>";
        a += "</article>"
    } else if (5 == e.screen) {
        a += '<article class="display"><header><h2>Alarm Thresholds</h2></header><table><thead><tr><th></th><th><span class="bad">min2</span></th><th><span class="average">min1</span></th><th><span class="average">max1</span></th><th><span class="bad">max2</span></th></tr></thead><tbody>';
        var m = e.thresholds;
        if (m)for (var b, i = -1, y = m.length - 1; y > i;) {
            b = m[i += 1], a += "<tr><th>" + b.name + "</th>";
            var k = b.settings;
            if (k)for (var w, E = -1, x = k.length - 1; x > E;)w = k[E += 1], a += "<td>" + n.link(w.selected >= 0 ? n.round(100 * w.selected) / 100 : "Off", null, "adjust", {
                command: "set_threshold",
                env: w.env,
                "var": w.val
            }) + "</td>";
            a += "</tr>"
        }
        a += "</tbody><table></article>"
    }
    return a
}, TMPL.apc = function (e, t, n) {
    var a = '<article class="notice">';
    a += e.siliconUser ? '<section><span class="label">Interface Lock:</span><div class="content">' + n.link("Engaged", "lock", "toggleaccess", null, e.locked ? "selected" : null) + n.link("Disengaged", "unlock", "toggleaccess", null, e.malfStatus >= 2 ? "linkOff" : e.locked ? null : "selected") + "</div></section>" : e.locked ? "<span>Swipe an ID card to unlock this interface.</span>" : "<span>Swipe an ID card to lock this interface.</span>", a += '</article><article class="display"><header><h2>Power Status</h2></header><section><span class="label">Main Breaker:</span><div class="content">', a += e.locked && !e.siliconUser ? e.isOperating ? '<span class="good">On</span>' : '<span class="bad">Off</span>' : "" + n.link("On", "power-off", "breaker", null, e.isOperating ? "selected" : null) + n.link("Off", "close", "breaker", null, e.isOperating ? null : "selected"), a += '</div></section><section><span class="label">External Power:</span><div class="content">', a += 2 == e.externalPower ? '<span class="good">Good</span>' : 1 == e.externalPower ? '<span class="average">Low</span>' : '<span class="bad">None</span>', a += '</div></section><section><span class="label">Power Cell:</span><div class="content">', a += null != e.powerCellStatus ? "" + n.bar(e.powerCellStatus, 0, 100, e.powerCellStatus >= 50 ? "good" : e.powerCellStatus >= 25 ? "average" : "bad", n.fixed(e.powerCellStatus) + "%") : '<span class="bad">Power cell removed.</span>', a += "</div></section>", null != e.powerCellStatus && (a += '<section><span class="label">Charge Mode:</span><div class="content">', a += e.locked && !e.siliconUser ? e.chargeMode ? '<span class="good">Auto</span>' : '<span class="bad">Off</span>' : "" + n.link("Auto", "refresh", "chargemode", null, e.chargeMode ? "selected" : null) + n.link("Off", "close", "chargemode", null, e.chargeMode ? null : "selected"), a += "&nbsp;", a += e.chargingStatus > 1 ? '[<span class="good">Fully Charged</span>]' : 1 == e.chargingStatus ? '[<span class="average">Charging</span>]' : '[<span class="bad">Not Charging</span>]', a += "</div></section>"), a += '</article><article class="display"><header><h2>Power Channels</h2></header><table class="grow">';
    var s = e.powerChannels;
    if (s)for (var r, i = -1, l = s.length - 1; l > i;)r = s[i += 1], a += "<tr><th>" + r.title + ":</th><td>" + r.powerLoad + " W</td><td>", r.status <= 1 ? a += '<span class="bad">Off</span>' : r.status >= 2 && (a += '<span class="good">On</span>'), a += "</td><td>", a += 1 == r.status || 3 == r.status ? "[Auto]" : "[Manual]", a += '</td><td class="floatRight">', (!e.locked || e.siliconUser) && (a += "" + n.link("Auto", "refresh", "channel", r.topicParams.auto, 1 == r.status || 3 == r.status ? "selected" : null) + n.link("On", "power-off", "channel", r.topicParams.on, 2 == r.status ? "selected" : null) + n.link("Off", "close", "channel", r.topicParams.off, 0 == r.status ? "selected" : null)), a += "</td></tr>";
    return a += '<tr><th>Total Load:</th><td class="bold">' + e.totalLoad + " W</td><td></td><td></td><td></td></tr></table></article>", e.siliconUser && (a += '<article class="display"><header><h2>System Overrides</h2></header><section>' + n.link("Overload Lighting Circuit", "lightbulb-o", "overload") + "</section><section>", 1 == e.malfStatus ? a += "" + n.link("Override Programming", "terminal", "hack") : 2 == e.malfStatus ? a += "" + n.link("Shunt Core Processes", "caret-square-o-down", "occupy") : 3 == e.malfStatus ? a += "" + n.link("Return to Main Core", "carat-square-o-left", "deoccupy") : 4 == e.malfStatus && (a += "" + n.link("Shunt Core Processes", "caret-square-o-down")), a += "</section></article>"), a += '<article class="notice"><section><span class="label">Cover Lock:</span><div class="content">', a += e.locked && !e.siliconUser ? e.coverLocked ? "<span>Engaged</span>" : "<span>Disengaged</span>" : "" + n.link("Engaged", "lock", "lock", null, e.coverLocked ? "selected" : null) + n.link("Disengaged", "unlock", "lock", null, e.coverLocked ? null : "selected"), a += "</div></section></article>"
}, TMPL.atmos_filter = function (e, t, n) {
    var a = '<article class="display"><section><span class="label">Power:</span><div class="content">' + n.link(e.on ? "On" : "Off", e.on ? "power-off" : "close", "power") + '</div></section><section><span class="label">Output Pressure:</span><div class="content">' + n.link("Set", "pencil", "pressure", {set: "custom"}) + n.link("Max", "plus", "pressure", {set: "max"}, e.set_pressure == e.max_pressure ? "disabled" : null) + '<span class="buttoninfo">' + e.set_pressure + ' kPa</span></div></section><section><span class="label">Filter:</span><div class="content">' + n.link("Nothing", null, "filter", {mode: -1}, -1 == e.filter_type ? "selected" : null) + n.link("Plasma", null, "filter", {mode: 0}, 0 == e.filter_type ? "selected" : null) + n.link("O2", null, "filter", {mode: 1}, 1 == e.filter_type ? "selected" : null) + n.link("N2", null, "filter", {mode: 2}, 2 == e.filter_type ? "selected" : null) + n.link("CO2", null, "filter", {mode: 3}, 3 == e.filter_type ? "selected" : null) + n.link("N2O", null, "filter", {mode: 4}, 4 == e.filter_type ? "selected" : null) + "</div></section></article>";
    return a
}, TMPL.atmos_mixer = function (e, t, n) {
    var a = '<article class="display"><section><span class="label">Power:</span><div class="content">' + n.link(e.on ? "On" : "Off", e.on ? "power-off" : "close", "power") + '</div></section><section><span class="label">Output Pressure:</span><div class="content">' + n.link("Set", "pencil", "pressure", {set: "custom"}) + n.link("Max", "plus", "pressure", {set: "max"}, e.set_pressure == e.max_pressure ? "disabled" : null) + '<span class="buttoninfo">' + e.set_pressure + ' kPa</span></div></section><section><span class="label">Node 1:</span><div class="content">' + n.link("", "fast-backward", "node1", {concentration: "-0.1"}, null) + n.link("", "backward", "node1", {concentration: "-0.01"}, null) + n.link("", "forward", "node1", {concentration: "0.01"}, null) + n.link("", "fast-forward", "node1", {concentration: "0.1"}, null) + '<span class="buttoninfo">' + e.node1_concentration + '%</span></div></section><section><span class="label">Node 2:</span><div class="content">' + n.link("", "fast-backward", "node2", {concentration: "-0.1"}, null) + n.link("", "backward", "node2", {concentration: "-0.01"}, null) + n.link("", "forward", "node2", {concentration: "0.01"}, null) + n.link("", "fast-forward", "node2", {concentration: "0.1"}, null) + '<span class="buttoninfo">' + e.node2_concentration + "%</span></div></section></article>";
    return a
}, TMPL.atmos_pump = function (e, t, n) {
    var a = '<article class="display"><section><span class="label">Power:</span><div class="content">' + n.link(e.on ? "On" : "Off", e.on ? "power-off" : "close", "power") + "</div></section>";
    return a += e.max_rate ? '<section><span class="label">Transfer Rate:</span><div class="content">' + n.link("Set", "pencil", "transfer", {set: "custom"}) + n.link("Max", "plus", "transfer", {set: "max"}, e.transfer_rate == e.max_rate ? "disabled" : null) + '<span class="buttoninfo">' + e.transfer_rate + " L/s</span></div></section>" : '<section><span class="label">Output Pressure:</span><div class="content">' + n.link("Set", "pencil", "pressure", {set: "custom"}) + n.link("Max", "plus", "pressure", {set: "max"}, e.set_pressure == e.max_pressure ? "disabled" : null) + '<span class="buttoninfo">' + e.set_pressure + " kPa</span></div></section>", a += "</article>"
}, TMPL.canister = function (e, t, n) {
    var a = '<article class="notice">';
    return a += e.hasHoldingTank ? "<span>The regulator is connected to a tank.</span>" : "<span>The regulator is not connected to a tank.</span>", a += '</article><article class="display"><header><h2>Canister</h2></header><section>' + n.link("Relabel", "pencil", "relabel", null, e.canLabel ? null : "disabled") + '</section><section><span class="label">Pressure:</span><div class="content"><span>' + e.tankPressure + ' kPa</span></div></section><section><span class="label">Port:</span><div class="content">', a += e.portConnected ? '<span class="good">Connected</span>' : '<span class="bad">Disconnected</span>', a += '</div></section></article><article class="display"><header><h2>Valve</h2></header><section><span class="label">Release Pressure:</span><div class="content">' + n.bar(e.releasePressure, e.minReleasePressure, e.maxReleasePressure, null, e.releasePressure + " kPa") + '</div></section><section><div class="label">Pressure Regulator:</div><div class="content">' + n.link("Reset", "refresh", "pressure", {set: "reset"}, e.releasePressure != e.defaultReleasePressure ? null : "disabled") + n.link("Min", "minus", "pressure", {set: "min"}, e.releasePressure > e.minReleasePressure ? null : "disabled") + n.link("Set", "pencil", "pressure", {set: "custom"}, null) + n.link("Max", "plus", "pressure", {set: "max"}, e.releasePressure < e.maxReleasePressure ? null : "disabled") + '</div></section><section><div class="label">Valve:</div><div class="content">' + n.link("Open", "unlock", "valve", null, e.valveOpen ? "selected" : null) + n.link("Close", "lock", "valve", null, e.valveOpen ? null : "selected") + '</div></section></article><article class="display"><header><h2>Holding Tank</h2></header>', a += e.hasHoldingTank ? "<section>" + n.link("Eject", "eject", "eject") + '</section><section><span class="label">Label:</span><div class="content">' + e.holdingTank.name + '</div></section><section><span class="label">Tank Pressure:</span><div class="content">' + e.holdingTank.tankPressure + " kPa</div></section>" : '<section><span class="average">No Holding Tank</span></section>', a += "</article>"
}, TMPL.chem_dispenser = function (e, t, n) {
    var a = '<article class="display"><header><h2>Status</h2></header><section><span class="label">Energy:</span><div class="content">' + n.bar(e.energy, 0, e.maxEnergy, null, e.energy + " Units") + '</div></section><section><span class="label">Amount:</span><div class="content">', s = e.beakerTransferAmounts;
    if (s)for (var r, i = -1, l = s.length - 1; l > i;)r = s[i += 1], a += "" + n.link(r, "plus", "amount", {set: r}, e.amount == r ? "selected" : null);
    a += '</div></section></article><article class="display"><header><h2>Dispense</h2></header><section>';
    var o = e.chemicals;
    if (o)for (var c, i = -1, u = o.length - 1; u > i;)c = o[i += 1], a += "" + n.link(c.title, "tint", "dispense", c.commands, null, "gridable");
    a += '</section></article><article class="display"><header><h2>Beaker</h2></header><section><div class="label">' + n.link("Eject", "eject", "eject", null, e.isBeakerLoaded ? null : "disabled") + '</div><div class="content">';
    var d = e.beakerTransferAmounts;
    if (d)for (var r, i = -1, p = d.length - 1; p > i;)r = d[i += 1], a += "" + n.link(r, "minus", "remove", {amount: r});
    if (a += '</div></section><section><div class="label">Contents:</div><div class="content">', e.isBeakerLoaded)if (e.beakerContents.length) {
        a += "<span>" + e.beakerCurrentVolume + "/" + e.beakerMaxVolume + " Units</span><br />";
        var h = e.beakerContents;
        if (h)for (var f, i = -1, v = h.length - 1; v > i;)f = h[i += 1], a += '<span class="highlight">' + f.volume + " units of " + f.name + "</span><br />"
    } else a += '<span class="bad">Beaker Empty</span>'; else a += '<span class="average">No Beaker Loaded</span>';
    return a += "</div></section></article>"
}, TMPL.chem_heater = function (e, t, n) {
    var a = '<article class="display"><header><h2>Status</h2></header><section><span class="label">Power:</span><div class="content">' + n.link(e.isActive ? "On" : "Off", e.isActive ? "power-off" : "close", "power", null, e.isBeakerLoaded ? null : "disabled") + '</div></section><section><span class="label">Target:</span><div class="content">' + n.link(e.targetTemp + "K", "pencil", "temperature") + '</div></section></article><article class="display"><header><h2>Beaker</h2></header><section>' + n.link("Eject", "eject", "eject", null, e.isBeakerLoaded ? null : "disabled") + '</section><section><span class="label">Contents:</span><div class="content">';
    if (e.isBeakerLoaded)if (a += "Temperature: " + e.currentTemp + "K<br />", e.beakerContents.length) {
        var s = e.beakerContents;
        if (s)for (var r, i = -1, l = s.length - 1; l > i;)r = s[i += 1], a += '<span class="highlight">' + r.volume + " units of " + r.name + "</span><br />"
    } else a += '<span class="bad">Beaker Empty</span>'; else a += '<span class="average">No Beaker Loaded</span>';
    return a += "</div></section></div>"
}, TMPL.cryo = function (e, t, n) {
    var a = '<article class="display"><header><h2>Occupant</h2></header><section><span class="label">Occupant:</span><div class="content">';
    if (a += e.hasOccupant ? "<span>" + e.occupant.name + "</span>" : '<span class="average">No Occupant</span>', a += "</div></section>", e.hasOccupant && (a += '<section><span class="label">State:</span><div class="content">', a += 0 == e.occupant.stat ? '<span class="good">Conscious</span>' : 1 == e.occupant.stat ? '<span class="average">Unconscious</span>' : '<span class="bad">Dead</span>', a += '</div></section><section><span class="label">Temperature:</span><div class="content">' + n.round(e.occupant.bodyTemperature) + " K</div></section>"), e.hasOccupant && e.occupant.stat < 2 && (a += '<section><span class="label">Health:</span><div class="content">' + n.bar(e.occupant.health, e.occupant.minHealth, e.occupant.Maxhealth, e.occupant.health >= 0 ? "good" : "average", n.round(e.occupant.health)) + '</div></section><section><span class="label">Brute:</span><div class="content">' + n.bar(e.occupant.bruteLoss, 0, e.occupant.maxHealth, "bad", n.round(e.occupant.bruteLoss)) + '</div></section><section><span class="label">Respiratory:</span><div class="content">' + n.bar(e.occupant.oxyLoss, 0, e.occupant.maxHealth, "bad", n.round(e.occupant.oxyLoss)) + '</div></section><section><span class="label">Toxin:</span><div class="content">' + n.bar(e.occupant.toxLoss, 0, e.occupant.maxHealth, "bad", n.round(e.occupant.toxLoss)) + '</div><section><section><span class="label">Burn:</span><div class="content">' + n.bar(e.occupant.fireLoss, 0, e.occupant.maxHealth, "bad", n.round(e.occupant.fireLoss)) + "</div></section>"), a += '</article><article class="display"><header><h2>Cell</h2></header><section><span class="label">Power:</span><div class="content">', a += e.isOperating ? "" + n.link("On", "power-off", "off") : "" + n.link("Off", "close", "on"), a += '</div></section><section><span class="label">Temperature:</span><div class="content"><span class="' + e.cellTemperatureStatus + '">' + e.cellTemperature + ' K</span></div></section><section><span class="label">Door:</span><div class="content">', a += e.isOpen ? "" + n.link("Open", "unlock", "close") : "" + n.link("Closed", "lock", "open"), a += e.autoEject ? "" + n.link("Auto", "sign-out", "autoeject") : "" + n.link("Manual", "sign-in", "autoeject"), a += '</div></section></article><article class="display"><header><h2>Beaker</h2></header><section>' + n.link("Eject", "eject", "ejectbeaker", null, e.isBeakerLoaded ? null : "disabled") + '</section><section><span class="label">Contents:</span><div class="content">', e.isBeakerLoaded)if (e.beakerContents.length) {
        var s = e.beakerContents;
        if (s)for (var r, i = -1, l = s.length - 1; l > i;)r = s[i += 1], a += '<span class="highlight">' + r.volume + " units of " + r.name + "</span><br />"
    } else a += '<span class="bad">Beaker Empty</span>'; else a += '<span class="average">No Beaker Loaded</span>';
    return a += "</div></section></display>"
}, TMPL.smes = function (e, t, n) {
    var a = '<article class="display"><header><h2>Storage</h2></header><section><span class="label">Stored Energy:</span><div class="content">' + n.bar(e.capacityPercent, 0, 100, e.capacityPercent >= 50 ? "good" : e.capacityPercent >= 15 ? "average" : "bad", n.round(e.capacityPercent) + "%") + '</div></section></article><article class="display"><header><h2>Input</h2></header><section><span class="label">Charge Mode:</span><div class="content">' + n.link("Auto", "refresh", "tryinput", null, e.inputAttempt ? "selected" : null) + n.link("Off", "close", "tryinput", null, e.inputAttempt ? null : "selected") + "&nbsp;";
    return a += e.capacityPercent >= 99 ? "[<span class='good'>Fully Charged</span>]" : e.inputting ? "[<span class='average'>Charging</span>]" : "[<span class='bad'>Not Charging</span>]", a += '</div></section><section><span class="label">Input Setting:</span><div class="content">' + n.bar(e.inputLevel, 0, e.inputLevelMax, null, e.inputLevel + " W") + '</div></section><section><span class="label">Adjust Input:</span><div class="content">' + n.link("", "fast-backward", "input", {set: "min"}, e.inputLevel ? null : "selected") + n.link("", "backward", "input", {set: "minus"}, e.inputLevel ? null : "disabled") + n.link("Set", "pencil", "input", {set: "custom"}, null) + n.link("", "forward", "input", {set: "plus"}, e.inputLevel == e.inputLevelMax ? "disabled" : null) + n.link("", "fast-forward", "input", {set: "max"}, e.inputLevel == e.inputLevelMax ? "selected" : null) + '</div></section><section><span class="label">Available:</span><div class="content"><span>' + e.inputAvailable + ' W</span></div></section></article><article class="display"><header><h2>Output</h2></header><section><span class="label">Charge Mode:</span><div class="content">' + n.link("On", "power-off", "tryoutput", null, e.outputAttempt ? "selected" : null) + n.link("Off", "close", "tryoutput", null, e.outputAttempt ? null : "selected") + "&nbsp;", a += e.outputting ? '[<span class="good">Sending</span>]' : e.charge > 0 ? '[<span class="average">Not Sending</span>]' : '[<span class="bad">No Charge</span>]', a += '</div></section><section><span class="label">Output Setting:</span><div class="content">' + n.bar(e.outputLevel, 0, e.outputLevelMax, null, e.outputLevel + " W") + '</div></section><section><span class="label">Adjust Output:</span><div class="content">' + n.link("", "fast-backward", "output", {set: "min"}, e.outputLevel ? null : "selected") + n.link("", "backward", "output", {set: "minus"}, e.outputLevel ? null : "disabled") + n.link("Set", "pencil", "output", {set: "custom"}, null) + n.link("", "forward", "output", {set: "plus"}, e.outputLevel == e.outputLevelMax ? "disabled" : null) + n.link("", "fast-forward", "output", {set: "max"}, e.outputLevel == e.outputLevelMax ? "selected" : null) + '</div></section><section><span class="label">Outputting:</span><div class="content"><span>' + e.outputUsed + " W</span></div></section></article>"
}, TMPL.solar_control = function (e, t, n) {
    var a = '<article class="display"><header><h2>Status</h2></header><section><span class="label">Generated Power:</span><div class="content"><span>' + e.generated + ' W</span></div></section><section><span class="label">Orientation:</span><div class="content"><span>' + e.angle + "&deg; (" + e.direction + ')</span></div></section><section><span class="label">Adjust:</span><div class="content">' + n.link("15&deg;", "step-backward", "control", {cdir: "-15"}) + n.link("1&deg;", "backward", "control", {cdir: "-1"}) + n.link("1&deg;", "forward", "control", {cdir: "1"}) + n.link("15&deg;", "step-forward", "control", {cdir: "15"}) + '</div></section></article><article class="display"><header><h2>Tracking</h2></header><section><span class="label">Tracker Mode:</span><div class="content">' + n.link("Off", "close", "tracking", {mode: "0"}, 0 == e.tracking_state ? "selected" : "") + n.link("Timed", "clock-o", "tracking", {mode: "1"}, 1 == e.tracking_state ? "selected" : "");
    return a += e.connected_tracker ? "" + n.link("Auto", "refresh", "tracking", {mode: "2"}, 2 == e.tracking_state ? "selected" : "") : "" + n.link("Auto", "refresh", null, null, "disabled"), a += '</div></section><section><span class="label">Tracking Rate:</span><div class="content"><span>' + e.tracking_rate + " deg/h (" + e.rotating_way + ')</span></div></section><section><span class="label">Adjust:</span><div class="content">' + n.link("180&deg;", "fast-backward", "control", {tdir: "-180"}) + n.link("30&deg;", "step-backward", "control", {tdir: "-30"}) + n.link("1&deg;", "backward", "control", {tdir: "-1"}) + n.link("1&deg;", "forward", "control", {tdir: "1"}) + n.link("30&deg;", "step-forward", "control", {tdir: "30"}) + n.link("180&deg;", "fast-forward", "control", {tdir: "180"}) + '</div></section></article><article class="display"><header><h2>Devices</h2></header><section><span class="label">Search:</span><div class="content">' + n.link("Refresh", "refresh", "refresh") + '</div></section><section><span class="label">Solar Tracker:</span><div class="content">', a += e.connected_tracker ? '<span class="good">Found</span>' : '<span class="bad">Not Found</span>', a += '</div></section><section><span class="label">Solars Panels:</span><div class="content"><span class="' + (e.connected_panels ? "good" : "bad") + '">' + e.connected_panels + " Connected</span></div></div></article>"
}, TMPL.space_heater = function (e, t, n) {
    var a = '<article class="display"><header><h2>Status</h2></header><section><span class="label">Power:</span><div class="content">' + n.link("On", "power-off", "power", null, e.on ? "selected" : null) + n.link("Off", "close", "power", null, e.on ? null : "selected") + '</div></section><section><span class="label">Stored Energy:</span><div class="content">';
    return a += e.hasPowercell ? "" + n.bar(e.powerLevel, 0, 100, "good", e.powerLevel + "%") : '<span class="bad">No power cell loaded.</span>', a += "</div></section>", e.open && (a += '<section><span class="label">Cell:</span><div class="content">', a += e.hasPowercell ? "" + n.link("Eject", "eject", "ejectcell") : "" + n.link("Install", "eject", "installcell"), a += "</div></section>"), a += '</article><article class="display"><header><h2>Thermostat</h2></header><section><span class="label">Current Temp:</span><div class="content"><span>' + e.currentTemp + '&deg;C</span></div></section><section><span class="label">Target Temp:</span><div class="content"><span>' + e.targetTemp + "&deg;C</span></div></section>", e.open && (a += '<section><span class="label">Adjustment:</span><div class="content">' + n.link("", "fast-backward", "temp", {set: -20}, e.targetTemp > e.minTemp ? null : "disabled") + n.link("", "backward", "temp", {set: -5}, e.targetTemp > e.minTemp ? null : "disabled") + n.link("Set", "pencil", "temp", {set: "custom"}, null) + n.link("", "forward", "temp", {set: 5}, e.targetTemp < e.maxTemp ? null : "disabled") + n.link("", "fast-forward", "temp", {set: 20}, e.targetTemp < e.maxTemp ? null : "disabled") + "</div></section>"), a += '<section><span class="label">Operational Mode:</span><div class="content">', a += e.open ? "" + n.link("Heat", "long-arrow-up", "mode", {mode: "heat"}, "heat" != e.mode ? null : "selected") + n.link("Cool", "long-arrow-down", "mode", {mode: "cool"}, "cool" != e.mode ? null : "selected") + n.link("Auto", "arrows-v", "mode", {mode: "auto"}, "heat" == e.mode || "cool" == e.mode ? null : "selected") : "heat" == e.mode ? '<span class="bad">Heat</span>' : "cool" == e.mode ? '<span class="highlight">Cool</span>' : '<span class="good">Auto</span>',
        a += "</div></section></article>"
}, TMPL.tanks = function (e, t, n) {
    var a = '<article class="notice">';
    return a += e.hasHoldingTank ? "<span>The regulator is connected to a mask.</span>" : "<span>The regulator is not connected to a mask.</span>", a += '</article><article class="display"><section><span class="label">Tank Pressure:</span><div class="content">' + n.bar(e.tankPressure, 0, 1013, e.tankPressure > 200 ? "good" : e.tankPressure > 100 ? "average" : "bad", e.tankPressure + " kPa") + '</div></div><section><span class="label">Release Pressure:</span><div class="content">' + n.bar(e.releasePressure, e.minReleasePressure, e.maxReleasePressure, null, e.releasePressure + " kPa") + '</div></section><section><span class="label">Pressure Regulator:</span><div class="content">' + n.link("Reset", "refresh", "pressure", {set: "reset"}, e.releasePressure != e.defaultReleasePressure ? null : "disabled") + n.link("Min", "minus", "pressure", {set: "min"}, e.releasePressure > e.minReleasePressure ? null : "disabled") + n.link("Set", "pencil", "pressure", {set: "custom"}, null) + n.link("Max", "plus", "pressure", {set: "max"}, e.releasePressure < e.maxReleasePressure ? null : "disabled") + '</div></section><section><span class="label">Valve:</span><div class="content">' + n.link("Open", "unlock", "valve", null, e.maskConnected ? e.valveOpen ? "selected" : null : "disabled") + n.link("Close", "lock", "valuve", null, e.valveOpen ? null : "selected") + "</div></section></article>"
}, TMPL._generic = function (e, t, n) {
    var a = "<div id='container' class='container'> <header id='titlebar' class='titlebar' unselectable='on'> <i class='statusicon fa fa-eye fa-2x good' unselectable='on'></i> <span class='title' unselectable='on'>" + t.title + "</span> <i class='minimize fancy fa fa-minus fa-2x' unselectable='on'></i> <i class='close fancy fa fa-close fa-2x' unselectable='on'></i> </header> <div id='content' class='content titlebared resizeable' unselectable='on'> <div class='loading'>Initiating...</div> </div> <div id='resize' class='resize fancy' unselectable='on'></div></div>";
    return a
}, TMPL._nanotrasen = function (e, t, n) {
    var a = "<div id='container' class='container'> <header id='titlebar' class='titlebar' unselectable='on'> <i class='statusicon fa fa-eye fa-2x good' unselectable='on'></i> <span class='title' unselectable='on'>" + t.title + "</span> <i class='minimize fa fa-minus fa-2x fancy' unselectable='on'></i> <i class='close fa fa-close fa-2x fancy' unselectable='on'></i> </header> <div id='content' class='content titlebared resizeable' unselectable='on'> <div class='loading'>Initiating...</div> </div> <div id='resize' class='resize fancy' unselectable='on'></div></div>";
    return a
}, function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    this.Chrome = function () {
        function t(t, n) {
            this.nanoui = t, this.handleResize = e(this.handleResize, this), this.handleDrag = e(this.handleDrag, this), this.calcOffsets = e(this.calcOffsets, this), this.nanoui.updated.add(this.linkStatus), this.nanoui.updated.add(this.windowStatus), this.nanoui.rendered.add(this.handleLinks), n.config.user.fancy && (this.dragging = !1, this.resizing = !1, this.switchChrome(), this.calcOffsets(), this.handleButtons(), this.handleDrag(), this.handleResize())
        }

        return t.prototype.linkStatus = function (e) {
            var t;
            return t = document.queryAll(".link"), e.config.status !== NANO.INTERACTIVE ? t.forEach(function (e) {
                return e.className = "link disabled"
            }) : void 0
        }, t.prototype.windowStatus = function (e) {
            var t;
            return t = document.queryAll(".statusicon"), t.forEach(function (t) {
                var n;
                switch (e.config.status) {
                    case NANO.INTERACTIVE:
                        n = "good";
                        break;
                    case NANO.UPDATE:
                        n = "average";
                        break;
                    default:
                        n = "bad"
                }
                return t.classList.remove("good", "bad", "average"), t.classList.add(n)
            })
        }, t.prototype.handleLinks = function (e) {
            var t;
            return t = function () {
                var t, n;
                return t = this.getAttribute("data-action"), n = JSON.parse(this.getAttribute("data-params")), null != t && null != n && e.config.status === NANO.INTERACTIVE ? nanoui.act(t, n) : void 0
            }, document.queryAll(".link.active").forEach(function (e) {
                return e.addEventListener("click", t)
            })
        }, t.prototype.switchChrome = function () {
            var e;
            return this.nanoui.winset("titlebar", 0), this.nanoui.winset("can-resize", 0), e = document.queryAll(".fancy"), e.forEach(function (e) {
                return e.classList.remove("fancy")
            })
        }, t.prototype.calcOffsets = function () {
            return this.xOriginal = window.screenLeft, this.yOriginal = window.screenTop, this.nanoui.setPos(0, 0), this.xOffset = window.screenLeft, this.yOffset = window.screenTop, this.nanoui.setPos(this.xOriginal - this.xOffset, this.yOriginal - this.yOffset)
        }, t.prototype.handleButtons = function () {
            var e, t;
            return e = document.queryAll(".close"), e.forEach(function (e) {
                return e.addEventListener("click", function (e) {
                    return function () {
                        return e.nanoui.close()
                    }
                }(this))
            }), t = document.queryAll(".minimize"), t.forEach(function (e) {
                return e.addEventListener("click", function (e) {
                    return function () {
                        return e.nanoui.minimize()
                    }
                }(this))
            })
        }, t.prototype.handleDrag = function () {
            var e, t;
            return e = function (e) {
                return function (t) {
                    var n, a;
                    return null == t && (t = window.event), e.dragging ? (null == e.xDrag && (e.xDrag = t.screenX), null == e.yDrag && (e.yDrag = t.screenY), n = t.screenX - e.xDrag + (window.screenLeft - e.xOffset), a = t.screenY - e.yDrag + (window.screenTop - e.yOffset), e.nanoui.setPos(n, a), e.xDrag = t.screenX, e.yDrag = t.screenY) : void 0
                }
            }(this), t = document.query("#titlebar"), document.addEventListener("mousemove", e), t.addEventListener("mousedown", function (e) {
                return function () {
                    return e.dragging = !0
                }
            }(this)), document.addEventListener("mouseup", function (e) {
                return function () {
                    return e.dragging = !1, delete e.xDrag, delete e.yDrag
                }
            }(this))
        }, t.prototype.handleResize = function () {
            var e, t;
            return t = function (e) {
                return function (t) {
                    var n, a;
                    return null == t && (t = window.event), e.resizing ? (null == e.xResize && (e.xResize = t.screenX), null == e.yResize && (e.yResize = t.screenY), n = Math.max(250, t.screenX - e.xResize + window.innerWidth), a = Math.max(250, t.screenY - e.yResize + window.innerHeight), e.nanoui.setSize(n, a), e.xResize = t.screenX, e.yResize = t.screenY) : void 0
                }
            }(this), e = document.query("#resize"), document.addEventListener("mousemove", t), e.addEventListener("mousedown", function (e) {
                return function () {
                    return e.resizing = !0
                }
            }(this)), document.addEventListener("mouseup", function (e) {
                return function () {
                    return e.resizing = !1, delete e.xResize, delete e.yResize
                }
            }(this))
        }, t
    }()
}.call(this), function () {
    this.NANO = {INTERACTIVE: 2, UPDATE: 1, DISABLED: 0, CLOSE: -1}
}.call(this), function () {
    this.helpers = {
        link: function (e, t, n, a, s, r) {
            return null == e && (e = ""), null == t && (t = ""), null == n && (n = ""), null == a && (a = {}), null == s && (s = ""), null == r && (r = ""), a = JSON.stringify(a), t && (t = "<i class='fa fa-fw fa-" + t + "'></i>", r += " iconed"), s ? "<span unselectable='on' class='link inactive " + s + " " + r + "'>" + t + e + "</span>" : "<span unselectable='on' class='link active " + r + "' data-action='" + n + "' data-params='" + a + "'>" + t + e + "</span>"
        }, bar: function (e, t, n, a, s) {
            var r;
            return null == e && (e = 0), null == t && (t = 0), null == n && (n = 100), null == a && (a = ""), null == s && (s = ""), n > t ? t > e ? e = t : e > n && (e = n) : e > t ? e = t : n > e && (e = n), r = Math.round((e - t) / (n - t) * 100), "<div class='bar'> <span class='barFill " + a + "' style='width: " + r + "%;'></span> <span class='barText'>" + s + "</span> </div>"
        }, round: function (e) {
            return Math.round(e)
        }, fixed: function (e, t) {
            return null == t && (t = 1), +(Math.round(e + "e" + t) + "e-" + t)
        }, floor: function (e) {
            return Math.floor(e)
        }, ceil: function (e) {
            return Math.ceil(e)
        }
    }
}.call(this), function () {
    var e, t = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    e = function () {
        function e() {
            this.minimize = t(this.minimize, this), this.close = t(this.close, this), this.focusMap = t(this.focusMap, this), this.setSize = t(this.setSize, this), this.setPos = t(this.setPos, this), this.winset = t(this.winset, this), this.act = t(this.act, this), this.render = t(this.render, this), this.update = t(this.update, this);
            var e, n, a, s;
            this.laidout = !1, this.dragging = !1, this.resizing = !1;
            try {
                e = document.query("meta[name='data']"), n = e.getAttribute("content"), n = n.replace(/ÿ/g, ""), n = n.replace(/\\improper/g, ""), this.data = JSON.parse(n)
            } catch (s) {
                a = s, this.error(a)
            }
            null != this.data && "data"in this.data && "config"in this.data || this.error("Initial data did not load correctly."), this.render(this.data), this.chrome = new Chrome(this, this.data), this.initialized.dispatch(this.data), this.incoming.add(this.update)
        }

        return e.prototype.initialized = new MiniSignal, e.prototype.incoming = new MiniSignal, e.prototype.update = function (e) {
            var t, n, a;
            try {
                t = JSON.parse(e), null == t.data && (null != this.data.data ? t.data = this.data.data : t.data = {}), this.data = t
            } catch (a) {
                n = a, this.error(n)
            }
            return this.render(this.data), this.updated.dispatch(this.data)
        }, e.prototype.updated = new MiniSignal, e.prototype.render = function (e) {
            var t, n, a, s;
            try {
                return this.laidout || (this.laidout = !0, document.query("body").classList.add(e.config.layout), s = TMPL[e.config.templates.layout](e.data, e.config, helpers), document.query("#layout").innerHTML = s), t = TMPL[e.config.templates.content](e.data, e.config, helpers), document.query("#content").innerHTML = t, this.rendered.dispatch(this.data)
            } catch (a) {
                return n = a, this.error(n)
            }
        }, e.prototype.rendered = new MiniSignal, e.prototype.href = function (e, t) {
            return null == e && (e = {}), null == t && (t = ""), "byond://" + t + "?" + Object.keys(e).map(function (t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&")
        }, e.prototype.act = function (e, t) {
            return null == t && (t = {}), t.src = this.data.config.ref, t.nano = e, location.href = this.href(t, null)
        }, e.prototype.error = function (e) {
            return location.href = this.href({nano_error: e}, null)
        }, e.prototype.winset = function (e, t, n) {
            var a;
            return null == n && (n = this.data.config.window), location.href = this.href((a = {}, a[n + "." + e] = t, a), "winset")
        }, e.prototype.setPos = function (e, t) {
            return this.winset("pos", e + "," + t)
        }, e.prototype.setSize = function (e, t) {
            return this.winset("size", e + "," + t)
        }, e.prototype.focusMap = function () {
            return this.winset("focus", 1, "mapwindow.map")
        }, e.prototype.close = function () {
            return this.winset("is-visible", "false"), location.href = this.href({command: "nanoclose " + this.data.config.ref}, "winset")
        }, e.prototype.minimize = function () {
            return this.winset("is-minimized", "true")
        }, e
    }(), this.nanoui = new e
}.call(this);