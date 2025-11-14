import React from 'react';
import MenuSectionCard from './MenuSectionCard';
import { Link } from '@inertiajs/react';
import bgWave from '../assets/Background Putih.jpg'; // path ke file motif background
import './MenuSection.css';

const MenuSection = ({ menuItems = [], onSeeAll }) => (
  <section
    id="menu"
    className="menu-section"
    style={{
      backgroundImage: `url(${bgWave})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="menu-content-wrapper">
      <div className="menu-header-left">
        <div className="menu-header-title">
          Menu Kami
        </div>
        <p className="menu-header-desc">Jelajahi menu terbaik kami</p>
      </div>
      <div className="menu-list-right">
        <div className="menu-list">
          {menuItems.length === 0 ? (
            <div className="menu-empty">Belum ada menu tersedia.</div>
          ) : (
            menuItems.slice(0, 3).map(item => (
              <MenuSectionCard key={item.id} item={item} />
            ))
          )}
        </div>
        <div className="lihat-semua-btn-wrapper">
          {onSeeAll ? (
            <button className="lihat-semua-btn" onClick={onSeeAll}>
              Lihat Semua →
            </button>
          ) : (
            <Link href="/AllMenuSection" className="lihat-semua-btn">
              Lihat Semua →
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default MenuSection;
