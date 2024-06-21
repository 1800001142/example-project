<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
@vite('resources/css/slider-slick.scss')
<body>
<div class="main">
    <header class="header">
        <div class="nav-click">
            <div class="active-nav">
                <div class="wrap-toggle"><span class="line-toggle toggle-1"></span><span
                        class="line-toggle toggle-2"></span><span class="line-toggle toggle-3"></span></div>
            </div>
        </div>
        <div class="right-header">
            <div class="ecommerce">
                <a class="cart-shopping  link-load" href="https://www.crocusorigin.vn/gio-hang.html" aria-label="cart">
                    <div class="cart-text"></div>
                    <div class="ecommerce-icon">
                        <svg viewBox="0 0 50 50">
                            <path fill="currentColor" d="M28.5,34.9c0.9,0,1.6-0.7,1.6-1.6v-3.1c0-0.9-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6v3.1C27,34.2,27.7,34.9,28.5,34.9z
M22.3,34.9c0.9,0,1.6-0.7,1.6-1.6v-3.1c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6v3.1C20.8,34.2,21.5,34.9,22.3,34.9z M36.3,16.2
h-2.1l-2.7-5.4c-0.3-0.8-1.2-1.2-2-0.8c-0.8,0.3-1.2,1.2-0.8,2c0,0.1,0.1,0.1,0.1,0.2l2,4H20.2l2-4c0.3-0.8,0-1.7-0.8-2
c-0.7-0.3-1.5,0-1.9,0.6l-2.7,5.4h-2.1c-2.6,0-4.6,2.2-4.6,4.7c0,2,1.3,3.7,3.2,4.3l1.2,11.6c0.2,2.4,2.3,4.2,4.7,4.2h13
c2.4,0,4.4-1.8,4.7-4.2l1.2-11.6c2.4-0.8,3.7-3.5,2.9-5.9C40.1,17.5,38.3,16.3,36.3,16.2z M33.5,36.6C33.4,37.4,32.8,38,32,38h-13
c-0.8,0-1.5-0.6-1.6-1.4l-1.1-11h18.4L33.5,36.6z M36.3,22.5H14.5c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6h21.8
c0.9,0,1.6,0.7,1.6,1.6C37.9,21.8,37.2,22.5,36.3,22.5z"/>
                        </svg>
                    </div>
                    <div class="ecommerce-text">Giỏ h&#224;ng</div>
                </a>
                <button class="login-but" aria-label="login">
                    <div class="ecommerce-icon">
                        <svg viewBox="0 0 50 50">
                            <path fill="currentColor" d="M30.6,26.1c3.9-3.1,4.6-8.7,1.5-12.6s-8.8-4.6-12.7-1.5s-4.6,8.7-1.5,12.6c0.4,0.6,1,1.1,1.5,1.5c-5.2,2.1-8.8,6.8-9.4,12.3
c-0.1,0.8,0.5,1.6,1.3,1.7c0.8,0.1,1.6-0.5,1.7-1.3c0.7-6.6,6.7-11.3,13.3-10.6c5.6,0.6,10,5,10.6,10.6c0.1,0.8,0.7,1.3,1.5,1.3h0.2
c0.8-0.1,1.4-0.8,1.3-1.6C39.4,32.8,35.8,28.1,30.6,26.1z M25,25c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S28.3,25,25,25z"/>
                        </svg>
                    </div>
                    <div class="ecommerce-text">Th&#224;nh vi&#234;n</div>
                </button>
                <a class="login-but-supplier" href="/supplier/login" target="_blank" rel="nofollow noopener">
                    <div class="ecommerce-icon">
                        <svg viewBox="0 0 50 50">
                            <path fill="currentColor" d="M37.2,10.7c-0.2-0.6-0.9-1-1.5-1H14.4c-0.6,0-1.2,0.4-1.4,1c0,0-3.1,8.1-3.1,8.2l0,0l0,0c0,2.1,1.2,4.1,3,5.2v14.6
c0,0.8,0.7,1.5,1.5,1.5h21.3c0.8,0,1.5-0.7,1.5-1.5V24.2c1.9-1.1,3.1-3.2,3.1-5.3L37.2,10.7z M26.5,37.2h-3v-6.1h3V37.2z M34.1,37.2
h-4.6v-7.6c0-0.8-0.7-1.5-1.5-1.5h-6c-0.8,0-1.5,0.7-1.5,1.5v7.6h-4.6V25c1.8,0,3.4-0.8,4.6-2.1c2.2,2.5,7,2.6,9.1,0
c1.1,1.3,2.8,2.1,4.6,2.1v12.2H34.1z M34.1,22c-1.7,0-3-1.4-3-3c0-0.8-0.7-1.5-1.5-1.5S28,18.1,28,18.9c0,1.7-1.4,3-3,3
c-1.7,0-3-1.4-3-3c0-0.8-0.7-1.5-1.5-1.5S19,18.1,19,18.9c0.1,1.7-1.2,3.1-2.9,3.2s-3.1-1.2-3.2-2.9l2.6-6.3h19.2l2.6,6.3
C37,20.7,35.7,22,34.1,22z"/>
                        </svg>
                    </div>
                    <div class="ecommerce-text">Nh&#224; cung cấp</div>
                </a>

            </div>
            <div class="seach-top">
                <button class="search-but" aria-label="search">
                    <svg viewBox="0 0 50 50">
                        <path fill="currentColor" d="M39,36.7l-5.3-5.3c4.5-5.6,3.6-13.7-2-18.1s-13.7-3.6-18.1,2s-3.6,13.7,2,18.1c4.7,3.8,11.4,3.8,16.2,0l5.3,5.3
c0.6,0.6,1.5,0.6,2,0c0,0,0,0,0,0C39.5,38.1,39.5,37.3,39,36.7z M23.6,33.4c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10
S29.1,33.4,23.6,33.4z"/>
                    </svg>
                </button>
                <div class="search-form">
                    <div class="form-row-search">
                        <form onsubmit="return false;" action="https://www.crocusorigin.vn/Search/Index" id="Search"
                              method="get">
                            <div class="input-text"><span class="holder">T&#236;m kiếm...</span><input type="text"
                                                                                                       id="quick_search"
                                                                                                       name="quick search"
                                                                                                       value=""
                                                                                                       data-default="T&#236;m kiếm..."
                                                                                                       aria-label="text search">
                                <div class="search-error" id="error_search">
                                    <div class="search-error-content"></div>
                                </div>
                            </div>
                            <input type="hidden" id="default_value" name="default value" value="T&#236;m kiếm..."
                                   aria-label="default value"><input type="hidden" id="href_search" name="href search"
                                                                     value="https://www.crocusorigin.vn/tim-kiem.html"
                                                                     aria-label="href search"></form>
                    </div>
                </div>
            </div>
            <div class="language">
                <ul class="m-0 p-0">
                    <li data-lang="vi"><a href="https://www.crocusorigin.vn" aria-label="VI">VI</a></li>
                    <li class="active" data-lang="en"><a href="https://www.crocusorigin.vn/home-page.html" aria-label="EN">EN</a>
                    </li>
                </ul>
            </div>
            <div class="overlay-click"></div>
        </div>
    </header>
    <div class="slides--bg">
        <!-- slide 1 -->
        <div class="slide__bg" style="--bg: url(https://source.unsplash.com/Z8dtTatMVMw);" data-current></div>
        <!-- slide 2 -->
        <div class="slide__bg" style="--bg: url(https://source.unsplash.com/9dmycbFE7mQ);" data-next></div>
        <!-- slide 3 -->
        <div class="slide__bg" style="--bg: url(https://source.unsplash.com/m7K4KzL5aQ8);" data-previous></div>
    </div>
    <div class="slides__wrapper">
        <div class="slides--infos">
            <!-- Slide Info 1 -->
            <div class="slide-info" data-current>
                <div class="slide-info__inner">
                    <div class="slide-info--text__wrapper">
                        <div data-title class="slide-info--text">
                            <span>Highlands</span>
                        </div>
                        <div data-subtitle class="slide-info--text">
                            <span>Scotland</span>
                        </div>
                        <div data-description class="slide-info--text">
                            <span>The mountains are calling</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide Info 2 -->
            <div class="slide-info" data-next>
                <div class="slide-info__inner">
                    <div class="slide-info--text__wrapper">
                        <div data-title class="slide-info--text">
                            <span>Machu Pichu</span>
                        </div>
                        <div data-subtitle class="slide-info--text">
                            <span>Peru</span>
                        </div>
                        <div data-description class="slide-info--text">
                            <span>Adventure is never far away</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide Info 3 -->
            <div class="slide-info" data-previous>
                <div class="slide-info__inner">
                    <div class="slide-info--text__wrapper">
                        <div data-title class="slide-info--text">
                            <span>Chamonix</span>
                        </div>
                        <div data-subtitle class="slide-info--text">
                            <span>France</span>
                        </div>
                        <div data-description class="slide-info--text">
                            <span>Let your dreams come true</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slider slider-for">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
    </div>
    <div class="slider slider-nav">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
    </div>
</div>
<section class="product-home sec-02">
    <div class="bg-section"></div>
    <div class="scroll-text top-section font-special"><span>Crocus Origin Crocus Origin Crocus Origin</span></div>
    <div class="wrap-large">
        <div class="content-style">
            <div class="product-box">
                <div class="trans product-item" data-speed="-1">
                    <div class="product-wrap ani-item">
                        <div class="product-pic">
                            <div class="pic-cover"><img class="lazy"
                                                        src="https://www.crocusorigin.vn/uploads/files/products/01.jpg"
                                                        alt="Tr&#224; thảo mộc" loading="lazy"></div>
                        </div>
                        <div class="product-txt  color-white"><small class="ani-item">C&#225;c sản phẩm</small>
                            <div class="product-title"><h3>Tr&#224; thảo mộc</h3></div>
                            <div class="wrap-view-more ani-item"><a
                                    href="https://www.crocusorigin.vn/san-pham/tra-thao-moc-2.html"
                                    class="go-detail view-more"><span>Xem th&#234;m</span></a></div>
                        </div>
                    </div>
                </div>
                <div class="trans product-item" data-speed="1">
                    <div class="product-wrap ani-item">
                        <div class="product-pic">
                            <div class="pic-cover"><img class="lazy"
                                                        src="https://www.crocusorigin.vn/uploads/files/products/bg-01_1.jpg"
                                                        alt="Saffron" loading="lazy"></div>
                        </div>
                        <div class="product-txt  color-white"><small class="ani-item">C&#225;c sản phẩm</small>
                            <div class="product-title"><h3>Saffron</h3></div>
                            <div class="wrap-view-more ani-item"><a
                                    href="https://www.crocusorigin.vn/san-pham/nhuy-hoa-nghe-tay.html"
                                    class="go-detail view-more"><span>Xem th&#234;m</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</html>
@vite('resources/js/slider-slick.js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
