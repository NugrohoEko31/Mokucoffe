import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import logo from '../../../assets/LOGOPUTIH.jpg';

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
    <div className="tambah-bg">
      <h2 className="tambah-title">TAMBAH MENU</h2>
      <div className="tambah-action-bar">
        <Link
            href="/admin/menu"
            as="button"
            type="button"
            className="tambah-btn tambah-btn-cancel"
          >
            Batal
          </Link> 
        <button
          type="submit"
          form="tambahMenuForm"
          disabled={processing}
          className="tambah-btn tambah-btn-save"
        >Tambah</button>
      </div>
      <form
        id="tambahMenuForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="tambah-card"
      >
        <div className="tambah-group">
          <label>Nama Menu</label>
          <input
            type="text"
            value={data.title}
            onChange={e => setData('title', e.target.value)}
            required
            className={`tambah-input ${errors.title ? 'tambah-input-error' : ''}`}
          />
          {errors.title && <div className="tambah-error">{errors.title}</div>}
        </div>
        <div className="tambah-group">
          <label>Harga</label>
          <input
            type="text"
            value={formatHarga(data.price)}
            onChange={handlePriceChange}
            required
            className={`tambah-input ${errors.price ? 'tambah-input-error' : ''}`}
          />
          {errors.price && <div className="tambah-error">{errors.price}</div>}
        </div>
        <div className="tambah-group">
          <label>Deskripsi</label>
          <textarea
            value={data.description}
            onChange={e => setData('description', e.target.value)}
            className="tambah-input"
            rows={2}
          />
        </div>
        <div className="tambah-group">
          <label>Gambar</label>
          <input type="file" onChange={handleFileChange} className="tambah-input" />
          {errors.image && <div className="tambah-error">{errors.image}</div>}
        </div>
        <div className="tambah-group tambah-row" style={{ marginBottom: 19 }}>
          <input
            id="rekomen"
            type="checkbox"
            checked={data.is_recommended}
            onChange={handleCheckboxChange}
            className="tambah-checkbox"
          />
          <label htmlFor="rekomen">
            Tambahkan menu ke rekomendasi
          </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}>
          <img src={logo} alt="MOKU" className="tambah-logo" />
        </div>
      </form>
      <style jsx>{`
        .tambah-bg {
          min-height: 100vh;
          width: 100%;
          background: #fdf8ef;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 34px 16px 20px 16px;
          box-sizing: border-box;
        }
        .tambah-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: #181818;
          text-align: center;
          margin-top: 0;
          margin-bottom: 14px;
          letter-spacing: .045em;
        }
        .tambah-action-bar {
          width: 100%;
          max-width: 440px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          box-sizing: border-box;
        }
        .tambah-btn {
          border-radius: 22px;
          font-weight: 700;
          border: none;
          font-size: 1.04rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: center;
          padding: 8px 37px;
          margin: 0;
          letter-spacing: .06em;
          cursor: pointer;
          transition: background 0.14s, color 0.12s;
          flex: 1;
        }
        .tambah-btn-cancel {
          background: #cfcfd1;
          color: #444;
        }
        .tambah-btn-cancel:hover {
          background: #bcbab8;
          color: #222;
        }
        .tambah-btn-save {
          background: #432206;
          color: #fff;
        }
        .tambah-btn-save:disabled { opacity: 0.7;}
        .tambah-btn-save:hover {
          background: #2f1400;
          color: #fff9ec;
        }
        .tambah-card {
          background: #432206;
          border-radius: 18px;
          box-shadow: 0 8px 35px #68482030;
          padding: 38px 36px 20px 36px;
          width: 100%;
          max-width: 440px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-bottom: 0;
          box-sizing: border-box;
        }
        .tambah-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 19px;
        }
        .tambah-row {
          flex-direction: row !important;
          align-items: center;
          gap: 8px;
        }
        label {
          color: #fff;
          font-weight: 700;
          font-size: 0.97rem;
          letter-spacing: 0.4px;
        }
        .tambah-input, textarea.tambah-input {
          padding: 12px 10px;
          border-radius: 7px;
          border: 2px solid #fff;
          background: #fff;
          color: #432206;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        .tambah-input:focus, textarea.tambah-input:focus {
          border-color: #aa8d59;
          background: #fff8ee;
        }
        .tambah-input-error {
          border-color: #cc3929;
        }
        .tambah-checkbox {
          width: 18px; height: 18px; accent-color: #fff; background: #fff; margin-right: 2px;
        }
        .tambah-error {
          color: #f7c7a5;
          font-size: 13px;
          margin-left: 2px;
          margin-top: -2px;
        }
        .tambah-logo {
          display: block;
          margin: 0 auto;
          margin-bottom: -3px;
          width: 140px;
          height: auto;
        }

        /* ==================== TABLET RESPONSIVE (601px - 1024px) ==================== */
        @media (max-width: 1024px) {
          .tambah-bg {
            padding: 30px 16px 20px 16px;
          }
          .tambah-title {
            font-size: 1.8rem;
            margin-bottom: 12px;
          }
          .tambah-card {
            padding: 32px 28px 18px 28px;
            max-width: 400px;
          }
          .tambah-btn {
            padding: 8px 30px;
            font-size: 1rem;
          }
          .tambah-logo {
            width: 120px;
          }
        }

        /* ==================== MOBILE (481px - 600px) ==================== */
        @media (max-width: 600px) {
          .tambah-bg {
            padding: 25px 12px 15px 12px;
          }
          .tambah-title {
            font-size: 1.6rem;
            margin-bottom: 10px;
          }
          .tambah-action-bar {
            gap: 15px;
            margin-bottom: 12px;
          }
          .tambah-card {
            padding: 28px 20px 15px 20px;
            max-width: 100%;
            border-radius: 16px;
          }
          .tambah-btn {
            padding: 7px 20px;
            font-size: 0.95rem;
            border-radius: 20px;
          }
          .tambah-group {
            margin-bottom: 16px;
            gap: 6px;
          }
          label {
            font-size: 0.9rem;
          }
          .tambah-input, textarea.tambah-input {
            padding: 10px 8px;
            font-size: 0.95rem;
          }
          .tambah-logo {
            width: 100px;
          }
        }

        /* ==================== SMALL MOBILE (320px - 480px) ==================== */
        @media (max-width: 480px) {
          .tambah-bg {
            padding: 20px 10px 12px 10px;
            min-height: 100vh;
          }
          .tambah-title {
            font-size: 1.4rem;
            margin-bottom: 8px;
          }
          .tambah-action-bar {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .tambah-btn {
            width: 100%;
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          .tambah-card {
            padding: 24px 16px 12px 16px;
            border-radius: 14px;
          }
          .tambah-group {
            margin-bottom: 14px;
          }
          label {
            font-size: 0.85rem;
          }
          .tambah-input, textarea.tambah-input {
            padding: 8px;
            font-size: 0.9rem;
          }
          .tambah-checkbox {
            width: 16px;
            height: 16px;
          }
          .tambah-logo {
            width: 90px;
          }
        }

        /* ==================== VERY SMALL MOBILE (max-width: 320px) ==================== */
        @media (max-width: 320px) {
          .tambah-bg {
            padding: 15px 8px 10px 8px;
          }
          .tambah-title {
            font-size: 1.3rem;
          }
          .tambah-card {
            padding: 20px 12px 10px 12px;
            border-radius: 12px;
          }
          .tambah-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
          label {
            font-size: 0.8rem;
          }
          .tambah-input, textarea.tambah-input {
            padding: 7px;
            font-size: 0.85rem;
          }
          .tambah-logo {
            width: 80px;
          }
        }

        /* ==================== LANDSCAPE MOBILE ==================== */
        @media (max-height: 500px) and (orientation: landscape) {
          .tambah-bg {
            padding: 20px 16px 15px 16px;
            min-height: auto;
          }
          .tambah-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
          .tambah-card {
            padding: 20px 24px 12px 24px;
          }
          .tambah-group {
            margin-bottom: 12px;
          }
        }

        /* ==================== HIGH RESOLUTION DISPLAY ==================== */
        @media (min-width: 1400px) {
          .tambah-bg {
            padding: 40px 20px 30px 20px;
          }
          .tambah-title {
            font-size: 2.2rem;
          }
          .tambah-card {
            max-width: 480px;
            padding: 40px 40px 25px 40px;
          }
          .tambah-btn {
            padding: 10px 40px;
            font-size: 1.1rem;
          }
          .tambah-logo {
            width: 160px;
          }
        }
      `}</style>
    </div>
  );
}