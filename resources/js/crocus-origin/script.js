var div_Nav = '<div class="click-nav nav-prev"><button class="nav-svg" aria-label="prev"><svg viewBox="0 0 100 100"><circle class="c-rotate" cx="50" cy="50" r="48.5"></circle><path fill="currentColor" d="M60,68.8 43,48.7 60,28.5 53.5,26.7 34.9,48.7 53.5,70.7z"></path></svg></button></div><div class="click-nav nav-next"><button class="nav-svg" aria-label="next"><svg viewBox="0 0 100 100"><circle class="c-rotate" cx="50" cy="50" r="48.5"></circle><path fill="currentColor" d="M38.9,68.8l17-20.1l-17-20.2l6.5-1.8l18.6,22l-18.6,22L38.9,68.8z"></path></svg></button></div>'
    ,
    div_Pagi = '<div class="pagination"><span class="pagi pagi-current"></span><small>/</small><span class="pagi pagi-total"></span></div>'
    , div_n = document.createElement("div");
div_n.className = "nav-slideshow",
    div_n.innerHTML = div_Nav,
    bannerHome ? bannerHome.append(div_n) : bannerInner.append(div_n);
var div_p = document.createElement("div");
div_p.className = "nav-pagination",
    div_p.innerHTML = div_Pagi,
    bannerHome ? bannerHome.append(div_p) : bannerInner.append(div_p);
var firstItem = document.querySelector(".slide:nth-child(1)");
firstItem.classList.add("first-slide");

function bannerTrans() {
    var e = function (e) {
        this.DOM = {
            el: e
        },
            this.DOM.imgWrap = this.DOM.el.querySelector(".slide-img-wrap"),
            this.DOM.img = this.DOM.imgWrap.querySelector(".slide-img"),
            this.DOM.headline = this.DOM.el.querySelector(".slide-caption .head-line"),
        this.DOM.el.querySelector(".slide .wrap-view-more") && (this.DOM.Link = this.DOM.el.querySelector(".slide .wrap-view-more"),
            this.DOM.text = this.DOM.el.querySelectorAll(".box-text .inner-box")),
        this.DOM.el.querySelector(".box-text .inner-box") && (this.DOM.text = this.DOM.el.querySelectorAll(".box-text .inner-box"))
    }
        , t = function () {
        function e(e) {
            this.DOM = {
                el: e
            },
                this.DOM.ctrls = {
                    next: this.DOM.el.querySelector(".nav-next"),
                    prev: this.DOM.el.querySelector(".nav-prev")
                },
                this.DOM.pagicurrent = this.DOM.el.parentNode.querySelector(".pagi-current"),
                this.DOM.space = this.DOM.el.parentNode.querySelector("small"),
                this.DOM.total = this.DOM.el.parentNode.querySelector(".pagi-total")
        }

        return e.prototype.updateCurrent = function (e) {
            this.DOM.pagicurrent.innerHTML = e < 10 ? "0".concat(e + 1) : e
        }
            ,
            e
    }()
        , i = new (function () {
        function t(t) {
            var i = this;
            this.DOM = {
                el: t
            },
                this.DOM.slides = Array.from(this.DOM.el.querySelectorAll(".slide")),
                this.slides = [],
                this.DOM.slides.forEach((function (t) {
                        return i.slides.push(new e(t))
                    }
                )),
                this.slidesTotal = this.slides.length,
                this.current = 0,
            // 1 == this.slidesTotal &&
            // this.DOM.el.parentNode.querySelector(".slide-caption").classList.add("of-page"),
            // this.slidesTotal > 1 &&
            // bannerInner &&
            // (
            //     Body.classList.add("sx"),
            //         bannerInner.classList.add("sx")
            // ),
                bannerHome ? this.config = {
                    clipPath: {
                        initial: "circle(58% at 70% 50%)",
                        final: "circle(15% at 70% 50%)",
                        hover: "circle(20% at 80% 50%)"
                    }
                } : this.config = {
                    clipPath: {
                        initial: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%)",
                        final: "polygon(95% 10%, 95% 50%, 95% 85%, 5% 85%, 5% 50%, 5% 10%)",
                        hover: "polygon(95% 10%, 95% 50%, 95% 85%, 5% 85%, 5% 50%, 5% 10%)"
                    }
                },
                this.init()
            // this.hover()
        }

        var a = t.prototype;
        return a.init = function () {
            var e = this;
            this.DOM.slides[this.current].classList.add("slide-current"),
                gsap.set(this.slides[this.current].DOM.imgWrap, {
                    clipPath: this.config.clipPath.initial
                }),
                firstItem.querySelector(".slide-img").classList.add("show"),
                setTimeout((function () {
                        firstItem.querySelector(".slide-caption").classList.add("show")
                        firstItem.querySelector(".wrap-view-more") && firstItem.querySelector(".wrap-view-more").classList.add("current"),
                        e.slidesTotal > 1 && (startAutoplay(!0),
                            e.DOM.el.parentNode.querySelector(".nav-slideshow").classList.add("show"),
                            e.DOM.el.parentNode.querySelector(".nav-pagination").classList.add("show"))
                    }
                ), 1e3)
        }
            ,
            a.hover = function () {
                var e = this
                    , t = this.slides[this.current];
                if (t.DOM.Link)
                    var i = t.DOM.Link.querySelector(".icon-svg");
                i &&
                (
                    i.addEventListener("mouseenter", (function () {
                            stopAutoplay(),
                                gsap.killTweensOf(t.DOM.imgWrap),
                                gsap.killTweensOf(t.DOM.img),
                                gsap.timeline().to(t.DOM.imgWrap, {
                                    duration: 1,
                                    clipPath: e.config.clipPath.hover,
                                    ease: "expo"
                                }).to(t.DOM.img, {
                                    duration: .5,
                                    xPercent: 15,
                                    scale: .65,
                                    ease: "power2"
                                })
                        }
                    )), i.addEventListener("mouseleave", (function () {
                            gsap.killTweensOf(t.DOM.imgWrap),
                                gsap.killTweensOf(t.DOM.img),
                                gsap.timeline().to(t.DOM.img, {
                                    duration: .5,
                                    xPercent: 0,
                                    scale: 1,
                                    ease: "back"
                                }).to(t.DOM.imgWrap, {
                                    duration: 1,
                                    clipPath: e.config.clipPath.initial,
                                    ease: "expo"
                                }),
                            e.slidesTotal > 1 && startAutoplay(!0)
                        }
                    ))
                )
            }
            ,
            a.next = function () {
                this.navigate("next")
            }
            ,
            a.prev = function () {
                this.navigate("prev")
            }
            ,
            a.navigate = function (e) {
                var t = this;
                if (this.isAnimating)
                    return !1;
                this.isAnimating = !0;
                var a = this.slides[this.current];
                this.current = "next" === e ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : this.current > 0 ? this.current - 1 : this.slidesTotal - 1;
                var r = this.slides[this.current]
                    , s = Math.floor(115 * Math.random() - 99);
                gsap.to(".leaf", {
                    duration: 1,
                    rotation: s,
                    ease: "none",
                    stagger: .2
                });
                // var o = gsap.timeline({
                //     onStart: function () {
                //         return firstItem.classList.contains("first-slide") && (firstItem.classList.remove("first-slide"),
                //             firstItem.querySelector(".slide-caption").classList.remove("show")),
                //         a.DOM.Link && a.DOM.Link.classList.remove("current"),
                //             r.DOM.headline.parentNode.classList.add("text-current"),
                //             r.DOM.el.classList.add("slide-current")
                //     },
                //     onComplete: function () {
                //         if (t.isAnimating = !1,
                //             a.DOM.el.classList.remove("slide-current"),
                //             a.DOM.headline.parentNode.classList.remove("text-current"),
                //         r.DOM.Link && r.DOM.Link.classList.add("current"),
                //             n.updateCurrent(i.current),
                //             gsap.to(n.DOM.pagicurrent, {
                //                 duration: .5,
                //                 opacity: 1,
                //                 yPercent: 0,
                //                 ease: "none"
                //             }),
                //             gsap.to(n.DOM.total, {
                //                 duration: .5,
                //                 opacity: 1,
                //                 yPercent: 0,
                //                 ease: "none"
                //             }),
                //             gsap.to(n.DOM.space, {
                //                 duration: .5,
                //                 opacity: 1,
                //                 ease: "none"
                //             }),
                //         t.slidesTotal > 1 && startAutoplay(!0),
                //             r.DOM.Link)
                //             return t.hover()
                //     }
                // });
                o.addLabel("start", 0),
                    o.set(r.DOM.imgWrap, {
                        yPercent: "next" === e ? 100 : -100,
                        clipPath: this.config.clipPath.final
                    }, "start"),
                    o.set(r.DOM.img, {
                        yPercent: "next" === e ? -50 : 50
                    }, "start"),
                    o.set(r.DOM.headline, {
                        yPercent: "next" === e ? 450 : -450
                    }, "start"),
                r.DOM.Link && (o.set(r.DOM.text, {
                    yPercent: 200
                }, "start"),
                    o.set(r.DOM.Link, {
                        opacity: 0,
                        yPercent: 150
                    }, "start")),
                r.DOM.text && o.set(r.DOM.text, {
                    yPercent: 200
                }, "start"),
                    o.to(n.DOM.pagicurrent, {
                        duration: .5,
                        opacity: 0,
                        yPercent: 100,
                        ease: "none"
                    }, "start"),
                    o.to(n.DOM.total, {
                        duration: .5,
                        opacity: 0,
                        yPercent: -100,
                        ease: "none"
                    }, "start"),
                    o.to(n.DOM.space, {
                        duration: .5,
                        opacity: 0,
                        ease: "none"
                    }, "start"),
                    o.to(a.DOM.imgWrap, {
                        duration: 1,
                        clipPath: this.config.clipPath.final,
                        ease: "power3"
                    }, "start"),
                    o.to(a.DOM.img, {
                        duration: 1,
                        yPercent: "next" === e ? 50 : -50,
                        ease: "power2.inOut"
                    }, "start+=0.6"),
                    o.to(a.DOM.imgWrap, {
                        duration: 1,
                        yPercent: "next" === e ? -100 : 100,
                        ease: "power2.inOut"
                    }, "start+=0.6"),
                    o.to(a.DOM.headline, {
                        duration: 1.2,
                        yPercent: "next" === e ? -450 : 450,
                        ease: "power3"
                    }, "start"),
                a.DOM.Link && (o.to(a.DOM.text, {
                    duration: .5,
                    opacity: 0,
                    yPercent: "next" === e ? -200 : 200,
                    ease: "power3"
                }, "start"),
                    o.to(a.DOM.Link, {
                        duration: .5,
                        opacity: 0,
                        yPercent: "next" === e ? -150 : 150,
                        ease: "power3"
                    }, "start")),
                a.DOM.text && o.to(a.DOM.text, {
                    duration: .5,
                    opacity: 0,
                    yPercent: "next" === e ? -200 : 200,
                    ease: "power3"
                }, "start"),
                    o.to(r.DOM.imgWrap, {
                        duration: 1,
                        yPercent: 0,
                        ease: "power2.inOut"
                    }, "start+=0.6"),
                    o.to(r.DOM.img, {
                        duration: 1,
                        yPercent: 0,
                        ease: "power2.inOut"
                    }, "start+=0.6"),
                    o.to(r.DOM.imgWrap, {
                        duration: 1.5,
                        clipPath: this.config.clipPath.initial,
                        ease: "expo.inOut"
                    }, "start+=1.2"),
                    o.to(r.DOM.headline, {
                        duration: 1.2,
                        yPercent: 0,
                        ease: "power3"
                    }, "start"),
                r.DOM.Link && (o.to(r.DOM.text, {
                    duration: 1,
                    opacity: 1,
                    yPercent: 0,
                    ease: "power3"
                }, "start+=2.4"),
                    o.to(r.DOM.Link, {
                        duration: 1,
                        opacity: 1,
                        yPercent: 0,
                        ease: "power3"
                    }, "start+=2.6")),
                r.DOM.text && o.to(r.DOM.text, {
                    duration: 1,
                    opacity: 1,
                    yPercent: 0,
                    ease: "power3"
                }, "start+=2.4")
            }
            ,
            t
    }())(document.querySelector(".slide-banner"))
        , n = new t(document.querySelector(".nav-slideshow"));
    i.slidesTotal > 1 && (n.DOM.ctrls.next.addEventListener("click", (function (e) {
            return e.preventDefault(),
                e.stopPropagation(),
                i.next()
        }
    )),
        n.DOM.ctrls.prev.addEventListener("click", (function (e) {
                return e.preventDefault(),
                    e.stopPropagation(),
                    i.prev()
            }
        )),
        n.updateCurrent(i.current),
        n.DOM.total.innerHTML = i.current < 10 ? "0".concat(i.slidesTotal) : i.slidesTotal,
        slideBanner.addEventListener("swiperight", (function (e) {
                return e.preventDefault(),
                    e.stopPropagation(),
                    n.DOM.ctrls.next.click()
            }
        ), {
            passive: !1
        }),
        slideBanner.addEventListener("swipeleft", (function (e) {
                return e.preventDefault(),
                    e.stopPropagation(),
                    n.DOM.ctrls.prev.click()
            }
        ), {
            passive: !1
        }))
}

import {FocusText, Reset, colEffect, hoverItem, ZoomPic, ThumbZoom, Cursor, itemZoom} from "./option.js";
import {hidemsg, hideerror, checkNull, checkUserName, checkMail, checkPhone, checkPass} from "./validate.js";

function changeUrl(e, t, r, o, a, n, c) {
    void 0 !== window.history.pushState && (document.URL != e && "" != e && window.history.pushState({
        path: e,
        dataName: a,
        title: t,
        keyword: o,
        description: r,
        titleog: n,
        descriptionog: c
    }, "", e));
    "" != t && (document.title = t,
        document.querySelector('meta[name="description"]').setAttribute("content", r),
        document.querySelector('meta[name="keywords"]').setAttribute("content", o),
        document.querySelector('meta[property="og:title"]').setAttribute("content", n),
        document.querySelector('meta[property="og:description"]').setAttribute("content", c),
        document.querySelector('meta[property="og:url"]').setAttribute("content", e),
        document.querySelector('link[rel="canonical"]').setAttribute("href", e)),
    document.getElementById("changlanguage_redirect") && (document.getElementById("changlanguage_redirect").value = e)
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
        function t(e) {
            for (var t = 0; t < e.length; t++)
                e[t].classList.remove("active")
        }

        for (var r = 0; r < naItems.length; r++)
            Touch || Mobile.matches ? naItems[r].dataset.show && naItems[r].addEventListener("click", o) : naItems[r].dataset.show && naItems[r].addEventListener("mouseenter", a);

        function o(e) {
            var r = this.getAttribute("data-show")
                , o = Navigation.querySelector('.sub-menu-drop[data-show="' + r + '"]');
            if (Mobile.matches)
                this.classList.contains("active") ? (this.classList.remove("active"),
                    o.style.height = "0px",
                    o.classList.remove("active")) : (this.classList.add("active"),
                    o.style.height = o.scrollHeight + 5 + "px",
                    o.classList.add("active"));
            else {
                t(naItems),
                    t(subItems),
                    t(hasSub),
                    this.parentNode.classList.add("active"),
                    this.classList.add("active"),
                    o.classList.add("active"),
                    o.removeAttribute("style");
                var a = Math.floor(115 * Math.random() - 99);
                gsap.to(".circle-text", {
                    duration: 1,
                    rotation: a,
                    ease: "none"
                })
            }
        }

        function a(e) {
            hidePop(),
                Array.from(document.querySelectorAll(".item-menu-second"), (function (e) {
                        e.addEventListener("mouseenter", hidePop)
                    }
                ));
            var r = this.getAttribute("data-show")
                , o = Navigation.querySelector('.sub-menu-drop[data-show="' + r + '"]');
            t(naItems),
                t(subItems),
                t(navLi),
                this.parentNode.classList.add("active"),
                this.classList.add("active"),
            o && o.classList.add("active");
            var a = Math.floor(115 * Math.random() - 99);
            gsap.to(".circle-text", {
                duration: 1,
                rotation: a,
                ease: "none"
            })
        }

        Array.from(hasSub, (function (e) {
                window.addEventListener("resize", (function () {
                        e.querySelector(".sub-menu-drop").classList.contains("active") && (Mobile.matches ? e.querySelector(".sub-menu-drop").style.height = "auto" : (e.querySelector(".sub-menu-drop").removeAttribute("style"),
                            t(naItems),
                            t(subItems),
                            t(hasSub),
                        e.classList.contains("current") && document.querySelector(".has-sub.current .nav-item").click()))
                    }
                ))
            }
        ))
    }
    if (Array.from(subItems, (function (e) {
            e.addEventListener("mouseenter", (function (e) {
                    logoMenu.classList.add("mix")
                }
            )),
                e.addEventListener("mouseleave", (function (e) {
                        logoMenu.classList.remove("mix")
                    }
                ))
        }
    )),
        clickHead) {
        for (r = 0; r < clickHead.length; r++)
            clickHead[r].querySelector(".sub-name").addEventListener("click", n);

        function n(e) {
            var t = this
                , r = this.parentNode.querySelector(".sub-level-second");
            Mobile.matches && (t.classList.contains("selected") ? (t.classList.remove("selected"),
                r.style.height = "0px",
                r.classList.remove("list-over")) : (t.classList.add("selected"),
                r.style.height = r.scrollHeight + "px",
                r.classList.add("list-over"))),
                window.addEventListener("resize", debounce((function () {
                        Mobile.matches ? Footer.querySelector(".selected") && Footer.querySelectorAll(".selected").forEach((function (e) {
                                var t = e.parentNode.querySelector(".sub-level-second").scrollHeight + "px";
                                e.parentNode.querySelector(".list-over").style.height = t
                            }
                        )) : r.removeAttribute("style")
                    }
                ), 300))
        }
    }
}

function Search() {
    var e = document.querySelector(".seach-top")
        , t = document.querySelector(".seach-top .search-but")
        , r = document.querySelector(".seach-top .search-form")
        , o = document.querySelector(".seach-top .search-error");
    if ("vi" == HTML.lang)
        var a = "Không được ít hơn 3 ký tự"
            , n = "Chưa nhập từ khóa"
            , c = "Chưa chọn danh mục";
    else
        a = "Should not be less than 3 characters",
            n = "No keywords entered",
            c = "No category selected";

    function s() {
        var e = document.getElementById("quick_search").value
            , t = document.getElementById("href_search").value;
        if (e != document.getElementById("default_value").value && "" != e)
            if (e.length <= 2) {
                o.querySelector(".search-error-content").innerHTML = a,
                    o.classList.add("show");
                var r = setTimeout(hidemsg, 3e3);
                o.addEventListener("click", (function (e) {
                        hidemsg(),
                            clearTimeout(r)
                    }
                ))
            } else if ("" != e) {
                var n = t + "?quicksearch=" + encodeURIComponent(e);
                window.location = n
            }
    }

    t.addEventListener("click", (function (a) {
            a.preventDefault(),
                s(),
                t.classList.contains("active") && !o.classList.contains("show") ? (t.classList.remove("active"),
                    r.classList.remove("active"),
                    overlayClick.classList.remove("active"),
                    WinScroll.start()) : (t.classList.add("active"),
                    r.classList.add("active"),
                    overlayClick.classList.add("active"),
                    WinScroll.stop()),
            t.classList.contains("active") && document.addEventListener("click", (function (o) {
                    var a = document.querySelector(".header")
                        , n = o.target;
                    do {
                        if (n == a)
                            return;
                        n = n.parentNode
                    } while (n);
                    t.classList.remove("active"),
                        r.classList.remove("active"),
                        e.querySelector(".holder").classList.remove("hide"),
                        WinScroll.start()
                }
            ))
        }
    )),
        document.getElementById("Search").addEventListener("keydown", (function (e) {
                13 === e.keyCode && s()
            }
        ));
    var i = document.querySelector(".advance-box")
        , l = document.querySelector(".advance-box .button")
        , d = document.querySelector(".advance-box .advance-error")
        , u = document.querySelector(".advance-box .advance-error-category");
    if (i) {
        function m() {
            var e = document.getElementById("advance_search").value
                , t = document.querySelector("#lstTerm li.selected > button");
            if (null === t) {
                u.querySelector(".search-error-content-category").innerHTML = c,
                    u.classList.add("show");
                var r = setTimeout(hidemsg, 3e3);
                return !1
            }
            var o = t.dataset.name
                , s = document.getElementById("href_advance").value;
            if (e == document.getElementById("default_advance").value || "" == e)
                d.querySelector(".search-error-content").innerHTML = n,
                    d.classList.add("show");
            else if (e.length <= 2)
                d.querySelector(".search-error-content").innerHTML = a,
                    d.classList.add("show");
            else if ("" != e) {
                if (void 0 !== o)
                    var i = s + "?advancesearch=" + encodeURIComponent(e) + "&TermId=" + o;
                else
                    i = s + "?advancesearch=" + encodeURIComponent(e);
                window.location = i
            }
            if (d.classList.contains("show")) {
                r = setTimeout(hidemsg, 3e3);
                d.addEventListener("click", (function (e) {
                        hidemsg(),
                            clearTimeout(r)
                    }
                ))
            }
        }

        document.getElementById("Advance").reset(),
            l.addEventListener("click", (function (o) {
                    o.preventDefault(),
                    t.classList.contains("active") && (document.getElementById("Advance").reset(),
                        t.classList.remove("active"),
                        r.classList.remove("active"),
                        e.querySelector(".search-form .holder").classList.remove("hide")),
                        m()
                }
            )),
            document.getElementById("Advance").addEventListener("keydown", (function (e) {
                    13 === e.keyCode && m()
                }
            ))
    }
    var p = document.querySelector(".search-view-more");
    if (p) {
        var y = 10
            , v = document.querySelectorAll(".item-search");
        v.length > y && (v.forEach((function (e, t) {
                e.classList.toggle("hide", t >= 10)
            }
        )),
            p.classList.add("show")),
            p.querySelector(".view-more").addEventListener("click", (function (e) {
                    for (var t = y; t < y + 6; t++)
                        v[t] && v[t].classList.remove("hide");
                    (y += 6) >= v.length && (event.target.style.display = "none",
                        p.remove())
                }
            ))
    }
}

var likeBut = document.querySelectorAll(".like-but");
likeBut && Array.from(likeBut, (function (e) {
        e.addEventListener("click", (function (t) {
                t.preventDefault();
                var r = this
                    , o = getDirect
                    , a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    ,
                    n = "dataMethod=" + e.querySelector(".like-circle").getAttribute("data-method") + "&ProductId=" + e.querySelector(".like-circle").getAttribute("data-id");
                a.open("POST", o + "/Product/LikeOrUnlikeProduct", !0),
                    a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    a.onreadystatechange = function () {
                        if (200 == a.status && 4 == a.readyState && "" != a.responseText) {
                            r.classList.add("likeit"),
                                document.querySelector(".like-it").addEventListener("transitionend", (function () {
                                        e.classList.remove("likeit")
                                    }
                                ));
                            var t = Number(e.querySelector(".like-circle").getAttribute("data-like")) + ("like" == e.querySelector(".like-circle").getAttribute("data-method") ? 1 : -1)
                                , o = t.formatMoney(0, ",", ",");
                            e.querySelector(".like-circle").setAttribute("data-like", t);
                            var n = o.split(",").length
                                , c = ""
                                , s = o.split(",")[0];
                            2 == n ? (c = "K",
                                s = t / 1e3) : 3 == n ? (c = "M",
                                s = t / 1e6) : 4 == n && (c = "B",
                                s = t / 1e9);
                            var i = (s = s.toString().split("."))[0];
                            if (s.length > 1) {
                                var l = s[1][0];
                                "0" != l && (i = i + "," + l)
                            }
                            i += c,
                                e.querySelector(".like-circle").innerHTML = i,
                                "like" == e.querySelector(".like-circle").getAttribute("data-method") ? (e.querySelector("#spanLikeIcon").setAttribute("class", "like-icon"),
                                    e.querySelector(".like-circle").setAttribute("data-method", "unlike")) : (e.querySelector("#spanLikeIcon").setAttribute("class", "like-icon-unlike"),
                                    e.querySelector(".like-circle").setAttribute("data-method", "like"))
                        }
                    }
                    ,
                    a.send(n)
            }
        ))
    }
));
var followBut = document.querySelectorAll(".follow-but");
followBut && Array.from(followBut, (function (e) {
        e.addEventListener("click", (function (t) {
                t.preventDefault();
                var r = this
                    , o = getDirect
                    , a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    ,
                    n = "dataMethod=" + e.querySelector(".follow-circle").getAttribute("data-method") + "&SupplierId=" + e.querySelector(".follow-circle").getAttribute("data-id");
                a.open("POST", o + "/Product/LikeOrUnlikeSupplier", !0),
                    a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    a.onreadystatechange = function () {
                        if (200 == a.status && 4 == a.readyState && "" != a.responseText) {
                            r.classList.add("likeit"),
                                document.querySelector(".like-it").addEventListener("transitionend", (function () {
                                        e.classList.remove("likeit")
                                    }
                                ));
                            var t = Number(e.querySelector(".follow-circle").getAttribute("data-like")) + ("like" == e.querySelector(".follow-circle").getAttribute("data-method") ? 1 : -1)
                                , o = t.formatMoney(0, ",", ",");
                            e.querySelector(".follow-circle").setAttribute("data-like", t);
                            var n = o.split(",").length
                                , c = ""
                                , s = o.split(",")[0];
                            2 == n ? (c = "K",
                                s = t / 1e3) : 3 == n ? (c = "M",
                                s = t / 1e6) : 4 == n && (c = "B",
                                s = t / 1e9);
                            var i = (s = s.toString().split("."))[0];
                            if (s.length > 1) {
                                var l = s[1][0];
                                "0" != l && (i = i + "," + l)
                            }
                            i += c,
                                e.querySelector(".follow-circle").innerHTML = i,
                                "like" == e.querySelector(".follow-circle").getAttribute("data-method") ? (e.querySelector("#spanFollowIcon").setAttribute("class", "follow-icon"),
                                    e.querySelector(".follow-circle").setAttribute("data-method", "unlike"),
                                    e.querySelector("#spanFollowIcon").innerHTML = "Đang theo dõi") : (e.querySelector("#spanFollowIcon").setAttribute("class", "follow-icon-unlike"),
                                    e.querySelector(".follow-circle").setAttribute("data-method", "like"),
                                    e.querySelector("#spanFollowIcon").innerHTML = "Theo dõi")
                        }
                    }
                    ,
                    a.send(n)
            }
        ))
    }
));
var Rating = document.querySelector(".star-handle");
Rating && setTimeout((function () {
        new StarRating(".star-rating").rebuild()
    }
), 500);
var Opt_1 = {
    type: "slide",
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    fixedWidth: "25vw",
    arrows: !0,
    pagination: !1,
    drag: "free",
    snap: !0,
    breakpoints: {
        580: {
            perPage: 1,
            fixedWidth: "86vw"
        },
        1100: {
            perPage: 2,
            fixedWidth: "43vw"
        }
    }
}
    , Opt_2 = {
    type: "slide",
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    fixedWidth: "25vw",
    arrows: !0,
    pagination: !1,
    drag: "free",
    snap: !0,
    breakpoints: {
        580: {
            perPage: 1,
            fixedWidth: "86vw"
        },
        1100: {
            perPage: 2,
            fixedWidth: "43vw"
        }
    }
}
    , o_Destroy = {
    arrows: !1,
    destroy: !0,
    breakpoints: {
        580: {
            destroy: !0
        },
        1100: {
            destroy: !0
        },
        1300: {
            destroy: !0
        }
    }
};

function MakeOption(e) {
    var t = e.querySelectorAll(".slidebox-item").length;
    Mobile.matches ? window.innerWidth > 580 ? t <= 2 ? (e.classList.add("single-slide"),
        e.parentNode.classList.add("align-middle"),
        e.classList.remove("switch-slide")) : (e.parentNode.classList.remove("align-middle"),
        e.classList.remove("single-slide"),
        e.classList.add("switch-slide")) : t <= 1 ? (e.classList.add("single-slide"),
        e.parentNode.classList.add("align-middle"),
        e.classList.remove("switch-slide")) : (e.parentNode.classList.remove("align-middle"),
        e.classList.remove("single-slide"),
        e.classList.add("switch-slide")) : window.innerWidth <= 1300 ? t <= 2 ? (e.classList.add("single-slide"),
        e.parentNode.classList.add("align-middle"),
        e.classList.remove("switch-slide")) : (e.classList.remove("single-slide"),
        e.parentNode.classList.remove("align-middle"),
        e.classList.add("switch-slide")) : t <= 3 ? (e.classList.add("single-slide"),
        e.parentNode.classList.add("align-middle"),
        e.classList.remove("switch-slide")) : (e.classList.remove("single-slide"),
        e.parentNode.classList.remove("align-middle"),
        e.classList.add("switch-slide"))
}

for (var Switch = document.querySelectorAll(".switch-nav li"), i = 0; i < Switch.length; i++)
    Switch[i].addEventListener("click", (function (e) {
            e.preventDefault(),
                this.classList.add("active");
            var t = this.parentNode.parentNode.parentNode;
            if ("extend" == this.dataset.slide) {
                t.classList.add("extend"),
                    t.parentNode.parentNode.parentNode.classList.add("extend-on"),
                    this.parentNode.querySelector("li:first-child").classList.remove("active");
                new Splide(t, o_Destroy).mount();
                return !1
            }
            if (t.parentNode.parentNode.parentNode.classList.remove("extend-on"),
                t.classList.remove("extend"),
                this.parentNode.querySelector("li:last-child").classList.remove("active"),
                document.querySelector(".slide-pro-two"))
                var r = new Splide(t, Opt_2);
            else
                r = new Splide(t, Opt_1);
            return r.on("mounted", (function () {
                    MakeOption(t)
                }
            )),
                r.mount(),
                !1
        }
    ));
var SlidePicture = {
    proSlide: function () {
        document.querySelectorAll(".slide-pro").forEach((function (e) {
                var t = new Splide(e, Opt_1);
                t.on("mounted", (function () {
                        MakeOption(e)
                    }
                )),
                    t.on("resize", (function () {
                            MakeOption(e)
                        }
                    )),
                    t.mount()
            }
        ))
    },
    proTwoSlide: function () {
        document.querySelectorAll(".slide-pro-two").forEach((function (e) {
                var t = new Splide(e, Opt_2);
                t.on("mounted", (function () {
                        MakeOption(e)
                    }
                )),
                    t.on("resize", (function () {
                            MakeOption(e)
                        }
                    )),
                    t.mount()
            }
        ))
    },
    picSlide: function () {
        document.querySelectorAll(".full-wrap").forEach((function (e) {
                var t = e.querySelectorAll(".thumb-item")
                    , r = e.querySelector(".details-slider")
                    , o = e.querySelector(".thumbs");
                if (t.length > 6)
                    var a = "center"
                        , n = !0;
                else {
                    e.querySelector(".thumbs").classList.add("align-middle");
                    a = !1,
                        n = !1
                }
                1 == t.length && (e.querySelector(".thumbs").classList.add("display-none"),
                    e.querySelector(".details-slider").classList.add("no-drag"));
                var c = new Splide(r, {
                    gap: 5,
                    perPage: 1,
                    arrows: !0,
                    pagination: !1,
                    noDrag: ".zoom-active"
                });
                o = new Splide(o, {
                    fixedWidth: "3rem",
                    fixedHeight: "2rem",
                    isNavigation: !0,
                    gap: "0.3rem",
                    focus: a,
                    arrows: n,
                    pagination: !1,
                    cover: !0,
                    breakpoints: {
                        580: {
                            arrows: !1
                        }
                    }
                }).mount();
                c.on("mounted", (function () {
                        c.root.querySelectorAll("img").forEach((function (e) {
                                var t = getAverageRGB(e);
                                e.parentNode.setAttribute("data-color", "rgba(" + t.r + "," + t.g + "," + t.b + ",0.2)")
                            }
                        ))
                    }
                )),
                    c.on("active", (function () {
                            document.querySelector('[data-color="01"]').style.backgroundColor = c.root.querySelector(".is-active").dataset.color,
                                document.querySelector(".overlay-color").style.backgroundColor = c.root.querySelector(".is-active").dataset.color,
                                Cursor(c.root, "zoom", "0.8vw")
                        }
                    )),
                    c.on("resize", (function () {
                            c.refresh(),
                                setTimeout((function () {
                                        c.refresh()
                                    }
                                ), 300)
                        }
                    ));
                var s = document.createElement("div")
                    , i = document.createElement("span");
                (i.className = "overlay-color",
                    s.className = "close-popup",
                    s.innerHTML = svgClose,
                    c.root.parentNode.append(s),
                    c.root.parentNode.append(i),
                1 == t.length) && document.querySelector(".detail-pic").addEventListener("click", (function () {
                        var e = this.querySelector("img").src;
                        ThumbZoom(e)
                    }
                ));
                t.length > 1 && (c.root.querySelector(".slidebox-track").addEventListener("click", (function () {
                        document.querySelector(".pin-spacer") && ScrollTrigger.getById("trigger").kill(!0),
                        document.querySelector(".slidefullwrap") || (c.root.parentNode.classList.add("slidefullwrap"),
                            c.root.querySelectorAll(".detail-pic").forEach((function (e) {
                                    e.classList.add("pinch-zoom")
                                }
                            )),
                            Body.append(c.root.parentNode),
                            WinScroll.stop(),
                            itemZoom(),
                            l(),
                            s.classList.add("goleft"),
                            document.querySelector(".slidefullwrap").classList.add("show"),
                        iOS && document.querySelector(".slidefullwrap").addEventListener("gesturestart", (function (e) {
                                e.preventDefault()
                            }
                        )))
                    }
                )),
                    s.addEventListener("click", (function () {
                            c.root.parentNode.classList.remove("slidefullwrap", "show"),
                                c.root.querySelectorAll(".detail-pic").forEach((function (e) {
                                        e.classList.remove("pinch-zoom", "zoom-active"),
                                            e.querySelector("img").removeAttribute("style"),
                                            e.querySelector("img").removeAttribute("data-scale"),
                                            e.querySelector("img").removeAttribute("data-translate-x"),
                                            e.querySelector("img").removeAttribute("data-translate-y")
                                    }
                                )),
                                Body.classList.remove("zoom-active"),
                                document.querySelector(".full-wrap").prepend(c.root.parentNode),
                            document.querySelector(".wrap-right") && setTimeout((function () {
                                    S_Trigger()
                                }
                            ), 300),
                                WinScroll.start(),
                                l()
                        }
                    )));
                var l = function () {
                    document.querySelector(".slidefullwrap") ? document.querySelector(".cursor-text").innerHTML = "wheel" : document.querySelector(".cursor-text").innerHTML = "zoom",
                        document.querySelector(".cursor-zoom").classList.remove("active");
                    var e = c.index;
                    c.go(e - 1),
                        c.go(e)
                };
                c.sync(o),
                    c.mount()
            }
        ))
    },
    fullSlide: function () {
        new Splide(".full-slide", {
            type: "loop",
            gap: 0,
            perPage: 1,
            autoplay: !0,
            speed: 1e3,
            pauseOnHover: !1,
            pauseOnFocus: !1,
            arrows: !1,
            pagination: !1,
            cover: !0
        }).mount()
    }
};

function YesOrderPopup() {
    document.getElementById("btnYesOrder").addEventListener("click", (function (e) {
            e.preventDefault(),
                document.getElementById("btnYesOrder").setAttribute("disabled", "disabled"),
                document.getElementById("btnYesOrder").style.pointerEvents = "none",
                Loadx.classList.add("display-block", "inplay"),
                overlayDark.classList.add("show");
            var t = getDirect
                , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                , o = "OrderId=" + document.getElementById("OrderId").value;
            return r.open("POST", t + "AccountMember/DeleteOrderByUserName", !0),
                r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                r.onreadystatechange = function () {
                    if (r.readyState === XMLHttpRequest.DONE && 200 === r.status && (Loadx.classList.remove("display-block", "inplay"),
                    "1" == r.responseText)) {
                        if ("vi" == HTML.lang)
                            var e = "<strong>Hủy đơn hàng thành công!</strong><br>";
                        else
                            e = "<strong>Canceled order successfully!<br>";
                        if (!document.querySelector(".success")) {
                            var t = document.createElement("div");
                            t.className = "alert success";
                            var o = document.createElement("div");
                            o.className = "success-content",
                                o.innerHTML = e,
                                t.appendChild(o),
                                document.body.appendChild(t)
                        }
                        setTimeout((function () {
                                document.querySelector(".success").classList.add("show")
                            }
                        ), 200),
                            setTimeout((function () {
                                    window.location.reload(!0)
                                }
                            ), 2e3),
                            document.querySelector(".content-popup .close-popup").click();
                        var a = document.querySelector("#btnYesOrder").getAttribute("data-page");
                        window.location = a
                    }
                }
                ,
                r.send(o),
                !1
        }
    ))
}

function CancelOrder() {
    document.getElementById("btnCancelOrder").addEventListener("click", (function (e) {
            e.preventDefault(),
                document.getElementById("btnCancelOrder").setAttribute("disabled", "disabled"),
                document.getElementById("btnCancelOrder").style.pointerEvents = "none",
                Loadx.classList.add("display-block", "inplay");
            var t = getDirect
                , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                , o = "OrderDetailId=" + document.getElementById("OrderDetailId").value;
            return r.open("POST", t + "AccountMember/DeleteOrderDetailByUserName", !0),
                r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                r.onreadystatechange = function () {
                    if (r.readyState === XMLHttpRequest.DONE && 200 === r.status && (Loadx.classList.remove("display-block", "inplay"),
                    "1" == r.responseText)) {
                        if ("vi" == HTML.lang)
                            var e = "<strong>Xóa sản phẩm thành công!</strong><br>";
                        else
                            e = "<strong>Deleted product successfully!<br>";
                        if (!document.querySelector(".success")) {
                            var t = document.createElement("div");
                            t.className = "alert success";
                            var o = document.createElement("div");
                            o.className = "success-content",
                                o.innerHTML = e,
                                t.appendChild(o),
                                document.body.appendChild(t)
                        }
                        document.querySelector('.cart-delete[data-productid="' + document.getElementById("OrderDetailId").value + '"]').parentNode.parentNode.remove(),
                            function (e) {
                                var t = document.querySelector('.order-item[data-orderid="' + e + '"]')
                                    , r = t.querySelectorAll(".cart-list").length
                                    , o = 0;
                                if (t.querySelectorAll(".price-total").forEach((function (e) {
                                        var t = removeCommas(e.textContent);
                                        o += parseInt(t)
                                    }
                                )),
                                    t.querySelector(".total-price-order p").textContent = o.formatMoney(0, ",", ","),
                                0 == r && (t.remove(),
                                0 == t.length)) {
                                    if ("vi" == HTML.lang)
                                        var a = '<div class="cart-mess">Chưa có sản phẩm đặt hàng</div>';
                                    else
                                        a = '<div class="cart-mess">No products to order</div>';
                                    var n = document.createElement("div");
                                    n.className = "order-mess",
                                        n.innerHTML = a,
                                        document.querySelector(".order-main").append(n)
                                }
                            }(document.getElementById("OrderId").value),
                            setTimeout((function () {
                                    document.querySelector(".success").classList.add("show")
                                }
                            ), 200),
                            setTimeout((function () {
                                    document.querySelector(".success").remove()
                                }
                            ), 2e3),
                            document.querySelector(".content-popup .close-popup").click()
                    }
                }
                ,
                r.send(o),
                !1
        }
    ))
}

function loadPopup(e, t, r, o) {
    var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    a.open("GET", e, !0),
        a.onreadystatechange = function () {
            if (4 == a.readyState && 200 == a.status) {
                Body.insertAdjacentHTML("beforeend", a.responseText),
                document.querySelector(".details-cancel") && ("" != o ? (document.querySelector("#OrderId").value = r,
                    document.querySelector("#OrderDetailId").value = o,
                    CancelOrder()) : "" != r && (document.querySelector("#OrderId").value = r,
                    YesOrderPopup())),
                document.querySelector(".load-text a") && document.querySelectorAll(".load-text a").forEach((function (e) {
                        e.addEventListener("click", (function (e) {
                                e.preventDefault();
                                var t = this.href;
                                window.open(t, "_blank")
                            }
                        ))
                    }
                ));
                var e = document.querySelector(".content-popup")
                    , t = e.querySelector(".details-center")
                    , n = e.querySelector(".close-popup")
                    , c = document.createElement("span");
                e.append(c),
                    n.innerHTML = svgClose;
                var s = e.querySelectorAll(".load-text img");
                s && Array.from(s, (function (t, r) {
                        var o = t.getAttribute("alt")
                            , a = e.querySelector(".load-title h2").textContent
                            , n = r + 1;
                        o && a && t.setAttribute("alt", a + " pic-" + n)
                    }
                )),
                    gsap.to(e, {
                        duration: .6,
                        opacity: 1,
                        ease: "none",
                        onComplete: function () {
                            t.classList.add("show"),
                                e.querySelector(".load-title").classList.add("show"),
                                e.querySelector(".load-text").classList.add("show"),
                                n.classList.add("goleft"),
                                Loadx.classList.remove("display-block", "inplay"),
                            t.scrollHeight > window.innerHeight && (e.classList.add("no-after"),
                                ScrollInner(e))
                        }
                    }),
                    n.addEventListener("click", (function (t) {
                            if (t.preventDefault(),
                                gsap.to(e, {
                                    duration: .5,
                                    opacity: 0,
                                    ease: "none",
                                    onComplete: function () {
                                        WinScroll.start(),
                                            overlayDark.classList.remove("show"),
                                        thatInner && thatInner.destroy();
                                        "" == o ? overlayDark.addEventListener("transitionend", (function () {
                                                e.remove()
                                            }
                                        )) : e.remove()
                                    }
                                }),
                                document.querySelector(".link-policy.current"))
                                var r = document.querySelector(".link-policy.current").dataset.name;
                            else
                                r = document.querySelector(".nav li.current a").getAttribute("href");
                            if (document.querySelector("#MetaSeoTitle").value)
                                var a = document.querySelector("#MetaSeoTitle").value;
                            if (document.querySelector("#MetaSeoKeywords").value)
                                var n = document.querySelector("#MetaSeoKeywords").value;
                            if (document.querySelector("#MetaSeoDescription"))
                                var c = document.querySelector("#MetaSeoDescription").value;
                            if (document.querySelector("#MetaSeoDataname"))
                                var s = document.querySelector("#MetaSeoDataname").value;
                            r && changeUrl(r, a, c, n, s, a, c);
                            var i = document.querySelectorAll(".link-popup, .link-policy");
                            RemoveClass(i)
                        }
                    )),
                    e.querySelector("span").addEventListener("click", (function (e) {
                            e.preventDefault(),
                                n.click()
                        }
                    ));
                var i = e.querySelector(".cancel-close");
                i && i.addEventListener("click", (function () {
                        n.click()
                    }
                )),
                    window.addEventListener("resize", (function () {
                            var t = e.querySelector(".details-center").scrollHeight
                                , r = e.querySelector(".scrollbar-inner");
                            t > window.innerHeight ? (e.classList.add("no-after"),
                            r && thatInner.start()) : (e.classList.remove("no-after"),
                            r && thatInner.stop())
                        }
                    ))
            }
        }
        ,
        a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        a.send()
}

function LinkPopup() {
    Array.from(document.querySelectorAll(".link-popup, .link-policy"), (function (e) {
            e.addEventListener("click", (function (e) {
                    e.preventDefault();
                    var t = document.querySelectorAll(".link-popup, .link-policy");
                    RemoveClass(t),
                        this.classList.add("current");
                    var r = this.dataset.href ? this.dataset.href : this.href
                        , o = this.dataset.name
                        , a = this.dataset.id ? this.dataset.id : ""
                        , n = this.dataset.productid ? this.dataset.productid : "";
                    if (Details = 1,
                    "" == n && overlayDark.classList.add("show"),
                    Loadx.classList.contains("display-block") || Loadx.classList.add("display-block", "inplay"),
                    "list-order-page" != IDPage && document.querySelector(".link-popup.current"))
                        var c = this.getAttribute("href")
                            ,
                            s = this.parentNode.querySelector(".link-change-url") ? this.parentNode.querySelector(".link-change-url").dataset.title : ""
                            ,
                            i = this.parentNode.querySelector(".link-change-url") ? this.parentNode.querySelector(".link-change-url").dataset.keyword : ""
                            ,
                            l = this.parentNode.querySelector(".link-change-url") ? this.parentNode.querySelector(".link-change-url").dataset.description : ""
                            ,
                            d = this.parentNode.querySelector(".link-change-url") ? this.parentNode.querySelector(".link-change-url").dataset.name : "";
                    if (document.querySelector(".link-policy.current"))
                        c = this.getAttribute("data-url"),
                            s = this.dataset.title,
                            i = this.dataset.keyword,
                            l = this.dataset.description,
                            d = this.dataset.name;
                    c && changeUrl(c, s, l, i, d, s, l),
                        WinScroll.stop(),
                        loadPopup(r, o, a, n)
                }
            ))
        }
    ))
}

function ContentLoad() {
    "news-page" != IDPage && "product-page" != IDPage || ShareSocial(),
    document.querySelector(".popup-show") && setTimeout((function () {
            var e = document.querySelector(".popup-show").dataset.href;
            WinScroll.stop(),
            Loadx.classList.contains("display-block") || Loadx.classList.add("display-block", "inplay"),
                overlayDark.classList.add("show"),
                loadPopup(e)
        }
    ), 5e3);
    var e = Container.dataset.second
        , t = Container.dataset.details;
    if (Navigation.querySelector('.nav-item[data-name="' + IDPage + '"]') && Navigation.querySelector('.nav-item[data-name="' + IDPage + '"]').parentNode.classList.add("current"),
    Footer.querySelector('.sub-item a[data-name="' + IDPage + '"]') && Footer.querySelector('.sub-item a[data-name="' + IDPage + '"]').parentNode.classList.add("current"),
    e && (Navigation.querySelector('.item-menu-second a[data-name="' + e + '"]') && Navigation.querySelector('.item-menu-second a[data-name="' + e + '"]').parentNode.classList.add("current"),
    Footer.querySelector('.sub-item a[data-name="' + e + '"]') && (Footer.querySelector('.sub-item a[data-name="' + e + '"]').parentNode.classList.add("current"),
        Footer.querySelector('.sub-item a[data-name="' + e + '"]').parentNode.parentNode.parentNode.querySelector(".sub-name").click()),
    "crocus-page" == IDPage && document.querySelector('.story-icon a[data-name="' + e + '"]').parentNode.classList.add("current")),
        breadCrumb) {
        var r = document.querySelector(".breadcrumb-second");
        if (e ? breadCrumb.querySelector('.link-load[data-name= "' + e + '"]') && (breadCrumb.querySelector('.link-load[data-name= "' + e + '"]').parentNode.classList.add("current"),
            r.querySelector('.link-load[data-name= "' + e + '"]').parentNode.classList.add("current")) : (breadCrumb.querySelector('.link-load[data-name= "' + IDPage + '"]').parentNode.classList.add("current"),
            r.querySelector('.link-load[data-name= "' + IDPage + '"]').parentNode.classList.add("current")),
            t)
            if ("service-page" != IDPage && breadCrumb.querySelector('.link-load[data-name= "' + e + '"]') && (breadCrumb.querySelector('.link-load[data-name= "' + e + '"]').parentNode.classList.replace("current", "active"),
                r.querySelector('.link-load[data-name= "' + e + '"]').parentNode.classList.replace("current", "active")),
            Navigation.querySelector('.item-menu-second a[data-name="' + e + '"]') && Navigation.querySelector('.item-menu-second a[data-name="' + e + '"]').parentNode.classList.replace("current", "active"),
            Footer.querySelector('.sub-item a[data-name="' + e + '"]') && Footer.querySelector('.sub-item a[data-name="' + e + '"]').parentNode.classList.replace("current", "active"),
            "news-page" == IDPage) {
                var o = document.querySelector(".has-sub.current .sub-menu-drop").cloneNode(!0);
                o.removeAttribute("data-show"),
                    o.classList.replace("sub-menu-drop", "sub-menu-left");
                var a = document.createElement("div");
                a.className = "sub-menu",
                    a.append(o),
                    Body.append(a),
                    LinkPage(),
                    new TimelineMax({
                        repeat: -1
                    }).to(".text-title", {
                        duration: 10,
                        x: "-50%",
                        ease: "none"
                    })
            } else
                breadCrumb.querySelector(".last").classList.add("current"),
                    r.querySelector(".last").classList.add("current")
    }
    if (document.querySelector(".nav li.current a")) {
        var n = document.querySelector(".nav li.current a").getAttribute("href");
        document.querySelectorAll(".link-policy").forEach((function (e) {
                e.dataset.name = n
            }
        ))
    }
    if ("home-page" !== IDPage && (Logo.classList.add("onclick"),
        Logo.addEventListener("click", (function () {
                Navigation.querySelector(".link-home").click()
            }
        ))),
        document.querySelector(".layout-move")) {
        var c = Container.querySelector(".layout-move").parentNode;
        setTimeout((function () {
                new colEffect(c)
            }
        ), 1500)
    }
    if (document.querySelectorAll(".box-txt a, .pro-text a, .load-text a").forEach((function (e) {
            e.addEventListener("click", (function (e) {
                    e.stopPropagation()
                }
            ))
        }
    )),
        document.querySelectorAll(".box-news, .product-item, .product-wrap").forEach((function (e) {
                e.addEventListener("click", (function (t) {
                        t.preventDefault(),
                        Mobile.matches && (e.querySelector(".link-load") && e.querySelector(".link-load").click(),
                        e.querySelector(".go-detail") && e.querySelector(".go-detail").click())
                    }
                ))
            }
        )),
        document.querySelectorAll(".promotion-item").forEach((function (e) {
                e.addEventListener("click", (function (t) {
                        t.preventDefault(),
                        Mobile.matches && e.querySelector(".link-popup") && e.querySelector(".link-popup").click()
                    }
                ))
            }
        )),
        document.querySelectorAll(".product-pic, .pic-news").forEach((function (e) {
                e.addEventListener("click", (function (t) {
                        t.preventDefault(),
                        e.parentNode.querySelector("a") && e.parentNode.querySelector("a").click()
                    }
                ))
            }
        )),
        document.querySelectorAll(".item-search").forEach((function (e) {
                e.addEventListener("click", (function (t) {
                        t.preventDefault(),
                            e.querySelector(".link-load").click()
                    }
                ))
            }
        )),
    breadCrumb && breadCrumb.classList.add("show"),
    "home-page" == IDPage && Body.classList.add("full-h"),
    "search-page" == IDPage) {
        bannerInner && (Body.classList.add("short"),
            bannerInner.classList.add("short"),
            bannerInner.classList.add("color-normal-dark"));
        var s = document.querySelectorAll(".item-search").length;
        s > 0 ? document.querySelector(".search-result .title-result h2 strong").innerHTML = s : (document.querySelector(".search-result .title-result").classList.add("display-none"),
            document.querySelector(".search-result").classList.add("no-result"))
    }
    if ("product-page" == IDPage && (bannerInner && (Body.classList.add("short"),
        bannerInner.classList.add("short", "flex-end", "color-background")),
        allStories.classList.add("left-pos")),
    "product-details-special" == t || "product-details-page" == t) {
        scrollDown.classList.add("display-none"),
            Body.classList.add("detail-pro"),
            Logo.classList.add("color-normal"),
            rightHeader.classList.add("color-black"),
            navClick.classList.add("color-black"),
            allStories.classList.add("white");
        var i = document.querySelector(".details-info .product-title h2").innerText;
        titlePage.querySelector("h1").innerHTML = i;
        var l = document.querySelector(".product-info .weight-code")
            , d = document.createElement("div");
        if (d.className = "qrcode",
            d.id = "qrcode",
            l.append(d),
            setTimeout((function () {
                    var e = new QRCode("qrcode", {
                        width: 200,
                        height: 200,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: QRCode.CorrectLevel.H
                    });
                    const t = document.URL;
                    t && function (t) {
                        e.clear(),
                            e.makeCode(t)
                    }(t)
                }
            ), 500),
            document.querySelector(".coupon-tag-item")) {
            var u = document.querySelectorAll(".coupon-tag-item")
                , m = document.querySelectorAll(".coupon-tag-item-content");
            Array.from(u, (function (e) {
                    e.addEventListener("mouseenter", (function (t) {
                            e.querySelector(".coupon-tag-item-content").classList.add("show")
                        }
                    )),
                        e.addEventListener("mouseleave", (function (t) {
                                e.querySelector(".coupon-tag-item-content").classList.remove("show")
                            }
                        )),
                        e.addEventListener("click", (function (t) {
                                t.preventDefault(),
                                    RemoveClass(u),
                                    RemoveClass(m),
                                    this.classList.add("current"),
                                    e.querySelector(".coupon-tag-item-content").classList.add("show");
                                var r = e.querySelector(".coupon-tag-item-content").getAttribute("data-price")
                                    ,
                                    o = document.querySelector(".product-info .price-apply-coupon p").getAttribute("data-price")
                                    , a = parseInt(e.querySelector(".message-coupon").getAttribute("data-priceLevel"))
                                    , n = parseInt(p.querySelector(".item-count").value)
                                    , c = parseInt(o * n - r);
                                if (a >= parseInt(o * n))
                                    document.querySelector(".message-coupon").classList.add("show"),
                                        setTimeout((function () {
                                                document.querySelector(".message-coupon").classList.remove("show")
                                            }
                                        ), 3e3),
                                        this.classList.remove("current"),
                                        document.querySelector(".product-info .price-apply-coupon p").innerHTML = parseInt(o).toLocaleString().replace(".", ",");
                                else {
                                    document.querySelector(".price-apply-coupon").classList.remove("display-none"),
                                        document.querySelector(".product-info  .price").classList.add("price-old"),
                                        document.querySelector(".product-info  .price").classList.remove("price-new"),
                                        document.querySelector(".product-info .price-apply-coupon p").innerHTML = c.toLocaleString().replace(".", ",");
                                    var s = document.querySelector(".wrap-view-more button")
                                        , i = e.querySelector(".coupon-tag-item-content").getAttribute("data-id")
                                        , l = e.querySelector(".coupon-tag-item-content").getAttribute("data-price");
                                    s.setAttribute("data-coupon-id", i),
                                        s.setAttribute("data-coupon-price", l),
                                        s.setAttribute("data-pricelevel", a)
                                }
                            }
                        ))
                }
            )),
                Array.from(m, (function (e) {
                        e.addEventListener("click", (function (e) {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    this.classList.remove("show")
                            }
                        ))
                    }
                ))
        }
        var p = document.querySelector(".quantity-product-detail");
        p.querySelector(".minus-item").addEventListener("click", (function (e) {
                if (p.querySelector(".item-count").value <= 1)
                    p.querySelector(".item-count").value = 1;
                else {
                    var t = p.querySelector(".item-count").value = parseInt(p.querySelector(".item-count").value) - 1
                        , r = document.querySelector(".product-info .price-new p").getAttribute("data-price-root")
                        , o = parseInt(r * t);
                    if (document.querySelector(".product-info .price-new p").innerHTML = o.toLocaleString().replaceAll(".", ","),
                        document.querySelector(".wrap-view-more button").setAttribute("data-quantity", t),
                        document.querySelector(".coupon-tag-item-content")) {
                        var a = o - document.querySelector(".coupon-tag-item-content").getAttribute("data-price");
                        document.querySelector(".price-apply-coupon p").innerHTML = a.toLocaleString().replaceAll(".", ",")
                    }
                    if (document.querySelector(".price-old")) {
                        var n = document.querySelector(".price-old p").getAttribute("data-price")
                            , c = parseInt(n * t);
                        document.querySelector(".product-info .price-old p").innerHTML = c.toLocaleString().replaceAll(".", ",")
                    }
                }
            }
        )),
            p.querySelector(".plus-item").addEventListener("click", (function (e) {
                    var t = p.querySelector(".item-count").value = parseInt(p.querySelector(".item-count").value) + 1
                        , r = document.querySelector(".product-info .price-new p").getAttribute("data-price-root")
                        , o = parseInt(r * t);
                    if (document.querySelector(".product-info .price-new p").innerHTML = o.toLocaleString().replaceAll(".", ","),
                        document.querySelector(".wrap-view-more button").setAttribute("data-quantity", t),
                        document.querySelector(".coupon-tag-item-content")) {
                        var a = o - document.querySelector(".coupon-tag-item-content").getAttribute("data-price");
                        document.querySelector(".price-apply-coupon p").innerHTML = a.toLocaleString().replaceAll(".", ",")
                    }
                    if (document.querySelector(".price-old")) {
                        var n = document.querySelector(".price-old p").getAttribute("data-price")
                            , c = parseInt(n * t);
                        document.querySelector(".product-info .price-old p").innerHTML = c.toLocaleString().replaceAll(".", ",")
                    }
                }
            )),
            document.querySelector(".quantity-product-detail .cart-count .item-count").onkeyup = function () {
                if (p.querySelector(".item-count").value <= 1) {
                    var e = p.querySelector(".item-count").value = 1
                        , t = document.querySelector(".product-info .price p").getAttribute("data-price-root")
                        , r = parseInt(t * e);
                    document.querySelector(".product-info .price p").innerHTML = r.toLocaleString().replaceAll(".", ","),
                        document.querySelector(".wrap-view-more button").setAttribute("data-quantity", e)
                } else {
                    e = p.querySelector(".item-count").value,
                        t = document.querySelector(".product-info .price p").getAttribute("data-price-root"),
                        r = parseInt(t * e);
                    document.querySelector(".product-info .price p").innerHTML = r.toLocaleString().replaceAll(".", ","),
                        document.querySelector(".wrap-view-more button").setAttribute("data-quantity", e)
                }
            }
    }
    if ("supplier-page" == IDPage && (bannerInner && (bannerInner.classList.add("short"),
        bannerInner.classList.add("color-normal-dark")),
    document.querySelector(".slide-pro") && setTimeout((function () {
            document.querySelector(".switch-nav li:nth-child(2)").click()
        }
    ), 1500)),
    "story-page" == IDPage && bannerInner && bannerInner.classList.add("color-green-dark"),
    "brand-page" == IDPage) {
        bannerInner && bannerInner.classList.add("color-blue-grey");
        var y = [];
        document.querySelectorAll(".brands > .brand").forEach((function (e) {
                return y.push(new hoverItem(e, 1))
            }
        )),
        document.querySelector("a[data-name='" + document.querySelector("#brandSlug").value + "']") && setTimeout((function () {
                document.querySelector("a[data-name='" + document.querySelector("#brandSlug").value + "']").click()
            }
        ), 2e3)
    }
    if ("news-page" == IDPage) {
        bannerInner && (Body.classList.add("short"),
            bannerInner.classList.add("short"),
            bannerInner.classList.add("color-normal-dark", "flex-end"),
        Container.dataset.details || allStories.classList.add("white"));
        y = [];
        document.querySelectorAll(".box-news").forEach((function (e) {
                return y.push(new hoverItem(e, 1))
            }
        ))
    }
    if ("service-page" == IDPage && bannerInner && (Body.classList.add("short"),
        bannerInner.classList.add("short"),
        bannerInner.classList.add("color-normal-dark", "flex-end")),
    "crocus-page" == IDPage && (bannerInner.classList.contains("black") && (Body.classList.add("full-h"),
        Logo.classList.add("color-normal"),
        rightHeader.classList.add("color-black"),
        navClick.classList.add("color-black"),
        bannerInner.classList.add("full-h", "color-background", "no-before", "no-after"),
        scrollDown.classList.add("difference"),
        titlePage.classList.add("difference")),
    bannerInner.classList.contains("full-h") && (Body.classList.add("full-h"),
        bannerInner.classList.add("color-background", "no-before", "no-after"))),
    "promotion-page" == IDPage) {
        bannerInner && (Body.classList.add("short"),
            bannerInner.classList.add("short"),
            bannerInner.classList.add("color-normal-dark"));
        y = [];
        document.querySelectorAll(".promotion-item").forEach((function (e) {
                return y.push(new hoverItem(e, 0))
            }
        )),
        document.querySelector("a[data-name='" + document.querySelector("#promotionSlug").value + "']") && setTimeout((function () {
                document.querySelector("a[data-name='" + document.querySelector("#promotionSlug").value + "']").click()
            }
        ), 2e3)
    }
    if ("contact-page" == IDPage && (bannerInner && bannerInner.classList.add("color-brown"),
        document.querySelector(".map-google").addEventListener("click", (function (e) {
                e.preventDefault(),
                    this.querySelector(".map-over").style.display = "none",
                    this.querySelector(".map-view").classList.add("show")
            }
        )),
        document.querySelector(".map-google").addEventListener("mouseleave", (function (e) {
                this.querySelector(".map-over").style.display = "block",
                    this.querySelector(".map-view").classList.remove("show")
            }
        ))),
    "thankyou-page" == IDPage && bannerInner && bannerInner.classList.add("color-green"),
    "register-page" == IDPage) {
        scrollDown.classList.add("display-none"),
            CustomSelect(),
            loginBut.classList.add("active", "current");
        var v = document.querySelector(".register-page");
        addLeafs(v)
    }
    if ("cart-page" == IDPage) {
        scrollDown.classList.add("display-none"),
            CustomSelect(),
            cartShopping.classList.add("active", "current");
        v = document.querySelector(".cart-page");
        if (addLeafs(v),
            document.querySelector(".append-cart").append(cartContent),
            document.querySelector(".append-cart .cart-content").classList.add("ani-item", "cart-inner"),
            document.querySelector(".cart-list:last-child .cart-img .link-load")) {
            n = document.querySelector(".cart-list:last-child .cart-img .link-load").dataset.href;
            goBack.setAttribute("data-href", n)
        }
        Confirm.addEventListener("click", (function (e) {
                e.preventDefault(),
                    this.classList.add("current"),
                    infoDisplay.classList.add("show");
                var t = infoDisplay.offsetTop;
                return ScrollTop(t),
                    !1
            }
        ))
    }
    if ("account-page" == IDPage) {
        document.querySelector('.user-select-form li a[data-name= "' + IDPage + '"]').classList.add("active"),
            loginBut.classList.add("active"),
            scrollDown.classList.add("display-none"),
            CustomSelect();
        v = document.querySelector(".account-page");
        addLeafs(v),
            checkUpdate()
    }
    if ("list-order-page" == IDPage) {
        if (document.querySelector('.user-select-form li a[data-name= "' + IDPage + '"]').classList.add("active"),
            scrollDown.classList.add("display-none"),
        "vi" == HTML.lang)
            var h = '<div class="cart-mess">Chưa có sản phẩm đặt hàng</div>';
        else
            h = '<div class="cart-mess">No products to order</div>';
        if (!document.querySelector(".order-item")) {
            var S = document.createElement("div");
            S.className = "order-mess",
                S.innerHTML = h,
                document.querySelector(".order-main").append(S)
        }
        document.querySelector(".li-five .cart-delete") && Array.from(document.querySelectorAll(".li-five .cart-delete"), (function (e) {
                e.innerHTML = svgTrash
            }
        ));
        v = document.querySelector(".account-page");
        addLeafs(v),
            Array.from(document.querySelectorAll(".order-item"), (function (e) {
                    (e.querySelector(".status-children.complete-stt.active") || e.querySelector(".status-children.cancel-stt.active")) && e.querySelector(".cancel-order").remove();
                    var t = 0
                        , r = e.querySelector(".total-price p");
                    e.querySelectorAll(".price-total").forEach((function (e, r) {
                            var o = parseInt(e.innerHTML.replace(/[,.]/g, ""));
                            t += o
                        }
                    )),
                        t = Number(t).formatMoney(0, ",", ","),
                        r.innerHTML = t
                }
            ));
        const e = document.querySelectorAll(".tabs-history-nav-item")
            , t = document.querySelectorAll(".tabs-history-content-item")
            , r = document.querySelector(".tabs-history-nav-item.active")
            , o = document.querySelector(".tabs-history-nav .line");
        o.style.left = r.offsetLeft + "px",
            o.style.width = r.offsetWidth + "px",
            e.forEach((function (e, r) {
                    const a = t[r];
                    e.addEventListener("click", (function () {
                            document.querySelector(".tabs-history-nav-item.active").classList.remove("active"),
                                document.querySelector(".tabs-history-content-item.active").classList.remove("active"),
                                o.style.left = this.offsetLeft + "px",
                                o.style.width = this.offsetWidth + "px",
                                this.classList.add("active"),
                                a.classList.add("active")
                        }
                    ))
                }
            ))
    }
    if ("list-order-history-page" == IDPage) {
        document.querySelector('.user-select-form li a[data-name= "' + IDPage + '"]').classList.add("active"),
            loginBut.classList.add("active"),
            scrollDown.classList.add("display-none");
        const e = document.querySelectorAll(".tabs-history-nav-item")
            , t = document.querySelectorAll(".tabs-history-content-item")
            , r = document.querySelector(".tabs-history-nav-item.active")
            , o = document.querySelector(".tabs-history-nav .line");
        o.style.left = r.offsetLeft + "px",
            o.style.width = r.offsetWidth + "px",
            e.forEach((function (e, r) {
                    const a = t[r];
                    e.addEventListener("click", (function () {
                            document.querySelector(".tabs-history-nav-item.active").classList.remove("active"),
                                document.querySelector(".tabs-history-content-item.active").classList.remove("active"),
                                o.style.left = this.offsetLeft + "px",
                                o.style.width = this.offsetWidth + "px",
                                this.classList.add("active"),
                                a.classList.add("active")
                        }
                    ))
                }
            ))
    }
    "list-favorite-product-page" == IDPage && (document.querySelector('.user-select-form li a[data-name= "' + IDPage + '"]').classList.add("active"),
        loginBut.classList.add("active"),
        scrollDown.classList.add("display-none"));
    var f = document.URL;
    if (document.querySelectorAll(".link-policy").forEach((function (e) {
            e.dataset.url == f && setTimeout((function () {
                    e.click()
                }
            ), 3e3)
        }
    )),
        document.querySelector("#city")) {
        var q = document.querySelector("#city")
            , g = document.querySelector("#district")
            , L = document.querySelector("#wards-list")
            , b = L.querySelector("#wards").getAttribute("data-default");
        q.querySelectorAll(".select-item").forEach((function (e) {
                e.addEventListener("click", (function () {
                        return w(this),
                            !1
                    }
                ))
            }
        ))
    }
    const w = function (e) {
        g.classList.add("hide"),
            L.classList.add("hide"),
            L.querySelector(".select-custom-head").innerHTML = b;
        var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        t.open("POST", "/AccountMember/GetDistrictByCityId", !0),
            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        var r = "CityId=" + e.getAttribute("data-value");
        t.onreadystatechange = function () {
            4 == t.readyState && 200 == t.status && (g.innerHTML = t.responseText,
                CustomSelect(),
                g.classList.remove("hide"),
                g.querySelectorAll(".select-item").forEach((function (e) {
                        e.addEventListener("click", (function () {
                                return k(this),
                                    !1
                            }
                        ))
                    }
                )))
        }
            ,
            t.send(r)
    }
        , k = function (e) {
        var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        t.open("POST", "/AccountMember/GetWardsByDistrictId", !0),
            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        var r = "DistrictId=" + e.getAttribute("data-value");
        t.onreadystatechange = function () {
            4 == t.readyState && 200 == t.status && (document.querySelector("#wards-list").innerHTML = t.responseText,
                CustomSelect(),
                L.classList.remove("hide"))
        }
            ,
            t.send(r)
    }
}

function checkUpdate() {
    var e = document.querySelector(".pop-update")
        , t = document.querySelectorAll(".account-page .input-text")
        , r = document.querySelectorAll(".box-update .close")
        , o = document.querySelectorAll(".box-update")
        , a = document.querySelectorAll(".box-update .update")
        , n = document.createElement("span");

    function c(e) {
        e.value;
        for (var t, r = "0123456789", o = 0; o < e.value.length; o++) {
            t = !1;
            for (var a = 0; a < r.length; a++)
                e.value.charAt(o) == r.charAt(a) && (t = !0);
            0 == t && (e.value = e.value.replace(e.value.charAt(o), ""),
                o--)
        }
        return !0
    }

    e.append(n),
        t.forEach((function (t) {
                var r = t.querySelector(".form-label")
                    , o = t.querySelector(".account-page .update, .password-change");
                r && t.querySelector(".holder") && (t.querySelector(".holder").classList.add("display-none"),
                    t.querySelector("input").readOnly = !0),
                o && o.addEventListener("click", (function (r) {
                        if (r.preventDefault(),
                            t.querySelector("input")) {
                            var o = t.querySelector("input").dataset.name;
                            document.querySelector('.box-update[data-name="' + o + '"] input').focus()
                        } else
                            o = t.querySelector(".password-change").dataset.name;
                        return e.classList.add("show"),
                            document.querySelector('.box-update[data-name="' + o + '"]').classList.add("show"),
                            !1
                    }
                ))
            }
        )),
        r.forEach((function (t) {
                t.addEventListener("click", (function (t) {
                        return t.preventDefault(),
                            e.classList.remove("show"),
                            hideerror(),
                            RemoveClass(o),
                            !1
                    }
                )),
                    document.querySelector(".pop-update > span").addEventListener("click", (function (e) {
                            t.click()
                        }
                    ))
            }
        )),
        document.getElementById("user_phone").addEventListener("keyup", (function (e) {
                c(this)
            }
        )),
        document.getElementById("company_tax").addEventListener("keyup", (function (e) {
                c(this)
            }
        )),
        a.forEach((function (e) {
                e.addEventListener("click", (function (e) {
                        e.preventDefault();
                        var t = this.parentNode.parentNode.dataset.name;
                        return function (e, t) {
                            var r = !0;
                            document.querySelector(".box-update.show #user_name") && (r = checkNull("user_name", document.getElementById("user_name").getAttribute("data-error")));
                            var o = !0;
                            document.querySelector(".box-update.show #user_email") && (o = checkMail("user_email", document.getElementById("user_email").getAttribute("data-error")));
                            var a = !0;
                            document.querySelector(".box-update.show #user_phone") && (a = checkPhone("user_phone", document.getElementById("user_phone").getAttribute("data-error")));
                            var n = !0;
                            document.querySelector(".box-update.show #user_add") && (n = checkNull("user_add", document.getElementById("user_add").getAttribute("data-error")));
                            var c = !0;
                            document.querySelector(".box-update.show #user_UserName") && (c = checkUserName("user_UserName", document.getElementById("user_UserName").getAttribute("data-error"), document.getElementById("user_UserName").getAttribute("data-error2")));
                            var s = !0;
                            document.querySelector(".box-update.show #company_name") && (s = checkNull("company_name", document.getElementById("company_name").getAttribute("data-error")));
                            var i = !0;
                            document.querySelector(".box-update.show #company_tax") && (i = checkNull("company_tax", document.getElementById("company_tax").getAttribute("data-error")));
                            var l = !0;
                            document.querySelector(".box-update.show #company_email") && (l = checkMail("company_email", document.getElementById("company_email").getAttribute("data-error")));
                            var d = !0;
                            document.querySelector(".box-update.show #company_add") && (d = checkNull("company_add", document.getElementById("company_add").getAttribute("data-error"))),
                                r && o && a && n && c && s && i && l && d ? (hideerror(),
                                    document.querySelector('.register-form input[data-name="' + t + '"]').value = e,
                                    document.querySelector(".box-update.show .close").click()) : setTimeout(hideerror, 3e3)
                        }(this.parentNode.parentNode.querySelector("input").value, t),
                            !1
                    }
                ))
            }
        ))
}

function ShareSocial() {
    var e = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(window.location.href);
    if ("news-page" == IDPage)
        var t = document.querySelector(".item-facebook");
    else
        t = document.querySelector(".facebook");
    t && t.setAttribute("href", e);
    var r = document.querySelector(".zalo-share-button")
        , o = document.getElementById("zalo_js");
    if (r) {
        if (!o) {
            var a = document.createElement("script");
            a.id = "zalo_js",
                a.type = "text/javascript",
                a.src = "https://sp.zalo.me/plugins/sdk.js",
                document.body.appendChild(a)
        }
        o && setTimeout((function () {
                ZaloSocialSDK.reload()
            }
        ), 500)
    }
}

window.addEventListener("orientationchange", (function () {
        ResizeWindows()
    }
)),
    window.addEventListener("resize", (function () {
            ResizeWindows()
        }
    )),
    window.addEventListener("resize", debounce((function () {
            ResizeWindows()
        }
    ), 500));
var URL = document.URL;

function Done() {
    ResizeWindows(),
        scrollDown.classList.add("show"),
        rightHeader.classList.add("show"),
        titlePage.classList.add("show"),
        Body.classList.add("color-bg"),
        onScroll(),
    (document.querySelector(".sticky-story") || document.querySelector(".sticky-item") || document.querySelector(".wrap-right")) && S_Trigger(),
    slideBanner && bannerTrans(),
    "home-page" == IDPage && (Mask.querySelector(".logo-mask").classList.add("out"),
        Mask.querySelector(".mask-line").classList.add("out")),
    document.querySelector(".scroll-text") && document.querySelectorAll(".scroll-text").forEach((function (e) {
            e.classList.add("show")
        }
    )),
        gsap.timeline({
            onComplete: function () {
                Mask.classList.add("display-none")
            }
        }).to(overlayPath, {
            duration: .2,
            ease: "power2.in",
            attr: {
                d: "M 0 0 V 50 Q 50 0 100 50 V 0 z"
            }
        }).to(overlayPath, {
            duration: .6,
            ease: "power4",
            attr: {
                d: "M 0 0 V 0 Q 50 0 100 0 V 0 z"
            }
        }),
        setTimeout((function () {
                document.querySelector(".sec-02") && document.querySelector(".sec-02").classList.add("show"),
                allStories && allStories.classList.add("show"),
                bannerHome && addLeafs(bannerHome),
                    document.querySelector(".sec-01").classList.add("show"),
                    Loadx.classList.remove("display-block", "inplay")
            }
        ), 500)
}

document.querySelectorAll(".link-policy").forEach((function (e) {
        e.dataset.name = URL
    }
)),
    ResizeWindows(),
    Reset(),
    textBreak(),
    LinkPage(),
    NavClick(),
    Search(),
    ContentLoad(),
    LinkPopup(),
    ScrollBody(),
    window.addEventListener("load", (function () {
            document.querySelector(".slide-pro") && SlidePicture.proSlide(),
            document.querySelector(".slide-pro-two") && SlidePicture.proTwoSlide(),
            document.querySelector(".details-slider") && SlidePicture.picSlide(),
            document.querySelector(".full-slide") && SlidePicture.fullSlide()
        }
    )),
    "home-page" == IDPage ? (Mask.classList.add("show"),
        setTimeout((function () {
                Done()
            }
        ), 1400)) : setTimeout((function () {
            Done()
        }
    ), 500),
history.pushState && (window.onpopstate = function (e) {
        var t = document.querySelector(".content-popup")
            , r = document.querySelector(".close-popup")
            , o = document.querySelector(".close-video")
            , a = document.querySelector(".close-album")
            , n = document.querySelector(".close-pics");
        null != e.state && (document.querySelector('.link-popup[href="' + e.state.path + '"]') && !t && document.querySelector('.link-popup[href="' + e.state.path + '"]').click(),
        document.querySelector('.link-policy[data-url="' + e.state.path + '"]') && !t && document.querySelector('.link-policy[data-url="' + e.state.path + '"]').click()),
        o && o.click(),
        a && a.click(),
        n && n.click(),
        r && r.click()
    }
);
