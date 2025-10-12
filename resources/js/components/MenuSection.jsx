import React from 'react';
import './MenuSection.css';

const MenuSection = ({ menuItems }) => (
  <section id="menu" className="menu-section">
    <div className="menu-container">
      <div className="menu-header">
        <h2 className="menu-header-title">OUR MENU</h2>
        <p className="menu-header-desc">Explore our delicious coffee selections.</p>
      </div>
      <div className="menu-list">
        {menuItems && menuItems.length > 0 ? (
          menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-image-container">
                {item.image ? (
                  <img
                    src={`/storage/${item.image.startsWith('menus/') ? item.image : `menus/${item.image}`}`}
                    alt={item.title}
                    className="menu-photo"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div className="menu-photo menu-photo-empty">Tidak ada gambar</div>
                )}

                {/* Overlay muncul saat hover */}
                <div className="menu-overlay">
                  <h3 className="menu-item-title">{item.title}</h3>
                  <p className="menu-item-desc">{item.description}</p>
                  <p className="menu-item-price">
                    Rp {item.price && Number(item.price).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="menu-empty">Belum ada menu tersedia.</div>
        )}
      </div>
    </div>
  </section>
);

export default MenuSection;
