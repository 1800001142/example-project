<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AjaxController extends Controller
{public function getValue(Request $request)
{
    $request->validate([
        'name' => 'required',
        'age' => 'required',
        'gender' => 'required',
    ]);

    $name = $request->input('name');
    $age = $request->input('age');
    $gender = $request->input('gender');

    return response()->json([
        'name' => $name,
        'age' => $age,
        'gender' => $gender
    ]);
}
}
