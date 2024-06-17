<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>AJAX Demo</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        div {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        input[type="text"], select {
            padding: 10px;
            width: 80%;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        button {
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
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
        }
        .card {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            background-color: #fff;
        }
    </style>
</head>
<body>
<div>
    <input type="text" id="nameInput" placeholder="Họ tên">
    <input type="text" id="ageInput" placeholder="Tuổi">
    <select id="genderInput">
        <option value="" disabled selected>Giới tính</option>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
        <option value="Khác">Khác</option>
    </select>
    <button id="sendButton">Send</button>
</div>
<div id="responseDiv"></div>

<script>
    $(document).ready(function() {
        // Thiết lập CSRF Token cho tất cả các request AJAX
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $('#sendButton').click(function() {
            var name = $('#nameInput').val();
            var age = $('#ageInput').val();
            var gender = $('#genderInput').val();
            $.ajax({
                url: '{{ route("getvalue") }}',
                type: 'POST',
                data: {
                    name: name,
                    age: age,
                    gender: gender
                },
                success: function(response) {
                    var card = '<div class="card">' +
                        '<p><strong>Họ tên:</strong> ' + response.name + '</p>' +
                        '<p><strong>Tuổi:</strong> ' + response.age + '</p>' +
                        '<p><strong>Giới tính:</strong> ' + response.gender + '</p>' +
                        '</div>';
                    $('#responseDiv').append(card);
                }
            });
        });
    });
</script>
</body>
</html>
