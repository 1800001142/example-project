var UA = navigator.userAgent || navigator.userAgentData || navigator.appVersion || navigator.platform,
    HTML = document.documentElement, isFirefox = UA.match(/firefox|fxios/i),
    isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(),
    isIE9 = /MSIE 9/i.test(UA), isIE10 = /MSIE 10/i.test(UA), isIE11 = /rv:11.0/i.test(UA),
    isIE = !!document.documentMode, isEdge = UA.match(/edg/i) || !isIE && !!window.StyleMedia && !isIE11,
    isChrome = UA.match(/chrome|chromium|crios/i) || UA.indexOf("Chrome") > -1 || !!window.chrome && !!window.chrome.webstore,
    Touch = window.matchMedia("(pointer: coarse)").matches, Mobile = window.matchMedia("(max-width: 1100px)"),
    Tablet = window.matchMedia("(max-width: 1400px)"),
    macOS = /iPad|iPhone|iPod/.test(UA) && !window.MSStream || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && UA.includes("Mac"),
    MacBrowser = /Mac|iPod|iPhone|iPad/.test(UA), Portrait = window.innerHeight > window.innerWidth,
    Landscape = window.innerHeight <= window.innerWidth, isMobile = Touch && Mobile.matches,
    isTablet = Touch && Tablet.matches, iOS = !1;

function checkiOS() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(UA)
}

if (macOS && checkiOS) {
    HTML.classList.add("is-iOS");
    iOS = !0
}
1 == Touch && HTML.classList.add("is-touch"), isFirefox ? HTML.classList.add("is-Firefox") : isEdge ? HTML.classList.add("is-Edge") : isSafari ? HTML.classList.add("is-Safari") : isChrome && HTML.classList.add("is-Chrome");
var winsize, NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge, debounce = function (t, e, n) {
    var i;
    return function () {
        var r = this, o = arguments, u = n && !i;
        clearTimeout(i), i = setTimeout((function () {
            i = null, n || t.apply(r, o)
        }), e), u && t.apply(r, o)
    }
};

function isInViewport(t) {
    var e = t.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight,
        i = window.innerWidth || document.documentElement.clientWidth, r = e.top <= n && e.top + e.height >= 0,
        o = e.left <= i && e.left + e.width >= 0;
    return r && o
}

var calcWinsize = function () {
    return winsize = {
        width: window.innerWidth, height: window.innerHeight
    }
}, MathUtils = {
    lineEq: function (t, e, n, i, r) {
        var o = (t - e) / (n - i);
        return o * r + (e - o * i)
    }, map: function (t, e, n, i, r) {
        return (t - e) * (r - i) / (n - e) + i
    }, lerp: function (t, e, n) {
        return (1 - n) * t + n * e
    }, clamp: function (t, e, n) {
        return t <= e ? e : t >= n ? n : t
    }, getRandomFloat: function (t, e) {
        return (Math.random() * (e - t) + t).toFixed(2)
    }, randomNumber: function (t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }, distance: function (t, e, n, i) {
        var r = t - n, o = e - i;
        return Math.hypot(r, o)
    }, mousepos: {
        x: 0, y: 0
    }, getMousePos: function (t) {
        return {
            x: t.clientX, y: t.clientY
        }
    }
};

function removeCommas(t) {
    for (; t.search(",") >= 0;) t = (t + "").replace(",", "");
    return t
}

Number.prototype.formatMoney = function (t, e, n) {
    var i = this,
        r = (t = isNaN(t = Math.abs(t)) ? 2 : t, e = null == e ? "." : e, n = null == n ? "," : n, i < 0 ? "-" : ""),
        o = parseInt(i = Math.abs(+i || 0).toFixed(t)) + "", u = (u = o.length) > 3 ? u % 3 : 0;
    return r + (u ? o.substr(0, u) + n : "") + o.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + n) + (t ? e + Math.abs(i - o).toFixed(t).slice(2) : "")
};
var getMousePos = function (t) {
    var e = 0, n = 0;
    return t || (t = window.event), t.pageX || t.pageY ? (e = t.pageX, n = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + body.scrollLeft + document.documentElement.scrollLeft, n = t.clientY + body.scrollTop + document.documentElement.scrollTop), {
        x: e, y: n
    }
}, mousePos = {
    x: window.innerWidth / 2, y: window.innerHeight / 2
};

function isFullScreenMode() {
    var t = document.body,
        e = void 0 !== t.requestFullscreen || void 0 !== t.mozRequestFullScreen || void 0 !== t.webkitRequestFullscreen || void 0 !== t.msRequestFullscreen || void 0 !== document.exitFullscreen || void 0 !== document.mozCancelFullScreen || void 0 !== document.webkitExitFullscreen;
    return 1 == e && document.documentElement.classList.add("fullsreen-support"), e
}

function toggleFullScreen() {
    document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen()
}

function pinchZoom(t, e, n) {
    t = void 0 !== t && Object.keys(t).length ? t : {};
    var i = (e = void 0 !== e && Object.keys(e).length ? e : {}).scaleDefault || 2, r = e.scaleDifference || .5,
        o = e.scaleMax || 10, u = e.scaleMin || 1, a = e.scrollDisable, c = e.transitionDuration || 200,
        s = e.doubleclickDelay || 300, l = !function () {
            if (["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].indexOf(navigator.platform) > -1 || navigator.userAgent.includes("Mac") && "ontouchend" in document) {
                var t = navigator.userAgent.toLowerCase();
                if (t.indexOf("safari") > -1 && -1 === t.indexOf("chrome")) return !0
            }
            return !1
        }();
    if (0 == a) {
        var d = !1;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function () {
                    d = !0
                }
            }))
        } catch (t) {
        }
        var h = !!d && {
            passive: !1
        };
        document.createElement("div")
    }
    for (var f, m, g, p, v, w, b, A, E, M, x, L, y, S, T, F, C, H, P, N, Y, O, X, I, W, k, R, U, D, z, q, B, j = t.active || "zoom-active", V = "data-scale", G = "data-translate-x", Z = "data-translate-y", $ = t.transition || "zoom-transition", J = t.visible || "zoom-visible", K = t.pinchzoom || "pinch-zoom", Q = document.getElementsByClassName(K), _ = document.querySelector("body"), tt = !1, et = [null], nt = 0, it = !1, rt = 0, ot = [null], ut = 0; ut < Q.length; ut++) f = Q[ut], (m = f.children[0]).setAttribute(V, 1), m.setAttribute(G, 0), m.setAttribute(Z, 0);
    if (window.addEventListener("load", (function () {
        for (var t = 0; t < Q.length; t++) f = Q[t], at(m = f.children[0], J);
        window.addEventListener("resize", (function () {
            for (var t = 0; t < Q.length; t++) f = Q[t], m = f.children[0], !1 !== st(f, j) && (g = f.clientHeight, p = f.clientWidth, A = m.clientHeight, E = m.clientWidth, M = parseFloat(m.getAttribute(G)), x = parseFloat(m.getAttribute(Z)), C = pt(E, p, q = i), H = pt(A, g, q), U = E * q > p ? dt(M, -1 * C, C) : 0, D = A * q > g ? dt(x, -1 * H, H) : 0, 1 === q && (wt(f), wt(_)), m.setAttribute(V, q), m.setAttribute(G, U), m.setAttribute(Z, D), ht(m, U + "px", D + "px", q))
        }))
    })), lt(Q, "mousedown", (function (t) {
        if (t.preventDefault(), !0 === it || 1 !== t.which) return !1;
        if (f = this, m = this.children[0], y = t.clientX, T = t.clientY, null === et[0]) et[0] = t.target, et[1] = y, et[2] = T, setTimeout((function () {
            et = [null]
        }), s); else if (et[0] === t.target && nt <= 5 && !0 === ct(y, et[1] - 10, et[1] + 10) && !0 === ct(T, et[2] - 10, et[2] + 10)) return at(m, $), !0 === st(f, j) ? (m.setAttribute(V, 1), m.setAttribute(G, 0), m.setAttribute(Z, 0), wt(f), wt(_), ht(m, 0, 0, 1)) : (O = t.clientX, I = t.clientY, R = (i - 1) * (k = 1), C = pt(E, p, q = i), H = pt(A, g, q), q <= 1 ? (U = 0, D = 0) : (U = E * q <= p ? 0 : dt(M - (O - v - p / 2 - M) / (q - R) * R, -1 * C, C), D = A * q <= g ? 0 : dt(x - (I - w - g / 2 - x) / (q - R) * R, -1 * H, H)), vt(f), vt(_), m.setAttribute(V, q), m.setAttribute(G, U), m.setAttribute(Z, D), ht(m, U + "px", D + "px", i)), setTimeout((function () {
            gt(m, $)
        }), c), et = [null], !1;
        P = f.getBoundingClientRect(), v = P.left, w = P.top, g = f.clientHeight, p = f.clientWidth, A = m.clientHeight, E = m.clientWidth, M = parseFloat(m.getAttribute(G)), x = parseFloat(m.getAttribute(Z)), b = dt(parseFloat(m.getAttribute(V)), u, o), nt = 0, tt = !0
    })), document.addEventListener("mousemove", (function (t) {
        if (!0 === it || !1 === tt) return !1;
        O = t.clientX, I = t.clientY, C = pt(E, p, q = b), H = pt(A, g, q), U = E * q <= p ? 0 : dt(O - (y - M), -1 * C, C), D = A * q <= g ? 0 : dt(I - (T - x), -1 * H, H), nt++, Math.abs(U) === Math.abs(C) && (M = U, y = O);
        Math.abs(D) === Math.abs(H) && (x = D, T = I);
        m.setAttribute(V, q), m.setAttribute(G, U), m.setAttribute(Z, D), ht(m, U + "px", D + "px", q)
    })), document.addEventListener("mouseup", (function () {
        if (!0 === it || !1 === tt) return !1;
        tt = !1
    })), document.addEventListener("touchstart", (function () {
        it = !0
    })), lt(Q, "touchstart", (function (t) {
        if (ft(), t.touches.length > 2) return !1;
        if (f = this, m = this.children[0], P = f.getBoundingClientRect(), v = P.left, w = P.top, g = f.clientHeight, p = f.clientWidth, A = m.clientHeight, E = m.clientWidth, y = t.touches[0].clientX, T = t.touches[0].clientY, b = dt(parseFloat(m.getAttribute(V)), u, o), 1 === (B = t.touches.length)) {
            if (null === ot[0]) ot[0] = t.target, ot[1] = y, ot[2] = T, setTimeout((function () {
                ot = [null]
            }), s); else if (ot[0] === t.target && rt <= 1 && !0 === ct(y, ot[1] - 10, ot[1] + 10) && !0 === ct(T, ot[2] - 10, ot[2] + 10)) return at(m, $), !0 === st(f, j) ? (m.setAttribute(V, 1), m.setAttribute(G, 0), m.setAttribute(Z, 0), wt(f), wt(_), ht(m, 0, 0, 1)) : (O = t.touches[0].clientX, I = t.touches[0].clientY, R = (i - 1) * (k = 1), C = pt(E, p, q = i), H = pt(A, g, q), q <= 1 ? (U = 0, D = 0) : (U = E * q <= p ? 0 : dt(M - (O - v - p / 2 - M) / (q - R) * R, -1 * C, C), D = A * q <= g ? 0 : dt(x - (I - w - g / 2 - x) / (q - R) * R, -1 * H, H)), vt(f), vt(_), m.setAttribute(V, q), m.setAttribute(G, U), m.setAttribute(Z, D), ht(m, U + "px", D + "px", i)), setTimeout((function () {
                gt(m, $)
            }), c), ot = [null], !1;
            M = parseFloat(m.getAttribute(G)), x = parseFloat(m.getAttribute(Z))
        } else 2 === B && (M = parseFloat(m.getAttribute(G)), x = parseFloat(m.getAttribute(Z)), S = t.touches[1].clientX, F = t.touches[1].clientY, N = (y + S) / 2, Y = (T + F) / 2, L = Math.sqrt((y - S) * (y - S) + (T - F) * (T - F)));
        rt = 0, tt = !0
    })), document.addEventListener("touchmove", (function (t) {
        if (ft(), !1 === tt) return !1;
        O = t.touches[0].clientX, I = t.touches[0].clientY, B = t.touches.length, rt++, B > 1 ? (X = t.touches[1].clientX, W = t.touches[1].clientY, z = Math.sqrt((O - X) * (O - X) + (I - W) * (I - W)), null === L && (L = z), Math.abs(L - z) >= 1 && (q = dt(z / L * b, u, o), C = pt(E, p, q), H = pt(A, g, q), R = q - b, U = E * q <= p ? 0 : dt(M - (N - v - p / 2 - M) / (q - R) * R, -1 * C, C), D = A * q <= g ? 0 : dt(x - (Y - w - g / 2 - x) / (q - R) * R, -1 * H, H), q > 1 ? (vt(f), vt(_)) : (wt(f), wt(_)), ht(m, U + "px", D + "px", q), L = z, b = q, M = U, x = D)) : (C = pt(E, p, q = b), H = pt(A, g, q), U = E * q <= p ? 0 : dt(O - (y - M), -1 * C, C), D = A * q <= g ? 0 : dt(I - (T - x), -1 * H, H), Math.abs(U) === Math.abs(C) && (M = U, y = O), Math.abs(D) === Math.abs(H) && (x = D, T = I), m.setAttribute(V, b), m.setAttribute(G, U), m.setAttribute(Z, D), ht(m, U + "px", D + "px", q))
    }), {
        passive: !1
    }), document.addEventListener("touchend", (function (t) {
        if (B = t.touches.length, !1 === tt) return !1;
        0 === B ? (m.setAttribute(V, b), m.setAttribute(G, U), m.setAttribute(Z, D), L = null, tt = !1) : 1 === B ? (y = t.touches[0].clientX, T = t.touches[0].clientY) : B > 1 && (L = null)
    })), 1 == a) return !1;
    lt(Q, "mouseenter", (function () {
        window.addEventListener("DOMMouseScroll", ft, !1), window.addEventListener("wheel", ft, h), window.addEventListener("touchmove", ft, h), window.addEventListener("keydown", mt, !1)
    })), lt(Q, "mouseleave", (function () {
        window.removeEventListener("DOMMouseScroll", ft, !1), window.removeEventListener("wheel", ft, h), window.removeEventListener("touchmove", ft, h), window.removeEventListener("keydown", mt, !1)
    })), lt(Q, "wheel", (function (t) {
        if (f = this, at(m = this.children[0], $), setTimeout((function () {
            gt(m, $)
        }), c), P = f.getBoundingClientRect(), g = f.clientHeight, p = f.clientWidth, A = m.clientHeight, E = m.clientWidth, v = P.left, w = P.top, b = dt(parseFloat(m.getAttribute(V), u, o)), M = parseFloat(m.getAttribute(G)), x = parseFloat(m.getAttribute(Z)), O = t.clientX, I = t.clientY, k = t.deltaY < 0 ? 1 : -1, (q = b + (R = r * k)) < u || q > o) return !1;
        C = pt(E, p, q), H = pt(A, g, q), q <= 1 ? (U = 0, D = 0) : (U = E * q <= p ? 0 : dt(M - (O - v - p / 2 - M) / (q - R) * R, -1 * C, C), D = A * q <= g ? 0 : dt(x - (I - w - g / 2 - x) / (q - R) * R, -1 * H, H));
        q > 1 ? (vt(f), vt(_)) : (wt(f), wt(_));
        m.setAttribute(V, q), m.setAttribute(G, U), m.setAttribute(Z, D), ht(m, U + "px", D + "px", q)
    }));

    function at(t, e) {
        !1 === st(t, e) && (t.className += " " + e)
    }

    function ct(t, e, n) {
        return t >= e && t <= n
    }

    function st(t, e) {
        var n = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
        return !!t.className.match(n)
    }

    function lt(t, e, n, i) {
        i = i || !1;
        for (var r = 0; r < t.length; r++) t[r].addEventListener(e, n, i)
    }

    function dt(t, e, n) {
        return t < e ? t = e : t > n && (t = n), t
    }

    function ht(t, e, n, i) {
        t.style.cssText = l ? "transform : translate3d(" + e + ", " + n + ", 0) scale3d(" + i + ", " + i + ", 1);" : "transform : translate(" + e + ", " + n + ") scale(" + i + ", " + i + ")"
    }

    function ft(t) {
        t = t || window.event
    }

    function mt(t) {
        if ({
            37: 1, 38: 1, 39: 1, 40: 1
        }[t.keyCode]) return ft(t), !1
    }

    function gt(t, e) {
        var n = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
        t.className = t.className.replace(n, "")
    }

    function pt(t, e, n) {
        return (t * n - e) / 2
    }

    function vt(t) {
        at(t, j), at(_, j), n && n(t, !0)
    }

    function wt(t) {
        gt(t, j), gt(_, j), n && n(t, !1)
    }
}

isFullScreenMode(), function (t, e) {
    "use strict";
    "function" != typeof t.CustomEvent && (t.CustomEvent = function (t, n) {
        n = n || {
            bubbles: !1, cancelable: !1, detail: void 0
        };
        var i = e.createEvent("CustomEvent");
        return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i
    }
        , t.CustomEvent.prototype = t.Event.prototype), e.addEventListener("touchstart", s, !1), e.addEventListener("touchmove", l, !1), e.addEventListener("touchend", c, !1), e.addEventListener("mousedown", s, !1), e.addEventListener("mousemove", l, !1), e.addEventListener("mouseup", c, !1);
    var n = null, i = null, r = null, o = null, u = null, a = null;

    function c(t) {
        if (a === t.target) {
            var e = parseInt(a.getAttribute("data-swipe-threshold") || "20", 10),
                c = parseInt(a.getAttribute("data-swipe-timeout") || "500", 10), s = Date.now() - u, l = "";
            Math.abs(r) > Math.abs(o) ? Math.abs(r) > e && s < c && (l = r > 0 ? "swipeleft" : "swiperight") : Math.abs(o) > e && s < c && (l = o > 0 ? "swipeup" : "swipedown"), "" !== l && a.dispatchEvent(new CustomEvent(l, {
                bubbles: !0, cancelable: !0
            })), n = null, i = null, u = null
        }
    }

    function s(t) {
        "swipe-ignore" !== t.target.dataset && (a = t.target, u = Date.now(), n = t.touches ? t.touches[0].clientX : t.clientX, i = t.touches ? t.touches[0].clientY : t.clientY, r = 0, o = 0)
    }

    function l(t) {
        if (n && i) {
            var e = t.touches ? t.touches[0].clientX : t.clientX, u = t.touches ? t.touches[0].clientY : t.clientY;
            r = n - e, o = i - u
        }
    }
}(window, document);
const Splitting = function () {
    var t = document, e = t.createTextNode.bind(t);

    function n(t, e, n) {
        t.style.setProperty(e, n)
    }

    function i(t, e) {
        return t.appendChild(e)
    }

    function r(e, n, r, o) {
        var u = t.createElement("span");
        return n && (u.className = n), r && (!o && u.setAttribute("data-" + n, r), u.textContent = r), e && i(e, u) || u
    }

    function o(t, e) {
        return t.getAttribute("data-" + e)
    }

    function u(e, n) {
        return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (n || t).querySelectorAll(e)) : []
    }

    function a(t) {
        for (var e = []; t--;) e[t] = [];
        return e
    }

    function c(t, e) {
        t && t.some(e)
    }

    function s(t) {
        return function (e) {
            return t[e]
        }
    }

    var l = {};

    function d(t, e, n) {
        var i = n.indexOf(t);
        if (-1 == i) n.unshift(t), c(l[t].depends, (function (e) {
            d(e, t, n)
        })); else {
            var r = n.indexOf(e);
            n.splice(i, 1), n.splice(r, 0, t)
        }
        return n
    }

    function h(t, e, n, i) {
        return {
            by: t, depends: e, key: n, split: i
        }
    }

    function f(t) {
        return d(t, 0, []).map(s(l))
    }

    function m(t) {
        l[t.by] = t
    }

    function g(t, n, o, a, s) {
        t.normalize();
        var l = [], d = document.createDocumentFragment();
        a && l.push(t.previousSibling);
        var h = [];
        return u(t.childNodes).some((function (t) {
            if (!t.tagName || t.hasChildNodes()) {
                if (t.childNodes && t.childNodes.length) return h.push(t), void l.push.apply(l, g(t, n, o, a, s));
                var i = t.wholeText || "", u = i.trim();
                u.length && (" " === i[0] && h.push(e(" ")), c(u.split(o), (function (t, e) {
                    e && s && h.push(r(d, "whitespace", " ", s));
                    var i = r(d, n, t);
                    l.push(i), h.push(i)
                })), " " === i[i.length - 1] && h.push(e(" ")))
            } else h.push(t)
        })), c(h, (function (t) {
            i(d, t)
        })), t.innerHTML = "", i(t, d), l
    }

    var p = "words", v = h(p, 0, "word", (function (t) {
        return g(t, "word", /\s+/, 0, 1)
    })), w = "chars", b = h(w, [p], "char", (function (t, e, n) {
        var i = [];
        return c(n[p], (function (t, n) {
            i.push.apply(i, g(t, "char", "", e.whitespace && n))
        })), i
    }));

    function A(t) {
        var e = (t = t || {}).key;
        return u(t.target || "[data-splitting]").map((function (i) {
            var r = i["ðŸŒ"];
            if (!t.force && r) return r;
            r = i["ðŸŒ"] = {
                el: i
            };
            var u = f(t.by || o(i, "splitting") || w), a = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }({}, t);
            return c(u, (function (t) {
                if (t.split) {
                    var o = t.by, u = (e ? "-" + e : "") + t.key, s = t.split(i, a, r);
                    u && function (t, e, i) {
                        var r = "--" + e, o = r + "-index";
                        c(i, (function (t, e) {
                            Array.isArray(t) ? c(t, (function (t) {
                                n(t, o, e)
                            })) : n(t, o, e)
                        })), n(t, r + "-total", i.length)
                    }(i, u, s), r[o] = s, i.classList.add(o)
                }
            })), i.classList.add("splitting"), r
        }))
    }

    function E(t, e, n) {
        var i = u(e.matching || t.children, t), r = {};
        return c(i, (function (t) {
            var e = Math.round(t[n]);
            (r[e] || (r[e] = [])).push(t)
        })), Object.keys(r).map(Number).sort(M).map(s(r))
    }

    function M(t, e) {
        return t - e
    }

    A.html = function (t) {
        var e = (t = t || {}).target = r();
        return e.innerHTML = t.content, A(t), e.outerHTML
    }
        , A.add = m;
    var x = h("lines", [p], "line", (function (t, e, n) {
        return E(t, {
            matching: n[p]
        }, "offsetTop")
    })), L = h("items", 0, "item", (function (t, e) {
        return u(e.matching || t.children, t)
    })), y = h("rows", 0, "row", (function (t, e) {
        return E(t, e, "offsetTop")
    })), S = h("cols", 0, "col", (function (t, e) {
        return E(t, e, "offsetLeft")
    })), T = h("grid", ["rows", "cols"]), F = "layout", C = h(F, 0, 0, (function (t, e) {
        var a = e.rows = +(e.rows || o(t, "rows") || 1), c = e.columns = +(e.columns || o(t, "columns") || 1);
        if (e.image = e.image || o(t, "image") || t.currentSrc || t.src, e.image) {
            var s = u("img", t)[0];
            e.image = s && (s.currentSrc || s.src)
        }
        e.image && n(t, "background-image", "url(" + e.image + ")");
        for (var l = a * c, d = [], h = r(0, "cell-grid"); l--;) {
            var f = r(h, "cell");
            r(f, "cell-inner"), d.push(f)
        }
        return i(t, h), d
    })), H = h("cellRows", [F], "row", (function (t, e, n) {
        var i = e.rows, r = a(i);
        return c(n[F], (function (t, e, n) {
            r[Math.floor(e / (n.length / i))].push(t)
        })), r
    })), P = h("cellColumns", [F], "col", (function (t, e, n) {
        var i = e.columns, r = a(i);
        return c(n[F], (function (t, e) {
            r[e % i].push(t)
        })), r
    })), N = h("cells", ["cellRows", "cellColumns"], "cell", (function (t, e, n) {
        return n[F]
    }));
    return m(v), m(b), m(x), m(L), m(y), m(S), m(T), m(C), m(H), m(P), m(N), A
}();

function getAverageRGB(t) {
    var e, n, i, r, o = {
        r: 0, g: 0, b: 0
    }, u = document.createElement("canvas"), a = u.getContext && u.getContext("2d"), c = -4, s = {
        r: 0, g: 0, b: 0
    }, l = 0;
    if (!a) return o;
    i = u.height = t.naturalHeight || t.offsetHeight || t.height, n = u.width = t.naturalWidth || t.offsetWidth || t.width, a.drawImage(t, 0, 0);
    try {
        e = a.getImageData(0, 0, n, i)
    } catch (t) {
        return o
    }
    for (r = e.data.length; (c += 20) < r;) ++l, s.r += e.data[c], s.g += e.data[c + 1], s.b += e.data[c + 2];
    return s.r = ~~(s.r / l), s.g = ~~(s.g / l), s.b = ~~(s.b / l), s
}

function convertText(t, e) {
    return t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, ""), e ? t.toUpperCase() : t
}

!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).smoothScrolling = e()
}(this, (function () {
    var t = {
        lineEq: function (t, e, i, s, o) {
            var n = (t - e) / (i - s);
            return n * o + (e - n * s)
        }, map: function (t, e, i, s, o) {
            return (t - e) * (o - s) / (i - e) + s
        }, lerp: function (t, e, i) {
            return (1 - i) * t + i * e
        }, getRandomFloat: function (t, e) {
            return (Math.random() * (e - t) + t).toFixed(2)
        }, distance: function (t, e, i, s) {
            var o = t - i, n = e - s;
            return Math.hypot(o, n)
        }, clamp: function (t, e, i) {
            return Math.max(t, Math.min(e, i))
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }, damp: function (e, i, s, o) {
            return t.lerp(e, i, 1 - Math.exp(-s * o))
        }
    };

    function e(t, e, i, s, o) {
        return (i - t) * (o - s) / (e - t) + s
    }

    function i() {
        return i = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
            }
            return t
        }
            , i.apply(this, arguments)
    }

    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    function o(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t
    }

    var n = function () {
        function e(e) {
            var i = this, s = (e = void 0 === e ? {} : e).El;
            this.duration = e.duration, this.orientation = e.orientation, this.DOM = {
                el: s
            }, this.DOM.transY = this.DOM.el.classList.contains("transform-y") || this.DOM.el.classList.contains("bg-cover") || this.DOM.el.classList.contains("product-item") || this.DOM.el.classList.contains("slide-banner") || this.DOM.el.classList.contains("effect-leaf") || this.DOM.el.classList.contains("column-line"), this.DOM.transX = this.DOM.el.classList.contains("transform-x") || this.DOM.el.classList.contains("trans-x"), this.DOM.scaleY = this.DOM.el.classList.contains("scale-stran"), this.DOM.rotageY = this.DOM.el.classList.contains("rotage-stran"), this.DOM.scaleXY = this.DOM.el.classList.contains("scale-stran-left"), this.speed = this.DOM.el.dataset.speed, this.docScroll, this.endScroll, this.scrollingSpeed, this.getPageYScroll = function () {
                return i.docScroll = window.pageYOffset || document.documentElement.scrollTop
            }
                , this.getPageXScroll = function () {
                return i.docScroll = window.pageXOffset || document.documentElement.scrollLeft
            }
                , "horizontal" === this.orientation ? this.getPageXScroll() : this.getPageYScroll(), this.renderedStyles = {
                tranform: {
                    previous: 0, current: 0, ease: .001, setValue: function () {
                        if ("horizontal" === i.orientation) var e = -1 * (n = parseInt(innerWidth / 10)),
                            s = innerWidth < i.props.width ? i.props.width : innerWidth,
                            o = t.map(i.props.left - i.docScroll, s, -1 * i.props.width, n, e); else {
                            e = -1 * (n = parseInt(innerHeight / 8));
                            var n, r = innerHeight < i.props.height ? i.props.height : innerHeight;
                            o = t.map(i.props.top - i.docScroll, r, -1 * i.props.height, n, e)
                        }
                        return n < 0 ? Math.min(Math.max(o, n), e) : Math.max(Math.min(o, n), e)
                    }
                }
            }, this.getSize(), this.upDate(), this.Resize(), this.Observer = new IntersectionObserver((function (t) {
                t.forEach((function (t) {
                    if (t.isIntersecting) return t.target.classList.add("is-show"), i.isVisible = t.intersectionRatio > 0;
                    t.target.classList.remove("is-show")
                }))
            })), this.Observer.observe(this.DOM.el)
        }

        var i = e.prototype;
        return i.Reset = function () {
            this.DOM.el.style.transform = "translate3d(0,0,0)"
        }
            , i.getSize = function () {
            this.rect = this.DOM.el.getBoundingClientRect(), this.props = {
                height: this.rect.height,
                width: this.rect.width,
                top: this.docScroll + this.rect.top,
                left: this.docScroll + this.rect.left
            }
        }
            , i.upDate = function () {
            for (var t in this.scrollingSpeed = Math.abs(this.docScroll - this.endScroll), this.endScroll = this.docScroll, this.renderedStyles) this.renderedStyles[t].current = this.renderedStyles[t].previous = this.renderedStyles[t].setValue();
            this.getSize()
        }
            , i.Render = function () {
            for (var e in this.renderedStyles) this.renderedStyles[e].current = this.renderedStyles[e].setValue(), this.renderedStyles[e].previous = t.lerp(this.renderedStyles[e].previous, this.renderedStyles[e].current, this.renderedStyles[e].ease);
            this.upDate(), this.Translate()
        }
            , i.Translate = function () {
            var t = this.speed / 1.5 * this.renderedStyles.tranform.previous, e = Math.round("".concat(t)),
                i = Math.round("".concat(t / 1.2)), s = 1 - "".concat(t) / (innerHeight / 2), o = t / 4;
            this.DOM.transY && (this.DOM.el.style.transform = "translate3d(0," + e + "px,0)"), this.DOM.transX && (this.DOM.el.style.transform = "translate3d(" + i + "px,0,0)"), this.DOM.scaleY && (this.DOM.el.style.transform = "translate3d(0," + e + "px,0) scale3d(" + s + "," + s + ",1)"), this.DOM.scaleXY && (this.DOM.el.style.transform = "translate3d(" + i + "px," + e + "px,0) scale3d(" + s + "," + s + ",1)"), this.DOM.rotageY && (this.DOM.el.style.transform = "translate3d(" + i + "px," + e + "px,0) rotate(" + o + "deg)")
        }
            , i.Resize = function () {
            this.upDate(), this.Translate()
        }
            , i.destroy = function (t) {
            var e;
            Array.from(t, (function (t) {
                t.DOM.el.removeAttribute("style")
            })), this.DOM.el.classList.remove("is-show"), null == (e = this.Observer) || e.disconnect()
        }
            , e
    }(), r = function () {
        function e() {
        }

        var i = e.prototype;
        return i.advance = function (e) {
            var i;
            if (this.isRunning) {
                var s = !1;
                if (this.lerp) this.value = t.damp(this.value, this.to, 60 * this.lerp, e), Math.round(this.value) === this.to && (this.value = this.to, s = !0); else {
                    this.currentTime += e;
                    var o = t.clamp(0, this.currentTime / this.duration, 1), n = (s = o >= 1) ? 1 : this.easing(o);
                    this.value = this.from + (this.to - this.from) * n
                }
                null == (i = this.onUpdate) || i.call(this, this.value, s), s && this.stop()
            }
        }
            , i.stop = function () {
            this.isRunning = !1
        }
            , i.fromTo = function (t, e, i) {
            var s = void 0 === i.lerp ? .1 : i.lerp, o = void 0 === i.duration ? 1 : i.duration,
                n = void 0 === i.easing ? function (t) {
                    return t
                } : i.easing, r = i.onStart, l = i.onUpdate;
            this.from = this.value = t, this.to = e, this.lerp = s, this.duration = o, this.easing = n, this.currentTime = 0, this.isRunning = !0, null == r || r(), this.onUpdate = l
        }
            , e
    }(), l = function () {
        function t(t) {
            var e, i, s, o = this, n = void 0 === t ? {} : t, r = void 0 === n.wrapper || n.wrapper,
                l = void 0 === n.content || n.content, h = void 0 === n.main ? null : n.main,
                a = void 0 !== n.mainsize && n.mainsize, c = void 0 === n.orientation ? "vertical" : n.orientation,
                u = void 0 === n.autoResize || n.autoResize;
            if (this.wrapper = r, this.content = l, this.main = h, this.mainsize = a, this.orientation = c, this.setSize = function () {
                var t = 0, e = 0, i = 0;
                if (o.main.removeAttribute("style"), "horizontal" === o.orientation) {
                    for (var s = o.main.children, n = 0; n < s.length; n++) {
                        for (var r = s[n].children, l = 0; l < r.length; l++) i += r[l].offsetWidth;
                        e = i
                    }
                    o.main.style.width = e + "px"
                } else t = o.main.offsetHeight, o.main.style.height = t + "px"
            }
                , this.onWrapperResize = function () {
                o.wrapper === window ? (o.width = window.innerWidth, o.height = window.innerHeight) : (o.width = o.wrapper.clientWidth, o.height = o.wrapper.clientHeight)
            }
                , this.onContentResize = function () {
                o.scrollHeight = o.content.scrollHeight, o.scrollWidth = o.content.scrollWidth
            }
                , this.resize = function () {
                o.onWrapperResize(), o.onContentResize(), null != o.main && o.mainsize && o.setSize()
            }
                , u) {
                var d = (e = this.resize, i = 250, function () {
                    var t = arguments, o = this;
                    clearTimeout(s), s = setTimeout((function () {
                        e.apply(o, t)
                    }), i)
                });
                this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(d), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(d), this.contentResizeObserver.observe(this.content)
            }
            this.resize()
        }

        return t.prototype.destroy = function () {
            var t, e;
            null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect(), null != this.main && this.mainsize && (this.main.removeAttribute("style"), this.setSize = null)
        }
            , o(t, [{
            key: "limit", get: function () {
                return {
                    x: this.scrollWidth - this.width, y: this.scrollHeight - this.height
                }
            }
        }]), t
    }(), h = function () {
        function t() {
            this.events = {}
        }

        var e = t.prototype;
        return e.emit = function (t) {
            for (var e = this.events[t] || [], i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
            for (var n = 0, r = e.length; n < r; n++) e[n].apply(e, s)
        }
            , e.on = function (t, e) {
            var i, s = this;
            return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [e]), function () {
                var i;
                s.events[t] = null == (i = s.events[t]) ? void 0 : i.filter((function (t) {
                    return e !== t
                }))
            }
        }
            , e.off = function (t, e) {
            var i;
            this.events[t] = null == (i = this.events[t]) ? void 0 : i.filter((function (t) {
                return e !== t
            }))
        }
            , e.destroy = function () {
            this.events = {}
        }
            , t
    }(), a = function () {
        function e(e, i) {
            var s = this, o = !1;
            this.element = e, this.smoothTouch = i.smoothTouch, this.smoothMouse = i.smoothMouse, this.wheelMultiplier = i.wheelMultiplier, this.touchMultiplier = i.touchMultiplier, this.mouseMultiplier = i.mouseMultiplier, this.normalizeWheel = i.normalizeWheel, this.orientation = i.orientation, this.touchStart = {
                x: null, y: null
            }, this.emitter = new h, this.onTouchStart = function (t) {
                if (s.smoothTouch) {
                    var e = t.targetTouches ? t.targetTouches[0] : t, i = e.clientX, o = e.clientY;
                    s.touchStart.x = i, s.touchStart.y = o, s.lastDelta = {
                        x: 0, y: 0
                    }, s.emitter.emit("scroll", {
                        deltaX: 0, deltaY: 0, event: t
                    })
                }
            }
                , this.onTouchMove = function (t) {
                if (s.smoothTouch) {
                    var e = t.targetTouches ? t.targetTouches[0] : t, i = e.clientX, o = e.clientY,
                        n = -(i - s.touchStart.x) * s.touchMultiplier, r = -(o - s.touchStart.y) * s.touchMultiplier;
                    s.touchStart.x = i, s.touchStart.y = o, s.lastDelta = {
                        x: n, y: r
                    }, s.emitter.emit("scroll", {
                        deltaX: n, deltaY: r, event: t
                    })
                }
            }
                , this.onTouchEnd = function (t) {
                s.smoothTouch && s.emitter.emit("scroll", {
                    deltaX: s.lastDelta.x, deltaY: s.lastDelta.y, event: t
                })
            }
                , this.onMouseDown = function (t) {
                if (s.smoothMouse && !Touch) {
                    var e = t.clientX, i = t.clientY;
                    s.x = e, s.y = i, s.lastDelta = {
                        x: 0, y: 0
                    }
                }
            }
                , this.onMouseMove = function (t) {
                if (s.smoothMouse && !Touch) {
                    var e = t.clientX, i = t.clientY;
                    "horizontal" === s.orientation && (s.mouseMultiplier = s.mouseMultiplier + .5);
                    var o = (e + s.x) * s.mouseMultiplier, n = -(i - s.y) * s.mouseMultiplier;
                    s.x = -e, s.y = i, s.lastDelta = {
                        x: o, y: n
                    }, s.emitter.emit("scroll", {
                        deltaX: o, deltaY: n, event: t
                    })
                }
            }
                , this.onMouseUp = function (t) {
                s.smoothMouse && !Touch && s.emitter.emit("scroll", {
                    deltaX: s.lastDelta.x, deltaY: s.lastDelta.y, event: t
                })
            }
                , this.onWheel = function (e) {
                var i = e.deltaX, o = e.deltaY;
                s.normalizeWheel && (i = t.clamp(-100, i, 100), o = t.clamp(-100, o, 100)), i *= s.wheelMultiplier, o *= s.wheelMultiplier, s.emitter.emit("scroll", {
                    deltaX: i, deltaY: o, event: e
                })
            }
                , this.element.addEventListener("wheel", (function (t) {
                s.element.classList.contains("stopped") || s.element.classList.contains("no-scroll") || s.onWheel(t)
            }), {
                passive: !1
            }), this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }), this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }), this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1
            }), this.element.addEventListener("mousedown", (function (t) {
                o = !0, s.onMouseDown(t)
            })), this.element.addEventListener("mousemove", (function (t) {
                o && s.onMouseMove(t)
            })), this.element.addEventListener("mouseup", (function (t) {
                o = !1, s.onMouseUp(t)
            }))
        }

        var i = e.prototype;
        return i.on = function (t, e) {
            return this.emitter.on(t, e)
        }
            , i.destroy = function () {
            this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1
            }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1
            }), this.element.removeEventListener("mousedown", this.onMouseDown), this.element.removeEventListener("mousemove", this.onMouseMove), this.element.removeEventListener("mouseup", this.onMouseUp)
        }
            , e
    }();
    return function () {
        function s(t) {
            var e = this, s = void 0 === t ? {} : t, o = void 0 === s.wrapper ? window : s.wrapper,
                n = void 0 === s.content ? document.documentElement : s.content, c = void 0 === s.main ? null : s.main,
                u = void 0 === s.objectTrans ? null : s.objectTrans,
                d = void 0 === s.scrollClass ? null : s.scrollClass,
                p = void 0 === s.scrollbarClass ? null : s.scrollbarClass,
                m = void 0 === s.wheelEventsTarget ? o : s.wheelEventsTarget,
                v = void 0 === s.eventsTarget ? m : s.eventsTarget, f = void 0 === s.smoothWheel || s.smoothWheel,
                g = void 0 !== s.smoothTouch && s.smoothTouch, S = void 0 !== s.smoothMouse && s.smoothMouse,
                y = void 0 !== s.syncTouch && s.syncTouch, M = void 0 === s.syncTouchLerp ? .075 : s.syncTouchLerp,
                b = void 0 === s.touchInertiaMultiplier ? 35 : s.touchInertiaMultiplier, w = s.duration,
                T = void 0 === s.easing ? function (t) {
                    return Math.min(1, 1.001 - Math.pow(2, -10 * t))
                } : s.easing, z = void 0 === s.lerp ? !w && .1 : s.lerp, O = void 0 !== s.infinite && s.infinite,
                L = void 0 === s.orientation ? "vertical" : s.orientation,
                E = void 0 === s.gestureOrientation ? "vertical" : s.gestureOrientation,
                D = void 0 === s.touchMultiplier ? 1 : s.touchMultiplier,
                C = void 0 === s.mouseMultiplier ? 2 : s.mouseMultiplier,
                x = void 0 === s.wheelMultiplier ? 1 : s.wheelMultiplier,
                R = void 0 !== s.normalizeWheel && s.normalizeWheel,
                W = void 0 === s.mainsize ? "vertical" !== L : s.mainsize, H = void 0 === s.autoResize || s.autoResize;
            this.onVirtualScroll = function (t) {
                var s = t.deltaX, o = t.deltaY, n = t.event;
                if (!n.ctrlKey) {
                    var r = n.type.includes("touch"), l = n.type.includes("wheel"), h = n.type.includes("mouse");
                    if ((e.options.smoothTouch || e.options.syncTouch) && r && "touchstart" === n.type) e.reset(); else {
                        var a = 0 === s && 0 === o,
                            c = "vertical" === e.options.gestureOrientation && 0 === o || "horizontal" === e.options.gestureOrientation && 0 === s;
                        if (!a && !c) {
                            var u = n.composedPath();
                            if (!(u = u.slice(0, u.indexOf(e.rootElement))).find((function (t) {
                                var i;
                                return (null == t.hasAttribute ? void 0 : t.hasAttribute("data-prevent")) || r && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-prevent-touch")) || l && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-prevent-wheel")) || h && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-prevent-mouse")) || (null == (i = t.classList) ? void 0 : i.contains(e.options.scrollClass))
                            }))) if (e.isStopped || e.isLocked) n.preventDefault(); else {
                                if (e.isSmooth = (e.options.smoothTouch || e.options.syncTouch) && r || e.options.smoothWheel && l || e.options.smoothMouse && h, !e.isSmooth) return e.isScrolling = !1, void e.animate.stop();
                                n.preventDefault();
                                var d = o;
                                "both" === e.options.gestureOrientation ? d = Math.abs(o) > Math.abs(s) ? o : s : "horizontal" === e.options.gestureOrientation && (d = s);
                                var p = r && e.options.syncTouch, m = r && "touchend" === n.type && Math.abs(d) > 5;
                                m && (d = e.velocity * e.options.touchInertiaMultiplier), e.scrollTo(e.targetScroll + d, i({
                                    programmatic: !1
                                }, p ? {
                                    lerp: m ? e.options.syncTouchLerp : 1
                                } : {
                                    lerp: e.options.lerp, duration: e.options.duration, easing: e.options.easing
                                }))
                            }
                        }
                    }
                }
            }
                , this.onNativeScroll = function () {
                if (!e.preventNextScrollEvent) {
                    if (!e.isScrolling) {
                        var t = e.animatedScroll;
                        e.animatedScroll = e.targetScroll = e.actualScroll, e.velocity = 0, e.direction = Math.sign(e.animatedScroll - t), e.emit()
                    }
                    e.isHorizontal ? 1 === e.direction ? e.rootElement.setAttribute("data-direction", "left") : e.rootElement.setAttribute("data-direction", "right") : 1 === e.direction ? e.rootElement.setAttribute("data-direction", "down") : e.rootElement.setAttribute("data-direction", "up")
                }
            }
                , o !== document.documentElement && o !== document.body || (o = window), this.options = {
                wrapper: o,
                content: n,
                main: c,
                mainsize: W,
                objectTrans: u,
                scrollClass: d,
                scrollbarClass: p,
                wheelEventsTarget: m,
                eventsTarget: v,
                smoothWheel: f,
                smoothTouch: g,
                smoothMouse: S,
                syncTouch: y,
                syncTouchLerp: M,
                touchInertiaMultiplier: b,
                duration: w,
                easing: T,
                lerp: z,
                infinite: O,
                gestureOrientation: E,
                orientation: L,
                touchMultiplier: D,
                wheelMultiplier: x,
                mouseMultiplier: C,
                normalizeWheel: R,
                autoResize: H
            }, this.animate = new r, this.emitter = new h, this.dimensions = new l({
                wrapper: o, content: n, main: c, mainsize: W, orientation: L, autoResize: H
            }), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = y || f || g || S, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.rootElement.setAttribute("data-orientation", this.options.orientation), this.Items = [], null != this.options.scrollbarClass && this.createBar(), null != this.options.objectTrans && this.getObject(), this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
                passive: !1
            }), this.virtualScroll = new a(v, {
                orientation: L,
                smoothTouch: g,
                smoothMouse: S,
                touchMultiplier: D,
                wheelMultiplier: x,
                mouseMultiplier: C,
                normalizeWheel: R
            }), this.virtualScroll.on("scroll", this.onVirtualScroll), window.addEventListener("resize", this.resize.bind(this))
        }

        var c = s.prototype;
        return c.createBar = function () {
            if (this.isHorizontal) {
                for (var t = 0, e = this.options.main.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                this.instanceX = t - window.innerWidth
            }
            this.instanceY = this.options.content.offsetHeight - window.innerHeight, this.scrollbar = document.createElement("div"), this.scrollThumb = document.createElement("div"), this.scrollbar.classList.add(this.options.scrollbarClass), this.scrollThumb.classList.add("".concat(this.options.scrollbarClass, "-thumb")), this.scrollbar.append(this.scrollThumb), this.options.content == document.body ? this.options.content.append(this.scrollbar) : this.rootElement.append(this.scrollbar), this.getBar()
        }
            , c.getBar = function () {
            if (this.scrollBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollBCR.height, this.scrollbarWidth = this.scrollBCR.width, this.isHorizontal) {
                var t = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instanceX + this.scrollbarWidth));
                this.scrollThumb.style.width = Math.round(t) + "px"
            } else {
                var e = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instanceY + this.scrollbarHeight));
                this.scrollThumb.style.height = Math.round(e) + "px"
            }
            this.grabBar()
        }
            , c.postBar = function () {
            if (this.thumbHeight = this.scrollThumb.getBoundingClientRect().height, this.thumbWidth = this.scrollThumb.getBoundingClientRect().width, this.isHorizontal) {
                var t = Math.round(this.progress * (window.innerWidth - this.thumbWidth));
                this.scrollThumb.style.transform = "translate3d(" + t + "px,0,0)"
            } else {
                var e = Math.round(this.progress * (window.innerHeight - this.thumbHeight));
                this.scrollThumb.style.transform = "translate3d(0," + e + "px,0)"
            }
        }
            , c.grabBar = function () {
            var t, i = this, s = !1;
            this.scrollThumb.addEventListener("pointerdown", (function (t) {
                s = t.offsetY
            }), !1), window.addEventListener("pointermove", (function (o) {
                s && (o.preventDefault(), t = i.isHorizontal ? e(s, innerWidth - (i.scrollThumb.offsetLeft - s), o.clientX, 0, i.limit) : e(s, innerHeight - (i.scrollThumb.offsetHeight - s), o.clientY, 0, i.limit), i.scrollTo(t, {
                    immediate: !0
                }))
            }), !1), window.addEventListener("pointerup", (function () {
                s = !1
            }), !1)
        }
            , c.destroyBar = function () {
            return this.scrollbar.remove()
        }
            , c.Mover = function () {
            for (var t = 0; t < this.Items.length; t++) {
                var e = this.Items[t];
                e.isVisible ? e.insideViewport ? e.Render() : (e.insideViewport = !0, e.upDate()) : e.insideViewport = !1, e.Render()
            }
        }
            , c.getObject = function () {
            for (var t = "." + this.options.objectTrans, e = this.options.content.querySelectorAll(t), i = 0; i < e.length; i++) this.aniobject = new n({
                El: e[i], orientation: this.options.orientation, duration: this.options.duration
            }), this.Items.push(this.aniobject);
            this.Mover()
        }
            , c.on = function (t, e) {
            return this.emitter.on(t, e)
        }
            , c.off = function (t, e) {
            return this.emitter.off(t, e)
        }
            , c.setScroll = function (t) {
            this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
        }
            , c.resize = function () {
            null != this.options.scrollbarClass && (this.getBar(), this.postBar()), null != this.options.objectTrans && this.aniobject && this.aniobject.Resize(), this.dimensions.resize()
        }
            , c.emit = function () {
            null != this.options.scrollbarClass && this.postBar(), null != this.options.objectTrans && this.Mover(), this.emitter.emit("scroll", this)
        }
            , c.reset = function () {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
        }
            , c.start = function () {
            this.isStopped = !1, this.reset()
        }
            , c.stop = function () {
            this.isStopped = !0, this.animate.stop(), this.reset()
        }
            , c.raf = function (t) {
            var e = t - (this.time || t);
            this.time = t, this.animate.advance(.001 * e)
        }
            , c.scrollTo = function (e, i) {
            var s = this, o = void 0 === i ? {} : i, n = void 0 === o.offset ? 0 : o.offset,
                r = void 0 !== o.immediate && o.immediate, l = void 0 !== o.lock && o.lock,
                h = void 0 === o.duration ? this.options.duration : o.duration,
                a = void 0 === o.easing ? this.options.easing : o.easing,
                c = void 0 === o.lerp ? !h && this.options.lerp : o.lerp,
                u = void 0 === o.onComplete ? null : o.onComplete, d = void 0 !== o.force && o.force,
                p = void 0 === o.programmatic || o.programmatic;
            if (!this.isStopped && !this.isLocked || d) {
                if (["top", "left", "start"].includes(e)) e = 0; else if (["bottom", "right", "end"].includes(e)) e = this.limit; else {
                    var m, v;
                    if ("string" == typeof e ? v = document.querySelector(e) : null != (m = e) && m.nodeType && (v = e), v) {
                        if (this.options.wrapper !== window) {
                            var f = this.options.wrapper.getBoundingClientRect();
                            n -= this.isHorizontal ? f.left : f.top
                        }
                        var g = v.getBoundingClientRect();
                        e = (this.isHorizontal ? g.left : g.top) + this.animatedScroll
                    }
                }
                if ("number" == typeof e) {
                    if (e += n, e = Math.round(e), this.options.infinite ? p && (this.targetScroll = this.animatedScroll = this.scroll) : e = t.clamp(0, e, this.limit), r) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void (null == u || u(this));
                    if (!p) {
                        if (e === this.targetScroll) return;
                        this.targetScroll = e
                    }
                    this.animate.fromTo(this.animatedScroll, e, {
                        duration: h, easing: a, lerp: c, onStart: function () {
                            l && (s.isLocked = !0), s.isScrolling = !0
                        }, onUpdate: function (t, e) {
                            s.isScrolling = !0, s.velocity = t - s.animatedScroll, s.direction = Math.sign(s.velocity), s.animatedScroll = t, s.setScroll(s.scroll), p && (s.targetScroll = t), e || s.emit(), e && (s.reset(), s.emit(), null == u || u(s), s.preventNextScrollEvent = !0, requestAnimationFrame((function () {
                                delete s.preventNextScrollEvent
                            })))
                        }
                    })
                }
            }
        }
            , c.toggleClass = function (t, e) {
            this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this)
        }
            , c.destroy = function () {
            if (this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
                passive: !1
            }), window.removeEventListener("resize", this.resize.bind(this)), this.emitter.destroy(), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass(this.options.scrollClass, !1), this.toggleClass("scrolling", !1), this.toggleClass("stopped", !1), this.toggleClass("locked", !1), this.rootElement.removeAttribute("data-orientation"), this.rootElement.removeAttribute("data-direction"), null != this.options.scrollbarClass && this.destroyBar(), null != this.options.objectTrans) for (var t = 0; t < this.Items.length; t++) this.Items[t].destroy(this.Items)
        }
            , o(s, [{
            key: "rootElement", get: function () {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
        }, {
            key: "limit", get: function () {
                return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
        }, {
            key: "isHorizontal", get: function () {
                return "horizontal" === this.options.orientation
            }
        }, {
            key: "actualScroll", get: function () {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
            }
        }, {
            key: "scroll", get: function () {
                return this.options.infinite ? t.modulo(this.animatedScroll, this.limit) : this.animatedScroll
            }
        }, {
            key: "progress", get: function () {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
        }, {
            key: "isSmooth", get: function () {
                return this.__isSmooth
            }, set: function (t) {
                this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClass(this.options.scrollClass, t))
            }
        }, {
            key: "isScrolling", get: function () {
                return this.__isScrolling
            }, set: function (t) {
                this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClass("scrolling", t))
            }
        }, {
            key: "isStopped", get: function () {
                return this.__isStopped
            }, set: function (t) {
                this.__isStopped !== t && (this.__isStopped = t, this.toggleClass("stopped", t))
            }
        }, {
            key: "isLocked", get: function () {
                return this.__isLocked
            }, set: function (t) {
                this.__isLocked !== t && (this.__isLocked = t, this.toggleClass("locked", t))
            }
        }, {
            key: "className", get: function () {
                return this.isStopped && (this.options.scrollClass += " stopped"), this.isLocked && (this.options.scrollClass += " locked"), this.isScrolling && (this.options.scrollClass += " scrolling"), this.isSmooth && this.options.scrollClass, this.options.scrollClass
            }
        }]), s
    }()
}));
var Protocal = window.location.protocol, Host = window.location.host, pathArray = window.location.pathname.split("/"),
    getDirect = Protocal + "//" + Host + "/";
gsap.config({
    nullTargetWarn: !1
});
var warn = console.warn;
console.warn = function () {
}
    , window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}
    , window.addEventListener("pageshow", (function (e) {
    window.scrollTo(0, 0), e.persisted && location.reload()
}));
var timer, thatScroll, thatInner, thatSmall, Load = 0, Details = 0, First = 0, News = 0, XWidth = window.innerWidth,
    YHeight = window.innerHeight, windscroll = window.pageYOffset, Body = document.body,
    Container = document.querySelector(".container"), titlePage = document.querySelector(".title-page"),
    IDPage = Container.getAttribute("id"), Mask = document.querySelector(".mask"),
    overlayPath = document.querySelector(".overlay-path"), Header = document.querySelector(".header"),
    Logo = document.querySelector(".logo"), rightHeader = document.querySelector(".right-header"),
    Language = document.querySelector(".language"), searchBut = document.querySelector(".search-but"),
    formRowSearch = document.querySelector(".form-row-search"), Navigation = document.querySelector(".navigation"),
    Nav = document.querySelector(".nav"), mainMenu = document.querySelector(".main-menu"),
    navLi = document.querySelectorAll(".main-menu li"), hasSub = document.querySelectorAll(".has-sub"),
    naItems = document.querySelectorAll(".nav-item"), subItems = document.querySelectorAll(".sub-menu-drop"),
    overlayMenu = document.querySelector(".overlay-menu"), logoMenu = document.querySelector(".logo-menu"),
    navClick = document.querySelector(".nav-click"), Gohome = document.querySelector(".link-home"),
    Gopage = document.querySelectorAll(".link-load, .link-home, .go-detail, .order, .goback"),
    Gopop = document.querySelectorAll(".link-popup, .link-policy"), Footer = document.querySelector("footer"),
    Bottom = document.querySelector(".bottom"), allStories = document.querySelector(".all-stories"),
    wrapStories = document.querySelector(".wrap-all-stories"), overlayClick = document.querySelector(".overlay-click"),
    columnRotate = document.querySelector(".column-rotate"), secondMenu = document.querySelector(".second-menu"),
    outerNavSec = document.querySelector(".section-outernav"), outerNav = document.querySelector(".outer-nav"),
    clickHead = document.querySelectorAll(".sub-level"),
    wrapView = document.querySelectorAll(".wrap-view-more, .box-news, .search-view-more"),
    selectList = document.querySelector(".select-list"), selectHeader = document.querySelector(".select-header"),
    selectBox = document.querySelector(".select-box"), breadCrumb = document.querySelector(".breadcrumb"),
    bannerHome = document.querySelector(".banner-home"), slideBanner = document.querySelector(".slide-banner"),
    bannerInner = document.querySelector(".banner-inner"), bgMulti = document.querySelector(".bg-multi"),
    sticky = document.querySelectorAll(".sticky, .details-pics"), sticky_js = document.getElementById("sticky_js"),
    horScroll = document.querySelector(".hori-scroll"), Brands = document.querySelector(".brands"),
    Subscrible = document.querySelector(".subscribe"), contactForm = document.querySelector(".contact-form"),
    commentForm = document.querySelector(".comment-form"), searchForm = document.querySelector(".search-form"),
    forgetForm = document.querySelector(".forget-form"), loginForm = document.querySelector(".login-form"),
    registForm = document.querySelector(".register-form"), goBack = document.querySelector(".goback"),
    boxVideo = document.querySelector(".box-video-center .inline-video"),
    ytVideo = document.getElementById("youtube-video"), id_Inline = document.getElementById("video_js"),
    id_Youtube = document.getElementById("yt_js"), proBox = document.querySelectorAll(".product-box"),
    shareBox = document.querySelector(".share-box"),
    svgClose = '<svg viewBox="0 0 100 100"><circle class="c-rotate" cx="50" cy="50" r="48.5"></circle></svg>',
    A = document.createElement("div"), B = document.createElement("div"), C = document.createElement("div"),
    D = document.createElement("div"), E = document.createElement("div");
A.className = "all-pics", B.className = "all-album", C.className = "all-video", D.className = "overlay-dark", E.className = "loadx", Body.append(A, B, C, D, E);
var allPics = document.querySelector(".all-pics"), allAlbum = document.querySelector(".all-album"),
    allVideo = document.querySelector(".all-video"), overlayDark = document.querySelector(".overlay-dark"),
    Loadx = document.querySelector(".loadx");
if ("home-page" == IDPage) {
    var divMask = '<div class="logo-mask"><img class="js-logo" src="' + getDirect + 'Content/theme_btq/images/logo.svg" width="100%" height="100%" alt="logo"></div><div class="mask-line"><div class="mask-line-inner"></div></div>';
    (M = document.createElement("div")).className = "mask-inner", M.innerHTML = divMask, Mask.append(M)
} else Loadx.classList.add("display-block", "inplay");
var X = '<span></span><svg viewBox="0 0 200 200"><circle fill="currentColor" cx="100" cy="100" r="5"/></svg>',
    Y = '<svg viewBox="0 0 80 80"><path fill="currentColor" d="M54.9,49.8H25.3L40,24.1L54.9,49.8z M30.7,46.5h18.6l-9.4-16.1L30.7,46.5z"></path></svg>',
    divX = document.createElement("div"), divY = document.createElement("div");
divX.className = "scroll-down", divY.className = "go-top", divX.innerHTML = X, divY.innerHTML = Y, Body.append(divX, divY);
var goTop = document.querySelector(".go-top"), scrollDown = document.querySelector(".scroll-down");
if (sticky.length > 0) {
    if (!sticky_js) (script = document.createElement("script")).id = "sticky_js", script.type = "text/javascript", script.src = getDirect + "Content/theme_btq/js/gsap/ScrollTrigger.js", document.body.appendChild(script);
    document.querySelector(".sticky-item") && (document.querySelector(".sticky-item:last-child").classList.add("last-child"), document.querySelector(".sticky-item:last-child").classList.add("last-child")), document.querySelector(".sticky-story") && (document.querySelector(".sticky-story:first-child").classList.add("first-child"), document.querySelector(".sticky-story:last-child").classList.add("last-child"))
}
boxVideo && (id_Inline || ((script = document.createElement("script")).id = "video_js", script.type = "text/javascript", script.src = getDirect + "Content/theme_btq/js/modules/video.js", (style = document.createElement("link")).id = "video_css", style.type = "text/css", style.rel = "stylesheet", style.href = getDirect + "Content/theme_btq/css/video.css", document.body.appendChild(script), document.body.appendChild(style), boxVideo.parentNode.parentNode.parentNode.setAttribute("data-video", "inline")));
ytVideo && (id_Youtube || ((script = document.createElement("script")).id = "yt_js", script.type = "text/javascript", script.src = getDirect + "Content/theme_btq/js/modules/youtube.js", (style = document.createElement("link")).id = "video_css", style.type = "text/css", style.rel = "stylesheet", style.href = getDirect + "Content/theme_btq/css/video.css", document.body.appendChild(script), document.body.appendChild(style), ytVideo.parentNode.parentNode.parentNode.setAttribute("data-video", "youtube")));
if (slideBanner) {
    var slide_js = document.getElementById("slide_js");
    if (!slide_js) (script = document.createElement("script")).id = "slide_js", script.type = "text/javascript", script.src = getDirect + "/slide-banner.js", document.body.appendChild(script)
}
if ("details-page" == Container.dataset.details) {
    var format_js = document.getElementById("format_js");
    if (!format_js) (script = document.createElement("script")).id = "format_js", script.type = "text/javascript", script.src = getDirect + "Content/theme_btq/js/modules/format.js", document.body.appendChild(script)
}
if ("product-page" == IDPage || "supplier-page" == IDPage) {
    var style, proslide_js = document.getElementById("proslide_js");
    if (!proslide_js) (script = document.createElement("script")).id = "proslide_js", script.type = "text/javascript", script.src = getDirect + "Content/theme_btq/js/modules/slide.js", (style = document.createElement("link")).id = "slide_css", style.type = "text/css", style.rel = "stylesheet", style.href = getDirect + "Content/theme_btq/css/slide.css", document.body.appendChild(script), document.body.appendChild(style);
    var M = '<span>Carousel</span><ul><li class="active" data-slide="collapse"><button aria-label="collapse"><svg viewBox="0 0 40 40"><path fill="currentColor" d="M33.6,19.5c0.1-0.2-3.1-3.2-3.3-3.4c-1.1-1.1-2.8,0.6-1.7,1.7c0,0,1,0.9,1,0.9h-3.1c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2 h3.1l-1,0.9c-1.1,1.1,0.6,2.8,1.7,1.7c0,0,3-3,3-3C33.7,20.5,33.8,20,33.6,19.5z M5.8,19.5c-0.1-0.2,3.1-3.2,3.3-3.4 c1.1-1.1,2.8,0.6,1.7,1.7c0,0-1,0.9-1,0.9h3.1c0.7,0,1.2,0.5,1.2,1.2s-0.5,1.2-1.2,1.2H9.8l1,0.9c1.1,1.1-0.6,2.8-1.7,1.7 c0,0-3-3-3-3C5.8,20.5,5.6,20,5.8,19.5z M19.7,14c-0.7,0-1.2,0.5-1.2,1.2v9.6c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2v-9.6 C20.9,14.5,20.4,14,19.7,14z"/></svg></button></li><li data-slide="extend"><button aria-label="extend"><svg viewBox="0 0 40 40"><path fill="currentColor" d="M11.3,15.2h16.8c0.7,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2H11.3c-0.7,0-1.2,0.5-1.2,1.2S10.7,15.2,11.3,15.2z M30.5,18.8H8.9 c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2h21.6c0.7,0,1.2-0.5,1.2-1.2S31.2,18.8,30.5,18.8z M28.1,24.8H11.3c-0.7,0-1.2,0.5-1.2,1.2 s0.5,1.2,1.2,1.2h16.8c0.7,0,1.2-0.5,1.2-1.2S28.8,24.8,28.1,24.8z"/></svg></button></li></ul><span>List View</span>';
    if ("product-details-page" != Container.dataset.details || "product-details-special" != Container.dataset.details) {
        document.querySelectorAll(".slide-pro, .slide-pro-two").forEach((function (e) {
            var t = document.createElement("div");
            t.className = "switch-nav", t.innerHTML = M, e.prepend(t)
        }));
        for (var List = document.querySelectorAll(".product-list, .product-list-two"), i = 0; i < List.length; i++) {
            var Title = List[i].querySelector(".title-main h2").textContent, Num = i + 1;
            List[i].setAttribute("data-name", "go-" + Num), (A = document.createElement("div")).className = "item-list", (B = document.createElement("button")).className = "button", B.setAttribute("aria-label", "button"), B.setAttribute("data-target", "go-" + Num), B.textContent = Title, A.append(B), Header.append(A)
        }

        function addList() {
            var e = document.createElement("div");
            e.className = "sub-list";
            for (var t = document.querySelectorAll(".item-list"), r = 0; r < t.length; r++) e.append(t[r]);
            breadCrumb && breadCrumb.append(e)
        }

        addList()
    }
}
if ("product-details-page" == Container.dataset.details || "product-details-special" == Container.dataset.details) {
    var rating_js = document.getElementById("rating_js");
    if (!rating_js) (script = document.createElement("script")).id = "rating_js", script.type = "text/javascript", script.src = getDirect + "Content/theme_btq/js/modules/rating.js", document.body.appendChild(script);
    var script, qr_js = document.getElementById("qr_js");
    if (!qr_js) (script = document.createElement("script")).id = "qr_js", script.type = "text/javascript", script.defer = "defer", script.src = getDirect + "Content/theme_btq/js/modules/qrcode.js", document.body.appendChild(script);
    if (document.querySelector(".pro-text")) {
        var textStyle = document.querySelectorAll(".pro-text span, .pro-text em");
        if (textStyle) for (i = 0; i < textStyle.length; i++) textStyle[i].removeAttribute("style")
    }
    if (document.querySelector("[data-faq]") && document.querySelectorAll("[data-faq] .pro-text li").forEach((function (e) {
        e.classList.add("ani-item")
    })), "product-page-07" == Container.dataset.second || "product-page-08" == Container.dataset.second || "product-page-09" == Container.dataset.second) {
        document.querySelectorAll(".product-details").forEach((function (e) {
            e.classList.add("option-two")
        }));
        var Release = document.querySelector("[data-relative] .slide-pro");
        Release && (Release.querySelectorAll(".product-inner").forEach((function (e) {
            e.querySelector(".product-txt").classList.remove("color-white");
            var t = e.querySelector(".wrap-view-more");
            e.querySelector(".product-wrap").append(t), e.querySelector(".product-pic .trans-x").classList.replace("trans-x", "trans-y"), e.querySelector(".product-pic .transform-x").classList.replace("transform-x", "transform-y"), e.classList.replace("product-inner", "product-inner-two")
        })), Release.classList.replace("slide-pro", "slide-pro-two"))
    }
}

function addLeafs(e) {
    var t = ["l-01", "l-02", "l-03", "l-04", "l-05"], r = Math.floor(Math.random() * t.length),
        o = document.createElement("div"), a = document.createDocumentFragment();
    ["leaf-01", "leaf-02", "leaf-03", "leaf-04", "leaf-05", "leaf-06", "leaf-07"].forEach((function (e) {
        var t = document.createElement("div");
        t.className = "leaf", t.classList.add(e), a.appendChild(t)
    })), o.appendChild(a), o.className = "trans effect-leaf", o.setAttribute("data-speed", 3), o.classList.add(t[r]), e.append(o), e.classList.add(t[r]), gsap.timeline().fromTo(".leaf", 2, {
        opacity: 0, scale: 0, rotation: 0
    }, {
        opacity: 1, scale: 1, rotation: 25 * r, ease: "none", stagger: .05
    })
}

if (overlayMenu) {
    (Div = document.createElement("div")).className = "right-bg-menu", overlayMenu.appendChild(Div);
    var BGIMG = [getDirect + "Content/theme_btq/images/menu/1.jpg", getDirect + "Content/theme_btq/images/menu/2.jpg", getDirect + "Content/theme_btq/images/menu/3.jpg", getDirect + "Content/theme_btq/images/menu/4.jpg", getDirect + "Content/theme_btq/images/menu/5.jpg"];

    function makeGoto() {
        var e = Math.floor(Math.random() * BGIMG.length);
        document.querySelector(".right-bg-menu").style.backgroundImage = "url(" + BGIMG[e] + ")"
    }

    makeGoto()
}
if (bgMulti) {
    (Div = document.createElement("div")).className = "bg-multi-inner", bgMulti.appendChild(Div);
    var BGM = [getDirect + "Content/theme_btq/images/background/bg1.jpg", getDirect + "Content/theme_btq/images/background/bg2.jpg", getDirect + "Content/theme_btq/images/background/bg3.jpg", getDirect + "Content/theme_btq/images/background/bg4.jpg"];

    function makeBG() {
        var e = Math.floor(Math.random() * BGM.length);
        document.querySelector(".bg-multi-inner").style.backgroundImage = "url(" + BGM[e] + ")"
    }

    makeBG()
}
if (document.querySelector(".product-list") && Array.from(document.querySelectorAll(".product-list"), (function (e, t) {
    var r = t + 1;
    e.setAttribute("data-bgcolor", "0" + r);
    var o = e.querySelector(".title-main h2").textContent;
    e.querySelector(".scroll-text span").innerText = o + " ~ " + o + " ~ "
})), document.querySelector(".product-list-two") && Array.from(document.querySelectorAll(".product-list-two"), (function (e, t) {
    var r = e.querySelector(".title-main h2").textContent;
    e.querySelector(".scroll-text span").textContent = r + " ~ " + r + " ~ "
})), document.querySelector(".product-details")) {
    if (Array.from(document.querySelectorAll(".product-details"), (function (e, t) {
        var r = t + 1;
        if (e.querySelector(".details-wrap").setAttribute("data-color", "0" + r), e.querySelector(".details-wrap .product-title h2")) {
            var o = e.querySelector(".details-wrap .product-title h2").textContent;
            e.querySelector(".scroll-text span").textContent = o + " ~ " + o + " ~ "
        }
    })), document.querySelector(".product-details[data-relative]")) {
        var tSlide = document.querySelector(".product-details[data-relative] .bottom-section");
        document.querySelector(".product-details[data-back]") && document.querySelector(".product-details[data-back]").append(tSlide)
    }
    Array.from(document.querySelectorAll(".detail-pic"), (function (e) {
        var t = document.createElement("span");
        t.className = "overlay-hover", e.append(t)
    }))
}
document.querySelector(".price") && Array.from(document.querySelectorAll(".price"), (function (e) {
    e.querySelector("p").textContent;
    0 == e.querySelector("p").textContent && e.classList.add("display-none")
})), document.querySelector(".pro-text p") && document.querySelectorAll(".pro-text p").forEach((function (e) {
    var t = e.textContent || e.textInner;
    (null == t || t.length <= 1 || " " == t) && e.classList.add("height-zero")
})), document.querySelector(".box-txt") && document.querySelectorAll(".box-txt p").forEach((function (e, t) {
    var r = e.textContent || e.textInner;
    null == r || r.length <= 1 || " " == r ? e.classList.add("height-zero") : e.setAttribute("style", "--data-index: " + t)
})), document.querySelector(".column-wrap") && document.querySelectorAll(".column-line").forEach((function (e, t) {
    var r = e.querySelector(".column-img:nth-child(1)").cloneNode(!0);
    e.append(r)
})), "service-page" == IDPage && "service-05" == Container.dataset.second && document.querySelector(".load-details ul") && (Array.from(document.querySelectorAll(".load-details ul"), (function (e) {
    e.classList.add("pro-text")
})), Array.from(document.querySelectorAll(".load-text li:nth-child(odd)"), (function (e) {
    e.classList.add("ask")
})), Array.from(document.querySelectorAll(".load-text li:nth-child(even)"), (function (e) {
    e.classList.add("answer")
})));
var textTagline = document.querySelectorAll(".text-tagline");
textTagline && textTagline.forEach((function (e) {
    var t = e.querySelector("p").cloneNode(!0);
    t && e.querySelector(".tagline-inner").append(t)
}));
var scrollText = document.querySelectorAll(".scroll-text");

function cloneBread() {
    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    e.innerHTML = '<svg viewBox="0 0 50 50"><path fill="currentColor" d="M40.4,17L40.4,17L28.9,6.9c-2.2-2-5.5-2-7.7,0L9.8,17c-1.2,1.1-1.9,2.7-1.9,4.3v16.8c0,3.2,2.6,5.8,5.8,5.8h23c3.2,0,5.8-2.6,5.8-5.8V21.3C42.4,19.7,41.7,18.1,40.4,17z M28.9,40h-7.7v-9.6c0-1.1,0.9-1.9,1.9-1.9H27c1.1,0,1.9,0.9,1.9,1.9V40z M38.5,38.1c0,1.1-0.9,1.9-1.9,1.9h-3.8v-9.6c0-3.2-2.6-5.8-5.8-5.8h-3.8c-3.2,0-5.8,2.6-5.8,5.8V40h-3.8c-1.1,0-1.9-0.9-1.9-1.9V21.3c0-0.6,0.2-1.1,0.7-1.4L23.8,9.8c0.7-0.6,1.8-0.6,2.5,0l11.5,10.1c0.4,0.4,0.7,0.9,0.7,1.4V38.1z"></path></svg>', breadCrumb.querySelector(".link-home").append(e), breadCrumb.querySelector("li:last-child").classList.add("last");
    var t = breadCrumb.cloneNode(!0), r = document.createElement("div");
    if (r.className = "bread-second", t.classList.replace("breadcrumb", "breadcrumb-second"), r.append(t), Header.append(r), Container.dataset.details && "news-page" == IDPage) {
        var o = document.querySelector(".load-title > .wrap-details > h2").textContent,
            a = document.createElement("li");
        a.innerHTML = '<div class="text-title"><span></span></div>', breadCrumb.querySelector(".breadcrumb ul").append(a);
        var n = document.querySelector(".breadcrumb .text-title");
        n.querySelector("span").innerHTML = o;
        var c = n.querySelector("span").cloneNode(!0);
        n.append(c)
    }
}

scrollText && scrollText.forEach((function (e) {
    var t = e.querySelector("span").cloneNode(!0);
    t && e.append(t)
})), breadCrumb && cloneBread();
var Gradient = '<svg  viewBox="0 0 670 400"><linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="235" y1="10" x2="435" y2="390"><stop  offset="0" style="stop-color:#947ac0;stop-opacity:0"/><stop  offset="0.3" style="stop-color:#947ac0"/><stop  offset="1" style="stop-color:#775aa7"/></linearGradient></svg>',
    div_gradient = document.createElement("div");
div_gradient.id = "svg_gradient", div_gradient.innerHTML = Gradient, document.body.appendChild(div_gradient), wrapView && wrapView.forEach((function (e) {
    var t = document.createElement("div");
    t.className = "icon-svg", t.innerHTML = '<svg viewBox="0 0 200 200"><path fill="currentColor" d="M100,68.3c-17.5,0-31.7,14.2-31.7,31.7s14.2,31.7,31.7,31.7s31.7-14.2,31.7-31.7S117.5,68.3,100,68.3z M100.7,114v-12.4 H85.3v-2.9h15.4V86.1l14,14L100.7,114z"/><circle class="before" fill="none" stroke="currentColor" cx="100" cy="100" r="90"/><circle class="after" fill="none" stroke="currentColor" cx="100" cy="100" r="90"/></svg>';
    var r = document.createElement("div");
    r.className = "icon-svg-2", r.innerHTML = '<svg viewBox="0 0 200 200"><path fill="currentColor" d="M105.3,119.9c1.7,0,3.2-1.4,3.2-3.2v-6c0-1.7-1.4-3.2-3.2-3.2c-1.7,0-3.2,1.3-3.2,3.2v6C102.4,118.5,103.8,119.9,105.3,119.9z M93.2,119.9c1.7,0,3.2-1.4,3.2-3.2v-6c0-1.7-1.3-3.2-3.2-3.2c-1.7,0-3.1,1.3-3.1,3.2v6C90.4,118.5,91.7,119.9,93.2,119.9z M120.5,83.5h-4L111.2,73c-0.5-1.5-2.3-2.3-3.9-1.5c-1.5,0.5-2.3,2.3-1.5,3.9c0,0.2,0.2,0.2,0.2,0.4l3.9,7.7H89.2l3.9-7.7c0.5-1.5,0-3.3-1.5-3.9c-1.3-0.5-2.9,0-3.7,1.2l-5.2,10.5h-4c-5,0-8.9,4.3-8.9,9.2c0,3.9,2.5,7.2,6.2,8.4l2.3,22.6c0.4,4.7,4.5,8.2,9.2,8.2h25.3c4.7,0,8.5-3.5,9.2-8.2l2.3-22.6c4.7-1.5,7.2-6.8,5.7-11.4C127.9,86,124.4,83.7,120.5,83.5z M115,123.1c-0.2,1.5-1.3,2.7-2.9,2.7H86.9c-1.5,0-2.9-1.2-3.1-2.7l-2.2-21.4h35.8L115,123.1zM120.5,95.7H78.1c-1.7,0-3.1-1.4-3.1-3.2c0-1.7,1.3-3.2,3.1-3.2h42.4c1.7,0,3.2,1.3,3.2,3.2C123.7,94.4,122.2,95.7,120.5,95.7z"/><circle class="before" fill="none" stroke="currentColor" cx="100" cy="100" r="90"/><circle class="after" fill="none" stroke="currentColor" cx="100" cy="100" r="90"/><g class="checkin"><circle fill="#f99f1b" cx="100" cy="100" r="90"/><path fill="#fff" d="M129.2,83.5c-3-3-7.2-3-10.2,0l-24.3,23.8l-8.9-8.5c-3-3-7.2-2.6-10.2,0c-3,3-2.6,7.2,0,10.2l14.1,13.6 c3,2.6,7.2,2.6,10.2,0l29.4-29C132.2,90.8,132.2,86.5,129.2,83.5z"/></g></svg>', e.querySelector(".view-more") && e.querySelector(".view-more").append(t), e.querySelector(".link-load") && e.querySelector(".link-load").append(t), e.querySelector(".order-but") && e.querySelector(".order-but").append(r)
}));
var Tiles = '<div class="tiles"><div class="tiles-line"><div class="tiles-line-img tiles-line-img-large"></div><div class="tiles-line-img"></div><div class="tiles-line-img"></div><div class="tiles-line-img tiles-line-img-large"></div><div class="tiles-line-img"></div><div class="tiles-line-img"></div></div><div class="tiles-line"><div class="tiles-line-img"></div><div class="tiles-line-img"></div><div class="tiles-line-img tiles-line-img-large"></div><div class="tiles-line-img"></div><div class="tiles-line-img"></div><div class="tiles-line-img tiles-line-img-large"></div></div><div class="tiles-line"><div class="tiles-line-img"></div><div class="tiles-line-img tiles-line-img-large"></div><div class="tiles-line-img"></div><div class="tiles-line-img"></div><div class="tiles-line-img tiles-line-img-large"></div><div class="tiles-line-img"></div></div></div>';
if ("promotion-page" == IDPage) {
    var Div;
    (Div = document.createElement("div")).innerHTML = Tiles, Div.className = "wrap-tiles", document.body.appendChild(Div);
    var Wraptile = document.querySelector(".wrap-tiles")
}
if (Array.from(document.querySelectorAll(".item-menu-second"), (function (e) {
    var t = document.createElement("span");
    t.className = "span-circle", t.innerHTML = '<svg viewBox="0 0 200 200"><circle class="before" fill="none" stroke="currentColor" cx="100" cy="100" r="90"/><circle class="center" fill="none" cx="100" cy="100" r="60"/><circle class="after" fill="none" stroke="currentColor" cx="100" cy="100" r="90"/></svg>', e.append(t)
})), Logo) {
    var SVG = '<svg viewBox="0 0 670 400"><path fill="url(#gradient)" d="M621.8,206.4c-16.5,3.7-31.9,11.7-48,17.4a403.44,403.44,0,0,1,31.5-31.2c58.9,14.9,18.5-67.1-.5-1.8-11.9,10.6-23.5,21.7-33.8,34.1a110.84,110.84,0,0,1-20.1,4.6c5.6-7.5,10.9-15.2,15.8-23.1,60-15-20.9-62.7-1.2-1a255.64,255.64,0,0,1-17.2,24.4,189.94,189.94,0,0,1-27.2,0c4.9-4.9,12.1-20.5,7.7-21.6-6.5-1.5-55.6-1.1-55.6-1.1-2.7-1.4,11.6-4.6,3.3-6.4-.7-.1-16.5-1.5-32.9-1.6,8.4-4.3,14.1-11.1,16.6-18.6a93.77,93.77,0,0,0,11.6-8.3c39.6-31.6,2-89.5,16.8-102,26.8-10.9,61.8-12.7,80,12.9-.7-8.2-4.8-12.3-8.6-17.9,8.7,3.6,18.1,32.5,23.8,23.7-1.8-3.4-8.3-5.8-8.2-11,1.5-9.7,6.7,18,31,14.6-.7-.1-.5-.2-.5-.2-4.9-11.3-9.5-30.1-20.7-35.6-28.1,6.3-20.3-8.1,1.5-2.7-25.5-33.7-25.6-7.6-41.9-5.7-4.4-7.8,11.9-12.3,18-13.6-.5-4.8-17.8-14.5-24.4-12.6-5.9,1.7-12.3,10.6-14.7,7.9-4.1-4.8,10.5-9.3,14.6-10.5-13.1-10.2-31.5-3.3-39.7,6.9,17.2,5.5,26.9,9.1,27.1,10.1.2,1.9-46.5-18.9-47.6-1.7,33.4,26.1,8.7,21.3-3.2.1-3.4-4.2-4.6-.2-6,5-7.5,19.3-3.4,26.9,16.7,31.1-12.2,11.5,26.3,67.6-20.1,102.2-1.6,1.2-3,2.3-4.2,3.2a27.07,27.07,0,0,0-.4-10.6l-.8-2.8h0c-.1-.4-.2-.7-.3-1.1l-.2-.8c-6.1-17.4-36.1-18.6-37-30.5,2.2-13.8,17.9-2.9,20.9,5.1,33.4-37.7-38.5-33.9-43.7-7.3V105.3c-6.4,3.1-14.1,5.1-19.9,9.1,15-100.1-114.4-47.6-147.9-2.2-13.6-6.8-31.1-5.4-44,2.6h-.1a49.12,49.12,0,0,0-7.7,5.9c-3.2-18.8-29.9-14.8-38.2.1V105.4c-10.1,4.9-26.5,6.7-26.2,21.4v65.3c-30.6,1-8.5-42.4-23.2-46.1,8.8-2.7,8.8-88.8.8-90.7,9.1-5.7,5.9-17.5,22-17.8,16.9.8,16.9,17.6,17.6,32.3,2,42.6,55.9,31.6,46.6-6.8-5.8-28.5-36.2-43.8-68.9-43.2-11.1.8-26-1.2-30.8,11.1-6-10.2-37.6,8.4-32.1,17.8-15.3-8.4-43.3,54.8-27.8,61.7C.6,120.7,42.6,196.9,60.8,185c-.6,4.5,2.3,8.2,6.6,9.3-39.7,3.2-37.6,8.8-1.3,12.2,5.6.6,1.2,6.4-.7,8.6-1,.8-4.6,3.4-5.7,4.2,0,0-4,2.6-4.2,1.1-.2-3.9-4.3-7.5-11.4-6.6-21,5.2.7,23.9,10.7,10.1.2,0,.4-.1.6-.1-3.5,2.8-3.6,8.9-7.6,10.5-4.5-3.5-14-1.9-15.6,6.3-1.2,11,18.9,8.3,16-4.1a1.91,1.91,0,0,0,.8-.3c-.8,2.4.4,5.2-.3,7.3-12,9,1.9,25.8,12.9,16.1,8.7-6.6-1-18.6-9.2-18.1-6.1-3.2,11.3-31,9.5-14.7-3.2,1.6-4.6,6.2-2.1,10.2,9,10.1,22.3-8.2,5.6-10.8-1.5-1-1.3-4.3-1.9-6.1,3.8-3.9,19.9-10.6,13,.3-.7,5.2,12.6-2.9,15.1-3,5.3,1.4-3.2,4.6-4.6,5.9l.1-.1c-6.1,3.7-11.1,9.6.4,6.3h-.1c10.3-.1,18.6-12.9,27.5-10.8,8.8,9.7-29.5,12.4-32.3,26.7-.4,4.1,5.3.3,7.3-.1.1.1.1,0,.1,0,17.3-2.9,28.5-33.5,30.4-13.1-49.9,31.8-30.8,48.7,0,1.8,1.5-2.1,4.1,1.7,2.9,3.1-40.8,48.3-20.4,76.6-.4,3.2,2.6-3.5,4,3.9,5.2,5.6-1,9.6-16.4,45.1-3.8,48.7,6.1-4.9,5-53.1,9.8-27.8v-.3c.8,7.8,17.2,37.6,19.3,29.4,4.6-13-32.9-55.3-21-52,3.8,5.9,18.9,18.3,23.3,18.7l-.2-.1c23.5,10.5-9.6-21.1-17.5-19l-.1-.1c-3.3-.3-7.3.8-9.8-1.4-1.1-2.4-4.7-7.9.7-6.8.1-.1.1,0,.2-.1,9.5,4.9,22.8,5.4,34.8,4.2,7.4-3.4-27.4-15.5-34.6-5.1-5.3,2.6-6.5-3.8-8.4-7.4-.8-2.1,2.1-2.2,3.5-2.2.1.1.1,0,.1,0a71.86,71.86,0,0,0,9.2,1c.1-.1.1,0,.1,0,3.4,0,28.2-.1,23.5-5.6-9.8-3.8-23.3-.9-32.8,4.1-1.6.1-4.1,1.3-5.2-.1-.1-1.7-4.8-6.3-1.9-7.7,27.7-5.8,67-14,73.3,22.9,2.1,12.5,7.7,10.9,7.9,17.3.2,8.2-8.7,9.5-10.3,16.6-3,14.6-28.8,42.4-58.4,42.7,5.3,2.8,63.4,3.1,59.8-6.2-4.3-1.7-11.1-6.8-9.1-11,5.3-2.5,10.4,11.4,16,12,11.8,2,46.1-15.9,34.8-28.1-7.9,1.4-14,1.7-21.6.5-9.9-2.8,6.6-6.6,11-4.9,11.4,2.3,14.3,1.5,22.1,1.9,18.1,44.7-48.3,81.3-87.4,64.1-7.8,1.3,10.9,10.9,13,12-9.8.8-37.6-26-35.9-12.5,3.9,2,11.3,1.9,13.3,7,2.8,11-13.8-15.7-39.9-.4.8-.2.7,0,.7,0,10.1,8.6,26,28,39.8,26.5,25.5-18.9,25.3-3.1,2.9,3a1.35,1.35,0,0,0-.3,2.5c42.9,21.9,28.8-14.4,44.3-15.4,9.1,8.6-15.3,20.8-11.6,23.4,5.7,3.7,25.1,4.8,30.6,0,5.4-4.6,7.8-16.8,11.7-15.3,5.7,2.6-3.2,11.4-8.1,16a1.39,1.39,0,0,0,.8,2.4c16.7,2,30.8-11.5,35.1-24.6.2-4.4-23.1.8-22.9-.2,14.3-1.9,47.7-8.6,40.3-20.4-46.9-10.8-20.1-17.9,4-1.6,5.8,2.8,5-1.9,4-8-1.5-22.6-9-28.8-30.4-24.6a1.42,1.42,0,0,1-1.6-1.8c2.9-9,2.3-19.6.3-30.6a1.33,1.33,0,0,1,1.4-1.6c22.1.3,43.6-14.9,64.8-24.7a1.4,1.4,0,0,1,1.7,2.1c-10.8,13.1,15.3,14.3,23.7,15.7,9.8,17.8-48.5-29.5-38.8,25.7,5.9,6.3,44.6-9.1,35.3,4.1-10.6,6.7-37.2-11.6-39.1,9.1-.3,11.2,1.5,25.1,9.1,33.6,25.1-24.1,70.6-39.9,10.8-1.8-4.1,2.6-8.1,8.2-6.8,13.4,5.7,22.4,9.5,23,27.6,1.3,11.9-9.3,4.8,3.7-1,7.3-12.4,8.5-3.9,24.8,7.3,31.1,56.4-12.3,14.5-43.7,28.9-51.2,5.8,5.2,4.7,28.8,9.6,29.8,49.8-12.5,11-31.7,6.9-53.1,4.7-9,19.5,28.9,23.2,32.4,31.7-6.9,14.7-49.7-10.3-58.4,2.3-16.3,33.5,27.5,35.6,24.7,12.4-2.2,14.7-46-5.3-57-3.7-4,13.9-6.1,18.7-6.7-1,4.1,4,7.5,7.5,5.2,7.2,10.4,10.8,8.2,8.8,24.8,3,8.7,8.9,16.2,11.8,25,7.6-6.8-3.7-28.4-9.8-37.8.1-6.1,13.8,18.9,27.3,19,16.5.2,21.5-2.2,31.5,1.2,1.1.1,4.8,3.5,4.6,1.1-11.6-9.9-26.2-16.4-41-21.2-13.9-3.4-17.6,4.2-28.6-8.9a.74.74,0,0,1,.8-1.2c15.4,4.4,33.6-1.7,45.1-11.1a.8.8,0,0,0-.7-1.4c-32.3.8-36.4,19.3-48,8.7l-.1.1a4.78,4.78,0,0,0,0-4.9c23.3-1.4,43-10.1,56.1-20.2a63.73,63.73,0,0,1,9.9,6c10,38.3,43.9-15.3,1.2-.5-3.3-1.9-6.9-4-10.5-6,1.7-1.3,3.2-2.7,4.7-4,16.1,1.2,32.3,1.7,47.8-3.2,1.9,9.8,4.7,19.8,7.2,29.6-18.3,33,25,30.3-1.9-12.7,5,4.7,10,9.2,15,13.8,14.7,51.6,41-1.5,2-.4-5.9-5.2-11.4-10.5-17.5-15.3-1.5-4.8-2.3-9.9-3.9-14.5,11.9,7.4,24.2,15.8,36.2,23.3,21.8,59.7,62.5-12.4,1.1-1.8-11.7-7.3-23-14.8-34.7-22.1a214.57,214.57,0,0,1,43.9.5c41.8,52.7,46.9-36.9.1-1.8a193,193,0,0,0-44.3.2c17.6-6.1,34.3-14.9,52.9-18.9C703.9,249.7,664.5,129.3,621.8,206.4ZM73.7,193.8c.1,0,.1-.1.2-.1l.1.1Zm67.9-1.8c.4-2.2,0-46.5.1-48.6l3.7.8c12.2-22.4,10.2-3.2,22.6-5.4a51.32,51.32,0,0,0-2.7,25.5C156.4,171.7,154,191.4,141.6,192Zm25.9.3a67.32,67.32,0,0,0,7.1-5.9,46.18,46.18,0,0,0,6.1,6.4C176.7,192.5,172.3,192.4,167.5,192.3Zm33.7-11.9c-8.6-12.5-11.1-36.8-1.5-50.6v-.1a27.25,27.25,0,0,1,2.3-2.5h0a12.54,12.54,0,0,1,17.1.9C207.7,145,201.7,162.7,201.2,180.4Zm12.1,6.6c.1-15.5,5.3-29.9,13-42.6C228.9,157.8,229.9,184.5,213.3,187Zm18.4,12.4h-1.5c.7-.3,1.4-.7,2.1-1C232.1,198.7,231.9,199.1,231.7,199.4Zm17.4-.3c3.6-4.8,7.6-9.6,11.6-14.4A39.71,39.71,0,0,0,274,197.8C265.4,198.3,257.2,198.8,249.1,199.1Zm72.2-3.8a12.75,12.75,0,0,0-2,.1,59.33,59.33,0,0,0,5.6-4.6Q323.1,192.9,321.3,195.3Zm9-11.9c-6.6-15.1-16.5-2.9-27.5-3.2-10.2.4-21.7-10.7-22.3-22.6,5-8.7,8.3-18,8.7-28.1,17.4-11.3,26.3,20.7,39.6,1,.5,8.9-1.1,44.8,1.6,52.7C330.3,183.2,330.3,183.3,330.3,183.4Zm.3-62.8c-17.3-29.1-68-3.6-74.8,24.1a44.92,44.92,0,0,0-11.7-23.4c43.4-50.1,159-94,111.1,18.6l.4-34.2C348.6,109,334.7,111.1,330.6,120.6Zm42.5,48.3c-4.6,3.1-11.2,7.1-15,9.4a14.39,14.39,0,0,1-2.7-6.8,214.08,214.08,0,0,0,17.7-35.6Zm24.2,28.4a11.72,11.72,0,0,0,1.6-4.1,17.16,17.16,0,0,0,4.4,5.2C401.6,198.1,399.8,197.7,397.3,197.3ZM410,167c-4.3,3.2-6.2,3.1-10.5,9V145.7c3.9,11.2,15.4,16.8,25,21.4C456,183.4,417,199,410,167Z"/></svg>',
        ICON = document.createElement("div");
    ICON.className = "icon-logo", ICON.innerHTML = SVG, Logo.append(ICON)
}
Array.from(document.querySelectorAll(".hover-text"), (function (e) {
    if (e) {
        var t = e.textContent, r = document.createElement("span"), o = document.createElement("span"),
            a = document.createElement("span");
        r.className = "inner", o.className = "normal", a.className = "hover", o.innerHTML = t, a.innerHTML = t, r.append(o), r.append(a), e.innerHTML = "", e.append(r)
    }
})), "register-page" != IDPage && "cart-page" != IDPage && "account-page" != IDPage && "list-order-page" != IDPage || (allStories.classList.replace("all-stories", "all-stories-second"), document.querySelector(".all-stories-second").classList.add("show", "white")), Array.from(Navigation.querySelectorAll(".has-sub"), (function (e) {
    var t = document.createElement("div");
    t.className = "nav-drop", e.querySelector(".nav-item").append(t)
}));
var doWheel = !0, doTouch = !0;

function turnWheelTouch() {
    doWheel = !0, doTouch = !0
}

function ScrollTop(e) {
    gsap.to("html", {
        duration: .6, scrollTop: e, ease: "none"
    })
}

function addMultipleEvents(e, t, r) {
    e.map((function (e) {
        t.addEventListener(e, r, !1)
    }))
}

function ResizeWindows() {
    window.innerHeight, window.innerWidth, window.innerHeight, window.innerWidth;
    var e = window.innerHeight / window.innerWidth;
    if (Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile"), e > .58 && !Mobile.matches ? Body.classList.add("ratio-4-3") : Body.classList.remove("ratio-4-3"), bannerHome || bannerInner) {
        var t = bannerHome ? bannerHome.offsetHeight : bannerInner.offsetHeight;
        titlePage.style.setProperty("--top-height", t + "px"), scrollDown.style.setProperty("--top-height", t + "px"), allStories.style.setProperty("--top-height", t + "px")
    }
    var r = document.querySelectorAll(".load-text iframe");
    if (r.length > 0) {
        var o = document.querySelector(".load-text").clientWidth;
        r.forEach((function (e) {
            e.style.height = .5625 * o + "px"
        }))
    }
    if (document.querySelector(".trends .title-news p") && document.querySelectorAll(".trends .title-news p > span").forEach((function (e) {
        e.removeAttribute("style")
    })), shareBox) if (Mobile.matches) document.querySelector(".detail-link").append(shareBox); else {
        var a = document.querySelector(".product-details[data-intro] .product-title h2");
        document.querySelector(".product-details[data-intro] .product-title").insertBefore(shareBox, a)
    }
    if (document.querySelector(".option-product > div")) {
        var n = document.querySelector(".option-product"), c = document.querySelector(".detail-link"),
            s = document.querySelector(".pro-des");
        document.querySelector(".full-wrap").classList.add("nowrap"), document.querySelector(".product-details[data-intro]").classList.add("visible"), Tablet.matches ? (n.classList.add("wrap-ios"), document.querySelector(".full-wrap").append(n), document.querySelector(".product-info > .detail-link") && document.querySelector(".option-product").append(c)) : (n.classList.remove("wrap-ios"), document.querySelector(".details-info").append(n), document.querySelector(".option-product > .detail-link") && document.querySelector(".product-info").insertBefore(c, s)), document.querySelector(".details-pics").classList.add("wrap-right"), document.querySelector(".details-info").classList.add("wrap-left")
    }
}

if (document.querySelector(".login-click")) {
    var Alls = document.querySelectorAll(".login-click");
    for (i = 0; i < Alls.length; i++) 2 == Alls.length && Alls[1].classList.replace("login-click", "login-click-2")
}
document.querySelectorAll("img").forEach((function (e) {
    var t = new Image;
    if (t.src = e.src, t.onload = function () {
        var t = this.height / this.width;
        e.setAttribute("width", this.width + "px"), e.setAttribute("height", this.height + "px"), t <= 1 && e.parentNode.classList.add("ratio-h")
    }
        , "" == e.getAttribute("alt")) {
        var r = e.src.replace(/^.*[\\\/]/, "");
        e.setAttribute("alt", r)
    }
}));
var Sec = document.querySelectorAll(".sec-02");

function textBreak() {
    var e = document.querySelectorAll(".text-ani-item, .text-break, .text-head");
    if (e) for (var t = 0; t < e.length; t++) {
        var r = document.createElement("div"), o = e[t].innerHTML;
        r.className = "text-inner", r.innerHTML = o, e[t].parentNode.appendChild(r), Splitting({
            target: ".text-inner", by: "chars", key: null
        })
    }
    document.querySelector(".nav-item .normal") && Splitting({
        target: ".nav-item .normal", by: "chars"
    }), document.querySelector(".absolute-inner p") && Splitting({
        target: ".absolute-inner p", by: "words"
    }), document.querySelector(".item-pic > h3") && Splitting({
        target: ".item-pic > h3", by: "chars"
    }), document.querySelector(".text-ani-wrap") && document.querySelectorAll(".text-ani-wrap").forEach((function (e) {
        if (e.querySelector("strong")) {
            var t = document.createElement("h2");
            t.className = "title-h2 color-white-shadow";
            var r = e.querySelector("strong").textContent;
            t.innerHTML = r, e.parentNode.append(t), e.querySelector("strong").remove()
        }
        var o = document.createElement("h3"), a = e.textContent;
        o.className = "title-h3 color-white-shadow", o.innerHTML = a, e.parentNode.append(o), e.remove(), Splitting({
            target: ".title-h2", by: "chars"
        }), Splitting({
            target: ".title-h3", by: "chars"
        })
    }))
}

function aniText(e) {
    Array.from(e, (function (e, t) {
        setTimeout((function () {
            e.classList.add("move")
        }), 50 * (t + 1))
    }))
}

function RemoveClass(e) {
    for (var t = 0; t < e.length; t++) e[t].classList.remove("active"), e[t].classList.remove("current"), e[t].classList.remove("show"), e[t].classList.remove("move"), e[t].classList.remove("selected")
}

Sec && Sec.forEach((function (e) {
    e.classList.add("ani-item")
}));
var LinkPage = function () {
    var e = document.querySelectorAll(".link-blank"),
        t = document.querySelectorAll(".link-load, .link-home, .go-detail, .order, .goback");
    Array.from(t, (function (e) {
        e.addEventListener("click", (function (t) {
            if (t.preventDefault(), e.classList.contains("off-cart")) {
                var r = this.dataset.hash;
                localStorage.setItem("Hash", r)
            }
            var o = this.href || this.dataset.href;
            return Mask.classList.remove("display-none"), gsap.timeline({
                onComplete: function () {
                    window.location = o
                }
            }).to(overlayPath, {
                duration: .3, ease: "power2.in", attr: {
                    d: "M 0 0 V 50 Q 50 100 100 50 V 0 z"
                }
            }).to(overlayPath, {
                duration: .2, ease: "power4", attr: {
                    d: "M 0 0 V 100 Q 50 100 100 100 V 0 z"
                }
            }), !1
        }))
    })), e.forEach((function (e) {
        e.addEventListener("click", (function (e) {
            e.preventDefault();
            var t = this.href;
            return window.open(t, "_blank"), !1
        }))
    }))
};

function onScroll() {
    var e = document.querySelectorAll(".ani-item,.title-main:not(.off-ani) .text-inner,.ani-text,.scroll-text,.item-pic,.content-sticky .off-ani, .absolute-inner"),
        t = new IntersectionObserver((function (e) {
            e.forEach((function (e) {
                if (e.target.classList.contains("scroll-text") && (e.isIntersecting ? e.target.classList.add("fade") : e.target.classList.remove("fade")), e.target.classList.contains("text-inner")) {
                    var t = e.target.querySelectorAll(".char");
                    e.isIntersecting && aniText(t)
                }
                e.target.classList.contains("off-ani") && e.isIntersecting && e.target.classList.add("fade"), e.target.classList.contains("ani-text") && (e.isIntersecting ? e.target.querySelector("h3").classList.add("on-text") : e.target.querySelector("h3").classList.remove("on-text")), e.target.classList.contains("item-pic") && e.intersectionRatio && e.target.classList.add("show"), e.target.classList.contains("ani-item") && e.intersectionRatio && e.target.classList.add("on-show"), e.target.classList.contains("absolute-inner") && e.isIntersecting && e.target.classList.add("show")
            }))
        }), {
            rootMargin: "0px 0px -10% 0px", threshold: .1
        });
    e && e.forEach((function (e) {
        t.observe(e)
    }));
    var r = document.querySelectorAll(".column-rotate, .footer, .wrap-hide, .bg-cover"),
        o = new IntersectionObserver((function (e) {
            e.forEach((function (e) {
                var t;
                e.target.classList.contains("wrap-hide") && ((t = document.querySelector(".all-stories-second")) && (e.intersectionRatio ? t.querySelector(".wrap-all-stories").classList.add("hide") : t.querySelector(".wrap-all-stories").classList.remove("hide")));
                if (e.target.classList.contains("footer")) {
                    var r = document.querySelector(".header .sub-list");
                    r && (e.isIntersecting ? r.classList.add("hide") : r.classList.remove("hide"))
                }
                "register-page" === IDPage && "cart-page" === IDPage && "account-page" === IDPage && "list-order-page" === IDPage || (e.target.classList.contains("column-rotate") || e.target.classList.contains("bg-cover")) && (t = document.querySelector(".all-stories-second")) && e.intersectionRatio && t.classList.add("white")
            }))
        }));
    if (r && r.forEach((function (e) {
        o.observe(e)
    })), document.querySelector(".item-pic > h3")) {
        var a = document.querySelectorAll(".item-pic > h3"), n = new IntersectionObserver((function (e) {
            e.forEach((function (e) {
                e.isIntersecting ? e.target.classList.add("show") : e.target.classList.remove("show")
            }))
        }), {
            rootMargin: "0px 0px -10% -10%", threshold: .5
        });
        a && a.forEach((function (e) {
            n.observe(e)
        }))
    }
}

function viewItems(e) {
    var t = bannerHome ? window.innerHeight : document.querySelector(".sec-01").offsetHeight,
        r = document.querySelectorAll(".slide").length, o = document.querySelector(".bread-second");
    (e > 100 ? (Header.classList.add("hide"), loginBox.classList.add("top-short"), cartContent.classList.add("top-short"), scrollDown.classList.remove("show"), titlePage.classList.remove("show"), slideBanner && allStories.classList.remove("show")) : (Header.classList.remove("hide"), loginBox.classList.remove("top-short"), cartContent.classList.remove("top-short"), scrollDown.classList.add("show"), titlePage.classList.add("show"), slideBanner && allStories.classList.add("show")), "register-page" == IDPage || "cart-page" == IDPage || "account-page" == IDPage || "list-order-page" == IDPage) ? e > 200 ? goTop.classList.add("show") : goTop.classList.remove("show") : e > t / 2 ? (goTop.classList.add("show"), allStories.classList.replace("all-stories", "all-stories-second"), document.querySelector(".all-stories-second").classList.add("show")) : (goTop.classList.remove("show"), allStories.classList.replace("all-stories-second", "all-stories"));
    if (Container.dataset.details && "news-page" == IDPage && (e > t && e + t < document.body.offsetHeight - (window.innerHeight + t) ? document.querySelector(".sub-menu").classList.add("show") : document.querySelector(".sub-menu").classList.remove("show")), bannerHome && bannerHome.classList.contains("show") && r > 1 && (e >= t / 2 - 70 && (stopAutoplay(), startAutoplay(!1)), e <= 10 && startAutoplay(!0)), bannerInner && r > 1 && (e >= t / 2 - 70 && (stopAutoplay(), startAutoplay(!1)), e <= 10 && startAutoplay(!0)), e > t && "product-details-page" != Container.dataset.details ? o && o.classList.add("fixed") : o && o.classList.remove("fixed"), "product-details-page" == Container.dataset.details) {
        var a = .15 * window.innerWidth * .6;
        e > a ? o && o.classList.add("fixed", "short") : o && o.classList.remove("fixed", "short")
    }
    if ("product-page" == IDPage && document.querySelector(".sub-list")) {
        var n = document.querySelectorAll("section[data-name]"), c = document.querySelectorAll(".item-list");
        n.forEach((function (r) {
            var o = r.offsetTop - t, a = r.offsetHeight;
            if (a < window.innerHeight && (a = window.innerHeight), e >= o && e <= o + a) {
                RemoveClass(c);
                var n = r.dataset.name;
                null != document.querySelector(".bread-second") && document.querySelector('.header .sub-list .button[data-target="' + n + '"]').parentNode.classList.add("current")
            }
        }))
    }
    windscroll = e
}

function S_Trigger() {
    if (gsap.registerPlugin(ScrollTrigger), ScrollTrigger.normalizeScroll({
        allowNestedScroll: !0
    }), ScrollTrigger.normalizeScroll(!1), document.querySelector(".wrap-right:not(.slidefullwrap)")) {
        var e = document.querySelector(".wrap-right:not(.slidefullwrap)").offsetHeight;
        ScrollTrigger.matchMedia({
            "(pointer:fine) and (min-width: 1100px)": function () {
                ScrollTrigger.create({
                    id: "trigger",
                    trigger: ".wrap-right:not(.slidefullwrap)",
                    pin: !0,
                    start: "center center",
                    end: function () {
                        return "+=" + e / 1.5
                    },
                    scrub: !0,
                    invalidateOnRefresh: !0
                })
            }
        })
    }
    if (document.querySelector(".sticky-story")) {
        var t = document.querySelector(".pin-wrap"), r = document.querySelector(".sticky-story-pic"),
            o = r.querySelector(".absolute-inner"), a = r.querySelector(".circle-box");
        ScrollTrigger.matchMedia({
            "(pointer:fine) and (min-width:1100px)": function () {
                gsap.to(t, {
                    x: function () {
                        return -(t.scrollWidth - window.innerWidth) + "px"
                    }, ease: "none", scrollTrigger: {
                        trigger: t, start: "left top", end: function () {
                            return "+=" + 1.4 * t.offsetWidth
                        }, pin: !0, pinSpacing: !0, scrub: !0, invalidateOnRefresh: !0
                    }
                });
                var e = gsap.timeline({
                    scrollTrigger: {
                        trigger: r, start: "center center", end: function () {
                            return "+=" + r.scrollHeight / 1.4
                        }, pin: !0, pinSpacing: !1, scrub: !0, invalidateOnRefresh: !0
                    }
                });
                e.to(o, {
                    scale: 1.3, ease: "none"
                }), e.to(a, {
                    startAt: {
                        clipPath: "circle(0% at 50% 50%)", backgroundImage: gsap.getProperty(a, "--color-white")
                    },
                    clipPath: "circle(100% at 50% 50%)",
                    backgroundImage: gsap.getProperty(a, "--color-white-radial"),
                    ease: "none",
                    scrollTrigger: {
                        trigger: a, start: "center center", end: function () {
                            return "+=" + r.scrollHeight / 1.4
                        }, scrub: !0
                    }
                })
            }
        })
    }
    if (document.querySelector(".sticky-item")) {
        var n = document.querySelectorAll(".sticky-item");
        ScrollTrigger.matchMedia({
            "(min-width: 1100px)": function () {
                gsap.utils.toArray(n).forEach((function (e, t) {
                    var r = e.nextElementSibling;
                    ScrollTrigger.create({
                        trigger: e,
                        start: "bottom bottom",
                        pin: !0,
                        pinType: "fixed",
                        pinSpacing: !1,
                        invalidateOnRefresh: !0,
                        scrub: !0,
                        ease: "none"
                    }), gsap.to(e, {
                        opacity: Touch ? 1 : 0, scrollTrigger: {
                            trigger: r, start: "top bottom", end: "top top", scrub: .2, ease: "none"
                        }
                    }), gsap.fromTo(".sticky-item.last-child", {
                        opacity: 1, backgroundColor: gsap.getProperty(".sticky-item.last-child", "--color-bg")
                    }, {
                        backgroundColor: gsap.getProperty(".sticky-item.last-child", "--color-normal"),
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".sticky-item.last-child",
                            start: "top bottom",
                            end: "top top",
                            scrub: .2,
                            ease: "none"
                        }
                    })
                }))
            }
        })
    }
}

var ScrollBody = function () {
    thatScroll = new smoothScrolling({
        wrapper: HTML,
        content: Body,
        main: document.querySelector(".container"),
        objectTrans: "trans",
        scrollClass: "smooth",
        scrollbarClass: "scrollbar-body",
        smoothWheel: !0,
        autoResize: !0
    }), requestAnimationFrame((function e(t) {
        sticky_js && gsap.ticker.lagSmoothing(0), thatScroll.raf(t), requestAnimationFrame(e)
    })), thatScroll.on("scroll", (function (e) {
        viewItems(e.targetScroll)
    }))
}, ScrollInner = function (e) {
    e.scrollTop = 0;
    var t = e.querySelector(".details-center");
    thatInner = new smoothScrolling({
        wrapper: e,
        content: t,
        scrollClass: "smooth-detail",
        scrollbarClass: "scrollbar-inner",
        smoothWheel: !0,
        smoothMouse: !Touch,
        autoResize: !0
    }), requestAnimationFrame((function e(t) {
        thatInner.raf(t), requestAnimationFrame(e)
    })), window.addEventListener("keydown", (function (t) {
        var r = t.keyCode || t.which;
        38 == r && (t.preventDefault(), e.scrollTop -= 50), 40 == r && (t.preventDefault(), e.scrollTop += 50)
    }))
}, WinScroll = {
    start: function () {
        Body.classList.remove("no-scroll"), HTML.classList.remove("no-scroll"), thatScroll.start()
    }, stop: function () {
        Body.classList.add("no-scroll"), HTML.classList.add("no-scroll"), thatScroll.stop()
    }
};

function CustomSelect() {
    for (var e = document.getElementsByClassName("custom-select"), t = 0; t < e.length; t++) if (!e[t].querySelector(".select-all-item")) {
        var r = e[t].getElementsByTagName("select")[0], o = document.createElement("div"),
            a = document.createElement("div"), n = document.createElement("div"), c = document.createElement("div");
        o.className = "select-custom-head", o.innerHTML = r.options[r.selectedIndex].innerHTML, a.className = "select-all-item select-hide", n.className = "wrap-drop-down", c.className = "drop-select", e[t].append(o);
        for (var s = 1; s < r.length; s++) {
            var l = document.createElement("div");
            l.className = "select-item", l.innerHTML = r.options[s].innerHTML;
            var i = r.options[s].getAttribute("value"), d = r.options[s].getAttribute("data-href");
            i && l.setAttribute("data-value", i), d && l.setAttribute("data-href", d), c.append(l), n.append(c), a.append(n), l.addEventListener("click", (function (e) {
                for (var t = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("select")[0], r = this.parentNode.parentNode.parentNode.previousSibling, o = 0; o < t.length; o++) if (t.options[o].innerHTML == this.innerHTML) {
                    t.selectedIndex = o, r.innerHTML = this.innerHTML;
                    for (var a = this.parentNode.parentNode.parentNode.getElementsByClassName("selected"), n = 0; n < a.length; n++) a[n].classList.remove("selected");
                    this.classList.add("selected");
                    break
                }
            }))
        }
        e[t].append(a), o.addEventListener("click", (function (e) {
            if (e.stopPropagation(), this.classList.contains("arrow-active")) {
                this.nextSibling.classList.add("select-hide"), this.classList.remove("arrow-active"), this.parentNode.classList.remove("level-index-in");
                for (var t = document.querySelectorAll(".select-custom-head"), r = 0; r < t.length; r++) t[r].classList.contains("arrow-active") || thatScroll.start()
            } else thatScroll.stop(), this.nextSibling.classList.remove("select-hide"), this.classList.add("arrow-active"), this.parentNode.classList.add("level-index-in")
        })), n.addEventListener("mouseenter", (function () {
            thatScroll.stop()
        })), n.addEventListener("mouseleave", (function () {
            thatScroll.start()
        })), n.addEventListener("touchstart", (function () {
            thatScroll.stop()
        }), {
            passive: !1
        }), n.addEventListener("touchend", (function () {
            thatScroll.start()
        }), {
            passive: !1
        }), Container.addEventListener("click", (function (e) {
            var t = n, r = e.target;
            do {
                if (r == t) return;
                r = r.parentNode
            } while (r);
            u()
        }))
    }

    function u(e) {
        for (var t = [], r = document.getElementsByClassName("select-all-item"), o = document.getElementsByClassName("select-custom-head"), a = 0; a < o.length; a++) e == o[a] ? t.push(a) : (o[a].classList.remove("arrow-active"), o[a].parentNode.classList.remove("level-index-in"));
        for (a = 0; a < r.length; a++) t.indexOf(a) && r[a].classList.add("select-hide");
        thatScroll.start()
    }
}

if (selectList) {
    var Text = document.querySelector(".select-list .hidden").value;

    function resetList() {
        selectHeader.querySelector("h3").innerHTML = Text, selectHeader.classList.remove("onclick"), selectBox.querySelector("li").classList.remove("selected"), selectBox.scrollTop = 0
    }

    selectHeader.querySelector("h3").innerHTML = Text, selectBox.classList.add("hide"), selectHeader.addEventListener("click", (function (e) {
        this.classList.contains("onclick") ? (selectBox.classList.remove("hide"), selectBox.classList.add("show"), gsap.to(selectBox, {
            duration: .3, opacity: 0, ease: "none", onComplete: function () {
                selectHeader.classList.remove("onclick")
            }
        })) : (selectBox.scrollTop = 0, selectBox.classList.remove("hide"), selectBox.classList.add("show"), gsap.to(selectBox, {
            duration: .3, opacity: 1, ease: "none", onComplete: function () {
                selectHeader.classList.add("onclick")
            }
        }), this.closest(".select-list").addEventListener("mouseleave", (function () {
            gsap.to(selectBox, {
                duration: .3, opacity: 0, ease: "none", onComplete: function () {
                    selectHeader.classList.remove("onclick"), selectBox.classList.remove("show"), selectBox.classList.add("hide")
                }
            })
        })), document.addEventListener("click", (function (e) {
            document.querySelector(".advance-box").contains(e.target) || (selectBox.classList.remove("hide"), selectBox.classList.add("show"), gsap.to(selectBox, {
                duration: .3, opacity: 0, ease: "none", onComplete: function () {
                    selectHeader.classList.remove("onclick")
                }
            }))
        })))
    })), selectBox.querySelectorAll("button").forEach((function (e) {
        e.addEventListener("click", (function (t) {
            t.preventDefault(), RemoveClass(selectBox.querySelectorAll("li")), selectHeader.querySelector("h3").innerHTML = e.textContent, e.parentNode.classList.add("selected"), selectBox.classList.remove("show"), selectBox.classList.add("hide"), gsap.to(selectBox, {
                duration: .3, opacity: 0, ease: "none", onComplete: function () {
                    selectHeader.classList.remove("onclick")
                }
            })
        }))
    })), resetList()
}
if (Subscrible) {
    if ("vi" == HTML.lang) var textError = "Email không hợp lệ!"; else textError = "Invalid email!";
    document.getElementById("emailsubscribe").dataset.error = textError
}
if (forgetForm) {
    if ("vi" == HTML.lang) textError = "Email không hợp lệ!"; else textError = "Invalid email!";
    document.getElementById("emailforget").dataset.error = textError
}
if (loginForm) {
    if ("vi" == HTML.lang) var textError_1 = "Nhập tên đăng nhập!",
        textError_2 = "Nhập mật khẩu!"; else textError_1 = "Enter Username!", textError_2 = "Enter Your password!";
    document.getElementById("loginName").dataset.error = textError_1, document.getElementById("loginPass").dataset.error = textError_2
}
if (contactForm) {
    if ("vi" == HTML.lang) {
        textError_1 = "Nhập tên!", textError_2 = "Điện thoại không hợp lệ!";
        var textError_3 = "Email không hợp lệ!"
    } else textError_1 = "Enter a name!", textError_2 = "Invalid phone number!", textError_3 = "Invalid email!";
    document.getElementById("namecontact").dataset.error = textError_1, document.getElementById("phonecontact").dataset.error = textError_2, document.getElementById("emailcontact").dataset.error = textError_3
}
if (commentForm) {
    if ("vi" == HTML.lang) textError_1 = "Nhập tên!", textError_2 = "Email không hợp lệ!"; else textError_1 = "Enter a name!", textError_2 = "Invalid email!";
    document.getElementById("namecomment").dataset.error = textError_1, document.getElementById("emailcomment").dataset.error = textError_2
}
if ("vi" == HTML.lang) var cartMess = '<div class="cart-mess">Chưa có sản phẩm trong giỏ hàng</div>'; else cartMess = '<div class="cart-mess">No products in the cart</div>';
var loginBut = document.querySelector(".login-but"), overlayLogin = document.querySelector(".login-overlay"),
    loginBox = document.querySelector(".login-box"), closeLogin = document.querySelector(".close-login"),
    loginButSupplier = document.querySelector(".login-but-supplier"),
    contentSupplier = document.querySelector(".content-supplier"),
    loginBoxSupplier = document.querySelector(".login-box-supplier"),
    closeLoginSupplier = document.querySelector(".close-login-supplier"),
    forgetText = document.querySelector(".forget-text"), forgetBut = document.querySelector(".but-forget button"),
    backForm = document.querySelector(".back-form"), cartShopping = document.querySelector(".cart-shopping"),
    cartText = document.querySelector(".cart-text"),
    cartContent = document.querySelector(".cart-content:not(.cart-content-order)"),
    cartBox = document.querySelector(".cart-box:not(.cart-box-order)"),
    orderBut = document.querySelectorAll(".order-but"), clearCart = document.querySelector(".clear-cart"),
    closeCart = document.querySelector(".close-cart"), shopCart = document.querySelector(".shop-cart"),
    Total = document.querySelector(".total-price:not(.total-price-order) p"),
    cartBody = document.querySelector(".cart-body:not(.cart-body-order)"),
    cartFooter = document.querySelector(".cart-footer"),
    totalDes = document.querySelector(".total-des:not(.total-des-order)"), Confirm = document.querySelector(".confirm"),
    confirmInfo = document.querySelector(".confirm-info"), wrapButton = document.querySelector(".wrap-button"),
    infoDisplay = document.querySelector(".info-display"),
    svgTrash = '<svg viewBox="0 0 60 60"><path fill="currentColor" d="M52.4,14.7c0-1.7-1.4-3.1-3.1-3.1h-7.7C40.3,8,36.9,5.5,33,5.5h-6.1c-3.9,0-7.3,2.5-8.6,6.1h-7.7c-1.7,0-3.1,1.4-3.1,3.1l0,0c0,1.7,1.4,3.1,3.1,3.1h1v25.4c0,6.2,5,11.2,11.2,11.2H37c6.2,0,11.2-5,11.2-11.2V17.8h1C51,17.8,52.4,16.4,52.4,14.7z M42.2,43.2c0,2.8-2.3,5.1-5.1,5.1H22.9c-2.8,0-5.1-2.3-5.1-5.1V17.8h24.4C42.2,17.8,42.2,43.2,42.2,43.2z M24.9,42.2c1.7,0,3.1-1.4,3.1-3.1V26.9c0-1.7-1.4-3.1-3.1-3.1s-3.1,1.4-3.1,3.1v12.2C21.9,40.8,23.2,42.2,24.9,42.2z M35.1,42.2c1.7,0,3.1-1.4,3.1-3.1V26.9c0-1.7-1.4-3.1-3.1-3.1c-1.7,0-3.1,1.4-3.1,3.1v12.2C32,40.8,33.4,42.2,35.1,42.2z"/></svg>',
    svgPlus = '<svg viewBox="0 0 50 50"><path fill="currentColor" d="M37,23 27,23 27,13 23,13 23,23 13,23 13,27 23,27 23,37 27,37 27,27 37,27z"/></svg>',
    svgMinus = '<svg viewBox="0 0 50 50"><path fill="currentColor" d="M37,23 13,23 13,27 37,27z"/></svg>',
    resetLogin = function () {
        forgetForm && (document.getElementById("formLogin").reset(), backForm.click(), forgetForm.querySelector(".input-text").classList.remove("hide"), forgetForm.querySelector(".but-forget").classList.remove("hide"), forgetForm.querySelector(".forget-intro").classList.remove("hide"), forgetForm.querySelector(".collapse-forget-text").classList.remove("show"), forgetForm.querySelector(".collapse-forget-text").style = "", Array.from(loginForm.querySelectorAll(".holder, .pass-view"), (function (e) {
            e.classList.remove("hide"), e.classList.remove("eye-slash")
        })))
    };
if (!document.querySelector(".append-cart")) {
    var allCartHover = document.querySelector(".cart-content");
    allCartHover.addEventListener("mouseenter", (function (e) {
        return e.stopPropagation(), WinScroll.stop(), !1
    })), allCartHover.addEventListener("mouseleave", (function (e) {
        return e.stopPropagation(), WinScroll.start(), !1
    })), allCartHover.addEventListener("touchstart", (function () {
        return WinScroll.stop(), !1
    }), {
        passive: !1
    }), allCartHover.addEventListener("touchend", (function () {
        return WinScroll.start(), !1
    }), {
        passive: !1
    })
}
addMultipleEvents(["mouseenter", "click"], loginBut, (function (e) {
    e.preventDefault(), e.stopPropagation(), resetLogin(), this.classList.add("active") ? (this.classList.remove("active"), loginBox.classList.remove("active"), loginBox.querySelector(".warning") && loginBox.querySelector(".warning").remove()) : (this.classList.add("active"), loginBox.classList.add("active"), overlayClick.classList.add("active"), cartContent.classList.contains("show") && cartContent.classList.remove("show"), loginBox.querySelector(".warning") && loginBox.querySelector(".warning").remove()), loginBox.classList.contains("active") && Container.addEventListener("click", (function (e) {
        var t = loginBox, r = e.target;
        do {
            if (r == t || r == document.querySelector(".login-click") || r == document.querySelector(".login-click-2")) return;
            r = r.parentNode
        } while (r);
        loginBox.classList.remove("active"), loginBut.classList.remove("active"), loginBox.querySelector(".warning") && loginBox.querySelector(".warning").remove()
    }))
})), document.querySelector(".login-click") && document.querySelectorAll(".login-click, .login-click-2").forEach((function (e) {
    e.addEventListener("click", (function (e) {
        return e.preventDefault(), loginBox.classList.contains("active") || loginBut.click(), !1
    }))
})), closeLogin.addEventListener("click", (function (e) {
    e.preventDefault(), loginBut.classList.remove("active"), loginBox.classList.remove("active"), resetLogin(), overlayClick.classList.remove("active")
})), forgetBut && (forgetText.addEventListener("click", (function (e) {
    e.preventDefault(), loginForm.classList.add("hide"), forgetForm.classList.add("active"), backForm.classList.add("show")
})), backForm.addEventListener("click", (function (e) {
    e.preventDefault(), loginForm.classList.remove("hide"), forgetForm.classList.remove("active"), this.classList.remove("show")
}))), contentSupplier && (addMultipleEvents(["mouseenter", "click"], contentSupplier, (function (e) {
    e.preventDefault(), e.stopPropagation(), resetLogin(), this.classList.add("active") ? (this.classList.remove("active"), loginBoxSupplier.classList.remove("active"), loginBoxSupplier.querySelector(".warning") && loginBoxSupplier.querySelector(".warning").remove()) : (this.classList.add("active"), loginBoxSupplier.classList.add("active"), overlayClick.classList.add("active"), cartContent.classList.contains("show") && cartContent.classList.remove("show"), loginBoxSupplier.querySelector(".warning") && loginBoxSupplier.querySelector(".warning").remove()), loginBoxSupplier.classList.contains("active") && Container.addEventListener("click", (function (e) {
        var t = loginBoxSupplier, r = e.target;
        do {
            if (r == t) return;
            r = r.parentNode
        } while (r);
        loginBoxSupplier.classList.remove("active"), loginBoxSupplier.querySelector(".warning") && loginBoxSupplier.querySelector(".warning").remove()
    }))
})), closeLoginSupplier.addEventListener("click", (function (e) {
    e.preventDefault(), loginButSupplier.classList.remove("active"), loginBoxSupplier.classList.remove("active"), overlayClick.classList.remove("active")
})));
var shoppingCart = function () {
    var e = [];

    function t(e, t, r, o, i, a, n, l, s, c, u, d, p, m, v, g, h, f, y) {
        this.image = e, this.main = t, this.group = r, this.name = o, this.weight = i, this.code = a, this.price = n, this.priceOld = l, this.vat = s, this.url = c, this.urldetail = u, this.count = p, this.smelltitle = m, this.smell = d, this.couponId = v, this.couponPrice = g, this.quantity = h, this.pricelevel = f, this.supplierid = y
    }

    function r() {
        localStorage.setItem("shoppingCart", JSON.stringify(e))
    }

    null != localStorage.getItem("shoppingCart") && (e = JSON.parse(localStorage.getItem("shoppingCart")));
    var o = {};

    function a(e, t) {
        return Number(e) + Number(e) / 100 * Number(t)
    }

    return o.addToCart = function (o, i, a, n, l, s, c, u, d, p, m, v, g, h, f, y, L, C, S) {
        for (var q in e) if ("" === v || void 0 === v) {
            if (e[q].name === n) return e[q].couponPrice == y ? (e[q].count += g, void r()) : (e[q].price = c, e[q].priceOld = u, e[q].couponPrice = y, void r())
        } else if (e[q].name === n && e[q].smell === v) return e[q].couponPrice == y ? (e[q].count += g, void r()) : (e[q].price = c, e[q].priceOld = u, e[q].couponPrice = y, void r());
        q = new t(o, i, a, n, l, s, c, u, d, p, m, v, g, h, f, y, L, C, S);
        e.push(q), r()
    }
        , o.setCountForItem = function (t, o, i) {
        for (var a in e) if ("" === o || void 0 === o) {
            if (e[a].name === t) {
                e[a].count = i, r();
                break
            }
        } else if (e[a].name === t && e[a].smell === o) {
            e[a].count = i, r();
            break
        }
    }
        , o.addItemFromCart = function (t, o) {
        for (var i in e) if ("" === o || void 0 === o) {
            if (e[i].name === t) {
                e[i].count++, r();
                break
            }
        } else if (e[i].name === t && e[i].smell === o) {
            e[i].count++, r();
            break
        }
    }
        , o.removeItemFromCart = function (t, o) {
        for (var i in e) if ("" === o || void 0 === o) {
            if (e[i].name === t) {
                e[i].count--, 0 === e[i].count && e.splice(i, 1), r();
                break
            }
        } else if (e[i].name === t && e[i].smell === o) {
            e[i].count--, 0 === e[i].count && e.splice(i, 1);
            var a = e[i].pricelevel;
            e[i].price * (e[i].count - 1) < a && (e[i].couponPrice = 0), r();
            break
        }
    }
        , o.delItemFromCart = function (t, o) {
        for (var i in e) if ("" === o || void 0 === o) {
            if (e[i].name === t) {
                e.splice(i, 1), r();
                break
            }
        } else if (e[i].name === t && e[i].smell === o) {
            e.splice(i, 1), r();
            break
        }
    }
        , o.clearCart = function () {
        e = [], r()
    }
        , o.totalCount = function () {
        var t = 0;
        for (var r in e) t += parseInt(e[r].count);
        return t
    }
        , o.listCart = function () {
        var t = [];
        for (i in e) {
            item = e[i];
            var r = {};
            for (p in item) r[p] = item[p];
            var o = a(item.price, item.vat), n = item.couponPrice;
            r.total = null == n ? Number(o * item.count).formatMoney(0, ",", ",") : Number(o * item.count - item.couponPrice).formatMoney(0, ",", ","), t.push(r)
        }
        return t
    }
        , o.totalCart = function () {
        var t = 0;
        for (var r in e) {
            var o = a(e[r].price, e[r].vat), i = e[r].couponPrice;
            t += null == i ? o * e[r].count : o * e[r].count - i
        }
        return t = t.formatMoney(0, ",", ",")
    }
        , o
}();

function displayCart() {
    var e = shoppingCart.listCart(), t = "";
    for (var r in e) {
        var o = Number(e[r].price).formatMoney(0, ",", ",");
        if ("" !== e[r].smell || void 0 !== e[r].smell) var i = e[r].smell.replace(/\s+/g, ""), a = convertText(i);
        var n = "";
        "" != e[r].smell && (n = "<p class='cart-smell'><span>" + e[r].smelltitle + "</span>: " + e[r].smell + "</p>"), t += "<ul class='cart-list'><li class='li-first'><div class='cart-img'><a class='link-load off-cart' href='" + e[r].urldetail + "'data-hash='" + a + "'data-href='" + e[r].url + "'data-image='" + e[r].image + "'data-main='" + e[r].main + "'data-group='" + e[r].group + "'data-name='" + e[r].name + "'data-smelltitle='" + e[r].smelltitle + "'data-smell='" + e[r].smell + "'data-weight='" + e[r].weight + "'data-code='" + e[r].code + "'data-price-old='" + e[r].priceOld + "'data-price='" + e[r].price + "'aria-label='Return'><img src='" + e[r].image + "' alt='" + e[r].name + "'></a></div><div class='cart-des'><p class='cart-group'>" + e[r].group + "</p><h3>" + e[r].name + "</h3><div class='weight-code'><p class='cart-weight'>" + e[r].weight + "</p><p class='cart-code'>" + e[r].code + "</p>" + n + "</div></div></li><li class='li-second'><p class='item-price'>" + o + "</p><p class='vat'>" + e[r].vat + "%</p></li><li class='li-third'><div class='cart-count'><button class='minus-item' data-name='" + e[r].name + "' data-smell='" + e[r].smell + "'>" + svgMinus + "</button><input type='text' class='item-count' data-name='" + e[r].name + "' data-smell='" + e[r].smell + "' value='" + e[r].count + "'><button class='plus-item' data-name='" + e[r].name + "' data-smell='" + e[r].smell + "'>" + svgPlus + "</button></div></li><li class='li-four'><p class='price-total'>" + e[r].total + "</p></li><li class='li-five'><div class='cart-delete' data-name='" + e[r].name + "' data-smell='" + e[r].smell + "'>" + svgTrash + "</div></li></ul>"
    }
    if (shopCart.innerHTML = t, cartText.innerHTML = shoppingCart.totalCount(), Total.innerHTML = shoppingCart.totalCart(), 0 === shoppingCart.totalCount()) {
        if (cartFooter.classList.remove("show"), totalDes.classList.remove("show"), "cart-page" != IDPage && cartShopping.classList.remove("active"), !document.querySelector(".cart-empty")) {
            var l = document.createElement("div");
            l.className = "cart-empty", l.innerHTML = cartMess, cartBody.append(l), cartBox.classList.add("empty")
        }
        Confirm && (Confirm.classList.add("display-none"), goBack.classList.add("display-none"), infoDisplay.classList.contains("show") && infoDisplay.classList.remove("show"))
    } else document.querySelector(".cart-empty") && (document.querySelector(".cart-empty").remove(), cartBox.classList.remove("empty")), cartFooter.classList.add("show"), totalDes.classList.add("show"), cartShopping.classList.add("active"), LinkPage();
    Array.from(shopCart.querySelectorAll(".cart-delete"), (function (e) {
        e.addEventListener("click", (function (e) {
            var t = this.dataset.name, r = this.dataset.smell;
            return "" === r || void 0 === r ? shoppingCart.delItemFromCart(t) : shoppingCart.delItemFromCart(t, r), displayCart()
        }))
    })), Array.from(shopCart.querySelectorAll(".minus-item"), (function (e) {
        e.addEventListener("click", (function (e) {
            var t = this.dataset.name, r = this.dataset.smell;
            return "" === r || void 0 === r ? shoppingCart.removeItemFromCart(t) : shoppingCart.removeItemFromCart(t, r), displayCart()
        }))
    })), Array.from(shopCart.querySelectorAll(".plus-item"), (function (e) {
        e.addEventListener("click", (function (e) {
            var t = this.dataset.name, r = this.dataset.smell;
            return "" === r || void 0 === r ? shoppingCart.addItemFromCart(t) : shoppingCart.addItemFromCart(t, r), displayCart()
        }))
    })), Array.from(shopCart.querySelectorAll(".item-count"), (function (e) {
        e.addEventListener("change", (function (e) {
            var t = this.dataset.name, r = this.dataset.smell, o = Number(this.value);
            return 0 == o ? void 0 : (shoppingCart.setCountForItem(t, r, o), displayCart())
        })), e.addEventListener("focusin", (function (e) {
            this.value == this.getAttribute("value") && (this.value = "")
        })), e.addEventListener("focusout", (function (e) {
            this.value = this.getAttribute("value")
        })), e.addEventListener("keyup", (function (e) {
            e.stopPropagation();
            this.value;
            for (var t, r = "0123456789", o = 0; o < this.value.length; o++) {
                t = !1;
                for (var i = 0; i < r.length; i++) this.value.charAt(o) == r.charAt(i) && (t = !0);
                0 == t && (this.value = this.value.replace(this.value.charAt(o), ""), o--)
            }
            return !0
        }))
    })), document.querySelector(".cart-smell") && document.querySelectorAll(".cart-smell").forEach((function (e) {
        var t = e.textContent;
        "" != t && null != t || e.classList.add("display-none")
    }))
}

shopCart && (displayCart(), Array.from(orderBut, (function (e) {
    e.addEventListener("click", (function (t) {
        t.preventDefault(), this.classList.add("checkin"), cartShopping.classList.add("shake"), cartShopping.addEventListener("animationend", (function () {
            cartShopping.classList.remove("shake"), e.classList.remove("checkin")
        }));
        var r = {
            image: this.dataset.image,
            main: this.dataset.main,
            group: this.dataset.group,
            name: this.dataset.name,
            weight: this.dataset.weight,
            code: this.dataset.code,
            price: this.dataset.price,
            priceOld: this.dataset.priceOld,
            vat: this.dataset.vat,
            url: this.dataset.url,
            urldetail: this.dataset.details,
            smell: this.dataset.smell,
            smelltitle: this.dataset.smelltitle,
            couponId: this.dataset.couponId,
            couponPrice: this.dataset.couponPrice,
            quantity: this.dataset.quantity,
            pricelevel: this.dataset.pricelevel,
            supplierid: this.dataset.supplierid
        };
        null == r.quantity ? shoppingCart.addToCart(r.image, r.main, r.group, r.name, r.weight, r.code, r.price, r.priceOld, r.vat, r.url, r.urldetail, r.smell, 1, r.smelltitle, r.couponId, r.couponPrice, parseInt(r.quantity), r.pricelevel, r.supplierid) : shoppingCart.addToCart(r.image, r.main, r.group, r.name, r.weight, r.code, r.price, r.priceOld, r.vat, r.url, r.urldetail, r.smell, parseInt(r.quantity), r.smelltitle, r.couponId, r.couponPrice, parseInt(r.quantity), r.pricelevel, r.supplierid), displayCart()
    }))
})), clearCart.addEventListener("click", (function (e) {
    shoppingCart.clearCart(), displayCart()
})), cartShopping.addEventListener("mouseenter", (function (e) {
    e.preventDefault(), Mobile.matches || (cartContent.classList.add("show"), loginBox.classList.contains("active") && (loginBut.classList.remove("active"), loginBox.classList.remove("active"), resetLogin()), displayCart(), cartContent.classList.contains("show") && Container.addEventListener("click", (function (e) {
        var t = cartContent, r = e.target;
        do {
            if (r == t) return;
            r = r.parentNode
        } while (r);
        cartContent.classList.remove("show"), overlayClick.classList.remove("active")
    })))
}))), closeCart.addEventListener("click", (function (e) {
    e.preventDefault(), cartContent.classList.remove("show"), overlayClick.classList.remove("active")
})), overlayClick.addEventListener("click", (function (e) {
    e.preventDefault(), loginBox.classList.contains("active") && closeLogin.click(), cartContent.classList.contains("show") && closeCart.click()
}));
var hidePop = function () {
    loginBox.classList.contains("active") && closeLogin.click(), cartContent.classList.contains("show") && closeCart.click()
};
Array.from(document.querySelectorAll(".search-but, .language, .nav-click, .logo, .login-but-supplier"), (function (e) {
    addMultipleEvents(["mouseenter", "click"], e, (function (e) {
        hidePop()
    }))
}));
