    import React from 'react';
    import bgMenu from '../assets/Background Putih.jpg';
    import MenuSectionCard from '../components/MenuSectionCard';
    import '../components/MenuSection.css';
    import UserLayout from '../Layouts/UserLayout';

    export default function AllMenuSection({ menuItems = [] }) {
        return (
            <UserLayout>
            <section
                className="menu-section-all"
                style={{
                backgroundImage: `url(${bgMenu})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                position: 'relative',
                zIndex: 1
                }}
            >
                <h2 className="menu-header-title-all">Menu Kami</h2>
                <div className="menu-list-all">
                {menuItems.length === 0 ? (
                    <div className="menu-empty">Belum ada menu tersedia.</div>
                ) : (
                    menuItems.map(item => (
                    <MenuSectionCard key={item.id} item={item} />
                    ))
                )}
                </div>
            </section>
            </UserLayout>
        );
    }
