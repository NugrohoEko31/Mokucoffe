import React, { useEffect, useRef, useState } from "react";
import { Link, router } from "@inertiajs/react";
import ModalKonfirmasi from "@/components/ModalKonfirmasi";

function AdminLayout({ title, children }) {
  const idleTimeout = useRef();
  const [modalLogoutOpen, setModalLogoutOpen] = useState(false);

  useEffect(() => {
    function resetTimer() {
      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        router.visit('/admin/login');
      }, 15 * 60 * 1000);
    }
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    resetTimer();
    return () => {
      clearTimeout(idleTimeout.current);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, []);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setModalLogoutOpen(true);
  };

  const handleLogoutConfirm = () => {
    setModalLogoutOpen(false);
    router.post('/admin/logout');
  };

  return (
    <div className="admin-layout">
      <h2 className="page-title">
        {title ?? "Kelola Menu"}
      </h2>

      <div className="content-container">
        <div className="button-container">
          <Link href="/admin/menus/create" className="nav-button add-button">
            Tambah Menu
          </Link>
          <button
            onClick={handleLogoutClick}
            className="nav-button logout-button"
          >
            Keluar
          </button>
        </div>
        <div className="children-container">
          {children}
        </div>
      </div>
      
      <ModalKonfirmasi
        open={modalLogoutOpen}
        title="Keluar"
        message="Yakin ingin keluar dari sistem?"
        onOk={handleLogoutConfirm}
        onCancel={() => setModalLogoutOpen(false)}
        okText="Keluar"
        okColor="#be0909"
      />

      <style jsx>{`
        .admin-layout {
          min-height: 100vh;
          background: #fdf8ef;
          font-family: Montserrat, Helvetica, Arial, sans-serif;
          color: #23190a;
          padding: 0 10px;
        }

        .page-title {
          font-size: 2.22rem;
          font-family: Montserrat, Helvetica, Arial, sans-serif;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #181818;
          text-transform: uppercase;
          text-align: center;
          margin: 40px 0 32px 0;
          line-height: 1.13;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          background: #fdf8ef;
          border-radius: 10px;
          box-shadow: 0 0 0 #0000, 0 1px 8px #0001;
          padding: 0 0 38px 0;
          min-height: 520px;
        }

        .button-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 36px 46px 0 46px;
          box-sizing: border-box;
        }

        .nav-button {
          color: #fff;
          border: none;
          border-radius: 6px;
          font-family: Montserrat, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.4px;
          padding: 9px 22px;
          cursor: pointer;
          min-width: 105px;
          transition: background 0.15s;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }

        .add-button {
          background: #3F2300;
        }

        .add-button:hover {
          background: #2f1a00;
        }

        .logout-button {
          background: #cf2121;
        }

        .logout-button:hover {
          background: #b01c1c;
        }

        .children-container {
          width: 100%;
          padding: 0 36px;
          box-sizing: border-box;
        }

        /* ==================== TABLET (769px - 1024px) ==================== */
        @media (max-width: 1024px) {
          .page-title {
            font-size: 2rem;
            margin: 35px 0 28px 0;
          }

          .content-container {
            min-height: 480px;
          }

          .button-container {
            padding: 30px 35px 0 35px;
          }

          .children-container {
            padding: 0 30px;
          }
        }

        /* ==================== SMALL TABLET (601px - 768px) ==================== */
        @media (max-width: 768px) {
          .page-title {
            font-size: 1.7rem;
            margin: 30px 0 24px 0;
            letter-spacing: 0.05em;
          }

          .content-container {
            min-height: 450px;
            border-radius: 8px;
          }

          .button-container {
            padding: 25px 25px 0 25px;
          }

          .nav-button {
            font-size: 15px;
            padding: 8px 18px;
            min-width: 95px;
          }

          .children-container {
            padding: 0 25px;
          }
        }

        /* ==================== MOBILE (481px - 600px) ==================== */
        @media (max-width: 600px) {
          .admin-layout {
            padding: 0 8px;
          }

          .page-title {
            font-size: 1.5rem;
            margin: 25px 0 20px 0;
            letter-spacing: 0.03em;
          }

          .content-container {
            min-height: 400px;
            padding-bottom: 30px;
          }

          .button-container {
            padding: 20px 20px 0 20px;
          }

          .nav-button {
            font-size: 14px;
            padding: 8px 16px;
            min-width: 90px;
          }

          .children-container {
            padding: 0 20px;
          }
        }

        /* ==================== SMALL MOBILE (320px - 480px) ==================== */
        @media (max-width: 480px) {
          .admin-layout {
            padding: 0 5px;
          }

          .page-title {
            font-size: 1.3rem;
            margin: 20px 0 16px 0;
            letter-spacing: 0.02em;
          }

          .content-container {
            min-height: 350px;
            border-radius: 6px;
            padding-bottom: 25px;
          }

          .button-container {
            padding: 15px 15px 0 15px;
          }

          .nav-button {
            font-size: 13px;
            padding: 7px 14px;
            min-width: 80px;
          }

          .children-container {
            padding: 0 15px;
          }
        }

        /* ==================== VERY SMALL MOBILE (max-width: 320px) ==================== */
        @media (max-width: 320px) {
          .page-title {
            font-size: 1.2rem;
            margin: 15px 0 12px 0;
          }

          .content-container {
            min-height: 320px;
            padding-bottom: 20px;
          }

          .button-container {
            padding: 12px 12px 0 12px;
          }

          .nav-button {
            font-size: 12px;
            padding: 6px 12px;
            min-width: 70px;
          }

          .children-container {
            padding: 0 12px;
          }
        }

        /* ==================== LANDSCAPE MOBILE ==================== */
        @media (max-height: 500px) and (orientation: landscape) {
          .page-title {
            margin: 20px 0 15px 0;
            font-size: 1.4rem;
          }

          .content-container {
            min-height: 300px;
          }

          .button-container {
            padding: 15px 15px 0 15px;
          }
        }

        /* ==================== HIGH RESOLUTION DISPLAY ==================== */
        @media (min-width: 1400px) {
          .content-container {
            max-width: 1300px;
          }

          .page-title {
            font-size: 2.5rem;
            margin: 50px 0 40px 0;
          }

          .button-container {
            padding: 40px 50px 0 50px;
          }

          .nav-button {
            font-size: 17px;
            padding: 10px 25px;
          }

          .children-container {
            padding: 0 40px;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminLayout;