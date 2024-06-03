$('.slider-for').slick({
    slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3, slidesToScroll: 1, asNavFor: '.slider-for', dots: true, focusOnSelect: true
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});
var timer, thatScroll, thatInner, thatSmall, Load = 0, Details = 0, First = 0, News = 0, XWidth = window.innerWidth,
    YHeight = window.innerHeight, windscroll = window.pageYOffset, Body = document.body,
    Container = document.querySelector(".container"), titlePage = document.querySelector(".title-page"),
    Mask = document.querySelector(".mask"),
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
    wrapStories = document.querySelector(".wrap-all-stories"),
    overlayClick = document.querySelector(".overlay-click"),
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
var slideBanner = document.querySelector(".slide-banner");
var scrollText = document.querySelectorAll(".scroll-text");
var functionListerClick = function () {
    let current = {
        slideInfo: document.querySelector(".slide-info[data-current]"),
        slideBg: document.querySelector(".slide__bg[data-current]")
    }
    let previous = {
        slideInfo: document.querySelector(".slide-info[data-previous]"),
        slideBg: document.querySelector(".slide__bg[data-previous]")
    };
    let next = {
        slideInfo: document.querySelector(".slide-info[data-next]"),
        slideBg: document.querySelector(".slide__bg[data-next]")
    };

    Object.values(current).map((el) => el && el.removeAttribute("data-current"));
    Object.values(previous).map((el) => el && el.removeAttribute("data-previous"));
    Object.values(next).map((el) => el && el.removeAttribute("data-next"));

    let slideBg = document.querySelectorAll('.slide__bg');
    let slideInfo = document.querySelectorAll('.slide-info');
    let slickActive = document.querySelector('.slick-active');
    let slickActiveIndex = parseInt(slickActive.getAttribute('data-slick-index'));
    if (slickActiveIndex <= Math.max(slideBg.length, slideInfo.length)) {
        let slideBgCurrent = slideBg[slickActiveIndex ?? 0];
        let slideBgPrevious = slickActiveIndex != 0 ? slideBg[slickActiveIndex - 1] : slideBg[slideBg.length - 1];
        let slideBgNext = slideBg[slickActiveIndex + 1];

        let slideInfoCurrent = slideInfo[slickActiveIndex ?? 0];
        let slideInfoPrevious = slickActiveIndex != 0 ? slideInfo[slickActiveIndex - 1] : slideInfo[slideInfo.length - 1];
        let slideInfoNext = slideInfo[slickActiveIndex + 1];

        if (slideBgCurrent)
            slideBgCurrent.setAttribute("data-current", "");
        if (slideBgPrevious)
            slideBgPrevious.setAttribute("data-previous", "");
        if (slideBgNext)
            slideBgNext.setAttribute("data-next", "");
        if (slideInfoCurrent)
            slideInfoCurrent.setAttribute("data-current", "");
        if (slideInfoPrevious)
            slideInfoPrevious.setAttribute("data-previous", "");
        if (slideInfoNext)
            slideInfoNext.setAttribute("data-next", "");
    }
};

$('.slick-slide, .slick-arrow, li[role=presentation]').click(function () {
    functionListerClick();
});
functionListerClick();

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
}))
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
slideBanner && bannerTrans()

console.log('slider-slick.js');
