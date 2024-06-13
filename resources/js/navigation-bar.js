
var Interval = document.querySelector(".slide-banner").dataset.time
    , handle = null
    , Autoplay = !1
    , goNext = function () {
        document.querySelector(".nav-slideshow .nav-next").click()
    };

function startAutoplay(e) {
    clearTimeout(handle),
        e && (handle = setTimeout(goNext, Interval))
}

function stopAutoplay() {
    Autoplay = !1,
        clearTimeout(handle)
}

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




var
    Container = document.querySelector(".container"),
    IDPage = Container.getAttribute("id"), Mask = document.querySelector(".mask"),
    overlayPath = document.querySelector(".overlay-path"), rightHeader = document.querySelector(".right-header"),
    Navigation = document.querySelector(".navigation"),
    Nav = document.querySelector(".nav"), mainMenu = document.querySelector(".main-menu"),
    navLi = document.querySelectorAll(".main-menu li"), hasSub = document.querySelectorAll(".has-sub"),
    naItems = document.querySelectorAll(".nav-item"), subItems = document.querySelectorAll(".sub-menu-drop"),
    logoMenu = document.querySelector(".logo-menu"),
    navClick = document.querySelector(".nav-click"),
    clickHead = document.querySelectorAll(".sub-level"),
    bannerHome = document.querySelector(".banner-home");



Array.from(document.querySelectorAll(".hover-text"), (function (e) {
    if (e) {
        var t = e.textContent, r = document.createElement("span"), o = document.createElement("span"),
            a = document.createElement("span");
        r.className = "inner", o.className = "normal", a.className = "hover", o.innerHTML = t, a.innerHTML = t, r.append(o), r.append(a), e.innerHTML = "", e.append(r)
    }
})), "register-page" != IDPage && "cart-page" != IDPage && "account-page" != IDPage && "list-order-page" != IDPage ||
    (allStories.classList.replace("all-stories", "all-stories-second"),
        document.querySelector(".all-stories-second").classList.add("show", "white")),
    Array.from(Navigation.querySelectorAll(".has-sub"), (function (e) {
        var t = document.createElement("div");
        t.className = "nav-drop", e.querySelector(".nav-item").append(t)
    }));

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

function RemoveClass(e) {
    for (var t = 0; t < e.length; t++) e[t].classList.remove("active"), e[t].classList.remove("current"), e[t].classList.remove("show"), e[t].classList.remove("move"), e[t].classList.remove("selected")
}


function NavClick() {
    var e;
    if (gsap.set(navLi, {
        opacity: 0
    }),
        navClick.addEventListener("click", (function (t) {
            t.preventDefault(),
                navClick.classList.contains("active") ? (Nav.scrollTop = 0,
                    overlayMenu.querySelector(".right-bg-menu").classList.remove("show"),
                    gsap.to(".right-bg-menu", {
                        duration: .5,
                        opacity: 0,
                        ease: "none"
                    }),
                    rightHeader.classList.remove("change"),
                    navClick.classList.remove("active"),
                    logoMenu.classList.remove("show"),
                    gsap.to(".main-menu li", {
                        duration: .5,
                        opacity: 0,
                        ease: "none",
                        onComplete: function () {
                            overlayMenu.classList.remove("show"),
                                RemoveClass(naItems),
                                RemoveClass(subItems),
                                Array.from(subItems, (function (e) {
                                    e.removeAttribute("style")
                                }
                                )),
                                Array.from(naItems, (function (e) {
                                    e.querySelector(".normal").classList.remove("show"),
                                        e.querySelector(".nav-drop") && e.querySelector(".nav-drop").classList.remove("show")
                                }
                                )),
                                gsap.set(".nav", {
                                    scrollTop: 0
                                }),
                                clearTimeout(e),
                                e = setTimeout((function () {
                                    Navigation.classList.remove("show"),
                                        makeGoto(),
                                        bannerHome && bannerHome.classList.contains("is-show") && startAutoplay(!0)
                                }
                                ), 600)
                        }
                    }),
                    WinScroll.start()) : (Nav.scrollTop = 0,
                        bannerHome && (stopAutoplay(),
                            startAutoplay(!1)),
                        makeGoto(),
                        gsap.set(".nav", {
                            scrollTop: 0
                        }),
                        Navigation.classList.add("show"),
                        overlayMenu.classList.add("show"),
                        rightHeader.classList.add("change"),
                        navClick.classList.add("active"),
                        gsap.to(".main-menu li", {
                            duration: .6,
                            opacity: 1,
                            ease: "none",
                            onComplete: function () {
                                gsap.to(".right-bg-menu", {
                                    duration: 1,
                                    opacity: 1,
                                    ease: "none",
                                    onComplete: function () {
                                        overlayMenu.querySelector(".right-bg-menu").classList.add("show")
                                    }
                                }),
                                    logoMenu.classList.add("show"),
                                    Array.from(naItems, (function (e) {
                                        e.querySelector(".normal").classList.add("show"),
                                            e.querySelector(".nav-drop") && e.querySelector(".nav-drop").classList.add("show")
                                    }
                                    ));
                                for (var e = 0; e < hasSub.length; e++)
                                    if (hasSub[e].classList.contains("current")) {
                                        var t = hasSub[e].querySelector(".nav-item").getAttribute("data-show");
                                        Navigation.querySelector('.sub-menu-drop[data-show="' + t + '"]').classList.add("active"),
                                            Mobile.matches && document.querySelector(".has-sub.current .nav-item").click()
                                    }
                            }
                        }),
                        WinScroll.stop())
        }
        )),
        naItems) {

    }

}

textBreak(),
NavClick()
