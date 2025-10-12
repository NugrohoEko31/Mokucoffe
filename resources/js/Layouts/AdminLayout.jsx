import React, { useEffect, useRef } from "react";
import { Link, router } from "@inertiajs/react";

const navLink = {
  color: "var(--kopi-white)", 
  textDecoration: "none",
  padding: "9px 18px",
  borderRadius: "7px",
  fontFamily: "Helvetica, sans-serif",
  transition: "background .25s",
  fontSize: 18,
  letterSpacing: 0.5,
  fontWeight: 500
};

function AdminLayout({ title, children }) {
    const idleTimeout = useRef();
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
  
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--kopi-dark)",
        fontFamily: "Helvetica, sans-serif",
        color: "var(--kopi-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <header
        style={{
          background: "var(--kopi-dark)",
          color: "var(--kopi-white)",
          padding: "21px 36px",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "1.5px",
          fontFamily: "Helvetica, sans-serif",
          boxShadow: "0 6px 18px #5a392715",
          textAlign: "center"
        }}
      >
        {title || "Dashboard"}
      </header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--kopi-dark)",
          padding: "0 36px",
          minHeight: 56,
          width: "100%",
          maxWidth: 1160,
          margin: "0 auto",
          boxSizing: "border-box",
          fontFamily: "Helvetica, sans-serif"
        }}
      >
        <div style={{ display: "flex", gap: "24px" }}>
          <Link
            href="/admin/dashboard"
            style={{
              ...navLink,
              background: "var(--kopi-main)"
            }}
          >
            Beranda
          </Link>
          <Link
            href="/admin/menu"
            style={{
              ...navLink,
              background: "var(--kopi-main)"
            }}
          >
            Menu
          </Link>
        </div>
        <div>
          <Link
            href="/admin/logout"
            style={{
              ...navLink,
              background: "#8b1e03"
            }}
            method="post"
            as="button"
          >
            Logout
          </Link>
        </div>
      </nav>
      <main
        style={{
          flex: 1,
          padding: "42px 18px 32px 18px",
          maxWidth: 1160,
          margin: "0 auto",
          width: "100%"
        }}
      >
        <div
          className="card"
          style={{
            background: "var(--kopi-dark)",
            borderRadius: 20,
            boxShadow: "0 6px 44px #9a765233",
            padding: 32,
            minHeight: 370
          }}
        >
          {children}
        </div>
      </main>
      <footer
        style={{
          textAlign: "center",
          color: "var(--kopi-light)",
          background: "var(--kopi-dark)",
          padding: "18px",
          fontSize: 16,
          fontFamily: "Helvetica, sans-serif"
        }}
      >
        &copy; {new Date().getFullYear()} Moku Coffee Admin Panel
      </footer>
    </div>
  );
}

export default AdminLayout;
