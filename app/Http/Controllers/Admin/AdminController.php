<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminController extends Controller
{
    // Tampilkan halaman dashboard admin
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard', [
            'title' => 'Dashboard Admin'
        ]);
    }
}
