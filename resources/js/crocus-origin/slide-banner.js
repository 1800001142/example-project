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
        },
            e
    }()
        , i = new (function () {
        // function t(t) {
        //     var i = this;
        //     this.DOM = {
        //         el: t
        //     },
        //         this.DOM.slides = Array.from(this.DOM.el.querySelectorAll(".slide")),
        //         this.slides = [],
        //         this.DOM.slides.forEach((function (t) {
        //                 return i.slides.push(new e(t))
        //             }
        //         )),
        //         this.slidesTotal = this.slides.length,
        //         this.current = 0,
        //     1 == this.slidesTotal && this.DOM.el.parentNode.querySelector(".slide-caption").classList.add("of-page"),
        //     this.slidesTotal > 1 && bannerInner && (Body.classList.add("sx"),
        //         bannerInner.classList.add("sx")),
        //         bannerHome ? this.config = {
        //             clipPath: {
        //                 initial: "circle(58% at 70% 50%)",
        //                 final: "circle(15% at 70% 50%)",
        //                 hover: "circle(20% at 80% 50%)"
        //             }
        //         } : this.config = {
        //             clipPath: {
        //                 initial: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%)",
        //                 final: "polygon(95% 10%, 95% 50%, 95% 85%, 5% 85%, 5% 50%, 5% 10%)",
        //                 hover: "polygon(95% 10%, 95% 50%, 95% 85%, 5% 85%, 5% 50%, 5% 10%)"
        //             }
        //         },
        //         this.init(),
        //         this.hover()
        // }

        var a = t.prototype;
        return a.init = function () {
            var e = this;
            this.DOM.slides[this.current].classList.add("slide-current"),
                gsap.set(this.slides[this.current].DOM.imgWrap, {
                    clipPath: this.config.clipPath.initial
                }),
                firstItem.querySelector(".slide-img").classList.add("show"),
                setTimeout((function () {
                        firstItem.querySelector(".slide-caption").classList.add("show"),
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
                i && (i.addEventListener("mouseenter", (function () {
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
                )),
                    i.addEventListener("mouseleave", (function () {
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
                    )))
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
