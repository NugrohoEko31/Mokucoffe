import React, { useEffect, useRef, useState } from "react";
import { Link, router } from "@inertiajs/react";
import ModalKonfirmasi from "@/components/ModalKonfirmasi";

const navButton = {
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 0.4,
  padding: "9px 22px",
  cursor: "pointer",
  minWidth: 105,
  transition: "background 0.15s"
};

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
    <div style={{
      minHeight: "100vh",
      background: "#fff",
      fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
      color: "#23190a",
    }}>

      <h2
        style={{
          fontSize: "2.22rem",
          fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
          fontWeight: 800,
          letterSpacing: ".08em",
          color: "#181818",
          textTransform: "uppercase",
          textAlign: "center",
          margin: "40px 0 32px 0",
          lineHeight: 1.13
        }}
      >
        {title ?? "Kelola Menu"}
      </h2>

      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 0 0 #0000, 0 1px 8px #0001",
        padding: "0 0 38px 0",
        minHeight: 520
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "36px 46px 0 46px",
          boxSizing: "border-box"
        }}>
          <Link href="/admin/menus/create" style={{ ...navButton, background: "#3F2300", textAlign: "center" }}>
            Tambah Menu
          </Link>
          <button
            onClick={handleLogoutClick}
            style={{
              ...navButton,
              background: "#cf2121",
              textAlign: "center"
            }}
          >
            Keluar
          </button>
        </div>
        <div style={{
          width: "100%",
          padding: "0 36px 0 36px",
          boxSizing: "border-box",
        }}>
          {children}
        </div>
      </div>
      <footer
        style={{
          textAlign: "center",
          color: "#644629",
          fontWeight: 600,
          marginTop: 36,
          fontSize: 15,
          background: "transparent"
        }}
      >
        &copy; {new Date().getFullYear()} Moku Coffee Admin Panel
      </footer>

      <ModalKonfirmasi
        open={modalLogoutOpen}
        title="Keluar"
        message="Yakin ingin keluar dari sistem?"
        onOk={handleLogoutConfirm}
        onCancel={() => setModalLogoutOpen(false)}
        okText="Keluar"
        okColor="#be0909"
      />
    </div>
  );
}

export default AdminLayout;
