<!DOCTYPE HTML>
<html lang="vi">
<head>
    <meta charset="utf-8">
    <title>Navigation Bar</title>
    <link rel="shortcut icon" href="https://www.crocusorigin.vn/Content/theme_btq/images/favicon.ico"
          type="image/x-icon">
    @vite('resources/css/navigation-bar.scss')
</head>
<body>
<div id="render-styles"></div>
<noscript id="deferred-styles">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet">
    @vite('resources/css/navigation-bar.scss')
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
<header>
    <div class="nav-click">
        <div class="active-nav">
            <div class="wrap-toggle"><span class="line-toggle toggle-1"></span><span
                    class="line-toggle toggle-2"></span><span class="line-toggle toggle-3"></span></div>
        </div>
    </div>
    <nav class="navigation">
        <div class="overlay-menu">
            <div class="logo-menu"><span class="circle-text"></span></div>
        </div>
        <div class="nav">
            <ul class="main-menu">

                <li><a class="nav-item hover-text link-home" href="/" data-name="home-page">TRANG CHỦ</a></li>
                <li class="has-sub">
                    <button class="nav-item hover-text" data-show="01" data-name="product-page">Sản phẩm</button>
                    <div class="sub-menu-drop" data-show="01">
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-05"
                                                         href="https://www.crocusorigin.vn/san-pham/nguyen-lieu-bep.html">Nguyên
                                liệu Bếp</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-06"
                                                         href="https://www.crocusorigin.vn/san-pham/gia-vi.html">Gia
                                vị</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-04"
                                                         href="https://www.crocusorigin.vn/san-pham/hat-va-qua-kho.html">Hạt
                                và quả khô</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-02"
                                                         href="https://www.crocusorigin.vn/san-pham/ca-phe.html">Cà
                                phê</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-01"
                                                         href="https://www.crocusorigin.vn/san-pham/tra-thao-moc-2.html">Trà
                                thảo mộc</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-03"
                                                         href="https://www.crocusorigin.vn/san-pham/nhuy-hoa-nghe-tay.html">Nhụy
                                hoa Nghệ tây</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-07"
                                                         href="https://www.crocusorigin.vn/san-pham/dinh-duong-bo-sung.html">Dinh
                                dưỡng bổ sung</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-08"
                                                         href="https://www.crocusorigin.vn/san-pham/suc-khoe-lam-dep.html">Sức
                                khoẻ & Làm đẹp</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="product-page-09"
                                                         href="https://www.crocusorigin.vn/san-pham/nuoc-hoa-tinh-dau-nen-thom.html">Nước
                                hoa . Tinh dầu . Nến thơm</a></div>
                    </div>
                </li>
                <li><a class="nav-item hover-text link-load" data-name="brand-page"
                       href="https://www.crocusorigin.vn/thuong-hieu.html">Thương hiệu</a></li>
                <li class="has-sub">
                    <button class="nav-item hover-text" data-show="02" data-name="news-page">Truyền thông</button>
                    <div class="sub-menu-drop" data-show="02">
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="news-page-04"
                                                         href="https://www.crocusorigin.vn/truyen-thong/kien-thuc-dinh-duong.html">Kiến
                                thức dinh dưỡng</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="news-page-02"
                                                         href="https://www.crocusorigin.vn/truyen-thong/song-lanh-manh.html">Sống
                                lành mạnh</a></div>
                    </div>
                </li>
                <li class="has-sub">
                    <button class="nav-item hover-text" data-show="03" data-name="crocus-page">Sứ mệnh</button>
                    <div class="sub-menu-drop" data-show="03">
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="crocus-page-01"
                                                         href="https://www.crocusorigin.vn/su-menh/nguon-goc-thien-nhien.html">Nguồn
                                gốc thiên nhiên</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="crocus-page-02"
                                                         href="https://www.crocusorigin.vn/su-menh/cham-soc-suc-khoe.html">Chăm
                                sóc sức khỏe</a></div>
                        <div class="item-menu-second"><a class="hover-text link-load" data-name="crocus-page-03"
                                                         href="https://www.crocusorigin.vn/su-menh/ket-noi-va-lan-toa.html">Kết
                                nối và lan toả</a></div>
                    </div>
                </li>
                <li><a class="nav-item hover-text link-load" data-name="story-page"
                       href="https://www.crocusorigin.vn/cau-chuyen-crocus.html">Câu chuyện Crocus</a></li>
                <li><a class="nav-item hover-text link-load" data-name="contact-page"
                       href="https://www.crocusorigin.vn/lien-he.html">Liên hệ</a></li>
            </ul>
        </div>
    </nav>
    <div class="right-header">
        <div class="container" id="home-page">
            <div class=" slide-banner"></div>
        </div>
    </div>
</header>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
@vite('resources/js/navigation-bar.js')
</body>
</html>
