import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";

function StatBox({ label, value }) {
  return (
    <div
      style={{
        flex: "1 1 200px",
        background: "var(--kopi-light)",
        borderRadius: "10px",
        boxShadow: "0 2px 4px #e3e6ed",
        padding: "28px 18px",
        textAlign: "center"
      }}
    >
    </div>
  );
}

export default function Dashboard() {
  return (
    <AdminLayout title="Panel Admin">
      <h2 style={{ 
        fontSize: "2rem", 
        marginBottom: "8px", 
        color: "var(--kopi-light)",
        textAlign:"center", }}
        >Selamat Datang di Dashboard Moku Coffe</h2>

      <h2 style={{ 
        color: "var(--kopi-light)", 
        marginBottom: "20px",
        textAlign: "center",}}>
        Selamat mengelola konten website Moku Coffe Anda dari panel admin ini.
      </h2>
    </AdminLayout>
  );
}
