<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CompanyProfileController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function menu()
    {
        return Inertia::render('Menu');
    }

    public function location()
    {
        return Inertia::render('Location');
    }
}
