<?php

use App\Http\Controllers\AjaxController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/slider', function () {
    return view('slider');
});
Route::get('/slider-slick', function () {
    return view('slider-slick');
});
Route::get('/crocus-origin', function () {
    return view('crocus-origin');
});
Route::get('/button-stories', function () {
    return view('button-stories');
});
Route::get('/product', function () {
    return view('product');
});
Route::get('/navigation-bar', function () {
    return view('navigation-bar');
});
Route::get('/my-form', function () {
    return view('demoAjax');
});

Route::post('/getvalue', [AjaxController::class, 'getValue'])->name('getvalue');
