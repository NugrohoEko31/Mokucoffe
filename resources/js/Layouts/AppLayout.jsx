import React from 'react';

export default function AppLayout({ children }) {
    return (
    <div>
        <nav>Navbar Company Profile</nav>
        <main>{children}</main>
    </div>
    );
}
