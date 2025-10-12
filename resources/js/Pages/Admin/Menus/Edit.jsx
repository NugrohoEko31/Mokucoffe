import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, Link } from '@inertiajs/react';

export default function EditMenu({ menu }) {
  // Pastikan menu.price selalu integer (tanpa ".00")
  const initialPrice =
    menu.price
      ? parseInt(menu.price, 10).toString()
      : '';

  const { data, setData, post, errors, processing } = useForm({
    title: menu.title || '',
    price: initialPrice,
    description: menu.description || '',
    image: null,
  });

  // Fungsi format angka dengan titik ribuan saja
  function formatHarga(number) {
    if (!number) return '';
    // Bersihkan angka dulu, pastikan hanya digit
    const digitOnly = number.toString().replace(/\D/g, '');
    return digitOnly.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // Handler input supaya value tetap angka murni (tanpa titik)
  function handlePriceChange(e) {
    // Remove semua karakter non-digit
    const value = e.target.value.replace(/\D/g, '');
    setData('price', value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/admin/menus/${menu.id}`, {
      _method: 'PUT',
      forceFormData: true,
    });
  };

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
    <AdminLayout title="Edit Menu">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Nama Menu</label>
          <input
            type="text"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            required
          />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div>
          <label>Harga</label>
          <input
            type="text"
            value={formatHarga(data.price)}
            onChange={handlePriceChange}
            required
            inputMode="numeric"
          />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>
        <div>
          <label>Deskripsi</label>
          <textarea
            value={data.description}
            onChange={e => setData('description', e.target.value)}
          />
        </div>
        <div>
          <label>Gambar (kosongkan jika tidak ingin ganti)</label>
          <input type="file" onChange={handleFileChange} />
          {errors.image && <div className="error">{errors.image}</div>}
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
            Update
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
        .error {
          color: #b51c1c; margin-top: 4px;
        }
        form > div { margin-bottom: 14px; }
      `}</style>
    </AdminLayout>
  );
}
