import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import ModalKonfirmasi from '@/components/ModalKonfirmasi';

export default function Menus({ menuItems = [] }) {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    onOk: null,
    okText: "OK",
    okColor: "#be0909",
  });

  function confirmDelete(id) {
    setModal({
      open: true,
      title: 'Hapus',
      message: 'Anda yakin ingin menghapus menu ini?',
      okText: 'Hapus',
      okColor: '#be0909',
      onOk: () => {
        setModal(m => ({ ...m, open: false }));
        router.delete(`/admin/menus/${id}`);
      }
    });
  }

  function renderMenuImage(image) {
    if (!image) return 'Tidak ada gambar';
    const src = image.startsWith('menus/') ? `/storage/${image}` : `/storage/menus/${image}`;
    return (
      <img
        src={src}
        alt="Gambar Menu"
        className="menu-image"
        onError={e => { e.target.style.display = 'none'; }}
      />
    );
  }

  return (
    <AdminLayout title="Kelola Menu">
      <div className="table-container">
        <table className="menu-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Menu</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Gambar</th>
              <th>Rekomendasi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-data">Tidak ada data menu.</td>
              </tr>
            ) : (
              menuItems.map((item, idx) => (
                <tr key={item.id}>
                  <td className="number-cell">{idx + 1}</td>
                  <td className="title-cell">{item.title}</td>
                  <td className="price-cell">Rp.{Number(item.price).toLocaleString('id-ID')}</td>
                  <td className="desc-cell">{item.description}</td>
                  <td className="image-cell">{renderMenuImage(item.image)}</td>
                  <td>
                    {Boolean(item.is_recommended) ? (
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        border: "2px solid #222",
                        borderRadius: "50%",
                        width: 27,
                        height: 27,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#222"
                      }}>
                        ✓
                      </span>
                    ) : null}
                  </td>
                  <td className="action-cell">
                    <Link
                      href={`/admin/menus/${item.id}/edit`}
                      as="button"
                      className="btn edit"
                    >Edit</Link>
                    <button
                      onClick={() => confirmDelete(item.id)}
                      className="btn hapus"
                    >Hapus</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ModalKonfirmasi
        open={modal.open}
        title={modal.title}
        message={modal.message}
        onOk={modal.onOk}
        onCancel={() => setModal(m => ({ ...m, open: false }))}
        okText={modal.okText}
        okColor={modal.okColor}
      />

      <style jsx>{`
        .table-container {
          margin: 10px 0 0 0;
          padding: 0;
          width: 100%;
          overflow-x: auto;
          background: #fdf8ef;
        }

        .menu-table {
          width: 100%;
          border-collapse: collapse;
          background: #fdf8ef;
          min-width: 800px;
        }

        .menu-table th, .menu-table td {
          border: 1px solid #543913;
          padding: 7px 9px;
          font-size: 1rem;
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
        }

        .menu-table th {
          background: #3F2300;
          color: #fff;
          font-weight: 800;
          font-size: 1.04rem;
        }

        .menu-table td {
          color: #23190a;
          background: #fdf8ef;
          font-weight: 500;
        }

        .menu-table tr:nth-child(even) td {
          background: #fdf8ef;
        }

        .no-data {
          text-align: center;
          padding: 20px;
        }

        .menu-image {
          width: 70px;
          height: 60px;
          border-radius: 6px;
          object-fit: cover;
          background: #eee;
        }

        .recommend-badge {
          display: inline-flex;
          alignItems: center;
          justifyContent: center;
          background: #fff;
          border: 2px solid #222;
          border-radius: 50%;
          width: 27px;
          height: 27px;
          fontSize: 18px;
          fontWeight: bold;
          color: #222;
        }

        .btn {
          font-size: 0.98rem;
          padding: 6px 17px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
          font-weight: bold;
        }

        .btn.edit {
          background: #c3a136;
          color: #fff;
          border-radius: 6px;
          margin-right: 10px;
          padding: 7px 19px;
          font-size: 1rem;
        }

        .btn.edit:hover {
          background: #ae8d25;
        }

        .btn.hapus {
          background: #cc1616;
          color: #fff;
          border-radius: 6px;
          padding: 7px 19px;
          font-size: 1rem;
        }

        .btn.hapus:hover {
          background: #a91414;
        }

        /* ==================== TABLET RESPONSIVE (769px - 1024px) ==================== */
        @media (max-width: 1024px) {
          .menu-table {
            min-width: 700px;
          }

          .menu-table th, .menu-table td {
            padding: 6px 8px;
            font-size: 0.95rem;
          }

          .menu-table th {
            font-size: 1rem;
          }

          .menu-image {
            width: 60px;
            height: 50px;
          }

          .btn {
            padding: 5px 14px;
            font-size: 0.9rem;
          }

          .btn.edit, .btn.hapus {
            padding: 6px 16px;
          }
        }

        /* ==================== SMALL TABLET (601px - 768px) ==================== */
        @media (max-width: 768px) {
          .menu-table {
            min-width: 650px;
          }

          .menu-table th, .menu-table td {
            padding: 5px 6px;
            font-size: 0.9rem;
          }

          .menu-table th {
            font-size: 0.95rem;
          }

          .menu-image {
            width: 50px;
            height: 45px;
          }

          .recommend-badge {
            width: 22px;
            height: 22px;
            font-size: 14px;
          }

          .btn {
            padding: 4px 12px;
            font-size: 0.85rem;
          }

          .btn.edit, .btn.hapus {
            padding: 5px 14px;
            margin-right: 5px;
          }
        }

        /* ==================== MOBILE (481px - 600px) ==================== */
        @media (max-width: 600px) {
          .table-container {
            margin: 5px 0 0 0;
          }

          .menu-table {
            min-width: 600px;
          }

          .menu-table th, .menu-table td {
            padding: 4px 5px;
            font-size: 0.85rem;
          }

          .menu-table th {
            font-size: 0.9rem;
            padding: 6px 4px;
          }

          .menu-image {
            width: 45px;
            height: 40px;
          }

          .recommend-badge {
            width: 20px;
            height: 20px;
            font-size: 12px;
          }

          .btn {
            padding: 3px 10px;
            font-size: 0.8rem;
          }

          .btn.edit, .btn.hapus {
            padding: 4px 12px;
            margin-right: 4px;
          }
        }

        /* ==================== SMALL MOBILE (320px - 480px) ==================== */
        @media (max-width: 480px) {
          .menu-table {
            min-width: 550px;
          }

          .menu-table th, .menu-table td {
            padding: 3px 4px;
            font-size: 0.8rem;
          }

          .menu-table th {
            font-size: 0.85rem;
            padding: 5px 3px;
          }

          .menu-image {
            width: 40px;
            height: 35px;
          }

          .recommend-badge {
            width: 18px;
            height: 18px;
            font-size: 11px;
          }

          .btn {
            padding: 2px 8px;
            font-size: 0.75rem;
          }

          .btn.edit, .btn.hapus {
            padding: 3px 10px;
            margin-right: 3px;
          }

          .no-data {
            padding: 15px;
            font-size: 0.9rem;
          }
        }

        /* ==================== VERY SMALL MOBILE (max-width: 320px) ==================== */
        @media (max-width: 320px) {
          .menu-table {
            min-width: 500px;
          }

          .menu-table th, .menu-table td {
            padding: 2px 3px;
            font-size: 0.75rem;
          }

          .menu-table th {
            font-size: 0.8rem;
          }

          .menu-image {
            width: 35px;
            height: 30px;
          }

          .btn {
            padding: 2px 6px;
            font-size: 0.7rem;
          }

          .btn.edit, .btn.hapus {
            padding: 2px 8px;
          }
        }

        /* ==================== LANDSCAPE MOBILE ==================== */
        @media (max-height: 500px) and (orientation: landscape) {
          .table-container {
            margin: 5px 0;
          }

          .menu-table th, .menu-table td {
            padding: 4px 6px;
          }

          .menu-image {
            width: 50px;
            height: 45px;
          }
        }

        /* ==================== HIGH RESOLUTION DISPLAY ==================== */
        @media (min-width: 1400px) {
          .menu-table th, .menu-table td {
            padding: 8px 12px;
            font-size: 1.05rem;
          }

          .menu-table th {
            font-size: 1.1rem;
          }

          .menu-image {
            width: 80px;
            height: 70px;
          }

          .btn {
            padding: 7px 20px;
            font-size: 1rem;
          }

          .btn.edit, .btn.hapus {
            padding: 8px 22px;
          }
        }
      `}</style>
    </AdminLayout>
  );
}