<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'phone' => [
                'required',
                'string',
                'max:12',
                'regex:/^(03|05|07|08|09)[0-9]{8}$/'
            ],
            'phoneRela' => [
                'required',
                'string',
                'max:12',
                'regex:/^(03|05|07|08|09)[0-9]{8}$/'
            ],
            'email' => [
                'string',
                'email',
                'max:255',
            ],
            'password' => [
                'required',
                'min:6',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/'
            ],
            'confirmPass' => 'required|string|min:8|same:password',
        ];
    }
}
