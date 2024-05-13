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
    searchForm && document.getElementById("Search").reset(), Subscrible && document.getElementById("formSubscrible").reset(), contactForm && document.getElementById("contactForm").reset(), commentForm && document.getElementById("commentForm").reset(), forgetForm && document.getElementById("formForget").reset(), registForm && document.getElementById("registInfo") && document.getElementById("registInfo").reset(), loginForm && document.getElementById("formLogin").reset(), document.getElementById("registInfoAndOrder") && document.getElementById("registInfoAndOrder").reset(), document.querySelectorAll(".input-text:not(.input-but), .input-area").forEach((function (e) {
        e.querySelector("input, textarea").value.length > 0 ? e.querySelector(".holder").classList.add("hide") : e.querySelector(".holder").classList.remove("hide")
    }))
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
