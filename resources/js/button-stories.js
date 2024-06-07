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


var timer, thatScroll, thatInner, thatSmall, Load = 0, Details = 0, First = 0, News = 0, XWidth = window.innerWidth,
YHeight = window.innerHeight, windscroll = window.pageYOffset, Body = document.body,
Container = document.querySelector(".container"),
IDPage = Container.getAttribute("id"), Mask = document.querySelector(".mask"),
overlayPath = document.querySelector(".overlay-path"),
Logo = document.querySelector(".logo"),
Language = document.querySelector(".language"),

formRowSearch = document.querySelector(".form-row-search"),
Nav = document.querySelector(".nav"), mainMenu = document.querySelector(".main-menu"),
navLi = document.querySelectorAll(".main-menu li"), hasSub = document.querySelectorAll(".has-sub"),
naItems = document.querySelectorAll(".nav-item"), subItems = document.querySelectorAll(".sub-menu-drop"),
overlayMenu = document.querySelector(".overlay-menu"), logoMenu = document.querySelector(".logo-menu"), Gohome = document.querySelector(".link-home"),
Gopage = document.querySelectorAll(".link-load, .link-home, .go-detail, .order, .goback"),
Gopop = document.querySelectorAll(".link-popup, .link-policy"), Footer = document.querySelector("footer"),
Bottom = document.querySelector(".bottom"), allStories = document.querySelector(".all-stories"),
wrapStories = document.querySelector(".wrap-all-stories"),
overlayClick = document.querySelector(".overlay-click"),
columnRotate = document.querySelector(".column-rotate"), secondMenu = document.querySelector(".second-menu"),
outerNavSec = document.querySelector(".section-outernav"), outerNav = document.querySelector(".outer-nav"),
clickHead = document.querySelectorAll(".sub-level"),
wrapView = document.querySelectorAll(".wrap-view-more, .box-news, .search-view-more"),
selectList = document.querySelector(".select-list"), selectHeader = document.querySelector(".select-header"),
selectBox = document.querySelector(".select-box"), breadCrumb = document.querySelector(".breadcrumb"),
bannerHome = document.querySelector(".banner-home"),
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
svgClose = '',
A = document.createElement("div"), B = document.createElement("div"), C = document.createElement("div"),
D = document.createElement("div"), E = document.createElement("div");
A.className = "all-pics", B.className = "all-album", C.className = "all-video", D.className = "overlay-dark", E.className = "loadx", Body.append(A, B, C, D, E);
var allPics = document.querySelector(".all-pics"), allAlbum = document.querySelector(".all-album"),
allVideo = document.querySelector(".all-video"), overlayDark = document.querySelector(".overlay-dark"),
Loadx = document.querySelector(".loadx");

var div_Nav = '<div class="click-nav nav-prev"></div><div class="click-nav nav-next"></div>'
    ,
    div_Pagi = '<div class="pagination"></div>'
    , div_n = document.createElement("div");
div_n.className = "nav-slideshow",
    div_n.innerHTML = div_Nav,
    bannerHome ? bannerHome.append(div_n) : bannerInner.append(div_n);
var div_p = document.createElement("div");
div_p.className = "nav-pagination",
    div_p.innerHTML = div_Pagi,
    bannerHome ? bannerHome.append(div_p) : bannerInner.append(div_p);

//import {FocusText, Reset, colEffect, hoverItem, ZoomPic, ThumbZoom, Cursor, itemZoom} from "./crocus-origin/option.js";
//import {hidemsg, hideerror, checkNull, checkUserName, checkMail, checkPhone, checkPass} from "./crocus-origin/validate.js";
import {ResizeWindows,textBreak,LinkPage,ScrollBody,onScroll,isFullScreenMode} from "./button.js";

function goToList() {
    var e = document.querySelectorAll(".item-list");
    Array.from(document.querySelectorAll(".sub-list button"), (function (t) {
        t.addEventListener("click", (function (t) {
            t.preventDefault(), RemoveClass(e);
            var o = this.dataset.target, s = document.querySelector('section[data-name="' + o + '"]').offsetTop;
            this.parentNode.classList.add("current"), thatScroll.scrollTo(s, {
                immediate: !1, duration: 3
            })
        }))
    }))
}

const Cursor = function (e, t, o) {
    if (!e.querySelector(".cursor-zoom")) {
        var s = document.createElement("div");
        s.className = "cursor-zoom", s.innerHTML = '<div class="cursor-bg"><span class="cursor-text" style="font-size:' + o + '">' + t + "</span></div>", e.append(s)
    }
    var a = e.querySelector(".cursor-zoom"), i = a.offsetWidth;
    e.querySelector(".is-active") ? e.querySelector(".cursor-bg").style.backgroundColor = e.querySelector(".is-active").dataset.color : e.querySelector(".cursor-bg").style.backgroundColor = "rgba(0,0,0,0.1)", e.addEventListener("mousemove", (function (e) {
        var t = e.clientX - this.getBoundingClientRect().left, o = e.clientY - this.getBoundingClientRect().top;
        gsap.to(a, {
            duration: .2, overwrite: "auto", x: t - i / 2, y: o - i / 2, ease: "none"
        })
    })), Array.from(document.querySelectorAll(".overlay-hover"), (function (e) {
        e.addEventListener("mouseenter", (function () {
            a.classList.add("active")
        })), e.addEventListener("mouseleave", (function () {
            a.classList.remove("active")
        }))
    }))
}, ThumbZoom = function (e) {
    WinScroll.stop(), Loadx.classList.contains("display-block") || Loadx.classList.add("display-block", "inplay"), overlayDark.classList.add("show");
    var t = document.createElement("div");
    t.className = "full", t.innerHTML = '<div class="img-cover"><img src=' + e + ' alt="pic-large"><span class="overlay-hover"></span></div><span class="click-span"></span><button class="close" aria-label="close"><svg viewBox="0 0 100 100"><circle class="c-rotate" cx="50" cy="50" r="48.5"></circle></svg></button>', allPics.append(t), document.querySelectorAll(".full").length > 1 && allPics.querySelector(".full:nth-child(n+1)").remove(), allPics.classList.add("show"), allPics.querySelector("img").addEventListener("load", (function (e) {
        t.classList.add("pinch-zoom"), e && itemZoom(), Cursor(t, "MOUSE WHEEL", "0.6rem"), allPics.querySelector(".close").classList.add("goleft"), Loadx.classList.remove("display-block", "inplay"), gsap.to(Loadx, {
            duration: .8, opacity: 1, ease: "none", onComplete: function () {
                allPics.querySelector("img").classList.add("fadein")
            }
        })
    }));
    var o = allPics.querySelector(".close");
    o.addEventListener("click", (function () {
        return Loadx.classList.remove("display-block", "inplay"), Body.classList.remove("zoom-active"), overlayDark.classList.remove("show"), gsap.to(t, {
            duration: .5, opacity: 0, ease: "none", onComplete: function () {
                allPics.classList.remove("show"), WinScroll.start(), allPics.innerHTML = ""
            }
        }), !1
    })), Mobile.matches || allPics.querySelector(".click-span").addEventListener("click", (function () {
        o.click()
    }))
}, ZoomPic = function () {
    document.querySelectorAll("img").forEach((function (t) {
        t.addEventListener("click", (function (o) {
            o.preventDefault(), this.classList.contains("zoom-pic") && e(t)
        }))
    }));
    var e = function (e) {
        WinScroll.stop(), Loadx.classList.contains("display-block") || Loadx.classList.add("display-block", "inplay");
        var t = document.createElement("div"), o = document.createElement("div"), s = document.createElement("button");
        s.className = "close", s.setAttribute("aria-label", "close"), s.innerHTML = svgClose, o.className = "img-cover", t.className = "full", t.innerHTML = o, allPics.classList.add("show"), allPics.append(t, s), document.querySelector(".details-content") ? overlayDark.classList.add("level-index-in") : overlayDark.classList.add("show");
        var a = e.src, i = document.createElement("img"), n = document.createElement("span");
        i.setAttribute("alt", "pic-large"), i.src = a, allPics.querySelector(".img-cover").append(i), allPics.querySelector(".full").append(n), allPics.querySelector("img").addEventListener("load", (function (e) {
            Mobile.matches && (t.classList.add("pinch-zoom"), itemZoom()), gsap.to(Loadx, {
                duration: .3, opacity: 1, ease: "none", onComplete: function () {
                    i.classList.add("fadein"), s.classList.add("goleft"), Loadx.classList.remove("display-block", "inplay")
                }
            })
        })), s.addEventListener("click", (function () {
            Loadx.classList.remove("display-block", "inplay"), gsap.to(t, {
                duration: .5, opacity: 0, ease: "none", onComplete: function () {
                    allPics.classList.remove("show"), document.querySelector(".details-content") ? overlayDark.classList.remove("level-index-in", "show") : (WinScroll.start(), overlayDark.classList.remove("show")), allPics.innerHTML = ""
                }
            })
        })), Mobile.matches || allPics.querySelector(".full span").addEventListener("click", (function () {
            s.click()
        }))
    }
}, FocusText = function () {
    var e = document.querySelectorAll(".input-text:not(.input-but), .input-area");
    e.forEach((function (e) {
        e.addEventListener("focusin", (function (e) {
            this.querySelector(".holder").classList.add("hide"), iOS
        })), e.addEventListener("focusout", (function (e) {
            this.querySelector("input, textarea").value.length <= 0 && this.querySelector(".holder").classList.remove("hide")
        }))
    })), e.forEach((function (e) {
        e.querySelector("input, textarea").value.length > 0 && e.querySelector(".holder").classList.add("hide")
    }))
}(), Reset = function () {

}, itemZoom = function () {
    pinchZoom({
        active: "zoom-active", transition: "zoom-transition", visible: "visible", zoom: "pinch-zoom"
    }, {
        scaleDefault: Mobile.matches ? 2 : 1.5,
        scaleMax: 2,
        scaleMin: 1,
        scrollDisable: !1,
        scaleDifference: .5,
        transitionDuration: 200,
        doubleclickDelay: 500
    })
};

function AlbumLoad(e, t) {
    var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    o.open("GET", e, !0), o.onreadystatechange = function () {
        if (4 == o.readyState && 200 == o.status) {
            allAlbum.innerHTML = o.responseText, (new LazyLoad).update();
            var e, s = allAlbum.querySelector(".album-load"), a = allAlbum.querySelector(".close-album");
            a.innerHTML = svgClose, iOS && s.addEventListener("gesturestart", (function (e) {
                e.preventDefault()
            }));
            var i = allAlbum.querySelectorAll(".pic-name > h3");
            i && i.forEach((function (e) {
                e.setAttribute("data-splitting", ""), Splitting()
            })), pinchZoom({
                active: "zoom-active", transition: "zoom-transition", visible: "visible", zoom: "pinch-zoom"
            }, {
                scaleDefault: Mobile.matches ? 2 : 1.5,
                scaleMax: 3,
                scaleMin: 1,
                scrollDisable: !0,
                transitionDuration: 200,
                doubleclickDelay: 400
            });
            var n = s.querySelector(".album-center"), l = new Splide(n, {
                gap: 0, perPage: 1, speed: 600, start: t, pagination: !0
            });
            l.on("mounted", (function () {
            })), l.on("moved", (function (e) {
                Array.from(document.querySelectorAll(".slidebox-item, .pic-name .char"), (function (e) {
                    e.classList.remove("this-view", "current", "show")
                }))
            })), l.on("active", (function (t) {
                var o;
                n.querySelector(".is-active").classList.add("this-view"), clearTimeout(e), i && (o = document.querySelector(".this-view")) && o.querySelectorAll(".char").forEach((function (t, o) {
                    e = setTimeout((function () {
                        t.classList.add("show")
                    }), 50 * (o + 1))
                }))
            })), l.mount(), gsap.to(s, {
                duration: 1, opacity: 1, ease: "none", onComplete: function () {
                    a.classList.add("toright"), n.classList.add("fadein"), Loadx.classList.remove("display-block", "inplay")
                }
            }), a.addEventListener("click", (function () {
                return gsap.to([s], {
                    duration: .5, opacity: 0, ease: "none", onComplete: function () {
                        allAlbum.classList.remove("show"), overlayDark.classList.remove("show"), Body.classList.remove("zoom-active"), WinScroll.start(), allAlbum.innerHTML = "", Body.classList.contains("fullscreen") && toggleFullScreen(), setTimeout((function () {
                            overlayDark.classList.add("display-none")
                        }), 800)
                    }
                }), !1
            })), makeFull(), document.querySelector(".all-album").addEventListener("wheel", (function (e) {
                if (!Mobile.matches) {
                    var t = document.querySelector(".all-album .slidebox-arrow-next"),
                        o = document.querySelector(".all-album .slidebox-arrow-prev"),
                        s = document.querySelector(".zoom-active");
                    e = window.event || e;
                    if (Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)) > 0) {
                        if (!doWheel) return;
                        s || (doWheel = !1, o.click(), setTimeout(turnWheelTouch, 500))
                    } else {
                        if (!doWheel) return;
                        s || (doWheel = !1, t.click(), setTimeout(turnWheelTouch, 500))
                    }
                }
            }), {
                passive: !0
            })
        }
    }
        , o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.send()
}

function VideoLoad(e, t) {
    var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    o.open("GET", e, !0), o.onreadystatechange = function () {
        if (4 == o.readyState && 200 == o.status) {
            if (allVideo.innerHTML = o.responseText, !document.getElementById("youtube_js")) {
                var e = document.createElement("script");
                e.id = "youtube_js", e.src = "https://www.youtube.com/iframe_api", document.body.appendChild(e)
            }
            var s = document.querySelector(".video-list"), a = s.querySelector(".video-wrap"),
                i = s.querySelector(".close-video");
            if (i.innerHTML = svgClose, void 0 !== t && "" !== t) {
                a.innerHTML = t
            }
            gsap.to(s, {
                duration: .5, opacity: 1, ease: "none", onComplete: function () {
                    i.classList.add("toright"), Loadx.classList.remove("display-block", "inplay")
                }
            }), i.addEventListener("click", (function () {
                gsap.to(allVideo, {
                    duration: .4, opacity: 0, ease: "none", onComplete: function () {
                        allVideo.classList.remove("show"), overlayDark.classList.remove("show"), WinScroll.start(), allVideo.innerHTML = "", setTimeout((function () {
                            overlayDark.classList.add("display-none")
                        }), 800)
                    }
                })
            }))
        }
    }
        , o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.send()
}

const colEffect = function (e) {
    var t = function () {
        function t(e) {
            this.DOM = {
                el: e
            }, this.isBottom = this.DOM.el.classList.contains("col-bottom"), this.layoutMove()
        }

        return t.prototype.layoutMove = function () {
            var t = this, o = {
                ty: 0, tx: 0
            };
            if (gsap.set(t.DOM.el, {
                y: 0, x: 0
            }), this.DOM.el.classList.contains("col-short")) var a = this.isBottom ? MathUtils.getRandomFloat(5, 40) : MathUtils.getRandomFloat(10, 40),
                i = this.isBottom ? MathUtils.getRandomFloat(10, 40) : MathUtils.getRandomFloat(5, 40); else if (this.DOM.el.classList.contains("col-x-y")) {
                a = this.isBottom ? MathUtils.getRandomFloat(5, 40) : MathUtils.getRandomFloat(10, 40), i = this.isBottom ? MathUtils.getRandomFloat(10, 40) : MathUtils.getRandomFloat(5, 40);
                var n = this.isBottom ? MathUtils.getRandomFloat(40, 5) : MathUtils.getRandomFloat(40, 10),
                    l = this.isBottom ? MathUtils.getRandomFloat(40, 10) : MathUtils.getRandomFloat(40, 5)
            } else a = this.isBottom ? MathUtils.getRandomFloat(5, 40) : MathUtils.getRandomFloat(40,   80), i = this.isBottom ? MathUtils.getRandomFloat(40, 80) : MathUtils.getRandomFloat(5, 80);
            Mobile.matches || Touch || window.requestAnimationFrame((function r() {
                1 == s.Columns && e.querySelector(".slide-current") ?
                    (
                        o.ty = MathUtils.lerp(o.ty, MathUtils.lineEq(t.isBottom ? -a : i, t.isBottom ? i : -a, winsize.height, 0, mousePos.y), .03),
                            o.tx = MathUtils.lerp(o.tx, MathUtils.lineEq(t.isBottom ? -n : l, t.isBottom ? l : -n, winsize.height, 0, mousePos.x), .03),
                            gsap.set(t.DOM.el, {
                                y: o.ty, x: o.tx
                            })
                    ) : gsap.set(t.DOM.el, {
                        y: 0, x: 0
                    }),
                Mobile.matches || Touch || window.requestAnimationFrame(r)
            }))
        }
            , t
    }();
    calcWinsize();
    var o = e.querySelector(".layout-move").querySelectorAll(".column"), s = (Array.from(o, (function (e) {
        new t(e)
    })), {
        Columns: !0
    });
    e.addEventListener("mousemove", (function (e) {
        return mousePos = getMousePos(e)
    })), e.addEventListener("touchmove", (function (e) {
        return mousePos = getMousePos(e)
    }), {
        passive: !1
    })
};
var wrapElements = function (e, t, o) {
    e.forEach((function (e) {
        var s = document.createElement(t);
        s.classList = o, e.parentNode.appendChild(s), s.appendChild(e)
    }))
}, hoverItem = function () {
    function e(e, t) {
        this.DOM = {
            el: e
        }, this.brandAttr = t, this.DOM.imgWrap = this.DOM.el.querySelector(".wrap-hover"), this.DOM.Img = this.DOM.imgWrap.querySelector(".wrap-hover-img"), this.brandAttr > 0 && (this.DOM.Logo = this.DOM.el.querySelector(".wrap-hover-logo")), this.DOM.Descript = this.DOM.el.querySelector(".box-txt"), this.DOM.Link = this.DOM.el.querySelector(".view-more"), this.editHeadingLayout(), this.initEvents()
    }

    var t = e.prototype;
    return t.initEvents = function () {
        var e = this;
        this.DOM.Link.addEventListener("mouseenter", (function () {
            return e.onMouseEnter()
        })), this.DOM.Link.addEventListener("mouseleave", (function () {
            return e.onMouseLeave()
        })), this.DOM.Link.addEventListener("touchstart", (function () {
            return e.onMouseEnter()
        })), this.DOM.Link.addEventListener("touchend", (function () {
            return e.onMouseLeave()
        })), this.DOM.Logo && (this.DOM.Logo.addEventListener("mouseenter", (function () {
            return e.onMouseEnter()
        })), this.DOM.Logo.addEventListener("mouseleave", (function () {
            return e.onMouseLeave()
        })), this.DOM.Logo.addEventListener("touchstart", (function () {
            return e.onMouseEnter()
        })), this.DOM.Logo.addEventListener("touchend", (function () {
            return e.onMouseLeave()
        })), this.DOM.Logo.addEventListener("click", (function () {
            e.DOM.Link.click()
        })))
    }
        , t.editHeadingLayout = function () {
        this.DOM.Heading = this.DOM.el.querySelector(".wrap-hover-head"), this.DOM.HeadingChars = this.DOM.Heading.querySelectorAll(".char"), this.DOM.HeadingWords = this.DOM.Heading.querySelectorAll(".title-news .text-chars"), this.DOM.HeadingChars && wrapElements(this.DOM.HeadingChars, "span", "char-wrap")
    }
        , t.onMouseEnter = function () {
        this.timelineHoverOut && this.timelineHoverOut.kill(), this.DOM.Link.parentNode.classList.add("hover"), this.timelineHoverIn = gsap.timeline().addLabel("start", 0).to(this.DOM.imgWrap, {
            duration: .8, ease: "power3", scale: .9, borderRadius: "5rem"
        }, "start").to(this.DOM.Img, {
            duration: .8, ease: "power3", scale: 1.1
        }, "start").to(this.DOM.Logo, {
            duration: .8, ease: "power3", scale: 1.05
        }, "start").to(this.DOM.Descript, {
            duration: .5, ease: "power3", y: "-20%"
        }, "start"), this.DOM.HeadingChars && gsap.timeline().addLabel("start", 0).to(this.DOM.HeadingChars, {
            duration: .2, color: "var(--color-highlight)", ease: "quad.in", x: "-103%"
        }, "start").to(this.DOM.HeadingChars, {
            duration: .7, ease: "expo", startAt: {
                x: "103%"
            }, x: "0%"
        }, "start+=0.2"), this.DOM.HeadingWords && gsap.timeline().addLabel("start", 0).to(this.DOM.HeadingWords, {
            duration: .5, ease: "quad.in", y: "-110%"
        }, "start").to(this.DOM.HeadingWords, {
            duration: .9, ease: "expo", startAt: {
                y: "110%"
            }, y: "0%"
        }, "start+=0.2")
    }
        , t.onMouseLeave = function () {
        this.timelineHoverIn && this.timelineHoverIn.kill(), this.DOM.Link.parentNode.classList.remove("hover"), this.timelineHoverOut = gsap.timeline().addLabel("start", 0).to(this.DOM.imgWrap, {
            duration: .6, ease: "power3", scale: 1, borderRadius: 0
        }, "start").to(this.DOM.Img, {
            duration: .8, ease: "power3", scale: 1
        }, "start").to(this.DOM.Logo, {
            duration: .8, ease: "power3", scale: 1
        }, "start").to(this.DOM.Descript, {
            duration: .5, ease: "power3", y: "0%"
        }, "start"), this.DOM.HeadingChars && gsap.timeline().addLabel("start", 0).to(this.DOM.HeadingChars, {
            duration: .2,
            color: this.brandAttr > 0 ? "var(--color-white)" : "var(--color-normal)",
            ease: "quad.in",
            x: "103%"
        }, "start").to(this.DOM.HeadingChars, {
            duration: .7, ease: "expo", startAt: {
                x: "-103%"
            }, x: "0%"
        }, "start+=0.2"), this.DOM.HeadingWords && gsap.timeline().addLabel("start", 0).to(this.DOM.HeadingWords, {
            duration: .5, ease: "quad.in", y: "110%"
        }, "start").to(this.DOM.HeadingWords, {
            duration: .9, ease: "expo", startAt: {
                y: "-110%"
            }, y: "0%"
        }, "start+=0.2")
    }
        , e
}();
export {FocusText, Reset, colEffect, hoverItem, ZoomPic, ThumbZoom, Cursor, itemZoom};

const hidemsg = function() {
    Loadx.classList.contains("display-block") && Loadx.classList.remove("display-block"),
    null != document.querySelector(".search-error") && document.querySelector(".search-error").classList.remove("show"),
    null != document.querySelector(".advance-error") && document.querySelector(".advance-error").classList.remove("show"),
    null != document.querySelector(".advance-error-category") && document.querySelector(".advance-error-category").classList.remove("show")
}
    , hideerror = function() {
    document.querySelectorAll(".form-error").forEach((function(e) {
            e.remove()
        }
    ))
};
function isNumber(e) {
    var t = e.which ? e.which : e.keyCode;
    return !(46 != t && t > 31 && (t < 48 || t > 57)) || (e.returnValue = !1,
        !1)
}
function serialize(e) {
    if (e && "FORM" === e.nodeName) {
        var t, n, r = [];
        for (t = e.elements.length - 1; t >= 0; t -= 1)
            if ("" !== e.elements[t].name)
                switch (e.elements[t].nodeName) {
                    case "INPUT":
                        switch (e.elements[t].type) {
                            case "text":
                            case "tel":
                            case "email":
                            case "hidden":
                            case "password":
                            case "button":
                            case "reset":
                            case "submit":
                                r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                                break;
                            case "checkbox":
                            case "radio":
                                e.elements[t].checked && r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                        }
                        break;
                    case "file":
                        break;
                    case "TEXTAREA":
                        r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                        break;
                    case "SELECT":
                        switch (e.elements[t].type) {
                            case "select-one":
                                r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value));
                                break;
                            case "select-multiple":
                                for (n = e.elements[t].options.length - 1; n >= 0; n -= 1)
                                    e.elements[t].options[n].selected && r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].options[n].value))
                        }
                        break;
                    case "BUTTON":
                        switch (e.elements[t].type) {
                            case "reset":
                            case "submit":
                            case "button":
                                r.push(e.elements[t].name + "=" + encodeURIComponent(e.elements[t].value))
                        }
                }
        return r.join("&")
    }
}
function checkEmail(e) {
    var t = document.getElementById(e);
    return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t.value.trim())
}
function checkNull(e, t, n) {
    var r = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == r || r == n) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.getElementById(e).after(o)
        }
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function isUserNameValid(e) {
    return !!/^[a-z0-9_\.]+$/.exec(e)
}
function checkUserName(e, t, n, r) {
    var o = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == o || o == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else
            (c = document.createElement("div")).className = "form-error",
                (a = document.createElement("div")).className = "form-error-content",
                a.id = "error_" + e,
                a.innerHTML = t,
                c.appendChild(a),
                document.getElementById(e).after(c);
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    if (0 == isUserNameValid(o)) {
        var c, a;
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = n;
        else
            (c = document.createElement("div")).className = "form-error",
                (a = document.createElement("div")).className = "form-error-content",
                a.id = "error_" + e,
                a.innerHTML = n,
                c.appendChild(a),
                document.getElementById(e).after(c);
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function checkMail(e, t, n) {
    if (!checkEmail(e)) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var r = document.createElement("div");
            r.className = "form-error";
            var o = document.createElement("div");
            o.className = "form-error-content",
                o.id = "error_" + e,
                o.innerHTML = t,
                r.appendChild(o),
                document.getElementById(e).after(r)
        }
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function checkSelect(e, t, n) {
    var r = null != document.getElementById(e) ? document.getElementById(e).value : "";
    if ("" == r || r == n || 0 == r || "null" == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.getElementById(e).after(o)
        }
        return !1
    }
    return !0
}
function checkCheckbox(e, t, n) {
    var r = !1;
    if (document.querySelectorAll("." + e).forEach((function(e) {
            1 == e.checked && (r = !0)
        }
    )),
    0 == r) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.querySelector(".radio-box li").after(o)
        }
        return !1
    }
    return !0
}
function CheckboxCondition(e, t, n) {
    if (document.getElementById(e) && 0 == document.getElementById(e).checked) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var r = document.createElement("div");
            r.className = "form-error";
            var o = document.createElement("div");
            o.className = "form-error-content",
                o.id = "error_" + e,
                o.innerHTML = t,
                r.appendChild(o),
                document.getElementById(e).parentElement.after(r)
        }
        return !1
    }
    return !0
}
document.querySelector(".search-error") && document.querySelector(".search-error").addEventListener("click", (function(e) {
        this.classList.remove("show")
    }
)),
document.querySelector(".advance-error") && document.querySelector(".advance-error").addEventListener("click", (function(e) {
        this.classList.remove("show")
    }
)),
document.querySelector(".advance-error-category") && document.querySelector(".advance-error-category").addEventListener("click", (function(e) {
        this.classList.remove("show")
    }
));
const checkPass = function(e) {
    var t = document.getElementById(e)
        , n = t.nextElementSibling
        , r = document.querySelector(".mess-pass")
        , o = document.querySelector(".letter")
        , c = document.querySelector(".capital")
        , a = document.querySelector(".number")
        , i = document.querySelector(".length")
        , d = /[a-z]/g
        , s = /[A-Z]/g
        , l = /[0-9]/g;
    function u(e) {
        e.value.length >= 8 && (e.value.match(d) && (o.classList.remove("invalid"),
            o.classList.add("valid")),
        e.value.match(s) && (c.classList.remove("invalid"),
            c.classList.add("valid")),
        e.value.match(l) && (a.classList.remove("invalid"),
            a.classList.add("valid")),
            i.classList.remove("invalid"),
            i.classList.add("valid"),
            r.classList.add("display-none"))
    }
    u(t);
    var m = function() {
        document.querySelectorAll(".invalid").length > 0 ? r.classList.remove("display-none") : r.classList.add("display-none")
    };
    t.onfocus = function() {
        m(),
            u(t)
    }
        ,
        t.onblur = function() {
            m(),
                u(t)
        }
        ,
        r.addEventListener("click", (function(e) {
                e.preventDefault(),
                    this.classList.add("display-none"),
                    this.classList.remove("show"),
                    u(t)
            }
        )),
        t.onkeyup = function() {
            t.value.match(d) ? (o.classList.remove("invalid"),
                o.classList.add("valid")) : (o.classList.remove("valid"),
                o.classList.add("invalid")),
                t.value.match(s) ? (c.classList.remove("invalid"),
                    c.classList.add("valid")) : (c.classList.remove("valid"),
                    c.classList.add("invalid")),
                t.value.match(l) ? (a.classList.remove("invalid"),
                    a.classList.add("valid")) : (a.classList.remove("valid"),
                    a.classList.add("invalid")),
                t.value.length >= 8 ? (i.classList.remove("invalid"),
                    i.classList.add("valid")) : (i.classList.remove("valid"),
                    i.classList.add("invalid"))
        }
        ,
        n.addEventListener("click", (function(e) {
                e.preventDefault(),
                    u(t)
            }
        ))
};
function checkPhone(e, t, n) {
    var r = null != document.getElementById(e) ? document.getElementById(e).value.trim() : "";
    if ("" == r || r == n || r.length < 10 || r.length > 11) {
        if (null != document.getElementById("error_" + e))
            document.getElementById("error_" + e).innerHTML = t;
        else {
            var o = document.createElement("div");
            o.className = "form-error";
            var c = document.createElement("div");
            c.className = "form-error-content",
                c.id = "error_" + e,
                c.innerHTML = t,
                o.appendChild(c),
                document.getElementById(e).after(o)
        }
        return document.querySelectorAll(".form-error").forEach((function(e) {
                e.addEventListener("click", (function(e) {
                        this.remove()
                    }
                ))
            }
        )),
            !1
    }
    return !0
}
function resetForm() {
    document.querySelectorAll(".alert").forEach((function(e) {
            e.remove()
        }
    )),
    overlayDark.classList.contains("show") && overlayDark.classList.remove("show")
}
var formatUsername = function(e) {
    return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/đ/g, "d")).replace(/Đ/g, "D")).replace(/[^A-Za-z0-9\-_]/g, "")
};
if (null != document.getElementById("formSubscrible")) {
    function validateSubscribe() {
        var e = !0;
        return checkMail("emailsubscribe", document.getElementById("emailsubscribe").getAttribute("data-error"), document.getElementById("emailsubscribe").getAttribute("data-default")) || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    function resetSubscribe() {
        document.getElementById("formSubscrible").reset(),
            document.querySelectorAll(".alert").forEach((function(e) {
                    e.remove()
                }
            )),
            document.querySelectorAll("#formSubscrible .holder").forEach((function(e) {
                    e.classList.remove("hide")
                }
            )),
            overlayDark.classList.remove("show")
    }
    document.getElementById("subscrible-submit").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateSubscribe()) {
                document.getElementById("subscrible-submit").setAttribute("disabled", "disabled"),
                    document.getElementById("subscrible-submit").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.formSubscrible);
                n.open("POST", t + "/SubscribeEmail/SendEmailSubscribe", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (n.readyState === XMLHttpRequest.DONE && 200 === n.status) {
                            Loadx.classList.remove("display-block");
                            var e = JSON.parse(n.responseText);
                            if (1 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "<strong>Chân thành cảm ơn Quý khách hàng</strong><br>đã đăng ký nhận thông tin từ <strong>Crocus Origin</strong>.<br>Chúng tôi đã tiếp nhận thông tin của bạn và sẽ phản hồi trong thời gian sớm nhất.";
                                else
                                    t = "<strong>Thank you very much<strong><br>for registering to receive information from <strong>Crocus Origin</strong>.<br>We have received your information and will respond as soon as possible.";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert success",
                                        (c = document.createElement("div")).className = "success-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".success").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetSubscribe()
                                        }
                                    ), 5e3),
                                    document.querySelector(".success").addEventListener("click", (function(e) {
                                            resetSubscribe()
                                        }
                                    ))
                            } else {
                                if (2 == e.result) {
                                    var r = document.getElementById("emailsubscribe").value;
                                    if ("vi" == HTML.lang)
                                        t = "Email <strong>" + r + "</strong> đã được đăng ký!";
                                    else
                                        t = "This email <strong>" + r + "</strong> is already!";
                                    if (!document.querySelector(".warning"))
                                        (o = document.createElement("div")).className = "alert warning",
                                            (c = document.createElement("div")).className = "warning-content",
                                            c.innerHTML = t,
                                            o.appendChild(c),
                                            document.body.appendChild(o);
                                    setTimeout((function() {
                                            document.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        document.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                                if (3 == e.result) {
                                    var o, c;
                                    r = document.getElementById("emailsubscribe").value;
                                    if ("vi" == HTML.lang)
                                        t = 'Hệ thống không nhận được email "<strong>' + r + '</strong>" của bạn!';
                                    else
                                        t = 'The system did not receive your email "<strong>' + r + '</strong>"!';
                                    if (!document.querySelector(".warning"))
                                        (o = document.createElement("div")).className = "alert warning",
                                            (c = document.createElement("div")).className = "warning-content",
                                            c.innerHTML = t,
                                            o.appendChild(c),
                                            document.body.appendChild(o);
                                    setTimeout((function() {
                                            document.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        document.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                            }
                            document.getElementById("subscrible-submit").removeAttribute("disabled"),
                                document.getElementById("subscrible-submit").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("formSubscrible").addEventListener("keydown", (function(e) {
                return 13 === e.keyCode && (e.preventDefault(),
                    document.getElementById("subscrible-submit").click()),
                    !1
            }
        ))
}
if (null != document.getElementById("contactForm")) {
    function validateContact() {
        var e = !0
            , t = checkMail("emailcontact", document.getElementById("emailcontact").getAttribute("data-error"), document.getElementById("emailcontact").getAttribute("data-default"))
            , n = checkNull("namecontact", document.getElementById("namecontact").getAttribute("data-error"), document.getElementById("namecontact").getAttribute("data-default"))
            , r = checkPhone("phonecontact", document.getElementById("phonecontact").getAttribute("data-error"), document.getElementById("phonecontact").getAttribute("data-default"));
        return n && r && t || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("contact-submit").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateContact()) {
                document.getElementById("contact-submit").setAttribute("disabled", "disabled"),
                    document.getElementById("contact-submit").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#contact-submit").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms.contactForm);
                r.open("POST", t + "/Contact/InsertContactInformation", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (200 == r.status && "" != r.responseText) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                window.location = n;
                            else if (3 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "Email này đã được đăng ký!";
                                else
                                    t = "This email is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (4 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Số điện thoại này đã được đăng ký!";
                                else
                                    t = "This phone number is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var o, c;
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("contact-submit").removeAttribute("disabled"),
                                document.getElementById("contact-submit").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
    null != document.getElementById("phonecontact") && document.getElementById("phonecontact").addEventListener("keypress", isNumber),
        document.getElementById("contactForm").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("contact-submit").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("commentForm")) {
    function validateComment() {
        var e = !0
            , t = checkMail("emailcomment", document.getElementById("emailcomment").getAttribute("data-error"), document.getElementById("emailcomment").getAttribute("data-default"));
        return checkNull("namecomment", document.getElementById("namecomment").getAttribute("data-error"), document.getElementById("namecomment").getAttribute("data-default")) && t || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("comment-submit").addEventListener("click", (function(e) {
            if (e.preventDefault(),
                document.querySelector(".btn-login-product"))
                return document.querySelector(".comment-message-notification").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".comment-message-notification").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (document.querySelector(".btn-check-buy-product"))
                return document.querySelector(".message-buy-product-notification").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".message-buy-product-notification").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (1 == validateComment()) {
                document.getElementById("comment-submit").setAttribute("disabled", "disabled"),
                    document.getElementById("comment-submit").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#comment-submit").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms.commentForm);
                r.open("POST", t + "/Product/InsertProductReviews", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else {
                                if ("vi" == HTML.lang)
                                    var t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                if (!document.querySelector(".warning")) {
                                    var o = document.createElement("div");
                                    o.className = "alert warning";
                                    var c = document.createElement("div");
                                    c.className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o)
                                }
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("comment-submit").removeAttribute("disabled"),
                                document.getElementById("comment-submit").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("commentForm").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("comment-submit").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("commentFormSupplier")) {
    function validateComment() {
        var e = !0
            , t = checkMail("emailcommentSupplier", document.getElementById("emailcommentSupplier").getAttribute("data-error"), document.getElementById("emailcommentSupplier").getAttribute("data-default"));
        return checkNull("namecommentSupplier", document.getElementById("namecommentSupplier").getAttribute("data-error"), document.getElementById("namecommentSupplier").getAttribute("data-default")) && t || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("comment-submit-supplier").addEventListener("click", (function(e) {
            if (e.preventDefault(),
                document.querySelector(".btn-login-product"))
                return document.querySelector(".comment-message-notification-supplier").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".comment-message-notification-supplier").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (1 == validateComment()) {
                document.getElementById("comment-submit-supplier").setAttribute("disabled", "disabled"),
                    document.getElementById("comment-submit-supplier").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#comment-submit-supplier").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms.commentFormSupplier);
                r.open("POST", t + "/Product/InsertSupplierReview", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else {
                                if ("vi" == HTML.lang)
                                    var t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                if (!document.querySelector(".warning")) {
                                    var o = document.createElement("div");
                                    o.className = "alert warning";
                                    var c = document.createElement("div");
                                    c.className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o)
                                }
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("comment-submit-supplier").removeAttribute("disabled"),
                                document.getElementById("comment-submit-supplier").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("commentFormSupplier").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("comment-submit-supplier").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("register-page")) {
    var Checkpass = new checkPass("cus_password");
    function validateRegistInfo() {
        var e = !0
            , t = checkMail("Email", document.getElementById("Email").getAttribute("data-error"), document.getElementById("Email").getAttribute("data-default"))
            , n = checkNull("FullName", document.getElementById("FullName").getAttribute("data-error"), document.getElementById("FullName").getAttribute("data-default"))
            , r = checkPhone("Phone", document.getElementById("Phone").getAttribute("data-error"), document.getElementById("Phone").getAttribute("data-default"))
            , o = checkSelect("center-province", document.getElementById("center-province").getAttribute("data-error"), document.getElementById("center-province").getAttribute("data-default"))
            , c = checkSelect("center-district", document.getElementById("center-district").getAttribute("data-error"), document.getElementById("center-district").getAttribute("data-default"))
            , a = checkSelect("wards", document.getElementById("wards").getAttribute("data-error"), document.getElementById("wards").getAttribute("data-default"))
            , i = checkNull("Address", document.getElementById("Address").getAttribute("data-error"), document.getElementById("Address").getAttribute("data-default"))
            , d = checkNull("cus_username", document.getElementById("cus_username").getAttribute("data-error"), document.getElementById("cus_username").getAttribute("data-default"))
            , s = checkNull("cus_password", document.getElementById("cus_password").getAttribute("data-error"), document.getElementById("cus_password").getAttribute("data-default"))
            , l = CheckboxCondition("agree", document.getElementById("agree").getAttribute("data-error"), document.getElementById("agree").getAttribute("data-default"));
        if (!(n && r && t && o && c && a && i && d && s && l) && (e = !1,
            document.querySelector(".form-error"))) {
            document.querySelector("#registInfo > .form-content").addEventListener("click", (function(e) {
                    e.preventDefault(),
                        hideerror()
                }
            ));
            var u = document.querySelector(".form-error").parentNode.offsetTop;
            ScrollTop(u)
        }
        return 1 == s && document.querySelectorAll(".invalid").length > 0 && document.querySelector(".mess-pass").classList.add("show"),
            e
    }
    document.getElementById("btnRegister").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateRegistInfo() && 0 == document.querySelectorAll(".invalid").length) {
                document.getElementById("btnRegister").setAttribute("disabled", "disabled"),
                    document.getElementById("btnRegister").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#btnRegister").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , o = serialize(document.forms["regist-info"]);
                r.open("POST", t + "/AccountMember/RegisterMember", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (200 == r.status && "" != r.responseText) {
                            var e = JSON.parse(r.responseText);
                            if (Loadx.classList.remove("display-block"),
                            1 == e.result)
                                window.location = n;
                            else if (2 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "Tài khoản này đã được đăng ký!";
                                else
                                    t = "This account is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (3 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Email này đã được đăng ký!";
                                else
                                    t = "This email is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (4 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Số điện thoại này đã được đăng ký!";
                                else
                                    t = "This phone number is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (8 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Mật khẩu nhập vào lớn hơn hoặc bằng 8 ký tự và nhỏ hơn hoặc bằng 20 ký tự!";
                                else
                                    t = "The password entered is 8 characters or more and less than or equal to 20 characters!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (11 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Tên đăng nhập phải theo định dạng: chữ viết liền không dấu, không chứa ký tự đặc biệt, không chứa khoảng trắng.!";
                                else
                                    t = "Username must follow the format: unsigned letters, no special characters, no spaces.!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 5e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var o, c;
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("btnRegister").removeAttribute("disabled"),
                                document.getElementById("btnRegister").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
    null != document.getElementById("Phone") && document.getElementById("Phone").addEventListener("keypress", isNumber),
        document.getElementById("registInfo").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btnRegister").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("formLogin")) {
    function validateformLogin() {
        var e = !0
            , t = checkNull("loginName", document.getElementById("loginName").getAttribute("data-error"), document.getElementById("loginName").getAttribute("data-default"))
            , n = checkNull("loginPass", document.getElementById("loginPass").getAttribute("data-error"), document.getElementById("loginPass").getAttribute("data-default"));
        return t && n || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    document.getElementById("loginBut").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateformLogin()) {
                document.getElementById("loginBut").setAttribute("disabled", "disabled"),
                    document.getElementById("loginBut").style.pointerEvents = "none";
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.loginform);
                n.open("POST", t + "/AccountMember/LoginMember", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (200 == n.status && "" != n.responseText) {
                            var e = JSON.parse(n.responseText);
                            if (1 == e.result)
                                window.location = e.UrlReference;
                            else if (2 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "Tài khoản này đang bị khóa!";
                                else
                                    t = "This account is locked!";
                                if (!loginBox.querySelector(".warning"))
                                    (r = document.createElement("div")).className = "alert warning",
                                        (o = document.createElement("div")).className = "warning-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        loginBox.appendChild(r);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if (0 == e.result) {
                                if ("vi" == HTML.lang)
                                    t = "Thông tin không hợp lệ.";
                                else
                                    t = "Invalid information.";
                                if (!loginBox.querySelector(".warning"))
                                    (r = document.createElement("div")).className = "alert warning",
                                        (o = document.createElement("div")).className = "warning-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        loginBox.appendChild(r);
                                setTimeout((function() {
                                        loginBox.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var r, o;
                                if (!loginBox.querySelector(".warning"))
                                    (r = document.createElement("div")).className = "alert warning",
                                        (o = document.createElement("div")).className = "warning-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        loginBox.appendChild(r);
                                setTimeout((function() {
                                        loginBox.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("loginBut").removeAttribute("disabled"),
                                document.getElementById("loginBut").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("formLogin").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("loginBut").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("formForget")) {
    function validateForgotPassword() {
        var e = !0;
        return checkMail("emailforget", document.getElementById("emailforget").getAttribute("data-error"), document.getElementById("emailforget").getAttribute("data-default")) || (e = !1,
            setTimeout(hideerror, 2e3)),
            e
    }
    function resetForgotPassword() {
        document.getElementById("formForget").reset(),
            document.querySelectorAll(".alert").forEach((function(e) {
                    e.remove()
                }
            )),
            document.querySelectorAll("#formForget .holder").forEach((function(e) {
                    e.classList.remove("hide")
                }
            )),
            overlayDark.classList.remove("show")
    }
    document.getElementById("btn-forget-password").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateForgotPassword()) {
                document.getElementById("btn-forget-password").setAttribute("disabled", "disabled"),
                    document.getElementById("btn-forget-password").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.formForget);
                n.open("POST", t + "/AccountMember/ForgotPassword", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (n.readyState === XMLHttpRequest.DONE && 200 === n.status) {
                            Loadx.classList.remove("display-block");
                            var e = JSON.parse(n.responseText);
                            if (1 == e.result) {
                                if ("vi" == HTML.lang)
                                    var t = "<strong>Gửi thông tin lấy lại mật khẩu thành công</strong><br>Chúng tôi đã gửi thông tin thay đổi mật khẩu tới email <strong> " + document.getElementById("emailforget").value + " </strong>.<br>Hãy kiểm tra email để xem lại thông tin đăng nhập của bạn.";
                                else
                                    t = "<strong>Send information to retrieve password successfully</strong><br>We have sent password change information to email <strong> " + document.getElementById("emailforget").value + " </strong>.<br>Please check your email to review your login information.";
                                if (!document.querySelector(".success"))
                                    (r = document.createElement("div")).className = "alert success",
                                        (o = document.createElement("div")).className = "success-content",
                                        o.innerHTML = t,
                                        r.appendChild(o),
                                        document.body.appendChild(r);
                                document.querySelector(".close-login").click(),
                                    setTimeout((function() {
                                            document.querySelector(".success").classList.add("show")
                                        }
                                    ), 200),
                                    setTimeout((function() {
                                            resetForgotPassword()
                                        }
                                    ), 1e4),
                                    document.querySelector(".success").addEventListener("click", (function(e) {
                                            resetForgotPassword()
                                        }
                                    ))
                            } else {
                                if (2 == e.result) {
                                    if ("vi" == HTML.lang)
                                        t = "Thông tin không hợp lệ.";
                                    else
                                        t = "Invalid information.";
                                    if (!loginBox.querySelector(".warning"))
                                        (r = document.createElement("div")).className = "alert warning",
                                            (o = document.createElement("div")).className = "warning-content",
                                            o.innerHTML = t,
                                            r.appendChild(o),
                                            loginBox.appendChild(r);
                                    setTimeout((function() {
                                            loginBox.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                                if (3 == e.result) {
                                    var r, o, c = document.getElementById("emailforget").value;
                                    if ("vi" == HTML.lang)
                                        t = 'Hệ thống không nhận được email "<strong>' + c + '</strong>" của bạn!';
                                    else
                                        t = 'The system did not receive your email "<strong>' + c + '</strong>"!';
                                    if (!loginBox.querySelector(".warning"))
                                        (r = document.createElement("div")).className = "alert warning",
                                            (o = document.createElement("div")).className = "warning-content",
                                            o.innerHTML = t,
                                            r.appendChild(o),
                                            loginBox.appendChild(r);
                                    setTimeout((function() {
                                            loginBox.querySelector(".warning").classList.add("show")
                                        }
                                    ), 200),
                                        setTimeout((function() {
                                                resetSubscribe()
                                            }
                                        ), 3e3),
                                        loginBox.querySelector(".warning").addEventListener("click", (function(e) {
                                                resetSubscribe()
                                            }
                                        ))
                                }
                            }
                            document.getElementById("btn-forget-password").removeAttribute("disabled"),
                                document.getElementById("btn-forget-password").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("formForget").addEventListener("keydown", (function(e) {
                return 13 === e.keyCode && (e.preventDefault(),
                    document.getElementById("btn-forget-password").click()),
                    !1
            }
        ))
}
if (null != document.getElementById("passChange")) {
    Checkpass = new checkPass("new_pass");
    function validatePassChange() {
        var e = !0
            , t = checkNull("current_pass", document.getElementById("current_pass").getAttribute("data-error"), document.getElementById("current_pass").getAttribute("data-default"))
            , n = checkNull("new_pass", document.getElementById("new_pass").getAttribute("data-error"), document.getElementById("new_pass").getAttribute("data-default"))
            , r = checkNull("retype_pass", document.getElementById("retype_pass").getAttribute("data-error"), document.getElementById("retype_pass").getAttribute("data-default"));
        return t && n && r || (e = !1,
            setTimeout(hideerror, 2e3)),
        1 == n && document.querySelectorAll(".invalid").length > 0 && document.querySelector(".mess-pass").classList.add("show"),
            e
    }
    function resetForgotPassword() {
        document.querySelectorAll(".alert").forEach((function(e) {
                e.remove()
            }
        )),
            document.querySelectorAll(".form-error").forEach((function(e) {
                    e.remove()
                }
            ))
    }
    document.getElementById("btnChange").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validatePassChange() && 0 == document.querySelectorAll(".invalid").length) {
                document.getElementById("btnChange").setAttribute("disabled", "disabled"),
                    document.getElementById("btnChange").style.pointerEvents = "none",
                    Loadx.classList.add("display-block");
                var t = getDirect
                    , n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                    , r = serialize(document.forms.passChange);
                n.open("POST", t + "AccountMember/ChangePasswordMember", !0),
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.onreadystatechange = function() {
                        if (n.readyState === XMLHttpRequest.DONE && 200 === n.status) {
                            Loadx.classList.remove("display-block");
                            var e = n.responseText;
                            if ("1" == e) {
                                if ("vi" == HTML.lang)
                                    var t = "<strong>Đổi mật khẩu thành công!</strong><br>";
                                else
                                    t = "<strong>Change password successfully!</strong><br>";
                                if (!document.querySelector(".success")) {
                                    var r = document.createElement("div");
                                    r.className = "alert success",
                                        (c = document.createElement("div")).className = "success-content",
                                        c.innerHTML = t,
                                        r.appendChild(c),
                                        document.body.appendChild(r)
                                }
                                document.querySelector(".close-login").click(),
                                    setTimeout((function() {
                                            document.querySelector(".success").classList.add("show")
                                        }
                                    ), 200),
                                    setTimeout((function() {
                                            resetForgotPassword()
                                        }
                                    ), 3e3),
                                    document.querySelector(".success").addEventListener("click", (function(e) {
                                            resetForgotPassword()
                                        }
                                    )),
                                    setTimeout((function() {
                                            document.querySelector(".password-form .close").click()
                                        }
                                    ), 4e3)
                            } else {
                                if ("4" == e) {
                                    if ("vi" == HTML.lang)
                                        t = "Mật khẩu lập lại không khớp!";
                                    else
                                        t = "Repeat password do not match!";
                                    (o = document.createElement("div")).className = "form-error",
                                        (c = document.createElement("div")).className = "form-error-content",
                                        c.id = "error_new_pass",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.getElementById("new_pass").after(o),
                                        setTimeout((function() {
                                                resetForgotPassword()
                                            }
                                        ), 3e3)
                                }
                                if ("7" == e) {
                                    if ("vi" == HTML.lang)
                                        t = "Mật khẩu cũ không chính xác!";
                                    else
                                        t = "Old password is incorrect!";
                                    var o, c;
                                    (o = document.createElement("div")).className = "form-error",
                                        (c = document.createElement("div")).className = "form-error-content",
                                        c.id = "error_current_pass",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.getElementById("current_pass").after(o),
                                        setTimeout((function() {
                                                resetForgotPassword()
                                            }
                                        ), 3e3)
                                }
                            }
                            document.getElementById("btnChange").removeAttribute("disabled"),
                                document.getElementById("btnChange").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    n.send(r)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("passChange").addEventListener("keydown", (function(e) {
                return 13 === e.keyCode && (e.preventDefault(),
                    document.getElementById("btnChange").click()),
                    !1
            }
        ))
}
if (null != document.getElementById("cart-page") && null != document.getElementById("registInfo")) {
    function validateCartInfo() {
        var e = !0
            , t = checkNull("FullName", document.getElementById("FullName").getAttribute("data-error"), document.getElementById("FullName").getAttribute("data-default"))
            , n = checkPhone("Phone", document.getElementById("Phone").getAttribute("data-error"), document.getElementById("Phone").getAttribute("data-default"))
            , r = checkMail("Email", document.getElementById("Email").getAttribute("data-error"), document.getElementById("Email").getAttribute("data-default"))
            , o = checkSelect("center-province", document.getElementById("center-province").getAttribute("data-error"), document.getElementById("center-province").getAttribute("data-default"))
            , c = checkSelect("center-district", document.getElementById("center-district").getAttribute("data-error"), document.getElementById("center-district").getAttribute("data-default"))
            , a = checkSelect("wards", document.getElementById("wards").getAttribute("data-error"), document.getElementById("wards").getAttribute("data-default"))
            , i = checkNull("Address", document.getElementById("Address").getAttribute("data-error"), document.getElementById("Address").getAttribute("data-default"))
            , d = CheckboxCondition("agree", document.getElementById("agree").getAttribute("data-error"), document.getElementById("agree").getAttribute("data-default"));
        if (!(t && n && r && o && c && a && i && d) && (e = !1,
            document.querySelector(".form-error"))) {
            var s = document.querySelector(".form-error").parentNode.offsetTop;
            ScrollTop(s),
                document.querySelector("#registInfo .form-content").addEventListener("click", (function(e) {
                        e.preventDefault(),
                            hideerror()
                    }
                ))
        }
        return e
    }
    document.getElementById("btnConfirm") && document.getElementById("btnConfirm").addEventListener("click", (function(e) {
            if (e.preventDefault(),
                document.querySelector(".btn-confirm-info"))
                return document.querySelector(".cart-message-notification").classList.add("show"),
                    setTimeout((function() {
                            document.querySelector(".cart-message-notification").classList.remove("show")
                        }
                    ), 1500),
                    !1;
            if (1 == validateCartInfo()) {
                document.getElementById("btnConfirm").setAttribute("disabled", "disabled"),
                    document.getElementById("btnConfirm").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#btnConfirm").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                document.getElementById("hdShoppingCart").value = localStorage.getItem("shoppingCart");
                var o = serialize(document.forms.registInfo);
                r.open("POST", t + "/Cart/AddOrder", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = r.responseText;
                            if (Loadx.classList.remove("display-block"),
                            "1" == e)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else {
                                if ("vi" == HTML.lang)
                                    var t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                if (!document.querySelector(".warning")) {
                                    var o = document.createElement("div");
                                    o.className = "alert warning";
                                    var c = document.createElement("div");
                                    c.className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o)
                                }
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("btnConfirm").removeAttribute("disabled"),
                                document.getElementById("btnConfirm").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
        document.getElementById("registInfo").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btnConfirm").click(),
                    !1
            }
        ))
}
if (null != document.getElementById("registInfoAndOrder")) {
    Checkpass = new checkPass("cus_password");
    function validateregistInfoAndOrder() {
        var e = !0
            , t = checkMail("Email", document.getElementById("Email").getAttribute("data-error"), document.getElementById("Email").getAttribute("data-default"))
            , n = checkNull("FullName", document.getElementById("FullName").getAttribute("data-error"), document.getElementById("FullName").getAttribute("data-default"))
            , r = checkPhone("Phone", document.getElementById("Phone").getAttribute("data-error"), document.getElementById("Phone").getAttribute("data-default"))
            , o = checkSelect("center-province", document.getElementById("center-province").getAttribute("data-error"), document.getElementById("center-province").getAttribute("data-default"))
            , c = checkSelect("center-district", document.getElementById("center-district").getAttribute("data-error"), document.getElementById("center-district").getAttribute("data-default"))
            , a = checkSelect("wards", document.getElementById("wards").getAttribute("data-error"), document.getElementById("wards").getAttribute("data-default"))
            , i = checkNull("Address", document.getElementById("Address").getAttribute("data-error"), document.getElementById("Address").getAttribute("data-default"))
            , d = checkNull("cus_username", document.getElementById("cus_username").getAttribute("data-error"), document.getElementById("cus_username").getAttribute("data-default"))
            , s = checkNull("cus_password", document.getElementById("cus_password").getAttribute("data-error"), document.getElementById("cus_password").getAttribute("data-default"))
            , l = CheckboxCondition("agree", document.getElementById("agree").getAttribute("data-error"), document.getElementById("agree").getAttribute("data-default"));
        if (!(n && r && t && o && c && a && i && d && s && l) && (e = !1,
            document.querySelector(".form-content .form-error"))) {
            var u = document.querySelector(".append-cart").offsetHeight + window.innerHeight / 2
                , m = document.querySelector(".form-error").parentNode.parentNode.offsetTop + u;
            ScrollTop(m),
                document.querySelector("#registInfoAndOrder .form-content").addEventListener("click", (function(e) {
                        e.preventDefault(),
                            hideerror()
                    }
                ))
        }
        return 1 == s && document.querySelectorAll(".invalid").length > 0 && document.querySelector(".mess-pass").classList.add("show"),
            e
    }
    document.getElementById("btnAddOrderAndRegister") && document.getElementById("btnAddOrderAndRegister").addEventListener("click", (function(e) {
            if (e.preventDefault(),
            1 == validateregistInfoAndOrder() && 0 == document.querySelectorAll(".invalid").length) {
                document.getElementById("btnAddOrderAndRegister").setAttribute("disabled", "disabled"),
                    document.getElementById("btnAddOrderAndRegister").style.pointerEvents = "none",
                    Loadx.classList.add("display-block"),
                    overlayDark.classList.add("show");
                var t = getDirect
                    , n = document.querySelector("#btnAddOrderAndRegister").getAttribute("data-page")
                    , r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                document.getElementById("hdShoppingCart").value = localStorage.getItem("shoppingCart");
                var o = serialize(document.forms.registInfoAndOrder);
                r.open("POST", t + "/Cart/AddOrderAndRegister", !0),
                    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE && 200 === r.status) {
                            var e = r.responseText;
                            if (Loadx.classList.remove("display-block"),
                            "1" == e)
                                localStorage.removeItem("shoppingCart"),
                                    window.location = n;
                            else if ("10" == e) {
                                if ("vi" == HTML.lang)
                                    var t = "Tài khoản này đã được đăng ký!";
                                else
                                    t = "This account is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("11" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Email này đã được đăng ký!";
                                else
                                    t = "This email is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("12" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Số điện thoại này đã được đăng ký!";
                                else
                                    t = "This phone number is already!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("13" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Tên đăng nhập phải theo định dạng: chữ viết liền không dấu, không chứa ký tự đặc biệt, không chứa khoảng trắng.!";
                                else
                                    t = "Username must follow the format: unsigned letters, no special characters, no spaces.!";
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 5e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else if ("8" == e) {
                                if ("vi" == HTML.lang)
                                    t = "Mật khẩu nhập vào lớn hơn hoặc bằng 8 ký tự và nhỏ hơn hoặc bằng 20 ký tự!";
                                else
                                    t = "The password entered is 8 characters or more and less than or equal to 20 characters!";
                                (o = document.createElement("div")).className = "alert warning",
                                    (c = document.createElement("div")).className = "warning-content",
                                    c.innerHTML = t,
                                    o.appendChild(c),
                                    document.body.appendChild(o),
                                    setTimeout((function() {
                                            document.querySelector(".warning").classList.add("show")
                                        }
                                    ), 500),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 4e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            } else {
                                if ("vi" == HTML.lang)
                                    t = "Hệ thống không nhận được thông tin của bạn!";
                                else
                                    t = "The system did not receive your information!";
                                var o, c;
                                if (!document.querySelector(".warning"))
                                    (o = document.createElement("div")).className = "alert warning",
                                        (c = document.createElement("div")).className = "warning-content",
                                        c.innerHTML = t,
                                        o.appendChild(c),
                                        document.body.appendChild(o);
                                setTimeout((function() {
                                        document.querySelector(".warning").classList.add("show")
                                    }
                                ), 200),
                                    setTimeout((function() {
                                            resetForm()
                                        }
                                    ), 3e3),
                                    document.querySelector(".warning").addEventListener("click", (function(e) {
                                            resetForm()
                                        }
                                    ))
                            }
                            document.getElementById("btnAddOrderAndRegister").removeAttribute("disabled"),
                                document.getElementById("btnAddOrderAndRegister").style.pointerEvents = "auto"
                        }
                    }
                    ,
                    r.send(o)
            }
            return document.querySelectorAll(".form-error").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                            this.remove()
                        }
                    ))
                }
            )),
                !1
        }
    )),
    null != document.getElementById("Phone") && document.getElementById("Phone").addEventListener("keypress", isNumber),
        document.getElementById("registInfoAndOrder").addEventListener("keydown", (function(e) {
                return document.getElementsByTagName("textarea") === document.activeElement && 13 === e.keyCode && document.getElementById("btnAddOrderAndRegister").click(),
                    !1
            }
        ))
}
export {hidemsg, hideerror, checkNull, checkUserName, checkMail, checkPhone, checkPass};



function bannerTrans() {
    var e = function (e) {
        this.DOM = {
            el: e
        },

        this.DOM.el.querySelector(" .wrap-view-more") && (this.DOM.Link = this.DOM.el.querySelector(" .wrap-view-more"),
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

        }

        var a = t.prototype;
        return a.init = function () {
            var e = this;
            this.DOM.slides[this.current].classList.add("slide-current"),
                gsap.set(this.slides[this.current].DOM.imgWrap, {
                    clipPath: this.config.clipPath.initial
                }),

                setTimeout((function () {

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

    }()), n = new t(document.querySelector(".nav-slideshow"));
    i.slidesTotal > 1 && (n.DOM.ctrls.next.addEventListener("click", (function (e) {
            return e.preventDefault(),
                e.stopPropagation(),
                i.next()
        }
    )))
}



function Search() {
    var e = document.querySelector(".seach-top")

        , t = document.querySelector(".seach-top")
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

    }


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

}

function ContentLoad() {

    var e = Container.dataset.second
        , t = Container.dataset.details;

    if (document.querySelector(".nav li.current a")) {
        var n = document.querySelector(".nav li.current a").getAttribute("href");
        document.querySelectorAll(".link-policy").forEach((function (e) {
                e.dataset.name = n
            }
        ))
    }
    if ("home-page" !== IDPage && (Logo.classList.add("onclick"),
        Logo.addEventListener("click", (function () {

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
        
            Body.classList.add("detail-pro"),
            Logo.classList.add("color-normal"),


            allStories.classList.add("white");
        var i = document.querySelector(".details-info .product-title h2").innerText;

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


        bannerInner.classList.add("full-h", "color-background", "no-before", "no-after")),
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
       
            CustomSelect(),
            loginBut.classList.add("active", "current");
        var v = document.querySelector(".register-page");
        addLeafs(v)
    }
    if ("cart-page" == IDPage) {
       
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
            
            CustomSelect();
        v = document.querySelector(".account-page");
        addLeafs(v),
            checkUpdate()
    }
    if ("list-order-page" == IDPage) {
        if (document.querySelector('.user-select-form li a[data-name= "' + IDPage + '"]').classList.add("active"),
           
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
            loginBut.classList.add("active");
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
        loginBut.classList.add("active"));
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



var URL = document.URL;

function Done() {
    ResizeWindows(),
       


        Body.classList.add("color-bg"),
        onScroll(),

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
                bannerHome ,
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
    ), 500)
;



