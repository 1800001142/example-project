<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
     public function registerr(RegisterRequest $request)

    {
        $email = $request->email ? $request->email : null;
        User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'phoneRela' => $request->phoneRela,
            'email' => $email,
            'password' => Hash::make($request->password),
        ]);

        return redirect(route("productDetail"))->with('success', 'Registration successful! Please login.');
    }
}
