<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    // Tampilkan daftar menu admin
    public function index()
    {
        $menus = Menu::all();
        return Inertia::render('Admin/Menus/Index', [
            'menuItems' => $menus
        ]);
    }

    // Tampilkan form tambah menu
    public function create()
    {
        return Inertia::render('Admin/Menus/Create');
    }

    // Simpan menu baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('menus', 'public');
        }

        Menu::create($validated);

        return redirect()->route('admin.menus.index')->with('success', 'Menu berhasil ditambahkan.');
    }

    // Tampilkan form edit menu
    public function edit(Menu $menu)
    {
        return Inertia::render('Admin/Menus/Edit', [
            'menu' => $menu
        ]);
    }

    // Update data menu
    public function update(Request $request, Menu $menu)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('menus', 'public');
        }

        $menu->update($validated);

        return redirect()->route('admin.menus.index')->with('success', 'Menu berhasil diperbarui.');
    }

    // Hapus menu
    public function destroy(Menu $menu)
    {
        $menu->delete();
        return redirect()->route('admin.menus.index')->with('success', 'Menu berhasil dihapus.');
    }
}
