<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Register Account</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    @vite('resources/css/register.scss')

</head>
<body>

<div class="vertical-menu">
    <div class="menu-item"><a href="#">Thông tin cá nhân</a></div>
    <div class="menu-item"><a href="#">Link tiếp thị liên kết</a></div>
    <div class="menu-item"><a href="{{ route('productDetail') }}" >Đơn hàng</a></div>
    <div class="menu-item"><a href="#" class="active">Đăng ký</a></div>
    <div class="menu-item"><a href="#">Sản phẩm yêu thích</a></div>
    <div class="menu-item"><a href="#">Hệ thống của tôi</a></div>
    <div class="menu-item"><a href="#">Thu nhập của tôi</a></div>
    <div class="menu-item"><a href="#">Đổi mật khẩu</a></div>
    <div class="menu-item"><a href="#">Đăng xuất</a></div>
</div>

<div class="contain  animate__animated animate__slideInDown animate__delay-0.6s">

    <h3 style="font-size: 74px; margin-top: 15px; text-align: center">Đăng ký</h3>
    <div class="content">
        <form method="POST" action="{{ route('registerr') }}" id="register-form">
            @csrf
            <div class="input-container">
                <input type="text" placeholder="Họ và Tên (*)" name="name" value="{{ old('name') }}"><br>

                <input type="tel" placeholder="Số điện thoai (*)" name="phone" value="{{ old('phone') }}" pattern="[0-9\s\-\+]*" oninput="this.value = this.value.replace(/[^0-9\s\-\+]/g, '');"><br>

                <input type="tel" placeholder="Số điện thoại người giới thiệu (*)" name="phoneRela" value="{{ old('phoneRela') }}" pattern="[0-9\s\-\+]*" oninput="this.value = this.value.replace(/[^0-9\s\-\+]/g, '');"><br>

                <input type="email" placeholder="Email" name="email" value="{{ old('email') }}"><br>

                <div class="password-container">
                    <div>
                        <input type="password" placeholder="Mật khẩu (*)" class="form-input password-input" name="password" value="{{ old('password') }}">
                    </div>
                    <span class="toggle-password clarity--eye-show-line">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 36 36"><path fill="currentColor" d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83m0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </span>

                </div>
                @error('password')
                <p class ="message-error">Mật khẩu phải ít nhất 8 ký tự, bao gồm: Ít nhất 1 chữ cái hoa, 1 chữ cái thường, 1 ký tự đặc biệt, 1 chữ số</p>
                @enderror
                <div class="password-container">
                    <div>
                        <input type="password" placeholder="Xác nhận lại mật khẩu (*)" class="form-input password-input" name="confirmPass">
                    </div>
                    <span class="toggle-password1 clarity--eye-show-line">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 36 36"><path fill="currentColor" d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83m0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </span>
                </div>
                @error('confirmPass')
                <p class ="message-error">Mật khẩu xác nhận phải khớp với mật khẩu đã nhập</p>
                @enderror
                <div class="checkbox-container">
                    <div>
                        <input type="checkbox" id="terms-checkbox" name="acceptPolicy">
                    </div>
                   <span><p>Đồng ý <a href ="#">điều khoản</a> và <a href="#">quy định</a></p></span>
                </div>

                <div class="button-container">
                    <button type="submit" class="btn-register">Đăng ký tài khoản</button>
                </div>
            </div>
        </form>
        <button class="btn-login">Đăng nhập</button>
    </div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js"></script>
@vite('resources/js/register.js')
</html>
