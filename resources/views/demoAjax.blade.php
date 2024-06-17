<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>AJAX Demo</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
        .main {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin-top: -90px;
            background-color: #fff;
            text-align: center;
            padding: 20px;
            border-radius: 8px;
        }

        div {

        }

        input[type="text"],
        input[type="date"],
        select {
            padding: 10px;
            width: 400px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        #responseDiv {
            margin-top: -60px;
            padding: 10px;
            border-radius: 4px;
            background-color: #f9f9f9;
        }

        .card {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            background-color: #fff;
            text-align:center;
        }

        .container {
            display: flex;
        }

        h3 {
            width: 50%;
        }
    </style>
</head>

<body>
<div class="main">
    <div>
        <div class="container">
            <h3>Họ tên</h3>
            <input type="text" id="nameInput" placeholder="Họ tên">
        </div>
        <div class="container">
            <h3>Ngày Sinh</h3>
            <input type="date" id="ageInput" placeholder="Tuổi">
        </div>
        <div class="container">
            <h3>Giới tính</h3>
            <select id="genderInput">
                <option value="" disabled selected>Giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
            </select>
        </div>
        <button id="sendButton">Send</button>
    </div>
</div>
<div id="responseDiv"></div>

<script>

    $(document).ready(function () {
        // Thiết lập CSRF Token cho tất cả các request AJAX
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var formattedDate = '';
        $('#sendButton').click(function () {
            var name = $('#nameInput').val();
            var age = $('#ageInput').val();
            var gender = $('#genderInput').val();

            if (name.trim() === '' || age.trim() === '') {
                showError('Vui lòng điền đầy đủ thông tin');
                return;
            }
            var regex = /\d/;
            if (regex.test(name)) {
                showError('Tên không được chứa số');
                return;
            }
            if (age) {
                var selectedDate = new Date(age);
                var currentDate = new Date();

                if (selectedDate > currentDate) {
                    showError('Ngày sinh không được lớn hơn ngày hiện tại');
                    return;
                }

                var day = selectedDate.getDate();
                var month = selectedDate.getMonth() + 1;
                var year = selectedDate.getFullYear();

                formattedDate = day + '/' + month + '/' + year;
            }
            if (!gender || gender.trim() === '') {
                showError('Vui lòng chọn giới tính');
                return;
            }

            $.ajax({
                url: '{{ route("getvalue") }}',
                type: 'POST',
                data: {
                    name: name,
                    age: age,
                    gender: gender
                },
                success: function (response) {
                    var card = '<div class="card">' +
                        '<p><strong>Họ tên:</strong> ' + response.name + '</p>' +
                        '<p><strong>Ngày sinh:</strong> ' + formattedDate + '</p>' +
                        '<p><strong>Giới tính:</strong> ' + response.gender + '</p>' +
                        '</div>';
                    $('#responseDiv').append(card);
                    showSuccess('Thêm người dùng thành công');
                    $('#nameInput').val('');
                    $('#ageInput').val('');
                    $('#genderInput').val('');
                }
            });
        });

        function showError(message) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: message
            });
        }
        function showSuccess(message) {
            Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: message
            });
        }
    });
</script>
</body>

</html>
