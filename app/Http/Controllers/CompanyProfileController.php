<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Menu;

class CompanyProfileController extends Controller
{
    public function home()
    {
        $menus = Menu::all();
        return Inertia::render('Home', [
            'menuItems' => $menus,
        ]);
    }

    public function showAllMenu() {
        $menuItems = Menu::all();
        return Inertia::render('AllMenuSection', [
            'menuItems' => $menuItems,
        ]);
    }
}
