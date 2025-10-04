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
        {menuItems && menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.title} className="menu-photo" />
            <h3 className="menu-item-title">{item.title}</h3>
            <p className="menu-item-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
