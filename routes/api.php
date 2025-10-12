<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\EnsureTokenIsValid;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);


Route::middleware(EnsureTokenIsValid::class)->group(function () {
    Route::get('users', [UserController::class, 'index']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
});


Route::middleware([EnsureFrontendRequestsAreStateful::class])->group(function () {
    Route::get('users', [UserController::class, 'index'])->middleware('auth:sanctum');
    Route::post('users', [UserController::class, 'store'])->middleware('auth:sanctum');
    Route::put('users/{id}', [UserController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('users/{id}', [UserController::class, 'destroy'])->middleware('auth:sanctum');
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/profile', [UserController::class, 'profile']);
    Route::post('/logout', [UserController::class, 'logout']);
});
