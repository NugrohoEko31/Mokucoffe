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
        style={{ width: 70, height: 60, borderRadius: 6, objectFit: 'cover', background: "#eee" }}
        onError={e => { e.target.style.display = 'none'; }}
      />
    );
  }

  return (
    <AdminLayout title="Kelola Menu">
      <div style={{ margin: "10px 0 0 0", padding: 0 }}>
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
                <td colSpan="7" style={{ textAlign: "center" }}>Tidak ada data menu.</td>
              </tr>
            ) : (
              menuItems.map((item, idx) => (
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>Rp.{Number(item.price).toLocaleString('id-ID')}</td>
                  <td>{item.description}</td>
                  <td>{renderMenuImage(item.image)}</td>
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
                  <td style={{ textAlign: "center" }}>
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
        .menu-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
        }
        .menu-table th,
        .menu-table td {
          border: 1.5px solid #543913;
          padding: 12px 13px 11px 13px;
          text-align: center;
          font-size: 1.04rem;
        }
        .menu-table th {
          background: #3F2300;
          color: #fff;
          font-family: 'Montserrat', Helvetica, Arial, sans-serif;
          font-weight: 800;
          font-size: 1.12rem;
        }
        .menu-table td {
          color: #23190a;
          font-family: 'Montserrat', Helvetica, Arial, sans-serif;
          font-weight: 600;
          background: #fff;
        }
        .menu-table tr:nth-child(even) td {
          background: #faf8f6;
        }
        .btn.edit {
          background: #c3a136;
          color: #fff;
          border-radius: 6px;
          font-weight: bold;
          margin-right: 10px;
          padding: 7px 19px;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.15s;
        }
        .btn.edit:hover {
          background: #ae8d25;
        }
        .btn.hapus {
          background: #cc1616;
          color: #fff;
          border-radius: 6px;
          font-weight: bold;
          padding: 7px 19px;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.15s;
        }
        .btn.hapus:hover {
          background: #a91414;
        }
      `}</style>
    </AdminLayout>
  );
}
