<?php

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
