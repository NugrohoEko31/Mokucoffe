import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import logo from '../../../assets/LOGOPUTIH.jpg';

export default function EditMenu({ menu }) {
  const initialPrice = menu.price ? parseInt(menu.price, 10).toString() : '';

  const { data, setData, post, errors, processing } = useForm({
    title: menu.title || '',
    price: initialPrice,
    description: menu.description || '',
    image: null,
    is_recommended: !!menu.is_recommended
  });

  function formatHarga(number) {
    if (!number) return '';
    const digitOnly = number.toString().replace(/\D/g, '');
    return digitOnly.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function handlePriceChange(e) {
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

  const handleCheckboxChange = (e) => {
    setData('is_recommended', e.target.checked);
  };

  return (
    <div className="edit-bg">
      <h2 className="edit-title">EDIT MENU</h2>
      <div className="edit-action-bar">
        <Link
          href="/admin/menu"
          as="button"
          type="button"
          className="edit-btn edit-btn-cancel"
        >
          Batal
        </Link>
        <button
          type="submit"
          form="editMenuForm"
          disabled={processing}
          className="edit-btn edit-btn-save"
        >
          Simpan Pengeditan
        </button>
      </div>
      <form
        id="editMenuForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="edit-card"
      >
        <div className="edit-group">
          <label>Nama Menu</label>
          <input
            type="text"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            required
            className={`edit-input ${errors.title ? 'edit-input-error' : ''}`}
          />
          {errors.title && <div className="edit-error">{errors.title}</div>}
        </div>
        <div className="edit-group">
          <label>Harga</label>
          <input
            type="text"
            value={formatHarga(data.price)}
            onChange={handlePriceChange}
            required
            className={`edit-input ${errors.price ? 'edit-input-error' : ''}`}
          />
          {errors.price && <div className="edit-error">{errors.price}</div>}
        </div>
        <div className="edit-group">
          <label>Deskripsi</label>
          <textarea
            value={data.description}
            onChange={e => setData('description', e.target.value)}
            className="edit-input"
            rows={2}
          />
        </div>
        <div className="edit-group">
          <label>Gambar</label>
          <input type="file" onChange={handleFileChange} className="edit-input" />
          {errors.image && <div className="edit-error">{errors.image}</div>}
        </div>
        <div className="edit-group edit-row">
          <input
            id="rekomen"
            type="checkbox"
            checked={data.is_recommended}
            onChange={handleCheckboxChange}
            className="edit-checkbox"
          />
          <label htmlFor="rekomen" className="checkbox-label">
            Tambahkan menu ke rekomendasi
          </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}>
          <img src={logo} alt="MOKU" className="edit-logo" />
        </div>
      </form>

      <style jsx>{`
        .edit-bg {
          min-height: 100vh;
          width: 100%;
          background: #fdf8ef;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 36px 16px 20px 16px;
          margin: 0;
          box-sizing: border-box;
        }
        .edit-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: #181818;
          text-align: center;
          margin-top: 0;
          margin-bottom: 16px;
          letter-spacing: .04em;
        }
        .edit-action-bar {
          width: 100%;
          max-width: 460px;
          margin: 0 auto 15px auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          box-sizing: border-box;
        }
        .edit-btn {
          border-radius: 18px;
          font-weight: 700;
          border: none;
          font-size: 1.01rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 9px 29px;
          letter-spacing: .07em;
          cursor: pointer;
          transition: background 0.14s, color 0.12s;
          flex: 1;
        }
        .edit-btn-cancel {
          background: #d5d3ce;
          color: #fff;
        }
        .edit-btn-cancel:hover {
          background: #bab7b1;
        }
        .edit-btn-save {
          background: #3F2300;
          color: #fff;
        }
        .edit-btn-save:disabled { 
          opacity: 0.7;
        }
        .edit-btn-save:hover {
          background: #654628;
        }
        .edit-card {
          background: #3F2300;
          border-radius: 22px;
          box-shadow: 0 8px 40px #68482036;
          padding: 38px 36px 21px 36px;
          width: 100%;
          max-width: 460px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-bottom: 0;
          box-sizing: border-box;
        }
        .edit-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 19px;
        }
        .edit-row {
          flex-direction: row !important;
          align-items: center;
          gap: 9px;
        }
        label {
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }
        .edit-input, textarea.edit-input {
          padding: 12px 10px;
          border-radius: 8px;
          border: 2px solid #fff;
          background: #fff;
          color: #3F2300;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        .edit-input:focus, textarea.edit-input:focus {
          border-color: #beac93;
          background: #fff8ee;
        }
        .edit-input-error {
          border-color: #cc3929;
        }
        .edit-checkbox {
          width: 20px; 
          height: 20px; 
          accent-color: #fff; 
          background: #fff; 
          margin-right: 2px;
        }
        .edit-error {
          color: #fbc6b3;
          font-size: 13px;
          margin-left: 2px;
          margin-top: -2px;
        }
        .edit-logo {
          display: block;
          margin: 0 auto;
          margin-bottom: 0;
          width: 140px;
          height: auto;
        }
        .checkbox-label {
          font-weight: 600; 
          color: #fff; 
          font-size: 15px; 
          cursor: pointer; 
          margin-left: 7px; 
          margin-top: 2px;
        }

        /* ==================== TABLET RESPONSIVE (769px - 1024px) ==================== */
        @media (max-width: 1024px) {
          .edit-bg {
            padding: 30px 16px 20px 16px;
          }
          .edit-title {
            font-size: 1.8rem;
            margin-bottom: 14px;
          }
          .edit-card {
            padding: 32px 28px 18px 28px;
            max-width: 420px;
          }
          .edit-btn {
            padding: 8px 25px;
            font-size: 0.98rem;
          }
          .edit-logo {
            width: 120px;
          }
        }

        /* ==================== SMALL TABLET (601px - 768px) ==================== */
        @media (max-width: 768px) {
          .edit-bg {
            padding: 25px 14px 15px 14px;
          }
          .edit-title {
            font-size: 1.6rem;
            margin-bottom: 12px;
          }
          .edit-action-bar {
            gap: 15px;
            margin-bottom: 12px;
          }
          .edit-card {
            padding: 28px 24px 16px 24px;
            max-width: 100%;
            border-radius: 18px;
          }
          .edit-btn {
            padding: 8px 20px;
            font-size: 0.95rem;
          }
          .edit-group {
            margin-bottom: 16px;
            gap: 6px;
          }
          label {
            font-size: 0.95rem;
          }
          .edit-input, textarea.edit-input {
            padding: 10px 8px;
            font-size: 0.95rem;
          }
          .edit-logo {
            width: 110px;
          }
          .checkbox-label {
            font-size: 14px;
          }
        }

        /* ==================== MOBILE (481px - 600px) ==================== */
        @media (max-width: 600px) {
          .edit-bg {
            padding: 20px 12px 12px 12px;
          }
          .edit-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          .edit-action-bar {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .edit-btn {
            width: 100%;
            padding: 10px 20px;
            font-size: 0.95rem;
          }
          .edit-card {
            padding: 24px 20px 14px 20px;
            border-radius: 16px;
          }
          .edit-group {
            margin-bottom: 14px;
          }
          label {
            font-size: 0.9rem;
          }
          .edit-input, textarea.edit-input {
            padding: 9px;
            font-size: 0.9rem;
          }
          .edit-checkbox {
            width: 18px;
            height: 18px;
          }
          .edit-logo {
            width: 100px;
          }
          .checkbox-label {
            font-size: 13px;
            margin-left: 6px;
          }
        }

        /* ==================== SMALL MOBILE (320px - 480px) ==================== */
        @media (max-width: 480px) {
          .edit-bg {
            padding: 15px 10px 10px 10px;
            min-height: 100vh;
          }
          .edit-title {
            font-size: 1.4rem;
            margin-bottom: 8px;
          }
          .edit-card {
            padding: 20px 16px 12px 16px;
            border-radius: 14px;
          }
          .edit-btn {
            padding: 9px 16px;
            font-size: 0.9rem;
          }
          .edit-group {
            margin-bottom: 12px;
          }
          label {
            font-size: 0.85rem;
          }
          .edit-input, textarea.edit-input {
            padding: 8px;
            font-size: 0.85rem;
          }
          .edit-checkbox {
            width: 16px;
            height: 16px;
          }
          .edit-error {
            font-size: 12px;
          }
          .edit-logo {
            width: 90px;
          }
          .checkbox-label {
            font-size: 12px;
            margin-left: 5px;
          }
        }

        /* ==================== VERY SMALL MOBILE (max-width: 320px) ==================== */
        @media (max-width: 320px) {
          .edit-bg {
            padding: 12px 8px 8px 8px;
          }
          .edit-title {
            font-size: 1.3rem;
          }
          .edit-card {
            padding: 18px 14px 10px 14px;
            border-radius: 12px;
          }
          .edit-btn {
            padding: 8px 14px;
            font-size: 0.85rem;
          }
          label {
            font-size: 0.8rem;
          }
          .edit-input, textarea.edit-input {
            padding: 7px;
            font-size: 0.8rem;
          }
          .edit-logo {
            width: 80px;
          }
        }

        /* ==================== LANDSCAPE MOBILE ==================== */
        @media (max-height: 500px) and (orientation: landscape) {
          .edit-bg {
            padding: 20px 16px 15px 16px;
            min-height: auto;
          }
          .edit-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          .edit-card {
            padding: 20px 24px 12px 24px;
          }
          .edit-group {
            margin-bottom: 12px;
          }
        }

        /* ==================== HIGH RESOLUTION DISPLAY ==================== */
        @media (min-width: 1400px) {
          .edit-bg {
            padding: 40px 20px 30px 20px;
          }
          .edit-title {
            font-size: 2.2rem;
          }
          .edit-card {
            max-width: 500px;
            padding: 40px 40px 25px 40px;
          }
          .edit-btn {
            padding: 10px 35px;
            font-size: 1.05rem;
          }
          .edit-logo {
            width: 160px;
          }
        }
      `}</style>
    </div>
  );
}