<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return Inertia::render('Admin/LoginPage', [
                'errors' => ['message' => 'Email atau password salah'],
                'email' => $request->email
            ]);
        }

        Auth::login($user);

        return redirect()->intended('/admin/menu');
        
    }

    public function logout(Request $request)
    {
        Auth::logout();

        // Invalidate session dan regenerate CSRF token (opsional, best practice)
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Redirect ke halaman login admin
        return redirect()->route('admin.login');
    }
}

