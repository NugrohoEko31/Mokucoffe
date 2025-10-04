import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function AdminLayout({ children, title }) {
  return (
    <div className="admin-layout">
      <Head>
        <title>{title || 'Admin Panel'} | Kafe</title>
      </Head>
      
      <aside className="sidebar">
        <h2 className="logo">Admin Kafe</h2>
        <nav>
          <ul>
            <li><Link href="/admin" className="nav-link">Dashboard</Link></li>
            <li><Link href="/admin/menus" className="nav-link">Menus</Link></li>
            <li><Link href="/admin/cafe-info" className="nav-link">Info Kafe</Link></li>
            {/* Tambah link lain sesuai kebutuhan */}
          </ul>
        </nav>
      </aside>
      
      <main className="content">
        <header>
          <h1>{title}</h1>
          {/* Tambahkan tombol logout, profil, dsb */}
        </header>
        <section>
          {children}
        </section>
      </main>

      <style jsx>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .sidebar {
          width: 220px;
          background-color: #333;
          color: white;
          padding: 20px;
        }
        .logo {
          font-size: 1.5rem;
          margin-bottom: 30px;
        }
        nav ul {
          list-style: none;
          padding: 0;
        }
        nav li {
          margin-bottom: 15px;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
        .content {
          flex-grow: 1;
          padding: 30px;
          background-color: #f5f5f5;
        }
        header h1 {
          margin: 0 0 20px 0;
        }
      `}</style>
    </div>
  );
}
