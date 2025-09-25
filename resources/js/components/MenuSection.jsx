import React from 'react';
import './MenuSection.css';
import LatteImage from '../assets/Latte.png';
import EspressoImage from '../assets/Espresso.png';
import CappuccinoImage from '../assets/Cappucino.png';  // Perbaiki typo: 'Cappucino' -> 'Cappuccino'
import MochaImage from '../assets/Mocha.png';

const MenuSection = () => {
  // Data menu berisi foto, judul, dan deskripsi
  const menuItems = [
    {
      id: 1,
      title: "Coffee Latte",
      description: "Creamy and rich espresso with steamed milk.",
      image: LatteImage
    },
    {
      id: 2,
      title: "Espresso",
      description: "Strong and bold espresso shot.",
      image: EspressoImage
    },
    {
      id: 3,
      title: "Cappuccino",
      description: "Espresso with frothed milk foam.",
      image: CappuccinoImage
    },
    {
      id: 4,
      title: "Mocha",
      description: "Chocolate flavored coffee with whipped cream.",
      image: MochaImage
    }
  ];

  return (
    <section id="menu" className="menu-section">
        <div className="menu-container">
            <div className="menu-header">
            <h2 className="menu-header-title">OUR MENU</h2>
            <p className="menu-header-desc">Explore our delicious coffee selections.</p>
            </div>
            <div className="menu-list">
            {menuItems.map(item => (
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
};

export default MenuSection;
