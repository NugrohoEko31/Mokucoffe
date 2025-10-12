import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';

export default function Menus({ menuItems = [] }) {
  function handleDelete(id) {
    if (confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
      router.delete(`/admin/menus/${id}`);
    }
  }

  function renderMenuImage(image) {
    if (!image) return 'Tidak ada gambar';
    // Pastikan path image selalu relative ke /storage
    const src = image.startsWith('menus/') ? `/storage/${image}` : `/storage/menus/${image}`;
    return (
      <img
        src={src}
        alt="Gambar Menu"
        style={{ width: '100px', borderRadius: '6px' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
    );
  }

  return (
    <AdminLayout title="Pengelolaan Menu">
      <div className="actions">
        <Link href="/admin/menus/create" className="btn btn-primary">
          Tambah Menu
        </Link>
      </div>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.length === 0 ? (
            <tr>
              <td colSpan="5">Tidak ada data menu.</td>
            </tr>
          ) : (
            menuItems.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  Rp {Number(item.price).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </td>
                <td>{item.description}</td>
                <td>{renderMenuImage(item.image)}</td>
                <td>
                  <Link
                    href={`/admin/menus/${item.id}/edit`}
                    className="btn btn-warning"
                    as="button"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Lora&family=Montserrat&display=swap');

        @font-face {
          font-family: 'Helvetica';
          src: url('/fonts/Helvetica.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        :root {
          --kopi-main: #805438;     /* Coklat utama - judul, accent, button */
          --kopi-dark: #5a3927;     /* Coklat tua   - background utama */
          --kopi-light: #b48a6e;    /* Coklat muda  - hover, accent, gradient */
          --kopi-bg: #5a3927;       /* Background utama diganti menjadi coklat tua */
          --kopi-bg-card: #5a3927;  /* Background kartu disamakan dengan warna dark */
          --kopi-text: #f4eadf;     /* Teks menjadi terang agar kontras */
          --kopi-white: #fff;       /* Putih murni jika perlu */
        }

        /* Reset dasar */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Body dan background utama */
        body {
          font-family: 'Poppins', sans-serif;
          background: var(--kopi-bg);
          color: var(--kopi-text);
          line-height: 1.5;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Style tabel menu untuk warna kopi dark */
        .menu-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background: var(--kopi-bg-card);
          border-radius: 12px;
          color: var(--kopi-text);
          box-shadow: 0 4px 6px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .menu-table th,
        .menu-table td {
          border: 1px solid var(--kopi-light);
          padding: 12px 15px;
          text-align: left;
          vertical-align: middle;
        }

        .menu-table thead {
          background: var(--kopi-main);
          color: var(--kopi-white);
          font-weight: 700;
        }

        .menu-table tbody tr:hover {
          background: var(--kopi-light);
          color: var(--kopi-dark);
        }

        /* Tombol */
        .btn {
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
          font-family: 'Helvetica', sans-serif;
        }

        .btn-primary {
          background-color: var(--kopi-main);
          color: var(--kopi-white);
        }

        .btn-primary:hover {
          background-color: var(--kopi-light);
          color: var(--kopi-dark);
        }

        .btn-warning {
          background-color: #c3913f;
          color: var(--kopi-white);
        }

        .btn-warning:hover {
          background-color: var(--kopi-main);
          color: var(--kopi-white);
        }

        .btn-danger {
          background-color: #8b1e03;
          color: var(--kopi-white);
        }

        .btn-danger:hover {
          background-color: #5a1300;
          color: var(--kopi-white);
        }

        /* Container aksi tombol */
        .actions {
          margin-bottom: 20px;
          display: flex;
          justify-content: flex-start;
          gap: 12px;
        }

      `}</style>
    </AdminLayout>
  );
}
