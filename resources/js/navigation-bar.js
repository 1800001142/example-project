var overlayMenu = document.querySelector(".overlay-menu");
if (overlayMenu) {
    var div = document.createElement("div");
    div.className = "right-bg-menu";
    overlayMenu.appendChild(div);
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
    function u(e, n) {
        return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (n || t).querySelectorAll(e)) : []
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
            }))
        }))
    }
    return m(v), m(b), A
}();


var Navigation = document.querySelector(".navigation"),
    Nav = document.querySelector(".nav"),
    navLi = document.querySelectorAll(".main-menu li"),
    naItems = document.querySelectorAll(".nav-item"),
    navClick = document.querySelector(".nav-click");

Array.from(document.querySelectorAll(".hover-text"), (function (e) {
    if (e) {
        var t = e.textContent, r = document.createElement("span"), o = document.createElement("span"),
            a = document.createElement("span");
        r.className = "inner", o.className = "normal", a.className = "hover", o.innerHTML = t, a.innerHTML = t, r.append(o), r.append(a), e.innerHTML = "", e.append(r)
    }
})) || (document.querySelector(".all-stories-second").classList.add("show", "white")),
    Array.from(Navigation.querySelectorAll(".has-sub"), (function (e) {
        var t = document.createElement("div");
        t.className = "nav-drop", e.querySelector(".nav-item").append(t)
    }));

function textBreak() {
    document.querySelector(".nav-item .normal") && Splitting({
        target: ".nav-item .normal", by: "chars"
    })
}
function NavClick() {
    if (gsap.set(navLi, {
        opacity: 0
    }),
        navClick.addEventListener("click", (function (t) {
            t.preventDefault(),
                navClick.classList.contains("active") ? (Nav.scrollTop = 0,
                    gsap.to(".right-bg-menu", {
                        duration: .5,
                        opacity: 0,
                        ease: "none"
                    }),
                    navClick.classList.remove("active"),
                    gsap.to(".main-menu li", {
                        duration: .5,
                        opacity: 0,
                        ease: "none",
                        onComplete: function () {
                            Array.from(naItems, (function (e) {
                                e.querySelector(".normal").classList.remove("show"),
                                    e.querySelector(".nav-drop") && e.querySelector(".nav-drop").classList.remove("show")
                            }
                            ))
                        }
                    })) : (gsap.set(".nav", {
                            scrollTop: 0 }),
                        Navigation.classList.add("show"),
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
                                    Array.from(naItems, (function (e) {
                                        e.querySelector(".normal").classList.add("show"),
                                            e.querySelector(".nav-drop") && e.querySelector(".nav-drop").classList.add("show")
                                    }
                                    ));
                            }
                        }))
        }
        ))) {
    }
}
textBreak(), NavClick()
var loadDeferredStyles = function () {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.getElementById("render-styles");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement)
    addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = requestAnimationFrame;
if (raf) raf(function () {
    window.setTimeout(loadDeferredStyles, 0);
});
else window.addEventListener('load', loadDeferredStyles);

