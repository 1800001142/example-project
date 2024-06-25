$.validator.addMethod("phoneVN", function(value, element) {
    return this.optional(element) || /^(03|05|07|08|09)[0-9]{8}$/.test(value);
});

$('#register-form').validate({
    rules:{
        name:{
            required:true
        },
        phone:{
            required:true,
            phoneVN:true

        }
        ,
        phoneRela:{
            required: true,
            phoneVN:true
        },
        email:{
            email:true
        },
        password:{
            required:true
        },
        confirmPass:{
            required:true,
            equalTo: "[name='password']"
        },
        acceptPolicy:{
            required:true
        }
    },
    messages:{
        name: "Họ và tên không được bỏ trống",
        phone:{
            required:"Số điện thoại không được bỏ trống",
            phoneVN:"Vui lòng nhập số điện thoại hợp lệ"
        },
        phoneRela:{
           required: "Mã giới thiệu là Số điện thoại đăng ký của người giới thiệu cho bạn website này, vui lòng liên hệ với họ để được tư vấn. Nếu bạn là khách hàng vãng lai chưa có mã giới thiệu vui lòng nhập mã 0886169393 của công ty để chúng tôi phân bổ hợp lý",
           phoneVN:"Vui lòng nhập số điện thoại hợp lệ" 
        },
        email:"Vui lòng nhập đúng định dạng email",
        password:"Mật khẩu không được bỏ trống",
        confirmPass:{
            required: "Mật khẩu không được bỏ trống",
            equalTo:"Mật khẩu xác nhận không khớp với mật khẩu đã nhập"
        },
        acceptPolicy:"Vui lòng đồng ý điều khoản và quy định"
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.vertical-menu a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            links.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
document.querySelector('.toggle-password').addEventListener('click', function() {
    togglePassword(this);
});
document.querySelector('.toggle-password1').addEventListener('click', function() {
    togglePassword(this);
});
function togglePassword(element) {
    const passwordContainer = element.closest('.password-container');
    const passwordInput = passwordContainer.querySelector('input[type="password"], input[type="text"]');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="-0.5 -0.5 16 16" fill="currentColor" id="Eye-Slash--Streamline-Phosphor"><desc>Eye Slash Streamline Icon: https://streamlinehq.com</desc><path d="M3.1593750000000003 2.028515625a0.46875 0.46875 0 1 0 -0.69375 0.63046875l1.1273437499999999 1.2404296875C1.46484375 5.2054687500000005 0.5496093750000001 7.21875 0.5091796875 7.31015625a0.46875 0.46875 0 0 0 0 0.380859375c0.0205078125 0.046289062500000006 0.516796875 1.1466796875 1.6201171875 2.25C3.5994140625 11.410546875000001 5.456250000000001 12.1875 7.5 12.1875a7.4478515625 7.4478515625 0 0 0 3.0509765625 -0.6345703125l1.2890625 1.4185546875000001a0.46875 0.46875 0 1 0 0.69375 -0.63046875Zm2.7732421874999997 4.4437500000000005 2.4416015625000003 2.6865234375a1.875 1.875 0 0 1 -2.4416015625000003 -2.6865234375ZM7.5 11.25c-1.8035156250000002 0 -3.3791015625000003 -0.6556640625 -4.6833984375 -1.9482421875A7.8023437499999995 7.8023437499999995 0 0 1 1.46484375 7.5c0.27480468750000003 -0.5150390625 1.151953125 -1.9564453125 2.7744140625 -2.893359375l1.0546875 1.1572265625a2.8125 2.8125 0 0 0 3.730078125 4.1015625l0.8630859375000001 0.94921875A6.5625 6.5625 0 0 1 7.5 11.25Zm0.3515625 -5.5916015625a0.46875 0.46875 0 0 1 0.17578125 -0.92109375 2.821875 2.821875 0 0 1 2.2716796875000003 2.4984375 0.46875 0.46875 0 0 1 -0.423046875 0.5103515625 0.3744140625 0.3744140625 0 0 1 -0.0439453125 0 0.46875 0.46875 0 0 1 -0.46875 -0.42539062499999997A1.8802734375 1.8802734375 0 0 0 7.8515625 5.6583984375Zm6.6375 2.0326171874999996c-0.024609375 0.055078125 -0.6181640625 1.3693359375 -1.9546875 2.56640625a0.46875 0.46875 0 1 1 -0.6251953125 -0.6984375 7.779492187500001 7.779492187500001 0 0 0 1.62890625 -2.058984375 7.8017578125 7.8017578125 0 0 0 -1.3546875 -1.8029296875C10.879101562499999 4.4056640625 9.303515625 3.75 7.5 3.75a6.935742187500001 6.935742187500001 0 0 0 -1.134375 0.0919921875A0.46875 0.46875 0 1 1 6.2109375 2.9173828125 7.8515625 7.8515625 0 0 1 7.5 2.8125c2.04375 0 3.9005859375 0.776953125 5.3707031249999995 2.2470703125 1.1033203125 1.1033203125 1.599609375 2.204296875 1.6201171875 2.2505859375a0.46875 0.46875 0 0 1 0 0.380859375Z" stroke-width="1"></path></svg>';
    } else {
        passwordInput.type = "password";
        element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 36 36"><path fill="currentColor" d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83m0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>';
    }
}
