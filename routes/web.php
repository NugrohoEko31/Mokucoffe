<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyProfileController;
use App\Http\Controllers\Admin\MenuController;

// ---------- ROUTE COMPANY PROFILE ----------
Route::get('/', [CompanyProfileController::class, 'home']);


Route::get('/home', [CompanyProfileController::class, 'home'])->name('home');
Route::get('/menu', [CompanyProfileController::class, 'menu'])->name('menu');
Route::get('/AllMenuSection', [CompanyProfileController::class, 'showAllMenu'])->name('AllMenuSection');
Route::get('/location', [CompanyProfileController::class, 'location'])->name('location');

// ---------- ROUTE ADMIN ----------
Route::prefix('admin')->name('admin.')->group(function () {
    // Guest: hanya untuk yang belum login
    Route::middleware('guest')->group(function () {
        Route::get('/login', fn () => Inertia::render('Admin/LoginPage'))->name('login');
        Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
    });

    // Auth: hanya untuk yang sudah login
    Route::middleware('auth')->group(function () {        
        Route::get('/menu',        [MenuController::class, 'index'])->name('menus.index');

        // Tampilkan form tambah menu
        Route::get('/menus/create', [MenuController::class, 'create'])->name('menus.create');

        // Simpan menu baru
        Route::post('/menus',       [MenuController::class, 'store'])->name('menus.store');

        // Tampilkan form edit menu
        Route::get('/menus/{menu}/edit', [MenuController::class, 'edit'])->name('menus.edit');

        // Update menu (PUT/PATCH)
        Route::put('/menus/{menu}', [MenuController::class, 'update'])->name('menus.update');
        Route::post('/menus/{menu}', [MenuController::class, 'update'])->name('menus.update');

        // Hapus menu
        Route::delete('/menus/{menu}', [MenuController::class, 'destroy'])->name('menus.destroy');

        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
        });
});
