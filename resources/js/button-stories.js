var UA = navigator.userAgent || navigator.userAgentData || navigator.appVersion || navigator.platform,
    HTML = document.documentElement, isFirefox = UA.match(/firefox|fxios/i),
    isIE = !!document.documentMode, isEdge = UA.match(/edg/i) || !isIE && !!window.StyleMedia && !isIE11,
    Mobile = window.matchMedia("(max-width: 1100px)");


function ResizeWindows() {

    var e = window.innerHeight / window.innerWidth;
    if (
        Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile"),
        e > .58 && !Mobile.matches ? Body.classList.add("ratio-4-3") : Body.classList.remove("ratio-4-3"),
        bannerHome || bannerInner
    )
    {
        var t = bannerHome ? bannerHome.offsetHeight : bannerInner.offsetHeight;
        allStories.style.setProperty("--top-height", t + "px")
    }
}

var Body = document.body,
    allStories = document.querySelector(".all-stories"),
    bannerHome = document.querySelector(".banner-home")

ResizeWindows()



