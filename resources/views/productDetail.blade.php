<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertical Left Menu</title>
    @vite('resources/css/orderDetail.scss')
</head>
<body>

<div class="vertical-menu">
    <div class="menu-item"><a href="#">Thông tin cá nhân</a></div>
    <div class="menu-item"><a href="#">Link tiếp thị liên kết</a></div>
    <div class="menu-item"><a href="#" class="active">Đơn hàng</a></div>
    <div class="menu-item"><a href="#">Đăng ký</a></div>
    <div class="menu-item"><a href="#">Sản phẩm yêu thích</a></div>
    <div class="menu-item"><a href="#">Hệ thống của tôi</a></div>
    <div class="menu-item"><a href="#">Thu nhập của tôi</a></div>
    <div class="menu-item"><a href="#">Đổi mật khẩu</a></div>
    <div class="menu-item"><a href="#">Đăng xuất</a></div>
</div>

<div class="contain">
    <div class="content">
    <div class="product-item">
        <p class="small-font">Sản phẩm</p>
         <div class="product-info">

        </div>
        <div class="product-column column-1 small-font">Giá bán</div>
        <div class="product-column column-2 small-font">%CK</div>
        <div class="product-column column-3 small-font">Số lượng</div>
        <div class="product-column column-4 small-font">Thành tiền</div>

    </div>
    <div class="product-item">
        <img class="product-image" src="https://s3-alpha-sig.figma.com/img/302c/b439/e2585a4195aef7e0148ad3f625ac64c0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eAVAkC1TDGCFo5C9MeYy9lqB-ksGwlbM0HrQ5jYfW0VKpbAmz57nhy9uHGmgQ9tbK87QgG45JXowqxxpDDjL9S263aCjXabyG7L65TMHO93lj5QMTKha65zxaNaUPcAYWn4GzBctzru6pGjmrbzDResbSq6OVWEJ88raYj3TNpuO7uJoVVIzkbgaVwmaVCspQyYtezCbO-s8~0Ne7GdqZ8jt~ufGPyi-SOkM9lFc52R4RLdgK9MqN3TevjZkg35VDSHkoFoqzxGLHh4ckrnzCoKfNPJR6qz5C4ZsBvG9kAmHmAKHq4fLo3V9xaJoyEw7WOQPL2x0bL8T5WF26JsNsg__" alt="Product 1">
        <div class="product-info column-2 ">
            <strong class="small-font">Sâm đẹp , tăng cường nội tiết tố</strong><br>
            <p class="big-font" style="font-weight:100; margin-top:3px">Sâm đẹp da Beauty Sâm</p><br>
            <div class="display-flex">
                <p class="font-bold underline">120g</p>
                <div class="info-wrapper">
                    <p style="font-weight:100;">Mã số:</p>
                    <p class="font-bold">Crocus Origin</p>
                </div>
            </div>
        </div>
        <div class="product-column font-bold" style="margin-left: -70px">14,000,000</div>
        <div class="product-column font-bold"style="margin-left: 20px">100%</div>
        <div class="product-column column-3 small-font">x2</div>
        <div class="product-column column-4 font-bold">14,000,000</div>
    </div>
    <div class="product-item">
        <img class="product-image" src="https://s3-alpha-sig.figma.com/img/302c/b439/e2585a4195aef7e0148ad3f625ac64c0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eAVAkC1TDGCFo5C9MeYy9lqB-ksGwlbM0HrQ5jYfW0VKpbAmz57nhy9uHGmgQ9tbK87QgG45JXowqxxpDDjL9S263aCjXabyG7L65TMHO93lj5QMTKha65zxaNaUPcAYWn4GzBctzru6pGjmrbzDResbSq6OVWEJ88raYj3TNpuO7uJoVVIzkbgaVwmaVCspQyYtezCbO-s8~0Ne7GdqZ8jt~ufGPyi-SOkM9lFc52R4RLdgK9MqN3TevjZkg35VDSHkoFoqzxGLHh4ckrnzCoKfNPJR6qz5C4ZsBvG9kAmHmAKHq4fLo3V9xaJoyEw7WOQPL2x0bL8T5WF26JsNsg__" alt="Product 1">
        <div class="product-info column-2 ">
            <strong class="small-font" >Sâm đẹp , tăng cường nội tiết tố</strong><br>
            <p class="big-font" style="font-weight:100; margin-top:3px">Sâm đẹp da Beauty Sâm</p><br>
            <div class="display-flex">
                <p class="font-bold underline">120g</p>
                <div class="info-wrapper">
                    <p style="font-weight:100;">Mã số:</p>
                    <p class="font-bold">Crocus Origin</p>
                </div>
            </div>
        </div>
        <div class="product-column font-bold" style="margin-left: -70px">14,000,000</div>
        <div class="product-column font-bold"style="margin-left: 20px">100%</div>
        <div class="product-column column-3 small-font">x2</div>
        <div class="product-column column-4 font-bold">14,000,000</div>
    </div>
    </div>
    <!-- Thêm các hàng khác tương tự nếu cần -->
</div>

</body>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('.vertical-menu a');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default link behavior

                // Remove 'active' class from all links
                links.forEach(function(item) {
                    item.classList.remove('active');
                });

                // Add 'active' class to the clicked link
                this.classList.add('active');
            });
        });
    });

</script>
</html>
