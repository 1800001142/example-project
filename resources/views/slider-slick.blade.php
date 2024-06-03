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
