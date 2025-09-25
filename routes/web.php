<?php

use App\Http\Controllers\CompanyProfileController;

Route::get('/', [CompanyProfileController::class, 'home'])->name('home');
Route::get('/menu', [CompanyProfileController::class, 'menu'])->name('menu');
Route::get('/Location', [CompanyProfileController::class, 'location'])->name('location');

