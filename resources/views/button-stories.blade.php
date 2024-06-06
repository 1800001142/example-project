<!DOCTYPE HTML>
<html lang="vi">

<head>
    <title>Button stories</title>

@vite('resources/css/button-stories.scss')
</head>

<body>
    <div id="render-styles"></div>
    <noscript id="deferred-styles">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet">
        <style>


        @keyframes Start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translate3d(0, 10rem, 0)
            }

            100% {
                opacity: 1;
                transform: none
            }
        }

        @keyframes fadeInDown {
            0% {
                opacity: 0;
                transform: translate3d(0, -10rem, 0)
            }

            100% {
                opacity: 1;
                transform: none
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }

        @keyframes fadeOut {
            0% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }

        @keyframes aniText {
            0% {
                background-position: 200% 50%
            }

            100% {
                background-position: 0 50%
            }
        }

        @keyframes goLeft {
            0% {
                opacity: 0;
                transform: translate3d(5rem, 0, 0)
            }

            100% {
                opacity: 1;
                transform: none
            }
        }

        @keyframes goRight {
            0% {
                opacity: 0;
                transform: translate3d(-5rem, 0, 0)
            }

            100% {
                opacity: 1;
                transform: none
            }
        }

        @keyframes scaleLarge {
            0% {
                opacity: 0;
                transform: scale(1.1)
            }

            100% {
                opacity: 1;
                transform: none
            }
        }

        @keyframes toTop {
            0% {
                opacity: 0;
                top: 100%
            }

            100% {
                opacity: 1;
                top: 50%
            }
        }

        @keyframes Rotate {
            0% {
                transform: rotate(0)
            }

            100% {
                transform: rotate(360deg)
            }
        }

        @keyframes Scale {
            0% {
                transform: scale(0)
            }

            100% {
                transform: scale(1)
            }
        }

        @keyframes GoUp {
            0% {
                transform: none
            }

            100% {
                transform: translate3d(0, -100%, 0)
            }
        }

        @keyframes DrawStroke {
            0% {
                stroke-dashoffset: 600;
                stroke-dasharray: 600;
                stroke-width: 5;
                fill-opacity: 0
            }

            95% {
                stroke-dashoffset: 0;
                stroke-dasharray: 0;
                fill-opacity: 0;
                stroke-width: 5
            }

            100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 0;
                fill-opacity: 1;
                stroke-width: 1
            }
        }

        @keyframes fadeInBlur {
            0% {
                opacity: 0;
                filter: blur(1rem)
            }

            100% {
                opacity: 1;
                filter: none
            }
        }

        @keyframes Hozirontal {
            0% {
                transform: translate3d(0, 0, 0)
            }

            100% {
                transform: translate3d(-100%, 0, 0)
            }
        }

        @keyframes clipPath {
            0% {
                clip-path: circle(0 at 70% 50%)
            }

            100% {
                clip-path: circle(70% at 70% 50%)
            }
        }

        @keyframes clipPathImg {
            0% {
                clip-path: circle(0 at 70% 50%)
            }

            100% {
                clip-path: circle(58% at 70% 50%)
            }
        }

        @keyframes clipPathImg2 {
            0% {
                clip-path: circle(0 at 0 0)
            }

            100% {
                clip-path: circle(100% at 50% 50%)
            }
        }

        @keyframes Show100 {
            from {
                stroke-dashoffset: 570
            }

            to {
                stroke-dashoffset: 0
            }
        }

        @keyframes Runner {
            to {
                transform: translateX(-25%)
            }
        }

        @keyframes goWidth {
            from {
                transform: scale3d(0, 1, 1)
            }

            to {
                transform: scale3d(1, 1, 1)
            }
        }

        .fadein {
            animation-name: fadeIn;
            animation-duration: 2s;
            animation-fill-mode: forwards
        }

        .fadeinup {
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-fill-mode: forwards
        }

        .fadeindown {
            animation-name: fadeInDown;
            animation-duration: 1s;
            animation-fill-mode: forwards
        }

        .goleft {
            animation-name: goLeft;
            animation-duration: 1s;
            animation-fill-mode: forwards
        }

        .goright {
            animation-name: goRight;
            animation-duration: 1s;
            animation-fill-mode: forwards
        }

        .on-text strong {
            animation-name: aniText;
            animation-duration: 2s;
            animation-delay: .5s;
            animation-fill-mode: forwards
        }

        .ani-item {
            opacity: 0
        }

        .breadcrumb::after {
            transform: scale3d(0, 1, 1);
            transform-origin: left center
        }

        .breadcrumb.show::after {
            animation-name: goWidth;
            animation-duration: 2s;
            animation-delay: 2s;
            animation-fill-mode: forwards
        }

        .banner-home .first-slide .slide-img.show {
            animation-name: clipPathImg;
            animation-duration: 2s;
            animation-delay: .8s;
            animation-fill-mode: forwards
        }

        .banner-inner .first-slide .slide-img.show img {
            animation-name: fadeIn;
            animation-duration: 2s;
            animation-delay: .8s;
            animation-fill-mode: forwards
        }

        .first-slide .slide-caption.show .text-inner .char {
            animation-name: fadeIn;
            animation-duration: 1.5s;
            animation-delay: calc(70ms * 1);
            animation-fill-mode: forwards
        }

        .first-slide .slide-caption.show .box-text {
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-delay: 1.2s;
            animation-fill-mode: forwards
        }

        .first-slide .slide-caption.show .box-text .inner-box {
            opacity: 1
        }

        .first-slide .slide-caption.show .wrap-view-more {
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-delay: 1.5s;
            animation-fill-mode: forwards
        }

        .nav-pagination.show {
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-delay: 1.6s;
            animation-fill-mode: forwards
        }

        .absolute-inner .word {
            opacity: 0
        }

        .absolute-inner .box-txt::after {
            transform: scale(0)
        }

        .absolute-inner.show .box-txt::after {
            animation-name: Scale;
            animation-duration: 1s;
            animation-delay: .5s;
            animation-fill-mode: forwards
        }

        .absolute-inner.show .word {
            animation-name: fadeIn;
            animation-duration: 1.5s;
            animation-delay: calc(30ms * 1);
            animation-fill-mode: forwards
        }

        .slide-caption .supplier-info-pic.on-show {
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-delay: 1s;
            animation-fill-mode: forwards
        }

        @media screen and (min-width: 1100px) {
            .ani-item.on-show {
                animation-name: fadeIn;
                animation-duration: 1.5s;
                animation-delay: .3s;
                animation-fill-mode: forwards
            }

            .nav-slideshow.show .nav-prev {
                animation-name: goRight;
                animation-duration: 1s;
                animation-delay: 1.6s;
                animation-fill-mode: forwards
            }

            .nav-slideshow.show .nav-next {
                animation-name: goLeft;
                animation-duration: 1s;
                animation-delay: 1.6s;
                animation-fill-mode: forwards
            }

            .nav-pagination.show, .nav-slideshow.show {
                display: block
            }

            .nav-click, .right-header {
                transition: top .3s ease-in-out
            }

            .story-icon {
                opacity: 0;
                pointer-events: none
            }

            .all-stories.show .story-icon {
                animation-name: fadeInDown;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                pointer-events: auto
            }

            .all-stories-second:not(.left-pos).show .story-icon {
                animation-name: goLeft;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                pointer-events: auto
            }

            .all-stories-second.left-pos.show .story-icon {
                animation-name: goRight;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                pointer-events: auto
            }

            .story-icon:nth-child(1) {
                animation-delay: .3s
            }

            .story-icon:nth-child(2) {
                animation-delay: .4s
            }

            .story-icon:nth-child(3) {
                animation-delay: .5s
            }

            .story-icon:nth-child(4) {
                animation-delay: .6s
            }

            .contact-intro.on-show {
                animation-name: fadeInUp;
                animation-duration: 1.2s;
                animation-delay: .3s;
                animation-fill-mode: forwards
            }

            .contact-form.on-show {
                animation-name: fadeInUp;
                animation-duration: 1.2s;
                animation-delay: .6s;
                animation-fill-mode: forwards
            }

            .promotion .content-absolute {
                opacity: 0
            }

            .promotion.show .content-absolute {
                animation-name: fadeIn;
                animation-duration: 2s;
                animation-delay: 1s;
                animation-fill-mode: forwards
            }

            .promotion-item .promotion-number.on-show {
                animation-name: goLeft;
                animation-duration: 1s;
                animation-delay: 0s;
                animation-fill-mode: forwards
            }

            .promotion-item .box-txt.on-show {
                animation-name: fadeIn;
                animation-duration: 1s;
                animation-delay: .3s;
                animation-fill-mode: forwards
            }

            .promotion-item .wrap-view-more.on-show {
                animation-name: fadeInUp;
                animation-duration: 1s;
                animation-delay: .5s;
                animation-fill-mode: forwards
            }

            .form-content.on-show {
                animation-name: fadeInUp;
                animation-duration: 1s;
                animation-delay: 0s;
                animation-fill-mode: forwards
            }

            .cart-page .cart-content.on-show {
                animation-name: fadeInUp;
                animation-duration: 1s;
                animation-delay: 0s;
                animation-fill-mode: forwards
            }

            .wrap-button.on-show {
                animation-name: fadeInUp;
                animation-duration: 1s;
                animation-delay: 0s;
                animation-fill-mode: forwards
            }

            .box-txt p {
                opacity: 0
            }

            .absolute-inner.show .box-txt p, .box-txt.is-show p, .box-txt.on-show p {
                animation-name: fadeIn;
                animation-duration: 1s;
                animation-delay: calc(100ms * 1);
                animation-fill-mode: forwards
            }
        }

        @media screen and (max-width: 1100px) {
            .on-show {
                animation-name: fadeIn;
                animation-duration: 1s;
                animation-delay: .3s;
                animation-fill-mode: forwards
            }

            .sec-02 {
                opacity: 0
            }

            .sec-02.show {
                animation-name: fadeIn;
                animation-duration: 1.5s;
                animation-delay: .5s;
                animation-fill-mode: forwards
            }
        }

        @media (hover: hover) and (pointer: fine) {
            .box-txt > ul li a, .language li a, .search-but {
                transition: all .3s ease-in-out
            }

            .language li a:hover, .search-but:hover {
                color: var(--color-highlight)
            }

            .btn {
                transition: background-color .3s ease-in-out
            }

            .btn:hover {
                background-color: var(--color-highlight)
            }

            .box-txt > ul li a:hover {
                color: var(--color-highlight)
            }

            .hover-text span.normal {
                transition: transform .3s ease-in-out
            }

            .hover-text:hover span.normal {
                transform: translateY(-100%)
            }

            .hover-text:hover span.hover {
                transform: translateY(0)
            }

            .scroll-down circle {
                transition: all .3s ease-in-out;
                transform-origin: center center
            }

            .scroll-down:hover > span {
                animation-play-state: paused
            }

            .scroll-down:hover circle {
                fill-opacity: 0;
                stroke: var(--color-highlight);
                stroke-width: .5;
                transform: scale(5)
            }

            .go-top::after {
                transition: all .3s ease-in-out
            }

            .go-top:hover::after {
                background-color: var(--color-highlight);
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .story-image, .story-image svg, .story-text {
                transition: all .3s ease-in-out
            }

            .story-icon:hover .story-image {
                background-color: var(--color-green);
                border-color: var(--color-normal-zero);
                color: var(--color-white);
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .story-icon:hover .story-text {
                opacity: 1;
                transform: none
            }

            .story-icon:hover .story-image svg {
                transform: scale(1.3);
                stroke: currentColor;
                fill-opacity: 0;
                stroke-width: 5;
                stroke-dasharray: 600;
                stroke-dashoffset: 600;
                animation: .8s DrawStroke forwards
            }

            .active-nav {
                transition: all .3s ease-in-out
            }

            .nav-click:not(.active):hover .line-toggle {
                background-color: var(--color-highlight)
            }

            .nav-click:not(.active):hover .toggle-1 {
                width: 80%;
                left: 20%
            }

            .nav-click:not(.active):hover .toggle-2 {
                width: 60%;
                left: 20%
            }

            .nav-click:not(.active):hover .toggle-3 {
                width: 80%
            }

            .nav-click.active:hover .active-nav {
                transform: rotate(90deg)
            }

            .logo:hover {
                filter: drop-shadow(.5rem .5rem 1rem var(--color-black-alpha-02))
            }

            .item-menu-second > a, .item-menu-second > a::before, .span-circle .center {
                transition: all .3s ease-in-out
            }

            .item-menu-second:hover > a {
                color: var(--color-highlight)
            }

            .item-menu-second:hover > a::before {
                color: var(--color-highlight)
            }

            .nav li .nav-item.active span.normal {
                transform: translateY(-100%)
            }

            .nav li .nav-item.active span.hover {
                transform: translateY(0)
            }

            .nav li .nav-item:hover span.normal {
                transform: translateY(-100%)
            }

            .nav li .nav-item:hover span.hover {
                transform: translateY(0)
            }

            .list-term-menu a {
                transition: all .3s ease-in-out
            }

            .list-term-menu a:hover {
                color: var(--color-highlight)
            }

            .main-menu li:hover::before {
                opacity: 1;
                transition: opacity .4s ease-in-out .2s
            }

            .main-menu li:hover::after {
                transform: none
            }

            .item-menu-second:hover > .span-circle .after {
                animation-name: Show100;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                stroke: var(--color-highlight);
                filter: drop-shadow(0 .3rem .3rem var(--color-black-alpha-01))
            }

            .item-menu-second:hover > .span-circle .center {
                stroke: var(--color-highlight);
                filter: drop-shadow(0 .3rem .3rem var(--color-black-alpha-01))
            }

            .breadcrumb li a, .breadcrumb-second li a {
                transition: color .3s ease-in-out
            }

            .breadcrumb li:hover a, .breadcrumb-second li:hover a {
                color: var(--color-highlight)
            }

            .sub-list .item-list .button:hover {
                background-color: var(--color-highlight)
            }

            .box-txt a, .load-text a, .pro-text a, .term-but {
                transition: color .3s ease-in-out
            }

            .box-txt a:hover, .load-text a:hover, .pro-text a:hover, .term-but:hover {
                color: var(--color-highlight)
            }

            .company-text li a, .hotline, .social {
                transition: all .3s ease-in-out
            }

            .hotline:hover {
                color: var(--color-green)
            }

            .company-text li a:hover {
                color: var(--color-highlight)
            }

            .copyright a {
                transition: all .3s ease-in-out
            }

            .copyright a:hover {
                color: var(--color-highlight)
            }

            .license img {
                transition: all .3s ease-in-out
            }

            .license:hover img {
                filter: brightness(1.2)
            }

            .sub-item a::after {
                content: '';
                position: absolute;
                width: 100%;
                left: 0;
                height: .063rem;
                bottom: -.125rem;
                background-color: var(--color-highlight);
                transform-origin: left;
                transform: scaleX(0);
                transition: all .3s ease-in-out
            }

            .sub-item a:hover::after {
                transform: none
            }

            .sub-item:hover .social {
                transform: translateX(-.3rem);
                filter: invert(51%) sepia(84%) saturate(423%) hue-rotate(357deg) brightness(110%) contrast(104%)
            }

            .sub-but {
                transition: all .3s ease-in-out
            }

            .sub-but:hover {
                color: var(--color-highlight)
            }

            .file-mark, .zoom, .zoom::after, button {
                transition: all .3s ease-in-out
            }

            .close-album::after, .close-album::before, .close-pics::after, .close-pics::before, .close-popup::after, .close-popup::before, .close-video::after, .close-video::before, .close::after, .close::before {
                transition: all .3s ease-in-out
            }

            .close-album:hover::after, .close-pics:hover::after, .close-popup:hover::after, .close-video:hover::after, .close:hover::after {
                transform: rotate(90deg);
                filter: invert(51%) sepia(84%) saturate(423%) hue-rotate(357deg) brightness(110%) contrast(104%);
                background-color: transparent
            }

            .close-album:hover::before, .close-pics:hover::before, .close-popup:hover::before, .close-video:hover::before, .close:hover::before {
                opacity: 0
            }

            .close-album:hover .c-rotate, .close-pics:hover .c-rotate, .close-popup:hover .c-rotate, .close-video:hover .c-rotate, .close:hover .c-rotate {
                animation-name: Show100;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                animation-timing-function: cubic-bezier(.57, .21, .69, .95);
                stroke: var(--color-highlight)
            }

            .slidefullwrap .close-popup:hover::before {
                background-color: var(--color-white);
                opacity: 1
            }

            .brand-details .close-popup:hover::before {
                background-color: var(--color-white);
                opacity: 1
            }

            .click-nav, .nav-svg {
                transition: all .3s ease-in-out
            }

            .click-nav:hover .nav-svg {
                color: var(--color-highlight);
                filter: drop-shadow(0 .188rem .5rem var(--color-black-alpha-02))
            }

            .nav-next:hover .nav-svg {
                transform: scale(1.3) translateX(10%)
            }

            .nav-prev:hover .nav-svg {
                transform: scale(1.3) translateX(-10%)
            }

            .click-nav:hover .c-rotate {
                animation-name: Show100;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                stroke: var(--color-highlight)
            }

            .pic-cover img, .pic-img img, .product-pic img {
                transition: all .5s ease-in-out
            }

            .zoom:hover {
                background-color: var(--color-normal);
                transform: scale(.9)
            }

            .zoom-pic {
                cursor: pointer
            }

            .zoom-hover {
                overflow: hidden
            }

            .zoom-hover::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                border: .5rem solid var(--color-highlight);
                opacity: 0;
                transition: all .3s ease-in-out;
                z-index: 12
            }

            .zoom-hover:hover::after {
                opacity: 1
            }

            .zoom-hover:hover img {
                transform: scale(1.05)
            }

            .zoom-hover::before {
                content: '';
                position: absolute;
                width: 180%;
                height: 100%;
                top: 0;
                left: -40%;
                transition: all .4s ease-in-out;
                transform: skewX(-135deg) scale3d(0, 1, 1);
                opacity: 0;
                pointer-events: none;
                transform-origin: center center;
                background-color: var(--color-black-alpha-01);
                mix-blend-mode: multiply;
                z-index: 10
            }

            .zoom-hover:hover::before {
                transform: skewX(-135deg) scale3d(1, 1, 1);
                opacity: 1
            }

            .login-click, .login-click-2, .order-but, .view-more {
                transition: all .3s ease-in-out
            }

            .order-but svg, .view-more svg {
                transition: all .3s ease-in-out
            }

            .order-but:hover, .view-more:hover {
                color: var(--color-highlight) !important
            }

            .order-but:hover svg, .view-more:hover svg {
                transform: scale(1.1)
            }

            .order-but:hover .after, .view-more:hover .after {
                animation-name: Show100;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                stroke: var(--color-highlight)
            }

            .order-but:hover .before, .view-more:hover .before {
                stroke-width: 0
            }

            .search-view-more .view-more:hover {
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .login-click-2:hover, .login-click:hover {
                color: var(--color-highlight)
            }

            .wrap-view-more.hover .view-more svg {
                transform: scale(1.1)
            }

            .wrap-view-more.hover .view-more .before {
                stroke-width: 0
            }

            .wrap-view-more.hover .view-more .after {
                animation-name: Show100;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                stroke: var(--color-highlight)
            }

            .wrap-view-more.hover .view-more {
                color: var(--color-highlight)
            }

            .product-txt {
                transition: all .3s ease-in-out
            }

            .product-pic::before {
                transition: opacity .3s ease-in-out
            }

            .product-pic::after {
                transition: opacity .3s ease-in-out
            }

            .product-inner .product-wrap, .product-item .product-wrap {
                transition: box-shadow .3s ease-in-out
            }

            .product-item:hover .product-pic::before {
                opacity: 0
            }

            .product-item:hover .product-pic::after {
                opacity: 1
            }

            .product-item:hover .product-pic img {
                transform: scale(1.03);
                filter: brightness(1.1)
            }

            .product-item:hover .product-wrap {
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .product-item:hover .price-new {
                color: var(--color-white)
            }

            .product-item:hover .product-txt {
                color: var(--color-highlight);
                text-shadow: none
            }

            .product-item:hover .view-more {
                color: var(--color-highlight)
            }

            .product-item:hover .view-more svg {
                transform: scale(1.1)
            }

            .product-item:hover .view-more .after {
                animation-name: Show100;
                animation-duration: 1.5s;
                animation-fill-mode: forwards;
                stroke: var(--color-highlight)
            }

            .product-item:hover .view-more .before {
                stroke-width: 0
            }

            .product-inner:hover .product-pic::before {
                opacity: 0
            }

            .product-inner:hover .product-pic::after {
                opacity: 1
            }

            .product-inner:hover .product-pic img {
                transform: scale(1.03);
                filter: brightness(1.1)
            }

            .product-inner:hover .product-wrap {
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .product-inner:hover .price-new {
                color: var(--color-white)
            }

            .product-inner:hover .product-txt {
                color: var(--color-highlight);
                text-shadow: none;
                bottom: 0
            }

            .product-inner-two .product-pic:hover img {
                transform: scale(1.03);
                filter: brightness(1.1)
            }

            .coupon-tag-item, .pro-option li, .smell-option li, .supplier-action .action {
                transition: all .3s ease-in-out
            }

            .pro-option li:hover {
                background-color: var(--color-normal);
                color: var(--color-white);
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .smell-option li:hover {
                background-color: var(--color-highlight);
                color: var(--color-white);
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .supplier-action .action:hover {
                background-color: var(--color-highlight);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01);
                color: var(--color-white);
                border-color: transparent
            }

            .coupon-tag-item:hover {
                background-color: var(--color-highlight);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01)
            }

            .follow-icon, .follow-icon-unlike, .like-icon {
                transition: all .3s ease-in-out
            }

            .like-but:hover .like-icon {
                background-color: var(--color-highlight);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01)
            }

            .supplier-follow .follow-icon-unlike:hover, .supplier-follow .follow-icon:hover {
                background-color: var(--color-highlight);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01);
                color: var(--color-white);
                border-color: transparent
            }

            .select-box li, .select-item {
                transition: all .2s ease-in-out
            }

            .select-box li:hover {
                background-color: var(--color-normal);
                color: var(--color-white)
            }

            .select-item:hover {
                background-color: var(--color-text-slide)
            }

            .pic-news, .pic-news img, .title-news h3, .title-news p, .txt-news h3 {
                transition: all .5s ease-in-out
            }

            .box-news .link-load {
                transition: all .3s ease-in-out
            }

            .box-news .link-load .icon-svg, .box-news .link-load::after {
                transition: all .3s ease-in-out .2s
            }

            .box-news:hover .pic-news img {
                transform: scale(1.05);
                filter: brightness(1.1)
            }

            .box-news:hover .title-news p {
                color: var(--color-normal)
            }

            .box-news:hover .link-load {
                opacity: 1
            }

            .box-news:hover .link-load::after {
                width: calc(100% - 3rem)
            }

            .box-news:hover .link-load .icon-svg {
                left: calc(100% - 2rem);
                opacity: 1
            }

            .trends .pic-news {
                transition: box-shadow .3s ease-in-out
            }

            .trends .box-news:hover .pic-news {
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .trends .box-news:hover .title-news h3 {
                transform: translateY(-1rem)
            }

            .list-inner .box-news:hover .pic-news img {
                transform: none;
                filter: none
            }

            .list-inner .box-news:hover .title-news p {
                color: var(--color-white)
            }

            .item-news {
                cursor: pointer
            }

            .item-news:hover .pic-news {
                box-shadow: 0 .5rem 1rem 0 var(--color-black-alpha-01)
            }

            .item-news:hover .pic-img img {
                filter: brightness(1.2);
                transform: scale(1.07)
            }

            .view-details, .view-details svg {
                transition: all .3s ease-in-out
            }

            .item-news:hover .view-details {
                color: var(--color-normal)
            }

            .item-news:hover .view-details svg {
                transform: translateX(.3rem)
            }

            .share-box li a::before, .share-item, .zalo-share-button::before {
                transition: all .3s ease-in-out
            }

            .share-item:hover {
                color: var(--color-highlight);
                background-color: var(--color-white)
            }

            .share-box li a:hover::before, .zalo-share-button:hover::before {
                background-color: var(--color-highlight);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01)
            }

            .button, .input-but button {
                transition: all .3s ease-in-out
            }

            .button:hover, .input-but button:hover {
                background-color: var(--color-highlight);
                color: var(--color-white);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01)
            }

            .comment-box .wrap-view-more .button:hover {
                background-color: var(--color-normal);
                color: var(--color-white);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01)
            }

            .item-search {
                transition: background-color .3s ease-in-out, box-shadow .3s ease-in-out
            }

            .item-search a, .item-search::after {
                transition: color .3s ease-in-out
            }

            .item-search img {
                transition: filter .3s ease-in-out
            }

            .item-search:hover {
                background-color: var(--color-white-grey);
                box-shadow: 0 1rem 1.5rem 0 var(--color-black-alpha-01)
            }

            .item-search:hover::after {
                color: var(--color-white)
            }

            .item-search:hover img {
                filter: grayscale(1)
            }

            .item-search:hover h3, .item-search:hover h3 strong {
                color: var(--color-normal);
                -webkit-text-fill-color: var(--color-normal);
                background-image: none
            }

            .item-search:hover a {
                color: var(--color-highlight)
            }
        }

    </style>
    </noscript>
    <script>
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
    </script>
    <header class="header" hidden="hidden">


        <div class="nav-click">

        </div>
        <nav class="navigation">


        </nav>
        <div class="right-header">

            <div class="seach-top">
                <button class="search-but" aria-label="search" hidden="hidden">

                </button>
                <div class="search-form">
                    <div class="form-row-search">
                        <form onsubmit="return false;" action="https://www.crocusorigin.vn/Search/Index" id="Search"
                            method="get">

                        </form>
                    </div>
                </div>
            </div>

        </div>
    </header>


    <main class="container" id="home-page">
        <div class="title-page">
            <h1 class="text-head"></h1>
        </div>

        <section class="banner-home sec-01">
            <div class="trans slide-banner layout-move" data-time="6000" data-speed="-3">


                <div class="slide">
                    <div class="slide-img-wrap">
                        <div class="slide-img"></div>
                    </div>

                </div>
            </div>
        </section>




        <footer class="footer">



        </footer>
    </main>




    <div class="all-stories">
        <ul class="wrap-all-stories">
            <li class="story-icon"><a class="link-load"
                    href="https://www.crocusorigin.vn/su-menh/nguon-goc-thien-nhien.html" data-name="crocus-page-01"
                    aria-label="tick">
                    <div class="story-image">
                        <svg viewBox="0 0 100 100">
                            <path fill="currentColor" d="M94,42.6c1.3,33-49.3,54.5-65.9,22.3c0,0,0,0-0.2-0.1c-8.1,5.8-13.8,14-15.3,24c-1.4,5-6.7,1.7-4.8-2.4
C10,75.5,16.6,66,25.9,59.9c0.1,0,0.1-0.1,0.2-0.1c0.6,1.6,1.2,3.3,1.8,4.9c13.3-8.9,28.5-14,41.1-24c8.8-7.2,14.9-16.3,18.3-27.1
c0.1-1.9,2.3-1.8,2.1,0.1C91.4,23.3,94.3,32.7,94,42.6z M82.1,8.9c-2.5,28-35.1,37.3-55.8,50.4c0,0-0.1,0-0.3,0.1c-4.4-16.2,4.8-34.7,21.9-38.2
c11.9-2.2,24.3-4.6,34-12.4C81.9,8.9,82,8.9,82.1,8.9z" />
                        </svg>
                    </div>
                    <div class="story-text">M&#244;i trường v&#224; Sự sống</div>
                </a></li>
            <li class="story-icon"><a class="link-load"
                    href="https://www.crocusorigin.vn/su-menh/cham-soc-suc-khoe.html" data-name="crocus-page-02"
                    aria-label="tick">
                    <div class="story-image">
                        <svg viewBox="0 0 100 100">
                            <path fill="currentColor" d="M56.4,91.9c-2-0.5-4.1-1.7-4-4c1.1-8.4-2.9-19.1,3-26c4.8-3.1,23.3-27.5,27-22.7c4.8,4.9-8.1,11.9-10.7,16
c-1.5,1.5-0.9,3.9,1.1,4.5c4.9-0.7,9.8-8.9,13.8-12.1c4.8-5.1,1.6-13.4-5.2-14.5c1-6.1-2.2-15,1.8-19.8c2.6-1.7,5.6-1.5,7.4,0.7
c3.3,10.8,0.3,23.4,1.3,34.8c-4.2,11.7-14.6,20.7-18.4,32.6C74.7,94.2,65.6,91.7,56.4,91.9z M31.6,91.9c-6-0.3-5.4-6.8-5.8-11.1c-4-11.9-15.6-21-18.2-33.4c0-10.3,0-20.6,0-30.9c0-1.2,0.4-2,1.3-2.7
c12.6-6.8,8.8,12.6,9.2,19.4c-17.2,6-0.3,19.6,6.9,26.4c2.7,1.3,5.4-2.6,2.9-4.6c-2.7-4.2-15.2-10.8-10.6-15.8
c1.3-1.1,3.1-1.1,4.4,0c7.5,7.3,14.9,14.9,22.5,22.3c6.1,6.8,2.1,17.2,3.2,25.5c0,2.8-1.3,4-3.9,4.7C39.3,91.9,35.5,91.9,31.6,91.9z M41,7.6c4.8-0.9,7.7,4.9,9.8,3.4c10.5-7.5,21,1.3,16.2,11.1c-3.6,6.1-17,16.4-17,16.4S38.2,27.8,34.6,25.4
C28,18.5,32.8,8.4,41,7.6z" />
                        </svg>
                    </div>
                    <div class="story-text">Chăm s&#243;c sức khỏe</div>
                </a></li>
            <li class="story-icon"><a class="link-load"
                    href="https://www.crocusorigin.vn/su-menh/ket-noi-va-lan-toa.html" data-name="crocus-page-03"
                    aria-label="tick">
                    <div class="story-image">
                        <svg viewBox="0 0 100 100">
                            <path fill="currentColor" d="M6.5,32.6C8.6,10.9,35.7,6.8,47.2,24c-2.9,3.3-6.2,6.3-9.3,9.3C27,45.7,46.6,58.8,55.4,45.4
c0.5-0.5,0.8-0.6,1.4,0c6.4,6.6,13,12.9,19.4,19.4c1.8,1.9,1.1,4.8-1.3,5.5c-3.9,0.7-6-4.5-8.8-6.5c-3-3-7,1.6-4.1,4.2
c2.9,2.9,10.6,8.7,3.5,11.5c-3.9,0.7-6-4.3-8.8-6.3c-1.8-1.7-4.4-1-5,1.3c-0.6,5.2,10,7.3,6.6,12.9c-4.1,4.9-8.3-2.8-11.4-5.3
c1.3-5.6,0.5-11.7-5.5-14.2c5-7.7-1.9-18.1-11.7-14.8c-2.5-7.4-11.5-9.1-16.6-3.9C8.6,44.9,6.1,38.8,6.5,32.6z M77.7,58.1c-5.3-5.9-11.3-11.3-16.8-17C53.3,33,49.1,49.9,42.2,44c-1.8-1.8-1.9-4.7,0-6.5
c6.3-6.1,12.4-12.4,18.9-18.3C82.8,1.4,113.6,33.4,77.7,58.1z M24.7,75.1c-3.3,0.1-5.3-4.3-2.9-6.6c4.2-2.8,8.6-12.9,14.2-8.7c1.5,1.5,1.6,3.9,0.1,5.4
C32.3,68.3,29.4,73.7,24.7,75.1z M24.2,56.7c-0.6,3.1-4.6,5.3-6.5,7.7c-1.6,1.6-3.9,1.5-5.5-0.1c-3.7-4.2,2.9-7.9,5.3-10.8
C20.1,51.1,24.4,52.7,24.2,56.7z M41.8,77.2c-0.7,3.7-6.2,9.8-10,6.2C26.8,78.4,40.8,67.9,41.8,77.2z" />
                        </svg>
                    </div>
                    <div class="story-text">Kết nối v&#224; lan toả</div>
                </a></li>
        </ul>
    </div>




    <div class="mask">

    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script>

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









function isFullScreenMode() {
var t = document.body,
    e = void 0 !== t.requestFullscreen || void 0 !== t.mozRequestFullScreen || void 0 !== t.webkitRequestFullscreen || void 0 !== t.msRequestFullscreen || void 0 !== document.exitFullscreen || void 0 !== document.mozCancelFullScreen || void 0 !== document.webkitExitFullscreen;
return 1 == e && document.documentElement.classList.add("fullsreen-support"), e
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
                        n = -(i - s.touchStart.x) * s.touchMultiplier,
                        r = -(o - s.touchStart.y) * s.touchMultiplier;
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
            n = void 0 === s.content ? document.documentElement : s.content,
            c = void 0 === s.main ? null : s.main,
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
            W = void 0 === s.mainsize ? "vertical" !== L : s.mainsize,
            H = void 0 === s.autoResize || s.autoResize;
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
var Protocal = window.location.protocol, Host = window.location.host,
pathArray = window.location.pathname.split("/"),
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
svgClose = '',
A = document.createElement("div"), B = document.createElement("div"), C = document.createElement("div"),
D = document.createElement("div"), E = document.createElement("div");
A.className = "all-pics", B.className = "all-album", C.className = "all-video", D.className = "overlay-dark", E.className = "loadx", Body.append(A, B, C, D, E);
var allPics = document.querySelector(".all-pics"), allAlbum = document.querySelector(".all-album"),
allVideo = document.querySelector(".all-video"), overlayDark = document.querySelector(".overlay-dark"),
Loadx = document.querySelector(".loadx");
if ("home-page" == IDPage) {
var divMask = '<div class="logo-mask"><img class="js-logo" src="' + getDirect + 'build/images/logo.svg" width="100%" height="100%" alt="logo"></div><div class="mask-line"><div class="mask-line-inner"></div></div>';
(M = document.createElement("div")).className = "mask-inner", M.innerHTML = divMask, Mask.append(M)
} else Loadx.classList.add("display-block", "inplay");
var X = '<span></span><svg viewBox="0 0 200 200"><circle fill="currentColor" cx="100" cy="100" r="5"/></svg>',
Y = '<svg viewBox="0 0 80 80"><path fill="currentColor" d="M54.9,49.8H25.3L40,24.1L54.9,49.8z M30.7,46.5h18.6l-9.4-16.1L30.7,46.5z"></path></svg>',
divX = document.createElement("div"), divY = document.createElement("div");
divX.className = "scroll-down", divY.className = "go-top", divX.innerHTML = X, divY.innerHTML = Y, Body.append(divX, divY);
var goTop = document.querySelector(".go-top"), scrollDown = document.querySelector(".scroll-down");








document.querySelector(".box-txt") && document.querySelectorAll(".box-txt p").forEach((function (e, t) {
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









function ResizeWindows() {

var e = window.innerHeight / window.innerWidth;
if (Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile"), e > .58 && !Mobile.matches ? Body.classList.add("ratio-4-3") : Body.classList.remove("ratio-4-3"), bannerHome || bannerInner) {
    var t = bannerHome ? bannerHome.offsetHeight : bannerInner.offsetHeight;
    titlePage.style.setProperty("--top-height", t + "px"), scrollDown.style.setProperty("--top-height", t + "px"), allStories.style.setProperty("--top-height", t + "px")
}


}



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





var LinkPage = function () {

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
var r = document.querySelectorAll(".column-rotate, .wrap-hide, .bg-cover"),

    o = new IntersectionObserver((function (e) {
        e.forEach((function (e) {
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
})


};

    </script>
    @vite('resources/js/crocus-origin/script.js')

</body>

</html>
@vite('resources/js/button-stories.js')
