import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';

export default function EditMenu({ menu }) {
  const { data, setData, put, errors } = useForm({
    title: menu.title || '',
    price: menu.price || '',
    description: menu.description || '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/admin/menus/${menu.id}`); // Route update menu admin
  };

  const handleFileChange = (e) => {
    setData('image', e.target.files[0]);
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
          {errors.title && <div>{errors.title}</div>}
        </div>

        <div>
          <label>Harga</label>
          <input
            type="number"
            value={data.price}
            onChange={e => setData('price', e.target.value)}
            required
          />
          {errors.price && <div>{errors.price}</div>}
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
          {errors.image && <div>{errors.image}</div>}
        </div>

        <button type="submit">Update</button>
      </form>
    </AdminLayout>
  );
}
