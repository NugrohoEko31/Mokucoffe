<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CompanyProfileController;

Route::get('/', function () {
    return Inertia::render('Home'); // atau 'Home' jika file 'Home.jsx'
});

Route::get('/home', [CompanyProfileController::class, 'home'])->name('home');
Route::get('/menu', [CompanyProfileController::class, 'menu'])->name('menu');
Route::get('/location', [CompanyProfileController::class, 'location'])->name('location');
