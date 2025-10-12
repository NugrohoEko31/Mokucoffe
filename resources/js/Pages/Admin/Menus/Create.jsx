import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, Link } from '@inertiajs/react';

export default function CreateMenu() {
  const { data, setData, post, errors, processing } = useForm({
    title: '',
    price: '',
    description: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/menus', {
      forceFormData: true
    });
  };

  // Fungsi untuk membersihkan input harga dari titik agar jadi angka bersih
  function handlePriceChange(e) {
    const value = e.target.value.replace(/\./g, '');
    // Cukup simpan sebagai string di form supaya bisa tetap tampil "12.000"
    if (/^\d*$/.test(value)) { // validasi hanya angka
      setData('price', value);
    }
  }

  // Fungsi untuk menampilkan harga dengan titik ribuan di input
  function formatHarga(number) {
    if (!number) return '';
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const handleFileChange = (e) => {
    setData('image', e.target.files[0]);
  };

  const buttonStyle = {
    borderRadius: 6,
    padding: "8px 24px",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    border: "none",
  };

  return (
    <AdminLayout title="Tambah Menu">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Nama Menu</label>
          <input
            type="text"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            required
          />
          {errors.title && <div style={{color:"#d32f2f"}}>{errors.title}</div>}
        </div>
        <div>
          <label>Harga</label>
          <input
            type="text"  // ubah ke text agar bisa input titik
            value={formatHarga(data.price)}
            onChange={handlePriceChange}
            required
          />
          {errors.price && <div style={{color:"#d32f2f"}}>{errors.price}</div>}
        </div>
        <div>
          <label>Deskripsi</label>
          <textarea
            value={data.description}
            onChange={e => setData('description', e.target.value)}
          />
        </div>
        <div>
          <label>Gambar</label>
          <input type="file" onChange={handleFileChange} />
          {errors.image && <div style={{color:"#d32f2f"}}>{errors.image}</div>}
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <button
            type="submit"
            disabled={processing}
            style={{
              ...buttonStyle,
              background: "#805438",
              color: "#fff",
            }}
          >
            Simpan
          </button>
          <Link
            href="/admin/menu"
            as="button"
            type="button"
            style={{
              ...buttonStyle,
              background: "#dedbd6",
              color: "#805438",
            }}
          >
            Cancel
          </Link>
        </div>
      </form>
      <style>{`
        form > div { margin-bottom: 14px; }
      `}</style>
    </AdminLayout>
  );
}
