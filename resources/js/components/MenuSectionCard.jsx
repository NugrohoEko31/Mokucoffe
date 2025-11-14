import React from 'react';

export default function MenuSectionCard({ item }) {
    return (
        <div className="menu-item-card">
        <img
            src={item.image.startsWith('http') ? item.image : `/storage/${item.image}`}
            alt={item.title}
            className="menu-photo"
        />
        <div className="menu-card-content">
            <div className="menu-title-row">
            <span className="menu-item-title">{item.title}</span>
            {Boolean(item.is_recommended) && <span className="menu-star">★</span>}
            </div>
            <div className="menu-item-desc">{item.description}</div>
        </div>
            <div className="menu-item-price">
            Rp. {Number(item.price).toLocaleString('id-ID')}
            </div>
        </div>
    );
}
