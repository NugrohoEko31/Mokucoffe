import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, Link } from '@inertiajs/react';

export default function CreateMenu() {
  const { data, setData, post, errors, processing } = useForm({
    title: '',
    price: '',
    description: '',
    image: null,
    is_recommended: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/menus', { forceFormData: true });
  };

  function handlePriceChange(e) {
    const value = e.target.value.replace(/\./g, '');
    if (/^\d*$/.test(value)) {
      setData('price', value);
    }
  }

  function formatHarga(number) {
    if (!number) return '';
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const handleFileChange = (e) => {
    setData('image', e.target.files[0]);
  };

  const handleCheckboxChange = (e) => {
    setData('is_recommended', e.target.checked);
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#b09b92", // warna latar halaman (bisa diganti)
    }}>
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="form-menu">
      <div className="form-group">
        <label>Nama Menu</label>
        <input
          type="text"
          value={data.title}
          onChange={e => setData('title', e.target.value)}
          required
          className={`input ${errors.title ? 'input-error' : ''}`}
        />
        {errors.title && <div className="error">{errors.title}</div>}
      </div>
      <div className="form-group">
        <label>Harga</label>
        <input
          type="text"
          value={formatHarga(data.price)}
          onChange={handlePriceChange}
          required
          className={`input ${errors.price ? 'input-error' : ''}`}
        />
        {errors.price && <div className="error">{errors.price}</div>}
      </div>
      <div className="form-group">
        <label>Deskripsi</label>
        <textarea
          value={data.description}
          onChange={e => setData('description', e.target.value)}
          className="input"
        />
      </div>
      <div className="form-group">
        <label>Gambar</label>
        <input type="file" onChange={handleFileChange} className="input" />
        {errors.image && <div className="error">{errors.image}</div>}
      </div>
      <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '11px', marginBottom: 17 }}>
        <input
          id="rekomen"
          type="checkbox"
          checked={data.is_recommended}
          onChange={handleCheckboxChange}
          style={{ width: 19, height: 19, accentColor: 'var(--kopi-main)', marginRight: 6 }}
        />
        <label htmlFor="rekomen" style={{ fontWeight: 600, color: 'var(--kopi-main)', cursor: 'pointer', fontSize: 16 }}>
          Tambahkan menu ke menu rekomen
        </label>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          disabled={processing}
          className="btn btn-submit"
        >
          Simpan
        </button>
        <Link
          href="/admin/menu"
          as="button"
          type="button"
          className="btn btn-cancel"
        >
          Cancel
        </Link>
      </div>
      <style jsx>{`
        .form-menu {
          max-width: 490px;
          margin: 0 auto;
          background: var(--kopi-bg-card);
          border-radius: 17px;
          padding: 36px 34px 29px 34px;
          box-shadow: 0 7px 38px #80543833, 0 2px 8px #3e26152a;
          font-family: 'Montserrat', Helvetica, sans-serif;
          border: 1.5px solid var(--kopi-light);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 20px;
        }

        label {
          color: var(--kopi-light);
          font-weight: 700;
          font-size: 1.02rem;
          letter-spacing: 1px;
        }

        .input {
          padding: 13px 12px;
          border-radius: 8px;
          border: 2px solid var(--kopi-light);
          background: #fff9f3;
          color: var(--kopi-dark);
          font-size: 17px;
          font-family: 'Montserrat', Helvetica, sans-serif;
          transition: border 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .input:focus {
          border-color: var(--kopi-main);
          box-shadow: 0 0 0 2px #80543822;
        }
        .input-error {
          border-color: #cc3929;
        }

        .error {
          color: #d32f2f;
          font-size: 14px;
          margin-left: 4px;
          margin-top: -3px;
        }

        .form-actions {
          display: flex;
          gap: 23px;
          margin-top: 20px;
        }

        .btn {
          border-radius: 8px;
          padding: 12px 38px;
          font-weight: 800;
          font-size: 17px;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, color 0.2s, box-shadow 0.2s;
          font-family: 'Montserrat', Helvetica, sans-serif;
        }
        .btn-submit {
          background: linear-gradient(88deg, var(--kopi-main), var(--kopi-light) 94%);
          color: var(--kopi-white);
          box-shadow: 0 4px 16px #80543813;
        }
        .btn-submit:hover,
        .btn-submit:focus {
          background: var(--kopi-main);
          color: var(--kopi-light);
        }
        .btn-cancel {
          background: #f9f6f2;
          color: var(--kopi-main);
          border: 2px solid var(--kopi-light);
        }
        .btn-cancel:hover,
        .btn-cancel:focus {
          background: var(--kopi-light);
          color: var(--kopi-white);
        }
      `}</style>
      </form>
    </div>
  );
}
