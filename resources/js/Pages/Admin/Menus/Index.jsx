import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';

export default function Menus({ menuItems }) {

  function handleDelete(id) {
    if (confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
      router.delete(`/admin/menus/${id}`);
    }
  }

  return (
    <AdminLayout title="Pengelolaan Menu">
      <div className="actions">
        <Link href="/admin/menus/create" className="btn btn-primary">Tambah Menu</Link>
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
          {menuItems.length === 0 && (
            <tr>
              <td colSpan="5">Tidak ada data menu.</td>
            </tr>
          )}
          {menuItems.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                {item.image ? (
                  <img src={`/storage/${item.image}`} alt={item.title} style={{width: '100px'}} />
                ) : 'Tidak ada gambar'}
              </td>
              <td>
                <Link href={`/admin/menus/${item.id}/edit`} className="btn btn-warning">Edit</Link>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .btn {
          padding: 8px 12px;
          margin-right: 10px;
          border: none;
          cursor: pointer;
        }
        .btn-primary {
          background-color: #1976d2;
          color: white;
        }
        .btn-warning {
          background-color: #fbc02d;
          color: black;
        }
        .btn-danger {
          background-color: #d32f2f;
          color: white;
        }
        .menu-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .menu-table th, .menu-table td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
        }
        .actions {
          margin-bottom: 15px;
        }
      `}</style>
    </AdminLayout>
  );
}
