<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('admin')->name('admin.')->group(function () {

    // Route FORM login (GET) dan proses login (POST)
    Route::middleware('guest')->group(function () {
        Route::get('/login', fn () => Inertia::render('Admin/LoginPage'))->name('login');
        Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
    });

    // Route admin dashboard (hanya bisa diakses kalau sudah login)
    Route::middleware('auth')->group(function () {
        Route::get('/dashboard', fn () => Inertia::render('Admin/Dashboard'))->name('dashboard');
        // Tambah route admin lain di sini...
    });

});
